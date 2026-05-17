---
title: Set Up Your Company
last_verified: 2026-05-09
---

# Set Up Your Company

The first time you sign in, MyCompanyDesk runs you through a **setup wizard** at `/setup`. It is five short steps, asks you the minimum it needs, and uses the answers to seed the rest of your workspace — branding, default categories, VAT regime, a starter website. You can always re-run it later to tweak.

## Where to find it

- **First sign-in:** the wizard opens automatically.
- **Later:** there is a "Finish setup" banner pinned to the top of `/dashboard` until you complete it. Click the banner, or go to `/setup` directly.
- **After completion:** revisit `/setup` any time to re-run with diff-and-approve. Re-running starts at step 1 and shows you exactly what will change before you confirm.

There is also a **Skip for now** button on every step. Skipping leaves the banner on `/dashboard` and brings you back later.

## Step 1 — Business

Two questions:

- **Business name** — What appears on invoices and in the sidebar.
- **What you do** — One or two sentences. The wizard feeds this to Gemini in the Magic step to generate your tagline, services list, and email tone.

The business name is also the seed for the registry lookup (step 2) and the subdomain slug (step 3), so spelling matters.

## Step 2 — Registry

Tell us where you are registered. The country picker drives which official registry the wizard talks to:

| Country | Registry | Lookup |
|---|---|---|
| Netherlands | KvK | Yes |
| Germany | Handelsregister | Manual entry only |
| France | SIRENE | Yes |
| United Kingdom | Companies House | Yes |
| Other | — | Manual entry only |

For supported countries, type your registration number and click **Look up**. The wizard auto-fills:

- Legal name
- Registered address
- Sector / SBI code

For Dutch businesses (KvK), the lookup also pulls full company details from the KvK Basisprofiel: statutory name, trade names, legal form, founding date, visiting and postal addresses, SBI activities, and employee count. This richer data is 24h-cached per lookup.

You can correct any of these inline before continuing. **Not registered yet** is also a valid answer — just tick "Skip" and the wizard will accept the country alone.

## Step 3 — Domain

Where customers find you on the web. Two paths:

### Free subdomain

The wizard suggests a slug from your business name (lowercased, dashes for spaces, ASCII only) and pins it to:

- `<slug>.mycompanydesk.nl` for NL workspaces
- `<slug>.mycompanydesk.com` for everyone else

Edit the slug if you want. Availability is checked live.

### Your own domain

Type it in (`example.com`). The wizard records the choice; on **Finish**, MyCompanyDesk creates the Cloudflare configuration and shows you the DNS records to add. Until you point your nameservers, the website stays parked on the subdomain.

### Personal mailbox

Optional. If enabled, also creates a personal `firstname@<your-domain>` address routed to your inbox. Default local-part is your first name; edit if you want.

## Step 4 — Magic

The wizard generates branding suggestions in the background while you watch:

- **Brand colour** — Extracted from your uploaded logo, or a Gemini-picked palette based on sector.
- **Logo** — Use your uploaded one, or have the wizard render initials in your brand colour.
- **Tagline** — Short pitch line.
- **About text** — Two paragraphs for the website and customer portal.
- **Services list** — Three to six items pulled from your "what you do" answer and the website (if you gave one).
- **Email tone** — Formal, friendly, or casual. Drives default email templates.

Every suggestion is editable. If Gemini is unreachable, a localised fallback ships you a sensible starter set so you can keep going.

## Step 5 — Review

A diff-and-approve list of everything the wizard will change on **Finish**, split into:

- **Will change** — Field-by-field "current → new".
- **No change** — Fields the wizard captured but match what you already have.

Click **Finish** and the wizard applies everything in one transaction. The Finish splash shows what got applied: subdomain ready, custom-domain DNS pending, logo created, services added, email templates set. On a free plan, the splash also shows your monthly headroom (invoices / expenses / quotes left this period).

Where you land after Finish:

- **Custom domain still needs DNS** — `/workspace/organization/company/address` to copy nameservers.
- **Anything else** — Back to `/dashboard`.

## What gets seeded

Based on your wizard answers, the workspace is pre-populated with:

| From | Seeded |
|---|---|
| Country | Default currency (EUR, USD, GBP), VAT regime (NL VAT / DE UStG / FR TVA / GB VAT / none), invoice number locale, working-week defaults |
| Sector | Expense category list (drawn from a sector-aware preset table — construction, consulting, retail, hospitality, etc.) |
| Registry | Legal name and registered address on `companies` |
| Brand colour + logo | Invoice PDF accent, customer portal, public website, email signature |
| Tagline + about + services | `/business/<slug>` public website |
| Email tone | Default templates for invoice-sent, reminder, thank-you |

Default VAT rates are not invented — they come from the country's official rate table (e.g. NL: 21 / 9 / 0).

## Re-running and editing later

The wizard is non-destructive: re-running shows you exactly what will change before you commit, so it is safe to revisit when something needs tweaking.

You can also edit the underlying fields directly without re-running:

- **Company name, legal name, address, KvK number** — `/workspace/organization/company/about`
- **Logo, brand colour, tagline** — `/workspace/organization/company/look`
- **Subdomain and custom domain** — `/workspace/organization/company/address`
- **Public website content (services, about)** — `/workspace/organization/company/website`
- **VAT regime, default currency, working week** — `/workspace/financial/...`
- **Expense categories** — `/workspace/financial/categories`

## Next steps

Your company is set up. Time to [create your first invoice](/getting-started/first-invoice).
