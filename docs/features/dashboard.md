---
title: Dashboard
description: "Mijn bedrijf: één pagina met wat nu van je vraagt, de geldkaart en per onderdeel een kaart. De diepere cijfers staan op Cijfers."
last_verified: 2026-09-30
---

# Dashboard

Het dashboard op `/dashboard` is het startscherm van je werkruimte, en heet hier **Mijn bedrijf**: één pagina met het geld, de onderdelen die om aandacht vragen en alles wat je nog kunt aanzetten. Elk getal komt uit je eigen data, van vandaag, zonder extra stap erna.

Achter het dashboard staat nog een pagina: **Cijfers** (`/cijfers`). Daar ligt de analyseweergave met de KPI-tegels, de trendgrafiek, ageing en de diepere cijfers die tot nu toe op het dashboard stonden. De geldkaart linkt erop door en de zijbalk heeft een eigen **Cijfers**-ingang.

## Nu doen

Bovenaan staat **Nu doen**: één lijst van wat nu om je vraagt, en elk item draagt zijn eigen knop, zodat een factuur van daaruit verstuurt en een herinnering vertrekt. De lijst toont niets dat niet waar is; typische onderdelen:

- Een factuur die nooit is verzonden, of een conceptfactuur die klaarstaat, met het bedrag eraan
- Te late facturen, met een herinneringsactie
- De btw-aangifte en zijn deadline
- Aanvragen die op een offerte wachten en offertes die stilliggen
- Bankregels die nog gekoppeld moeten worden
- Een boekingsagenda die op een site zonder bezoekers staat
- Een website die offline staat terwijl er nog bezoekers komen, of wijzigingen die nog niet online staan

Als je proefperiode bijna om is, staat dat hier eerst, boven alles, als enige met een harde deadline.

Eén regel houdt deze lijst ruisvrij: **Te laat** telt alleen als MyCompanyDesk je betalingen kent. Een betaling die de laatste zes maanden als betaald geregistreerd werd, laat zien dat je boek bijgehouden wordt; een bankkoppeling of online betalen alleen niet, want een koppeling die niemand aflettert, of online betalen dat aan staat terwijl klanten overmaken, zou elke factuur te laat noemen. Facturen komen alleen als te laat in de lijst als dat signaal er is.

Elke maandag komt dezelfde lijst langs in je mailbox: alleen als er iets te doen is, alleen voor de eigenaar van de werkruimte, en met een seintje op je telefoon als iets erin dringend is. De mail zet je aan of uit bij Instellingen > Meldingen.

## De geldkaart

Naast **Nu doen** staat de geldkaart, met de vier getallen die "hoe gaat het" in één oogopslag beantwoorden:

- **Vrij besteedbaar**: je banksaldo, min de btw-reservering en je vaste lasten per maand
- **Op de bank**: het saldo op je zakelijke rekeningen
- **Nog te ontvangen**, met het te late deel erbij genoemd
- **Omzet per maand**

De reservering volgt dezelfde kwartaal-logica als de btw-kaart, zodat maandaangevers en vroege indieners het juiste bedrag uit beeld zien blijven. Het saldo telt je zakelijke rekeningen; een gekoppelde privérekening blijft buiten de cijfers. Een link onder de kaart opent de volledige **Cijfers**-weergave.

## Per onderdeel een kaart

Elk onderdeel dat loopt, aandacht vraagt of half staat, krijgt zijn eigen kaart op de pagina. Elke kaart draagt:

- de **status**: Loopt, Aandacht, Half opgezet (als "2 van 4 klaar"), Nog niet gebruikt of Niet te laden
- een **highlight van één zin** uit eigen data: de eerstvolgende automatische factuur, de btw-schatting, de saldoverloop, je nieuwste klant of bezoekers op je site
- een **redenzin met een knop** waar de kaart om aandacht vraagt

Elke kaart leest zijn eigen bron: de websitekaart toont bezoekers en weergaven (het concept zolang je bouwt, de live site na publicatie), de klantportaal-kaart laat zien wat je klanten de laatste 30 dagen met je offertes en facturen deden, de reviews-kaart toont je score, de bankkaart de saldoverloop en wat nog gekoppeld moet worden, de agendakaart je eerste aankomende afspraken. Zo lees je de stand van het hele bedrijf zonder elk onderdeel apart open te doen.

Onderdelen die draaien zonder eigen kaartinhoud krijgen geen lege plek: ze staan bij naam onder **Alle onderdelen**, zodat het raster alleen kaarten toont met iets te zien.

## Zet dit op

Wat je nog niet opgezet hebt, komt binnen als **Zet dit op**: maximaal drie volgende stappen, elk met een reden uit je eigen data ("8 facturen staan open. Met een betaalknop in de mail betaalt je klant meteen"), een korte minutenschatting en een terugdraaien voor wie een stap wegklikt. De stappen worden live uit je data gelezen, niet uit een vast rijtje: een klaare stap sluit zichzelf, en de lijst blijft kloppen met de werkelijkheid.

De balken die vroeger boven het dashboard stonden zijn weg; elke oproep staat nu waar hij thuishoort:

- een proefperiode die afloopt is de eerste regel in **Nu doen**
- je account beveiligen, een betaalmethode instellen, pushmeldingen en het gratis domein verschijnen als stappen in **Zet dit op**
- productnieuws en de link naar de app vormen een compacte regel onderaan

Heb je zo'n balk eerder weggeklikt, dan blijft hij weg: de voorwaarden en de wegklik-sleutels zijn hetzelfde.

## Alle onderdelen

Onder de kaarten zit de lijst **Alle onderdelen**: alles wat al loopt zonder eigen kaart, en wat nog niet in gebruik is, als één vindbare lijst.

- Met het kruisje zet je een onderdeel uit, dezelfde schakelaar als onder **Instellingen → Onderdelen**. Een uitgezet onderdeel verdwijnt ook uit de zijbalk, zodat menu en pagina hetzelfde verhaal blijven vertellen, en komt terug via de lijst onderaan.
- Deelt een onderdeel zijn schakelaar met een ander, dan gaan en komen ze samen.
- Een onderdeel dat bij je plan niet zit, blijft zichtbaar, met het plan dat hem opent erbij vermeld, zodat je weet dat hij bestaat.

## Eerste bezoek

Een nieuw bedrijf krijgt dezelfde pagina, want de opzet gebeurt daar: er is geen aparte eerste-keer-opvang meer. **Zet dit op** zet **Eerste factuur** bovenaan zolang er geen factuur verstuurd is. De oude startchecklist, waarvan de taken dicht gingen en nooit weer open en langzaam uit de pas liepen met de werkelijkheid, is verdwenen. De app-regel blijft stil tot je eerste factuur verstuurd is, zodat een nieuw bedrijf niet om de app gevraagd wordt voordat er iets verstuurd is.

## Voor boekhouders

Een boekhouder die in de boeken van een klant meekijkt ziet **Mijn bedrijf** zoals de klant hem meemaakt: de lopende onderdelen en wat daar om aandacht vraagt. Opzetstappen, de moduleschakelaars en productnieuws vallen weg, want opzetten is het werk van de eigenaar.

## Cijfers: de analyseweergave

De diepere cijfers van het oude dashboard staan hier, ongewijzigd verhuisd. De pagina is één scrollbare weergave; elk blok verschijnt alleen als je data het aangeeft.

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

Het saldo telt je zakelijke rekeningen: een gekoppelde privérekening blijft buiten de kaspositie en de kasprognose. Afschrijvingen daarop die een zakelijke uitgave kunnen zijn, worden apart genoemd in de regels voor te verwerken, zodat het getal hier gelijk is aan Boekhouding → Bank en de badge op Transacties.

Een tegel zonder eerlijke historie toont geen trendlijn in plaats van een verzonnen vlakke lijn. De kleur van een deltabadge volgt betekenis, niet alleen richting: stijgende debiteuren zijn slecht nieuws, ook al wijst de pijl omhoog.


De KPI-rij toont kasbewegingen; de tegel **Winst** en het trendblok rekenen in een winst-en-verlies-weergave. Daarin staan kosten zonder btw, lopen investeringen mee via hun afschrijving en blijven concepten die nog in review liggen buiten beeld. Gebruik het W&P-rapport als je dezelfde winst als gedetailleerd rapport wilt.

## Voor jou

Het blok **Voor jou** is een persoonlijk taken- en signalenbord op het dashboard. Het houdt de meest relevante vervolgacties op één plek, zonder het volledige belpaneel of het aandacht-widget te vervangen.

Het onderscheidt:

- **Alle taken** (`Alle taken`) - alles waar de werkruimte aandacht voor vraagt
- **Te laat** (`{n} te laat`) - achterstallige facturen, rekeningen of andere items
- **Vandaag** (`{n} vandaag`) - items die vandaag af moeten
- **Open** (`{n} open`) - nog wachtende items
- **Gesprekken** (`{n} mail`) - ongelezen conversaties
- **Afspraken** (`geen afspraken | {n} afspraak | {n} afspraken`) - aankomende boekingen

Elke regel toont het type item (factuur, gesprek, afspraak, enzovoort) en een directe link om hem te openen. Wanneer er niets te doen is, toont het blok **Niets op je bord.** Laadt het overzicht niet, dan biedt een opnieuw-knop een nieuwe poging.

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


## Laden en foutmeldingen

Een skeleton toont de eindvorm van de weergave, zodat de pagina niet onder je ogen verspringt. Faalt het laden van **Mijn bedrijf**, dan zegt de pagina wat er scheelt en biedt ze een opnieuw-knop, in plaats van een alles-goed gebouwd uit lege data. Faalt de kaartinhoud terwijl de stand wél binnenkwam, dan valt elke kaart terug op de ene zin van zijn status. Op **Cijfers** draagt een fout dezelfde opnieuw-knop, en een periode-switch die niet lukt terwijl er oudere getallen op scherm staan, toont een verouderd-melding met een inline opnieuw-knop. Het blok **Voor jou** volgt hetzelfde expliciete fout-en-opnieuw-gedrag wanneer het overzicht niet geladen kan worden.

## Zie ook

- [Dashboard gebruiken](/faq/use-dashboard)
- [Rapportages](/features/reports)
- [Klanten](/features/customers)
- [Facturen](/features/invoices)
- [BTW](/features/vat)
