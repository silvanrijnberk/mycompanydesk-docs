---
title: "Invoice number"
description: "Invoice numbers are assigned automatically: MyCompanyDesk numbers your invoices sequentially, the way the Dutch tax authority expects."
last_verified: 2026-08-05
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Reset invoice numbering", to: "/settings/gegevens-wissen" }
  follow_up: ["How do I set up my company settings?", "How do I change the PDF style?", "How do I create my first invoice?"]
---

Invoice numbers are assigned automatically:
1. Create an invoice and finalize it; MyCompanyDesk then gives it the next number in sequence, the way the Dutch tax authority expects
2. Coming from another package? Under Settings › "Invoices and quotes", in "Numbering", set a "Prefix" and your "Next invoice number". That number can only be moved forward, never back
3. Need a specific number on a draft? Open the invoice in the form and click "Set custom number" in the sidebar. The number has to be unique
4. Want to drop a next number you set yourself? Go to Settings › "Clear data" and choose "Reset invoice numbering". New invoices then continue automatically after the highest number of this year

Tip: Drafts do not have a final number yet. Delete test drafts before finalizing and your sequence stays without gaps.
