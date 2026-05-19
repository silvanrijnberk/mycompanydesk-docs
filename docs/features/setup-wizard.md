---
title: Setup Wizard
last_verified: 2026-05-09
---

# Setup Wizard

A five-step magical setup at `/setup` that captures your business identity, optionally pulls your registration from KvK or an EU registry, picks a web address, generates brand suggestions, and applies everything in one click. The wizard is the front door for first-time users and stays available later for tweaks.

If you came here looking for the basic walk-through, start at [Set Up Your Company](/getting-started/company-setup). This page is the deep reference: every step, every option, every consequence.

## When the wizard is offered

The wizard is reachable two ways:

- **Direct:** navigate to `/setup` at any time.
- **Dashboard banner:** while onboarding is incomplete, a dismissable "Finish setup" banner sits at the top of `/dashboard`. It shows a count of pending fields (or a generic "complete your profile" message if the count is zero) and a button back into the wizard. A dismiss button (X icon) hides the banner per browser via localStorage, persisting across reloads until the wizard is completed.

The wizard is non-blocking: the old forced redirect to `/setup` on signup (the `ONBOARDING_MANDATORY` gate) has been removed. New signups land on `/dashboard` directly and see the dismissable banner instead.

## Page layout

The wizard is a single page (`/setup`) with five steps in a stepper. Each step writes its answers to a JSONB column (`companies.onboarding_state`) on every change, so the wizard is fully resumable: close the tab mid-step and the next visit lands you on the same step with the same answers filled in.

Three buttons sit at the bottom on every step:

- **Back** — go to the previous step (hidden on step 1).
- **Skip for now** — leaves without marking onboarding complete. The dashboard banner stays up so the user can come back.
- **Continue** / **Finish** — gated per step on the answers below.

There is no "save and exit" — saving is automatic. **Skip for now** is a clean exit, not a discard.

## Step 1 — Business

Captures the two answers every later step depends on.

| Field | Stored as | Required | Notes |
|---|---|:---:|---|
| Business name | `answers.businessName` | yes | Used as `display_name` and `company_name` on Finish (legal name from the registry step wins for `company_name` if both are present). Also seeds the subdomain slug suggestion in step 3. |
| What you do | `answers.what` | yes | Free-text, 1–2 sentences. Fed to the magic step's suggestion generator (Gemini) along with country and sector. |

**Continue is disabled** until both fields have non-empty trimmed values.

## Step 2 — Registry

Picks a country and either looks up the business in the country's official registry, fills the details in manually, or skips the step entirely.

### Three paths

1. **Search** — typeahead by company name, pick a match, and let the backend pull the Basisprofiel (EUR 0.02/call for NL). This is the primary path for supported countries.
2. **Manual** — fill in the company name, KVK number (optional), address, postal code, and city by hand. The data is saved directly to the company row via `PUT /company-settings/company` and `answers.kvk` is stamped with `manual: true`. Manual entry exists for two scenarios: (a) new companies not yet in the free OpenKVK dataset, and (b) companies whose trade name does not match what the user typed in search.
3. **Skip** — "Geen KVK-inschrijving?" (or equivalent) stores `answers.kvk = null`. The wizard continues; company data can be filled later in settings.

Switching between search and manual is a single click: a "Fill in manually" button appears below the search results, and a "Back to KVK search" link sits at the top of the manual form.

### Country options

| Code | Registry shown | Lookup wired |
|---|---|:---:|
| `NL` | KvK | yes |
| `FR` | SIRENE | yes |
| `GB` | Companies House | yes |
| `DE` | Handelsregister | no — manual entry |
| `OTHER` | (no registry) | no — manual entry |

`NL` is the default. Country drives several things on Finish: timezone (`Europe/Amsterdam` / `Europe/Berlin` / `Europe/Paris` / `Europe/London`), `pdf_language` (`nl` / `de` / `fr` / `en`), and the registry label baked into `footer_text` (`KvK 12345678`, `Handelsregister …`, `SIRENE …`, `CRN …`).

### Search mode

For supported countries the user types a company name to search. The backend calls the matching public API and returns one of:

- **ok** — `legalName`, `address`, `postalCode`, `city`, `sector` populated and stored under `answers.registry`.
- **not-configured** — provider not yet wired in this environment; the user is prompted to switch to manual entry.
- **not-found** — number didn't resolve; user can retry or switch to manual.
- **invalid** — number format rejected.
- **error** — provider error; manual entry remains an option.

<!-- TODO(source-missing): KvK Basisprofiel API pricing (EUR 0.02/call) and subscription (EUR 6.40/month) from developers.kvk.nl/nl/pricing -->
#### KvK Basisprofiel (NL only)

For NL workspaces, the KvK lookup is a two-step flow:

1. **Typeahead** — the user searches by company name. The `zoeken` endpoint (free) returns matching entries. This is the autocomplete step that powers the existing `ok` / `not-found` responses. When the search returns zero hits, the UI shows an inline empty-state panel (title, explanation, and a "fill manually" CTA that seeds the manual form with what the user already typed). This is common because OpenKVK's free tier misses many young businesses.
2. **Basisprofiel** — once a match is picked, the wizard calls the KvK Basisprofiel detail endpoint. This is a paid call (EUR 0.02, 24h-cached per KVK number). It returns the full profile: `legalName`, `statutaireNaam` (statutory name), `tradeNames` (all registered trade names, ordered), `rsin`, `legalForm`, `dateFounded`, visiting and postal addresses, SBI codes with primary-flag, `employeeCount`, and `indNonMailing` (do-not-mail flag).

The Basisprofiel call is gated behind `KVK_BASISPROFIEL_ENABLED`. When the flag is off, the wizard falls back to the free `zoeken`-only result (the same `ok` fields listed above). When the flag is on, the Basisprofiel data enriches the `answers.registry` payload and the Review step shows every field that will be written to the company row.

### Manual mode

User fills `chosen` (their registration number), and optionally `legalName`, `address`, `sector`. All four fields are optional in this mode.

### Skip mode

A "Not registered yet" toggle stores `answers.registry = null`. **Continue is always allowed on this step**, regardless of mode — registry data is convenience, not a gate.

## Step 3 — Domain

Pick the web address customers will see on the public business page and (where applicable) on inbound email.

### Two paths

**Subdomain (default):** the user picks a slug; the wizard pins it to `<slug>.mycompanydesk.nl` for `NL` workspaces and `<slug>.mycompanydesk.com` everywhere else. The slug is pre-filled from `businessName` (lowercase, ASCII, max 32 chars). On Finish the subdomain is provisioned via the Cloudflare API and the company's website becomes immediately reachable.

**Own domain:** the user types a domain they already own. On Finish the wizard:

1. Adds the domain to the workspace's domain list (no-op if it was already added).
2. Auto-enables the inbox on it: creates `info@<domain>` as the default mailbox plus `support@`, `sales@`, and `noreply@` aliases.
3. Optionally creates a personal mailbox (see below).

If the domain isn't yet pointed at MCD's nameservers, Finish redirects to `/workspace/organization/company/address` so the user immediately sees the DNS instructions and a **Verify** button. Otherwise it goes to the dashboard.

### Personal mailbox toggle

When **Own domain** is selected, a checkbox offers a personal address (e.g. `silvan@<domain>`). The default local-part is the user's first name, lowercased and ASCII-stripped. The mailbox is created with `type: 'personal'` so it gets its own thread list, separate from the shared `info@` mailbox.

On a re-run, unchecking the box deletes any existing `type: 'personal'` mailboxes for that domain. Shared and custom mailboxes are untouched.

### Switching from a custom domain back to a subdomain

If the workspace already has a custom website domain, the wizard surfaces a warning before letting the user switch to the subdomain path — `activateSubdomain` refuses on companies with a custom domain still attached, and the failure would otherwise only surface at Finish.

## Step 4 — Magic

Generates brand suggestions from the answers captured so far. Fields:

- **Brand colour** — hex. If the user uploads a logo on this step, the dominant non-white colour is extracted from the raster (via `sharp`) and used; that overrides the Gemini suggestion, and a flag (`brandColorFromLogo`) prevents a later regenerate from clobbering it. SVG-only logos and mostly-white inputs fall back to the Gemini palette.
- **Tagline** — short hero line for the public business page.
- **About text** — paragraph for the business page.
- **Services** — list of up to 8 service names. Each is inserted into `company_services` on Finish, but **only if the company has zero services already** — the wizard never overwrites an existing services list.
- **Email tone** — `formal` / `friendly` / `casual`. Maps to the email style: `formal → classic`, `friendly` and `casual → modern`.
- **Email templates** — keyed by template type (`invoice_default`, `reminder_default`, etc.), each with `subject` + `body`. Saved via the email template repository on Finish.

The user can edit any suggestion inline before continuing. **Continue is disabled** until suggestions exist (clicking **Generate suggestions** at least once).

### Logo upload

Clicking the upload tile lets the user pick an image up to 4 MB. The file is sent as a base64 data URI to `/onboarding/upload-logo`, which:

1. Stores it via the canonical companies logo path.
2. Returns the dominant non-white colour, which is auto-applied to the brand-colour suggestion.
3. Sets `answers.logoUploaded = true` so the Review copy adjusts ("we'll use your logo" instead of "we'll create an initials logo from your business name") and the apply step skips the initials generator.

If the user already had a logo on file, it's shown as the existing preview ("you already have a logo") instead of an empty upload CTA.

## Step 5 — Review

Read-only diff of every field the wizard would change. Two sections:

- **Changes** — `current → next` rows. Includes a swatch for `brandColor`. Only fields the wizard wrote and that differ from the current company row appear here.
- **Already set** — fields the wizard captured but that already match the company row.

Fields shown: business name, country, registry number, legal name, address, brand colour, tagline, about text, domain summary (`info@<resolved-domain>` is previewed if a domain is set).

The footer's **Finish** button calls `/onboarding/complete`. The current locale is forwarded so default copy (e.g. payment instructions) is localised.

## What Finish actually applies

`apply.service.js` walks the answers and writes them into the real company row. Two semantics, deliberately split:

**Always overwrite** when the wizard answer is a non-empty string and differs from the current value:

- `display_name`, `company_name`
- `country`
- `chamber`, `address`, `postal_code`, `city`
- `brand_color`, `description`, `business_page_hero_tagline`

**Fill blanks only** (never override an existing manual choice, so re-runs don't surprise users):

- `second_accent_color` (derived from brand colour if blank)
- `email_style` (from email tone)
- `timezone` (country default)
- `pdf_language` (country default)
- `footer_text` (`Trader name - KvK 12345678` style)
- `payment_options_enabled` (`bank_transfer`)
- `payment_default_method` (`bank_transfer`)
- `payment_instructions` (localised default copy)
- `email_footer_show_website`, `email_footer_show_support_email`, `email_footer_show_business_page` (booleans)

Side effects beyond column writes:

- **Initials logo** is generated from the business name + brand colour, but only if `logo_path` and `logo_svg` are both blank. Skipped entirely if the user uploaded a real logo on the Magic step.
- **Services** — up to 8 inserts into `company_services`, only if the company has none yet.
- **Email templates** — saved per type via the template repository.
- **Website site seed** — on the first Finish that finds zero pages in the workspace, `apply.service.js` creates a default site with a draft homepage (`/`, template "home", `is_home: true`) and populates design tokens with the brand colour captured in the wizard. Re-runs skip creation when any page already exists, so the wizard never overwrites manual edits.
- **Domain** — `activateSubdomain` for the subdomain path, or `addDomain` + `quickEnableInbox` (+ optional personal mailbox) for the own-domain path.

If domain provisioning fails, the rest of Finish still applies — the failure shows on the Finish splash with a specific error code (`subdomain_failed`, `domain_failed`, `inbox_enable_failed`, `personal_mailbox_failed`, `personal_mailbox_remove_failed`, `personal_mailbox_list_failed`) translated to a user-readable line.

## Finish splash

A green confirmation panel that shows for 4.2 seconds (or 0.9 seconds when nothing was provisioned) before redirecting. It lists every item the wizard set up in a summary card list:

- **Categories** - the system expense categories seeded for the workspace (e.g. "Kantoor, Reizen, Software").
- **Services** - count of services added to the business page.
- **Logo** - confirmation when an initials logo was generated.
- **Email templates** - count of templates saved in the workspace brand tone.
- **Website** - confirmation that a default site with homepage, navigation and brand colour is ready. Only shown when the site was freshly seeded.
- **Domain** - the ready URL for subdomains or the added domain for own-domain setups.

Two buttons appear below the summary:

- **Go to dashboard** — takes the user to `/dashboard` immediately, skipping the auto-redirect timer.
- **Open the website builder** — visible only when a site was seeded. Takes the user straight to `/website` so they can start editing their homepage.

Then the user lands on `/dashboard` (default path), `/website` (when they click the website builder CTA), or `/workspace/organization/company/address` (when an own-domain is pending DNS verification).

## Re-running the wizard

The wizard is fully re-runnable. Returning users land on step 1 with their current answers visible. Nothing forces them through every step — they can edit one field on one step and click Finish.

The Review step's diff is the safety net: it shows the user every overwrite that's about to happen. Sensible-default fields (timezone, pdf_language, payment defaults, footer text) are not in the diff because Finish only fills blanks for those — silently flipping them would surprise users who set them deliberately.

To revisit individual settings without the wizard, go to:

- `/workspace/organization/company/about` — name, registration, address, VAT.
- `/workspace/organization/company/look` — brand colour, logo.
- `/workspace/organization/company/website` — tagline, about text, services.
- `/workspace/organization/company/address` — custom domain + DNS.
- `/workspace/email` — inbox, mailboxes, templates.

See [Settings overview](/settings/) for the full map.

## Edge cases

- **Skipping a step.** Continue is gated per step on the minimum required answers. The Registry step has no gate; Domain requires a chosen path with a non-empty value; Magic requires Generate to have run; Business and Review have their own gates.
- **Closing mid-step.** Every answer is persisted on change, so the next visit resumes where the user left off. Step index is also persisted (`answers` and `currentStep` live in the same JSONB column).
- **Changing your mind on the Domain step.** Switching from `own` to `subdomain` after typing a domain rewrites `answers.domain` to `null` until the user picks a slug. Switching to a subdomain when a custom domain is already attached surfaces a pre-flight warning.
- **Logo extraction fails.** Mostly-white logos and SVG-only inputs that `sharp` can't rasterise return `color: null`. The Gemini brand-colour suggestion is used instead.
- **Domain already added on own-domain Finish.** A 409 from `addDomain` falls back to the existing row so the inbox-enable step still runs.
- **Personal mailbox already exists.** A 409 from `createMailbox` is treated as success.
