---
title: Rechnungen
---

# Rechnungen

Rechnungen stehen im Mittelpunkt von MyCompanyDesk. Erstellen Sie professionelle Rechnungen, versenden Sie sie mit Zahlungslinks an Kunden und verfolgen Sie Zahlungen bis zum Abschluss.

## Übersicht

Die Rechnungsseite zeigt alle Ihre Rechnungen mit Filter- und Suchfunktionen. Die Tabs oben sind Ansichten, keine Status:

- **Aktiv**: Ihre Arbeitsliste mit Rechnungen
- **Archiv**: Rechnungen, die Sie archiviert haben
- **Papierkorb**: Rechnungen, die auf endgültige Löschung warten

Innerhalb einer Ansicht filtern Sie mit dem Status-Dropdown nach:

- **Alle Status**: jede Rechnung in der Ansicht
- **Entwurf**: erstellt, aber noch nicht abgeschlossen
- **Offen**: abgeschlossen und versandbereit, aber noch nicht gesendet
- **Gesendet**: an Kunden zugestellt
- **Bezahlt**: Zahlung eingegangen
- **Überfällig**: Fälligkeitsdatum überschritten, unbezahlt
- **Überprüfung erforderlich**: der Kunde hat die Rechnung im Kundenportal als bezahlt markiert und wartet auf Ihre Bestätigung

## Rechnung erstellen

### Vollständiges Formular

1. Gehen Sie zu **Rechnungen > Neue Rechnung**
2. Wählen oder erstellen Sie einen **Kunden**
3. Fügen Sie **Positionen** mit Beschreibung, Menge, Einzelpreis und USt.-Satz hinzu. Der Standard-USt.-Satz für neue Positionen stammt aus Ihren Steuereinstellungen (Einstellungen > MwSt.). Bei Kunden mit Reverse-Charge wird automatisch 0% verwendet.
4. Legen Sie das **Rechnungsdatum** und das **Fälligkeitsdatum** fest
5. Fügen Sie optionale **Anmerkungen** oder **interne Bemerkungen** hinzu
6. Speichern Sie als **Entwurf**, um später weiterzuarbeiten, oder **schließen Sie die Rechnung ab**, um sie zu sperren und für den Versand vorzubereiten

### Entwurf oder abschließen

Als Entwurf gespeichert bleibt die Rechnung vollständig bearbeitbar. **Abschließen** sperrt die Rechnung, vergibt die endgültige Rechnungsnummer und setzt den Status auf **Offen** (versandbereit). Beim Abschließen laufen auch die Bereitschaftsprüfungen: MyCompanyDesk prüft, ob Ihr Unternehmen eine USt-IdNr. und IBAN hinterlegt hat (siehe [Finalisieren und Versenden](#finalisieren-und-versenden)).

### Aus einer Vorlage

Vorlagen finden Sie in der Seitenleiste: Klicken Sie unter den Schnellaktionen auf **Vorlagen**, um das Vorlagenfenster zu öffnen. Wählen Sie eine Rechnungsvorlage, öffnet sich eine neue Rechnung mit allen Vorlagenfeldern vorausgefüllt; passen Sie sie nach Bedarf an und speichern Sie oder schließen Sie ab.

Eine Vorlage erstellen Sie, indem Sie eine Rechnung öffnen und auf **Als Vorlage speichern** klicken.

### Erfasste Stunden abrechnen

Wenn Sie im Rechnungsformular einen Kunden auswählen, holt MyCompanyDesk die noch nicht abgerechneten Zeiterfassungen dieses Kunden. Fügen Sie sie einzeln oder auf einmal hinzu; jeder Eintrag wird eine Position mit den Stunden, dem Stundensatz und einer automatisch ausgefüllten Beschreibung. Hat die Zeiterfassung selbst keine Beschreibung, wird ein lesbarer Standard verwendet, basierend auf dem Projektnamen oder dem Zeitraum. Sie können auf dem Kundendatensatz auch eine Beschreibungsvorlage pro Kunde festlegen, um zu steuern, wie diese Zeilen formuliert werden.

Nicht abgerechnete Ausgaben des Kunden können Sie auf dieselbe Weise übernehmen.

## Rechnungsdetails

Jede Rechnung hat eine Detailseite, die zeigt:

- Kundeninformationen
- Positionen mit Zwischensummen
- USt.-Aufschlüsselung
- Gesamtbetrag
- Status und Verlauf
- Zahlungslink (falls gesendet)

## Aktionen

### Senden

Senden Sie die Rechnung per E-Mail an Ihren Kunden. Die E-Mail enthält:

- Eine anpassbare Nachricht (basierend auf Ihrer E-Mail-Vorlage)
- Die Rechnungs-PDF als Anhang
- Einen Zahlungslink für die Online-Zahlung

### PDF herunterladen

Laden Sie die Rechnung als professionell formatiertes PDF-Dokument herunter. Das PDF enthält Ihr Firmenlogo, Ihre Markenfarben und alle Rechnungsdetails.

### Als bezahlt markieren

Bestätigen Sie die Zahlung manuell, wenn ein Kunde per Banküberweisung oder einer anderen Offline-Methode zahlt.

### Stornieren

Stornieren Sie eine Rechnung, die nicht mehr bezahlt werden soll. Stornierte Rechnungen bleiben für Prüfungszwecke in Ihren Unterlagen.

### Duplizieren

Erstellen Sie eine Kopie einer bestehenden Rechnung, nützlich für wiederkehrende Abrechnungen an denselben Kunden.

### Erinnerung senden

Senden Sie eine Zahlungserinnerung für überfällige Rechnungen.

## Massenaktionen

Wählen Sie mehrere Rechnungen aus der Liste, um Aktionen in Masse durchzuführen:

- **Senden**: markiert die ausgewählten Rechnungen als gesendet. Dies aktualisiert nur den Status; es werden keine E-Mails versendet.
- **Als bezahlt markieren**: Zahlung für mehrere Rechnungen erfassen
- **Stornieren**: mehrere Rechnungen stornieren
- **Archivieren**: Rechnungen ins Archiv verschieben
- **Löschen**: Rechnungen entfernen

In den Ansichten Archiv und Papierkorb wechseln die Massenaktionen zu Wiederherstellen, In Papierkorb verschieben und Endgültig löschen.

## Zahlungslinks

Wenn Sie eine Rechnung versenden, wird ein eindeutiger Zahlungslink generiert. Ihr Kunde kann:

1. Auf den Link in der E-Mail klicken
2. Die Rechnung im **Kundenportal** ansehen
3. Direkt online bezahlen, über Ihr verbundenes Mollie- oder Stripe-Konto

Die Zahlung wird automatisch erfasst und der Rechnungsstatus wird auf **Bezahlt** aktualisiert.

## Online-Zahlungen

Aktivieren Sie Online-Rechnungszahlungen, indem Sie Ihr eigenes Mollie- oder Stripe-Konto verbinden:

1. Gehen Sie zu **Einstellungen > Zahlung**
2. Verbinden Sie unter **Kunden mit iDEAL bezahlen lassen** den gewünschten Anbieter
3. Mollie unterstützt iDEAL, Bancontact, Kreditkarte und Banküberweisung
4. Stripe Connect unterstützt Karte, Apple Pay, Google Pay und SEPA-Lastschrift

Nach der Verbindung enthält jede von Ihnen versendete Rechnung einen Zahlungslink. Ihre Kunden bezahlen über Ihr eigenes Anbieterkonto. Das Geld geht direkt an Sie. MyCompanyDesk verarbeitet oder verwahrt keine Zahlungen für Sie.

## Zahlungsanbieter-Badge

Wenn eine Rechnung vollständig bezahlt ist, zeigt die Kopfzeile des Zahlungsbereichs ein Badge an, das angibt, über welchen Anbieter die Zahlung eingegangen ist: "Bezahlt über Mollie" oder "Bezahlt über Stripe". Der dominante Anbieter wird angezeigt, wenn mehrere Zahlungsmethoden verwendet wurden. So sehen Sie auf einen Blick, wo das Geld eingegangen ist, ohne durch den Zahlungsverlauf scrollen zu müssen.

## Zahlungen rückerstatten

Online-Zahlungen über Mollie oder Stripe können direkt aus MyCompanyDesk rückerstattet werden. Wenn Sie eine Zahlung rückerstatten:

- Wird der volle Betrag über denselben Zahlungsanbieter an den Kunden zurücküberwiesen
- Wird die Rückerstattung sofort von Mollie oder Stripe verarbeitet
- Wird die Zahlung in Ihrer Verwaltung als rückerstattet markiert

Offline-Zahlungsmethoden (Banküberweisung, Bargeld) nutzen den bestehenden Stornierungsweg: die Zahlung wird ohne anbieterseitige Rückerstattung als storniert markiert.

So erstatten Sie eine Zahlung:

1. Öffnen Sie die Rechnungsdetailseite
2. Suchen Sie die Zahlung in der Zahlungsliste
3. Klicken Sie auf die Schaltfläche **Rückerstatten** (nur für Mollie- und Stripe-Zahlungen verfügbar)
4. Geben Sie optional einen Grund an
5. Bestätigen Sie die Rückerstattung

## Dokumenttypen

Das Rechnungsmodul unterstützt mehrere Dokumenttypen:

- **Rechnung**: Standard-Abrechnungsdokument
- **Gutschrift**: Anpassung für Rückerstattungen oder Korrekturen
- **Erinnerung**: Zahlungserinnerung für überfällige Rechnungen

## Filtern und Suchen

Die Liste bietet:

- **Suche**: nach Rechnungsnummer, Kundenname oder Beschreibung suchen
- **Ansichts-Tabs**: Aktiv, Archiv, Papierkorb
- **Status**: Alle Status, Entwurf, Offen, Gesendet, Bezahlt, Überfällig, Überprüfung erforderlich
- **Datumsbereich**: nach Datum filtern

## Export

Exportieren Sie Ihre Rechnungen als CSV über **Einstellungen > Daten herunterladen** (verfügbar ab dem Starter-Tarif). Auf derselben Seite können Sie auch ein vollständiges Backup all Ihrer Daten erstellen.

## Finalisieren und Versenden

Wenn Sie eine Rechnung abschließen oder versenden, prüft MyCompanyDesk, ob Ihre Firma eine USt-IdNr. (Umsatzsteuer-Identifikationsnummer) und eine IBAN hinterlegt hat. In den Niederlanden ist eine USt-IdNr. gesetzlich auf der Rechnung vorgeschrieben, und Ihre IBAN zeigt Kunden, wohin sie zahlen sollen.

Fehlt eines der Felder, öffnet sich ein Dialog, in dem Sie die Angaben direkt nachtragen können. Nach dem Speichern wird die Rechnung automatisch finalisiert.

Warten Sie noch auf Ihre USt-IdNr. vom Finanzamt, oder sind Sie unter der Kleinunternehmerregelung (KOR) befreit? Sie können den Hinweis überspringen und trotzdem fortfahren. Tragen Sie Ihre USt-IdNr. später nach, sobald sie vorliegt.

## Tipps

- Richten Sie Ihre [E-Mail-Vorlagen](/de/settings/email) ein, bevor Sie Ihre erste Rechnung versenden
- Verwenden Sie [wiederkehrende Rechnungen](/de/features/recurring-invoices) für regelmäßige Abrechnungen
- Prüfen Sie die [Berichte](/de/features/reports)-Seite für Umsatzeinblicke
- Aktivieren Sie [KI-Vorschläge](/de/advanced/ai-features) für intelligente Beschreibungsverbesserungen
