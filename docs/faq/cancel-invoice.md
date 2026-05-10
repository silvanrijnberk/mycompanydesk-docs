---
title: "Cancel invoice"
last_verified: 2026-05-09
chatbot:
  triggers: ["cancel invoice", "void invoice", "annul invoice", "reverse invoice", "credit note", "undo invoice", "factuur annuleren", "factuur ongedaan", "hoe annuleer ik een factuur", "rechnung stornieren", "wie storniere ich eine rechnung", "annuler facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I create a credit note?", "How do I delete a draft invoice?", "How do I view cancelled invoices?"]
---

To cancel a sent invoice:
1. Open the invoice from your invoice list
2. In the sidebar, scroll to the "Danger Zone" section
3. Click "Cancel"
4. The invoice status changes to Cancelled

If the invoice is already paid or partially paid, open the original invoice and use the credit note action instead.
