---
title: Send Reminder
last_verified: 2026-05-09
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

Best practice: Send reminders at 1 day before due date (friendly), 3 days after (firm), and 10 days after (final notice). Escalate to a phone call after that.
