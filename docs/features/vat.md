---
title: BTW-beheer
description: "Volg ontvangen en betaalde BTW, bereid je aangifte voor en blijf deadlines voor. Voor Nederlandse bedrijven spiegelt de pagina het aangifteformulier."
---

<!-- TODO(source-missing): RichardTool 5407b44 added historical Dutch VAT rates 6% and 19% to the valid invoice/quote/contract/recurring-invoice/catalog rate set. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# BTW-beheer

Volg ontvangen en betaalde BTW, bereid je aangifte voor en blijf deadlines voor. MyCompanyDesk ondersteunt landsspecifieke BTW-stromen: voor Nederlandse bedrijven spiegelt de pagina het aangifteformulier van de Belastingdienst, en voor andere ondersteunde landen gebruikt hij de aangifteregels en deadlines van dat land. Zo zijn de cijfers die je ziet de cijfers die je indient.

## Pagina-indeling

De BTW-pagina heeft drie tabbladen: **Overzicht**, **Aangifte** en **Transacties**. Zowel het actieve tabblad als de actieve periode staan in de URL, dus verversen en de terugknop bewaren je plek.

Naast de tabbladen staat een paginabrede periodekiezer die meebeweegt met je aangiftefrequentie. Kwartaalaangevers zien Q1 tot en met Q4 plus heel jaar, maandaangevers zien M01 tot en met M12 plus heel jaar, en jaaraangevers zien alleen de jaarsoptie. Wisselen van periode werkt door in elke kaart op elk tabblad. Dezelfde frequentie bepaalt de periodelabels bij een handmatige correctie. Met de jaarwisselaar bovenaan de pagina zet je alles naar een ander jaar.

Het actieve tabblad en de periode staan beide in de URL, dus links van de BTW-deadlineherinnering in je meldingenpaneel, de agendachip, de pushmelding en de BTW-tijdvak-kaart in Uitgaven openen allemaal het tijdvak dat de melding noemt, in plaats van terug te vallen op het huidige kwartaal.

## Herokaart

De herokaart vat de gekozen periode samen:

- **Saldo**: netto BTW (ontvangen minus betaald) met het label "te betalen" of "terug te ontvangen". Het volgt de periodekiezer.
- **Deadlinering**: een ronde aftelring naar de volgende aangiftedeadline, berekend op basis van het land van je werkruimte en je aangiftefrequentie. Rood bij 3 dagen of minder, oranje tot 14 dagen, anders groen.

<!-- TODO(source-missing): RichardTool 8bd35ae1 introduceerde landsspecifieke BTW-aangiftedeadlines (NL, GB, DE en andere). De exacte deadline-regels per land staan nog niet in sources/. Vermeld geen specifieke deadlines per land totdat een mens ze aan sources/ heeft toegevoegd. -->
- **BTW-spaarpotje**: een voorgestelde reservering van het periodesaldo plus een buffer van 10%, zichtbaar wanneer je BTW moet betalen. Krijg je geld terug, dan verandert de tegel in een groene teruggavetegel.

Onder het saldo staan drie knoppen: **Naar aangifte** springt naar het tabblad Aangifte, **Hoe wordt dit berekend?** loopt de rekensom achter het saldo door, en **Open Mijn Belastingdienst Zakelijk** opent het zakelijke portaal op `mijn.belastingdienst.nl/mbo-portaal/` zodat je de aangifte kunt indienen zonder een extra kiespagina.

Boven de herokaart waarschuwt een banner wanneer je gegevens onvolledig zijn (conceptfacturen of uitgaven zonder BTW), zodat je dat kunt oplossen voordat je aangifte doet.

MyCompanyDesk stuurt je ook één keer per BTW-periode een e-mail als de aangiftedeadline nadert. De mail linkt direct naar de BTW-pagina en volgt je BTW-deadlines-schakelaar in Instellingen → Meldingen, dus je zet hem daar uit.

Als je bedrijf een Nederlandse BV of NV is, stuurt dezelfde BTW-deadlines-schakelaar ook één keer per jaar een herinnering voor de deadline van de vennootschapsbelastingaangifte. De melding verschijnt in het meldingenpaneel en wordt per e-mail verstuurd.

## Tabblad Overzicht

### Kwartaalstrook

Vier kaarten (Q1 tot en met Q4) met per kwartaal de omzet, ontvangen BTW, betaalde BTW en het saldo, plus de aangiftedeadline en een slotbadge op ingediende of vergrendelde kwartalen. Klik op een kaart om de paginabrede periode te wisselen. Toekomstige kwartalen blijven leeg totdat er daadwerkelijk gegevens in staan; daarna tonen ze net als eerdere kwartalen het saldo en een statusbadge.

### Controles voor het indienen

Een checklist die tegen de actieve periode draait. Elke controle heeft een herstellink die je direct naar de betreffende records brengt:

- **Concepten**: facturen die nog concept zijn en niet meetellen in de aangifte.
- **BTW ontbreekt**: uitgaven zonder BTW-bedrag.
- **Bonnen ontbreken**: uitgaven zonder bijgevoegde bon.
- **ICP open**: EU B2B-verkopen die apart op de ICP-opgaaf gemeld moeten worden. Het bedrag en het aantal gebruiken dezelfde classificatieregels als de ICP-opgaaf zelf, zodat ze overeenkomen met wat daadwerkelijk op de opgave komt.
- **Verlegde-BTW-herkomst**: uitgaven met verlegde BTW waarvan het land of KVK-nummer van de leverancier ontbreekt, zodat rubriek 2a/4a/4b niet te bewijzen is.
- **Aftrekverschil**: uitgaven waarvan de aftrekbare BTW niet gelijk is aan de totale BTW, bijvoorbeeld omdat de categorie niet volledig aftrekbaar is of omdat privégebruik geldt. Dit loopt gelijk met de badges op het tabblad Transacties.

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

Elke rij toont de omzet (excl.) en het BTW-bedrag. De balk onderaan toont het totaal te betalen of terug te ontvangen. Correcties die buiten het formulier vallen krijgen eigen regels: een gewone boekingscorrectie staat als **Correctie**, terwijl een vermindering onder de oude KOR-regeling staat als **Vermindering volgens de oude KOR**. De BTW-samenvattings-CSV toont een bijpassende correctieregel wanneer deze bedragen niet nul zijn, zodat saldo, ontvangen en betaalde BTW op elkaar aansluiten. De BTW-saldokolom in het jaaroverzicht gebruikt hetzelfde netto-BTW-totaal als het rubriekenoverzicht, zodat de regels optellen tot datzelfde totaal.

Bij een handmatige correctie vul je een positief bedrag in en kies je een richting (BTW af te dragen of BTW terug te vorderen). Negatieve bedragen worden geweigerd en het formulier toont een foutmelding die je vraagt de richting te kiezen; de richting bepaalt of de correctie het periodetotaal verhoogt of verlaagt.

Het belastingjaarveld accepteert jaren tussen 2000 en het huidige kalenderjaar plus één. Jaren daarboven worden geweigerd met een inline-melding, want een correctie voor een verder jaar zou nergens meer terug te vinden zijn op de BTW-pagina. Ook het veld "Oorspronkelijk jaar" voor correcties gebruikt dit bereik; een referentiejaar buiten de range of in de toekomst wordt geblokkeerd, zodat de correctie altijd naar een periode verwijst die bereikbaar is.

Een correctie wordt alleen in een aangifte meegenomen als de periode overeenkomt met de aangiftefrequentie van je werkruimte. Een correctie opgeslagen als Q1 komt bijvoorbeeld niet in een maand- of jaaraangifte terecht, en een correctie opgeslagen als M03 komt niet in een kwartaalaangifte terecht. De correctiekaart toont een oranje waarschuwingsbadge en een toelichting wanneer de periode van een correctie in geen enkele aangifte terechtkomt, zodat je hem kunt aanpassen voordat je indient.

Rubriek 4a is voor verlegde-BTW-aankopen van leveranciers buiten de EU (`import_reverse_charge`); rubriek 4b is voor verlegde aankopen van EU-leveranciers (`b2b_reverse_charge`). MyCompanyDesk bepaalt aan de hand van het leveranciersland de juiste rubriek, zodat het totaal in 5a klopt.

Bij het boeken of verwijderen van een correctie verversen het rubriekenoverzicht, de herokaart, de kwartaalstrook en de aangifte-actiekaart direct; je hoeft niet te verversen of van periode te wisselen. Ook de kaart voor privégebruik van de bedrijfsauto wordt live bijgewerkt als de correctie is geboekt.

### Exporteren voor de boekhouder

Een downloadkaart naast het overzicht biedt CSV-exports: een volledige boekhouder-export, een BTW-overzicht van het gekozen kwartaal en een jaaroverzicht.

De bestandsnaam van de ZIP bevat de bedrijfsnaam, de periode en het exportprofiel, en ook de README noemt het bedrijf. Zo kan een boekhouder die exports voor meerdere klanten downloadt de bestanden makkelijk uit elkaar houden.

<!-- TODO(source-missing): RichardTool 4ffca446 toonde een infokaart voor nul-aangiften met een verwijzing naar een uitnodiging van de Belastingdienst en een verzuimboete. sources/ heeft geen bron voor de Nederlandse nul-aangifteplicht of verzuimboetes; vermeld die claim niet totdat een mens de regel op belastingdienst.nl heeft gecontroleerd. -->

### Herinnering nul-aangifte

Als het geselecteerde tijdvak is afgelopen en zowel rubriek 5a als 5b nul zijn, verschijnt er op het tabblad Aangifte een infokaart die eraan herinnert dat een nul-aangifte mogelijk toch moet worden ingediend als je een uitnodiging van je belastingdienst hebt ontvangen. De kaart wordt niet getoond voor tijdvakken die zijn afgelopen vóór de werkruimte werd aangemaakt, omdat MyCompanyDesk dan geen gegevens heeft.

### Internationale kaarten

Heb je internationale activiteit, dan verschijnen er extra kaarten onder het overzicht:

- **ICP-opgaaf**: EU B2B-verkopen gegroepeerd per klant. Verplicht wanneer je aan BTW-geregistreerde klanten in andere EU-landen hebt verkocht. De kaart volgt de paginabrede periodekiezer, zodat een kwartaalexport alleen de EU-klanten van dat kwartaal bevat.
- **OSS-uitsplitsing**: B2C-verkopen per land voor de One Stop Shop-regeling.
- **Buitenlandse BTW**: buitenlandse BTW die aan jou is berekend en mogelijk via de EU-teruggaafprocedure terug te vragen is.
- **Correcties**: handmatige BTW-correcties, met per soort een hint die uitlegt waar hij op de aangifte terechtkomt. Een privé-onttrekking telt mee in rubriek 1d. Een suppletie wordt verrekend met rubriek 5a of 5b (doe je mee met de KOR, dan heeft dit geen effect op voorbelasting en blijft rubriek 5b nul). Een generieke aanpassing krijgt geen eigen vakje; hij verschuift alleen het te betalen of terug te vragen bedrag dat MyCompanyDesk toont, niet een rubriek die je overneemt.

<!-- TODO(source-missing): RichardTool e671fd80 toont in de app een Belastingdienst-drempel van € 1.000 voor suppletiecorrecties (tot en met € 1.000 in de eerstvolgende btw-aangifte; daarboven een formele suppletieaangifte verplicht). sources/ heeft deze drempel niet; verzin de waarde of linkdoel niet totdat een mens de huidige regel heeft gecontroleerd op belastingdienst.nl. -->

Deze kaarten blijven verborgen totdat er echte internationale gegevens zijn, dus de meeste werkruimtes zien ze nooit.

### Waarschuwing bij afwijking ingediende aangifte

<!-- TODO(source-missing): RichardTool 28c9641 voegde een waarschuwing toe bij afwijking van een ingediende aangifte, die een Belastingdienst-drempel gebruikt om te kiezen tussen "verwerken in eerstvolgende reguliere aangifte" en "formele suppletieaangifte verplicht". sources/ heeft deze drempel niet; verzin de waarde of linkdoel niet totdat een mens de regel op belastingdienst.nl heeft gecontroleerd. -->

Voor de Nederlandse BTW herberekent het tabblad Aangifte na het indienen telkens opnieuw de aangifte uit je live boekingen. Komt die berekening niet meer overeen met wat je hebt ingediend, dan verschijnt er een waarschuwingsbanner boven het rubriekenoverzicht. Hij vergelijkt de ingediende en huidige bedragen van rubriek 5a, 5b en het nettototaal in 5g, en toont per regel het verschil.

De banner vertelt wat je vervolgens doet. Je krijgt de keuze om het verschil in je eerstvolgende reguliere aangifte te verwerken, een formele suppletieaangifte in te dienen, of te zien dat de rubrieken zijn verschoven terwijl het te betalen of terug te vragen bedrag gelijk is gebleven.

### Privégebruik bedrijfsauto

Heb je de BTW op een bedrijfsauto aftrokken, dan moet je aan het einde van het jaar corrigeren voor privégebruik. MyCompanyDesk heeft hiervoor een aparte BTW-correctieflow:

- Kies tussen een forfaitaire correctie op basis van de catalogusprijs, of een correctie op basis van werkelijk gebruik met een volledig rittenregistratiesysteem.
- Het forfaitaire percentage hangt af van de leeftijdsgrens of de manier waarop de auto is aangeschaft.

De correctie wordt doorberekend in de periodetotalen op het tabblad Aangifte.

<!-- TODO(source-missing): De Nederlandse forfaitaire percentages voor BTW-correctie privégebruik bedrijfsauto en de leeftijdsgrens staan nog niet in sources/. Quote de waarden niet in de documentatie totdat een mens de huidige regels heeft gecontroleerd op belastingdienst.nl. -->

## Tabblad Transacties

Een platte lijst van elke factuur en uitgave die in de gekozen periode meetelt, handig om records na te lopen voordat je aangifte doet. Filterchips maken de lijst kleiner: **Alles**, **Geen bon**, **Geen BTW**, **Verlegd** en **Buitenlandse BTW**, elk met een teller. Elke rij linkt naar de onderliggende factuur of uitgave.

Uitgaven die niet volledig aftrekbaar zijn, krijgen een badge zoals **BTW niet aftrekbaar** of **BTW deels aftrekbaar**. Houd je muis op de badge (of focus hem) om een tooltip te zien met daarin hoeveel van de BTW op de uitgave meetelt als voorbelasting in rubriek 5b. Doe je mee met de KOR, dan legt de tooltip uit dat er geen voorbelasting wordt afgetrokken omdat rubriek 5b voor de hele periode nul is; de badge verwijst dan naar de aangifte, niet naar de uitgave zelf.

## Periodevergrendeling

Een samenvattingsbalk bovenaan de BTW-pagina toont hoeveel periodes vergrendeld zijn; klap hem uit om ze te beheren.

- **Automatisch vergrendelen**: zodra de aangiftedeadline van een periode is verstreken, vergrendelt MyCompanyDesk die periode automatisch, zodat je boekhouding gelijk blijft aan de aangifte die je hebt ingediend.
- **Handmatig vergrendelen**: met periodechips vergrendel je zelf elke afgelopen periode van het gekozen jaar, bijvoorbeeld direct na vroeg indienen. Bij een periode die nog loopt krijg je eerst een extra waarschuwing. Periodes die zijn afgelopen vóór de werkruimte werd aangemaakt, kun je niet vergrendelen, omdat MyCompanyDesk dan geen gegevens heeft en ook geen aangifte voor je heeft gedaan.
- **Markeren als ingediend**: markeer een vergrendelde periode als ingediend zodra je de aangifte hebt gedaan. Wanneer je een BTW-deadlineherinnering opent in het notificatiepaneel, gebruikt de actie **Markeren als ingediend** de periode die in die herinnering staat, niet de datum van vandaag, zodat het juiste kwartaal of de juiste maand wordt bijgewerkt. Hij markeert daarnaast alleen de herinneringen voor die periode als opgelost, niet elke openstaande BTW-herinnering in de werkruimte. Ingediende kwartalen tonen dit ook in de kwartaalstrook.
- **Markering ongedaan maken**: als je een periode per ongeluk als ingediend hebt gemarkeerd, kun je die vastlegging verwijderen. MyCompanyDesk vraagt eerst om bevestiging, want hiermee vervalt de vastlegging dat je over dit tijdvak aangifte hebt gedaan. De periode blijft vergrendeld, de aangiftetaak en de deadline komen terug, en bij de Belastingdienst verandert er niets. Je ingediende aangifte blijft ingediend.
- **Tijdelijk ontgrendelen**: moet je iets herstellen? Ontgrendel een periode tijdelijk (72 uur); daarna vergrendelt hij vanzelf weer, of vergrendel zelf eerder opnieuw. Een vergrendeling helemaal verwijderen kan alleen zolang de aangiftedeadline nog niet is verstreken.

De indienstatus wordt per exact tijdvak bijgehouden, niet op basis van overlap. Een ingediend jaar maakt de vier kwartalen niet automatisch ingediend, en een ingediend kwartaal maakt de maanden daarin niet automatisch ingediend. Vergrendeling geldt wel voor de hele periode, dus een jaarslot beschermt nog steeds elk kwartaal.

**Indientiming en correcties.** Je kunt een periode pas aangeven nadat hij is afgelopen. Als je toch probeert in te dienen terwijl de laatste dag van de periode nog niet is verstreken, toont de app een foutmelding met de vraag te wachten tot de periode voorbij is. Een periode kan maar één keer als ingediend worden gemarkeerd; als hij al als ingediend staat, kun je niet opnieuw indienen vanuit de BTW-pagina. Corrigeer een ingediende periode via een correctie of suppletie in een open periode. Op het tabblad Aangifte zie je welke periodes nog open zijn en welke al ingediend.

Een factuur of uitgave in een vergrendelde periode bewerken wordt in het formulier geblokkeerd: de financiële velden worden alleen-lezen (notities blijven bewerkbaar) en het formulier biedt een correctiepad, zoals een correctie in de huidige open periode of een correctiefactuur. Dezelfde beveiliging geldt bij het boeken van een banktransactie of het markeren van een uitgave als betaald: als de transactie in een vergrendelde periode valt, blokkeert de app het en wijst je naar een correctie in de huidige open periode.

Gelijktijdige pogingen om dezelfde periode in te dienen worden geserialiseerd. Als twee indieningen elkaar overlappen, bijvoorbeeld door een dubbele klik of twee open tabbladen, wordt de tweede afgewezen met een duidelijke melding in plaats van een databasefout.

## KOR

De kleineondernemersregeling beheer je onder **Instellingen → BTW**: een kaart volgt je jaaromzet ten opzichte van de drempel van €20.000 ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](../../../sources/vat-rates.yaml)) met een voortgangsbalk, legt uit wat deelname betekent voor je facturen en bevat de aanmeldschakelaar. Je blijft tot en met precies €20.000 omzet per jaar gerechtigd; pas daarboven vervalt de KOR-rechtiging. Zolang je omzet niet hoger is dan €20.000, toont de BTW-pagina een hint die daarheen linkt.

Als je boven de €20.000 uitkomt terwijl je nog aangemeld bent, verschijnt er bovenaan de factuurmaker een waarschuwingsbanner. De titel geeft aan dat je boven de KOR-drempel zit, de tekst legt uit dat deze factuur btw moet bevatten in plaats van 0%, en de knop opent **Instellingen → BTW** zodat je je kunt afmelden bij de Belastingdienst en de KOR uitschakelt.

## KIA en Box 3

KIA (kleinschaligheidsinvesteringsaftrek) en Box 3 zijn inkomstenbelastingonderwerpen en staan onder **Rapportages → Inkomstenbelasting**, niet op de BTW-pagina. De Box 3-kaart verschijnt alleen voor werkruimtes die de vastgoedmodule gebruiken.

## BTW-assistent

De ingebouwde assistent beantwoordt vragen over je aangifte met je eigen werkruimtecijfers, en zijn antwoorden kunnen direct naar het juiste tabblad of record springen.

## Tips

- Zet de paginaperiode op het tijdvak waarvoor je aangifte doet; elke kaart en elk cijfer beweegt mee.
- Loop de controles langs voordat je het tabblad Aangifte opent; een schone checklist betekent meestal dat het rubriekenoverzicht klopt met het formulier van de Belastingdienst.
- Gebruik het spaarpotje als doel voor wat je opzijzet; de buffer van 10% zit er al in.
- De deadlinering volgt je aangiftefrequentie en wordt rood bij drie dagen. Zie dat als een hard signaal om aangifte te doen.
- De BTW-tegel op het dashboard gebruikt dezelfde aangiftefrequentie als de BTW-pagina, zodat de getoonde deadline en periode altijd aansluiten bij je werkelijke aangifteritme.
- Verkoop je B2B in de EU? Open de ICP-opgaafkaart voordat je indient; het is een aparte opgave die je makkelijk vergeet.
- Markeer een periode direct na het indienen als ingediend en laat de automatische vergrendeling hem daarna beschermen.
- Een uitgavebedrag op nul zetten wist de afgeleide BTW meteen, zodat een gecorrigeerde uitgave geen verouderde BTW op de aangifte achterlaat.
