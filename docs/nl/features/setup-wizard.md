---
title: Setup Wizard
last_verified: 2026-05-19
---

# Setup Wizard

Een magische setup in vijf stappen op `/setup` die je bedrijfsidentiteit vastlegt, optioneel je registratie ophaalt bij de KvK of een EU-register, een webadres kiest, merksuggesties genereert en alles in een klik toepast. De wizard is de voordeur voor nieuwe gebruikers en blijft daarna beschikbaar voor aanpassingen.

Als je hier bent voor de basiswandeling, begin dan bij [Je bedrijf instellen](/nl/getting-started/company-setup). Deze pagina is de diepe referentie: elke stap, elke optie, elk gevolg.

## Wanneer de wizard wordt aangeboden

De wizard is op twee manieren bereikbaar:

- **Direct:** ga op elk moment naar `/setup`.
- **Dashboard-banner:** zolang de onboarding niet voltooid is, staat er een sluitbare "Setup afronden"-banner bovenaan `/dashboard`. Deze toont een teller van openstaande velden (of een generiek "Maak je profiel compleet"-bericht als de teller nul is) en een knop terug naar de wizard. Een sluitknop (X-icoon) verbergt de banner per browser via localStorage, zodat deze over herlaadbeurten heen verborgen blijft totdat de wizard is voltooid.

De wizard is niet-blokkerend: de oude gedwongen doorverwijzing naar `/setup` bij aanmelding (de `ONBOARDING_MANDATORY`-poort) is verwijderd. Nieuwe aanmeldingen komen direct op `/dashboard` en zien in plaats daarvan de sluitbare banner.

## Pagina-opbouw

De wizard is een enkele pagina (`/setup`) met vijf stappen in een stepper. Elke stap schrijft de antwoorden bij elke wijziging naar een JSONB-kolom (`companies.onboarding_state`), dus de wizard is volledig hervatbaar: sluit de tab midden in een stap en het volgende bezoek brengt je naar dezelfde stap met dezelfde ingevulde antwoorden.

Drie knoppen staan onderaan elke stap:

- **Terug** — ga naar de vorige stap (verborgen bij stap 1).
- **Nu overslaan** — vertrek zonder de onboarding als voltooid te markeren. De dashboard-banner blijft staan zodat de gebruiker kan terugkeren.
- **Doorgaan** / **Voltooien** — per stap beveiligd op de onderstaande antwoorden.

Er is geen "opslaan en afsluiten" — opslaan gaat automatisch. **Nu overslaan** is een schone uitgang, geen weggooien.

## Stap 1 — Bedrijf

Legt de twee antwoorden vast waarvan elke latere stap afhangt.

| Veld | Opgeslagen als | Verplicht | Opmerkingen |
|---|---|:---:|---|
| Bedrijfsnaam | `answers.businessName` | ja | Gebruikt als `display_name` en `company_name` bij Voltooien (de juridische naam uit de registerstap wint voor `company_name` als beide aanwezig zijn). Vult ook de subdomein-slug-suggestie in stap 3. |
| Wat je doet | `answers.what` | ja | Vrije tekst, 1–2 zinnen. Wordt samen met land en sector naar de suggestie-generator (Gemini) van de magische stap gestuurd. |

**Doorgaan is uitgeschakeld** totdat beide velden niet-lege, bijgesneden waarden hebben.

## Stap 2 — Register

Kies een land en zoek het bedrijf op in het officiele register van het land, vul de gegevens handmatig in, of sla de stap over.

### Drie wegen

1. **Zoeken:** typeahead op bedrijfsnaam, kies een match en laat de backend het Basisprofiel ophalen (EUR 0,02 per aanroep voor NL). Het zoekvak wordt alleen getoond als de betaalde KVK API (`KVK_API_KEY`) is ingesteld op de API-container. Als de sleutel ontbreekt, wordt zoeken overgeslagen en start de wizard standaard met handmatige invoer (weg 2).
2. **Handmatig:** vul zelf de bedrijfsnaam, KVK-nummer (optioneel), adres, postcode en plaats in. De gegevens worden direct naar de bedrijfsrij geschreven via `PUT /company-settings/company` en `answers.kvk` krijgt `manual: true`. Handmatige invoer is de standaard wanneer KVK_API_KEY niet is ingesteld, en bestaat ook voor twee extra situaties zelfs wanneer zoeken beschikbaar is: (a) nieuwe bedrijven die nog niet in de gratis OpenKVK-dataset staan, en (b) bedrijven waarvan de handelsnaam niet overeenkomt met wat de gebruiker in de zoekopdracht typte.
3. **Overslaan** — "Geen KVK-inschrijving?" slaat `answers.kvk = null` op. De wizard gaat verder; bedrijfsgegevens kunnen later in de instellingen worden ingevuld.

Wisselen tussen zoeken en handmatig gaat met een klik (wanneer zoeken beschikbaar is): een "Vul handmatig in"-knop staat onder de zoekresultaten, en een "Terug naar KVK-zoeken"-link bovenaan het handmatige formulier. Wanneer `KVK_API_KEY` ontbreekt, is de schakel-naar-zoeken-knop volledig verborgen en begint en blijft de gebruiker op handmatige invoer.

### Landopties

| Code | Getoond register | Opzoeken actief |
|---|---|:---:|
| `NL` | KvK | ja |
| `FR` | SIRENE | ja |
| `GB` | Companies House | ja |
| `DE` | Handelsregister | nee — handmatige invoer |
| `OTHER` | (geen register) | nee — handmatige invoer |

`NL` is de standaard. Land bepaalt meerdere dingen bij Voltooien: tijdzone (`Europe/Amsterdam` / `Europe/Berlin` / `Europe/Paris` / `Europe/London`), `pdf_language` (`nl` / `de` / `fr` / `en`), en het registerlabel in `footer_text` (`KvK 12345678`, `Handelsregister …`, `SIRENE …`, `CRN …`).

### Zoekmodus

Voor ondersteunde landen zoekt de gebruiker op bedrijfsnaam. De backend roept de bijpassende publieke API aan en retourneert een van:

- **ok** — `legalName`, `address`, `postalCode`, `city`, `sector` ingevuld en opgeslagen onder `answers.registry`.
- **not-configured** — provider nog niet aangesloten in deze omgeving; de gebruiker wordt gevraagd over te schakelen naar handmatige invoer.
- **not-found** — nummer niet gevonden; gebruiker kan opnieuw proberen of overschakelen naar handmatig.
- **invalid** — nummerformaat afgewezen.
- **error** — providerfout; handmatige invoer blijft een optie.

<!-- TODO(source-missing): KvK Basisprofiel API pricing (EUR 0.02/call) and subscription (EUR 6.40/month) from developers.kvk.nl/nl/pricing -->
#### KvK Basisprofiel (alleen NL)

Voor NL-werkruimtes is de KvK-opzoeking een tweestapsproces:

1. **Typeahead** — de gebruiker zoekt op bedrijfsnaam. Het `zoeken`-endpoint (gratis) retourneert overeenkomende vermeldingen. Dit is de autocomplete-stap die de bestaande `ok` / `not-found`-antwoorden aanstuurt. Als de zoekopdracht nul treffers oplevert, toont de UI een inline leeg-resultaatpaneel (titel, uitleg, en een "vul handmatig in"-knop die het handmatige formulier alvast vult met wat de gebruiker typte). Dit is gebruikelijk omdat de gratis OpenKVK-laag veel jonge bedrijven mist.
2. **Basisprofiel** — zodra een match is gekozen, roept de wizard het KvK Basisprofiel-detailendpoint aan. Dit is een betaalde aanroep (EUR 0,02, 24u gecached per KVK-nummer). Het retourneert het volledige profiel: `legalName`, `statutaireNaam`, `tradeNames` (alle geregistreerde handelsnamen, gesorteerd), `rsin`, `legalForm`, `dateFounded`, bezoek- en postadressen, SBI-codes met primair-vlag, `employeeCount` en `indNonMailing` (geen-post-vlag). De wizard vult `business_page_hero_tagline` met de eerste handelsnaam en plaats ("[handelsnaam] in [plaats]"), en `description` met de primaire SBI-omschrijving (beperkt tot 280 tekens). Beide gebruiken COALESCE zodat handmatige aanpassingen in Instellingen behouden blijven.

Wanneer een match wordt gekozen (zoekmodus), roept de frontend direct `PUT /company-settings/company` aan met de `name` van de match als `display_name`, het `kvkNumber` als `chamber`, `city`, en `country` hardcoded op `"NL"`. Dit schrijft de klantgerichte weergavenaam direct weg, zodat de dashboardbegroeting en de ge-seede site de juiste naam gebruiken vanaf het moment dat de gebruiker op de match klikt, in plaats van te wachten op de Voltooien-stap van de wizard.

Er zijn twee onafhankelijke functievlaggen voor NL KVK-opzoekingen:

- `KVK_API_KEY` (env-var op de API-container): als deze ontbreekt, wordt het zoekvak helemaal niet getoond en start de wizard op die stap standaard met handmatige invoer. De gratis OpenKVK-laag alleen is te beperkt (~2% trefferkans, mist bijna elke nieuwe inschrijving). De vlag schakelt automatisch om zodra de sleutel is ingesteld.
- `KVK_BASISPROFIEL_ENABLED`: als deze uit staat (of als `KVK_API_KEY` ontbreekt), gebruikt de wizard alleen het gratis `zoeken`-resultaat (dezelfde `ok`-velden als hierboven). Als deze aan staat en `KVK_API_KEY` is aanwezig, verrijken de Basisprofielgegevens de `answers.registry`-payload en toont de Controle-stap elk veld dat naar de bedrijfsrij wordt geschreven.

### Handmatige modus

Gebruiker vult `chosen` (het registratienummer) in, en optioneel `legalName`, `address`, `sector`. Alle vier velden zijn optioneel in deze modus.

Bij opslaan roept de frontend `PUT /company-settings/company` aan met de handmatig ingevulde waarden plus `display_name` ingesteld op de hier getypte bedrijfsnaam en `country` hardcoded op `"NL"`. Dit schrijft zowel de klantgerichte naam als het land direct weg, in plaats van te wachten op de Voltooien-stap. De apply-logica van de Voltooien-stap leest nog steeds `answers.kvk` voor het legacy registerpad, maar het nieuwe 2-staps wizardpad leest `answers.kvk.legalName` en `answers.kvk.kvkNumber` direct, dus de inline PUT tijdens deze stap is de gezaghebbende schrijfactie.

### Overslaan-modus

Een "Nog niet geregistreerd"-toggle slaat `answers.registry = null` op. **Doorgaan is altijd toegestaan op deze stap**, ongeacht de modus — registergegevens zijn gemak, geen poort.

## Stap 3 — Domein

Kies het webadres dat je klanten zien op de openbare bedrijfspagina en je e-mailinbox. Drie routes, weergegeven als kaarten, dekken elk pad van gratis snelstart tot het kopen van een domein in de wizard.

### Drie-keuze-kiezer

Een rooster van drie kaarten biedt de keuze. Het selecteren van een route onthult de bijbehorende editor eronder; er is maar een route tegelijk actief.

**Subdomein (gratis):** de gebruiker kiest een slug; een TLD-kiezer laat kiezen tussen `.mycompanydesk.nl` en `.mycompanydesk.com`. De slug is vooringevuld vanuit de KVK-juridische naam wanneer beschikbaar (kleine letters, accenten verwijderd, niet-ASCII-tekens verwijderd, afgekapt op 63 tekens), zodat de meeste gebruikers kunnen tikken-en-doorgaan zonder te typen. Beschikbaarheid wordt live gecontroleerd met een vertraging van 350 ms terwijl de gebruiker typt. Bij Voltooien wordt het subdomein via de Cloudflare API aangemaakt en is de website van het bedrijf direct bereikbaar.

Wanneer de wizard wordt uitgevoerd in de 2-staps (plan-gestuurde) flow, wordt de Domein-stap volledig overgeslagen. De Voltooien-stap maakt automatisch een werkruimte-subdomein aan op basis van de `display_name`-waarde: de slug wordt afgeleid van de weergavenaam (met opnieuw-proberen-bij-botsing-achtervoegsels tot 5 pogingen), en `activateSubdomain` registreert deze als de openbare site-URL. Best-effort: een botsing of fout wordt gelogd en blokkeert de wizard niet om te voltooien.

**Eigen domein:** de gebruiker typt een domein dat hij al bezit. Een live validatie-regex controleert het formaat tijdens het typen (`[a-z0-9][a-z0-9-]*(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+`). Bij Voltooien voegt de wizard het domein toe aan de domeinlijst van de werkruimte (geen actie als het al was toegevoegd) en schakelt automatisch de inbox in: `info@<domein>` als de standaard mailbox plus `support@`, `sales@` en `noreply@` aliassen. Het 409-al-bestaand-pad van `apply.service` wordt netjes afgehandeld.

Als het domein nog niet naar de nameservers van MCD wijst, stuurt Voltooien door naar `/workspace/organization/company/address` zodat de gebruiker direct de DNS-instructies en een **Verifieren**-knop ziet. Anders gaat het naar het dashboard.

**Registreer een domein:** integreert de live `DomainPurchaseCard` + `DomainClaimModal` uit de instellingenomgeving. De gebruiker kan een domein zoeken, beschikbaarheid en prijs controleren, en het kopen via OpenProvider of gratis claimen als Founding Member. Bij een succesvolle claim of aankoop is het domein al server-side aan de werkruimte gekoppeld via de `/api/domain-purchase`-flow, dus de wizard slaat het antwoord op als `mode='own'` met de geregistreerde naam en `registered: true`; `apply.service` behandelt het als een no-op hertoevoeging. Een groene succesbanner toont de geregistreerde domeinnaam en laat de gebruiker doorgaan.

Als de gebruiker de Registreer-route opent maar geen aankoop voltooit, wordt de stap gemarkeerd als overgeslagen zodat de wizard verder kan. Ze kunnen later terugkeren via `Bedrijf › Je eigen .com-adres` wanneer ze er klaar voor zijn.

### Terugschakelen van een eigen domein naar een subdomein

Als de werkruimte al een eigen websitedomein heeft, toont de wizard een waarschuwing voordat de gebruiker naar het subdomeinpad kan overschakelen — `activateSubdomain` weigert op bedrijven met nog een aangepast domein, en de fout zou anders pas bij Voltooien zichtbaar worden.

## Stap 4 — Magie

Genereert merksuggesties op basis van de tot nu toe vastgelegde antwoorden. Velden:

- **Merkkleur** — hex. Als de gebruiker in deze stap een logo uploadt, wordt de dominante niet-witte kleur uit de raster gehaald (via `sharp`) en gebruikt; dat overschrijft de Gemini-suggestie, en een vlag (`brandColorFromLogo`) voorkomt dat een latere hergeneratie het overschrijft. Alleen-SVG-logo's en overwegend witte invoer vallen terug op het Gemini-palet.
- **Tagline** — korte hero-regel voor de openbare bedrijfspagina.
- **Over-tekst** — paragraaf voor de bedrijfspagina.
- **Diensten** — lijst van maximaal 8 dienstnamen. Elk wordt bij Voltooien in `company_services` ingevoegd, maar **alleen als het bedrijf nog nul diensten heeft** — de wizard overschrijft nooit een bestaande dienstenlijst.
- **E-mailtoon** — `formal` / `friendly` / `casual`. Vertaalt naar de e-mailstijl: `formal → classic`, `friendly` en `casual → modern`.
- **E-mailsjablonen** — gesorteerd op sjabloontype (`invoice_default`, `reminder_default`, enz.), elk met `subject` + `body`. Opgeslagen via de e-mailsjabloonrepository bij Voltooien.

De gebruiker kan elke suggestie inline bewerken voordat hij doorgaat. **Doorgaan is uitgeschakeld** totdat er suggesties zijn (minstens een keer op **Suggesties genereren** klikken).

### Logo-upload

Klikken op de upload-tegel laat de gebruiker een afbeelding kiezen tot 4 MB. Het bestand wordt als base64 data-URI naar `/onboarding/upload-logo` gestuurd, die:

1. Het opslaat via het canonieke bedrijfslogopad.
2. De dominante niet-witte kleur retourneert, die automatisch op de merkkleursuggestie wordt toegepast.
3. `answers.logoUploaded = true` zet, zodat de Controle-tekst zich aanpast ("we gebruiken je logo" in plaats van "we maken een initialenlogo van je bedrijfsnaam") en de toepasstap de initialengenerator overslaat.

Als de gebruiker al een logo had, wordt dat getoond als bestaande voorvertoning ("je hebt al een logo") in plaats van een lege upload-CTA.

## Stap 5 — Controle

Alleen-lezen diff van elk veld dat de wizard zou wijzigen. Twee secties:

- **Wijzigingen** — `huidig → nieuw` rijen. Bevat een staal voor `brandColor`. Alleen velden die de wizard schreef en die afwijken van de huidige bedrijfsrij verschijnen hier.
- **Al ingesteld** — velden die de wizard vastlegde maar die al overeenkomen met de bedrijfsrij.

Getoonde velden: bedrijfsnaam, land, registratienummer, juridische naam, adres, merkkleur, tagline, over-tekst, domeinoverzicht (`info@<opgelost-domein>` wordt getoond als een domein is ingesteld).

De **Voltooien**-knop in de footer roept `/onboarding/complete` aan. De huidige locale wordt doorgestuurd zodat standaardtekst (bijv. betalingsinstructies) gelokaliseerd is.

## Wat Voltooien daadwerkelijk toepast

`apply.service.js` doorloopt de antwoorden en schrijft ze in de echte bedrijfsrij. Twee semantieken, bewust gesplitst:

**Altijd overschrijven** wanneer het wizard-antwoord een niet-lege string is en afwijkt van de huidige waarde:

- `display_name`, `company_name`
- `country` (valt terug op `"NL"` als `answers.country` niet is ingesteld , het 2-staps wizardpad vraagt geen land, dus NL is de impliciete standaard)
- `chamber` (via `answers.kvk.kvkNumber` indien aanwezig)

Als de 2-staps wizard geen domein-antwoord heeft vastgelegd, maakt Finish automatisch een werkruimte-subdomein aan op basis van de `display_name`-waarde wanneer het abonnement subdomeinen toestaat en het bedrijf geen eigen domein heeft. De slug wordt afgeleid van `display_name` (kleine letters, ASCII, max 60 tekens, opnieuw geprobeerd met `-2`…`-5` achtervoegsel bij botsing).
- `chamber`, `address`, `postal_code`, `city`
- `brand_color`, `description`, `business_page_hero_tagline`

**Alleen lege velden vullen** (nooit een bestaande handmatige keuze overschrijven, zodat herstarts gebruikers niet verrassen):

- `second_accent_color` (afgeleid van merkkleur indien leeg)
- `email_style` (van e-mailtoon)
- `timezone` (landstandaard)
- `pdf_language` (landstandaard)
- `footer_text` (stijl `Handelsnaam - KvK 12345678`)
- `payment_options_enabled` (`bank_transfer`)
- `payment_default_method` (`bank_transfer`)
- `payment_instructions` (gelokaliseerde standaardtekst)
- `email_footer_show_website`, `email_footer_show_support_email`, `email_footer_show_business_page` (booleans)

Neveneffecten buiten kolomschrijvingen:

- **Initialenlogo** wordt gegenereerd uit bedrijfsnaam + merkkleur, maar alleen als `logo_path` en `logo_svg` beide leeg zijn. Volledig overgeslagen als de gebruiker een echt logo uploadde in de Magie-stap.
- **Diensten** — tot 8 invoegingen in `company_services`, alleen als het bedrijf er nog geen heeft.
- **E-mailsjablonen** — per type opgeslagen via de sjabloonrepository.
- **Website-site-seed** — bij de eerste Voltooien die nul pagina's in de werkruimte vindt, maakt `apply.service.js` een standaardsite met een concept-startpagina (`/`, template "home", `is_home: true`) en vult de ontwerptokens met de merkkleur uit de wizard. Herhaalde uitvoeringen slaan het aanmaken over wanneer er al een pagina bestaat, zodat de wizard nooit handmatige aanpassingen overschrijft.
- **Domein** — `activateSubdomain` voor het subdomeinpad, of `addDomain` + `quickEnableInbox` (+ optionele persoonlijke mailbox) voor het eigen-domeinpad.

Als domeintoewijzing mislukt, wordt de rest van Voltooien nog steeds toegepast — de fout verschijnt op het Voltooien-scherm met een specifieke foutcode (`subdomain_failed`, `domain_failed`, `inbox_enable_failed`, `personal_mailbox_failed`, `personal_mailbox_remove_failed`, `personal_mailbox_list_failed`) vertaald naar een gebruikersleesbare regel.

## Voltooien-scherm

Een groen bevestigingspaneel dat 4,2 seconden (of 0,9 seconden wanneer er niets is toegewezen) wordt getoond voordat het doorverwijst. Het toont elk item dat de wizard heeft ingesteld in een overzichtskaartlijst:

- **Categorieen** — de systeem-uitgavencategorieen die voor de werkruimte zijn aangemaakt (bijv. "Kantoor, Reizen, Software").
- **Diensten** — aantal diensten toegevoegd aan de bedrijfspagina.
- **Logo** — bevestiging wanneer een initialenlogo is gegenereerd.
- **E-mailsjablonen** — aantal sjablonen opgeslagen in de merktone van de werkruimte.
- **Website** — bevestiging dat een standaardsite met startpagina, navigatie en merkkleur klaarstaat. Alleen zichtbaar wanneer de site net is aangemaakt.
- **Domein** — de kant-en-klare URL voor subdomeinen of het toegevoegde domein voor eigen-domeinconfiguraties.

Twee knoppen verschijnen onder het overzicht:

- **Naar dashboard** — brengt de gebruiker direct naar `/dashboard`, de auto-doorverwijstimer overslaand.
- **Open de website-bouwer** — alleen zichtbaar wanneer een site is aangemaakt. Brengt de gebruiker rechtstreeks naar `/website` zodat ze hun startpagina kunnen gaan bewerken.

Daarna komt de gebruiker op `/dashboard` (standaardpad), `/website` (wanneer ze op de website-bouwer-CTA klikken), of `/workspace/organization/company/address` (wanneer een eigen domein in afwachting is van DNS-verificatie).

## De wizard opnieuw doorlopen

De wizard is volledig herhaalbaar. Terugkerende gebruikers landen op stap 1 met hun huidige antwoorden zichtbaar. Niets dwingt ze door elke stap — ze kunnen een veld op een stap bewerken en op Voltooien klikken.

De diff van de Controle-stap is het vangnet: het toont de gebruiker elke overschrijving die gaat gebeuren. Zinvolle-standaardvelden (tijdzone, pdf_language, betalingsstandaarden, footer-tekst) staan niet in de diff omdat Voltooien daar alleen lege velden vult — ze stilletjes omdraaien zou gebruikers verrassen die ze bewust hebben ingesteld.

Om individuele instellingen te herzien zonder de wizard, ga naar:

- `/workspace/organization/company/about` — naam, registratie, adres, btw.
- `/workspace/organization/company/look` — merkkleur, logo.
- `/workspace/organization/company/website` — tagline, over-tekst, diensten.
- `/workspace/organization/company/address` — eigen domein + DNS.
- `/workspace/email` — inbox, mailboxen, sjablonen.

Zie [Instellingenoverzicht](/nl/settings/) voor de volledige kaart.

## Randgevallen

- **Een stap overslaan.** Doorgaan is per stap beveiligd op de minimaal vereiste antwoorden. De Register-stap heeft geen poort; Domein vereist een gekozen pad met een niet-lege waarde, of een voltooide aankoop bij de Registreer-route, of de overgeslagen-vlag; Magie vereist dat Genereren is uitgevoerd; Bedrijf en Controle hebben hun eigen poorten.
- **Sluiten midden in een stap.** Elk antwoord wordt bij wijziging opgeslagen, dus het volgende bezoek gaat verder waar de gebruiker was gebleven. Stapindex wordt ook opgeslagen (`answers` en `currentStep` leven in dezelfde JSONB-kolom).
- **Van gedachten veranderen op de Domein-stap.** Overschakelen van `eigen` naar `subdomein` na het typen van een domein overschrijft `answers.domain` naar `null` totdat de gebruiker een slug kiest. Overschakelen naar de Registreer-route slaat een overgeslagen-antwoord op zodat een nieuwe aanmelding niet vastloopt als ze Registreer openen maar de aankoop uitstellen. Overschakelen naar een subdomein wanneer er al een aangepast domein is, toont een waarschuwing vooraf.
- **Logo-extractie mislukt.** Overwegend witte logo's en alleen-SVG-invoer die `sharp` niet kan rasteren retourneren `color: null`. De Gemini-merkkleursuggestie wordt dan gebruikt.
- **Domein al toegevoegd bij eigen-domein Voltooien.** Een 409 van `addDomain` valt terug op de bestaande rij zodat de inbox-inschakelstap nog steeds wordt uitgevoerd.
- **Persoonlijke mailbox bestaat al.** Een 409 van `createMailbox` wordt als succes behandeld.
