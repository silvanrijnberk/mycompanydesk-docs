---
title: Terugkerende uitgaven
description: "Automatiseer vaste kosten zoals huur, abonnementen, verzekeringen en nutsvoorzieningen met sjablonen die volgens schema uitgaven aanmaken."
---

# Terugkerende uitgaven

Automatiseer het bijhouden van regelmatige bedrijfskosten zoals huur, abonnementen en nutsvoorzieningen.

## Overzicht

Terugkerende uitgaven werken net als terugkerende facturen, maar dan voor kosten. Stel een sjabloon in en laat MyCompanyDesk automatisch uitgavenrecords aanmaken.

Veelvoorkomende toepassingen:

- Kantoorhuur
- Software-abonnementen
- Verzekeringspremies
- Energierekeningen
- Leasebetalingen

## Een terugkerende uitgave aanmaken

1. Ga naar **Terugkerend**, tab **Uitgaven**, en klik op **Terugkerende uitgave toevoegen**
2. Vul het sjabloon in:
   - **Naam**: waarvoor de uitgave is
   - **Leverancier**: de naam van de leverancier. Typ je, dan stelt het veld leveranciers voor die je eerder gebruikte en bedrijven uit het KVK-register
   - **Categorie**: de uitgavecategorie
   - **Omschrijving** en eventueel een **Project**
   - Onder **Planning**: de **Frequentie** (wekelijks, maandelijks, per kwartaal of jaarlijks) en de **Startdatum**
   - Onder **Uitgavegegevens**: het **Bedrag excl. btw**, het **Btw-tarief**, of de btw aftrekbaar is (**Btw aftrekbaar**) en de **Btw-behandeling**, oftewel hoe de uitgave in je btw-aangifte komt
3. Klik op **Opslaan**

::: tip Uitgavegegevens
Bij een nieuwe terugkerende uitgave staat het blok **Uitgavegegevens** dichtgeklapt; klap het open om de bedragen en de btw in te vullen. Bewerk je een bestaande terugkerende uitgave, dan staat het meteen open.
:::

### Leveranciersidentiteit

Kies je in het veld **Leverancier** een bedrijf onder **Uit het Handelsregister (KVK)**, dan legt het sjabloon ook het KVK-nummer en het land van die leverancier vast. Naast de naam verschijnt dan een label **KVK**. Dat heeft twee gevolgen:

- **Leverancierssuggesties** gebruiken de opgeslagen identiteit, zodat je dezelfde leverancier niet elke maand opnieuw hoeft te kiezen.
- **Gegenereerde uitgaven** krijgen dezelfde leveranciersidentiteit mee als het sjabloon. Daardoor wordt de logica voor btw verlegd en btw bij invoer (bijvoorbeeld voor leveranciers in of buiten de EU) automatisch toegepast, net als bij handmatig ingevoerde uitgaven.

Wijzig je de leveranciersnaam later en past die niet meer bij het gekozen KVK-bedrijf, dan worden het KVK-nummer en het land gewist. Met **KVK-koppeling loskoppelen** haal je de koppeling ook zelf weg. Zo blijven er geen verouderde identiteitsgegevens staan.

## Frequentieopties

| Frequentie | Beschrijving |
|---|---|
| **Wekelijks** | Elke 7 dagen |
| **Maandelijks** | Dezelfde dag elke maand |
| **Per kwartaal** | Elke 3 maanden |
| **Jaarlijks** | Eenmaal per jaar |

## Terugkerende uitgaven beheren

### Pauzeren / Hervatten

Schakel automatische generatie aan of uit. Pauzeren stopt het aanmaken van nieuwe uitgaven; hervatten gaat verder vanaf de volgende geplande datum.

### Bewerken

Wijzigingen aan het sjabloon hebben alleen effect op toekomstige uitgaven. Bestaande uitgaven worden niet aangepast.

### Verwijderen

Verwijder het sjabloon. Eerder gegenereerde uitgaven blijven in je administratie.

## Gegenereerde uitgaven

Elke gegenereerde uitgave:

- Komt overeen met het bedrag, de categorie en de btw-instellingen van het sjabloon
- Neemt de leveranciersidentiteit van het sjabloon over (naam, land en KVK-nummer) als die velden zijn ingevuld
- Is gedateerd op de geplande uitvoeringsdatum
- Kan na aanmaak onafhankelijk worden bewerkt

## Bronlink

Als een uitgave is aangemaakt vanuit een terugkerend sjabloon, toont de uitgavedetailpagina een banner **Automatisch aangemaakt vanuit terugkerende uitgave**. Zolang het sjabloon bestaat, klik je op de banner om in één keer naar het sjabloon te springen dat de uitgave heeft gegenereerd. Is het sjabloon inmiddels verwijderd, dan staat er alleen tekst in plaats van een dode link.

## Wat gebeurt er als mijn pakket wijzigt?

Terugkerende uitgaven horen bij het Office-abonnement. Als je van Desk naar Office upgradet, start de automatische aanmaak vanaf de eerstvolgende vervaldatum. Als je van Office naar Desk downgradet, wordt de aanmaak automatisch gepauzeerd. Het sjabloon en de uitgaven die al zijn aangemaakt blijven in je werkruimte staan, en bij een latere upgrade wordt het schema hervat.

## Tips

- Controleer je terugkerende uitgaven periodiek om opgezegde abonnementen te signaleren
- Koppel terugkerende uitgaven aan projecten voor nauwkeurige projectkosten
- Gebruik categorieën consequent voor zinvolle rapportages
