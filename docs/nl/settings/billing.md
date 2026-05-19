---
title: "Facturering & Abonnementen"
---

# Facturering & Abonnementen

Beheer je MyCompanyDesk-abonnement, bekijk je verbruik en upgrade je abonnement.

## Founding Members

MyCompanyDesk biedt een Founding Members-programma voor de eerste 100 werkruimtes die zich aanmelden tijdens de lanceringsperiode.

### Huidige aanbieding (vanaf 20 mei 2026)

Een Founding Member krijgt het eerste jaar Pro gratis en daarna voor altijd 50% korting op het Pro-abonnement. Het gratis jaar start direct bij het claimen. Aan het einde van het gratis jaar kan de werkruimte overstappen naar betaald Pro met een levenslange korting van 50% (toegepast als Stripe-coupon bij het afrekenen). Als de werkruimte niet overstapt, loopt de Pro-proefperiode af zoals elke andere proefperiode.

Het inbegrepen `.nl`-domein is het eerste jaar gratis en wordt vanaf jaar twee onderdeel van het betaalde Pro-abonnement. Een werkruimte die na het gratis jaar stopt met betalen, verliest Pro en het domein verloopt. Er is niet langer een open einde gratis-voor-het-leven-toezegging voor nieuwe leden.

### Oorspronkelijke lichting (grandfathered)

De eerste lichting Founding Members die onder de oorspronkelijke voorwaarden heeft geclaimd (voor 20 mei 2026) houdt Pro gratis voor het leven en krijgt levenslange gratis domeinverlenging. Deze claims gelden voor de levensduur van MyCompanyDesk zolang de dienst en de betreffende functionaliteit worden aangeboden. De nieuwe flow schrijft deze rijen nooit; bestaande gegrandfatherde werkruimtes blijven onaangetast.

### Hoe het werkt

- Het programma is beperkt tot **100 plekken** over alle werkruimtes.
- Elke werkruimte kan maar een plek claimen. Vanaf hetzelfde IP-adres mag ook maar een plek geclaimd worden (misbruikpreventie).
- Claimen is definitief. Er is geen tweede claim of her-claim; als je plek weg is, is die weg.

### Een plek claimen

Je kunt op twee manieren een Founding Member-plek claimen:

**Via de factureringspagina.** Als er nog plekken over zijn, toont de factureringspagina een Founding Member-claimkaart. Klik op **Plek claimen** om je gratis Pro-jaar te starten. De upgrade gaat meteen in.

**Via de landingspagina.** De CTA op de landingspagina linkt naar het registratieformulier met een founding-member-intentie. Wanneer je via die flow een account aanmaakt:

1. Het registratieformulier onthoudt je intentie in de lokale opslag.
2. Na e-mailverificatie en inloggen claimt het systeem automatisch je plek op de achtergrond.
3. Een bevestigingstoast laat zien of het claimen gelukt is. Zijn de plekken op voordat je het registratieproces afrondde, dan krijg je alsnog een Pro-proefperiode van 60 dagen.

Als het automatisch claimen mislukt (plekken vol, IP al gebruikt door een andere werkruimte, of een netwerkfout), wordt de claim niet opnieuw geprobeerd. Je kunt dan nog steeds op de factureringspagina kijken en handmatig claimen als er nog plekken zijn.

Founding Member-werkruimtes zijn in alle opzichten gewone Pro-klanten: dezelfde functies, dezelfde limieten. Het enige verschil is de abonnementsbron ("intern") en de badge in de facturering.

## Abonnementen

MyCompanyDesk heeft twee betaalde abonnementen plus een Gratis-status die alleen bestaat voor verlopen, opgezegde of proefperiode-verlopen werkruimtes. Gratis wordt niet aangeboden bij aanmelding; nieuwe klanten krijgen een Pro-proefperiode van 60 dagen. Abonnementsdefinities staan in `apps/api/src/modules/billing/plans.config.js`.

| Abonnement | Maandelijks | Jaarlijks | Omschrijving |
|---|---|---|---|
| **Starter** | € 10,00 | € 100,00 | Voor zzp'ers die facturen, uitgaven en een eigen bedrijfspagina nodig hebben |
| **Pro** | € 25,00 | € 250,00 | Het complete pakket: alles aan, inbox, multi-domein, API en uitbreidbaar met extra gebruikers |

Pro is het uitgelichte (aanbevolen) abonnement in de kiezer. De Gratis-status (`plan_key: "free"`) bestaat als landing-zone voor downgrade-paden en historische accounts, maar is verborgen op de prijzenpagina en in het aanmeldproces.

### Wat elk abonnement bevat

Functies met verbruikslimieten (maandelijkse limieten):

| Meting | Gratis | Starter | Pro |
|---|---|---|---|
| Facturen aangemaakt | 5 | onbeperkt | onbeperkt |
| Uitgaven aangemaakt | 10 | onbeperkt | onbeperkt |
| Offertes aangemaakt | 3 | onbeperkt | onbeperkt |
| Opslag | 100 MB | 2 GB | onbeperkt |
| Teamleden | 1 | 1 | 1 (uitbreidbaar met stoel-add-ons) |
| Eigen domeinen | 0 | 0 | 5 |
| AI-chatberichten (maandelijks) | 10 | 100 | 1 000 |
| AI-bonscans (maandelijks) | 3 | 50 | 500 |
| AI-suggesties (maandelijks) | 10 | 200 | 2 000 |
| Inbox-mailboxes | 0 | 0 | onbeperkt |
| Inbox verzonden per maand | 0 | 0 | 15 000 |
| Inbox ontvangen per maand | 0 | 0 | 20 000 |

Let op: AI-limieten zijn maandelijks, niet dagelijks. Ze worden gereset op de eerste van elke kalendermaand.

Booleaanse functies per abonnement:

| Functie | Gratis | Starter | Pro |
|---|---|---|---|
| `invoices`, `expenses`, `quotes`, `attachments` | ja | ja | ja |
| `exports_pdf` | ja | ja | ja |
| `exports_excel` | nee | ja | ja |
| `custom_branding` | nee | ja | ja |
| `recurring_invoices`, `recurring_expenses` | nee | ja | ja |
| `receipt_scanning`, `language_tools` | nee | ja | ja |
| `time_registration`, `assistant_chat` | nee | ja | ja |
| `description_enrichment` | nee | ja | ja |
| `ai_insights` | nee | ja | ja |
| `public_business_page` | nee | ja | ja |
| `company_subdomain`, `style_presets` | nee | ja | ja |
| `contracts`, `properties`, `projects` | nee | nee | ja |
| `team_members`, `advanced_reports` | nee | nee | ja |
| `custom_domains`, `custom_domain_routing` | nee | nee | ja |
| `custom_domain_full_website` | nee | nee | ja |
| `inbox`, `privacy_mode`, `newsletter` | nee | nee | ja |
| `api_access`, `webhooks`, `priority_support` | nee | nee | ja |
| `advanced_permissions` | nee | nee | ja |
| `bank_connections` | nee | nee | ja |
| `e2b_realtime_classification` | nee | ja | ja |

De volledige functielijst staat in `FEATURE_KEYS` in `plans.config.js`.

### Stoel-add-ons

Pro is een product voor een gebruiker. Extra gebruikers koop je via de `workspace_seat_addons`-tabel (Stripe quantity-based add-on, apart gefactureerd per stoel). De `team_members`-feature-vlag bepaalt of teamfunctionaliteit beschikbaar is; het effectieve aantal stoelen komt uit de add-on-record.

## Stripe-portaal

De knop **Abonnement beheren** (zichtbaar wanneer de werkruimte een actieve periode of niet-Gratis-abonnement heeft) roept `POST /api/billing/portal` aan, die een eenmalige Stripe Customer Portal-URL teruggeeft. Vanuit het portaal kun je:

- Betaalmethode bijwerken
- Facturen en bonnetjes downloaden
- Factureringsadres wijzigen
- Abonnement opzeggen

Opzeggen gaat in aan het einde van de huidige betaalde periode; je behoudt toegang tot die tijd.

## Betaalflow

1. Klik op **Upgraden** op een abonnementstegel
2. De frontend roept `POST /api/billing/checkout` aan, die een Stripe Checkout-URL teruggeeft
3. Stripe stuurt je terug met `?checkout=success` of `?checkout=canceled`
4. De pagina toont een succes- of annuleringsbanner; de rechtencache wordt ongeldig verklaard en gated UI wordt meteen ontgrendeld

Bij een upgrade naar Pro krijgt de succesbanner het violette Pro-accent en een kroonicoontje ("Welkom bij Pro") in plaats van de standaard groene bevestiging. Dezelfde Pro-styling zie je op meer plekken in de app: een violette ring om je avatar, een kroonicoontje in de planbadge en "Pro feature"-pills op Pro-gated instellingen zoals API-sleutels en Inbox. Daarnaast krijgt de contextuele gids-assistent een premium violet uiterlijk: de "AI"-pill wordt een "Pro"-pill, de paneelrand en verzendknop krijgen het Pro-accent en de statusregel verandert naar "Jouw Pro-assistent staat klaar."

## Contextuele upgrade-banner

Wanneer je op de factureringspagina terechtkomt vanuit een gated functie (de feature-flag-middleware stuurt door met `?upgrade=<feature>`), toont de pagina een banner met "je kwam hier voor X, dit is wat het ontgrendelt" in plaats van een generieke abonnementenpitch.

## Zie ook

- [Bedrijfsgegevens](/nl/settings/company) -- `public_business_page` en `custom_domains` zitten hier
- [E-mail](/nl/settings/email) -- `inbox` vereist Pro
- [Team](/nl/settings/team) -- `team_members` vereist Pro
