---
title: VAT on invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---
To set VAT on an invoice:
1. Edit or create an invoice
2. For each line item, set the VAT rate (e.g. 21%, 9%, 0%)
3. The system calculates VAT automatically
4. VAT totals appear in the invoice summary

New invoice lines default to the standard VAT rate from your workspace tax settings (Geldzaken → Belasting → Standaard BTW-tarief Facturen). To change it, go to workspace settings → Financial → Tax and update the default rate for invoices or expenses. The rate is always 0% for reverse-charge customers.
