---
title: Cancel an invoice
description: "To cancel a sent invoice: open the invoice, choose Mark as Canceled in the More menu at the top of the page and confirm."
last_verified: 2026-10-19
chatbot:
  triggers: ["cancel invoice", "void invoice", "annul invoice", "reverse invoice", "credit note", "undo invoice", "factuur annuleren", "factuur ongedaan", "hoe annuleer ik een factuur", "rechnung stornieren", "wie storniere ich eine rechnung", "annuler facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I create a credit note?", "How do I delete a draft invoice?", "How do I view cancelled invoices?"]
---

To cancel an invoice that has not gone out yet (a finalized invoice you never sent, paid, or shared):
1. Open the invoice from your invoice list
2. Open the "More" menu in the page header (the ⋯ menu on your phone)
3. Click "Mark as Canceled" and confirm
4. The invoice status changes to Canceled

Canceling works only while the invoice has never left your desk: it may not have been sent, marked paid, or had its PDF downloaded or shared. Once the invoice reached your customer in any of those ways, it counts in your turnover and your VAT return, and the app refuses to withdraw it. In its place the page offers **Create credit note / correction**; the credit note reverses the invoice cleanly and gets its own number. See [Credit note](/en/faq/credit-note).

Any overdue, deadline, or draft notifications tied to the invoice are also resolved, so you will no longer see a "Send reminder" action for it in the bell. This also applies when you cancel multiple invoices at once from the invoice list.

If you have already received one or more payments on the invoice, the cancel confirmation tells you the collected amount and warns you that you still need to refund the customer. The invoice detail page also shows a "Refund due" notice after cancellation.

If the invoice is already fully paid, or a credit note has already been issued against it, you cannot cancel it either. Open the original invoice and use "Create credit note / correction" instead.

Canceled invoices cannot be corrected with a credit note. If you need to issue a correction for an invoice that was already canceled, duplicate the canceled invoice, make the corrections, and send it again.

Canceling is different from deleting: canceling changes the status to Canceled while keeping the invoice in the list; deleting moves it through Archived and Trash stages before it is permanently removed. Deleting is only possible in one step while a document is still a draft without a number.

Once an invoice is canceled, it is no longer collectible. The invoice detail page and the customer portal stop showing a remaining balance, even if there are still recorded payments on the invoice. Payments that were already booked remain visible in the payment history.

## Downloaded or shared, but never emailed

Sending is not the only way an invoice reaches your customer. If you downloaded or shared the PDF, the invoice is treated as handed out too: the page shows "Invoice locked: already with your customer", the legally required details become read-only, and cancellation is refused. A credit note or correction is the way back, exactly as for a sent invoice.

Tip: Canceling keeps the invoice number in your records; deleting is only possible while a document is still a draft without a number.
