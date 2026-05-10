---
title: Invoice status
last_verified: 2026-05-09
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
• Paid - payment recorded
• Canceled - voided and no longer collectible

Tip: Use invoice filters to focus on Open and Overdue first.
