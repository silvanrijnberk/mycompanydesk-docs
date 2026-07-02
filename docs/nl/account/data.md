---
title: "Gegevens importeren & exporteren"
last_verified: 2026-07-02
---

# Gegevens importeren & exporteren

Importeer bestaande gegevens in MyCompanyDesk en exporteer je administratie als back-up of voor gebruik in andere tools.

## Importeren

### CSV-import

Importeer gegevens uit CSV-bestanden voor:

- **Klanten** met naam, e-mail, telefoon, adres, BTW-nummer
- **Facturen** met factuurgegevens
- **Uitgaven** met categorieën en bedragen

Andere soorten gegevens (zoals projecten of objecten) kun je niet uit CSV importeren; die maak je in de app zelf aan.

### Zo importeer je

De importwizard heeft een eigen pagina in de app: open `/profile/import` rechtstreeks, handig als je net na het aanmelden overstapt vanuit een andere tool.

1. Kies het **gegevenstype** dat je wilt importeren (klanten, facturen of uitgaven)
2. Upload je **CSV-bestand**
3. **Koppel kolommen** door je CSV-kolomkoppen aan MyCompanyDesk-velden te koppelen
4. **Importeer** om de records aan te maken; het resultaat toont hoeveel rijen zijn geïmporteerd en hoeveel er zijn mislukt

### Importtips

- Gebruik UTF-8-codering voor je CSV-bestanden
- Neem een koprij met kolomnamen op
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
| VAT / BTW | BTW-nummer |
| Telefoon | Telefoonnummer |

## Exporteren

Exports vind je op één plek: open **Instellingen** en kies **Gegevens downloaden**.

### CSV-export

Download je gegevens per soort:

- **Facturen** als CSV, met bedragen, datums en statussen
- **Klanten** als CSV, je volledige klantenlijst
- **Uitgaven** als CSV, met categorieën en bedragen

::: info
CSV- en volledige back-upexports zijn beschikbaar vanaf het **Starter**-abonnement. Op het gratis abonnement toont de pagina een upgrademelding.
:::

### Volledige back-up

Dezelfde pagina biedt een **volledige back-up**: al je gegevens in één JSON-bestand. Gebruik hem als periodieke back-up of als compleet overzicht van je administratie, bijvoorbeeld voor een AVG-inzageverzoek.

Exports bevatten alleen gegevens waar jij toegang toe hebt. PDF-versies van facturen download je apart, op de pagina van elke factuur.

## Tips

- Exporteer je gegevens regelmatig als back-up
- Mail geen bestanden naar je boekhouder, maar geef diegene direct toegang via **Instellingen > Toegang en boekhouder**; dan kijkt je boekhouder altijd naar de nieuwste cijfers
- Stap je over van een andere tool, gebruik dan de importwizard om je klantenlijst mee te nemen
