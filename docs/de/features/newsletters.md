---
title: Newsletter
description: "Schreiben, planen und versenden Sie Mailings an Ihre Kunden. Der Editor hängt an Ihrer Kundenliste, Empfänger bleiben ohne CSV-Import aktuell."
last_verified: 2026-10-19
---

# Newsletter

> Newsletter sind Teil von **Office**. Das Modul ist standardmäßig aus: Schalten Sie es unter **Einstellungen › Module** ein. Dafür brauchen Sie eine eigene Domain mit E-Mail, denn Newsletter gehen immer von Ihrer eigenen Domain aus raus.

Der Newsletter-Editor hilft Ihnen, Mailings zu schreiben, zu planen und an Ihre Kunden zu versenden. Er ist mit Ihrer Kundenliste verknüpft, sodass Empfänger ohne CSV-Import synchron bleiben.

## Wo Sie es finden

Schalten Sie die Funktion unter **Einstellungen › Module** frei (die Zeile **Newsletter**), und öffnen Sie dann **Kommunikation › Newsletter** im Hauptmenü.

Die Seite hat vier Registerkarten:

- **Kampagnen**: Entwürfe, geplante Mailings und versendete Kampagnen.
- **Abonnenten**: das Publikum, das Ihre Newsletter erhält.
- **Übersicht**: die wichtigsten Kennzahlen aktueller Kampagnen.
- **Einstellungen**: Absender, Anmeldung und Abmeldung.

Sie benötigen Zugriff auf die Workspace-Einstellungen, um die Funktion ein- oder auszuschalten.

## Kampagnenliste

Jede Kampagne erscheint als eigene Zeile mit:

- einem farbigen Symbol, das den Kampagnenstatus zeigt
- der Betreffzeile oder *kein Betreff*, wenn der Entwurf noch leer ist
- einer Metadaten-Zeile mit dem relevanten Zeitstempel
- einem Status-Badge (Entwurf, Geplant, Wird gesendet, Gesendet, Abgebrochen oder Fehlgeschlagen)
- einem kleinen Balken mit der Öffnungsrate, sobald eine Kampagne versendet wurde
- einer primären Aktion: **Editor öffnen** für Entwürfe und geplante Mailings, **Ansehen** für gesendete Mailings
- weiteren Aktionen hinter dem Überlauf-Menü: **Ergebnis** (sobald etwas versendet wurde), **Erneut senden** (bei einer fehlgeschlagenen Kampagne) und **Löschen** (solange die Kampagne nicht versendet ist)

Bewegen Sie die Maus über die Zeile, um das Überlauf-Menü auf dem Desktop sichtbar zu machen. Auf dem Telefon wischen Sie über die Zeile oder halten sie gedrückt.

## Eine Kampagne erstellen

Es gibt zwei Einstiegspunkte:

- **Leerer Entwurf** im Seitenkopf startet einen leeren Entwurf.
- **Newsletter erstellen** startet den KI-Assistenten, der aus einer kurzen Anweisung eine erste Version Ihres Mailings erstellt.

Beide führen in den Kampagnen-Editor, in dem Sie Betreff, Preheader, Inhalt, Absender und Zielgruppe bearbeiten können, bevor Sie senden oder planen.

## Senden und planen

- **Senden** reiht die Kampagne sofort ein.
- **Einplanen** lässt Sie Datum und Uhrzeit in der Zukunft wählen. Mit **Planung abbrechen** wird der Brief wieder ein Entwurf.
- **Test senden** schickt zuerst ein Testexemplar an eine Adresse Ihrer Wahl.

Ihre Änderungen werden beim Tippen automatisch gespeichert; eine eigene Speichern-Schaltfläche gibt es nicht.

Sobald eine Kampagne eingereiht oder versendet wurde, kann sie nicht mehr gelöscht werden; eine fehlgeschlagene Kampagne können Sie über das Überlauf-Menü erneut senden.

Die Bestätigungs- und Willkommens-Mail für neue Abonnenten kommt von Ihrem eigenen Unternehmen: Ihr Name als Absender und Ihre eigene Antwortadresse, statt einer anonymen MyCompanyDesk-Adresse. Lässt sich eine geplante Kampagne nicht versenden, bekommen Sie eine Benachrichtigung („Nieuwsbrief niet verstuurd“, Newsletter nicht versendet) und können sie danach erneut senden.

## Abonnenten hinzufügen: worauf dürfen Sie mailen?

Wenn Sie selbst Adressen hinzufügen, aus einer Liste oder von Ihren Kunden, fragt die App zuerst, worauf Sie diesen Menschen E-Mails schicken dürfen:

- **Sie haben selbst gesagt, dass sie Ihren Newsletter möchten.** Wählen Sie dies, wenn sich Menschen bei Ihnen angemeldet haben oder zugestimmt haben.
<!-- TODO(source-missing): der rechtliche Rahmen für Mails an eigene Kunden über eigene, ähnliche Produkte (Soft-Opt-in) fehlt noch in sources/. Der Hinweis der App steht unten wörtlich; machen Sie daraus keine weitere rechtliche Auslegung, bis es eine Quelldatei gibt. -->
- **Sie sind Kunden, die bei Ihnen gekauft haben.** Die App erklärt an Ort und Stelle, was das für Ihre Mailings bedeutet (eigene, vergleichbare Produkte oder Dienstleistungen, und nur, wenn sie beim Kauf ablehnen konnten) und fügt nur Kunden hinzu, die eine versendete Rechnung haben. Jeder Newsletter enthält einen Abmeldelink.

Die Antwort wird beim Import gespeichert, damit Sie jederzeit zeigen können, warum jemand auf der Liste steht.

Zwei weitere Sicherungen:

- **Zuerst eine Bestätigungsmail** (Double-Opt-in): Menschen kommen erst auf die Liste, wenn sie auf den Link in dieser Mail klicken. Die Bestätigungsmails gehen in kleinen Portionen über einige Stunden hinaus, damit sie nicht als Spam enden. Das ist die sicherste Wahl, wenn Sie nicht sicher sind, ob sie Ja gesagt haben.
- **Von Kunden**: nur Kunden mit einer versendeten Rechnung werden hinzugefügt.

## Einwilligungs-Aufzeichnungen

Jedes Mal, wenn Sie selbst Adressen hinzufügen, speichert MyCompanyDesk, wann das geschah, durch wen, auf welcher Grundlage (deren Einwilligung oder Ihr eigener Kunde), mit welcher Erklärung, die Sie bestätigten, und mit welchem Ergebnis (hinzugefügt, in Erwartung der Bestätigungsmail, oder übersprungen). Die Aufzeichnungen liegen in ihrer eigenen Ansicht beim Newsletter-Modul, sie lassen sich als CSV exportieren, und es ist klug, sie aufzubewahren: Wenn jemand fragt, warum er Ihren Newsletter erhält, ist das Ihre Antwort.

Menschen, die sich über Ihre eigene Website anmelden, bestätigen per E-Mail; dafür braucht es keine separate Aufzeichnung.

## Ergebnisse

Öffnen Sie die Aktion **Ergebnis** bei einer versendeten, sendenden oder fehlgeschlagenen Kampagne, um Zustell- und Öffnungsdaten pro Empfänger zu sehen. Die Registerkarte Übersicht fasst diese Zahlen auf Workspace-Ebene zusammen.
