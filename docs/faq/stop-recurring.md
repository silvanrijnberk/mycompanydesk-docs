---
title: "Stop recurring"
last_verified: 2026-05-09
chatbot:
  triggers: ["stop recurring", "cancel recurring", "pause recurring", "disable recurring", "end recurring", "terugkerend stoppen", "terugkerend annuleren", "wiederkehrend stoppen", "arreter recurrent"]
  actions:
    - { label: "Open recurring invoices", to: "/recurring-invoices" }
    - { label: "Open recurring expenses", to: "/recurring-expenses" }
  follow_up: ["How do I edit a recurring item?", "How do I create a new recurring invoice?"]
---

To stop or pause a recurring invoice/expense:
1. Go to Recurring Invoices (or Recurring Expenses)
2. Open the recurring item
3. Click "Edit" and set the end date, or disable/delete it
4. Save - no further invoices or expenses will be generated

Tip: Setting an end date is safer than deleting, as it preserves the history of previously generated items.
