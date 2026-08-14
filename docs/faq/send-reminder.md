---
title: Send reminder
last_verified: 2026-08-14
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

To follow up on unpaid invoices:
1. Open the overdue invoice
2. Use the "Send Reminder" action
3. The system generates a professional reminder email

The reminder states the remaining outstanding amount (invoice total minus payments already received). If the customer has paid a deposit or an instalment, the reminder asks for the rest, not the full invoice amount.

You cannot send a reminder when:
- the invoice is still a draft
- the invoice has been canceled
- the invoice is already marked as paid
- the invoice is a credit note or refund note
- nothing is left outstanding (for example, the customer paid while the page was open)

Best practice: Send reminders at 1 day before due date (friendly), 3 days after (firm), and 10 days after (final notice). Escalate to a phone call after that.
