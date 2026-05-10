---
title: "Multi currency"
last_verified: 2026-05-09
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Open profile preferences", to: "/profile?section=preferences" }
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I change my default currency?", "How do I set up my company settings?"]
---

Current behavior for currency:
1. Set your default currency in My Account → Preferences
2. New documents use that default where supported
3. Existing invoices keep the currency they were saved with

The current invoice form does not expose a dedicated per-invoice currency picker.
