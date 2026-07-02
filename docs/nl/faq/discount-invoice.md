---
title: "Korting op een factuur"
last_verified: 2026-07-02
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---

Zo geef je korting op een factuur:
1. Bewerk of maak een factuur
2. Voeg een aparte factuurregel toe met een negatief bedrag voor de korting
3. Het totaal toont het verlaagde bedrag
4. Sla de factuur op

Er is geen apart kortingsveld; een negatieve factuurregel is de manier om korting te geven in MyCompanyDesk.

Tip: Geef de kortingsregel een duidelijke omschrijving (bijv. "Betalingskorting -5%"), zodat de klant de aftrek begrijpt.
