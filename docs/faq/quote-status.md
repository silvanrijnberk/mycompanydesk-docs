---
title: Quote status
last_verified: 2026-05-09
chatbot:
  triggers: ["quote status", "quote statuses", "quote lifecycle", "draft open sent canceled", "offerte status", "angebotsstatus", "statut devis", "estado cotizacion", "status proposta"]
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I mark a quote as finalized?", "How do I mark as sent?", "How do I convert to invoice?"]
---
Quote statuses explained:
• Draft - editable working version
• Open - finalized quote ready to send/track
• Sent - delivered to customer
• Overdue - valid-until date passed
• Canceled - voided quote

Tip: Use quote list filters to focus on overdue or draft quotes first.
