---
title: Invoice status
description: "Invoice statuses explained: a draft is not finalized yet and stays fully editable, and it cannot be marked paid until you finalize it."
last_verified: 2026-08-15
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Invoice statuses explained:
• Draft - not finalized yet, fully editable. It cannot be marked paid or recorded as paid until you finalize it; recording a payment on a draft used to create a numberless invoice with status Paid, which is no longer allowed.
• To send - finalized but not sent/paid yet. When a payment is already booked against it (for example a deposit or a part payment), the list shows it as Sent, because it has clearly gone out.
• Sent - delivered to the customer, awaiting payment
• Overdue - due date passed and still unpaid
• Needs verification - the customer reported payment through the portal; confirm or reject it before the status moves to Paid
• Paid - payment recorded. In a small edge case an invoice can show Paid while no payment is registered yet, for example after an import or an older "mark as paid" action that did not create a payment record. The payment card then shows "Paid, without a recorded payment." and offers "Record Payment" to log the payment after all.
• Canceled - voided and no longer collectible

Only a draft without an invoice number can be deleted, and deleting is a staged action: from active it goes to Archive, then to Trash, and only then is permanently removed. You can restore the draft from Archive or Trash while it is still in either stage. A finalized invoice cannot be deleted. Canceling is different: "Mark as Canceled" sets a finalized, unpaid invoice to Canceled but keeps it in the list.

Tip: Use invoice filters to focus on To send and Overdue first.
