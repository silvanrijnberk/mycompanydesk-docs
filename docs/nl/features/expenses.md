---
title: Uitgaven
last_verified: 2026-08-05
---

# Uitgaven

Houd al je zakelijke uitgaven bij, scan bonnen met AI en categoriseer kosten voor nauwkeurige boekhouding en BTW-aangifte.

## Overzicht

De uitgavenpagina toont al je geregistreerde uitgaven. De betaalstatus-tabs in de bovenste balk laten je snel wisselen tussen:

- **Alles**: elke geregistreerde uitgave
- **Onbetaald**: nog niet betaalde uitgaven
- **Betaald**: al betaalde uitgaven

Je kunt nog steeds filteren op categorie, project, datumbereik of status. Klik op een uitgave om de detailpagina te openen; klik op **Nieuw** om er handmatig een toe te voegen, of **Scan bon** om er een te extraheren uit een afbeelding of PDF.

## Uitgavecategorieën

Categorieën worden per werkruimte bewaard in de tabel `expense_categories`; het is geen vaste lijst in de app. Elke categorie heeft:

- Een **sleutel** (slug voor de API en het formulier).
- Een standaard **BTW-behandeling**.
- Een **aftrekbar percentage** voor gedeeltelijk aftrekbare categorieën.
- Een **investeringsvlag** die overeenkomende uitgaven automatisch als investering markeert.
- Een standaard **afschrijvingstermijn** in maanden voor de afschrijvingsmotor.

De instelwizard plant een op de branche afgestemde set bovenop de elf standaardcategorieën, zodat een software-bedrijf extra sleutels als `cloud_services_eu` krijgt, terwijl een horeca-bedrijf bijvoorbeeld `food_client_meeting` krijgt. Nieuwe categorieën vanuit de wizard worden op dezelfde manier gevalideerd als standaardcategorieën; onbekende of verkeerd getypte sleutels worden geweigerd met een 400. Systeemcategorieën kun je niet bewerken of verwijderen, omdat ze de koppeling met de aangifte bevatten. Je kunt een categorie archiveren om hem uit het formulier te verbergen. Eigen categorieën toevoegen, bewerken en verwijderen doe je via **Instellingen > Uitgavencategorieën**.

## Een uitgave aanmaken

### Handmatige invoer

1. Ga naar **Uitgaven > Nieuwe uitgave**
2. Vul in:
   - **Omschrijving** - Waarvoor de uitgave is
   - **Bedrag** - Totale kosten (inclusief of exclusief BTW)
   - **Datum** - Wanneer de uitgave plaatsvond
   - **Categorie** - Selecteer uit je werkruimtelijst (standaardcategorieën of zelf toegevoegde categorieën). Als je een standaard uitgavecategorie hebt ingesteld onder werkruimte-instellingen, is deze hier al vooringevuld.
   - **BTW-tarief** - Wordt vooringevuld met het standaard BTW-tarief voor uitgaven van je werkruimte (in te stellen onder werkruimte-instellingen). Je kunt het altijd per uitgave aanpassen.
   - **Betaalmethode** - Wordt vooringevuld met de standaard betaalmethode voor uitgaven van je werkruimte, indien ingesteld.
3. Voeg optioneel een **bon**-afbeelding of PDF toe
4. Koppel optioneel aan een **project** of **klant**
5. Klik op **Opslaan**

### Snel toevoegen

Gebruik de snel-toevoegen-lade voor snelle uitgaveninvoer:

1. Klik op de snel-toevoegen-knop op de uitgavenlijst
2. Vul het bedrag en de omschrijving in
3. Selecteer een snelle categorie
4. Sla op

### Vanuit een sjabloon

Bij het aanmaken van een nieuwe uitgave klik je op **Vanuit sjabloon** (alleen zichtbaar als je opgeslagen uitgavesjablonen hebt). Kies een sjabloon en het formulier vult zich ter plekke met de opgeslagen leverancier, categorie, bedrag en andere gegevens. Pas aan waar nodig en klik op **Opslaan**.

### Van banktransacties

Wanneer je [bankfeed](/nl/features/bank) is gekoppeld, worden gecategoriseerde uitgaande transacties automatisch omgezet naar conceptuitgaven. Elke uitgave krijgt de tegenpartij als leverancier, het absolute bedrag als bruto, het standaard BTW-tarief en de behandeling van de categorie, en de boekingsdatum van de transactie. Conceptuitgaven verschijnen eerst in de beoordelingsinbox van de bankfeed, waar je ze kunt bevestigen, bewerken of afwijzen voordat ze in je boekhouding komen. Zie [auto-importuitgaven beoordelen](/nl/features/bank#auto-importuitgaven-beoordelen) voor de volledige workflow.

### Bonnen scannen

Laat AI automatisch uitgavegegevens uit bonnen extraheren:

1. Ga naar **Uitgaven > Bon scannen**
2. Upload een bonafbeelding (JPEG, PNG, WebP) of PDF
3. Kies de extractiemodus:
   - **Enkel** - Een uitgave van de bon
   - **Meervoudig** - Meerdere regelitems van een bon
4. Controleer de geextraheerde gegevens (datum, bedrag, leverancier, omschrijving)
5. Bevestig om de uitgave(n) aan te maken

::: info
Bonnen scannen vereist het **Pro**-abonnement of hoger. Het BTW-tarief op een nieuwe uitgave begint bij je standaard werkruimte-instelling.
:::

## BTW-afhandeling

Elke uitgave kan een eigen BTW-tarief hebben. Veelgebruikte opties:

- **21%** - Standaardtarief
- **9%** - Verlaagd tarief
- **0%** - Nultarief of vrijgesteld

Het BTW-bedrag wordt automatisch berekend en opgenomen in je [BTW-rapportages](/nl/features/vat).

### BTW-behandeling

In speciale gevallen stel je de BTW-behandeling van de uitgave in:

- **Standaard**: binnenlandse BTW.
- **Verlegd (EU)**: je rekent de BTW zelf af voor een zakelijke aankoop uit de EU, rubriek 4b.
- **Verlegd (buiten de EU)**: leverancier buiten de EU factureert 0% BTW (sources/vat-rates.yaml#countries.NL.zero), jij rekent zelf af in rubriek 4a. Gebruik dit bijvoorbeeld voor een Amerikaanse leverancier zoals Anthropic of OpenAI.
- **Vrijgesteld**: de levering is BTW-vrij.
- **Buitenlandse BTW in rekening gebracht**: buitenlandse BTW die mogelijk via de EU-teruggaafprocedure terug te vragen is.

De behandeling wordt meestal overgenomen uit de categorie. Je kunt hem per uitgave overschrijven.

### Handmatig BTW-bedrag

Meestal berekent MyCompanyDesk het BTW-bedrag uit het tarief en het nettobedrag. Komt dat niet overeen met het document van de leverancier, bijvoorbeeld een creditnota met netto EUR 0 en alleen BTW, dan kun je het BTW-bedrag handmatig invoeren. Het tarief bepaalt het bedrag dan niet meer; het formulier gebruikt jouw ingevoerde bedrag.

### Correcties in vergrendelde perioden

Zit een uitgave in een vergrendelde BTW-periode, dan blokkeert het formulier wijzigingen in de financiële velden en biedt een correctiepad. De correctie wordt in de huidige open periode aangemaakt en verwijst naar de oorspronkelijke vergrendelde uitgave, zodat je later nog kunt zien wat er is gewijzigd.

## Uitgaven koppelen

Koppel uitgaven aan:

- **Projecten** - Houd projectkosten nauwkeurig bij
- **Klanten** - Koppel kosten aan specifieke klanten, bijvoorbeeld om ze later door te factureren
- **Leveranciers** - Registreer aan wie je hebt betaald

## Bulkacties

Selecteer meerdere uitgaven voor:

- **Categoriseren** - Wijzig categorie in bulk
- **Archiveren** - Verplaats naar archief
- **Verwijderen** - Permanent verwijderen
- **Exporteren** - Download als CSV

## Kilometervergoeding

Rij je privé zakelijk, dan kun je die ritten bundelen tot één uitgave met een kilometervergoeding.

1. Ga naar **Uitgaven** en open de kilometervergoeding.
2. Kies de periode die je wilt boeken.
3. Selecteer de ritten die je meeneemt.
4. Klik op **Boek als uitgave**.

De uitgave wordt aangemaakt met één regel voor het totaal aan zakelijke kilometers.

<!-- TODO(source-missing): Het Nederlandse kilometervergoedingstarief per kilometer staat nog niet in sources/. Quote het tarief niet in de documentatie totdat een mens het huidige bedrag heeft gecontroleerd op belastingdienst.nl. -->

Als je werkruimte een bedrijfsauto gebruikt, zijn de werkelijke autokosten al als uitgave geboekt; een aparte kilometervergoeding is dan niet nodig.

## Terugkerende uitgaven

Voor regelmatige kosten (huur, abonnementen, etc.) stel je [terugkerende uitgaven](/nl/features/recurring-expenses) in om het aanmaken te automatiseren.

## Importeren

Importeer uitgaven vanuit CSV:

1. Ga naar **Profiel > Importeren**
2. Selecteer **Uitgaven** als gegevenstype
3. Upload je CSV-bestand
4. Koppel kolommen aan velden
5. Controleer en bevestig

## Tips

- Stel je standaard BTW-tarief, standaard uitgavecategorie en standaard betaalmethode voor uitgaven in onder **Instellingen > Uitgaven** zodat het formulier niet steeds leeg begint. Een 0%-BTW-instelling werkt correct; het formulier behandelt die als een bewuste keuze.
- Eigen categorieën beheer je in **Instellingen > Uitgavencategorieën**. Systeemcategorieën kun je niet verwijderen; archiveer ze als je ze niet meer wilt zien.
- Schakel [AI-suggesties](/nl/advanced/ai-features) in voor automatische categorie-aanbevelingen
- Voeg altijd bonnen toe - ze zijn essentieel voor belastingcontroles
- Gebruik projecten om de verhouding uitgaven-inkomsten bij te houden
- Bekijk het [uitgavenrapport](/nl/features/reports) voor bestedingsoverzichten
