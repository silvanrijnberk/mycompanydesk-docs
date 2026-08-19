---
title: Terugkerende uitgaven
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

1. Ga naar **Terugkerende uitgaven > Nieuw**
2. Vul het sjabloon in:
   - **Omschrijving**: waarvoor de uitgave is
   - **Leverancier**: vrije leveranciersnaam, met autocomplete voor eerder gebruikte leveranciers
   - **Land** en **KVK-nummer**: optionele velden voor de leveranciersidentiteit; wanneer ingevuld, worden ze overgenomen in elke uitgave die uit dit sjabloon wordt gegenereerd
   - **Bedrag**: de terugkerende kosten
   - **Categorie**: uitgavecategorie
   - **BTW-tarief**: toepasselijk BTW-percentage
   - **BTW-behandeling**: hoe de uitgave op de BTW-aangifte wordt verwerkt
   - **Frequentie**: wekelijks, maandelijks, per kwartaal of jaarlijks
3. Klik op **Opslaan**

::: tip Meer opties
In het formulier voor een terugkerende uitgave staan optionele velden netjes achter **Meer opties**. De notities en de leveranciersidentiteit zitten daar standaard; vouw de sectie uit als je ze wilt toevoegen.
:::

### Leveranciersidentiteit

Het invullen van leveranciersnaam, land en KVK-nummer op een terugkerend sjabloon heeft twee effecten:

- **Leverancierssuggesties** gebruiken de opgeslagen identiteit, zodat je dezelfde leverancier niet elke maand opnieuw hoeft te selecteren.
- **Gegenereerde uitgaven** krijgen dezelfde leveranciersidentiteit mee als het sjabloon. Daardoor wordt verleggingsregeling- en import-BTW-logica (bijvoorbeeld voor EU B2B of niet-EU-leveranciers) automatisch toegepast, net als bij handmatig ingevoerde uitgaven.

Als je de leveranciersnaam later wijzigt en die naam komt niet meer overeen met het opgeslagen KVK-record, dan worden het KVK-nummer en het land gewist. Zo voorkomt het formulier dat verouderde identiteitsgegevens blijven staan.

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

- Komt overeen met het bedrag, de categorie en de BTW-instellingen van het sjabloon
- Neemt de leveranciersidentiteit van het sjabloon over (naam, land en KVK-nummer) als die velden zijn ingevuld
- Is gedateerd op de geplande uitvoeringsdatum
- Kan na aanmaak onafhankelijk worden bewerkt

## Bronlink

Als een uitgave is aangemaakt vanuit een terugkerend sjabloon, toont de uitgavedetailpagina een banner **Automatisch aangemaakt vanuit terugkerende uitgave**. Zolang het sjabloon bestaat, klik je op de banner om in één keer naar het sjabloon te springen dat de uitgave heeft gegenereerd. Is het sjabloon inmiddels verwijderd, dan staat er alleen tekst in plaats van een dode link.

## Opnieuw proberen bij een vergrendelde periode

Als een periode tijdelijk vergrendeld is op het moment dat het schema loopt, probeert MyCompanyDesk het later opnieuw in plaats van die periode definitief over te slaan. Je krijgt een melding als de periode na de pogingen nog steeds geblokkeerd is.

## Wat gebeurt er als mijn pakket wijzigt?

Terugkerende uitgaven horen bij het Office-abonnement. Als je van Desk naar Office upgradet, start de automatische aanmaak vanaf de eerstvolgende vervaldatum. Als je van Office naar Desk downgradet, wordt de aanmaak automatisch gepauzeerd. Het sjabloon en de uitgaven die al zijn aangemaakt blijven in je werkruimte staan, en bij een latere upgrade wordt het schema hervat.

## Tips

- Controleer je terugkerende uitgaven periodiek om opgezegde abonnementen te signaleren
- Koppel terugkerende uitgaven aan projecten voor nauwkeurige projectkosten
- Gebruik categorieen consequent voor zinvolle rapportages
