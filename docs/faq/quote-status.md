---
title: Quote status
last_verified: 2026-07-02
chatbot:
  triggers: ["quote status", "quote statuses", "quote lifecycle", "draft open sent canceled", "offerte status", "angebotsstatus", "statut devis", "estado cotizacion", "status proposta"]
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I mark a quote as finalized?", "How do I mark as sent?", "How do I convert to invoice?"]
---

Quote statuses explained:
• Draft: still editable, not sent to the customer yet
• Sent: delivered to the customer
• Accepted: the customer agreed to the quote
• Declined: the customer turned the quote down
• Expired: the valid-until date has passed; this is shown automatically

On the quote detail page, the current stage is shown as a lifecycle card: Draft → Sent, then Accepted or Declined as a decision branch. Expired and canceled quotes are shown as terminal outcomes at the end of the flow.

When you convert an accepted quote to an invoice, the quote stays Accepted and gets a "Converted to invoice" marker.

Tip: Use the quote list filters to check drafts and expired quotes first.
