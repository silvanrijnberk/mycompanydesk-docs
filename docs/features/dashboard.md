---
title: Dashboard
description: "Het startscherm van je werkruimte: begroeting, periodekiezer, KPI-overzicht, aandachtswidget en blokken die alleen verschijnen bij nuttige cijfers."
last_verified: 2026-09-01
---

# Dashboard

Het dashboard op `/dashboard` is het startscherm van je werkruimte. Het beantwoordt een vraag: hoe staat je bedrijf er nu voor? Je ziet een begroeting met dagdeel en voornaam, een periodekiezer, een rij met vijf KPI-tegels, een kort aandacht-widget en een aantal datablokken die alleen verschijnen als je bedrijfsdata aangeeft dat ze nuttig zijn.

## Opbouw

De pagina bestaat uit een vaste catalogus van blokken in een enkele scrollbare weergave. De volgorde verandert nooit, maar een blok wordt alleen getoond als je data de drempel haalt. Een eenvoudig bedrijf krijgt dus een kortere pagina, geen lege plekken.

Bovenaan staan de begroeting, de periodekiezer en de KPI-rij. Daaronder komt het aandacht-widget, gevolgd door ondersteunende blokken zoals de trendgrafiek, ageing, omzetbronnen, offertepijplijn, uitgavenmix, cash-grafiek, btw-kaart en recente activiteit.

## Begroeting

Boven de cijfers staat een begroeting op basis van het dagdeel, samen met je voornaam en de huidige datum. De maandnaam wordt in het Nederlands zonder hoofdletter geschreven.

## Periodekiezer

Alle getallen in de KPI-rij en in de tempo-berekeningen volgen de gekozen periode. Je kiest tussen **maand**, **kwartaal** en **jaar**. De trendgrafiek blijft altijd 12 maanden breed, zodat de vergelijking eerlijk blijft.

## KPI-rij

De KPI-rij toont altijd vijf tegels. Elke tegel toont een hoofdgetal, een vergelijking met de vorige vergelijkbare periode als een eerlijke vergelijking mogelijk is, en een kleine trendlijn. Tegels linken door naar het bijbehorende rapport of de bijbehorende lijst.

| Tegel | Wat je ziet |
|---|---|
| **Kas** | Huidige kaspositie, afkomstig van een gekoppelde bankrekening of een geschat saldo, plus runway in weken |
| **Te ontvangen** | Openstaande facturen, met de achterstallige helft apart genoemd |
| **Omzet** | Omzet over de gekozen periode en het tempo voor de hele periode, met mutatie ten opzichte van de vorige vergelijkbare periode |
| **Te betalen** | Geld dat je nog moet uitbetalen, met de achterstallige helft apart genoemd |
| **Winst** | Nettowinst over de gekozen periode, met marge als die te berekenen is |

### Saldotegel

De **Kas**-tegel laat naast je saldo zien wat er al vergeven is. Dat zijn twee regels:

- **Gereserveerd voor btw** - het positieve kwartaalsaldo dat al apart gezet moet worden
- **Vaste lasten per maand** - je maandelijkse vaste kosten

De slotregel toont **Vrij besteedbaar**: wat er na die reserveringen effectief overblijft. De btw-reservering gebruikt dezelfde kwartaal-logica als de btw-kaart, zodat maandaangevers en vroege indieners geen verkeerd bedrag zien afgetrokken.

Een tegel zonder eerlijke historie toont geen trendlijn in plaats van een verzonnen vlakke lijn. De kleur van een deltabadge volgt betekenis, niet alleen richting: stijgende debiteuren zijn slecht nieuws, ook al wijst de pijl omhoog.

## Aandacht-widget

Het aandacht-widget wordt gevoed door de Vandaag-signaalmotor. Het toont maximaal vier taken die nu of deze week actie vragen. Elke regel toont een ernst-indicator, een korte titel en een link naar het bijbehorende record. Het widget toont alleen taken; het bevat niet de volledige gerangschikte lijst, de bewijskerngetallen of de actieknoppen. Die volledige lijst staat in het belpaneel.

De Vandaag-motor rangschikt signalen in vier ernstniveaus:

- **critical**: geld loopt weg of een harde deadline komt dichtbij
- **attention**: een concrete taak, vandaag of deze week
- **upcoming**: gedateerd, maar nog niet urgent
- **good**: positief nieuws dat je verdient

De motor is deterministisch. Er is geen model betrokken bij het maken van de signalen, dus de pagina blijft bruikbaar als de AI-laag offline is.

### Actiechips

Sommige aandachtsregels hebben een actiechip, bijvoorbeeld om een betalingsherinnering te sturen. De eerste tik op een chip met bevestiging wapent hem en toont de tekst **Zeker weten? Tik nogmaals**; pas de tweede tik voert de actie uit. Na vijf seconden zonder tweede tik ontwapent de chip vanzelf. Zo kan een verdwalde tik niet per ongeluk een herinneringsmail naar een klant sturen.

## Ondersteunende blokken

De blokken onder de KPI-rij verschijnen alleen als ze hun plek verdienen. De catalogus bepaalt zowel of een blok getoond wordt als welke vorm hij krijgt.

| Blok | Inhoud |
|---|---|
| **Trend** | 12-maands grafiek met omzet en kosten naast elkaar, plus de winstlijn |
| **Ageing** | Debiteuren opgedeeld naar leeftijdsbakken |
| **Omzetbronnen** | Grootste klanten naar omzet dit jaar |
| **Offertes** | Open offertepijplijn en verlopende offertes |
| **Uitgavenmix** | Kostenverdeling per categorie, weergegeven als staafjes |
| **Cash-grafiek** | Kaspositie over 12 maanden met prognose |
| **Activiteit** | Recent factuur-, betalings- en uitgave-gebeurtenissen |
| **BTW-kaart** | Huidige btw-periode, checklistvoortgang, volgende deadline en in een oogopslag de btw over omzet, voorbelasting en het te betalen of terug te krijgen bedrag |
| **Vaste lasten** | Maandelijkse terugkerende inkomsten en kosten, hoeveel procent van de vaste lasten je contracten dekken, en de grootste overeenkomsten aan beide kanten |

Op telefoons vallen visuele vormen terug op eenvoudiger vormen, zodat de getallen leesbaar blijven.

## Eerste-keer-scherm

Een gloednieuwe werkruimte zonder facturen of klanten landt op een rustig eerste-keer-scherm in plaats van het volledige dashboard. Het biedt een duidelijke actie: maak je eerste factuur. Een klein ontdekkingspaneel nodigt je ook uit om factuurstyling, de website of accountbeveiliging te personaliseren. Het wegklikken van dat paneel verbergt alleen het paneel; het versturen van je eerste factuur sluit het eerste-keer-scherm af. Je kunt het scherm ook overslaan met de optie **Toon mijn dashboard**.

## Aan-de-slag-kaart

Zolang de setup-checklist nog openstaande stappen heeft, verschijnt er een vaste kaart boven het dashboard. Die somt de openstaande stappen op en biedt een link terug naar de setup-wizard. Wegklikken wordt server-side bewaard, dus de kaart blijft verborgen op al je apparaten. De wizard is niet blokkerend: nieuwe gebruikers landen direct op `/dashboard`.

## Laden en foutmeldingen

Terwijl het dashboard bepaalt of dit een eerste-keer-werkruimte is en de briefing laadt, toont een skeleton de uiteindelijke vorm van de pagina. Als het ophalen van Vandaag mislukt, toont de pagina een duidelijke fout met een opnieuw-knop in plaats van een alles-goed gebouwd uit lege data. Lukt een periode-switch niet terwijl er nog oudere getallen op het scherm staan, dan verschijnt een verouderd-melding met inline opnieuw-knop.

## Zie ook

- [Dashboard gebruiken](/faq/use-dashboard)
- [Rapportages](/features/reports)
- [Klanten](/features/customers)
- [Facturen](/features/invoices)
- [BTW](/features/vat)
