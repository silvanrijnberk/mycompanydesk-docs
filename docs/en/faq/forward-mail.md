---
title: "Forward mail to Gmail or another address"
description: "Have all incoming mail forwarded to your own email address, such as Gmail, automatically, or use a rule to send a copy to any other address."
last_verified: 2026-09-24
chatbot:
  triggers: ["doorsturen", "automatisch doorsturen", "mail doorsturen", "doorsturen naar gmail", "alle mail doorsturen", "forward", "forwarding", "forward mail", "forward to gmail", "auto forward", "copy to gmail", "kopie naar gmail", "weiterleiten", "transférer"]
  actions:
    - { label: "Open Addresses", to: "/inbox/settings" }
    - { label: "Open Rules & routing", to: "/inbox/regels" }
  follow_up: ["Can I read my mail in Outlook on my phone?", "How do I create an extra email address?"]
---

# Forward mail to Gmail or another address

Mail that arrives on your own domain in the MyCompanyDesk inbox (Office) can be forwarded automatically. There are two ways to do it.

This is not the same as **Connect Gmail** under **Settings** → **Email**: that only chooses which account your invoices and quotes are sent from. It is also not the same as forwarding invoices to your accountant.

## How do I forward all mail to my own email address?

1. Open **Inbox** and choose **Addresses** at the top.
2. Scroll to the **Forward to email** card.
3. Turn on **Forward messages**.

You then get a copy of every incoming message, from all your mailboxes, at the email address you use to log in to MyCompanyDesk. If you log in with a Gmail address, all your mail lands in Gmail. This option is on by default.

- The conversation also stays in your Inbox.
- If you reply to such a copy from Gmail or your mail app, your reply goes to the original sender and ends up in the right conversation in MyCompanyDesk.
- Attachments are not included in the copy. Open them in the Inbox; every copy contains a link.
- Spam is not forwarded.
- You cannot choose the destination address here: it is always your login email address. To forward to a different address, use a rule (below) or change your login email address via [Change email address](/en/faq/change-email).

## How do I forward to a different address with a rule?

A rule sends a copy to any address you like, for example your Gmail or a colleague.

1. Open **Inbox** and choose **Rules & routing** at the top.
2. Click **New rule** and give it a name.
3. Under **When**, choose **Lands in mailbox**, and under **Match value**, pick the mailbox, for example `info@yourbusiness.com`.
4. Under **Do**, choose **Forward a copy to** and enter the address, for example `yourname@gmail.com`.
5. Save the rule.

To forward all mail, create one rule per mailbox. You can also forward based on the sender or the subject.

Good to know:

- You can have up to 5 forwarding rules, and up to 200 forwarded messages go out per day.
- A forwarded message comes from a MyCompanyDesk address, with "Fwd:" in front of the subject. When you hit reply, your reply goes to the original sender.
- Attachments are not included.
- Only admins can create rules.

## See also

- [Mail in Outlook, Apple Mail or on your phone](/en/faq/mail-app-outlook)
- [Domains, website and inbox](/en/features/domains-website-inbox)
