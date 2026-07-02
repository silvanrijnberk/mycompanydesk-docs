---
title: "Mark an expense as paid"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "mark expense paid"
    - "expense paid"
    - "expense payment"
    - "pay expense"
    - "expense as paid"
    - "uitgave betaald"
    - "uitgave als betaald"
    - "ausgabe bezahlt"
    - "depense payee"
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up:
    - "How do I view all unpaid expenses?"
    - "How do I export expense data?"
---

To mark an expense as paid:
1. Open the expense from the list
2. Click "Mark as Paid"
3. The status updates to Paid right away

That single click is all it takes: there is no payment date prompt and no separate save step.
