---
title: API-integratie
---

# API-integratie

Krijg programmatisch toegang tot je MyCompanyDesk-gegevens via de REST API.

::: info
API-toegang is onderdeel van het **Pro**-abonnement.
:::

## Overzicht

De MyCompanyDesk API stelt je in staat om:

- Facturen, uitgaven en klanten aan te maken en op te halen
- Facturatieworkflows te automatiseren
- Te integreren met andere bedrijfstools
- Aangepaste rapportages te bouwen
- Gegevens te synchroniseren met externe systemen

## Authenticatie

Stuur je API-sleutel mee in de `X-API-Key` request-header:

```bash
curl -X GET "https://api.mycompanydesk.com/api/invoices" \
  -H "X-API-Key: mcd_live_xxxxx"
```

De header `Authorization: Bearer` is alleen voor browsersessies. API-sleutels horen altijd in `X-API-Key`.

### Een API-sleutel aanmaken

1. Ga naar **Instellingen > API-sleutels**
2. Klik op **API-sleutel maken**
3. Geef de sleutel een beschrijvende naam en kies de rechten
4. Kopieer de sleutel direct, deze wordt maar een keer getoond

Bij het aanmaken van een sleutel kun je instellen:

- **Rechten**: *Lezen* (gegevens bekijken), *Schrijven* (aanmaken, bijwerken en verwijderen) en *Beheer* (volledige toegang)
- **IP-allowlist** (optioneel): beperk de sleutel tot specifieke IP-adressen
- **Vervaldatum** (optioneel): 30 dagen, 90 dagen, 1 jaar of nooit

Je kunt een sleutel op elk moment intrekken vanaf dezelfde pagina. Ingetrokken sleutels verliezen direct hun toegang.

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
| `GET` | `/invoices/:id/pdf` | De factuur-PDF downloaden |
| `POST` | `/invoices/:id/email` | De factuur per e-mail versturen |
| `POST` | `/invoices/:id/reminder` | Een betalingsherinnering versturen |
| `POST` | `/invoices/:id/duplicate` | Een factuur dupliceren |
| `POST` | `/invoices/:id/credit-note` | Een creditfactuur aanmaken |

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
| `DELETE` | `/projects/:id` | Een project verwijderen |

### Zoeken

| Methode | Endpoint | Beschrijving |
|---|---|---|
| `GET` | `/search?q=term&type=entity` | Zoeken over alle entiteiten |

## Filteren

Lijst-endpoints ondersteunen queryparameters om te filteren:

```
GET /api/invoices?status=sent&customer_id=123&limit=50
```

Veelgebruikte filters:

- `status`: filteren op status
- `customer_id`: filteren op klant
- `search`: vrije zoekterm
- `date_from` / `date_to`: filteren op datumbereik
- `limit`: aantal resultaten
- `offset`: paginering-offset

## Snelheidslimieten

API-verzoeken zijn beperkt tot 200 verzoeken per minuut. Elke respons bevat de headers `X-RateLimit-Limit`, `X-RateLimit-Remaining` en `X-RateLimit-Reset`. Bij het overschrijden van de limiet krijg je een `429 Too Many Requests`-respons met een `Retry-After`-header, dus bouw een retry-strategie in je integratie in.

## Foutafhandeling

De API retourneert standaard HTTP-statuscodes:

| Code | Beschrijving |
|---|---|
| `200` | Succes |
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

Webhooks informeren je systemen realtime wanneer er iets gebeurt in je account. Stel ze in via **Instellingen > Webhooks**: geef de webhook een naam en een URL en kies de gebeurtenissen die je wilt ontvangen.

Beschikbare gebeurtenissen:

- `invoice.created`, `invoice.updated`, `invoice.paid`, `invoice.overdue`
- `expense.created`, `expense.updated`, `expense.deleted`
- `customer.created`, `customer.updated`
- `inbox.thread.received`, `inbox.message.received`
- `test.ping` (om je endpoint te testen)

Elke levering is een HTTP `POST` met een JSON-body:

```json
{
  "id": "event id",
  "type": "invoice.paid",
  "company_id": 123,
  "created_at": "2026-07-02T12:00:00.000Z",
  "data": { }
}
```

### Leveringen verifiëren

Elke webhook heeft een signing secret dat eenmalig wordt getoond bij het aanmaken (je kunt het later roteren). Elke levering bevat een `X-MCD-Signature`-header met een HMAC-SHA256-hash (hex) van de ruwe request-body, berekend met jouw signing secret. Bereken de hash aan jouw kant opnieuw en vergelijk deze met de header voordat je de payload vertrouwt. De headers `X-MCD-Event-Type`, `X-MCD-Event-Id` en `X-MCD-Delivery-Id` identificeren de levering.

### Nieuwe pogingen

Mislukte leveringen worden automatisch opnieuw geprobeerd met oplopende tussenpozen. Een endpoint dat blijft falen wordt automatisch uitgeschakeld; schakel het weer in op de webhooks-pagina zodra je endpoint weer gezond is.

## Tips

- Gebruik paginering voor grote datasets
- Cache responsen waar mogelijk om het aantal API-aanroepen te verminderen
- Implementeer retry-logica met exponential backoff voor snelheidslimieten
- Gebruik webhooks in plaats van polling voor realtime updates
