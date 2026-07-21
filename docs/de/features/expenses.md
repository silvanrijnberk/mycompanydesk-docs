---
title: Ausgaben
---

# Ausgaben

Verfolgen Sie alle Ihre Geschäftsausgaben, scannen Sie Belege mit KI und kategorisieren Sie Kosten für eine genaue Buchführung und USt.-Meldung.

## Übersicht

Die Ausgabenseite listet alle Ihre erfassten Ausgaben auf. Filtern Sie nach:

- **Kategorie** — Büro, Reise, Ausstattung usw.
- **Projekt** — Ausgaben, die mit bestimmten Projekten verknüpft sind
- **Datumsbereich** — Nach Ausgabendatum filtern
- **Status** — Aktiv oder archiviert

## Ausgabe erstellen

### Manuelle Eingabe

1. Gehen Sie zu **Ausgaben > Neue Ausgabe**
2. Füllen Sie aus:
   - **Beschreibung** — Wofür die Ausgabe ist
   - **Betrag** — Gesamtkosten (inklusive oder exklusive USt.)
   - **Datum** — Wann die Ausgabe angefallen ist
   - **Kategorie** — Aus vordefinierten Kategorien auswählen. Wenn Sie unter Arbeitsbereichseinstellungen eine Standard-Ausgabenkategorie festgelegt haben, ist diese hier bereits vorausgefüllt.
   - **USt.-Satz** — Wird mit dem Standard-USt.-Satz fur Ausgaben Ihres Arbeitsbereichs vorausgefullt (einstellbar unter Arbeitsbereichseinstellungen). Sie konnen ihn jederzeit pro Ausgabe uberschreiben.
   - **Zahlungsmethode** — Wird mit der Standard-Zahlungsmethode fur Ausgaben Ihres Arbeitsbereichs vorausgefullt, falls festgelegt.
3. Hängen Sie optional ein **Beleg**-Bild oder PDF an
4. Verknüpfen Sie optional mit einem **Projekt** oder **Kunden**
5. Klicken Sie auf **Speichern**

### Schnellerfassung

Verwenden Sie die Schnellerfassungs-Schublade für schnelle Ausgabenerfassung:

1. Klicken Sie auf die Schnellerfassungs-Schaltfläche auf der Ausgabenliste
2. Geben Sie Betrag und Beschreibung ein
3. Wählen Sie eine Schnellkategorie
4. Speichern

### Aus einer Vorlage

Wenn Sie eine neue Ausgabe erstellen, klicken Sie auf **Aus Vorlage starten** (nur sichtbar, wenn gespeicherte Ausgabenvorlagen vorhanden sind). Wählen Sie eine Vorlage aus und das Formular füllt sich direkt mit dem gespeicherten Lieferanten, der Kategorie, dem Betrag und den anderen Daten. Passen Sie nach Bedarf an und klicken Sie auf **Speichern**.

### Aus Banktransaktionen

Wenn Ihr [Bankfeed](/de/features/bank) verbunden ist, werden kategorisierte ausgehende Transaktionen automatisch in Ausgabenentwürfe umgewandelt. Jede Ausgabe erhält die Gegenpartei als Lieferant, den absoluten Betrag als Brutto, den Standard-USt.-Satz und die Behandlung der Kategorie sowie das Buchungsdatum der Transaktion. Ausgabenentwürfe erscheinen zuerst im Prüf-Posteingang des Bankfeeds, wo Sie sie bestätigen, bearbeiten oder ablehnen können, bevor sie in Ihre Buchhaltung gelangen. Siehe [automatisch importierte Ausgaben prüfen](/de/features/bank#automatisch-importierte-ausgaben-prufen) für den vollständigen Ablauf.

### Belegscanner

Lassen Sie die KI Ausgabendetails automatisch aus Belegen extrahieren:

1. Gehen Sie zu **Ausgaben > Beleg scannen**
2. Laden Sie ein Belegbild (JPEG, PNG, WebP) oder PDF hoch
3. Wählen Sie den Extraktionsmodus:
   - **Einzeln** — Eine Ausgabe aus dem Beleg
   - **Mehrfach** — Mehrere Positionen aus einem Beleg
4. Überprüfen Sie die extrahierten Daten (Datum, Betrag, Lieferant, Beschreibung)
5. Bestätigen Sie, um die Ausgabe(n) zu erstellen

::: info
Belegscanner erfordert den **Pro**-Tarif oder hoher. Der USt.-Satz einer neuen Ausgabe beginnt mit Ihrer Standard-Arbeitsbereichseinstellung.
:::

## Ausgabenkategorien

MyCompanyDesk bietet vordefinierte Kategorien mit Symbolen zur schnellen Auswahl:

- Bürobedarf
- Reise & Transport
- Essen & Trinken
- Software & Abonnements
- Ausstattung
- Professionelle Dienstleistungen
- Marketing & Werbung
- Versicherung
- Miete & Nebenkosten
- Und mehr...

Kategorien helfen bei der Organisation Ihrer Ausgaben und werden in Berichten für Kostenaufschlüsselungen verwendet.

## USt.-Behandlung

Jede Ausgabe kann ihren eigenen USt.-Satz haben. Gängige Optionen:

- **21 %** — Standardsatz
- **9 %** — Ermäßigter Satz
- **0 %** — Nullsatz oder befreit

Der USt.-Betrag wird automatisch berechnet und in Ihre [USt.-Berichte](/de/features/vat) aufgenommen.

## Ausgaben verknüpfen

Verknüpfen Sie Ausgaben mit:

- **Projekte** — Projektkosten genau verfolgen
- **Kunden** — Kosten mit bestimmten Kunden verknüpfen, zum Beispiel zur späteren Weiterberechnung
- **Lieferanten** — Erfassen, an wen Sie gezahlt haben

## Massenaktionen

Wählen Sie mehrere Ausgaben für:

- **Kategorisieren** — Kategorie in großem Umfang ändern
- **Archivieren** — Ins Archiv verschieben
- **Löschen** — Dauerhaft entfernen
- **Exportieren** — Als CSV herunterladen

## Wiederkehrende Ausgaben

Für regelmäßige Kosten (Miete, Abonnements usw.) richten Sie [wiederkehrende Ausgaben](/de/features/recurring-expenses) ein, um die Erstellung zu automatisieren.

## Import

Importieren Sie Ausgaben aus CSV:

1. Gehen Sie zu **Profil > Import**
2. Wählen Sie **Ausgaben** als Datentyp
3. Laden Sie Ihre CSV-Datei hoch
4. Ordnen Sie Spalten den Feldern zu
5. Überprüfen und bestätigen Sie

## Tipps

- Legen Sie Ihren Standard-USt.-Satz, Ihre Standard-Ausgabenkategorie und Ihre Standard-Zahlungsmethode fur Ausgaben unter **Arbeitsbereichseinstellungen** fest, damit das Formular nicht jedes Mal leer startet. Eine 0-%-Einstellung funktioniert korrekt; das Formular behandelt sie als bewusste Wahl.
- Aktivieren Sie [KI-Vorschläge](/de/advanced/ai-features) für automatische Kategorieempfehlungen
- Hängen Sie immer Belege an — sie sind für Steuerprüfungen unerlässlich
- Verwenden Sie Projekte, um das Verhältnis von Ausgaben zu Einnahmen zu verfolgen
- Prüfen Sie den [Ausgabenbericht](/de/features/reports) für Ausgabenaufschlüsselungen
