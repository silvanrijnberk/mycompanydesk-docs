---
title: Outstanding amount
description: "To see your total outstanding amount: go to Invoices and check the Awaiting payment tab, or open Reports, Clients."
last_verified: 2026-10-13
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open client report", to: "/reports/clients?tab=outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---

To see total outstanding/unpaid amounts:
1. Go to Invoices
2. The **Awaiting payment** tab shows how many invoices are with your customers and their total amount. If any are late, it also shows how many. The **To send** tab shows what you have not sent yet. On your phone, the **Outstanding** and **Overdue** tiles sit at the top
3. For detail per client, open Reports › Clients and switch to the "Outstanding" tab (Office)

Tip: If totals look off, first check the period and status under **Filters**.
