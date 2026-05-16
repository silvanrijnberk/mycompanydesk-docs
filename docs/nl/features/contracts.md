---
title: Contracten
---

# Contracten

Beheer terugkerende serviceovereenkomsten en huurcontracten met automatische facturatieschema's.

## Overzicht

Contracten vertegenwoordigen lopende overeenkomsten met klanten — zoals maandelijkse servicecontracten, huurovereenkomsten of onderhoudsplannen. Ze kunnen automatisch facturen genereren volgens een vast schema.

::: info
De contractenmodule is optioneel. Schakel deze in via **Bedrijf > Functies** als je hem niet in de navigatie ziet.
:::

## Een contract aanmaken

1. Ga naar **Contracten > Nieuw contract**
2. Vul in:
   - **Naam** — Een beschrijvende titel (bijv. "Maandelijkse schoonmaakdienst")
   - **Klant** — De contractpartij
   - **Bedrag** — Het terugkerende facturatiebedrag
   - **Herhaling** — Hoe vaak factureren (wekelijks, maandelijks, per kwartaal, jaarlijks)
   - **Startdatum** — Wanneer het contract begint
   - **Einddatum** — Optionele einddatum
   - **Omschrijving** — Voorwaarden en details
3. Klik op **Opslaan**

## Contractstatussen

| Status | Beschrijving |
|---|---|
| **Actief** | Momenteel van kracht, genereert facturen |
| **Inactief** | Gepauzeerd — er worden geen facturen gegenereerd |

## Automatische facturatie

Actieve contracten met een herhalingsschema genereren automatisch facturen bij elke facturatieperiode. Het systeem:

1. Maakt een conceptfactuur aan op basis van de contractvoorwaarden
2. Past de juiste klant, bedrag en omschrijving toe
3. Volgt je factuurnummeringsinstellingen

Je kunt gegenereerde facturen handmatig bekijken en versturen, of automatische verzending instellen.

## Koppelen aan objecten

Contracten kunnen worden gekoppeld aan [objecten/activa](/nl/features/objects) voor verhuurbeheer:

- Koppel een contract aan een pand, voertuig of apparaat
- Houd bij welke objecten momenteel verhuurd zijn en aan wie
- Bekijk de contractgeschiedenis per object

## Statistieken

De contractenlijstpagina toont samenvattende statistieken:

- Totaal aantal actieve contracten
- Totale contractwaarde
- Contracten per herhalingstype

## Bulkacties

- **Status wijzigen** — Activeer of deactiveer meerdere contracten
- **Archiveren** — Verplaats naar archief
- **Herstellen** — Haal gearchiveerde contracten terug

## Ondertekenen

Contracten ondersteunen elektronisch ondertekenen. Je kunt partijen toevoegen via het contractformulier, en elke partij ontvangt een ondertekenlink per e-mail.

Wanneer een contract is ondertekend, toont de contractdetailpagina een ondertekenkaart met:

- De status van elke partij (uitgenodigd, bekeken, getekend of verlopen)
- Een **Bekijk**-knop die een inline voorbeeld van het ondertekende document opent
- Een downloadknop om de PDF op te slaan

De voorbeeldpagina bevat een werkbalk met print- en downloadacties, en toont het ondertekende contract direct in de browser.

::: info Oude contracten
Contracten die zijn aangemaakt voordat de ondertekenfunctie werd toegevoegd, tonen geen ondertekenkaart op de detailpagina. Het systeem herkent oude contracten door te controleren of het contract ondertekenpartijen, een sjabloon of ondertekeninhoud heeft. Alleen contracten die na de introductie van elektronisch ondertekenen zijn aangemaakt of bijgewerkt, tonen de ondertekenkaart.
:::

## Tips

- Gebruik contracten samen met [terugkerende facturen](/nl/features/recurring-invoices) voor verschillende facturatiescenario's
- Koppel contracten aan objecten voor volledig verhuurbeheer
- Stel einddatums in om een melding te ontvangen voordat contracten aflopen
- Gebruik het contractenfilter om actief vs. inactief in een oogopslag te zien
- Voeg ondertekenpartijen toe bij het aanmaken van een contract om elektronisch ondertekenen in te schakelen
