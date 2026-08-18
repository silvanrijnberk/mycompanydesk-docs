---
title: Dashboard
last_verified: 2026-08-18
---

# Dashboard

Het dashboard op `/dashboard` is het startscherm van je werkruimte. Je ziet hier hoe je bedrijf ervoor staat: een korte samenvatting, een gerangschikte lijst van aandachtspunten en een aantal datablokken die alleen verschijnen als ze echt iets toe te voegen hebben.

## Opbouw

De pagina bestaat uit een vaste set blokken in een enkele scrollbare weergave. De volgorde verandert niet, maar een blok wordt alleen getoond als je bedrijfsdata de drempel haalt. Een eenvoudig bedrijf krijgt dus een kortere pagina, geen lege plekken.

Bovenaan staat een korte **lede**, gevolgd door een periodekiezer en de KPI-rij. Daaronder komen de gerangschikte **Vandaag**-signalen, gevolgd door ondersteunende blokken zoals de trendgrafiek, ageing, omzetbronnen, offertepijplijn, uitgavenmix, cash-grafiek, btw-kaart en recente activiteit.

## Periodekiezer

Alle getallen in de samenvattingsrij en in de tempo-berekeningen volgen de gekozen periode. Je kiest tussen **maand**, **kwartaal** en **jaar**. De trendgrafiek blijft altijd 12 maanden breed, zodat de vergelijking eerlijk blijft.

## Lede

De lede is een korte alinea die het huidige bedrijfsbeeld samenvat. Hij wordt gemaakt uit dezelfde live data als de rest van de pagina en is gekoppeld aan de onderliggende signalen, zodat namen, bedragen en routes niet uit elkaar kunnen lopen.

Standaard is de lede deterministisch. Bij Pro-werkruimtes kan een AI-laag hem anders verwoorden, maar het model herformuleert alleen feiten die de deterministische motor al had gevonden. Is het model niet beschikbaar, dan blijft de deterministische lede staan.

## KPI-rij

De KPI-rij bevat maximaal vijf tegels. Elke tegel toont een hoofdgetal, een vergelijking met de vorige vergelijkbare periode en een kleine trendlijn. Tegels linken door naar het bijbehorende rapport of de bijbehorende lijst.

| Tegel | Wat je ziet |
|---|---|
| **Omzet** | Omzet over de gekozen periode, met mutatie ten opzichte van de vorige periode |
| **Kosten** | Kosten over de gekozen periode, met mutatie ten opzichte van de vorige periode |
| **Winst** | Nettowinst over de gekozen periode, met mutatie ten opzichte van de vorige periode |
| **Debiteuren** | Openstaande facturen en DSO (days sales outstanding) |
| **Liquiditeit / runway** | Huidige kaspositie en geschatte runway |

Een tegel zonder eerlijke historie toont geen trendlijn in plaats van een verzonnen vlakke lijn. Stijgende debiteuren krijgen bijvoorbeeld een pijl omhoog in waarschuwingskleur, omdat richting en betekenis los van elkaar worden beoordeeld.

## Vandaag-signalen

De Vandaag-motor is de beslissingslaag achter het dashboard. Hij rangschikt wat er vandaag aandacht vraagt in vier ernstniveaus:

- **critical**: geld loopt weg of een harde deadline komt dichtbij
- **attention**: een concrete taak, vandaag of deze week
- **upcoming**: gedateerd, maar nog niet urgent
- **good**: positief nieuws dat je verdient

Elk signaal is een kaartje met een bevinding, een regel uitleg waarom het ertoe doet, bewijskerngetallen en een actie. Mogelijke acties zijn:

- een link naar de juiste pagina
- automatische herinneringen aanzetten
- een herinnering sturen voor een specifieke factuur
- het signaal sluiten

Signalen kun je snoozen. Het kaartje verdwijnt meteen; als de server-call mislukt komt hij terug en krijg je uitleg waarom. Na elke gelukte actie wordt de lijst opnieuw geladen, zodat de rangschikking klopt.

De motor is deterministisch. Er is geen model betrokken bij het maken van de signalen, dus de pagina blijft volledig bruikbaar als de AI-laag offline is.

## Ondersteunende blokken

De blokken onder de KPI-rij verschijnen alleen als ze hun plek verdienen. De catalogus bepaalt zowel of een blok getoond wordt als welke vorm hij krijgt.

| Blok | Inhoud |
|---|---|
| **Trend** | 12-maands grafiek met omzet en kosten naast elkaar, plus de winstlijn |
| **Aandacht** | Belangrijkste open punten die actie vragen, uit de signaalmotor |
| **Ageing** | Debiteuren opgedeeld naar leeftijdsbakken |
| **Omzetbronnen** | Grootste klanten naar omzet dit jaar |
| **Offertes** | Open offertepijplijn en verlopende offertes |
| **Uitgavenmix** | Kostenverdeling per categorie, weergegeven als staafjes of treemap afhankelijk van de ruimte |
| **Cash-grafiek** | Kaspositie over 12 maanden met prognose |
| **Activiteit** | Recente factuur-, betalings- en uitgave-gebeurtenissen |
| **BTW-kaart** | Huidige btw-periode, checklistvoortgang en volgende deadline |

Op telefoons vallen visuele vormen zoals treemaps of funnels terug op eenvoudiger vormen, zodat de getallen leesbaar blijven.

## Welkomstscherm

Op een gloednieuw account zonder facturen of klanten toont het dashboard een welkomstscherm in plaats van het volledige overzicht. Het wijst naar drie eerste acties: maak een factuur, voeg een klant toe of registreer een uitgave. Zodra er minstens een factuur of klant bestaat, verdwijnt het welkomstscherm en neemt het volledige dashboard het over.

## Laden en foutmeldingen

Terwijl data laadt, toont een skeleton-placeholder de vorm van elk blok. Een verborgen timeout van 2,5 seconden voorkomt dat de skeleton een gebruiker met een trage verbinding vastzet. De media query `prefers-reduced-motion: reduce` schakelt alle animaties uit.

Als het ophalen van Vandaag mislukt, toont de pagina een duidelijke fout met een opnieuw-knop in plaats van een alles-goed gebouwd uit lege data. Lukt een periode-switch niet terwijl er nog oudere getallen op het scherm staan, dan verschijnt een verouderd-melding met inline opnieuw-knop.

## Setup-banner

Zolang de setup-wizard op `/setup` nog velden open heeft staan, toont een banner boven het dashboard hoeveel velden er nog wachten en een knop **Setup voltooien**. Je kunt de banner per browser wegklikken via localStorage; hij blijft verborgen totdat de wizard is afgerond. De wizard is niet-blokkerend: nieuwe gebruikers landen direct op `/dashboard`.

## Zie ook

- [Dashboard gebruiken](/nl/faq/use-dashboard)
- [Rapportages](/nl/features/reports)
- [Klanten](/nl/features/customers)
- [Facturen](/nl/features/invoices)
- [BTW](/nl/features/vat)
