---
title: Apply a discount to an invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---
Om een korting toe te voegen aan een factuur:
1. Open de factuur in bewerkingsmodus
2. Zoek het veld "Korting" bij elk regelitem of het factuurtotaal
3. Voer de korting in als percentage of vast bedrag
4. De totalen worden automatisch herberekend
5. Sla de factuur op

Tip: Je kunt kortingen per regelitem of als algehele factuurkorting toepassen.
