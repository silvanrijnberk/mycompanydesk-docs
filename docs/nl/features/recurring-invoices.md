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
   - **Klant**: aan wie je factureert
   - **Regelitems**: wat je factureert (omschrijvingen, bedragen, BTW)
   - **Frequentie**: hoe vaak (wekelijks, maandelijks, per kwartaal, jaarlijks)
   - **Startdatum**: wanneer de generatie begint
3. Klik op **Opslaan**

De terugkerende factuur wordt aangemaakt met de status **Actief** en genereert de eerste factuur op de volgende geplande datum.

De optie **E-mail automatisch versturen bij aanmaken** staat standaard aan: elke gegenereerde factuur wordt direct naar de klant gemaild. Zet de optie uit als je elke factuur liever zelf controleert en verstuurt.

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
3. Status verandert naar **Gepauzeerd**: er worden geen facturen gegenereerd

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
- De factuur wordt automatisch gemaild, of blijft staan als **Concept** om te controleren en te versturen als je automatisch versturen hebt uitgezet
- Elke gegenereerde factuur is onafhankelijk: je kunt deze bewerken zonder het sjabloon te beïnvloeden

## Geschiedenis bekijken

De detailpagina van de terugkerende factuur toont alle eerder gegenereerde facturen, zodat je de volledige facturatiegeschiedenis kunt bijhouden.

## Tips

- Combineer met [contracten](/features/contracts) voor contractgebaseerde facturatie
- Controleer gegenereerde facturen voor de eerste automatische verzending om te zorgen dat alles er goed uitziet
- Gebruik het voorbeeld van de volgende uitvoering om te zien wanneer de volgende factuur wordt aangemaakt
- Bekijk het actieve aantal en de statistieken bovenaan de pagina
