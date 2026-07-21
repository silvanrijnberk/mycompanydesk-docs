---
title: BTW-beheer
---

<!-- TODO(source-missing): RichardTool 5407b44 added historical Dutch VAT rates 6% and 19% to the valid invoice/quote/contract/recurring-invoice/catalog rate set. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# BTW-beheer

Volg ontvangen en betaalde BTW, bereid je aangifte voor en blijf deadlines voor. MyCompanyDesk ondersteunt de Nederlandse BTW-stroom: de pagina spiegelt de aangifte van de Belastingdienst, zodat de cijfers die je ziet de cijfers zijn die je indient.

## Pagina-indeling

De BTW-pagina heeft drie tabbladen: **Overzicht**, **Aangifte** en **Transacties**. Zowel het actieve tabblad als de actieve periode staan in de URL, dus verversen en de terugknop bewaren je plek.

Naast de tabbladen staat een paginabrede periodekiezer (Q1 tot en met Q4 plus heel jaar); wisselen werkt door in elke kaart op elk tabblad. Doet je werkruimte maandaangifte, dan toont de kiezer de twaalf maanden in plaats van kwartalen, passend bij de aangiftefrequentie in je belastinginstellingen. Met de jaarwisselaar bovenaan de pagina zet je alles naar een ander jaar.

## Herokaart

De herokaart vat de gekozen periode samen:

- **Saldo**: netto BTW (ontvangen minus betaald) met het label "te betalen" of "terug te ontvangen". Het volgt de periodekiezer.
- **Deadlinering**: een ronde aftelring naar de volgende aangiftedeadline. Rood bij 3 dagen of minder, oranje tot 14 dagen, anders groen.
- **BTW-spaarpotje**: een voorgestelde reservering van het periodesaldo plus een buffer van 10%, zichtbaar wanneer je BTW moet betalen. Krijg je geld terug, dan verandert de tegel in een groene teruggavetegel.

Onder het saldo staan twee knoppen: **Naar aangifte** springt naar het tabblad Aangifte, en **Hoe wordt dit berekend?** loopt de rekensom achter het saldo door.

Boven de herokaart waarschuwt een banner wanneer je gegevens onvolledig zijn (conceptfacturen of uitgaven zonder BTW), zodat je dat kunt oplossen voordat je aangifte doet.

## Tabblad Overzicht

### Kwartaalstrook

Vier kaarten (Q1 tot en met Q4) met per kwartaal de omzet, ontvangen BTW, betaalde BTW en het saldo, plus de aangiftedeadline en een slotbadge op ingediende of vergrendelde kwartalen. Klik op een kaart om de paginabrede periode te wisselen.

### Controles voor het indienen

Een checklist die tegen de actieve periode draait. Elke controle heeft een herstellink die je direct naar de betreffende records brengt:

- **Concepten**: facturen die nog concept zijn en niet meetellen in de aangifte.
- **BTW ontbreekt**: uitgaven zonder BTW-bedrag.
- **Bonnen ontbreken**: uitgaven zonder bijgevoegde bon.
- **ICP open**: EU B2B-verkopen die apart op de ICP-opgaaf gemeld moeten worden.
- **Verlegde-BTW-herkomst**: uitgaven met verlegde BTW waarvan het land of KVK-nummer van de leverancier ontbreekt, zodat rubriek 2a/4b niet te bewijzen is.

Een badge in de kop toont het aantal blokkades, of dat alles in orde is.

### Samenvatting en jaartotalen

Onder de controles zie je de kerncijfers van het jaar (omzet, uitgaven, winst, ontvangen en betaalde BTW, een geschatte belastingdruk en een aanbevolen reservering), plus een jaartotaal over de kwartalen in één regel.

Zolang je omzet nog in KOR-gebied zit, toont dit tabblad ook een hint die naar de KOR-instellingen wijst (zie verderop).

## Tabblad Aangifte

### Rubriekenoverzicht

Een tabel die het aangifteformulier van de Belastingdienst spiegelt:

| Sectie | Codes |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Elke rij toont de omzet (excl.) en het BTW-bedrag. De balk onderaan toont het totaal te betalen of terug te ontvangen. Correcties die buiten het formulier vallen (KOR, suppletie) staan als aparte correctieregel, zodat zichtbaar blijft wat je werkelijk betaalt.

### Exporteren voor de boekhouder

Een downloadkaart naast het overzicht biedt CSV-exports: een volledige boekhouder-export, een BTW-overzicht van het gekozen kwartaal en een jaaroverzicht.

### Internationale kaarten

Heb je internationale activiteit, dan verschijnen er extra kaarten onder het overzicht:

- **ICP-opgaaf**: EU B2B-verkopen gegroepeerd per klant. Verplicht wanneer je aan BTW-geregistreerde klanten in andere EU-landen hebt verkocht.
- **OSS-uitsplitsing**: B2C-verkopen per land voor de One Stop Shop-regeling.
- **Buitenlandse BTW**: buitenlandse BTW die aan jou is berekend en mogelijk via de EU-teruggaafprocedure terug te vragen is.
- **Correcties**: privé-onttrekking, suppletie en andere aanpassingen die in de periodetotalen meelopen.

Deze kaarten blijven verborgen totdat er echte internationale gegevens zijn, dus de meeste werkruimtes zien ze nooit.

## Tabblad Transacties

Een platte lijst van elke factuur en uitgave die in de gekozen periode meetelt, handig om records na te lopen voordat je aangifte doet. Filterchips maken de lijst kleiner: **Alles**, **Geen bon**, **Geen BTW**, **Verlegd** en **Buitenlandse BTW**, elk met een teller. Elke rij linkt naar de onderliggende factuur of uitgave.

## Periodevergrendeling

Een samenvattingsbalk bovenaan de BTW-pagina toont hoeveel periodes vergrendeld zijn; klap hem uit om ze te beheren.

- **Automatisch vergrendelen**: zodra de aangiftedeadline van een periode is verstreken, vergrendelt MyCompanyDesk die periode automatisch, zodat je boekhouding gelijk blijft aan de aangifte die je hebt ingediend.
- **Handmatig vergrendelen**: met periodechips vergrendel je zelf elke afgelopen periode van het gekozen jaar, bijvoorbeeld direct na vroeg indienen. Bij een periode die nog loopt krijg je eerst een extra waarschuwing.
- **Markeren als ingediend**: markeer een vergrendelde periode als ingediend zodra je de aangifte hebt gedaan. Ingediende kwartalen tonen dit ook in de kwartaalstrook.
- **Tijdelijk ontgrendelen**: moet je iets herstellen? Ontgrendel een periode tijdelijk (72 uur); daarna vergrendelt hij vanzelf weer, of vergrendel zelf eerder opnieuw. Een vergrendeling helemaal verwijderen kan alleen zolang de aangiftedeadline nog niet is verstreken.

Een factuur of uitgave in een vergrendelde periode bewerken wordt in het formulier geblokkeerd: de financiële velden worden alleen-lezen (notities blijven bewerkbaar) en het formulier biedt een correctiepad, zoals een correctie in de huidige open periode of een correctiefactuur.

## KOR

De kleineondernemersregeling beheer je onder **Instellingen → BTW**: een kaart volgt je jaaromzet ten opzichte van de drempel van €20.000 met een voortgangsbalk, legt uit wat deelname betekent voor je facturen en bevat de aanmeldschakelaar. Zolang je omzet nog onder het KOR-gebied ligt, toont de BTW-pagina een hint die daarheen linkt.

## KIA en Box 3

KIA (kleinschaligheidsinvesteringsaftrek) en Box 3 zijn inkomstenbelastingonderwerpen en staan onder **Rapportages → Inkomstenbelasting**, niet op de BTW-pagina. De Box 3-kaart verschijnt alleen voor werkruimtes die de vastgoedmodule gebruiken.

## BTW-assistent

De ingebouwde assistent beantwoordt vragen over je aangifte met je eigen werkruimtecijfers, en zijn antwoorden kunnen direct naar het juiste tabblad of record springen.

## Tips

- Zet de paginaperiode op het tijdvak waarvoor je aangifte doet; elke kaart en elk cijfer beweegt mee.
- Loop de controles langs voordat je het tabblad Aangifte opent; een schone checklist betekent meestal dat het rubriekenoverzicht klopt met het formulier van de Belastingdienst.
- Gebruik het spaarpotje als doel voor wat je opzijzet; de buffer van 10% zit er al in.
- De deadlinering wordt rood bij drie dagen. Zie dat als een hard signaal om aangifte te doen.
- Verkoop je B2B in de EU? Open de ICP-opgaafkaart voordat je indient; het is een aparte opgave die je makkelijk vergeet.
- Markeer een periode direct na het indienen als ingediend en laat de automatische vergrendeling hem daarna beschermen.
