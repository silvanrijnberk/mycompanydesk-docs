---
title: "Objecten & Activa"
---

# Objecten & Activa

Houd huurwoningen, voertuigen, apparatuur en andere bedrijfsactiva bij met volledig levenscyclusbeheer.

::: info
De objectenmodule (Vastgoed) is een legacymodule. Werkruimtes die hem al gebruiken worden volledig ondersteund, maar in nieuwe werkruimtes kan de module niet meer worden ingeschakeld. Heeft jouw werkruimte hem wel, dan vind je de schakelaar onder **Instellingen > Onderdelen**.
:::

## Overzicht

De objectenmodule is ontworpen voor bedrijven die fysieke activa beheren, met name verhuurbedrijven, vastgoedbeheerders en apparatuurverhuurdiensten. Elk object vertegenwoordigt een activum dat je bezit of beheert.

## Objecttypen

| Type | Toepassing |
|---|---|
| **Pand / Garage** | Woningen, garages, opslagboxen |
| **Appartement** | Huurappartementen |
| **Kantoor** | Kantoorruimten |
| **Retail** | Winkels en commerciële ruimten |
| **Voertuig** | Auto's, vrachtwagens, bestelbussen, bouwvoertuigen |
| **Machine** | Industriële apparatuur, generatoren |
| **Apparatuur** | Gereedschap en apparaten |
| **Meubilair** | Meubels die je verhuurt |
| **Elektronica** | Computers, AV-apparatuur |
| **Overig** | Elk ander type activum |

## Objectstatussen

| Status | Beschrijving |
|---|---|
| **Actief** | In gebruik |
| **Beschikbaar** | Klaar om verhuurd of gebruikt te worden |
| **Bezet** | Momenteel verhuurd aan of in gebruik door een klant |
| **Onderhoud** | Tijdelijk buiten gebruik |
| **Inactief** | Niet beschikbaar |
| **Verkocht** | Niet meer van jou; bewaard voor de administratie |
| **Afgestoten** | Afgeschreven of weggedaan |

De lijst biedt ook een **Verhuurd**-filter dat alles toont wat momenteel bezet is.

## Een object aanmaken

1. Ga naar **Objecten > Nieuw object**
2. Vul in:
   - **Naam**: een duidelijke identificatie (bijv. "Appartement 3B" of "Graafmachine CAT 320")
   - **Type**: een van de tien typen hierboven
   - **Status**: waar het object zich in zijn levenscyclus bevindt
   - **Referentie**: je eigen referentie of code
   - **Standaard huurprijs**: de gebruikelijke huur, per week, maand of jaar, met of zonder BTW
   - **Omschrijving** en **adres**: details over het activum
3. Klik op **Opslaan**

## Objectdetailpagina

De detailpagina toont:

- Objectinformatie en type
- Huidige status
- **Totale omzet**: omzet op basis van betaalde facturen voor dit object
- **Actieve contracten**: aantal actieve contracten dat aan dit object is gekoppeld
- **WOZ-geschiedenis** (bij woningen): jaarlijkse WOZ-waarden die de Box 3-berekening gebruikt
- Gekoppelde contracten
- Verhuurgeschiedenis
- Bijbehorende facturen

### Contractoverzicht

Boven de contractenlijst geeft een samenvattingsbalk je in een oogopslag inzicht in de contractuele staat van het object:

- **Totaal aantal contracten** gekoppeld aan dit object
- **Getekende contracten**: hoeveel er volledig zijn ondertekend
- **Maandelijks actief totaal**: de gecombineerde maandwaarde van alle actieve contracten, genormaliseerd uit contracten met verschillende frequenties (wekelijks, per kwartaal, jaarlijks)

### WOZ-geschiedenis (woning-objecten)

Bij objecten van het type **Pand / Garage** bevat de detailpagina een WOZ-geschiedenissectie. WOZ-waarden (Waardering Onroerende Zaken) zijn de door de gemeente vastgestelde woningwaarden die worden gebruikt in de Nederlandse Box 3-belastingberekening.

- **Bekijk** jaarlijkse WOZ-waarden per jaar.
- **Voeg** nieuwe waarden toe door het jaar en de WOZ-waarde van de gemeente in te vullen.
- Box 3 hanteert de WOZ-waarde met peildatum 1 januari. Vul de waarde in die geldt voor de start van dat belastingjaar.
- Als er nog geen waarden zijn ingevoerd, toont de sectie een lege staat met de vraag om de eerste toe te voegen.

#### Kadaster-koppeling

Wanneer je een woning-object met een geldig Nederlands adres toevoegt, kan MyCompanyDesk de WOZ-geschiedenis rechtstreeks uit het Kadaster ophalen. Dat scheelt handmatig invoeren en geeft je dezelfde waarden die de gemeente heeft geregistreerd.

- **Automatisch ophalen**: als de WOZ-geschiedenis nog leeg is, haalt het systeem bij het openen van de detailpagina de beschikbare waarden uit het Kadaster op.
- **Handmatig vernieuwen**: klik op **Vernieuwen** om op elk moment de nieuwste Kadaster-gegevens op te halen. Opgehaalde waarden krijgen een "Kadaster"-bronbadge.
- **Ontbrekende gegevens**: als het Kadaster geen gegevens heeft voor het adres (bijvoorbeeld bij een nieuwbouwwoning), verschijnt er een melding en kun je de waarden handmatig invoeren.

#### Geschatte huidige waarde

Bij woningen waarvan een WOZ-geschiedenis uit het Kadaster is opgehaald, projecteert MyCompanyDesk een geschatte huidige marktwaarde. Deze projectie neemt de meest recente WOZ-peildatum en past daarop de CBS PBK-prijsindex voor de COROP-regio van de woning toe. Zo krijg je een waarde die de actuele marktontwikkeling weerspiegelt.

### Ondertekenstatus van contracten

Elke contractregel op de objectdetailpagina toont een ondertekenstatusbadge naast de actief/gepauzeerd-badge. De kleur volgt dezelfde indeling als op de contractdetailpagina:

- **Getekend** (groen): alle partijen hebben ondertekend
- **Deels getekend** (blauw): sommige partijen hebben getekend, anderen nog niet
- **Verzonden** (geel): de ondertekenuitnodiging is verstuurd, nog geen handtekeningen
- **Verlopen** of **Beëindigd** (rood): het ondertekenverzoek is niet langer geldig

Volledig ondertekende contracten tonen een klein oogicoon waarmee je een inline preview van het ondertekende document opent. Zo kun je het afgeronde contract lezen zonder de objectdetailpagina te verlaten.

Legacycontracten die zijn aangemaakt voordat de e-signing-feature werd toegevoegd, tonen geen ondertekenbadge. Het systeem detecteert legacycontracten op dezelfde manier als op de contractdetailpagina: een contract moet ondertekenpartijen, een template of ondertekencontent hebben om een badge te tonen.

## Objecten koppelen aan contracten en facturen

Objecten integreren met andere MyCompanyDesk-functies:

- **Contracten**: maak een huurcontract voor een object, met vermelding van de huurder (klant) en voorwaarden
- **Facturen**: facturen kunnen worden gemarkeerd als huurfacturen en gekoppeld aan objecten
- **Terugkerende facturen**: stel automatische maandelijkse huurfacturatie per object in

## Filteren

Filter je objecten op:

- **Type**: een van de tien objecttypen
- **Status**: Beschikbaar, Verhuurd, Onderhoud, Actief, Verkocht, Afgestoten of Inactief
- **Periode** en **zoeken**: zoek op naam of omschrijving
- **Weergave**: wissel tussen Actief, Archief en Prullenbak

## Bulkacties

Selecteer meerdere objecten om ze in één keer te **archiveren** of te **verwijderen**. In de archiefweergave kun je herstellen naar actief of naar de prullenbak verplaatsen; in de prullenbakweergave kun je herstellen naar het archief of definitief verwijderen.

## Tips

- Gebruik het statusfilter om snel te zien welke objecten beschikbaar zijn voor verhuur
- Koppel elke huurfactuur aan het bijbehorende object voor volledige financiële tracking per activum
- Stel contracten met herhaling in voor automatische huurfacturatie
- Bekijk de objectstatistieken bovenaan de pagina voor een beschikbaarheidsoverzicht
