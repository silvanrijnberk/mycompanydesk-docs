---
title: Facturen
last_verified: 2026-06-05
---

# Facturen

Facturen vormen de kern van MyCompanyDesk. Maak professionele facturen, verstuur ze naar klanten met betaallinks en volg betalingen tot aan de afhandeling.

## Overzicht

De facturenpagina toont al je facturen met filter- en zoekmogelijkheden. Gebruik de statustabs om snel te bekijken:

- **Alles** — Alle facturen
- **Concept** — Aangemaakt maar niet verstuurd
- **Verzonden** — Bezorgd bij klanten
- **Achterstallig** — Vervaldatum verstreken, onbetaald
- **Betaald** — Betaling ontvangen
- **Geannuleerd** — Geannuleerde facturen

## Een factuur aanmaken

### Volledig formulier

1. Ga naar **Facturen > Nieuwe factuur**
2. Selecteer of maak een **klant** aan
3. Voeg **regelitems** toe met omschrijving, aantal, eenheidsprijs en BTW-tarief. Het standaard BTW-tarief voor nieuwe regels komt uit de belastinginstellingen van je werkruimte (Geldzaken → Belasting). Bij klanten met verlegde BTW wordt automatisch 0% gebruikt.
4. Stel de **factuurdatum** en **vervaldatum** in
5. Voeg optionele **notities** of **interne opmerkingen** toe
6. Klik op **Opslaan** om een concept aan te maken

### Snel toevoegen

Voor snellere aanmaak:

1. Klik op de snel-toevoegen-knop op de facturenlijst
2. Selecteer een klant
3. Voeg items toe of kies een sjabloon
4. Sla op (en verstuur optioneel direct)

### Vanuit een sjabloon

1. Klik bij het aanmaken van een nieuwe factuur op **Sjabloon gebruiken**
2. Selecteer een opgeslagen sjabloon
3. Alle regelitems zijn vooraf ingevuld — pas aan waar nodig
4. Sla op en verstuur

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

Maak een kopie van een bestaande factuur — handig voor terugkerende facturatie aan dezelfde klant.

### Herinnering sturen

Verstuur een betalingsherinnering voor achterstallige facturen.

## Bulkacties

Selecteer meerdere facturen uit de lijst om acties in bulk uit te voeren:

- **Versturen** — Verstuur meerdere conceptfacturen tegelijk
- **Markeer als betaald** — Registreer betalingen voor meerdere facturen
- **Archiveren** — Verplaats facturen naar het archief
- **Verwijderen** — Verwijder facturen permanent

## Betaallinks

Wanneer je een factuur verstuurt, wordt een unieke betaallink gegenereerd. Je klant kan:

1. Op de link in de e-mail klikken
2. De factuur bekijken in het **klantportaal**
3. Direct online betalen via je gekoppelde Mollie- of Stripe-account

De betaling wordt automatisch geregistreerd en de factuurstatus wordt bijgewerkt naar **Betaald**.

## Online betalingen

Schakel online factuurbetalingen in door je eigen Mollie- of Stripe-account te koppelen:

1. Ga naar **Geld → Betalingen** in het werkruimtemenu
2. Koppel onder **Online betalingen** de gewenste verwerker
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

## Creditnota's

Een creditnota (creditfactuur) is een officieel document dat een eerder verzonden factuur geheel of gedeeltelijk corrigeert. Het is wettelijk vereist wanneer je een bedrag moet corrigeren, een terugbetaling verleent, of een reeds afgeronde factuur annuleert.

### Een creditnota aanmaken

1. Open de detailpagina van de oorspronkelijke factuur
2. Klik op **Maak creditfactuur**
3. MyCompanyDesk genereert de creditnota automatisch: de klantgegevens en regelitems worden overgenomen van de bronfactuur, alle bedragen worden omgekeerd, en er wordt terugverwezen naar het oorspronkelijke factuurnummer
4. De creditnota krijgt een eigen volgnummer en wordt direct afgerond

De creditnota-PDF toont "Creditfactuur" als documenttitel en bevat een verwijzing naar de oorspronkelijke factuur.

### Regels

- Alleen afgeronde facturen kunnen gecrediteerd worden — concepten, offertes en bestaande creditnota's niet
- De bedragen op een creditnota zijn negatief opgeslagen, waardoor ze automatisch je omzet en BTW-totalen verlagen in rapportages en de aangifte
- Verlegde-BTW- en vrijgesteld-vlaggen worden overgenomen van de bronfactuur

### Impact op BTW

Creditnota's worden meegenomen in de BTW-aangifte naast reguliere facturen. De negatieve bedragen verlagen je afgedragen BTW (rubriek 5a) en de omzet in de relevante rubrieken. ICP-opgaaf, OSS en KOR-omzetberekeningen houden ook rekening met creditnota's.

## BTW-verlegnummer vereist

Wanneer je een factuur aanmaakt met verlegde BTW, vereist MyCompanyDesk dat de klant een geldig BTW-nummer heeft. Als het BTW-nummerveld van de klant leeg is, toont het formulier een validatiefout en voorkomt opslaan. Dit waarborgt dat je verlegde facturen wettelijk correct zijn — EU-regelgeving vereist het BTW-identificatienummer van de koper op verlegde documenten.

## Documenttypen

De factuurmodule ondersteunt meerdere documenttypen:

- **Factuur** — Standaard factuurtype
- **Creditnota** — Correctie van een eerder verzonden factuur (zie [Creditnota's](#creditnota-s) hierboven)
- **Herinnering** — Betalingsherinnering voor achterstallige facturen

## Filteren en zoeken

Gebruik de filterbalk om je facturen te verfijnen:

- **Status** — Concept, Verzonden, Achterstallig, Betaald, Geannuleerd
- **Klant** — Filter op specifieke klant
- **Project** — Filter op gekoppeld project
- **Datumbereik** — Filter op factuur- of vervaldatum
- **Zoeken** — Zoek op factuurnummer, klantnaam of omschrijving

## Exporteren

Exporteer je facturen als CSV voor gebruik in Excel, Google Sheets of je boekhoudsoftware.

::: info
CSV-export vereist het **Pro**-abonnement of hoger.
:::

## Afronden en versturen

Wanneer je een factuur afrondt of verstuurt, controleert MyCompanyDesk of je bedrijf een btw-id en IBAN op je profiel hebt staan. In Nederland is een btw-id verplicht op je factuur, en je IBAN vertelt je klanten waar ze kunnen betalen.

Ontbreekt een van de twee, dan opent een dialoog waarin je ze direct kunt invullen. Na opslaan wordt de factuur automatisch afgerond.

Wacht je nog op je btw-id van de Belastingdienst, of val je onder de KOR (kleineondernemersregeling)? Dan kun je de melding overslaan en toch doorgaan. Vul je btw-id later aan zodra je hem hebt.

## Tips

- Stel je [e-mailsjablonen](/nl/settings/email) in voordat je je eerste factuur verstuurt
- Gebruik [terugkerende facturen](/nl/features/recurring-invoices) voor regelmatige facturatie
- Bekijk de [rapportages](/nl/features/reports) pagina voor omzetinzichten
- Schakel [AI-suggesties](/nl/advanced/ai-features) in voor slimme omschrijvingsverbeteringen
