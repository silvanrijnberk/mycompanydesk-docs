---
title: Objekte & Vermögenswerte
last_verified: 2026-07-27
---

# Objekte & Vermögenswerte

MyCompanyDesk verwaltet alle Geschäftsvermögenswerte an einem Ort: Immobilien, Fahrzeuge, Maschinen, Inventar und sonstige Güter. Pro Objekt verfolgen Sie Eigentum, Wert, Mieteinnahmen, verknüpfte Verträge und zugehörige Rechnungen.

## Ein Objekt anlegen

1. Gehen Sie zu **Einstellungen** > **Objekte**.
2. Klicken Sie auf **Neues Objekt** und wählen Sie einen Typ:
   - **Immobilie** - Gebäude und Grundstücke
   - **Fahrzeug** - Pkw, Lieferwagen, Lkw und ähnliches
   - **Maschine / Anlage** - betriebliche Anlagen
   - **Inventar** - Büro- oder Ladenausstattung
   - **Sonstiges** - jedes andere Gut
3. Füllen Sie die Pflichtfelder aus: mindestens ein Name, optional Beschreibung, Kaufdatum/Wert und Status.
4. Speichern.

Das Objekt steht nun zur Verknüpfung mit Verträgen, Rechnungen, Ausgaben und Zeiterfassungseinträgen zur Verfügung.

## Objektdetailseite

Die Detailseite zeigt alle Informationen zu einem Objekt auf einen Blick:

- Objektinformationen und Typ
- Aktueller Status
- **Gesamtumsatz**: tatsächlich bezahlter Rechnungsumsatz für dieses Objekt, einschließlich Miete, Nebenkosten, einmaliger Kosten und Verkaufsrechnungen, die ihm zugeordnet sind
- **Aktive Verträge**: Anzahl der aktuell aktiven Verträge, die mit diesem Objekt verknüpft sind (nur angezeigt, wenn das Objekt Verträge hat oder eine Immobilie ist)
- **WOZ-Historie** (für Immobilien) - jährliche WOZ-Werte für die Berechnung von Box 3
- **Objektübersicht** (für Immobilien mit erfasstem WOZ-Wert) - aktivierter Wert, kumulierte Abschreibung, aktueller Buchwert und der gesetzliche Mindestwert (Bodemwaarde) des Gebäudes
- Verknüpfte Verträge und Mietverlauf (nur angezeigt, wenn relevant)
- **Rechnungen**: jede Rechnung, die zum Gesamtumsatz zählt, mit Status und Betrag ohne MwSt. (nur angezeigt, wenn das Objekt Rechnungen hat oder eine Immobilie ist)
- **Fahrtenbuch** (für Fahrzeuge mit Fahrten) - gefahrene Fahrten, Gesamtkilometer, pro Jahr und die jüngsten Fahrten

Die Seite blendet Karten aus, die nicht zum Objekttyp passen. Standardmiete, WOZ-Historie und eine leere Adresse werden nur bei Immobilien oder wenn das Objekt diese Daten tatsächlich enthält angezeigt. Vertrags- und Rechnungskarten bleiben für Fahrzeuge, Maschinen und andere Nicht-Immobilien verborgen, bis Daten vorhanden sind, damit die Seite auf das betrachtete Objekt fokussiert bleibt.

### Zugeordnete Rechnungen

Jede Rechnungszeile, die dem Objekt zugeordnet ist, wird hier aufgelistet. So sehen Sie auf einen Blick, welchen tatsächlich bezahlten Umsatz das Objekt erzeugt hat.

Die Summe zählt nur bezahlte Rechnungen, keine Entwürfe oder offenen Rechnungen. Dadurch stimmt der Umsatz mit dem überein, was tatsächlich eingegangen ist.

### Vertragssammlung

Oben auf der Seite sehen Sie eine Zusammenfassung der aktiven Verträge für dieses Objekt:

- Anzahl aktiver Verträge
- Aktuelle Monatsmiete
- Nächster Indexierungstermin
- Enddatum des am schnellsten auslaufenden Vertrags

Dies bietet einen schnellen finanziellen Überblick, ohne jeden Vertrag einzeln öffnen zu müssen.

### WOZ-Historie und Bodemwaarde

Für **Immobilien** können Sie den jährlichen WOZ-Wert erfassen. Dieser Wert wird für die Berechnung von Box 3 (Vermögenssteuer) in Ihrer Buchhaltung verwendet.

Die Seite zeigt auch den **Bodemwaarde** (gesetzlicher Mindestwert). Für Gebäude darf der Steuerwert nicht unter diesen Boden fallen. MyCompanyDesk verwendet den WOZ-Wert, den Bodemwaerde und das Kaufdatum, um den richtigen Wert für die Steuererklärung zu ermitteln.

Dies gilt nur für Gebäude. Fahrzeuge, Maschinen, Inventar und andere Güter haben keinen Bodemwaerde.

### Fahrtenbuch (Fahrzeuge)

Fahrzeuge, die für Geschäftsfahrten genutzt werden, erhalten sobald sie mindestens eine verknüpfte Fahrt haben eine Karte **Fahrtenbuch**. Das ist die Fahrtenaufzeichnung, die das Finanzamt für ein Firmenfahrzeug erwartet: sie listet die mit diesem Fahrzeug gefahrenen Fahrten auf, nicht die Betriebskosten des Fahrzeugs.

Die Karte zeigt:

- **Gesamtkilometer** mit diesem Fahrzeug
- **Dieses Jahr** gefahrene Kilometer, wenn das Fahrzeug im laufenden Kalenderjahr genutzt wurde
- **Anzahl Fahrten**
- **Letzte Fahrt**
- Eine **pro Jahr**-Aufschlüsselung von Kilometern und Fahrten
- Die jüngsten Fahrten mit Start, Ziel, Datum und Kunde

Zuerst werden nur die jüngsten Fahrten angezeigt. Gibt es mehr, erscheint ein Button **ältere Fahrten anzeigen**, damit die Liste nie stillschweigend abgeschnitten wird.

Eine Fahrt wird mit dem Fahrzeug verknüpft, sobald Sie bei der Erfassung der Reise dieses Fahrzeug als Firmenfahrzeug auswählen. Diese Fahrt erhält keine separate Kilometerpauschale, denn die tatsächlichen Kosten (Kraftstoff, Wartung und Abschreibung) werden über Ausgaben auf dem Objekt erfasst.

### Objektübersicht und Bodemwaarde

Die Objektübersicht zeigt das finanzielle Bild einer Immobilie im Hauptbuch:

- Aktivierter Wert
- Kumulierte Abschreibung
- Aktueller Buchwert
- Gesetzlicher Mindestwert (Bodemwaarde)

Diese Zahlen werden für die jährliche Bilanz und Steuererklärung benötigt.

Dieser Abschnitt erscheint nur für **Immobilien** mit erfasstem WOZ-Wert. Fahrzeuge, Maschinen, Inventar und andere Güter haben keinen Bodemwaerde und zeigen diese Übersicht daher nicht.

### Veräußerung

Wenn ein Gut verkauft oder verschrottet wird, können Sie die Veräußerung erfassen:

1. Öffnen Sie das Objekt.
2. Wählen Sie unter dem Veräußerungsabschnitt **Verwijderen / Verkocht**.
3. Geben Sie Veräußerungsdatum und Verkaufserlös ein.
4. Speichern.

MyCompanyDesk berechnet dann den Buchgewinn oder -verlust und verarbeitet diesen in der Finanzverwaltung.

### Vertragsunterzeichnungsstatus

Für jeden aktiven Vertrag sehen Sie, ob der digitale Unterzeichnungsprozess abgeschlossen ist. Die Objektseite listet:

- Vertragsparteien
- Start- und Enddaten
- Unterzeichnungsstatus
- Monatliche Miete

Klicken Sie auf einen Vertrag, um das vollständige Detail zu öffnen.

### Objekte verknüpfen

Objekte können verknüpft werden mit:

- **Verträgen** - Miet- und Leasingverträge
- **Rechnungen** - Miete, Nebenkosten und Verkauf
- **Ausgaben** - Wartung und Betriebskosten
- **Zeiterfassungseinträgen** - Reisen und Arbeit an oder mit dem Objekt

Öffnen Sie das betreffende Dokument und wählen Sie das Objekt im Objektauswahl. Die Verknüpfung wird an beiden Stellen gespeichert, sodass Sie vom Objekt zum Dokument navigieren und zurückkehren können.

## Objekttypen und deren Felder

| Typ | Typische Felder |
|-----|-----------------|
| Immobilie | Adresse, WOZ-Wert, Bodemwaarde, Mietangaben, Kaufwert |
| Fahrzeug | Kennzeichen, Kaufwert, Standardmiete, Status, Fahrtenbuch |
| Maschine / Anlage | Beschreibung, Kaufwert, Status, Abschreibung |
| Inventar | Beschreibung, Kaufwert, Status |
| Sonstiges | Beschreibung, Kaufwert, Status |

Jeder Typ hat nur die Felder, die für diese Art von Vermögenswert relevant sind. So gibt es für ein Fahrzeug keinen WOZ-Wert und für eine Maschine kein Kennzeichen.

## Wo finde ich Objekte

- **Einstellungen** > **Objekte** - Liste aller Objekte und Vermögenswerte
- **Menü** > **Objekte** - schneller Zugriff, wenn dieser Menüpunkt für Ihre Rolle aktiviert ist
- Verknüpft von Verträgen, Rechnungen, Ausgaben und Zeiterfassungseinträgen

## Verwandt

- [Verträge](/de/features/contracts)
- [Rechnungen](/de/features/invoices)
- [Ausgaben](/de/features/expenses)
- [Zeiterfassung](/de/features/time-registration)
