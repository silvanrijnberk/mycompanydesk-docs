---
title: Dashboard
---

# Dashboard

Het dashboard is je startpagina in MyCompanyDesk. Het geeft je in een oogopslag een overzicht van je bedrijfsfinancien, meldingen en snelle acties.

## Dashboardprofielen

MyCompanyDesk biedt rolgebaseerde dashboardprofielen die de getoonde statistieken en kaarten afstemmen op jouw behoeften:

| Profiel | Focus |
|---|---|
| **Eigenaar / Directeur** | Cashflow, winstgevendheid, overzicht op hoog niveau |
| **Boekhouder / Accountant** | BTW, compliance, audittrails, periodeversluitingen |
| **Debiteuren (Facturatie)** | Factuurstatistieken, openstaande betalingen |
| **Crediteuren (Inkoop)** | Uitgaven bijhouden, leveranciersbeheer |
| **Freelancer** | Vereenvoudigd facturatie- en inkomstenoverzicht |
| **BTW-compliance** | BTW-berekeningen, deadlines, aangiftes |
| **Projectgericht** | Projectwinstgevendheid, tijdregistratie |
| **Groei / Operations** | Omzettrends, klantenwerving |

### Profiel wijzigen

1. Open het dashboard
2. Klik op de profielkiezer bovenaan
3. Kies het profiel dat het beste bij je rol past

Elk profiel toont andere statistiekkaarten, meldingen en snelle acties die relevant zijn voor die rol.

## Dashboardonderdelen

### Dashboard hero

Bovenaan het dashboard staat een overzichtspaneel met de drie geldtegels (omzet, uitgaven, nettoresultaat) en, wanneer relevant, compliance-meldingen.

**Geldtegels**

- **Omzet**: Omzet van deze periode met een procentuele trend vergeleken met de vorige periode. Groen wanneer de omzet positief is.
- **Uitgaven**: Uitgaven van deze periode met trend. De pijl is omgekeerd: een lagere uitgavetrend dan vorige periode toont groen.
- **Nettoresultaat**: Omzet minus uitgaven, groen bij positief, rood bij negatief.

Elke tegel linkt door naar het relevante overzicht: omzet naar rapporten met lens `revenue`, uitgaven naar `/expenses`, nettoresultaat naar `/reports/pnl`.

**Compliance**

Wanneer je werkruimte btw-aangiftes en urencriterium bijhoudt, toont de hero ook:

- **BTW-deadline**: Nog {days} dagen tot aangifte, vandaag verschuldigd, of {days} dagen over tijd, met het saldo. Linkt naar `/vat`.
- **Urencriterium**: Huidige urenvoortgang in procent en resterende uren. Linkt naar `/dashboard?settings=compliance`.

Als er nog geen periodecijfers zijn toont de hero een lege staat met "Geen activiteit" en "Nog geen cijfers voor deze periode."

### Meldingen

Kritieke zaken die je aandacht vereisen:

- Achterstallige facturen
- Aankomende BTW-deadlines
- Aflopende contracten
- Waarschuwingen bij lage cashflow
- Te beoordelen uitgaven uit de bankimport

### Belangrijke statistieken

Samenvattingskaarten met je belangrijkste cijfers:

- Totale omzet (huidige periode)
- Openstaande facturen
- Totale uitgaven
- Nettowinst/-verlies
- Open offertes

### Periodeselectie

Wissel tussen verschillende tijdsperioden om je statistieken te bekijken:

- Deze week / maand / kwartaal / jaar
- Aangepast datumbereik
- Vergelijken met voorgaande perioden

### Snelle acties

Snelkoppelingen naar je meest voorkomende taken:

- Nieuwe factuur aanmaken
- Uitgave toevoegen
- Tijdregistratie invoeren
- Rapportages bekijken

### Recente activiteit

Een feed van recente gebeurtenissen in je werkruimte:

- Verzonden en betaalde facturen
- Toegevoegde uitgaven
- Aangemaakte klanten
- Acties van teamleden

## Onboardingkaart

Zolang de setup-wizard op `/setup` nog velden te vullen heeft, staat er een `FinishSetupBanner` bovenaan het dashboard met een teller van openstaande velden en een **Verder**-knop. De banner heeft nu een sluitknop (X-icoon) die de banner per browser verbergt via localStorage, zodat deze over herlaadbeurten verborgen blijft totdat de wizard is voltooid. De oude onboardingkaart op het dashboard is verwijderd; deze banner vervangt hem. De wizard is niet-blokkerend: nieuwe aanmeldingen komen direct op `/dashboard` en worden niet geforceerd doorgestuurd.
