---
title: Cancel an invoice
last_verified: 2026-08-14
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

Any overdue, deadline, or draft notifications tied to the invoice are also resolved, so you will no longer see a "Send reminder" action for it in the bell. This also applies when you cancel multiple invoices at once from the invoice list.

If the invoice is already paid or partially paid, open the original invoice and use "Create credit note / correction" instead.

Canceling is different from deleting: canceling changes the status to Canceled while keeping the invoice in the list; deleting moves it through Archived and Trash stages before it is permanently removed. Deleting is only possible in one step while a document is still a draft without a number.

Once an invoice is canceled, it is no longer collectible. The invoice detail page, the invoice list quick view, and the customer portal all stop showing a remaining balance, even if there are still recorded payments on the invoice. Payments that were already booked remain visible in the payment history.

Tip: Canceling keeps the invoice number in your records; deleting is only possible while a document is still a draft without a number.
