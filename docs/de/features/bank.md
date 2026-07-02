---
title: Bankfeed
---

# Bankfeed

Verbinden Sie Ihr Bankkonto mit MyCompanyDesk und Ihre Transaktionen fließen automatisch herein. Regeln und smarte Kategorisierung machen aus abgehenden Zahlungen Ausgabenentwürfe, und Sie bestätigen jeden Entwurf, bevor er in Ihrer Buchhaltung landet.

## Wo Sie es finden

Der Bankfeed gehört zum Bereich Ausgaben:

- **Verbindungen und Einstellungen**: Öffnen Sie **Ausgaben** und klicken Sie auf das Zahnrad in der Seitenkopfzeile. Dort verbinden Sie Banken, prüfen automatisch importierte Ausgaben und verwalten Regeln und Benachrichtigungen.
- **Transaktionsfeed**: Die Schaltfläche **Transaktionen** in der Kopfzeile der Ausgabenseite öffnet die Liste der importierten Banktransaktionen.

## Ein Bankkonto verbinden

1. Gehen Sie zu **Ausgaben** und klicken Sie auf das Zahnrad.
2. Klicken Sie im Bankbereich auf **Erstes Bankkonto verbinden**, oder wählen Sie Ihre Bank direkt aus, wenn eine Bankauswahl angezeigt wird.
3. Bestätigen Sie die Verbindung in der App oder auf der Website Ihrer eigenen Bank. Das ist ein sicherer PSD2-Ablauf: MyCompanyDesk kann nur die Transaktionen lesen, die Sie freigeben, und niemals Geld bewegen.
4. Danach kehren Sie zu MyCompanyDesk zurück. Die erste Synchronisation importiert Transaktionen der letzten 90 Tage; danach bleibt der Feed automatisch aktuell.

Sie können bis zu 10 Konten verschiedener Banken verbinden. Jedes Konto erscheint als eigene Zeile mit dem aktuellen Saldo und dem Zeitpunkt der letzten Synchronisation. Über **Weitere Bank verbinden** fügen Sie mehr hinzu. Die Bankfreigabe läuft nach den PSD2-Regeln regelmäßig ab (üblicherweise alle 90 Tage); Sie werden vorab benachrichtigt.

Pro Konto können Sie:

- Den **Auto-Import** ein- oder ausschalten, sodass Sie bestimmen, welche Konten Ihre Ausgaben speisen.
- Jederzeit eine **manuelle Synchronisation** starten.
- Das Konto trennen.

## Synchronisationsfrequenz

Wie oft MyCompanyDesk nach neuen Transaktionen sucht, ist eine Einstellung für den gesamten Arbeitsbereich: **Echtzeit**, **Alle 4 Stunden** oder **Täglich**. Die manuelle Synchronisation pro Konto funktioniert immer zusätzlich.

## Von der Transaktion zur Ausgabe

Neue Transaktionen durchlaufen Ihre Regeln und die smarte Kategorisierung:

1. Zuerst werden Ihre eigenen Regeln geprüft. Eine passende Transaktion erhält die Kategorie der Regel.
2. Transaktionen ohne Regeltreffer bekommen einen Kategorievorschlag der smarten Kategorisierung oder fallen auf Ihre Standardkategorie zurück, wenn Sie eine festgelegt haben.
3. Eine kategorisierte abgehende Transaktion wird ein **Ausgabenentwurf**: Die Gegenpartei wird zum Lieferanten, und Betrag, Datum sowie die übliche USt.-Behandlung der Kategorie werden ausgefüllt.
4. Der Entwurf landet in der Prüfliste, es wird also nichts gebucht, ohne dass Sie es sehen.

Nur abgehende Transaktionen werden zu Ausgaben; eingehende Zahlungen werden nie in Ausgaben umgewandelt. Ausgaben aus Banktransaktionen zeigen in der Ausgabenliste ein kleines Banksymbol, sodass Sie immer sehen, woher eine Buchung stammt.

## Automatisch importierte Ausgaben prüfen

Die Karte **Automatisch importierte Ausgaben prüfen** steht oben auf der Seite mit den Ausgabeneinstellungen, sobald Entwürfe warten. Jede Zeile zeigt Lieferant, Datum, Betrag, die vorgeschlagene Kategorie und die Herkunft des Vorschlags (eine Ihrer Regeln, Ihre Standardkategorie, ein smarter Vorschlag oder der Bankfeed).

Für jeden Entwurf können Sie:

- **Bestätigen**: die Ausgabe unverändert buchen. Sie erscheint in Ihrer Ausgabenliste und zählt in Berichten und bei der USt.
- **Bearbeiten**: die Ausgabe öffnen, um Kategorie, USt. oder Betrag vor dem Buchen anzupassen.
- **Ablehnen**: den Entwurf verwerfen. Die Transaktion geht zur manuellen Bearbeitung zurück in den Feed.

## Feedeinstellungen

Auf derselben Einstellungsseite steuern Sie das Verhalten des Feeds:

- **Auto-Import**: das automatische Anlegen von Ausgabenentwürfen für den gesamten Arbeitsbereich ein- oder ausschalten.
- **Smarte Kategorisierung**: MyCompanyDesk eine Kategorie für Transaktionen ohne Regel vorschlagen lassen.
- **Eigene Überweisungen ignorieren**: Überweisungen zwischen Ihren eigenen verbundenen Konten überspringen.
- **Belege per E-Mail anfragen**: Ein täglicher Durchlauf schickt Lieferanten eine gebündelte Anfrage für noch fehlende Belege. Jeder Lieferant wird pro Transaktion nur einmal gefragt.
- **Mindestbetrag für den Import**: Transaktionen unter diesem Betrag werden keine Ausgaben.
- **Standardkategorie**: die Kategorie, die greift, wenn nichts anderes passt.
- **Buchungsdatum**: Wählen Sie, ob Ausgaben das Transaktionsdatum, das Wertstellungsdatum oder das Belegdatum verwenden.

## Regeln

Mit Regeln bringen Sie MyCompanyDesk bei, wiederkehrende Zahlungen zu kategorisieren. Klicken Sie auf der Einstellungsseite auf **Regel hinzufügen** und geben Sie an:

1. Einen Namen für die Regel (meist der Lieferant).
2. Ein Stichwort.
3. Die zugehörige Ausgabenkategorie.

Das Stichwort wird mit der Beschreibung und dem Namen der Gegenpartei verglichen; Groß- und Kleinschreibung spielt keine Rolle. Passende Transaktionen erhalten die Kategorie der Regel und werden Ausgabenentwürfe. Regeln gelten für alle verbundenen Konten, jede Regel zeigt, wie oft sie getroffen hat, und Sie können eine Regel jederzeit bearbeiten oder löschen.

Eine Regel prüft genau ein Stichwort. Bedingungen auf den Betrag werden nicht unterstützt, und Regeln legen Sie auf der Einstellungsseite an, nicht aus dem Transaktionsfeed heraus.

## Der Transaktionsfeed

Öffnen Sie **Transaktionen** in der Kopfzeile der Ausgabenseite, um alle importierten Transaktionen zu sehen, mit ein paar Kennzahlen oben (Transaktionen in diesem Monat, Anteil automatisch gebucht und wie viele noch Ihre Aufmerksamkeit brauchen). Drei Reiter teilen den Feed auf:

- **Zuzuordnen**: Transaktionen, die noch mit nichts verknüpft sind.
- **Zugeordnet**: Transaktionen mit Verknüpfung zu einer Rechnung oder Ausgabe, inklusive Link zum Datensatz.
- **Ignoriert**: Transaktionen, die Sie ignoriert haben.

Für jede offene Transaktion:

- **Zuordnen** öffnet ein Fenster, in dem Sie die Transaktion mit einer bestehenden Rechnung oder Ausgabe verknüpfen. Bei abgehendem Geld werden Ausgaben vorgeschlagen, bei eingehendem Rechnungen, und Sie können umschalten und suchen.
- **Ignorieren** verschiebt die Transaktion in den Reiter Ignoriert.

Das Verknüpfen ist immer ein manueller Schritt: MyCompanyDesk ordnet Transaktionen nicht automatisch Kunden, Rechnungen oder bestehenden Ausgaben zu.

## Benachrichtigungen

Unten auf der Einstellungsseite lassen sich drei Bankbenachrichtigungen unabhängig voneinander einschalten:

- **Synchronisationsfehler**: eine E-Mail und In-App-Benachrichtigung, wenn eine Bankverbindung nicht synchronisieren kann, mit einem Link zur Behebung.
- **Wochenübersicht**: eine E-Mail am Montagmorgen mit der Bankaktivität der vergangenen Woche. Sie wird übersprungen, wenn es nichts zu berichten gab.
- **Große Transaktionen**: eine Meldung, wenn eine Transaktion einen von Ihnen festgelegten Betrag erreicht oder überschreitet.

## Fehlerbehebung

**Meine Bankverbindung zeigt einen Fehler.** Öffnen Sie die Ausgabeneinstellungen über das Zahnrad auf der Ausgabenseite. Braucht Ihre Bank eine neue Freigabe, sehen Sie das in der Zeile der Verbindung; die Fehlerbenachrichtigung verlinkt ebenfalls dorthin.

**Eine Transaktion wurde keine Ausgabe.** Prüfen Sie, ob der Auto-Import eingeschaltet ist, der Betrag über Ihrem Mindestbetrag liegt und es eine abgehende Zahlung ist. Sie können die Transaktion jederzeit von Hand auf der Seite Transaktionen zuordnen.

**Ich bekomme keine Benachrichtigungen.** Prüfen Sie die Schalter unten auf der Seite mit den Ausgabeneinstellungen.
