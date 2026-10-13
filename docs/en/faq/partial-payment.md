---
title: "Partial payment"
description: "To record a partial payment on an invoice: open the invoice from the list, click Record Payment."
last_verified: 2026-10-13
chatbot:
  triggers: ["partial payment", "record partial payment", "half payment", "part payment", "deposit received", "gedeeltelijke betaling", "deelbetaling", "aanbetaling ontvangen", "teilzahlung", "paiement partiel", "acompte recu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as fully paid?", "How do I send a reminder for the remaining balance?", "How do I view all partially paid invoices?"]
---

To record a partial payment on an invoice:
1. Open the invoice from the list
2. In the Payments section, click "Record Payment"
3. Enter the amount received (less than the total)
4. Save: the payment status becomes Partially paid
5. Repeat when additional payments arrive

An amount above what is still outstanding is refused: the form warns with "More than the outstanding amount ({amount})" before you save, instead of showing a new balance until the click. The payment date cannot lie in the future, so the date field only offers Today as a shortcut.

Tip: The remaining balance is tracked automatically and appears on the invoice detail page. Partially paid invoices also get their own reminder suggestion that asks for the remaining balance. In the customer portal, partially paid invoices show the amount already paid and the remaining balance before the customer completes payment.
