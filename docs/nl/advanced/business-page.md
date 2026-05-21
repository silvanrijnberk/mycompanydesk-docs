---
title: Sitebouwer
---

# Sitebouwer

Bouw je zakelijke website met een drag-and-drop-editor. Maak meerdere pagina's, stel ze samen met secties en blokken, pas kleuren en lettertypes aan, en publiceer wanneer je klaar bent.

## Overzicht

De sitebouwer vervangt het oude bedrijfsprofiel van één pagina. Je krijgt een volwaardige website-editor met:

- **Meerdere pagina's**: Maak zoveel pagina's als je nodig hebt, elk met een eigen pad en secties.
- **Domeinwisselaar**: Wanneer je werkruimte meerdere eigen domeinen heeft (Pro-abonnement), kun je via een dropdown in de bovenbalk wisselen tussen het bewerken van de hoofdsite en een per-domein-variant. Elk domein krijgt zijn eigen pagina's, navigatie, ontwerptokens en publicatiesnapshot.
- **Sectieblokken**: Voeg hero-, tekst-, galerij-, spotlight-, diensten-, team-, testimonial-, contactformulier- en aangepaste HTML-secties toe aan elke pagina.
- **Ontwerptokens**: Stel merkkleuren, lettertypes, witruimte, hoekradius, bewegingsstijl, aangepaste CSS en een site-favicon in. Wijzigingen gelden voor de hele site.
- **Navigatie-editor**: Sleep en zet headerlinks op volgorde, met dropdown-groepen en externe links.
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

Elke pagina krijgt een uniek pad. De homepage (`/`) wordt standaard aangemaakt en kan niet worden verwijderd.

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

## Je site vormgeven

In de **Stijl**-tab bepaal je de look-and-feel van je hele site:

- **Presets**: Klik-en-klaar-startpunten die kleuren, lettertypes en witruimte in een keer instellen. De Editorial-preset geeft je een navy-met-goud-palet met serif-koppen en mono-eyebrows, de MyCompanyDesk-huisstijl. Een preset toepassen voegt de tokens samen met je werkruimte, waarbij je logo, custom CSS en head-snippets behouden blijven.
- **Kleuren**: Kies merk-, accent-, papier-, inkt-, oppervlakte- en gedempte kleuren. Het palet wordt toegepast via CSS custom properties.
- **Donkere modus**: Bepaal hoe je site omgaat met donkere weergave. Drie opties: **Uit** (geen donkere modus, de site blijft in het lichte palet), **Knop** (bezoekers zien een zon/maan-knop in de navigatiebalk en kunnen wisselen, hun keuze wordt lokaal opgeslagen), of **Volg systeem** (de site volgt automatisch de OS-voorkeur van de bezoeker via een live media-query). Wanneer donkere modus aan staat, verschijnt er een donker palet waarin je per kleur een nachtversie kunt instellen. Laat je het donkere palet leeg, dan past de site een automatische inversie toe waarbij je merk- en accentkleuren behouden blijven.
- **Typografie**: Kies kop-, body- en mono-lettertypes uit de ingebouwde lettertypebibliotheek (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Schaal**: Stel hoekradius, dichtheid (compact, ruim, royaal), maximale inhoudsbreedte en verticale sectie-afstand in.
- **Beweging**: Schakel verminderde beweging in of kies een bewegingsstijl (Uit, Subtiele fade, Slide-up).
- **Knoppen**: Pas knopradius, padding en hover-effecten aan.
- **Navbar**: Stel de layout in (standaard, gecentreerd, split), de achtergrondstijl (vast, transparant met blur, volledig transparant) en hoe de CTA-knop eruitziet (vol, lijn, alleen tekst). De navbar-instellingen gelden voor elke pagina.
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

De navigatie-editor laat je de headerlinks van je site indelen:

- Sleep pagina's om de navigatie op volgorde te zetten.
- Maak dropdown-groepen om pagina's onder een bovenliggend label te nesten.
- Voeg externe links toe die buiten je site verwijzen.
- Het logo in de header is klikbaar en linkt altijd terug naar de homepage.
- De homepage staat altijd vooraan en is vergrendeld.

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

Inzendingen via het contactformulier zijn beperkt tot 5 per minuut per IP-adres.

## Nieuwsbrief aanmelden

Het nieuwsbriefblok (`newsletter` sectietype) vangt e-mailaanmeldingen van je gepubliceerde site op. De backend gebruikt een double opt-in stroom: na het verzenden ontvangt de bezoeker een bevestigingsmail en moet op de link klikken om het abonnement te activeren. Onderdrukte adressen en al actieve abonnees worden vanuit het formulier op dezelfde manier behandeld als nieuwe aanmeldingen (geen datalek).

Wat gebeurt er bij verzenden:

1. Het platform slaat het abonnement op met `source: "site_form"`.
2. Als het adres niet al actief is en niet onderdrukt, wordt een double opt-in e-mail verstuurd.
3. De bezoeker ziet hoe dan ook een succesbanner, zodat de abonnementsstatus privé blijft.
4. Na bevestiging verschijnt de abonnee in het nieuwsbriefpubliek van die werkruimte.

Nieuwsbriefinzendingen delen dezelfde snelheidslimiet als het contactformulier: 5 per minuut per IP-adres.

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