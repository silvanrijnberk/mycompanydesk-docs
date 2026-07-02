---
title: Apply a discount to an invoice
last_verified: 2026-07-02
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---

To add a discount to an invoice:
1. Edit or create an invoice
2. Add a separate line item with a negative amount for the discount
3. The total reflects the reduced amount
4. Save the invoice

There is no separate discount field; a negative line item is how you apply a discount in MyCompanyDesk.

Tip: Clearly label the discount line (e.g. "Early payment discount -5%") so the customer understands the deduction.
