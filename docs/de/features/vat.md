---
title: USt.-Verwaltung
---

<!-- TODO(source-missing): RichardTool 5407b44 added historical Dutch VAT rates 6% and 19% to the valid invoice/quote/contract/recurring-invoice/catalog rate set. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# USt.-Verwaltung

Verfolgen Sie vereinnahmte und gezahlte USt., bereiten Sie Ihre Erklärung vor und behalten Sie Fristen im Blick. MyCompanyDesk unterstützt den niederländischen USt.-Ablauf (BTW): Die Seite spiegelt die Aangifte der Belastingdienst, sodass die Zahlen, die Sie sehen, die Zahlen sind, die Sie einreichen.

## Seitenaufbau

Die USt.-Seite hat drei Reiter: **Übersicht**, **Erklärung** und **Transaktionen**. Der aktive Reiter und der aktive Zeitraum stehen in der URL, sodass Aktualisieren und die Zurücktaste Ihre Position bewahren.

Neben der Reiterleiste sitzt eine seitenweite Zeitraumauswahl (Q1 bis Q4 plus Gesamtjahr); ein Wechsel wirkt auf jede Karte in jedem Reiter. Gibt Ihr Arbeitsbereich monatlich ab, zeigt die Auswahl die zwölf Monate statt Quartale, passend zur Abgabefrequenz in Ihren Steuereinstellungen. Mit dem Jahresumschalter oben auf der Seite wechseln Sie das Jahr.

## Herokarte

Die Herokarte fasst den gewählten Zeitraum zusammen:

- **Saldo**: Netto-USt. (vereinnahmt minus gezahlt) mit dem Hinweis "te betalen" oder "terug te ontvangen". Der Saldo folgt der Zeitraumauswahl.
- **Fristenring**: ein runder Countdown zur nächsten Abgabefrist. Rot bei 3 Tagen oder weniger, gelb bis 14 Tage, sonst grün.
- **MwSt.-Rücklage (BTW-spaarpotje)**: eine vorgeschlagene Rücklage aus dem Zeitraumsaldo plus 10% Puffer, sichtbar, wenn Sie USt. schulden. Steht Ihnen eine Erstattung zu, wird die Kachel zu einer grünen Erstattungskachel.

Unter dem Saldo stehen zwei Schaltflächen: **Erklärung öffnen** springt zum Reiter Erklärung, und **Wie wird das berechnet?** erklärt die Rechnung hinter dem Saldo.

Über der Herokarte warnt ein Banner, wenn Ihre Daten unvollständig sind (Rechnungsentwürfe oder Ausgaben ohne USt.), damit Sie das vor der Abgabe beheben können.

## Reiter Übersicht

### Quartalsleiste

Vier Karten (Q1 bis Q4) mit Umsatz, vereinnahmter USt., gezahlter USt. und Saldo pro Quartal, dazu die Abgabefrist und ein Schlosssymbol auf eingereichten oder gesperrten Quartalen. Ein Klick auf eine Karte wechselt den seitenweiten Zeitraum.

### Prüfungen vor der Abgabe

Eine Checkliste, die gegen den aktiven Zeitraum läuft. Jede Prüfung hat einen Korrekturlink direkt zu den betroffenen Datensätzen:

- **Entwürfe**: Rechnungen im Entwurfsstatus, die nicht in die Erklärung einfließen.
- **Fehlende USt.**: Ausgaben ohne USt.-Betrag.
- **Fehlende Belege**: Ausgaben ohne angehängten Beleg.
- **ICP offen**: EU-B2B-Verkäufe, die separat in der ICP-Meldung anzugeben sind.
- **Reverse-Charge-Ursprung**: Ausgaben mit Reverse-Charge-MwSt., bei denen das Land oder die KVK-Nummer des Lieferanten fehlt, sodass die Rubrik 2a/4b nicht belegt werden kann.

Ein Zähler in der Kopfzeile zeigt die Zahl der Blocker oder dass alles in Ordnung ist.

### Zusammenfassung und Jahreswerte

Unter den Prüfungen sehen Sie die Kernzahlen des Jahres (Umsatz, Ausgaben, Gewinn, vereinnahmte und gezahlte USt., eine geschätzte Steuerlast und eine empfohlene Rücklage) sowie eine einzeilige Jahressumme über die Quartale.

Solange Ihr Umsatz noch im KOR-Bereich liegt, zeigt dieser Reiter außerdem einen Hinweis auf die KOR-Einstellungen (siehe unten).

## Reiter Erklärung

### Rubrieken-Übersicht

Eine Tabelle, die das Erklärungsformular der Belastingdienst spiegelt:

| Abschnitt | Codes |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Jede Zeile zeigt den Umsatz (exkl.) und den USt.-Betrag. Die Leiste unten zeigt die Summe, die zu zahlen oder zu erstatten ist. Korrekturen außerhalb des Formulars (KOR, Suppletie) erscheinen als eigene Korrekturzeile, sodass sichtbar bleibt, was Sie tatsächlich zahlen.

### Exporte für die Buchhaltung

Eine Downloadkarte neben der Übersicht bietet CSV-Exporte: einen vollständigen Export für die Buchhaltung, eine USt.-Übersicht des gewählten Quartals und eine Jahresübersicht.

### Internationale Karten

Bei internationaler Aktivität erscheinen unter der Übersicht ergänzende Karten:

- **ICP-Meldung**: EU-B2B-Verkäufe je Kunde gruppiert. Erforderlich, wenn Sie an USt.-registrierte Kunden in anderen EU-Ländern verkauft haben.
- **OSS-Aufschlüsselung**: B2C-Verkäufe je Land für das One-Stop-Shop-Verfahren.
- **Ausländische USt.**: Ihnen berechnete ausländische USt., die möglicherweise über das EU-Erstattungsverfahren zurückzuholen ist.
- **Korrekturen**: Privatentnahme, Suppletie und andere Anpassungen, die in die Zeitraumsummen einfließen.

Diese Karten bleiben verborgen, bis es tatsächlich internationale Daten gibt; die meisten Arbeitsbereiche sehen sie nie.

## Reiter Transaktionen

Eine flache Liste jeder Rechnung und Ausgabe, die in den gewählten Zeitraum einfließt, nützlich für Stichproben vor der Abgabe. Filterchips grenzen die Liste ein: **Alle**, **Beleg fehlt**, **MwSt. fehlt**, **Reverse Charge** und **Auslands-MwSt.**, jeweils mit Zähler. Jede Zeile verlinkt auf die zugehörige Rechnung oder Ausgabe.

## Periodensperren

Eine Übersichtsleiste oben auf der USt.-Seite zeigt, wie viele Zeiträume gesperrt sind; klappen Sie sie auf, um sie zu verwalten.

- **Automatisches Sperren**: Sobald die Abgabefrist eines Zeitraums verstrichen ist, sperrt MyCompanyDesk ihn automatisch, damit Ihre Buchhaltung zu der eingereichten Erklärung passt.
- **Manuelles Sperren**: Über Zeitraumchips sperren Sie jeden vergangenen Zeitraum des gewählten Jahres selbst, etwa direkt nach einer frühen Abgabe. Bei einem noch laufenden Zeitraum erscheint zuerst eine zusätzliche Warnung.
- **Als eingereicht markieren**: Kennzeichnen Sie einen gesperrten Zeitraum als eingereicht, sobald Sie die Erklärung abgegeben haben. Eingereichte Quartale zeigen das auch in der Quartalsleiste.
- **Vorübergehend entsperren**: Müssen Sie etwas korrigieren? Entsperren Sie einen Zeitraum vorübergehend (72 Stunden); danach sperrt er sich von selbst wieder, oder Sie sperren früher manuell. Eine Sperre ganz entfernen geht nur, solange die Abgabefrist noch nicht verstrichen ist.

Das Bearbeiten einer Rechnung oder Ausgabe in einem gesperrten Zeitraum wird im Formular blockiert: Die Finanzfelder werden schreibgeschützt (Notizen bleiben bearbeitbar) und das Formular bietet stattdessen einen Korrekturweg an, etwa eine Korrektur im aktuell offenen Zeitraum oder eine Korrekturrechnung.

## KOR

Die Kleinunternehmerregelung (kleineondernemersregeling) verwalten Sie unter **Einstellungen → MwSt.**: Eine Karte verfolgt Ihren Jahresumsatz gegen die Schwelle von €20.000 mit einem Fortschrittsbalken, erklärt, was die Teilnahme für Ihre Rechnungen bedeutet, und enthält den Anmeldeschalter. Solange Ihr Umsatz noch unter dem KOR-Bereich liegt, zeigt die USt.-Seite einen Hinweis mit Link dorthin.

## KIA und Box 3

KIA (kleinschaligheidsinvesteringsaftrek) und Box 3 sind Einkommensteuerthemen und stehen unter **Berichte → Einkommensteuer**, nicht auf der USt.-Seite. Die Box-3-Karte erscheint nur für Arbeitsbereiche, die das Immobilienmodul nutzen.

## USt.-Assistent

Der eingebaute Assistent beantwortet Fragen zu Ihrer Erklärung mit den Zahlen Ihres eigenen Arbeitsbereichs, und seine Antworten können direkt zum passenden Reiter oder Datensatz springen.

## Tipps

- Stellen Sie den Seitenzeitraum auf den Zeitraum, für den Sie abgeben; jede Karte und jede Kennzahl zieht mit.
- Gehen Sie die Prüfungen durch, bevor Sie den Reiter Erklärung öffnen; eine saubere Checkliste bedeutet meist, dass die Rubrieken-Übersicht zum Formular der Belastingdienst passt.
- Nutzen Sie die MwSt.-Rücklage als Ziel für das, was Sie zurücklegen; der Puffer von 10% ist bereits enthalten.
- Der Fristenring wird bei drei Tagen rot. Nehmen Sie das als hartes Signal zur Abgabe.
- Verkaufen Sie B2B in der EU? Öffnen Sie vor der Abgabe die ICP-Karte; das ist eine separate Meldung, die leicht vergessen wird.
- Markieren Sie einen Zeitraum direkt nach der Abgabe als eingereicht und lassen Sie die automatische Sperre ihn danach schützen.
