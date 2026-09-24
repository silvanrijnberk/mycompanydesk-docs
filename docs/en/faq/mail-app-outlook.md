---
title: "Mail in Outlook, Apple Mail or on your phone"
description: "Send from your MCD address in another mail app with an app password over SMTP. Reading your mail in Outlook or Apple Mail is not possible yet."
last_verified: 2026-09-24
chatbot:
  triggers: ["outlook", "apple mail", "iphone mail", "mail op mijn telefoon", "mailapp", "mail app", "smtp", "app-wachtwoord", "imap", "pop3", "thunderbird", "mail instellen op telefoon", "outlook op mijn telefoon", "mail on my phone", "outlook on my phone", "set up email on phone", "app password", "mail app password", "e-mail auf dem handy", "application mail"]
  actions:
    - { label: "Open Addresses", to: "/inbox/settings" }
  follow_up: ["How do I forward all my mail to Gmail?", "How do I create an extra email address?"]
---

# Mail in Outlook, Apple Mail or on your phone

If your business mail lives in the MyCompanyDesk inbox (Office), you read and answer it in MyCompanyDesk. On top of that, you can send from your own address in another mail app. Reading your mail in another mail app is not possible yet.

Note: this is about the inbox on your own domain. Connecting Gmail or Outlook under **Settings** → **Email** is something else: it only decides which account your invoices and quotes are sent from. See [Email](/en/settings/email).

## Can I read my mail in Outlook or Apple Mail on my iPhone or phone?

Not yet. When you add an account, Outlook, Apple Mail and most other mail apps ask for an incoming mail server (IMAP or POP3). MyCompanyDesk does not offer one yet, so you cannot fully set up such an account on your phone.

What you can do:

- **Read and reply on your phone:** use the MyCompanyDesk app, or MyCompanyDesk in your browser. Your whole inbox is there.
- **Get a copy somewhere else:** turn on **Forward to email** and you get a copy of every incoming message at your own email address. See [Forward mail to Gmail or another address](/en/faq/forward-mail).
- **Send from another mail app:** see below.

## How do I send mail from my MCD address in another mail app?

In a mail app that lets you set your own outgoing mail server (for example Gmail via "Send mail as", or a desktop mail app), you can send from your MCD address. First create an app password:

1. Open **Inbox** and choose **Addresses** at the top.
2. Click the phone icon next to the mailbox (**Connect mail app**).
3. Optionally enter a name, for example "Laptop", and click **Create app password**.
4. Copy the password straight away. It is shown only once. Lost it? Revoke it and create a new one.

Then enter these details for outgoing mail in your mail app:

| Setting | Value |
|---|---|
| Outgoing mail server (SMTP) | `smtp.mycompanydesk.nl` |
| Port and security | 587 with STARTTLS, or 465 with SSL/TLS |
| Username | your full email address, for example `info@yourbusiness.com` |
| Password | the app password (not your login password) |

In Gmail you do this via **Settings** → **Accounts and Import** → **Send mail as** → add another email address, with the SMTP details above.

Whatever you send this way also shows up in the right conversation in your MyCompanyDesk inbox.

## Good to know

- You can have up to 5 app passwords per mailbox. Create one per device, so you can revoke a single one with **Revoke** without affecting the rest.
- You can only send from that mailbox's address or one of its extra addresses.
- The business inbox on your own domain, and therefore this too, is part of Office. See [Plans and pricing](/en/faq/plans).
- MyCompanyDesk automatically adds your sign-off under every email. If your mail app adds its own signature too, you end up with two at the bottom. See [Set up your email signature](/en/faq/email-signature).
