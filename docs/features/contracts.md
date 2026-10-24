---
title: Contracten
description: "Beheer dienstverlenings- en huurcontracten, laat ze online tekenen en laat ze volgens schema facturen maken (Office)."
---

# Contracten

Beheer doorlopende afspraken met klanten, zoals dienstverleningscontracten en huurcontracten, met een vast factuurschema.

## Overzicht

Een contract legt een doorlopende afspraak met een klant vast, bijvoorbeeld een maandelijks schoonmaakcontract, een huurovereenkomst of een onderhoudsabonnement. Een contract kan volgens een vast schema zelf facturen maken.

::: info
Contracten horen bij Office en zijn een onderdeel dat je zelf aanzet. Zie je **Contracten** niet in het menu, zet het dan aan onder **Instellingen › Onderdelen** (de regel **Contracten**).
:::

## Een contract maken

1. Ga naar **Contracten** en klik op **Nieuw contract**
2. Vul in:
   - **Onderwerp**: dienstverlening, verhuur of samenwerking
   - **Klant**: de klant met wie je de afspraak maakt
   - **Contractnaam**: een duidelijke naam (bijvoorbeeld "Maandelijkse schoonmaak")
   - **Hoe is de prijs afgesproken?**: zie [Prijsbasis](#prijsbasis) hieronder
   - **Bedrag (excl. btw)** en **Btw-tarief**
   - **Herhaling**: wekelijks, maandelijks, per kwartaal of jaarlijks
   - **Startdatum**, eventueel een **Einddatum**, en de datum van de **Eerste factuur**
   - **Welke periode staat er op de factuur?**: zie [Factuurperiode](#factuurperiode)
3. Klik op **Opslaan**

Je kunt ook vanuit een offerte starten: de regels van de offerte komen mee, met het afgesproken bedrag inclusief btw, de datum van de klus en de dagen of uren per week, zodat een geaccepteerde offerte een contract wordt zonder dat je iets overtypt.

Het formulier kiest ook het passende sjabloon voor je: past er precies één contractsjabloon op het contract, dan staat die er al in. Past er geen, dan zegt een opmerking onder het formulier dat het contract zonder voorwaarden de deur uit zou gaan. Bij een particuliere klant kiest het formulier automatisch een particulier-sjabloon: een opdrachtbevestiging voor particulieren, of, bij verhuur, de huurovereenkomst vakantiewoning.

::: tip Meer opties
Het formulier houdt optionele gegevens netjes opgeborgen: onder **Meer opties** vind je extra velden, zoals een servicetoeslag met een eigen bedrag en btw-tarief. Die heb je niet nodig om het contract te maken, maar je klapt ze open als je ze wel nodig hebt.
:::

## Prijsbasis

Elk contract beantwoordt de vraag **Hoe is de prijs afgesproken?**:

- **Vast bedrag**: elke periode hetzelfde bedrag, zoals huur of een vast maandbedrag.
- **Uurtarief**: je factureert de uren die je schrijft op projecten die aan dit contract hangen.
- **Dagtarief**: je factureert de gewerkte dagen op projecten die aan dit contract hangen.
- **Vaste projectprijs**: één afgesproken totaalbedrag voor de hele opdracht, dat je één keer factureert. Zo'n eenmalige opdracht heeft geen factuurdatum nodig.

Bij een uur- of dagtarief toont de contractpagina de kaart **Werk onder dit contract** met de afgesproken, gefactureerde en geschreven totalen, plus de gekoppelde projecten. Een dag telt als 8 uur.

Een vaste projectprijs herhaalt zich niet: het contract maakt één factuur en stopt dan.

## Contractstatussen

| Status | Betekenis |
| --- | --- |
| **Actief** | Loopt en maakt facturen |
| **Gepauzeerd** | Maakt geen facturen tot je het weer activeert |
| **Afgelopen** | De einddatum is voorbij en de laatste periode is gefactureerd |
| **Beëindigd** | Je hebt de afspraak beëindigd met **Overeenkomst beëindigen** |

Facturen die een contract maakt, komen altijd in de werkruimte waar het contract bij hoort.

## Een contract pauzeren, laten aflopen of beëindigen

Een lopend contract stop je op een paar manieren:

- **Pauzeren**: het contract blijft bestaan maar maakt geen facturen meer. Met **Activeren** zet je het op elk moment weer aan. Periodes die helemaal in de pauze vielen, worden niet alsnog gefactureerd.
- **Een einddatum instellen**: het contract loopt tot die datum en wordt daarna vanzelf **Afgelopen**. Voor een periode die na de einddatum eindigt, komt geen factuur.
- **Overeenkomst beëindigen**: beëindigt de afspraak definitief. Een beëindigd contract kun je niet nog een keer beëindigen.

Bewerk je een actief contract en voeg je een einddatum toe, dan waarschuwt de app dat de facturen daarna stoppen. Haal je de einddatum weg voordat hij bereikt is, dan factureert het contract gewoon verder.

## Einddatum

Een **Einddatum** stel je in bij het maken of bewerken van een contract. Laat je hem leeg, dan loopt het contract voor onbepaalde tijd.

Is er een einddatum:

- Toont de contractpagina die einddatum, of **Onbepaalde tijd** als er geen is.
- Komt er geen factuur voor een periode die na de einddatum eindigt.
- Tonen de contractenlijst en het contract het label **Verloopt binnenkort** als de einddatum binnen 30 dagen ligt, en schuif je hem op met **Einddatum verlengen**.
- Gaat de status vanzelf naar **Afgelopen** zodra de einddatum voorbij is en de laatste periode gefactureerd is.

## Automatisch factureren

Een contract dat nog niet getekend is staat in de lijst op **Wacht op handtekening** en maakt geen factuur: de eerste komt pas als het contract écht getekend is.

Een actief contract met een herhaling maakt elke periode vanzelf een factuur. Het systeem:

1. Maakt een factuur op basis van de afspraken in het contract
2. Zet de juiste klant, het bedrag en de omschrijving erop
3. Gebruikt dezelfde automatische factuurnummering

Op het contract beantwoordt de kaart **Automatisch factureren** de vraag **Wat gebeurt er met de factuur?**:

- **Concept**: de factuur blijft als concept staan. Jij controleert en verstuurt hem zelf.
- **Versturen**: de factuur wordt automatisch naar de klant gemaild.
- **Incasseren**: de factuur wordt automatisch geïncasseerd via het opgeslagen betaalmandaat (zie [Automatische incasso](#automatische-incasso)).

Alleen een huurcontract maakt facturen die als huurfactuur gemarkeerd zijn. Contracten voor dienstverlening en samenwerking maken gewone facturen. Dat bepaalt het label op de factuur, het e-mailsjabloon bij het versturen en of de omzet aan een gekoppelde bezitting wordt toegerekend.

Werkt een contract met een uurtarief, dagtarief of vaste projectprijs, dan krijg je ook een waarschuwing als het budget van het contract overschreden wordt, of als geschreven uren geen prijs kunnen krijgen omdat er geen tarief is ingesteld.

### Meldingen bij versturen en automatisch factureren

Kan een gemaakte factuur niet naar de klant gemaild worden, dan maakt de app de melding **Factuur niet bij de klant aangekomen**. Dat gebeurt als de klant geen e-mailadres heeft, je afzenderadres niet is ingesteld, het adres geblokkeerd is na een bounce of spammelding, of het versturen om een andere reden mislukt. De melding opent de factuur, zodat je de oorzaak oplost en opnieuw verstuurt.

Zit je werkruimte niet meer op Office (bijvoorbeeld na afloop van de proefperiode), dan maakt de app de melding **Automatisch factureren staat stil** zodra er contractfacturen klaarstaan die niet verstuurd worden. De melding zegt hoeveel contractfacturen er wachten en sinds wanneer, en wijst je naar de abonnementspagina.

## Factuurperiode

Bij **Welke periode staat er op de factuur?** kies je welke periode een contractfactuur factureert, gerekend vanaf de factuurdatum:

- **Die van de factuurdatum**: de periode waarin de factuurdatum valt (standaard)
- **De vorige (achteraf)**: de periode vóór de factuurdatum
- **De volgende (vooruit)**: de periode na de factuurdatum

Het formulier laat een voorbeeld zien van de regel zoals hij op de factuur komt. Factureert een contract achteraf, dan komt er nooit een factuur voor een periode die vóór de startdatum ligt, en de periode waarin de einddatum valt krijgt daarna alsnog een factuur.

## Automatische incasso

Bij een terugkerend contract kun je het bedrag automatisch laten afschrijven via het betaalmandaat van de klant, in plaats van een betaallink te mailen. Daarvoor heb je een gekoppelde betaalprovider nodig (Mollie of Stripe, onder **Instellingen › Betalen**) en een geldig mandaat van de klant.

### Automatische incasso instellen

Klik op de contractpagina op **Automatische incasso instellen** en laat de klant het mandaat bevestigen. Is het mandaat geldig, kies dan **Incasseren** bij **Automatisch factureren**. Het systeem incasseert daarna elke gemaakte factuur vanzelf.

### Mislukte incasso

Mislukt een afschrijving of is het mandaat niet meer geldig, dan krijg je de melding **Automatische incasso mislukt**. De melding linkt direct naar het contract, zodat je het mandaat opnieuw instelt of contact opneemt met de klant.

## Prijsindexatie

Terugkerende contracten pas je aan voor inflatie of een afgesproken jaarlijkse verhoging. Kies op de contractenlijst **Prijzen verhogen** in het menu bovenaan en zie wat een procentuele verhoging doet bij de contracten die ervoor in aanmerking komen. Dat is een contract pas als het minstens een jaar loopt of een jaar geleden voor het laatst verhoogd is.

Het voorbeeld toont per contract:

- Het huidige tarief of bedrag per periode
- Het nieuwe tarief of bedrag na de verhoging
- De datum waarop het contract voor het laatst is aangepast

Je voert de verhoging per contract door, nooit in één keer voor allemaal, zodat je klanten overslaat die je nog niet gesproken hebt. Daarna gelden de nieuwe afspraken in het contract en tonen volgende facturen het nieuwe bedrag.

::: tip Eerst afstemmen
Bespreek een prijsverhoging eerst met je klant. Het voorbeeld verandert niets tot je bij een contract op **Toepassen** klikt.
:::

### Automatische jaarlijkse verhoging

Een contract dat volgens afspraak elk jaar een verhoging krijgt, kan die verhoging zelf uitvoeren. Open het contract en stel de **Jaarlijkse verhoging** in:

- **Verhogen met**: **CPI (CBS)**, het consumentenprijsindexcijfer, of een **Vast percentage** dat je zelf kiest.
- **Elk jaar per**: de dag en maand waarop de verhoging elk jaar ingaat.
- **Klant mailen**: de klant of huurder krijgt vooraf mail vanaf jouw eigen mailadres; jij kiest hoeveel maanden van tevoren.

De voorwaarde die de app stelt: het werkt op een lopend contract met een vast bedrag per periode. Elk jaar krijg je ongeveer een week voordat de aankondiging verstuurd wordt een melding met de geplande verhoging, en met **Dit jaar overslaan** sla je dit jaar met één klik over. Doe je niets, dan gaan beide stappen vanzelf: eerst krijgt de klant de aankondiging, en pas nadat die mail eruit is, verandert de prijs. Facturen voor periodes vóór de ingangsdatum houden de oude prijs; periodes vanaf de ingangsdatum gebruiken de nieuwe. Lukt het niet om de aankondiging vóór de ingangsdatum te mailen, dan gaat de verhoging niet door en vertelt een melding je waarom.

Een handmatige verhoging met een ingangsdatum in de toekomst, toegepast via **Prijzen verhogen** op de contractenlijst, volgt hetzelfde schema maar zonder aankondigingsmail.

## Koppelen aan bezittingen

Contracten koppel je aan [bezittingen](/features/objects) voor het beheer van verhuur:

- Hang een contract aan een pand, voertuig of apparaat
- Zie welke bezittingen verhuurd zijn en aan wie
- Bekijk per bezitting de geschiedenis van de contracten

## Koppelen aan projecten

Contracten koppel je ook aan [projecten](/features/projects). Kies bij het maken of bewerken van een project het contract in het veld **Contract**. Uren die je op dat project schrijft, komen dan op de factuur van het contract. Gearchiveerde contracten staan ook in de lijst, met **(gearchiveerd)** achter de naam, zodat je een bestaande koppeling houdt of een oudere afspraak kiest als dat nodig is.

Handig voor afspraken op basis van een vast tarief per uur of dag: het contract bepaalt de prijsbasis, de gekoppelde projecten leveren de uren.

Je haalt een project op elk moment weer los; uren die al op een factuur staan, blijven daar staan.

## De contractenlijst

Boven de lijst staan de tabs **Alles**, **Wacht op handtekening**, **Concept** en **Lopend**. Bovenaan zie je de **Maandelijkse omzet** van je terugkerende contracten, het werk **Op uurbasis** dat nog niet gefactureerd is, en de **Volgende factuur**. Met het filterpaneel beperk je de lijst op status (actief, gepauzeerd, afgelopen), herhaling en tekenstatus.

## Bulkacties

- **Archiveren**: verplaats contracten naar het archief
- **Verwijderen**: verplaats contracten naar de prullenbak

In het archief kies je **Herstellen naar actief** of **Naar prullenbak**; in de prullenbak **Herstellen naar archief** of **Definitief verwijderen**.

## Ondertekenen

Contracten laat je digitaal ondertekenen. Je voegt partijen toe in het contractformulier en verstuurt het contract met **Verstuur ter ondertekening**; elke partij krijgt een tekenlink per e-mail. Het versturen opent eerst een verzendblad, met de ontvanger, het onderwerp en de tekst van de mail zoals de server die opmaakt: er gaat niets weg voordat je op **Versturen** drukt. **Verstuur link** en **Opnieuw versturen** op de tekenkaart openen hetzelfde blad, zodat elke verzending eerst zijn mail toont.

Is een contract getekend, dan toont de contractpagina een tekenkaart met:

- De status van elke partij (uitgenodigd, bekeken, getekend of verlopen)
- Een knop **Bekijken** die een voorbeeld van het getekende document opent
- De vastgelegde vingerafdruk (SHA-256) van de getekende inhoud, zodat jij en je klant later kunnen aantonen dat de PDF niet is veranderd sinds het tekenen; een openbare verificatiepagina controleert een getekende PDF ernaast
- Een downloadknop om de PDF op te slaan

De voorbeeldpagina heeft een balk met afdrukken en downloaden, en toont het getekende contract direct in de browser. De getekende PDF en de controle-PDF bevatten allebei de volledige contracttekst, dus elke gedownloade kopie staat op zichzelf.

### Je eigen huisstijl op de tekenpagina

Opent iemand een contract om te tekenen, dan draagt de tekenpagina de huisstijl van de afzender:

- Het logo van de afzender staat bovenaan de pagina
- De pagina gebruikt de accentkleur van de afzender
- Tekst en knoppen passen zich vanzelf aan, zodat ze leesbaar blijven op die kleur

Zo ziet de tekenpagina eruit alsof hij komt van het bedrijf dat de uitnodiging stuurde, en niet als een algemene pagina van een derde partij.

### Ondertekening in de contractenlijst

De contractenlijst heeft een kolom **Tekenstatus** met de status van elk contract dat digitaal ondertekend wordt. De statussen staan er als gekleurde labels: **Niet verstuurd**, **In afwachting**, **Deels getekend** en **Getekend**.

Met het tekenfilter in het filterpaneel beperk je de lijst op tekenstatus, of toon je alleen contracten zonder digitale ondertekening (**Geen e-handtekening**). Contracten zonder tekenpartijen, zoals oudere contracten, tonen een streepje in de kolom Tekenstatus en vallen onder dat filter.

### SMS-verificatie

Per partij zet je **SMS-verificatie vereist** aan. Die ondertekenaar moet dan een code via sms bevestigen voordat de handtekening geldig is; het telefoonnummer vult hij in bij het tekenen.

- **Code versturen**: na het invullen van een mobiel nummer krijgt de ondertekenaar een code van 6 cijfers
- **Code controleren**: de ondertekenaar vult de code in en bewijst zo dat het nummer van hem is
- **Geverifieerd-label**: daarna verschijnt een label met de laatste vier cijfers van het nummer

Vult de ondertekenaar een verkeerde code in, dan vraagt hij een nieuwe aan. De sms-bevestiging staat op de getekende PDF.

## Versies van sjablonen

Contractsjablonen staan onder **Contractsjablonen**, die je opent via het menu bovenaan de contractenlijst. Een sjabloon kun je versies geven, zodat je bijhoudt hoe de tekst veranderde.

### Een versie publiceren

1. Open **Contractsjablonen**
2. Zoek je sjabloon en klik op **Versies**
3. Vul bij **Publiceer huidige concept als nieuwe versie** in:
   - **Label**: een korte naam voor de versie (bijvoorbeeld "v2"). Laat je hem leeg, dan kiest de app zelf het volgende nummer.
   - **Wijzigingsnotitie**: kort wat er in deze versie veranderd is
4. Klik op **Publiceren**

### De versiegeschiedenis bekijken

De versiegeschiedenis van een sjabloon toont:

- Het label van de versie (bijvoorbeeld "v1", "v2")
- De wijzigingsnotitie en de publicatiedatum
- Het label **Huidige** bij de laatst gepubliceerde versie
- Het label **Gearchiveerd** bij alle eerdere versies

### Wat versies doen met contracten

Een versie is een naam en notitie bij de huidige tekst, geen losse kopie: nieuwe contracten gebruiken altijd de meest recente sjabloontekst, ook als je na het publiceren verder bewerkt. Al gemaakte contracten houden hun eigen, vastgelegde tekst en veranderen nooit mee met het sjabloon. Je past sjablonen dus gerust aan zonder bestaande contracten te raken.

## Tips

- Gebruik contracten naast [terugkerende facturen](/features/recurring-invoices) voor verschillende manieren van factureren
- Koppel contracten aan bezittingen voor volledig verhuurbeheer
- Stel een einddatum in, dan zie je op tijd dat een contract afloopt; na de einddatum loopt het contract vanzelf af
- Pauzeer een contract in plaats van een einddatum te zetten als je later weer verder wilt factureren
- Filter op tekenstatus om te zien welke contracten nog een handtekening nodig hebben
- Voeg bij het maken van een contract tekenpartijen toe om digitaal te laten ondertekenen
