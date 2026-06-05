---
title: "Boekhouder-toegang"
last_verified: 2026-06-05
chatbot:
  triggers:
    - "accountant access"
    - "accountant permissions"
    - "add accountant"
    - "invite accountant"
    - "accountant toevoegen"
    - "boekhouder"
    - "buchhalter einladen"
    - "buchhalter zugang"
    - "comptable acces"
    - "ajouter comptable"
    - "accountant invite"
    - "revoke accountant"
    - "boekhouder dashboard"
    - "accountant dashboard"
  actions:
    - { label: "Open teaminstellingen", to: "/settings?section=team" }
    - { label: "Open boekhouder-dashboard", to: "/boekhouder" }
  follow_up:
    - "Wat kan mijn boekhouder zien?"
    - "Hoe nodig ik mijn boekhouder uit?"
    - "Hoe trek ik toegang in?"
---

# Boekhouder-toegang

Geef je boekhouder alleen-lezen-toegang tot de financiele onderdelen van je werkruimte. Ze kunnen facturen, uitgaven, BTW, banktransacties en rapportages bekijken zonder je instellingen, website of e-mailconfiguratie te kunnen wijzigen.

## Je boekhouder uitnodigen

1. Ga naar **Instellingen > Team** (of `/workspace/account/team`)
2. Klik in de sectie **Boekhouders** op **Boekhouder toevoegen**
3. Vul naam en e-mailadres in
4. Klik op **Uitnodigen** — ze ontvangen een e-mail met een link om te accepteren

De uitnodiging is 30 dagen geldig. Als deze verloopt, kun je een nieuwe versturen. De uitnodigingsmail wordt in het Nederlands verstuurd en vermeldt duidelijk de alleen-lezen-scope en de verleende rechten.

::: tip
De uitnodiging is e-mailgebonden: alleen de persoon met exact het ingevoerde e-mailadres kan accepteren. De uitnodigingslink doorsturen naar iemand anders werkt niet.
:::

## Wat je boekhouder kan zien

Na acceptatie heeft je boekhouder alleen-lezen-toegang tot:

- Facturen en creditnota's
- Uitgaven en bonnen
- BTW-overzicht en aangifte
- Banktransacties
- Rapportages

Ze hebben **geen** toegang tot je website/site-builder, e-mailinstellingen, werkruimte-instellingen of configuratiepagina's.

## Het boekhouder-dashboard

Na acceptatie ziet je boekhouder een speciaal dashboard op `/boekhouder` met:

- Hun eigen thuiswerkruimte
- Alle klantwerkruimten waartoe ze toegang hebben, met laatst-bezochte datums

Ze klikken op **Openen** bij een klantwerkruimte om ernaar te schakelen. Een zoekbalk verschijnt wanneer ze meer dan vijf klanten hebben.

## Toegang beheren

Als werkruimte-eigenaar ga je naar **Instellingen > Team** om alle lopende uitnodigingen en actieve boekhouder-toekenningen te zien. Van hieruit kun je:

- Lopende en actieve boekhouders **bekijken** met hun e-mail, naam en laatste activiteit
- Een uitnodiging **intrekken** voordat deze is geaccepteerd (de link werkt direct niet meer)
- Een actieve toekenning **intrekken** om de toegang van een boekhouder te verwijderen (werkt direct)

## Statussen

| Status | Betekenis |
|---|---|
| **In afwachting** | Uitnodiging verstuurd, nog niet geaccepteerd |
| **Actief** | Boekhouder heeft geaccepteerd en heeft toegang tot je werkruimte |
| **Ingetrokken** | Toegang is door jou verwijderd |
| **Verlopen** | Uitnodiging is niet binnen 30 dagen geaccepteerd |
