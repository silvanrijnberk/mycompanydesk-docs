---
title: "Gegevens importeren & exporteren"
description: "Importeer klanten, facturen en uitgaven uit CSV, en exporteer je administratie als back-up of voor gebruik in een ander programma."
last_verified: 2026-10-13
---

# Gegevens importeren & exporteren

Importeer bestaande gegevens in MyCompanyDesk en exporteer je administratie als back-up of voor gebruik in andere tools.

## Importeren

### CSV-import

Importeer gegevens uit CSV-bestanden voor:

- **Klanten** met naam, e-mail, telefoon, adres, btw-nummer
- **Facturen** met factuurgegevens
- **Uitgaven** met categorieën en bedragen
- **Aanbod**: je producten en diensten, met prijs (excl. btw), eenheid en btw-tarief

Andere soorten gegevens (zoals projecten of objecten) kun je niet uit CSV importeren; die maak je in de app zelf aan.

### Zo importeer je

De importwizard heeft een eigen pagina in de app, **CSV-gegevens importeren**. Je opent hem met **Importeren** in je klantenlijst, via **Instellingen › Overstappen**, of rechtstreeks op `/profile/import`, handig als je net na het aanmelden overstapt vanuit een andere tool.

1. Kies het **gegevenstype** dat je wilt importeren (klanten, facturen, uitgaven of aanbod)
2. Upload je **CSV-bestand**
3. **Koppel kolommen** door je CSV-kolomkoppen aan MyCompanyDesk-velden te koppelen
4. **Importeer** om de records aan te maken; het resultaat toont hoeveel rijen zijn geïmporteerd en hoeveel er zijn mislukt

Klopt het resultaat niet, dan haal je met **Deze import ongedaan maken** precies de rijen weg die deze import aanmaakte, behalve rijen waar al iets aan gekoppeld is.

### Importtips

- Gebruik UTF-8-codering voor je CSV-bestanden
- Neem een koprij met kolomnamen op
- Komma en puntkomma als scheidingsteken worden allebei herkend
- Houd datumnotaties consistent (JJJJ-MM-DD aanbevolen)
- Gebruik een punt (.) als decimaalteken in bedragvelden
- Lege velden worden overgeslagen (bestaande standaardwaarden worden gebruikt)

### Kolommen koppelen

De importwizard toont je CSV-kolommen en laat je elke kolom aan het bijbehorende MyCompanyDesk-veld koppelen. Veelvoorkomende koppelingen:

| CSV-kolom | Wordt |
|---|---|
| Bedrijfsnaam / Naam | Klantnaam |
| E-mail | E-mail van de klant |
| Straat / Adres | Straatadres |
| Postcode | Postcode |
| Plaats | Plaats |
| VAT / BTW | Btw-nummer |
| Telefoon | Telefoonnummer |

## Exporteren

Exports vind je op één plek: open **Instellingen** en kies **Gegevens downloaden**.

### CSV-export

Download je gegevens per soort:

- **Facturen** als CSV, met bedragen, datums en statussen
- **Klanten** als CSV, je volledige klantenlijst
- **Uitgaven** als CSV, met categorieën en bedragen

::: info
De CSV-exports van je facturen, uitgaven en klantenlijst, plus de volledige back-up (JSON), kun je altijd downloaden, op elk abonnement, inclusief Desk.
:::

### Volledige back-up

Dezelfde pagina biedt een **volledige back-up**: al je gegevens in één JSON-bestand. Gebruik hem als periodieke back-up of als compleet overzicht van je administratie, bijvoorbeeld voor een AVG-inzageverzoek.

Exports bevatten alleen gegevens waar jij toegang toe hebt. PDF-versies van facturen download je apart, op de pagina van elke factuur. De foto's en pdf's van je bonnetjes zitten niet in de export; die bewaar je bij de uitgave zelf.

## Locatiegegevens

MyCompanyDesk kan je locatie gebruiken als je daar zelf voor kiest:

- **Klant in de buurt** zoeken vanuit de klantenlijst.
- **Huidige locatie** gebruiken als vertrekadres van een rit bij het boeken van uren.

We lezen je locatie alleen in die twee gevallen, in de app of in je browser. We zetten die om naar een adres of een gefilterde klantenlijst, en we slaan de ruwe coördinaten niet op. Je kunt de toestemming altijd weigeren of intrekken in de instellingen van je apparaat of browser.

## Tips

- Exporteer je gegevens regelmatig als back-up
- Mail geen bestanden naar je boekhouder, maar geef diegene direct toegang via **Instellingen › Je boekhouder**; dan kijkt je boekhouder altijd naar de nieuwste cijfers
- Stap je over van een andere tool, gebruik dan de importwizard om je klantenlijst mee te nemen
