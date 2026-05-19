---
title: Email
last_verified: 2026-05-09
---

# Email

Your business has its own email address. Customers write to it, you reply, and we send your invoices and quotes from there.

## Where to find it

Open the inbox from the main navigation, go to the **Instellingen** (Settings) tab. The legacy `/workspace/communication/emails` URL redirects here, as do `/workspace/email/activity`, `/workspace/email/delivery`, `/workspace/email/mailboxes`, and `/workspace/email/templates`.

The umbrella page renders different content depending on where you are in setup. The state machine is:

| State | What you see |
|---|---|
| `live` | Your inbox address, an "Open inbox" button, and the five tile menu below |
| `dns_pending` | "DNS still propagating" with a check-again button |
| `mx_conflict` | Apex MX conflict warning (your domain already runs Gmail or Microsoft 365) |
| `inbox_off` | "Turn on email" — a one-click `quickEnableInbox` action |
| `subdomain_reserved` | Free `acme.mycompanydesk.com` subdomain reserved, awaiting routing rollout |
| `empty` | CTA to the `/setup` magical wizard |

Email is gated by the `inbox` feature (Pro). Free and Starter workspaces see the upgrade prompt instead.

## What you can change

Once email is live, the umbrella shows five tiles.

### Where mail arrives

Path: `/inbox/settings/address`

Your business email address, who else's mail lands here, and how long we keep it.

- **Default mailbox** — usually `info@yourdomain.com`, set during the wizard
- **Send-only aliases** — addresses like `support@`, `sales@`, or `billing@` that you can compose from but that share the same inbox
- **Apex catch-all** — every mailbox under your domain lands in the same inbox by default
- **Retention controls** — how long messages stay in the archive

The Pro plan includes one real mailbox plus unlimited send-as identities and multi-mailbox routing.

Wraps the `SettingsInbox` component (mailbox CRUD plus alias editor). Inner UI is scheduled for a future redesign; today it is reachable end-to-end.

### What your emails say

Path: `/inbox/settings/messages`

The text customers read when you send an invoice, quote, or reminder.

- **Invoice template** — sent when delivering an invoice
- **Quote template** — sent when delivering a quote
- **Reminder template** — sent when following up on overdue invoices
- **PDF attachment toggle** — whether to attach the PDF (default on)

Each template has its own subject and body. Mustache-style placeholders like `{customer_name}` and `{invoice_number}` are filled in automatically when the email goes out.

### Your sign-off

Path: `/inbox/settings/signature`

The footer at the bottom of every outgoing email. The page shows a live preview of the actual footer and a list of toggles for what to include:

- Your name (the personal sender, useful when you have a team)
- Website link (uses the website set under Company → About your business)
- Support email (when you have a separate support address)
- Your MyCompanyDesk business page (when public business page is enabled)
- Social links (LinkedIn, X, Facebook, Instagram)

Toggles auto-disable with a friendly hint when the underlying field isn't filled in yet.

### How emails are sent

Path: `/inbox/settings/sending`

Most users never need to touch this. The default uses MyCompanyDesk's shared sender — delivery, retries, and reputation are handled for you.

Your delivery method preference is always honored for automated invoice and reminder sends. If you set up an inbox on your domain, it does not override this choice — the inbox is for receiving mail and composing replies, while your selected delivery method handles transactional outgoing mail.

The advanced strip exposes alternative delivery methods:

- **Gmail** — connect via Google OAuth; emails go out from your Gmail address and appear in your Gmail Sent folder
- **Outlook / Microsoft 365** — connect via Microsoft OAuth

The whole page is "advanced" in spirit, so the body sits behind an `AdvancedStrip` with a friendly explanation up top.

### List of everything sent

Path: `/inbox/settings/log`

Every email we sent for you in the last 90 days, what happened to it, and (when relevant) why it didn't reach the customer. Statuses include sent, delivered, opened, bounced, and failed. Wraps the `SettingsEmailActivity` table.

## New email wizard

When the email umbrella is in the `empty` state, the **Open the wizard** CTA sends you to `/setup` — the magical setup wizard that creates the address (free or your own domain), the info / support / sales mailboxes, and the email templates in your brand voice in about a minute.

## Send-as picker

When composing in the inbox, the **From** picker shows your default mailbox plus every send-only alias. Reply-to threads default to the address the customer originally wrote to.

## Delivery tracking

Each sent message records its delivery state via webhook callbacks from the underlying provider. The state shows on the invoice or quote detail page (next to the **Sent** status) and in the activity log.

## Related

- [Company → Your own .com address](/settings/company) — the domain your email runs on
- [Plan & payments](/settings/billing) — to unlock the `inbox` feature
