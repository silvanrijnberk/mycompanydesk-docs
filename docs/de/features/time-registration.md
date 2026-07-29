---
title: Zeiterfassung
last_verified: 2026-07-27
---

# Zeiterfassung

Erfassen Sie Stunden, Reisen und Projektzeiten in MyCompanyDesk. Einträge fließen direkt in Projektberichte, Rechnungsstellung und Spesenabrechnungen.

## Zeiten erfassen

### Timer

1. Öffnen Sie die Zeiterfassungsseite.
2. Drücken Sie **Start** am Timer.
3. Wählen Sie Kunde, Projekt und Aufgabe.
4. Stoppen Sie den Timer, wenn Sie fertig sind.

Der aufgezeichnete Block erscheint in Ihrer Liste und kann bearbeitet, in eine Rechnung überführt oder in eine Spesenabrechnung umgewandelt werden.

### Manuelle Einträge

Wenn Sie möchten, fügen Sie einen Block manuell hinzu:

1. Klicken Sie auf **Nieuwe tijdregel** (neuer Zeiteintrag).
2. Geben Sie Datum, Dauer, Kunde, Projekt, Aufgabe und Beschreibung ein.
3. Speichern.

Manuelle Einträge verhalten sich wie Timer-Einträge und können später in Rechnung gestellt werden.

### Reisen

Wenn Sie einen Zeiteintrag für eine Dienstreise erfassen, fragt das Reiseformular nach dem Verkehrsmittel, Start, Ziel und Entfernung.

Bei **Auto**-Reisen erscheint die Auswahl **Fahrzeug**, sobald Ihr Arbeitsbereich Fahrzeug-Objekte hat. Sie können wählen:

- **Privat-PKW** (oder die Auswahl leer lassen) - die Reise folgt der normalen Fahrzeug-Eigentumseinstellung Ihres Arbeitsbereichs und erhält bei Umwandlung in eine Spesenabrechnung den Standard-Kilometersatz.
- Ein Firmenfahrzeug - die Reise wird mit diesem Fahrzeug verknüpft. Ein Hinweis erklärt, dass die Reise keine Kilometerpauschale erhält, weil die tatsächlichen Kosten (Kraftstoff, Wartung und Abschreibung) bereits als Ausgaben auf dem Objekt erfasst werden.

Nur Auto-Reisen zeigen die Fahrzeugauswahl; öffentliche Verkehrsmittel, Fahrrad und andere Verkehrsmittel nicht.

### Standardbeschreibung

Legen Sie einen Standardtext in Ihren persönlichen Zeiteinstellungen fest. Jeder neue Eintrag beginnt dann mit diesem Text, sodass Sie weniger tippen und Beschreibungen einheitlich halten.

### Nur-Stunden-Modus

Einige Rollen müssen nur Gesamtstunden erfassen, keine Kunden oder Projekte. Wenn Ihr Arbeitsbereich den Nur-Stunden-Modus verwendet, blendet das Formular die Felder Kunde, Projekt und Aufgabe aus. Bitten Sie einen Administrator, dies in den Zeiterfassungseinstellungen des Arbeitsbereichs zu aktivieren.

## Stunden in Rechnung stellen

Zeiteinträge können in Rechnungspositionen umgewandelt werden:

1. Wählen Sie einen oder mehrere Einträge aus der Liste.
2. Wählen Sie **Factureren** (in Rechnung stellen).
3. Wählen Sie eine Rechnung oder erstellen Sie einen neuen Entwurf.
4. MyCompanyDesk fügt pro Eintrag eine Position mit der korrekten Menge und dem Stundensatz hinzu.

Nur abrechnungsfähige Einträge können in Rechnung gestellt werden. Einträge, die als nicht abrechnungsfähig markiert sind, werden vom Rechnungsfluss ausgeschlossen.

## Spesenabrechnungen aus Zeiteinträgen

Reiseeinträge können ebenfalls in Ausgaben umgewandelt werden:

1. Wählen Sie einen Reiseeintrag.
2. Wählen Sie **Kostennota** (Spesenabrechnung).
3. MyCompanyDesk erstellt eine Ausgabe auf Basis der Entfernung und des im Arbeitsbereich hinterlegten Kilometersatzes.

Der Kilometersatz, das Fahrzeugeigentum und eine eventuelle Auswahl eines Firmenfahrzeugs werden aus dem Zeiteintrag und den Arbeitsbereichs-Standards übernommen, sodass die Abrechnung zu dem passt, was tatsächlich gefahren wurde.

## Wo finde ich die Zeiterfassung

- **Menü** > **Zeiterfassung** - Hauptliste der Stunden
- Projekt-Detailseite - Stunden pro Projekt
- Kunden-Detailseite - Stunden pro Kunde
- Rechnungsentwurf - Positionen direkt aus nicht abgerechneten Einträgen hinzufügen

## Verwandt

- [Projekte](/de/features/projects)
- [Rechnungen](/de/features/invoices)
- [Ausgaben](/de/features/expenses)
- [Objekte & Vermögenswerte](/de/features/objects)
