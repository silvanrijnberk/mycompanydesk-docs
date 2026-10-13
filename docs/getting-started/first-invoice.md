---
title: Je eerste factuur
description: "Stap voor stap je eerste factuur maken en versturen, van je bedrijfsgegevens en je klant tot aan de verstuurknop."
---

# Je eerste factuur

Deze gids helpt je stap voor stap bij het maken en versturen van je eerste factuur in MyCompanyDesk.

## Voordat je begint

Zorg dat je het volgende hebt gedaan:

- [Je bedrijfsinformatie ingesteld](/getting-started/company-setup) (naam, adres, btw-id, IBAN). Ontbreekt je btw-id of IBAN nog, dan vraagt MyCompanyDesk erom zodra je de factuur definitief maakt.
- Ten minste een klant om te factureren (je kunt er een aanmaken tijdens het proces)

## Een factuur maken

1. Ga naar **Facturen** in de zijbalk
2. Klik op **Nieuwe factuur** (of gebruik de **+**-knop op je telefoon)
3. Vul de factuur in

Op je telefoon of tablet opent een nieuwe factuur in drie stappen: **Klant**, **Regels** en **Controleren**. Met **Verder** ga je naar de volgende stap. Op een groot scherm staat alles op één pagina.

### Selecteer een klant

Begin in het veld **Zoek een klant...** met het typen van de klantnaam. Bestaat de klant al, selecteer hem dan uit de lijst. Zo niet, kies **Nieuwe klant toevoegen**. Het venster **Nieuwe klant** vraagt om het type klant (**Particulier** of **Bedrijf**), de naam en het adres. Voor bedrijven zoekt de KVK-opzoeking de gegevens op en vult het adres automatisch in; voor particuliere klanten typ je het adres zelf. E-mail is optioneel. Klik op **Toevoegen** en de klant staat op de factuur.

### Regels toevoegen

Elke regel bevat:

- **Omschrijving**: waarvoor je factureert
- **Aantal**: aantal eenheden
- **Prijs**: prijs per eenheid. Standaard typ je prijzen zonder btw; zet **Prijzen incl. btw** aan als je liever het bedrag typt dat je klant betaalt.
<!-- TODO(source-missing): The app also accepts the historical Dutch rates 6% and 19% on invoices and catalog items. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
- **Btw-tarief**: Toepasselijk btw-percentage (0%, 9%, 21%, etc.)

Klik op **Regel toevoegen** voor meer regels, of kies een product of dienst uit je aanbod. Het totaal wordt automatisch berekend inclusief btw.

### Factuurgegevens instellen

- **Factuurnummer**: automatisch voorgesteld. De factuur krijgt haar vaste nummer zodra je haar definitief maakt.
- **Factuurdatum**: standaard vandaag
- **Vervaldatum**: berekend op basis van je standaard betaaltermijn (aanpasbaar)
- **Notities**: optionele notities die op de factuur verschijnen

### Opslaan

Je hebt twee knoppen:

- **Concept opslaan**: bewaart de factuur als **Concept**. Je kunt alles nog aanpassen.
- **Definitief maken**: geeft de factuur haar nummer en maakt haar klaar om te versturen. Daarna kun je de gegevens niet meer aanpassen (verplicht voor de Belastingdienst).

## Factuur bekijken

Klik in het factuurformulier op **Voorbeeld bekijken** om te zien hoe de PDF eruitziet. Controleer of alle informatie klopt: bedrijfsgegevens, klantinfo, regels en totalen. Op de factuurpagina zie je het document ook en kun je het als **PDF downloaden**.

## Factuur versturen

Een definitieve factuur die nog niet weg is, heeft de status **Nog versturen**. Om haar te versturen:

1. Klik op **Versturen** op de factuurpagina
2. Controleer in het venster **E-mail versturen** de mail aan je klant:
   - **Aan**: het e-mailadres van je klant
   - **Onderwerp** en **Bericht** (aanpasbaar)
   - Onder **Opnemen in e-mail**: de **Bekijk-knop (online link)**, de **Download-knop** en de **PDF-bijlage**. Via de online link bekijkt en betaalt je klant de factuur.
3. Klik op **E-mail versturen**

De factuurstatus verandert naar **Verzonden**. Stuurde je de factuur zelf, bijvoorbeeld via WhatsApp? Klik dan op **Markeer als verzonden**.

::: tip
Je e-mailteksten pas je aan in **Instellingen › E-mail**. Je kunt ook in het verstuurvenster een tekst aanpassen en **Gebruik deze tekst voortaan voor facturen** aanvinken.
:::

## Betaling bijhouden

Na het versturen staat de factuur bij **Wacht op betaling**, of bij **Te laat** zodra de vervaldatum voorbij is. Wanneer de klant betaalt:

- Betaalt de klant online (iDEAL, in te stellen via **Instellingen › Betalen**), dan wordt de factuur automatisch als betaald gemarkeerd
- Voor bankoverschrijvingen klik je op **Markeer als betaald** op de factuur om de betaling handmatig te registreren

## Factuurstatussen

| Status | Beschrijving |
|---|---|
| **Concept** | Aangemaakt maar nog niet definitief. Volledig bewerkbaar. |
| **Nog versturen** | Definitief, nog niet verstuurd. |
| **Verzonden** | Bezorgd bij de klant. Wacht op betaling. |
| **Te laat** | Voorbij de vervaldatum en nog niet betaald. |
| **Klant zegt: betaald** | De klant gaf aan dat hij heeft betaald. Controleer het en markeer de factuur als betaald. |
| **Betaald** | Betaling ontvangen en bevestigd. |
| **Geannuleerd** | Factuur is geannuleerd. Geen betaling verwacht. |

## Sjablonen gebruiken

Bespaar tijd met factuursjablonen:

1. Maak een nieuwe factuur met je meestgebruikte regels
2. Klik op **Opslaan als sjabloon**
3. De volgende keer kies je bij een nieuwe factuur **Vanuit sjabloon**, en alle regels zijn vooraf ingevuld

## Volgende stappen

Gefeliciteerd met het versturen van je eerste factuur! Ontdek meer functies:

- [Uitgaven bijhouden](/features/expenses)
- [Offertes maken](/features/quotes) voor potentieel werk
- [Terugkerende facturen instellen](/features/recurring-invoices) voor regelmatige facturatie (Office)
- [Rapportages bekijken](/features/reports) om je financiën te begrijpen
