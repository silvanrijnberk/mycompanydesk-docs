---
title: "Bezittingen"
description: "Houd panden, voertuigen, machines en andere bezittingen bij: waarde, afschrijving, huur, kosten en WOZ. Op Office, aan te zetten bij Onderdelen."
---

# Bezittingen

Houd bij wat je bedrijf bezit, wat het waard is en wat het oplevert: panden en garages die je verhuurt, je bedrijfsauto, machines, gereedschap en andere bezittingen.

::: info
**Bezittingen** zit in het Office-abonnement. Zie je het niet in de navigatie, zet dan **Bezittingen & objecten** aan via **Instellingen › Onderdelen**.
:::

## Overzicht

De pagina **Bezittingen** toont al je bezittingen, gegroepeerd per soort (Panden, Vervoer, Gereedschap en machines, Inventaris, Elektronica, Overig). Bovenaan staan de kerngetallen: **Waarde nu**, **Huurinkomsten**, wat er **Staat leeg**, **Kosten dit jaar** en **Afschrijving dit jaar**.

## Typen

Bij het aanmaken kies je een type: **Pand / Garage**, **Appartement**, **Kantoor**, **Winkel**, **Voertuig**, **Machine**, **Apparatuur**, **Meubilair**, **Elektronica** of **Overig**. Panden, appartementen, kantoren en winkels krijgen een adres en een WOZ-geschiedenis.

## Statussen

| Status | Betekenis |
|---|---|
| **Actief** | In gebruik (de standaard voor een nieuwe bezitting) |
| **Beschikbaar** | Klaar om verhuurd of gebruikt te worden |
| **Bezet** | In gebruik of verhuurd |
| **Onderhoud** | Tijdelijk niet beschikbaar door onderhoud |
| **Inactief** | Niet in gebruik |
| **Verkocht** / **Afgestoten** | Uit je bedrijf verdwenen |

Een bezitting met een lopend huurcontract staat in de lijst als **Verhuurd**.

## Een bezitting toevoegen

1. Ga naar **Bezittingen** en klik op **Bezitting toevoegen**
2. Vul de **Naam** in (bijvoorbeeld "Garagebox Utrecht, box 12") en kies het **Type**
3. Klik op **Opslaan**

::: tip Meer gegevens
Alleen de naam is verplicht. In de inklapbare blokken vul je de rest in wanneer je wilt: **Adres / Locatie** (bij panden), **Details** (referentie, omschrijving, standaard huurprijs), **Waarde** (aankoopdatum, aankoopprijs, huidige waarde, verkoopdatum, opbrengst en btw-regime) en **Status**. Het btw-regime start op **Met btw**; bij een **Appartement** (woonruimte) start het op **Zonder btw**. Je eigen keus in het formulier geldt altijd, en bestaande bezittingen houden wat er bij ze is opgeslagen.
:::

## De pagina van een bezitting

De pagina van een bezitting toont:

- Bovenaan de **Totale omzet** en de status, met het aantal actieve contracten
- De kerngegevens: adres (met kaartlink), standaard huurprijs, huidige huurder en de aanschaf
- **Geschiedenis**: contracten, facturen, onderhoud en documenten in één tijdlijn
- **WOZ-geschiedenis** (bij panden)
- **Bedrijfsmiddel**: aanschafwaarde, afschrijving en boekwaarde, zodra er een aankoop als investering aan de bezitting hangt
- **Kilometeradministratie** (bij voertuigen met ritten)
- **Financieel overzicht**: **Totale omzet**, **Totale kosten**, **Netto cashflow** en een uitsplitsing **Per jaar**
- **Actiepunten**, bijvoorbeeld een ontbrekende WOZ-waarde voor box 3

### Omzet en facturen

De **Totale omzet** telt alle betaalde facturen die aan de bezitting hangen, exclusief btw:

- facturen uit een contract dat aan deze bezitting hangt
- facturen die direct aan de bezitting zijn gekoppeld, zoals servicekosten, losse facturen en verkoopfacturen

Het Box 3-rapport telt alleen ontvangen huur en gaat uit van de datum waarop het geld binnenkwam. Die twee bedragen kunnen daarom verschillen; de pagina legt dat ook uit.

### Geschiedenis

De **Geschiedenis** zet contracten, facturen, onderhoud en documenten in één chronologische lijst. Via **Toevoegen** kies je **Onderhoud loggen** (datum, omschrijving, categorie, kosten, uitgevoerd door) of **Document toevoegen**. Onderhoud en documenten verwijder je hier; een contract of factuur beheer je op zijn eigen pagina.

Een contract dat nog op een handtekening wacht, toont zijn ondertekenstatus: **Niet verstuurd**, **In afwachting**, **Deels getekend**, **Verlopen** of **Beëindigd**. Is het contract getekend, dan zie je weer of het actief is. Oudere contracten die nooit voor digitaal ondertekenen zijn opgezet, tonen geen ondertekenstatus.

### WOZ-geschiedenis (panden)

Bij panden, appartementen, kantoren en winkels houdt de pagina de WOZ-waarden per jaar bij. Box 3 gebruikt de WOZ-waarde die gold op 1 januari van dat jaar (de peildatum).

- Voeg een waarde toe met het jaar en de WOZ-waarde van de gemeente.
- Heeft de bezitting een geldig Nederlands adres en is de geschiedenis nog leeg, dan haalt MyCompanyDesk de waarden zelf uit het Kadaster op. Met **Vernieuwen** haal je op elk moment de nieuwste gegevens op; die waarden krijgen het label **Kadaster**.
- Heeft het Kadaster geen gegevens voor het adres (bijvoorbeeld bij nieuwbouw), dan zie je een melding en vul je de waarden zelf in.

Is er een WOZ-geschiedenis uit het Kadaster, dan toont de kaart ook een **Geschatte huidige waarde**: de laatste WOZ-waarde, doorgerekend met de woningprijsindex van het CBS voor de regio van het pand.

### Bedrijfsmiddel en bodemwaarde

Hangt er een aankoop aan de bezitting die je als investering afschrijft (koppel de uitgave via het veld **Bezitting** in het uitgavenformulier), dan toont het blok **Bedrijfsmiddel**:

- **Aanschafwaarde**: wat je ervoor betaalde
- **Op de balans**: het zakelijke deel dat geactiveerd is, na een eventueel niet-aftrekbaar btw-deel en privégebruik
- **Afgeschreven tot nu** en **Afschrijving dit jaar tot nu**
- **Boekwaarde**: wat er nog op de balans staat
- Het afschrijvingsschema per kalenderjaar

Bij gebouwen staat daarnaast de **Bodemwaarde**: de wettelijke ondergrens, gebaseerd op de WOZ-waarde, waaronder de boekwaarde van een gebouw niet mag zakken. MyCompanyDesk past het schema niet stilletjes aan. Komt de afschrijving onder de bodemwaarde uit, dan zie je **Te ver afgeschreven**; staat de boekwaarde precies op de bodemwaarde, dan krijg je daar een melding van. Je lost het op door de restwaarde van de aankoop op de bodemwaarde te zetten. Heeft de bezitting één aankoop, dan opent de link **Open de aankoop om de restwaarde aan te passen** die direct. Voertuigen, machines en andere bezittingen die geen gebouw zijn, hebben geen bodemwaarde.

### Verkocht of afgestoten

Verkoop je een bezitting, gooi je hem weg of haal je hem anderszins uit je bedrijf, vul dan in het blok **Waarde** van het formulier in:

- **Verkoopdatum**: de datum waarop de bezitting je bedrijf verliet.
- **Opbrengst (excl. btw)**: het ontvangen bedrag. Laat het leeg als je het nog niet weet; vul 0 in als je hem zonder opbrengst hebt weggegooid.

Zodra de verkoopdatum is opgeslagen, toont het blok **Bedrijfsmiddel** een onderdeel **Verkocht of afgestoten** met de datum, de **Boekwaarde bij verkoop**, de **Opbrengst** en de **Boekwinst** of het **Boekverlies**. Zonder opbrengst zie je alleen de afgeschreven boekwaarde, met de melding dat de boekwinst of het boekverlies pas vast te stellen is als de opbrengst bekend is.

Het blok waarschuwt ook als het afschrijvingsschema nog bedragen na de verkoopdatum plant. Die blijven in je winst-en-verliesrekening terechtkomen tot je de afschrijvingstermijn van de aankoop aanpast.

## Koppelen aan contracten, facturen en uitgaven

- **Contracten**: maak een huurcontract voor een bezitting, met de huurder (klant) en de voorwaarden.
- **Facturen**: koppel een factuur in het factuurformulier direct aan een bezitting, of laat hem uit een huurcontract komen. Beide tellen mee in de totale omzet.
- **Terugkerende facturen**: koppel een terugkerende factuur aan een bezitting voor automatische huurfacturatie.
- **Uitgaven**: koppel kosten via het veld **Bezitting** aan een bezitting; ze tellen dan mee in de kosten van die bezitting.

## Filteren

Filter de lijst op:

- **Soort**: de groep (bijvoorbeeld Panden of Vervoer)
- **Type**: het type van de bezitting
- **Status**: een status, of **Leeg (met huurprijs)** voor bezittingen met een huurprijs die nu niet verhuurd zijn
- **Zoeken** op naam of omschrijving

Met **Weergave** wissel je tussen actieve, gearchiveerde en verwijderde bezittingen.

## Bulkacties

- **Archiveer** en **Verwijderen** (naar de prullenbak) in de actieve lijst
- **Herstellen naar actief** en **Naar prullenbak** in het archief
- **Herstellen naar archief** en **Definitief verwijderen** in de prullenbak

Een bezitting met actieve contracten kun je niet verwijderen.

## Tips

- Gebruik het filter **Leeg (met huurprijs)** om snel te zien wat je kunt verhuren
- Koppel elke huurfactuur en elke kostenpost aan de bijbehorende bezitting, dan kloppen omzet, kosten en netto cashflow per bezitting
- Gebruik terugkerende facturen of contracten voor automatische huurfacturatie
- Vul de WOZ-waarde per 1 januari in voor je box 3-aangifte
