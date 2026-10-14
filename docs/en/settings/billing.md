---
title: "Plan & payments"
description: "What you pay us, your invoices from us and your payment card, under Settings, Your subscription at /settings/abonnement."
last_verified: 2026-10-13
---

# Plan & payments

What you pay us, your invoices from us, and your payment card.

## Where to find it

Open **Settings**, then **Your subscription**, or navigate directly to `/settings/abonnement`.

The old `/workspace/account/billing` and `/settings/billing` URLs redirect to the new page; bookmarks still work and the `?checkout=success|canceled` query parameter is preserved across the redirect.

## Existing arrangements

A small number of workspaces retain free Office under earlier arrangements. These are honoured for as long as MyCompanyDesk offers the service and the relevant feature. They are closed and cannot be requested; new workspaces start on the 60-day Office trial described below.

Workspaces on such an arrangement are regular Office customers in every respect: same features, same limits. The only difference is the subscription source shown in billing.

## Plans

MyCompanyDesk has two plans: **Desk** and **Office**. Desk is free, needs no credit card, and stays available for as long as you want. Every new account gets 60 days of Office, free and without a credit card. If you sign up through the link of an accountant who is a MyCompanyDesk partner, that trial lasts 12 months. If you do not choose a plan when the trial ends, your workspace moves to Desk automatically and your data stays where it is. There is no paywall.

| Plan | Monthly | Yearly | Description |
|---|---|---|---|
| **Desk** | €0.00 | €0.00 | Unlimited invoicing, quotes and expenses, projects and time registration, plus your own website on mycompanydesk.site |
| **Office** | €12.99 | €129.90 | Everything in Desk plus automation and extra services: bank connection, own domain, business inbox, recurring invoices, full bookkeeping, team access and more |

All prices exclude 21% Dutch VAT, which is added at checkout. The app labels prices "excl. VAT"; as a business you reclaim this VAT as input tax. The yearly price equals ten monthly payments, so paying yearly gives you two months free. The one exception is the €0.50 service fee per online payment on Desk: that amount includes VAT.

**Cheaper first year:** if you pay for Office yearly and your workspace has never paid before (including while you are on the trial or on Desk), the first year costs €35.88 in one payment (€2.99 per month). After that you pay €129.90 per year. This introductory price only applies to yearly billing; paying monthly, or having had a paid plan before, means the regular price. Not happy after your first payment? You get your money back within 14 days.

Online payments: on Desk, a €0.50 service fee including VAT is held back from your payout for each online payment of €5 or more, on top of the costs of Mollie or Stripe. Your customer does not pay it; they simply pay the invoice amount. On Office there is no service fee.

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
| Questions to the assistant (monthly) | 10 | 1 000 |
| Receipts scanned (monthly) | 3 | 200 |
| Smart suggestions (monthly) | 10 | 2 000 |
| Bank connections | 0 | 3 |
| Own businesses | 1 | 10 |

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
| Assets * | no | yes |
| Full bookkeeping (ledger, balance sheet, annual accounts) | no | yes |
| Filing your VAT return digitally | no | yes |
| Automatic delivery to your accountant | no | yes |
| Peppol e-invoicing | no | yes |
| Team access (unlimited people) | no | yes |
| Several businesses of your own | no | yes |
| Advanced reports | no | yes |
| AI insights (dashboard briefing, reports) | no | yes |
| Language tools and description enrichment | no | yes |
| No 'Made with MyCompanyDesk' on your payment page, signing page and emails | no | yes |
| Privacy mode | no | yes |
| Advanced permissions | no | yes |
| Priority support | no | yes |

\* Assets is not in the navigation by default. Any Office workspace can switch it on with **Assets & Objects** under **Settings › Modules**.

Accountant (boekhouder) access is free on every plan and does not count as team access.

### Business inbox limits

On Desk you can read and reply to email. Writing new email and own mailboxes need Office. On Office you can send up to 15 000 and receive up to 20 000 emails per month; there is no cap on the number of mailboxes.

### Public-site availability

When a workspace moves to Desk, its public website and site-builder pages remain online. Sites on mycompanydesk.site carry a small MyCompanyDesk badge; the only way to remove the badge is to move the site to a custom domain (Office). The gate runs on every request, before any caching, so subscription changes take effect immediately.

### When a paid subscription ends

A paid subscription never stops silently. When it ends, the app shows a notification and sends an email (its wording is "Office has stopped"), in two variants: one for a failed payment, one for a cancellation you asked for yourself. You can subscribe again right away after a failed payment; checkout no longer routes you to the Stripe portal for a subscription that no longer exists.

You can also move to Desk yourself while Office is running: on the billing page, the Desk card carries a **Switch to Desk** button, and **Cancel subscription** sits under what you pay. Both open the cancel page (/settings/opzeggen), which lists what keeps working and what stops, on which date, before it sends you to the Stripe portal to confirm. Once the cancellation is confirmed, the same page says the subscription is canceled and names the date Office stops, and offers an **Undo cancellation** button as long as the paid period has not ended; it opens the Stripe portal, where you can undo the pending cancellation. On iOS the button is hidden and the Stripe portal itself remains the way to undo. When Office stops, your outgoing emails to customers and the payment and signing pages carry the "Made with MyCompanyDesk" badge again. After the cancellation, the **Manage billing** button stays on the billing page, so the invoices and receipts the Stripe portal holds remain one click away.

Your own domain stays visible on the Domains page after the plan ends: name, status and transfer code remain readable, with an upgrade prompt next to them, because changing domain settings needs Office again. A domain you received free with Office is renewed by MyCompanyDesk only while Office actually runs: once the plan has ended, renewing that domain is yours to arrange. Domains under an earlier fixed arrangement keep renewing for free.

### Team access

Team access is included in Office with no per-person charge: invite as many working users as you want. There is no seat pricing and no per-seat add-on. On Desk you work alone, though your accountant can always be given free access.

### Extra businesses

If you run more than one business of your own, say a holding plus an operating company, Office lets you manage them side by side, up to 10 businesses of your own. Your subscription covers your main workspace; each extra business costs €5.99 per month or €59.90 per year (excl. VAT). You see that price before you confirm. On Desk you have one business of your own.

The extra business follows the subscription of your main workspace. If you are still in your own Office trial, it costs nothing; after that it is added to your subscription at the displayed price.

If your workspace holds Office for free under a fixed arrangement, there is no plan subscription to attach the extra business to, so you buy it through a separate add-on-only checkout. The first business stays free; only the extra business is billed. You can deactivate a business at any time; it then stops counting toward your subscription or add-on while remaining readable and exportable for the statutory retention period.

### When your accountant pays your subscription

An accounting firm can offer to pay the Office subscription of your workspace. The firm pays €6.99 per month or €69.90 per year per client for it (excl. VAT). You see the offer at the top of **Your subscription** as "Your accountant wants to pay your subscription", with the buttons **Accept** and **No, thanks**. Only the bill moves: your workspace, your data and your login stay yours. **Pay yourself again** ends it; you then pay yourself again or go back to Desk. Your data stays either way.

## Stripe portal

The **Manage billing** button (not in the iOS app) opens a one-shot Stripe Customer Portal session. It is visible while your workspace has a running paid subscription, and after a cancellation it stays for a workspace that paid via Stripe itself, so the invoices and receipts it holds remain reachable. From the portal you can:

- Update payment method
- Download invoices and receipts
- Change billing address
- Cancel the subscription

Cancellation takes effect at the end of the current paid period; access remains until then.

## Checkout flow

1. Pick **Monthly** or **Yearly** above the plans
2. Click **Upgrade** on the Office card (during your trial the button reads **Keep Office**)
3. Stripe's **Secure checkout** opens on the same page; you never leave MyCompanyDesk
4. Once you finish, the page shows a confirmation and gated parts unlock immediately

If you pay during your trial, billing starts at that moment and the rest of the trial lapses. The iOS app has no checkout; it shows your plan and usage, and you change it on mycompanydesk.com.

If processing does not finish shortly after a successful payment, the banner says your payment went through but your plan is not ready yet, and shows a button to check again.

When upgrading to Office, the confirmation uses the Office violet accent and welcomes you to Office. If you arrived from a gated feature, it links straight to that feature. On Office your avatar gets a violet ring, and instead of the guide assistant you get the assistant that works with your own figures (see [AI features](/en/advanced/ai-features)).

## Contextual upgrade banner

When you land on the billing page from a gated feature, the page shows a banner above the plans that names that feature ("... needs a paid plan") and which plan switches it on, instead of a generic plans pitch.

## Related

- [Company Settings](/en/settings/company): the public business page and custom domains are managed here
- [Email](/en/settings/email): writing new email from the business inbox requires Office
- [People with access and your accountant](/en/settings/team): team access requires Office, access for your accountant is free
