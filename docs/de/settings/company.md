---
title: Firmeneinstellungen
description: "Der Name auf Ihren Rechnungen, Adresse, KvK, Logo, Markenfarbe, Gütesiegel und Öffnungszeiten, gebündelt unter Einstellungen."
last_verified: 2026-10-13
---

# Firmeneinstellungen

Alles, was bestimmt, wie Ihr Unternehmen nach außen wirkt: der Name auf Ihren Rechnungen, Ihr Logo und Ihre Markenfarbe, Ihre Gütesiegel, Ihre Website und Ihre Öffnungszeiten.

## Wo Sie es finden

Öffnen Sie **Einstellungen** im Menü oder gehen Sie zu `/settings`. Die Unternehmensthemen sind Zeilen in den Gruppen **Ihr Unternehmen** und **Rechnungen und Geld**:

- **Unternehmensdaten** unter `/settings/bedrijfsgegevens`: Firmenname, Adresse, KvK- und MwSt.-Nummer, Kontaktdaten, Gütesiegel und Öffnungszeiten
- **Logo und Farbe** unter `/settings/uiterlijk`: Ihr Logo, Ihr Anzeigename und Ihre Markenfarbe
- **Rechnungsgestaltung** unter `/settings/factuurontwerp`: das Designstudio für Ihre Rechnungen, beschrieben unter [PDF-Design](/de/settings/pdf)

Alte Links auf die früheren Arbeitsbereichseinstellungen leiten automatisch auf die neue Stelle weiter.

## Unternehmensdaten

Pfad: `/settings/bedrijfsgegevens`

Die Angaben, die auf jeder Rechnung, jedem Angebot und jeder E-Mail stehen. Sie müssen korrekt sein.

- **Firmenname**: steht auf jedem Dokument
- **Handelsregisternummer**: die niederländische KvK-Nummer. Hat sie nicht 8 Ziffern, erscheint ein Hinweis (nur zur Kontrolle); das eigentliche Nachschlagen übernimmt die Ausfüllhilfe oben auf der Seite, siehe unten
- **USt-IdNr.**: zum Beispiel `NL123456789B01`
- **Adresse**: Straße, Postleitzahl, Ort und Land, mit Hilfe beim Ausfüllen der Adresse
- **Kontakt**: E-Mail, Telefon, Support-E-Mail, Website und Zeitzone. Die Adresse, mit der Sie sich anmelden, erscheint erst auf Ihrer Website, wenn Sie sie als öffentliche Adresse bestätigen (der Website-Assistent und das Veröffentlichungsfenster fragen danach); Ihre Rechnungen verwenden sie in jedem Fall.
- **Über Ihr Unternehmen**: eine kurze **Unternehmensbeschreibung** für Ihre Geschäftsseite im Kundenportal
- **Soziale Medien**: Instagram, Facebook, LinkedIn und X. Fügen Sie die vollständige Adresse Ihres Profils oder Ihrer Seite ein (zum Beispiel `https://instagram.com/ihrefirma`); ein Wert, der kein Link wird, wird beim Verlassen des Feldes markiert, und bei einem bloßen Benutzernamen sehen Sie, wohin er verlinken würde.

Ihre IBAN tragen Sie nicht hier ein, sondern unter **Einstellungen › Bezahlung**. Änderungen werden automatisch gespeichert.

## Ihre Daten automatisch ausfüllen

Oben auf der Seite Unternehmensdaten steht die Karte **Ihre Daten automatisch ausfüllen**. Sie holt Ihre Firmendaten aus zwei Quellen und stellt sie nebeneinander:

- **Handelskammer (KvK)**: Name und Adresse
- **Google**: Telefon, Website und Öffnungszeiten aus Ihrem Google-Unternehmensprofil

Jeder Vorschlag steht in der Liste **Das haben wir gefunden** mit seiner Quelle. Haken Sie an, was Sie übernehmen möchten, und drücken Sie die Schaltfläche **Übernehmen** (sie zählt mit, was Sie auswählen). Es werden nur leere Felder gefüllt: Eine Zeile, in der schon etwas steht, markiert die Karte als **bereits ausgefüllt** und überspringt sie. Eine Abfrage überschreibt also nie Ihre eigene Arbeit.

## Gütesiegel

Pfad: `/settings/bedrijfsgegevens#keurmerken`

Die Karte **Gütesiegel** auf der Seite Unternehmensdaten enthält die Zertifikate und Qualitätszeichen Ihres Unternehmens, etwa STEK, VCA oder CE. Sie erscheinen auf Ihrer Website und, je nach Mailart wie unter Einstellungen › E-Mail gewählt, unter Ihren E-Mails. Sie verwalten sie an einer Stelle.

- **Gütesiegel hinzufügen**: Wählen Sie ein Bild (PNG, JPG, WebP oder SVG, höchstens 3 MB). MyCompanyDesk schneidet den weißen Rand um das Logo weg, begrenzt die Höhe auf 480 Pixel und wandelt es in ein PNG mit Transparenz um. Ein SVG wird in ein normales Bild umgewandelt, damit auch Mailprogramme ohne SVG-Unterstützung das Siegel zeigen. Das Bild ist optional: Ein Gütesiegel kann auch nur einen Namen tragen, der dann auf Ihrer Website und in der Textversion Ihrer E-Mails erscheint.
- **Name**: Pflichtfeld, höchstens 64 Zeichen. Der Name beschreibt das Logo für Menschen, die es nicht sehen können.
- **Link (optional)**: zum Beispiel die Registerseite, auf der Kunden Ihr Zertifikat prüfen können. Der Link muss mit `https://` oder `http://` beginnen.
- Höchstens sechs Gütesiegel. Ordnen Sie sie mit den Pfeilen nach oben und unten; um das Bild zu ersetzen, entfernen Sie das Siegel und fügen es neu hinzu.
- Ein Schalter, standardmäßig an: **Auf Ihrer Website anzeigen** füllt den Gütesiegel-Block auf Ihrer Website. Ob die Logos auch unter Ihren E-Mails stehen, wählen Sie pro Mailart unter **Einstellungen › E-Mail**; die Karte zeigt einen Hinweis mit Link dorthin.
- Mit dem ersten Gütesiegel erscheint automatisch ein **Gütesiegel**-Block auf der Startseite Ihrer Website, als Entwurf. Er geht live, sobald Sie Ihre Website veröffentlichen.

## Anrede auf Ihrer Website

Unter der Karte Gütesiegel steht die Karte, die festlegt, wie Ihre Website ihre Besucher auf Niederländisch anspricht: "Du (je)" („Ik help je graag.“) oder **Sie (u)** („Ik help u graag.“). Die festen Texte Ihrer Website, etwa Schaltflächen, Formularzeilen und Dankesnachrichten, folgen der Wahl sofort; ein Einzelunternehmen spricht in der Ich-Form statt in der Wir-Form. Was Sie oder der Textassistent schon geschrieben haben, behält seine Anrede. Die Karte bietet an, auch diese Texte in einem Schritt umzustellen, einschließlich selbst getippter: Nur die Anrede ändert sich, der Inhalt bleibt gleich. Danach sehen Sie, wie viele Texte geändert wurden und welche stehen blieben, und mit dem Veröffentlichen gehen sie live. Der Website-Assistent stellt dieselbe Frage im ersten Schritt und schreibt dieselbe Einstellung.

## Öffnungszeiten

Pfad: `/settings/bedrijfsgegevens#openingstijden`

Hier verwalten Sie eine zentrale Quelle für Ihre Öffnungszeiten. Dieselben Zeiten stehen auf Ihrer Website (das Geöffnet-Abzeichen und Ihre Unternehmensdaten) und gelten für den Online-Terminblock, sodass Sie nie zwei Stellen abgleichen müssen.

**Die normale Woche**

- Setzen Sie jeden Tag auf **Geöffnet** oder **Geschlossen**.
- Geben Sie einem offenen Tag einen oder zwei Zeitblöcke, zum Beispiel `09:00 - 12:00` und `13:00 - 17:00`.
- Haben Sie noch nichts eingestellt, steht dort ein Vorschlag (Montag bis Freitag 09:00 - 17:00). Ihre Website zeigt erst Öffnungszeiten, wenn Sie hier etwas ändern und es gespeichert ist.

**Freie Tage und Ausnahmen**

- Fügen Sie einzelne Daten oder einen zusammenhängenden Zeitraum für Urlaub, Feiertage oder einmalige Änderungen hinzu.
- Wählen Sie dafür **Geschlossen**, **Nach Vereinbarung** oder **Angepasste Zeiten**.
- Mit **Feiertage hinzufügen** setzen Sie anerkannte Feiertage der nächsten zwölf Monate mit einem Tipp auf geschlossen.
- Der Online-Terminblock und Ihre Website berücksichtigen diese Ausnahmen.

**Website und Termine**

Ihre Öffnungszeiten erscheinen auf Ihrer Website und im Online-Terminblock. Die Website selbst verwalten Sie im Bereich **Website** im Hauptmenü; der Terminblock ist unter [Online-Termine](/de/features/site-bookings) beschrieben. Beide lesen aus derselben Quelle, eine Änderung hier wirkt also an beiden Stellen. Diese Zeiten begrenzen die Momente, die Kunden online selbst wählen können. Wer stattdessen einen Termin anfragt, ist nicht an sie gebunden: Jeder Tag kann angefragt werden, und Sie bestätigen.

Änderungen werden automatisch gespeichert.

### Auch bei Google aktuell halten

In der Karte Öffnungszeiten steht eine Zeile, die Ihre Zeiten mit Ihrem Google-Unternehmensprofil verbindet. Schalten Sie **Auch bei Google aktuell halten** ein, melden Sie sich bei Google an und wählen Sie den Standort, der aktualisiert werden darf. Ändern Sie danach etwas, überträgt MyCompanyDesk die Änderung in der folgenden Nacht auch in Ihr Google-Profil; die Zeile meldet das mit **Ihre Änderung geht heute Nacht an Google**.

Laufen die beiden Wochen auseinander, fragt die Zeile, welche Fassung gelten soll, denn MyCompanyDesk überschreibt Google nie von sich aus: **Meine Zeiten bei Google setzen** oder **Die von Google übernehmen**. Übernehmen ersetzt die Zeiten oben durch die von Google und aktualisiert damit auch den Geöffnet-Hinweis auf Ihrer Website. Nur abweichende Tage stehen in der Tabelle, und ein Tag mit **Nach Vereinbarung** erscheint bei Google als geschlossen, weil Google diesen Zustand nicht kennt. Mit **Jetzt aktualisieren** übertragen Sie Ihre Zeiten, ohne auf den nächtlichen Durchlauf zu warten; nach einem fehlgeschlagenen Versand erscheint der Fehler mit der Schaltfläche daneben.

Schalten Sie den Schalter aus, endet der Abgleich, Konto und Standort bleiben aber verbunden.

## Logo und Farbe

Pfad: `/settings/uiterlijk`

Ihr Erscheinungsbild für Rechnungen, Angebote, E-Mails und Ihre Website, mit einer Live-Vorschau des Ergebnisses.

- **Anzeigename**: ein optionaler Markenname auf Ihren E-Mails und PDFs. Bleibt er leer, wird Ihr Firmenname verwendet. Weicht er vom Firmennamen ab, bestimmt er auch, was auf Ihrer Rechnung und im App-Menü steht; das Formular Unternehmensdaten zeigt dann unter dem Namensfeld, was gerade angezeigt wird („Rechnung und Menü zeigen derzeit: ...“), mit einem Link zurück zu dieser Seite.
- **Markenfarbe**: eine Farbe für Website, Newsletter, E-Mails und Dokumente. Geben Sie einen Farbcode ein oder wählen Sie eine der Voreinstellungen; ist eine Farbe zu hell, um lesbar zu bleiben, erscheint eine Warnung. Haben Sie in der **Rechnungsgestaltung** eine eigene Akzentfarbe gewählt, sehen Kunden diese Farbe auf Rechnungen, Angeboten, E-Mails und der Zahlungsseite. Ein Hinweis unter der Farbe bietet an, diese Akzentfarbe mit einem Klick auch als Markenfarbe zu übernehmen.
- **Firmenlogo**: Laden Sie Ihr Logo als SVG (empfohlen), PNG oder JPG hoch. PNG und JPG dürfen bis 10 MB groß sein, SVG bis 2 MB; ein zu großes Rasterbild verkleinert MyCompanyDesk beim Hochladen selbst. Es erscheint auf jedem PDF und oben in Ihren E-Mails. Für Fotologos gibt es eine Schaltfläche, die den Hintergrund entfernt.
- **Logo aus Text generieren**: Noch kein Logo? Erstellen Sie hier eines aus einem Text, etwa Ihren Initialen, und einer Hintergrundfarbe.
- **Vorschau**: zeigt, wie Ihre Marke auf Rechnungen und E-Mails aussieht.

Änderungen werden automatisch gespeichert. Es gibt eine Markenfarbe für alles, was Kunden sehen. Für die volle Kontrolle über Layout, Farben und Schrift Ihrer Rechnungen und Angebote öffnen Sie die Zeile **Rechnungsgestaltung**; siehe [PDF-Design](/de/settings/pdf).

## Ihre Website

Ihre Website verwalten Sie im Bereich **Website** im Hauptmenü der App, nicht unter Einstellungen. Es ist eine Übersicht mit sieben Reitern: Übersicht, Besucher, Ergebnisse, Seiten, Auffindbarkeit, Verknüpfungen und Domain & E-Mail. Den Editor öffnen Sie mit **Website bearbeiten**.

- Die Website ist in jedem Abonnement enthalten. Mit Desk läuft sie unter einer Adresse auf `mycompanydesk.site` mit einem kleinen Hinweis „Gemaakt met MyCompanyDesk“.
- Eine eigene Domain statt der Standardadresse auf `mycompanydesk.site` gehört zu Office. DNS-, SPF- und DKIM-Einträge verwalten wir für Sie; sie liegen hinter einem erweiterten Bereich, den die meisten nie öffnen müssen.

## Verwandte Themen

- [PDF-Design](/de/settings/pdf) für das Designstudio Rechnungsgestaltung
- [Abonnement & Zahlungen](/de/settings/billing) für eine eigene Domain
- [E-Mail](/de/settings/email) für den Versand von Ihrer eigenen Domain
- Der Einrichtungsassistent unter `/setup` führt neue Arbeitsbereiche in einem Durchgang durch diese Einstellungen
