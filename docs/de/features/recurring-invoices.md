---
title: Wiederkehrende Rechnungen
description: "Richten Sie Rechnungsvorlagen ein, die planmäßig Rechnungen erzeugen, für Retainer, Abos, Mieteinzug und Wartungsverträge."
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

## Positionen

Positionen wiederkehrender Rechnungen funktionieren wie bei regulären Rechnungen:
- Jede Position benötigt eine Beschreibung. Ist die Beschreibung zu lang, zeigt das Formular einen Validierungsfehler an.
- Jede Position kann einen Prozent- oder Festbetrag-Rabatt erhalten.
- Ein Prozentrabatt kann nicht höher als 100 % sein.
- Ein Rabattwert darf nicht negativ sein.

## Zahlungsoptionen und Rechnungsdaten

Eine wiederkehrende Rechnung kann dieselben Dokumentfelder mitbringen wie eine normale Rechnung. Unter **Zahlungsoptionen** legen Sie die Zahlungsart dieser Serie fest. Solange Sie nichts wählen, folgt jede Rechnung den Zahlungseinstellungen Ihres Unternehmens, sodass eine Änderung unter Einstellungen → Zahlung von selbst in die Serie durchschlägt. Einmal gewählt, nimmt die Schaltfläche **Standard Ihres Unternehmens verwenden** die Auswahl zurück. Die Zahlungsnotiz funktioniert genauso.

Unter **Rechnungsdetails** legen Sie fest, was auf jeder Rechnung dieser Serie steht: **Reverse Charge (Steuerschuldnerschaft des Leistungsempfängers)**, die **Referenz**, das **Projekt** und der **Vermögenswert**, zu dem die Abrechnung gehört, plus der Schalter, der diese Serie vor Ihrem Buchhalter verbirgt. MyCompanyDesk schlägt Reverse Charge vor, wenn ein Kunde wie ein EU-Unternehmen außerhalb der Niederlande aussieht, und warnt, wenn der Kunde keine USt-IdNr. hat. Reverse Charge braucht die USt-IdNr. des Kunden: ohne sie weigert sich das Formular, die Serie zu speichern, und fehlt sie später, hält die Generierung diese Rechnung als Entwurf ohne Nummer an und benachrichtigt Sie, statt eine ungültige Rechnung unbeaufsichtigt zu versenden.

Alles, was Sie hier eintragen, wird eins zu eins auf jede Rechnung übernommen, die die Serie erzeugt. Bereits erzeugte Rechnungen behalten, was sie beim Erzeugen bekommen haben; unter [Reverse Charge](/de/faq/reverse-charge) steht, wann die Behandlung greift.

## Häufigkeitsoptionen

| Häufigkeit | Beschreibung |
|---|---|
| **Wöchentlich** | Alle 7 Tage |
| **Monatlich** | Am gleichen Tag jeden Monat |
| **Vierteljährlich** | Alle 3 Monate |
| **Jährlich** | Einmal pro Jahr |

## Zustellungsart

Unter **Nach dem Erstellen** legt die Reihe fest, was mit jeder erzeugten Rechnung passiert:

- **Entwurf**: Die Rechnung liegt als Entwurf bereit. Sie prüfen und versenden sie selbst.
- **Versenden**: Sie erhalten eine Benachrichtigung, und die Rechnung geht einen Tag später an den Kunden, außer Sie halten sie an diesem Tag zurück. Eine zurückgehaltene Rechnung bleibt in der App liegen und ist bereit zum Versand.
- **Einziehen**: Wie bei Versenden, und der Betrag wird zusätzlich über das Lastschriftmandat des Kunden eingezogen. Dieses Mandat richten Sie einmalig in einem Vertrag mit diesem Kunden ein; siehe [Automatischer Einzug](/de/features/contracts#automatic-collection).

Das Formular sagt von selbst, wenn eine Wahl nicht möglich ist: Versenden braucht einen Kunden mit E-Mail-Adresse, und Einziehen ein gültiges Lastschriftmandat.

## Zeitraum auf der Rechnung

Jede Reihe wählt selbst, was ihre Positionen über den abgerechneten Zeitraum sagen:

- **Keiner**: Die Positionen erscheinen so auf der Rechnung, wie Sie sie geschrieben haben.
- **Laufender Zeitraum**: der Zeitraum, der das Rechnungsdatum enthält.
- **Vorheriger Zeitraum**: der Zeitraum vor dem Rechnungsdatum (nachträglich).
- **Nächster Zeitraum**: der Zeitraum nach dem Rechnungsdatum (im Voraus).

Das Formular zeigt eine Vorschau, wie die Position auf der nächsten Rechnung aussieht. Lassen Sie es auf Keiner stehen, wenn die Beschreibung dem Kunden schon genug verrät.

## Laufzeit

Unter **Laufzeit** legen Sie fest, wie lange die Reihe weiterarbeitet:

- **Unbefristet**: Die Reihe endet nicht.
- **Bis zu einem Datum**: Die Reihe endet nach diesem Datum. Für einen Zeitraum, der an oder vor diesem Datum beginnt, erscheint noch eine Rechnung, damit die letzte Periode nicht verloren geht: nachträglich abgerechnet geht die Juni-Rechnung am 1. Juli noch heraus, wenn die Reihe bis zum 30. Juni läuft.
- **Eine Anzahl von Malen**: Die Reihe stoppt nach so vielen Rechnungen. Die Seite zählt mit, wie viele erstellt wurden.

Am Ende stellt sich die Reihe selbst still, und eine Benachrichtigung nennt die letzte Rechnung, die sie erstellt hat.

## Jährliche Preiserhöhung

Eine wiederkehrende Rechnung kann ihre Positionspreise einmal im Jahr selbst erhöhen. Öffnen Sie die wiederkehrende Rechnung und aktivieren Sie **Jährliche Preiserhöhung**:

- **Erhöhen um**: den Verbraucherpreisindex des CBS (VPI), oder einen festen Prozentsatz.
- **Jedes Jahr zum**: den Tag und Monat, an dem die Erhöhung jedes Jahr wirksam wird.
- **Kunden per E-Mail informieren**: wie viele Monate im Voraus der Kunde informiert wird.

Die Erhöhung arbeitet je Position: Jeder Positionspreis steigt mit dem Prozentsatz, auf den Cent gerundet, und die Paketbestandteile unter einer Position steigen mit.

Etwa eine Woche, bevor die Ankündigung fällig ist, erhalten Sie eine Benachrichtigung mit den erwarteten Beträgen und einer E-Mail-Vorschau, und mit einem Klick überspringen Sie dieses Jahr. Tun Sie nichts, läuft der Rest von selbst: Am Mail-Datum bekommt der Kunde die Ankündigung von Ihrer eigenen E-Mail-Adresse, und zum Inkrafttreten gehen genau die Positionen, die in dieser E-Mail stehen, in einem Durchgang auf ihren neuen Preis. Eine Position, die Sie nach der E-Mail hinzugefügt oder von Hand umpreist haben, behält den Preis, den Sie ihr gegeben haben.

Rechnungen für Zeiträume vor dem Inkrafttreten behalten die alten Preise, auch wenn sie erst danach erstellt werden. Ein im Voraus abgerechneter Zeitraum erhält die neuen Preise, sobald der Kunde informiert wurde. Die Ankündigungs-E-Mail nennt Beträge ohne MwSt. nur, wo MwSt. anfällt, und nennt die erste Rechnung, die die neuen Preise trägt.

Lässt sich die Ankündigung vor dem Inkrafttreten nicht senden, geht die Erhöhung nicht durch, und eine Benachrichtigung sagt Ihnen, warum. Die Karte führt eine kurze Historie: durchgeführte Erhöhungen, übersprungene Jahre und Jahre, in denen der VPI nicht stieg.

Die Erhöhung läuft auf einer aktiven wiederkehrenden Rechnung mit mindestens einer Position. Eine pausierte Reihe plant keine Erhöhung, und die Karte sagt das. Gehört das automatische Erhöhen nicht zu Ihrem Tarif, passen Sie die Positionspreise einfach selbst an.

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
- Was danach passiert, hängt von der Zustellungsart der Reihe ab: Die Rechnung liegt als Entwurf bereit, geht einen Tag später heraus, außer Sie halten sie zurück, oder sie wird zusätzlich über das Lastschriftmandat eingezogen
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
