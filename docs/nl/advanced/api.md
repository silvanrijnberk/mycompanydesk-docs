---
title: API-integratie
---

# API-integratie

Krijg programmatisch toegang tot je MyCompanyDesk-gegevens via de REST API.

::: info
API-toegang vereist het **Pro**-abonnement.
:::

## Overzicht

De MyCompanyDesk API stelt je in staat om:

- Facturen, uitgaven en klanten aan te maken en op te halen
- Facturatieworkflows te automatiseren
- Te integreren met andere bedrijfstools
- Aangepaste rapportages te bouwen
- Gegevens te synchroniseren met externe systemen

## Authenticatie

Alle API-verzoeken vereisen een API-sleutel in de request-header:

```
Authorization: Bearer YOUR_API_KEY
```

### Een API-sleutel aanmaken

1. Ga naar **Instellingen > API-sleutels**
2. Klik op **Nieuwe sleutel genereren**
3. Geef de sleutel een beschrijvende naam
4. Kopieer de sleutel — deze wordt slechts eenmaal getoond

::: warning
Bewaar je API-sleutel veilig. Commit deze nooit naar versiebeheer en deel hem niet publiekelijk.
:::

## Basis-URL

Alle API-endpoints zijn beschikbaar op:

```
https://api.mycompanydesk.com/api
```

## Belangrijke endpoints

### Klanten

| Methode | Endpoint | Beschrijving |
|---|---|---|
| `GET` | `/customers` | Alle klanten ophalen |
| `POST` | `/customers` | Een klant aanmaken |
| `GET` | `/customers/:id` | Een klant ophalen |
| `PUT` | `/customers/:id` | Een klant bijwerken |
| `DELETE` | `/customers/:id` | Een klant verwijderen |

### Facturen

| Methode | Endpoint | Beschrijving |
|---|---|---|
| `GET` | `/invoices` | Alle facturen ophalen |
| `POST` | `/invoices` | Een factuur aanmaken |
| `GET` | `/invoices/:id` | Een factuur ophalen |
| `PUT` | `/invoices/:id` | Een factuur bijwerken |
| `DELETE` | `/invoices/:id` | Een factuur verwijderen |
| `POST` | `/invoices/:id/send` | Een factuur versturen |
| `POST` | `/invoices/:id/mark-paid` | Als betaald markeren |

### Uitgaven

| Methode | Endpoint | Beschrijving |
|---|---|---|
| `GET` | `/expenses` | Alle uitgaven ophalen |
| `POST` | `/expenses` | Een uitgave aanmaken |
| `GET` | `/expenses/:id` | Een uitgave ophalen |
| `PUT` | `/expenses/:id` | Een uitgave bijwerken |
| `DELETE` | `/expenses/:id` | Een uitgave verwijderen |

### Projecten

| Methode | Endpoint | Beschrijving |
|---|---|---|
| `GET` | `/projects` | Alle projecten ophalen |
| `POST` | `/projects` | Een project aanmaken |
| `GET` | `/projects/:id` | Een project ophalen |
| `PUT` | `/projects/:id` | Een project bijwerken |

### Zoeken

| Methode | Endpoint | Beschrijving |
|---|---|---|
| `GET` | `/search?q=term&type=entity` | Zoeken over entiteiten |

## Filteren

Lijstendpoints ondersteunen queryparameters voor filteren:

```
GET /api/invoices?status=sent&customer_id=123&limit=50
```

Veelgebruikte filters:

- `status` — Filter op status
- `customer_id` — Filter op klant
- `project_id` — Filter op project
- `limit` — Aantal resultaten (standaard: 50)
- `offset` — Paginatie-offset

## Snelheidslimiet

API-verzoeken zijn beperkt in snelheid om eerlijk gebruik te garanderen:

- Standaard snelheidslimiet geldt per API-sleutel
- Overschrijding van de limiet geeft een `429 Too Many Requests`-respons
- Neem een retrystrategie op in je integratie

## Foutafhandeling

De API retourneert standaard HTTP-statuscodes:

| Code | Beschrijving |
|---|---|
| `200` | Geslaagd |
| `201` | Aangemaakt |
| `400` | Ongeldig verzoek (controleer je parameters) |
| `401` | Niet geautoriseerd (ongeldige API-sleutel) |
| `403` | Verboden (onvoldoende rechten) |
| `404` | Niet gevonden |
| `429` | Snelheidslimiet bereikt |
| `500` | Serverfout |

Foutresponsen bevatten een JSON-body:

```json
{
  "error": "Beschrijving van wat er mis ging"
}
```

## Webhooks

Configureer webhooks om realtime meldingen te ontvangen wanneer gebeurtenissen plaatsvinden:

- Factuur verstuurd
- Factuur betaald
- Klant aangemaakt
- Uitgave toegevoegd

Stel webhooks in via **Instellingen > API-sleutels > Webhooks**.

## Tips

- Gebruik paginatie voor grote datasets
- Cache responses waar mogelijk om het aantal API-aanroepen te verminderen
- Implementeer retrylogica met exponential backoff voor snelheidslimieten
- Gebruik webhooks in plaats van polling voor realtime updates
