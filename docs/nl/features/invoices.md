---
title: Facturen
---

# Facturen

Facturen vormen de kern van MyCompanyDesk. Maak professionele facturen, verstuur ze naar klanten met betaallinks en volg betalingen tot aan de afhandeling.

## Overzicht

De facturenpagina toont al je facturen met filter- en zoekmogelijkheden. De tabs bovenaan zijn weergaven, geen statussen:

- **Actief**: je werklijst met facturen
- **Archief**: facturen die je hebt gearchiveerd
- **Prullenbak**: facturen die wachten op permanente verwijdering

Binnen een weergave filter je met de statusdropdown op:

- **Alle statussen**: elke factuur in de weergave
- **Concept**: aangemaakt maar nog niet definitief
- **Open**: definitief gemaakt en klaar om te versturen, maar nog niet verstuurd
- **Verzonden**: bezorgd bij klanten
- **Betaald**: betaling ontvangen
- **Te laat**: vervaldatum verstreken, onbetaald
- **Bevestiging nodig**: de klant heeft de factuur in het klantportaal als betaald gemarkeerd en wacht op jouw bevestiging

## Een factuur aanmaken

### Volledig formulier

1. Ga naar **Facturen > Nieuwe factuur**
2. Selecteer of maak een **klant** aan
3. Voeg **regelitems** toe met omschrijving, aantal, eenheidsprijs en BTW-tarief. Het standaard BTW-tarief voor nieuwe regels komt uit je belastinginstellingen (Instellingen > BTW). Bij klanten met verlegde BTW wordt automatisch 0% gebruikt.
4. Stel de **factuurdatum** en **vervaldatum** in
5. Voeg optionele **notities** of **interne opmerkingen** toe
6. Sla op als **concept** om later verder te werken, of maak de factuur **definitief** om hem te vergrendelen en voor te bereiden voor verzending

### Concept of definitief

Opslaan als concept houdt de factuur volledig bewerkbaar. **Definitief maken** vergrendelt de factuur, kent het definitieve factuurnummer toe en zet de status op **Open** (klaar om te versturen). Bij het definitief maken lopen ook de gereedheidscontroles: MyCompanyDesk controleert of je bedrijf een btw-id en IBAN heeft ingevuld (zie [Afronden en versturen](#afronden-en-versturen)).

### Vanuit een sjabloon

Sjablonen zitten in de zijbalk: klik op **Sjablonen** onder Snelle acties om het sjablonenvenster te openen. Kies je een factuursjabloon, dan opent een nieuwe factuur met alle sjabloonvelden vooraf ingevuld; pas aan waar nodig en sla op of maak definitief.

Een sjabloon maken doe je door een factuur te openen en op **Opslaan als sjabloon** te klikken.

### Uren factureren

Wanneer je op het factuurformulier een klant selecteert, haalt MyCompanyDesk de nog niet gefactureerde uren van die klant op. Voeg ze los of in een keer toe; elke registratie wordt een regelitem met de uren, het uurtarief en een automatisch ingevulde omschrijving. Heeft de urenregistratie zelf geen omschrijving, dan wordt een leesbare standaard gebruikt op basis van de projectnaam of de periode. Je kunt op de klantkaart ook een omschrijvingssjabloon per klant instellen om te bepalen hoe deze regels worden geformuleerd.

Nog niet gefactureerde uitgaven van de klant kun je op dezelfde manier toevoegen.

## Factuurdetails

Elke factuur heeft een detailpagina met:

- Klantinformatie
- Regelitems met subtotalen
- BTW-specificatie
- Totaalbedrag
- Status en geschiedenis
- Betaallink (indien verstuurd)

## Acties

### Versturen

Verstuur de factuur per e-mail naar je klant. De e-mail bevat:

- Een aanpasbaar bericht (gebaseerd op je e-mailsjabloon)
- De factuur-PDF als bijlage
- Een betaallink voor online betaling

### PDF downloaden

Download de factuur als een professioneel opgemaakt PDF-document. De PDF bevat je bedrijfslogo, huisstijlkleuren en alle factuurgegevens.

### Markeer als betaald

Bevestig handmatig de betaling wanneer een klant per bankoverschrijving of andere offline methode betaalt.

### Annuleren

Annuleer een factuur die niet meer betaald hoeft te worden. Geannuleerde facturen blijven in je administratie voor controledoeleinden.

### Dupliceren

Maak een kopie van een bestaande factuur, handig voor terugkerende facturatie aan dezelfde klant.

### Herinnering sturen

Verstuur een betalingsherinnering voor achterstallige facturen.

## Bulkacties

Selecteer meerdere facturen uit de lijst om acties in bulk uit te voeren:

- **Versturen**: markeert de geselecteerde facturen als verzonden. Dit werkt alleen de status bij; er worden geen e-mails verstuurd.
- **Markeer als betaald**: registreer betalingen voor meerdere facturen
- **Annuleer**: annuleer meerdere facturen
- **Archiveren**: verplaats facturen naar het archief
- **Verwijderen**: verwijder facturen

In de weergaven Archief en Prullenbak veranderen de bulkacties in herstellen, naar prullenbak en permanent verwijderen.

## Betaallinks

Wanneer je een factuur verstuurt, wordt een unieke betaallink gegenereerd. Je klant kan:

1. Op de link in de e-mail klikken
2. De factuur bekijken in het **klantportaal**
3. Direct online betalen via je gekoppelde Mollie- of Stripe-account

De betaling wordt automatisch geregistreerd en de factuurstatus wordt bijgewerkt naar **Betaald**.

## Online betalingen

Schakel online factuurbetalingen in door je eigen Mollie- of Stripe-account te koppelen:

1. Ga naar **Instellingen > Betalen**
2. Koppel onder **Klanten laten betalen met iDEAL** de gewenste verwerker
3. Mollie ondersteunt iDEAL, Bancontact, creditcard en bankoverboeking
4. Stripe Connect ondersteunt card, Apple Pay, Google Pay en SEPA-incasso

Na het koppelen bevat elke factuur die je verstuurt een betaallink. Je klanten betalen via jouw eigen verwerker. Het geld staat direct op jouw rekening. MyCompanyDesk verwerkt of beheert geen betalingen voor je.

## Betaalprovider-badge

Wanneer een factuur volledig is betaald, toont de kop van de betalingssectie een badge die aangeeft via welke provider de betaling binnenkwam: "Betaald via Mollie" of "Betaald via Stripe". De dominante provider wordt getoond wanneer meerdere betaalmethoden zijn gebruikt. Zo zie je in een oogopslag waar het geld is binnengekomen, zonder door het betalingsverloop te scrollen.

## Betalingen terugstorten

Online betalingen via Mollie of Stripe kunnen direct vanuit MyCompanyDesk worden teruggestort. Wanneer je een betaling terugstort:

- Wordt het volledige bedrag teruggestort naar je klant via dezelfde betaalprovider
- Wordt de terugbetaling direct verwerkt door Mollie of Stripe
- Wordt de betaling gemarkeerd als teruggestort in je administratie

Offline betaalmethoden (bankoverschrijving, contant) gebruiken de bestaande ongeldig-route: de betaling wordt gemarkeerd als ongeldig zonder terugstorting via de provider.

Om een betaling terug te storten:

1. Open de factuurdetailpagina
2. Zoek de betaling in de betalingslijst
3. Klik op de **terugbetalen**-knop (alleen beschikbaar voor Mollie- en Stripe-betalingen)
4. Voeg een optionele reden toe
5. Bevestig de terugbetaling

## Documenttypen

De factuurmodule ondersteunt meerdere documenttypen:

- **Factuur**: standaard factuurtype
- **Creditnota**: correctie voor terugbetalingen of aanpassingen
- **Herinnering**: betalingsherinnering voor achterstallige facturen

## Filteren en zoeken

De lijst biedt:

- **Zoeken**: zoek op factuurnummer, klantnaam of omschrijving
- **Weergavetabs**: Actief, Archief, Prullenbak
- **Status**: Alle statussen, Concept, Open, Verzonden, Betaald, Te laat, Bevestiging nodig
- **Datumbereik**: filter op datum

## Exporteren

Exporteer je facturen als CSV via **Instellingen > Gegevens downloaden** (beschikbaar vanaf het Starter-abonnement). Op dezelfde pagina kun je ook een volledige back-up van al je gegevens maken.

## Afronden en versturen

Wanneer je een factuur definitief maakt of verstuurt, controleert MyCompanyDesk of je bedrijf een btw-id en IBAN op je profiel hebt staan. In Nederland is een btw-id verplicht op je factuur, en je IBAN vertelt je klanten waar ze kunnen betalen.

Ontbreekt een van de twee, dan opent een dialoog waarin je ze direct kunt invullen. Na opslaan wordt de factuur automatisch afgerond.

Wacht je nog op je btw-id van de Belastingdienst, of val je onder de KOR (kleineondernemersregeling)? Dan kun je de melding overslaan en toch doorgaan. Vul je btw-id later aan zodra je hem hebt.

## Tips

- Stel je [e-mailsjablonen](/nl/settings/email) in voordat je je eerste factuur verstuurt
- Gebruik [terugkerende facturen](/nl/features/recurring-invoices) voor regelmatige facturatie
- Bekijk de [rapportages](/nl/features/reports) pagina voor omzetinzichten
- Schakel [AI-suggesties](/nl/advanced/ai-features) in voor slimme omschrijvingsverbeteringen
