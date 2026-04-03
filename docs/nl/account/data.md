# Gegevens importeren & exporteren

Importeer bestaande gegevens in MyCompanyDesk en exporteer je administratie voor back-up of gebruik in andere tools.

## Importeren

### CSV-import

Importeer gegevens vanuit CSV-bestanden voor:

- **Klanten** — Naam, e-mail, telefoon, adres, BTW-nummer
- **Facturen** — Factuurgegevens met regelitems
- **Uitgaven** — Uitgavenrecords met categorieen
- **Projecten** — Projectnamen en details
- **Objecten** — Activarecords

### Hoe te importeren

1. Ga naar **Profiel > Importeren**
2. Selecteer het **gegevenstype** dat je wilt importeren
3. Upload je **CSV-bestand**
4. **Kolommen koppelen** — Koppel je CSV-kolomkoppen aan MyCompanyDesk-velden
5. **Voorbeeld** — Controleer de gegevens voor het importeren
6. **Bevestigen** — Klik op Importeren om de records aan te maken

### Importtips

- Gebruik UTF-8-codering voor je CSV-bestanden
- Voeg een koprij toe met kolomnamen
- Datumnotaties moeten consistent zijn (JJJJ-MM-DD aanbevolen)
- Bedragvelden moeten een punt (.) als decimaalteken gebruiken
- Lege velden worden overgeslagen (bestaande standaardwaarden worden gebruikt)

### Kolomkoppeling

De importwizard toont je CSV-kolommen en laat je elke kolom koppelen aan het bijbehorende MyCompanyDesk-veld. Veelgebruikte koppelingen:

| CSV-kolom | Koppelt aan |
|---|---|
| Bedrijfsnaam / Naam | Klantnaam |
| E-mail | Klant-e-mail |
| Straat / Adres | Straatadres |
| Postcode | Postcode |
| Plaats | Plaats |
| BTW | BTW-nummer |
| Telefoon | Telefoonnummer |

## Exporteren

### CSV-export

Exporteer je gegevens als CSV vanaf de betreffende lijstpagina's:

- **Facturen** — Alle facturen met bedragen, datums, statussen
- **Uitgaven** — Alle uitgaven met categorieen en bedragen
- **Klanten** — Je klantendatabase

Klik op de **Exporteren**-knop op de lijstpagina om te downloaden.

::: info
CSV-export vereist het **Pro**-abonnement of hoger.
:::

### AVG-gegevensexport

Exporteer al je persoonlijke gegevens in JSON-formaat:

1. Ga naar **Profiel > Gegevens**
2. Klik op **Mijn gegevens exporteren**
3. Download het JSON-bestand met al je accountgegevens

Deze AVG-export bevat:

- Je profielinformatie
- Alle facturen, uitgaven, offertes
- Klantrecords
- Project- en tijdgegevens
- Instellingen en voorkeuren

## Tips

- Exporteer je gegevens regelmatig als back-up
- Gebruik CSV-export om gegevens te delen met je boekhouder
- Wanneer je overstapt van een andere tool, gebruik dan de importwizard om je klantenlijst te migreren
- De AVG-export biedt een compleet overzicht van je gegevens
