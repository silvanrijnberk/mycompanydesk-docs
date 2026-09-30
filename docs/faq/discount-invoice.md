---
title: "Korting op een factuur"
description: "Zo zet je korting op een factuurregel: kies percentage of vast bedrag, en de korting verschijnt op de factuur-PDF en in de mail naar je klant."
last_verified: 2026-09-30
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---

Elke factuurregel kan een eigen korting meekrijgen:

1. Bewerk of maak een factuur
2. Klik op het tag-knopje bij de regel waar je korting op geeft
3. In het kleine paneel dat opent, kies je het kortingstype: **percentage** of **vast bedrag**
4. Vul de kortingswaarde in en kies **Klaar**

Op de regel staat dan een chip met de korting (bijvoorbeeld -10%), en het regeltotaal past zich aan: het oorspronkelijke bedrag staat doorgestreept, met het verlaagde bedrag eronder.

Een kortingspercentage kan niet hoger zijn dan 100%. De kortingswaarde mag niet negatief zijn. Wil je de hele regel weggeven, zet het percentage dan op 100%.

## Korting op de factuur zelf

De korting reist mee met de factuur, zodat je klant precies ziet wat er is afgetrokken:

- Op de factuur-PDF krijgt de korting een eigen regel onder de omschrijving, bijvoorbeeld "Korting 20%: -€ 900,00", en in de bedragkolom staat het oorspronkelijke bedrag doorgestreept.
- De gemailde factuur vermeldt de korting achter de omschrijving van de regel, met het afgetrokken bedrag.
- Boven het subtotaal komen in het totaalblok een rij **Totaal vóór korting** en een rij **Korting**.

Korting later aanpassen? Klik op de chip bij de regel. Weghalen kan in hetzelfde paneel met **Korting verwijderen**.

## Korting via een negatieve factuurregel

Je kunt ook met de hand korting geven: voeg een aparte factuurregel toe met een negatief bedrag voor de korting. Het totaal toont het verlaagde bedrag.

Tip: Geef de kortingsregel een duidelijke omschrijving (bijv. "Betalingskorting -5%"), zodat de klant de aftrek begrijpt.
