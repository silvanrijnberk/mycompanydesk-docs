---
title: "Set up your email signature"
description: "MyCompanyDesk adds your sign-off with your company details under every email. Set it in Settings, Email, together with your standard greeting and closing."
last_verified: 2026-09-24
chatbot:
  triggers: ["handtekening", "e-mailhandtekening", "emailhandtekening", "ondertekening", "afsluiter", "aanhef", "afsluiting", "met vriendelijke groet", "signature", "email signature", "sign-off", "greeting", "kind regards", "e-mail-signatur", "signature e-mail"]
  actions:
    - { label: "Open email settings", to: "/settings/email" }
  follow_up: ["How do I change my company details?", "Can I send mail from Outlook on my phone?"]
---

# Set up your email signature

Your email signature lives in one place: **Settings** → **Email**. You will find two things there: your sign-off, which is added under your emails automatically, and a standard greeting and closing for new messages in the inbox.

## Where do I set my email signature?

1. Go to **Settings** → **Email**.
2. Under **Your sign-off**, fill in your details: **Support email**, **Website** and, if you like, your LinkedIn, X, Facebook and Instagram.

MyCompanyDesk automatically puts your company name and the details you fill in here under your emails. Anything left empty is skipped. The other details, such as your phone number, address and KVK number, come from your company details; change those via **Edit company details**.

The sign-off is added under:

- your invoices, quotes and reminders sent by email;
- mail you send from the inbox;
- mail you send from a mail app with an app password.

So you never have to type the signature under each email yourself. If you send from a mail app that adds its own signature too, turn that one off, or your email will end with two.

## Standard greeting and closing in the inbox

With Office and the business inbox, the same page also has **Compose templates**. Whatever you fill in here is already in place in every new message and every reply in the inbox:

- **Greeting**, by default the Dutch "Beste {customer_first_name}," (Dear ...). `{customer_first_name}` becomes your customer's first name.
- **Sign-off**, by default the Dutch "Met vriendelijke groet," (Kind regards) with `{user_first_name}`, your first name, below it.

Writing to customers in English? Simply replace the defaults with your own text, for example "Hi {customer_first_name},". These templates only apply to mail from the inbox, not to invoice and quote emails.

## Good to know

- There is no separate signature per mailbox or per email address. The sign-off is the same for your whole business.
- **Settings** → **Your details** has a field called **Sign-off on your e-mails**. That field is not added under your emails yet. Use **Your sign-off** and the **Sign-off** template above instead.

## See also

- [Email](/en/settings/email)
- [Email templates](/en/faq/email-template)
