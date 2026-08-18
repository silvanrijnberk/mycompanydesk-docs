---
title: Dashboard
last_verified: 2026-08-18
---

# Dashboard

Das Dashboard unter `/dashboard` ist die Startseite Ihres Arbeitsbereichs. Es beantwortet eine Frage: Wie steht Ihr Unternehmen gerade da? Sie sehen eine Periodenauswahl, eine Reihe mit fünf KPI-Kacheln, ein kurzes Aufmerksamkeits-Widget und mehrere Datenblöcke, die nur erscheinen, wenn Ihre Unternehmensdaten zeigen, dass sie nützlich sind.

## Aufbau

Die Seite besteht aus einem festen Katalog von Blöcken in einer einzigen scrollbaren Ansicht. Die Reihenfolge ändert sich nie, aber ein Block wird nur angezeigt, wenn Ihre Daten die Schwelle erreichen. Ein einfacheres Unternehmen sieht also eine kürzere Seite, keine leeren Platzhalter.

Oben befinden sich die Periodenauswahl und die KPI-Reihe. Darunter folgt das Aufmerksamkeits-Widget, gefolgt von unterstützenden Blöcken wie Trenddiagramm, Ageing, Umsatzquellen, Angebotspipeline, Ausgabenmix, Cash-Diagramm, Mehrwertsteuer-Karte und aktueller Aktivität.

## Periodenauswahl

Alle Zahlen in der KPI-Reihe und in den Tempo-Berechnungen folgen der gewählten Periode. Sie wählen zwischen **Monat**, **Quartal** und **Jahr**. Der Trendchart bleibt immer bei 12 Monaten, damit der Vergleich ehrlich bleibt.

## KPI-Reihe

Die KPI-Reihe zeigt immer fünf Kacheln. Jede Kachel zeigt eine Hauptzahl, einen Vergleich mit der vorherigen vergleichbaren Periode, sofern ein ehrlicher Vergleich möglich ist, und einen kleinen Trendverlauf. Die Kacheln verlinken zum passenden Bericht oder zur passenden Liste.

| Kachel | Was Sie sehen |
|---|---|
| **Liquidität** | Aktuelle Cash-Position, entweder aus einem verbundenen Bankkonto oder einem geschätzten Saldo, plus Runway in Wochen |
| **Forderungen** | Offene Rechnungen, wobei der überfällige Anteil ausgewiesen wird |
| **Umsatz** | Umsatz in der gewählten Periode und das Tempo für die volle Periode, mit Veränderung zur vorherigen vergleichbaren Periode |
| **Verbindlichkeiten** | Geld, das Sie noch auszahlen müssen, wobei der überfällige Anteil ausgewiesen wird |
| **Gewinn** | Nettogewinn in der gewählten Periode, mit Marge, wenn sie berechnet werden kann |

Eine Kachel ohne ehrliche Historie zeigt keinen Trendverlauf anstelle einer erfundenen flachen Linie. Die Farbe eines Delta-Abzeichens folgt der Bedeutung, nicht nur der Richtung: Steigende Forderungen sind schlechte Nachrichten, auch wenn der Pfeil nach oben zeigt.

## Aufmerksamkeits-Widget

Das Aufmerksamkeits-Widget wird von der Vandaag-Signalmotor gespeist. Es zeigt bis zu vier Aufgaben, die jetzt oder in dieser Woche bearbeitet werden müssen. Jede Zeile zeigt einen Schweregrad-Punkt, einen kurzen Titel und einen Link zum Datensatz. Das Widget zeigt nur Aufgaben; es enthält nicht die vollständige priorisierte Liste, die Beweiszahlen oder die Aktionsknöpfe. Die vollständige Liste befindet sich im Benachrichtigungsbereich.

Der Vandaag-Motor ordnet Signale in vier Schweregrad-Stufen:

- **critical**: Geld entweicht oder eine harte Frist rückt näher
- **attention**: eine konkrete Aufgabe, heute oder diese Woche
- **upcoming**: terminiert, aber noch nicht dringend
- **good**: positive Nachrichten, die Sie verdient haben

Der Motor ist deterministisch. Kein Modell ist an der Erzeugung der Signale beteiligt, sodass die Seite nützlich bleibt, wenn die KI-Schicht ausfällt.

## Unterstützende Blöcke

Die Blöcke unter der KPI-Reihe erscheinen nur, wenn sie sich ihren Platz verdienen. Der Katalog entscheidet sowohl, ob ein Block angezeigt wird, als auch welche Form er annimmt.

| Block | Inhalt |
|---|---|
| **Trend** | 12-Monats-Diagramm mit Umsatz und Kosten nebeneinander, plus Gewinnlinie |
| **Ageing** | Forderungen nach Altersgruppen aufgeteilt |
| **Umsatzquellen** | Größte Kunden nach Umsatz im laufenden Jahr |
| **Angebote** | Offene Angebotspipeline und auslaufende Angebote |
| **Ausgabenmix** | Kostenaufschlüsselung nach Kategorie, als Balken oder Treemap je nach Platz |
| **Cash-Diagramm** | Cash-Position über 12 Monate mit Prognose |
| **Aktivität** | Kürzliche Rechnungs-, Zahlungs- und Ausgaben-Ereignisse |
| **Mehrwertsteuer-Karte** | Aktueller Mehrwertsteuer-Zeitraum, Checklist-Fortschritt und nächste Frist |

Auf Telefonen fallen große visuelle Formen wie Treemaps oder Funnels auf einfachere Formen zurück, damit die Zahlen lesbar bleiben.

## Erstnutzung-Bildschirm

Ein brandneuer Arbeitsbereich ohne Rechnungen oder Kunden landet auf einem ruhigen Erstnutzung-Bildschirm anstelle des vollen Dashboards. Er bietet eine klare Aktion: Erstellen Sie Ihre erste Rechnung. Ein kleines Entdeckungspanel lädt außerdem ein, Rechnungslayout, Website oder Kontosicherheit anzupassen. Das Schließen des Panels verbirgt nur das Panel; das Senden Ihrer ersten Rechnung beendet den Erstnutzung-Bildschirm. Sie können den Bildschirm auch mit der Option **Mein Dashboard anzeigen** überspringen.

## Erste-Schritte-Karte

Solange die Setup-Checkliste noch offene Schritte hat, erscheint eine fixierte Karte über dem Dashboard. Sie listet die offenen Schritte auf und bietet einen Link zurück zum Setup-Assistenten. Das Schließen wird server-seitig gespeichert, sodass die Karte auf all Ihren Geräten verborgen bleibt. Der Assistent ist nicht blockierend: Neue Nutzer landen direkt auf `/dashboard`.

## Laden und Fehlerzustände

Während das Dashboard entscheidet, ob dies ein Arbeitsbereich zur Erstnutzung ist, und das Briefing lädt, spiegelt ein Skeleton die endgültige Form der Seite. Wenn das Laden von Vandaag fehlschlägt, zeigt die Seite einen deutlichen Fehler mit einer Wiederholen-Schaltfläche anstelle einer alles-klar-Meldung aus leeren Daten. Schlägt ein Periodenwechsel fehl, während ältere Zahlen noch auf dem Bildschirm stehen, erscheint eine veraltet-Meldung mit einer inline Wiederholen-Schaltfläche.

## Siehe auch

- [Dashboard nutzen](/de/faq/use-dashboard)
- [Berichte](/de/features/reports)
- [Kunden](/de/features/customers)
- [Rechnungen](/de/features/invoices)
- [Mehrwertsteuer](/de/features/vat)
