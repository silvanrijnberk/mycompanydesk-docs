---
title: "Invoice number"
last_verified: 2026-08-05
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Reset invoice numbering", to: "/settings/opzeggen" }
  follow_up: ["How do I set up my company settings?", "How do I change the PDF style?", "How do I create my first invoice?"]
---

Invoice numbers are assigned automatically:
1. Create an invoice; MyCompanyDesk numbers it sequentially, the way the Dutch tax authority expects
2. There is no numbering format to configure
3. Need a specific number on a draft? Open the invoice in the form and click "Set custom number" in the sidebar
4. To start the sequence over, go to Settings → "Account opzeggen" and use "Reset invoice numbering"

## Manual numbering mode

By default MyCompanyDesk numbers invoices automatically. If your workspace uses manual numbering, the app does not assign a number until you finalize, send, or mark the invoice as sent.

When that happens, a dialog opens so you can enter the invoice number. MyCompanyDesk suggests the next number in your sequence, but you can type any number you like. The number is required and must be unique.

To switch between automatic and manual numbering, go to **Settings > Numbering**.

Tip: Drafts do not have a final number yet. Delete test drafts before finalizing and your sequence stays without gaps.
