---
title: Wiederkehrende Rechnungen
---

# Wiederkehrende Rechnungen

Automatisieren Sie Ihre regelmäßige Abrechnung, indem Sie Rechnungen einrichten, die nach einem Zeitplan generiert werden.

## Übersicht

Wiederkehrende Rechnungen sind Vorlagen, die automatisch neue Rechnungen in festgelegten Intervallen erstellen. Ideal für:

- Monatliche Honorare
- Abonnementabrechnungen
- Mieteinnahmen
- Wartungsverträge
- Regelmäßige Beratungshonorare

## Wiederkehrende Rechnung erstellen

1. Gehen Sie zu **Wiederkehrende Rechnungen > Neu**
2. Füllen Sie die Vorlage aus:
   - **Kunde** — Wem abgerechnet wird
   - **Positionen** — Was abgerechnet wird (Beschreibungen, Beträge, USt.)
   - **Häufigkeit** — Wie oft (wöchentlich, monatlich, vierteljährlich, jährlich)
   - **Startdatum** — Wann die Generierung beginnen soll
3. Klicken Sie auf **Speichern**

::: tip Weitere Optionen
Im Formular für neue wiederkehrende Rechnungen bleiben optionale Angaben unter **Weitere Optionen** verborgen. Notizen stehen dort standardmäßig; klappen Sie den Abschnitt aus, wenn Sie sie ergänzen möchten.
:::

Die wiederkehrende Rechnung wird im Status **Aktiv** erstellt und generiert ihre erste Rechnung am nächsten geplanten Datum.

## Häufigkeitsoptionen

| Häufigkeit | Beschreibung |
|---|---|
| **Wöchentlich** | Alle 7 Tage |
| **Monatlich** | Am gleichen Tag jeden Monat |
| **Vierteljährlich** | Alle 3 Monate |
| **Jährlich** | Einmal pro Jahr |

## Wiederkehrende Rechnungen verwalten

### Pausieren

Rechnungsgenerierung vorübergehend stoppen:

1. Öffnen Sie die wiederkehrende Rechnung
2. Klicken Sie auf **Pausieren**
3. Der Status ändert sich zu **Pausiert** — es werden keine Rechnungen generiert

### Fortsetzen

Eine pausierte wiederkehrende Rechnung fortsetzen:

1. Öffnen Sie die pausierte wiederkehrende Rechnung
2. Klicken Sie auf **Fortsetzen**
3. Die Generierung wird ab dem nächsten geplanten Datum fortgesetzt

### Bearbeiten

Das Bearbeiten einer wiederkehrenden Rechnung betrifft nur **zukünftige** Rechnungen. Bereits generierte Rechnungen werden nicht geändert.

### Löschen

Entfernen Sie die wiederkehrende Vorlage vollständig. Bereits generierte Rechnungen bleiben in Ihren Unterlagen.

## Generierte Rechnungen

Jedes Mal, wenn eine wiederkehrende Rechnung ausgelöst wird, wird eine neue Rechnung erstellt:

- Sie verwendet die Positionen und den Kunden der Vorlage
- Sie erhält die nächste automatische Rechnungsnummer
- Sie beginnt als **Entwurf** (überprüfen und versenden) oder wird automatisch versendet, falls konfiguriert
- Jede generierte Rechnung ist unabhängig — Sie können sie bearbeiten, ohne die Vorlage zu beeinflussen

### Gesperrte USt.-Perioden

Falls das geplante Datum in eine bereits eingereichte und gesperrte USt.-Periode fällt, erstellt MyCompanyDesk **keine** Rechnung. Diese Periode wird für die automatische Generierung dauerhaft übersprungen (ein erneuter Versuch würde nie von selbst gelingen), und der Zeitplan läuft mit dem nächsten Fälligkeitsdatum weiter. Sie erhalten eine Benachrichtigung, damit Sie selbst entscheiden können: erstellen Sie eine aktuelle Rechnung für den Kunden, oder erfassen Sie den Umsatz über eine Ergänzungsmeldung.

Eine pausierte oder kürzlich fortgesetzte Vorlage trifft dieses Szenario besonders leicht, weil das nächste geplante Datum hinter dem zuletzt eingereichten Quartal liegen kann.

## Verlauf anzeigen

Die Detailseite der wiederkehrenden Rechnung zeigt alle zuvor generierten Rechnungen, sodass Sie den gesamten Abrechnungsverlauf verfolgen können.

## Quellenlink

Wurde eine Rechnung aus einer wiederkehrenden Vorlage erstellt, zeigt die Rechnungsdetailseite einen Banner **Automatisch erstellt aus wiederkehrender Rechnung** mit einem Link zurück zu dieser Vorlage. So springen Sie mit einem Klick von einer einzelnen Rechnung zu der Vorlage, die sie erzeugt hat.

## Was passiert, wenn sich mein Tarif ändert?

Wiederkehrende Rechnungen sind Teil des Office-Tarifs. Bei einem Upgrade von Desk auf Office startet die automatische Erstellung am nächsten Fälligkeitsdatum. Bei einer Herunterstufung von Office auf Desk wird die Erstellung automatisch pausiert. Die Vorlage und bereits erstellte Rechnungen bleiben in Ihrem Arbeitsbereich, und beim späteren Upgrade wird der Zeitplan fortgesetzt.

## Massenaktionen

- **Pausieren / Fortsetzen** — Mehrere wiederkehrende Rechnungen umschalten
- **Löschen** — Mehrere Vorlagen entfernen

## Tipps

- Kombinieren Sie mit [Verträgen](/de/features/contracts) für vertragsbasierte Abrechnung
- Überprüfen Sie generierte Rechnungen vor dem ersten automatischen Versand, um sicherzustellen, dass alles korrekt aussieht
- Verwenden Sie die Vorschau des nächsten Vorkommens, um zu sehen, wann die nächste Rechnung erstellt wird
- Prüfen Sie die Anzahl der aktiven Vorlagen und Kennzahlen oben auf der Seite
