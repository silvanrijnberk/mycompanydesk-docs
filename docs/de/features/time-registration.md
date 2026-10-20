---
title: Zeitplan
description: "Erfassen Sie Stunden, planen Sie Ihre Tage und machen Sie abrechenbare Zeit zu Rechnungen. Zeitplan verbindet Zeiterfassung mit Ihrem Kalender."
last_verified: 2026-10-01
---

# Zeitplan

Erfassen Sie Arbeitsstunden, planen Sie Ihre Tage und verwandeln Sie abrechenbare Zeit in Rechnungen. Die Seite **Zeitplan** in der Seitenleiste verbindet Zeiterfassung mit einer Agenda: Sie sehen den Plan für heute, geplante Einträge neben erfassten Stunden und Vorschläge aus Ihren verbundenen Kalendern, alles an einem Ort.

## Die Seite im Überblick

Wechseln Sie mit der Auswahl oben zwischen vier Ansichten (auf Mobilgeräten wischen Sie zwischen Zeiträumen):

- **Tag**: der Plan und die erfassten Stunden von heute. Je nach Einstellung sehen Sie eine Zeitleiste oder eine kompakte Liste, mit geplanten Einträgen getrennt von erfassten. Termine aus verbundenen Kalendern erscheinen neben Ihren Einträgen und lassen sich mit einem Tipp in Zeiteinträge umwandeln, und Sie erhalten Vorschläge auf Basis Ihrer letzten Aktivität.
- **Woche**: auf dem Desktop ein Sieben-Tage-Planer, in dem gefüllte Blöcke erfasste Stunden sind und schraffierte Blöcke geplante; klicken Sie auf ein leeres Feld, um einen Eintrag anzulegen. Auf Mobilgeräten eine Zusammenfassung pro Tag zum Antippen.
- **Monat**: Summen pro Tag; wählen Sie einen Tag, um dorthin zu springen.
- **Liste**: eine durchsuchbare Tabelle aller Einträge mit Filtern für Rechnungsstatus, Kunde, Projekt und Fahrten, plus Summen für die aktuelle Auswahl.

Stunden zählen sofort als gearbeitet. Einen Bestätigungsschritt und die Schalter für das automatische Bestätigen gibt es nicht mehr, nichts wartet auf Ihre Buchhaltung: ein Eintrag gehört ab dem Moment zu Ihren gearbeiteten Stunden, in dem er existiert, und in einem Workspace mit Team gilt dasselbe.

Zeit, die Sie für einen Tag einplanen wollen, der noch kommt, geht über das Formular **Stunden für {Datum}**: über **Stunden erfassen** halten Sie sie fest, und das Formular sagt, dass es erst ab diesem Datum mitzählt, dann abrechnungsbereit. Nichts zu bestätigen. Legen Sie an einem künftigen Tag außerhalb dieses Wegs einen Eintrag an, weist die App darauf hin: diese Stunden zählen sofort als gearbeitet, es sei denn, Sie markieren sie am Eintrag selbst als **Vorläufige Erfassung**; das ist der einzige Weg, Zeit außerhalb der gearbeiteten Stunden zu halten, und nur für heute oder ein späteres Datum möglich. Vorläufige Einträge erscheinen in der Tages- und Wochenansicht getrennt von den erfassten.

Summen zählen nur Stunden, die als gearbeitet erfasst sind. Vorläufige Einträge für einen Tag, der noch kommt, bleiben außerhalb der Stundensummen im Dashboard, in den Berichten (**Erfasste Stunden**), unter **Arbeit & Zeit** und außerhalb der automatischen Abrechnung, bis der Tag vorbei ist; das Seitenpanel nennt diese Grundlage. Die Anzeige zum Stundenkriterium für die Einkommensteuer rechnet mit einer eigenen Grundlage, die unter der Anzeige steht: nur Ihre eigenen gearbeiteten Stunden plus Reisezeit, daher darf diese Zahl von den Summen hier abweichen.

## Zeit erfassen

### Timer

Auf Mobilgeräten enthält die Tagesansicht einen Timer: Starten Sie ihn, wenn Sie mit der Arbeit beginnen, und stoppen Sie ihn, um die verstrichene Zeit als Eintrag zu erfassen.

### Manuelle Einträge

1. Klicken Sie auf **Eintrag hinzufügen** (Tastenkürzel A, oder die + Schaltfläche auf Mobilgeräten)
2. Der Schnelleingabe-Dialog öffnet sich: Wählen Sie den Kunden und optional ein Projekt, geben Sie Ihre Stunden ein und passen Sie bei Bedarf Beschreibung und Stundensatz an
3. Geben Sie die Zeit als Gesamtstunden ein oder wechseln Sie zu Start- und Endzeit
4. Speichern Sie den Eintrag

Ein Eintrag umfasst einen Tag und darf höchstens 24 Stunden lang sein; verteilen Sie Ihre Woche auf mehrere Tage.

### Standard-Zeilenbeschreibung

Beim Hinzufügen eines Zeiteintrags wird das Beschreibungsfeld automatisch aus Ihren Standard-Zeilenbeschreibungen vorausgefüllt. Das System prüft in dieser Reihenfolge:

1. Die Standard-Zeilenbeschreibung des Projekts
2. Die Standard-Zeilenbeschreibung des Kunden
3. Den Arbeitsbereichs-Standard

Ihre eigene Eingabe wird nie überschrieben. Sobald Sie eine eigene Beschreibung eingeben, ersetzt der vorausgefüllte Wert diese nicht mehr.

### Nur-Stunden-Modus

Möchten Sie lieber nur eine Tagessumme erfassen? Aktivieren Sie **Nur Stunden Modus** in den Kalendereinstellungen. Er blendet die Zeitleiste und die Eingaben für Start- und Endzeit aus, sodass Sie nur die Gesamtstunden pro Tag eintragen. Stundensatz und Abrechenbar-Feld bleiben verfügbar.

## Ihre Stunden abrechnen

Der für jeden Zeiteintrag angezeigte Satz ist der **effektive Stundensatz** dieses Eintrags. Hat der Eintrag einen eigenen Stundensatz, wird dieser verwendet; andernfalls fällt er auf den Projektsatz zurück, dann auf den Kundensatz und schließlich auf den Arbeitsbereichs-Standard. Der Betrag einer Rechnungszeile spiegelt also immer den tatsächlichen mit dem Eintrag gespeicherten Satz wider.

Der Eintrag selbst zeigt an, welcher Satz das wird. Hat der Eintrag keinen eigenen Stundensatz? Dann steht dort **Stundensatz des Projekts**, und die Summen in der Liste rechnen für diese Einträge ebenfalls mit dem Projektsatz. Wurde ein Eintrag einmal abgerechnet, zeigt er den Satz, der tatsächlich abgerechnet wurde: den Satz auf der Rechnungszeile, nicht was das Projekt heute rechnet. Im Bearbeitungsdialog erscheint bei leerem Satz ein Hinweis, dass die Rechnung den Projektsatz verwendet.

### Eine Rechnung von der Zeitplan-Seite erstellen

Wenn nicht abgerechnete Einträge vorliegen, klicken Sie auf **Rechnung erstellen**. Ein Dialog öffnet sich, in dem Sie einen Kunden wählen; er listet alle nicht abgerechneten Einträge dieses Kunden mit ihrer Summe. Bestätigen Sie, und es entsteht ein Rechnungsentwurf mit einer Zeile pro Eintrag. Abrechenbare Reisezeit und Reisekosten, die mit diesen Einträgen verknüpft sind, werden als separate Zeilen hinzugefügt.

### Einzelne Einträge im Rechnungsformular wählen

Möchten Sie nur einen Teil der Einträge abrechnen? Erstellen oder bearbeiten Sie direkt eine Rechnung: Das Rechnungsformular hat einen Zeitbereich, der die nicht abgerechneten Einträge des gewählten Kunden auflistet, sodass Sie genau auswählen, welche Sie übernehmen.

### Zeilenbeschreibungen auf der Rechnung

Rechnungszeilen werden automatisch beschrieben: zuerst die Beschreibung des Eintrags selbst, sonst der Projektname, sonst der Zeitraum. Eine Beschreibungsvorlage pro Kunde (auf der Kundenseite eingestellt) hat Vorrang vor diesem Format.

### Automatische Zeitabrechnung

Das automatische Abrechnen regeln Sie pro Projekt. Auf einer Projektseite wählen Sie, wie die Stunden dieses Projekts abgerechnet werden:

- **Manuell** (die Voreinstellung): Sie erstellen die Rechnung selbst aus den Stunden des Projekts.
- **An einem festen Tag**: Sie wählen den Rhythmus für das Projekt: jede Woche an einem Wochentag oder jeden Monat an einem Tag des Monats. Die Stunden, die bis einschließlich des vorigen Rechnungstags erfasst sind, gehen ergänzt um die weiterberechneten Ausgaben in einer Rechnung an den Kunden des Projekts. Der Monat rechnet am gewählten Tag ab, bis zum 28., oder am letzten Tag des Monats, damit kurze Monate nicht überspringen.
- **Beim Abschluss**: Markieren Sie das Projekt als abgeschlossen, geht alles, was noch offen ist, in eine Schlussrechnung für den Kunden.

Fällt das Projekt unter einen Vertrag, der selbst fakturiert, entscheidet dieser Vertrag, und die Projektseite sagt Ihnen das auch; einem solchen Projekt geben Sie keinen eigenen Rhythmus.

Auf der Kundenseite bündelt die Karte **Automatische Abrechnung** alles: jedes Projekt dieses Kunden mit seiner Wahl, einen Schalter für Stunden ohne Projekt und Ihren Versandwunsch:

- **Vorbereiten**: Die Rechnung wird für Sie erstellt, Sie erhalten eine Mitteilung und versenden sie selbst.
- **Automatisch versenden**: Die Rechnung wird erstellt, Sie erhalten eine Mitteilung, und einen Tag später geht sie von selbst an den Kunden. Während dieses Tages können Sie sie noch zurückhalten; eine zurückgehaltene Rechnung bleibt einfach in der App liegen.

Alles, was für denselben Kunden zum selben Moment fällig wird, landet auf einer Rechnung, es sei denn, ein Projekt möchte eine eigene. Stunden ohne Projekt schließen sich an diese Rechnung an, wenn der Schalter auf der Kundenkarte aktiv ist; ihren Tag stellen Sie dort mit derselben Auswahl ein, die die Projekte auch nutzen. Die erste automatische Rechnung versenden Sie am besten selbst, damit Sie einmal sehen, wie sie aussieht; die Karte wiederholt das bei der ersten Rechnung ebenfalls.

Alles Ungewöhnliche hält den automatischen Versand zurück: ein Kunde ohne E-Mail-Adresse, Stunden ohne Satz, ein Betrag, der spürbar über den Vormonaten liegt, oder eine Rechnung, die einen längeren Zeitraum umfasst, weil das automatische Abrechnen eine Zeit still stand. Diese Rechnungen werden nur vorbereitet, und die Mitteilung sagt Ihnen, warum.

Ausgaben fließen nur mit, wenn die Ausgabe selbst auf [dem Kunden weiterberechnen](/de/features/expenses#weiterberechnung-und-kostenanderungen) steht.

Das automatische Abrechnen gehört zum Office-Abonnement. In Desk pausiert es, bis Sie wieder Office nutzen; die Karte und die Mitteilung sagen Ihnen das. Automatische Rechnungen verwenden den Standard-Mehrwertsteuersatz Ihres Arbeitsbereichs und berücksichtigen Ihre KOR- oder Mehrwertsteuerbefreiungseinstellungen, genau wie manuell erstellte Rechnungen.

## Massenaktionen

Wählen Sie mehrere Einträge in der Listenansicht aus (langes Drücken auf Mobilgeräten), um sie auf einmal zu bearbeiten. Während der Auswahl steht eine Spalte mit Häkchen in der Liste, und ein Tipp auf die Zeile selbst setzt das Häkchen; außerhalb der Auswahl gibt es keine Häkchenspalte.

- **Als abrechenbar markieren** oder **Als nicht abrechenbar markieren**
- **Archivieren**
- Löschen

## Externen Kalender verbinden

Verbinden Sie Google Kalender oder Outlook Kalender, um Agenda und Stunden zusammenzubringen. Öffnen Sie die Kalendereinstellungen über **Einstellungen** › **Zeiterfassung & Kalender** oder das Zahnrad auf der Zeitplan-Seite, und wählen Sie **Kalender verbinden (Google oder Outlook)**. Sie können auch direkt zur Seite mit den verbundenen Kalendern gehen. Dort können Sie:

- **Google Kalender** oder **Outlook Kalender** verbinden
- Die Synchronisation pro Verbindung mit **Synchronisation aktivieren** einschalten
- Die **Synchronisationsrichtung** wählen: **Zum Kalender** (Ihre erfassten Stunden erscheinen in Ihrem Kalender), **Vom Kalender** (Ihre Termine erscheinen auf der Zeitplan-Seite, bereit zum Erfassen) oder **Beides**
- Einen schreibgeschützten **Kalender-Abonnement (iCal)** Feed aktivieren, um Ihre erfassten Stunden aus jeder Kalender-App zu verfolgen

Termine aus einem verbundenen Kalender erscheinen in der Tages- und Wochenansicht; tippen Sie darauf, um daraus einen Zeiteintrag zu machen.

## Online-Termine und Stunden

Termine, die Kunden über den Terminblock auf Ihrer Website buchen, werden nach Freigabe automatisch in Ihren Kalender übernommen. Ein bestätigter Online-Termin zählt zugleich als erfasste Stunden im Zeitplan, sodass Sie ihn nicht separat erfassen müssen. Diese Stunden sind über den Zeitplan **nicht abrechenbar**; der Umsatz des Termins wird separat über den Termin selbst in Rechnung gestellt. Siehe [Online-Termine](/de/features/site-bookings) für das Einrichten Ihrer buchbaren Zeiten.

## Einstellungen

Die Kalendereinstellungen finden Sie unter **Einstellungen** › **Zeiterfassung & Kalender** oder über das Zahnrad auf der Zeitplan-Seite. Hier konfigurieren Sie:

- **Eingabeverhalten**: **Nur Stunden Modus**
- Die auf der Zeitleiste sichtbaren Arbeitszeiten
- Den **Standard-Stundensatz** und die **Zeitrundung** (Administratoren)
- **Fahrten zu Kunden**: Adressen, Standard-Verkehrsmittel, Auto (privat oder Firmenwagen) und Kilometersatz
- Einen Link zum Verbinden eines externen Kalenders

Bei einer Fahrt im Eintragsformular können Sie Ihren aktuellen Standort als Startpunkt nutzen, wenn Ihr Gerät das zulässt.

## Tipps

- Erfassen Sie Ihre Stunden täglich für genaue Aufzeichnungen; mit den Vorschlägen erfassen Sie wiederkehrende Arbeit mit einem Tipp erneut
- Halten Sie Zeit für kommende Tage als vorläufige Einträge fest; sie gehen von selbst in gearbeitete Stunden über
- Prüfen Sie regelmäßig Ihre nicht abgerechnete Zeit, damit keine abrechenbaren Stunden liegen bleiben
- Verbinden Sie Ihren Kalender einmal, und Ihre Termine werden automatisch zu erfassbaren Einträgen
