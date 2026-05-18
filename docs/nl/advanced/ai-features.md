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

## Abonnementsrechten

| Functie | Gratis | Starter | Pro |
|---|---|---|---|
| Contextuele gids | Beperkt, alleen FAQ bij overloop | Standaard | Hoogste limiet |
| AI-suggesties | Uit | Aan | Aan |
| Leverancierclassificatie | Uit | Aan | Aan |
| Bonnen scannen | Uit | Aan | Aan |
| Tekstcontrole | Aan | Aan | Aan |
| Vertaling | Aan (alleen UI) | Aan | Aan |

## Privacy en gegevensbescherming

Alle cloud-AI-functies draaien standaard op Vertex AI in `europe-west1` (EU). MyCompanyDesk heeft een verwerkersovereenkomst met Google Cloud voor Vertex AI. Ollama Cloud (ollama.com, gehost in de VS) staat standaard uit omdat er geen verwerkersovereenkomst met Ollama Inc. is. Je kunt het per workspace inschakelen voor workloads zonder persoonsgegevens, maar het staat uit voor alle abonnementen.

Zet je `ai_processing_mode` op `local_only`, dan blijven bonnen scannen, AI-suggesties, tekstcontrole, leverancierclassificatie en brancheherkenning volledig op je eigen server. De contextuele gids werkt alleen in de cloud en is uitgeschakeld in `local_only`-modus.

## Tips

- Schakel AI-suggesties eenmaal in en ze werken automatisch op de achtergrond
- Bonnen scannen is vooral handig voor papieren bonnen — maak gewoon een foto
- De contextuele gids kan de meeste "hoe doe ik..."-vragen over de app beantwoorden
