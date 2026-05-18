---
title: Sitebouwer
---

# Sitebouwer

Bouw je zakelijke website met een drag-and-drop-editor. Maak meerdere pagina's, stel ze samen met secties en blokken, pas kleuren en lettertypes aan, en publiceer wanneer je klaar bent.

## Overzicht

De sitebouwer vervangt het oude bedrijfsprofiel van één pagina. Je krijgt een volwaardige website-editor met:

- **Meerdere pagina's**: Maak zoveel pagina's als je nodig hebt, elk met een eigen pad en secties.
- **Domeinwisselaar**: Wanneer je werkruimte meerdere eigen domeinen heeft (Pro-abonnement), kun je via een dropdown in de bovenbalk wisselen tussen het bewerken van de hoofdsite en een per-domein-variant. Elk domein krijgt zijn eigen pagina's, navigatie, ontwerptokens en publicatiesnapshot.
- **Sectieblokken**: Voeg hero-, tekst-, galerij-, diensten-, team-, testimonial-, contactformulier- en aangepaste HTML-secties toe aan elke pagina.
- **Ontwerptokens**: Stel merkkleuren, lettertypes, witruimte, hoekradius, bewegingsstijl, aangepaste CSS en een site-favicon in. Wijzigingen gelden voor de hele site.
- **Navigatie-editor**: Sleep en zet headerlinks op volgorde, met dropdown-groepen en externe links.
- **Publicatiesnapshots**: Werk in concept, bekijk je wijzigingen en publiceer daarna. Ongepubliceerde wijzigingen zie je in de bovenbalk.
- **Responsieve preview**: Schakel tussen desktop-, tablet- en mobiele weergave tijdens het bewerken.

De sitebouwer vind je onder **Bedrijf > Je website** (`/website`).

## Tabs

De sitebouwer heeft vijf tabs (zes als Stijl is uitgeklapt):

- **Editor**: Stel pagina's samen door secties toe te voegen en te rangschikken. Klik op een sectie om de inhoud, layout, stijl of animatie te bewerken. Sleep secties om ze te verplaatsen, dupliceren of verwijderen.
- **Pagina's**: Beheer je pagina's: maak nieuwe aan vanuit sjablonen, stel paden en zichtbaarheid in, en bekijk welke pagina's live, concept of ingepland zijn. Klik op een pagina om deze in de editor te openen. De vergrendelde homepage kan niet worden verwijderd.
- **Stijl**: Pas je sitebrede ontwerptokens aan: kleuren (merk, accent, papier, inkt), lettertypes (kop, body, mono uit de lettertypebibliotheek), navbar (layout, achtergrond, knopstijl), schaal (radius, dichtheid, maximale breedte, sectie-afstand), beweging, knopstijlen en aangepaste CSS. Je kunt ook head-snippets toevoegen voor analytics (Plausible, Umami, Matomo) of lettertype-preconnects. Klik op de Stijl-header om de tab uit of in te klappen.
- **Domein & SEO**: Configureer je eigen domein en SEO-instellingen. De inhoud hier is gekoppeld aan het domein dat in de domeinwisselaar in de bovenbalk is geselecteerd. Wanneer de hoofdsite (weergegeven als je werkruimtenaam) is geselecteerd, verschijnt er geen domeinspecifiek paneel. Zie [Domeinen, website en inbox](/nl/features/domains-website-inbox) voor het volledige domeinbeheer.
- **Koppelingen**: Verbind diensten van derden met je website.

## Pagina's aanmaken

1. Ga naar de **Pagina's**-tab.
2. Klik op **Nieuwe pagina**.
3. Geef een titel en een pad op (bijv. `/over-ons`).
4. Kies een sjabloon of begin leeg.
5. De pagina opent in de editor, waar je secties kunt toevoegen en uitbouwen.

Elke pagina krijgt een uniek pad. De homepage (`/`) wordt standaard aangemaakt en kan niet worden verwijderd.

## Pagina's bouwen met secties

In de **Editor**-tab:

- Klik op **Sectie toevoegen** om de beschikbare bloktypes te zien (hero, tekst, galerij, diensten, team, testimonials, contactformulier, tarieven, product, aangepaste HTML, en meer).
- Kies een bloktype om het op de pagina te plaatsen.
- Klik op een sectie om het inspectiepaneel te openen, waar je inhoud, layout, stijl en animatie kunt bewerken.
- Sleep secties omhoog of omlaag om ze te verplaatsen. Gebruik de dupliceer- en verwijderacties op elke sectie.

Sommige secties hebben alleen-systeemvarianten die beschikbaar zijn op de vergrendelde homepage maar niet op aangepaste pagina's.

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

## Je site vormgeven

In de **Stijl**-tab bepaal je de look-and-feel van je hele site:

- **Kleuren**: Kies merk-, accent-, papier-, inkt-, oppervlakte- en gedempte kleuren. Het palet wordt toegepast via CSS custom properties.
- **Typografie**: Kies kop-, body- en mono-lettertypes uit de ingebouwde lettertypebibliotheek (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Schaal**: Stel hoekradius, dichtheid (compact, ruim, royaal), maximale inhoudsbreedte en verticale sectie-afstand in.
- **Beweging**: Schakel verminderde beweging in of kies een bewegingsstijl (geen, subtiel, speels).
- **Knoppen**: Pas knopradius, padding en hover-effecten aan.
- **Navbar**: Stel de layout in (standaard, gecentreerd, split), de achtergrondstijl (vast, transparant met blur, volledig transparant) en hoe de CTA-knop eruitziet (vol, lijn, alleen tekst). De navbar-instellingen gelden voor elke pagina.
- **Aangepaste CSS**: Schrijf je eigen CSS die in de site wordt geïnjecteerd. Handig voor fijnafstemming of het overschrijven van standaardwaarden.
- **Favicon**: Upload een favicon voor je site. Deze verschijnt in browsertabs en bladwijzers. Als je geen favicon instelt, gebruikt de site je lichte logo, en daarna je bedrijfsprofielfoto.
- **Head-snippets**: Voeg analytics-scripts toe (Plausible, Umami, Matomo) of lettertype-preconnects via de snippetkiezer.

Wijzigingen in de Stijl-tab worden automatisch opgeslagen bij bewerken en gelden voor alle pagina's.

## Publiceren

De bovenbalk toont hoeveel ongepubliceerde wijzigingen er zijn. Wanneer je klaar bent:

1. Klik op **Publiceer** in de bovenbalk.
2. Je site wordt gepubliceerd naar de openbare URL (je eigen domein, werkruimte-subdomein of de terugvalportalroute).

Ongepubliceerde wijzigingen worden per pagina en per token bijgehouden. De publiceerknop is uitgeschakeld als er niets te publiceren is.

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

## Gerelateerd

- [Domeinen, website en inbox](/nl/features/domains-website-inbox): Eigen domein instellen, verificatie, SSL en e-mailinbox.
- [Bedrijfsinstellingen](/nl/settings/company): Waar je bedrijfsgegevens, huisstijl en adres staan.
- [Offertes](/nl/features/quotes): Beheren van offerteaanvragen die via je website binnenkomen.