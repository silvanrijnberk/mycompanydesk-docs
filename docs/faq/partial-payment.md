---
title: "Partial payment"
last_verified: 2026-05-09
chatbot:
  triggers: ["partial payment", "record partial payment", "half payment", "part payment", "deposit received", "gedeeltelijke betaling", "deelbetaling", "aanbetaling ontvangen", "teilzahlung", "paiement partiel", "acompte recu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as fully paid?", "How do I send a reminder for the remaining balance?", "How do I view all partially paid invoices?"]
---

To record a partial payment on an invoice:
1. Open the invoice from the list
2. Click "Record Payment" or the payment action
3. Enter the amount received (less than the total)
4. Save - the invoice status changes to Partially Paid
5. Repeat when additional payments arrive

Tip: The remaining balance is tracked automatically and appears on the invoice detail page.
