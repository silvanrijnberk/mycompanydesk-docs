---
title: Werkruimtes
description: "Een centrale pagina voor alles wat je beheert, je eigen bedrijven en klantadministraties, zonder dat eigen geld en klantgeld ooit door elkaar lopen."
last_verified: 2026-10-13
---

# Werkruimtes

Werkruimtes (`/werkruimtes`) is één centrale plek voor alles wat je beheert. Het vervangt het oude boekhoudersportaal en past zich aan je daadwerkelijke rol aan: één werkruimte, meerdere eigen bedrijven, of klantadministraties.

> **Eigen geld en klantgeld worden nooit door elkaar gehaald.** Eigen bedrijven optellen heeft zin, want het geld is van jou. Een totaal over klantenadministraties zegt niets, dus die houdt de pagina strikt gescheiden.

## Waar vind je het

- Open de werkruimtekiezer in de zijbalk en kies **Werkruimtes beheren**.
- Dezelfde kiezer zit ook in de header van het mobiele menu, dus je bereikt het overzicht vanaf elk scherm op dezelfde plek.
- Het oude `/boekhouder`-adres verwijst hierheen door.
- De werkruimtekiezer toont nu bovenaan een overzichtsregel. Eigen bedrijven en klantadministraties staan in aparte groepen, en zodra je meer dan acht werkruimtes hebt, verschijnt er een zoekveld.
- Elke rij toont het eigen merkteken van de werkruimte: het logo, of een gekleurde tegel met initialen. Eigen bedrijven krijgen hun kleur; klantadministraties blijven neutraal. De werkruimte waarin je nu zit, wordt uitgelicht.

Als je in de kiezer een werkruimte kiest, wisselt de app nu zonder volledige paginaherladen. Hij vergeet de staat van de vorige werkruimte in Pinia-stores en modulecaches, gooit requests die nog onderweg zijn en die na de wissel zouden aankomen weg, laadt de shell opnieuw zodat de navigatie en rechten bijwerken, en routeert je daarna naar de doelpagina.

## De werkruimte-sectie

Zodra je in Werkruimtes bent, vervangt een eigen zijbalk de gewone navigatie. Die groepeert de pagina's zo:

- **Overzicht**: **Vandaag** (`/werkruimtes`), **Agenda** (`/werkruimtes/agenda`) en **Werk** (`/werkruimtes/werk`). Deze drie staan er altijd.
- **Van jou**: **Bedrijven** (`/werkruimtes/bedrijven`), het overzicht van je eigen bedrijven. Staat er ook altijd.
- **Klantwerk**: **Klanten** (`/werkruimtes/klanten`), **Verzoeken** (`/werkruimtes/verzoeken`) en **Inzicht** (`/werkruimtes/inzicht`). Verschijnt zodra je toegang hebt tot een klantadministratie.
- **Kantoor**: **Je kantoor** (`/werkruimtes/kantoor`), **Facturatie** en **Export**. Verschijnt als je bij een boekhouderskantoor hoort.

**Vandaag** laat zien wat er nu aandacht vraagt, in twee aparte blokken: eerst je eigen bedrijven, dan je klanten (hooguit acht; wat daarbuiten valt wordt genoemd, niet stil weggelaten).

### Eigendomsindicator

Elke werkruimterij en elk item in de nieuwe pagina's krijgt een kleine eigendomsindicator. Eigen bedrijven houden hun werkruimtekleur; klantadministraties blijven neutraal. Je ziet hem in de werkruimtewisselaar, in de agenda en in de werklijst, zodat je altijd weet aan welke kant van de eigen/klant-grens een rij hoort.

### Agenda (`/werkruimtes/agenda`)

De agenda groepeert alle aankomende deadlines over al je werkruimtes op datum. Hij kijkt 30 dagen terug en 90 dagen vooruit, zodat een verlopen deadline van vorige week nog zichtbaar is. Verlopen deadlines staan bovenaan. Elke rij toont de werkruimte, het deadline-label en de eigendomsindicator. Klik op een rij om naar die werkruimte te schakelen en de betreffende pagina te openen.

### Werk (`/werkruimtes/werk`)

De werkpagina toont open werk in twee blokken: eerst je eigen bedrijven, dan klantadministraties. Dat houdt de twee soorten werk gescheiden, want je eigen taken en dingen die je van een klant verwacht vragen verschillende acties. Elke rij toont de werkruimte, de taak en een deadline-badge. Klik op een rij om naar de werkruimte te schakelen en de betreffende pagina te openen; bij een klantverzoek opent het verzoek zelf.

### Kantoorpagina's (`/werkruimtes/kantoor/*`)

Als je bij een boekhouderskantoor hoort, bevat de groep Kantoor drie pagina's:

- **Je kantoor** (`/werkruimtes/kantoor`): kantoormedewerkers, openstaande klantuitnodigingen, partner-deellink en statistieken, en of Office gratis is toegekend.
- **Facturatie** (`/werkruimtes/kantoor/facturatie`): bied aan om een klantadministratie te betalen. De klant moet accepteren voordat er iets in rekening wordt gebracht; de prijs per overgenomen administratie staat vooraf op het scherm. Een openstaand aanbod zie je apart staan, zodat je het kunt intrekken zolang de klant nog niet heeft geantwoord.
- **Export** (`/werkruimtes/kantoor/export`): exporteer meerdere klantadministraties tegelijk. Kies jaar, periode en exportformaat, selecteer de administraties en de app downloadt per klant een archief. Eventuele mislukte exports blijven staan zodat je ziet wat niet is voltooid.

## Laadstatus en fouten

Als je een pagina binnen het werkruimte-frame opent, wacht de app eerst tot de schilgegevens (lijst met werkruimtes, token, rechten) klaar staan, en haalt daarna pas de paginagegevens op. Zo voorkomt de app dat een koude navigatie een lege "niks te doen"-staat toont terwijl het verzoek nog onderweg is.

Als het ophalen mislukt, toont de pagina een aparte foutstaat met een knop **Opnieuw proberen** in plaats van te doen alsof er niets te tonen is. De werkruimtekiezer in de zijbalk blijft bruikbaar, dus je kunt zonder te wachten naar een andere werkruimte schakelen. Op de facturatiepagina laden de klantenlijst en de facturatiebedragen onafhankelijk: als de bedragen niet beschikbaar zijn, blijft de klantenlijst gewoon zichtbaar en blijft de prijskolom leeg, zodat er geen valse nul verschijnt.

## Als je één werkruimte hebt

Op **Bedrijven** krijg je dan drie ingangen in plaats van een lege lijst:

- **Meer dan één bedrijf?** met **Bedrijf toevoegen**, voor een holding, tweede BV of zaak ernaast. Elk bedrijf krijgt een eigen administratie met aparte btw, facturen en boekhouding.
- **Werk je met een boekhouder?** met **Boekhouder uitnodigen**, als je samenwerkt met een externe boekhouder.
- **Ben je zelf boekhouder?** met een link naar het partnerprogramma, als je meerdere klantadministraties vanuit één plek wilt beheren.

## Gecombineerde werkruimte: je eigen bedrijven

Als je meer dan één eigen bedrijf hebt, toont **Bedrijven** (`/werkruimtes/bedrijven`) een gecombineerd overzicht:

- Eén zin vertelt wat je bedrijven dit jaar samen omzetten, en of dat een winst of verlies oplevert.
- Een strip toont gezamenlijke omzet, resultaat, te innen en btw opzij.
- Een aandeelbalk toont de omzetverdeling per bedrijf.
- Onder de cijfers staat één rij per bedrijf. De volgorde is vast (thuisbedrijf eerst, dan aanmaakdatum), zodat je altijd weet waar je moet zoeken.

Met **Bekijk samen** open je **Samen** (`/werkruimtes/bedrijven/samen`): een tabel met je bedrijven naast elkaar voor een jaar dat je kiest, met een totaalregel eronder.

### Signalen in elke rij

Elke bedrijfsrij toont chips voor wat er nu aandacht vraagt. Elke chip is een link: die schakelt naar het juiste bedrijf en brengt je op de pagina die bij het signaal hoort.

| Chip | Betekenis | Link |
|---|---|---|
| Btw-periode met deadline | Hoeveel dagen tot de aangifte, of hoe laat je bent | `/belastingen/btw` |
| Openstaande facturen | Facturen die niet op tijd betaald zijn | `/invoices` |
| Bonnetjes ontbreken | Kostenposten zonder bon | `/expenses` |
| Concepten | Facturen die nog concept zijn | `/invoices` |
| Btw ingediend | De vorige aangifte is ingediend | `/belastingen/btw` |
| Proefperiode loopt nog | Het bedrijf zit nog in een Office-proefperiode | Geen, alleen een notitie |
| Op non-actief | Het bedrijf is op non-actief gezet; je kunt nog inzien en exporteren | Geen, alleen een notitie |

Eigen bedrijven gebruiken dezelfde KPI's als het dashboard van elk afzonderlijk bedrijf, dus de cijfers kunnen niet tegenstrijdig zijn.

## Onderlinge posities

Als je eigen bedrijven elkaar factureren, ziet elke werkruimte normaal gesproken alleen de eigen helft. De pagina Bedrijven toont het nettosaldo tussen elk paar eigen bedrijven, zodat de rekening-courant die je voorheen op papier bijhield, in de app zichtbaar is.

Het blok verschijnt alleen als minstens twee van je eigen bedrijven daadwerkelijk openstaande facturen naar elkaar hebben, dus het blijft uit beeld voor iedereen die het niet nodig heeft. Het staat onder het gecombineerde overzicht van je bedrijven, omdat het een relatie tussen je bedrijven beschrijft en geen eigenschap van een enkel bedrijf.

- Koppelingen worden automatisch gemaakt als het btw-nummer van een klant overeenkomt met een van je andere werkruimtes. Die match kijkt alleen naar je eigen bedrijven, dus een klant van iemand anders wordt nooit bereikt.
- Als de automatische koppeling niet klopt, of als er geen btw-nummer beschikbaar is, kun je een klant handmatig koppelen of ontkoppelen vanaf de klantenpagina. Een handmatige koppeling wint altijd van de automatische.
- De positie is het nettobedrag over openstaande facturen tussen de twee bedrijven, verminderd met geboekte betalingen. Een positief bedrag betekent dat het ene bedrijf het andere nog moet betalen.
- Elk paar wordt als zin weergegeven vanuit de kant die nog tegoed heeft, bijvoorbeeld "[crediteur] heeft [bedrag] te ontvangen van [debiteur]". Als de balans de andere kant op loopt, draait de zin crediteur en debiteur om in plaats van het bedrag negatief te tonen.
- De regel toont ook uit hoeveel openstaande facturen het bedrag bestaat.
- Als er meer dan een paar een saldo heeft, toont de kaart bovenaan een totaal van alle openstaande onderlinge posities.

## Kantoor-werkruimte: klanten

Als je boekhouder bent en klantadministraties beheert, toont **Vandaag** welke klanten nu iets nodig hebben, en is **Klanten** (`/werkruimtes/klanten`) de volledige lijst om door te werken, met filters zoals wat te laat is, wie op je wacht en wat aan jou is toegewezen:

- Een headline vertelt hoeveel van je klanten vandaag iets nodig hebben.
- Een cijferstrip toont het totaal aantal klanten, deadlines deze week, klanten die aandacht vragen, en open uitnodigingen.
- Rijen staan op urgentie gesorteerd, zodat administraties die vandaag actie nodig hebben bovenaan staan.
- Een zoekveld is altijd zichtbaar, zodat je klantadministraties direct kunt filteren.
- Open uitnodigingen staan in een eigen kaart; een uitgenodigde klant telt nog niet als actieve klant.

De chips werken hetzelfde als in de gecombineerde werkruimte, maar rijen gebruiken geaggregeerde signalen zodat het overzicht meegroeit met grote klantenbestanden. Het overzicht telt klantgeld niet bij elkaar op.

### Medewerkers van het kantoor

Werk je in een boekhouderskantoor, dan heeft het kantoor een eigen ledenlijst onder **Medewerkers** op **Je kantoor**. Beheerders nodigen collega's uit met **Collega uitnodigen**; iedereen krijgt een rol (lid of beheerder). Iemand toevoegen aan het kantoor geeft hem of haar nog geen toegang tot een klant; dat geef je per klant, en alleen als die klant het toestaat. In de rij van elk medewerker zie je bij hoeveel klanten diegene is gekoppeld, zodat je weet wie waar mee bezig is.

### Werk aan een klant en verzoeken

Elke klantrij toont een werk-chip zodra er iets wacht. Open deze om te zien wie de klant nu oppakt en wat je aan de klant hebt gevraagd.

- **Ik pak dit op** wijst de klant aan jou toe. **Toch niet, geef terug** geeft het werk weer vrij, zodat een collega het kan oppakken. De status wordt live bijgewerkt voor iedereen in het kantoor, zodat twee mensen niet onwetend dezelfde aangifte starten.
- **Iets vragen aan deze klant** maakt een taak aan in de eigen werkruimte van de klant, met een melding erbij. Kies waar het over gaat (bijvoorbeeld ontbrekende bonnen), zeg wat je vraagt en voeg een toelichting toe, en de klant ziet het als een gewoon to-do. Zodra de klant de taak afvinkt, is het verzoek opgelost en verdwijnt de werk-chip. Er is geen handmatige status 'wacht op klant' die je moet terugzetten; die volgt gewoon uit een open verzoek. Alle openstaande vragen over al je klanten staan samen op **Verzoeken**, de oudste eerst.

## Een eigen bedrijf toevoegen

Open **Bedrijf toevoegen** en geef het nieuwe bedrijf een naam.

Meerdere eigen bedrijven zitten in **Office**: een extra bedrijf kost € 5,99 per maand of € 59,90 per jaar (excl. btw) bovenop Office, tot maximaal 10 eigen bedrijven. Op Desk heb je één bedrijf. De app toont de extra kosten voordat je bevestigt. Tijdens je eigen Office-proefperiode betaal je niets voor het extra bedrijf; daarna wordt het tegen het getoonde tarief op je abonnement gezet.

Heb je Office gratis via een vaste afspraak, dan geldt dat gratis Office voor één bedrijf. Voor een tweede bedrijf biedt de app een aparte checkout. De prijs staat vooraf vermeld; alleen het tweede bedrijf wordt op een eigen abonnement gezet. Nadat de betaling is bevestigd, kun je het tweede bedrijf een naam geven.

## Instellingen overnemen van een ander bedrijf

Wanneer je een bedrijf toevoegt, of later via het zijpaneel **Beheren** van een bestaand bedrijf, kun je de inrichting overnemen van een ander bedrijf dat je al hebt. Dat scheelt het opnieuw invoeren van je huisstijl, factuurlayout en standaarden.

Zet **Instellingen overnemen van een bedrijf dat je al hebt** aan en kies de bron. Heb je maar één ander bedrijf, dan wordt de keuze getoond als een schakelaar met de naam. Deze groepen kun je overnemen:

- **Huisstijl** (logo, kleuren en lettertypes).
- **Facturen en offertes** (layout, betaaltermijn, herinneringen en je eigen e-mailteksten).
- **Btw** (aangifteperiode en standaardtarief).
- **Uitgaven en bonnen** (standaardcategorie, kilometervergoeding en je eigen categorieën).
- **Onderdelen** (welke onderdelen aan staan, plus de opzet van je urenregistratie).
- **Adres en contact** (adres, telefoon, e-mail en website).

KVK-nummer, btw-nummer, bankrekening en factuurnummering gaan nooit mee: dat hoort bij één bedrijf.

## Een bedrijf beheren of verwijderen

Open voor elk eigen bedrijf het rijmenu en kies **Beheren**. Er opent een zijpaneel met twee opties.

### Op non-actief zetten

Kies **Op non-actief zetten** als je stopt met werken in een bedrijf maar de administratie moet bewaren. De administratie blijft leesbaar en je kunt alles blijven exporteren, omdat je de boeken voor de wettelijke bewaartermijn moet bewaren. Je kunt geen nieuwe facturen, uitgaven of klanten toevoegen, en het bedrijf telt niet meer mee voor je abonnement.

Het zijpaneel vermeldt vooraf hoeveel je per maand of per jaar minder gaat betalen.

Om verder te gaan, open je hetzelfde zijpaneel en kies je **Weer activeren**.

### Een bedrijf verwijderen

Kies **Verwijderen** alleen voor een bedrijf dat je per ongeluk hebt aangemaakt. De werkruimte controleert of er al iets is geboekt; zodra er een factuur, uitgave of klant bestaat, wordt verwijderen geweigerd en moet je het bedrijf op non-actief zetten. Deze controle gebeurt aan de serverkant, zodat de melding altijd klopt met de werkelijke data.

## Een klant uitnodigen

Boekhouders kunnen hier direct een klant uitnodigen:

1. Klik op **Klant uitnodigen**.
2. Vul het e-mailadres, de bedrijfsnaam en optioneel het KVK-nummer in.
3. Klik op **Uitnodiging versturen**.

De klant maakt zelf een account en blijft eigenaar van de administratie. Jij krijgt toegang zodra de uitnodiging is geaccepteerd, en de klant kan die toegang op elk moment weer intrekken. Openstaande uitnodigingen kun je opnieuw sturen of intrekken. De link is 30 dagen geldig.

## Navigatie volgt je rol

De linker zijbalk verbergt nu items die je huidige werkruimterol niet mag gebruiken, zodat je geen links meer ziet die een 403 geven. Wordt een onderdeel voor een rol afgeschermd, dan verdwijnt het menu-item vanzelf.

In een klantwerkruimte is de rail korter, want onderdelen die bij de klant zelf horen (inbox, website, abonnement, teaminstellingen, domeinen en AI-hulp) zijn voor een boekhouder niet beschikbaar. De werkruimtekiezer en het item Werkruimtes blijven altijd zichtbaar, zodat je altijd tussen administraties kunt schakelen.

## Rechten

- Workspace-eigenaren en team-admins kunnen bedrijven toevoegen en werkruimte-instellingen beheren.
- Boekhouders zien alleen de werkruimtes en pagina's die hun klant toegankelijk heeft gemaakt.
- Teamleden zien Werkruimtes alleen als ze meer dan één werkruimte hebben en hun rol dat toestaat.

## Inzicht voor accountants

De pagina Inzicht, `/werkruimtes/inzicht`, zet klantadministraties naast elkaar en toont de werkdruk per periode. Hij staat in de groep Klantwerk, die verschijnt zodra je klantadministraties beheert.

De pagina bewust over aantallen en dagen, niet over bedragen:

- Klantgeld wordt niet opgeteld, want het is niet van jou.
- Er komt geen totaal "portefeuillewaarde" of omzet over klanten te staan.

### Klanten vergeleken

De eerste tabel zet je klanten naast elkaar:

| Kolom | Betekenis |
|---|---|
| Klant | De naam van de klantadministratie. |
| Btw | Of de huidige btw-periode is afgesloten, hoeveel dagen tot de deadline, of hoeveel dagen te laat. |
| Door jou afgesloten | Hoeveel van de laatste aangifteperioden van de klant jij in dit kantoor hebt afgesloten. |
| Te innen | Aantal openstaande facturen. |
| Bonnen | Aantal ontbrekende bonnen. |
| Betaald | Aantal betaalde facturen in het geselecteerde jaar. |
| Betaaltermijn | Gemiddeld aantal dagen te laat op betaalde facturen, als er tenminste zijn. |

Rijen staan op urgentie: klanten die vandaag actie nodig hebben staan bovenaan. Het btw-badge gebruikt dezelfde urgentielogica als het dashboard van een werkruimte.

### Werkdruk per periode

De tweede tabel toont de werkdruk over al je klanten, opgesplitst per periode:

| Kolom | Betekenis |
|---|---|
| Periode | De btw-periode of "Losse taken" voor werk dat niet aan een periode vastzit. |
| Afgesloten | Administraties waarvan de periode is afgesloten. |
| Bezig | Administraties met actief werk in uitvoering. |
| Open | Administraties met een open periode die nog niet is aangeraakt. |
| Nog niets | Administraties zonder geregistreerde activiteit voor die periode. |

Gebruik deze tabel om een opstapeling te zien voordat hij een deadlineprobleem wordt. De periodes zijn jaarloos; de vergelijkingstabel erboven filtert wel op jaar.

### Wat er bewust NIET op staat

Een **"Percentage aangiftes op tijd"** staat er bewust niet. In MyCompanyDesk betekent "ingediend" dat een periode hier is afgesloten. Een klant die ergens anders aangifte doet, heeft hier nooit een afgesloten periode. Een historisch percentage zou zo'n klant stelselmatig te laat noemen. Dat is een beschuldiging op basis van ontbrekende data, geen onnauwkeurigheid. Een kwaliteitscijfer als dit heeft eerst een expliciet signaal per administratie nodig dat de aangifte hier gebeurt.

In plaats daarvan bevat de vergelijkingstabel nu een kolom **Door jou afgesloten**. Die toont hoeveel van de laatste perioden van de klant hier zijn afgesloten, op basis van dezelfde afgesloten perioden. Een klant die ergens anders aangifte doet, komt op 0 uit, want hier is niets afgesloten. De kolom is bewust neutraal en wordt nooit rood, omdat hij over jouw eigen administratie gaat, niet over het gedrag van de klant.

## Gerelateerd

- [Mensen met toegang en je boekhouder](/settings/team) voor het uitnodigen van teamgenoten en boekhouders en het instellen van paginarechten
- [Rapporten](/features/reports) voor de weggebleven-klantenweergave en andere rapporten
- [Dashboard](/features/dashboard) voor de dagelijkse briefing van één werkruimte
