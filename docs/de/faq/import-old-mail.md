---
title: "Alte E-Mails importieren"
description: "Übernehmen Sie Ihre alte Mail von Hostinger oder einem anderen Anbieter in Ihren MyCompanyDesk-Posteingang, mit Ordnern, gesendeter Mail und Originaldatum."
last_verified: 2026-09-24
chatbot:
  triggers: ["oude e-mails importeren", "oude mail importeren", "mail overzetten", "mail verhuizen", "e-mail importeren", "hostinger mail", "postbus overzetten", "import email", "migrate email", "e-mails importieren", "importer mes e-mails", "alte e-mails importieren", "alte mails übernehmen", "mail umziehen", "postfach übernehmen", "e-mails übertragen", "mails migrieren"]
  actions:
    - { label: "Zu Adressen", to: "/inbox/settings" }
    - { label: "Zu Ihre Website und Domain", to: "/settings/domein" }
  follow_up: ["Wie verbinde ich meine eigene Domain?", "Welche Nameserver trage ich bei Hostinger ein?"]
---

# Alte E-Mails importieren

Ja, Sie können Ihre alten E-Mails in den Posteingang von MyCompanyDesk übernehmen, zum Beispiel von Hostinger, TransIP, Gmail, Outlook oder einem anderen Anbieter. Das geht auf zwei Wegen. Für beide brauchen Sie Office, denn der Posteingang auf Ihrer eigenen Domain gehört zu Office.

## Sie ziehen Domain und Mail von Hostinger oder einem anderen Hoster um

Nutzen Sie dann den Assistenten **Ich komme von einem anderen Anbieter**. Er erledigt alles in einem Durchgang: Domain verbinden, Postfächer anlegen und Ihre alte Mail übernehmen.

1. Gehen Sie zu **Einstellungen** → **Ihre Website und Domain**.
2. Wählen Sie **Ich komme von einem anderen Anbieter**.
3. Geben Sie Ihren Domainnamen ein und klicken Sie auf **Loslegen**.
4. Tragen Sie jede E-Mail-Adresse ein, die Sie bei Ihrem alten Hoster hatten, mit dem Passwort dieses Postfachs. Jede Adresse erhält bei uns ein eigenes Postfach.
5. Bestätigen Sie, dass wir Ihr Passwort verschlüsselt speichern dürfen, bis der Umzug abgeschlossen ist, und klicken Sie auf **Verbinden und umziehen**.

Der Assistent holt Ihre alte Mail sofort ab. Nachdem Ihre Domain zu uns umgestellt ist, holt er noch einmal ab, was inzwischen angekommen ist, und 48 Stunden später ein letztes Mal. Danach löschen wir Ihr Passwort, spätestens aber nach vierzehn Tagen. Kündigen Sie Ihr Paket beim alten Hoster erst, wenn der Assistent sagt, dass es so weit ist.

## Sie haben schon ein Postfach bei uns und möchten nur alte Mail übernehmen

1. Öffnen Sie **Posteingang** und wählen Sie oben **Adressen**.
2. Gehen Sie zur Karte **Bestehendes Postfach übernehmen**.
3. Wählen Sie unter **Bisheriger Anbieter** Ihren alten Anbieter. Für Hostinger ist der Server schon richtig eingestellt (`imap.hostinger.com`, Port 993).
4. Wählen Sie unter **Postfach bei uns**, in welchem Postfach die Mail landen soll.
5. Geben Sie E-Mail-Adresse und Passwort Ihres alten Postfachs ein.
6. Klicken Sie auf **Verbindung testen**, wählen Sie die Ordner aus, die mitkommen sollen, und klicken Sie auf **Übernahme starten**.

Sie sehen für jeden Ordner, wie weit die Übernahme ist. Ist sie fertig, sehen Sie, wie viele Nachrichten übernommen wurden und bis zu welchem Datum. Bei Gmail, Microsoft, iCloud und Yahoo brauchen Sie statt Ihres normalen Passworts ein App-Passwort dieses Anbieters.

## Was wird übernommen?

- **Ordner:** Posteingang, Gesendet, Archiv und Ihre eigenen Ordner sind standardmäßig ausgewählt. Entwürfe, Spam und Papierkorb können Sie selbst dazunehmen. Die Ordner werden zu Gesprächen in Ihrem Posteingang, nicht zu eigenen Ordnern.
- **Gesendete Mail:** ja, sie kommt als ausgehende Mail mit.
- **Datum:** Jede Mail behält ihr ursprüngliches Datum.
- **Gelesen oder ungelesen:** bleibt, wie es war.
- **Anhänge:** kommen mit. Nur Nachrichten über 40 MB werden übersprungen.
- **Doppelte Nachrichten:** werden übersprungen, Sie können die Übernahme also ruhig noch einmal starten.

Übernommene Mail löst keine Benachrichtigungen aus und zählt nicht zu Ihrem monatlichen Limit.

## Achtung: Die Aufbewahrungsfrist kann alte Mail löschen

Jedes Postfach kann eine **Aufbewahrung (Tage)** haben. Gespräche, deren letzte Nachricht älter als diese Frist ist, werden automatisch gelöscht. Da übernommene Mail ihr altes Datum behält, verschwindet alte Mail dann schon bei der nächsten täglichen Bereinigung.

Standardmäßig ist keine Aufbewahrungsfrist eingestellt und alles bleibt erhalten. Haben Sie selbst eine eingestellt, leeren Sie das Feld vor dem Import: Klicken Sie unter **Posteingang** → **Adressen** beim Postfach auf den Stift und leeren Sie **Aufbewahrung (Tage)**. Bei der Übernahme warnt MyCompanyDesk Sie außerdem, wenn eine Aufbewahrungsfrist aktiv ist.

## Siehe auch

- [Eigene Domain verbinden und Nameserver](/de/faq/connect-domain)
- [Domains, Website und Posteingang](/de/features/domains-website-inbox)
