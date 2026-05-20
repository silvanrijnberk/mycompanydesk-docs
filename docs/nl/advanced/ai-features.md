---
title: AI-functies
---

# AI-functies

MyCompanyDesk bevat AI-gestuurde functies om je sneller en slimmer te laten werken.

## Contextuele gids

De in-app-assistent helpt je bij het navigeren door MyCompanyDesk:

- Klik op het **hulp-icoon** op elke pagina voor contextgerichte hulp
- Stel vragen over functies, workflows of instellingen
- Krijg stapsgewijze begeleiding bij veelvoorkomende taken
- Beschikbaar in alle vier ondersteunde talen

De gids begrijpt op welke pagina je je bevindt en geeft relevante suggesties.

### Chatlimieten

Chatgebruik is afhankelijk van je abonnement:

| Abonnement | Chatberichten (maandelijks) |
|---|---|
| Gratis | 10 |
| Starter | 100 |
| Pro | 1 000 |

AI-limieten zijn maandelijks, niet dagelijks. Ze worden elke eerste van de maand gereset.

### EU AI Act-openbaarmaking (art. 50)

De contextuele gids valt onder de EU AI Act (Verordening 2024/1689) als een AI-systeem met beperkt risico (artikel 50). Dit betekent dat we duidelijk moeten maken dat je met AI praat. In de gids zijn daar twee dingen voor:

- **AI-badge.** Een kleine "AI"-pill naast de assistentnaam. Altijd zichtbaar zolang de gids open is. Een tooltip op de badge noemt de onderliggende provider (Google Gemini).
- **Openbaarmakingstekst.** Een korte regel onder de welkomstvraag in een leeg gesprek: "Je praat met een AI-assistent. Antwoorden kunnen fouten bevatten; controleer financiële of fiscale conclusies altijd zelf."

De verplichting geldt vanaf augustus 2026; de openbaarmakingen zijn voor de deadline ingebouwd.

### Pro-uiterlijk

Pro-werkruimtes krijgen een premium assistent-uiterlijk dat de generieke styling vervangt door het Pro-violet. Wanneer het facturatieplan Pro is, verandert het assistentpaneel visueel:

- De "AI"-pill wordt een violette "Pro"-pill, wat aangeeft dat de assistent op het hoogste model draait met volledige app-context.
- De paneelrand, avatarring, online-dot en verzendknop veranderen naar violet (`#a855f7`), passend bij de Pro-lint in de app-navigatie.
- De statusregel toont "Jouw Pro-assistent staat klaar" in plaats van het generieke "Klaar om te helpen."

Het Pro-uiterlijk is puur cosmetisch. De onderliggende modelselector, toolcatalogus en EU AI Act-openbaarmakingen blijven identiek voor alle abonnementen. Achter de schermen geeft `TIER_CHAT_CONFIG` Pro al een zwaarder model en onbeperkte app-context.

## AI-suggesties

Slimme aanbevelingen die je helpen bij het categoriseren en beschrijven van je records:

### Uitgavecategorisatie

Wanneer je een uitgave aanmaakt, analyseert AI de omschrijving en stelt de meest geschikte categorie voor. Dit bespaart tijd en zorgt voor consistente categorisatie.

### Omschrijvingsverbeteringen

AI kan duidelijkere, professionelere omschrijvingen suggereren voor:

- Factuurregelitems
- Uitgavenomschrijvingen
- Klantnotities

### Hoe het werkt

1. Maak een record aan of bewerk er een
2. Zoek naar de AI-suggestie-indicator
3. Bekijk de suggestie
4. Klik op **Toepassen** om deze te gebruiken, of **Negeren** om over te slaan

::: info
AI-suggesties vereisen het **Starter**-abonnement of hoger. Schakel ze in via **Bedrijf > Functies**.
:::

## Bonnen scannen

AI-gestuurde OCR extraheert gegevens uit bonafbeeldingen en PDF's:

- **Datum** — Wanneer de aankoop is gedaan
- **Bedrag** — Totale kosten
- **Leverancier** — Aan wie je hebt betaald
- **Omschrijving** — Wat er is gekocht

Zie [Bonnen scannen](/nl/advanced/receipt-scanning) voor gedetailleerde instructies.

## Tekstcontrole

Grammatica- en spellingcontrole voor je documenten:

- Controleer factuuromschrijvingen voor het versturen
- Verifieer offerte-inhoud
- Corrigeer typefouten in klantgerichte tekst

Ondersteunt Engels, Nederlands, Duits en Frans.

::: info
Tekstcontrole is beschikbaar op alle abonnementen, inclusief Gratis.
:::

## Accountsamenvattingen

AI genereert periodieke samenvattingen van je bedrijfsactiviteit:

- **Dagelijks** — Snel overzicht van de transacties van de dag
- **Wekelijks** — Weekoverzicht met trends
- **Maandelijks** — Uitgebreide maandelijkse analyse

Samenvattingen worden gegenereerd in je voorkeurstaal en zijn beschikbaar vanaf het dashboard.

## Dashboard-briefing inzicht (Pro)

De dashboard-briefing hero toont een korte, persoonlijke AI-geschreven briefing voor Pro-werkruimtes. De server genereert de briefing eenmaal per kalenderdag en cached deze voor de rest van de dag.

- **Stem.** De briefing spreekt in de eerste persoon ("ik") en spreekt de gebruiker informeel aan ("je"). Hij opent met de meest urgente actie, voegt hooguit een of twee ondersteunende punten toe, en sluit af met een concrete vervolgstap (bijv. "stuur Atelier Norden vandaag een herinnering"). Warm, zelfverzekerd, bondig -- de toon van een slimme assistent die de zaak kent.
- **Model.** Het endpoint `POST /api/dashboard/briefing-insight` draait op Vertex AI `europe-west1` (Gemini 2.5 Flash). Ollama Cloud wordt niet gebruikt voor dit pad.
- **Input signalen.** De client stuurt een volledig overzicht van de zakelijke data van de dag: liquiditeit en runway, omzet en winst (MTD + YTD), achterstallige debiteuren (aantal, totaal, slechtste klant), rekeningen (binnenkort + achterstallig), aantal concepten, projectmarges, btw-positie (saldo, deadline, checklistvoortgang, reserve), niet-gefactureerde uren, recente betalingen en nieuwe klanten. Alle bedragen worden afgerond op hele euro's voordat ze het model bereiken.
- **Locales.** Het model genereert de briefing in `nl/de/en/fr` op basis van de taal van de gebruiker. De client stuurt de ISO 639-1-code mee met het verzoek.
- **Plan-gating.** Het endpoint is gekoppeld aan de `ai_insights` feature flag, die Pro vereist. Als een werkruimte geen recht heeft, toont de client alleen de standaard lede.
- **Fallback.** Bij een fout (model niet beschikbaar, 403, netwerkfout) gebruikt de client de bestaande standaard lede. De gebruiker ziet geen foutmelding.
- **Client UX.** Terwijl de AI-briefing laadt, toont de hero de gecachte deterministische lede van de vorige dag. Zodra de AI-versie binnen is, vervangt een cross-fade-overgang (opacity + slide) deze. De AI-briefing verschijnt met een sparkle-icoon en primaire tekstkleur. Een layout-matched skeleton-shimmer (`BriefingSkeleton`) houdt de volledige dashboardvorm vast totdat de kerndata binnen is, waarna deze oplost in een gecoordineerde, gestaffelde entree-animatie. Gebruikers met reduced-motion krijgen geen animaties.


## Abonnementsrechten

| Functie | Gratis | Starter | Pro |
|---|---|---|---|
| Contextuele gids | Beperkt, alleen FAQ bij overloop | Standaard | Hoogste limiet |
| AI-suggesties | Uit | Aan | Aan |
| Leverancierclassificatie | Uit | Aan | Aan |
| Bonnen scannen | Uit | Aan | Aan |
| Tekstcontrole | Aan | Aan | Aan |
| Vertaling | Aan (alleen UI) | Aan | Aan |
| Dashboard-briefing inzicht | Uit | Uit | Aan |

## Privacy en gegevensbescherming

Alle cloud-AI-functies draaien standaard op Vertex AI in `europe-west1` (EU). MyCompanyDesk heeft een verwerkersovereenkomst met Google Cloud voor Vertex AI. Ollama Cloud (ollama.com, gehost in de VS) staat standaard uit omdat er geen verwerkersovereenkomst met Ollama Inc. is. Je kunt het per workspace inschakelen voor workloads zonder persoonsgegevens, maar het staat uit voor alle abonnementen.

Zet je `ai_processing_mode` op `local_only`, dan blijven bonnen scannen, AI-suggesties, tekstcontrole, leverancierclassificatie en brancheherkenning volledig op je eigen server. De contextuele gids werkt alleen in de cloud en is uitgeschakeld in `local_only`-modus.

## Tips

- Schakel AI-suggesties eenmaal in en ze werken automatisch op de achtergrond
- Bonnen scannen is vooral handig voor papieren bonnen — maak gewoon een foto
- De contextuele gids kan de meeste "hoe doe ik..."-vragen over de app beantwoorden
