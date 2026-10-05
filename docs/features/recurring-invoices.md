---
title: Terugkerende facturen
description: "Stel factuursjablonen in die volgens schema facturen aanmaken, voor maandelijkse retainers, abonnementen, huur en onderhoudscontracten."
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
   - **Regelitems**: Wat je factureert (omschrijvingen, bedragen, btw)
   - **Frequentie** — Hoe vaak (wekelijks, maandelijks, per kwartaal, jaarlijks)
   - **Startdatum** — Wanneer de generatie begint
3. Klik op **Opslaan**

::: tip Meer opties
In het formulier voor een nieuwe terugkerende factuur staan optionele velden netjes achter **Meer opties**. De notities zitten daar standaard; vouw de sectie uit als je ze wilt toevoegen.
:::

De terugkerende factuur wordt aangemaakt met de status **Actief** en genereert de eerste factuur op de volgende geplande datum.

## Regelitems

Regelitems van terugkerende facturen werken op dezelfde manier als reguliere factuurregels:
- Elke regel moet een omschrijving hebben. Is de omschrijving te lang, dan toont het formulier een validatiefout.
- Elke regel kan een percentage- of vast bedrag-korting krijgen.
- Een kortingspercentage kan niet hoger zijn dan 100%.
- Een kortingswaarde mag niet negatief zijn.

## Betaalopties en factuurdetails

Een terugkerende factuur kan dezelfde documentvelden meekrijgen als een gewone factuur. Onder **Betaalopties** kies je de betaalmethode van deze reeks. Zolang je niets kiest, volgt elke factuur de betaalinstellingen van je bedrijf, dus een wijziging onder Instellingen → Betalen loopt vanzelf in de reeks mee. Eenmaal gekozen, neemt **Standaard van je bedrijf gebruiken** de keuze terug. De betaalnotitie werkt hetzelfde.

Onder **Factuurgegevens** bepaal je wat er op elke factuur uit de reeks staat: **Btw verlegd**, de **Referentie**, het **Project** en de **Bezitting** waar de facturering bij hoort, plus de schakelaar om deze reeks voor je boekhouder te verbergen. MyCompanyDesk suggereert btw verlegd als een klant lijkt op een EU-bedrijf buiten Nederland, en waarschuwt wanneer de klant geen btw-nummer heeft. Btw verlegd heeft het btw-nummer van de klant nodig: het formulier weigert de reeks te bewaren zonder, en is het nummer later weg, dan houdt de generatie die factuur aan als concept zonder nummer en krijg je een melding, in plaats van dat er onbeheerd een ongeldige factuur verstuurd wordt.

Alles wat je hier invult, gaat één op één mee naar elke factuur die de reeks aanmaakt. Eerder gegenereerde facturen houden wat ze op dat moment kregen; zie [btw verlegd](/faq/reverse-charge) voor wanneer de behandeling geldt.

## Frequentieopties

| Frequentie | Beschrijving |
|---|---|
| **Wekelijks** | Elke 7 dagen |
| **Maandelijks** | Dezelfde dag elke maand |
| **Per kwartaal** | Elke 3 maanden |
| **Jaarlijks** | Eenmaal per jaar |

## Verzendwijze

Onder **Na het aanmaken** bepaalt de reeks wat er met elke factuur gebeurt die hij maakt:

- **Concept**: de factuur staat als concept klaar. Jij kijkt hem na en verstuurt hem zelf.
- **Versturen**: je krijgt een melding en de factuur gaat een dag later naar de klant, tenzij je hem in die dag tegenhoudt. Een tegengehouden factuur blijft in de app staan, klaar om te versturen.
- **Incasseren**: als bij Versturen, en het bedrag wordt ook geïncasseerd via de incassomachtiging van de klant. Die machtiging regel je eenmalig op een contract met deze klant; zie [Automatische incasso](/features/contracts#automatic-collection).

Het formulier geeft vanzelf aan wanneer een keuze niet kan: Versturen heeft een klant met e-mailadres nodig, en Incasseren een geldige incassomachtiging.

## Periode op de factuur

Elke reeks kiest zelf wat zijn regels zeggen over de periode waarvoor ze factureren:

- **Geen**: de regels komen op de factuur precies zoals je ze op de reeks schrijft.
- **Lopende periode**: de periode waar de factuurdatum in valt.
- **Vorige periode**: de periode vóór de factuurdatum (achteraf).
- **Volgende periode**: de periode na de factuurdatum (vooruit).

Het formulier laat een voorbeeld zien van hoe de regel op de volgende factuur komt. Laat hem op Geen als de omschrijving al genoeg vertelt.

## Looptijd

Onder **Loopt** bepaal je hoe lang de reeks doorwerkt:

- **Doorlopend**: de reeks eindigt niet.
- **Tot een datum**: de reeks stopt na die datum. Voor een periode die op of vóór die datum begint, komt nog wel een factuur, zodat de laatste periode niet wegvalt: factureer je achteraf, dan komt de factuur voor juni nog op 1 juli uit, ook als de reeks tot 30 juni loopt.
- **Een aantal keer**: de reeks stopt na zoveel facturen. De pagina telt hoeveel er al van zijn gemaakt.

Is de reeks aan zijn einde gekomen, dan zet hij zichzelf stil en krijg je één melding met de laatste factuur erin genoemd.

## Automatische jaarlijkse prijsverhoging

Een terugkerende factuur kan zijn regelprijzen elk jaar zelf verhogen. Open de terugkerende factuur en zet **Jaarlijkse prijsverhoging** aan:

- **Verhogen met**: het CBS-consumptieprijsindexcijfer (CPI), of een vast percentage.
- **Elk jaar per**: de dag en maand waarop de verhoging elk jaar ingaat.
- **Klant mailen**: hoeveel maanden van tevoren de klant de mail krijgt.

De verhoging werkt per regel: elke regelprijs stijgt met het percentage, op de cent afgerond, en de pakketonderdelen onder een regel gaan mee.

Ongeveer een week voordat de aankondiging eraan komt, krijg je een melding met de te verwachten bedragen en een voorbeeld van de mail, en met één klik sla je dit jaar over. Doe je niets, dan draait de rest vanzelf: op de maildatum krijgt de klant de aankondiging vanaf je eigen mailadres, en op de ingangsdatum gaan precies de regels die in die mail staan naar hun nieuwe prijs, in één keer. Een regel die je ná de mail toevoegde of met de hand een andere prijs gaf, houdt die eigen prijs.

Facturen voor periodes vóór de ingangsdatum houden de oude prijzen, ook als ze pas ná die datum gemaakt worden. Een vooruit gefactureerde periode gebruikt de nieuwe prijzen zodra de klant gemaild is. De aankondigingsmail noemt bedragen excl. btw alleen waar btw geldt, en benoemt de eerste factuur met de nieuwe prijzen.

Kan de aankondiging niet vóór de ingangsdatum verstuurd worden, dan gaat de verhoging niet door en krijg je een melding met de reden. De kaart houdt een korte geschiedenis bij: doorgevoerde verhogingen, overgeslagen jaren, en jaren waarin de CPI niet steeg.

De verhoging werkt op een actieve terugkerende factuur met minstens één regel. Een gepauzeerde reeks plant niets en zegt dat op de kaart. Zit automatisch verhogen niet in je abonnement, dan pas je de prijzen op de regels zelf aan.

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

Facturen voor datums die tijdens de pauze zijn verstreken, worden niet alsnog aangemaakt. De bevestiging noemt de datum waarop de volgende factuur verschijnt.

### Bewerken

Het bewerken van een terugkerende factuur heeft alleen effect op **toekomstige** facturen. Eerder gegenereerde facturen worden niet gewijzigd.

### Verwijderen

Verwijder het terugkerende sjabloon volledig. Eerder gegenereerde facturen blijven in je administratie.

## Gegenereerde facturen

Elke keer dat een terugkerende factuur wordt uitgevoerd, wordt een nieuwe factuur aangemaakt:

- Deze gebruikt de regelitems en klant van het sjabloon
- Deze krijgt het volgende automatische factuurnummer
- Wat er daarna gebeurt hangt af van de verzendwijze van de reeks: de factuur staat als concept klaar, gaat een dag later uit tenzij je hem tegenhoudt, of wordt ook geïncasseerd via de machtiging
- Elke gegenereerde factuur is onafhankelijk — je kunt deze bewerken zonder het sjabloon te beinvloeden

### Vergrendelde btw-periodes

Als de geplande datum in een btw-periode valt die al is ingediend en vergrendeld, maakt MyCompanyDesk **geen** factuur aan. Die periode wordt definitief overgeslagen voor automatische generatie (herhaald proberen zou nooit vanzelf lukken) en het schema loopt door naar de volgende vervaldatum. Je ontvangt een melding zodat je zelf kunt beslissen: maak een huidige factuur voor de klant, of verwerk de omzet via een suppletie-aangifte.

Een gepauzeerd of kort geleden hervat sjabloon loopt extra kans op dit scenario, omdat de eerstvolgende geplande datum kan achterlopen op het laatst ingediende kwartaal.

## Geschiedenis bekijken

De detailpagina van de terugkerende factuur toont alle eerder gegenereerde facturen, zodat je de volledige facturatiegeschiedenis kunt bijhouden.

## Bronlink

Als een factuur is aangemaakt vanuit een terugkerend sjabloon, toont de factuurdetailpagina een banner **Automatisch aangemaakt vanuit terugkerende factuur** met een link terug naar dat sjabloon. Zo spring je in één klik van een enkele factuur naar het sjabloon dat hem heeft geproduceerd.

## Wat gebeurt er als mijn pakket wijzigt?

Terugkerende facturen horen bij het Office-abonnement. Als je van Desk naar Office upgradet, start de automatische aanmaak vanaf de eerstvolgende vervaldatum. Als je van Office naar Desk downgradet, wordt de aanmaak automatisch gepauzeerd. Het sjabloon en de facturen die al zijn aangemaakt blijven in je werkruimte staan, en bij een latere upgrade wordt het schema hervat.

## Bulkacties

- **Pauzeren / Hervatten** — Schakel meerdere terugkerende facturen om
- **Verwijderen** — Verwijder meerdere sjablonen

## Tips

- Combineer met [contracten](/features/contracts) voor contractgebaseerde facturatie
- Controleer gegenereerde facturen voor de eerste automatische verzending om te zorgen dat alles er goed uitziet
- Gebruik het voorbeeld van de volgende uitvoering om te zien wanneer de volgende factuur wordt aangemaakt
- Bekijk het actieve aantal en de statistieken bovenaan de pagina
