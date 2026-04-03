# E-Mail-Integration

Konfigurieren Sie, wie MyCompanyDesk E-Mails an Ihre Kunden sendet — von der Rechnungszustellung bis zu Zahlungserinnerungen.

## E-Mail-Versandmethoden

MyCompanyDesk unterstützt drei Wege zum Versenden von E-Mails:

### 1. Integrierter E-Mail-Versand (Standard)

Standardmäßig werden E-Mails über den eigenen E-Mail-Dienst von MyCompanyDesk versendet. Keine Konfiguration erforderlich.

### 2. Gmail-Integration

Senden Sie E-Mails direkt von Ihrem Gmail-Konto:

1. Gehen Sie zu **Einstellungen > Kommunikation > E-Mail**
2. Klicken Sie auf **Gmail verbinden**
3. Autorisieren Sie MyCompanyDesk, in Ihrem Namen über Google OAuth zu senden
4. E-Mails werden jetzt als von Ihrer Gmail-Adresse gesendet angezeigt

**Vorteile:**

- E-Mails zeigen Ihre Gmail-Adresse als Absender
- Gesendete E-Mails erscheinen in Ihrem Gmail-Ordner „Gesendet"
- Bessere Zustellbarkeit (Ihre eigene Domain-Reputation)

### 3. Outlook / Microsoft-Integration

Senden Sie von Ihrem Outlook- oder Microsoft 365-Konto:

1. Gehen Sie zu **Einstellungen > Kommunikation > E-Mail**
2. Klicken Sie auf **Outlook verbinden**
3. Autorisieren Sie über Microsoft OAuth
4. E-Mails werden von Ihrer Outlook-Adresse gesendet

### 4. Benutzerdefiniertes SMTP

Für volle Kontrolle verwenden Sie Ihren eigenen SMTP-Server:

1. Gehen Sie zu **Einstellungen > Kommunikation > E-Mail**
2. Geben Sie Ihre SMTP-Details ein:
   - **Host** — SMTP-Serveradresse
   - **Port** — Server-Port (587 für TLS, 465 für SSL)
   - **Benutzername** — SMTP-Anmeldung
   - **Passwort** — SMTP-Passwort
3. Klicken Sie auf **Verbindung testen**, um die Funktion zu überprüfen
4. Speichern

## E-Mail-Vorlagen

Passen Sie die E-Mails an, die mit Ihren Rechnungen und Erinnerungen versendet werden.

### Rechnungs-E-Mail-Vorlage

Die Standard-E-Mail, die beim Versand einer Rechnung gesendet wird. Passen Sie an:

- **Betreffzeile** — Der E-Mail-Betreff (unterstützt Variablen wie Rechnungsnummer)
- **Text** — Der Nachrichteninhalt
- **Sprache** — Sprachspezifische Vorlagen festlegen

### Erinnerungs-E-Mail-Vorlage

Die E-Mail, die beim Nachfassen bei überfälligen Rechnungen gesendet wird. Passen Sie die gleichen Felder wie oben an, aber mit einem dringenderen Ton.

### Vorschau

Vor dem Versand können Sie jede E-Mail in der Vorschau ansehen, um genau zu sehen, was Ihr Kunde erhalten wird:

- Gerendertes HTML mit Ihrem Branding
- PDF-Anhang-Vorschau
- Zahlungslink-Einbindung

## Variablen

E-Mail-Vorlagen unterstützen dynamische Variablen:

| Variable | Beschreibung |
|---|---|
| `{invoice_number}` | Die Rechnungsnummer |
| `{customer_name}` | Name des Kunden |
| `{amount}` | Gesamtrechnungsbetrag |
| `{due_date}` | Fälligkeitsdatum der Zahlung |
| `{company_name}` | Ihr Firmenname |
| `{payment_link}` | Link zur Online-Zahlung |

## Benachrichtigungen

Konfigurieren Sie, welche E-Mail-Benachrichtigungen Sie erhalten:

- **Rechnung bezahlt** — Benachrichtigung, wenn ein Kunde zahlt
- **Angebotsanfrage eingegangen** — Benachrichtigung bei neuen Angebotsanfragen
- **Teamaktivitäten** — Aktualisierungen zu Aktionen von Teammitgliedern

Benachrichtigungseinstellungen können in Ihrem [Profil](/de/account/profile) festgelegt werden.

## Tipps

- Verbinden Sie Gmail oder Outlook für die beste Zustellbarkeit
- Testen Sie Ihre E-Mail-Vorlage immer, bevor Sie Ihre erste Rechnung versenden
- Richten Sie sprachspezifische Vorlagen ein, wenn Sie Kunden in mehreren Sprachen bedienen
- Verwenden Sie die Erinnerungsvorlage für professionelle Nachfassaktionen bei überfälligen Rechnungen
