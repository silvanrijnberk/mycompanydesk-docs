---
title: "Plan & payments"
last_verified: 2026-07-02
---

# Plan & payments

What you pay us, your invoices from us, and your payment card.

## Where to find it

Open **Settings**, then **Je abonnement**, or navigate directly to `/settings/abonnement`.

The old `/workspace/account/billing` and `/settings/billing` URLs redirect to the new page; bookmarks still work and the `?checkout=success|canceled` query parameter is preserved across the redirect.

## Founding Members

MyCompanyDesk offers a Founding Members program for the first 100 workspaces that join during the launch period.

### Current offer (from 2026-05-20)

A Founding Member receives their first year of Pro free, then 50% off the Pro plan for life. The free year starts immediately on claiming. At the end of the free year the workspace can convert to paid Pro at a 50% lifetime discount (applied automatically at checkout); if the workspace does not convert, the Pro trial lapses like any other trial.

The bundled `.nl` domain is free for the first year and from year two onwards renews as part of the paid Pro subscription. A workspace that stops paying after the free year simply lapses, and the domain expires with it. There is no longer an open-ended free-for-life grant for new members.

### Grandfathered original cohort

The first wave of Founding Members who claimed under the original terms (before 2026-05-20) keep Pro free for life and receive lifetime-free domain renewal. These claims are honoured for the lifetime of MyCompanyDesk as long as the service and the relevant feature continue to be offered. Existing grandfathered workspaces are untouched by the new offer.

### How it works

- The program is limited to **100 spots** across all workspaces.
- Each workspace can claim only one spot. A single IP address may not claim more than one spot (fraud prevention).
- Claiming is irreversible. There is no second claim or re-claim; once your spot is gone it is gone.

### Claiming a spot

There are two ways to claim a Founding Member spot:

**From the billing page.** If spots remain, the billing page shows a Founding Member claim card. Click **Claim spot** to start your free Pro year. The upgrade takes effect immediately.

**From the landing page.** The landing page CTA links to the registration form with a founding-member intent. When you sign up through that flow:

1. The signup form remembers your intent.
2. After email verification and login, the system auto-claims your spot in the background.
3. A confirmation toast tells you whether the claim succeeded. If spots ran out before you completed signup, you still get a 60-day Pro trial.

If the auto-claim fails (spots full, IP already used by another workspace, or a network error), the claim does not retry. You can still check the billing page and claim manually if spots remain.

Founding Member workspaces are regular Pro customers in every respect: same features, same limits. The only difference is the subscription source and the badge in billing.

## Plans

MyCompanyDesk has two paid plans plus a Free state that exists only for lapsed, cancelled, or trial-expired workspaces. Free is not offered at signup; new customers get a 60-day Pro trial.

| Plan | Monthly | Yearly | Description |
|---|---|---|---|
| **Starter** | €10.00 | €100.00 | Everything to do your work: invoices, quotes, expenses, hours and projects, on your own page |
| **Pro** | €25.00 | €250.00 | Grow your business: own domain and website, business inbox, bank connection, team access, API and more |

All prices exclude 21% Dutch VAT, which is added at checkout. The app labels prices "excl. btw"; as a business you reclaim this VAT as input tax. The yearly price equals ten monthly payments, so paying yearly gives you two months free.

Pro is the highlighted (recommended) plan in the picker. The Free state exists as a landing zone for lapsed and historical accounts but is hidden from the pricing page and signup flow.

### What each plan includes

Quota-limited features (monthly caps):

| Metric | Free | Starter | Pro |
|---|---|---|---|
| Invoices created | 5 | unlimited | unlimited |
| Expenses created | 10 | unlimited | unlimited |
| Quotes created | 3 | unlimited | unlimited |
| Storage | 100 MB | 2 GB | unlimited |
| People with access | just you | just you | unlimited |
| Custom domains | 0 | 0 | 5 |
| AI chat messages (monthly) | 10 | 100 | 1 000 |
| AI receipt scans (monthly) | 3 | 30 | 200 |
| AI suggestions (monthly) | 10 | 200 | 2 000 |
| Bank connections | 0 | 0 | 3 |

Note: AI caps are monthly, not daily. They reset on the first of each calendar month.

Features unlocked per plan:

| Feature | Free | Starter | Pro |
|---|---|---|---|
| Invoices, expenses, quotes, attachments | yes | yes | yes |
| PDF exports | yes | yes | yes |
| CSV/Excel exports | no | yes | yes |
| Receipt scanning (with the monthly caps above) | yes | yes | yes |
| Assistant chat | yes | yes | yes |
| AI insights | yes | yes | yes |
| Real-time expense classification | yes | yes | yes |
| Contracts | no | yes | yes |
| Projects | no | yes | yes |
| Rental properties * | no | yes | yes |
| Recurring invoices and expenses | no | yes | yes |
| Time registration | no | yes | yes |
| Custom branding | no | yes | yes |
| Language tools | no | yes | yes |
| Description enrichment | no | yes | yes |
| Public business page | no | yes | yes |
| Company subdomain and style presets | no | yes | yes |
| Team access (unlimited people) | no | no | yes |
| Clean invoices and quotes sent to your clients | no | yes | yes |
| Advanced reports | no | no | yes |
| Custom domain, domain routing, full website on your domain | no | no | yes |
| Business inbox | no | no | yes |
| Newsletter | no | no | yes |
| Privacy mode | no | no | yes |
| API access and webhooks | no | no | yes |
| Advanced permissions | no | no | yes |
| Priority support | no | no | yes |
| Bank connections (up to 3) | no | no | yes |

\* The rental properties module is currently only shown to workspaces that already use it.

Accountant (boekhouder) access is free on every plan and does not count as team access.

### Business inbox limits

The business inbox is a Pro feature. On Pro you can send up to 15 000 and receive up to 20 000 emails per month; there is no cap on the number of mailboxes.

### Public-site availability

When a workspace lapses to Free, its public website and site-builder pages remain online. Free sites carry a small MyCompanyDesk badge on the workspace subdomain address; the only way to remove the badge is to move the site to a custom domain (Pro). The gate runs on every request, before any caching, so subscription changes take effect immediately.

### Team access

Team access is included in Pro with no per-person charge: invite as many working users as you want. There is no seat pricing and no per-seat add-on. On Free and Starter you work alone, though your accountant can always be given free access.

## Stripe portal

The **Manage subscription** button (visible whenever the workspace has an active period or non-Free plan) opens a one-shot Stripe Customer Portal session. From the portal you can:

- Update payment method
- Download invoices and receipts
- Change billing address
- Cancel the subscription

Cancellation takes effect at the end of the current paid period; access remains until then.

## Checkout flow

1. Click **Upgrade** on a plan tile
2. You are taken to a Stripe Checkout page
3. Stripe redirects back with `?checkout=success` or `?checkout=canceled`
4. The page shows a success or cancel banner; gated UI unlocks immediately

When upgrading to Pro, the success banner uses the Pro violet accent and a crown icon ("Welcome to Pro") instead of the standard green confirmation. The same Pro styling appears throughout the app: a violet ring around the user avatar, a crown icon in the plan badge ribbon, and "Pro feature" pills on gated settings pages like API Keys and Inbox. Additionally, the contextual guide assistant gets a premium violet skin: the "AI" pill becomes a "Pro" pill, the panel border and send button adopt the Pro accent, and the status line changes to "Your Pro assistant is ready."

## Contextual upgrade banner

When you land on the billing page from a gated feature, the page shows a "you came here for X, here's what unlocks it" banner above the plan grid instead of a generic plans pitch.

## Related

- [Company Settings](/settings/company) -- the public business page and custom domains are managed here
- [Email](/settings/email) -- the business inbox requires Pro
- [Team](/settings/team) -- team access requires Pro
