---
title: Failed invoice email
description: "Fix a failed invoice email, and learn what to do when a message is held for the outgoing mail content check."
last_verified: 2026-10-01
chatbot:
  triggers: ["failed invoice email", "invoice email failed", "failed send invoice", "invoice not sending", "invoice email issue", "fix failed invoice email", "mislukte factuur-e-mail", "factuurmail mislukt", "factuur e-mail mislukt", "factuur versturen mislukt", "hoe los ik een mislukte factuur-e-mail op", "te veel ontvangers", "inhoudscontrole", "bericht vastgehouden", "fehlgeschlagene rechnungs-e-mail", "rechnungs-e-mail fehlgeschlagen", "rechnung senden fehlgeschlagen", "wie behebe ich eine fehlgeschlagene rechnungs-e-mail", "e-mail de facture echoue", "email facture echoue", "envoi facture echec", "comment corriger un e-mail de facture echoue", "recipient cap", "content hold", "message retenu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open email settings", to: "/settings/email" }
  follow_up: ["How do I change the customer email?", "How do I preview the invoice first?", "Where do I check email delivery settings?"]
---

To fix a failed invoice email:
1. Check that the customer record has the correct email address
2. Open the invoice detail page and review the delivery status or any error shown there
3. Verify your email setup at Settings → "Email"
4. Send the invoice again; drafts can be emailed too, Send is the primary action and finalizes the draft in the same step
5. If the customer still does not receive it, ask them to check their spam or junk folder

## New accounts and anti-abuse guardrails

Did the invoice just leave a new workspace? Then the failure may be one of our anti-abuse guardrails:

- The message has too many recipients (to, cc and bcc combined). The error states the current limit; split the message into multiple emails. The limit can also be temporarily lower than usual, such as one recipient per message, and you can contact us if you need more.
- The message is held for the content check. See below what that means and what to do.

## Your message is held for the content check

Does the app say the message has not been sent yet because we are checking it first? Then our outgoing mail content check is holding it for a moment. This is what happens:

- **The message has not been sent.** It is not in a queue either and will not go out by itself later. Your customer has received nothing yet.
- **We look at the text and the circumstances.** Think of the number of recipients, the amount and how new your workspace is. The check is aimed at mass mail to strangers and abuse. A normal invoice or email to your own customers is rarely held.
- **It usually clears within an hour.** Once approved, you get a notification in the app. Send the message again yourself. From then on your messages leave right away.
- **The check covers invoices and quotes, single emails and the inbox.** Mail to your accountant is not part of it.
- **A fault in the check never stops your mail.** If something goes wrong on our side, your message simply goes out.

The check skips itself once your workspace has proven itself: with a verified sending domain, a paid subscription (a trial does not count), a stretch of successfully delivered messages, or after we approved a held message. Filling in a KVK number does not help here: the register does not show who is actually behind an account.

Is your message still held after an hour, or did no notification arrive? Contact us and we will take a look.

Tip: Preview the invoice first if you want to confirm the correct customer and document before resending.
