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

## Pro-welkomstbanner

Werkruimtes op het Pro-abonnement zien een subtiele welkomstpil boven het dashboardraster. Drie niveaus worden onderscheiden zodat een proefperiode er niet als een betaald abonnement uitziet:

- **Founding Member** — "Welkom terug, {name}. Je Founding-Member Pro is voor altijd actief." Kroonicoon in feestelijk goud.
- **Proefperiode** — "Welkom terug, {name}. Pro-proefperiode loopt nog {days} dagen." Kroonicoon in warm amber, leest als tijdelijk.
- **Betaald Pro** — "Welkom terug, {name}. Je Pro-account staat klaar." Kroonicoon in violet.

Elk niveau toont de juiste tekst en stijl. De pil concurreert niet met de setup-banner of de dashboardsecties eronder.
