---
title: Change currency
last_verified: 2026-05-09
chatbot:
  triggers: ["change currency", "set currency", "currency settings", "euro dollar", "valuta wijzigen", "valuta instellen", "wahrung andern", "changer devise"]
  actions:
    - { label: "Open profile preferences", to: "/profile?section=preferences" }
  follow_up: ["How do I invoice in a different currency?", "How do I change my language?"]
---
To change your default currency preference:
1. Go to My Account → Preferences
2. Select your default currency there
3. Changes save automatically

Note: Existing invoices keep their saved values. The create-invoice form currently does not expose a separate per-invoice currency selector.
