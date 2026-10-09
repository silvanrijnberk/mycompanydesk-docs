---
title: "Abonnementen en prijzen"
description: "MyCompanyDesk heeft twee abonnementen: Desk en Office. Desk is gratis en blijft gratis."
last_verified: 2026-10-09
chatbot:
  triggers:
    - "abonnementen"
    - "prijzen"
    - "abonnement"
    - "upgraden"
    - "downgraden"
    - "Office"
    - "Desk"
    - "plans"
    - "pricing"
    - "subscription"
    - "upgrade"
    - "downgrade"
  actions:
    - { label: "Open instellingen", to: "/settings/billing" }
  follow_up:
    - "Hoe werken terugkerende facturen?"
    - "Wat gebeurt er als ik downgrade?"
---

MyCompanyDesk heeft twee abonnementen: **Desk** en **Office**.

**Desk** is gratis en blijft gratis. Je krijgt onbeperkt facturen, offertes en uitgaven, projecten en urenregistratie, je eigen website op `.mycompanydesk.site`, bonnetjes scannen met AI en een basale AI-chat.

**Office** is betaald. Daarbij krijg je automatisering en diensten die MCD echt geld kosten: terugkerende facturen en uitgaven, contracten, bankkoppelingen, een zakelijke inbox op je eigen domein, volledige boekhouding, API-toegang en hogere AI-limieten. Zie de [abonnementenpagina](https://mycompanydesk.nl/plans) voor de actuele prijs.

Deze functies staan in onze billing-config: [apps/api/src/modules/billing/plans.config.js](https://github.com/silvanrijnberk/RichardTool/blob/development/apps/api/src/modules/billing/plans.config.js).

**Upgraden en downgraden**
- Je kunt altijd wisselen tussen Desk en Office.
- Na een upgrade zijn de nieuwe functies meteen beschikbaar.
- Als je van Office teruggaat naar Desk, werken Office-only functies niet meer: je bankkoppeling importeert niet meer, nieuwe terugkerende facturen of uitgaven worden niet meer aangemaakt, rapportages, je volledige boekhouding met de jaarrekening en de winstaangifte stoppen, en zelf nieuwe mail opstellen, je mail in een mailapp lezen en je domein beheren kan niet meer. Mail blijft binnenkomen (ook op adressen van je eigen domein), lezen en beantwoorden kan gewoon, en facturen en antwoorden versturen op Desk nog vanaf je eigen adres. Je website blijft online en je kunt hem gewoon bewerken, je btw-aangifte klaarzetten en zelf indienen blijft werken, en je data blijft in je werkruimte staan. De opzegpagina zet er precies bij wat blijft werken en wat stopt voordat je beslist.
- Als je gratis proefperiode van 60 dagen Office afloopt zonder abonnement, gaat je werkruimte automatisch naar Desk.

**Facturatie**
- Alle prijzen zijn exclusief 21% btw. Het bedrag dat je betaalt bij checkout is inclusief btw; je kunt die terugvragen als voorbelasting.
- Er is geen kosten per gebruiker. Desk biedt plek voor één gebruiker plus gratis boekhouder-toegang. Office biedt onbeperkt gebruikers plus gratis boekhouder-toegang.
- Je kunt op elk moment opzeggen of downgraden. Niet tevreden? Binnen 14 dagen krijg je je geld terug.
