---
title: Mark an invoice as paid
last_verified: 2026-05-09
chatbot:
  triggers: ["mark invoice paid", "invoice paid", "mark as paid", "record payment", "received payment", "payment received", "factuur betaald", "betaald markeren", "factuur als betaald", "rechnung als bezahlt", "marquer payee"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I record a partial payment?", "How do I send a payment reminder?", "How do I view overdue invoices?"]
---
Om een factuur als betaald te markeren:
1. Open de factuur vanuit de lijst
2. Klik op "Markeer als betaald" of de statusknop
3. Voer optioneel de betaaldatum en -methode in
4. Sla op - de factuurstatus wordt bijgewerkt naar Betaald
