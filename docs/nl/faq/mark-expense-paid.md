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

Om een uitgave als betaald te markeren:
1. Open de uitgave vanuit de lijst
2. Klik op de status of "Markeer als betaald"
3. Voer optioneel de betaaldatum in
4. Sla op - de uitgavestatus wordt bijgewerkt naar Betaald
