---
title: Email
description: "Choose which address your invoices and quotes go out from and set what appears under every message. Available on every plan."
last_verified: 2026-09-29
---

# Email

MyCompanyDesk emails your invoices and quotes to your customers. **Settings → Email** is the hub for everything around that mail: **Addresses and sending** for the sender side, **Invoice and quote emails** for the mail we compose for your documents, **Inbox emails** for the mail you write yourself, and **Rules** for what happens to incoming mail. The page is available on every plan; only sending from your own domain is part of Pro.

Rules and trusted senders for incoming mail live under **Rules**; see [Receiving: mailboxes and rules](#receiving-mailboxes-and-rules) below.

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

## Invoice and quote emails

The **Invoice and quote emails** page holds everything about the mail MyCompanyDesk composes when you send an invoice, quote, reminder or credit note: the default text per email type and language, the appearance, and the footer. The preview next to the settings shows the whole email exactly as your customer receives it, with your own text applied, including edits you have not saved yet.

### The default texts

Invoice, quote, reminder, and credit note emails start from a standard, well-tested text in the language of the document. Pick the type of email (invoice, quote, reminder, or credit note) and the email language, write your own subject and message, and save. Your own text carries a **Your own text** badge, and saving it means every next email of that type starts from your wording. **Back to standard text** restores the standard wording, after a confirmation.

The customer name, number, amounts, and dates in the sample are examples: when you send, MyCompanyDesk fills in the details of the real document, so leave the placeholders where they belong. The sentence about a request only appears when the quote comes from a request.

As an accountant you can read these texts but not change them; the workspace owner sets and resets the standard text. You can still adjust subject and message for one email in the send window. See [Email templates](/en/faq/email-template) for the details.

### Appearance

The appearance sets the style and header of every customer email: pick one of the five styles (Classic, Modern, Minimal, Warm, or Professional), set the header, and check the preview. The preview is built on the server the same way as the real sending, so it shows exactly what your customer receives. **See everything your customer receives from you** opens the complete email as the customer gets it, with header, texts, and footer together.

### The footer under your emails

Every outgoing document email ends with your company name and CoC number, plus the contact details you switch on underneath. Each detail is a switch: your photo, phone number, email address, website address, address, social media, a link to your site at the bottom, and your certifications. The certifications switch only appears once you have added certifications in your company details. A switch for a detail you have not filled in yet says so, with a link to complete it in Company details. The address switch exists for home addresses: switch it off to keep your home address out of your email; the invoice PDF itself always carries the full address.

The details come from your company details, so what you see is what your customer receives: phone, address, CoC number, your photo and the link to your site appear as soon as you fill them in. Editing them under **Settings → Company details** keeps both in sync.

## Inbox emails

**Inbox emails** is the counterpart page for the mail you write and answer yourself: the greeting and sign-off every new message starts with, and your signature.

### Greeting and sign-off

Your standard greeting and sign-off prefill the compose window of the Inbox for new messages you write yourself. The block is managed by team admins on workspaces with the Inbox. If you cannot edit it, the preview still shows the saved texts the inbox fills in.

### Your signature

Your signature can carry a small logo above your greeting, chosen under **Logo in your signature**. There are three options: **None** for no logo in the signature, **Next to your name** for a small logo next to your name (the same placement as the head of your document emails), and **Instead of your name** for a logo that already contains your business name. The choice is only available once you have added a logo in your company details; until then the option shows why, with a link to add one.

If your logo already contains the business name, choose **Instead of your name**. If you already use a signature with its own logo, keep it on **None**, otherwise the logo shows up twice.

The footer list underneath is your inbox-only list of contact details, separate from the footer under your invoices: what you switch off here keeps showing there. The preview on the right shows the complete message exactly as the recipient gets it, from the greeting down to the last footer line.

## Sending: limits and checks

MyCompanyDesk blocks outgoing mail that looks like abuse, so our shared sending domain stays trustworthy for everyone. Very new accounts therefore have extra guardrails.

- There is a maximum number of recipients per message (to, cc and bcc combined). A new account starts with a lower maximum for its first period; the exact limit is shown in the error if you exceed it. Split the message into multiple emails if you need to reach more people. The maximum can also be temporarily lower than usual, such as one recipient per message; the error tells you what applies, and you can contact us if you need more.
- Messages from new accounts can sometimes be held for review. You will see that the message is still being checked, and it usually clears within an hour. You get a notification once it is approved, and can then send it again. A verified sending domain, a paid subscription, and a stretch of successfully delivered messages skip this check automatically. Filling in a KVK number no longer skips this check: the register alone does not show who is actually behind an account.

## Receiving: mailboxes and rules

Everything about the mail you receive now lives on the Email page as well:

- **Mailboxes, extra addresses, forwarding, and importing** are under **Settings → Email → Addresses and sending**. Old links to the inbox settings page land there automatically.
- **Rules for incoming mail and trusted senders** live under **Settings → Email → Rules**. They used to be a tab in the Inbox; that tab row is gone, and old links such as /inbox/regels land on the new place automatically. The tab is only there for workspaces with the Inbox feature.
- Whether an email actually arrived, you see in the **Sent** folder of the Inbox: it shows per message whether it reached its recipient.
- **GDPR data removal** (delete all conversations and attachments from a specific address, admins only) lives under **Settings → Gegevens wissen**.

## Related

- [Company settings](/en/settings/company): the company details behind your footer
- [Plan & payments](/en/settings/billing): sending from your own domain is part of Pro