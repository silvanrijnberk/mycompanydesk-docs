---
title: Domeinen, website en inbox
last_verified: 2026-05-09
---

# Domeinen, website en inbox

> **Status: pre-launch.** Alle drie de features op deze pagina rollen samen uit als een bundel. Ze worden beheerd door de `custom_domains` en `public_business_page` feature flags en worden nog uitgerold naar de openbare abonnementen. Het gedrag dat hier beschreven staat komt overeen met de codebase per 2026-05-09; als een scherm er in jouw werkruimte anders uitziet, is de bundel daar nog niet ingeschakeld.

Eigen domeinen, de gehoste bedrijfswebsite en de gedeelde e-mailinbox vormen samen een product. De reden: ze delen status. Dezelfde `domains`-rij die bewijst dat jij `acme.nl` beheert, maakt `acme.nl` ook de URL van je website en zorgt dat `info@acme.nl` mail kan ontvangen. Er is een onboarding-flow, een instellingenstructuur en een plek in de app om het allemaal te beheren.

## De gebundelde waarde

Voeg een domein toe en je krijgt drie dingen:

- **Een eigen adres.** Je bedrijf draait op `acme.nl` in plaats van `acme.mycompanydesk.com`.
- **Een live website.** De gehoste bedrijfspagina wordt automatisch gepubliceerd op het geverifieerde domein.
- **Een werkende inbox.** `info@acme.nl`, plus `support@`, `sales@` en een alleen-verzend `noreply@`-alias, vangen mail op en versturen antwoorden.

Je kunt de gebundelde flow starten vanuit de [Setup-wizard](/nl/getting-started/company-setup) (`/setup`, de stap "Jouw webadres"), of stap voor stap vanuit `Bedrijf › Je eigen .com-adres` en de Inbox.

## Een onboarding-flow

De wizardstap op `/setup` is de aanbevolen start. Het voert via `apply.service.js → activateSubdomain | addDomain → quickEnableInbox` alle stappen in een keer uit, dus de gebruiker beantwoordt een paar vragen en het platform regelt alles eronder.

### Stap 1 -- Domein toevoegen

Twee routes in de wizard, beide opgeslagen in de `domains`-tabel:

- **Gratis werkruimte-subdomein** -- `jouw-slug.mycompanydesk.com` (of `.nl` voor NL-werkruimtes). Geen DNS-werk; de slug wordt geregistreerd als Cloudflare Pages custom domain en de website is binnen enkele seconden live. Dit is de standaard voor nieuwe werkruimtes.
- **Je eigen domein** -- voer `acme.nl` in. Twee setup-modi worden ondersteund:
  - **Nameserver-modus** (aanbevolen) -- er wordt een Cloudflare-zone aangemaakt voor het domein. Je wijzigt de nameservers van je registrar naar de twee `*.ns.cloudflare.com`-hostnamen die de wizard toont. Cloudflare wordt de gezaghebbende DNS voor het domein, wat e-mail, SSL en DNS-beheer binnen MyCompanyDesk mogelijk maakt.
  - **CNAME-modus** -- alleen voor subdomeinen (bijv. `portal.acme.nl`). Je voegt een CNAME-record toe die naar `mycompanydesk-app.pages.dev` wijst. Geen nameserverwijziging. E-mailroutering is niet beschikbaar in deze modus.

Het toevoegen van een eigen domein deactiveert automatisch het werkruimte-subdomein -- er is een canonieke website per bedrijf, nooit twee.

### Stap 2 -- Verificatie

Verificatie vindt zowel op aanvraag als via een poll plaats. De detailpagina heeft een **Verifiëren**-knop (`POST /api/domains/:id/verify`), en een achtergrondjob controleert elk pending domein met tussenpozen opnieuw.

- **Nameserver-modus** wordt geverifieerd zodra Cloudflare de zone als `active` meldt. De status gaat `pending_nameservers → pending_verification → active`. De gebruiker krijgt een melding via de in-app notificatiebel zodra de overgang plaatsvindt.
- **CNAME-modus** wordt geverifieerd door de CNAME op te lossen en te controleren of die naar het Pages-doel wijst. Status gaat `pending_cname → active`.

### Stap 3 -- SSL

SSL wordt automatisch door Cloudflare geregeld zodra de zone actief is. De standaardmodus is **Full (strict)**; je kunt dit wijzigen via `Domeindetail › SSL` (`off / flexible / full / strict`). Het certificaatstatusveld op het SSL-paneel weerspiegelt Cloudflare's verificatieresultaat.

### Stap 4 -- Website gaat live

De gehoste bedrijfspagina (zie [Sitebouwer](/nl/advanced/business-page)) wordt automatisch gepubliceerd op de domein-root zodra de zone actief is. De `getBusinessPageUrl`-resolver van de wizard retourneert, in volgorde van prioriteit:

1. Een eigen domein met `business_page_enabled = true` → `https://acme.nl`
2. Een eigen domein met `portal_subdomain_enabled = true` → `https://portal.acme.nl`
3. Het werkruimte-subdomein → `https://acme.mycompanydesk.com`
4. De terugvalportalroute (`/portal/<slug>`) wanneer er niets anders is geconfigureerd.

### Stap 5 -- Inbox ontvangt mail

Voor nameserver-modus eigen domeinen voert de wizard `quickEnableInbox` uit na verificatie. Die aanroep is idempotent en doet het volgende:

- Richt het verzend-subdomein (`mail.acme.nl`) in en schrijft de DKIM- en SPF DNS-records.
- Stelt een Cloudflare Email Routing catch-all-regel in op de zone, gericht naar de `inbox-inbound` Worker.
- Inspecteert de apex MX-records. Als deze leeg zijn of al naar Cloudflare wijzen, installeert de wizard de Cloudflare MX. Als er al een externe provider (Google Workspace, Microsoft 365) staat, weigert de wizard te overschrijven en meldt een `conflict`-waarschuwing zodat je kunt beslissen.
- Maakt `info@acme.nl` aan als de standaard gedeelde mailbox.
- Richt `support@` en `sales@` in als bidirectionele aliassen van `info@`, en `noreply@` als alleen-verzend-alias (toegestaan in From, weggegooid bij inkomend).
- Maakt optioneel een persoonlijke mailbox (`silvan@acme.nl`) aan als je het vakje in de wizard hebt aangevinkt.

## Per-feature referentie

### Eigen domeinen

UI staat op `Bedrijf › Je eigen .com-adres` -- de leaf-pagina is `/workspace/organization/company/address`, gemount vanuit `apps/web/pages/workspace/organization/company/address.vue` en toont de `SettingsDomains`-component. De twee oudere paden `/workspace/organization/domains` en `/workspace/communication/domains` verwijzen hierheen.

De pagina bestaat uit twee delen:

- **Domeinen in afwachting**: Domeinen die nog geverifieerd moeten worden staan altijd bovenaan, los van de domeinwisselaar in de bovenbalk. Zo kun je de verificatie-instructies bereiken van nieuw toegevoegde domeinen voordat ze actief worden.
- **Actief domeinpaneel**: DNS, SSL, doorverwijzingen, analytics, beveiliging en SEO-tabs zijn gekoppeld aan het domein dat in de domeinwisselaar in de bovenbalk is geselecteerd (bereikbaar vanuit de sitebouwer op `/website`). Wanneer de hoofdsite (weergegeven als je werkruimtenaam) is geselecteerd, wordt het domeinpaneel volledig verborgen. Wisselen van domein zet de actieve tab terug op Routering.

Wat je op de pagina kunt doen:

- **Domein toevoegen** (nameserver- of CNAME-modus) via een eigen kaart die altijd zichtbaar is.
- **Verifiëren** van een pending domein.
- **DNS-records beheren** voor het geselecteerde domein -- A, AAAA, CNAME, MX, TXT, SRV, CAA, NS. CRUD gaat via Cloudflare via de API.
- **SSL** voor het geselecteerde domein -- certificaatstatus bekijken, SSL-modus wijzigen.
- **URL-doorverwijzingen** voor het geselecteerde domein -- drie gratis Cloudflare Page Rules per zone. Bronpatroon + bestemming + 301/302.
- **E-mailbeveiliging** voor het geselecteerde domein -- SPF/DMARC/DKIM-controle met een een-klik "fix" die veilige standaardwaarden schrijft (`v=spf1 ~all`, `v=DMARC1; p=quarantine; …`).
- **Snelle instellingen** voor het geselecteerde domein -- Cloudflare Development Mode aan/uit, "Under attack"-beveiligingsniveau aan/uit, cache legen.
- **Analytics** voor het geselecteerde domein -- laatste 30 dagen van verzoeken, bandbreedte, dreigingen, bezoekers, paginaweergaven. Het huidige Cloudflare Analytics-eindpunt is uitgefaseerd; de pagina toont een lege `unavailable`-status tot de GraphQL-migratie landt.
- **Verwijderen** van het geselecteerde domein -- soft-delete van de rij (`status = 'removed'`) en afbreken van de Cloudflare-zone (of het Pages-domein in CNAME-modus).

#### `domains`-tabel -- de gedeelde status

Belangrijke kolommen die de app leest:

| Kolom | Doel |
|---|---|
| `domain_name` | De hostnaam, bijv. `acme.nl`. |
| `setup_mode` | `nameserver` (volledige delegatie) of `cname` (enkel subdomein). |
| `status` | `pending_nameservers`, `pending_verification`, `pending_cname`, `active`, `failed`, `removed`. |
| `cloudflare_zone_id` | Gezet in nameserver-modus. Stuurt DNS, SSL, redirects, analytics, e-mailrouting. |
| `nameserver_1`, `nameserver_2` | Getoond aan de gebruiker tijdens nameserver-setup. |
| `cname_hostname`, `cname_target` | Gezet in CNAME-modus. |
| `email_routing_enabled` | `true` zodra de Cloudflare Email Routing-zone is ingeschakeld. |
| `inbox_enabled`, `inbox_subdomain_tag`, `inbox_dkim_ready` | Gezet door `quickEnableInbox`. Het mailverzend-subdomein (`mail.acme.nl` standaard) en DKIM-voorzieningsstatus. |
| `business_page_enabled`, `portal_subdomain_enabled` | Bepalen welke hostnaam de openbare website bedient. |
| `verified_at` | Gezet wanneer verificatie slaagt. |

### Gehoste website

De sitebouwer staat op `Bedrijf › Je website` (`/website`). Het is een volwaardige multi-pagina-editor met secties, blokken, ontwerptokens en publicatiesnapshots. Wanneer je werkruimte meerdere actieve eigen domeinen heeft (Pro-abonnement), kun je via een domeinwisselaar in de bovenbalk een per-domein-variant van de site bewerken. Elk domein krijgt zijn eigen pagina's, navigatie, ontwerptokens en publicatiesnapshot. Wisselen van domein zet de actieve tab terug. De openbare website wordt getoond op je eigen domein (of werkruimte-subdomein / terugvalportalroute) zodra gepubliceerd.

Wat de editor laat zien:

- **Domeinwisselaar** (bovenbalk) -- Wanneer er meer dan één actief domein is, kun je via een dropdown kiezen welke sitevariant je wilt bewerken. De hoofdsite-optie toont je werkruimtenaam. Domeinen die nog geen variant hebben tonen een "eigen variant maken"-hint en klonen de hoofdsite bij de eerste selectie.
- **Editor-tab** -- Stel pagina's samen door secties toe te voegen en te rangschikken (hero, tekst, galerij, diensten, team, testimonials, contactformulier, tarieven, product, aangepaste HTML). Bekijk en bewerk sectie-inhoud, layout, stijl en animatie. Tarieven kunnen optioneel een koopknop krijgen die doorverwijst naar de Mollie- of Stripe Connect-checkout. Elke tier heeft een instelbaar BTW-tarief (21%, 9% of 0%), waarbij de prijs die de klant ziet de uiteindelijke prijs is, inclusief BTW. Het productblok is een losse koopkaart met dezelfde betalingskoppeling.
- **Pagina's-tab** -- Pagina's aanmaken, hernoemen, verwijderen en filteren op status (live, concept, ingepland). Kies een sjabloon bij het maken van een nieuwe pagina.
- **Stijl-tab** -- Ontwerptokens voor kleuren, lettertypes, schaal, beweging, knoppen, aangepaste CSS en head-snippets (analytics, lettertype-preconnects).
- **Domein & SEO-tab** -- Eigen domeinbeheer. Zie de sectie eigen domeinen hierboven.
- **Koppelingen-tab** -- Verbind betaalproviders (Mollie, Stripe Connect) met inline setup-kaarten, plus diensten van derden zoals Mailchimp, Plausible en Trustpilot. Dezelfde betaalkoppeling stuurt de betaalknoppen op facturen aan; zie [Geldinstellingen](/nl/workspace/financial/money/payments) voor de volledige configuratie.
- **Navigatie-editor** -- Sleep en zet headerlinks op volgorde, met dropdown-groepen en externe links.
- **Publiceerknop** -- Toont het aantal ongepubliceerde wijzigingen. Publiceert een snapshot met een klik.
- **Responsieve preview** -- Schakel tussen desktop-, tablet- en mobiele weergave in de editor.

De openbare site wordt getoond op de best beschikbare URL die het bedrijf bezit: eigen domein-root → werkruimte-subdomein → terugval `/portal/<slug>`-route.

Zie [Sitebouwer](/nl/advanced/business-page) voor de volledige editorgids.

### E-mailinbox

De inbox is een top-level weergave op `/inbox` (`apps/web/pages/inbox/index.vue`). De backend bevindt zich in `apps/api/src/modules/inbox/*` en schrijft naar aparte tabellen (`company_email_domains`, `company_mailboxes`, `email_threads`, `email_messages`, `email_attachments`, `email_events`).

Mogelijkheden:

- **Threading** -- inkomende mail wordt gegroepeerd in threads op basis van RFC 822 `Message-ID` / `In-Reply-To` / `References`. Elke thread bevat `last_message_preview`, `participants`, status (`open / snoozed / closed / spam`) en labels.
- **Beantwoorden** -- inline antwoordveld op de thread. Slimme `From` kiest het adres waarnaar de oorspronkelijke mail was gestuurd, zodat een klant die naar `support@acme.nl` mailde antwoord krijgt van `support@`, niet `info@`.
- **Opstellen** -- ladeformulier met mailboxkiezer, send-as-kiezer, klantkiezer (of vrij `Aan`), onderwerp, bericht, bijlagen. Waarschuwing voor bounced ontvanger wordt getoond voor verzending.
- **Send-as aliassen** -- `info@`, `support@`, `sales@` zijn bidirectionele aliassen op dezelfde mailbox. `noreply@` is alleen-verzend -- selecteerbaar als From, maar inkomende mail erop wordt weggegooid bij opname.
- **Bijlagen** -- uploaden voor verzending (zowel opstellen als beantwoorden). Bijlagen op inkomende mail zijn downloadbaar vanuit het bericht; ondertekende download-URL's verlopen na een korte TTL.
- **Alias-melding** -- wanneer een inkomend bericht binnenkomt op een adres dat nog geen geregistreerd alias is, toont de thread een zachte melding met een "Toevoegen als alias"-actie.
- **Koppelen** -- threads kunnen worden gekoppeld aan een klant, project of factuur voor kruisverwijzing.
- **Catch-all terugval** -- mail naar elk lokaal deel op het domein valt door naar de standaardmailbox (`is_default = true`, een per domein). Dit betekent dat typefouten en niet-gedeclareerde aliassen niet stil verdwijnen.
- **Auditlog** -- uitgaande verzendingen, mailboxwijzigingen en threadstatuswijzigingen worden vastgelegd in een audittabel voor de werkruimte. Momenteel alleen API (nog geen UI) -- toegankelijk voor supportmedewerkers voor troubleshooting.
- **HTML-e-mailweergave** -- HTML-e-mails worden met hun originele opmaak getoond in een sandboxed iframe. De renderer verwijdert scripts, formulieren en event handlers tijdens de opschoning, en blokkeert standaard externe afbeeldingen om je privacy te beschermen. Een meldingsbalk verschijnt wanneer afbeeldingen geblokkeerd zijn, met een enkele klik op "Toon afbeeldingen" om het bericht opnieuw te tonen met afbeeldingen. Als er geen HTML-body is, toont de fallback het platte-tekstdeel.

De inbox gebruikt je eigen domein pas nadat `quickEnableInbox` succesvol is uitgevoerd en de apex MX-records naar Cloudflare wijzen. Tot die tijd kan de werkruimte wel mail versturen via het standaard afleverpad beschreven in [E-mailintegratie](/nl/settings/email), maar geen mail ontvangen.

### Verkopen

Wanneer je koopknoppen toevoegt aan tarieven of een productblok op je openbare site, creëert elke voltooide betaling een verkooprecord. Volg ze via **Geld > Verkopen** (`/workspace/financial/money/sales`).

Wat het verkooplogboek laat zien:

- Een chronologisch gesorteerde lijst van alle aankopen via je site.
- De betalingsprovider (Mollie of Stripe Connect) en de betalingsstatus (`paid`, `pending`, `failed`, `expired`, `refunded`).
- De oorspronkelijke sectie (welke tarief-tier of productblok is gekocht).
- E-mailadres van de klant, betaald bedrag en valuta.

Verkooprecords worden aangemaakt door het openbare checkout-eindpunt (`POST /public/sites/:slug/checkout`), dat de sectie valideert, een betaling aanmaakt via de gekoppelde provider en de koper doorstuurt naar de gehoste checkout-pagina.

Betaalde verkopen tonen een actiemenu (drie puntjes) met twee opties:

- **Factuur opnieuw genereren.** Maakt de gekoppelde factuur opnieuw aan als deze zoek is geraakt of niet is gegenereerd tijdens de aankoop. Veilig om uit te voeren ook als de factuur al bestaat.
- **Terugbetalen.** Stort het volledige bedrag terug naar de klant via de oorspronkelijke betaalprovider (Mollie of Stripe). Er wordt automatisch een creditnota aangemaakt tegen de gekoppelde factuur voor je boekhouding. Alleen beschikbaar voor betaalde verkopen.

### Verwerkingsflow na aankoop

Wanneer een betaling voltooid is, voert het platform automatisch de volgende stappen uit. Alles draait fire-and-forget: fouten worden gelogd en hebben geen effect op de betalingsstatus die de koper ziet.

1. **Factuur aangemaakt.** Er wordt een factuur aangemaakt op basis van de verkoop, met de productnaam, prijs en het e-mailadres van de koper. De prijs die je in de editor instelt is de uiteindelijke klantprijs, inclusief BTW. De factuurregel splitst dit in een ex-BTW bedrag en het BTW-tarief dat je op de tarief-tier of het productblok hebt ingesteld (standaard 21%). Als het e-mailadres overeenkomt met een bestaande klant in je werkruimte, wordt de factuur daaraan gekoppeld. Anders wordt een minimaal klantrecord aangemaakt. De factuur wordt direct afgerond (status `sent`) omdat de betaling al ontvangen is.
2. **Betaling geregistreerd.** Er wordt een betalingsrecord aangemaakt op de factuur via de standaard betalingsservice. De betalingsmethode wordt ingesteld op de provider (Mollie of Stripe) en de referentie bevat het processor-sessie-ID voor audittrails.
3. **Klantbevestiging.** De koper ontvangt een bevestigingsmail met de productnaam, het bedrag en de betalingsmethode. Als er een factuur is gegenereerd, bevat de mail een beveiligde portaal-link om de factuur-PDF te bekijken en te downloaden.
4. **Eigenaar op de hoogte gesteld.** Je ontvangt een in-app notificatie en een e-mailsamenvatting van de verkoop: product, bedrag, e-mail van de klant, en een directe link naar de factuur.

De checkout-succes- en checkout-geannuleerd-pagina's tonen de koper een branded resultaatscherm dat de ontwerptokens (kleuren) van je site gebruikt zodat de pagina bij je branding past.

## Mail verzenden vs mail ontvangen

Deze bundel is de **ontvangstkant**. Uitgaande e-mail -- factuurverzending, herinneringen, offerteverzending -- wordt afgehandeld door de bredere e-mailpipeline beschreven in [E-mailintegratie](/nl/settings/email). De inbox is voor het ontvangen van klantmail en het opstellen van antwoorden; hij routeert je geautomatiseerde factuurverzendingen niet. Factuurbezorging volgt altijd je gekozen verzendmethode onder [E-mailintegratie](/nl/settings/email) (Gmail, Outlook, aangepaste SMTP of de ingebouwde verzender). De DKIM van het inboxdomein wordt gebruikt voor uitgaande antwoorden die je in de inbox opstelt, niet voor geautomatiseerde transactionele mail.

## Limieten en aandachtspunten

- **Een website per bedrijf.** Het toevoegen van een eigen domein deactiveert het werkruimte-subdomein. Het verwijderen van het domein herstelt de slug niet automatisch -- activeer het handmatig opnieuw als je wilt terugvallen.
- **CNAME-modus heeft geen e-mail.** E-mailroutering vereist een volledige Cloudflare-zone, wat alleen nameserver-modus biedt.
- **De wizard weigert een bestaande externe MX te overschrijven.** Als je apex al naar Google Workspace of Microsoft 365 wijst, retourneert `quickEnableInbox` `apexMx.status = 'conflict'` en moet je kiezen: migreer MX naar Cloudflare, of blijf bij je bestaande provider en sla de gebundelde inbox over.
- **Gereserveerde subdomeinen.** `app`, `admin`, `api`, `www`, `mail`, `support`, `portal`, `dashboard` en een handvol andere zijn geblokkeerd op werkruimte-slug-niveau.
- **Pre-launch.** De bundel is feature-gated door `custom_domains` en `public_business_page`. Werkruimtes zonder deze flags zien de upgrade-prompt in plaats van de editor.

## Gerelateerd

- [Setup-wizard](/nl/getting-started/company-setup) -- de magische onboarding die de gebundelde flow aandrijft.
- [E-mailintegratie](/nl/settings/email) -- uitgaande e-mail, send-as-kiezer, afleveringsregistratie.
- [Sitebouwer](/nl/advanced/business-page) -- de volledige editorgids.
- [Bedrijfsinstellingen](/nl/settings/company) -- de paraplu die Over / Look / Website / Adres bevat.
- [Facturering & Abonnementen](/nl/settings/billing) -- feature flags die de bundel beheren.
