---
title: "Objecten & Activa"
---

# Objecten & Activa

Houd huurwoningen, voertuigen, apparatuur en andere bedrijfsactiva bij met volledig levenscyclusbeheer.

::: info
De objectenmodule is optioneel. Schakel deze in via **Bedrijf > Functies** als je hem niet in de navigatie ziet.
:::

## Overzicht

De objectenmodule is ontworpen voor bedrijven die fysieke activa beheren — met name verhuurbedrijven, vastgoedbeheerders en apparatuurverhuurdiensten. Elk object vertegenwoordigt een activum dat je bezit of beheert.

## Objecttypen

| Type | Toepassing |
|---|---|
| **Vastgoed** | Huurappartementen, kantoren, commerciele ruimten |
| **Voertuig** | Auto's, vrachtwagens, bestelbussen, bouwvoertuigen |
| **Machine** | Industriele apparatuur, gereedschap, generatoren |
| **Overig** | Elk ander type activum |

## Objectstatussen

| Status | Beschrijving |
|---|---|
| **Beschikbaar** | Klaar om verhuurd of gebruikt te worden |
| **Verhuurd** | Momenteel verhuurd aan een klant |
| **Inactief** | Niet beschikbaar (onderhoud, buiten gebruik) |

## Een object aanmaken

1. Ga naar **Objecten > Nieuw object**
2. Vul in:
   - **Naam** — Een duidelijke identificatie (bijv. "Appartement 3B" of "Graafmachine CAT 320")
   - **Type** — Vastgoed, Voertuig, Machine of Overig
   - **Status** — Beschikbaar, Verhuurd of Inactief
   - **Omschrijving** — Details over het activum
3. Klik op **Opslaan**

## Objectdetailpagina

De detailpagina toont:

- Objectinformatie en type
- Huidige status
- **WOZ-geschiedenis** (bij Vastgoed) — jaarlijkse WOZ-waarden die de Box 3-berekening gebruikt
- Gekoppelde contracten
- Verhuurgeschiedenis
- Bijbehorende facturen

### Contractoverzicht

Boven de contractenlijst geeft een samenvattingsbalk je in een oogopslag inzicht in de contractuele staat van het object:

- **Totaal aantal contracten** gekoppeld aan dit object
- **Getekende contracten**: hoeveel er volledig zijn ondertekend
- **Maandelijks actief totaal**: de gecombineerde maandwaarde van alle actieve contracten, genormaliseerd uit contracten met verschillende frequenties (wekelijks, per kwartaal, jaarlijks)

### WOZ-geschiedenis (Vastgoed-objecten)

Bij objecten van het type **Vastgoed** bevat de detailpagina een WOZ-geschiedenissectie. WOZ-waarden (Waardering Onroerende Zaken) zijn de door de gemeente vastgestelde woningwaarden die worden gebruikt in de Nederlandse Box 3-belastingberekening.

- **Bekijk** jaarlijkse WOZ-waarden per jaar.
- **Voeg** nieuwe waarden toe door het jaar en de WOZ-waarde van de gemeente in te vullen.
- Box 3 hanteert de WOZ-waarde met peildatum 1 januari. Vul de waarde in die geldt voor de start van dat belastingjaar.
- Als er nog geen waarden zijn ingevoerd, toont de sectie een lege staat met de vraag om de eerste toe te voegen.

#### Kadaster-koppeling

Wanneer je een Vastgoed-object met een geldig Nederlands adres toevoegt, kan MyCompanyDesk de WOZ-geschiedenis rechtstreeks uit het Kadaster ophalen. Dat scheelt handmatig invoeren en geeft je dezelfde waarden die de gemeente heeft geregistreerd.

- **Automatisch ophalen**: als de WOZ-geschiedenis nog leeg is, haalt het systeem bij het openen van de detailpagina de beschikbare waarden uit het Kadaster op.
- **Handmatig vernieuwen**: klik op **Vernieuwen** om op elk moment de nieuwste Kadaster-gegevens op te halen. Opgehaalde waarden krijgen een "Kadaster"-bronbadge.
- **Ontbrekende gegevens**: als het Kadaster geen gegevens heeft voor het adres (bijvoorbeeld bij een nieuwbouwwoning), verschijnt er een melding en kun je de waarden handmatig invoeren.

#### Geschatte huidige waarde

Bij woningen waarvan een WOZ-geschiedenis uit het Kadaster is opgehaald, projecteert MyCompanyDesk een geschatte huidige marktwaarde. Deze projectie neemt de meest recente WOZ-peildatum en past daarop de CBS PBK-prijsindex voor de COROP-regio van de woning toe. Zo krijg je een waarde die de actuele marktontwikkeling weerspiegelt.

### Ondertekenstatus van contracten

Elke contractregel op de objectdetailpagina toont nu een ondertekenstatusbadge naast de actief/gepauzeerd-badge. De kleur volgt dezelfde indeling als op de contractdetailpagina:

- **Getekend** (groen): alle partijen hebben ondertekend
- **Deels getekend** (blauw): sommige partijen hebben getekend, anderen nog niet
- **Verzonden** (geel): de ondertekenuitnodiging is verstuurd, nog geen handtekeningen
- **Verlopen** of **Beeindigd** (rood): het ondertekenverzoek is niet langer geldig

Volledig ondertekende contracten tonen een klein oogicoon waarmee je een inline preview van het ondertekende document opent. Zo kun je het afgeronde contract lezen zonder de objectdetailpagina te verlaten.

Legacycontracten die zijn aangemaakt voordat de e-signing-feature werd toegevoegd, tonen geen ondertekenbadge. Het systeem detecteert legacycontracten op dezelfde manier als op de contractdetailpagina: een contract moet ondertekenpartijen, een template of ondertekencontent hebben om een badge te tonen.

## Objecten koppelen aan contracten en facturen

Objecten integreren met andere MyCompanyDesk-functies:

- **Contracten** — Maak een huurcontract voor een object, met vermelding van de huurder (klant) en voorwaarden
- **Facturen** — Facturen kunnen worden gemarkeerd als huurfacturen en gekoppeld aan objecten
- **Terugkerende facturen** — Stel automatische maandelijkse huurfacturatie per object in

## Filteren

Filter je objecten op:

- **Type** — Vastgoed, Voertuig, Machine, Overig
- **Status** — Beschikbaar, Verhuurd, Inactief
- **Zoeken** — Zoek op naam of omschrijving

## Bulkacties

- **Status wijzigen** — Werk beschikbaarheid in bulk bij
- **Archiveren** — Verplaats naar archief
- **Verwijderen** — Verwijder objecten

## Tips

- Gebruik het statusfilter om snel te zien welke objecten beschikbaar zijn voor verhuur
- Koppel elke huurfactuur aan het bijbehorende object voor volledige financiele tracking per activum
- Stel contracten met herhaling in voor automatische huurfacturatie
- Bekijk de objectstatistieken bovenaan de pagina voor een beschikbaarheidsoverzicht
