---
title: "Plan & payments"
description: "What you pay us, your invoices from us and your payment card, on Settings, Je abonnement at /settings/abonnement."
last_verified: 2026-10-09
---

# Plan & payments

What you pay us, your invoices from us, and your payment card.

## Where to find it

Open **Settings**, then **Je abonnement**, or navigate directly to `/settings/abonnement`.

The old `/workspace/account/billing` and `/settings/billing` URLs redirect to the new page; bookmarks still work and the `?checkout=success|canceled` query parameter is preserved across the redirect.

## Legacy arrangements

A small number of legacy workspaces retain free Office under earlier arrangements. These are honoured for as long as MyCompanyDesk offers the service and the relevant feature. They are closed and cannot be requested; new workspaces start on the 60-day Office trial described below.

Workspaces on such an arrangement are regular Office customers in every respect: same features, same limits. The only difference is the subscription source shown in billing.

## Plans

MyCompanyDesk has two plans: **Desk** and **Office**. Desk is free, needs no credit card, and stays available for as long as you want. New customers get 60 days of Office, free and without a credit card. If you do not choose a plan after that, your workspace moves to Desk automatically and your data stays where it is.

| Plan | Monthly | Yearly | Description |
|---|---|---|---|
| **Desk** | €0.00 | €0.00 | Unlimited invoicing, quotes and expenses, projects and time registration, plus your own website on mycompanydesk.site |
| **Office** | €12.99 | €129.90 | Everything in Desk plus automation and extra services: bank connection, own domain, business inbox, recurring invoices, full bookkeeping, team access, API and more |

All prices exclude 21% Dutch VAT, which is added at checkout. The app labels prices "excl. btw"; as a business you reclaim this VAT as input tax. The yearly price equals ten monthly payments, so paying yearly gives you two months free. The one exception is the €0.50 per invoice paid online on Desk: that amount includes VAT.

**Cheaper first year:** if you pay for Office yearly and your workspace has never paid before, the first year costs €35.88 (€2.99 per month). After that you pay €129.90 per year. Not happy after your first payment? You get your money back within 14 days.

Online payments: on Desk you pay €0.50 incl. VAT per invoice paid online of €5 or more, on top of the costs of Mollie or Stripe. On Office you do not pay this.

### What each plan includes

Quota-limited features (monthly caps, except where noted):

| Metric | Desk | Office |
|---|---|---|
| Invoices created | unlimited | unlimited |
| Expenses created | unlimited | unlimited |
| Quotes created | unlimited | unlimited |
| Storage | 100 MB | unlimited |
| People with access | just you | unlimited |
| Custom domains | 0 | 5 |
| AI chat messages (monthly) | 10 | 1 000 |
| AI receipt scans (monthly) | 3 | 200 |
| AI suggestions (monthly) | 10 | 2 000 |
| Bank connections | 0 | 3 |

Note: AI caps are monthly, not daily. They reset on the first of each calendar month.

Invoicing on Desk is unlimited: there is no monthly cap and no lifetime allowance. Existing invoices always stay viewable and exportable.

Features per plan:

| Feature | Desk | Office |
|---|---|---|
| Invoices, expenses, quotes, attachments | yes | yes |
| Projects and time registration | yes | yes |
| PDF export, your own logo and branding on documents | yes | yes |
| Receipt scanning (with the monthly caps above) | yes | yes |
| Assistant chat (with the monthly cap above) | yes | yes |
| Real-time expense classification | yes | yes |
| Public business page, website on mycompanydesk.site and style presets | yes | yes |
| VAT overview | yes | yes |
| Sending payment reminders manually | yes | yes |
| Backup (JSON) and CSV export of customers, invoices and expenses | yes | yes |
| Business inbox: read and reply | yes | yes |
| Business inbox: write new email and own mailboxes | no | yes |
| Own domain, also for your website, without the MyCompanyDesk badge | no | yes |
| Bank connections (up to 3) | no | yes |
| Newsletter | no | yes |
| Recurring invoices and expenses | no | yes |
| Auto-invoicing (from time entries and contracts) | no | yes |
| Automatic payment reminders | no | yes |
| Contracts | no | yes |
| Rental properties * | no | yes |
| Full bookkeeping (ledger, balance sheet, annual accounts) | no | yes |
| Filing your VAT return digitally | no | yes |
| Automatic delivery to your accountant | no | yes |
| Peppol e-invoicing | no | yes |
| Team access (unlimited people) | no | yes |
| Advanced reports | no | yes |
| AI insights (dashboard briefing, reports) | no | yes |
| Language tools and description enrichment | no | yes |
| No MyCompanyDesk mark on the payment page and in the customer email footer | no | yes |
| Privacy mode | no | yes |
| API access and webhooks | no | yes |
| Advanced permissions | no | yes |
| Priority support | no | yes |

\* The rental properties module is currently only shown to workspaces that already use it.

Accountant (boekhouder) access is free on every plan and does not count as team access.

### Business inbox limits

On Desk you can read and reply to email. Writing new email and own mailboxes need Office. On Office you can send up to 15 000 and receive up to 20 000 emails per month; there is no cap on the number of mailboxes.

### Public-site availability

When a workspace moves to Desk, its public website and site-builder pages remain online. Sites on mycompanydesk.site carry a small MyCompanyDesk badge; the only way to remove the badge is to move the site to a custom domain (Office). The gate runs on every request, before any caching, so subscription changes take effect immediately.

### When a paid subscription ends

A paid subscription never stops silently. When it ends, the app shows a notification and sends an email (its wording is "Office has stopped"), in two variants: one for a failed payment, one for a cancellation you asked for yourself. You can subscribe again right away after a failed payment; checkout no longer routes you to the Stripe portal for a subscription that no longer exists.

You can also move to Desk yourself while Office is running: on the billing page, the Desk card carries a Switch to Desk link. It opens the cancel page (/settings/opzeggen), which lists what keeps working and what stops, on which date, before it sends you to the Stripe portal to confirm. Once the cancellation is confirmed, the same page says the subscription is canceled and names the date Office stops, and offers an Undo cancellation button as long as the paid period has not ended; it opens the Stripe portal, where you can undo the pending cancellation there. On iOS the button is hidden and the Stripe portal itself remains the way to undo.

Your own domain stays visible on the Domains page after the plan ends: name, status and transfer code remain readable, with an upgrade prompt next to them, because changing domain settings needs Office again.

### Team access

Team access is included in Office with no per-person charge: invite as many working users as you want. There is no seat pricing and no per-seat add-on. On Desk you work alone, though your accountant can always be given free access.

### Extra businesses

Extra businesses of your own need Office. Your subscription covers your home workspace; each additional business you add is billed at the price shown before you confirm.

The extra business follows the subscription of your main workspace. If you are still in your own Office trial, it costs nothing; after that it is added to your subscription at the displayed price.

If your workspace holds free Office under an arrangement like a comped or founding-member plan, there is no plan subscription to attach the extra business to, so you buy it through a separate add-on-only checkout. The first business stays free; only the extra business is billed. You can deactivate a business at any time; it then stops counting toward your subscription or add-on while remaining readable and exportable for the statutory retention period.

## Stripe portal

The **Manage subscription** button (visible whenever the workspace has an active period or a paid plan) opens a one-shot Stripe Customer Portal session. From the portal you can:

- Update payment method
- Download invoices and receipts
- Change billing address
- Cancel the subscription

Cancellation takes effect at the end of the current paid period; access remains until then.

## Checkout flow

1. Click **Upgrade** on the Office tile
2. You are taken to a Stripe Checkout page
3. Stripe redirects back with `?checkout=success` or `?checkout=canceled`
4. The page shows a success or cancel banner; gated UI unlocks immediately

When upgrading to Office, the success banner uses the Office violet accent and a crown icon ("Welcome to Office") instead of the standard green confirmation. The same Office styling appears throughout the app: a violet ring around the user avatar, a crown icon in the plan badge ribbon, and "Office feature" pills on gated settings pages like API Keys and Inbox. Additionally, the contextual guide assistant gets a premium violet skin: the "AI" pill becomes an "Office" pill, the panel border and send button adopt the Office accent, and the status line changes to "Your Office assistant is ready."

## Contextual upgrade banner

When you land on the billing page from a gated feature, the page shows a "you came here for X, here's what unlocks it" banner above the plan grid instead of a generic plans pitch.

## Related

- [Company Settings](/en/settings/company): the public business page and custom domains are managed here
- [Email](/en/settings/email): writing new email from the business inbox requires Office
- [Team](/en/settings/team): team access requires Office
