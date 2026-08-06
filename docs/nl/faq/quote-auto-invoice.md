---
title: "Automatisch conceptfactuur bij ondertekende offerte"
last_verified: 2026-08-06
chatbot:
  triggers:
    - "quote auto invoice"
    - "automatic invoice from quote"
    - "draft invoice quote signing"
    - "offerte automatisch factuur"
    - "automatisch conceptfactuur offerte"
    - "angebot automatisch rechnung"
    - "devis facture automatique"
  actions:
    - { label: "Open instellingen", to: "/settings/facturen" }
    - { label: "Open offertes", to: "/quotes" }
  follow_up:
    - "Waar vind ik de conceptfactuur?"
    - "Kan ik de factuur nog bewerken nadat die is aangemaakt?"
    - "Wat gebeurt er als de conceptfactuur niet kan worden aangemaakt?"
---

# Automatisch conceptfactuur bij ondertekende offerte

Je kunt instellen dat MyCompanyDesk automatisch een conceptfactuur maakt zodra een klant een offerte online tekent.

## Inschakelen

1. Ga naar **Instellingen → Facturen en offertes** (`/settings/facturen`).
2. Scroll naar het gedeelte **Offertes**.
3. Zet de schakelaar **Conceptfactuur aanmaken bij ondertekenen** aan.
4. Wijzigingen worden automatisch opgeslagen.

## Wat er gebeurt bij ondertekening

- De ondertekende offerte volgt de normale statusflow.
- MyCompanyDesk maakt een nieuwe factuur in status **concept** met dezelfde regelitems, totalen en klant als de ondertekende offerte.
- De conceptfactuur verschijnt onder **Facturen → Concepten**.

## Voordat je de factuur verstuurt

Controleer de conceptfactuur zoals je elke andere factuur zou controleren. Als je werkruimte handmatige nummering gebruikt, heeft de conceptfactuur nog geen nummer. Voeg een nummer toe voordat je hem verstuurt. Je kunt regelitems, notities en de vervaldatum gewoon aanpassen.

## Als het misgaat

Als de conceptfactuur niet kan worden aangemaakt — bijvoorbeeld omdat er geen factuurnummer beschikbaar is — krijg je een melding. Je kunt dan zelf een factuur maken vanuit de ondertekende offerte via **Omzetten naar factuur**.

## Gerelateerd

- [Offertes](/nl/features/quotes)
- [Facturen](/nl/features/invoices)
- [Offertenummering](/nl/faq/quote-numbering)
