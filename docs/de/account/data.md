---
title: "Datenimport & -export"
---

# Datenimport & -export

Importieren Sie bestehende Daten in MyCompanyDesk und exportieren Sie Ihre Aufzeichnungen zur Sicherung oder Verwendung in anderen Tools.

## Import

### CSV-Import

Importieren Sie Daten aus CSV-Dateien für:

- **Kunden** — Name, E-Mail, Telefon, Adresse, USt.-Nummer
- **Rechnungen** — Rechnungsdetails mit Positionen
- **Ausgaben** — Ausgabendatensätze mit Kategorien
- **Projekte** — Projektnamen und Details
- **Objekte** — Vermögenswertdatensätze

### So importieren Sie

1. Gehen Sie zu **Profil > Import**
2. Wählen Sie den **Datentyp**, den Sie importieren möchten
3. Laden Sie Ihre **CSV-Datei** hoch
4. **Spalten zuordnen** — Ordnen Sie Ihre CSV-Spaltenüberschriften den MyCompanyDesk-Feldern zu
5. **Vorschau** — Überprüfen Sie die Daten vor dem Import
6. **Bestätigen** — Klicken Sie auf Import, um die Datensätze zu erstellen

### Import-Tipps

- Verwenden Sie UTF-8-Kodierung für Ihre CSV-Dateien
- Fügen Sie eine Kopfzeile mit Spaltennamen hinzu
- Datumsformate sollten einheitlich sein (JJJJ-MM-TT empfohlen)
- Betragsfelder sollten den Punkt (.) als Dezimaltrennzeichen verwenden
- Leere Felder werden übersprungen (vorhandene Standardwerte werden verwendet)

### Spaltenzuordnung

Der Import-Assistent zeigt Ihre CSV-Spalten und lässt Sie jede dem entsprechenden MyCompanyDesk-Feld zuordnen. Häufige Zuordnungen:

| CSV-Spalte | Zuordnung zu |
|---|---|
| Company Name / Name | Kundenname |
| Email | Kunden-E-Mail |
| Street / Address | Straßenadresse |
| ZIP / Postal Code | Postleitzahl |
| City | Stadt |
| VAT / BTW | USt.-Nummer |
| Phone | Telefonnummer |

## Export

### CSV-Export

Exportieren Sie Ihre Daten als CSV von den jeweiligen Listenseiten:

- **Rechnungen** — Alle Rechnungen mit Beträgen, Daten, Status
- **Ausgaben** — Alle Ausgaben mit Kategorien und Beträgen
- **Kunden** — Ihre Kundendatenbank

Klicken Sie auf die **Export**-Schaltfläche auf der Listenseite zum Herunterladen.

::: info
CSV-Export erfordert den **Pro**-Tarif oder höher.
:::

### DSGVO-Datenexport

Exportieren Sie alle Ihre persönlichen Daten im JSON-Format:

1. Gehen Sie zu **Profil > Daten**
2. Klicken Sie auf **Meine Daten exportieren**
3. Laden Sie die JSON-Datei mit all Ihren Kontodaten herunter

Dieser DSGVO-Export umfasst:

- Ihre Profilinformationen
- Alle Rechnungen, Ausgaben, Angebote
- Kundendatensätze
- Projekt- und Zeitdaten
- Einstellungen und Präferenzen

## Tipps

- Exportieren Sie Ihre Daten regelmäßig als Sicherungskopie
- Verwenden Sie den CSV-Export, um Daten mit Ihrem Steuerberater zu teilen
- Beim Umstieg von einem anderen Tool verwenden Sie den Import-Assistenten, um Ihre Kundenliste zu migrieren
- Der DSGVO-Export bietet einen vollständigen Schnappschuss Ihrer Daten
