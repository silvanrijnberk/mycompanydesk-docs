---
title: Domains, Website, and Inbox
last_verified: 2026-05-09
---

# Domains, Website, and Inbox

> **Status: pre-launch.** All three features in this page roll out together as a single bundle. They are gated by the `custom_domains` and `public_business_page` feature flags and are still being onboarded onto the public plans. Behaviour described here matches the codebase as of 2026-05-09; if a screen looks different in your workspace, the bundle has not been enabled there yet.

Custom domains, the hosted business website, and the shared email inbox ship as one product. The reason: they share state. The same `domains` row that proves you control `acme.nl` also makes `acme.nl` your website's URL and lets `info@acme.nl` start receiving mail. There is one onboarding flow, one settings tree, and one place in the app to manage all of it.

## The bundled value

Add a domain once and you get three things:

- **A custom address.** Your business lives at `acme.nl` instead of `acme.mycompanydesk.com`.
- **A live website.** The hosted business page is automatically published on the verified domain.
- **A working inbox.** `info@acme.nl`, plus `support@`, `sales@` and a send-only `noreply@` alias, start catching mail and sending replies.

You can run the bundled flow from the [Setup wizard](/getting-started/company-setup) (`/setup`, the "Your web address" step), or piece-by-piece from `Company › Your own .com address` and the Inbox.

## One onboarding flow

The wizard step at `/setup` is the recommended entry point. It applies through `apply.service.js → activateSubdomain | addDomain → quickEnableInbox` in a single submit, so the user answers a few questions and the platform wires everything underneath.

### Step 1 — Add a domain

Two paths in the wizard, both stored on the `domains` table:

- **Free workspace subdomain** — `your-slug.mycompanydesk.com` (or `.nl` for NL workspaces). No DNS work; the slug is registered as a Cloudflare Pages custom domain and the website is live within seconds. This is the default for new workspaces.
- **Your own domain** — paste `acme.nl`. Two setup modes are supported:
  - **Nameserver mode** (recommended) — a Cloudflare zone is created for the domain. You change your registrar's nameservers to the two `*.ns.cloudflare.com` hostnames the wizard shows. Cloudflare becomes authoritative DNS for the domain, which is what unlocks email, SSL and DNS-record management inside MyCompanyDesk.
  - **CNAME mode** — for subdomains only (e.g. `portal.acme.nl`). You add a single CNAME record pointing at `mycompanydesk-app.pages.dev`. No nameserver change. Email routing is not available in this mode.

Adding a custom domain automatically deactivates the workspace subdomain — there is one canonical website per company, never two.

### Step 2 — Verify

Verification runs both on demand and on a poll. The detail page exposes a **Verify** button (`POST /api/domains/:id/verify`), and a background job re-checks every pending domain at intervals.

- **Nameserver mode** is verified once Cloudflare reports the zone as `active`. The status moves `pending_nameservers → pending_verification → active`. The user is notified via the in-app notification bell when the flip happens.
- **CNAME mode** is verified by resolving the CNAME and confirming it points at the Pages target. Status moves `pending_cname → active`.

### Step 3 — SSL

SSL is provisioned by Cloudflare automatically once the zone is active. The default mode is **Full (strict)**; you can change it from `Domain detail › SSL` (`off / flexible / full / strict`). The certificate-status field on the SSL panel mirrors Cloudflare's verification result.

### Step 4 — Website goes live

The hosted business page (see [Site Builder](/advanced/business-page)) is automatically published at the domain root once the zone is active. The wizard's `getBusinessPageUrl` resolver returns, in priority:

1. A custom domain with `business_page_enabled = true` → `https://acme.nl`
2. A custom domain with `portal_subdomain_enabled = true` → `https://portal.acme.nl`
3. The workspace subdomain → `https://acme.mycompanydesk.com`
4. The fallback portal route (`/portal/<slug>`) when nothing else is configured.

### Step 5 — Inbox catches mail

For nameserver-mode custom domains, the wizard runs `quickEnableInbox` after verification. That call is idempotent and does the following:

- Provisions the sending subdomain (`mail.acme.nl`) and writes the DKIM and SPF DNS records.
- Sets a Cloudflare Email Routing catch-all rule on the zone, pointed at the `inbox-inbound` Worker.
- Inspects the apex MX records. If they are empty or already point at Cloudflare, the wizard installs the Cloudflare MX. If a third-party provider (Google Workspace, Microsoft 365) is already there, the wizard refuses to overwrite and surfaces a `conflict` warning so you can decide.
- Creates `info@acme.nl` as the default shared mailbox.
- Provisions `support@` and `sales@` as bidirectional aliases of `info@`, and `noreply@` as a send-only alias (allowed in From, dropped on inbound).
- Optionally creates a personal mailbox (`silvan@acme.nl`) when you ticked the box in the wizard.

## Per-feature reference

### Custom domains

UI lives at `Company › Your own .com address` — the leaf page is `/workspace/organization/company/address`, mounted from `apps/web/pages/workspace/organization/company/address.vue` and rendering the `SettingsDomains` component. The two older paths `/workspace/organization/domains` and `/workspace/communication/domains` redirect here.

What the page lets you do:

- **Add a domain** (nameserver or CNAME mode).
- **Verify** a pending domain.
- **Manage DNS records** — A, AAAA, CNAME, MX, TXT, SRV, CAA, NS. CRUD goes through Cloudflare via the API.
- **SSL** — view certificate status, change SSL mode.
- **URL redirects** — three free Cloudflare Page Rules per zone. Source pattern + destination + 301/302.
- **Email security** — SPF/DMARC/DKIM check with a one-click "fix" that writes safe defaults (`v=spf1 ~all`, `v=DMARC1; p=quarantine; …`).
- **Quick settings** — toggle Cloudflare Development Mode, toggle "Under attack" security level, purge cache.
- **Analytics** — last 30 days of requests, bandwidth, threats, visitors, pageviews. The current Cloudflare Analytics endpoint is sunset; the page renders an empty `unavailable` state until the GraphQL migration lands.
- **Remove** — soft-deletes the row (`status = 'removed'`) and tears down the Cloudflare zone (or the Pages domain in CNAME mode).

#### `domains` table — the shared state

Notable columns the app reads from:

| Column | Purpose |
|---|---|
| `domain_name` | The hostname, e.g. `acme.nl`. |
| `setup_mode` | `nameserver` (full delegation) or `cname` (single subdomain). |
| `status` | `pending_nameservers`, `pending_verification`, `pending_cname`, `active`, `failed`, `removed`. |
| `cloudflare_zone_id` | Set in nameserver mode. Drives DNS, SSL, redirects, analytics, email-routing. |
| `nameserver_1`, `nameserver_2` | Shown to the user during nameserver setup. |
| `cname_hostname`, `cname_target` | Set in CNAME mode. |
| `email_routing_enabled` | `true` once the Cloudflare Email Routing zone is enabled. |
| `inbox_enabled`, `inbox_subdomain_tag`, `inbox_dkim_ready` | Flipped by `quickEnableInbox`. The mail-sending subdomain (`mail.acme.nl` by default) and DKIM provisioning state. |
| `business_page_enabled`, `portal_subdomain_enabled` | Determine which hostname serves the public website. |
| `verified_at` | Set when verification succeeds. |

### Hosted website

The site builder lives at `Company › Your website` (`/website`). It is a full multi-page editor with sections, blocks, design tokens, and publish snapshots. The public face is served from your custom domain (or workspace subdomain / fallback portal route) once published.

What the editor surfaces:

- **Editor tab** — Compose pages by adding and arranging sections (hero, text, gallery, services, team, testimonials, contact form, pricing, product, custom HTML). Inspect and edit section content, layout, style, and animation. Pricing tiers can optionally carry a buy button that redirects to Mollie or Stripe Connect checkout. Each tier has a configurable VAT rate (21%, 9% or 0%), with the price shown to the customer being the final price, VAT included. The product block is a single-item buy card with the same payment plumbing.
- **Pages tab** — Create, rename, delete, and filter pages by status (live, draft, scheduled). Pick a template when creating a new page.
- **Style tab** — Design tokens for colors, fonts, scale, motion, buttons, custom CSS, and head snippets (analytics, font preconnects).
- **Domain & SEO tab** — Custom domain management. See the custom domains section above.
- **Integrations tab** — Connect payment processors (Mollie, Stripe Connect) with inline setup cards, plus third-party services like Mailchimp, Plausible and Trustpilot. The same payment connection powers pay buttons on invoices; see [Money settings](/workspace/financial/money/payments) for the full configuration.
- **Navigation editor** — Drag-and-drop reorder of header links, with dropdown groups and external links.
- **Publish button** — Shows unpublished change count. Pushes a snapshot live with one click.
- **Responsive preview** — Toggle desktop, tablet, and mobile viewports in the editor.

The public site is served at the highest-priority URL the company owns: custom domain root → workspace subdomain → fallback `/portal/<slug>` route.

See [Site Builder](/advanced/business-page) for the full editor guide.

### Email inbox

The inbox is a top-level surface at `/inbox` (`apps/web/pages/inbox/index.vue`). Backend lives in `apps/api/src/modules/inbox/*` and writes to a separate set of tables (`company_email_domains`, `company_mailboxes`, `email_threads`, `email_messages`, `email_attachments`, `email_events`).

Capabilities:

- **Threading** — inbound mail is grouped into threads keyed by RFC 822 `Message-ID` / `In-Reply-To` / `References`. Each thread carries `last_message_preview`, `participants`, status (`open / snoozed / closed / spam`) and labels.
- **Reply** — inline reply box on the thread. Smart `From` picks the address the original mail was sent to, so a customer who emailed `support@acme.nl` gets a reply from `support@`, not `info@`.
- **Compose** — drawer form with mailbox picker, send-as picker, customer picker (or freeform `To`), subject, body, attachments. Bounced-recipient warning is shown before send.
- **Send-as aliases** — `info@`, `support@`, `sales@` are bidirectional aliases on the same mailbox. `noreply@` is send-only — selectable as From, but inbound mail to it is dropped on ingest.
- **Attachments** — upload before send (compose and reply both). Attachments on inbound mail are downloadable from the message; signed download URLs expire after a short TTL.
- **Alias notice** — when an inbound message arrives at an address that isn't yet a declared alias, the thread shows a soft notice with an "Add as alias" action.
- **Linking** — threads can be linked to a customer, project or invoice for cross-referencing.
- **Catch-all fallback** — mail to any local-part on the domain falls through to the default mailbox (`is_default = true`, one per domain). This means typos and undeclared aliases don't vanish silently.
- **Audit log** — outbound sends, mailbox changes and thread state changes are recorded in an audit table for the workspace. Currently API-only (no UI surface yet) — accessible to support staff for troubleshooting.

The inbox uses your custom domain only after `quickEnableInbox` has run successfully and the apex MX records point at Cloudflare. Until then, the workspace can still send mail through the default delivery path described in [Email Integration](/settings/email), but it can't receive mail.

### Sales

When you add buy buttons to pricing tiers or a product block on your public site, every completed payment creates a sale record. Track them at **Money > Sales** (`/workspace/financial/money/sales`).

What the sales log shows:

- A chronologically ordered list of all purchases made through your site.
- The payment processor (Mollie or Stripe Connect) and the payment status (`paid`, `pending`, `failed`, `expired`, `refunded`).
- The originating section (which pricing tier or product block was purchased).
- Customer email, amount paid, and currency.

Sales records are created by the public checkout endpoint (`POST /public/sites/:slug/checkout`), which validates the section, creates a payment through the connected processor, and redirects the buyer to the hosted checkout page.

Paid sales show an action menu (three dots) with two options:

- **Regenerate invoice.** Re-creates the linked invoice if it was lost or not generated during the purchase. Safe to run even if the invoice already exists.
- **Refund.** Returns the full amount to the customer through the original payment processor (Mollie or Stripe). A credit note is automatically created against the linked invoice for your bookkeeping. Only available for paid sales.

### Post-purchase flow

When a payment completes, the platform automatically runs the following steps. Everything runs fire-and-forget: failures are logged and do not affect the payment status the buyer sees.

1. **Invoice generated.** An invoice is created from the sale, with the product name, price and the buyer's email. The price you set in the editor is the final customer price, VAT included. The invoice line splits this into an ex-VAT amount and the VAT rate you configured on the pricing tier or product block (default 21%). If the buyer's email matches an existing customer in your workspace, the invoice is linked to that customer. Otherwise a minimal customer record is created. The invoice is finalised immediately (status `sent`) since payment was already received.
2. **Payment recorded.** A payment record is created on the invoice through the standard payment service. The payment method is set to the processor (Mollie or Stripe), and the reference includes the processor session ID for audit trails.
3. **Customer receipt.** The buyer receives a confirmation email with the product name, amount and payment method. If an invoice was generated, the email includes a secure portal link to view and download the invoice PDF.
4. **Owner notified.** You get an in-app notification and an email summary of the sale: product, amount, customer email, and a direct link to the invoice.

The checkout-success and checkout-cancelled pages show the buyer a branded result screen that uses your site's design tokens (colors) so the page stays on-brand.

## Sending mail vs receiving mail

This bundle is the **receiving** side. Outgoing email — invoice delivery, reminders, quote sends — is handled by the broader email pipeline described in [Email Integration](/settings/email). Once a domain is verified and the inbox is enabled, the same domain is used as the From address for outbound mail too, with DKIM signing on `mail.acme.nl`.

## Limits and gotchas

- **One website per company.** Adding a custom domain deactivates the workspace subdomain. Removing the domain doesn't auto-revive the slug — re-activate it manually if you want to fall back.
- **CNAME mode has no email.** Email routing requires a full Cloudflare zone, which only nameserver mode provides.
- **The wizard refuses to overwrite an existing third-party MX.** If your apex already points at Google Workspace or Microsoft 365, `quickEnableInbox` returns `apexMx.status = 'conflict'` and you have to choose: migrate MX to Cloudflare, or stay on your existing provider and skip the bundled inbox.
- **Reserved subdomains.** `app`, `admin`, `api`, `www`, `mail`, `support`, `portal`, `dashboard` and a handful of others are blocked at the workspace-slug level.
- **Pre-launch.** The bundle is feature-gated by `custom_domains` and `public_business_page`. Workspaces without those flags see the upgrade prompt instead of the editor.

## Related

- [Setup wizard](/getting-started/company-setup) — the magical onboarding that drives the bundled flow.
- [Email Integration](/settings/email) — outgoing email, send-as picker, delivery tracking.
- [Site Builder](/advanced/business-page) — the full editor guide.
- [Company Settings](/settings/company) — the umbrella that hosts About / Look / Website / Address.
- [Billing & Plans](/settings/billing) — feature flags that gate the bundle.