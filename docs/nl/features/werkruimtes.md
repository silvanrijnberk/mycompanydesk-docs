---
title: Werkruimtes
last_verified: 2026-08-04
---

# Werkruimtes

De pagina Werkruimtes (`/werkruimtes`) is één centrale plek voor alles wat je beheert. Hij vervangt het oude boekhoudersportaal en past zich aan je daadwerkelijke rol aan: één werkruimte, meerdere eigen bedrijven, of klantadministraties.

> **Eigen geld en klantgeld worden nooit door elkaar gehaald.** Eigen bedrijven optellen heeft zin, want het geld is van jou. Een totaal over klantenadministraties zegt niets, dus die houdt de pagina strikt gescheiden.

## Waar vind je het

- Open de werkruimtekiezer in de zijbalk en kies **Werkruimtes beheren**.
- Zodra je meer dan één werkruimte hebt, verschijnt **Werkruimtes** ook direct in de linker navigatie.
- Het oude `/boekhouder`-adres verwijst hierheen door.

## Als je één werkruimte hebt

Je krijgt drie ingangen in plaats van een lege pagina:

- **Bedrijf toevoegen** voor een holding, tweede BV of zaak ernaast. Elk bedrijf krijgt een eigen administratie met aparte btw, facturen en boekhouding.
- **Boekhouder uitnodigen** als je samenwerkt met een externe boekhouder.
- **Aanmelden als partner** als je zelf boekhouder bent en meerdere klantadministraties vanuit één plek wilt beheren.

## Gecombineerde werkruimte: je eigen bedrijven

Als je meer dan één eigen bedrijf hebt, opent de pagina met een gecombineerd overzicht:

- Eén zin vertelt wat je bedrijven dit jaar samen omzetten, en of dat een winst of verlies oplevert.
- Een strip toont gezamenlijke omzet, resultaat, te innen en btw opzij.
- Een aandeelbalk toont de omzetverdeling per bedrijf.
- Onder de band staat één rij per bedrijf. De volgorde is vast (thuisbedrijf eerst, dan aanmaakdatum), zodat je altijd weet waar je moet zoeken.

### Signalen in elke rij

Elke bedrijfsrij toont chips voor wat er nu aandacht vraagt. Elke chip is een link: die schakelt naar het juiste bedrijf en brengt je op de pagina die bij het signaal hoort.

| Chip | Betekenis | Link |
|---|---|---|
| Btw-periode met deadline | Hoeveel dagen tot de aangifte, of hoe laat je bent | `/belastingen/btw` |
| Openstaande facturen | Facturen die niet op tijd betaald zijn | `/facturen` |
| Bonnetjes ontbreken | Kostenposten zonder bon | `/uitgaven` |
| Concepten | Facturen die nog concept zijn | `/facturen` |
| Btw ingediend | De vorige aangifte is ingediend | `/belastingen/btw` |
| Proefperiode loopt af | Het bedrijf zit nog in een Office-proefperiode | `/settings/billing` |
| Op non-actief | Het bedrijf is op non-actief gezet; je kunt nog inzien en exporteren | `/werkruimtes` |

Eigen bedrijven gebruiken dezelfde KPI's als het dashboard van elk afzonderlijk bedrijf, dus de cijfers kunnen niet tegenstrijdig zijn.

## Kantoor-werkruimte: klanten

Als je boekhouder bent en klantadministraties beheert, wordt de pagina een triage-overzicht:

- Een headline vertelt hoeveel van je klanten vandaag iets nodig hebben.
- Een cijferstrip toont het totaal aantal klanten, deadlines deze week, klanten die aandacht vragen, en open uitnodigingen.
- Rijen staan op urgentie gesorteerd, zodat administraties die vandaag actie nodig hebben bovenaan staan.
- Een zoekveld verschijnt vanaf zes klanten.
- Open uitnodigingen staan in een eigen kaart; een uitgenodigde klant telt nog niet als actieve klant.

De chips en werken hetzelfde als in de gecombineerde werkruimte, maar rijen gebruiken geaggregeerde signalen zodat het overzicht meegroeit met grote klantenbestanden. Het overzicht telt klantgeld niet bij elkaar op.

## Een eigen bedrijf toevoegen

Open **Bedrijf toevoegen** en geef het nieuwe bedrijf een naam. Elk toegevoegd bedrijf start met een eigen proefperiode van 60 dagen. Klanten, facturen en boekhouding blijven per bedrijf volledig gescheiden.

## Een bedrijf beheren of verwijderen

Open voor elk eigen bedrijf het rijmenu en kies **Beheren**. Er opent een zijpaneel met twee opties.

### Op non-actief zetten

Kies **Op non-actief zetten** als je stopt met werken in een bedrijf maar de administratie moet bewaren. De administratie blijft leesbaar en je kunt alles blijven exporteren, omdat je de boeken voor de wettelijke bewaartermijn moet bewaren. Je kunt geen nieuwe facturen, uitgaven of klanten toevoegen, en het bedrijf telt niet meer mee voor je abonnement.

Om verder te gaan, open je hetzelfde zijpaneel en kies je **Weer activeren**.

### Een bedrijf verwijderen

Kies **Verwijderen** alleen voor een bedrijf dat je per ongeluk hebt aangemaakt. De werkruimte controleert of er al iets is geboekt; zodra er een factuur, uitgave of klant bestaat, wordt verwijderen geweigerd en moet je het bedrijf op non-actief zetten. Deze controle gebeurt aan de serverkant, zodat de melding altijd klopt met de werkelijke data.

## Een klant uitnodigen

Boekhouders kunnen hier direct een klant uitnodigen:

1. Klik op **Klant uitnodigen**.
2. Vul het e-mailadres, de bedrijfsnaam en optioneel het KVK-nummer in.
3. Klik op **Uitnodiging versturen**.

De klant maakt zelf een account en blijft eigenaar van de administratie. Jij krijgt toegang zodra de uitnodiging is geaccepteerd, en de klant kan die toegang op elk moment weer intrekken. Openstaande uitnodigingen kun je opnieuw sturen of intrekken. De link is 30 dagen geldig.

## Navigatie volgt je rol

De linker zijbalk verbergt nu items die je huidige werkruimterol niet mag gebruiken, zodat je geen links meer ziet die een 403 geven. De API stuurt dit aan via een deny-lijst: als een nieuw endpoint voor een rol wordt afgeschermd, verdwijnt het navigatie-item automatisch.

In een klantwerkruimte is de rail korter, want onderdelen die bij de klant zelf horen (inbox, website, abonnement, teaminstellingen, domeinen en AI-hulp) zijn voor een boekhouder niet beschikbaar. De werkruimtekiezer en het item Werkruimtes blijven altijd zichtbaar, zodat je altijd tussen administraties kunt schakelen.

## Rechten

- Workspace-eigenaren en team-admins kunnen bedrijven toevoegen en werkruimte-instellingen beheren.
- Boekhouders zien alleen de werkruimtes en pagina's die hun klant toegankelijk heeft gemaakt.
- Teamleden zien Werkruimtes alleen als ze meer dan één werkruimte hebben en hun rol dat toestaat.

## Gerelateerd

- [Toegang en boekhouder](/nl/settings/team) voor het uitnodigen van boekhouders en instellen van paginarechten
- [Rapporten](/nl/features/reports) voor de weggebleven-klantenweergave en andere rapporten
- [Dashboard](/nl/features/dashboard) voor de dagelijkse briefing van één werkruimte
