---
title: "Ausgabe als bezahlt markieren"
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

So markieren Sie eine Ausgabe als bezahlt:
1. Öffnen Sie die Ausgabe aus der Liste
2. Klicken Sie auf „Als bezahlt markieren"
3. Der Status wird sofort auf Bezahlt aktualisiert

Dieser eine Klick genügt: Es erscheint kein Dialog für das Zahlungsdatum, und ein separates Speichern ist nicht nötig.
