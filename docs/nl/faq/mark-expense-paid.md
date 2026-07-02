---
title: "Uitgave als betaald markeren"
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
2. Klik op "Markeer als betaald"
3. De status wordt direct bijgewerkt naar Betaald

Die ene klik is genoeg: er verschijnt geen venster voor de betaaldatum en je hoeft niets apart op te slaan.
