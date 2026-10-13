---
title: Arbeitsbereiche
description: "Eine zentrale Seite für alles, was Sie verwalten, eigene Unternehmen und Mandantenbuchhaltungen, ohne eigenes Geld und Mandantengeld zu vermischen."
last_verified: 2026-10-13
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

Sobald Sie in den Arbeitsbereichen sind, ersetzt eine eigene Seitenleiste die normale Navigation. Sie gruppiert die Seiten so:

- **Übersicht**: **Heute** (`/werkruimtes`), **Agenda** (`/werkruimtes/agenda`) und **Arbeit** (`/werkruimtes/werk`). Diese drei sind immer da.
- **Von Ihnen**: **Unternehmen** (`/werkruimtes/bedrijven`), die Übersicht Ihrer eigenen Unternehmen. Ebenfalls immer da.
- **Kundenarbeit**: **Kunden** (`/werkruimtes/klanten`), **Anfragen** (`/werkruimtes/verzoeken`) und **Einblick** (`/werkruimtes/inzicht`). Erscheint, sobald Sie Zugriff auf eine Mandanten-Administration haben.
- **Kanzlei**: **Ihre Kanzlei** (`/werkruimtes/kantoor`), **Abrechnung** und **Export**. Erscheint, wenn Sie zu einer Buchhaltungskanzlei gehören.

**Heute** zeigt, was jetzt Aufmerksamkeit braucht, in zwei getrennten Blöcken: zuerst Ihre eigenen Unternehmen, dann Ihre Mandanten (höchstens acht; was darüber hinausgeht, wird genannt und nicht stillschweigend weggelassen).

### Eigentums-Indikator

Jede Arbeitsbereich-Zeile und jedes Element in den neuen Seiten trägt einen kleinen Eigentums-Indikator. Eigene Unternehmen behalten ihre Arbeitsbereich-Farbe; Mandanten-Administrationen bleiben neutral. Sie sehen ihn im Arbeitsbereich-Wechsler, in der Agenda und in der Arbeitsliste, sodass Sie immer wissen, auf welcher Seite der Eigen/Mandant-Grenze eine Zeile steht.

### Agenda (`/werkruimtes/agenda`)

Die Agenda gruppiert alle anstehenden Fristen über alle Ihre Arbeitsbereiche nach Datum. Sie schaut 30 Tage zurück und 90 Tage voraus, sodass eine überfällige Frist aus der letzten Woche noch sichtbar ist. Überfällige Fristen stehen oben. Jede Zeile zeigt den Arbeitsbereich, das Frist-Label und den Eigentums-Indikator. Klicken Sie auf eine Zeile, um in den Arbeitsbereich zu wechseln und die passende Seite zu öffnen.

### Arbeit (`/werkruimtes/werk`)

Die Arbeit-Seite listet offene Arbeit in zwei Blöcken: zuerst Ihre eigenen Unternehmen, dann Mandanten-Administrationen. Das hält die beiden Arten von Arbeit getrennt, denn eigene To-dos und Dinge, auf die Sie von einem Mandanten warten, erfordern verschiedene Aktionen. Jede Zeile zeigt den Arbeitsbereich, die Aufgabe und ein Fälligkeits-Badge. Klicken Sie auf eine Zeile, um in den Arbeitsbereich zu wechseln und die passende Seite zu öffnen; bei einer Mandantenanfrage öffnet sich die Anfrage selbst.

### Kanzlei-Seiten (`/werkruimtes/kantoor/*`)

Wenn Sie zu einer Buchhaltungskanzlei gehören, enthält die Gruppe Kanzlei drei Seiten:

- **Ihre Kanzlei** (`/werkruimtes/kantoor`) - Kanzlei-Mitglieder, offene Mandanteneinladungen, Partner-Teilen-Link und Statistiken, sowie ob Office kostenlos gewährt wurde.
- **Abrechnung** (`/werkruimtes/kantoor/facturatie`) - bieten Sie an, das Abonnement einer Mandanten-Administration zu übernehmen. Der Mandant muss akzeptieren, bevor etwas berechnet wird; der Preis pro übernommener Administration wird vor der Bestätigung angezeigt. Ein noch ausstehendes Angebot wird getrennt angezeigt, damit Sie es zurückziehen können, solange der Mandant noch nicht geantwortet hat.
- **Export** (`/werkruimtes/kantoor/export`) - exportieren Sie mehrere Mandanten-Administrationen auf einmal. Wählen Sie Jahr, Zeitraum und Exportformat, wählen Sie die Administrationen aus, und die App lädt pro Mandant ein Archiv herunter. Fehlgeschlagene Exports bleiben sichtbar, damit Sie sehen, was nicht abgeschlossen wurde.

## Ladezustände und Fehler

Wenn Sie eine Seite innerhalb des Arbeitsbereichs-Rahmens öffnen, wartet die App zunächst, bis die Shell-Daten (Arbeitsbereichsliste, Token, Berechtigungen) bereitstehen, und holt danach erst die Seitendaten. So verhindert die App, dass ein kalter Aufruf einen leeren "nichts zu tun"-Zustand anzeigt, während die Anfrage noch unterwegs ist.

Falls der Abruf fehlschlägt, zeigt die Seite einen eigenen Fehlerzustand mit einem Button **Erneut versuchen** anstatt so zu tun, als gäbe es nichts zu zeigen. Der Arbeitsbereichswechsler in der Seitenleiste bleibt nutzbar, sodass Sie ohne Warten in einen anderen Arbeitsbereich wechseln können. Auf der Abrechnungsseite laden die Mandantenliste und die Abrechnungsbetrags unabhängig: wenn die Betrags nicht verfügbar sind, bleibt die Mandantenliste sichtbar und die Preisspalte bleibt leer, anstatt eine falsche Null zu zeigen.

## Wenn Sie einen Arbeitsbereich haben

Auf **Unternehmen** sehen Sie dann drei Einstiege statt einer leeren Liste:

- **Mehr als ein Unternehmen?** mit **Unternehmen hinzufügen**, für eine Holding, eine zweite GmbH oder ein Nebengewerbe. Jedes Unternehmen erhält eine eigene Administration mit getrennter USt., Rechnungen und Buchhaltung.
- **Arbeiten Sie mit einem Buchhalter?** mit **Buchhalter einladen**, wenn Sie mit einem externen Steuerberater zusammenarbeiten.
- **Sind Sie selbst Buchhalter?** mit einem Link zum Partnerprogramm, wenn Sie mehrere Mandanten-Administrationen an einem Ort verwalten möchten.

## Kombinierter Arbeitsbereich: Ihre eigenen Unternehmen

Wenn Sie mehr als ein eigenes Unternehmen haben, zeigt **Unternehmen** (`/werkruimtes/bedrijven`) eine kombinierte Übersicht:

- Ein Satz sagt, was Ihre Unternehmen dieses Jahr zusammen umgesetzt haben, und ob das einen Gewinn oder Verlust ergab.
- Eine Zeile zeigt kombinierten Umsatz, Ergebnis, offene Forderungen und zurückgelegte USt.
- Ein Balken zeigt die Umsatzverteilung pro Unternehmen.
- Darunter steht eine Zeile pro Unternehmen. Die Reihenfolge ist fest (Hauptunternehmen zuerst, dann Erstellungsdatum), sodass Sie immer wissen, wo Sie suchen müssen.

**Gemeinsam ansehen** öffnet **Zusammen** (`/werkruimtes/bedrijven/samen`): eine Tabelle mit Ihren Unternehmen nebeneinander für ein Jahr Ihrer Wahl, mit einer Summenzeile darunter.

### Signale in jeder Zeile

Jede Unternehmenszeile zeigt Chips für die Dinge, die gerade Aufmerksamkeit brauchen. Jeder Chip ist ein Link: er wechselt in das richtige Unternehmen und bringt Sie auf die passende Seite.

| Chip | Bedeutung | Link |
|---|---|---|
| USt.-Zeitraum mit Frist | Wie viele Tage bis zur Abgabe, oder wie viele Tage zu spät | `/belastingen/btw` |
| Überfällige Rechnungen | Rechnungen, die nicht rechtzeitig bezahlt wurden | `/invoices` |
| Fehlende Belege | Ausgaben ohne Beleg | `/expenses` |
| Entwürfe | Rechnungen, die noch Entwurf sind | `/invoices` |
| USt. abgegeben | Die vorherige Abgabe wurde eingereicht | `/belastingen/btw` |
| Testphase läuft noch | Das Unternehmen ist noch in der Office-Testphase | Keiner, nur ein Hinweis |
| Inaktiv | Das Unternehmen wurde inaktiv gesetzt; Sie können weiter einsehen und exportieren | Keiner, nur ein Hinweis |

Eigene Unternehmen verwenden dieselben KPIs wie das Dashboard jedes einzelnen Unternehmens, sodass die Zahlen nicht widersprüchlich sein können.

## Untereinander-Positionen

Wenn Ihre eigenen Unternehmen sich gegenseitig Rechnungen stellen, sieht jeder Arbeitsbereich normalerweise nur seine eigene Hälfte. Die Seite Unternehmen zeigt den Nettosaldo zwischen jedem Paar eigener Unternehmen, sodass das laufende Konto, das Sie bisher auf Papier geführt haben, in der App sichtbar ist.

Der Block erscheint nur, wenn mindestens zwei Ihrer eigenen Unternehmen tatsächlich offene Rechnungen aneinander haben, und bleibt daher für alle anderen unsichtbar. Er steht unter der kombinierten Übersicht Ihrer Unternehmen, weil er eine Beziehung zwischen Ihren Unternehmen beschreibt und keine Eigenschaft eines einzelnen Unternehmens.

- Verknüpfungen werden automatisch erstellt, wenn die USt.-Nummer eines Kunden mit einem Ihrer anderen Arbeitsbereiche übereinstimmt. Dieser Abgleich sucht nur in Ihren eigenen Unternehmen, sodass ein Kunde eines anderen Unternehmens niemals erreichbar ist.
- Wenn die automatische Verknüpfung falsch ist oder keine USt.-Nummer vorhanden ist, können Sie einen Kunden auf der Kundenseite manuell verknüpfen oder trennen. Eine manuelle Verknüpfung hat immer Vorrang vor der automatischen.
- Die Position ist der Nettobetrag über offene Rechnungen zwischen den beiden Unternehmen, abzüglich gebuchter Zahlungen. Ein positiver Betrag bedeutet, dass das eine Unternehmen dem anderen noch etwas schuldet.
- Jedes Paar wird als Satz von der Seite aus formuliert, der das Geld noch zugutekommt, zum Beispiel "[Kreditor] hat [Betrag] zu erhalten von [Debitor]". Läuft die Bilanz in die andere Richtung, dreht sich der Satz Kreditor und Debitor um, anstatt den Betrag negativ anzuzeigen.
- Die Zeile zeigt auch, aus wie vielen offenen Rechnungen der Betrag besteht.
- Wenn mehr als ein Paar einen Saldo hat, zeigt die Karte oben eine Summe aller offenen untereinander-Positionen.

## Kanzlei-Arbeitsbereich: Mandanten

Wenn Sie Steuerberater sind und Mandanten-Administrationen verwalten, zeigt **Heute**, welche Mandanten jetzt etwas brauchen, und **Kunden** (`/werkruimtes/klanten`) ist die vollständige Liste zum Abarbeiten, mit Filtern wie was zu spät ist, wer auf Sie wartet und was Ihnen zugewiesen ist:

- Eine Headline sagt, wie viele Ihrer Mandanten heute etwas brauchen.
- Eine Zahlenzeile zeigt die Gesamtzahl der Mandanten, Fristen dieser Woche, Mandanten, die Aufmerksamkeit brauchen, und offene Einladungen.
- Zeilen sind nach Dringlichkeit sortiert, sodass Administrationen, die heute Aktion erfordern, oben stehen.
- Ein Suchfeld ist immer sichtbar, damit Sie Mandanten-Administrationen sofort filtern können.
- Offene Einladungen werden in einer eigenen Karte gezeigt; eine eingeladene Person zählt noch nicht als aktiver Mandant.

Die Chips funktionieren wie im kombinierten Arbeitsbereich, aber die Zeilen verwenden aggregierte Signale, sodass der Überblick auch bei vielen Mandanten skaliert. Mandantengeld wird nicht summiert.

### Mitglieder der Steuerberaterkanzlei

Arbeiten Sie in einer Buchhaltungskanzlei, hat die Kanzlei eine eigene Mitgliederliste unter **Mitarbeiter** auf **Ihre Kanzlei**. Admins laden Kollegen mit **Kollegen einladen** ein; jedes Mitglied erhält eine Rolle (Mitglied oder Admin). Jemanden zur Kanzlei hinzuzufügen gibt ihm oder ihr noch keinen Zugriff auf einen Mandanten; den gewähren Sie pro Mandant, und nur wenn dieser Mandant es erlaubt. In der Zeile jedes Kollegen sehen Sie, bei wie vielen Mandanten diese Person zugewiesen ist, damit Sie wissen, wer an wem arbeitet.

### Mandantenarbeit und -anfragen

Jede Mandantenzeile zeigt einen Arbeit-Chip, sobald etwas wartet. Öffnen Sie ihn, um zu sehen, wer den Mandanten gerade bearbeitet und was Sie beim Mandanten angefragt haben.

- **Ich übernehme das** weist den Mandanten Ihnen zu. **Ich übernehme doch nicht** gibt die Arbeit frei, damit ein Kollege sie übernehmen kann. Der Status wird für alle in der Kanzlei live aktualisiert, sodass zwei Personen nicht ungewollt dieselbe Abgabe beginnen.
- **Diesen Kunden etwas fragen** erstellt eine Aufgabe im eigenen Arbeitsbereich des Mandanten, mit einer Benachrichtigung. Wählen Sie, worum es geht (zum Beispiel fehlende Belege), sagen Sie, was Sie fragen, und fügen Sie eine Erläuterung hinzu; der Mandant sieht es als normale Aufgabe. Sobald er die Aufgabe abhakt, ist die Anfrage erledigt und der Arbeits-Chip verschwindet. Einen manuellen Status „wartet auf Mandant“ gibt es nicht; er ergibt sich einfach aus einer offenen Anfrage. Alle offenen Fragen über alle Mandanten stehen gesammelt unter **Anfragen**, die älteste zuerst.

## Ein eigenes Unternehmen hinzufügen

Öffnen Sie **Unternehmen hinzufügen** und geben Sie dem neuen Unternehmen einen Namen.

Mehrere eigene Unternehmen sind Teil von **Office**: Ein zusätzliches Unternehmen kostet 5,99 € pro Monat oder 59,90 € pro Jahr (zzgl. MwSt.) zusätzlich zu Office, bis zu 10 eigene Unternehmen. Im Desk-Tarif haben Sie ein Unternehmen. Die App zeigt die zusätzlichen Kosten vor der Bestätigung an. Während Ihrer eigenen Office-Testphase zahlen Sie nichts für das zusätzliche Unternehmen; danach wird es zum angezeigten Preis zu Ihrem Abonnement hinzugefügt.

Nutzen Sie Office aufgrund einer festen Vereinbarung kostenlos, gilt dieses kostenlose Office für ein Unternehmen. Für ein zweites Unternehmen bietet die App einen separaten Checkout. Der Preis wird im Voraus angezeigt; nur das zweite Unternehmen wird über ein eigenes Abonnement abgerechnet. Nach Bestätigung der Zahlung können Sie das zweite Unternehmen benennen.

## Einstellungen von einem anderen Unternehmen übernehmen

Wenn Sie ein Unternehmen hinzufügen oder später über die Seitenschublade **Verwalten** eines bestehenden Unternehmens, können Sie die Einrichtung von einem anderen Unternehmen übernehmen, das Sie bereits haben. So sparen Sie sich das erneute Eingeben Ihrer Corporate Identity, Rechnungslayouts und Standardeinstellungen.

Schalten Sie **Einstellungen von einem Unternehmen übernehmen, das Sie bereits haben** ein und wählen Sie die Quelle. Haben Sie nur ein anderes Unternehmen, wird die Auswahl als Schalter mit dessen Namen angezeigt. Folgende Gruppen können übernommen werden:

- **Erscheinungsbild** (Logo, Farben und Schriften).
- **Rechnungen und Angebote** (Layout, Zahlungsziel, Mahnungen und Ihre eigenen E-Mail-Texte).
- **MwSt.** (Abgabezeitraum und Standardsteuersatz).
- **Ausgaben und Belege** (Standardkategorie, Kilometerpauschale und Ihre eigenen Kategorien).
- **Module** (welche Module aktiviert sind, plus der Aufbau Ihrer Zeiterfassung).
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

Die linke Seitenleiste blendet jetzt Elemente aus, die Ihre aktuelle Arbeitsbereichsrolle nicht nutzen darf, sodass Sie keine Links mehr sehen, die einen 403 zurückgeben. Wird ein Bereich für eine Rolle gesperrt, verschwindet der Menüpunkt automatisch.

In einem Mandanten-Arbeitsbereich ist die Seitenleiste kürzer, denn Teile, die zum Mandanten selbst gehören (Posteingang, Website, Abonnement, Teameinstellungen, Domains und KI-Hilfen), sind für einen Steuerberater nicht verfügbar. Der Arbeitsbereich-Wechsler und der Eintrag "Arbeitsbereiche" bleiben immer sichtbar, sodass Sie jederzeit zwischen Administrationen wechseln können.

## Berechtigungen

- Arbeitsbereichs-Eigentümer und Team-Admins können Unternehmen hinzufügen und Arbeitsbereichseinstellungen verwalten.
- Steuerberater sehen nur die Arbeitsbereiche und Seiten, die ihr Mandant freigegeben hat.
- Teammitglieder sehen "Arbeitsbereiche" nur, wenn sie mehr als einen Arbeitsbereich haben und ihre Rolle dies erlaubt.

## Einblicke für Steuerberater

Die Seite „Einblick“ unter `/werkruimtes/inzicht` vergleicht Mandanten-Administrationen und zeigt die Arbeitslast pro Periode. Sie steht in der Gruppe Kundenarbeit, die erscheint, sobald Sie Mandanten-Administrationen verwalten.

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

Ein **„Prozent der pünktlichen Abgaben“** wird bewusst nicht angezeigt. In MyCompanyDesk bedeutet „abgegeben“, dass ein Zeitraum hier geschlossen wurde. Ein Mandant, der anderswo abgibt, hat hier nie einen geschlossenen Zeitraum. Ein historischer Prozentsatz würde solche Mandanten systematisch als zu spät markieren. Das ist ein Vorwurf aufgrund fehlender Daten, keine Ungenauigkeit. Eine solche Qualitätszahl braucht zuerst ein explizites Signal pro Administration, dass die Abgabe hier erfolgt.

Stattdessen enthält die Vergleichstabelle nun eine Spalte **Von Ihnen geschlossen**. Sie zeigt, wie viele der letzten Perioden des Mandanten in dieser Kanzlei geschlossen wurden, auf Basis derselben geschlossenen Perioden. Ein Mandant, der anderswo abgibt, steht bei 0, weil hier nichts geschlossen wurde. Die Spalte ist bewusst neutral und wird nie rot, weil sie Ihre eigene Arbeit beschreibt, nicht das Verhalten des Mandanten.

## Verwandt

- [Personen mit Zugriff und Ihr Buchhalter](/de/settings/team) für das Einladen von Teammitgliedern und Steuerberatern sowie das Festlegen von Seitenberechtigungen
- [Berichte](/de/features/reports) für die Ansicht verlorener Kunden und weitere Berichte
- [Dashboard](/de/features/dashboard) für das tägliche Briefing eines Arbeitsbereichs
