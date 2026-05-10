---
title: Mark invoice paid
last_verified: 2026-05-09
chatbot:
  triggers: ["mark invoice paid", "invoice paid", "mark as paid", "record payment", "received payment", "payment received", "factuur betaald", "betaald markeren", "factuur als betaald", "rechnung als bezahlt", "marquer payee"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I record a partial payment?", "How do I send a payment reminder?", "How do I view overdue invoices?"]
---
So markierst du eine Rechnung als bezahlt:
1. Öffne die Rechnung aus der Liste
2. Klicke auf „Als bezahlt markieren" oder den Status-Button
3. Gib optional das Zahlungsdatum und die Methode ein
4. Speichere - der Status wird auf Bezahlt aktualisiert
