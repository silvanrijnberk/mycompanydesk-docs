---
title: Sitebouwer
---

# Sitebouwer

Bouw je zakelijke website met een drag-and-drop-editor. Maak meerdere pagina's, stel ze samen met secties en blokken, pas kleuren en lettertypes aan, en publiceer wanneer je klaar bent.

## Overzicht

De sitebouwer vervangt het oude bedrijfsprofiel van één pagina. Elke nieuwe werkruimte begint met een standaardsite van 4 pagina's (Home, Diensten, Over ons, Contact), zodat je vanaf dag één een echte multi-page basis hebt. De editor biedt je:

- **Meerdere pagina's**: Maak zoveel pagina's als je nodig hebt, elk met een eigen pad en secties. De vier standaardpagina's zijn klaar om te bewerken, te verwijderen of aan te vullen.
- **Domeinwisselaar**: Wanneer je werkruimte meerdere eigen domeinen heeft (Pro-abonnement), kun je via een dropdown in de bovenbalk wisselen tussen het bewerken van de hoofdsite en een per-domein-variant. Elk domein krijgt zijn eigen pagina's, navigatie, ontwerptokens en publicatiesnapshot.
- **Sectieblokken**: Voeg hero-, tekst-, galerij-, spotlight-, diensten-, team-, testimonial-, contactformulier- en aangepaste HTML-secties toe aan elke pagina. Sla secties op als herbruikbare blokken en bouw je eigen bibliotheek op.
- **Ontwerptokens**: Stel merkkleuren, lettertypes, witruimte, hoekradius, bewegingsstijl, aangepaste CSS en een site-favicon in. Wijzigingen gelden voor de hele site.
- **Navigatie-editor**: Sleep en zet headerlinks op volgorde, met dropdown-groepen, externe links en inline navbar-styling (merknaam, CTA-knop, telefoon, belknop, sticky).
- **Publicatiesnapshots**: Werk in concept, bekijk je wijzigingen en publiceer daarna. Ongepubliceerde wijzigingen zie je in de bovenbalk.
- **Responsieve preview**: Schakel tussen desktop-, tablet- en mobiele weergave tijdens het bewerken.

De sitebouwer vind je onder **Bedrijf > Je website** (`/website`).

## AI-snelstart

Als je voor het eerst de sitebouwer opent op een nieuwe werkruimte, zie je een snelstartbanner bovenaan. Die leest je KVK-gegevens (bedrijfsnaam, branche, plaats) en stelt een eerste tagline, een over-ons-tekst en drie diensten voor. Je kunt alles ter plekke aanpassen voordat je het overneemt, opnieuw genereren als de eerste suggestie niet helemaal klopt, of de banner wegklikken. Geen wizardvragen, geen gedoe vooraf.

Wat de banner voor je doet:

- **Genereren**: Klik op **Genereer voorstel** om de AI je KVK-data te laten lezen en kopij voor te stellen.
- **Inline bewerken**: Pas de tagline, over-tekst en dienstnamen en omschrijvingen direct in de banner aan.
- **Overnemen**: Klik op **Overnemen** om de goedgekeurde kopij naar je werkruimte te schrijven. Je bedrijfsomschrijving, hero-tagline en diensten worden in een keer bijgewerkt.
- **Opnieuw genereren**: Niet tevreden? Klik op **Opnieuw genereren** voor een nieuwe set suggesties.
- **Wegklikken**: De banner onthoudt je keuze lokaal. Hij blijft verborgen totdat je je werkruimtegegevens opnieuw instelt.

De banner gebruikt het Gemini AI-model (lite-variant) als dat beschikbaar is in je werkruimte. Als AI niet is geconfigureerd, werkt de banner alsnog met een verstandige terugval op basis van je branchecode en bedrijfsnaam.

## Tabs

De sitebouwer heeft vijf tabs (zes als Stijl is uitgeklapt):

- **Editor**: Stel pagina's samen door secties toe te voegen en te rangschikken. Klik op een sectie om de inhoud, layout, stijl of animatie te bewerken. Sleep secties om ze te verplaatsen, dupliceren of verwijderen.
- **Pagina's**: Beheer je pagina's: maak nieuwe aan vanuit sjablonen, stel paden en zichtbaarheid in, en bekijk welke pagina's live, concept of ingepland zijn. Klik op een pagina om deze in de editor te openen. De vergrendelde homepage kan niet worden verwijderd. Elke pagina toont een Live/Concept-badge met snelle wisselknoppen: klik op het wereldbol-icoontje om een conceptpagina live te zetten, of op het oog-dicht-icoontje om een live pagina terug naar concept te zetten.
- **Stijl**: Pas je sitebrede ontwerptokens aan. Kies een klik-en-klaar-preset (Editorial) en stem daarna kleuren (merk, accent, papier, inkt), lettertypes (kop, body, mono uit de lettertypebibliotheek), navbar (layout, achtergrond, knopstijl), schaal (radius, dichtheid, maximale breedte, sectie-afstand), beweging, knopstijlen en aangepaste CSS fijn af. Je kunt ook head-snippets toevoegen voor analytics (Plausible, Umami, Matomo) of lettertype-preconnects. Klik op de Stijl-header om de tab uit of in te klappen.
- **Domein & SEO**: Configureer je eigen domein en SEO-instellingen. De inhoud hier is gekoppeld aan het domein dat in de domeinwisselaar in de bovenbalk is geselecteerd. Wanneer de hoofdsite (weergegeven als je werkruimtenaam) is geselecteerd, verschijnt er geen domeinspecifiek paneel. Zie [Domeinen, website en inbox](/nl/features/domains-website-inbox) voor het volledige domeinbeheer.
- **Koppelingen**: Verbind diensten van derden met je website.

## Pagina's aanmaken

1. Ga naar de **Pagina's**-tab.
2. Klik op **Nieuwe pagina**.
3. Geef een titel en een pad op (bijv. `/over-ons`).
4. Kies een sjabloon of begin leeg.
5. De pagina opent in de editor, waar je secties kunt toevoegen en uitbouwen.

### Standaardpagina's

Elke nieuwe werkruimte krijgt vier pagina's mee:

| Pagina | Pad | Beschrijving |
|---|---|---|
| Home | `/` | Je hoofdpagina. Kan niet worden verwijderd. |
| Diensten | `/diensten` | Laat zien wat je aanbiedt. Vooraf gevuld met een dienstensectie. |
| Over ons | `/over-ons` | Vertel bezoekers wie je bent. |
| Contact | `/contact` | Contactformulier en gegevens. Gekoppeld vanuit de footer. |

Deze pagina's zijn automatisch verbonden met de navigatie-header en footer. Je kunt ze allemaal bewerken of verwijderen, behalve de Home-pagina die altijd verplicht is. De navigatie past zijn links aan als je pagina's toevoegt of verwijdert.

### Paginastatus: Live vs Concept

Pagina's hebben een status die bepaalt of ze op je gepubliceerde site verschijnen:

- **Live**: De pagina wordt meegenomen in de publicatie. Bezoekers zien hem op je openbare site na publicatie.
- **Concept**: De pagina is nog in bewerking. Hij blijft onzichtbaar voor bezoekers, ook nadat je de site publiceert.

De homepage start standaard als **Live**. Elke andere nieuwe pagina start als **Concept**, zodat die niet in de openbaarheid komt voordat jij er klaar voor bent. Je kunt elke pagina wisselen tussen Live en Concept met de snelle actieknoppen in de Pagina's-tabel. De statuswijziging wordt meteen opgeslagen en zet de Publiceerknop in de bovenbalk aan, zodat de volgende publicatie de wijziging oppikt.

Een site waarvan de homepage op Concept staat, toont niets bij publicatie. Als je de homepage naar Concept hebt gezet, zet je hem terug naar Live en publiceer je om je site te herstellen.

## Pagina's bouwen met secties

In de **Editor**-tab:

- Klik op **Sectie toevoegen** om de beschikbare bloktypes te zien (hero, tekst, galerij, spotlight, diensten, team, testimonials, contactformulier, tarieven, product, aangepaste HTML, en meer).
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
- Naamsvermelding wordt automatisch bijgehouden volgens de API-richtlijnen van Unsplash en getoond op je gepubliceerde site. Zodra je site live staat, verschijnt er een "Foto's: `fotograaf` · Unsplash"-vermelding in de footer van elke pagina die minstens één stockfoto bevat, zodat je altijd aan de richtlijnen voldoet.
- Als Unsplash niet is geconfigureerd op je werkruimte, blijft de Stockfoto-knop verborgen, zodat je nooit een niet-werkende functie ziet.

## Opgeslagen blokken

Sla elke sectie op als herbruikbaar blok en bouw een persoonlijke bibliotheek van voorgestijlde bouwstenen. Opgeslagen blokken verschijnen bovenaan de sectie-toevoeger, zodat je een bewaarde layout op elke pagina kunt plaatsen zonder hem opnieuw op te bouwen.

### Sectie opslaan als blok

1. Klik op het bladwijzer-icoon op een sectierij in de editor.
2. Geef het blok een naam (het sectielabel of -type is alvast ingevuld als suggestie).
3. Het blok wordt opgeslagen in je persoonlijke bibliotheek voor deze werkruimte.

### Opgeslagen blok invoegen

1. Klik op **Sectie toevoegen** op een pagina.
2. Je opgeslagen blokken staan onder **Mijn blokken** bovenaan het paneel.
3. Klik op een blok om het als nieuwe sectie op de huidige pagina te plaatsen.

Het invoegen van een blok kopieert de template naar een nieuwe sectierij. Het bewerken of verwijderen van de ingevoegde sectie heeft geen invloed op het opgeslagen blok in je bibliotheek, en andersom.

### Je bibliotheek beheren

- **Verwijder een blok** uit de bibliotheek door op het x-icoon naast het blok te klikken. Dit verwijdert alleen het opgeslagen sjabloon; secties die al vanuit dat blok zijn ingevoegd blijven staan.
- De **Mijn blokken**-kop is verborgen als je bibliotheek leeg is, zodat een eerste editor geen lege categorie ziet.

### Sectie-layoutvarianten

Hero-, diensten-, tarieven- en testimonialsecties ondersteunen meerdere layoutvarianten. Kies er een uit de **Stijl**-dropdown in het Layout-tabblad van de inspector om te bepalen hoe de sectie eruitziet. De standaardvariant behoudt het vertrouwde uiterlijk, dus secties die je vóór deze functie hebt gebouwd blijven hetzelfde tonen.

#### Hero-varianten

| Variant | Effect |
|---|---|
| **Standaard (split rechts)** | Standaard. Afbeelding rechts, tekst links. Valt terug op gecentreerde tekst als er geen afbeelding is. |
| **Split links** | Spiegel van de standaard: afbeelding links, tekst rechts. Vereist een afbeelding. |
| **Gecentreerd** | Tekst gecentreerd, optionele afbeelding eronder in een breed 16:9-kader. |
| **Banner** | Afbeelding over de volle breedte als achtergrond met een verloopoverlay. Witte tekst op een donkere scherm, extra hoog zodat de afbeelding ruimte krijgt. Vereist een afbeelding. |
| **Minimaal** | Alleen tekst in een smalle kolom. Geen afbeelding. Strak en rustig, geschikt voor documentatie-achtige pagina's. |

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
| **Spotlight (enkele quote)** | Een enkele grote pull-quote in magazine-stijl, gecentreerd met serif-typografie. Extra getuigenissen verschijnen als kleine naambadges onder de hoofdquote. |
| **Lopende band** | Een horizontaal scrollende rij met quote-kaarten. Hoveren pauzeert de animatie; de reduced-motion-voorkeur van het besturingssysteem stopt hem volledig. De track loopt naadloos door met twee kopieën van de itemset. |

### Spotlight

Het spotlight-blok is een rij waarin beeld en tekst elkaar afwisselen. Elke rij toont een afbeelding aan de ene kant en tekst aan de andere: een eyebrow, titel, ondertitel, bullets met vinkjes en een optionele call-to-action-link. In het layout-paneel bepaal je aan welke kant de afbeelding staat.

Een paar dingen om te weten:

- **Beeldzijde**: De layout-variant staat standaard op afbeelding-rechts. Zet hem op afbeelding-links in het layout-paneel om de rij te spiegelen.
- **Optionele onderdelen**: Eyebrow, ondertitel, bullets, CTA en afbeelding zijn allemaal optioneel. Een spotlight met alleen een titel en afbeelding toont nog steeds een strak resultaat.
- **Stapelen**: Zet meerdere spotlight-secties onder elkaar om het klassieke feature-lijstpatroon van de MCD-landingspagina te bouwen.

### Tarieven met koopknoppen

Bij de tarievensectie kun je pakketten of abonnementen laten zien. Elke tier kan optioneel een koopknop krijgen:

- Zet een tier op **purchasable** en geef het **bedrag in centen** op (bijv. 4999 voor EUR 49,99).
- Een **Koop nu**-knop vervangt de statische CTA-link. Bezoekers die erop klikken gaan via de MyCompanyDesk-checkout naar Mollie of Stripe Connect om te betalen.
- Het koopknop-label is standaard "Koop nu" maar kan per tier worden aangepast met het **buyLabel**-veld.
- Tarieven zonder koopknop houden het bestaande CTA-linkgedrag.

Tarievensecties kunnen ook als vergelijkingsmatrix worden getoond. Zet de layoutvariant op **Vergelijkingstabel** in de inspector. De matrix toont elke tier als kolom en alle functies uit alle tiers als rijen, met vinkjes waar een tier de functie heeft. Zo zie je in een oogopslag hoe abonnementen zich tot elkaar verhouden. Zie [Sectie-layoutvarianten](#sectie-layoutvarianten) voor de volledige opties.

### Productblok

Een losstaande eenmalige koopkaart, voor als een volledige tarieventabel meer is dan je nodig hebt:

- Een productnaam, beschrijving, optionele afbeelding, prijs en een koopknop.
- Dezelfde checkout-koppeling als de tarief-koopknoppen, je bezoeker betaalt via Mollie of Stripe Connect.
- Een optionele notitieregel onder de knop voor verzendinformatie, disclaimers of opmerkingen.

Zie [Verkopen](/nl/features/domains-website-inbox#verkopen) voor het bijhouden van betalingen en bestellingen.

## Sectie-animaties

Elk sectieblok heeft een **Animatie**-paneel in de inspector. Hiermee voeg je beweging toe die afspeelt wanneer de sectie in beeld komt, bij het laden van de pagina, of bij hover.

### Animatetypes

| Type | Effect |
|---|---|
| **Fade up** | Sectie verschijnt terwijl deze 1rem omhoog schuift. |
| **Fade in** | Sectie verschijnt vanuit transparant. |
| **Slide right** | Sectie verschijnt terwijl deze 2rem naar rechts beweegt. |
| **Reveal** | Sectie onthult van rechts naar links via een clipmasker. |
| **Stagger** | Onderliggende elementen verschijnen na elkaar in stappen van 80ms, in plaats van dat de sectie zelf beweegt. |

### Triggers

Hoe de animatie start:

- **In-view** (standaard): De animatie wordt afgespeeld wanneer de sectie in de viewport verschijnt. Maakt gebruik van de IntersectionObserver van de browser. Eenmaal geanimeerd blijft de sectie zichtbaar.
- **Load**: De animatie start direct zodra de pagina is geladen.
- **Hover**: De animatie start bij mouseenter en keert terug bij mouseleave.

### Instellingen

- **Duration**: Hoe lang de animatie duurt, in milliseconden. Standaard 700ms.
- **Delay**: Wachttijd voordat de animatie start, in milliseconden. Standaard 0ms.
- **Easing**: De versnellingscurve. Keuze uit **ease-out** (standaard), **linear** en **spring**.
- **Stagger children**: Wanneer ingeschakeld blijft de sectie zelf in rust en bewegen de directe onderliggende elementen na elkaar. Deze optie werkt bovenop elk animatietype (fade-up + stagger children, fade-in + stagger children, etc.). De animatie van de sectie zelf wordt onderdrukt zodat alleen de kinderen bewegen.

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

In de **Stijl**-tab bepaal je de look-and-feel van je hele site:

- **Presets**: Klik-en-klaar-startpunten die kleuren, lettertypes en witruimte in een keer instellen. Er zijn acht presets: **Editorial** (navy en goud, serif-koppen), **Studio** (warme roomkleur met terracotta), **Tech** (strak slate met elektrisch blauw), **Atelier** (bone-wit met diepgroen), **Bold** (hoog contrast zwart met fel accent), **Calm** (saliegroen en zacht wit), **Mono** (architectonisch minimalisme, geen accentkleur) en **Vivid** (kobalt en koraal op koel wit). Een preset toepassen voegt de tokens samen met je werkruimte, waarbij je logo, custom CSS en head-snippets behouden blijven.
- **Kleuren**: Kies merk-, accent-, papier-, inkt-, oppervlakte- en gedempte kleuren. Het palet wordt toegepast via CSS custom properties.
- **Donkere modus**: Bepaal hoe je site omgaat met donkere weergave. Drie opties: **Uit** (geen donkere modus, de site blijft in het lichte palet), **Knop** (bezoekers zien een zon/maan-knop in de navigatiebalk en kunnen wisselen, hun keuze wordt lokaal opgeslagen), of **Volg systeem** (de site volgt automatisch de OS-voorkeur van de bezoeker via een live media-query). Wanneer donkere modus aan staat, verschijnt er een donker palet waarin je per kleur een nachtversie kunt instellen. Laat je het donkere palet leeg, dan past de site een automatische inversie toe waarbij je merk- en accentkleuren behouden blijven.
- **Typografie**: Kies kop-, body- en mono-lettertypes uit de ingebouwde lettertypebibliotheek (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Schaal**: Stel hoekradius, dichtheid (compact, ruim, royaal), maximale inhoudsbreedte en verticale sectie-afstand in.
- **Beweging**: Schakel verminderde beweging in of kies een bewegingsstijl (Uit, Subtiele fade, Slide-up).
- **Knoppen**: Pas knopradius, padding en hover-effecten aan.
- **Navbar**: Stel de layout in (standaard, gecentreerd, split), de achtergrondstijl (vast, transparant met blur, volledig transparant) en hoe de CTA-knop eruitziet (vol, lijn, alleen tekst). De navbar-instellingen gelden voor elke pagina.
- **Telefoon & belbalk**: Voeg een klikbaar telefoonnummer toe aan je navigatiebalk. Het nummer verschijnt naast de CTA-knop op desktop en in de mobiele navigatielade. Zet de **Mobiele belbalk**-toggle aan om een vaste "tik om te bellen"-knop onderaan het scherm te plaatsen op mobiele apparaten, zodat bezoekers je met één tik kunnen bereiken, waar ze ook zijn op de pagina. Het telefoonlabel is standaard "Bel direct" als je het leeg laat.
- **Aangepaste CSS**: Schrijf je eigen CSS die in de site wordt geïnjecteerd. Handig voor fijnafstemming of het overschrijven van standaardwaarden.
- **Favicon**: Upload een favicon voor je site. Deze verschijnt in browsertabs en bladwijzers. Als je geen favicon instelt, gebruikt de site je lichte logo, en daarna je bedrijfsprofielfoto.
- **Head-snippets**: Voeg analytics-scripts toe (Plausible, Umami, Matomo) of lettertype-preconnects via de snippetkiezer.

Wijzigingen in de Stijl-tab worden automatisch opgeslagen bij bewerken en gelden voor alle pagina's.

## Publiceren

De bovenbalk toont hoeveel ongepubliceerde wijzigingen er zijn. Bij publiceren worden alleen pagina's op Live meegenomen in de snapshot. Concept-pagina's blijven onzichtbaar op de openbare site, ook na publicatie.

Wanneer je klaar bent:

1. Klik op **Publiceer** in de bovenbalk.
2. Je site wordt gepubliceerd naar de openbare URL (je eigen domein, werkruimte-subdomein of de terugvalportalroute).

Ongepubliceerde wijzigingen worden per pagina en per token bijgehouden. De publiceerknop is uitgeschakeld als er niets te publiceren is. Een pagina wisselen tussen Live en Concept wordt meteen opgeslagen en telt als ongepubliceerde wijziging, dus de Publiceerknop licht op zodra je wisselt.

## Navigatie

De navigatie-editor laat je de headerlinks van je site indelen en bepaalt hoe de navigatiebalk er op je hele site uitziet:

- Sleep pagina's om de navigatie op volgorde te zetten.
- Maak dropdown-groepen om pagina's onder een bovenliggend label te nesten.
- Voeg externe links toe die buiten je site verwijzen.
- Het logo in de header is klikbaar en linkt altijd terug naar de homepage.
- De homepage staat altijd vooraan en is vergrendeld.

Boven het hoofdmenu geeft een **Navbar**-paneel je direct toegang tot de headerstyling die voorheen alleen op het Stijl-tabblad te vinden was. Je kunt instellen:

- **Merknaam**: De tekst die in de header wordt getoond wanneer er geen logo is geupload (laat leeg om het logo van Branding te gebruiken).
- **CTA-knop**: Het label en de bestemmingslink voor de call-to-actionknop rechtsboven. Beide velden moeten ingevuld zijn om de knop zichtbaar te maken.
- **Telefoonnummer**: Een klikbare `tel:`-link die naast de CTA-knop op desktop verschijnt en in de mobiele navigatielade. Laat leeg om de belknop te verbergen.
- **Bel-label**: De tekst naast het telefoonicoon op mobiel (standaard is dit "Bel direct" wanneer leeg gelaten).
- **Belknop op mobiel**: Wanneer ingeschakeld blijft er onderaan het scherm een vaste belknop staan op mobiele apparaten.
- **Sticky navigatiebalk**: Wanneer ingeschakeld (standaard aan), blijft de navigatiebalk zichtbaar terwijl de bezoeker naar beneden scrollt.

Deze instellingen gelden voor elke pagina van je site, net zoals op het Stijl-tabblad. Wijzigingen worden automatisch opgeslagen met een korte wachttijd nadat je stopt met typen. Voor de visuele layout, achtergrondstijl en knopweergave, zie het [Stijl-tabblad](#styling-van-je-site).

## Bedrijfsgegevenstokens

Tekstvelden in de sitebouwer kunnen merge-tokens bevatten die live bedrijfsgegevens uit je werkruimte halen. Bij het renderen van de gepubliceerde site wordt elk token vervangen door de huidige waarde uit **Bedrijfsgegevens** (`/settings/bedrijfsgegevens`). Zo hoef je je bedrijfsnaam, adres of contactgegevens maar op één plek te beheren.

Beschikbare tokens:

| Token | Toont |
|---|---|
| `{{bedrijf.naam}}` | Bedrijfsnaam |
| `{{bedrijf.adres}}` | Volledig adres, samengesteld uit straat, postcode en plaats |
| `{{bedrijf.kvk}}` | KVK-nummer |
| `{{bedrijf.btw}}` | BTW-id |
| `{{bedrijf.email}}` | Publiek e-mailadres |

Zo gebruik je ze:

- Klik in elk tekstveld op het chip dat bij de gewenste waarde hoort. Het token wordt op de cursorpositie ingevoegd.
- Je kunt een token ook met de hand typen. Alleen de vijf tokens hierboven worden ondersteund.
- Is een waarde in je bedrijfsgegevens leeg, dan toont de gepubliceerde site een hint tussen rechte haken, bijvoorbeeld `[bedrijfsnaam]`, zodat je ziet wat nog ontbreekt.
- Tokens worden opgelost ná de publicatiesnapshot, dus latere wijzigingen in je bedrijfsgegevens verschijnen direct op de live site zonder opnieuw te publiceren.
- Wettelijke pagina's die door het platform worden aangemaakt, gebruiken deze tokens automatisch. Bewerk de tekst eromheen gerust, de koppeling blijft intact.

Bron: `packages/shared/src/site-blocks/company-tokens.ts#COMPANY_TOKENS`.

## Openbare URL

Je website wordt getoond op de best beschikbare URL:

1. Je eigen domein (bijv. `https://acme.nl`) wanneer geverifieerd en ingeschakeld
2. Je werkruimte-subdomein (bijv. `https://acme.mycompanydesk.com`)
3. De terugvalportalroute (`/portal/{slug}`)

Zie [Domeinen, website en inbox](/nl/features/domains-website-inbox) voor domeininstelling en -verificatie.

## Contactformulier

Het contactformulierblok (`form` sectietype) heeft een live verzendfunctionaliteit. Wanneer een bezoeker de velden invult die jij hebt ingesteld (naam, e-mail, telefoon, bedrijf, bericht) en op verzenden klikt, maakt het platform een offerteaanvraag aan en stuurt het een melding naar je werkruimte. Het formulier toont een succesbanner bij afronding en een foutmelding als er iets misgaat. Alle invoervelden worden tijdens het verzenden uitgeschakeld om dubbel verzenden te voorkomen.

Wat gebeurt er bij verzenden:

1. Alleen de velden die het blok daadwerkelijk toont worden meegestuurd, dus het verbergen van het naamveld breekt de backend niet.
2. Het platform maakt een offerteaanvraag aan onder het bedrijf dat aan de site-slug is gekoppeld.
3. Je ontvangt een werkruimtemelding (dezelfde route als de oude `/portal/quote-request`).
4. De aanvraag verschijnt bij **Offertes > Aanvragen**.
5. De bezoeker ziet een aanpasbare succesmelding.

Inzendingen via het contactformulier zijn beperkt tot 5 per minuut per IP-adres. Een Cloudflare Turnstile-widget verschijnt ook voordat de bezoeker verzendt, mits geconfigureerd op je werkruimte, en blokkeert geautomatiseerde botinzendingen zonder echte bezoekers te vertragen.

## Nieuwsbrief aanmelden

Het nieuwsbriefblok (`newsletter` sectietype) vangt e-mailaanmeldingen van je gepubliceerde site op. De backend gebruikt een double opt-in stroom: na het verzenden ontvangt de bezoeker een bevestigingsmail en moet op de link klikken om het abonnement te activeren. Onderdrukte adressen en al actieve abonnees worden vanuit het formulier op dezelfde manier behandeld als nieuwe aanmeldingen (geen datalek).

Wat gebeurt er bij verzenden:

1. Het platform slaat het abonnement op met `source: "site_form"`.
2. Als het adres niet al actief is en niet onderdrukt, wordt een double opt-in e-mail verstuurd.
3. De bezoeker ziet hoe dan ook een succesbanner, zodat de abonnementsstatus privé blijft.
4. Na bevestiging verschijnt de abonnee in het nieuwsbriefpubliek van die werkruimte.

Nieuwsbriefinzendingen delen dezelfde snelheidslimiet als het contactformulier: 5 per minuut per IP-adres. De Turnstile-botbescherming is ook actief op nieuwsbriefformulieren wanneer geconfigureerd.

## Juridische pagina's

De sitebouwer voorziet elke nieuwe werkruimte van twee standaard juridische pagina's: **Privacybeleid** (`/privacy`) en **Algemene voorwaarden** (`/algemene-voorwaarden`). De inhoud gebruikt plaatsaanduidingsmarkeringen voor bedrijfsgegevens. Wanneer de pagina wordt gerenderd voor bezoekers, worden die markeringen vervangen door de waarden uit je **Bedrijfsinstellingen** — bedrijfsnaam, adres, postcode, plaats, land, registratienummer, btw-nummer en publieke e-mail.

Je kunt de juridische pagina's net als elke andere pagina bewerken in de editor. De editor behoudt de plaatsaanduidingsankers in de inhoud, zodat ook openen en opslaan zonder wijzigingen ervoor zorgt dat toekomstige updates van je bedrijfsgegevens automatisch doorstromen.

De juridische pagina's worden gerenderd op het moment van publiceren, net als de rest van je site. Ze delen dezelfde Live/Concept-status en dezelfde zichtbaarheidsregels op basis van je abonnement.

## Aanvragen beheren

Zie [Offertes - Offerteaanvragen](/nl/features/quotes#offerteaanvragen) voor details over het beheren van binnenkomende aanvragen.

## Abonnementsvereiste

De openbare website (bedrijfspagina en sitebouwer) is een betaalde functie. De site is zichtbaar zolang je werkruimte een Starter- of Pro-abonnement heeft. Als een werkruimte naar Gratis vervalt, blijft de site nog 7 dagen live en gaat daarna op zwart.

- **Betaald of in proefperiode**: De site is altijd zichtbaar.
- **Vervallen naar Gratis**: De site blijft nog 7 dagen zichtbaar nadat je betaalde toegang eindigt (op basis van proefperiode-einde, opzeggingsdatum of einde betaalperiode, welke het meest recent is). Na het respijtvenster geeft de site een 404-fout.
- **Onzekere toestand**: Als het systeem niet kan bepalen wanneer je betaalde toegang eindigde, blijft de site online om te voorkomen dat een site onterecht offline gaat.

Deze poort geldt voor alle publieke paden: de bedrijfspagina, de servicedetailroute en de pagina's van de sitebouwer. De controle gebeurt bij elk verzoek, voor elke cachinglaag, zodat het klopt ook als je abonnement midden in een cacheperiode verandert.

Bron: `apps/api/src/modules/billing/entitlement.service.js` — `PUBLIC_PAGE_GRACE_DAYS`, `computePublicPageGate`, `getPublicPageVisibility`.

## Gerelateerd

- [Domeinen, website en inbox](/nl/features/domains-website-inbox): Eigen domein instellen, verificatie, SSL en e-mailinbox.
- [Bedrijfsinstellingen](/nl/settings/company): Waar je bedrijfsgegevens, huisstijl en adres staan.
- [Offertes](/nl/features/quotes): Beheren van offerteaanvragen die via je website binnenkomen.
- [Abonnementen & betalingen](/nl/settings/billing): Abonnementsvormen en functievlaggen.