---
title: Email
description: "Choose which address your invoices and quotes go out from and set the sign-off under every message. Available on every plan."
last_verified: 2026-09-24
---

# Email

MyCompanyDesk emails your invoices and quotes to your customers. **Settings → Email** is where you control the sending side: which address your documents go out from, and the sign-off under every message. The page is available on every plan.

Receiving email (the Inbox) is configured elsewhere; see [Receiving: Inbox settings](#receiving-inbox-settings) below.

## Connecting Gmail or Outlook, or your business inbox?

These are two different things:

- **Connecting Gmail or Outlook** (below, under **Delivery method**) only decides which account your invoices, quotes and reminders are sent from. MyCompanyDesk does not read your Gmail or Outlook and does not receive mail there.
- **The business inbox** (Office) is your mail on your own domain, such as `info@yourbusiness.com`. You read and answer it in **Inbox** in MyCompanyDesk and in the MyCompanyDesk app.

Want to send mail from your business address in Outlook, Apple Mail or Gmail, or read your mail on your phone? See [Mail in Outlook, Apple Mail or on your phone](/en/faq/mail-app-outlook). Want to forward all your mail to Gmail? See [Forward mail to Gmail or another address](/en/faq/forward-mail).

## Sender

The **Delivery method** card decides which address your customers see as the sender. There are three options.

### Your own domain

Send invoices from your own domain, just like your inbox. Customers see your address as the sender.

- Sending from your own domain is part of Office; on Desk the option shows an upgrade link.
- Already have a domain connected? The card offers a one-click enable button (**Enable email on yourdomain.com**). This is safe for existing email: if your domain already runs mail somewhere else (for example Gmail or Microsoft 365), MyCompanyDesk warns you and does not take it over.
- No domain yet? The **Add domain** link takes you to the domain settings.
- Once active, the card shows the address your documents are sent from, with a link to the DNS records.

### Gmail

Connect your Google account with **Connect Gmail**. Emails go out from your Gmail address and appear in your Gmail Sent folder.

### Outlook / Microsoft 365

Connect your Microsoft account with **Connect Outlook**. Emails go out from your Outlook or Microsoft 365 address.

Documents are always sent from your own identity. If no sender is set up yet, MyCompanyDesk asks you to connect Gmail or Outlook, or to enable your own domain, before an invoice or quote email can go out.

### Send invoices from

When your own domain is active and has more than one address, an extra picker appears: **Send invoices from**. Choose which of your addresses customers see as the sender on invoices and quotes.

## Your sign-off (email signature)

The footer under every outgoing email, including mail from the inbox, is built automatically from the details you fill in here:

- **Support email**
- **Website**
- Social links (LinkedIn, X, Facebook, Instagram)

Every item you fill in is included; anything left empty is simply skipped. These fields are shared with your company details, so editing them here or under **Settings → Company details** keeps both in sync. More on this, and on a standard greeting and closing in the inbox, in [Set up your email signature](/en/faq/email-signature).

## Email texts

Invoice, quote, and reminder emails use MyCompanyDesk's standard, well-tested texts, in your document language. There are no per-document templates to maintain. Before a document goes out, the send window still lets you adjust the recipient, subject, and message for that one email, and choose whether to include the view button, download button, PDF attachment, and invoice lines. See [Email templates](/en/faq/email-template).

## Sending: limits and checks

MyCompanyDesk blocks outgoing mail that looks like abuse, so our shared sending domain stays trustworthy for everyone. Very new accounts therefore have extra guardrails.

- There is a maximum number of recipients per message (to, cc and bcc combined). A new account starts with a lower maximum for its first period; the exact limit is shown in the error if you exceed it. Split the message into multiple emails if you need to reach more people.
- Messages from new accounts can sometimes be held for review. You will see that the message is still being checked, and it usually clears within an hour. Add your KVK number in your company details to skip this check permanently.

## Receiving: Inbox settings

Everything about receiving mail lives in the inbox itself, on the **Addresses** tab (**Inbox** → **Addresses**):

- **Mailboxes & addresses**: your addresses, aliases, the name recipients see on your mail (the display name, or your company name when it is empty), and how long messages are kept.
- **Forward to email**: a copy of every incoming message to your login email address. See [Forward mail](/en/faq/forward-mail).
- **Move an existing mailbox**: import your old mail. See [Import your old emails](/en/faq/import-old-mail).
- **Activity**: recent outbound delivery, useful when you wonder whether a customer received your invoice.
- **Trusted senders**: senders that are never marked as spam.
- **GDPR data removal**: delete all conversations and attachments from a specific address (admins only).

Rules for incoming mail live under **Inbox** → **Rules & routing**.

## Related

- [Company settings](/en/settings/company): the company details behind your sign-off
- [Plan & payments](/en/settings/billing): sending from your own domain is part of Office
