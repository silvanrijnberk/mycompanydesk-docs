---
title: Arbeitsbereiche
last_verified: 2026-08-06
---

# Arbeitsbereiche

Die Seite "Arbeitsbereiche" unter `/werkruimtes` ist ein zentraler Ort fuer alles, was Sie verwalten. Sie ersetzt die aeltere Steuerberater-Uebersicht und passt sich an Ihre tatsaechliche Rolle an: ein Arbeitsbereich, mehrere eigene Unternehmen oder Mandanten-Administrationen.

> **Eigenes Geld und Mandantengeld werden niemals vermischt.** Eigene Unternehmen zusammenzufassen ergibt Sinn, weil das Geld Ihnen gehoert. Eine Summe ueber Mandanten-Administrationen waere bedeutungslos, deshalb haelt die Seite diese strikt getrennt.

## Wo Sie es finden

- Oeffnen Sie den Arbeitsbereich-Wechsler in der Seitenleiste und waehlen Sie **Arbeitsbereiche verwalten**.
- Derselbe Wechsler befindet sich auch in der Kopfzeile des mobilen Menüs, sodass Sie die Uebersicht von jedem Bildschirm aus an derselben Stelle erreichen.
- Die alte URL `/boekhouder` leitet hierhin weiter.
- Der Arbeitsbereich-Wechsler zeigt jetzt oben eine Uebersichtszeile. Eigene Unternehmen und Mandanten-Administrationen sind getrennt gruppiert, und sobald Sie mehr als acht Arbeitsbereiche haben, erscheint ein Suchfeld.

## Wenn Sie einen Arbeitsbereich haben

Sie sehen drei Einstiege statt einer leeren Seite:

- **Unternehmen hinzufuegen** fuer eine Holding, eine zweite GmbH oder ein Nebengewerbe. Jedes Unternehmen erhaelt eine eigene Administration mit separater USt., Rechnungen und Buchhaltung.
- **Steuerberater einladen**, wenn Sie mit einem externen Steuerberater zusammenarbeiten.
- **Partnerprogramm**, wenn Sie selbst Steuerberater sind und mehrere Mandanten-Administrationen an einem Ort verwalten moechten.

## Kombinierter Arbeitsbereich: Ihre eigenen Unternehmen

Wenn Sie mehr als ein eigenes Unternehmen haben, oeffnet die Seite mit einer kombinierten Uebersicht:

- Ein Satz sagt, was Ihre Unternehmen dieses Jahr zusammen umgesetzt haben, und ob das einen Gewinn oder Verlust ergab.
- Eine Zeile zeigt kombinierten Umsatz, Ergebnis, offene Forderungen und zurueckgelegte USt.
- Ein Balken zeigt die Umsatzverteilung pro Unternehmen.
- Darunter steht eine Zeile pro Unternehmen. Die Reihenfolge ist fest (Hauptunternehmen zuerst, dann Erstellungsdatum), sodass Sie immer wissen, wo Sie suchen muessen.

### Signale in jeder Zeile

Jede Unternehmenszeile zeigt Chips fuer die Dinge, die gerade Aufmerksamkeit brauchen. Jeder Chip ist ein Link: er wechselt in das richtige Unternehmen und bringt Sie auf die passende Seite.

| Chip | Bedeutung | Link |
|---|---|---|
| USt.-Zeitraum mit Frist | Wie viele Tage bis zur Abgabe, oder wie viele Tage zu spaet | `/belastingen/btw` |
| Ueberfaellige Rechnungen | Rechnungen, die nicht rechtzeitig bezahlt wurden | `/facturen` |
| Fehlende Belege | Ausgaben ohne Beleg | `/uitgaven` |
| Entwuerfe | Rechnungen, die noch Entwurf sind | `/facturen` |
| USt. abgegeben | Die vorherige Abgabe wurde eingereicht | `/belastingen/btw` |
| Testphase laeuft ab | Das Unternehmen ist noch in der Office-Testphase | `/settings/billing` |
| Inaktiv | Das Unternehmen wurde inaktiv gesetzt; Sie koennen weiter einsehen und exportieren | `/werkruimtes` |

Eigene Unternehmen verwenden dieselben KPIs wie das Dashboard jedes einzelnen Unternehmens, sodass die Zahlen nicht widerspruechlich sein koennen.

## Untereinander-Positionen

Wenn Ihre eigenen Unternehmen sich gegenseitig Rechnungen stellen, sieht jeder Arbeitsbereich normalerweise nur seine eigene Haelfte. Die Seite Arbeitsbereiche zeigt jetzt den Nettosaldo zwischen jedem Paar eigener Unternehmen, sodass das laufende Konto, das Sie bisher auf Papier gefuehrt haben, in der App sichtbar ist.

Der Block erscheint nur, wenn mindestens zwei Ihrer eigenen Unternehmen tatsaechlich offene Rechnungen aneinander haben, und bleibt daher fuer alle anderen unsichtbar. Er steht zwischen der kombinierten Uebersicht Ihrer Unternehmen und dem Mandanten-Desk, weil er eine Beziehung zwischen Ihren Unternehmen beschreibt und keine Eigenschaft eines einzelnen Unternehmens.

- Verknuepfungen werden automatisch erstellt, wenn die USt.-Nummer eines Kunden mit einem Ihrer anderen Arbeitsbereiche uebereinstimmt. Dieser Abgleich sucht nur in Ihren eigenen Unternehmen, sodass ein Kunde eines anderen Unternehmens niemals erreichbar ist.
- Wenn die automatische Verknuepfung falsch ist oder keine USt.-Nummer vorhanden ist, koennen Sie einen Kunden auf der Kundenseite manuell verknuepfen oder trennen. Eine manuelle Verknuepfung hat immer Vorrang vor der automatischen.
- Die Position ist der Nettobetrag ueber offene Rechnungen zwischen den beiden Unternehmen, abzueglich gebuchter Zahlungen. Ein positiver Betrag bedeutet, dass das eine Unternehmen dem anderen noch etwas schuldet.
- Jedes Paar wird als Satz von der Seite aus formuliert, der das Geld noch zugutekommt, zum Beispiel "[Kreditor] hat [Betrag] zu erhalten von [Debitor]". Laeuft die Bilanz in die andere Richtung, dreht sich der Satz Kreditor und Debitor um, anstatt den Betrag negativ anzuzeigen.
- Die Zeile zeigt auch, aus wie vielen offenen Rechnungen der Betrag besteht.
- Wenn mehr als ein Paar einen Saldo hat, zeigt die Karte oben eine Summe aller offenen untereinander-Positionen.

## Kanzlei-Arbeitsbereich: Mandanten

Wenn Sie Steuerberater sind und Mandanten-Administrationen verwalten, wird die Seite zu einem Triage-Ueberblick:

- Eine Headline sagt, wie viele Ihrer Mandanten heute etwas brauchen.
- Eine Zahlenzeile zeigt die Gesamtzahl der Mandanten, Fristen dieser Woche, Mandanten, die Aufmerksamkeit brauchen, und offene Einladungen.
- Zeilen sind nach Dringlichkeit sortiert, sodass Administrationen, die heute Aktion erfordern, oben stehen.
- Ein Suchfeld ist immer sichtbar, damit Sie Mandanten-Administrationen sofort filtern koennen.
- Offene Einladungen werden in einer eigenen Karte gezeigt; eine eingeladene Person zaehlt noch nicht als aktiver Mandant.

Die Chips funktionieren wie im kombinierten Arbeitsbereich, aber die Zeilen verwenden aggregierte Signale, sodass der Ueberblick auch bei vielen Mandanten skaliert. Mandantengeld wird nicht summiert.

### Mitglieder der Steuerberaterkanzlei

Arbeiten Sie in einer Steuerberaterkanzlei, hat die Kanzlei eine eigene Mitgliederliste. Admins koennen Kollegen unter **Kanzleimitglieder verwalten** einladen; jedes Mitglied erhaelt eine Rolle (Mitglied oder Admin). Jemanden zur Kanzlei hinzuzufuegen gibt ihm oder ihr noch keinen Zugriff auf einen Mandanten; den gewaehren Sie weiterhin pro Mandant auf der Arbeitsbereiche-Seite. In der Zeile jedes Kollegen sehen Sie, bei wie vielen Mandanten diese Person zugewiesen ist, damit Sie wissen, wer an wem arbeitet.

### Mandantenarbeit und -anfragen

Jede Mandantenzeile zeigt einen Arbeit-Chip, sobald etwas wartet. Oeffnen Sie ihn, um zu sehen, wer den Mandanten gerade bearbeitet und was Sie beim Mandanten angefragt haben.

- **Ich uebernehme das** weist den Mandanten Ihnen zu. **Ich uebernehme doch nicht** gibt die Arbeit frei, damit ein Kollege sie uebernehmen kann. Der Status wird fuer alle in der Kanzlei live aktualisiert, sodass zwei Personen nicht ungewollt dieselbe Abgabe beginnen.
- **Mandanten fragen** erstellt eine Aufgabe im eigenen Arbeitsbereich des Mandanten. Waehlen Sie eine Anfragenvorlage (zum Beispiel fehlende Belege), fuegen Sie Titel und Notiz hinzu, und der Mandant sieht sie als normale To-do. Sobald der Mandant die Aufgabe erledigt, ist die Anfrage abgeschlossen und der Arbeit-Chip verschwindet. Es gibt keinen manuellen "Wartet auf Mandant"-Status, der zurueckgesetzt werden muss; er ergibt sich einfach aus einer offenen Anfrage.

## Ein eigenes Unternehmen hinzufuegen

Oeffnen Sie **Unternehmen hinzufuegen** und geben Sie dem neuen Unternehmen einen Namen.

Bei einem kostenpflichtigen Plan (Starter oder Pro) zeigt die App die zusaetzlichen Kosten vor der Bestaetigung an. Waehrend Ihrer eigenen Office-Testphase zahlen Sie nichts fuer das zusaetzliche Unternehmen; danach wird es zum angezeigten Preis Ihrem Abonnement hinzugefuegt.

Wenn Ihr Arbeitsbereich ein kostenloses Office aufgrund einer Regelung wie einer Gunst- oder Founding-Member-Regelung hat, bleibt das erste Unternehmen kostenlos und die App bietet jetzt einen separaten Checkout fuer ein zweites Unternehmen. Der Preis wird im Voraus angezeigt; nur das zweite Unternehmen wird ueber ein eigenes Add-on-Abonnement abgerechnet. Nach Bestaetigung der Zahlung koennen Sie das zweite Unternehmen benennen.

## Einstellungen von einem anderen Unternehmen uebernehmen

Wenn Sie ein Unternehmen hinzufuegen oder spaeter ueber die Seitenschublade **Verwalten** eines bestehenden Unternehmens, koennen Sie die Einrichtung von einem anderen Unternehmen uebernehmen, das Sie bereits haben. So sparen Sie sich das erneute Eingeben Ihrer Corporate Identity, Rechnungslayouts und Standardeinstellungen.

Schalten Sie **Einstellungen von einem Unternehmen uebernehmen, das Sie bereits haben** ein und waehlen Sie die Quelle. Haben Sie nur ein anderes Unternehmen, wird die Auswahl als Schalter mit dessen Namen angezeigt. Folgende Gruppen koennen uebernommen werden:

- **Erscheinungsbild** (Logo, Farben und Schriften).
- **Rechnungen und Angebote** (Layout, Zahlungsziel, Mahnungen und Ihre eigenen E-Mail-Texte).
- **MwSt.** (Abgabezeitraum und Standardsteuersatz).
- **Ausgaben und Belege** (Standardkategorie, Kilometerpauschale und Ihre eigenen Kategorien).
- **Funktionen** (welche Funktionen aktiviert sind, plus der Aufbau Ihrer Zeiterfassung).
- **Adresse und Kontakt** (Adresse, Telefon, E-Mail und Website).

Handelsregisternummer, MwSt.-Nummer, Bankverbindung und Rechnungsnummernkreis werden nie uebernommen: diese gehoeren jeweils nur zu einem Unternehmen.

## Ein Unternehmen verwalten oder entfernen

Oeffnen Sie fuer jedes eigene Unternehmen das Zeilenmenue und waehlen Sie **Verwalten**. Es oeffnet sich eine Seitenschublade mit zwei Optionen.

### Unternehmen inaktiv setzen

Waehlen Sie **Inaktiv setzen**, wenn Sie in einem Unternehmen nicht mehr arbeiten, aber die Unterlagen aufbewahren muessen. Die Administration bleibt lesbar und Sie koennen weiter alles exportieren, weil Sie die Buecher fuer die gesetzliche Aufbewahrungsfrist aufbewahren muessen. Sie koennen keine neuen Rechnungen, Ausgaben oder Kunden erfassen, und das Unternehmen wird nicht mehr fuer Ihr Abonnement gezaehlt.

Die Schublade zeigt vorab an, wie viel Sie pro Monat oder pro Jahr weniger zahlen.

Um fortzufahren, oeffnen Sie dieselbe Schublade und waehlen Sie **Reaktivieren**.

### Ein Unternehmen loeschen

Waehlen Sie **Loeschen** nur fuer ein Unternehmen, das Sie versehentlich angelegt haben. Der Arbeitsbereich prueft, ob bereits Buchungen vorhanden sind; sobald eine Rechnung, Ausgabe oder ein Kunde existiert, wird das Loeschen verweigert und Sie muessen das Unternehmen stattdessen inaktiv setzen. Diese Pruefung laeuft serverseitig, sodass die Meldung immer mit den tatsaechlichen Daten uebereinstimmt.

## Einen Mandanten einladen

Steuerberater koennen hier direkt einen Mandanten einladen:

1. Klicken Sie auf **Mandanten einladen**.
2. Tragen Sie E-Mail-Adresse, Firmenname und optional die Handelsregisternummer ein.
3. Klicken Sie auf **Einladung senden**.

Der Mandant erstellt sein eigenes Konto und bleibt Eigentuemer der Administration. Sie erhalten Zugang, sobald die Einladung akzeptiert wurde, und der Mandant kann diesen Zugang jederzeit widerrufen. Offene Einladungen koennen Sie erneut senden oder widerrufen. Der Link ist 30 Tage gueltig.

## Navigation folgt Ihrer Rolle

Die linke Seitenleiste blendet jetzt Elemente aus, die Ihre aktuelle Arbeitsbereichsrolle nicht nutzen darf, sodass Sie keine Links mehr sehen, die einen 403 zurueckgeben. Die API steuert dies ueber eine Deny-Liste: wenn ein neuer Endpunkt fuer eine Rolle gesperrt wird, verschwindet das Navigations-Element automatisch.

In einem Mandanten-Arbeitsbereich ist die Seitenleiste kuerzer, denn Teile, die zum Mandanten selbst gehoeren (Posteingang, Website, Abonnement, Teameinstellungen, Domains und KI-Hilfen), sind fuer einen Steuerberater nicht verfuegbar. Der Arbeitsbereich-Wechsler und der Eintrag "Arbeitsbereiche" bleiben immer sichtbar, sodass Sie jederzeit zwischen Administrationen wechseln koennen.

## Berechtigungen

- Arbeitsbereichs-Eigentuemer und Team-Admins koennen Unternehmen hinzufuegen und Arbeitsbereichseinstellungen verwalten.
- Steuerberater sehen nur die Arbeitsbereiche und Seiten, die ihr Mandant freigegeben hat.
- Teammitglieder sehen "Arbeitsbereiche" nur, wenn sie mehr als einen Arbeitsbereich haben und ihre Rolle dies erlaubt.

## Verwandt

- [Zugang und Steuerberater](/de/settings/team) fuer das Einladen von Teammitgliedern und Steuerberatern sowie das Festlegen von Seitenberechtigungen
- [Berichte](/de/features/reports) fuer die Ansicht verlorener Kunden und weitere Berichte
- [Dashboard](/de/features/dashboard) fuer das taegliche Briefing eines Arbeitsbereichs
