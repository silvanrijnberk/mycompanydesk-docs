---
title: "Invoice number"
last_verified: 2026-05-09
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open company invoicing", to: "/company?section=invoicing" }
  follow_up: ["How do I set up my company settings?", "How do I change the invoice format?", "How do I create my first invoice?"]
---

Invoice numbering is managed from Company setup:
1. Go to Company → Invoicing
2. Configure prefix, next number, and numbering format
3. New non-draft invoices use that sequence automatically

Draft invoices can usually be deleted before finalizing without using the next saved number.
