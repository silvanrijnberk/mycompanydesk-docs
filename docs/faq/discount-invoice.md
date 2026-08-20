---
title: "Korting op een factuur"
description: "Zo geef je korting op een factuur: bewerk of maak een factuur, voeg een aparte factuurregel toe met een negatief bedrag voor de korting."
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

## Korting per regel

Elke factuurregel kan ook een eigen korting krijgen:
1. Voeg een regel toe of bewerk een regel
2. Kies het kortingstype: **percentage** of **vast bedrag**
3. Vul de kortingswaarde in

Een kortingspercentage kan niet hoger zijn dan 100%. De kortingswaarde mag niet negatief zijn. Wil je de hele regel weggeven, zet het percentage dan op 100%.
