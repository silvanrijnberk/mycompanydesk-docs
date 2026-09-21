---
title: Failed invoice email
description: "To fix a failed invoice email: check that the customer record has the correct email address."
last_verified: 2026-09-21
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

- The message has too many recipients (to, cc and bcc combined). The error states the current limit; split the message into multiple emails.
- The message is held for content review. You will see it is still being checked, and it usually clears within an hour. Add your KVK number in your company details to skip this check permanently.

Tip: Preview the invoice first if you want to confirm the correct customer and document before resending.
