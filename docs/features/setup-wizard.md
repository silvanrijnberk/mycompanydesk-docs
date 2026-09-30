---
title: Setupwizard
description: "De wizard op /setup zet je bedrijf klaar en vraagt daarna waar je wilt beginnen: facturen, je eigen website of zakelijke e-mail op je eigen domein."
last_verified: 2026-09-30
---

# Setupwizard

De setupwizard op `/setup` maakt een nieuwe werkruimte in een paar minuten gebruiksklaar. Hij begint bij je factuur: hij vraagt voor wie je factureert, haalt je bedrijfsgegevens op uit het Handelsregister (KVK) en toont een live voorbeeld van de factuur terwijl je bezig bent. Direct na de KVK-stap vraagt hij waar je mee wilt beginnen: met facturen en offertes, met je eigen website of met e-mail op je eigen domein. Niets staat vast: elke stap kun je overslaan en alles kun je later aanpassen in Instellingen.

Kom je voor de basisuitleg, begin dan bij [Je bedrijf instellen](/getting-started/company-setup). Deze pagina is de referentie voor elke stap en optie.

## Wanneer je de wizard ziet

- **Eerste keer inloggen:** nieuwe accounts komen automatisch in de wizard terecht.
- **Altijd:** ga naar `/setup` om de wizard te starten of opnieuw te doorlopen. Er staat geen banner meer bovenaan het dashboard; zolang de setup losse eindjes heeft, wijst het dashboard je onderaan de pagina zelf op de volgende stap, onder **Zet dit op**.

De wizard is optioneel. **Voor nu overslaan** brengt je naar het dashboard zonder af te ronden; er gaat niets verloren, want elk antwoord wordt meteen opgeslagen. Kom je later terug, dan ga je verder waar je stopte.

## De stappen

De wizard vraagt, in deze volgorde:

1. **Klant**: voor wie je factureert
2. **KVK**: je bedrijfsgegevens
3. **Waar je mee begint**: jouw keuze (zie [de stap hieronder](#stap-waar-wil-je-mee-beginnen))
4. **Betaald krijgen**: je IBAN en btw-status (alleen op de factuurroute)
5. **Afronden**: proefbevestiging

**Doorgaan** brengt je verder zodra een stap heeft wat hij nodig heeft; **Setup afronden** op de laatste stap past alles toe.

## Stap: Klant

De wizard opent met een live voorbeeld van de factuur en vraagt om de klant. Begin de klantnaam te typen.

- Bestaat de klant al in je werkruimte, selecteer hem dan uit de lijst.
- Wil je een nieuwe klant direct toevoegen, typ de naam en klik op **Klant aanmaken**. Het inline formulier vraagt om de klantnaam en het adres. De KVK-lookup kan Nederlandse bedrijven voorstellen en het adres automatisch invullen; particuliere klanten voeg je toe door het adres handmatig in te typen.
- Het e-mailadres van de klant is optioneel en wordt alleen gebruikt als je de factuur verstuurt.

Alleen de klantnaam is verplicht om verder te gaan. Je kunt de rest van de klantgegevens later aanvullen op de klantpagina.

## Stap: KVK

Twee routes:

1. **Zoeken:** typ je bedrijfsnaam (twee tekens of meer) en kies je bedrijf uit de live suggesties. MyCompanyDesk haalt vervolgens je KVK Basisprofiel op en vult je bedrijfsgegevens alvast in: juridische naam, handelsnamen, rechtsvorm, adres en bedrijfsactiviteit. Er worden alleen lege velden gevuld; wat je zelf al had ingevuld blijft staan.
2. **Vul handmatig in**: een kort formulier voor bedrijfsnaam, KVK-nummer, adres, postcode en plaats. Handig als je bedrijf te nieuw is om in de zoekresultaten te staan, of als je handelsnaam niet overeenkomt met wat je zocht. Je invoer wordt direct bij je bedrijfsgegevens opgeslagen. Via een link kun je altijd terug naar zoeken.

Geen KVK-inschrijving? Ga verder zonder bedrijfsgegevens en vul ze later in onder **Bedrijfsgegevens** in Instellingen.

Levert een zoekopdracht niets op, dan zegt de wizard dat en biedt hij aan om over te schakelen naar handmatig invullen, met de naam die je typte alvast ingevuld.

## Stap: Waar wil je mee beginnen?

Direct na de KVK-stap vraagt de wizard **Waar wil je mee beginnen?** met drie antwoorden:

- **Facturen en offertes**: de gewone route. De wizard gaat verder met het factuurvoorbeeld, de stap Betaald krijgen (IBAN en btw-status) en het afrondscherm.
- **Je eigen website**: de wizard stopt hier en een knop brengt je naar `/website`, waar de site-editor opent.
- **E-mail op je eigen domein**: de wizard stopt hier en een knop brengt je naar `/inbox/setup`, waar je zakelijke mailbox wordt ingesteld.

De keuze bepaalt alleen waar de wizard je aflevert. Er gaat geen onderdeel aan of uit en er staat niets voorgeselecteerd. Het dashboard volgt dezelfde keuze in **Zet dit op**: het biedt de website of de zakelijke e-mail aan zolang je site nog niet online staat of er geen eigen postbus op je eigen domein is, en keert daarna terug naar de factuurroute.

## Stap: Betaald krijgen

De wizard vraagt om het IBAN waar klanten naartoe betalen. Je kunt nu je zakelijke IBAN invullen, of op **IBAN later toevoegen** klikken om deze stap over te slaan. Houd er rekening mee dat een klant je zonder IBAN minder makkelijk kan betalen.

Als je nog wacht op je btw-nummer van de Belastingdienst, of onder de kleineondernemersregeling (KOR) valt, kun je gewoon doorgaan en je btw-nummer later toevoegen.

## Stap: Afronden

De laatste stap bevestigt je proefperiode:

- **Je proefperiode:** elke nieuwe werkruimte start met 60 dagen Pro, gratis, zonder creditcard.

**Setup afronden** past je bedrijfsgegevens, btw-status, IBAN en standaardinstellingen toe. Het afrondscherm noemt wat nog volgt: je account beveiligen en je website worden later voorgesteld, wanneer het uitkomt, onder **Zet dit op** op het dashboard. Er wordt nergens op de achtergrond een website gebouwd; de eerste keer dat je het gebied **Website** zelf opent, wordt daar de standaardconceptsite aangemaakt (home, diensten, over ons, contact, met bij de juridische pagina's je gegevens), nog wachtend op jouw publicatie.

## Overslaan, hervatten en opnieuw doorlopen

- **Overslaan:** **Voor nu overslaan** brengt je op elk moment naar het dashboard. `/setup` blijft de weg terug tot de setup af is.
- **Hervatten:** antwoorden worden bij elke wijziging opgeslagen. Het tabblad halverwege sluiten kost niets; bij het volgende bezoek ga je verder op dezelfde stap.
- **Opnieuw doorlopen:** na het afronden start `/setup` de flow opnieuw vanaf de eerste stap, met je bewaarde antwoorden. De wizard vult lege velden aan in plaats van te overschrijven: een dienstenlijst die je hebt opgebouwd, een logo dat je hebt geüpload of instellingen die je zelf koos worden niet vervangen.

## Aanpassen zonder de wizard

Elk veld dat de wizard aanraakt heeft een plek in **Instellingen**:

- **Bedrijfsgegevens**: naam, KVK-nummer, adres, btw-nummer
- **Logo en kleur**: logo en merkkleur
- **Factuurontwerp**: het uiterlijk van je PDF's
- **Je website en domein**: domein en website
- **Onderdelen**: onderdelen van de app aan- of uitzetten

Zie het [instellingenoverzicht](/settings/) voor de volledige kaart.
