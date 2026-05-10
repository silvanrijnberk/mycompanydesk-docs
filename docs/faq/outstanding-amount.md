---
title: Outstanding amount
last_verified: 2026-05-09
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open outstanding report", to: "/reports/outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---
To see total outstanding/unpaid amounts:
1. Go to Invoices and filter by Open/Sent/Overdue
2. Check totals in the list/KPI header
3. For reporting detail, open Reports → Outstanding

Tip: If totals look off, first verify date range and status filters.
