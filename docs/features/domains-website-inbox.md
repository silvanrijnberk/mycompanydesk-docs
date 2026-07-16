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

- Provisions the CF Email Sending identity on the bare apex domain (`acme.nl` by default) and writes the DKIM and SPF DNS records. Passing an explicit subdomain label provisions `<label>.<domain>` instead (e.g. `mail.acme.nl`).
- Sets a Cloudflare Email Routing catch-all rule on the zone, pointed at the `inbox-inbound` Worker.
- Inspects the apex MX records. If they are empty or already point at Cloudflare, the wizard installs the Cloudflare MX. If a third-party provider (Google Workspace, Microsoft 365) is already there, the wizard refuses to overwrite and surfaces a `conflict` warning so you can decide.
- Creates `info@acme.nl` as the default shared mailbox.
- Provisions `support@` and `sales@` as bidirectional aliases of `info@`, and `noreply@` as a send-only alias (allowed in From, dropped on inbound).
- Optionally creates a personal mailbox (`silvan@acme.nl`) when you ticked the box in the wizard.

## Per-feature reference

### Custom domains

The free `.nl` domain is a reward for a paid Pro subscription, not a trial perk. A workspace must be on paid Pro to claim it; a Pro trial sees the offer but can only submit the claim after upgrading to paid Pro. The domain is registered directly in the customer's name from day one, gated by the `DOMAIN_FREE_CLAIM_PAID_ONLY` flag, so there is no MCD-held phase. The first year is included, and the domain keeps renewing free as part of the Pro subscription for as long as the workspace stays on paid Pro.

UI lives at `Website › Domein & SEO` -- the page is `/website?tab=domein`, rendering the `SettingsDomains` component. The older paths `/workspace/organization/company/address`, `/workspace/organization/domains`, and `/workspace/communication/domains` all redirect here.

The page splits into two sections:

- **Pending domains**: Domains still being verified always appear at the top, regardless of the topbar domain switcher state. This lets you reach verification instructions for newly added domains before they become active.
- **Active domain panel**: DNS, SSL, redirects, analytics, security, and SEO tabs are scoped to the domain selected in the topbar domain switcher (accessible from the site builder at `/website`). Selecting the default site (shown as your workspace name in the switcher) hides the per-domain panel entirely. Switching domains resets the active tab to Routing.

The page defaults to a clean view with the most commonly needed tabs. Six power-user tabs are hidden unless you turn on **Advanced Mode**. Those tabs are: DNS, SSL, Redirects, Analytics, Quick Settings, and Security. Advanced mode is a per-device switch on the **Weergave** (display) page in settings; see the [Settings overview](/settings/).

What the page lets you do:

- **Buy or claim a domain** via the domain purchase card. Enter a domain name, check availability against OpenProvider, and either buy it or claim it free if your workspace qualifies for the free `.nl` claim.
- **Add a domain** (nameserver or CNAME mode) via a dedicated card that is always visible.
- **Verify** a pending domain.
- **Manage DNS records** for the selected active domain -- A, AAAA, CNAME, MX, TXT, SRV, CAA, NS. CRUD goes through Cloudflare via the API.
- **SSL** for the selected domain -- view certificate status, change SSL mode.
- **URL redirects** for the selected domain -- three free Cloudflare Page Rules per zone. Source pattern + destination + 301/302.
- **Email security** for the selected domain -- SPF/DMARC/DKIM check with a one-click "fix" that writes safe defaults (`v=spf1 ~all`, `v=DMARC1; p=quarantine; …`).
- **Quick settings** for the selected domain -- toggle Cloudflare Development Mode, toggle "Under attack" security level, purge cache.
- **Analytics** for the selected domain -- last 30 days of requests, bandwidth, threats, visitors, pageviews. The current Cloudflare Analytics endpoint is sunset; the page renders an empty `unavailable` state until the GraphQL migration lands.
- **Remove** the selected domain -- soft-deletes the row (`status = 'removed'`) and tears down the Cloudflare zone (or the Pages domain in CNAME mode).

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
| `inbox_enabled`, `inbox_subdomain_tag`, `inbox_dkim_ready` | Flipped by `quickEnableInbox`. The CF Email Sending identity (apex domain by default; `mail.acme.nl` when a subdomain label is given) and DKIM provisioning state. |
| `business_page_enabled`, `portal_subdomain_enabled` | Determine which hostname serves the public website. |
| `verified_at` | Set when verification succeeds. |
| `registrar` | The registrar service, currently `openprovider` for domains purchased through the buy-a-domain flow. |
| `registrar_domain_id` | The registrar-side identifier for purchased domains. |
| `purchase_price_period` | Billing period for purchased domains (`yearly`). |
| `purchase_intent_id` | Links to the `domain_purchase_intents` row for paid purchases. |
| `founder_claim_id` | Links to the `founder_domain_claims` row for free-domain claims. |
| `transferred_out_at` | Set when a domain is detected as transferred away from the MCD registrar account during the weekly sync. |

#### Renewal lifecycle

Domain renewal follows three paths depending on how the domain was acquired:

1. **Free bundled renewal** (the free `.nl` claim on paid Pro, or a legacy free-for-life arrangement): MCD absorbs the wholesale renewal cost. The domain auto-renews as long as the workspace stays on paid Pro. No payment method needed.
2. **Paid auto-renewal** (paid purchase): Charged annually via the saved card. Works like any subscription renewal.
3. **Manual renewal**: If a workspace with a free-claimed domain falls off paid Pro AND has no saved card, the auto-renewal path skips it. The user sees a notification and can trigger a one-off payment via `POST /api/domains/renew/:domainId`, which creates a Stripe Embedded Checkout session for the renewal. This is the only way to keep a domain alive without an active subscription or saved card.

#### Transfer consequences

Transferring a domain registered through MyCompanyDesk to another registrar has permanent consequences, enforced by the weekly OpenProvider status sync:

- **Legacy free-for-life domains**: The free claim is deleted, and the workspace's internal lifetime-Pro grant is cancelled. The workspace becomes a regular paid customer. This is irreversible; the grant cannot be reclaimed.
- **Free `.nl` claim domains**: The domain is registered directly in the customer's name from day one, so there is no MCD-held phase to lose. Transferring away from MCD's registrar account ends the free bundled renewal and permanently blocks the workspace from claiming another free domain (enforced via the retained-claims list).
- **Paid domains**: No perk revocation. The domain simply moves to `status = 'transferred_out'`.

The claim modal warns about these consequences before a free-domain claim is submitted, and requires explicit acknowledgement from the user. Revocation details are recorded in the `domain_perk_revocations` audit table for support reference.

#### Buy or claim a domain

The domain purchase card (`DomainPurchaseCard.vue`, `domain-purchase.service.ts`) is the first card on the Domains settings page. It appears when the workspace has no active custom domain yet. The card lets the user pick and acquire a domain through two paths, both opening a dedicated two-step purchase modal (`DomainClaimModal.vue`). Step 1 collects registrant details (the data required by the registrar for WHOIS). Step 2 handles payment or claim submission:

- **Buy** -- Paid purchase via OpenProvider. The user enters a domain name, the card calls `GET /api/domain-purchase/quote` to check availability and pricing, and then opens the purchase modal. After collecting the registrant details, the modal calls `POST /api/domain-purchase/checkout-session` to create a Stripe payment session and mounts Stripe Embedded Checkout for the payment. Once complete, `POST /api/domain-purchase/finalize` registers the domain with OpenProvider and creates the `domains` row in nameserver mode, wired to Cloudflare.
- **Free claim** -- Eligible workspaces on paid Pro can claim one `.nl` domain free of charge for the first year, as a reward for the paid subscription. A workspace still on the Pro trial sees the offer as a preview and cannot submit the claim yet; it can claim once it upgrades to paid Pro. The card calls `GET /api/domain-purchase/free-domain/eligibility` to check the workspace's claim tier and gate status. The modal collects the registrant details, and on submit calls `POST /api/domain-purchase/free-domain/claim`. The platform pays the first-year registration fee.

Free claims differ from paid purchases in how they are registered and renewed:

- **Free `.nl` claim** -- Workspaces on paid Pro. The domain is registered directly in the customer's name from day one; there is no MCD-held phase. The first year is free, and it keeps renewing free as part of the Pro subscription for as long as the workspace stays on paid Pro. If the workspace stops paying Pro, the domain falls onto the paid or manual renewal path described under Renewal lifecycle.
- **Paid tier** -- Standard domains purchased at full price. Renewal is charged via the saved payment method on the annual cycle. If the charge fails, a manual-renewal notification is sent.
- **Legacy free-for-life tier** -- A small number of legacy workspaces retain free Pro and lifetime-free domain renewal under earlier arrangements. No payment method is required; renewal is handled automatically by the platform, with MCD absorbing the wholesale cost. This tier is closed and cannot be requested.

The eligibility endpoint (`GET /api/domain-purchase/free-domain/eligibility`) returns a `tier` field alongside the gate report. It does not expose any remaining-claim count.

Eligibility is determined by a set of hard gates checked server-side:

- **Paid Pro workspace** -- the workspace must be on *paid* Pro. Workspaces on Free cannot claim, and a Pro trial cannot claim either: it sees the offer as a preview and unlocks the claim once it converts to paid Pro.
- **KVK required** -- the workspace must have a linked KVK number.
- **Domain must be `.nl`** -- the free program only covers the NL TLD.
- **Domain must match the KVK name** -- the domain must correspond to the registered legal name or a trade name.
- **KVK must not be on the retained-claims list** -- one free domain per KVK number. A KVK that has already claimed (and then transferred away) a free domain is blocked permanently.

Account age and site-content quality are not hard gates. They would block legitimate onboarding-day claims, which contradicts the "set up your business in a day, domain included" pitch. Instead, both flow into the Gemini abuse score as soft signals: a brand-new account with a template site scores low and lands in manual review; a real business with real content auto-approves regardless of age. The eligibility response carries a `softSignals` block (`ageDays`, `sitePublished`, `paragraphCount`) so the UI can surface a hint without blocking the claim.

When a gate fails, the card lists the remaining requirements so the user can see what is left to unlock before the free claim becomes available.

The supported TLDs for purchase are `.nl`, `.eu`, `.com`, `.net`, and `.org`. Other TLDs show an unsupported message with a suggestion to buy the domain elsewhere and add it via the existing BYO flow.

New database tables introduced by this feature:

- `domain_purchase_intents` -- tracks paid purchase intents with Stripe PaymentIntent IDs, registrant details, and purchase status.
- `founder_domain_claims` -- tracks free-domain claims with eligibility snapshots, abuse scoring, and claim status.
- `domain_registrar_columns` migration adds registrar-related columns to the existing `domains` table.

### Hosted website

The site builder lives at `Company › Your website` (`/website`). It is a full multi-page editor with sections, blocks, design tokens, and publish snapshots. When your workspace has multiple active custom domains (Pro plan), a domain switcher in the top bar lets you edit a per-domain variant of the site. Each domain gets its own pages, navigation, design tokens, and publish snapshot. Switching domains resets the active tab. The public face is served from your custom domain (or workspace subdomain / fallback portal route) once published.

What the editor surfaces:

- **Domain switcher** (top bar) -- When more than one active domain exists, a dropdown lets you pick which site variant to edit. The default site option is labelled with your workspace name. Domains that have not been initialized yet show an "initialize" hint and clone the default site on first selection.
- **Editor tab** — Compose pages by adding and arranging sections (hero, text, gallery, services, team, testimonials, contact form, pricing, product, custom HTML). Inspect and edit section content, layout, style, and animation. Save sections as reusable blocks to build a personal library of pre-styled layouts you can drop onto any page. Pricing tiers can optionally carry a buy button that redirects to Mollie or Stripe Connect checkout. Each tier has a configurable VAT rate (21%, 9% or 0%), with the price shown to the customer being the final price, VAT included. The product block is a single-item buy card with the same payment plumbing.
- **Pages tab** — Create, rename, delete, and filter pages by status (live, draft, scheduled). Pick a template when creating a new page.
- **Style tab** — Design tokens for colors, fonts, scale, motion, buttons, custom CSS, and head snippets (analytics, font preconnects).
- **Domain & SEO tab** — Custom domain management. See the custom domains section above.
- **Integrations tab**: Connect payment processors (Mollie, Stripe Connect) with inline setup cards, plus third-party services like Mailchimp, Plausible and Trustpilot. The same payment connection powers pay buttons on invoices; see the [payment methods FAQ](/faq/payment-methods) for the full configuration.
- **Navigation editor** — Drag-and-drop reorder of header links, with dropdown groups and external links.
- **Publish button** — Shows unpublished change count. Pushes a snapshot live with one click.
- **Responsive preview** — Toggle desktop, tablet, and mobile viewports in the editor.

The public site is served at the highest-priority URL the company owns: custom domain root → workspace subdomain → fallback `/portal/<slug>` route.

See [Site Builder](/advanced/business-page) for the full editor guide.

### Email inbox

The inbox is a top-level surface at `/inbox` (`apps/web/pages/inbox/index.vue`). Backend lives in `apps/api/src/modules/inbox/*` and writes to a separate set of tables (`company_email_domains`, `company_mailboxes`, `email_threads`, `email_messages`, `email_attachments`, `email_events`).

Capabilities:

- **Threading**: inbound mail is grouped into threads keyed by RFC 822 `Message-ID` / `In-Reply-To` / `References`. Each thread carries `last_message_preview`, `participants`, status (`open / snoozed / closed / spam / deleted`) and labels. Long threads collapse the middle messages behind a "Show {n} earlier messages" pill, keeping the oldest message and the newest two visible (Gmail/Outlook convention). Click the pill to expand everything.
- **Reply** — inline reply box on the thread. Smart `From` picks the address the original mail was sent to, so a customer who emailed `support@acme.nl` gets a reply from `support@`, not `info@`.
- **Reply all**: reply to all participants on the thread with one click. The action appears next to reply in the thread header and includes every recipient from the original message.
- **Forward**: forward the entire thread to another recipient. Opens a compose drawer with the original message body and attachments preserved for editing before sending. The forwarded message header shows the original sender, date and subject.
- **CC and BCC**: CC and BCC fields are available on both compose and reply through an "Add Cc/Bcc" toggle. Addresses accept comma-separated lists or paste from clipboard. The inputs stay hidden until needed, matching the standard inbox pattern where most messages do not need them.
- **Drafts**: save partially written messages and come back to them later. Drafts are stored server-side and persist across browser sessions. Each draft carries a subject, recipient list and body. Drafts that are missing a subject show "(no subject)", and drafts without a recipient show "(no recipient)". A reply draft is indicated with a "Reply" chip in the thread list, so you can tell at a glance which thread you were mid-response on.
- **Compose**: drawer form with a unified identity picker that sets both mailbox and sender address in one control, customer picker (or freeform `To`), subject, body, CC/BCC fields and attachments. Bounced-recipient warning is shown before send.
- **Send-from aliases** — `info@`, `support@`, `sales@` are bidirectional aliases on the same mailbox. `noreply@` is send-only — selectable as From, but inbound mail to it is dropped on ingest.
- **Attachments** — upload before send (compose and reply both). Attachments on inbound mail are downloadable from the message; signed download URLs expire after a short TTL.
- **Alias notice** — when an inbound message arrives at an address that isn't yet a declared alias, the thread shows a soft notice with an "Add as alias" action.
- **Linking** — threads can be linked to a customer, project or invoice for cross-referencing.
- **Catch-all fallback** — mail to any local-part on the domain falls through to the default mailbox (`is_default = true`, one per domain). This means typos and undeclared aliases don't vanish silently.
- **Audit log** — outbound sends, mailbox changes and thread state changes are recorded in an audit table for the workspace. Currently API-only (no UI surface yet) — accessible to support staff for troubleshooting.
- **HTML email rendering**: HTML emails are rendered with their original styles intact inside a sandboxed iframe. The renderer strips scripts, forms and event handlers during sanitisation, and blocks remote images by default to protect your privacy. A notice bar appears when images are blocked, with a single-click "Show images" action that re-renders the message with images enabled. Text-only fallback displays the plain-text part when no HTML body is present.
- **Star/unstar**: mark important threads with a star for quick access. A star icon appears next to the status dot on starred threads in the thread list. The toolbar has a star button that toggles the state for the currently open thread. A "Starred" view in the left sidebar next to Open, Snoozed, Closed, Spam and Trash filters to only starred threads, backed by a partial database index for instant results.
- **Soft-delete**: threads can be moved to Trash instead of being permanently destroyed. A delete button (trash icon) appears in the toolbar for non-deleted threads. Once deleted, the button changes to a restore action that moves the thread back to `open`. The Trash filter appears in the left sidebar alongside Open, Snoozed, Closed and Spam, so you can review deleted threads before they are purged.
- **Full-text search**: a search bar above the thread list lets you search across all inbox messages by subject, body text, snippet, and sender. The search is powered by Postgres full-text search with weighted field ranking, so subject matches appear before body matches. Results are grouped by thread, with the best-matching message's snippet shown as a preview line. Supports quoted phrases, `OR`, and `-` exclusions. A 250 ms debounce keeps the UI responsive, and the loading spinner gives real-time feedback.

#### Drafts

The Drafts tab sits alongside the main thread list. Drafts are saved server-side, so they survive browser restarts and follow you across devices. When you start a new message or reply and close the compose drawer without sending, the content is automatically saved as a draft. You can also explicitly save a draft with the "Save draft" button. A draft chip shows "Reply" if the draft was started from a thread, or "New" if it is a fresh compose. Editing a draft opens the compose drawer pre-filled with the saved content. Deleting a draft requires a confirmation step.

The inbox uses your custom domain only after `quickEnableInbox` has run successfully and the apex MX records point at Cloudflare. Until then, the workspace can still send mail through the default delivery path described in [Email Integration](/settings/email), but it can't receive mail.

#### Live polling

The inbox refreshes automatically while the tab is open. The thread list polls every 45 seconds for new mail, and the sidebar badge refreshes every 60 seconds. Both pauses when the tab is hidden, so no unnecessary network traffic in the background. The polling is silent: no loading spinners flash on background refreshes, and polls are skipped entirely during an active search to keep your results stable. A manual refresh button next to Compose lets you pull the latest state instantly when you are expecting something right now; it is disabled during the in-flight call to prevent request stacking.

#### Mark as unread

You can mark any open thread as unread from the toolbar. Unlike earlier versions where the unread state was a local-only toggle that a refetch would discard, this is now persisted server-side. The sidebar badge counts unread messages, not threads with unread, and updates accordingly. The thread stays unread across page reloads, browser restarts, and devices until you open it again.

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

## Inbox tab visibility

The Inbox tab is always visible in the sidebar and bottom navigation. On free plans that do not include inbox, it appears as an upgrade hint and opens the plan comparison when selected. On paid plans the tab is always present, even before a domain has been connected, because it is the entry point to the inbox setup wizard.

For a workspace that already has an inbox-enabled domain, the tab shows the real inbox with unread counts and full thread management. For paid workspaces without an inbox-enabled domain yet, selecting the tab redirects to `/inbox/setup` so you can wire the domain and enable the inbox in one flow.

## Demo website claim

When MyCompanyDesk builds a demo website for a prospect as part of the outreach program, the prospect receives a personalised claim link (via WhatsApp or email). The claim page at `/claim/<slug>` lets the prospect take ownership of the demo workspace with their own email address and password.

### How it works

1. Sil or the outreach cron generates a demo workspace (`companies.is_demo = true`) with a 4-page trade-specific website (Home, Diensten, Over ons, Contact) built on top of every new workspace's default site foundation. Trade-aware overlays are then applied: the Home hero gets a trade tagline, the Diensten page receives a spotlight block with the trade's primary service and a services block with three trade-specific service cards, and the Contact page is populated with the prospect's phone number in the form intro and their address in the locations block.
2. The prospect receives a link like `https://app.mycompanydesk.com/claim/roofer-amsterdam`.
3. The claim page loads the demo by slug and shows the business name. If the demo workspace exists and is claimable, the prospect fills in their email and a password (minimum 8 characters, at least one letter and one digit).
4. On submit, the workspace is atomically transferred: the placeholder user is rewritten with the prospect's email and password, `is_demo` is flipped off, and the outreach row is updated with claim metadata.
5. The email is marked as verified on claim (the prospect already proved ownership of the contact method used for outreach). A welcome email is still sent so the address is in their inbox.
6. The prospect is redirected to the login page with a success message and can immediately sign in, edit their website, send invoices, and use the inbox.

### Safety guarantees

- Only `is_demo = true` workspaces can be claimed. Real customer sites are never claimable through this endpoint.
- The email must not already belong to another user on the platform.
- The claim is atomic (single database transaction), so partial transfers cannot leave a workspace in an inconsistent state.
- Claim links are invalidated once the demo is claimed, preventing reuse.

## Sending mail vs receiving mail

This bundle is the **receiving** side. Outgoing email — invoice delivery, reminders, quote sends — is handled by the broader email pipeline described in [Email Integration](/settings/email). The inbox is for receiving customer mail and composing replies; it does not route your automated invoice sends. Invoice delivery always respects your chosen delivery method under [Email Integration](/settings/email) (Gmail, Outlook, or the built-in sender). The inbox domain's DKIM is used for outbound replies composed in the inbox, not for automated transactional mail.

## Limits and gotchas

- **One website per company.** Adding a custom domain deactivates the workspace subdomain. Removing the domain doesn't auto-revive the slug — re-activate it manually if you want to fall back.
- **One live inbox per domain.** The platform allows only one workspace at a time to receive mail on a given domain. If another workspace already has an inbox enabled on `acme.nl`, your attempt to enable the inbox on the same name is blocked. Websites and CNAME-only claims are not blocked; only a live inbox is exclusive.
- **You cannot claim a zone another workspace already holds.** When you add a nameserver-mode domain, the platform checks whether the underlying Cloudflare zone is already live for a different workspace. If it is, the add is refused with a clear error so you cannot "verify" a domain off someone else's DNS.
- **Re-adding your own removed domain still works.** If your workspace previously removed a domain, the existing zone can be reused for the same workspace; the guard only blocks another workspace from taking it over.
- **CNAME mode has no email.** Email routing requires a full Cloudflare zone, which only nameserver mode provides.
- **The wizard refuses to overwrite an existing third-party MX.** If your apex already points at Google Workspace or Microsoft 365, `quickEnableInbox` returns `apexMx.status = 'conflict'` and you have to choose: migrate MX to Cloudflare, or stay on your existing provider and skip the bundled inbox.
- **Reserved subdomains.** `app`, `admin`, `api`, `www`, `mail`, `support`, `portal`, `dashboard` and a handful of others are blocked at the workspace-slug level.
- **Pre-launch.** The bundle is feature-gated by `custom_domains` and `public_business_page`. Workspaces without those flags see the upgrade prompt instead of the editor.

## Related

- [Setup wizard](/getting-started/company-setup) — the magical onboarding that drives the bundled flow.
- [Email Integration](/settings/email) — outgoing email, send-from identity picker, delivery tracking.
- [Site Builder](/advanced/business-page) — the full editor guide.
- [Company Settings](/settings/company) — the umbrella that hosts About / Look / Website / Address.
- [Billing & Plans](/settings/billing) — feature flags that gate the bundle.