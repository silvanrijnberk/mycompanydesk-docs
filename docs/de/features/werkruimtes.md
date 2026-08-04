---
title: Arbeitsbereiche
last_verified: 2026-08-04
---

# Arbeitsbereiche

Die Seite "Arbeitsbereiche" unter `/werkruimtes` ist ein zentraler Ort fuer alles, was Sie verwalten. Sie ersetzt die aeltere Steuerberater-Uebersicht und passt sich an Ihre tatsaechliche Rolle an: ein Arbeitsbereich, mehrere eigene Unternehmen oder Mandanten-Administrationen.

> **Eigenes Geld und Mandantengeld werden niemals vermischt.** Eigene Unternehmen zusammenzufassen ergibt Sinn, weil das Geld Ihnen gehoert. Eine Summe ueber Mandanten-Administrationen waere bedeutungslos, deshalb haelt die Seite diese strikt getrennt.

## Wo Sie es finden

- Oeffnen Sie den Arbeitsbereich-Wechsler in der Seitenleiste und waehlen Sie **Arbeitsbereiche verwalten**.
- Sobald Sie mehr als einen Arbeitsbereich haben, erscheint **Arbeitsbereiche** auch direkt in der linken Navigation.
- Die alte URL `/boekhouder` leitet hierhin weiter.

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

## Kanzlei-Arbeitsbereich: Mandanten

Wenn Sie Steuerberater sind und Mandanten-Administrationen verwalten, wird die Seite zu einem Triage-Ueberblick:

- Eine Headline sagt, wie viele Ihrer Mandanten heute etwas brauchen.
- Eine Zahlenzeile zeigt die Gesamtzahl der Mandanten, Fristen dieser Woche, Mandanten, die Aufmerksamkeit brauchen, und offene Einladungen.
- Zeilen sind nach Dringlichkeit sortiert, sodass Administrationen, die heute Aktion erfordern, oben stehen.
- Ein Suchfeld erscheint ab sechs Mandanten.
- Offene Einladungen werden in einer eigenen Karte gezeigt; eine eingeladene Person zaehlt noch nicht als aktiver Mandant.

Die Chips funktionieren wie im kombinierten Arbeitsbereich, aber die Zeilen verwenden aggregierte Signale, sodass der Ueberblick auch bei vielen Mandanten skaliert. Mandantengeld wird nicht summiert.

## Ein eigenes Unternehmen hinzufuegen

Oeffnen Sie **Unternehmen hinzufuegen** und geben Sie dem neuen Unternehmen einen Namen. Jedes hinzugefuegte Unternehmen beginnt mit einer eigenen 60-taegigen Office-Testphase. Kunden, Rechnungen und Buchhaltung bleiben pro Unternehmen vollstaendig getrennt.

## Ein Unternehmen verwalten oder entfernen

Oeffnen Sie fuer jedes eigene Unternehmen das Zeilenmenue und waehlen Sie **Verwalten**. Es oeffnet sich eine Seitenschublade mit zwei Optionen.

### Unternehmen inaktiv setzen

Waehlen Sie **Inaktiv setzen**, wenn Sie in einem Unternehmen nicht mehr arbeiten, aber die Unterlagen aufbewahren muessen. Die Administration bleibt lesbar und Sie koennen weiter alles exportieren, weil Sie die Buecher fuer die gesetzliche Aufbewahrungsfrist aufbewahren muessen. Sie koennen keine neuen Rechnungen, Ausgaben oder Kunden erfassen, und das Unternehmen wird nicht mehr fuer Ihr Abonnement gezaehlt.

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

- [Zugang und Steuerberater](/de/settings/team) fuer das Einladen von Steuerberatern und das Festlegen von Seitenberechtigungen
- [Berichte](/de/features/reports) fuer die Ansicht verlorener Kunden und weitere Berichte
- [Dashboard](/de/features/dashboard) fuer das taegliche Briefing eines Arbeitsbereichs
