---
title: Ausgaben
---

# Ausgaben

Verfolgen Sie Geschäftsausgaben, scannen Sie Belege und lassen Sie MyCompanyDesk die USt.-Standardwerte und die Abschreibung größerer Anschaffungen übernehmen.

## Übersicht

Die Ausgabenseite listet jede erfasste Ausgabe auf. Mit dem Suchfeld und dem Filtermenü grenzen Sie die Liste nach Kategorie, Rechnungsstatus (weiterberechnet oder nicht) und Zeitraum ein und wechseln zwischen den Ansichten **Aktiv**, **Archiv** und **Papierkorb**. Die Karten über der Liste dienen zugleich als Schnellfilter: Klicken Sie auf die Karte mit unbezahlten Ausgaben, um nur unbezahlte Ausgaben zu sehen, oder auf die Karte ohne Kategorie, um Ausgaben zu zeigen, die noch eine Kategorie brauchen. Auch Links von der USt.-Seite und der Rechnungsseite können die Liste vorgefiltert öffnen, etwa auf Ausgaben ohne Beleg, ohne USt.-Betrag oder auf Kosten, die Sie noch einem Kunden in Rechnung stellen können. Jeder aktive Filter erscheint als Chip, den Sie mit einem Klick wieder entfernen.

Ausgaben, die über Ihren [Bankfeed](/de/features/bank) hereingekommen sind, tragen ein kleines Banksymbol, sodass Sie sie immer von manuellen Einträgen unterscheiden können.

Klicken Sie auf eine Ausgabe, um ihre Detailseite zu öffnen, oder auf **Hinzufügen**, um eine manuell zu erfassen. Das Zahnrad oben öffnet die Ausgabeneinstellungen.

## Kategorien

MyCompanyDesk wird mit sechs Standardkategorien geliefert, die direkt auf die niederländische Steuererklärung abgestimmt sind:

- **Algemene kosten**
- **Kantoorkosten**
- **Autokosten & reizen**
- **Telefoon & internet**
- **Representatiekosten**
- **Inkoop & materiaal**

Zusätzlich können Sie eigene Kategorien anlegen. Öffnen Sie das Zahnrad auf der Ausgabenseite, gehen Sie zu **Ausgabenkategorien** und starten Sie dort den Kategorie-Assistenten: Wählen Sie Ihre Branche, und er schlägt ein passendes Set vor, optional verfeinert durch eine kurze Beschreibung Ihres Unternehmens.

Jede Kategorie hat eigene Standardwerte: eine USt.-Behandlung, einen abziehbaren Prozentsatz für teilweise abziehbare Kosten, einen vorgeschlagenen USt.-Satz und optional eine automatische Investitionsmarkierung mit einer Standard-Abschreibungsdauer. Diese Standardwerte fließen in das Formular, sobald Sie die Kategorie wählen. Kategorien können Sie jederzeit bearbeiten oder archivieren; die sechs Standardkategorien lassen sich umbenennen, aber nicht entfernen.

## Eine Ausgabe erstellen

### Manuelle Eingabe

1. Gehen Sie zu **Ausgaben** und klicken Sie auf **Hinzufügen**.
2. Tippen Sie den Namen des **Lieferanten**. Die Autovervollständigung schlägt Lieferanten vor, die Sie schon einmal verwendet haben.
3. Wählen Sie eine **Kategorie**. Ihre USt.-Behandlung, der vorgeschlagene USt.-Satz und der abziehbare Prozentsatz werden für Sie ausgefüllt. Haben Sie in den Ausgabeneinstellungen eine Standardkategorie festgelegt, ist sie bereits vorausgewählt.
4. Füllen Sie **Beschreibung**, **Betrag exkl. USt.**, **USt.-Satz** und **Datum** aus. Der USt.-Betrag wird automatisch berechnet; Sie können auch den Betrag inkl. USt. eingeben und das Formular den Rest ausrechnen lassen.
5. Passen Sie optional die **USt.-Behandlung** an, verknüpfen Sie einen **Kunden** oder ein **Projekt** und ergänzen Sie eine **Referenz**, **Notizen** oder eine andere **Zahlungsmethode**.
6. Klicken Sie auf **Speichern**.

Das Formular hat kein Belegfeld. Nach dem Speichern fordert die Detailseite Sie auf, den Beleg dort hochzuladen, als Bild oder PDF.

### Vom Lieferanten generieren

Sobald Sie einen Lieferantennamen getippt haben, schlägt die Schaltfläche **Generieren** (Funkelsymbol, oben rechts) die übrigen Felder für Sie vor: Beschreibung, Kategorie, USt.-Behandlung, Betrag und Datum. Prüfen Sie das Ergebnis vor dem Speichern; es ist eine Starthilfe, kein Autopilot.

### Aus Banktransaktionen

Ist Ihr [Bankfeed](/de/features/bank) verbunden, können abgehende Transaktionen in Ausgaben umgewandelt werden. Jede erhält die Gegenpartei als Lieferant, den Betrag und das Buchungsdatum, und Sie prüfen sie, bevor sie in Ihrer Buchhaltung landen. Siehe [automatisch importierte Ausgaben prüfen](/de/features/bank#automatisch-importierte-ausgaben-prufen) für den vollständigen Ablauf.

### Belegscanner

Für Belege als Bild oder PDF:

1. Gehen Sie zu **Ausgaben > Beleg scannen**.
2. Laden Sie eine JPEG-, PNG-, WebP- oder PDF-Datei hoch.
3. Prüfen Sie den erkannten Lieferanten, das Datum, den Betrag, die USt. und die Kategorie.
4. Bestätigen Sie, um die Ausgabe(n) zu erstellen.

Unter den **erweiterten Einstellungen** wählen Sie zwischen **Gesamtbetrag** (eine Ausgabe für den ganzen Beleg) und **einzelnen Positionen** (das Dokument in separate Ausgaben aufteilen), beschränken ein PDF auf bestimmte Seiten und lassen die gescannte Datei als Beleg an jede erstellte Ausgabe anhängen.

Belegscanning ist in jedem Tarif verfügbar, mit einem monatlichen Kontingent pro Tarif: 3 Scans im Gratis-Tarif, 30 im Starter und 200 im Pro.

## USt.-Behandlung

Jede Ausgabe hat eine USt.-Behandlung, die bestimmt, wie sie auf Ihrer USt.-Erklärung landet:

| Behandlung | Bedeutung |
|---|---|
| **Standard** | Der Lieferant berechnet niederländische USt. Das ist die Voreinstellung. |
| **Reverse-Charge** | Die USt. ist auf Sie verlagert (verleggingsregeling), üblich bei B2B-Einkäufen in der EU. Der Lieferant stellt 0% in Rechnung, und Sie geben die USt. selbst an. |
| **Befreit** | Der Einkauf ist von der USt. befreit: nichts abzuziehen. |
| **Ausländische USt. berechnet** | Ein ausländischer Lieferant hat Ihnen seine lokale USt. berechnet. Diese ist über Ihre niederländische Erklärung nicht abziehbar. |

Die Behandlung wird von der Kategorie übernommen. Überschreiben Sie sie an der Ausgabe selbst, wenn die Realität abweicht, etwa bei einem Softwarekauf bei einem US-Anbieter, der USt. berechnet hat, statt die übliche Verlagerung anzuwenden.

## Investitionen und Abschreibung

Größere Anschaffungen (ein Laptop, Maschinen, Möbel) werden meist nicht auf einmal als Kosten gebucht, sondern über mehrere Jahre abgeschrieben. MyCompanyDesk regelt das pro Ausgabe:

- Das Formular hat einen Schalter **Investition (abschreiben)**. Schalten Sie ihn ein, um die Ausgabe als Investition zu buchen.
- Ab 450 Euro exkl. USt. schlägt das Formular das selbst vor, mit einer Ein-Klick-Schaltfläche **Als Investition buchen**. Auch Kategorien können Investitionen automatisch markieren.
- Wählen Sie die Abschreibungsdauer im Feld **Abschreiben über (Jahre)**, von 1 bis 10 Jahren. Sie geht der Vorgabe der Kategorie vor; hat die Kategorie keine, gelten 5 Jahre.
- Eine Live-Vorschau zeigt, wie hoch die monatliche Abschreibung ungefähr ausfällt.

Die USt. ziehen Sie vollständig im Quartal des Kaufs ab; nur der Betrag exklusive USt. wird über die gewählte Dauer verteilt. Die monatlichen Abschreibungszeilen fließen automatisch in Ihre Berichte. Ändern Sie später Betrag, Datum oder Dauer, wird der Plan neu berechnet.

## Verknüpfen

Verknüpfen Sie Ausgaben mit:

- **Projekten**, um Projektkosten zu verfolgen.
- **Kunden**, um Einkäufe einem Kunden zuzuordnen, zum Beispiel Kosten, die Sie weiterberechnen möchten.
- **Lieferanten** als freiem Namen; wiederverwendete Lieferanten erscheinen in der Autovervollständigung.

## Massenaktionen

Wählen Sie mehrere Ausgaben aus, um sie auf einmal zu bearbeiten. In der aktiven Liste stehen **Als bezahlt markieren** (wenn alle ausgewählten Ausgaben unbezahlt sind), **Archivieren** und **Löschen** zur Wahl. Die Archiv-Ansicht bietet das Zurückholen in die aktive Liste oder das Verschieben in den Papierkorb; die Papierkorb-Ansicht bietet das Zurückholen ins Archiv oder das endgültige Löschen.

## Wiederkehrende Ausgaben

Für planbare Kosten (Miete, Abonnements, Hosting) richten Sie [wiederkehrende Ausgaben](/de/features/recurring-expenses) ein, die die Buchungen nach Zeitplan anlegen.

## Import

Importieren Sie historische Ausgaben aus CSV über **Profil > Import**. Ordnen Sie Ihre Spalten den Ausgabenfeldern zu, prüfen Sie die Vorschau und bestätigen Sie.

## Tipps

- Wählen Sie zuerst die richtige Kategorie: USt.-Behandlung, abziehbarer Prozentsatz und Investitionsmarkierung folgen alle daraus.
- Legen Sie Ihre Standardkategorie und Zahlungsmethode über das Zahnrad auf der Ausgabenseite fest und Ihren üblichen USt.-Satz unter **Einstellungen > BTW**, damit das Formular vorausgefüllt startet.
- Wenn Sie die USt.-Behandlung bei jeder Ausgabe einer Kategorie überschreiben, passen Sie stattdessen den Standard der Kategorie an.
- Hängen Sie immer Belege an. Die Prüfungen vor der Abgabe auf der [USt.-Seite](/de/features/vat) markieren fehlende Belege, bevor Sie einreichen.
