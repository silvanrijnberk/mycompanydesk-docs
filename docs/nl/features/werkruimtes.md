---
title: Werkruimtes
last_verified: 2026-08-10
---

# Werkruimtes

De pagina Werkruimtes (`/werkruimtes`) is één centrale plek voor alles wat je beheert. Hij vervangt het oude boekhoudersportaal en past zich aan je daadwerkelijke rol aan: één werkruimte, meerdere eigen bedrijven, of klantadministraties.

> **Eigen geld en klantgeld worden nooit door elkaar gehaald.** Eigen bedrijven optellen heeft zin, want het geld is van jou. Een totaal over klantenadministraties zegt niets, dus die houdt de pagina strikt gescheiden.

## Waar vind je het

- Open de werkruimtekiezer in de zijbalk en kies **Werkruimtes beheren**.
- Dezelfde kiezer zit ook in de header van het mobiele menu, dus je bereikt het overzicht vanaf elk scherm op dezelfde plek.
- Het oude `/boekhouder`-adres verwijst hierheen door.
- De werkruimtekiezer toont nu bovenaan een overzichtsregel. Eigen bedrijven en klantadministraties staan in aparte groepen, en zodra je meer dan acht werkruimtes hebt, verschijnt er een zoekveld.
- Elke rij toont het eigen merkteken van de werkruimte: het logo, of een gekleurde tegel met initialen. Eigen bedrijven krijgen hun kleur; klantadministraties blijven neutraal. De werkruimte waarin je nu zit, wordt uitgelicht.

Als je in de kiezer een werkruimte kiest, wisselt de app nu zonder volledige paginaherladen. Hij vergeet de staat van de vorige werkruimte in Pinia-stores en modulecaches, gooit requests die nog onderweg zijn en die na de wissel zouden aankomen weg, laadt de shell opnieuw zodat de navigatie en rechten bijwerken, en routeert je daarna naar de doelpagina.

## De werkruimte-sectie

De app-navigatie groepeert nu alle werkruimtepagina's onder **Werkruimtes**. De overzichtspagina blijft staan, en er zijn drie nieuwe pagina's bijgekomen:

- **Agenda** (`/werkruimtes/agenda`) - alle deadlines over al je werkruimtes, gegroepeerd op datum.
- **Werk** (`/werkruimtes/werk`) - je eigen openstaande taken plus openstaande klantverzoeken.
- **Kantoor** (`/werkruimtes/kantoor`) - het kantooroverzicht voor accountants, met aparte pagina's voor facturatie en bulkexport.

### Eigendomsindicator

Elke werkruimterij en elk item in de nieuwe pagina's krijgt een kleine eigendomsindicator. Eigen bedrijven houden hun werkruimtekleur; klantadministraties blijven neutraal. Je ziet hem in de werkruimtewisselaar, in de agenda en in de werklijst, zodat je altijd weet aan welke kant van de eigen/klant-grens een rij hoort.

### Agenda (`/werkruimtes/agenda`)

De agenda groepeert alle aankomende deadlines over al je werkruimtes op datum. Hij kijkt 30 dagen terug en 90 dagen vooruit, zodat een verlopen deadline van vorige week nog zichtbaar is. Verlopen deadlines staan bovenaan. Elke rij toont de werkruimte, het deadline-label en de eigendomsindicator. Klik op een rij om naar die werkruimte te schakelen en de betreffende pagina te openen.

### Werk (`/werkruimtes/werk`)

De werkpagina toont open werk in twee blokken: eerst je eigen bedrijven, dan klantadministraties. Dat houdt de twee soorten werk gescheiden, want je eigen taken en dingen die je van een klant verwacht vragen verschillende acties. Elke rij toont de werkruimte, de taak en een deadline-badge. Klik op een rij om naar de werkruimte te schakelen en de betreffende pagina te openen; bij een klantverzoek opent het verzoek zelf.

### Kantoorpagina's (`/werkruimtes/kantoor/*`)

Als je een accountantskantoor hebt, bevat de sectie Kantoor drie kantoorpagina's:

- **Kantooroverzicht** (`/werkruimtes/kantoor`) - kantoormedewerkers, openstaande klantuitnodigingen, partner-deellink en statistieken, en of gratis Pro is toegekend.
- **Facturatie** (`/werkruimtes/kantoor/facturatie`) - bied aan om een klantadministratie te betalen. De klant moet accepteren voordat er iets in rekening wordt gebracht; de prijs per overgenomen administratie staat vooraf op het scherm.
- **Export** (`/werkruimtes/kantoor/export`) - exporteer meerdere klantadministraties tegelijk. Kies jaar, periode en exportformaat, selecteer de administraties en de app downloadt per klant een archief. Eventuele mislukte exports blijven staan zodat je ziet wat niet is voltooid.

## Laadstatus en fouten

Als je een pagina binnen het werkruimte-frame opent, wacht de app eerst tot de schilgegevens (lijst met werkruimtes, token, rechten) klaar staan, en haalt daarna pas de paginagegevens op. Zo voorkomt de app dat een koude navigatie een lege "niks te doen"-staat toont terwijl het verzoek nog onderweg is.

Als het ophalen mislukt, toont de pagina een aparte foutstaat met een knop **Opnieuw proberen** in plaats van te doen alsof er niets te tonen is. De werkruimtekiezer in de zijbalk blijft bruikbaar, dus je kunt zonder te wachten naar een andere werkruimte schakelen. Op de facturatiepagina laden de klantenlijst en de facturatiebedragen onafhankelijk: als de bedragen niet beschikbaar zijn, blijft de klantenlijst gewoon zichtbaar en blijft de prijskolom leeg, zodat er geen valse nul verschijnt.

## Als je één werkruimte hebt

Je krijgt drie ingangen in plaats van een lege pagina:

- **Bedrijf toevoegen** voor een holding, tweede BV of zaak ernaast. Elk bedrijf krijgt een eigen administratie met aparte btw, facturen en boekhouding.
- **Boekhouder uitnodigen** als je samenwerkt met een externe boekhouder.
- **Aanmelden als partner** als je zelf boekhouder bent en meerdere klantadministraties vanuit één plek wilt beheren.

## Gecombineerde werkruimte: je eigen bedrijven

Als je meer dan één eigen bedrijf hebt, opent de pagina met een gecombineerd overzicht:

- Eén zin vertelt wat je bedrijven dit jaar samen omzetten, en of dat een winst of verlies oplevert.
- Een strip toont gezamenlijke omzet, resultaat, te innen en btw opzij.
- Een aandeelbalk toont de omzetverdeling per bedrijf.
- Onder de band staat één rij per bedrijf. De volgorde is vast (thuisbedrijf eerst, dan aanmaakdatum), zodat je altijd weet waar je moet zoeken.

### Signalen in elke rij

Elke bedrijfsrij toont chips voor wat er nu aandacht vraagt. Elke chip is een link: die schakelt naar het juiste bedrijf en brengt je op de pagina die bij het signaal hoort.

| Chip | Betekenis | Link |
|---|---|---|
| Btw-periode met deadline | Hoeveel dagen tot de aangifte, of hoe laat je bent | `/belastingen/btw` |
| Openstaande facturen | Facturen die niet op tijd betaald zijn | `/facturen` |
| Bonnetjes ontbreken | Kostenposten zonder bon | `/uitgaven` |
| Concepten | Facturen die nog concept zijn | `/facturen` |
| Btw ingediend | De vorige aangifte is ingediend | `/belastingen/btw` |
| Proefperiode loopt af | Het bedrijf zit nog in een Office-proefperiode | `/settings/billing` |
| Op non-actief | Het bedrijf is op non-actief gezet; je kunt nog inzien en exporteren | `/werkruimtes` |

Eigen bedrijven gebruiken dezelfde KPI's als het dashboard van elk afzonderlijk bedrijf, dus de cijfers kunnen niet tegenstrijdig zijn.

## Onderlinge posities

Als je eigen bedrijven elkaar factureren, ziet elke werkruimte normaal gesproken alleen de eigen helft. De Werkruimtes-pagina toont nu het nettosaldo tussen elk paar eigen bedrijven, zodat de rekening-courant die je voorheen op papier bijhield, in de app zichtbaar is.

Het blok verschijnt alleen als minstens twee van je eigen bedrijven daadwerkelijk openstaande facturen naar elkaar hebben, dus het blijft uit beeld voor iedereen die het niet nodig heeft. Het staat tussen het gecombineerde overzicht van je bedrijven en het klantendesk, omdat het een relatie tussen je bedrijven beschrijft en geen eigenschap van een enkel bedrijf.

- Koppelingen worden automatisch gemaakt als het btw-nummer van een klant overeenkomt met een van je andere werkruimtes. Die match kijkt alleen naar je eigen bedrijven, dus een klant van iemand anders wordt nooit bereikt.
- Als de automatische koppeling niet klopt, of als er geen btw-nummer beschikbaar is, kun je een klant handmatig koppelen of ontkoppelen vanaf de klantenpagina. Een handmatige koppeling wint altijd van de automatische.
- De positie is het nettobedrag over openstaande facturen tussen de twee bedrijven, verminderd met geboekte betalingen. Een positief bedrag betekent dat het ene bedrijf het andere nog moet betalen.
- Elk paar wordt als zin weergegeven vanuit de kant die nog tegoed heeft, bijvoorbeeld "[crediteur] heeft [bedrag] te ontvangen van [debiteur]". Als de balans de andere kant op loopt, draait de zin crediteur en debiteur om in plaats van het bedrag negatief te tonen.
- De regel toont ook uit hoeveel openstaande facturen het bedrag bestaat.
- Als er meer dan een paar een saldo heeft, toont de kaart bovenaan een totaal van alle openstaande onderlinge posities.

## Kantoor-werkruimte: klanten

Als je boekhouder bent en klantadministraties beheert, wordt de pagina een triage-overzicht:

- Een headline vertelt hoeveel van je klanten vandaag iets nodig hebben.
- Een cijferstrip toont het totaal aantal klanten, deadlines deze week, klanten die aandacht vragen, en open uitnodigingen.
- Rijen staan op urgentie gesorteerd, zodat administraties die vandaag actie nodig hebben bovenaan staan.
- Een zoekveld is altijd zichtbaar, zodat je klantadministraties direct kunt filteren.
- Open uitnodigingen staan in een eigen kaart; een uitgenodigde klant telt nog niet als actieve klant.

De chips en werken hetzelfde als in de gecombineerde werkruimte, maar rijen gebruiken geaggregeerde signalen zodat het overzicht meegroeit met grote klantenbestanden. Het overzicht telt klantgeld niet bij elkaar op.

### Medewerkers van het kantoor

Werk je in een boekhouderskantoor, dan heeft het kantoor een eigen ledenlijst. Beheerders kunnen collega's uitnodigen via **Kantoorleden beheren**; iedereen krijgt een rol (lid of beheerder). Iemand toevoegen aan het kantoor geeft hem of haar nog geen toegang tot een klant; dat geef je per klant vanaf de Werkruimtes-pagina. In de rij van elk medewerker zie je bij hoeveel klanten diegene is gekoppeld, zodat je weet wie waar mee bezig is.

### Werk aan een klant en verzoeken

Elke klantrij toont een werk-chip zodra er iets wacht. Open deze om te zien wie de klant nu oppakt en wat je aan de klant hebt gevraagd.

- **Ik pak dit op** wijst de klant aan jou toe. **Toch niet, geef terug** geeft het werk weer vrij, zodat een collega het kan oppakken. De status wordt live bijgewerkt voor iedereen in het kantoor, zodat twee mensen niet onwetend dezelfde aangifte starten.
- **Vraag de klant** maakt een taak aan in de eigen werkruimte van de klant. Kies een soort verzoek (bijvoorbeeld ontbrekende bonnen), voeg een titel en een notitie toe, en de klant ziet het als een gewoon to-do. Zodra de klant de taak afvinkt, is het verzoek opgelost en verdwijnt de werk-chip. Er is geen handmatige status 'wacht op klant' die je moet terugzetten; die volgt gewoon uit een open verzoek.

## Een eigen bedrijf toevoegen

Open **Bedrijf toevoegen** en geef het nieuwe bedrijf een naam.

Als je een betaald abonnement hebt (Starter of Pro), toont de app de extra kosten voordat je bevestigt. Tijdens je eigen Office-proefperiode betaal je niets voor het extra bedrijf; daarna wordt het tegen het getoonde tarief op je abonnement gezet.

Als je een gratis Office-werkruimte hebt (bijvoorbeeld via een gunst of founding-member-regeling), blijft je eerste bedrijf gratis en biedt de app nu een aparte checkout voor een tweede bedrijf. De prijs staat vooraf vermeld; alleen het tweede bedrijf wordt op een eigen add-on-abonnement gezet. Nadat de betaling is bevestigd, kun je het tweede bedrijf een naam geven.

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

De linker zijbalk verbergt nu items die je huidige werkruimterol niet mag gebruiken, zodat je geen links meer ziet die een 403 geven. De API stuurt dit aan via een deny-lijst: als een nieuw endpoint voor een rol wordt afgeschermd, verdwijnt het navigatie-item automatisch.

In een klantwerkruimte is de rail korter, want onderdelen die bij de klant zelf horen (inbox, website, abonnement, teaminstellingen, domeinen en AI-hulp) zijn voor een boekhouder niet beschikbaar. De werkruimtekiezer en het item Werkruimtes blijven altijd zichtbaar, zodat je altijd tussen administraties kunt schakelen.

## Rechten

- Workspace-eigenaren en team-admins kunnen bedrijven toevoegen en werkruimte-instellingen beheren.
- Boekhouders zien alleen de werkruimtes en pagina's die hun klant toegankelijk heeft gemaakt.
- Teamleden zien Werkruimtes alleen als ze meer dan één werkruimte hebben en hun rol dat toestaat.

## Inzicht voor accountants

De pagina Inzicht, `/werkruimtes/inzicht`, zet klantadministraties naast elkaar en toont de werkdruk per periode. Hij is alleen zichtbaar in de kantoor-werkruimte en alleen als je meer dan één klantadministratie beheert.

De pagina bewust over aantallen en dagen, niet over bedragen:

- Klantgeld wordt niet opgeteld, want het is niet van jou.
- Er komt geen totaal "portefeuillewaarde" of omzet over klanten te staan.

### Klanten vergeleken

De eerste tabel zet je klanten naast elkaar:

| Kolom | Betekenis |
|---|---|
| Klant | De naam van de klantadministratie. |
| Btw | Of de huidige btw-periode is afgesloten, hoeveel dagen tot de deadline, of hoeveel dagen te laat. |
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

**"Percentage aangiftes op tijd"** stond in het oorspronkelijke plan maar staat er niet. In MyCompanyDesk betekent "ingediend" dat een periode wordt afgesloten in `period_locks`. Een klant die ergens anders aangifte doet, krijgt die rij nooit. Een historisch percentage zou zo'n klant stelselmatig te laat noemen. Dat is een beschuldiging op basis van ontbrekende data, geen onnauwkeurigheid. Een kwaliteitscijfer als dit heeft eerst een expliciet signaal per administratie nodig dat de aangifte hier gebeurt.

## Gerelateerd

- [Toegang en boekhouder](/nl/settings/team) voor het uitnodigen van teamgenoten en boekhouders en het instellen van paginarechten
- [Rapporten](/nl/features/reports) voor de weggebleven-klantenweergave en andere rapporten
- [Dashboard](/nl/features/dashboard) voor de dagelijkse briefing van één werkruimte
