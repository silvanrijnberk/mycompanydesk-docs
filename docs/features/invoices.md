---
title: Facturen
description: "Maak nette facturen, verstuur ze met een betaallink en volg ze van concept tot betaald, met een filter op elke status."
---

# Facturen

Facturen vormen de kern van MyCompanyDesk. Je maakt nette facturen, stuurt ze met een betaallink naar je klant en volgt de betaling tot het geld binnen is. Facturen maken en versturen kan onbeperkt, op elk abonnement, ook op Desk.

## Instellingen voor facturen en offertes

Onder **Instellingen › Facturen en offertes** staan de standaarden voor elke nieuwe factuur en offerte.

### Betaaltermijn

Stel in hoeveel dagen een klant krijgt om te betalen: **14 dagen** (dit kiezen de meeste mensen), **30 dagen**, **60 dagen** of een eigen aantal dagen (0 heet **Direct**). Deze termijn komt op elke nieuwe factuur, maar per factuur kun je ervan afwijken.

### Herinneringen

Zet **Te laat? Automatisch een herinnering sturen** aan, dan stuurt MyCompanyDesk een vriendelijke herinnering zodra een factuur drie dagen over de vervaldatum is, en daarna elke week opnieuw tot er betaald is. Automatische herinneringen horen bij Office. Zelf een herinnering sturen vanaf de factuur kan op elk abonnement.

### Geldigheid van offertes

Kies hoe lang een offerte standaard geldig blijft: **2 weken**, **1 maand** of **2 maanden**. Elke nieuwe offerte krijgt automatisch een geldig-tot-datum op basis van deze instelling, zodat een offerte nooit zonder verloopdatum de deur uit gaat.

### Getekende offerte automatisch factureren

Staat **Getekend? Automatisch een conceptfactuur klaarzetten** aan, dan wordt een getekende offerte vanzelf een conceptfactuur. Jij kijkt hem na en bepaalt zelf wanneer hij verstuurd wordt. Deze automatisering hoort bij Office.

### Voorwaarden standaard meesturen

Houd je jouw algemene voorwaarden in Documenten bij, dan kan elke verzending ze als PDF meesturen. Onder **Algemene voorwaarden** op dezelfde instellingenpagina stel je apart per soort in of het vinkje bij verzending standaard aan staat: offertes en facturen hebben elk een eigen schakelaar. Standaard gaan de voorwaarden mee bij offertes en niet bij facturen. Het vinkje zelf kun je bij elke verzending aanpassen.

### Factuurnummering

MyCompanyDesk nummert facturen automatisch, netjes op volgorde zoals de Belastingdienst het wil, tenzij je onder **Nummering** zelf een voorvoegsel of startnummer instelt.

| Veld | Wat het doet |
|---|---|
| **Voorvoegsel** | Tekst vóór het jaartal op elke nieuwe factuur, bijvoorbeeld `F-` of `FAC-`. Al verstuurde facturen houden hun nummer. |
| **Eerstvolgende factuurnummer** | Het nummer dat als volgende wordt gebruikt. Alleen vooruit te zetten, nooit terug, want terugzetten zou dubbele nummers geven. |

Onder de velden zie je hoe je volgende factuurnummer eruitziet. Al verstuurde facturen krijgen nooit een ander nummer als je deze instellingen wijzigt.

### Taal van je documenten

Bij **In welke taal maak je je documenten?** kies je de taal van je facturen, offertes en e-mails aan klanten. Nederlands is de standaard. Facturen in andere talen horen bij Office. Een factuur die definitief is gemaakt, houdt de taal waarin hij gemaakt is.

### Peppol e-facturatie

Met een schakelaar op dezelfde instellingenpagina zet je [Peppol e-facturatie](/features/peppol) aan (Office). Je bedrijfsgegevens worden dan aangemeld bij het Peppol-toegangspunt en je kunt naast e-mail ook e-facturen versturen en ontvangen. Op de Peppol-pagina lees je over de identiteitscontrole, het ontvangen en ontbrekende gegevens.

## Overzicht

De facturenpagina zet je facturen onder tabs: **Alle** ("eerst wat jij moet doen"), **Nog versturen** en **Wacht op betaling**. De tabs dragen live aantallen, de tabbladen met betalingen tonen er ook hun totaalbedrag in euro's bij, en op de wacht-tab staat een rode melding met het aantal te late facturen.

In de lijsten staan de facturen gegroepeerd op waar ze staan, zodat het werk dat op je wacht bovenaan komt en het werk dat klaar is naar onderen zakt:

- **Te laat**, daarna **Nog versturen**, dan **Wacht op betaling**: het werk dat nu bij jou ligt
- **Betaald in september** (de twee nieuwste maanden met rijen), daarna **Betaald eerder** voor alles daarvoor, ingeklapt tot je op Toon drukt
- **Betaald**: betaald zonder toewijsbare maand
- **Geannuleerd of gecrediteerd**: het archief van werk dat niet meer leeft

Elke groepskop draagt het aantal van de hele groep en, waar het van toepassing is, het groepstotaal. Met Verberg klap je een groep dicht: de rijen tellen dan niet meer mee voor de paginering, de kop blijft gewoon staan. Een maand die in de toekomst dateert (bijna altijd een typfout in de datum) klapt nooit in: die staat open met zijn eigen kop, zodat de fout zichtbaar blijft.

Naast de data draagt elke rij een kolom **Stand** die de toestand in gewone woorden zegt: "Concept", "Nog versturen", "vervaldatum 12 mei voorbij", "vervalt over 3 dagen", "klant zegt: betaald". Met het filter **Status** in het filterpaneel zet je de lijst nog steeds op één enkele status, inclusief concept, te laat, betaald en geannuleerd. Verkoop je via je website, dan verschijnt naast **Facturen** een tab **Websiteverkopen** met een eigen lijst van die verkopen.

## Een factuur maken

### Het volledige formulier

1. Ga naar **Facturen** en klik op **Nieuwe factuur**
2. Kies of maak een **klant**
3. Voeg **regels** toe met omschrijving, aantal, prijs per stuk en btw-tarief. Het standaard btw-tarief voor nieuwe regels stel je in onder **Instellingen › Btw**. Staat bij een klant btw verlegd aan, dan krijgt de regel vanzelf 0%.
4. Stel de **factuurdatum** en de **vervaldatum** in
5. Voeg eventueel **notities** of **interne opmerkingen** toe
6. Klik op **Opslaan** om een concept te maken

Op de telefoon opent een nieuwe factuur geen lang formulier maar een korte stappenflow: eerst de klant, dan de regels, dan een controlestap voor opslaan en versturen.

### Vanuit een sjabloon

Klik in het factuurformulier op **Vanuit sjabloon** (die knop zie je alleen als je factuursjablonen hebt). Kies een sjabloon en het formulier vult zich ter plekke met de regels, de klant en de andere opgeslagen gegevens. Pas aan wat nodig is, sla op en verstuur. Een factuur bewaar je als sjabloon met **Opslaan als sjabloon** in het menu met meer acties op de factuur.

Een sjabloon bewaart de volledige regel: omschrijving, aantal, eenheid, prijs per stuk, btw-tarief, korting en of de regel vrijgesteld is van btw. De koppeling met een item uit je aanbod bewaart hij bewust niet: dat item kan later verwijderd worden, en dan zou het sjabloon niet meer werken.

## Prijzen inclusief btw

De schakelaar **Bedragen incl. btw** op het formulier verandert wat je typt. Staat hij aan, dan is een regelprijs wat de klant betaalt, btw inbegrepen, en wordt de btw uit de prijs gehaald in plaats van erbovenop gezet. De schakelaar staat op facturen, offertes en terugkerende facturen, elk document onthoudt zijn eigen keuze, en de hint onder de schakelaar zegt hoe je nu werkt.

- De prijs die je typte blijft staan: wijzig je daarna het btw-tarief op de regel, dan blijft het bedrag incl. btw gelijk en past het bedrag excl. btw zich eronder aan.
- Een korting in euro's op een regel gaat af van wat de klant betaalt. Een kortingspercentage werkt zoals op elke andere regel.
- Bij prijzen incl. btw tonen de PDF en de factuur- en offertepagina wat de klant betaalt: de prijs per stuk en het regelbedrag staan er inclusief btw (€ 38,00, niet € 31,40), de prijs excl. btw staat klein onder de prijs per stuk, en het btw-blok noemt de grondslag van elk tarief ("Btw 21% over € 35,54"). Pakketonderdelen staan er ook inclusief btw, zodat ze optellen tot de pakketprijs. De totalen van het document veranderen niet, en de e-factuur draagt dezelfde cijfers.
- Werk je zonder de schakelaar terwijl je prijzen typte die de klant betaalt? Bij een particuliere klant vraagt het formulier of de prijzen die je typte incl. btw zijn. Met één klik zet je het document om zonder dat je bedragen veranderen. Begin je een nieuw document voor een particuliere klant, dan gaat de schakelaar vanzelf aan (de prijzen die de app uit je aanbod invult houden hun regeltotaal), en onder de schakelaar staat dan "Particuliere klant: je typt nu prijzen incl. btw.", met een knop **Uitzetten** die prijzen excl. btw terugzet.

## Een factuur aan een bezitting koppelen

Hoort de omzet bij een verhuurpand, voertuig of andere bezitting, kies die bezitting dan in het factuurformulier. De factuur staat dan op de pagina van die bezitting en telt mee in de totale omzet ervan. Dat werkt voor facturen uit een huurcontract en voor een directe koppeling, zoals een afrekening servicekosten, een eenmalige vergoeding of een verkoopfactuur. [Bezittingen](/features/objects) zijn een onderdeel van Office.

## De factuurpagina

Elke factuur heeft een eigen pagina met:

- De gegevens van de klant
- De regels met subtotalen
- De btw-specificatie
- Het totaalbedrag
- De status en het verloop
- De betaallink (als de factuur verstuurd is)

## Voorbeeld van het document

Elke opgeslagen factuur heeft op zijn pagina een live PDF-voorbeeld. Je ziet de factuur precies zoals je klant hem ziet: opmaak, regels, totalen, huisstijl en logo.

In de kop van het voorbeeld staan de knoppen **PDF downloaden**, **Afdrukken** en **Ontwerp aanpassen**. Met **Ontwerp aanpassen** ga je direct naar Factuurontwerp en pas je de uitstraling van al je facturen, offertes en herinneringen aan. Ben je klaar, dan kom je terug bij de factuur waar je vandaan kwam. Op de telefoon staat dezelfde actie in het menu met meer acties, zodat de kop van het voorbeeld rustig blijft.

## Acties

De hoofdknop op de factuurpagina volgt de stap waarin de factuur staat:

- **Definitief maken**: bij een concept. De factuur krijgt dan zijn vaste nummer.
- **Versturen**: bij een definitieve factuur die nog niet bij de klant is.
- **Markeer als betaald**: bij een verstuurde factuur die op betaling wacht, en als de klant zegt dat hij betaald heeft, zodat je dat bevestigt in plaats van de factuur opnieuw te sturen.
- **Verstuur herinnering**: bij een te late factuur. **Markeer als betaald** staat dan in het menu met meer acties.
- **Dupliceren**: bij een betaalde of geannuleerde factuur, als tweede knop, zodat je hem snel opnieuw maakt.

Andere acties staan, afhankelijk van de status, in het menu met meer acties naast de hoofdknop: **Dupliceren**, **Elke maand herhalen** (maakt van de factuur een terugkerende factuur), de mail opnieuw versturen, **Verstuur herinnering**, **Versturen naar boekhouder**, **Opslaan als sjabloon** en de factuur annuleren. Op de telefoon staan ook het voorbeeld, **PDF downloaden** en **Ontwerp aanpassen** in dat menu.

### Versturen

Verstuur de factuur per e-mail naar je klant. De e-mail bevat:

- Een bericht dat je kunt aanpassen (op basis van je e-mailsjabloon)
- De factuur als PDF-bijlage
- Een betaallink om online te betalen

Voor het versturen laat het e-mailvoorbeeld het bericht zien precies zoals je klant het krijgt. Onder **Opnemen in e-mail** staan schakelaars voor de **Bekijk-knop (online link)**, de **Download-knop**, de **PDF-bijlage** en **Factuurregels opnemen**. Wat je aanzet zie je meteen in het voorbeeld, dus wat je ziet is wat je klant krijgt. Bericht elke keer weer bijgeschaafd? Vink in hetzelfde venster **Gebruik deze tekst voortaan voor facturen** aan, dan begint elke volgende factuurmail vanaf die versie. Zie [E-mailsjablonen](/faq/email-template).

Heeft je werkruimte algemene voorwaarden in Documenten, dan toont het e-mailvoorbeeld ook de schakelaar **Algemene voorwaarden meesturen**. Of die bij het openen aan staat, volgt de standaard die je onder [Voorwaarden standaard meesturen](#voorwaarden-standaard-meesturen) voor dit soort document hebt ingesteld (uit het hoofd: aan bij offertes, uit bij facturen). Staat hij aan, dan gaat de actuele voorwaarden-PDF als bijlage mee en wordt de verzending vastgelegd als het moment van terhandstelling op het voorwaardendocument.

### Versturen als Peppol-e-factuur

Zit je werkruimte op Office en staat [Peppol e-facturatie](/features/peppol) aan, dan biedt het verzendvenster ook **E-factuur (Peppol)**. De factuur gaat dan digitaal naar het boekhoudpakket van je klant in plaats van per e-mail. Per factuur kies je welk kanaal je gebruikt.

### PDF downloaden

Download de factuur als net opgemaakte PDF met je logo, je huisstijlkleuren en alle factuurgegevens.

Is een factuur langer dan één pagina, dan breekt het PDF hem netjes af: de totalen blijven bij de laatste regels staan, onder een strookje dat meldt dat de factuur verdergaat, en het betaalblok krijgt daarna een blad voor zichzelf. Geen vervolgpagina opent met een lege tabel of een herhaalde kopie van de cijfers.

### Markeer als betaald

Bevestig zelf een betaling als de klant per overboeking of op een andere manier buiten de app betaalt.

### Annuleren

Annuleer een factuur die niet meer betaald hoeft te worden. Geannuleerde facturen blijven in je administratie staan, zodat alles controleerbaar blijft.

### Dupliceren

Maak een kopie van een bestaande factuur, handig als je dezelfde klant opnieuw factureert.

Een creditnota kun je niet dupliceren. Het duplicaat zou naar geen enkele factuur verwijzen en toch als negatieve omzet in je btw-aangifte meetellen. Maak daarom een nieuwe correctie met **Creditnota maken** op de factuur die je wilt corrigeren.

### Herinnering sturen

Stuur een betalingsherinnering voor een te late factuur. Dat kan op elk abonnement; alleen de automatische herinneringen horen bij Office. Heb je online betalen aan staan, dan geeft de herinneringsmail de klant dezelfde betaalmogelijkheden als de oorspronkelijke factuur: een knop **Bekijk & betaal**, een knop **Betaling bevestigen** en een QR-code om te scannen en betalen op de PDF.

## Bulkacties

Selecteer meerdere facturen in de lijst om ze in één keer te bewerken. Tijdens een selectie verschijnt er een vinkjeskolom in de lijst, anders nergens; een lege lijst heeft helemaal geen selecteerknop.

- **Markeer als betaald**: leg voor meerdere facturen tegelijk een betaling vast
- **Markeer als verzonden**: zet facturen die je buiten MyCompanyDesk hebt bezorgd op verzonden. Dit verandert alleen de status en geeft de facturen hun vaste nummer; er gaat geen mail uit.
- **Markeer als geannuleerd**: annuleer meerdere facturen tegelijk
- **Archiveren**: verplaats facturen naar het archief
- **Verwijderen**: verplaats facturen naar de prullenbak

In het archief en de prullenbak zet je facturen weer terug, en vanuit de prullenbak verwijder je ze definitief.

Verwijder je een factuur definitief (los, in bulk, door de prullenbak te legen of alles te verwijderen), dan komen de gekoppelde uitgaven weer vrij. Ze staan dan weer bij de nog niet gefactureerde uitgaven en kunnen op een andere factuur.

Facturen in bulk op verzonden zetten doorloopt dezelfde btw- en statuscontroles als een losse factuur definitief maken. Facturen die een controle niet halen worden overgeslagen, en het resultaatscherm zegt waarom.

Weigert de app een bulkactie omdat een of meer geselecteerde rijen in een vergrendelde btw-periode vallen, dan noemt de foutmelding precies die periode en zegt wat je kunt doen. Een ingediende en vergrendelde periode gaat alleen weer open via een suppletie. Een kale vergrendeling (de aangiftetermijn is voorbij maar er is geen aangifte gedaan) kun je tijdelijk opheffen op de btw-pagina. Haal de rijen uit die periode uit je selectie, of gebruik de bijpassende correctieroute, en probeer het opnieuw.

## Betaallinks

Verstuur je een factuur, dan maakt MyCompanyDesk een eigen betaallink. Je klant kan:

1. Op de link in de e-mail klikken
2. De factuur bekijken in het **klantportaal**
3. Direct online betalen via jouw gekoppelde Mollie- of Stripe-account

Met Mollie of Stripe gekoppeld begint de mail met een **Betaal nu**-knop die rechtstreeks naar de betaalpagina gaat, met **Bekijk factuur** ernaast voor wie eerst wil kijken. De betaling start alleen in de browser van de klant, dus mailscanners maken er geen aan. Meer hierover staat bij [het klantportaal](/advanced/customer-portal#betaling).

De betaling wordt vanzelf vastgelegd en de factuur gaat op **Betaald**.

Annuleer je een factuur nadat hij verstuurd is, dan werkt de betaallink niet meer. Klikt een klant op de link in de oude mail of PDF, dan ziet hij dat de factuur geannuleerd is en niet meer online betaald kan worden.

## Online betalen

Laat klanten je facturen online betalen door je eigen Mollie- of Stripe-account te koppelen:

1. Ga naar **Instellingen › Betalen**
2. Koppel bij **Klanten laten betalen met iDEAL** Mollie of Stripe
3. Je klant ziet de betaalmethodes die in jouw eigen Mollie- of Stripe-account aan staan, zoals iDEAL, creditcard of Bancontact

Is de koppeling gemaakt, dan krijgt elke factuur die je verstuurt een betaallink. Je klanten betalen via jouw eigen account bij de betaalprovider en het geld komt direct bij jou. MyCompanyDesk komt niet aan je geld en houdt het ook niet vast.

Op dezelfde pagina vul je je IBAN in voor overboekingen (de QR-code om te scannen en betalen op de PDF gebruikt die) en, met **Klanten mogen ook via PayPal betalen**, het e-mailadres van je PayPal-account.

## Herkomst van de betaling

Is een factuur volledig betaald, dan staat er in de kop van het betaalblok een label met de betaalprovider waar het geld via binnenkwam: "Betaald via Mollie" of "Betaald via Stripe". Bij meerdere betaalmethodes zie je de provider waar het meeste via binnenkwam. Zo zie je in één oogopslag waar het geld terechtkwam, zonder door de betaalgeschiedenis te scrollen.

## Betalingen terugbetalen

Online betalingen via Mollie of Stripe betaal je rechtstreeks vanuit MyCompanyDesk terug. Betaal je een betaling terug, dan:

- Gaat het volledige bedrag via dezelfde betaalprovider terug naar je klant
- Verwerkt Mollie of Stripe de terugbetaling meteen
- Staat de betaling in je administratie als terugbetaald

Een gedeeltelijke terugbetaling die je bij Mollie of Stripe zelf doet (bijvoorbeeld als je daar maar een deel van het bedrag terugstort), staat in de betalingslijst met de datum van de terugbetaling en het bedrag dat geboekt blijft.

Betalingen buiten de app om (overboeking, contant) maak je ongedaan zonder terugbetaling via de provider: de betaling wordt als vervallen gemarkeerd. De factuur krijgt dan weer de status die bij zijn verloop past. Was de factuur al naar de klant gemaild, dan gaat hij terug naar **Verzonden**; was hij nooit verstuurd, dan terug naar **Nog versturen**. Het oorspronkelijke verzendverloop blijft bewaard.

Zo betaal je een betaling terug:

1. Open de factuurpagina
2. Zoek de betaling in de betalingslijst
3. Klik op **Terugbetalen** (alleen bij betalingen via Mollie en Stripe)
4. Vul eventueel een reden in
5. Bevestig de terugbetaling

## Soorten documenten

Onder facturen vallen meerdere soorten documenten:

- **Factuur**: het gewone document om te factureren
- **Creditnota**: een correctie, bijvoorbeeld bij een terugbetaling
- **Herinnering**: een betalingsherinnering voor een te late factuur

## Filteren en zoeken

Met het filterpaneel en het zoekveld maak je de lijst kleiner:

- **Status**: nog versturen, concept, wacht op betaling, te laat, klant zegt: betaald, betaald of geannuleerd
- **Periode**: filter op factuurdatum
- **Weergave**: actieve facturen, het archief of de prullenbak
- **Zoeken**: op klant, nummer of kenmerk
- **Directe links**: meldingen en mails die rechtstreeks naar een factuur linken, wissen bij het openen een actief datumfilter, zodat de factuur niet verstopt raakt achter een filter dat nog aan stond

De facturen van één klant open je vanaf de pagina van die klant.

## Hoelang facturen openstaan

Op de computer staat naast de lijst de kaart **Hoelang facturen openstaan**. Die verdeelt openstaande facturen naar hoeveel dagen ze over de vervaldatum zijn: lopend, 1 tot 30, 31 tot 60, 61 tot 90 en meer dan 90 dagen te laat. Klik op een groep om de lijst daartoe te beperken. De bedragen zijn wat er nog te innen is: het factuurtotaal min geboekte betalingen, rekening houdend met creditnota's die al op de factuur zijn gemaakt.

De kaart ziet alleen de facturen die in de huidige lijst geladen zijn. De totalen zijn dus een momentopname van die pagina, geen cijfer over de hele werkruimte. Een volledig gecrediteerde factuur telt niet meer als geld dat nog binnen moet komen, zodat de totalen kloppen met wat je klant in het portaal ziet en met de factuurpagina.

## Exporteren

Download je facturen als CSV-bestand voor Excel, Google Sheets of je boekhoudpakket via **Instellingen › Gegevens downloaden**. Dat kan op elk abonnement.

## Definitief maken en versturen

Maak je een factuur definitief of verstuur je hem, dan controleert MyCompanyDesk of je btw-id en IBAN bekend zijn. In Nederland hoort je btw-id op een geldige factuur, en je IBAN vertelt klanten waar ze kunnen betalen.

Ontbreekt een van beide, dan opent er een venster waarin je ze meteen invult. Na het opslaan wordt je factuur vanzelf definitief.

De app houdt het definitief maken ook tegen als je bedrijfsgegevens onvolledig zijn (bijvoorbeeld een ontbrekende bedrijfsnaam of adres) of als de factuur geen regels heeft. De foutmelding zegt precies wat er ontbreekt, zodat je het oplost voordat de factuur naar de klant gaat.

Aantallen op de PDF staan in dezelfde taal als de rest van het document: een Engelse factuur gebruikt Engelse getalnotatie, een Nederlandse factuur Nederlandse.

Nummert je werkruimte handmatig, dan vraagt de app bij definitief maken of versturen ook om het factuurnummer. MyCompanyDesk stelt het volgende nummer uit je reeks voor, maar je mag elk nummer typen. Het nummer is verplicht en moet uniek zijn.

Wacht je nog op je btw-id van de Belastingdienst, of val je onder de kleineondernemersregeling (KOR), dan kun je dat bevestigen en toch doorgaan. Vul je btw-id later in zodra je hem hebt.

Is een factuur eenmaal definitief, dan kun je hem niet in één stap archiveren of verwijderen, want het factuurnummer is al gebruikt. Gebruik annuleren of een creditnota voor een definitieve factuur die niet meer betaald hoeft te worden.

<a id="receiving-invoices-from-other-mycompanydesk-users"></a>

## Facturen van andere MyCompanyDesk-gebruikers ontvangen

Mailt een leverancier die ook MyCompanyDesk gebruikt je een factuur, dan kun je die rechtstreeks als gestructureerd concept in je uitgaven laten landen. De bedragen komen uit de factuur zelf, dus niets scannen of overtypen. Het concept staat altijd op nakijken en wordt pas geboekt als jij het goedkeurt.

Deze functie staat standaard uit. Zet hem aan onder **Instellingen › Automatisering** bij **Facturen van andere MyCompanyDesk-gebruikers**. Op dezelfde plek zet je hem op elk moment weer uit.

Staat de functie aan, dan:

- Verschijnt elke binnenkomende factuur als conceptuitgave onder **Uitgaven**, met de naam van de leverancier en de regeltotalen al ingevuld.
- Zegt de omschrijving uit welke MyCompanyDesk-werkruimte hij komt en dat hij via MyCompanyDesk binnenkwam.
- Kunnen regels voor vertrouwde leveranciers de categorie alvast invullen, maar blijft het concept op nakijken staan, zodat er niets vanzelf geboekt wordt.
- Wordt dezelfde factuur nooit twee concepten, ook niet als de afzender de mail opnieuw stuurt.
- Neemt MyCompanyDesk van dezelfde afzender hooguit tien concepten per 24 uur in je werkruimte aan, zodat je nakijklijst niet overloopt.

De tweede instap vraagt geen instellingen: het klantportaal biedt op de factuur zelf de knop **In mijn administratie** aan, en die klik is de toestemming. MyCompanyDesk zet het concept op dat moment in de werkruimte van de ontvanger, zonder de schakelaar hierboven en zonder de daglimiet, en het werkt op elk postvak waar de factuur binnenkwam. Beide routes delen dezelfde controle op dubbelen, dus een factuur die al automatisch aankwam wordt nooit een tweede keer geboekt. De knop zelf staat beschreven bij [het klantportaal](/advanced/customer-portal#de-factuur-in-je-eigen-administratie).

De functie is aan beide kanten gratis. De automatische route werkt alleen als de leverancier de factuur mailt naar een postvak dat MyCompanyDesk voor je host. Liever een netwerk? Je kunt facturen van leveranciers ook ontvangen via [Peppol e-facturatie](/features/peppol).

## Tips

- Stel je [e-mailsjablonen](/settings/email) in voordat je je eerste factuur verstuurt
- Gebruik [terugkerende facturen](/features/recurring-invoices) (Office) voor vaste facturatie
- Kijk in [Rapportages](/features/reports) (Office) voor inzicht in je omzet
- Zet [AI-suggesties](/advanced/ai-features) (Office) aan voor betere omschrijvingen
- Gebruik [Peppol e-facturatie](/features/peppol) (Office) als je klant digitale bezorging wil
