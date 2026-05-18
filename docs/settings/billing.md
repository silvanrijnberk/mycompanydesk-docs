---
title: "Plan & payments"
last_verified: 2026-05-18
---

# Plan & payments

What you pay us, your invoices from us, and your payment card.

## Where to find it

Open the workspace switcher, then **Account**, then **Plan & payments**, or navigate directly to `/workspace/account/billing`.

The legacy `/settings/billing` URL is now a redirect stub to the new path; bookmarks still work and the `?checkout=success|canceled` query parameter is preserved across the redirect.

## Founding Members

MyCompanyDesk offers a Founding Members program for the first 100 workspaces that join during the launch period. A Founding Member receives the Pro plan free for life, with no expiration and no payment method required.

### How it works

- The program is limited to **100 spots** across all workspaces.
- Once claimed, the workspace is permanently upgraded to Pro. The subscription shows as active with a "Founding Member" badge in the billing section.
- Each workspace can claim only one spot. A single IP address may not claim more than one spot (fraud prevention).
- Claiming is irreversible. There is no trial period or renewal; the Pro plan stays active indefinitely.

### Claiming a spot

There are two ways to claim a Founding Member spot:

**From the billing page.** If spots remain, the billing page shows a Founding Member claim card. Click **Claim spot** to reserve your spot. The upgrade takes effect immediately.

**From the landing page.** The landing page CTA links to the registration form with a founding-member intent. When you sign up through that flow:

1. The signup form remembers your intent in local storage.
2. After email verification and login, the system auto-claims your spot in the background.
3. A confirmation toast tells you whether the claim succeeded. If spots ran out before you completed signup, you still get a 60-day Pro trial.

Once claimed, the claim is permanent and the workspace keeps Pro free for life. If the auto-claim fails (spots full, IP already used by another workspace, or a network error), the claim does not retry. You can still check the billing page and claim manually if spots remain.

Founding Member workspaces are regular Pro customers in every respect: same features, same limits. The only difference is the subscription source ("internal") and the badge in billing.

## Plans

MyCompanyDesk has two paid plans plus a Free state that exists only for lapsed, cancelled, or trial-expired workspaces. Free is not offered at signup; new customers get a 60-day Pro trial. Plan definitions live in `apps/api/src/modules/billing/plans.config.js`.

| Plan | Monthly | Yearly | Description |
|---|---|---|---|
| **Starter** | €10.00 | €100.00 | For freelancers who need invoicing, expenses and a public business page |
| **Pro** | €25.00 | €250.00 | The complete suite: AI, inbox, multi-domain, API and expandable with extra users |

Pro is the highlighted (recommended) plan in the picker. The Free state (`plan_key: "free"`) exists as a landing zone for downgrade paths and historical accounts but is hidden from the pricing page and signup flow.

### What each plan includes

Quota-limited features (monthly caps):

| Metric | Free | Starter | Pro |
|---|---|---|---|
| Invoices created | 5 | unlimited | unlimited |
| Expenses created | 10 | unlimited | unlimited |
| Quotes created | 3 | unlimited | unlimited |
| Storage | 100 MB | 2 GB | unlimited |
| Team members | 1 | 1 | 1 (expandable with seat add-ons) |
| Custom domains | 0 | 0 | 5 |
| AI chat messages (monthly) | 10 | 100 | 1 000 |
| AI receipt scans (monthly) | 3 | 50 | 500 |
| AI suggestions (monthly) | 10 | 200 | 2 000 |
| Inbox mailboxes | 0 | 0 | unlimited |
| Inbox monthly sends | 0 | 0 | 15 000 |
| Inbox monthly receives | 0 | 0 | 20 000 |

Note: AI caps are monthly, not daily. They reset on the first of each calendar month.

Boolean features unlocked per plan:

| Feature key | Free | Starter | Pro |
|---|---|---|---|
| `invoices`, `expenses`, `quotes`, `attachments` | yes | yes | yes |
| `exports_pdf` | yes | yes | yes |
| `exports_excel` | no | yes | yes |
| `custom_branding` | no | yes | yes |
| `recurring_invoices`, `recurring_expenses` | no | yes | yes |
| `receipt_scanning`, `language_tools` | no | yes | yes |
| `time_registration`, `assistant_chat` | no | yes | yes |
| `description_enrichment` | no | yes | yes |
| `ai_insights` | no | yes | yes |
| `public_business_page` | no | yes | yes |
| `company_subdomain`, `style_presets` | no | yes | yes |
| `contracts`, `properties`, `projects` | no | no | yes |
| `team_members`, `advanced_reports` | no | no | yes |
| `custom_domains`, `custom_domain_routing` | no | no | yes |
| `custom_domain_full_website` | no | no | yes |
| `inbox`, `privacy_mode`, `newsletter` | no | no | yes |
| `api_access`, `webhooks`, `priority_support` | no | no | yes |
| `advanced_permissions` | no | no | yes |
| `bank_connections` | no | no | yes |
| `e2b_realtime_classification` | no | yes | yes |

The full feature list lives in `FEATURE_KEYS` in `plans.config.js`.

### Seat add-ons

Pro is a single-seat product. Additional users are purchased through the `workspace_seat_addons` table (Stripe quantity-based add-on, billed separately per seat). The `team_members` feature flag controls whether team functionality is available; the effective seat count comes from the add-on record.

## Stripe portal

The **Manage subscription** button (visible whenever the workspace has an active period or non-Free plan) calls `POST /api/billing/portal`, which returns a one-shot Stripe Customer Portal URL. From the portal you can:

- Update payment method
- Download invoices and receipts
- Change billing address
- Cancel the subscription

Cancellation takes effect at the end of the current paid period; access remains until then.

## Checkout flow

1. Click **Upgrade** on a plan tile
2. The frontend calls `POST /api/billing/checkout`, which returns a Stripe Checkout URL
3. Stripe redirects back with `?checkout=success` or `?checkout=canceled`
4. The page shows a success / cancel banner; the entitlement cache invalidates and gated UI unlocks immediately

## Contextual upgrade banner

When a user lands on the billing page from a gated feature (the feature-flag middleware redirects with `?upgrade=<feature>`), the page shows a "you came here for X, here's what unlocks it" banner above the plan grid instead of a generic plans pitch.

## Related

- [Company Settings](/settings/company) -- `public_business_page` and `custom_domains` are gated here
- [Email](/settings/email) -- `inbox` requires Pro
- [Team](/settings/team) -- `team_members` requires Pro or higher
