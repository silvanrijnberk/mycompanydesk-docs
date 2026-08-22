---
title: Bankfeed
description: "Verbinden Sie Ihr Bankkonto, damit Transaktionen einfließen. Regeln machen aus Zahlungen Ausgabenentwürfe, die Sie vor der Buchung bestätigen."
last_verified: 2026-08-22
---

# Bankfeed

Verbinden Sie Ihr Bankkonto mit MyCompanyDesk und Ihre Transaktionen fließen automatisch herein. Regeln und smarte Kategorisierung machen aus abgehenden Zahlungen Ausgabenentwürfe, und Sie bestätigen jeden Entwurf, bevor er in Ihrer Buchhaltung landet.

## Wo Sie es finden

Der Bankfeed gehört zum Bereich Ausgaben:

- **Verbindungen und Einstellungen**: Öffnen Sie **Ausgaben** und klicken Sie auf das Zahnrad in der Seitenkopfzeile. Dort verbinden Sie Banken, prüfen automatisch importierte Ausgaben und verwalten Regeln und Benachrichtigungen.
- **Bankwarteschlange**: Oben auf der Ausgabenseite sehen Sie die Zeilen, die noch geprüft werden müssen.
- **Transaktionsfeed**: Die Schaltfläche **Transaktionen** in der Kopfzeile der Ausgabenseite öffnet die Liste der importierten Banktransaktionen.

## Ein Bankkonto verbinden

1. Gehen Sie zu **Ausgaben** und klicken Sie auf das Zahnrad.
2. Klicken Sie im Bankbereich auf **Erstes Bankkonto verbinden**, oder wählen Sie Ihre Bank direkt aus, wenn eine Bankauswahl angezeigt wird.
3. Bestätigen Sie die Verbindung in der App oder auf der Website Ihrer eigenen Bank. Das ist ein sicherer PSD2-Ablauf: MyCompanyDesk kann nur die Transaktionen lesen, die Sie freigeben, und niemals Geld bewegen.
4. Danach kehren Sie zu MyCompanyDesk zurück. Die erste Synchronisation importiert Transaktionen der letzten 90 Tage; danach bleibt der Feed automatisch aktuell.

Sie können bis zu 10 Konten verschiedener Banken verbinden. Jedes Konto erscheint als eigene Zeile mit dem aktuellen Saldo und dem Zeitpunkt der letzten Synchronisation. Über **Weitere Bank verbinden** fügen Sie mehr hinzu. Die Bankfreigabe läuft nach den PSD2-Regeln regelmäßig ab (üblicherweise alle 90 Tage); Sie werden vorab benachrichtigt.

Pro Konto können Sie:

- Den **Auto-Import** ein- oder ausschalten, sodass Sie bestimmen, welche Konten Ihre Ausgaben speisen.
- Ein **Import-von-Datum** festlegen. Dieses Datum bestimmt, ab wann Transaktionen in Ihrer eigentlichen Aufgabenliste erscheinen. Transaktionen vor diesem Datum rufen wir trotzdem ab (für Verknüpfen, Abgleichen und Saldo), aber sie erfordern keine Aktion von Ihnen. Lassen Sie das Feld leer, landet jede importierte Transaktion in der Liste.
- Jederzeit eine **manuelle Synchronisation** starten.
- Das Konto trennen.

## Synchronisationsfrequenz

Wie oft MyCompanyDesk nach neuen Transaktionen sucht, ist eine Einstellung für den gesamten Arbeitsbereich: **Echtzeit**, **Alle 4 Stunden** oder **Täglich**. Die manuelle Synchronisation pro Konto funktioniert immer zusätzlich.

## Von der Transaktion zur Ausgabe

Bevor eine Transaktion kategorisiert wird, werden abgehende Posten mit Ausgaben abgeglichen, die bereits in Ihrer Buchhaltung stehen. Ist die Zuordnung eindeutig, verknüpft MyCompanyDesk die Bankzeile automatisch mit der bestehenden Ausgabe. Dabei werden Betrag, Datum und der Name der Gegenstelle/des Lieferanten verglichen; nur bei einer starken Übereinstimmung auf allen Signalen verknüpft das System eine Transaktion ohne vorherige Rückfrage. Es entsteht nichts Neues; es wird nur festgehalten, welche Zahlung die Kosten beglichen hat.

Nach der Verknüpfungsphase durchlaufen neue Transaktionen Ihre Regeln und die smarte Kategorisierung:

1. Zuerst werden Ihre eigenen Regeln geprüft. Eine passende Transaktion erhält die Kategorie der Regel.
2. Transaktionen ohne Regeltreffer bekommen einen Kategorievorschlag der smarten Kategorisierung oder fallen auf Ihre Standardkategorie zurück, wenn Sie eine festgelegt haben.
3. Eine kategorisierte abgehende Transaktion wird ein **Ausgabenentwurf**: Die Gegenpartei wird zum Lieferanten, und Betrag, Datum sowie die übliche USt.-Behandlung der Kategorie werden ausgefüllt.
4. Der Entwurf landet in der Prüfliste, es wird also nichts gebucht, ohne dass Sie es sehen.

Transaktionen aus dem ersten Import, der ungefähr die letzten 90 Tage abruft, werden nie automatisch bestätigt. Sie landen immer in der Prüfliste, auch wenn die Kategorisierung sicher ist. Das gilt nur für den Rückstand vor der Verbindung; neue Transaktionen danach folgen den normalen Prüfregeln. Das Import-von-Datum pro Konto legt fest, ab welchem Zeitpunkt dieser Rückstand in Ihrer Aufgabenliste erscheint; alles davor bleibt für Verknüpfen und Abgleichen verfügbar, fordert aber keine Prüfung.

Nur abgehende Transaktionen werden zu Ausgaben; eingehende Zahlungen werden nie in Ausgaben umgewandelt. Ausgaben aus Banktransaktionen zeigen in der Ausgabenliste ein kleines Banksymbol, sodass Sie immer sehen, woher eine Buchung stammt.

## Die Bankwarteschlange

Bankzeilen, die noch keine Ausgabe sind, werden jetzt in der Ausgabentabelle angezeigt, nicht mehr in einer separaten Karte darüber. Eine gruppenübergreifende Überschrift in der Tabelle markiert die Grenze zwischen Ihren normalen Ausgaben und den Bankzeilen. Die Überschrift zeigt ein Banksymbol, die Anzahl wartender Zeilen und Massenaktionen, wenn mehr als eine Zeile vorhanden ist. Außerdem enthält sie einen kurzen Hinweis, dass diese Zeilen zwar in Ihrer Liste stehen, aber noch nicht in den Zahlen oben mitgezählt werden. So bleiben die KPIs und die Liste miteinander in Einklang.

Jede Bankzeile verwendet dieselben Spalten wie der Rest Ihrer Ausgaben: Lieferant, Datum, Betrag, Kategorie, Mehrwertsteuer und Herkunft. Eine Zeile, die bereits einen vorgeschlagenen Kategorie hat, zeigt das Kategorie-Symbol und den Grund für den Vorschlag (Ihre eigene Regel, intelligente Kategorisierung oder ein Verdacht basierend auf der Beschreibung). Eine Zeile ohne Kategorie zeigt ein offenes Fragezeichen und den Hinweis, eine Kategorie zu wählen. Die Zeile trägt auch das Logo der Bank, aus der sie stammt, und eventuelle Warnhinweise, die der Importeur hinterlassen hat (zum Beispiel ein Beleg, der nicht hinzugefügt werden konnte, oder ein MwSt.-Satz, der vom Üblichen abwich), stehen unter dem Lieferantennamen.

::: info
Die Warteschlange lädt maximal 100 Prüfzeilen und 100 Ausgabenkandidaten pro Abruf. Hat der Server mehr Zeilen, zeigt die Warteschlange das an und lädt nach einer Aktion automatisch den nächsten Batch, sodass nichts hinter einer vollen Seite stecken bleibt.
:::

Für jeden Entwurf können Sie:

- **Buchen**: sichtbar, wenn die Zeile bereits eine Kategorie hat. Bucht die Ausgabe unverändert. Sie erscheint in Ihrer Ausgabenliste und zählt in Berichten und bei der USt.
- **Einrichten**: sichtbar, wenn die Zeile noch keine Kategorie hat. Öffnet das Bankzeilen-Sheet, in dem Sie vor dem Buchen die Kategorie wählen. Das Sheet zeigt die rohe Bankbeschreibung und die Gegenpartei-IBAN, falls sie Kontext liefern, eine vorgeschlagene Kategorie mit ihrer Begründung sowie eine Vorschau der daraus resultierenden USt. Sie können außerdem **Diesen Lieferanten merken** aktivieren, um eine Lieferantenregel anzulegen, die zukünftige passende Zahlungen dieses Lieferanten ohne Prüfung automatisch bucht. Klicken Sie dann auf **Buchen**, um zu bestätigen, oder auf **Ignorieren**, um den Entwurf zu entfernen. Auf einem Telefon öffnet sich dasselbe Sheet aus der Zeile heraus.
- **Bearbeiten**: die Ausgabe öffnen, um Kategorie, USt. oder Betrag vor dem Buchen anzupassen.
- **Ablehnen**: den Entwurf verwerfen. Die Transaktion geht zur manuellen Bearbeitung zurück in den Feed.

Wenn die von Ihnen gewählte Kategorie seit dem Laden der Seite archiviert wurde, wird die Aktion Bestätigen oder Bearbeiten mit dem Fehler `EXPENSE_CATEGORY_UNKNOWN` abgelehnt, anstatt die Ausgabe stumm unter einer anderen Kategorie zu buchen. Laden Sie die Seite neu, um die aktuelle Kategorieliste zu laden, und wählen Sie erneut.

### Alte Warteschlangen-Einträge auf einen Schlag erledigen

Wenn Sie ein Bankkonto verknüpfen, kann der erste Import Transaktionen aus der Zeit vor MyCompanyDesk holen. Viele dieser älteren Zeilen stammen aus einer bereits abgerechneten Periode, sodass keine Entscheidung mehr nötig ist. Sobald die Warteschlange einen Block veralteter Zeilen erkennt, bietet die Gruppenüberschrift **Bis hier aktualisieren** an.

Ein Klick schließt alle Warteschlangen-Einträge vor dem vorgeschlagenen Datum, auch solche, die gerade nicht sichtbar sind. Nichts wird gelöscht: die Transaktionen wandern zu **Ignoriert**, und Sie können die Aktion mit einem Klick rückgängig machen. Ab dann fragt MyCompanyDesk nur noch nach Transaktionen ab dem vorgeschlagenen Datum.

Das Angebot erscheint nur, solange veraltete Zeilen vorhanden sind. Sind sie erledigt, verschwindet der Banner automatisch.

## Feedeinstellungen

Auf derselben Einstellungsseite steuern Sie das Verhalten des Feeds:

- **Auto-Import**: das automatische Anlegen von Ausgabenentwürfen für den gesamten Arbeitsbereich ein- oder ausschalten.
- **Smarte Kategorisierung**: MyCompanyDesk eine Kategorie für Transaktionen ohne Regel vorschlagen lassen.
- **Eigene Überweisungen ignorieren**: Überweisungen zwischen Ihren eigenen verbundenen Konten überspringen.
- **Belege per E-Mail anfragen**: Ein täglicher Durchlauf schickt Lieferanten eine gebündelte Anfrage für noch fehlende Belege. Jeder Lieferant wird pro Transaktion nur einmal gefragt. Mit der Option **Lieferanten automatisch an fehlende Belege erinnern** wird daraus eine wiederholte Erinnerung: nach der ersten Anfrage werden Lieferanten an Tag 7 und Tag 14 erneut kontaktiert, bis ein Beleg hochgeladen wurde. Ein Zähler bei der Einstellung zeigt, wie viele Zahlungen aktuell auf einen Belege warten.
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

## Vertrauensregeln für Lieferanten

Wird derselbe Lieferant regelmäßig bezahlt, kann MyCompanyDesk diesen Lieferanten als vertrauenswürdig einstufen und die Entwurfsprüfung für passende Transaktionen überspringen. Sie steuern das auf der Einstellungsseite:

- **Vertrauenswürdige Lieferanten aus bestätigten Entwürfen lernen**: wenn aktiviert, wird ein Lieferant als "vertrauenswürdiger Lieferant" eingestuft, sobald genügend bestätigte Entwürfe und passende Regelverwendung vorliegen.
- **Vertrauenswürdige Lieferanten erfordern meine Prüfung**: wählen Sie, ob Transaktionen vertrauenswürdiger Lieferanten weiterhin in der Prüf-Warteschlange erscheinen oder automatisch gebucht werden.

Ein Lieferant wird nur dann als vertrauenswürdig eingestuft, wenn ein starkes, konsistentes Muster bestätigter Zahlungen und eine aktive Kategorisierungsregel vorliegen. Sie können die Funktion jederzeit deaktivieren; dann wird alle bisher gelernte Lieferantenvertrauen gelöscht und jede Transaktion durchläuft wieder den normalen Prüfprozess.

## Der Transaktionsfeed

Öffnen Sie **Transaktionen** in der Kopfzeile der Ausgabenseite, um alle importierten Transaktionen zu sehen, mit ein paar Kennzahlen oben (Transaktionen in diesem Monat, Anteil automatisch gebucht und wie viele noch Ihre Aufmerksamkeit brauchen). Drei Reiter teilen den Feed auf:

- **Zuzuordnen**: Transaktionen, die noch mit nichts verknüpft sind.
- **Zugeordnet**: Transaktionen mit Verknüpfung zu einer Rechnung oder Ausgabe, inklusive Link zum Datensatz.
- **Ignoriert**: Transaktionen, die Sie ignoriert haben.

Für jede offene Transaktion:

- **Zuordnen** öffnet ein Fenster, in dem Sie die Transaktion mit einer bestehenden Rechnung oder Ausgabe verknüpfen. Bei abgehendem Geld werden Ausgaben vorgeschlagen, bei eingehendem Rechnungen, und Sie können umschalten und suchen.
- **Ignorieren** verschiebt die Transaktion in den Reiter Ignoriert.

Das Verknüpfen bleibt meist ein manueller Schritt. MyCompanyDesk verknüpft jedoch automatisch eine importierte Bankzeile mit einer bestehenden Ausgabe, wenn die Zuordnung eindeutig ist. Kunden, Rechnungen und alles Unklare brauchen weiterhin Ihre Bestätigung.

## Benachrichtigungen

Unten auf der Einstellungsseite lassen sich fünf Bankbenachrichtigungen unabhängig voneinander einschalten:

- **Synchronisationsfehler**: eine E-Mail und In-App-Benachrichtigung, wenn eine Bankverbindung nicht synchronisieren kann, mit einem Link zur Behebung.
- **Wochenübersicht**: eine E-Mail am Montagmorgen mit der Bankaktivität der vergangenen Woche. Sie wird übersprungen, wenn es nichts zu berichten gab.
- **Große Transaktionen**: eine Meldung, wenn eine Transaktion einen von Ihnen festgelegten Betrag erreicht oder überschreitet.
- **Lieferantenregel gelernt**: eine In-App-Benachrichtigung, wenn MyCompanyDesk aus Ihren bestätigten Entwürfen eine neue vertrauenswürdige Lieferantenregel gelernt hat.
- **Gesperrte USt.-Periode**: eine einmalige Meldung, wenn der Bank-Feed versucht, eine ausgehende Transaktion in eine bereits eingereichte und gesperrte USt.-Periode zu buchen. Die Zeile wird dauerhaft übersprungen, damit der Sync nicht endlos wiederholt, und die Benachrichtigung erklärt die Optionen: buchen Sie die Ausgabe manuell mit Datum in der aktuellen offenen Periode, oder reichen Sie eine Ergänzungsmeldung ein.

## Fehlerbehebung

**Meine Bankverbindung zeigt einen Fehler.** Öffnen Sie die Ausgabeneinstellungen über das Zahnrad auf der Ausgabenseite. Braucht Ihre Bank eine neue Freigabe, sehen Sie das in der Zeile der Verbindung; die Fehlerbenachrichtigung verlinkt ebenfalls dorthin.

**Eine Transaktion wurde keine Ausgabe.** Prüfen Sie, ob der Auto-Import eingeschaltet ist, der Betrag über Ihrem Mindestbetrag liegt und es eine abgehende Zahlung ist. Sie können die Transaktion jederzeit von Hand auf der Seite Transaktionen zuordnen.

**Eine Banktransaktion fällt in eine gesperrte USt.-Periode.** Der Bank-Feed kann keine Ausgaben automatisch mit Datum in einer bereits eingereichten Periode buchen. Sie erhalten die einmalige Meldung "Banktransaktion: USt.-Periode gesperrt", die Zeile wird als dauerhaft übersprungen markiert und der nächste Sync versucht sie nicht erneut. Um die Kosten dennoch zu erfassen, buchen Sie die Ausgabe manuell mit einem Datum in der aktuellen offenen Periode, oder fragen Sie Ihren Steuerberater, ob eine Ergänzungsmeldung der richtige Weg ist.

**Ich bekomme keine Benachrichtigungen.** Prüfen Sie die Schalter unten auf der Seite mit den Ausgabeneinstellungen.
