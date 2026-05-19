---
title: E-mailintegratie
---

# E-mailintegratie

Configureer hoe MyCompanyDesk e-mails verstuurt naar je klanten — van factuurverzending tot betalingsherinneringen.

## Waar te vinden

Open de inbox in de hoofdnavigatie en ga naar het tabblad **Instellingen**. Dit is de centrale plek voor alle inboxconfiguratie: mailboxes, log, domein en geavanceerde opties.

## E-mailverzendmethoden

MyCompanyDesk ondersteunt vier manieren om e-mails te versturen. Je gekozen verzendmethode wordt altijd gevolgd voor geautomatiseerde facturen en herinneringen. Als je een inbox op je domein instelt, overschrijft die je keuze niet -- de inbox is voor ontvangen en antwoorden, terwijl je gekozen verzendmethode de transactionele uitgaande mail afhandelt.

### 1. Ingebouwde e-mail (standaard)

Standaard worden e-mails verstuurd via de eigen e-mailservice van MyCompanyDesk. Geen configuratie nodig.

### 2. Gmail-integratie

Verstuur e-mails rechtstreeks vanuit je Gmail-account:

1. Ga naar **Inbox > Instellingen** en open **Verzending**
2. Klik op **Gmail koppelen**
3. Autoriseer MyCompanyDesk om namens jou te versturen via Google OAuth
4. E-mails worden nu verzonden vanaf je Gmail-adres

**Voordelen:**

- E-mails tonen je Gmail-adres als afzender
- Verzonden e-mails verschijnen in je Gmail Verzonden-map
- Betere bezorgbaarheid (je eigen domeinreputatie)

### 3. Outlook / Microsoft-integratie

Verstuur vanuit je Outlook of Microsoft 365-account:

1. Ga naar **Inbox > Instellingen** en open **Verzending**
2. Klik op **Outlook koppelen**
3. Autoriseer via Microsoft OAuth
4. E-mails worden verstuurd vanaf je Outlook-adres

### 4. Aangepaste SMTP

Voor volledige controle gebruik je je eigen SMTP-server:

1. Ga naar **Inbox > Instellingen** en open **Verzending**
2. Vul je SMTP-gegevens in:
   - **Host** — SMTP-serveradres
   - **Poort** — Serverpoort (587 voor TLS, 465 voor SSL)
   - **Gebruikersnaam** — SMTP-login
   - **Wachtwoord** — SMTP-wachtwoord
3. Klik op **Verbinding testen** om te verifieren dat het werkt
4. Sla op

## E-mailsjablonen

Pas de e-mails aan die worden verstuurd met je facturen en herinneringen.

### Factuur-e-mailsjabloon

De standaard e-mail die wordt verstuurd bij het bezorgen van een factuur. Pas aan:

- **Onderwerpregel** — Het e-mailonderwerp (ondersteunt variabelen zoals factuurnummer)
- **Inhoud** — De berichttekst
- **Taal** — Stel sjablonen per taal in

### Herinnerings-e-mailsjabloon

De e-mail die wordt verstuurd bij het opvolgen van achterstallige facturen. Pas dezelfde velden aan als hierboven, maar met een urgentere toon.

### Voorbeeld bekijken

Voor het versturen kun je elke e-mail bekijken om precies te zien wat je klant ontvangt:

- Gerenderde HTML met je huisstijl
- PDF-bijlagevoorbeeld
- Betaallink-opname

## Variabelen

E-mailsjablonen ondersteunen dynamische variabelen:

| Variabele | Beschrijving |
|---|---|
| `{invoice_number}` | Het factuurnummer |
| `{customer_name}` | Naam van de klant |
| `{amount}` | Totaal factuurbedrag |
| `{due_date}` | Vervaldatum |
| `{company_name}` | Je bedrijfsnaam |
| `{payment_link}` | Link naar online betaling |

## E-mailactiviteit

Een overzicht van alle verzonden e-mails in de afgelopen 90 dagen vind je in **Inbox > Instellingen** onder Activiteitenlog.

## Meldingen

Configureer welke e-mailmeldingen je ontvangt:

- **Factuur betaald** — Ontvang een melding wanneer een klant betaalt
- **Offerteaanvraag ontvangen** — Melding bij nieuwe offerteaanvragen
- **Teamactiviteit** — Updates over acties van teamleden

Meldingsvoorkeuren kun je instellen in je [Profiel](/nl/account/profile).

## Tips

- Koppel Gmail of Outlook voor de beste bezorgbaarheid
- Test je e-mailsjabloon altijd voordat je je eerste factuur verstuurt
- Stel taalspecifieke sjablonen in als je klanten in meerdere talen bedient
- Gebruik het herinneringssjabloon voor professionele opvolging van achterstallige facturen
