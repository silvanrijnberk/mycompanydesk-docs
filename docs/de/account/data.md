---
title: "Datenimport & -export"
last_verified: 2026-07-02
---

# Datenimport & -export

Importieren Sie bestehende Daten in MyCompanyDesk und exportieren Sie Ihre Unterlagen als Sicherung oder zur Verwendung in anderen Tools.

## Import

### CSV-Import

Importieren Sie Daten aus CSV-Dateien für:

- **Kunden** mit Name, E-Mail, Telefon, Adresse, USt-Nummer
- **Rechnungen** mit Rechnungsdetails
- **Ausgaben** mit Kategorien und Beträgen

Andere Datentypen (etwa Projekte oder Objekte) lassen sich nicht aus CSV importieren; diese legen Sie in der App selbst an.

### So importieren Sie

Der Import-Assistent hat eine eigene Seite in der App: Öffnen Sie `/profile/import` direkt, praktisch, wenn Sie kurz nach der Registrierung von einem anderen Tool umsteigen.

1. Wählen Sie den **Datentyp**, den Sie importieren möchten (Kunden, Rechnungen oder Ausgaben)
2. Laden Sie Ihre **CSV-Datei** hoch
3. **Ordnen Sie die Spalten zu**, indem Sie Ihre CSV-Spaltenüberschriften den MyCompanyDesk-Feldern zuweisen
4. **Importieren** Sie, um die Datensätze anzulegen; das Ergebnis zeigt, wie viele Zeilen importiert wurden und wie viele fehlgeschlagen sind

### Import-Tipps

- Verwenden Sie UTF-8-Kodierung für Ihre CSV-Dateien
- Fügen Sie eine Kopfzeile mit Spaltennamen ein
- Halten Sie Datumsformate konsistent (JJJJ-MM-TT empfohlen)
- Verwenden Sie in Betragsfeldern einen Punkt (.) als Dezimaltrennzeichen
- Leere Felder werden übersprungen (bestehende Standardwerte werden verwendet)

### Spaltenzuordnung

Der Import-Assistent zeigt Ihre CSV-Spalten und lässt Sie jede dem passenden MyCompanyDesk-Feld zuordnen. Häufige Zuordnungen:

| CSV-Spalte | Wird zu |
|---|---|
| Firmenname / Name | Kundenname |
| E-Mail | Kunden-E-Mail |
| Straße / Adresse | Straßenadresse |
| PLZ | Postleitzahl |
| Ort | Ort |
| VAT / USt | USt-Nummer |
| Telefon | Telefonnummer |

## Export

Exporte finden Sie an einem Ort: Öffnen Sie **Einstellungen** und wählen Sie **Daten herunterladen**.

### CSV-Export

Laden Sie Ihre Daten pro Typ herunter:

- **Rechnungen** als CSV, mit Beträgen, Daten und Status
- **Kunden** als CSV, Ihre vollständige Kundenliste
- **Ausgaben** als CSV, mit Kategorien und Beträgen

::: info
CSV- und Komplettsicherungs-Exporte sind ab dem **Starter**-Abonnement verfügbar. Im kostenlosen Abonnement zeigt die Seite einen Upgrade-Hinweis.
:::

### Komplette Sicherung

Dieselbe Seite bietet eine **komplette Sicherung**: alle Ihre Daten in einer JSON-Datei. Nutzen Sie sie als regelmäßige Sicherung oder als vollständige Momentaufnahme Ihrer Unterlagen, zum Beispiel für eine DSGVO-Auskunft.

Exporte enthalten nur die Daten, auf die Sie Zugriff haben. PDF-Versionen von Rechnungen laden Sie separat herunter, auf der Seite der jeweiligen Rechnung.

## Tipps

- Exportieren Sie Ihre Daten regelmäßig als Sicherung
- Statt Dateien an Ihren Buchhalter zu mailen, geben Sie ihm direkten Zugang über **Einstellungen > Zugang und Buchhalter**; so sieht er immer Ihre aktuellsten Zahlen
- Wenn Sie von einem anderen Tool umsteigen, nutzen Sie den Import-Assistenten, um Ihre Kundenliste zu übernehmen
