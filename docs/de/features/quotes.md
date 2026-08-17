---
title: Angebote
---

# Angebote

Versenden Sie professionelle Kostenvoranschläge an potenzielle Kunden und wandeln Sie diese bei Annahme in Rechnungen um.

## Übersicht

Der Angebotsbereich ermöglicht es Ihnen, Angebote zu erstellen, zu versenden und zu verfolgen. Angebote folgen einem ähnlichen Workflow wie Rechnungen, sind jedoch unverbindliche Schätzungen.

## Angebot erstellen

1. Gehen Sie zu **Angebote > Neues Angebot**
2. Wählen oder erstellen Sie einen **Kunden**
3. Fügen Sie **Positionen** mit Beschreibungen, Mengen, Preisen und USt.-Sätzen hinzu
4. Legen Sie ein **Gültig bis**-Datum fest (wie lange das Angebot gültig ist)
5. Fügen Sie optionale **Anmerkungen** hinzu
6. Klicken Sie auf **Speichern**

Das Angebotsformular ähnelt dem Rechnungsformular — wenn Sie wissen, wie man eine Rechnung erstellt, wissen Sie bereits, wie man ein Angebot erstellt.

## Angebot versenden

1. Öffnen Sie die Angebotsdetailseite
2. Klicken Sie auf **Senden**
3. Überprüfen Sie die E-Mail-Vorschau
4. Klicken Sie auf **Senden**, um es an Ihren Kunden zuzustellen

Im Versanddialog findest du Schalter für **Ansehen-Button**, **Download-Button** und **PDF-Anhang**. Standardmäßig ist der PDF-Anhang aktiviert, damit der Kunde das Angebot überprüfen kann.

Für ein Angebot muss mindestens einer dieser Schalter aktiviert sein; sonst hat der Kunde keine Möglichkeit, das Angebot zu öffnen, und der Button **Senden** wird deaktiviert. Rechnungen behalten immer einen Kundenportal-Button als Rückfalllösung, Angebote nicht.

Wenn in Ihrem Arbeitsbereich Allgemeine Geschäftsbedingungen in Dokumenten hinterlegt sind, zeigt der E-Mail-Vorschau-Dialog außerdem den Schalter **Allgemeine Geschäftsbedingungen mitschicken** an. Er ist für Angebote standardmäßig aktiviert. Wenn Sie ihn einschalten, wird die aktuelle AGB-PDF der E-Mail beigefügt und der Versand als Übergabemoment auf dem AGB-Dokument protokolliert.

## Kundenaktivität

Sobald ein Angebot per E-Mail versendet wurde, zeigt die Detailseite Aktivitäts-Chips, die genauso funktionieren wie bei Rechnungen:

- **Gesendet**: die E-Mail wurde aus Ihrem Arbeitsbereich versendet.
- **Geöffnet**: der Kunde hat die E-Mail geöffnet (gemessen über ein Pixel in der Angebots-E-Mail).
- **Angesehen**: der Kunde hat die öffentliche Angebotsseite aufgerufen.
- **Heruntergeladen**: der Kunde hat das Angebot als PDF heruntergeladen.

Ein Angebot zeigt nie einen **Bezahlt**-Chip, denn Angebote werden nicht direkt bezahlt; ein unterschriebenes Angebot wird in seiner eigenen Unterschriftenkarte angezeigt.

Die Chips bleiben inaktiv, bis das Angebot tatsächlich per E-Mail versendet wurde. Vorher bleibt die Karte verborgen, damit die Seite nicht unnötig voll wirkt.

Ereignisse werden im selben `invoice_customer_events`-Log wie Rechnungsaktivitäten gespeichert, getrennt durch eine `entity_type`-Spalte, damit Angebote und Rechnungen nicht durcheinandergeraten.

Quelle: `apps/api/src/modules/invoices/customer-events.service.js` - `recordEvent`, `getEventsForQuote`; `apps/api/src/db/migrations/20270302000000_customer_events_entity_type.js` - `entity_type`-Spalte; `apps/api/src/modules/quotes/quotes.routes.js` - `GET /:id/customer-events`.

## Angebot online unterschreiben lassen

Sie können einen Kunden bitten, ein Angebot online zu unterschreiben, anstatt es nur als PDF zu versenden. Öffnen Sie die Angebotsdetailseite und wählen Sie **Zum Unterschreiben senden**, um eine Unterschriftenanfrage an den Kunden zu senden. Der Angebotsstatus wechselt zu **Gesendet**, damit Sie den Fortschritt verfolgen können.

Wenn die E-Mail zum Unterschreiben aufgrund eines Problems mit Ihren E-Mail-Einstellungen nicht zugestellt werden kann, erscheint eine Fehlermeldung, die Sie auffordert, Ihre E-Mail-Einstellungen zu prüfen und es erneut zu versuchen. Die Unterschriftenanfrage selbst wird auf dem Server erstellt, sodass Sie sie erneut senden können, sobald die E-Mail-Einstellungen korrigiert sind.

## Detailaktionen für Angebote

Die Hauptaktion auf der Angebotsdetailseite richtet sich nach dem Angebotsstatus:

- **Senden** — Verfügbar für Entwurfs- und gesendete Angebote, damit das Angebot den Kunden erreicht.
- **In Rechnung umwandeln** — Verfügbar, sobald der Kunde das Angebot angenommen hat; damit erstellen Sie mit einem Klick eine Rechnung.
- **Duplizieren / neue Version erstellen** — Verfügbar für abgelehnte oder abgelaufene Angebote, damit Sie sie schnell neu ausstellen können.

Zusätzliche Aktionen finden sich im Overflow-Menü neben der Hauptaktion:

- **PDF-Vorschau** — Zeigen Sie das Angebots-PDF im Vollbild an, bevor Sie es versenden.
- **PDF herunterladen** — Laden Sie das Angebot als professionell formatiertes PDF-Dokument mit Ihrem Firmenlogo, Ihren Markenfarben und allen Angebotsdetails herunter.
- **Angebot kopieren** — Erstellen Sie eine Kopie des bestehenden Angebots.

## Angebotsstatus

| Status | Beschreibung |
|---|---|
| **Entwurf** | Erstellt, aber nicht gesendet |
| **Gesendet** | An den Kunden zugestellt |
| **Angenommen** | Kunde hat das Angebot angenommen |
| **Abgelehnt** | Kunde hat das Angebot abgelehnt |
| **Abgelaufen** | Gültigkeitsdatum überschritten |
| **In Rechnung gestellt** | In eine Rechnung umgewandelt |

## In Rechnung umwandeln

Sobald ein Kunde Ihr Angebot annimmt, wandeln Sie es mit einem Klick in eine Rechnung um:

1. Öffnen Sie das angenommene Angebot
2. Klicken Sie auf **In Rechnung umwandeln**
3. Überprüfen Sie die vorausgefüllte Rechnung (alle Positionen werden übernommen)
4. Nehmen Sie bei Bedarf Anpassungen vor
5. Speichern und versenden Sie die Rechnung

## Angebotsanfragen

Kunden können Angebotsanfragen über Ihren [Website-Builder](/de/advanced/business-page) einreichen. Diese erscheinen unter **Angebote > Anfragen**.

### Anfragen verwalten

Jede Anfrage zeigt:

- Kundenname und E-Mail
- Angefragter Service oder Beschreibung
- Eingangsdatum
- Status

### Anfragestatus

| Status | Beschreibung |
|---|---|
| **Neu** | Gerade eingegangen, nicht überprüft |
| **Überprüft** | Sie haben die Anfrage gelesen |
| **Angeboten** | Sie haben als Antwort ein Angebot gesendet |
| **Geschlossen** | Anfrage erledigt (angenommen oder abgelehnt) |

### Auf eine Anfrage antworten

1. Öffnen Sie die Anfrage
2. Klicken Sie auf **Als überprüft markieren** nach dem Lesen
3. Klicken Sie auf **Angebot erstellen**, um ein Angebot für diesen Kunden zu generieren
4. Das Angebot wird mit den Kundeninformationen vorausgefüllt

### KI-Konzeptangebot aus einer Anfrage

Wenn ein Kunde über Ihren Website-Builder oder Ihr Kontaktformular eine Angebotsanfrage einreicht, kann MyCompanyDesk automatisch ein Konzeptangebot entwerfen. Die KI liest den Anfragetext und Ihren eigenen Katalog und schlägt passende Positionen vor.

- Zugeordnete Katalogartikel behalten ihren Katalogpreis, USt.-Satz und Einheit. Die KI schlägt nur Mengen vor.
- Arbeit, die nicht in den Katalog passt, wird als beschreibende Position mit Preis 0 eingefügt, damit Sie sie selbst bepreisen können.
- Das Konzept wird als Angebot im Status **Entwurf** angelegt. Es wird nicht automatisch versandt, und es wird kein Kundendatensatz aus dem unverifizierten Formular erstellt.
- Sie erhalten eine Benachrichtigung, sobald ein Konzept bereitsteht. Öffnen Sie die Anfrage, prüfen Sie die Positionen, verknüpfen oder erstellen Sie den Kunden und senden Sie das Angebot, wenn Sie bereit sind.

Es ist ein best-effort-Entwurf, kein fertiges Angebot. Prüfen Sie immer Preise und Beschreibungen, bevor Sie versenden.

## Massenaktionen

- **Senden** — Mehrere Angebote gleichzeitig versenden
- **Archivieren** — Angebote ins Archiv verschieben
- **Löschen** — Angebote entfernen

## Tipps

- Angebotsanfragen-Kennzahlen (eingegangen, angeboten, geschlossen) werden oben auf der Anfragenseite angezeigt
- Nutzen Sie die Schnellerfassungsfunktion für schnelle Angebotserstellung

## Dashboard-Kontext

Angebote, die Nachverfolgung brauchen, erscheinen auch im Dashboard-Tab **Gute Nachrichten**:

- **Offene Anfragen**: wie viele Angebotsanfragen über die Website auf Antwort warten, plus die längste Wartezeit.
- **Ablaufende Angebote**: wie viele Angebote diese Woche ablaufen, und wie viele bereits ohne Antwort abgelaufen sind.

Angebotsanfragen kommen über Ihr Website-Builder-Formular. Siehe [Domains, Website & Posteingang](/de/features/domains-website-inbox) für das Einrichten des Formulars.
