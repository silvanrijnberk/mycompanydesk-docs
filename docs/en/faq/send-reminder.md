---
title: Send reminder
last_verified: 2026-08-16
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

If your workspace has online payments enabled, the reminder email gives the customer the same payment options as the original invoice: a **View & pay** button, a **Confirm payment** button, and a scan-and-pay QR code on the PDF. This applies to both manual reminders and automatic reminders.

You cannot send a reminder when:
- the invoice is still a draft
- the invoice has been canceled
- the invoice is already marked as paid
- the invoice is waiting for payment verification because the customer reported it as paid through the portal
- the invoice is a credit note or refund note
- the invoice has been fully credited by a credit note
- nothing is left outstanding (for example, the customer paid while the page was open)

When an invoice becomes overdue, the invoice detail page shows a suggested next step:

- **Send reminder** — for invoices that are slightly past due
- **Send firmer reminder** — for invoices that have already been reminded once
- **Send an urgent reminder** — for invoices more than a few days late. The button opens the reminder dialog; the detail line also suggests calling the customer or offering a payment plan.
- **Create a credit note or correction** — if the customer disputes the invoice or the amounts have changed

For straightforward cases, send reminders at 1 day before due date (friendly), 3 days after (firm), and 10 days after (final notice). Escalate to a phone call after that.
