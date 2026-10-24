---
title: Sitebouwer
description: "Bouw een website met meerdere pagina's in de drag-and-drop-editor: secties en blokken, je eigen kleuren en lettertypes, en publiceren wanneer jij wilt."
last_verified: 2026-10-13
---

# Sitebouwer

Bouw je zakelijke website met een drag-and-drop-editor. Maak meerdere pagina's, stel ze samen met secties en blokken, pas kleuren en lettertypes aan, en publiceer wanneer je klaar bent.

## Overzicht

De sitebouwer vervangt het oude bedrijfsprofiel van één pagina. Elke nieuwe werkruimte begint met een standaardsite (Home, Diensten, Over mij en Contact, plus een privacybeleid en algemene voorwaarden), zodat je vanaf dag één een echte multi-page basis hebt. De editor biedt je:

- **Meerdere pagina's**: Maak zoveel pagina's als je nodig hebt, elk met een eigen pad en secties. De standaardpagina's zijn klaar om te bewerken, te verwijderen of aan te vullen.
- **Sectieblokken**: Voeg blokken toe zoals een grote kop, tekst, galerij, foto met tekst, diensten, team, klantreacties en een contactformulier. Sla blokken op als herbruikbare blokken en bouw je eigen bibliotheek op.
- **Ontwerptokens**: Stel merkkleuren, lettertypes, witruimte, hoekradius, bewegingsstijl, aangepaste CSS en een site-favicon in. Wijzigingen gelden voor de hele site.
- **Navigatie-editor**: Sleep en zet headerlinks op volgorde, met dropdown-groepen, externe links en inline navbar-styling (merknaam, CTA-knop, telefoon, belknop, sticky).
- **Publicatiesnapshots**: Werk in concept, bekijk je wijzigingen en publiceer daarna. Ongepubliceerde wijzigingen zie je in de bovenbalk.
- **Responsieve preview**: Schakel tussen desktop-, tablet- en mobiele weergave tijdens het bewerken. In desktopweergave kun je ook een echte viewportbreedte kiezen (1280, 1440 of 1920 pixels), zodat de media queries van de site zelf eerlijk reageren in plaats van gesimuleerd te worden.
- **Verstelbare panelen**: Sleep de rechterrand van de linker rail en de linkerrand van de rechter inspector om elk paneel breder of smaller te maken. Dubbelklik op een vergrotingsgreep om terug te gaan naar de standaardbreedte. De breedte wordt per apparaat onthouden in localStorage.
- **Zoom en passend in venster**: Zoom het canvas van 25% tot 200%, of klik op de zoomwaarde om te kiezen voor passend, 50%, 100% of 200%. Het stage-gebied scrollt wanneer het geschaalde canvas groter wordt.
- **Sneltoetsen**: Ongedaan maken en opnieuw, een blok selecteren, verplaatsen, dupliceren of verwijderen, in- en uitzoomen, passend in het venster en panelen sluiten. Het overzicht met alle sneltoetsen open je met ⌘/ of met de knop **Sneltoetsen** onderaan de rail.

Je website vind je in de zijbalk onder **Communicatie › Website** (`/website`). De editor open je daarvandaan.

Als je `/website` opent, kom je op het tabblad **Overzicht**: je ziet je site, de publicatiestatus en de knop **Bewerk site**. De andere tabbladen zijn **Bezoekers**, **Resultaten**, **Pagina's**, **Gevonden worden**, **Koppelingen** en **Domein & e-mail**. De editor zelf zit op `/website/editor` en bereik je bewust via **Bewerk site**, in plaats van dat hij direct het hele scherm overneemt. Op een telefoon opent de editor in een lichte bewerkmodus voor teksten, foto's, reviews en contactgegevens, zonder slepen of stijlinstellingen.

## Website-opzetwizard

Voordat je ooit de editor opent, kan de website-opzetwizard je eerste concept voor je bouwen. Bij je aanmelding wordt er nog geen site gebouwd: open je **Website** voor het eerst, dan start de wizard vanzelf. Werd er bij een ouder account al een site voor je gemaakt die nog niet live staat, dan zie je in plaats daarvan **We hebben je website alvast gemaakt**, met de keuze **Zet mijn site live** of **Eerst aanpassen**. Je kunt hem altijd opnieuw starten in de editor via **Hele site** › **Merk** met **Opnieuw opzetten**; bij een herstart begint hij bij wat er al staat. Hij doorloopt deze stappen:

1. **Wat je doet** (alvast ingevuld uit je KVK-gegevens) - je werk, diensten en toon. Dezelfde stap neemt je echte bedrijfsnaam mee (verplicht, en meteen opgeslagen bij je bedrijfsgegevens), je telefoonnummer, je WhatsApp-nummer (ja, met hetzelfde nummer als je telefoon, of een ander nummer), je Instagram (en eventueel Facebook of LinkedIn), dat bij je bedrijfsgegevens terechtkomt en bij invullen de social links in de footer aanzet, je openingstijden (met snelle keuzes voor de weekdagen, het weekend of elke dag, en de tijden per dag in te stellen), het adres dat je contactpagina toont en het adres waarmee klanten je mogen mailen, gevraagd als **E-mailadres voor klanten** met een vinkje of je site dat adres toont. Je inlogadres staat er al ingevuld, maar komt alleen op je site zolang je het vinkje aan laat; pas je het adres aan, dan verandert het ook in je bedrijfsgegevens (en op je facturen).
2. **Wat je wilt** - of je site vooral klanten moet binnenhalen, je werk moet tonen, betrouwbaar moet overkomen of beter vindbaar moet zijn.
3. **Licht of donker, en kleur** - de wizard vraagt of je site licht of donker moet worden, en toont daarna kleurensets met zachte tinten, onder de donkere opties een echt donkerblauw, of je eigen hex-kleur. Het gegenereerde logo volgt je keuze meteen in hetzelfde scherm, daarom staat de kleurstap vóór de logostap.
4. **Logo** - houd het AI-gegenereerde logo, upload je eigen PNG/SVG, of gebruik alleen je bedrijfsnaam als tekstlogo.
5. **Je eigen foto's** (optioneel) - voeg tot zes foto's van je eigen werk toe. De eerste komt bovenaan je homepagina, de volgende op de pagina over jou, en vanaf twee foto's bouwt de site er ook een fotogalerij van. Sla je deze stap over, dan krijgt de site voorbeeldfoto's die je later vervangt.
6. **Webadres** (alleen als je werkruimte nog geen actief domein of CNAME heeft die de site bedient). Voeg een domein toe of koppel een bestaand domein. Je kunt deze stap overslaan en later een adres toevoegen; een site die al live is, houdt zijn adres.

Je antwoorden worden opgeslagen als sitebriefing. Als je afsluit, schrijft de AI nieuwe teksten voor je hele conceptsite op basis van de briefing en je werkruimtegegevens, past je gekozen logo en merkkleur toe, en laat alles als concept staan. Er wordt niets automatisch gepubliceerd. Je bekijkt het resultaat in de editor en publiceert pas wanneer je tevreden bent. Op de afsluitkaart pas je de titel aan waarmee je site in Google verschijnt, voordat je afsluit. Het bouwen duurt ongeveer een halve minuut; laat het scherm open, het vertelt ook welke fase het uitvoert.

De diensten in de eerste vraag hebben elk een optionele prijs met een keuze tussen **incl. btw** en **excl. btw**, en onder het veld zie je precies wat bezoekers ervan zullen zien. Standaard staat op je site wat de klant betaalt, dus een bedrag dat je als excl. btw intypt wordt op het btwtarief van dat item omgerekend; een werkruimtebreede schakelaar op de prijsblokken van de sitebouwer, beschreven bij [Tarieven met koopknoppen](#tarieven-met-koopknoppen), kan de hele site omschakelen op prijzen excl. btw. Val je werkruimte onder geen btw (vrijgesteld of KOR), dan heet het veld gewoon Prijs en vermeldt de hint dat de prijzen zonder btw zijn; typ je alle prijzen excl. btw, dan staan ze ook zo op je site. Elke prijs krijgt ook een eenheid (per uur, per persoon) en de rij toont meteen de regel die bezoekers zullen zien. Zet **vanaf** aan voor een vanaf-prijs, of laat het veld leeg: je site toont dan "Op aanvraag". Een prijs die al bij Aanbod staat, wordt automatisch ingevuld, en bij elke dienst zet je erbij of klanten hem online kunnen boeken.

Kies je in de boekingsvraag voor **Klanten kiezen zelf een tijd**, dan vraagt de dienstenlijst ook hoe lang elke afspraak duurt. Elke dienst start met een voorgestelde duur in minuten, op basis van de naam van de dienst en het werk dat je in de wizard omschreef: voor een korte knipbeurt stelt de wizard minder minuten voor dan voor het kleuren van haar, en in een trimsalon wordt juist meer tijd ingevuld. Elke suggestie mag je aanpassen, en een duur die al bij Aanbod staat, wordt automatisch ingevuld. Een duur is een heel aantal minuten tussen 5 en 480. Een dienst zonder duur is niet online te boeken: maak je het veld leeg, dan blijft de dienst op je site staan, maar kan het afspraakblok hem niet meer als kiesbare tijd aanbieden. De boekingsvraag zelf kent nu vijf antwoorden: klanten kiezen zelf een tijd, ze sturen een aanvraag die jij bevestigt, ze schrijven zich in voor een vaste sessie (een workshop, les of wandeling), ze vragen je om een offerte (ze omschrijven hun klus, foto's kunnen meegaan, en de aanvraag valt in je inbox), of er is geen online boeking. Een aanmelding wordt met je eerste datum opgebouwd, aanmelden kan tot twee uur voor de start, en klanten betalen ter plekke; laat je de datum leeg, dan plan je de sessies later in bij Agenda, **Groepsafspraken**. Heeft je site al een afspraakblok, dan begint de wizard in de modus van dat blok en schakelt hij bij het afronden mee met jouw keuze.

Je mag ook halverwege stoppen: klik op **Later afmaken** of herlaad de pagina, en je antwoorden staan er bij terugkeer weer. De wizard bewaart wat je zelf hebt gewijzigd op dat apparaat, ongeveer een week lang, en zet iets alleen terug zolang de onderliggende waarde niet veranderd is; zijn je bedrijfsgegevens of diensten in de tussentijd gewijzigd, vanuit Instellingen of vanaf een ander apparaat, dan geldt de huidige waarde.

Dezelfde wizard kan een bestaande site ook helemaal opnieuw schrijven. Als je hem vanuit **Merk** herstart, vraagt hij eerst om bevestiging, want afsluiten vervangt tekst die je zelf hebt aangepast. De site blijft concept tot je zelf publiceert.

## Indeling van de editor

Bovenaan de editor staat een rij tabbladen: eerst **Hele site**, daarna elke pagina van je site. Sleep een paginatab om de volgorde te veranderen (de homepagina staat altijd vooraan), of klik op **+** (**Pagina toevoegen**) voor een nieuwe pagina. Welke tab je kiest, bepaalt wat de rail links aanbiedt:

- **Een pagina**: **Blokken** (de blokken van deze pagina, om toe te voegen, te verplaatsen, te dupliceren of te verwijderen), **Stijl** (wat alleen deze pagina anders mag hebben, zoals achtergrond en breedte) en **Instellingen** (titel, webadres, zichtbaarheid in het menu en hoe de pagina in Google verschijnt). Klik op een blok om het in de inspector rechts te bewerken: inhoud, layout, stijl en animatie.
- **Hele site**: **Ontwerp** (de pakketten-galerij), **Kleuren**, **Merk**, **Letters**, **Knoppen**, **Menubalk**, **Ruimte**, **Animatie**, **Elementen**, **Navigatie**, **Footer**, **Versies** (eerdere publicaties en bewaarde versies, met een weg terug) en onderaan, apart, **Eigen CSS**.

Al je pagina's als lijst, met hun status, Google-omschrijving en bezoekcijfers, zie je buiten de editor op het tabblad **Pagina's** van Website. Domein, vindbaarheid in Google en koppelingen met derden beheer je ook daar, op de tabbladen **Domein & e-mail**, **Gevonden worden** en **Koppelingen**, niet in de editor.

### Pakketten-galerij

De pakketten-galerij (`/website/pakketten`, en in de editor **Hele site** › **Ontwerp**) is de snelste manier om te beginnen met een complete, voorgestylede site. Hij toont elk goedgekeurd sitepakket: een afgebouwde sjabloon met kleuren en lettertypecombinatie voor een specifiek vak.

Zo werkt het:

1. Open in de editor **Hele site** › **Ontwerp**, of ga naar `/website/pakketten`.
2. Blader door de kaarten. Elke kaart toont een voorbeeld van het pakket, met de naam, het vak, het aantal pagina's en een korte omschrijving.
3. Klik op **Bekijk voorbeeld** om het pakket te bekijken: op `/website/pakketten` in een nieuw tabblad, in de editor op ware grootte naast je eigen site.
4. Kies hoe je het pakket gebruikt:
   - **Neem de look over**: alleen de kleuren, letters en knopstijl van het pakket. Je pagina's, blokken en teksten blijven precies zoals ze zijn.
   - **Gebruik dit ontwerp**: je huidige conceptsite (pagina's, blokken en stijl) wordt vervangen door het pakket. Daarna maakt MyCompanyDesk foto's en teksten voor jouw bedrijf; voorbeeldcijfers, reviews en projecten uit het ontwerp blijven leeg tot je ze zelf invult. Je vorige concept blijft bewaard als herstelpunt, dus je kunt altijd terug.
5. In beide gevallen vraagt een bevestiging eerst om akkoord, en wordt alleen je **concept** aangepast. Er wordt niets automatisch gepubliceerd.
6. Je bekijkt het resultaat in de editor, past tekst en afbeeldingen aan en publiceert zelf.

In de editor kom je na het toepassen terug bij **Blokken**, zodat je direct verder kunt bewerken. Met **Terug naar alle ontwerpen** ga je vanuit een voorbeeld terug naar de galerij.

Zoek via het zoekveld (**Zoek een ontwerp**) of filter op stijl. Het aantal ontwerpen ernaast wordt bijgewerkt terwijl je filtert.

### Bediening op het canvas

Je kunt blokken ook direct op het canvas bedienen. Beweeg met je muis over een blok om de naam en een kleine werkbalk te zien. Gebruik de pijltjes om het blok omhoog of omlaag te verplaatsen, de plusknop (**Blok hier invoegen**) om er een blok tussen te zetten, en de acties **Dupliceren**, **Kopieer naar pagina…**, **Vergrendelen** en **Verwijderen**. Een vergrendeld blok kun je alleen ontgrendelen. De navigatie en de footer tonen hun naam bij hover, maar die bewerk je via **Hele site** › **Navigatie** en **Footer**.

Klik op een blok om het geselecteerd te houden; de omlijning blijft dan zichtbaar als je de muis wegbeweegt. Het canvas en de lijst **Blokken** lezen uit dezelfde volgorde, dus een wijziging op de ene plek zie je direct op de andere. In de lijst **Blokken** kun je een blok ook verbergen zonder het te verwijderen.

Tekst typ je ook direct op het canvas: klik op de tekst, typ de wijziging en klik ergens anders om op te slaan. Het veld in de inspector loopt meteen mee.

Koppen die de wizard, een herschrijving of een nieuw blok voor je schrijven, komen in zinsvorm uit de pen: zo leest een kop als een zin. Namen zoals je bedrijf of een merk houden hun eigen hoofdletters.

### Adres, kaart, werkgebied en parkeren op de contactpagina

De contactpagina laat zien waar je werkt en hoe je er komt. Het blok **Locaties** valt terug op je bedrijfsadres als je geen eigen locaties hebt, en een contactblok laat een adres weg dat een Locaties-blok op dezelfde pagina al toont. Een nieuwe contactpagina begint niet meer met een leeg Locaties-blok. Een kaart (**Kaart tonen**) komt uit je adres als je die wilt, **Werkgebied** is een van de voorinstellingen bij **Blok toevoegen** als je wilt laten zien waar je jouw klanten opzoekt, en de bereikbaarheidssectie heet **Bereikbaarheid en parkeren**.

### Een apart adres voor je website

Voor een bedrijf aan huis hoeft de site dat woonadres niet te tonen. Onder **Instellingen › Bedrijfsgegevens** vul je een apart **adres voor je website** in: de footer, het contactblok, de adresgegevens voor zoekmachines en de juridische pagina's tonen dan dat adres. Je facturen blijven het vestigingsadres gebruiken. In de websitewizard, bij aan huis, noemt de hint het adres dat anders onderaan de pagina staat. Laat je het veld leeg, dan toont de site gewoon het vestigingsadres, zoals voorheen.

### De aanspreekvorm op je site

Je site spreekt zijn bezoekers aan in een gekozen vorm: **Je en jij** (persoonlijk: "Ik help je graag.") of **U** (beleefd: "Ik help u graag."). De keuze staat in de eerste stap van de website-opzetwizard, en op de kaart **Aanspreekvorm op je website** bij Instellingen › Bedrijfsgegevens; beide schrijven dezelfde instelling. Vaste teksten op de site, zoals knoppen, formulierregels en bedankjes, gaan meteen mee. Wat jij of de tekstschrijver al schreef, houdt zijn eigen stem; de knop op die kaart, **Zet alle teksten om naar je** of **Zet alle teksten om naar u**, zet in één keer alles om wat er staat, ook wat je zelf typte, en verandert alleen de aanspreekvorm, nooit de inhoud. Het resultaat vertelt hoeveel teksten er zijn aangepast en welke bleven staan (daar loop je in de editor langs), en bij publiceren gaat het live. Secties die je later toevoegt, nemen de aanspreekvorm mee die de site al heeft, en ook de juridische pagina's, het privacybeleid en de voorwaarden, verschijnen in de gekozen vorm. Zit je alleen in je bedrijf, dan spreken de vaste teksten in de ik-vorm in plaats van in de we-vorm; de wizard vraagt daarvoor je voornaam, en stelt je nooit voor met je bedrijfsnaam.

## Pagina's aanmaken

1. Klik in de editor op **+** (**Pagina toevoegen**) achter de paginatabs, of op **Nieuwe pagina** op het tabblad **Pagina's** van Website.
2. Geef de pagina een naam en kies een **Soort pagina**.
3. De pagina opent in de editor, waar je blokken kunt toevoegen en uitbouwen. Het webadres pas je aan bij **Instellingen** van de pagina. Een pagina die je hier aanmaakt, komt automatisch in je menu; de 404-pagina en artikelen niet. Lukt dat niet meteen, dan meldt de editor het, en je zet de pagina zelf aan in de menu-editor.

### Standaardpagina's

Elke nieuwe werkruimte krijgt deze pagina's mee:

| Pagina | Pad | Beschrijving |
|---|---|---|
| Home | `/` | Je hoofdpagina. Kan niet worden verwijderd. |
| Diensten | `/diensten` | Laat zien wat je aanbiedt. Vooraf gevuld met een dienstensectie. |
| Over mij | `/over-ons` | Vertel bezoekers wie je bent. |
| Contact | `/contact` | Contactformulier en gegevens. Gekoppeld vanuit de footer. |
| Privacybeleid | `/privacy` | Zie Juridische pagina's hieronder. |
| Algemene voorwaarden | `/algemene-voorwaarden` | Zie Juridische pagina's hieronder. |

Deze pagina's zijn automatisch verbonden met de navigatie-header en footer. Je kunt ze allemaal bewerken of verwijderen, behalve de Home-pagina die altijd verplicht is. De navigatie past zijn links aan als je pagina's toevoegt of verwijdert.

### Paginastatus: Live vs Concept

Pagina's hebben een status die bepaalt of ze op je gepubliceerde site verschijnen:

- **Live**: De pagina wordt meegenomen in de publicatie. Bezoekers zien hem op je openbare site na publicatie.
- **Concept**: De pagina is nog in bewerking. Hij blijft onzichtbaar voor bezoekers, ook nadat je de site publiceert.

Een nieuwe pagina start als **Live**, zodat hij bij je volgende publicatie meegaat en een menulink er nooit naar een ontbrekende pagina wijst. Een nieuw blogartikel start als **Concept**. De homepage staat altijd live. Je wisselt een pagina tussen Live en Concept met de schakelaar **Concept** / **Live** bij die pagina in **Pagina's beheren**. De statuswijziging wordt meteen opgeslagen en zet de Publiceerknop in de bovenbalk aan, zodat de volgende publicatie de wijziging oppikt.

Een site waarvan de homepage op Concept staat, toont niets bij publicatie. Als je de homepage naar Concept hebt gezet, zet je hem terug naar Live en publiceer je om je site te herstellen.

## Pagina's bouwen met secties

Open een pagina in de editor. In de lijst **Blokken**:

- Klik op **Blok toevoegen** om de beschikbare bloktypes te zien (grote kop, tekst, galerij, foto met tekst, diensten, team, klantreacties, contactformulier, tarieven, product, keurmerken, online boeken, en meer).
- Kies een bloktype om het op de pagina te plaatsen.
- Klik op een sectie om het inspectiepaneel te openen, waar je inhoud, layout, stijl en animatie kunt bewerken.
- Sleep secties omhoog of omlaag om ze te verplaatsen. Gebruik de dupliceer- en verwijderacties op elke sectie.

Sommige secties hebben alleen-systeemvarianten die beschikbaar zijn op de vergrendelde homepage maar niet op aangepaste pagina's.

## AI-hulptools

Twee AI-gestuurde tools helpen je sneller pagina's te schrijven en te illustreren, direct in het editor-inspectiepaneel.

### Tekst herschrijven

Elk tekst- en tekstvlakveld in de sectie-inspector krijgt vier kleine toonknopjes eronder zodra het veld genoeg inhoud heeft (meer dan een paar woorden). De knoppen sturen je huidige tekst naar de server, die een lichtgewicht Gemini-model gebruikt om het in een specifieke toon te herschrijven:

- **Korter**: Halveert de tekst ongeveer, met behoud van de betekenis.
- **Kalmer**: Maakt de tekst rustiger en geruststellend. Minder verkooppraatje, meer vertrouwen.
- **Scherper**: Verscherpt de formulering. Sterkere werkwoorden, geen aarzeling.
- **Vriendelijker**: Verzacht de toon, warmer en toegankelijker.

De herschrijving blijft altijd in dezelfde taal als het origineel (meestal Nederlands). Het model herschrijft alleen, het verzint geen nieuwe informatie. De herschreven tekst vervangt je veldinhoud direct. Je kunt op een andere toonknop klikken, ongedaan maken of verder bewerken.

Het tekstveld is beperkt tot 2000 tekens voor de herschrijf-aanroep, zodat het model snel en voorspelbaar blijft. Als de AI-service tijdelijk niet beschikbaar is, zie je een foutmelding en blijft je oorspronkelijke tekst onaangeroerd.

### Stockfoto zoeken

Wanneer je het afbeelding-uploadveld opent in een willekeurig sectieblok (hero, spotlight, team, portfolio, logo's, product), zie je nu een **Stockfoto**-knop naast de upload- en URL-plak-knoppen. Als je erop klikt, opent zich een inline zoekpaneel dat is verbonden met Unsplash, de gratis stockfotobibliotheek.

- Typ een zoekterm (bijv. "kapsalon", "koffie", "hout") en druk op enter.
- Resultaten verschijnen in een raster. Klik op een foto om deze als sectie-afbeelding in te voegen.
- De zoekopdracht loopt via de MyCompanyDesk-server, dus je Unsplash-toegangssleutel komt nooit in de browser.
- Naamsvermelding wordt automatisch bijgehouden volgens de API-richtlijnen van Unsplash en getoond op je gepubliceerde site. De "Foto's: `fotograaf` · Unsplash"-vermelding in de footer noemt de fotografen van de stockfoto's die een bezoeker op de gepubliceerde site echt ziet: een dienstkaart die je eigen Aanbod-foto had overgenomen telt niet meer mee, dezelfde fotograaf staat er maar één keer, en vervangen foto's vallen uit de regel.

De alt-tekst volgt je eigen foto's: bij een upload komt hij uit de bestandsnaam van de afbeelding (plaatsnamen heel, hoogstens 200 tekens) en hij blijft daarna vervangbaar, zowel bij een upload als bij een stockfoto die al op zijn plek staat.
- Als Unsplash niet is geconfigureerd op je werkruimte, blijft de Stockfoto-knop verborgen, zodat je nooit een niet-werkende functie ziet.

## Opgeslagen blokken

Sla elke sectie op als herbruikbaar blok en bouw een persoonlijke bibliotheek van voorgestijlde bouwstenen. Opgeslagen blokken verschijnen bovenaan de sectie-toevoeger, zodat je een bewaarde layout op elke pagina kunt plaatsen zonder hem opnieuw op te bouwen.

### Sectie opslaan als blok

1. Open in de lijst **Blokken** het menu **Meer acties** van een blok en kies **Bewaar als blok**.
2. Geef het blok een naam (het bloklabel is alvast ingevuld als suggestie).
3. Het blok wordt opgeslagen in je persoonlijke bibliotheek voor deze werkruimte.

### Opgeslagen blok invoegen

1. Klik op **Blok toevoegen** op een pagina.
2. Je opgeslagen blokken staan onder **Mijn blokken** bovenaan het paneel.
3. Klik op een blok om het als nieuwe sectie op de huidige pagina te plaatsen.

Het invoegen van een blok kopieert de template naar een nieuwe sectierij. Het bewerken of verwijderen van de ingevoegde sectie heeft geen invloed op het opgeslagen blok in je bibliotheek, en andersom.

### Je bibliotheek beheren

- **Verwijder een blok** uit de bibliotheek door op het x-icoon naast het blok te klikken. Dit verwijdert alleen het opgeslagen sjabloon; secties die al vanuit dat blok zijn ingevoegd blijven staan.
- De **Mijn blokken**-kop is verborgen als je bibliotheek leeg is, zodat een eerste editor geen lege categorie ziet.

### Sectie-layoutvarianten

Veel blokken ondersteunen meerdere layoutvarianten, waaronder de grote kop, diensten, tarieven, klantreacties, team, FAQ, cijfers en de oproep met knop. Kies er een uit de **Stijl**-dropdown in het Layout-tabblad van de inspector om te bepalen hoe de sectie eruitziet. De standaardvariant behoudt het vertrouwde uiterlijk, dus secties die je vóór deze functie hebt gebouwd blijven hetzelfde tonen.

#### Varianten van de grote kop

| Variant | Effect |
|---|---|
| **Standaard (foto rechts)** | Standaard. Foto rechts, tekst links. Valt terug op gecentreerde tekst als er geen foto is. |
| **Foto links** | Spiegel van de standaard: foto links, tekst rechts. |
| **Portret (ronde foto links)** / **Portret (ronde foto rechts)** | Een ronde portretfoto naast de tekst. |
| **Gecentreerd** | Tekst gecentreerd, optionele foto eronder. |
| **Foto als achtergrond** | Foto over de volle breedte als achtergrond, met lichte tekst erover. |
| **Minimaal (alleen tekst)** | Alleen tekst in een smalle kolom. Geen foto. |
| **Redactioneel**, **Affiche**, **Omkaderd**, **Groot cijfer** | Typografische varianten zonder foto: een grote kop met metakolom, een statement tussen lijnen, een drukwerkkader of een groot contourcijfer. |

#### Diensten-varianten

| Variant | Effect |
|---|---|
| **Standaard (kaarten)** | Standaard. Grid van kaarten in 2, 3 of 4 kolommen. Icoon, titel en omschrijving per item. |
| **Icoon-raster** | Compactere, icoon-gedreven layout met grotere iconen en minder kaartchroom. Geschikt voor 4 of meer korte items. |
| **Lijst** | Verticale rijen met een icoon links en tekst rechts, gescheiden door dunne lijnen. Goed voor lange doorleeslijsten. |
| **Accordeon** | Verticaal gestapelde klikbare rijen. Omschrijving verborgen tot de rij wordt uitgeklapt. Gebruikt dezelfde chevron-animatie als het FAQ-blok. |

#### Tarieven-varianten

| Variant | Effect |
|---|---|
| **Standaard (kaarten)** | Standaard. Tier-kaarten naast elkaar met naam, prijs, functielijst en koopknop of CTA. |
| **Vergelijkingstabel** | Feature-matrix. Rijen zijn alle functies uit alle tiers samengevoegd. Kolommen zijn de tiers. Elke cel toont een vinkje of een streepje, zodat bezoekers snel kolommen kunnen scannen om abonnementen te vergelijken. De uitgelichte tier-kolom blijft getint. |

#### Testimonial-varianten

| Variant | Effect |
|---|---|
| **Standaard (raster)** | Standaard. Kaarten in een raster van 2 tot 3 kolommen. Elke kaart toont de quote, naam en optionele rol. |
| **Spotlight (één quote)** | Een enkele grote pull-quote in magazine-stijl, gecentreerd met serif-typografie. Extra getuigenissen verschijnen als kleine naambadges onder de hoofdquote. |
| **Lopende band** | Een horizontaal scrollende rij met quote-kaarten. Hoveren pauzeert de animatie; de reduced-motion-voorkeur van het besturingssysteem stopt hem volledig. De track loopt naadloos door met twee kopieën van de itemset. |

### Foto met tekst

Het blok **Foto met tekst** is een rij waarin beeld en tekst elkaar afwisselen. Elke rij toont een afbeelding aan de ene kant en tekst aan de andere: een eyebrow, titel, ondertitel, bullets met vinkjes en een optionele call-to-action-link. In het layout-paneel bepaal je aan welke kant de afbeelding staat.

Een paar dingen om te weten:

- **Beeldzijde**: De layout-variant staat standaard op afbeelding-rechts. Zet hem op afbeelding-links in het layout-paneel om de rij te spiegelen.
- **Optionele onderdelen**: Eyebrow, ondertitel, bullets, CTA en afbeelding zijn allemaal optioneel. Een spotlight met alleen een titel en afbeelding toont nog steeds een strak resultaat.
- **Stapelen**: Zet meerdere spotlight-secties onder elkaar om een klassieke lijst met functies onder elkaar te bouwen.
- **Vastzittend beeld**: Zet **Foto blijft staan als je scrolt** aan in de inspector om de afbeelding vast te houden terwijl de tekst ernaast doorscrollt. Alleen op desktop, en alleen zichtbaar als er genoeg tekst naast de afbeelding staat. Op mobiel staat het beeld gewoon gestapeld.

### Tarieven met koopknoppen

Bij de tarievensectie kun je pakketten of abonnementen laten zien. Elke tier kan optioneel een koopknop krijgen:

- Zet **Met koopknop** aan bij een tarief en vul **Prijs bij afrekenen (incl. btw)** in, het bedrag dat de koper echt betaalt (bijvoorbeeld 750,00). Houd de prijstekst op de kaart gelijk.
- Een **Koop nu**-knop vervangt de statische CTA-link. Bezoekers die erop klikken gaan via de MyCompanyDesk-checkout naar Mollie of Stripe Connect om te betalen.
- Het koopknop-label is standaard "Koop nu" maar kan per tarief worden aangepast in het veld **Koop-knop tekst**.
- Tarieven zonder koopknop houden het bestaande CTA-linkgedrag.

Tarievensecties kunnen ook als vergelijkingsmatrix worden getoond. Zet de layoutvariant op **Vergelijkingstabel** in de inspector. De matrix toont elke tier als kolom en alle functies uit alle tiers als rijen, met vinkjes waar een tier de functie heeft. Zo zie je in een oogopslag hoe abonnementen zich tot elkaar verhouden. Zie [Sectie-layoutvarianten](#sectie-layoutvarianten) voor de volledige opties.

Blokken die Aanbod-prijzen tonen, diensten, producten, abonnementen of tarieven, hebben **Prijzen op je website: inclusief / exclusief btw** in de inspector, opgeslagen voor de hele werkruimte. Standaard, inclusief, toont je site wat de klant betaalt en draagt een gestructureerde prijs z'n eigen klein label (inclusief btw, of vrijgesteld als je werkruimte geen btw rekent), zodat het bedrag nooit dubbel kan lezen. Kies je exclusief, dan print de site het getypte bedrag zonder btw met het label **excl. btw**: op dienstkaarten, in het tarievenblok, in de dienstkeuze van het afspraakblok en bij groepsafspraken. Gratis, Op aanvraag en je eigen Website-tekst blijven zoals ze zijn, en wat een bezoeker op het afrekenen betaalt, via aanbetaling, de productkoopknop of online betalen, blijft inclusief btw. Opslaan herbakt de gepubliceerde site.

### Productblok

Een losstaande eenmalige koopkaart, voor als een volledige tarieventabel meer is dan je nodig hebt:

- Een productnaam, beschrijving, optionele afbeelding, prijs en een koopknop.
- Dezelfde checkout-koppeling als de tarief-koopknoppen, je bezoeker betaalt via Mollie of Stripe Connect.
- Een optionele notitieregel onder de knop voor verzendinformatie, disclaimers of opmerkingen.

Zie [Verkopen](/features/domains-website-inbox#verkopen) voor het bijhouden van betalingen en bestellingen.

### Keurmerken-blok

Het **Keurmerken**-blok toont de certificaten en keurmerken van je bedrijf (STEK, VCA, CE en meer), precies zoals je ze bij **Instellingen › Bedrijfsgegevens** invoert. Die lijst beheer je op die ene plek: het blok is datagebonden en de inspecteur heeft geen items-editor, alleen de weergave.

- **Kopje**: standaard "Certificeringen en keurmerken". Typ je eigen kopje, of laat het leeg voor een blok zonder kop.
- **Stijl**: witte tegels (standaard) of kaal. **Grootte**: klein, middel of groot.
- Een keurmerk mag ook zonder afbeelding: een merk dat alleen een naam is, verschijnt op je site en in de tekstversie van je e-mails als die naam. Een afbeelding blijft optioneel; plaats je er wel één, dan doorloopt hij de gebruikelijke bijsnijding en omzettingen.
- Maximaal zes keurmerken; volgorde, naam en link stel je bij Bedrijfsgegevens in. Voeg je het eerste keurmerk toe, dan zet MyCompanyDesk automatisch een Keurmerken-blok op je homepage, als concept: vóór een afsluitende oproep als dat het laatste blok is, anders onderaan vóór de footer. Het wordt niet meteen gepubliceerd; publiceren doe je zelf. Bestaat er al een keurmerken-sectie op je site, dan komt er geen tweede.
- Is de lijst leeg of staat **Tonen op je website** bij Bedrijfsgegevens uit, dan verbergt het blok zichzelf op de gepubliceerde site. De editor zegt het ook als de keurmerken voor de website uit staan.
- Verwijder je een keurmerk, dan blijft het bestand bewaard en toont al verzonden mail het logo gewoon; het blok verbergt zichzelf pas als de hele lijst leeg is.

### Diensten en producten uit Aanbod

Blokken met diensten, producten of abonnementen halen hun items uit je Aanbod. Een omschrijving die je bij een dienst typt is één tekst: het dienstenblok op je homepagina en de Diensten-pagina delen hem, dus een verbetering komt in één keer overal terecht. Herbakken zet nooit een concepttekst van een dienstkaart live: tot je publiceert blijven de kaarten de tekst tonen die ze al hadden.

De prijs volgt de prijsmodus die in Aanbod staat: een vast bedrag, "vanaf" een bedrag, of "Op aanvraag" als er geen prijs is ingesteld. Een prijs van nul is een echte prijs: een bewust gratis item toont "Gratis" op de site, de prijslijst, de Aanbodlijst en het boekingsblok, in plaats van als onbeprijsd te gelden; alleen items zonder enige prijs tonen "Op aanvraag".

## Sectie-animaties

Elk blok heeft een tabblad **Animatie** in de inspector. Hiermee voeg je beweging toe die afspeelt wanneer het blok in beeld komt, bij het laden van de pagina, of als de muis erop komt.

### Animatie-stijl

Kies bij **Animatie-stijl** hoe het blok verschijnt:

| Stijl | Effect |
|---|---|
| **Geen** | Geen animatie, het blok staat er meteen. |
| **Zacht omhoog** (standaard) | Het blok verschijnt terwijl het iets omhoog schuift. |
| **Zacht in beeld** | Het blok verschijnt vanuit transparant. |
| **Schuif van rechts** | Het blok verschijnt terwijl het van opzij in beeld schuift. |
| **Inzoomen** | Het blok groeit licht naar zijn eigen formaat. |
| **Uitvouwen (horizontaal)** | Het blok vouwt in de breedte open. |
| **Na elkaar** | De onderdelen van het blok verschijnen kort na elkaar, in plaats van dat het blok zelf beweegt. |
| **Trap (paginakop)** | De onderdelen van de paginakop verschijnen trapsgewijs. |
| **Onthullen** | Het blok wordt onthuld via een masker. |
| **Woord voor woord (titel in de paginakop)** | Alleen voor de grote kop. De woorden van de titel verschijnen elk op hun eigen moment; andere blokken verschijnen gewoon. |

### Wanneer starten

- **Bij in beeld komen** (standaard): De animatie speelt af wanneer het blok in beeld scrolt. Eenmaal geanimeerd blijft het blok zichtbaar.
- **Direct bij laden**: De animatie start zodra de pagina is geladen.
- **Bij aanwijzen**: De animatie start als de muis op het blok komt en keert terug als de muis weggaat.

### Instellingen

- **Snelheid**: Hoe lang de animatie duurt, van 200 tot 1600 milliseconden. Standaard 600 ms.
- **Vertraging**: Wachttijd voordat de animatie start, van 0 tot 1200 milliseconden. Standaard 0 ms.
- **Soort beweging**: De versnellingscurve. Keuze uit **Soepel** (standaard), **Vloeiend**, **Gelijkmatig** en **Lineair**.
- **Onderdelen na elkaar**: Alleen bij blokken met meerdere items. De items van het blok verschijnen kort na elkaar in plaats van tegelijk.

Hoe blokken sitebreed verschijnen, kies je bij **Hele site** › **Animatie**: **Geen**, **Subtiel**, **Zacht**, **Zijwaarts**, **Onthullen** of **Speels**.

### Bewegingsreductie

Bezoekers die `prefers-reduced-motion: reduce` op OS-niveau hebben ingeschakeld, zien elke sectie direct in de eindpositie. Er worden geen animaties afgespeeld. Op werkruimteniveau kunnen motion-tokens beweging ook per site uitschakelen. Wanneer bewegingsreductie actief is, krijgt de sectie nooit de verborgen startklasse, zodat de server-gerenderde HTML ook toegankelijk is voordat JavaScript wordt uitgevoerd.

## Sectiescheidingen

Elk sectieblok heeft een **Onderkant scheiding**-instelling in het stijlpaneel van de inspector. Het voegt een SVG-vorm toe aan de onderrand van de sectie die overlapt met de volgende sectie, voor een organische visuele overgang in plaats van een harde knip. De scheiding gebruikt de achtergrondkleur van de huidige sectie, dus het werkt het best tussen aangrenzende secties met verschillende egale achtergronden.

### Scheidingstypes

| Type | Effect |
|---|---|
| **Golf** | Een vloeiende S-curve langs de onderrand. |
| **Boog** | Een holle welving: de volgende sectie komt omhoog in het midden. |
| **Schuin** | Een diagonaal die van links naar rechts omhoog loopt. |
| **Geen** | Geen scheiding. Secties sluiten aan op een rechte horizontale rand (standaard). |

### Zo werkt het

- De SVG-scheiding bevindt zich volledig onder de sectie, in de ruimte van de volgende sectie. Het overlapt de inhoud van de huidige sectie niet.
- Het gevulde deel van het pad tekent de achtergrond van de huidige sectie naar beneden toe. Het transparante gedeelte onder de vorm laat de volgende sectie doorschijnen.
- De scheiding volgt automatisch de achtergrondkleur van de sectie, inclusief aangepaste hex-waarden en CSS-variabele-tokens.
- Scheidingen zijn decoratief (`aria-hidden="true"`) en beïnvloeden toetsenbord- of schermlezernavigatie niet.

## Je site vormgeven

Onder **Hele site** in de editor bepaal je de look-and-feel van je hele site. Elk onderdeel heeft een eigen knop in de rail:

- **Kleuren**: Bovenaan kies je de tekstgrootte voor je bezoekers (**Normaal**, **Groot** of **Extra groot**). Daaronder staan de **Kleurthema's**: kant-en-klare kleurenschema's (onder meer Editorial, Studio, Tech, Atelier, Bold, Calm, Mono en Vivid) die je in één klik toepast. Je lettertypes, blokstijlen, teksten, foto's, logo en knoppen blijven dan staan; kies **Ook letters en vormen overnemen** als je ook de lettertypes en vormen van het thema wilt. Daarna stel je zes kleuren los in onder gewone namen: **Hoofdkleur**, **Tweede kleur**, **Pagina-achtergrond**, **Blokken en kaarten**, **Tekst** en **Kleine tekst**. Een leesbaarheidscheck waarschuwt als een combinatie te weinig contrast heeft.
- **Donkere kleuren** (onderaan Kleuren): Vier opties: **Uit** (de site blijft licht), **Altijd donker** (je hele site is donker, voor iedere bezoeker), **Knop in menubalk** (bezoekers zien een zon/maan-knop in de menubalk en kunnen wisselen) en **Volgt het toestel** (de site volgt de instelling van het apparaat van de bezoeker). Staat een donkere versie aan, dan kies je een kant-en-klare donkere set of stel je de donkere kleuren zelf in; een leeg vakje krijgt dezelfde kleur als bij licht, en een hoofd- of tweede kleur die op de donkere pagina zou verdwijnen (zwart, navy) krijgt automatisch een lichtere nachtversie. Bovenaan Kleuren staat ook **Liever een donkere site?**, met **Bekijk donkere ontwerpen** (springt naar de donkere ontwerpen in de galerij) en **Maak mijn site donker**. Kies je terwijl je site op Altijd donker staat een sitepakket, dan vraagt de site eerst bevestiging, want het pakket zet Altijd donker uit zodat het resultaat eruitziet als in het voorbeeld.
- **Merk**: Je logo voor een lichte en (optioneel) een donkere achtergrond, je favicon en de knop **Opnieuw opzetten** voor de wizard. Als je geen favicon instelt, gebruikt de site je lichte logo, en daarna je bedrijfsprofielfoto.
- **Letters**: Kies kop- en tekstlettertypes uit de ingebouwde lettertypebibliotheek (onder meer Inter, Geist, DM Sans, Fraunces, Lora, Space Grotesk en DM Serif Display), of een kant-en-klare lettercombinatie. Alle lettertypes worden vanaf MyCompanyDesk zelf geserveerd, niet van Google Fonts of een andere externe CDN. Dezelfde fontbestanden worden gebruikt in de editor en op je gepubliceerde site, dus de tekst ziet er overal identiek uit en het IP-adres van bezoekers gaat niet naar een derde partij.
- **Knoppen**: Hoekradius, de standaard knopstijl, de stijl van opsommingstekens, de kopstijl (grootte, hoofdletters, letterafstand en dikte van koppen), kleurverloop op knoppen, en de kaartstijl. De kaartstijl bepaalt hoe kaarten voor diensten, reviews en tarieven eruitzien: **Vlak (geen rand)**, **Met rand** (standaard), **Met schaduw**, **Zwevend (sterke schaduw)**, **Brut (harde rand, blokschaduw)**, **Lijn (alleen contour)** of **Glas (mooist op een foto)**. Glas komt het best tot zijn recht over een foto, verloop of decoratieve band; op een effen achtergrond valt hij terug op een zacht getinte kaart.
- **Menubalk**: De indeling, vorm en achtergrond van de menubalk, de knopstijl erin, de logogrootte, de menulinks en hun effect, en of de menubalk verdwijnt bij omlaag scrollen. Hier staan ook de inhoud van de menubalk (logo of merknaam, de knop rechtsboven, telefoonnummer en WhatsApp-nummer); zie [Navigatie](#navigatie).
- **Ruimte**: Dichtheid (**Compact**, **Ruim**, **Royaal**), maximale paginabreedte, ruimte boven en onder blokken, kleurwisseling tussen blokken, structuur op de achtergrond en de kleurlook van je foto's.
- **Animatie**: Hoe blokken sitebreed verschijnen terwijl bezoekers scrollen (**Geen**, **Subtiel**, **Zacht**, **Zijwaarts**, **Onthullen** of **Speels**), en **Minder beweging voor wie dat instelt** voor bezoekers die in hun systeem minder animaties vragen.
- **Elementen**: Onderdelen die op iedere pagina verschijnen: de **Leesbalk** (een dunne voortgangsbalk bovenaan of onderaan terwijl bezoekers scrollen), een **Aankondigingsbalk**, de **Zwevende contactknop** (WhatsApp, telefoon of e-mail) en een **Cookiemelding**.
- **Eigen CSS**: Schrijf je eigen CSS die in de site wordt geïnjecteerd. Handig voor fijnafstemming of het overschrijven van standaardwaarden. Deze knop staat onderaan de rail, apart van de rest, omdat een fout erin de hele site raakt. Hier staan ook de **Analytics-snippets** (Plausible Analytics en een preconnect voor lettertypes); andere meetdiensten zoals Umami, Matomo of Google Analytics koppel je op het tabblad **Koppelingen** van Website.

### Logo importeren

Als je al een logo op je website hebt staan, kun je dat direct in MyCompanyDesk importeren. Onder **Hele site** › **Merk** staat **Heb je al een website? Haal je logo daarvandaan**: voer de URL in van de pagina waar je logo op staat. MyCompanyDesk haalt de pagina op, selecteert het beste beschikbare logo en maakt zowel een lichte als een donkere versie voor je site. Na het importeren kun je beide versies nog steeds apart vervangen.

Wijzigingen onder **Hele site** worden automatisch opgeslagen en gelden voor alle pagina's.

## Publiceren

De bovenbalk toont een stippeltje zolang er ongepubliceerde wijzigingen wachten. Bij publiceren worden alleen pagina's op Live meegenomen in de snapshot. Concept-pagina's blijven onzichtbaar op de openbare site, ook na publicatie.

Totdat je publiceert, geeft je openbare URL een `noindex` robots-tag mee. Zo blijft het werkruimte-subdomein buiten zoekmachines terwijl je nog aan het bouwen bent; het subdomein zelf komt pas bij je eerste publicatie in beeld.

Wanneer je klaar bent:

1. Klik op **Publiceer** in de bovenbalk.
2. Je site wordt gepubliceerd naar de openbare URL (je eigen domein, je adres op `mycompanydesk.site` of het terugvaladres in de app).

Ongepubliceerde wijzigingen worden per pagina en per token bijgehouden. De publiceerknop is uitgeschakeld als er niets te publiceren is. Een pagina wisselen tussen Live en Concept wordt meteen opgeslagen en telt als ongepubliceerde wijziging, dus de Publiceerknop licht op zodra je wisselt.

Van welke ingang je ook publiceert, overzicht, editorwerkbalk of het eerste-opstartscherm: zodra er iets opvalt krijg je dezelfde publicatiewaarschuwing, die elk punt met zijn eigen actie noemt:

- **Startteksten** die op je pagina's nog niet zijn aangepast.
- **FAQ-blokken** met vragen zonder antwoord, met een link die het blok opent om ze te schrijven.
- **Tariefkaarten zonder prijs.** Een Tarieven-blok gaat live met kaarten zonder bedrag, dus de waarschuwing noemt ze en linkt naar het blok om de prijzen in te vullen.
- **Velden die op je juridische pagina's ontbreken**, met een link die je bedrijfsgegevens invult. Heb je (nog) geen KVK-nummer, dan kun je gewoon publiceren: die regel laten we dan weg, en je voegt hem later op dezelfde plek toe. In de dialoog zelf staat ook een informatieregel over het KVK-nummer, zodat de reden dat het op je juridische pagina's staat, genoemd wordt op het moment dat je publiceert.
- **Een contactblok waar niemand je kan bereiken** (geen telefoon en geen e-mailadres op het blok).
- **Je inlog-e-mailadres.** De site houdt het adres waarmee je inlogt van je pagina's af tot jij zegt dat het mag. De waarschuwing biedt aan het adres te tonen, of een link om een ander publiek e-mailadres in te stellen; ook weglaten mag. Een bewuste "geen e-mail op mijn site" is een mededeling, geen waarschuwing, en houdt publiceren nooit tegen. Waar het verborgen adres had gestaan, blijft je telefoonnummer en de rest van de zin staan: de formulering eromheen wordt netjes opgeruimd in plaats van geprint.

Alleen ter informatie: laat de sitebouwer voorbeeldfoto's (stockfoto's) staan die je nog niet vervangen hebt, dan draagt de dialoog één regel met de eerste ervan, met een knop die het blok opent zodat je er een eigen foto in zet. Deze regel opent de waarschuwing nooit zelf; hij staat ook bij de publiceerknop en op het Overzicht.

Is alles wat nog over blijft informatie, dan schakelt de dialoog over op een neutrale Klaar om te publiceren die alleen nog om bevestiging vraagt.

De allereerste publicatie eindigt met **Je website staat online**: **Bekijk je site** en **Deel je link**, met een kopieerknop voor het adres dat je aan klanten uitdeelt.

Een snelle dubbelklik kan niet per ongeluk publiceren: de bevestigingsknop in de publicatiewaarschuwing negeert klikken even na het openen, en een tweede klik vlak na de eerste kan geen dubbele publicatie starten of de waarschuwing overslaan.

## Navigatie

De navigatie-editor (**Hele site** › **Navigatie**) laat je de menu-items van je site indelen:

- Sleep pagina's om de navigatie op volgorde te zetten.
- Maak dropdown-groepen om pagina's onder een bovenliggend label te nesten.
- Voeg externe links toe die buiten je site verwijzen.
- Het logo in de header is klikbaar en linkt altijd terug naar de homepage.
- De homepage staat altijd vooraan en is vergrendeld.

De inhoud van de menubalk zelf stel je in bij **Hele site** › **Menubalk**:

- **Logo** en **Merknaam**: Kies wat de menubalk toont (**Automatisch**, **Alleen merknaam** of **Logo + merknaam**). Automatisch toont je logo zodra je er een uploadt, en anders je merknaam.
- **Knop**: De tekst en de bestemming van de knop rechts in de menubalk, en de **Knopstijl**. Tekst en bestemming moeten ingevuld zijn om de knop zichtbaar te maken.
- **Telefoonnummer (tel: link)**: Een klikbaar telefoonnummer naast de knop op desktop en in het mobiele menu. Laat leeg om het te verbergen.
- **Bel-label (mobiel)**: De tekst naast het telefoonicoon op mobiel (standaard "Bel direct" als je het leeg laat).
- **Belknop onderaan op mobiel**: Een vaste belknop onderaan het scherm op mobiele apparaten, zodat bezoekers je met één tik bellen, waar ze ook zijn op de pagina. De belbalk kan naast de belknop ook WhatsApp tonen: hij leent het WhatsApp-nummer dat de rest van je site al draagt (een WhatsApp-knop, een contactblok met WhatsApp of de zwevende contactknop), en een **WhatsApp-nummer** dat je hier zelf invult gaat voor. Op mobiel laat de zwevende contactknop WhatsApp weg zodra de balk hem toont, zodat WhatsApp nooit dubbel op een scherm staat.
- **Menubalk blijft in beeld bij scrollen**: Standaard aan. De menubalk blijft zichtbaar terwijl de bezoeker naar beneden scrollt.

Deze instellingen gelden voor elke pagina van je site en worden automatisch opgeslagen. De vormgeving van de menubalk (indeling, achtergrond, knopstijl) staat op dezelfde plek, zie [Je site vormgeven](#je-site-vormgeven).

## Footerlinks

De footer-editor vind je onder **Hele site** › **Footer**. Die bouwt de onderkant van elke gepubliceerde pagina uit twee bronnen: automatische blokken die uit je pagina's en bedrijfsgegevens worden samengesteld, en handmatige linkkolommen die je zelf toevoegt.

### Automatische footerblokken

Drie schakelaars bepalen inhoud die voor je wordt gegenereerd:

- **Paginalinks automatisch tonen** ("Pagina's"): een sitemap-kolom met een link naar elke live, indexeerbare pagina op je site. Standaard aan voor nieuwe sites, omdat het zoekmachines helpt elke pagina te vinden en verhindert dat pagina's geïsoleerd raken. De homepage, blogposts, conceptpagina's, met een wachtwoord beveiligde pagina's en pagina's die als "noindex" zijn gemarkeerd of uit de sitemap zijn verborgen, worden automatisch uitgesloten. Verberg een losse pagina uit deze kolom door bij de SEO-instellingen van die pagina **Tonen in sitemap** uit te zetten.
- **Contactgegevens tonen** ("Contact"): je openbare e-mailadres, telefoonnummer en adres uit je bedrijfsgegevens.
- **Social links tonen** ("Social"): de sociale links die je bij je bedrijfsgegevens hebt opgeslagen. Voor Instagram, Facebook en LinkedIn kun je het adres direct in het footerpaneel invullen, met een bevestiging voordat je bedrijfsgegevens worden bijgewerkt.

Deze blokken verschijnen in de eigen footerstijl van je site, onder de handmatige kolommen. Als je ontwerp al contact- of sociale gegevens toont, wordt de bijbehorende schakelaar verborgen zodat niets dubbel opvalt.

### Handmatige linkkolommen

Onder de automatische schakelaars kun je tot zes eigen footerkolommen toevoegen. Elke kolom heeft een titel en een lijst links. Gebruik ze bijvoorbeeld voor juridische pagina's, productcategorieën of externe bronnen. Links mogen interne paden, externe HTTPS-URL's, e-mail (`mailto:`) of telefoon (`tel:`) bevatten.

## Bedrijfsgegevenstokens

Tekstvelden in de sitebouwer kunnen merge-tokens bevatten die live bedrijfsgegevens uit je werkruimte halen. Bij het renderen van de gepubliceerde site wordt elk token vervangen door de huidige waarde uit **Bedrijfsgegevens** (`/settings/bedrijfsgegevens`). Zo hoef je je bedrijfsnaam, adres of contactgegevens maar op één plek te beheren.

Beschikbare tokens:

::: v-pre
| Token | Toont |
|---|---|
| `{{bedrijf.naam}}` | Bedrijfsnaam |
| `{{bedrijf.adres}}` | Volledig adres, samengesteld uit straat, postcode en plaats |
| `{{bedrijf.kvk}}` | KVK-nummer |
| `{{bedrijf.btw}}` | Btw-id |
| `{{bedrijf.email}}` | Publiek e-mailadres |
:::

Zo gebruik je ze:

- Klik in elk tekstveld op het chip dat bij de gewenste waarde hoort. Het token wordt op de cursorpositie ingevoegd.
- Je kunt een token ook met de hand typen. Alleen de vijf tokens hierboven worden ondersteund.
- Is een waarde in je bedrijfsgegevens leeg, dan toont de gepubliceerde site een hint tussen rechte haken, bijvoorbeeld `[bedrijfsnaam]`, zodat je ziet wat nog ontbreekt. Het e-mail-token draagt je publieke adres: het adres waarmee je inlogt wordt pas publiek zodra je het op je website bevestigt (de publicatiedialoog vraagt ernaar); tot die tijd wordt tekst die op het token leunde op de gepubliceerde site netjes opgeruimd, met je telefoonnummer blijven staan, en ziet geen bezoeker het token zelf.
- Tokens worden opgelost ná de publicatiesnapshot, dus latere wijzigingen in je bedrijfsgegevens verschijnen direct op de live site zonder opnieuw te publiceren.
- Wettelijke pagina's die door het platform worden aangemaakt, gebruiken deze tokens automatisch. Bewerk de tekst eromheen gerust, de koppeling blijft intact.

## Openbare URL

Je website wordt getoond op de best beschikbare URL:

1. Je eigen domein (bijv. `https://acme.nl`) wanneer geverifieerd en ingeschakeld (Office)
2. Je gratis adres op `mycompanydesk.site` (bijv. `https://acme.mycompanydesk.site`), dat bij je eerste publicatie op basis van je bedrijfsnaam wordt aangemaakt
3. Het terugvaladres in de app (`/sites/{slug}`), zolang er nog geen gratis adres is

Zie [Domeinen, website en inbox](/features/domains-website-inbox) voor domeininstelling en -verificatie.

## Contactformulier

Het contactformulierblok heeft een live verzendfunctionaliteit. Wanneer een bezoeker de velden invult die jij hebt ingesteld (naam, e-mail, telefoon, bedrijf, bericht) en op verzenden klikt, maakt het platform een aanvraag aan en stuurt het een melding naar je werkruimte. Het formulier toont een succesbanner bij afronding en een foutmelding als er iets misgaat. Alle invoervelden worden tijdens het verzenden uitgeschakeld om dubbel verzenden te voorkomen.

In de inspecteur kies je bij **Wat vraagt de klant?** de soort aanvraag van het blok: **Offerte** (een aanvraag voor werk), **Bericht** (een gewone vraag of kennismaking), **Afspraak** (verzoek om een moment in je agenda), of **Terugbelverzoek** (naam en telefoon, geen e-mail nodig). **Volg je bedrijfsinstelling** volgt de bedrijfsbrede standaard die je onder **Website › Koppelingen** zet. De soort bepaalt hoe inzendingen in je inbox, meldingen en mail heten. De bedrijfsbrede standaard bepaalt ook hoe het tabblad met aanvragen onder **Offertes** heet, bijvoorbeeld **Offerteaanvragen** of **Terugbelverzoeken**. Een terugbelformulier wisselt het verplichte e-mailveld om voor een verplicht telefoonveld.

Op offerte- en berichtformulieren laat **Bezoekers kunnen foto's meesturen** een bezoeker tot 3 foto's (10 MB elk, JPEG, PNG of WebP) bij de aanvraag voegen. Zie [Offerteaanvragen](/features/quotes#offerteaanvragen) voor wat er aan jouw kant binnenkomt.

Wat gebeurt er bij verzenden:

1. Alleen de velden die het blok daadwerkelijk toont worden meegestuurd, dus een verborgen naamveld geeft geen fout.
2. Het platform maakt een aanvraag aan (met de soort op de inzending) onder het bedrijf dat aan de site-slug is gekoppeld.
3. Je ontvangt een werkruimtemelding.
4. De aanvraag verschijnt onder **Offertes**, op het tabblad met je aanvragen.
5. De bezoeker ziet een aanpasbare succesmelding.

Inzendingen via het contactformulier worden alleen geaccepteerd als de site is gepubliceerd: inzendingen aan een concept of ongepubliceerde werkruimte worden geweigerd. Ze zijn beperkt tot 5 per minuut per IP-adres en bovendien afgedekt door een per-bedrijf misbruikplafond, zodat één drukke bezoeker je meldingsbudget niet kan uitputten. Een Cloudflare Turnstile-widget verschijnt ook voordat de bezoeker verzendt, mits geconfigureerd op je werkruimte, en blokkeert geautomatiseerde botinzendingen zonder echte bezoekers te vertragen.

## Nieuwsbrief aanmelden

Het nieuwsbriefblok vangt e-mailaanmeldingen van je gepubliceerde site op. Aanmelden werkt met een dubbele bevestiging (double opt-in): na het verzenden ontvangt de bezoeker een bevestigingsmail en moet op de link klikken om het abonnement te activeren. Onderdrukte adressen en al actieve abonnees worden vanuit het formulier op dezelfde manier behandeld als nieuwe aanmeldingen (geen datalek).

Wat gebeurt er bij verzenden:

1. Het platform slaat de aanmelding op, met je website als bron.
2. Als het adres niet al actief is en niet onderdrukt, wordt een double opt-in e-mail verstuurd.
3. De bezoeker ziet hoe dan ook een succesbanner, zodat de abonnementsstatus privé blijft.
4. Na bevestiging verschijnt de abonnee in het nieuwsbriefpubliek van die werkruimte.

Nieuwsbriefinzendingen delen dezelfde snelheidslimiet als het contactformulier: 5 per minuut per IP-adres. De Turnstile-botbescherming is ook actief op nieuwsbriefformulieren wanneer geconfigureerd.

## Juridische pagina's

De sitebouwer voorziet elke nieuwe werkruimte van twee standaard juridische pagina's: **Privacybeleid** (`/privacy`) en **Algemene voorwaarden** (`/algemene-voorwaarden`). De inhoud gebruikt plaatsaanduidingsmarkeringen voor bedrijfsgegevens. Wanneer de pagina wordt gerenderd voor bezoekers, worden die markeringen vervangen door de waarden uit je **Bedrijfsinstellingen**: bedrijfsnaam, adres, postcode, plaats, land, registratienummer, btw-nummer en publieke e-mail.

De tekst van beide pagina's is naar je vak gekozen, voorwaarden en privacy. De voorwaardenpagina kent twee varianten. Bedrijven die rechtstreeks aan consumenten verkopen, afspraakvakken en winkel- of horecavakken zoals een bakker, krijgen consumentgerichte voorwaarden: ze behandelen bestellingen en afspraken, het wettelijke herroepingsrecht voor consumenten met de wettelijke uitzondering voor op maat gemaakte of snel bedervende producten, betaling, het annuleren van afspraken en lessen, aansprakelijkheid en klachten, plus een algemene zin over allergieën. Op offertes gerichte vakken en B2B-diensten houden de bestaande vakman-voorwaarden, die over offertes, meerwerk en oplevering gaan. Beide varianten gebruiken dezelfde plaatsaanduidingen.

Je kunt de juridische pagina's net als elke andere pagina bewerken in de editor. De editor behoudt de plaatsaanduidingsankers in de inhoud, zodat ook openen en opslaan zonder wijzigingen ervoor zorgt dat toekomstige updates van je bedrijfsgegevens automatisch doorstromen.

Verbeterd MyCompanyDesk de standaardteksten, dan worden ook bestaande sites bijgewerkt. Zodra je Website opent, controleert het platform of je privacy- en voorwaardenpagina's nog, letter voor letter, een van de standaardteksten zijn die hij voor jouw vak schrijft. Een pagina die je zelf hebt aangepast, wordt nooit aangepakt. Staat er nog de standaardtekst, dan herschrijft hij haar naar de woorden die bij je vak horen: was die pagina live, dan gaat alleen die pagina opnieuw het publicatie-snapshot in, je andere concepten blijven onaangeroerd en de publiceerbalk meldt dit niet als ongepubliceerde wijziging; staat een pagina op Concept, dan blijft die concept en komt de nieuwe tekst mee bij je volgende publicatie.

De juridische pagina's worden gerenderd op het moment van publiceren, net als de rest van je site. Ze delen dezelfde Live/Concept-status en dezelfde zichtbaarheidsregels op basis van je abonnement.

## Aanvragen beheren

Zie [Offertes - Offerteaanvragen](/features/quotes#offerteaanvragen) voor details over het beheren van binnenkomende aanvragen.

## Abonnementsvereiste

De openbare website (bedrijfspagina en sitebouwer) is beschikbaar op elk abonnement en blijft online. De MyCompanyDesk-badge is adresgebaseerd: hij verschijnt op een werkruimte-subdomein en verdwijnt op een eigen domein (Office).

- **Desk**: de site is zichtbaar op je adres onder `mycompanydesk.site`, met een kleine MyCompanyDesk-badge.
- **Office**: de site is altijd zichtbaar; op een eigen domein staat geen badge. Een eigen domein koppelen kan alleen op Office (maximaal 5 eigen domeinen).
- **Ontwerp en stijl**: de pakketten, kleurthema's en alle stijlinstellingen zijn er op elk abonnement.
- **Onzekere toestand**: als het systeem niet kan bepalen welk abonnement je hebt, blijft de site online om te voorkomen dat een site onterecht offline gaat.

Deze poort geldt voor alle publieke paden: de bedrijfspagina, de servicedetailroute en de pagina's van de sitebouwer. De controle gebeurt bij elk verzoek, voor elke cachinglaag, zodat het klopt ook als je abonnement midden in een cacheperiode verandert.

## Gerelateerd

- [Domeinen, website en inbox](/features/domains-website-inbox): Eigen domein instellen, verificatie, SSL en e-mailinbox.
- [Bedrijfsinstellingen](/settings/company): Waar je bedrijfsgegevens, huisstijl en adres staan.
- [Offertes](/features/quotes): Beheren van offerteaanvragen die via je website binnenkomen.
- [Abonnement & betalingen](/settings/billing): Wat er in Desk en Office zit.
