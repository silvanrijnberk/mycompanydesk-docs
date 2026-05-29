---
title: Tijdregistratie
---

# Tijdregistratie

Registreer werkuren op projecten en klanten om declarabele tijd bij te houden en facturen te genereren vanuit tijdregistraties.

## Overzicht

Tijdregistratie helpt je om:

- Bij te houden hoeveel uur je aan elk project besteedt
- Declarabele vs. niet-declarabele tijd te berekenen
- Facturen direct te genereren vanuit gelogde uren
- Je effectieve uurtarief te begrijpen

## Tijd registreren

### Een tijdregistratie aanmaken

1. Ga naar **Tijdregistratie**
2. Klik op **Registratie toevoegen** (of de + knop op mobiel)
3. Vul in:
   - **Datum** — Wanneer het werk is gedaan
   - **Uren** — Duur van het werk
   - **Project** — Voor welk project de tijd is
   - **Klant** — De klant (automatisch ingevuld vanuit project)
   - **Omschrijving** — Waar je aan hebt gewerkt
   - **Declarabel** — Of deze tijd gefactureerd moet worden
   - **Uurtarief** — Je tarief voor dit werk
4. Klik op **Opslaan**

### Standaard omschrijving

Wanneer je een tijdregistratie toevoegt, wordt het omschrijvingsveld automatisch vooraf ingevuld vanuit de **Standaard regelomschrijving** van je werkruimte. Het systeem controleert in volgorde:

1. De standaard regelomschrijving van het project
2. De standaard regelomschrijving van de klant
3. De standaard regelomschrijving van de werkruimte

Je eigen invoer wordt nooit overschreven. Zodra je een eigen omschrijving typt, wordt de vooraf ingevulde waarde niet meer vervangen.

### Alleen-uren-modus

Voor vereenvoudigde tijdregistratie schakel je de alleen-uren-modus in via de instellingen. Dit verbergt het uurtarief en declarabele velden en toont alleen uren en omschrijving.

### Persoonlijke overschrijvingen

Elk teamlid kan persoonlijke tijdregistratie-standaarden instellen via **Mijn account > Tijd en reizen** (`/me/time-travel/time`). Als een persoonlijke waarde is ingesteld, heeft deze voorrang op de werkruimtestandaard. Als het veld leeg blijft, geldt de werkruimtewaarde.

De volgende instellingen zijn per persoon te overschrijven:

| Instelling | Cascade-volgorde |
|---|---|
| **Uurtarief** | Project > Klant > Persoonlijk > Werkruimte |
| **Afrondingsinterval** | Persoonlijk > Werkruimte |
| **Project verplicht** | Persoonlijk > Werkruimte |
| **Omschrijving verplicht** | Persoonlijk > Werkruimte |
| **Standaard regelomschrijving** | Persoonlijk > Werkruimte |
| **Factuuromschrijvingsformaat** | Persoonlijk > Werkruimte |
| **Servicekosten** (omschrijving, bedrag, BTW-tarief) | Klant > Persoonlijk > Werkruimte |
| **Dagtijdlijn** (start, einde, pauze) | Persoonlijk > Werkruimte |

Stel je het werkruimte-afrondingsinterval op 15 minuten maar werk je liever met 30 minuten? Stel het in onder je persoonlijke overschrijvingen. Jouw tijdregistraties ronden af op 30 minuten, de rest van het team blijft op 15.

Persoonlijke overschrijvingen worden automatisch opgeslagen terwijl je typt. Naast elk veld met een persoonlijke waarde verschijnt een wisknop waarmee je terugkeert naar de werkruimtestandaard.

## Tijdregistraties factureren

Zet gelogde uren om in facturen:

1. Filter tijdregistraties op klant of project
2. Selecteer de registraties die je wilt factureren
3. Klik op **Factuur aanmaken**
4. Een nieuwe factuur wordt vooraf ingevuld met regelitems van de geselecteerde tijdregistraties
5. Controleer en verstuur

### Auto-factuurinstellingen

Configureer automatische facturatie voor tijdregistraties:

1. Ga naar de instellingen voor tijdregistratie
2. Stel auto-factuurregels in
3. Tijdregistraties die aan de regels voldoen, worden automatisch aan facturen toegevoegd

## Filteren

Filter je tijdregistraties op:

- **Klant** — Bekijk tijd per klant
- **Project** — Bekijk tijd per project
- **Datumbereik** — Specifieke periode
- **Declarabelstatus** — Declarabel vs. niet-declarabel
- **Factuurstatus** — Gefactureerd vs. ongefactureerd

## Bulkacties

- **Markeer als declarabel** — Stel meerdere registraties in als declarabel
- **Factuur aanmaken** — Factureer meerdere registraties tegelijk
- **Archiveren** — Verplaats registraties naar archief
- **Verwijderen** — Verwijder registraties

## Tips

- Registreer dagelijks je tijd voor nauwkeurige records
- Gebruik het projectfilter om totalen per project te zien
- Controleer regelmatig ongefactureerde tijd om declarabele uren niet te missen
- Het projectgerichte dashboardprofiel benadrukt tijdregistratiestatistieken
