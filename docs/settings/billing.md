---
title: "Plan & payments"
last_verified: 2026-05-09
---

# Plan & payments

What you pay us, your invoices from us, and your payment card.

## Where to find it

Open the workspace switcher → **Account** → **Plan & payments**, or navigate directly to `/workspace/account/billing`.

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

MyCompanyDesk has four plans. Plan definitions live in `apps/api/src/modules/billing/plans.config.js`.

| Plan | Monthly | Yearly | Description |
|---|---|---|---|
| **Free** | €0 | €0 | For anyone just getting started |
| **Starter** | €4.99 | €49.90 | For freelancers who need full invoicing |
| **Pro** | €9.99 | €99.90 | Everything: AI, advanced reports, full branding, business email |
| **Business** | €19.99 | €199.90 | Integrations, unlimited scale, priority support |

Pro is the highlighted (recommended) plan in the picker. Internally the Business tier still uses the key `enterprise` for backwards compatibility, but every customer-facing surface says "Business".

### What each plan includes

Quota-limited features (monthly caps unless noted):

| Metric | Free | Starter | Pro | Business |
|---|---|---|---|---|
| Invoices created | 5 | unlimited | unlimited | unlimited |
| Expenses created | 10 | unlimited | unlimited | unlimited |
| Quotes created | 3 | unlimited | unlimited | unlimited |
| Storage | 100 MB | 2 GB | 10 GB | unlimited |
| Team members | 1 | 1 | 5 | unlimited |
| Custom domains | 0 | 0 | 1 | 5 |
| AI chat messages (daily) | 10 | 30 | 75 | 200 |
| AI receipt scans (daily) | 3 | 15 | 40 | 100 |
| AI suggestions (daily) | 10 | 50 | 150 | 500 |
| Inbox mailboxes | 0 | 0 | 1 | unlimited |
| Inbox monthly sends | 0 | 0 | 10 000 | 100 000 |
| Inbox monthly receives | 0 | 0 | 20 000 | 200 000 |

Boolean features unlocked per plan:

| Feature key | Free | Starter | Pro | Business |
|---|---|---|---|---|
| `contracts`, `properties`, `projects` | no | yes | yes | yes |
| `recurring_invoices`, `recurring_expenses` | no | yes | yes | yes |
| `receipt_scanning`, `language_tools` | no | yes | yes | yes |
| `time_registration`, `assistant_chat` | no | yes | yes | yes |
| `description_enrichment` | no | yes | yes | yes |
| `custom_branding`, `exports_excel` | no | yes | yes | yes |
| `team_members`, `advanced_reports` | no | no | yes | yes |
| `public_business_page` | no | no | yes | yes |
| `custom_domains`, `custom_domain_routing` | no | no | yes | yes |
| `inbox`, `style_presets`, `privacy_mode`, `company_subdomain` | no | no | yes | yes |
| `api_access`, `webhooks`, `priority_support` | no | no | no | yes |
| `advanced_permissions`, `custom_domain_full_website` | no | no | no | yes |

The full feature list lives in `FEATURE_KEYS` in `plans.config.js`.

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

When a user lands on the billing page from a gated feature (the feature-flag middleware redirects with `?upgrade=<feature>`), the page shows a "you came here for X — here's what unlocks it" banner above the plan grid instead of a generic plans pitch.

## Related

- [Company Settings](/settings/company) — `public_business_page` and `custom_domains` are gated here
- [Email](/settings/email) — `inbox` requires Pro or Business
- [Team](/settings/team) — `team_members` requires Pro or higher
