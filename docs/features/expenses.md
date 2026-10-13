---
title: Uitgaven
description: "Houd je zakelijke uitgaven bij, scan bonnen, beheer categorieën met hun eigen btw-standaard en laat afschrijvingen voor investeringen vanzelf lopen."
last_verified: 2026-10-13
---

# Uitgaven

Houd al je zakelijke uitgaven bij, scan bonnen met AI en categoriseer kosten voor nauwkeurige boekhouding en btw-aangifte.

## Overzicht

De uitgavenpagina toont al je geregistreerde uitgaven. De tabs boven de lijst laten je snel wisselen tussen:

- **Alle**: elke geregistreerde uitgave
- **Nog betalen**: nog niet betaalde uitgaven
- **Betaald**: al betaalde uitgaven
- **Te bevestigen**: alleen zichtbaar als er iets klaarstaat, zoals bankregels en concepten die nog niet in je boeken staan

Uitgaven die nog moeten worden bevestigd (concepten uit de bankkoppeling of inbox die nog niet in je boeken staan) tonen het label **Nog te bevestigen** in plaats van betaald of onbetaald. Ze tellen nog nergens mee en kunnen niet worden geselecteerd voor bulkacties totdat je ze boekt.

Je kunt nog steeds filteren op categorie, status, gefactureerd of niet en periode, en onder **Tonen** wissel je tussen **Actief**, **Archief** en **Prullenbak**. Klik op een uitgave om de detailpagina te openen. Klik op **Nieuwe uitgave** om er een toe te voegen: je scant daar een bon of vult de gegevens zelf in.

Uitgaven in de prullenbak zijn zichtbaar via de weergave Prullenbak, maar je kunt ze niet bewerken, als betaald markeren of hun bon vervangen. Zet de uitgave eerst terug als je iets wilt wijzigen.

## Uitgavecategorieën

Categorieën horen bij je werkruimte; het is geen vaste lijst in de app. Elke categorie heeft:

- Een **Naam** die jij herkent.
- Een standaard **Btw-behandeling**.
- Een **Aftrekbaar %** voor gedeeltelijk aftrekbare categorieën.
- De keuze **Aankopen als investering behandelen (afschrijven)**, die nieuwe uitgaven in die categorie standaard als investering vastlegt.
- Een **Gebruiksduur (maanden)** voor de afschrijving.

Elke werkruimte begint met zes standaardcategorieën: Algemene kosten, Kantoorkosten, Autokosten & reizen, Telefoon & internet, Representatiekosten en Inkoop & materiaal. Met **Categorieën voorstellen** voeg je daar een set aan toe die bij je branche past, zodat een softwarebedrijf bijvoorbeeld **Clouddiensten (EU-leverancier)** krijgt en een horecabedrijf **Eten en drinken (klantafspraak)**. Standaardcategorieën kun je bewerken en archiveren, maar niet verwijderen. Archiveren verbergt een categorie uit het formulier. Eigen categorieën toevoegen, bewerken en verwijderen doe je via **Instellingen › Uitgavencategorieën**. Verwijderen lukt niet zolang uitgaven of terugkerende uitgaven de categorie nog gebruiken; archiveer hem dan in plaats daarvan.

## Een uitgave aanmaken

### Handmatige invoer

1. Ga naar **Uitgaven**, klik op **Nieuwe uitgave** en kies onderaan **Meer velden nodig?** om het volledige formulier te openen
2. Vul in:
   - **Leverancier** - Aan wie je hebt betaald
   - **Omschrijving** - Waarvoor de uitgave is
   - **Bedrag** - Totale kosten (inclusief of exclusief btw)
   - **Datum** - Wanneer de uitgave plaatsvond
   - **Categorie** - Selecteer uit je werkruimtelijst (standaardcategorieën of zelf toegevoegde categorieën). Als je een standaard uitgavecategorie hebt ingesteld onder **Instellingen › Uitgaven**, is deze hier al vooringevuld.
   - **Btw-percentage** - Wordt vooringevuld met het standaard btw-tarief voor uitgaven van je werkruimte (in te stellen onder **Instellingen › Uitgaven**). Je kunt het altijd per uitgave aanpassen.
   - **Betaalmethode** - Wordt vooringevuld met de standaard betaalmethode voor uitgaven van je werkruimte, indien ingesteld.
3. Voeg optioneel een **bon**-afbeelding of PDF toe
4. Koppel optioneel aan een **project** of **klant**
5. Klik op **Opslaan**

### Snel toevoegen

Voor de meeste uitgaven is het zijpaneel genoeg:

1. Klik op **Nieuwe uitgave** op de uitgavenlijst
2. Kies **Scan een bon** of upload een foto of PDF, of vul de gegevens zelf in
3. Controleer leverancier, bedrag, datum, categorie en btw
4. Sla op

### Vanuit een sjabloon

Bij het aanmaken van een nieuwe uitgave klik je op **Vanuit sjabloon** (alleen zichtbaar als je opgeslagen uitgavesjablonen hebt). Kies een sjabloon en het formulier vult zich ter plekke met de opgeslagen leverancier, categorie, bedrag en andere gegevens. Pas aan waar nodig en klik op **Opslaan**.

### Van banktransacties

Wanneer je [bankrekening](/features/bank) is gekoppeld (Office), worden gecategoriseerde uitgaande transacties automatisch omgezet naar conceptuitgaven. Elke uitgave krijgt de tegenpartij als leverancier, het absolute bedrag als bruto, het standaard btw-tarief en de behandeling van de categorie, en de boekingsdatum van de transactie. Conceptuitgaven verschijnen eerst onder **Te bevestigen** op de uitgavenpagina, waar je ze kunt bevestigen, bewerken of afwijzen voordat ze in je boekhouding komen. Zie [van transactie naar uitgave](/features/bank#van-transactie-naar-uitgave) voor de volledige workflow.

### Bonnen scannen

Laat AI automatisch uitgavegegevens uit bonnen extraheren:

1. Ga naar **Uitgaven** en klik op **Nieuwe uitgave**. Met **Scan een bon** leest het zijpaneel de bon meteen uit. Wil je een bon in meerdere regels splitsen, open dan het volledige formulier en zet de bon bij **Begin met een bon**: je komt dan op het scanscherm
2. Upload een bonafbeelding (JPEG, PNG, WebP) of PDF
3. Kies op het scanscherm eventueel onder **Geavanceerde instellingen** bij **Wat wil je scannen?**:
   - **Eén totaal** - Eén uitgave van de bon
   - **Meerdere items** - Meerdere regels van een bon
4. Controleer de herkende gegevens (datum, bedrag, leverancier, omschrijving)
5. Bevestig om de uitgave(n) aan te maken

Staat er voor een gescande bon al een uitgave in je boeken, meestal de bankboeking van diezelfde betaling, dan draagt de controlekaart de knop **Bon hieraan toevoegen** (voor een uitgave die nog geen bon heeft): de bon hangt dan aan de bestaande uitgave in plaats van dat er een tweede wordt geboekt, en de rij valt uit de beoordeling. Dubbele bedragen op één bon worden gevlagd en blijven losse kosten. Zie [Bonnen scannen](/advanced/receipt-scanning) voor de details.

::: info
Bonnen scannen is beschikbaar op elk abonnement, ook op Desk. Het aantal scans per maand hangt af van je abonnement: 3 op Desk en 200 op Office. Het btw-tarief op een nieuwe uitgave begint bij je standaard werkruimte-instelling.
:::

### Vergrendelde btw-periodes

Als een inboxbericht wordt omgezet naar een uitgave met een datum in een btw-periode die al is aangegeven, wordt de automatische boeking geweigerd om de ingediende aangifte te beschermen. In plaats van de factuur stilzwijgend te laten verdwijnen, maakt MyCompanyDesk een melding aan die de leverancier en factuurdatum noemt en aangeeft dat de btw-periode vergrendeld is. De melding brengt je naar de inboxlijst, zodat je de doorgestuurde factuur daar kunt terugvinden. Je hebt vervolgens dezelfde twee opties als bij andere gevallen van een vergrendelde periode: boek de uitgave handmatig met een datum in de huidige open periode, of dien een suppletieaangifte in voor de vergrendelde periode.

Het zijpaneel van **Nieuwe uitgave** toont dezelfde btw-periodestatus naast het datumveld voordat je opslaat, zodat een vergrendelde of coulanceperiode zichtbaar is voordat de server de boeking weigert.

Als een doorgestuurde e-mail of een scan wel een uitgave oplevert, maar de bijbehorende bon niet meegevoegd kan worden (bijvoorbeeld een niet-ondersteund bestandstype of een te groot bestand), wordt de uitgave toch aangemaakt en krijgt hij een notitie dat de bijlage ontbreekt. Upload de bon daarna handmatig op de detailpagina van de uitgave.

## Leverancierslogo's

Als een leverancier een bekend logo heeft, toont MyCompanyDesk het naast de leveranciersnaam in de uitgavenlijst en in de leveranciersautocomplete wanneer je een uitgave maakt of bewerkt. Het logo komt uit het KVK-register voor Nederlandse bedrijven of uit een samengestelde lijst van veelvoorkomende merken. Is er geen logo beschikbaar, dan toont de app een monogram.

## Btw-afhandeling

Elke uitgave kan een eigen btw-tarief hebben. Veelgebruikte opties:

- **21%** - Standaardtarief
- **9%** - Verlaagd tarief
- **0%** - Nultarief of vrijgesteld

Het btw-bedrag wordt automatisch berekend en opgenomen in je [Btw-rapportages](/features/vat).

### Btw-behandeling

In speciale gevallen stel je de btw-behandeling van de uitgave in:

- **Standaard**: binnenlandse btw.
- **Btw verlegd naar mij (binnenland)**: een Nederlandse leverancier verlegt de btw naar jou, bijvoorbeeld een onderaannemer in de bouw. Dit komt in rubriek 2a.
- **Verlegd (EU)**: je rekent de btw zelf af voor een zakelijke aankoop uit de EU, rubriek 4b.
- **Verlegd (buiten de EU)**: leverancier buiten de EU factureert 0% btw (sources/vat-rates.yaml#countries.NL.zero), jij rekent zelf af in rubriek 4a. Gebruik dit bijvoorbeeld voor een Amerikaanse leverancier zoals Anthropic of OpenAI.
- **Vrijgesteld**: de levering is btw-vrij.
- **Buitenlandse btw in rekening gebracht**: buitenlandse btw die mogelijk via de EU-teruggaafprocedure terug te vragen is.

De behandeling wordt meestal overgenomen uit de categorie. Je kunt hem per uitgave overschrijven.

Een categorie kan ook begrenzen wat de aangifte terugvraagt. Een categorie met een aftrekpercentage onder de 100% (denk aan een categorie voor etentjes of relatiegeschenken) laat een deel van de btw, of alles, buiten de aangifte, ook als de schakelaar "Btw aftrekbaar" aan staat. Komt er op deze uitgave anderszins btw terug, dan waarschuwt het formulier onder de schakelaar en noemt de categorie en het deel dat je terugkrijgt; met de schakelaar uit, buitenlandse of vrijgestelde btw, geen btw op het document of de KOR valt er niets terug te vragen en ontbreekt de waarschuwing. De Boeking-kaart op de detailpagina toont dezelfde waarschuwing als vlag.

### Handmatig btw-bedrag

Meestal berekent MyCompanyDesk het btw-bedrag uit het tarief en het nettobedrag. Komt dat niet overeen met het document van de leverancier, bijvoorbeeld een creditnota met netto EUR 0 en alleen btw, dan kun je het btw-bedrag handmatig invoeren. Het tarief bepaalt het bedrag dan niet meer; het formulier gebruikt jouw ingevoerde bedrag.

### Correcties in vergrendelde perioden

Zit een uitgave in een vergrendelde btw-periode, dan blokkeert het formulier wijzigingen in de financiële velden en biedt een correctiepad: **Correctie maken in huidige periode**. De correctie wordt in een latere, open periode aangemaakt en verwijst naar de oorspronkelijke vergrendelde uitgave, zodat je later nog kunt zien wat er is gewijzigd.

De poort vergelijkt de waarden die daadwerkelijk weggeschreven zouden worden, niet alleen de velden die zichtbaar zijn in het formulier. Dat geldt ook voor uitgaven met regels in meerdere btw-tarieven, de investeringsschakelaar en afschrijvingsinvoer zoals restwaarde, gebruiksduur en privégebruikpercentage. Elke financieel relevante wijziging in een ingediende periode wordt geweigerd; niet-financiële aanpassingen zoals notities, betaalstatus of bonbijlagen blijven wel mogelijk.

## Uitgaven koppelen

Koppel uitgaven aan:

- **Projecten** - Houd projectkosten nauwkeurig bij
- **Klanten** - Koppel kosten aan specifieke klanten, bijvoorbeeld om ze later door te factureren
- **Leveranciers** - Registreer aan wie je hebt betaald

## Doorbelasting en kostprijswijzigingen

Een uitgave die aan een klant is gekoppeld, kan op een factuur worden doorbelast. Voor dat doel heeft de uitgave zelf een schakelaar **Doorbelasten aan de klant**: doorbelaste uitgaven komen op de volgende factuur van de klant en tonen **Staat al op een factuur** zodra ze op een factuur staan. [Automatisch uren factureren](/features/time-registration#automatisch-uren-factureren) pakt alleen uitgaven mee die deze schakelaar aan hebben staan.

Op de uitgavedetail staat een regel **Gekoppelde factuur** zodra hij aan een factuur is toegevoegd, en een waarschuwingslabel **Kostprijs gewijzigd na facturatie** als de kostprijs van de uitgave is aangepast nadat de factuur is verstuurd. Dat label betekent dat het bedrag op de factuur niet meer overeenkomt met de onderliggende uitgave; open de factuur of bewerk de uitgave om beide weer gelijk te trekken.

## Bulkacties

Selecteer meerdere uitgaven voor bulkwerk. Tijdens een selectie verschijnt er een vinkjeskolom in de lijst; buiten een selectie zijn er geen vinkjes, en aan een lege lijst hangt helemaal geen selecteerknop. Je sortering op de lijst wordt onthouden en overleeft een herladen.

- **Archiveren** - Verplaats naar archief. Als je meerdere onbetaalde uitgaven met een vervaldatum tegelijk archiveert, vallen hun openstaande betaalherinneringen stil. De bulkbalk toont eerst een bevestiging zodra een van de geselecteerde uitgaven onbetaald is én een vervaldatum heeft, zodat je weet hoeveel van de geselecteerde uitgaven hun herinnering kwijtraken. Zolang de uitgaven gearchiveerd zijn, blijft de herinnering uit. Zet je een gearchiveerde uitgave later terug, dan maakt de dagelijkse sweep de herinnering opnieuw aan, maar pas de volgende nacht op zijn vroegst.
- **Verwijderen** - Verplaats naar de prullenbak, waar je de uitgave nog kunt terugzetten. In **Archief** kies je **Terugzetten naar actief** of **Naar prullenbak**; in **Prullenbak** kies je **Herstellen naar archief** of **Permanent verwijderen**.
- **Markeer als betaald** - Markeer geselecteerde uitgaven als betaald. Als je een bank- of inbox-concept als betaald markeert, wordt de vlag "Te controleren" tegelijkertijd verwijderd, zodat de rij zichtbaar wordt in je rapportages, btw-aangifte en boekhoudersexport in plaats van verborgen te blijven. Dit gebeurt alleen als je de status op betaald zet, niet als je hem terugzet naar onbetaald.

Als een bulkactie wordt geweigerd omdat één of meer geselecteerde regels in een vergrendelde btw-periode vallen, noemt de foutmelding het exacte tijdvak en legt hij uit wat je kunt doen. Een ingediende en vergrendelde periode kan alleen via een suppletieaangifte worden heropend. Een kaal slot (de aangiftedeadline is verstreken zonder dat er een aangifte is ingediend) kun je tijdelijk ontgrendelen op de btw-pagina. Haal de regels in dat tijdvak uit je selectie, of gebruik de passende correctieroute, en probeer het opnieuw.

## Kilometervergoeding

Rij je privé zakelijk, dan kun je die ritten bundelen tot één uitgave met een kilometervergoeding. De ritten komen uit Uren en uit het rittenoverzicht hieronder, dus het boeken vraagt toegang tot die pagina's; zonder toegang zegt de uitleg wat je bij de beheerder moet vragen.

1. Ga naar **Uitgaven › Kilometers** en klik boven de lijst op **Nu boeken**. Je komt op **Kilometervergoeding boeken**.
2. Kies de periode die je wilt boeken.
3. Selecteer de ritten die je meeneemt.
4. Klik op **Boek als kosten**.

De uitgave wordt aangemaakt met één regel voor het totaal aan zakelijke kilometers.

<!-- TODO(source-missing): Het Nederlandse kilometervergoedingstarief per kilometer staat nog niet in sources/. Quote het tarief niet in de documentatie totdat een mens het huidige bedrag heeft gecontroleerd op belastingdienst.nl. -->

Als je werkruimte een bedrijfsauto gebruikt, zijn de werkelijke autokosten al als uitgave geboekt; een aparte kilometervergoeding is dan niet nodig.

## Investeringen en afschrijving

Zet je bij een uitgave de schakelaar **Investering (afschrijven)** aan, of staat bij de categorie **Aankopen als investering behandelen (afschrijven)** aan, dan wordt de uitgave een investering:

- Er wordt een maandelijkse afschrijvingsregeling aangemaakt over de looptijd bij **Afschrijven over (jaar)**, standaard de gebruiksduur van de categorie (60 maanden als die niet is ingesteld).
- De regeling gebruikt lineaire afschrijving met dagpro rata voor de eerste en laatste kalendermaand, conform de richtlijnen van de Belastingdienst.
- De afschrijving telt mee in je rapportages.

De afschrijfbare basis is gelijk aan de waarde die in de boekhouding als bezitting wordt geactiveerd, niet het bruto-bedrag exclusief btw. Daarmee worden ook niet-aftrekbare voorbelasting (voor categorieën met een aftrekpercentage onder de 100%) en het zakelijke deel na privégebruikpercentage meegenomen, zodat de afschrijvingsregeling, het objectenregister en de KIA-berekening allemaal van hetzelfde bedrag uitgaan.

Het bewerken van categorie, datum, bedrag, btw-behandeling, privégebruikpercentage, gebruiksduur of restwaarde op een bestaande uitgave triggert herberekening. Als een bestaande afschrijvingsregel al in een vergrendelde btw-periode valt, wordt de herberekening geweigerd, zodat de ingediende aangifte niet stilletjes wijzigt. Het terugzetten van een investeringsuitgave naar een niet-investeringscategorie verwijdert de afschrijvingsregels.

Een investering waarvan de eigen datum nog in een open periode valt, kan toch tegen een vergrendeld schema aanlopen als de afschrijvingsregels in een latere, vergrendelde btw-periode vallen. Dan meldt het formulier dat de afschrijving doorloopt in een vergrendelde btw-periode. Gebruik de actie **Tijdelijk ontgrendelen** voor dat tijdvak op de [Btw-pagina](/features/vat) en probeer de wijziging opnieuw.

Treinkaartjes en andere autokosten kun je ook als gewone uitgave boeken via **Uitgaven › Nieuwe uitgave** met leverancier, bedrag, datum en categorie.

## Ritten

Het overzicht **Ritten** onder Uitgaven houdt je kilometers van het jaar bij, met of zonder uren. Een rit heeft een datum, een vertrekpunt en een bestemming, het aantal kilometers gewoon één kant op, zakelijk of privé, een optionele klant en een notitie. Je hoeft er geen uren bij te zetten: elke kilometer-ingang (op de pagina **Uitgaven**, in het zoekpaneel en in de reisinstellingen) opent direct het ritformulier.

Als je een rit toevoegt, vraagt het formulier **Waarmee rijd je?**. Kies je een privéauto, dan levert elke zakelijke kilometer een vast bedrag per kilometer aan vergoeding op, die je als kosten boekt. Kies je een auto of bus van de zaak, dan zijn tanken, onderhoud en verzekering al als uitgaven geboekt en zie je geen vergoeding; je ritten staan er dan alleen voor je eigen administratie. Tot de vraag beantwoord is, blijft de vergoeding uit beeld. In een werkruimte met een team beantwoordt de beheerder de vraag voor iedereen.

Het overzicht groepeert ritten per maand en telt per maand op: zakelijke kilometers, privékilometers en de kilometervergoeding die ze opleveren. Ritten die nog niet als kosten geboekt zijn, laten dat totaal zien met een **Nu boeken**-link naar de kilometervergoeding hierboven. Een rit die bij een ureninvoer hoort, krijgt de markering **Bij uren**; een geboekte rit laat zien dat hij al geboekt is. Een geboekte rit veranderen begint met het verwijderen van de uitgave die ervan gemaakt is.

## Vreemde valuta

De administratie rekent in euro's. Staat op het document achter een uitgave een andere munt, dan worden die munt en het bedrag op het document opgeslagen naast het eurobedrag, terwijl de rapportages, de btw-aangifte en het grootboek gewoon in euro's blijven lezen.

Zo komt het eurobedrag tot stand:

- **Scan in een andere valuta**: het scanscherm vraagt om het eurobedrag, het bedrag waarvoor je bank het document omrekent. Tot dat bedrag er staat, laat de kaart het bedrag van het document in zijn eigen munt zien, nooit een verzonnen eurobedrag. Alleen het eurobedrag komt in je boeken.
- **Doorgestuurde factuur (inbox)**: een factuur in een vreemde valuta die zichzelf boekt, gaat uit van een omrekening tegen de koers van de Europese Centrale Bank van die dag, gemarkeerd als voorlopig bedrag. Weekend- en feestdagen hebben geen eigen koers en pakken de koers van de vorige werkdag. Bestaat er helemaal geen koers, dan wordt er niets gegokt: één melding stuurt je naar het scanscherm om het eurobedrag zelf in te vullen.
- **De bank wint**: zodra de betaling op een gekoppelde bankrekening opduikt, schrijft de werkelijke afschrijving de voorlopige omrekening over. Het eurobedrag wordt wat de bank heeft afgeschreven, opslag van de kaartuitgever inbegrepen, en er wordt geen tweede kostenpost naast geboekt. Zit de uitgave in een afgesloten btw-periode, dan wordt er niets stilletjes gewijzigd: de koppeling blijft staan en een notitie op de uitgave vertelt wat de bank heeft afgeschreven en dat het verschil op een volgende aangifte thuishoort.

In de lijst toont een uitgave in vreemde valuta het omgerekende eurobedrag; de detailpagina bewaart de oorspronkelijke munt, het oorspronkelijke bedrag en de datum van de gebruikte koers.

## Terugkerende uitgaven

Voor regelmatige kosten (huur, abonnementen, etc.) stel je op Office [terugkerende uitgaven](/features/recurring-expenses) in om het aanmaken te automatiseren. Je vindt ze via de knop **Terugkerende uitgaven** op de uitgavenpagina.

## Importeren

Importeer uitgaven vanuit CSV:

1. Ga naar **Instellingen › Overstappen** en klik op **Facturen importeren**; je komt op **CSV-gegevens importeren**
2. Selecteer **Uitgaven** als gegevenstype
3. Upload je CSV-bestand
4. Koppel kolommen aan velden
5. Controleer en bevestig

## Patroononderbrekingsmeldingen

MyCompanyDesk houdt leveranciers in de gaten die normaal elke maand een factuur sturen, maar nu stil zijn. Als een leverancier uitgaven in drie verschillende maanden had en daarna ongeveer 50 dagen geen bevestigde uitgave meer, krijg je een melding met de vraag of je een factuur mist.

De controle kijkt alleen naar bevestigde uitgaven. Conceptuitgaven of uitgaven die nog moeten worden bevestigd tellen niet mee als "we hebben een factuur gezien", dus een onbevestigde import stopt de melding niet. Het doel is om een ontbrekende terugkerende factuur op te vangen voordat je administratie scheef groeit.

Als je de melding opent, kun je de missende uitgave direct boeken of afwijzen als het stilzijn verwacht is.

## Controlespoor

Het aanmaken van een uitgave schrijft voortaan voor elk ontstaanspad een regel in het controlespoor, niet alleen voor het handmatige webformulier. Dat geldt voor bonnen die je scant via de app, concepten uit de bankkoppeling, CSV-imports, terugkerende uitgaven, inbox- en doorgestuurde-e-mailconcepten, Peppol-e-facturen en ritten. De regel noemt de leverancier en datum, of het uitgavennummer als er al een is toegekend, zodat je in de geschiedenis kunt zien waar een uitgave vandaan komt.

## Tips

- Stel je standaard btw-tarief, standaard uitgavecategorie en standaard betaalmethode voor uitgaven in onder **Instellingen › Uitgaven** zodat het formulier niet steeds leeg begint. Een 0%-btw-instelling werkt correct; het formulier behandelt die als een bewuste keuze.
- Eigen categorieën beheer je in **Instellingen › Uitgavencategorieën**. Systeemcategorieën kun je niet verwijderen; archiveer ze als je ze niet meer wilt zien.
- Schakel [AI-suggesties](/advanced/ai-features) in voor automatische categorie-aanbevelingen
- Voeg altijd bonnen toe - ze zijn essentieel voor belastingcontroles
- Gebruik projecten om de verhouding uitgaven-inkomsten bij te houden
- Bekijk het [uitgavenrapport](/features/reports) voor bestedingsoverzichten
