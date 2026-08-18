---
title: Dashboard
last_verified: 2026-08-18
---

# Dashboard

Das Dashboard unter `/dashboard` ist die Startseite Ihres Arbeitsbereichs. Es zeigt, wie es Ihrem Unternehmen gerade geht: eine kurze Übersichtszeile, eine priorisierte Liste von Aufmerksamkeitspunkten und mehrere Datenblöcke, die nur erscheinen, wenn sie wirklich etwas Beitragwertes zu sagen haben.

## Aufbau

Die Seite besteht aus einer festen Menge von Blöcken in einer einzigen scrollbaren Ansicht. Die Reihenfolge ändert sich nie, aber ein Block wird nur gerendert, wenn Ihre Unternehmensdaten die dafür nötige Schwelle erreichen. Ein einfacheres Unternehmen sieht also eine kürzere Seite, keine leeren Platzhalter.

Ganz oben stehen eine kurze **Lede**, gefolgt von einer Periodenauswahl und der KPI-Zeile. Darunter folgen die priorisierten **Vandaag**-Signale, dann unterstützende Blöcke wie der Trendchart, das Ageing, die Umsatzquellen, die Angebotspipeline, die Ausgabenmix, der Cash-Chart, die MwSt.-Karte und die jüngste Aktivität.

## Periodenauswahl

Alle Zahlen der Übersichtszeile und der Tempoberechnungen folgen der gewählten Periode. Sie wählen zwischen **Monat**, **Quartal** und **Jahr**. Der Trendchart bleibt immer bei 12 Monaten, damit der Vergleich fair bleibt.

## Lede

Die Lede ist ein kurzer Absatz, der das aktuelle Unternehmensbild zusammenfasst. Sie wird aus denselben Live-Daten erstellt wie der Rest der Seite und an die zugrunde liegenden Signale gekoppelt, damit Namen, Beträge und Routen nicht auseinanderlaufen.

Standardmäßig ist die Lede deterministisch. Bei Pro-Arbeitsbereichen kann eine KI-Ebene sie neu formulieren, aber das Modell paraphrasiert nur Fakten, die die deterministische Engine bereits ermittelt hat. Ist das Modell nicht verfügbar, bleibt die deterministische Lede stehen.

## KPI-Zeile

Die KPI-Zeile enthält bis zu fünf Kacheln. Jede Kachel zeigt eine Hauptzahl, einen Vergleich mit der vorherigen vergleichbaren Periode und eine kleine Sparkline als Trend. Kacheln verlinken zum zugehörigen Bericht oder zur passenden Liste.

| Kachel | Inhalt |
|---|---|
| **Umsatz** | Umsatz in der gewählten Periode, mit Veränderung zur Vorperiode |
| **Kosten** | Kosten in der gewählten Periode, mit Veränderung zur Vorperiode |
| **Gewinn** | Nettogewinn in der gewählten Periode, mit Veränderung zur Vorperiode |
| **Forderungen** | Offene Rechnungen und Days Sales Outstanding |
| **Liquidität / Runway** | Aktuelle Kassenposition und geschätzte Runway |

Eine Kachel ohne ehrliche Historie zeigt keine Sparkline, statt eine erfundene flache Linie zu zeichnen. Steigende Forderungen erhalten beispielsweise einen nach oben zeigenden Pfeil in Warnfarbe, weil Richtung und Bedeutung getrennt bewertet werden.

## Vandaag-Signale

Die Vandaag-Engine ist die Entscheidungsschicht hinter dem Dashboard. Sie ordnet das, was heute Aufmerksamkeit braucht, nach vier Schweregraden:

- **critical**: Geld läuft ab oder eine harte Deadline rückt näher
- **attention**: eine konkrete Aufgabe, heute oder diese Woche
- **upcoming**: datiert, aber noch nicht dringend
- **good**: verdiente positive Nachrichten

Jedes Signal ist eine Karte mit einem Befund, einer Zeile Erklärung, warum es wichtig ist, Belegkennzahlen und einer Aktion. Mögliche Aktionen sind:

- ein Link zur passenden Seite
- automatische Mahnungen aktivieren
- eine Mahnung zu einer bestimmten Rechnung senden
- das Signal schließen

Signale können snoozed werden. Die Karte verschwindet sofort; schlägt der Server-Call fehl, kommt sie zurück und Sie erhalten eine Erklärung. Nach jeder erfolgreichen Aktion wird die Liste neu geladen, damit die Reihenfolge stimmt.

Die Engine ist deterministisch. Kein Modell ist an der Erzeugung der Signale beteiligt, sodass die Seite auch bei ausgefallener KI-Ebene voll nutzbar bleibt.

## Unterstützende Blöcke

Die Blöcke unter der KPI-Zeile erscheinen nur, wenn sie ihre Stelle verdient haben. Der Katalog entscheidet sowohl, ob ein Block angezeigt wird, als auch welche Form er annimmt.

| Block | Inhalt |
|---|---|
| **Trend** | 12-Monats-Chart mit Umsatz und Kosten nebeneinander plus Gewinnlinie |
| **Aufmerksamkeit** | Wichtigste offene Punkte, die Aktion erfordern, aus der Signalmotor |
| **Ageing** | Forderungen nach Altersgruppen aufgeteilt |
| **Umsatzquellen** | Größte Kunden nach Umsatz in diesem Jahr |
| **Angebote** | Offene Angebotspipeline und ablaufende Angebote |
| **Ausgabenmix** | Kostenaufschlüsselung nach Kategorie, als Balken oder Treemap je nach Platz |
| **Cash-Chart** | Kassenposition über 12 Monate mit Prognose |
| **Aktivität** | Kürzlich erstellte oder bezahlte Rechnungen und hinzugefügte Ausgaben |
| **MwSt.-Karte** | Aktueller MwSt.-Zeitraum, Checklist-Fortschritt und nächste Deadline |

Auf Telefonen fallen visuelle Formen wie Treemaps oder Funnels auf einfachere Darstellungen zurück, damit die Zahlen lesbar bleiben.

## Willkommensbildschirm

Bei einem brandneuen Account ohne Rechnungen oder Kunden zeigt das Dashboard einen Willkommensbildschirm statt der vollständigen Übersicht. Er weist auf drei erste Schritte hin: Rechnung erstellen, Kunde hinzufügen oder Ausgabe erfassen. Sobald mindestens eine Rechnung oder ein Kunde existiert, verschwindet der Willkommensbildschirm und das vollständige Dashboard nimmt seinen Platz ein.

## Lade- und Fehlerzustände

Während Daten geladen werden, zeigt ein Skeleton-Placeholder die Form jedes Blocks. Ein verborgener Timeout von 2,5 Sekunden verhindert, dass der Skeleton einen Benutzer bei langsamer Verbindung festschreibt. Die Media Query `prefers-reduced-motion: reduce` schaltet alle Eintrittsanimationen aus.

Schlägt der Abruf von Vandaag fehl, zeigt die Seite einen klaren Fehler mit einem Wiederholen-Button, statt ein All-Clear aus leeren Daten zu konstruieren. Misslingt ein Periodenwechsel, während ältere Zahlen noch auf dem Bildschirm stehen, erscheint ein Hinweis auf veraltete Daten mit inline Wiederholen-Button.

## Setup-Banner

Solange der Setup-Assistent unter `/setup` noch auszufüllende Felder hat, zeigt ein Banner über dem Dashboard die Anzahl ausstehender Felder und einen Button **Setup fortsetzen**. Das Banner lässt sich pro Browser über localStorage schließen und bleibt verborgen, bis der Assistent abgeschlossen ist. Der Assistent ist nicht blockierend: neue Registrierungen landen direkt auf `/dashboard`.

## Siehe auch

- [Dashboard nutzen](/de/faq/use-dashboard)
- [Berichte](/de/features/reports)
- [Kunden](/de/features/customers)
- [Rechnungen](/de/features/invoices)
- [MwSt.](/de/features/vat)
