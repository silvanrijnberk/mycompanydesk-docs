---
title: "Mail doorsturen naar Gmail of een ander adres"
description: "Laat alle binnenkomende mail automatisch doorsturen naar je eigen e-mailadres, zoals Gmail, of stuur met een regel een kopie naar een ander adres."
last_verified: 2026-09-24
chatbot:
  triggers: ["doorsturen", "automatisch doorsturen", "mail doorsturen", "doorsturen naar gmail", "alle mail doorsturen", "forward", "forwarding", "kopie naar gmail", "weiterleiten", "transférer"]
  actions:
    - { label: "Naar Adressen", to: "/inbox/settings" }
    - { label: "Naar Regels & routing", to: "/inbox/regels" }
  follow_up: ["Kan ik mijn mail in Outlook op mijn telefoon lezen?", "Hoe maak ik een extra e-mailadres aan?"]
---

# Mail doorsturen naar Gmail of een ander adres

Mail die binnenkomt op je eigen domein in de MyCompanyDesk-inbox (Office), kun je automatisch laten doorsturen. Er zijn twee manieren.

Dit is iets anders dan **Verbind Gmail** onder **Instellingen** → **E-mail**: daarmee kies je alleen vanaf welk account je facturen en offertes verstuurt. Het is ook iets anders dan het doorsturen van facturen naar je boekhouder.

## Alle mail automatisch doorsturen naar je eigen e-mailadres

1. Open **Inbox** en kies bovenin **Adressen**.
2. Scroll naar de kaart **Doorsturen naar e-mail**.
3. Zet **Berichten doorsturen** aan.

Je krijgt dan van elk binnenkomend bericht, uit al je postbussen, een kopie op het e-mailadres waarmee je inlogt bij MyCompanyDesk. Log je in met een Gmail-adres, dan komt alle mail dus in Gmail binnen. Deze optie staat standaard aan.

- Het gesprek blijft ook gewoon in je Inbox staan.
- Antwoord je vanuit Gmail of je mailapp op zo'n kopie, dan komt je antwoord bij de oorspronkelijke afzender en in het juiste gesprek in MyCompanyDesk.
- Bijlagen gaan niet mee in de kopie. Die open je in de Inbox; in elke kopie staat een link.
- Spam wordt niet doorgestuurd.
- Het doeladres kies je hier niet zelf: het is altijd je login-e-mailadres. Wil je naar een ander adres doorsturen, gebruik dan een regel (hieronder) of pas je login-e-mailadres aan via [E-mailadres wijzigen](/faq/change-email).

## Doorsturen naar een ander adres met een regel

Met een regel stuur je een kopie naar elk adres dat je wilt, bijvoorbeeld je Gmail of een collega.

1. Open **Inbox** en kies bovenin **Regels & routing**.
2. Klik op **Nieuwe regel** en geef hem een naam.
3. Kies bij **Wanneer** voor **Komt binnen op postbus** en kies bij **Match-waarde** de postbus, bijvoorbeeld `info@jouwbedrijf.nl`.
4. Kies bij **Doe** voor **Stuur kopie door naar** en vul het adres in, bijvoorbeeld `jouwnaam@gmail.com`.
5. Sla de regel op.

Wil je alle mail doorsturen, maak dan één regel per postbus. Je kunt ook doorsturen op basis van de afzender of het onderwerp.

Goed om te weten:

- Je kunt maximaal 5 doorstuurregels hebben, en er gaan maximaal 200 doorgestuurde berichten per dag uit.
- Een doorgestuurd bericht komt van een MyCompanyDesk-adres, met "Fwd:" voor het onderwerp. Klik je op beantwoorden, dan gaat je antwoord naar de oorspronkelijke afzender.
- Bijlagen gaan niet mee.
- Alleen beheerders kunnen regels maken.

## Zie ook

- [Mail in Outlook, Apple Mail of op je telefoon](/faq/mail-app-outlook)
- [Domeinen, website en inbox](/features/domains-website-inbox)
