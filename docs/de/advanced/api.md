---
title: API-Integration
---

# API-Integration

Greifen Sie programmatisch auf Ihre MyCompanyDesk-Daten über die REST API zu.

::: info
API-Zugang erfordert den **Pro**-Tarif.
:::

## Übersicht

Die MyCompanyDesk API ermöglicht es Ihnen:

- Rechnungen, Ausgaben und Kunden zu erstellen und abzurufen
- Abrechnungsworkflows zu automatisieren
- Mit anderen Geschäftstools zu integrieren
- Benutzerdefinierte Berichte zu erstellen
- Daten mit externen Systemen zu synchronisieren

## Authentifizierung

Alle API-Anfragen erfordern einen API-Schlüssel, der im Anfrage-Header gesendet wird:

```
Authorization: Bearer YOUR_API_KEY
```

### API-Schlüssel erstellen

1. Gehen Sie zu **Einstellungen > API-Schlüssel**
2. Klicken Sie auf **Neuen Schlüssel generieren**
3. Geben Sie dem Schlüssel einen aussagekräftigen Namen
4. Kopieren Sie den Schlüssel — er wird nur einmal angezeigt

::: warning
Bewahren Sie Ihren API-Schlüssel sicher auf. Speichern Sie ihn niemals in der Versionsverwaltung und teilen Sie ihn nicht öffentlich.
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
| `POST` | `/customers` | Kunden erstellen |
| `GET` | `/customers/:id` | Kunden abrufen |
| `PUT` | `/customers/:id` | Kunden aktualisieren |
| `DELETE` | `/customers/:id` | Kunden löschen |

### Rechnungen

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/invoices` | Alle Rechnungen auflisten |
| `POST` | `/invoices` | Rechnung erstellen |
| `GET` | `/invoices/:id` | Rechnung abrufen |
| `PUT` | `/invoices/:id` | Rechnung aktualisieren |
| `DELETE` | `/invoices/:id` | Rechnung löschen |
| `POST` | `/invoices/:id/send` | Rechnung versenden |
| `POST` | `/invoices/:id/mark-paid` | Als bezahlt markieren |

### Ausgaben

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/expenses` | Alle Ausgaben auflisten |
| `POST` | `/expenses` | Ausgabe erstellen |
| `GET` | `/expenses/:id` | Ausgabe abrufen |
| `PUT` | `/expenses/:id` | Ausgabe aktualisieren |
| `DELETE` | `/expenses/:id` | Ausgabe löschen |

### Projekte

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/projects` | Alle Projekte auflisten |
| `POST` | `/projects` | Projekt erstellen |
| `GET` | `/projects/:id` | Projekt abrufen |
| `PUT` | `/projects/:id` | Projekt aktualisieren |

### Suche

| Methode | Endpunkt | Beschreibung |
|---|---|---|
| `GET` | `/search?q=term&type=entity` | Über Entitäten suchen |

## Filtern

Listen-Endpunkte unterstützen Abfrageparameter zum Filtern:

```
GET /api/invoices?status=sent&customer_id=123&limit=50
```

Häufige Filter:

- `status` — Nach Status filtern
- `customer_id` — Nach Kunde filtern
- `project_id` — Nach Projekt filtern
- `limit` — Anzahl der Ergebnisse (Standard: 50)
- `offset` — Paginierungs-Offset

## Ratenbegrenzung

API-Anfragen unterliegen einer Ratenbegrenzung, um faire Nutzung zu gewährleisten:

- Standard-Ratenbegrenzung gilt pro API-Schlüssel
- Überschreitung des Limits gibt eine `429 Too Many Requests`-Antwort zurück
- Integrieren Sie eine Wiederholungsstrategie in Ihre Integration

## Fehlerbehandlung

Die API gibt Standard-HTTP-Statuscodes zurück:

| Code | Beschreibung |
|---|---|
| `200` | Erfolg |
| `201` | Erstellt |
| `400` | Ungültige Anfrage (überprüfen Sie Ihre Parameter) |
| `401` | Nicht autorisiert (ungültiger API-Schlüssel) |
| `403` | Verboten (unzureichende Berechtigungen) |
| `404` | Nicht gefunden |
| `429` | Ratenbegrenzung erreicht |
| `500` | Serverfehler |

Fehlerantworten enthalten einen JSON-Body:

```json
{
  "error": "Beschreibung des aufgetretenen Fehlers"
}
```

## Webhooks

Konfigurieren Sie Webhooks, um Echtzeit-Benachrichtigungen zu erhalten, wenn Ereignisse auftreten:

- Rechnung versendet
- Rechnung bezahlt
- Kunde erstellt
- Ausgabe hinzugefügt

Richten Sie Webhooks unter **Einstellungen > API-Schlüssel > Webhooks** ein.

## Tipps

- Verwenden Sie Paginierung für große Datensätze
- Cachen Sie Antworten, wo es sinnvoll ist, um API-Aufrufe zu reduzieren
- Implementieren Sie Wiederholungslogik mit exponentiellem Backoff für Ratenbegrenzungen
- Verwenden Sie Webhooks statt Polling für Echtzeit-Updates
