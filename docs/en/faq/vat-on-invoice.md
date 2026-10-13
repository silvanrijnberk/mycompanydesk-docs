---
title: VAT on invoice
description: "To set VAT on an invoice: edit or create the invoice and pick the VAT rate per line, so each line can carry its own rate."
last_verified: 2026-10-13
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open VAT settings", to: "/settings/btw" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---

To set VAT on an invoice:
1. Edit or create an invoice
<!-- TODO(source-missing): The app also accepts the historical Dutch rates 6% and 19% on invoices and catalog items. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
2. For each line item, set the VAT rate (e.g. 21%, 9%, 0%)
3. The system calculates VAT automatically
4. VAT totals appear in the invoice summary

New invoice lines default to your standard VAT rate. To change that default, go to Settings › "VAT" and update the default rate. The rate is always 0% when the invoice uses the VAT reverse charge toggle.

MyCompanyDesk accepts the current Dutch rates 0%, 9% and 21% (sources/vat-rates.yaml#countries.NL.zero/reduced/standard).

Tip: Invoicing a business customer in the EU? Use the "VAT Reverse Charge (BTW verlegd)" toggle instead of picking 0% yourself.
