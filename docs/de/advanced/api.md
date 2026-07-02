---
title: API-Integration
---

# API-Integration

Greifen Sie programmatisch über die REST API auf Ihre MyCompanyDesk-Daten zu.

::: info
API-Zugang ist Teil des **Pro**-Tarifs.
:::

## Übersicht

Die MyCompanyDesk API ermöglicht es Ihnen:

- Rechnungen, Ausgaben und Kunden zu erstellen und abzurufen
- Abrechnungsworkflows zu automatisieren
- Mit anderen Geschäftstools zu integrieren
- Benutzerdefinierte Berichte zu erstellen
- Daten mit externen Systemen zu synchronisieren

## Authentifizierung

Senden Sie Ihren API-Schlüssel im `X-API-Key`-Header:

```bash
curl -X GET "https://api.mycompanydesk.com/api/invoices" \
  -H "X-API-Key: mcd_live_xxxxx"
```

Der Header `Authorization: Bearer` ist nur für Browser-Sitzungen gedacht. API-Schlüssel gehören immer in `X-API-Key`.

### API-Schlüssel erstellen

1. Gehen Sie zu **Einstellungen > API-Schlüssel**
2. Klicken Sie auf **API-Schlüssel erstellen**
3. Geben Sie dem Schlüssel einen aussagekräftigen Namen und wählen Sie die Berechtigungen
4. Kopieren Sie den Schlüssel sofort, er wird nur einmal angezeigt

Beim Erstellen eines Schlüssels können Sie festlegen:

- **Berechtigungen**: *Lesen* (Daten anzeigen), *Schreiben* (erstellen, aktualisieren und löschen) und *Admin* (voller Zugriff)
- **IP-Allowlist** (optional): beschränken Sie den Schlüssel auf bestimmte IP-Adressen
- **Ablaufdatum** (optional): 30 Tage, 90 Tage, 1 Jahr oder nie

Sie können einen Schlüssel jederzeit auf derselben Seite widerrufen. Widerrufene Schlüssel verlieren sofort den Zugriff.

::: warning
Bewahren Sie Ihren API-Schlüssel sicher auf. Committen Sie ihn niemals in die Versionsverwaltung und teilen Sie ihn nicht öffentlich.
:::

## Basis-URL

Alle API-Endpunkte sind verfügbar unter:

```
https://api.mycompanydesk.com/api
```

## Wichtige Endpunkte

### Kunden

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/customers` | Alle Kunden auflisten |
| `POST` | `/customers` | Einen Kunden erstellen |
| `GET` | `/customers/:id` | Einen Kunden abrufen |
| `PUT` | `/customers/:id` | Einen Kunden aktualisieren |
| `DELETE` | `/customers/:id` | Einen Kunden löschen |

### Rechnungen

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/invoices` | Alle Rechnungen auflisten |
| `POST` | `/invoices` | Eine Rechnung erstellen |
| `GET` | `/invoices/:id` | Eine Rechnung abrufen |
| `PUT` | `/invoices/:id` | Eine Rechnung aktualisieren |
| `DELETE` | `/invoices/:id` | Eine Rechnung löschen |
| `GET` | `/invoices/:id/pdf` | Die Rechnungs-PDF herunterladen |
| `POST` | `/invoices/:id/email` | Die Rechnung per E-Mail versenden |
| `POST` | `/invoices/:id/reminder` | Eine Zahlungserinnerung senden |
| `POST` | `/invoices/:id/duplicate` | Eine Rechnung duplizieren |
| `POST` | `/invoices/:id/credit-note` | Eine Gutschrift erstellen |

### Ausgaben

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/expenses` | Alle Ausgaben auflisten |
| `POST` | `/expenses` | Eine Ausgabe erstellen |
| `GET` | `/expenses/:id` | Eine Ausgabe abrufen |
| `PUT` | `/expenses/:id` | Eine Ausgabe aktualisieren |
| `DELETE` | `/expenses/:id` | Eine Ausgabe löschen |

### Projekte

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/projects` | Alle Projekte auflisten |
| `POST` | `/projects` | Ein Projekt erstellen |
| `GET` | `/projects/:id` | Ein Projekt abrufen |
| `PUT` | `/projects/:id` | Ein Projekt aktualisieren |
| `DELETE` | `/projects/:id` | Ein Projekt löschen |

### Suche

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/search?q=term&type=entity` | Über alle Entitäten suchen |

## Filtern

Listen-Endpunkte unterstützen Query-Parameter zum Filtern:

```
GET /api/invoices?status=sent&customer_id=123&limit=50
```

Häufige Filter:

- `status`: nach Status filtern
- `customer_id`: nach Kunde filtern
- `search`: Freitextsuche
- `date_from` / `date_to`: nach Datumsbereich filtern
- `limit`: Anzahl der Ergebnisse
- `offset`: Paginierungs-Offset

## Ratenbegrenzung

API-Anfragen sind auf 200 Anfragen pro Minute begrenzt. Jede Antwort enthält die Header `X-RateLimit-Limit`, `X-RateLimit-Remaining` und `X-RateLimit-Reset`. Beim Überschreiten des Limits erhalten Sie eine `429 Too Many Requests`-Antwort mit einem `Retry-After`-Header. Planen Sie daher eine Wiederholungsstrategie in Ihrer Integration ein.

## Fehlerbehandlung

Die API gibt Standard-HTTP-Statuscodes zurück:

| Code | Beschreibung |
|---|---|
| `200` | Erfolg |
| `201` | Erstellt |
| `400` | Ungültige Anfrage (prüfen Sie Ihre Parameter) |
| `401` | Nicht autorisiert (ungültiger API-Schlüssel) |
| `403` | Verboten (unzureichende Berechtigungen) |
| `404` | Nicht gefunden |
| `429` | Ratenlimit erreicht |
| `500` | Serverfehler |

Fehlerantworten enthalten einen JSON-Body:

```json
{
  "error": "Beschreibung des Fehlers"
}
```

## Webhooks

Webhooks benachrichtigen Ihre Systeme in Echtzeit, wenn in Ihrem Konto etwas passiert. Richten Sie sie unter **Einstellungen > Webhooks** ein: Geben Sie dem Webhook einen Namen und eine URL und wählen Sie die Ereignisse, die Sie empfangen möchten.

Verfügbare Ereignisse:

- `invoice.created`, `invoice.updated`, `invoice.paid`, `invoice.overdue`
- `expense.created`, `expense.updated`, `expense.deleted`
- `customer.created`, `customer.updated`
- `inbox.thread.received`, `inbox.message.received`
- `test.ping` (zum Testen Ihres Endpunkts)

Jede Zustellung ist ein HTTP-`POST` mit einem JSON-Body:

```json
{
  "id": "event id",
  "type": "invoice.paid",
  "company_id": 123,
  "created_at": "2026-07-02T12:00:00.000Z",
  "data": { }
}
```

### Zustellungen verifizieren

Jeder Webhook hat ein Signaturgeheimnis, das einmalig beim Erstellen angezeigt wird (Sie können es später rotieren). Jede Zustellung enthält einen `X-MCD-Signature`-Header mit einem HMAC-SHA256-Hash (hex) des rohen Anfrage-Bodys, berechnet mit Ihrem Signaturgeheimnis. Berechnen Sie den Hash auf Ihrer Seite neu und vergleichen Sie ihn mit dem Header, bevor Sie der Payload vertrauen. Die Header `X-MCD-Event-Type`, `X-MCD-Event-Id` und `X-MCD-Delivery-Id` identifizieren die Zustellung.

### Wiederholungen

Fehlgeschlagene Zustellungen werden automatisch mit zunehmenden Abständen wiederholt. Ein Endpunkt, der dauerhaft fehlschlägt, wird automatisch deaktiviert; aktivieren Sie ihn auf der Webhooks-Seite wieder, sobald Ihr Endpunkt wieder erreichbar ist.

## Tipps

- Verwenden Sie Paginierung für große Datensätze
- Cachen Sie Antworten, wo sinnvoll, um API-Aufrufe zu reduzieren
- Implementieren Sie Wiederholungslogik mit exponentiellem Backoff für Ratenlimits
- Verwenden Sie Webhooks statt Polling für Echtzeit-Updates
