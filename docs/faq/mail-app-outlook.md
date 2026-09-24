---
title: "Mail in Outlook, Apple Mail of op je telefoon"
description: "Versturen vanaf je MCD-adres uit een mailprogramma kan met een app-wachtwoord via SMTP. Mail lezen in Outlook of Apple Mail kan nog niet."
last_verified: 2026-09-24
chatbot:
  triggers: ["outlook", "apple mail", "iphone mail", "mail op mijn telefoon", "mailapp", "mail app", "smtp", "app-wachtwoord", "imap", "pop3", "thunderbird", "mail instellen op telefoon", "outlook op mijn telefoon", "mail app password", "e-mail auf dem handy", "application mail"]
  actions:
    - { label: "Naar Adressen", to: "/inbox/settings" }
  follow_up: ["Hoe stuur ik al mijn mail door naar Gmail?", "Hoe maak ik een extra e-mailadres aan?"]
---

# Mail in Outlook, Apple Mail of op je telefoon

Heb je je zakelijke mail in de MyCompanyDesk-inbox (Office), dan lees en beantwoord je die in MyCompanyDesk. Daarnaast kun je vanuit een ander mailprogramma versturen vanaf je eigen adres. Lezen in een ander mailprogramma kan nog niet.

Let op: dit gaat over de inbox op je eigen domein. Het koppelen van Gmail of Outlook onder **Instellingen** → **E-mail** is iets anders: dat bepaalt alleen vanaf welk account je facturen en offertes worden verstuurd. Zie [E-mail](/settings/email).

## Kan ik mijn mail in Outlook of Apple Mail op mijn iPhone of telefoon lezen?

Nog niet. Outlook, Apple Mail en de meeste andere mailapps vragen bij het toevoegen van een account om een server voor inkomende mail (IMAP of POP3). Die biedt MyCompanyDesk nog niet aan, dus zo'n account kun je op je telefoon niet volledig instellen.

Wat wel kan:

- **Lezen en antwoorden op je telefoon:** gebruik de MyCompanyDesk-app of MyCompanyDesk in je browser. Daar staat je hele inbox.
- **Een kopie elders ontvangen:** zet **Doorsturen naar e-mail** aan, dan krijg je van elk binnenkomend bericht een kopie op je eigen e-mailadres. Zie [Mail doorsturen naar Gmail of een ander adres](/faq/forward-mail).
- **Versturen vanuit een ander mailprogramma:** zie hieronder.

## Hoe verstuur ik mail vanaf mijn MCD-adres uit een ander mailprogramma?

Je kunt in een mailprogramma dat een eigen server voor uitgaande mail toestaat (bijvoorbeeld Gmail via "Mail verzenden als", of een mailprogramma op je computer) versturen vanaf je MCD-adres. Daarvoor maak je eerst een app-wachtwoord:

1. Open **Inbox** en kies bovenin **Adressen**.
2. Klik bij de postbus op het telefoonicoontje (**Mailapp koppelen**).
3. Vul eventueel een naam in, bijvoorbeeld "Laptop", en klik op **App-wachtwoord maken**.
4. Kopieer het wachtwoord meteen. Je ziet het maar één keer. Kwijt? Trek het in en maak een nieuwe.

Vul daarna in je mailprogramma deze gegevens in voor uitgaande mail:

| Instelling | Waarde |
|---|---|
| Server uitgaande mail (SMTP) | `smtp.mycompanydesk.nl` |
| Poort en beveiliging | 587 met STARTTLS, of 465 met SSL/TLS |
| Gebruikersnaam | je volledige e-mailadres, bijvoorbeeld `info@jouwbedrijf.nl` |
| Wachtwoord | het app-wachtwoord (niet je inlogwachtwoord) |

In Gmail doe je dit via **Instellingen** → **Accounts** → **Mail verzenden als** → een ander e-mailadres toevoegen, met de SMTP-gegevens hierboven.

Wat je zo verstuurt, komt ook in het juiste gesprek in je MyCompanyDesk-inbox te staan.

## Goed om te weten

- Je kunt maximaal 5 app-wachtwoorden per postbus hebben. Maak er één per apparaat, dan kun je er één intrekken met **Intrekken** zonder de rest te raken.
- Je kunt alleen versturen vanaf het adres van die postbus of een van zijn extra adressen.
- De zakelijke inbox op je eigen domein, en dus ook dit, hoort bij Office. Zie [Abonnementen en prijzen](/faq/plans).
- Onder elke mail zet MyCompanyDesk automatisch je afsluiter. Heeft je mailprogramma ook een eigen handtekening, dan staan er onderaan twee. Zie [E-mailhandtekening](/faq/email-signature).
