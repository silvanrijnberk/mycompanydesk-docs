---
title: Cancel an invoice
last_verified: 2026-07-02
chatbot:
  triggers: ["cancel invoice", "void invoice", "annul invoice", "reverse invoice", "credit note", "undo invoice", "factuur annuleren", "factuur ongedaan", "hoe annuleer ik een factuur", "rechnung stornieren", "wie storniere ich eine rechnung", "annuler facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I create a credit note?", "How do I delete a draft invoice?", "How do I view cancelled invoices?"]
---

To cancel a sent invoice:
1. Open the invoice from your invoice list
2. In the sidebar, scroll to the "Danger Zone" section
3. Click "Mark as Canceled"
4. The invoice status changes to Canceled

If the invoice is already paid or partially paid, open the original invoice and use "Create credit note / correction" instead.

Tip: Canceling keeps the invoice number in your records; deleting is only possible while a document is still a draft without a number.
