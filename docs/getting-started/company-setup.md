---
title: Je bedrijf instellen
description: "De setupwizard vult je afzenderblok, betaalgegevens en BTW-status in rond je eerste factuur, met een KVK-opzoeking en een live voorbeeld."
last_verified: 2026-09-30
---

# Je bedrijf instellen

De eerste keer dat je inlogt, leidt MyCompanyDesk je door een korte **setupwizard** op `/setup`. De wizard draait om je eerste factuur: hij vraagt voor wie je factureert en vult intussen het afzenderblok, betaalgegevens en btw-status in, met een live voorbeeld van de factuur. Je kunt ook je bedrijf opzoeken in het Handelsregister (KVK). Niets staat vast: elke stap kun je overslaan en alles kun je later aanpassen in Instellingen.

## Waar vind je de wizard

- **Eerste keer inloggen:** de wizard opent automatisch.
- **Later:** open altijd rechtstreeks `/setup` om de wizard te doorlopen of opnieuw te doorlopen. Zolang de opzet nog losse eindjes heeft, wijst het dashboard je onderaan de pagina zelf op de volgende stap, onder **Zet dit op**.
- **Overslaan:** op elke stap zit een knop **Voor nu overslaan**. Je antwoorden tot dan toe worden bewaard, dus je gaat later gewoon verder waar je was.

## Stap 1: Voor wie je factureert

De wizard opent met een live voorbeeld van de factuur en vraagt om de klant. Begin de klantnaam te typen.

- Bestaat de klant al in je werkruimte, selecteer hem dan uit de lijst.
- Wil je een nieuwe klant direct toevoegen, typ de naam en klik op **Klant aanmaken**. Het inline formulier vraagt om de klantnaam en het adres. De KVK-lookup kan Nederlandse bedrijven voorstellen op basis van bedrijfsnaam of KVK-nummer en het adres automatisch invullen; particuliere klanten voeg je toe door het adres handmatig in te typen.
- Het e-mailadres van de klant is optioneel en wordt alleen gebruikt als je de factuur verstuurt.

Alleen de klantnaam is verplicht om verder te gaan. Je kunt de rest van de klantgegevens later aanvullen op de klantpagina.

## Stap 2: Je bedrijfsgegevens (KVK)

Deze stap vult het afzenderblok van je factuur. Als je je hebt aangemeld via de marketingsite en je bedrijf hebt geselecteerd in de KVK-lookup daar, wordt je KVK-nummer al meegenomen naar de wizard en automatisch toegepast zodra je deze stap bereikt. MyCompanyDesk haalt vervolgens je KVK Basisprofiel op en vult je bedrijfsgegevens alvast in: juridische naam, handelsnamen, rechtsvorm, adres en bedrijfsactiviteit. Alleen lege velden worden gevuld; wat je zelf al had ingevuld blijft staan.

De preview op de marketingsite die je naar de wizard leidt, herkent nu een breder scala aan vakgebieden. Hij kijkt eerst of je vak al uit je bedrijfsnaam blijkt. Is dat niet duidelijk, dan kan hij ook het SBI-beroep uit je KVK Basisprofiel lezen en, als het dan nog niet past, een lichte AI-classifier het beste passende vak laten kiezen. Past er helemaal niets, dan valt de preview terug op een neutrale ZZP-persona in plaats van een generiek klusjesman-voorbeeld. De plaats die je ziet, komt uit je KVK-registratie als die beschikbaar is.

Geen treffer, of geen KVK-inschrijving?

- **Vul handmatig in**: vul zelf je bedrijfsnaam, KVK-nummer, adres, postcode en plaats in.
- **Geen KVK-inschrijving?**: sla het opzoeken helemaal over en vul je gegevens later in via Instellingen.

## Stap 3: Hoe je betaald krijgt

Deze stap bestaat uit twee onderdelen: je BTW-status en je IBAN.

**BTW-status**

Als je BTW in rekening brengt, selecteer **Ja, ik reken BTW** en vul je BTW-id in. Zolang het veld leeg is, zie je een hint dat een BTW-id vereist is om door te gaan; als je die nog niet hebt, klik je op **Ik weet mijn BTW-id nu niet, ik vul hem later in** om deze stap over te slaan. Ben je vrijgesteld (bijvoorbeeld via de kleineondernemersregeling, KOR), selecteer dan **Nee, ik ben vrijgesteld**. Je kunt dit later aanpassen in Instellingen.

**IBAN**

De wizard vraagt om het IBAN waar klanten naartoe betalen. Je kunt nu je zakelijke IBAN invullen, of op **Vul ik later in** klikken om deze stap over te slaan. Zolang het veld leeg is, zie je een hint dat een IBAN vereist is voordat je facturen kunt versturen. Houd er rekening mee dat een klant je zonder IBAN minder makkelijk kan betalen.

## Stap 4: Setup afronden

De laatste stap bevestigt dat je 60 dagen Office-proefperiode actief is, zonder creditcard, en past alles toe, waarna je naar je dashboard gaat. Er draait op de achtergrond niets mee: het afrondscherm noemt wat nog volgt (je account beveiligen, en je website) en die suggesties volgen later, onder **Zet dit op** op het dashboard, wanneer het uitkomt. MyCompanyDesk genereert hier geen website meer en kiest geen diensten voor je; een website bouw je zelf, de eerste keer dat je het **Website**-gebied opent.

Klik op **Setup afronden** en de wizard past je bedrijfsgegevens, btw-status, IBAN en standaardinstellingen toe, waarna je naar je dashboard gaat.

## De website: gebouwd zodra je hem opent, online zodra je publiceert

MyCompanyDesk zet geen website onder je werkruimte zonder dat je erom vraagt. Meld je aan en factuur zonder het gebied Website ooit te openen, dan staat er niets half af te wachten.

Open je **Website** voor het eerst, dan wordt een standaardsite als concept aangemaakt: een homepagina, diensten, een over ons en contact, plus de pagina's Privacyverklaring en Algemene voorwaarden, met je registratiegegevens op de plekken waar ze horen. Er staat alleen tekst op waar je zelf achter staat; lege blokken blijven leeg tot jij ze vult, en de websitewizard verzint geen oorsprongsverhaal of standaardantwoord meer. Er gaat ook vanzelf niets online: publiceren blijft jouw moment, pas dan gaat je adres live. Je werkruimtesubdomein, de simpele vorm van je bedrijfsnaam onder mycompanydesk.com, komt pas bij het publiceren in beeld.

## Later aanpassen

Alles wat de wizard instelt, pas je aan via **Instellingen**:

| Ik wil aanpassen... | Open |
|---|---|
| Bedrijfsnaam, adres, KVK- of btw-nummer | **Bedrijfsgegevens** |
| Logo en merkkleur | **Logo en kleur** |
| Hoe klanten je betalen: IBAN, iDEAL, PayPal | **Betalen** |
| Betaaltermijn, herinneringen, geldigheid van offertes | **Facturen en offertes** |
| Het uiterlijk van je factuur-PDF's | **Factuurontwerp** |
| Je website en domein | **Je website en domein** |

Zie het [instellingenoverzicht](/settings/) voor de volledige kaart. Je kunt de wizard ook altijd opnieuw doorlopen via `/setup`; die vult lege velden aan en overschrijft niet wat je zelf hebt ingesteld.

## Volgende stappen

Je bedrijf staat. Tijd om [je eerste factuur te maken](/getting-started/first-invoice).
