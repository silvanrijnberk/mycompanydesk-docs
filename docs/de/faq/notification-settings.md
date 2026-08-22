---
title: "Benachrichtigungseinstellungen"
description: "Verwalte deine Benachrichtigungsthemen unter Einstellungen > Meldingen. Auf dem Desktop öffnet die Glocke ein kompaktes Popover; auf dem Mobilgerät ein Vollbild-Sheet. Eine eigene Benachrichtigungsseite unter /meldingen bietet der Liste Platz für die Zwei-Fenster-Ansicht und die Tastatur-Triage."
last_verified: 2026-08-21
chatbot:
  triggers:
    - "notifications"
    - "notification settings"
    - "email notifications"
    - "alerts"
    - "meldingen"
    - "notificatie instellingen"
    - "benachrichtigungen"
    - "parametres notification"
  actions: []
  follow_up:
    - "How do I send payment reminders?"
    - "How do I change my email?"
---

So verwendest du die Benachrichtigungseinstellungen:

1. Gehe zu Einstellungen → "Meldingen" (Benachrichtigungen)
2. Schalte die Benachrichtigungsthemen ein oder aus. Die Kategorien sind:
   - **Aufmerksamkeit für Rechnungen**: überfällige Rechnungen, Rechnungen mit nahendem Fälligkeitsdatum, unbearbeitete Entwürfe, fehlgeschlagene Lastschriften, fehlgeschlagene Rechnungszustellungen, angehaltene automatische Vertragsabrechnung und Zeiterfassungen ohne Tarif.
   - **Eingehendes Geld**: Zahlungen, bestätigte Zahlungen und ungewöhnliche Banktransaktionen.
   - **Anstehende Fristen**: Mehrwertsteuer, Einkommensteuer, Körperschaftsteuer, die KOR-Schwelle sowie auslaufende Verträge oder Projekte. Du erhältst sie rechtzeitig, damit du nie zu spät dran bist. Diese Kategorie umfasst auch automatische Buchungen, die nicht erstellt werden konnten, weil das Datum in eine bereits angegebene und gesperrte Mehrwertsteuerperiode fällt, etwa eine weitergeleitete Inbox-Rechnung oder eine Banktransaktion. Die Benachrichtigung nennt den Lieferanten und das Rechnungsdatum und verweist dich auf die Inbox oder den Bankfeed, damit du es in der laufenden Periode buchen oder eine Ergänzungsmeldung einreichen kannst.
   - **Neue Chancen**: Angebotsanfragen, unterschriebene Angebote und Website-Verkäufe.
   - **Neue Inbox-Nachricht**: ein Hinweis auf deinem Telefon, sobald ein Kunde oder Lieferant eine E-Mail sendet.
   - **Ausgabe fällig**: bevorstehende Fälligkeiten von Ausgaben, die du angelegt hast, etwa geplante Miete oder Nebenkosten, damit du sie rechtzeitig bezahlst oder erfasst.
   - **Lieferantenregel gelernt**: eine In-App-Meldung, wenn MyCompanyDesk aus deinen bestätigten Entwürfen eine neue vertrauenswürdige Lieferantenregel für den Bankfeed gelernt hat.
   - **Tipps und Neuigkeiten von MyCompanyDesk**: höchstens eine E-Mail pro Monat.
   Kritische Nachrichten zu deinem Konto senden wir immer; diese kannst du nicht abschalten.
3. Auf derselben Seite aktivierst du auch Push-Benachrichtigungen für das Gerät, das du gerade verwendest
4. Hast du den Browser-Dialog weggeklickt? Klicke dann auf die Benachrichtigungsglocke oben in der App, wähle **Mehr Optionen** (drei Punkte) und tippe auf **Aktivieren**, um Push-Benachrichtigungen nachträglich zu aktivieren
5. Änderungen werden automatisch gespeichert

## Die Benachrichtigungsliste

Benachrichtigungen sind in drei Gruppen eingeteilt, sodass die Liste wie eine Zeitleiste liest: **Heute**, **Gestern** und **Älter**.

Wenn du die Liste öffnest, werden alle darin enthaltenen Benachrichtigungen als gesehen markiert: die Zahl an der Glocke springt zurück auf null, aber jede Zeile behält ihren eigenen ungelesenen Punkt, bis du sie öffnest.

Werden an einem Tag mehrere ähnliche informelle Updates eingehen, etwa Release Notes oder Produkttipps, werden sie hinter dem neuesten zusammengefasst. Eine Schaltfläche zeigt, wie viele weitere es gibt; klicke, um die Gruppe zu erweitern, erneut klicken, um sie zu reduzieren.

Auf Telefon oder Tablet kannst du eine Zeile schnell wischen: nach links zum Ablehnen, nach rechts zum Snoozen. Die Zeile zeigt an, was passiert, wenn du loslässt. Auf jeder Zeile gibt es auch Ablehnen- und Snooze-Schaltflächen.

Du kannst dich mit der Tastatur durch die Liste bewegen: Pfeiltasten verschieben die Auswahl, Enter oder Leertaste öffnen die ausgewählte Benachrichtigung, Esc schließt das Popover oder Sheet. Das Popover oder Sheet schwebt über anderer schwebender UI, sodass der Fokus darin bleibt, solange es geöffnet ist.

Während die Liste zum ersten Mal lädt, erscheinen graue Platzhalterzeilen in Form echter Benachrichtigungen anstelle eines Spinners, damit das Layout nicht springt, sobald die echten Zeilen eintreffen. Wenn du eine Zeile ablehnst oder snoozt, gleiten die verbleibenden Zeilen nach oben, anstatt sofort zu springen. Eine reduzierte Gruppe klappt sanft aus.

## Das Benachrichtigungs-Popover und -Sheet

Auf dem Desktop öffnet ein Klick auf die Glocke ein kompaktes Popover darunter mit derselben Benachrichtigungsliste. Auf einem Telefon oder Tablet öffnet die Glocke ein Vollbild-Sheet. Beide dienen als kurzer Blick: klicke auf eine Zeile, um das Popover oder Sheet zu verlassen und den zugrunde liegenden Datensatz direkt zu öffnen.

Ein Link unten, **Alle meldingen bekijken**, öffnet die eigene **Benachrichtigungen**-Seite unter `/meldingen`. Diese Seite bietet der Liste genug Platz, um auf breiten Bildschirmen das Detailpanel neben der Liste anzuzeigen, mit derselben Tastatur-Triage: Pfeiltasten zum Bewegen, Enter oder Leertaste zum Öffnen und `E`, um die ausgewählte Benachrichtigung zu bearbeiten.

Solange das Popover oder Sheet geöffnet ist, werden eingehende Benachrichtigungs-Popups unterdrückt; sie setzen sich fort, nachdem du es schließt.

## Eine Benachrichtigung snoozen

Du kannst eine Aktionsbenachrichtigung vorübergehend stummschalten, ohne sie als gelesen zu markieren. Klicke auf die Glocke, um die Liste zu öffnen, und wähle bei der gewünschten Zeile **Snooze**. Du kannst snoozen bis:

- **1 Stunde** ab jetzt
- **Morgen** um 09:00
- **Nächste Woche** um 09:00

Nach der nächsten Aktualisierung verschwindet die Benachrichtigung aus der ungelesenen Liste, aber die Zeile bleibt noch kurz mit einer **Rückgängig**-Schaltfläche sichtbar. Release Notes und Tipps können nicht gesnoozt werden; du liest sie oder markierst sie als gelesen.

## Nicht stören

Öffne die Benachrichtigungsliste und tippe im Kopf auf **Mehr Optionen** (drei Punkte), um **Nicht stören** für Push-Benachrichtigungen einzustellen. Du kannst wählen zwischen:

- **Aus**
- **1 Stunde**
- **Bis morgen** um 09:00

Während „Nicht stören“ aktiv ist, werden Push-Benachrichtigungen zurückgehalten, aber die Benachrichtigungen erscheinen weiterhin in der App-Liste und E-Mails sind nicht betroffen. Ein Chip im Kopf des Panels zeigt den aktiven Zustand und die Ablaufzeit an.

## Das Detailpanel

Das Detailpanel befindet sich auf der eigenen **Benachrichtigungen**-Seite (`/meldingen`), wo der Drawer genug Breite hat, um Liste und Panel nebeneinander anzuzeigen. Es ist nicht Teil des kompakten Glocke-Popovers oder Sheets auf kleineren Oberflächen. Klicke auf eine Benachrichtigung auf der Seite, um das Panel mit dem vollständigen Kontext zu öffnen. Bei einer überfälligen Rechnung siehst du den Gesamtbetrag, den offenen Betrag, den Zahlungsstatus und das Ausstellungsdatum. Bei einer Mehrwertsteuerfrist siehst du die Periode und das Fälligkeitsdatum. Bei zusammengefassten Benachrichtigungen listet das Panel die einzelnen Rechnungen, Angebote oder Datensätze hinter der Zusammenfassung auf.

Das Panel wartet, bis der zugrunde liegende Datensatz geladen ist, bevor es wechselt. Bis dahin bleibt die vorherige Benachrichtigung sichtbar und ihre Schaltflächen sind inaktiv, damit sich nichts unter dem Cursor verschiebt. Sobald der Datensatz bereit ist, blendet das Panel in einem Schritt zur neuen Benachrichtigung über.

Die Aktionen für den Eintrag werden so sortiert, dass die wichtigste Aktion zuerst steht und als primäre Aktion markiert ist. Der Rest bleibt in derselben Reihe. Passen mehr Aktionen in das Panel als Platz ist, verschieben sich die übrigen hinter die Schaltfläche **Mehr Aktionen** (drei Punkte). Tippe darauf, um den Rest zu sehen, ohne den Drawer zu schließen.

Die verfügbaren Aktionen hängen von der Benachrichtigung ab:

- **Als bezahlt markieren**: bucht eine manuelle Zahlung für den Restbetrag und schließt die Rechnungsbenachrichtigung ab.
- **Als abgegeben markieren**: markiert den Mehrwertsteuerzeitraum als abgegeben; nur bei Mehrwertsteuerfristen sichtbar.
- **Zahlungserinnerung senden**: sendet eine Zahlungserinnerung für die Rechnung, sichtbar bei überfälligen Rechnungen.
- **Öffnen**: öffnet den zugrunde liegenden Datensatz, wie die Rechnung, das Angebot oder den Vertrag.
- **Snooze** (oder **Später**): stellt die Benachrichtigung vorübergehend zurück, ohne sie als gelesen zu markieren.
- **Ablehnen** (oder das **X**-Symbol): entfernt die Benachrichtigung aus deiner eigenen ungelesenen Liste. Auf einem Telefon befindet sich dasselbe Schließsymbol oben rechts in der Detail-Overlay, damit es nicht über dem Betrag liegt.

Release Notes und Tipps haben kein Detailpanel, weil es keinen zugrunde liegenden Datensatz gibt, auf den du reagieren kannst.

Push-Benachrichtigungen funktionieren in deinem Browser und in der Android-App. Auf Android zeigt die Benachrichtigung das App-Symbol, die Farbe der Kategorie und, wenn verfügbar, den Avatar des Absenders.

Wenn du eine fehlende Benachrichtigung suchst, prüfe sowohl den Benachrichtigungs-Schalter als auch die E-Mail-Adresse deines Kontos.
