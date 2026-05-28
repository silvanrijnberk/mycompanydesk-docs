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

- Richt de CF Email Sending-identiteit in op het kale apex-domein (`acme.nl` standaard) en schrijft de DKIM- en SPF DNS-records. Een expliciet subdomeinlabel provisioneert `<label>.<domein>` in plaats daarvan (bijv. `mail.acme.nl`).
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

De pagina toont standaard een opgeschoonde weergave met de meest gebruikte tabbladen. Zes power-user tabbladen zijn verborgen totdat je **Geavanceerde modus** inschakelt in `/me/preferences`. Die tabbladen zijn: DNS, SSL, Doorverwijzingen, Analytics, Snelle instellingen en Beveiliging. Zie [Instellingenoverzicht](/nl/settings#account-settings-me) voor het aanzetten van geavanceerde modus.

Wat je op de pagina kunt doen:

- **Domein kopen of claimen** via de domein-aanschafkaart. Voer een domeinnaam in, controleer de beschikbaarheid via OpenProvider, en koop het domein of claim het gratis als je als Founding Member in aanmerking komt.
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
| `inbox_enabled`, `inbox_subdomain_tag`, `inbox_dkim_ready` | Gezet door `quickEnableInbox`. De CF Email Sending-identiteit (apex-domein standaard; `mail.acme.nl` wanneer een subdomeinlabel is opgegeven) en DKIM-voorzieningsstatus. |
| `business_page_enabled`, `portal_subdomain_enabled` | Bepalen welke hostnaam de openbare website bedient. |
| `verified_at` | Gezet wanneer verificatie slaagt.
| `registrar` | De registrar-dienst, momenteel `openprovider` voor domeinen gekocht via de domein-aanschafflow.
| `registrar_domain_id` | De registrar-interne identifier voor gekochte domeinen.
| `purchase_price_period` | Facturatieperiode voor gekochte domeinen (`yearly`).
| `purchase_intent_id` | Verwijst naar de `domain_purchase_intents`-rij voor betaalde aankopen.
| `founder_claim_id` | Verwijst naar de `founder_domain_claims`-rij voor Founder gratis claims.
| `transferred_out_at` | Gezet wanneer tijdens de wekelijkse sync wordt gedetecteerd dat een domein is overgedragen uit het MCD-registraraccount.

#### Verlengingscyclus

Domeinverlenging volgt drie routes, afhankelijk van hoe het domein is verkregen:

1. **Gratis gebundelde verlenging** (Founder-tier of naar Pro geconverteerde trial-tier): MCD neemt de wholesale-verlengkosten voor zijn rekening. Het domein verloopt automatisch zolang de werkruimte op Pro blijft. Geen betaalmiddel nodig.
2. **Betaalde automatische verlenging** (betaalde aankoop, of trial-tier zonder Pro): Jaarlijks in rekening gebracht via de opgeslagen kaart. Werkt als elke andere abonnementsverlenging.
3. **Handmatige verlenging**: Als een trial-tier werkruimte van Pro af valt EN geen opgeslagen kaart heeft, slaat het automatische verlengingspad deze over. De gebruiker ziet een melding en kan een eenmalige betaling starten via `POST /api/domains/renew/:domainId`, wat een Stripe Embedded Checkout-sessie aanmaakt voor de verlenging. Dit is de enige manier om een domein actief te houden zonder actief abonnement of opgeslagen kaart.

#### Overname bij vertrek tijdens de proef

<!-- TODO(source-missing): overnameprijs €15 bevestiging in sources/ -->

Wanneer een klant tijdens de Pro-proefperiode vertrekt zonder Pro-klant te worden, is er een derde optie voor het gratis `.nl`-domein: overnemen voor eenmalig €15 (all-in). De overname-flow (`DomainBuyoutModal.vue`) laat de klant betalen via Stripe Embedded Checkout en krijgt daarmee volledig eigendom. Na betaling wordt de houder overgezet van MCD naar de klant en wordt de verhuiscode (EPP) getoond, waarmee het domein naar elke registrar verhuisd kan worden.

Het overnamebedrag is een productprijs, geen verhuist toeslag. MCD rekent nooit kosten voor de verhuistoken zelf zodra de klant geregistreerd houder is. Het onderscheid is vastgelegd in de interne juridische notitie `docs/legal/gratis-domein-voorwaarden.md` in de RichardTool-repo.

Databasetabellen:

- `domain_buyout_intents` — volgt overname-betalingsintents met Stripe PaymentIntent-ID's en status.

#### Overdrachtsgevolgen

Het overdragen van een domein dat via MyCompanyDesk is geregistreerd naar een andere registrar heeft permanente gevolgen, afgedwongen door de wekelijkse OpenProvider-statussynchronisatie:

- **Founder-tier domeinen**: De Founder-claim wordt verwijderd en het interne levenslange-Pro-abonnement van de werkruimte wordt opgezegd. De werkruimte wordt een normale betalende klant. Dit is onomkeerbaar. De Founder-status kan niet opnieuw worden geclaimd.
- **Trial-tier / Pro-gebundelde domeinen**: De gebundelde-gratis-status gaat verloren. De werkruimte kan nooit meer een ander gratis domein claimen (al afgedwongen via de retained-claims-lijst). Let op: het overnemen van het domein tijdens de proef (zie overnamesectie hierboven) is geen overdracht — het is een houderswijziging die de klant eigendom geeft voordat een overdracht plaatsvindt, waardoor het gratis-domeinvoordeel behouden blijft voor de duur van de proef.
- **Betaalde domeinen**: Geen voordeelintrekking. Het domein gaat simpelweg naar `status = 'transferred_out'`.

De claim-modal waarschuwt voor deze gevolgen voordat een gratis-domein claim wordt ingediend, en vereist expliciete bevestiging van de gebruiker. Een "Zo werkt je gratis domein"-uitleg toont dat het domein tijdens de proef op naam van MCD staat, gratis op eigen naam komt bij Pro, en bij vertrek voor €15 overgenomen kan worden. Intrekkingsdetails worden vastgelegd in de `domain_perk_revocations`-audittabel voor supportreferentie.

#### Domein kopen of claimen

De domein-aanschafkaart (`DomainPurchaseCard.vue`, `domain-purchase.service.ts`) is de eerste kaart op de Domeinen-pagina. De kaart verschijnt wanneer de werkruimte nog geen actief eigen domein heeft. Via de kaart kan de gebruiker een domein uitkiezen en bemachtigen via twee routes, die beide een speciale twee-stappen aanschafmodal openen (`DomainClaimModal.vue`). Stap 1 verzamelt de registrantgegevens (de gegevens die de registrar nodig heeft voor WHOIS). Stap 2 handelt de betaling of claim af:

- **Kopen** -- Betaalde aankoop via OpenProvider. De gebruiker voert een domeinnaam in, de kaart roept `GET /api/domain-purchase/quote` aan om beschikbaarheid en prijs te controleren, en opent daarna de aanschafmodal. Nadat de registrantgegevens zijn ingevuld, roept de modal `POST /api/domain-purchase/checkout-session` aan om een Stripe-betalingssessie aan te maken en toont Stripe Embedded Checkout voor de betaling. Zodra de betaling voltooid is, registreert `POST /api/domain-purchase/finalize` het domein bij OpenProvider en maakt de `domains`-rij aan in nameserver-modus, gekoppeld aan Cloudflare.
- **Gratis claim** -- Werkruimtes op een Pro-trial (inclusief nieuwe Founding Members vanaf 20 mei 2026) die aan de voorwaarden voldoen kunnen een `.nl`-domein gratis claimen voor het eerste jaar. De kaart roept `GET /api/domain-purchase/founder/eligibility` aan om de claim-tier van de werkruimte (`trial` voor trial-leden, `founder` voor gegrandfatherde oorspronkelijke-lichting Founding Members) en de gate-status te controleren. De modal verzamelt de registrantgegevens en roept bij indienen `POST /api/domain-purchase/founder/claim` aan. Het platform betaalt de eerstejaars registratiekosten.

Founder-claims hebben nu twee tiers voor verlenging, bepaald door het Founding Member grant type:

- **Founder-tier** (alleen grandfathered) -- Werkruimtes met het oorspronkelijke grant type `free_for_life` (geclaimd voor 20 mei 2026) krijgen levenslange gratis domeinverlenging. Geen betaalmiddel nodig. Verlenging wordt automatisch door het platform afgehandeld, waarbij MCD de wholesale-kosten draagt. Nieuwe Founding Members vanaf 20 mei 2026 krijgen deze tier NIET; zij claimen onder de trial-tier zoals elke andere trial-werkruimte.
- **Trial-tier** -- Werkruimtes op een trial (inclusief nieuwe Founding Members met grant type `trial_plus_discount`). Het eerste jaar is gratis. Aan het einde van het gratis jaar moet de werkruimte op een betaald Pro-abonnement zitten; het domein verloopt dan als onderdeel van het Pro-abonnement, betaald door de werkruimte. Als de werkruimte stopt met Pro betalen na het gratis jaar, verloopt het domein en moet handmatig verlengd worden. Tijdens het trial-jaar kan de gebruiker optioneel een kaart opslaan via Stripe SetupIntent in de modal voor toekomstige automatische verlenging.
- **Paid-tier** -- Standaard domeinen gekocht voor de volle prijs. Verlenging wordt via de opgeslagen betaalmethode in rekening gebracht op de jaarlijkse cyclus. Als de betaling mislukt, wordt een handmatige-verlenging-melding verstuurd.

Het eligibility-eindpunt (`GET /api/domain-purchase/founder/eligibility`) retourneert een `tier`-veld (`founder` | `trial` | `paid` | `free`) en `founderSlotsRemaining` naast de bestaande gates. De limiet van 50 plekken geldt alleen voor Founder-tier claims (grandfathered cohort); trial-tier claims tellen niet mee voor het Founder-limiet.

De geschiktheid wordt bepaald door harde voorwaarden die server-side worden gecontroleerd in `founder-domain-claim.service.js`:

- **Founding Member-status** -- de werkruimte moet de Founding Member-vlag hebben (grant type bepaalt de tier: `free_for_life` mapt naar `founder`, `trial_plus_discount` mapt naar `trial`).
- **Gratis-domein plekken** voor Founder-tier claims beperkt tot 50 bij grandfathered Founding Members (`free_for_life`). Trial-tier claims vallen hier buiten.
- **KVK vereist** -- de werkruimte moet een KVK-nummer gekoppeld hebben.
- **Domein moet `.nl` zijn** -- de gratis actie geldt alleen voor de NL-extensie.
- **Domein moet overeenkomen met de KVK-naam** -- het domein moet corresponderen met de geregistreerde statutaire naam of een handelsnaam.
- **KVK mag niet op de retained-claims-lijst staan** -- een gratis domein per KVK-nummer. Een KVK die al eerder een gratis domein heeft geclaimd (en daarna overgedragen) is permanent geblokkeerd.

Account-leeftijd en site-inhoud zijn geen harde voorwaarden. Die zouden legitieme claims op de dag van onboarding blokkeren, wat in strijd is met de belofte "je bedrijf in een dag opzetten, domein inbegrepen". In plaats daarvan stromen beide in de Gemini-abuse-score als zachte signalen: een gloednieuw account met een template-site scoort laag en komt in handmatige beoordeling; een echt bedrijf met echte inhoud wordt automatisch goedgekeurd, ongeacht de leeftijd. Het eligibility-antwoord bevat een `softSignals`-blok (`ageDays`, `sitePublished`, `paragraphCount`) zodat de UI een hint kan tonen zonder de claim te blokkeren.

Wanneer een voorwaarde niet wordt gehaald, toont de kaart de resterende vereisten zodat de gebruiker kan zien wat er nog nodig is voordat de gratis claim beschikbaar komt.

De ondersteunde TLD's voor aankoop zijn `.nl`, `.eu`, `.com`, `.net` en `.org`. Andere TLD's tonen een melding dat ze nog niet worden ondersteund, met de suggestie het domein elders te kopen en via de bestaande BYO-route toe te voegen.

Nieuwe databasetabellen die door deze feature zijn toegevoegd:

- `domain_purchase_intents` -- volgt betaalde aankoopintents met Stripe PaymentIntent-ID's, registrantgegevens en aankoopstatus.
- `founder_domain_claims` -- volgt Founder gratis claims met geschiktheidssnapshots, abuse-scoring en claimstatus.
- `domain_buyout_intents` -- volgt overname-betalingsintents bij vertrek tijdens de proef met Stripe PaymentIntent-ID's en overdrachtsstatus.
- `domain_registrar_columns`-migratie voegt registrar-gerelateerde kolommen toe aan de bestaande `domains`-tabel.

### Gehoste website

De sitebouwer staat op `Bedrijf › Je website` (`/website`). Het is een volwaardige multi-pagina-editor met secties, blokken, ontwerptokens en publicatiesnapshots. Wanneer je werkruimte meerdere actieve eigen domeinen heeft (Pro-abonnement), kun je via een domeinwisselaar in de bovenbalk een per-domein-variant van de site bewerken. Elk domein krijgt zijn eigen pagina's, navigatie, ontwerptokens en publicatiesnapshot. Wisselen van domein zet de actieve tab terug. De openbare website wordt getoond op je eigen domein (of werkruimte-subdomein / terugvalportalroute) zodra gepubliceerd.

Wat de editor laat zien:

- **Domeinwisselaar** (bovenbalk) -- Wanneer er meer dan één actief domein is, kun je via een dropdown kiezen welke sitevariant je wilt bewerken. De hoofdsite-optie toont je werkruimtenaam. Domeinen die nog geen variant hebben tonen een "eigen variant maken"-hint en klonen de hoofdsite bij de eerste selectie.
- **Editor-tab** -- Stel pagina's samen door secties toe te voegen en te rangschikken (hero, tekst, galerij, diensten, team, testimonials, contactformulier, tarieven, product, aangepaste HTML). Bekijk en bewerk sectie-inhoud, layout, stijl en animatie. Sla secties op als herbruikbare blokken om je eigen bibliotheek van voorgestijlde layouts op te bouwen die je op elke pagina kunt plaatsen. Tarieven kunnen optioneel een koopknop krijgen die doorverwijst naar de Mollie- of Stripe Connect-checkout. Elke tier heeft een instelbaar BTW-tarief (21%, 9% of 0%), waarbij de prijs die de klant ziet de uiteindelijke prijs is, inclusief BTW. Het productblok is een losse koopkaart met dezelfde betalingskoppeling.
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

- **Threading** -- inkomende mail wordt gegroepeerd in threads op basis van RFC 822 `Message-ID` / `In-Reply-To` / `References`. Elke thread bevat `last_message_preview`, `participants`, status (`open / snoozed / closed / spam / deleted`) en labels. Lange threads vouwen de middelste berichten samen achter een "Toon {n} eerdere berichten"-pil, zodat het oudste bericht en de nieuwste twee zichtbaar blijven (Gmail/Outlook-conventie). Klik op de pil om alles uit te vouwen.
- **Beantwoorden** -- inline antwoordveld op de thread. Slimme `From` kiest het adres waarnaar de oorspronkelijke mail was gestuurd, zodat een klant die naar `support@acme.nl` mailde antwoord krijgt van `support@`, niet `info@`.
- **Allen beantwoorden** -- antwoord in een klik naar alle deelnemers van de thread. De knop staat naast Beantwoorden in de thread-header en neemt elke ontvanger uit het oorspronkelijke bericht mee.
- **Doorsturen** -- stuur de hele thread door naar een andere ontvanger. Opent een opstellade met het oorspronkelijke bericht en de bijlagen, klaar om te bewerken voor verzending. De header van het doorgestuurde bericht toont de oorspronkelijke afzender, datum en onderwerp.
- **CC en BCC** -- CC- en BCC-velden zijn beschikbaar bij zowel opstellen als beantwoorden via een "Cc/Bcc toevoegen"-toggle. Adressen accepteren kommagescheiden lijsten of plakken vanuit het klembord. De velden blijven verborgen tot je ze nodig hebt, volgens het standaard inbox-patroon waarbij de meeste berichten ze niet nodig hebben.
- **Concepten** -- bewaar deels geschreven berichten en kom er later op terug. Concepten worden server-side opgeslagen en blijven bewaard tussen browsersessies. Elk concept heeft een onderwerp, ontvangerlijst en berichttekst. Concepten zonder onderwerp tonen "(geen onderwerp)", en concepten zonder ontvanger tonen "(geen ontvanger)". Een antwoord-concept krijgt een "Antwoord"-chip in de threadlijst, zodat je in een oogopslag ziet op welke thread je bezig was met antwoorden.
- **Opstellen** -- ladeformulier met een enkele identiteitskiezer die mailbox en afzenderadres in één bediening instelt, klantkiezer (of vrij `Aan`), onderwerp, bericht, CC/BCC-velden, bijlagen. Waarschuwing voor bounced ontvanger wordt getoond voor verzending.
- **Send-from aliassen** -- `info@`, `support@`, `sales@` zijn bidirectionele aliassen op dezelfde mailbox. `noreply@` is alleen-verzend -- selecteerbaar als From, maar inkomende mail erop wordt weggegooid bij opname.
- **Bijlagen** -- uploaden voor verzending (zowel opstellen als beantwoorden). Bijlagen op inkomende mail zijn downloadbaar vanuit het bericht; ondertekende download-URL's verlopen na een korte TTL.
- **Alias-melding** -- wanneer een inkomend bericht binnenkomt op een adres dat nog geen geregistreerd alias is, toont de thread een zachte melding met een "Toevoegen als alias"-actie.
- **Koppelen** -- threads kunnen worden gekoppeld aan een klant, project of factuur voor kruisverwijzing.
- **Catch-all terugval** -- mail naar elk lokaal deel op het domein valt door naar de standaardmailbox (`is_default = true`, een per domein). Dit betekent dat typefouten en niet-gedeclareerde aliassen niet stil verdwijnen.
- **Auditlog** -- uitgaande verzendingen, mailboxwijzigingen en threadstatuswijzigingen worden vastgelegd in een audittabel voor de werkruimte. Momenteel alleen API (nog geen UI) -- toegankelijk voor supportmedewerkers voor troubleshooting.
- **HTML-e-mailweergave** -- HTML-e-mails worden met hun originele opmaak getoond in een sandboxed iframe. De renderer verwijdert scripts, formulieren en event handlers tijdens de opschoning, en blokkeert standaard externe afbeeldingen om je privacy te beschermen. Een meldingsbalk verschijnt wanneer afbeeldingen geblokkeerd zijn, met een enkele klik op "Toon afbeeldingen" om het bericht opnieuw te tonen met afbeeldingen. Als er geen HTML-body is, toont de fallback het platte-tekstdeel.
- **Markeren met ster**: markeer belangrijke threads met een ster voor snelle toegang. Een ster-icoon verschijnt naast de statuspunt op threads met een ster in de threadlijst. De werkbalk heeft een ster-knop die de status wisselt voor de geopende thread. Een "Met ster gemarkeerd"-weergave in de linkerzijbalk naast Open, Gesluimd, Gesloten, Spam en Prullenbak filtert op threads met ster, ondersteund door een gedeeltelijke database-index voor directe resultaten.
- **Zacht verwijderen** -- threads kunnen naar de Prullenbak worden verplaatst in plaats van permanent te worden vernietigd. Een verwijderknop (prullenbakicoon) verschijnt in de werkbalk voor niet-verwijderde threads. Eenmaal verwijderd, verandert de knop in een herstelactie die de thread terugzet naar `open`. Het Prullenbak-filter verschijnt in de linkerzijbalk naast Open, Gesluimd, Gesloten en Spam, zodat je verwijderde threads kunt bekijken voordat ze definitief worden opgeschoond.
- **Volledige tekst zoeken**: een zoekbalk boven de threadlijst laat je alle inboxberichten doorzoeken op onderwerp, berichttekst, snippet en afzender. De zoekopdracht maakt gebruik van Postgres full-text search met gewogen veldrangschikking, zodat treffers in het onderwerp boven treffers in de berichttekst verschijnen. Resultaten worden gegroepeerd per thread, met de snippet van het best overeenkomende bericht als voorbeeldregel. Ondersteunt zinnen tussen aanhalingstekens, `OR` en `-` uitsluitingen. Een vertraging van 250 ms houdt de interface responsief, en de laadindicator geeft realtime feedback.

#### Concepten

De Concepten-tab staat naast de hoofdthreadlijst. Concepten worden server-side opgeslagen, dus ze overleven het herstarten van de browser en gaan mee naar andere apparaten. Wanneer je een nieuw bericht of antwoord begint en de opstellade sluit zonder te verzenden, wordt de inhoud automatisch als concept opgeslagen. Je kunt ook expliciet opslaan met de knop "Concept opslaan". Een concept-chip toont "Antwoord" als het concept vanuit een thread is gestart, of "Nieuw" bij een nieuw bericht. Een concept bewerken opent de opstellade met de opgeslagen inhoud. Een concept verwijderen vraagt om een bevestiging.

De inbox gebruikt je eigen domein pas nadat `quickEnableInbox` succesvol is uitgevoerd en de apex MX-records naar Cloudflare wijzen. Tot die tijd kan de werkruimte wel mail versturen via het standaard afleverpad beschreven in [E-mailintegratie](/nl/settings/email), maar geen mail ontvangen.

#### Live polling

De inbox ververst automatisch zolang de tab open staat. De threadlijst pollt elke 45 seconden op nieuwe mail, en de sidebar-badge ververst elke 60 seconden. Beide pauzeren zodra de tab op de achtergrond staat, dus geen onnodig netwerkverkeer. Het pollen is stil: laadspinners knipperen niet bij achtergrondverversingen, en polls worden overgeslagen tijdens een actieve zoekopdracht zodat je resultaten stabiel blijven. Een handmatige vernieuw-knop naast Opstellen haalt meteen de laatste stand op als je iets direct verwacht; de knop is uitgeschakeld tijdens de lopende aanroep om request-stapeling te voorkomen.

#### Markeren als ongelezen

Je kunt een geopende thread vanuit de toolbar als ongelezen markeren. Waar de ongelezen-status eerder alleen lokaal werd bijgehouden en bij een refetch verdween, wordt dit nu server-side opgeslagen. De sidebar-badge telt ongelezen berichten, niet threads met ongelezen berichten, en wordt dienovereenkomstig bijgewerkt. De thread blijft ongelezen bij paginaherladingen, browserherstart en op andere apparaten totdat je hem opnieuw opent.

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

## Zichtbaarheid van de Inbox-tab

De Inbox-tab verschijnt alleen in de zijbalk en de onderste navigatiebalk als de werkruimte een inbox-domein heeft geconfigureerd. Toegang op abonnementsniveau alleen is niet genoeg -- de werkruimte moet de onboarding-flow hebben voltooid en op minstens een domein de inbox hebben ingeschakeld. Dit voorkomt dat de tab verschijnt bij gebruikers die via hun abonnement wel toegang hebben tot inbox, maar hun mail elders lezen en nooit een lege tweede inbox willen zien.

Op gratis abonnementen die geen inbox hebben, blijft de tab zichtbaar als upgrade-hint. Maar op betaalde abonnementen verschijnt de tab automatisch zodra een domein via de setup-wizard is ingericht en de inbox klaar is.

## Demo-website claimen

Wanneer MyCompanyDesk een demo-website bouwt voor een prospect als onderdeel van het outreach-programma, ontvangt de prospect een persoonlijke claimlink (via WhatsApp of e-mail). De claimpagina op `/claim/<slug>` laat de prospect het demo-werkruimte overnemen met een eigen e-mailadres en wachtwoord.

### Zo werkt het

1. Sil of de outreach-cron maakt een demo-werkruimte aan (`companies.is_demo = true`) met een branchespecifieke website van 4 pagina's (Home, Diensten, Over ons, Contact), gebouwd op de standaard multi-page basis die elke nieuwe werkruimte krijgt, waarna branchespecifieke kopij over de Home-hero wordt gelegd.
2. De prospect ontvangt een link zoals `https://app.mycompanydesk.com/claim/dakdekker-amsterdam`.
3. De claimpagina laadt de demo op basis van de slug en toont de bedrijfsnaam. Als de demo-werkruimte bestaat en claimable is, vult de prospect zijn e-mailadres en een wachtwoord in (minimaal 8 tekens, met een letter en een cijfer).
4. Bij verzending wordt de werkruimte atomisch overgedragen: de placeholder-gebruiker wordt herschreven met het e-mailadres en wachtwoord van de prospect, `is_demo` wordt uitgezet en de outreach-rij wordt bijgewerkt met claim-metadata.
5. Het e-mailadres wordt bij de claim als geverifieerd gemarkeerd (de prospect heeft al aangetoond eigenaar te zijn van het contactkanaal dat voor outreach is gebruikt). Er wordt nog steeds een welkomstmail verstuurd, zodat het adres in hun inbox staat.
6. De prospect wordt doorgestuurd naar de inlogpagina met een succesmelding en kan meteen inloggen, de website bewerken, facturen versturen en de inbox gebruiken.

### Veiligheidsgaranties

- Alleen werkruimtes met `is_demo = true` kunnen worden geclaimd. Echte klantsites zijn nooit via dit endpoint te claimen.
- Het e-mailadres mag nog niet bij een andere gebruiker op het platform horen.
- De claim is atomisch (een enkele databasetransactie), dus gedeeltelijke overdrachten kunnen geen inconsistente staat achterlaten.
- Claimlinks worden ongeldig zodra de demo is geclaimd, waardoor hergebruik wordt voorkomen.

## Mail verzenden vs mail ontvangen

Deze bundel is de **ontvangstkant**. Uitgaande e-mail -- factuurverzending, herinneringen, offerteverzending -- wordt afgehandeld door de bredere e-mailpipeline beschreven in [E-mailintegratie](/nl/settings/email). De inbox is voor het ontvangen van klantmail en het opstellen van antwoorden; hij routeert je geautomatiseerde factuurverzendingen niet. Factuurbezorging volgt altijd je gekozen verzendmethode onder [E-mailintegratie](/nl/settings/email) (Gmail, Outlook of de ingebouwde verzender). De DKIM van het inboxdomein wordt gebruikt voor uitgaande antwoorden die je in de inbox opstelt, niet voor geautomatiseerde transactionele mail.

## Limieten en aandachtspunten

- **Een website per bedrijf.** Het toevoegen van een eigen domein deactiveert het werkruimte-subdomein. Het verwijderen van het domein herstelt de slug niet automatisch -- activeer het handmatig opnieuw als je wilt terugvallen.
- **CNAME-modus heeft geen e-mail.** E-mailroutering vereist een volledige Cloudflare-zone, wat alleen nameserver-modus biedt.
- **De wizard weigert een bestaande externe MX te overschrijven.** Als je apex al naar Google Workspace of Microsoft 365 wijst, retourneert `quickEnableInbox` `apexMx.status = 'conflict'` en moet je kiezen: migreer MX naar Cloudflare, of blijf bij je bestaande provider en sla de gebundelde inbox over.
- **Gereserveerde subdomeinen.** `app`, `admin`, `api`, `www`, `mail`, `support`, `portal`, `dashboard` en een handvol andere zijn geblokkeerd op werkruimte-slug-niveau.
- **Pre-launch.** De bundel is feature-gated door `custom_domains` en `public_business_page`. Werkruimtes zonder deze flags zien de upgrade-prompt in plaats van de editor.

## Gerelateerd

- [Setup-wizard](/nl/getting-started/company-setup) -- de magische onboarding die de gebundelde flow aandrijft.
- [E-mailintegratie](/nl/settings/email) -- uitgaande e-mail, send-from identiteitskiezer, afleveringsregistratie.
- [Sitebouwer](/nl/advanced/business-page) -- de volledige editorgids.
- [Bedrijfsinstellingen](/nl/settings/company) -- de paraplu die Over / Look / Website / Adres bevat.
- [Facturering & Abonnementen](/nl/settings/billing) -- feature flags die de bundel beheren.
