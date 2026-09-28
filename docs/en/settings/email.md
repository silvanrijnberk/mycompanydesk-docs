---
title: Email
description: "Choose which address your invoices go out from, what your emails say and how they look. The email hub bundles addresses, texts and design."
last_verified: 2026-09-28
---

# Email

MyCompanyDesk emails your invoices and quotes to your customers. **Settings → Email** bundles everything about your mail on one page with three tabs:

- **Addresses and sending**: where your mail arrives and which address you send from
- **Texts**: what your emails say
- **Design**: how your emails look

The page is available on every plan; only sending from your own domain is part of Pro. Rules and trusted senders for incoming mail have their own place in the Inbox; see [Receiving: mailboxes and rules](#receiving-mailboxes-and-rules) below.

## Addresses and sending

### Delivery method

The **Delivery method** card decides which address your customers see as the sender. There are three options.

### Your own domain

Send invoices from your own domain, just like your inbox. Customers see your address as the sender.

- Sending from your own domain is part of the Pro plan; on other plans the option shows an upgrade link.
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

### Your default address

Under **You send from this address by default** you pick your own default sending address. That address is filled in when you write a new message in the Inbox, and the choice applies only to you.

### Mailboxes

Under **Mailboxes** you manage the mailboxes on your connected domains: add a mailbox to receive mail on a new address on your own domain, add extra addresses to an existing mailbox, forward incoming mail to your current mail app, and connect the mail app itself. You can import existing mail into an existing mailbox. The mailbox sections need the Inbox permission; without it they stay hidden, and the sending part remains available to everyone.

### Forwarding receipts

The **Forwarding receipts** card points to Expenses: your own address for receipts and supplier invoices lives under **Expenses**, not here.

## Sending: limits and checks

MyCompanyDesk blocks outgoing mail that looks like abuse, so our shared sending domain stays trustworthy for everyone. Very new accounts therefore have extra guardrails.

- There is a maximum number of recipients per message (to, cc and bcc combined). A new account starts with a lower maximum for its first period; the exact limit is shown in the error if you exceed it. Split the message into multiple emails if you need to reach more people.
- Messages from new accounts can sometimes be held for review. You will see that the message is still being checked, and it usually clears within an hour. Add your KVK number in your company details to skip this check permanently.

## Texts

Invoice, quote, reminder, and credit note emails start from a standard, well-tested text in the language of the document. Under **Standard email for documents** you manage those texts yourself: pick the type of email (invoice, quote, reminder, or credit note) and the email language, write your own subject and message, and save. Your own text carries a **Your own text** badge, and saving it means every next email of that type starts from your wording. **Back to standard text** restores the standard wording, after a confirmation.

The customer name, number, amounts, and dates in the sample are examples: when you send, MyCompanyDesk fills in the details of the real document, so leave the placeholders where they belong. The sentence about a request only appears when the quote comes from a request.

As an accountant you can read these texts but not change them; the workspace owner sets and resets the standard text. You can still adjust subject and message for one email in the send window. See [Email templates](/en/faq/email-template) for the details.

The tab also holds your standard greeting and sign-off, which prefill the compose window of the Inbox for new messages you write yourself.

### Your sign-off

The sign-off under every outgoing email is built automatically from your company details: your company name always appears, and the details you fill in (support email, website, social links) join it. Anything left empty is left out. The same details also appear on your invoices and your website, so there is one place to edit them: **Settings → Company details**. Under Email you get a preview of your sign-off, with an **Edit company details** link. The preview is the exact footer that goes out under every email, so what you see is what your customer receives: phone, address, KvK number, your photo and the link to your site appear in it as soon as you fill them in under Company details.

## Design

The **Design** tab sets the style and header of every customer email: pick one of the five styles (Classic, Modern, Minimal, Warm, or Professional), set the header, and check the preview. The preview is built on the server the same way as the real sending, so it shows exactly what your customer receives. **See everything your customer receives from you** opens the complete email as the customer gets it, with header, texts, and sign-off together.

## Receiving: mailboxes and rules

Receiving mail used to be managed on the Inbox settings page. That page has been replaced:

- **Mailboxes, extra addresses, forwarding, and importing** are under **Settings → Email → Addresses and sending**. Old links to the inbox settings page land there automatically.
- **Rules for incoming mail and trusted senders** live under **Inbox → Rules**.
- **Recent outbound delivery** is under **Inbox → Overview**.
- **GDPR data removal** (delete all conversations and attachments from a specific address, admins only) lives under **Settings → Gegevens wissen**.

## Related

- [Company settings](/en/settings/company): the company details behind your sign-off
- [Plan & payments](/en/settings/billing): sending from your own domain is part of Pro