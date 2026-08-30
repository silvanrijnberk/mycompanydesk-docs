---
title: Belegscanner
description: "Fotografieren Sie einen Beleg oder laden Sie ein PDF hoch, KI-gestützte OCR füllt die Ausgabe aus. Pro Monat: 3 Scans mit Gratis, 30 Starter, 200 Pro."
---

# Belegscanner

Extrahieren Sie automatisch Ausgabendaten aus Belegbildern und PDF-Rechnungen mit KI-gestützter OCR.

::: info
Der Belegscanner ist in jedem Tarif verfügbar, mit einem monatlichen Limit für die Anzahl der Scans: 3 mit Gratis, 30 mit Starter und 200 mit Pro. Das Limit wird am Ersten jedes Kalendermonats zurückgesetzt.
:::

## Übersicht

Anstatt jede Ausgabe manuell einzugeben, fotografieren Sie einen Beleg oder laden Sie ein PDF hoch und lassen Sie MyCompanyDesk die Details automatisch extrahieren.

## Unterstützte Formate

- **Bilder** — JPEG, PNG, WebP
- **PDF** — PDF-Rechnungen und Belege
<!-- TODO(source-missing): die effektive PDF-Grenze für den Inline-Scan-Pfad liegt im Scannercode und in den Locale-Strings jetzt bei 15 MB, während diese Seite noch 50 MB angibt. Vor einer Aktualisierung in sources/ prüfen. -->
- **Maximale Dateigröße** — 50MB

Der Scanner verarbeitet nur Belege mit positiven Beträgen. Gutschriften, Retourenbelege und andere Dokumente mit negativem Gesamtbetrag werden abgelehnt; fügen Sie diese manuell als Ausgabe mit negativem Betrag hinzu.

::: tip Hinweis zur Dateigröße
Der Scanner akzeptiert Dateien bis 50 MB, aber der an die erstellte Ausgabe angehängte Beleg ist auf 10 MB begrenzt. Wenn Sie eine größere Datei scannen, wird die Ausgabe dennoch erstellt, der Beleg aber nicht angehängt; eine Warnung weist Sie darauf hin. Laden Sie anschließend eine kleinere Datei auf der Ausgabe hoch, oder verkleinern Sie das Original vor dem Scan.
:::

## So scannen Sie einen Beleg

1. Gehen Sie zu **Ausgaben > Beleg scannen**
2. Laden Sie Ihre Belegdatei hoch (Drag-and-Drop oder klicken zum Durchsuchen). Der Scanner verarbeitet eine Datei pro Durchgang.
3. Öffnen Sie bei Bedarf die erweiterten Optionen und wählen Sie den Extraktionsmodus:
   - **Einzeln**: eine Ausgabe aus dem Beleg extrahieren
   - **Mehrfach**: mehrere Positionen aus demselben Beleg extrahieren (die Voreinstellung)
4. Warten Sie auf die Verarbeitung (wenige Sekunden)
5. Überprüfen Sie die extrahierten Daten:
   - Datum
   - Betrag
   - Lieferantenname
   - Beschreibung / Positionen
6. Bearbeiten Sie Felder, die korrigiert werden müssen
7. Klicken Sie auf **Bestätigen**, um die Ausgabe(n) zu erstellen

## Extraktionsmodi

### Einzelmodus

Am besten für einfache Belege mit einer Gesamtsumme:

- Restaurantrechnungen
- Tankstellenbelege
- Einzelartikelkäufe

Extrahiert: Datum, Gesamtbetrag, Lieferant, Beschreibung.

### Mehrfachmodus

Am besten für aufgeschlüsselte Belege oder Rechnungen:

- Bürobedarfsbestellungen mit mehreren Artikeln
- Lieferantenrechnungen mit Positionen
- Einkaufslisten

Extrahiert: Einzelne Positionen mit Beschreibungen und Beträgen.

## Erweiterte Einstellungen

Der Scanner hat ein Panel mit erweiterten Optionen:

- **Anweisungen**: Fügen Sie Freitext-Kontext hinzu, um der KI zu helfen (z. B. „Dies ist ein niederländischer Beleg von Albert Heijn“)
- **Extraktionsmodus**: eine einzelne Ausgabe oder mehrere Positionen (Voreinstellung: Mehrfach)
- **Kategorie**: Beschränken Sie die Extraktion auf eine Ausgabenkategorie, oder lassen Sie alle Kategorien zu
- **Filter-Tags**: Stichwort-Tags; nur Positionen, die zu den Tags passen, werden extrahiert
- **Preisspanne**: ein Mindest- und Höchstbetrag; Positionen außerhalb der Spanne werden übersprungen
- **Beleg anhängen**: ob die Originaldatei an die erstellte Ausgabe angehängt wird (standardmäßig aktiviert)

## Scan-Limits

Belege und Rechnungen mit zu vielen Positionen für einen Durchgang werden mit einer "zu viele Zeilen"-Meldung abgelehnt. Wenn diese Meldung erscheint, teilen Sie das Dokument in kleinere Teile (zum Beispiel eine Seite oder eine kleinere Gruppe von Positionen pro Durchgang) oder erfassen Sie die Ausgaben manuell.

## Tipps für beste Ergebnisse

- **Gute Beleuchtung** — Fotografieren Sie bei guten Lichtverhältnissen
- **Flache Oberfläche** — Legen Sie den Beleg auf eine flache Oberfläche
- **Vollständiger Beleg** — Stellen Sie sicher, dass der gesamte Beleg im Bild ist
- **Klarer Text** — Stellen Sie sicher, dass der Text lesbar und nicht verschwommen ist
- **Ein Beleg pro Scan** — Scannen Sie Belege einzeln für beste Genauigkeit

## Nach dem Scannen

Nach der Bestätigung wird die Ausgabe erstellt mit:

- Allen extrahierten Daten vorausgefüllt
- Dem Originalbeleg als Datei angehängt
- Kategorievorschlägen (wenn KI-Vorschläge aktiviert sind)

Wenn der Scanner ein Lieferantenland ermittelt (zum Beispiel ein ausländischer Lieferant oder eine gematchte niederländische KVK-Nummer), zeigt die Prüfkarte zusätzlich einen Auswahl für die USt-Behandlung. Der Scanner schlägt einen Standardwert auf Basis von Lieferant und Betrag vor, den Sie jedoch vor der Bestätigung ändern können. Das ist wichtig für innergemeinschaftliche Reverse-Charge-Einkäufe und für Importausgaben aus einem Nicht-EU-Land.

Sie können die Ausgabe anschließend wie jede manuell erstellte Ausgabe bearbeiten.

## Berechtigungen

Der Belegscanner unterliegt derselben Seitenberechtigung wie die Seite Ausgaben. Ein Teammitglied braucht **Lesen**-Zugriff auf Ausgaben, um den Scanner zu öffnen, und **Erstellen**-Zugriff, um einen gescannten Beleg als neue Ausgabe zu bestätigen. Mitglieder ohne Erstellen-Berechtigung sehen den Scanner weiterhin, können die Bestätigung aber nicht abschließen. Das gilt sowohl für Uploads über die Seite Ausgaben als auch für geteilte Fotoflows.

## Mehrere Belege scannen

Der Uploader verarbeitet eine Datei pro Durchgang. Um mehrere Belege zu verarbeiten, scannen Sie sie nacheinander; jeder Scan zählt einmal für Ihr monatliches Limit. Für einen Beleg oder eine Rechnung mit mehreren Positionen verwenden Sie den Extraktionsmodus **Mehrfach**, um mit einem Scan mehrere Ausgaben zu erstellen.

## Tipps

- Scannen Sie Belege sofort nach Erhalt — lassen Sie sie sich nicht ansammeln
- Überprüfen Sie den extrahierten Betrag sorgfältig, besonders bei Belegen mit mehreren Währungen
- Aktivieren Sie KI-Vorschläge für automatische Kategorisierung nach dem Scannen
- Bewahren Sie die Original-Belegdatei als Anhang für Steuerprüfungszwecke auf
