---
title: Btw
description: "Volg ontvangen en betaalde btw, bereid je aangifte voor en blijf deadlines voor. De btw-pagina's volgen het aangifteformulier van de Belastingdienst."
last_verified: 2026-10-19
---

<!-- TODO(source-missing): The app also accepts the historical Dutch VAT rates 6% and 19% on invoices, quotes, contracts, recurring invoices and catalog items. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# Btw

Volg ontvangen en betaalde btw, bereid je aangifte voor en blijf deadlines voor. MyCompanyDesk ondersteunt landsspecifieke btw-stromen: voor Nederlandse bedrijven volgen de btw-pagina's het aangifteformulier van de Belastingdienst, en voor andere ondersteunde landen gelden de aangifteregels en deadlines van dat land. Zo zijn de cijfers die je ziet de cijfers die je indient.

## Waar vind je het

Open **Belastingen** in de zijbalk. Het onderdeel begint met de btw-tabbladen: **Overzicht**, **Aangifte**, **Controle**, **Transacties**, **Correcties** en **Periodes**. Na een scheidingslijn volgen de tabbladen voor de inkomstenbelasting: **Winstaangifte** en, als die voor jou geldt, **Box 3**. De btw-tabbladen zijn gratis op elk abonnement; voor de inkomstenbelasting-tabbladen heb je Office nodig. Het actieve tabblad en het tijdvak staan in de URL, dus verversen en de terugknop houden je plek vast.

De kiezer **Tijdvak** in de werkbalk volgt de aangiftefrequentie uit je btw-instellingen. Kwartaalaangevers zien Q1 tot en met Q4 plus heel jaar, maandaangevers zien M01 tot en met M12 plus heel jaar, en jaaraangevers zien alleen het hele jaar. Wisselen werkt door in elke kaart op elk tabblad. Dezelfde frequentie bepaalt de tijdvakken bij een handmatige correctie. Met de jaarkiezer naast de tabbladen zet je alles op een ander jaar, en onder de knop **Exporteren** in de werkbalk staan de CSV-downloads voor je boekhouder.

Omdat tabblad en tijdvak in de URL staan, openen links uit de btw-deadlineherinnering in je meldingenpaneel, de deadlinechip in de agenda, de pushmelding en de btw-tijdvakkaart bij Uitgaven allemaal precies het tijdvak waar de melding over gaat, in plaats van het huidige kwartaal. Oude links naar de btw-pagina blijven werken en komen op hetzelfde tijdvak uit.

## Btw-instellingen

Bij **Instellingen › Btw** staan de keuzes die de btw-pagina's en veel factuurstandaarden sturen.

### Aangiftefrequentie

De vraag **Hoe vaak doe je btw-aangifte?** bepaalt welke tijdvakken in de kiezer staan en welke aangiftes je moet doen:

| Keuze | Tijdvakken |
|---|---|
| **Elke maand** | M01 tot en met M12 plus heel jaar |
| **Elke 3 maanden** | Q1 tot en met Q4 plus heel jaar |
| **Eén keer per jaar** | Alleen heel jaar |

Een andere frequentie herschrijft geen eerdere aangiftes. Hij bepaalt alleen hoe toekomstige tijdvakken worden ingedeeld. Raakt de wijziging tijdvakken die je al hebt ingediend, dan noemt de app die en zegt hij vanaf welk tijdvak de nieuwe frequentie ingaat.

### Btw-tarief

**Welk btw-tarief gebruik je meestal?** bepaalt het standaardtarief voor nieuwe factuurregels en andere belaste posten: 21%, 9% of 0% (sources/vat-rates.yaml#countries.NL.standard, reduced, zero). Per factuur of bonnetje kun je altijd een ander tarief kiezen.

### 9% suggestie voor eten en drinken

Voeg je een gloednieuw item toe in je aanbod, dan kan MyCompanyDesk het vragen: "Verkoop je eten of drinken? Daarvoor geldt meestal 9% btw." Die vraag verschijnt alleen als je werkruimte nog nooit zelf een standaardtarief heeft gekozen in Instellingen › Btw, KOR en vrijgesteld allebei uit staan, en je eigen gegevens (KVK/SBI-code, je antwoord uit de wizard of je bedrijfsomschrijving, nooit je bedrijfsnaam) duidelijk naar eten of horeca wijzen. Klik je op **Zet op 9%**, dan krijgt alleen dit ene item het verlaagde tarief (sources/vat-rates.yaml#countries.NL.reduced). Er wordt niets vooraf gekozen: de vraag negeren verandert niets, bij bestaande items verschijnt hij nooit, en werkruimtes met KOR of vrijgesteld zien hem niet.

### Standaard btw-tarief voor uitgaven

**En voor je uitgaven?** bepaalt welk btw-tarief al klaarstaat als je een nieuwe uitgave toevoegt. Per uitgave kun je het nog aanpassen.

### Vrijgesteld van btw

De schakelaar **Mijn diensten zijn vrijgesteld van btw (bijvoorbeeld zorg of onderwijs)** is voor bedrijven waarvan de diensten wettelijk zijn vrijgesteld. Staat hij aan, dan staan nieuwe factuur- en offerteregels standaard op vrijgesteld, en het tabblad Controle herinnert je eraan dat voorbelasting over kosten voor vrijgestelde activiteiten niet aftrekbaar is. Haal dit niet door elkaar met de KOR; daarvoor gelden andere regels.

### Buiten btw

Een factuurregel kan **Buiten btw** staan: geld dat je namens je klant betaalde en precies zo doorrekent, zoals leges of griffierecht. De regel houdt het definitief maken niet tegen, telt in geen rubriek van de aangifte, zit niet in de ICP-opgaaf, is geen omzet van jou en telt ook niet mee in de KOR-omzet. De vlag bestaat op factuurregels, op de items van een terugkerende factuur en op een item in je aanbod waarvan de factuurregel hem meekrijgt. Op de PDF, in de e-mail en op de factuurpagina heet de regel **Buiten btw**, en in de btw-samenvatting staat er een eigen regel **Waarvan buiten de btw** bij. Zo'n regel krijgt geen tarief-voorstel, en kies je boven 0% een tarief, dan gaat de vlag weer uit. MyCompanyDesk zegt erbij waar hij voor bedoeld is: alleen voor kosten die je namens de klant betaalt en onveranderd doorberekent, zoals leges of griffierecht, want toeristenbelasting hoort meestal bij je verhuurprijs: daar reken je 9% btw over (sources/vat-rates.yaml#countries.NL.reduced).

### Btw verlegd

Btw verlegd leeft vanaf nu bij de regels zelf. De telefoonstappen halen deze keuze bij elke zakelijke klant naar boven; het lange formulier toont hem bij een Nederlands bedrijf met btw-nummer, met de vraag of je er als onderaannemer voor werkt, bijvoorbeeld in de bouw, de schoonmaak of als uitzendkracht, want daar komt het vaak voor. Voor een Nederlandse klant zet hij zichzelf nooit aan; jij zet hem aan.

Voor een zakelijke klant buiten de EU doet dezelfde schakelaar het werk, en het formulier legt bij de hand uit wat dat betekent voor een dienst aan zo'n bedrijf. Diensten aan een bedrijf buiten de EU zitten niet in de ICP-opgaaf hieronder.

<!-- TODO(source-missing): wat het formulier voor klanten buiten de EU uitlegt (deensten aan zo'n bedrijf, de uitzonderingen die hij noemt, en goederen als uitvoer) heeft nog geen plek onder sources/; beschrijf de inhoud zodra er een mens de bron bij zet. -->

### Kleineondernemersregeling (KOR)

De KOR-kaart vraagt of je meedoet aan de **kleineondernemersregeling** en heeft de schakelaar **Ik doe mee met de KOR**. Staat die aan, dan:

- staat er geen btw op je facturen en doe je geen btw-aangifte;
- wordt ontvangen btw niet als te betalen getoond en wordt voorbelasting niet afgetrokken;
- laat een meter je omzet van dit jaar tot en met vandaag zien naast de grens.

De meter kent drie standen:

- **Onder de grens**: gewone voortgangskleur.
- **In de buurt van de grens**: vanaf 80% van de grens zegt de regel onder de meter dat je je omzet in de gaten moet houden, zodat je kunt plannen voor het moment dat je eroverheen gaat. Doe je mee, dan laat een oranje melding vanaf 90% ook zien hoeveel ruimte je nog hebt.
- **Boven de grens**: zodra je omzet dit jaar boven € 20.000 exclusief btw komt ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)), zegt een rode waarschuwing dat de KOR niet meer geldt. Vanaf de factuur die over de grens ging, reken je weer btw, over het volledige bedrag van die factuur. Meld je meteen af bij de Belastingdienst: je kunt dan de rest van dat jaar en het jaar erna niet meer meedoen aan de KOR ([`sources/vat-rates.yaml#countries.NL.small_business_on_exceed`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)).

De punten van 80% en 90% kiest MyCompanyDesk zelf om je op tijd te waarschuwen; de Belastingdienst stelt alleen de grens van € 20.000.

<!-- TODO(source-missing): whether the KOR switch is offered to workspaces outside the Netherlands is not yet verified. -->

Kom je niet meer in aanmerking voor de KOR, zet de schakelaar dan uit en loop de volgende aangifte na met je boekhouder. Meer over de KOR lees je [hieronder](#kor).

## Tabblad Overzicht

De bovenste kaart vat het gekozen tijdvak samen:

- **Saldo**: hetzelfde netto totaal als rubriek 5g op het tabblad Aangifte: ontvangen en zelf berekende btw (rubrieken 2a/4a/4b) min de voorbelasting die in rubriek 5b terechtkomt, inclusief handmatige correcties. Btw via de OSS-regeling telt niet mee, want die hoort op een eigen aangifte. Het saldo krijgt het label "Te betalen" of "Terug te vorderen" en volgt de tijdvakkiezer.
- **Deadlinering**: een ronde aftelring naar de volgende aangiftedeadline, berekend uit het schema van het land van je werkruimte en je aangiftefrequentie. Rood bij 3 dagen of minder, oranje tot 14 dagen, anders groen. Is een aangifte ingediend maar nog niet betaald, dan blijft de ring op dat tijdvak staan tot de betaaldatum en staat er **Ingediend, nog betalen**, met **Vandaag betalen** op de betaaldag zelf. Een ingediend tijdvak dat is afgerekend, of dat op een teruggave uitkwam, houdt de ring niet meer vast en de aftelling gaat door naar de volgende aangifte. Voor een Nederlandse werkruimte is de deadline bij een maand- of kwartaalaangifte de laatste dag van de maand na het tijdvak, en bij een jaaraangifte vóór 1 april van het jaar erna (dus uiterlijk 31 maart). Op die dag moet de Belastingdienst zowel je aangifte als je betaling binnen hebben ([`sources/nl-vat-filing.yaml#deadlines`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-filing.yaml)).

<!-- TODO(source-missing): The app also uses country-specific VAT filing deadlines for workspaces outside the Netherlands (GB, DE and others). Those rules are not in sources/ yet; do not list per-country due dates for them until a human adds them. -->
- **Spaarpotje**: een voorgestelde reservering van de btw die je nog moet betalen plus 10% marge, zichtbaar als je btw moet betalen. Krijg je geld terug, dan toont de tegel de teruggave.

Onder het saldo staan twee knoppen: **Naar aangifte** springt naar het tabblad Aangifte, en **Hoe wordt dit berekend?** loopt de rekensom achter het saldo door.

Boven die kaart waarschuwt een banner als je gegevens onvolledig zijn (conceptfacturen of uitgaven zonder btw), zodat je dat oplost voordat je aangifte doet.

Daaronder tonen de tijdvakkaarten van het jaar per tijdvak de omzet, de btw uit en in en het saldo, met de aangiftedeadline. Een ingediend tijdvak toont de datum van indienen. Klik op een kaart om het tijdvak voor de hele pagina te wisselen. Toekomstige tijdvakken blijven leeg tot er echte gegevens in staan.

Een jaarkaart sluit het tabblad af: omzet, verschuldigde btw en voorbelasting over het hele jaar, plus een schatting van de inkomstenbelasting (of de vennootschapsbelasting bij een bv) over dat jaar, met de link **Bekijk de berekening**.

MyCompanyDesk mailt je ook één keer per btw-tijdvak als de aangiftedeadline nadert. De mail linkt direct naar de btw-pagina's en volgt de schakelaar **Als er een deadline aankomt** in Instellingen › Meldingen, dus daar zet je hem uit.

Is je bedrijf een Nederlandse bv of nv, dan stuurt dezelfde schakelaar ook één keer per jaar een herinnering voor de deadline van de aangifte vennootschapsbelasting. De herinnering verschijnt in het meldingenpaneel en komt per e-mail.

## Tabblad Controle

Een checklist die vóór het indienen tegen het actieve tijdvak draait. Elke controle heeft een link die je direct naar de betreffende boekingen brengt:

- **Concepten**: facturen die nog concept zijn en niet meetellen in de aangifte.
- **Btw ontbreekt**: uitgaven zonder btw-bedrag.
- **Bonnen ontbreken**: uitgaven zonder bijgevoegde bon.
- **ICP open**: zakelijke verkopen binnen de EU die apart op de ICP-opgaaf moeten. Bedrag en aantal gebruiken dezelfde indeling als de ICP-opgaaf zelf, dus ze komen overeen met de regels die echt op de opgave komen.
- **Herkomst bij verlegde btw**: uitgaven met verlegde btw waarvan het land of KVK-nummer van de leverancier ontbreekt, zodat rubriek 2a/4a/4b niet te onderbouwen is.
- **Aftrekverschil**: uitgaven waarvan de aftrekbare btw niet gelijk is aan de totale btw, bijvoorbeeld omdat de categorie niet volledig aftrekbaar is of omdat er privégebruik speelt. Dit loopt gelijk met de markeringen op het tabblad Transacties.
- **Uitgaven te bevestigen**: uitgaven uit je bank die nog op jouw bevestiging wachten. Ze tellen nog niet mee in de aangifte, ook hun btw niet; bevestig of verwijder ze onder Te bevestigen bij Uitgaven. Deze controle verschijnt alleen als je tijdvak zulke uitgaven bevat.

De kop toont hoeveel punten er nog openstaan, of dat alles in orde is voor het tijdvak. Regelingen als de KOR, de vrijstelling en privégebruik van de auto verschijnen hier alleen als ze op jouw situatie van toepassing zijn. Zit je omzet nog binnen de KOR-grens, dan toont dit tabblad ook een hint met een link naar de KOR-instellingen. Een regel onderaan opent je archief van het jaar: bonnen, facturen en overeenkomsten op één plek.

## Tabblad Aangifte

### Rubriekenoverzicht

Een tabel die het aangifteformulier van de Belastingdienst volgt:

| Onderdeel | Rubrieken |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Elke regel toont het bedrag (excl.) en het btw-bedrag. Rubrieken zonder transacties in het tijdvak worden samengevouwen tot één regel; met **Toon alle rubrieken** klap je ze uit. Onderaan staat het totaal dat je moet betalen of terugkrijgt. Correcties die buiten het formulier vallen, krijgen een eigen regel: een algemene boekingscorrectie heet **Correctie**, een vermindering onder de oude KOR heet **Vermindering volgens de oude KOR**. De CSV-samenvatting krijgt een bijpassende correctieregel als die niet nul is, zodat saldo, ontvangen en betaalde btw kloppen. De kolom btw-saldo in het jaaroverzicht gebruikt hetzelfde netto totaal als het rubriekenoverzicht, dus de regels tellen op tot hetzelfde bedrag.

Rubriek 4a bevat verlegde inkopen bij leveranciers buiten de EU; rubriek 4b verlegde inkopen bij leveranciers binnen de EU. MyCompanyDesk leidt de juiste rubriek af uit het land van de leverancier, zodat het totaal in 5a klopt.

### Indienen

Een paneel naast de tabel toont hoe het tijdvak ervoor staat (concept, ingediend, betaald of teruggave) en linkt naar de tabbladen Controle, Transacties en Correcties, met hun aantallen. Is het tijdvak voorbij, neem de cijfers dan over op Mijn Belastingdienst Zakelijk: **Open Mijn Belastingdienst Zakelijk** opent het zakelijke portaal op `mijn.belastingdienst.nl/mbo-portaal/` zonder extra kiespagina. Gebruik daarna **Markeer als ingediend**, zodat MyCompanyDesk vastlegt dat je de aangifte hebt gedaan. Na het indienen kun je het betalingskenmerk van je bevestiging opslaan.

### Exports voor je boekhouder

De knop **Exporteren** in de werkbalk biedt CSV-exports: een boekhouder-export, een btw-overzicht van het gekozen kwartaal en een jaaroverzicht. Concept- en geannuleerde facturen tellen niet mee, dus de totalen komen overeen met je aangifte.

De bestandsnaam van de ZIP van de boekhouder-export bevat de bedrijfsnaam, het tijdvak en het exportprofiel, en de README erin noemt ook het bedrijf. Zo houdt een boekhouder die voor meerdere klanten exports downloadt de bestanden makkelijk uit elkaar.

### Waarschuwing bij afwijking van een ingediende aangifte

Voor Nederlandse btw blijft het tabblad Aangifte de aangifte uit je actuele boekingen herberekenen, ook als het tijdvak als ingediend is gemarkeerd. Komt de berekening niet meer overeen met wat je hebt ingediend, dan verschijnt er een waarschuwing boven het rubriekenoverzicht. Die zet de ingediende en de huidige bedragen van rubriek 5a, 5b en het netto totaal in 5g naast elkaar en toont per regel het verschil.

De waarschuwing zegt ook wat je moet doen, op basis van het verschil in het netto totaal (5g). Gaat het om € 1.000 btw of minder, dan neem je het verschil mee in je volgende gewone aangifte. Boven de € 1.000 is een formele suppletieaangifte verplicht, en alleen dan staat de knop **Suppletie aanmaken** erbij ([`sources/nl-vat-corrections.yaml#suppletie.next_return_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Zijn alleen de rubrieken verschoven en is het te betalen of terug te vragen bedrag gelijk gebleven, dan zegt de waarschuwing dat en hoef je niets te boeken.

### Internationale kaarten

Heb je internationale activiteit, dan verschijnen er extra kaarten onder de tabel:

- **ICP-opgaaf**: zakelijke verkopen binnen de EU, gegroepeerd per btw-id van de klant en niet per klantrecord. Groeperen en tonen gebeurt op het genormaliseerde nummer (zonder spaties of punten), een klant zonder btw-nummer blijft onder zijn eigen record, en één klant met twee btw-id's staat op twee regels. Verplicht als je goederen of diensten hebt verkocht aan btw-geregistreerde klanten in andere EU-landen. De kaart volgt de tijdvakkiezer, dus een kwartaalexport bevat alleen de EU-klanten van dat kwartaal.
- **EU OSS**: B2C-verkopen per land voor de One Stop Shop-regeling.
- **Buitenlandse btw**: buitenlandse btw die je is gerekend en die je misschien kunt terugvragen via de EU-teruggaafprocedure. Deze kaart toont alleen leveranciers uit EU-lidstaten; uitgaven bij leveranciers buiten de EU staan hier niet. Omdat een teruggaafverzoek naar één lidstaat gaat, toetst de kaart het EU-minimumbedrag per land: ligt het terug te vragen bedrag van een land daaronder, dan noemt een waarschuwing de betreffende landen, zodat je weet welke verzoeken eronder vallen. Uitgaven zonder land van de leverancier worden samen als één groep getoetst.

Deze kaarten blijven verborgen zolang er geen internationale gegevens zijn, dus de meeste werkruimtes zien ze nooit.

## Tabblad Correcties

Hier staan per jaar de posten die niet uit facturen of uitgaven komen, met de knop **Correctie toevoegen**. Elke correctie heeft een soort, een richting, een belastingjaar en tijdvak, een btw-bedrag en een optionele toelichting, en de lijst toont in welke aangifte hij is verwerkt:

- **Privé-onttrekking** telt mee in rubriek 1d.
- **Suppletie** (een correctie op een eerdere aangifte) wordt verrekend met rubriek 5a of 5b (onder de KOR raakt hij de voorbelasting niet, dus rubriek 5b blijft nul).
- **Correctie** krijgt geen eigen vak; hij verschuift alleen het te betalen of terug te vragen totaal dat MyCompanyDesk toont, niet een rubriek die je overneemt.

Vul een positief bedrag in en kies een richting (**Btw af te dragen** of **Btw terug te vorderen**). Negatieve bedragen worden geweigerd en het formulier vraagt je dan de richting te kiezen; de richting bepaalt of de correctie de te betalen btw verhoogt of verlaagt.

Het belastingjaar accepteert jaren van 2000 tot en met het huidige jaar plus één. Een later jaar wordt geweigerd met een melding, omdat een correctie op een toekomstig jaar nergens meer terug te vinden zou zijn. Het oorspronkelijke jaar bij een suppletie gebruikt dezelfde grenzen en moet het belastingjaar zijn waar de oorspronkelijke boeking bij hoort.

Een correctie telt alleen mee in een aangifte als het tijdvak past bij je aangiftefrequentie. Een correctie op Q1 telt bijvoorbeeld in geen enkele maand- of jaaraangifte mee, en een correctie op M03 in geen enkele kwartaalaangifte. Valt het tijdvak van een correctie in geen enkele aangifte, dan toont de lijst een oranje waarschuwing met uitleg, zodat je het tijdvak kunt aanpassen voordat je indient.

Sla je een correctie op of verwijder je er een, dan werken het rubriekenoverzicht, de bovenste kaart en de tijdvakkaarten meteen bij; verversen of van tijdvak wisselen is niet nodig.

Bij een **Suppletie** zegt de lijst ook welke route de Belastingdienst voorschrijft. De grens is € 1.000 btw ([`sources/nl-vat-corrections.yaml#suppletie.next_return_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)): € 1.000 of minder mag je verwerken in je eerstvolgende gewone aangifte, meer dan € 1.000 vraagt een formele suppletieaangifte. MyCompanyDesk kijkt per gecorrigeerd tijdvak en telt alle suppleties op dat tijdvak bij elkaar op, dus een regel van € 600 en een van € 700 tellen samen als € 1.300. Heb je te weinig btw aangegeven? Dien de suppletie dan in binnen 8 weken nadat je de fout ontdekte ([`sources/nl-vat-corrections.yaml#suppletie.deadline_after_discovery_weeks`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Corrigeren kan tot en met 5 jaar na het jaar waar de correctie over gaat ([`sources/nl-vat-corrections.yaml#suppletie.correction_window_years`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)).

### Privégebruik auto

Trek je btw af op een auto van de zaak, dan corrigeer je aan het eind van het jaar voor het privégebruik. Boek je autokosten, dan toont het tabblad Correcties een voorgestelde regel **Privégebruik auto**; **Berekenen** opent de correctie:

- Kies tussen een forfaitaire correctie op basis van de catalogusprijs, of een correctie op basis van het werkelijke gebruik uit een sluitende rittenregistratie (**Ik heb een sluitende rittenregistratie**).
- Het forfait is 2,7% van de catalogusprijs inclusief btw en bpm ([`sources/nl-vat-corrections.yaml#private_car_use.standard_pct_of_catalogue_value`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Het wordt 1,5% als het privégebruik plaatsvindt later dan 4 jaar na het jaar waarin je de auto bent gaan gebruiken, of als je de auto zonder btw-aftrek hebt gekocht, bijvoorbeeld via de margeregeling of van een particulier ([`sources/nl-vat-corrections.yaml#private_car_use.reduced_applies_when`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Een auto die je in 2021 in gebruik nam, valt dus tot en met 2025 onder 2,7% en vanaf 2026 onder 1,5%. Voor het lagere percentage zet je **Auto ouder dan 5 jaar of gekocht zonder btw-aftrek** aan.

De voorgestelde regel staat alleen in het laatste tijdvak van het jaar (Q4, M12 of de jaaraangifte), omdat de correctie in de laatste aangifte van het jaar hoort ([`sources/nl-vat-corrections.yaml#private_car_use.declared_in`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). De correctie telt mee in de totalen van het tijdvak op het tabblad Aangifte.

## Tabblad Transacties

Een lijst van elke factuur en uitgave die meetelt in het gekozen tijdvak, handig om steekproeven te doen voordat je indient. Zoek op nummer of klant en verfijn de lijst met de chips **Alles**, **Verkoop**, **Inkoop**, **Zonder bon**, **Zonder btw** en **Verlegd**. Elke regel toont zijn rubriek en linkt naar de factuur of uitgave.

Uitgaven die niet volledig aftrekbaar zijn, krijgen een markering als **btw niet aftrekbaar** of **btw deels aftrekbaar**. Wijs de markering aan (of geef hem focus) voor een uitleg hoeveel van de btw op de uitgave meetelt als voorbelasting in rubriek 5b. Doe je mee aan de KOR, dan legt de uitleg uit dat er geen voorbelasting wordt afgetrokken omdat rubriek 5b voor het hele tijdvak nul is; de markering gaat dan over het tijdvak, niet over de losse uitgave.

## Tabblad Periodes

Het tabblad Periodes toont elk tijdvak van het jaar met status, datum van indienen, betalingskenmerk en saldo. De status is **Ingediend**, **Nog in te dienen** (het tijdvak is voorbij maar de deadline nog niet), **Te laat**, **Tijdelijk open** (een vergrendeling is opgeheven voor een herstel), **Vergrendeld**, **Lopend**, **Komt nog** of **Niet van toepassing** voor tijdvakken die eindigden voordat je werkruimte bestond. Een tijdvak waarvan de deadline voorbij is zonder ingediende aangifte, staat op **Te laat**, ook als de boekingen al vergrendeld zijn.

- **Automatisch vergrendelen**: zodra de aangiftedeadline van een tijdvak voorbij is, vergrendelt MyCompanyDesk het vanzelf, zodat je boeken blijven aansluiten op de aangifte die je hebt gedaan.
- **Zelf vergrendelen**: met **Vergrendelen** zet je elk verstreken tijdvak van het gekozen jaar zelf vast, bijvoorbeeld direct nadat je vroeg hebt ingediend. Vergrendel je een tijdvak dat nog loopt, dan krijg je een extra waarschuwing. Tijdvakken die eindigden voordat de werkruimte bestond, kun je niet vergrendelen, omdat MyCompanyDesk daar geen gegevens over heeft.
- **Markeer als ingediend**: markeer een tijdvak als ingediend zodra je de aangifte hebt gedaan. Is er een vastgelegde aangifte voor een tijdvak dat niet als ingediend is gemarkeerd, dan meldt de lijst dat. Open je een btw-deadlineherinnering in het meldingenpaneel, dan gebruikt **Markeer als ingediend** het tijdvak uit die herinnering en niet de datum van vandaag, zodat het juiste kwartaal of de juiste maand wordt bijgewerkt. Ook sluit het alleen de herinneringen voor dat tijdvak af, niet alle openstaande btw-herinneringen van de werkruimte.
- **Markering ongedaan maken**: heb je een tijdvak per ongeluk als ingediend gemarkeerd, dan haal je die vastlegging weg. MyCompanyDesk vraagt eerst om bevestiging. Het tijdvak blijft vergrendeld, de aangiftetaak en de deadline komen terug, en bij de Belastingdienst verandert niets: een ingediende aangifte blijft ingediend.
- **Tijdelijk ontgrendelen**: moet je iets herstellen? Ontgrendel een tijdvak tijdelijk (72 uur) en het vergrendelt vanzelf weer, of gebruik **Vergrendel opnieuw** als je klaar bent. Een vergrendeling helemaal verwijderen kan alleen zolang de aangiftedeadline nog niet voorbij is.

De aangiftestatus wordt per exact tijdvak bijgehouden, niet per bereik. Een ingediende jaaraangifte markeert de vier kwartalen niet als ingediend, en een ingediend kwartaal de maanden erin niet. Vergrendelen geldt wel voor het hele bereik, dus een jaarvergrendeling beschermt elk kwartaal.

**Moment van indienen en correcties.** Je kunt een tijdvak pas als ingediend markeren als het voorbij is; daarvoor zegt de knop vanaf welke datum het kan. Je kunt een tijdvak maar één keer als ingediend markeren. Wil je een ingediend tijdvak corrigeren, voeg dan een correctie of suppletie toe in een open tijdvak.

**Vergrendelde tijdvakken en bulkacties.** Bulkacties op uitgaven of facturen worden geweigerd als een geselecteerde regel in een vergrendeld btw-tijdvak valt. De foutmelding noemt het exacte tijdvak (bijvoorbeeld "1 apr 2026 tot 30 jun 2026") en legt uit wat je kunt doen. Is het tijdvak al ingediend, dan kan het alleen via een suppletieaangifte. Is het een kale vergrendeling (de deadline is voorbij maar er is geen aangifte ingediend), dan kun je het tijdvak tijdelijk ontgrendelen op het tabblad Periodes, of haal je de regels in dat tijdvak uit je selectie en probeer je het opnieuw.

Een factuur of uitgave in een vergrendeld tijdvak bewerken wordt in het formulier tegengehouden: de financiële velden worden alleen-lezen (notities blijven bewerkbaar) en het formulier biedt een correctieroute, zoals een correctie in het huidige open tijdvak of een creditfactuur. Dezelfde beveiliging geldt als je een bankkoppeling bevestigt of een uitgave als betaald markeert: valt de transactie in een vergrendeld tijdvak, dan wordt de actie tegengehouden en vraagt de app je een correctie in het huidige open tijdvak te gebruiken.

Gelijktijdige pogingen om hetzelfde tijdvak in te dienen worden na elkaar afgehandeld. Gaan twee verzoeken tegelijk, bijvoorbeeld door een dubbelklik of twee open tabbladen, dan wordt het tweede geweigerd met een duidelijke melding in plaats van een fout.

## KOR

De kleineondernemersregeling beheer je bij **Instellingen › Btw**: een kaart zet je jaaromzet af tegen de grens van € 20.000 ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)) met een voortgangsbalk, legt uit wat meedoen betekent voor je facturen en heeft de schakelaar om mee te doen. Je blijft in aanmerking komen tot en met precies € 20.000 jaaromzet; pas omzet daarboven maakt een einde aan de KOR. Zit je omzet nog binnen de KOR-grens, dan toont het tabblad Controle een hint met een link daarheen. Staat de KOR aan, dan klappen de overige btw-instellingen (aangiftefrequentie, standaardtarief, vrijstelling) weg achter de knop **Andere btw-instellingen tonen**, en bovenaan staat "Je doet mee aan de KOR: je rekent geen btw."

Ga je boven € 20.000 terwijl je nog meedoet, dan verschijnt bovenaan de factuureditor een waarschuwing. Die zegt dat je boven de KOR-grens zit, noemt de factuur die erover ging (met nummer en datum) en legt uit dat je vanaf die factuur weer btw rekent, en de knop opent **Instellingen › Btw** zodat je je bij de Belastingdienst kunt afmelden. In je btw-aangifte telt de KOR nog tot en met die grensoverschrijdende factuur; daarna reken je weer btw en mag je voorbelasting aftrekken. De instellingskaart biedt ook aan een KOR-einddatum vast te leggen (zie hieronder).

Facturen die zonder btw de deur uit zijn gegaan nadat je over de grens ging, moeten gecorrigeerd. Aan een verstuurde factuur verander je niets: de instellingskaart zet ze op een rij, en voor elke factuur is de oplossing een creditnota gevolgd door een nieuwe factuur met btw. De kaart loopt ze met je door.

Je kunt de KOR ook vanuit het factuurformulier aanzetten. Een nieuwe factuur of conceptfactuur met btw, terwijl het bedrijf geen btw-nummer heeft en nog niet meedoet, toont bij de regels een KOR-tip. **KOR aanzetten** vraagt eerst om bevestiging, en de schakelaar geldt vanaf die dag: de facturen en aangiften van voor blijven zoals ze zijn, en open conceptfacturen, conceptoffertes en ongetekende werkbonnen gaan mee naar 0% btw. Ging je KOR eerder in? Pas dan de startdatum aan bij **Instellingen › Btw**. De tip houdt ook rekening met wat je al eerder koos: hij blijft weg als je in de instelwizard bewust geen KOR deed, als je werkruimte eerder al meedeed, of als je diensten vrijgesteld zijn, en zodra er 90 dagen gegevens zijn rekent hij met het tempo van dit jaar naar de jaarsomzet toe. Hij staat niet bij offertes, creditnota's of facturen met verlegde btw, en blijft weg zodra je hem wegklikt, er een btw-nummer bekend is of de KOR aan staat.

### Begin en einde van je deelname

De instellingskaart houdt bij vanaf wanneer tot wanneer je meedeed: "Deed mee van" een startdatum, "tot en met" een einddatum. Zet je de KOR vanuit het factuurformulier aan, dan vraagt het venster of de startdatum echt vandaag is; ging hij eerder in, kies die datum bij Instellingen.

De instelwizard vraagt hetzelfde, in eigen woorden: zeg je daar dat je meedoet aan de KOR, dan vraagt hij **Sinds wanneer doe je mee aan de KOR?** en zet 1 januari van dit jaar er alvast in, aan te passen. Met een start aan het begin van het jaar dekt de KOR ook de bonnen van vóór je aanmeldingsdag, en dan geldt zijn regel: voorbelasting trek je er niet van af (sources/vat-rates.yaml#countries.NL.notes). Alleen als het tijdvak al is ingediend en op slot zit valt hij terug op vandaag. Meldde je je eerder af en zeg je nu weer ja? Dan start de KOR vandaag, niet als een stille voortzetting van de oude deelname.

Stop je zelf met de KOR? Dan meld je je af bij de Belastingdienst en leg je de laatste dag vast waarop je meedeed. Aangiften tot en met die dag vallen onder de KOR; daarna rek je weer btw en mag je voorbelasting aftrekken. Het venster legt de regels rond die laatste dag uit, waaronder dat opzeggen ingaat vanaf het begin van een aangiftetijdvak. Ging je over de omzetgrens? Dan is de dag vóór de factuur die erover ging automatisch de einddatum.

Over de grens gaan sluit de KOR voor de rest van dat jaar en het jaar erna (sources/vat-rates.yaml#countries.NL.small_business_on_exceed). Tot je weer kunt meedoen, toont de kaart vanaf wanneer je je weer kunt aanmelden en blijft ze je vragen je tussentijds bij de Belastingdienst af te melden; facturen die zonder btw de deur uit zijn gegaan breng je met de creditnota-flow hierboven weer op de juiste cijfers.

Staat de KOR aan, dan hebben facturen geen btw-nummer nodig: de controle voor verzenden vraagt om een IBAN en houdt de factuur niet meer tegen vanwege een ontbrekend btw-id. De instelwizard stelt de KOR-vraag met echte antwoorden: ja, nee of weet ik niet. Bij weet ik niet staat voorop dat je alleen meedoet als je je zelf bij de Belastingdienst hebt aangemeld; een lage omzet alleen is niet genoeg, en de brief van de Belastingdienst geeft zekerheid. Kies je ja, dan gaat de regeling aan en worden facturen zonder btw gemaakt, met een vermelding dat je meedoet aan de KOR.

Voor een tijdvak dat de KOR dekt, houdt de app het zwijgen over de aangifte: geen deadlinechip in je agenda, geen deadlineherinnering in je meldingenpaneel, geen taak om de btw-aangifte in te dienen, en geen mail over de aanstaande aangifte. Kwam je midden in een tijdvak over naar de KOR, dan sluit dat tijdvak nog als een gewone aangifte, met deadline, taak en mail; herinneringen van vóór de overstap lossen vanzelf op. De vrijstelling werkt zo, zolang er geen btw verschuldigd is: Belastingen noemt daar de reden in plaats van een deadline, zonder controlepunt, kwartaaldeadlinechip of deadlineherinnering, en pas een tijdvak met echt verschuldigde btw krijgt die terug.

### Documenten en e-mails onder de KOR

Staat de KOR aan, dan tellen documentregels als 0% btw. Pdf's van facturen, offertes, creditnota's en contracten tonen **Subtotaal** en **Totaal** zonder excl./incl. btw en zonder btw-regel, factuurmails laten de excl./incl. btw-samenvatting onder de regels weg, en nieuwe items in je aanbod staan standaard op 0% btw. Een factuur waarvan alle regels vrijgesteld zijn toont **Vrijgesteld** op de plek van de btw-regel, in plaats van een kaal 0,00. Ook de regeleditor houdt het stil: een regel toont geen btw-tarief en geen label "0% btw" of "excl. btw", niet in het regelvenster, niet op de mobiele regelkaart en niet in het documentdetail. De ondertekenpagina toont **Totaal** in plaats van **Totaal inclusief btw** als de offerte geen btw bevat. Dezelfde formulering geldt zolang de aparte schakelaar voor vrijstelling aan staat, en btw-teksten in de voorwaarden die je via je website publiceert blijven neutraal, ook als de KOR later weer uit gaat.

## KIA en box 3

De KIA (kleinschaligheidsinvesteringsaftrek) en box 3 horen bij de inkomstenbelasting. Je vindt ze op de tabbladen **Winstaangifte** en **Box 3** onder **Belastingen**, na de btw-tabbladen, en ze vragen Office. Het tabblad **Box 3** verschijnt alleen als de module Bezittingen aan staat en je bedrijf geen bv is.

## Btw-vragen aan de assistent

De ingebouwde assistent beantwoordt vragen over je aangifte met de cijfers van je eigen werkruimte, en zijn antwoorden springen direct naar het juiste tabblad of de juiste boeking.

## Tips

- Zet het tijdvak op het tijdvak dat je indient; elke kaart en elk cijfer werkt mee.
- Loop het tabblad Controle door voordat je het tabblad Aangifte opent; een schone checklist betekent meestal dat het rubriekenoverzicht overeenkomt met het formulier van de Belastingdienst.
- Gebruik het spaarpotje als richtbedrag om opzij te zetten; er zit al 10% marge in.
- De deadlinering volgt je aangiftefrequentie en wordt rood bij drie dagen. Zie dat als een harde aanwijzing om in te dienen.
- De btw-tegel op het dashboard gebruikt dezelfde aangiftefrequentie als de btw-pagina's, dus de komende deadline en het tijdvak kloppen altijd met je echte aangifteritme.
- Verkoop je zakelijk binnen de EU? Open de kaart ICP-opgaaf voordat je indient; het is een aparte opgave die je makkelijk vergeet.
- Markeer een tijdvak als ingediend direct nadat je de aangifte hebt gedaan, en laat de automatische vergrendeling het daarna beschermen.
- Zet je het bedrag van een uitgave op nul, dan verdwijnt de afgeleide btw meteen, zodat een gecorrigeerde uitgave geen oude btw op de aangifte achterlaat.

## Zie ook

- [Hoe doe ik btw-aangifte?](/faq/vat-return)
- [Facturen](/features/invoices)
- [Uitgaven](/features/expenses)
- [Bedrijfsinstellingen](/settings/company)
