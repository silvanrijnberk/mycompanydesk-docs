---
title: Invoice status
last_verified: 2026-08-15
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Invoice statuses explained:
• Draft - not finalized yet, fully editable
• Open - finalized but not sent/paid yet
• Sent - delivered to the customer, awaiting payment
• Overdue - due date passed and still unpaid
• Needs verification - the customer reported payment through the portal; confirm or reject it before the status moves to Paid
• Paid - payment recorded
• Canceled - voided and no longer collectible

Deleting an invoice is a staged action: from active it goes to Archived, then to Trash, and only then is permanently removed. You can restore it from Archive or Trash while it is still in either stage. Canceling is different: it marks a sent or paid invoice as Canceled but keeps it in the list.

Tip: Use invoice filters to focus on Open and Overdue first.
