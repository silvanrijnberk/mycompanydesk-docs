---
title: Rechnungen
---

# Rechnungen

Rechnungen stehen im Mittelpunkt von MyCompanyDesk. Erstellen Sie professionelle Rechnungen, versenden Sie sie mit Zahlungslinks an Kunden und verfolgen Sie Zahlungen bis zum Abschluss.

## Übersicht

Die Rechnungsseite zeigt alle Ihre Rechnungen mit Filter- und Suchfunktionen. Verwenden Sie die Status-Tabs für eine schnelle Ansicht:

- **Alle** — Jede Rechnung
- **Entwurf** — Erstellt, aber nicht gesendet
- **Gesendet** — An Kunden zugestellt
- **Überfällig** — Fälligkeitsdatum überschritten, unbezahlt
- **Bezahlt** — Zahlung eingegangen
- **Storniert** — Stornierte Rechnungen

## Rechnung erstellen

### Vollständiges Formular

1. Gehen Sie zu **Rechnungen > Neue Rechnung**
2. Wählen oder erstellen Sie einen **Kunden**
3. Fügen Sie **Positionen** mit Beschreibung, Menge, Einzelpreis und USt.-Satz hinzu
4. Legen Sie das **Rechnungsdatum** und das **Fälligkeitsdatum** fest
5. Fügen Sie optionale **Anmerkungen** oder **interne Bemerkungen** hinzu
6. Klicken Sie auf **Speichern**, um einen Entwurf zu erstellen

### Schnellerfassung

Für eine schnellere Erstellung:

1. Klicken Sie auf die Schnellerfassungs-Schaltfläche auf der Rechnungsliste
2. Wählen Sie einen Kunden
3. Fügen Sie Positionen hinzu oder wählen Sie eine Vorlage
4. Speichern (und optional sofort versenden)

### Aus einer Vorlage

1. Klicken Sie beim Erstellen einer neuen Rechnung auf **Vorlage verwenden**
2. Wählen Sie eine gespeicherte Vorlage
3. Alle Positionen sind vorausgefüllt — passen Sie sie nach Bedarf an
4. Speichern und versenden

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

Erstellen Sie eine Kopie einer bestehenden Rechnung — nützlich für wiederkehrende Abrechnungen an denselben Kunden.

### Erinnerung senden

Senden Sie eine Zahlungserinnerung für überfällige Rechnungen.

## Massenaktionen

Wählen Sie mehrere Rechnungen aus der Liste, um Aktionen in großem Umfang durchzuführen:

- **Senden** — Mehrere Entwurfsrechnungen gleichzeitig versenden
- **Als bezahlt markieren** — Zahlung für mehrere Rechnungen erfassen
- **Archivieren** — Rechnungen ins Archiv verschieben
- **Löschen** — Rechnungen dauerhaft entfernen

## Zahlungslinks

Wenn Sie eine Rechnung versenden, wird ein eindeutiger Zahlungslink generiert. Ihr Kunde kann:

1. Auf den Link in der E-Mail klicken
2. Die Rechnung im **Kundenportal** ansehen
3. Direkt online bezahlen, ueber Ihr verbundenes Mollie- oder Stripe-Konto

Die Zahlung wird automatisch erfasst und der Rechnungsstatus wird auf **Bezahlt** aktualisiert.

## Online-Zahlungen

Aktivieren Sie Online-Rechnungszahlungen, indem Sie Ihr eigenes Mollie- oder Stripe-Konto verbinden:

1. Gehen Sie zu **Geld → Zahlungen** in der Seitenleiste Ihres Arbeitsbereichs
2. Verbinden Sie unter **Online betalingen** den gewuenschten Anbieter
3. Mollie unterstuetzt iDEAL, Bancontact, Kreditkarte und Bankueberweisung
4. Stripe Connect unterstuetzt Karte, Apple Pay, Google Pay und SEPA-Lastschrift

Nach der Verbindung enthaelt jede von Ihnen versendete Rechnung einen Zahlungslink. Ihre Kunden bezahlen ueber Ihr eigenes Anbieterkonto. Das Geld geht direkt an Sie. MyCompanyDesk verarbeitet oder verwahrt keine Zahlungen fuer Sie.

## Zahlungsanbieter-Badge

Wenn eine Rechnung vollstaendig bezahlt ist, zeigt die Kopfzeile des Zahlungsbereichs ein Badge an, das angibt, ueber welchen Anbieter die Zahlung eingegangen ist: "Bezahlt ueber Mollie" oder "Bezahlt ueber Stripe". Der dominante Anbieter wird angezeigt, wenn mehrere Zahlungsmethoden verwendet wurden. So sehen Sie auf einen Blick, wo das Geld eingegangen ist, ohne durch den Zahlungsverlauf scrollen zu muessen.

## Zahlungen rückerstatten

Online-Zahlungen über Mollie oder Stripe können direkt aus MyCompanyDesk rückerstattet werden. Wenn Sie eine Zahlung rückerstatten:

- Wird der volle Betrag über denselben Zahlungsanbieter an den Kunden zurücküberwiesen
- Wird die Rückerstattung sofort von Mollie oder Stripe verarbeitet
- Wird die Zahlung in Ihrer Verwaltung als rückerstattet markiert

Offline-Zahlungsmethoden (Banküberweisung, Bargeld) nutzen den bestehenden Stornierungsweg — die Zahlung wird ohne anbieterseitige Rückerstattung als storniert markiert.

So erstatten Sie eine Zahlung:

1. Öffnen Sie die Rechnungsdetailseite
2. Suchen Sie die Zahlung in der Zahlungsliste
3. Klicken Sie auf die Schaltfläche **Rückerstatten** (nur für Mollie- und Stripe-Zahlungen verfügbar)
4. Geben Sie optional einen Grund an
5. Bestätigen Sie die Rückerstattung

## Dokumenttypen

Das Rechnungsmodul unterstützt mehrere Dokumenttypen:

- **Rechnung** — Standard-Abrechnungsdokument
- **Gutschrift** — Anpassung für Rückerstattungen oder Korrekturen
- **Erinnerung** — Zahlungserinnerung für überfällige Rechnungen

## Filtern und Suchen

Verwenden Sie die Filterleiste, um Ihre Rechnungen einzugrenzen:

- **Status** — Entwurf, Gesendet, Überfällig, Bezahlt, Storniert
- **Kunde** — Nach bestimmtem Kunden filtern
- **Projekt** — Nach verknüpftem Projekt filtern
- **Datumsbereich** — Nach Rechnungs- oder Fälligkeitsdatum filtern
- **Suche** — Nach Rechnungsnummer, Kundenname oder Beschreibung suchen

## Export

Exportieren Sie Ihre Rechnungen als CSV zur Verwendung in Excel, Google Sheets oder Ihrer Buchhaltungssoftware.

::: info
CSV-Export erfordert den **Pro**-Tarif oder höher.
:::

## Finalisieren und Versenden

Wenn Sie eine Rechnung finalisieren oder versenden, prüft MyCompanyDesk, ob Ihre Firma eine USt-IdNr. (Umsatzsteuer-Identifikationsnummer) und eine IBAN hinterlegt hat. In den Niederlanden ist eine USt-IdNr. gesetzlich auf der Rechnung vorgeschrieben, und Ihre IBAN zeigt Kunden, wohin sie zahlen sollen.

Fehlt eines der Felder, oeffnet sich ein Dialog, in dem Sie die Angaben direkt nachtragen koennen. Nach dem Speichern wird die Rechnung automatisch finalisiert.

Warten Sie noch auf Ihre USt-IdNr. vom Finanzamt, oder sind Sie unter der Kleinunternehmerregelung (KOR) befreit? Sie koennen den Hinweis ueberspringen und trotzdem fortfahren. Tragen Sie Ihre USt-IdNr. spaeter nach, sobald sie vorliegt.

## Tipps

- Richten Sie Ihre [E-Mail-Vorlagen](/de/settings/email) ein, bevor Sie Ihre erste Rechnung versenden
- Verwenden Sie [wiederkehrende Rechnungen](/de/features/recurring-invoices) für regelmäßige Abrechnungen
- Prüfen Sie die [Berichte](/de/features/reports)-Seite für Umsatzeinblicke
- Aktivieren Sie [KI-Vorschläge](/de/advanced/ai-features) für intelligente Beschreibungsverbesserungen
