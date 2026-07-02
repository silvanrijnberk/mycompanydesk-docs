---
title: VAT on invoice
last_verified: 2026-07-02
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open VAT settings", to: "/settings/btw" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---

To set VAT on an invoice:
1. Edit or create an invoice
2. For each line item, set the VAT rate (e.g. 21%, 9%, 0%)
3. The system calculates VAT automatically
4. VAT totals appear in the invoice summary

New invoice lines default to your standard VAT rate. To change that default, go to Settings → "BTW" and update the default rate. The rate is always 0% when the invoice uses the VAT reverse charge toggle.

Tip: Invoicing a business customer in the EU? Use the "VAT Reverse Charge (BTW verlegd)" toggle instead of picking 0% yourself.
