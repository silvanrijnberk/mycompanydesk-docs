---
title: Terugkerende facturen
---

# Terugkerende facturen

Automatiseer je regelmatige facturatie door facturen in te stellen die volgens een schema worden gegenereerd.

## Overzicht

Terugkerende facturen zijn sjablonen die automatisch nieuwe facturen aanmaken op vastgestelde intervallen. Ideaal voor:

- Maandelijkse retainers
- Abonnementsfacturatie
- Huurincasso
- Onderhoudscontracten
- Regelmatige advieskosten

## Een terugkerende factuur aanmaken

1. Ga naar **Terugkerende facturen > Nieuw**
2. Vul het sjabloon in:
   - **Klant** — Aan wie je factureert
   - **Regelitems** — Wat je factureert (omschrijvingen, bedragen, BTW)
   - **Frequentie** — Hoe vaak (wekelijks, maandelijks, per kwartaal, jaarlijks)
   - **Startdatum** — Wanneer de generatie begint
3. Klik op **Opslaan**

::: tip Meer opties
In het formulier voor een nieuwe terugkerende factuur staan optionele velden netjes achter **Meer opties**. De notities zitten daar standaard; vouw de sectie uit als je ze wilt toevoegen.
:::

De terugkerende factuur wordt aangemaakt met de status **Actief** en genereert de eerste factuur op de volgende geplande datum.

## Frequentieopties

| Frequentie | Beschrijving |
|---|---|
| **Wekelijks** | Elke 7 dagen |
| **Maandelijks** | Dezelfde dag elke maand |
| **Per kwartaal** | Elke 3 maanden |
| **Jaarlijks** | Eenmaal per jaar |

## Terugkerende facturen beheren

### Pauzeren

Tijdelijk stoppen met het genereren van facturen:

1. Open de terugkerende factuur
2. Klik op **Pauzeren**
3. Status verandert naar **Gepauzeerd** — er worden geen facturen gegenereerd

### Hervatten

Een gepauzeerde terugkerende factuur opnieuw starten:

1. Open de gepauzeerde terugkerende factuur
2. Klik op **Hervatten**
3. De generatie gaat verder vanaf de volgende geplande datum

### Bewerken

Het bewerken van een terugkerende factuur heeft alleen effect op **toekomstige** facturen. Eerder gegenereerde facturen worden niet gewijzigd.

### Verwijderen

Verwijder het terugkerende sjabloon volledig. Eerder gegenereerde facturen blijven in je administratie.

## Gegenereerde facturen

Elke keer dat een terugkerende factuur wordt uitgevoerd, wordt een nieuwe factuur aangemaakt:

- Deze gebruikt de regelitems en klant van het sjabloon
- Deze volgt je huidige factuurnummering
- De factuur begint als **Concept** (beoordelen en versturen) of wordt automatisch verstuurd indien geconfigureerd
- Elke gegenereerde factuur is onafhankelijk — je kunt deze bewerken zonder het sjabloon te beinvloeden

## Geschiedenis bekijken

De detailpagina van de terugkerende factuur toont alle eerder gegenereerde facturen, zodat je de volledige facturatiegeschiedenis kunt bijhouden.

## Wat gebeurt er als mijn pakket wijzigt?

Terugkerende facturen horen bij het Office-abonnement. Als je van Desk naar Office upgradet, start de automatische aanmaak vanaf de eerstvolgende vervaldatum. Als je van Office naar Desk downgradet, wordt de aanmaak automatisch gepauzeerd. Het sjabloon en de facturen die al zijn aangemaakt blijven in je werkruimte staan, en bij een latere upgrade wordt het schema hervat.

## Bulkacties

- **Pauzeren / Hervatten** — Schakel meerdere terugkerende facturen om
- **Verwijderen** — Verwijder meerdere sjablonen

## Tips

- Combineer met [contracten](/nl/features/contracts) voor contractgebaseerde facturatie
- Controleer gegenereerde facturen voor de eerste automatische verzending om te zorgen dat alles er goed uitziet
- Gebruik het voorbeeld van de volgende uitvoering om te zien wanneer de volgende factuur wordt aangemaakt
- Bekijk het actieve aantal en de statistieken bovenaan de pagina
