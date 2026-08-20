---
title: Arbeitsbereiche
description: "Eine zentrale Seite für alles, was Sie verwalten, eigene Unternehmen und Mandantenbuchhaltungen, ohne eigenes Geld und Mandantengeld zu vermischen."
last_verified: 2026-08-10
---

# Arbeitsbereiche

Die Seite "Arbeitsbereiche" unter `/werkruimtes` ist ein zentraler Ort für alles, was Sie verwalten. Sie ersetzt die ältere Steuerberater-Übersicht und passt sich an Ihre tatsächliche Rolle an: ein Arbeitsbereich, mehrere eigene Unternehmen oder Mandanten-Administrationen.

> **Eigenes Geld und Mandantengeld werden niemals vermischt.** Eigene Unternehmen zusammenzufassen ergibt Sinn, weil das Geld Ihnen gehört. Eine Summe über Mandanten-Administrationen wäre bedeutungslos, deshalb hält die Seite diese strikt getrennt.

## Wo Sie es finden

- Öffnen Sie den Arbeitsbereich-Wechsler in der Seitenleiste und wählen Sie **Arbeitsbereiche verwalten**.
- Derselbe Wechsler befindet sich auch in der Kopfzeile des mobilen Menüs, sodass Sie die Übersicht von jedem Bildschirm aus an derselben Stelle erreichen.
- Die alte URL `/boekhouder` leitet hierhin weiter.
- Der Arbeitsbereich-Wechsler zeigt jetzt oben eine Übersichtszeile. Eigene Unternehmen und Mandanten-Administrationen sind getrennt gruppiert, und sobald Sie mehr als acht Arbeitsbereiche haben, erscheint ein Suchfeld.
- Jede Zeile zeigt das eigene Kennzeichen des Arbeitsbereichs: das Logo oder ein farbiges Initialienfeld. Eigene Unternehmen tragen ihre Farbe; Mandanten-Administrationen bleiben neutral. Der Arbeitsbereich, in dem Sie sich gerade befinden, wird hervorgehoben.

Wenn Sie im Wechsler einen Arbeitsbereich auswählen, wechselt die App jetzt ohne vollständiges Neuladen der Seite. Sie verwirft den Zustand des vorherigen Arbeitsbereichs aus Pinia-Stores und Modul-Caches, bricht laufende Anfragen ab, die nach dem Wechsel eintreffen würden, lädt die Shell neu, damit Navigation und Berechtigungen aktualisiert werden, und leitet Sie anschließend zur Zielseite weiter.

## Die Arbeitsbereiche-Navigation

Die App-Navigation gruppiert jetzt alle Arbeitsbereich-Seiten unter **Arbeitsbereiche**. Die Übersichtsseite bleibt erhalten, und drei neue Seiten kommen hinzu:

- **Agenda** (`/werkruimtes/agenda`) - alle Fristen über alle Ihre Arbeitsbereiche, nach Datum gruppiert.
- **Arbeit** (`/werkruimtes/werk`) - Ihre eigenen offenen Aufgaben plus offene Mandantenanfragen.
- **Kanzlei** (`/werkruimtes/kantoor`) - das Kanzlei-Überblick für Steuerberater, mit eigenen Seiten für Abrechnung und Massenexport.

### Eigentums-Indikator

Jede Arbeitsbereich-Zeile und jedes Element in den neuen Seiten trägt einen kleinen Eigentums-Indikator. Eigene Unternehmen behalten ihre Arbeitsbereich-Farbe; Mandanten-Administrationen bleiben neutral. Sie sehen ihn im Arbeitsbereich-Wechsler, in der Agenda und in der Arbeitsliste, sodass Sie immer wissen, auf welcher Seite der Eigen/Mandant-Grenze eine Zeile steht.

### Agenda (`/werkruimtes/agenda`)

Die Agenda gruppiert alle anstehenden Fristen über alle Ihre Arbeitsbereiche nach Datum. Sie schaut 30 Tage zurück und 90 Tage voraus, sodass eine überfällige Frist aus der letzten Woche noch sichtbar ist. Überfällige Fristen stehen oben. Jede Zeile zeigt den Arbeitsbereich, das Frist-Label und den Eigentums-Indikator. Klicken Sie auf eine Zeile, um in den Arbeitsbereich zu wechseln und die passende Seite zu öffnen.

### Arbeit (`/werkruimtes/werk`)

Die Arbeit-Seite listet offene Arbeit in zwei Blöcken: zuerst Ihre eigenen Unternehmen, dann Mandanten-Administrationen. Das hält die beiden Arten von Arbeit getrennt, denn eigene To-dos und Dinge, auf die Sie von einem Mandanten warten, erfordern verschiedene Aktionen. Jede Zeile zeigt den Arbeitsbereich, die Aufgabe und ein Fälligkeits-Badge. Klicken Sie auf eine Zeile, um in den Arbeitsbereich zu wechseln und die passende Seite zu öffnen; bei einer Mandantenanfrage öffnet sich die Anfrage selbst.

### Kanzlei-Seiten (`/werkruimtes/kantoor/*`)

Wenn Sie eine Steuerberaterkanzlei betreiben, enthält der Bereich Kanzlei drei kanzleieigene Seiten:

- **Kanzlei-Überblick** (`/werkruimtes/kantoor`) - Kanzlei-Mitglieder, offene Mandanteneinladungen, Partner-Teilen-Link und Statistiken, sowie ob kostenloses Pro gewährt wurde.
- **Abrechnung** (`/werkruimtes/kantoor/facturatie`) - bieten Sie an, das Abonnement einer Mandanten-Administration zu übernehmen. Der Mandant muss akzeptieren, bevor etwas berechnet wird; der Preis pro übernommener Administration wird vor der Bestätigung angezeigt. Ein noch ausstehendes Angebot wird getrennt angezeigt, damit Sie es zurückziehen können, solange der Mandant noch nicht geantwortet hat.
- **Export** (`/werkruimtes/kantoor/export`) - exportieren Sie mehrere Mandanten-Administrationen auf einmal. Wählen Sie Jahr, Zeitraum und Exportformat, wählen Sie die Administrationen aus, und die App lädt pro Mandant ein Archiv herunter. Fehlgeschlagene Exports bleiben sichtbar, damit Sie sehen, was nicht abgeschlossen wurde.

## Ladezustände und Fehler

Wenn Sie eine Seite innerhalb des Arbeitsbereichs-Rahmens öffnen, wartet die App zunächst, bis die Shell-Daten (Arbeitsbereichsliste, Token, Berechtigungen) bereitstehen, und holt danach erst die Seitendaten. So verhindert die App, dass ein kalter Aufruf einen leeren "nichts zu tun"-Zustand anzeigt, während die Anfrage noch unterwegs ist.

Falls der Abruf fehlschlägt, zeigt die Seite einen eigenen Fehlerzustand mit einem Button **Erneut versuchen** anstatt so zu tun, als gäbe es nichts zu zeigen. Der Arbeitsbereichswechsler in der Seitenleiste bleibt nutzbar, sodass Sie ohne Warten in einen anderen Arbeitsbereich wechseln können. Auf der Abrechnungsseite laden die Mandantenliste und die Abrechnungsbetrags unabhängig: wenn die Betrags nicht verfügbar sind, bleibt die Mandantenliste sichtbar und die Preisspalte bleibt leer, anstatt eine falsche Null zu zeigen.

## Wenn Sie einen Arbeitsbereich haben

Sie sehen drei Einstiege statt einer leeren Seite:

- **Unternehmen hinzufügen** für eine Holding, eine zweite GmbH oder ein Nebengewerbe. Jedes Unternehmen erhält eine eigene Administration mit separater USt., Rechnungen und Buchhaltung.
- **Steuerberater einladen**, wenn Sie mit einem externen Steuerberater zusammenarbeiten.
- **Partnerprogramm**, wenn Sie selbst Steuerberater sind und mehrere Mandanten-Administrationen an einem Ort verwalten möchten.

## Kombinierter Arbeitsbereich: Ihre eigenen Unternehmen

Wenn Sie mehr als ein eigenes Unternehmen haben, öffnet die Seite mit einer kombinierten Übersicht:

- Ein Satz sagt, was Ihre Unternehmen dieses Jahr zusammen umgesetzt haben, und ob das einen Gewinn oder Verlust ergab.
- Eine Zeile zeigt kombinierten Umsatz, Ergebnis, offene Forderungen und zurückgelegte USt.
- Ein Balken zeigt die Umsatzverteilung pro Unternehmen.
- Darunter steht eine Zeile pro Unternehmen. Die Reihenfolge ist fest (Hauptunternehmen zuerst, dann Erstellungsdatum), sodass Sie immer wissen, wo Sie suchen müssen.

### Signale in jeder Zeile

Jede Unternehmenszeile zeigt Chips für die Dinge, die gerade Aufmerksamkeit brauchen. Jeder Chip ist ein Link: er wechselt in das richtige Unternehmen und bringt Sie auf die passende Seite.

| Chip | Bedeutung | Link |
|---|---|---|
| USt.-Zeitraum mit Frist | Wie viele Tage bis zur Abgabe, oder wie viele Tage zu spät | `/belastingen/btw` |
| Überfällige Rechnungen | Rechnungen, die nicht rechtzeitig bezahlt wurden | `/facturen` |
| Fehlende Belege | Ausgaben ohne Beleg | `/uitgaven` |
| Entwürfe | Rechnungen, die noch Entwurf sind | `/facturen` |
| USt. abgegeben | Die vorherige Abgabe wurde eingereicht | `/belastingen/btw` |
| Testphase läuft ab | Das Unternehmen ist noch in der Office-Testphase | `/settings/billing` |
| Inaktiv | Das Unternehmen wurde inaktiv gesetzt; Sie können weiter einsehen und exportieren | `/werkruimtes` |

Eigene Unternehmen verwenden dieselben KPIs wie das Dashboard jedes einzelnen Unternehmens, sodass die Zahlen nicht widersprüchlich sein können.

## Untereinander-Positionen

Wenn Ihre eigenen Unternehmen sich gegenseitig Rechnungen stellen, sieht jeder Arbeitsbereich normalerweise nur seine eigene Hälfte. Die Seite Arbeitsbereiche zeigt jetzt den Nettosaldo zwischen jedem Paar eigener Unternehmen, sodass das laufende Konto, das Sie bisher auf Papier geführt haben, in der App sichtbar ist.

Der Block erscheint nur, wenn mindestens zwei Ihrer eigenen Unternehmen tatsächlich offene Rechnungen aneinander haben, und bleibt daher für alle anderen unsichtbar. Er steht zwischen der kombinierten Übersicht Ihrer Unternehmen und dem Mandanten-Desk, weil er eine Beziehung zwischen Ihren Unternehmen beschreibt und keine Eigenschaft eines einzelnen Unternehmens.

- Verknüpfungen werden automatisch erstellt, wenn die USt.-Nummer eines Kunden mit einem Ihrer anderen Arbeitsbereiche übereinstimmt. Dieser Abgleich sucht nur in Ihren eigenen Unternehmen, sodass ein Kunde eines anderen Unternehmens niemals erreichbar ist.
- Wenn die automatische Verknüpfung falsch ist oder keine USt.-Nummer vorhanden ist, können Sie einen Kunden auf der Kundenseite manuell verknüpfen oder trennen. Eine manuelle Verknüpfung hat immer Vorrang vor der automatischen.
- Die Position ist der Nettobetrag über offene Rechnungen zwischen den beiden Unternehmen, abzüglich gebuchter Zahlungen. Ein positiver Betrag bedeutet, dass das eine Unternehmen dem anderen noch etwas schuldet.
- Jedes Paar wird als Satz von der Seite aus formuliert, der das Geld noch zugutekommt, zum Beispiel "[Kreditor] hat [Betrag] zu erhalten von [Debitor]". Läuft die Bilanz in die andere Richtung, dreht sich der Satz Kreditor und Debitor um, anstatt den Betrag negativ anzuzeigen.
- Die Zeile zeigt auch, aus wie vielen offenen Rechnungen der Betrag besteht.
- Wenn mehr als ein Paar einen Saldo hat, zeigt die Karte oben eine Summe aller offenen untereinander-Positionen.

## Kanzlei-Arbeitsbereich: Mandanten

Wenn Sie Steuerberater sind und Mandanten-Administrationen verwalten, wird die Seite zu einem Triage-Überblick:

- Eine Headline sagt, wie viele Ihrer Mandanten heute etwas brauchen.
- Eine Zahlenzeile zeigt die Gesamtzahl der Mandanten, Fristen dieser Woche, Mandanten, die Aufmerksamkeit brauchen, und offene Einladungen.
- Zeilen sind nach Dringlichkeit sortiert, sodass Administrationen, die heute Aktion erfordern, oben stehen.
- Ein Suchfeld ist immer sichtbar, damit Sie Mandanten-Administrationen sofort filtern können.
- Offene Einladungen werden in einer eigenen Karte gezeigt; eine eingeladene Person zählt noch nicht als aktiver Mandant.

Die Chips funktionieren wie im kombinierten Arbeitsbereich, aber die Zeilen verwenden aggregierte Signale, sodass der Überblick auch bei vielen Mandanten skaliert. Mandantengeld wird nicht summiert.

### Mitglieder der Steuerberaterkanzlei

Arbeiten Sie in einer Steuerberaterkanzlei, hat die Kanzlei eine eigene Mitgliederliste. Admins können Kollegen unter **Kanzleimitglieder verwalten** einladen; jedes Mitglied erhält eine Rolle (Mitglied oder Admin). Jemanden zur Kanzlei hinzuzufügen gibt ihm oder ihr noch keinen Zugriff auf einen Mandanten; den gewähren Sie weiterhin pro Mandant auf der Arbeitsbereiche-Seite. In der Zeile jedes Kollegen sehen Sie, bei wie vielen Mandanten diese Person zugewiesen ist, damit Sie wissen, wer an wem arbeitet.

### Mandantenarbeit und -anfragen

Jede Mandantenzeile zeigt einen Arbeit-Chip, sobald etwas wartet. Öffnen Sie ihn, um zu sehen, wer den Mandanten gerade bearbeitet und was Sie beim Mandanten angefragt haben.

- **Ich übernehme das** weist den Mandanten Ihnen zu. **Ich übernehme doch nicht** gibt die Arbeit frei, damit ein Kollege sie übernehmen kann. Der Status wird für alle in der Kanzlei live aktualisiert, sodass zwei Personen nicht ungewollt dieselbe Abgabe beginnen.
- **Mandanten fragen** erstellt eine Aufgabe im eigenen Arbeitsbereich des Mandanten. Wählen Sie eine Anfragenvorlage (zum Beispiel fehlende Belege), fügen Sie Titel und Notiz hinzu, und der Mandant sieht sie als normale To-do. Sobald der Mandant die Aufgabe erledigt, ist die Anfrage abgeschlossen und der Arbeit-Chip verschwindet. Es gibt keinen manuellen "Wartet auf Mandant"-Status, der zurückgesetzt werden muss; er ergibt sich einfach aus einer offenen Anfrage.

## Ein eigenes Unternehmen hinzufügen

Öffnen Sie **Unternehmen hinzufügen** und geben Sie dem neuen Unternehmen einen Namen.

Bei einem kostenpflichtigen Plan (Starter oder Pro) zeigt die App die zusätzlichen Kosten vor der Bestätigung an. Während Ihrer eigenen Office-Testphase zahlen Sie nichts für das zusätzliche Unternehmen; danach wird es zum angezeigten Preis Ihrem Abonnement hinzugefügt.

Wenn Ihr Arbeitsbereich ein kostenloses Office aufgrund einer Regelung wie einer Gunst- oder Founding-Member-Regelung hat, bleibt das erste Unternehmen kostenlos und die App bietet jetzt einen separaten Checkout für ein zweites Unternehmen. Der Preis wird im Voraus angezeigt; nur das zweite Unternehmen wird über ein eigenes Add-on-Abonnement abgerechnet. Nach Bestätigung der Zahlung können Sie das zweite Unternehmen benennen.

## Einstellungen von einem anderen Unternehmen übernehmen

Wenn Sie ein Unternehmen hinzufügen oder später über die Seitenschublade **Verwalten** eines bestehenden Unternehmens, können Sie die Einrichtung von einem anderen Unternehmen übernehmen, das Sie bereits haben. So sparen Sie sich das erneute Eingeben Ihrer Corporate Identity, Rechnungslayouts und Standardeinstellungen.

Schalten Sie **Einstellungen von einem Unternehmen übernehmen, das Sie bereits haben** ein und wählen Sie die Quelle. Haben Sie nur ein anderes Unternehmen, wird die Auswahl als Schalter mit dessen Namen angezeigt. Folgende Gruppen können übernommen werden:

- **Erscheinungsbild** (Logo, Farben und Schriften).
- **Rechnungen und Angebote** (Layout, Zahlungsziel, Mahnungen und Ihre eigenen E-Mail-Texte).
- **MwSt.** (Abgabezeitraum und Standardsteuersatz).
- **Ausgaben und Belege** (Standardkategorie, Kilometerpauschale und Ihre eigenen Kategorien).
- **Funktionen** (welche Funktionen aktiviert sind, plus der Aufbau Ihrer Zeiterfassung).
- **Adresse und Kontakt** (Adresse, Telefon, E-Mail und Website).

Handelsregisternummer, MwSt.-Nummer, Bankverbindung und Rechnungsnummernkreis werden nie übernommen: diese gehören jeweils nur zu einem Unternehmen.

## Ein Unternehmen verwalten oder entfernen

Öffnen Sie für jedes eigene Unternehmen das Zeilenmenü und wählen Sie **Verwalten**. Es öffnet sich eine Seitenschublade mit zwei Optionen.

### Unternehmen inaktiv setzen

Wählen Sie **Inaktiv setzen**, wenn Sie in einem Unternehmen nicht mehr arbeiten, aber die Unterlagen aufbewahren müssen. Die Administration bleibt lesbar und Sie können weiter alles exportieren, weil Sie die Bücher für die gesetzliche Aufbewahrungsfrist aufbewahren müssen. Sie können keine neuen Rechnungen, Ausgaben oder Kunden erfassen, und das Unternehmen wird nicht mehr für Ihr Abonnement gezählt.

Die Schublade zeigt vorab an, wie viel Sie pro Monat oder pro Jahr weniger zahlen.

Um fortzufahren, öffnen Sie dieselbe Schublade und wählen Sie **Reaktivieren**.

### Ein Unternehmen löschen

Wählen Sie **Löschen** nur für ein Unternehmen, das Sie versehentlich angelegt haben. Der Arbeitsbereich prüft, ob bereits Buchungen vorhanden sind; sobald eine Rechnung, Ausgabe oder ein Kunde existiert, wird das Löschen verweigert und Sie müssen das Unternehmen stattdessen inaktiv setzen. Diese Prüfung läuft serverseitig, sodass die Meldung immer mit den tatsächlichen Daten übereinstimmt.

## Einen Mandanten einladen

Steuerberater können hier direkt einen Mandanten einladen:

1. Klicken Sie auf **Mandanten einladen**.
2. Tragen Sie E-Mail-Adresse, Firmenname und optional die Handelsregisternummer ein.
3. Klicken Sie auf **Einladung senden**.

Der Mandant erstellt sein eigenes Konto und bleibt Eigentümer der Administration. Sie erhalten Zugang, sobald die Einladung akzeptiert wurde, und der Mandant kann diesen Zugang jederzeit widerrufen. Offene Einladungen können Sie erneut senden oder widerrufen. Der Link ist 30 Tage gültig.

## Navigation folgt Ihrer Rolle

Die linke Seitenleiste blendet jetzt Elemente aus, die Ihre aktuelle Arbeitsbereichsrolle nicht nutzen darf, sodass Sie keine Links mehr sehen, die einen 403 zurückgeben. Die API steuert dies über eine Deny-Liste: wenn ein neuer Endpunkt für eine Rolle gesperrt wird, verschwindet das Navigations-Element automatisch.

In einem Mandanten-Arbeitsbereich ist die Seitenleiste kürzer, denn Teile, die zum Mandanten selbst gehören (Posteingang, Website, Abonnement, Teameinstellungen, Domains und KI-Hilfen), sind für einen Steuerberater nicht verfügbar. Der Arbeitsbereich-Wechsler und der Eintrag "Arbeitsbereiche" bleiben immer sichtbar, sodass Sie jederzeit zwischen Administrationen wechseln können.

## Berechtigungen

- Arbeitsbereichs-Eigentümer und Team-Admins können Unternehmen hinzufügen und Arbeitsbereichseinstellungen verwalten.
- Steuerberater sehen nur die Arbeitsbereiche und Seiten, die ihr Mandant freigegeben hat.
- Teammitglieder sehen "Arbeitsbereiche" nur, wenn sie mehr als einen Arbeitsbereich haben und ihre Rolle dies erlaubt.

## Einblicke für Steuerberater

Die Seite "Einblicke" unter `/werkruimtes/inzicht` vergleicht Mandanten-Administrationen und zeigt die Arbeitslast pro Periode. Sie ist nur in der Kanzlei-Ansicht sichtbar und nur, wenn Sie mehr als eine Mandanten-Administration verwalten.

Die Seite bewusst über Anzahlen und Tage, nicht über Beträge:

- Mandantengeld wird nicht summiert, denn es gehört Ihnen nicht.
- Es gibt keinen Gesamt-"Portfoliowert" oder Umsatz über Mandanten.

### Mandanten im Vergleich

Die erste Tabelle listet Ihre Mandanten nebeneinander:

| Spalte | Bedeutung |
|---|---|
| Mandant | Name der Mandanten-Administration. |
| MwSt. | Ob der aktuelle MwSt.-Zeitraum abgegeben wurde, wie viele Tage bis zur Frist, oder wie viele Tage zu spät. |
| Von Ihnen geschlossen | Wie viele der letzten Abgabezeiträume des Mandanten Sie in dieser Kanzlei geschlossen haben. |
| Einzufordern | Anzahl überfälliger Rechnungen. |
| Belege | Anzahl fehlender Belege. |
| Bezahlt | Anzahl bezahlter Rechnungen im gewählten Jahr. |
| Zahlungsziel | Durchschnittliche Tage zu spät auf bezahlten Rechnungen, falls vorhanden. |

Zeilen sind nach Dringlichkeit sortiert: Mandanten, die heute Aktion brauchen, stehen oben. Das MwSt.-Badge verwendet dieselbe Dringlichkeitslogik wie das Dashboard eines Arbeitsbereichs.

### Arbeitslast pro Periode

Die zweite Tabelle zeigt die Arbeitslast über alle Mandanten, aufgeteilt nach Periode:

| Spalte | Bedeutung |
|---|---|
| Periode | Der MwSt.-Zeitraum oder "Sonstige Aufgaben" für Arbeit, die nicht an eine Periode gebunden ist. |
| Abgegeben | Administrationen, deren Periode abgegeben wurde. |
| In Bearbeitung | Administrationen mit aktiver laufender Arbeit. |
| Offen | Administrationen mit einem offenen Zeitraum, der noch nicht angefasst wurde. |
| Noch nichts | Administrationen ohne erfasste Aktivität für die Periode. |

Nutzen Sie diese Tabelle, um einen Stau zu erkennen, bevor er ein Fristproblem wird. Die Perioden sind jahresunabhängig; die Vergleichstabelle darüber filtert nach Jahr.

### Was hier bewusst NICHT steht

**"Prozent der pünktlichen Abgaben"** stand im ursprünglichen Plan, wird aber nicht angezeigt. In MyCompanyDesk bedeutet "abgegeben", dass ein Zeitraum in `period_locks` geschlossen wurde. Ein Mandant, der anderswo abgibt, bekommt diese Zeile nie. Ein historischer Prozentsatz würde solche Mandanten systematisch als zu spät markieren. Das ist ein Vorwurf aufgrund fehlender Daten, keine Ungenauigkeit. Eine solche Qualitätszahl braucht zuerst ein explizites Signal pro Administration, dass die Abgabe hier erfolgt.

Stattdessen enthält die Vergleichstabelle nun eine Spalte **Von Ihnen geschlossen**. Sie zeigt, wie viele der letzten Perioden des Mandanten in dieser Kanzlei geschlossen wurden, auf Basis derselben `period_locks`-Daten. Ein Mandant, der anderswo abgibt, steht bei 0, weil hier nichts geschlossen wurde. Die Spalte ist bewusst neutral und wird nie rot, weil sie Ihre eigene Arbeit beschreibt, nicht das Verhalten des Mandanten.

## Verwandt

- [Zugang und Steuerberater](/de/settings/team) für das Einladen von Teammitgliedern und Steuerberatern sowie das Festlegen von Seitenberechtigungen
- [Berichte](/de/features/reports) für die Ansicht verlorener Kunden und weitere Berichte
- [Dashboard](/de/features/dashboard) für das tägliche Briefing eines Arbeitsbereichs
