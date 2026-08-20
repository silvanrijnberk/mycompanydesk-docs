---
title: Mark an invoice as paid
description: "To mark an invoice as paid: open it from the list and click Mark as paid in the header. The status flips to Paid and a full payment is recorded."
last_verified: 2026-07-02
chatbot:
  triggers: ["mark invoice paid", "invoice paid", "mark as paid", "record payment", "received payment", "payment received", "factuur betaald", "betaald markeren", "factuur als betaald", "rechnung als bezahlt", "marquer payee"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I record a partial payment?", "How do I send a payment reminder?", "How do I view overdue invoices?"]
---

To mark an invoice as paid:
1. Open the invoice from the list
2. Click "Mark as paid" in the invoice header; one click and the status updates to Paid, and a payment record is created for the full amount
3. Want to record the payment date, method, or a reference? Use "Record Payment" in the Payment section instead

Note: A draft invoice must be finalized before it can be marked paid or a payment can be recorded. Recording a payment on a draft used to create a numberless invoice with status Paid, which is no longer allowed. To record a payment on a draft, first send or finalize the invoice so it receives a number, then record the payment.

If an older invoice shows Paid but the payment card says no payment is registered, it was likely marked paid through an import or an earlier flow that did not create a payment record. Use "Record first payment" to add the payment and clear the message.
