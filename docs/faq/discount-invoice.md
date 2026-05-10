---
title: Discount invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---
To add a discount to an invoice:
1. Edit or create an invoice
2. Add a separate line item with a negative amount for the discount
3. Or use the discount field if your template supports it
4. The total will reflect the reduced amount
5. Save the invoice

Tip: Clearly label the discount line (e.g. "Early payment discount -5%") so the customer understands the deduction.
