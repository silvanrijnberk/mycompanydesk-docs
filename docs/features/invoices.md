---
title: Facturen
description: "Maak professionele facturen, verstuur ze met betaallinks en volg ze van concept via openstaand tot betaald, met filters op elke status."
---

# Facturen

Facturen vormen de kern van MyCompanyDesk. Maak professionele facturen, verstuur ze naar klanten met betaallinks en volg betalingen tot aan de afhandeling.

## Overzicht

De facturenpagina toont al je facturen met filter- en zoekmogelijkheden. De statustabs in de bovenste balk laten je snel wisselen tussen:

- **Alles**: alle facturen
- **Concepten**: aangemaakt maar niet verstuurd
- **Openstaand**: verzonden, openstaande of achterstallige facturen
- **Websiteverkopen**: online verkopen, als je werkruimte websiteverkopen heeft ingeschakeld

Je kunt nog steeds het **Status**-filter gebruiken om de lijst te verfijnen naar elke status, inclusief verzonden, achterstallig, betaald of geannuleerd.

## Een factuur aanmaken

### Volledig formulier

1. Ga naar **Facturen > Nieuwe factuur**
2. Selecteer of maak een **klant** aan
3. Voeg **regelitems** toe met omschrijving, aantal, eenheidsprijs en BTW-tarief. Het standaard BTW-tarief voor nieuwe regels komt uit de belastinginstellingen van je werkruimte (Geldzaken → Belasting). Bij klanten met verlegde BTW wordt automatisch 0% gebruikt.
4. Stel de **factuurdatum** en **vervaldatum** in
5. Voeg optionele **notities** of **interne opmerkingen** toe
6. Klik op **Opslaan** om een concept aan te maken

### Snel toevoegen

Voor snellere aanmaak:

1. Klik op de snel-toevoegen-knop op de facturenlijst
2. Selecteer een klant
3. Voeg items toe of kies een sjabloon
4. Sla op (en verstuur optioneel direct)

### Vanuit een sjabloon

Je kunt een nieuwe factuur vanuit een opgeslagen sjabloon starten op twee plekken:

- In het **volledige factuurformulier** klik je op **Vanuit sjabloon** (alleen zichtbaar als je opgeslagen factuursjablonen hebt). Kies een sjabloon en het formulier vult zich ter plekke met de regelitems, klant en andere opgeslagen gegevens. Pas aan waar nodig en sla op en verstuur.
- Vanuit de **snel-toevoegen-lade** klik je op **Sjabloon gebruiken**, selecteer je een opgeslagen sjabloon en worden alle regelitems vooraf ingevuld. Pas aan waar nodig en sla op en verstuur.

Opgeslagen sjablonen bewaren de volledige regel: omschrijving, aantal, eenheid, prijs, BTW-tarief, korting en of de regel BTW-vrij is. Ze bewaren de koppeling met een aanboditem expres niet, want die items kunnen later worden verwijderd waardoor het sjabloon vervolgens vastloopt bij gebruik.

## Een factuur toewijzen aan een object

Als de omzet hoort bij een huurpand, voertuig of ander activum, selecteer je het object in het factuurformulier. De factuur verschijnt dan op de objectdetailpagina en wordt meegenomen in de totale omzet van dat object. Dit geldt zowel voor facturen die uit een huurcontract zijn gegenereerd als voor directe toewijzing, zoals servicekostenafrekeningen, losse facturen en verkoopfacturen.

## Factuurdetails

Elke factuur heeft een detailpagina met:

- Klantinformatie
- Regelitems met subtotalen
- BTW-specificatie
- Totaalbedrag
- Status en geschiedenis
- Betaallink (indien verstuurd)

## Documentvoorbeeld

Elke opgeslagen factuur heeft een live PDF-voorbeeld op de detailpagina. Het voorbeeld toont de factuur precies zoals je klant hem ziet: lay-out, regelitems, totalen, huisstijl en logo.

In de kop van het voorbeeld staan knoppen voor **PDF downloaden**, **Printen** en **Ontwerp aanpassen**. Klik op **Ontwerp aanpassen** om direct naar Factuurontwerp te gaan en de uitstraling van al je facturen, offertes en herinneringen aan te passen. Wanneer je klaar bent, kom je terug bij de factuur waar je vandaan kwam. Op mobiel staat dezelfde actie in het overflow-menu, zodat de kop van het voorbeeld overzichtelijk blijft.

## Acties

De hoofdactie op de factuurdetailpagina hangt af van de factuurstatus:

- **Versturen** — Beschikbaar voor concept-, verzonden en achterstallige facturen. Dit is de primaire volgende stap zolang de factuur de klant nog moet bereiken.
- **Dupliceren** — Getoond bij geannuleerde facturen, zodat je ze snel opnieuw kunt aanmaken.
- **Markeer als betaald** — Getoond wanneer een klant een betaling meldt, zodat je die kunt bevestigen in plaats van de factuur opnieuw te versturen.

Extra acties zitten in het overflow-menu naast de hoofdactie:

- **PDF downloaden** — Download de factuur als een professioneel opgemaakt PDF-document met je bedrijfslogo, huisstijlkleuren en alle factuurgegevens.
- **Annuleren** — Annuleer een factuur die niet meer betaald hoeft te worden. Geannuleerde facturen blijven in je administratie voor controledoeleinden.
- **Dupliceren** — Maak een kopie van een bestaande factuur, handig voor terugkerende facturatie aan dezelfde klant.
- **Herinnering sturen** — Verstuur een betalingsherinnering voor achterstallige facturen.

### Versturen

Verstuur de factuur per e-mail naar je klant. De e-mail bevat:

- Een aanpasbaar bericht (gebaseerd op je e-mailsjabloon)
- De factuur-PDF als bijlage
- Een betaallink voor online betaling

Voordat je verstuurt, toont de e-mailvoorbeeldweergave het bericht precies zoals de klant hem ontvangt. In het verzendvenster zet je de **Bekijk-knop**, **Download-knop**, **PDF-bijlage**, **Factuurregels** en, als je online betalingen hebt ingeschakeld, de knop **Betaling bevestigen** aan of uit. Deze schakelaars worden direct verwerkt in het voorbeeld, dus wat je ziet is wat de klant krijgt.

Als je werkruimte algemene voorwaarden in Documenten heeft staan, toont de e-mailvoorbeelddialoog ook de schakelaar **Algemene voorwaarden meesturen**. Voor facturen staat deze standaard uit. Als je hem inschakelt, wordt de huidige voorwaarden-PDF bij de e-mail gevoegd en wordt de verzending vastgelegd als het terhandstellingsmoment op het voorwaardendocument.

### Versturen als Peppol e-factuur

Als je werkruimte op het Pro-abonnement zit en [Peppol e-facturatie](/features/peppol) heeft ingeschakeld, biedt het verzenddialoog ook **E-factuur (Peppol)** aan. Hiermee wordt de factuur digitaal afgeleverd in het boekhoudpakket van je klant, in plaats van per e-mail. Je kiest per factuur welk kanaal je gebruikt.

### PDF downloaden

Download de factuur als een professioneel opgemaakt PDF-document. De PDF bevat je bedrijfslogo, huisstijlkleuren en alle factuurgegevens.

### Markeer als betaald

Bevestig handmatig de betaling wanneer een klant per bankoverschrijving of andere offline methode betaalt.

### Annuleren

Annuleer een factuur die niet meer betaald hoeft te worden. Geannuleerde facturen blijven in je administratie voor controledoeleinden.

### Dupliceren

Maak een kopie van een bestaande factuur, handig voor terugkerende facturatie aan dezelfde klant.

Creditnota’s kunnen niet worden gedupliceerd. Een duplicaat zou naar geen enkele factuur verwijzen en toch als negatieve omzet in de btw-aangifte meetellen. Maak daarom een nieuwe correctie via “Creditnota maken” op de factuur die je wilt corrigeren.

### Herinnering sturen

Verstuur een betalingsherinnering voor achterstallige facturen. Als je werkruimte online betalingen heeft ingeschakeld, biedt de herinneringsmail de klant dezelfde betaalopties als de originele factuur: een knop **Bekijk \u0026 betaal**, een knop **Betaling bevestigen** en een QR-code op de PDF om te scannen en te betalen.

## Bulkacties

Selecteer meerdere facturen uit de lijst om acties in bulk uit te voeren:

- **Markeer als verzonden** — Markeer meerdere conceptfacturen tegelijk als verzonden
- **Markeer als betaald** — Registreer betalingen voor meerdere facturen
- **Archiveren** — Verplaats facturen naar het archief
- **Verwijderen** — Verwijder facturen permanent

Een factuur definitief verwijderen (enkelvoudig, via bulkacties, prullenbak legen of alles verwijderen) maakt de koppeling met eventuele gekoppelde uitgaven leeg. Die uitgaven komen terug in de lijst met niet-gefactureerde uitgaven en kunnen opnieuw aan een factuur worden toegevoegd.

Bulksgewijs afronden voert dezelfde BTW- en statuscontroles uit als bij het versturen van een enkele factuur. Facturen die een controle niet doorstaan, worden overgeslagen; het resultatenscherm geeft aan waarom.

## Betaallinks

Wanneer je een factuur verstuurt, wordt een unieke betaallink gegenereerd. Je klant kan:

1. Op de link in de e-mail klikken
2. De factuur bekijken in het **klantportaal**
3. Direct online betalen via je gekoppelde Mollie- of Stripe-account

De betaling wordt automatisch geregistreerd en de factuurstatus wordt bijgewerkt naar **Betaald**.

Als een factuur is geannuleerd nadat hij is verstuurd, werkt de betaallink niet meer. Klikt een klant op de link in de oude e-mail of PDF, dan ziet hij een melding dat de factuur is geannuleerd en niet meer online betaald kan worden.

## Online betalingen

Schakel online factuurbetalingen in door je eigen Mollie- of Stripe-account te koppelen:

1. Ga naar **Geld → Betalingen** in het werkruimtemenu
2. Koppel onder **Online betalingen** de gewenste verwerker
3. Mollie ondersteunt iDEAL, Bancontact, creditcard en bankoverboeking
4. Stripe Connect ondersteunt card, Apple Pay, Google Pay en SEPA-incasso

Na het koppelen bevat elke factuur die je verstuurt een betaallink. Je klanten betalen via jouw eigen verwerker. Het geld staat direct op jouw rekening. MyCompanyDesk verwerkt of beheert geen betalingen voor je.

## Betaalprovider-badge

Wanneer een factuur volledig is betaald, toont de kop van de betalingssectie een badge die aangeeft via welke provider de betaling binnenkwam: "Betaald via Mollie" of "Betaald via Stripe". De dominante provider wordt getoond wanneer meerdere betaalmethoden zijn gebruikt. Zo zie je in een oogopslag waar het geld is binnengekomen, zonder door het betalingsverloop te scrollen.

## Betalingen terugstorten

Online betalingen via Mollie of Stripe kunnen direct vanuit MyCompanyDesk worden teruggestort. Wanneer je een betaling terugstort:

- Wordt het volledige bedrag teruggestort naar je klant via dezelfde betaalprovider
- Wordt de terugbetaling direct verwerkt door Mollie of Stripe
- Wordt de betaling gemarkeerd als teruggestort in je administratie

Gedeeltelijke terugbetalingen die je bij Mollie of Stripe start (bijvoorbeeld als je daar alleen een deel van het bedrag terugstort) verschijnen nu in de betalingslijst met de datum van de terugbetaling en het bedrag dat nog geboekt staat.

Offline betaalmethoden (bankoverschrijving, contant) gebruiken de bestaande ongeldig-route: de betaling wordt gemarkeerd als ongeldig zonder terugstorting via de provider. Wanneer je een betaling terugdraait, herstelt de factuurstatus naar de toestand die bij de geschiedenis van de factuur hoort. Was de factuur al per e-mail naar de klant verstuurd, dan komt hij terug op **Verstuurd**; was hij nog nooit verstuurd, dan komt hij terug op **Open**. De oorspronkelijke verzendgeschiedenis blijft bewaard.

Om een betaling terug te storten:

1. Open de factuurdetailpagina
2. Zoek de betaling in de betalingslijst
3. Klik op de **terugbetalen**-knop (alleen beschikbaar voor Mollie- en Stripe-betalingen)
4. Voeg een optionele reden toe
5. Bevestig de terugbetaling

## Documenttypen

De factuurmodule ondersteunt meerdere documenttypen:

- **Factuur** — Standaard factuurtype
- **Creditnota** — Correctie voor terugbetalingen of aanpassingen
- **Herinnering** — Betalingsherinnering voor achterstallige facturen

## Filteren en zoeken

Gebruik de filterbalk om je facturen te verfijnen:

- **Status** — Concept, Verzonden, Achterstallig, Betaald, Geannuleerd
- **Klant** — Filter op specifieke klant
- **Project** — Filter op gekoppeld project
- **Datumbereik** — Filter op factuur- of vervaldatum
- **Zoeken**: Zoek op factuurnummer, klantnaam, referentie of notities
- **Deeplinks**: Notificaties en e-mails die direct naar een factuur linken, wissen het actieve datumbereik wanneer ze de pagina openen, zodat de factuur niet verborgen raakt achter een bestaand filter

## Ouderdomsanalysekaart

Het tabblad **Openstaand** toont een ouderdomsanalysekaart die openstaande facturen indeelt naar het aantal dagen dat ze over de vervaldatum heen zijn. De getoonde bedragen zijn het resterende te innen saldo: het factuurbedrag minus de geboekte betalingen, met inbegrip van eventuele creditnota’s die al op deze factuur zijn uitgegeven.

Omdat de kaart alleen de facturen ziet die in de huidige lijstweergave zijn geladen, zijn de emmerbedragen een momentopname van die pagina, geen volledig werkruimte-overzicht. Een volledig gecrediteerde factuur verschijnt niet langer als nog te innen geld, zodat de totalen aansluiten bij wat je klant in het portaal ziet en wat de factuurdetailpagina toont.

## Exporteren

Exporteer je facturen als CSV voor gebruik in Excel, Google Sheets of je boekhoudsoftware.

::: info
CSV-export vereist het **Pro**-abonnement of hoger.
:::

## Afronden en versturen

Wanneer je een factuur afrondt of verstuurt, controleert MyCompanyDesk of je bedrijf een btw-id en IBAN op je profiel hebt staan. In Nederland is een btw-id verplicht op je factuur, en je IBAN vertelt je klanten waar ze kunnen betalen.

Ontbreekt een van de twee, dan opent een dialoog waarin je ze direct kunt invullen. Na opslaan wordt de factuur automatisch afgerond.

De app blokkeert het afronden ook als je bedrijfsgegevens incompleet zijn (bijvoorbeeld een ontbrekende bedrijfsnaam of adres) of als de factuur geen regelitems heeft. De foutmelding wijst precies naar wat ontbreekt, zodat je het eerst kunt oplossen voordat de factuur de klant bereikt.

Hoeveelheden in de PDF worden opgemaakt in dezelfde taal als de rest van het document, zodat een Engelse factuur Engelse getalnotatie gebruikt en een Nederlandse factuur Nederlandse notatie.

Als je werkruimte handmatige nummering gebruikt, vraagt de app ook om het factuurnummer wanneer je afrondt of verstuurt. MyCompanyDesk toont het volgende nummer in je reeks als suggestie, maar je mag elk nummer invoeren dat je wilt. Het nummer is verplicht en moet uniek zijn.

Wacht je nog op je btw-id van de Belastingdienst, of val je onder de KOR (kleineondernemersregeling)? Dan kun je de melding overslaan en toch doorgaan. Vul je btw-id later aan zodra je hem hebt.

Zodra een factuur definitief is, kun je hem niet meer in één stap archiveren of verwijderen, omdat het factuurnummer dan al is gebruikt. Gebruik de annulerings- of creditnotaflow voor een definitieve factuur die niet meer betaald hoeft te worden.

## Facturen van andere MyCompanyDesk-gebruikers ontvangen

Als een leverancier die ook MyCompanyDesk gebruikt je een factuur mailt, kun je die direct als gestructureerd concept in je uitgaven laten binnenkomen. De bedragen komen overeen met die van de factuur zelf, dus er is geen scan- of overtyplwerk nodig. De conceptuitgave wordt altijd aangemaakt als "te controleren" en pas geboekt nadat jij akkoord geeft.

Deze functie staat standaard uit. Je zet hem aan via **Instellingen > Automatisering** (`/settings/automatisering`) onder **Facturen van andere MyCompanyDesk-gebruikers**. Je kunt hem daar ook weer uitschakelen.

Als de functie actief is:

- Komt elke inkomende factuur als conceptuitgave binnen bij **Uitgaven**, al vooringevuld met de leveranciersnaam en de regelbedragen.
- Staat in de omschrijving van welk MyCompanyDesk-werkruimte de factuur afkomstig is en dat hij via MyCompanyDesk is aangeleverd.
- Kan een vertrouwde-leveranciersregel de categorie alvast invullen, maar het concept blijft in ieder geval "te controleren", zodat er nooit automatisch wordt geboekt.
- Kan dezelfde factuur nooit twee keer als concept ontstaan: een unieke index in de database blokkeert duplicaten, ook als de verzender de e-mail opnieuw verstuurt.
- Beperkt MyCompanyDesk het aantal binnengekomen concepten tot maximaal tien per verzender per werkruimte, berekend over een rollend venster van 24 uur. Dat limiet staat in `apps/api/src/modules/invoices/network-delivery.service.js#NETWORK_DAILY_PAIR_CAP`.

De functie is gratis voor beide kanten. Hij werkt alleen als de leverancier de factuur mailt naar een mailbox die MyCompanyDesk voor jou beheert. Wil je via een netwerk koppelen, dan kun je leveranciersfacturen ook ontvangen via [Peppol e-facturatie](/features/peppol).

## Tips

- Stel je [e-mailsjablonen](/settings/email) in voordat je je eerste factuur verstuurt
- Gebruik [terugkerende facturen](/features/recurring-invoices) voor regelmatige facturatie
- Bekijk de [rapportages](/features/reports) pagina voor omzetinzichten
- Schakel [AI-suggesties](/advanced/ai-features) in voor slimme omschrijvingsverbeteringen
- Gebruik [Peppol e-facturatie](/features/peppol) als je klant digitale aflevering prefereert
