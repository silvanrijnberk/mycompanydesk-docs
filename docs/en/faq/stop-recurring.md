---
title: "Stop recurring"
last_verified: 2026-07-02
chatbot:
  triggers: ["stop recurring", "cancel recurring", "pause recurring", "disable recurring", "end recurring", "terugkerend stoppen", "terugkerend annuleren", "wiederkehrend stoppen", "arreter recurrent"]
  actions:
    - { label: "Open recurring invoices", to: "/recurring-invoices" }
    - { label: "Open recurring expenses", to: "/recurring-expenses" }
  follow_up: ["How do I edit a recurring item?", "How do I create a new recurring invoice?"]
---

To stop a recurring invoice:
1. Go to Recurring Invoices
2. Open the recurring invoice
3. Click "Pause" on the detail page; the same button then shows "Activate" so you can resume later
4. While it is paused, no further invoices are generated

There is no end date field; pausing is how you stop the schedule, and it keeps the history of previously generated invoices intact. There are also no bulk actions on the recurring list, so pause each item individually. Recurring expenses work the same way with their own Pause and Activate buttons.

Tip: Pausing is safe. Nothing is deleted, and one click on "Activate" picks the schedule back up.

If your plan changes from Office to Desk, recurring invoices and expenses will pause automatically. Previously generated invoices and expenses stay in your records, and the schedules resume when you upgrade again.
