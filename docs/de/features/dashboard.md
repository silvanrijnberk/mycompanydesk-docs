---
title: Dashboard
description: "Der Startbildschirm Ihres Arbeitsbereichs zeigt, was jetzt Aufmerksamkeit braucht, das Geld und eine Karte pro Modul; die tiefen Zahlen auf Kennzahlen."
last_verified: 2026-09-30
---

# Dashboard

Das Dashboard unter `/dashboard` ist der Startbildschirm Ihres Arbeitsbereichs. Es ist eine einzige Seite (intern nennen wir sie **Mijn bedrijf**, mein Geschäft), auf der das Geld steht, die Teile Ihres Geschäfts, die um Aufmerksamkeit bitten, und alles, was Sie noch einschalten können. Jede Zahl stammt aus Ihren eigenen Daten, von heute, ohne einen zweiten Schritt danach.

Dahinter liegt eine zweite Seite: **Kennzahlen** (`/cijfers`), die Analyseansicht mit den KPI-Kacheln, dem Trenddiagramm, der Alterung und den tieferen Zahlen, die bisher auf dem Dashboard standen. Die Geldkarte verlinkt dorthin, und in der Seitenleiste gibt es einen eigenen Eingang **Kennzahlen**.

## Jetzt erledigen

Oben sitzt **Jetzt erledigen**: eine Liste dessen, was jetzt Ihre Aufmerksamkeit braucht, und jeder Eintrag trägt seine eigene Schaltfläche, sodass eine Rechnung von dort verschickt wird. Die Liste zeigt nichts, das nicht stimmt; typische Einträge:

- Eine Rechnung, die nie verschickt wurde, oder eine Rechnung im Entwurf, mit dem Betrag dazu
- Überfällige Rechnungen, mit einer Erinnerungsaktion
- Die Umsatzsteuererklärung und ihre Frist
- Anfragen, die auf ein Angebot warten, und Angebote, die stillstehen
- Bankzeilen, die noch zugeordnet werden müssen
- Eine Buchungsagenda, die auf einer Site ohne Besucher sitzt
- Eine Website, die offline ist, während noch Besucher kommen, oder Änderungen, die noch nicht online stehen

Läuft Ihre Probezeit bald ab, steht das zuerst, über allem, als einziger Eintrag mit einer harten Frist.

Eine Regel hält diese Liste frei von Rauschen: **Te laat** (überfällig) zählt nur, wenn MyCompanyDesk Ihre Zahlungen kennt. Eine Zahlung, die in den letzten sechs Monaten als bezahlt registriert wurde, zeigt, dass Ihre Bücher mitgeführt werden; eine Bankanbindung oder Onlinezahlung allein tut es nicht, denn eine Anbindung, die niemand abzeichnet, oder Onlinezahlungen, die an bleiben, während Kunden überweisen, würde jede Rechnung als überfällig melden. Rechnungen kommen nur dann als überfällig in diese Liste, wenn dieses Signal da ist.

## Die Geldkarte

Neben **Jetzt erledigen** steht die Geldkarte mit den vier Zahlen, die auf einen Blick beantworten, wie es um das Geschäft steht:

- **Frei verfügbar**: Ihr Banksaldo, abzüglich der USt-Rückstellung und Ihrer Fixkosten pro Monat
- **Auf der Bank**: der Saldo Ihrer Geschäftskonten
- **Noch zu erhalten**, mit dem überfälligen Teil erwähnt
- **Umsatz pro Monat**

Die Rückstellung folgt derselben Quartalslogik wie die USt-Karte, sodass Monatsmelder und frühe Einreicher nicht den falschen Betrag aus dem Blick verlieren. Der Saldo zählt Ihre Geschäftskonten; ein verknüpftes Privatkonto bleibt außen vor. Ein Link unter der Karte öffnet die vollständige **Kennzahlen**-Ansicht.

## Eine Karte pro Modul

Jeder Teil des Geschäfts, der läuft, um Aufmerksamkeit bittet oder halb eingerichtet ist, bekommt seine eigene Karte auf der Seite. Jede Karte trägt:

- den **Status**: Läuft, Achtung, Teilweise eingerichtet (als „2 von 4 erledigt"), Noch nicht genutzt oder Nicht ladbar
- ein **Highlight aus einem Satz** aus eigenen Daten: die nächste automatische Rechnung, die USt-Einschätzung, den Saldoverlauf, Ihren neuesten Kunden oder die Besucher auf Ihrer Site
- einen **Grundsatz mit eigener Schaltfläche**, wo die Karte um Aufmerksamkeit bittet

Jede Karte liest ihre eigene Quelle: die Websitekarte zeigt Besucher und Aufrufe (den Entwurf, solange Sie bauen, die Live-Site nach der Veröffentlichung), die Kundenportalkarte zeigt, was Ihre Kunden in den letzten 30 Tagen mit Ihren Angeboten und Rechnungen getan haben, die Bewertungskarte zeigt Ihre Note, die Bankkarte den Saldo-Verlauf und, was noch zuzuordnen ist, die Kalenderkarte Ihre ersten anstehenden Termine. So lesen Sie den Stand des ganzen Geschäfts, ohne jeden Teil einzeln zu öffnen.

Bereiche, die laufen, ohne eigene Karteninhalte zu haben, bekommen keinen leeren Platz: Sie stehen namentlich unter **Alle Bereiche**, damit das Raster nur Karten mit etwas darstellt.

## Richten Sie das ein

Was Sie noch nicht gestartet haben, kommt unter **Richten Sie das ein** herein: höchstens drei nächste Schritte, jeder mit einem Grund aus Ihren eigenen Daten („8 Rechnungen sind offen. Mit einem Zahlungsbutton in der E-Mail zahlen Ihre Kunden sofort."), einer kurzen Minutenschätzung und einem Rückgängigmachen für den, der einen Schritt wegklickt. Die Schritte werden live aus Ihren Daten gelesen, nicht aus einer festen Checkliste: ein fertiger Schritt schließt sich selbst, und die Liste bleibt synchron mit der Wirklichkeit.

Die Banner, die früher über dem Dashboard standen, sind weg; jede Aufforderung sitzt jetzt dort, wo sie hingehört:

- eine Probezeit, die bald ausläuft, ist die erste Zeile in **Jetzt erledigen**
- die Sicherheit Ihres Kontos, eine Zahlungsmethode, Push-Mitteilungen und die Gratisdomain erscheinen als Schritte unter **Richten Sie das ein**
- Produktneuigkeiten und der Link zur App bilden unten eine kompakte Zeile

Hatten Sie so ein Banner schon weggeklickt, bleibt es weg: die Bedingungen und die Speicherschlüssel sind dieselben.

## Alle Bereiche

Unter den Karten liegt die Liste **Alle Bereiche**: alles, was schon läuft, ohne eine eigene Karte, und alles, was noch nicht in Gebrauch ist, als eine übersichtliche Liste.

- Mit dem Kreuz schalten Sie einen Bereich aus, mit demselben Schalter wie unter **Einstellungen → Module**. Ein ausgeschalteter Bereich verschwindet auch aus der Seitenleiste, damit Menü und Seite dieselbe Geschichte erzählen, und kommt über die Liste unten zurück.
- Teilt ein Bereich seinen Schalter mit einem anderen, werden beide zusammen aus- und eingeschaltet.
- Ein Bereich, den Ihr Plan nicht einschließt, bleibt sichtbar, mit dem Plan genannt, der ihn freischaltet, damit Sie wissen, dass es ihn gibt.

## Erster Besuch

Ein neuer Arbeitsbereich erhält dieselbe Seite, denn die Einrichtung passiert dort: einen separaten Erstbesuchs-Bildschirm gibt es nicht mehr. **Richten Sie das ein** setzt **Erste Rechnung** nach oben, solange noch keine Rechnung verschickt wurde. Die alte Startcheckliste, deren Aufgaben einmal schlossen, nie wieder öffneten und langsam aus dem Takt gerieten, ist weg. Die App-Zeile bleibt still, bis Ihre erste Rechnung verschickt ist, sodass ein neuer Arbeitsbereich nicht um die App gebeten wird, bevor überhaupt etwas raus ist.

## Für Buchhalter

Ein Buchhalter, der in den Büchern eines Kunden mitliest, sieht das Dashboard, wie der Kunde es erlebt: die laufenden Bereiche und was dort um Aufmerksamkeit bittet. Setupschritte, die Modulschalter und Produktneuigkeiten entfallen; die Einrichtung ist das Werk des Inhabers, nicht das des Buchhalters.

## Kennzahlen: die Analyseansicht

Die tieferen Zahlen des alten Dashboards stehen hier, unverändert umgezogen. Die Seite ist eine einzelne scrollbare Ansicht; ein Baustein erscheint nur, wenn Ihre Daten ihn hergeben.

## Periodenauswahl

Alle Zahlen in der KPI-Reihe und in den Tempoberechnungen folgen der gewählten Periode. Sie wählen zwischen **Monat**, **Quartal** und **Jahr**. Das Trenddiagramm bleibt immer 12 Monate breit, damit der Vergleich ehrlich bleibt.

## KPI-Reihe

Die KPI-Reihe zeigt immer fünf Kacheln. Jede Kachel zeigt eine Hauptzahl, einen Vergleich mit der vorherigen vergleichbaren Periode, wenn ein ehrlicher Vergleich möglich ist, und eine kleine Trendlinie. Kacheln verlinken durch zum zugehörigen Bericht bzw. zur zugehörigen Liste.

| Kachel | Was Sie sehen |
|---|---|
| **Kasse** | Aktuelle Kassenposition, aus einem verknüpften Bankkonto oder einem geschätzten Saldo, plus Runway in Wochen |
| **Forderungen** | Offene Rechnungen, mit dem überfälligen Teil besonders benannt |
| **Umsatz** | Umsatz über die gewählte Periode und das Tempo für die ganze Periode, mit Veränderung gegenüber der vorherigen vergleichbaren Periode |
| **Verbindlichkeiten** | Geld, das Sie noch auszahlen müssen, mit dem überfälligen Teil besonders benannt |
| **Gewinn** | Nettogewinn über die gewählte Periode, mit Marge, wenn sie zu berechnen ist |

### Saldokachel

Die **Kasse**-Kachel zeigt neben Ihrem Saldo, was schon vergeben ist. Das sind zwei Zeilen:

- **Für USt reserviert** - das positive Quartalssaldo, das schon beiseite gelegt sein sollte
- **Fixkosten pro Monat** - Ihre monatlichen Fixkosten

Die Schlusszeile zeigt **Frei verfügbar**: was nach diesen Rückstellungen wirksam übrig bleibt. Die USt-Rückstellung nutzt dieselbe Quartalslogik wie die USt-Karte, damit Monatsmelder und frühe Einreicher nicht den falschen Betrag abgezogen sehen.

Der Saldo zählt Ihre Geschäftskonten: ein verknüpftes Privatkonto bleibt außerhalb der Kassenposition und der Kassenprognose. Abhebungen dort, die geschäftliche Ausgaben sein können, werden getrennt benannt in den Zeilen zum Verarbeiten, damit die Zahl hier mit der Bank im Rechnungswesen und der Markierung auf Transaktionen übereinstimmt.

Eine Kachel ohne ehrliche Historie zeigt keine Trendlinie, statt eine erfundene flache Linie zu zeichnen. Die Farbe einer Delta-Kachel folgt der Bedeutung, nicht nur der Richtung: steigende Debitoren sind schlechte Nachricht, auch wenn der Pfeil nach oben zeigt.

Die KPI-Reihe zeigt Kassenbewegungen; die Kachel **Gewinn** und der Trendbaustein rechnen in einer Gewinn-und-Verlust-Sicht. Darin stehen Ausgaben ohne USt, laufen Investitionen über ihren Abschreibungsplan und bleiben Entwürfe, die noch in Prüfung liegen, außen vor. Nutzen Sie den G&V-Bericht, wenn Sie dieselbe Gewinnzahl als detaillierten Bericht wünschen.

## Für Sie

Der Baustein **Für Sie** ist eine persönliche Aufgaben- und Signaltafel auf dem Dashboard. Er hält die relevantesten Folgeaktionen an einem Ort, ohne das volle Klingpanel oder das Aufmerksamkeitswidget zu ersetzen.

Er gliedert:

- **Alle Aufgaben** - alles, wofür der Arbeitsbereich Aufmerksamkeit verlangt
- **Überfällig** (`{n} überfällig`) - überfällige Rechnungen, Rechnungen oder andere Einträge
- **Heute** (`{n} heute`) - Einträge, die heute fällig sind
- **Offen** (`{n} offen`) - Einträge, die noch warten
- **E-Mails** (`{n} E-Mails`) - ungelesene Gespräche
- **Termine** - bevorstehende Buchungen

Jede Zeile zeigt die Art des Eintrags (Rechnung, Gespräch, Termin und so weiter) und einen direkten Link, um ihn zu öffnen. Gibt es nichts zu tun, zeigt der Baustein "Nichts auf deinem Tisch." Lädt der Überblick nicht, bietet eine Schaltfläche einen neuen Versuch.

## Aufmerksamkeitswidget

Das Aufmerksamkeitswidget wird von der Vandaag-Signalmaschine gespeist. Es zeigt bis zu vier Aufgaben, die heute oder diese Woche eine Aktion verlangen. Jede Zeile zeigt einen Schweregrad-Punkt, einen kurzen Titel und einen Link zum Eintrag. Das Widget zeigt nur Aufgaben; die vollständige gerankte Liste, die Erklärungs-Chips und die Aktionsschaltflächen stehen nicht darin. Diese stehen im Kling-Panel.

Die Vandaag-Maschine ordnet Signale in vier Schweregrade:

- **critical**: Geld läuft weg oder eine harte Frist naht
- **attention**: eine echte Aufgabe, heute oder diese Woche
- **upcoming**: datiert, aber noch nicht dringend
- **good**: verdiente gute Nachricht

Die Maschine ist deterministisch. Kein Modell erzeugt die Signale, sodass die Seite brauchbar bleibt, wenn die KI-Schicht außer Betrieb ist.

### Aktions-Chips

Manche Aufmerksamkeitszeilen tragen einen Aktions-Chip, um zum Beispiel eine Zahlungserinnerung zu schicken. Der erste Tipp auf einen Chip, der eine Bestätigung verlangt, bewaffnet ihn und zeigt **Sicher? Tipp noch einmal**; erst der zweite Tipp führt die Aktion aus. Kommt der zweite Tipp innerhalb von fünf Sekunden nicht, entwaffnet sich der Chip von selbst. So kann ein irrender Tipp nicht aus Versehen eine E-Mail an einen Kunden schicken.

## Ergänzende Bausteine

Die Bausteine unter der KPI-Reihe erscheinen nur, wenn sie ihren Platz verdienen. Der Katalog entscheidet, ob ein Baustein gezeigt wird und welche Form er bekommt.

| Baustein | Inhalt |
|---|---|
| **Trend** | 12-Monats-Diagramm, Umsatz und Kosten nebeneinander, mit der Gewinnlinie |
| **Alterung** | Forderungen nach Altersklassen |
| **Umsatzquellen** | Größte Kunden nach Umsatz im laufenden Jahr |
| **Angebote** | Offene Angebots-Pipeline und ablaufende Angebote |
| **Ausgaben-Mix** | Kostenaufteilung nach Kategorie, als Balken |
| **Kassendiagramm** | Kassenposition über 12 Monate mit Prognose |
| **Aktivität** | Neueste Rechnungs-, Zahlungs- und Ausgaben-Ereignisse |
| **USt-Karte** | Aktuelle USt-Periode, Checklistenfortschritt und nächste Frist |

Auf Handys fallen visuelle Formen auf einfachere Formen zurück, damit die Zahlen lesbar bleiben.

## Laden- und Fehlerzustände

Ein Skeleton zeigt die endgültige Form der Ansicht, sodass die Seite nie unter Ihren Augen verrutscht. Schlägt das Laden von **Mijn bedrijf** fehl, sagt die Seite, was nicht stimmt, und bietet eine Schaltfläche für einen neuen Versuch, statt eines Alles-in-Ordnung aus leeren Daten. Schlägt der Karteninhalt fehl, während der Gesamtauszug gelungen war, fällt jede Karte auf den einen Satz ihres Status zurück. Auf **Kennzahlen** trägt eine Fehler dieselbe Schaltfläche zum neuen Versuch, und ein Periodenwechsel, der danebengeht, während ältere Zahlen auf dem Schirm stehen, zeigt einen Hinweis zur Veraltung mit einer Inline-Schaltfläche zum neuen Versuch. Der Baustein **Für Sie** folgt demselben expliziten Fehler-und-Neuversuch-Verhalten, wenn sein Überblick nicht geladen werden kann.

## Siehe auch

- [Dashboard verwenden](/de/faq/use-dashboard)
- [Berichte](/de/features/reports)
- [Kunden](/de/features/customers)
- [Rechnungen](/de/features/invoices)
- [USt](/de/features/vat)
