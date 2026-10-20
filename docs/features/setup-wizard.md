---
title: Setupwizard
description: "De wizard op /setup zet je bedrijf klaar en vraagt daarna waar je wilt beginnen: facturen, je eigen website of zakelijke e-mail op je eigen domein."
last_verified: 2026-10-13
---

# Setupwizard

De setupwizard op `/setup` (**Je bedrijf klaarzetten**) maakt een nieuwe werkruimte in een paar minuten gebruiksklaar. Hij haalt je bedrijfsgegevens op uit het Handelsregister (KVK) en toont een live voorbeeld van je factuur terwijl je bezig bent. Direct na de KVK-stap vraagt hij waar je mee wilt beginnen: met facturen en offertes, met je eigen website of met e-mail op je eigen domein. Niets staat vast: elke stap kun je overslaan en alles kun je later aanpassen in Instellingen.

Kom je voor de basisuitleg, begin dan bij [Je bedrijf instellen](/getting-started/company-setup). Deze pagina is de referentie voor elke stap en optie.

## Wanneer je de wizard ziet

- **Eerste keer inloggen:** nieuwe accounts komen automatisch in de wizard terecht.
- **Zolang de setup niet af is:** ga naar `/setup` om verder te gaan waar je stopte. Na het afronden stuurt `/setup` je naar het dashboard. Er staat geen banner bovenaan het dashboard; zolang de setup losse eindjes heeft, wijst het dashboard je onderaan de pagina zelf op de volgende stap, onder **Zet dit op**.

De wizard is optioneel. **Voor nu overslaan** brengt je naar het dashboard zonder af te ronden; er gaat niets verloren, want elk antwoord wordt meteen opgeslagen. Kom je later terug, dan ga je verder waar je stopte.

## De stappen

De wizard vraagt, in deze volgorde:

1. **KVK** (Je bedrijfsgegevens)
2. **Beginnen** (Waar wil je mee beginnen?): jouw keuze (zie [de stap hieronder](#stap-waar-wil-je-mee-beginnen))
3. **Btw en IBAN** (Hoe word je betaald?): alleen op de factuurroute

**Doorgaan** brengt je verder zodra een stap heeft wat hij nodig heeft, en **Terug** brengt je een stap terug. Op de laatste stap van de factuurroute past **Alles afronden** alles toe; kies je voor de website of e-mail, dan heet die knop **Naar je website** of **Naar je e-mail**.

## Stap: KVK

Twee routes:

1. **Zoeken:** typ je bedrijfsnaam (twee tekens of meer) en kies je bedrijf uit de live suggesties. MyCompanyDesk haalt vervolgens je KVK Basisprofiel op en vult je bedrijfsgegevens alvast in: juridische naam, handelsnamen, rechtsvorm, adres en bedrijfsactiviteit. Er worden alleen lege velden gevuld; wat je zelf al had ingevuld blijft staan.
2. **Vul handmatig in**: een kort formulier voor bedrijfsnaam, KVK-nummer, adres, postcode en plaats. Handig als je bedrijf te nieuw is om in de zoekresultaten te staan, of als je handelsnaam niet overeenkomt met wat je zocht. Je invoer wordt direct bij je bedrijfsgegevens opgeslagen. Via een link kun je altijd terug naar zoeken.

Geen KVK-inschrijving? **Ik heb geen KVK-nummer** opent dit handmatige formulier, met de naam die je typte alvast ingevuld en KVK-nummer als optioneel veld. Straat, postcode en plaats zijn daar verplicht: een adres hoort op elke factuur die je stuurt.

Levert een zoekopdracht niets op, dan zegt de wizard dat en biedt hij aan om over te schakelen naar handmatig invullen, met de naam die je typte alvast ingevuld.

Adressen krijgen ook een controle van zichzelf. Kies je een suggestie waarvan de postcode anders is dan de postcode die je typte, dan zegt de wizard dat onder de adreskaart, laat postcode en plaats bewerkbaar staan en biedt aan ze aan te passen voordat je verder gaat.

## Stap: Waar wil je mee beginnen?

Direct na de KVK-stap vraagt de wizard **Waar wil je mee beginnen?** met drie antwoorden:

- **Facturen en offertes sturen**: de gewone route. De wizard gaat verder met de stap Btw en IBAN en het afrondscherm.
- **Een eigen website**: de wizard stopt hier en **Naar je website** brengt je naar `/website`, waar de site-editor opent.
- **E-mail op je eigen domein**: de wizard stopt hier en **Naar je e-mail** brengt je naar `/inbox/setup`, waar je zakelijke mailbox wordt ingesteld.

De keuze bepaalt alleen waar de wizard je aflevert. Er gaat geen onderdeel aan of uit en er staat niets voorgeselecteerd. Het dashboard volgt dezelfde keuze in **Zet dit op**: het biedt de website of de zakelijke e-mail aan zolang je site nog niet online staat of er geen eigen postbus op je eigen domein is, en keert daarna terug naar de factuurroute.

## Stap: Btw en IBAN

Deze stap (**Hoe word je betaald?**) vraagt de twee dingen die op elke factuur horen.

**Reken je btw?** Kies een van drie antwoorden:

- **Ja, ik reken btw**: de meeste zzp'ers. Vul je btw-id in, of kies **Ik weet mijn btw-id nu niet, ik vul hem later in**; de app vraagt er dan nog een keer naar zodra je je eerste factuur verstuurt.
- **Nee, ik doe mee aan de KOR**: alleen als je je zelf bij de Belastingdienst hebt aangemeld en daar bericht over kreeg. Weinig omzet alleen is niet genoeg. Je facturen worden dan zonder btw opgemaakt en vermelden dat je meedoet aan de KOR. De stap vraagt daarna **Sinds wanneer doe je mee aan de KOR?** en zet 1 januari van dit jaar er alvast in, aan te passen; meldde je je eerder af en doe je nu weer mee, dan start de KOR vandaag.
- **Nee, mijn werk is vrijgesteld van btw**: voor sommige beroepen, zoals zorg door een geregistreerde zorgverlener of les door een CRKBO-docent. Je facturen worden zonder btw opgemaakt.

Twijfel je over de KOR, dan vraagt de stap **Doe je mee aan de KOR (kleineondernemersregeling)?** met **Ja, ik doe mee**, **Nee** en **Weet ik niet**. Bij Weet ik niet legt hij uit dat je niet meedoet als je je niet zelf hebt aangemeld, en dat de brief van de Belastingdienst het zeker zegt.

**Waar mogen klanten naartoe betalen?** Vul je IBAN en de naam van de rekeninghouder in, of kies **Vul ik later in** om dit over te slaan. Je kunt je IBAN later toevoegen via Instellingen, en de app vraagt er nog eens naar bij je eerste factuur.

## Afronden

**Alles afronden** past je bedrijfsgegevens, btw-status en IBAN toe. Het afrondscherm (**Je bent klaar om te factureren**) zegt alleen dat je gegevens goed staan als het ze echt gecontroleerd heeft: naam, straat, postcode en plaats moeten er staan, en een IBAN met een foute controlesom wordt daar gemeld in plaats van doorgelaten. Hij zet een knop **Maak je eerste factuur** klaar en noemt wat nog volgt: je account beveiligen en je website worden later voorgesteld, wanneer het uitkomt, onder **Zet dit op** op het dashboard. Er wordt nergens op de achtergrond een website gebouwd; de eerste keer dat je het gebied **Website** zelf opent, wordt daar de standaardconceptsite aangemaakt (home, diensten, over ons, contact, met bij de juridische pagina's je gegevens), nog wachtend op jouw publicatie.

Elke nieuwe werkruimte start met 60 dagen Office, gratis en zonder creditcard. Kom je binnen via een uitnodigingslink van een partnerkantoor, dan duurt die proefperiode 12 maanden. Na afloop gaat je werkruimte terug naar Desk, zonder betaalmuur.

## Overslaan en hervatten

- **Overslaan:** **Voor nu overslaan** brengt je op elk moment naar het dashboard. `/setup` blijft de weg terug tot de setup af is.
- **Website eerst** (**Eerst mijn website maken**): onder de vraag **Kom je vooral voor je website?** in de voetbalk van de eerste stap zit een tweede uitgang, naast Overslaan. Hij verlaat de setup zonder af te ronden en opent direct de website-opzetwizard; anders dan de blote overslaan houdt hij de taak Maak je website af op het dashboard open, want er staat nog geen site om af te maken.
- **Hervatten:** antwoorden worden bij elke wijziging opgeslagen. Het tabblad halverwege sluiten kost niets; bij het volgende bezoek ga je verder op dezelfde stap.
- **Na het afronden:** `/setup` stuurt je dan naar het dashboard. Wat de wizard heeft ingevuld pas je aan in Instellingen (zie hieronder). De wizard vult alleen lege velden aan in plaats van te overschrijven: wat je zelf al had ingevuld blijft staan.

## Aanpassen zonder de wizard

Elk veld dat de wizard aanraakt heeft een plek in **Instellingen**:

- **Bedrijfsgegevens**: naam, KVK-nummer, adres, btw-nummer
- **Logo en kleur**: logo en merkkleur
- **Factuurontwerp**: het uiterlijk van je PDF's
- **Je website en domein**: domein en website
- **Onderdelen**: onderdelen van de app aan- of uitzetten

Zie het [instellingenoverzicht](/settings/) voor de volledige kaart.
