---
title: Einrichtungsassistent
description: "Der Assistent unter /setup holt Ihre Unternehmensdaten aus dem KVK-Register, fragt, womit Sie starten, und richtet MwSt. und IBAN fürs Rechnen ein."
last_verified: 2026-10-13
---

# Einrichtungsassistent

Der Einrichtungsassistent unter `/setup` (**Lass uns Ihr Unternehmen einrichten**) macht einen neuen Arbeitsbereich in wenigen Minuten startklar. Er holt Ihre Unternehmensdaten aus dem niederländischen Handelsregister (KVK) und zeigt dabei eine Live-Vorschau Ihrer Rechnung. Direkt nach dem KVK-Schritt fragt er, womit Sie starten wollen: mit Rechnungen und Angeboten, mit Ihrer eigenen Website oder mit E-Mail auf Ihrer eigenen Domain. Nichts steht fest: Jeder Schritt lässt sich überspringen, und alles lässt sich später in den Einstellungen ändern.

Wenn Sie die Grundlagen suchen, beginnen Sie bei [Unternehmen einrichten](/de/getting-started/company-setup). Diese Seite ist die Referenz für jeden Schritt und jede Option.

## Wann der Assistent erscheint

- **Erste Anmeldung:** Neue Konten landen automatisch im Assistenten.
- **Solange die Einrichtung nicht abgeschlossen ist:** Rufen Sie `/setup` auf, um dort weiterzumachen, wo Sie aufgehört haben. Nach dem Abschluss leitet `/setup` Sie zum Dashboard. Ein Banner oben auf dem Dashboard gibt es nicht; solange die Einrichtung offene Enden hat, weist das Dashboard Sie unten auf der Seite selbst auf den nächsten Schritt hin, unter **Richten Sie das ein**.

Der Assistent blockiert Sie nirgends. **Jetzt überspringen** bringt Sie zum Dashboard, ohne abzuschließen; dabei geht nichts verloren, denn jede Antwort wird sofort gespeichert. Kommen Sie später zurück, machen Sie genau dort weiter, wo Sie aufgehört haben.

## Die Schritte

Der Assistent fragt in dieser Reihenfolge:

1. **Handelsregister** (Finden Sie Ihr Unternehmen im Handelsregister)
2. **Start** (Womit möchten Sie beginnen?): Ihre Wahl (siehe [den Schritt unten](#schritt-womit-wollen-sie-starten))
3. **MwSt. und IBAN** (Wie werden Sie bezahlt?): nur auf der Rechnungsroute

**Weiter** bringt Sie voran, sobald ein Schritt hat, was er braucht, und **Zurück** geht einen Schritt zurück. Im letzten Schritt der Rechnungsroute wendet **Setup abschließen** alles an; haben Sie Website oder E-Mail gewählt, heißt diese Schaltfläche **Zu Ihrer Website** oder **Zu Ihrer E-Mail**.

## Schritt: KVK

Zwei Wege:

1. **Suchen:** Tippen Sie Ihren Firmennamen (zwei Zeichen oder mehr) und wählen Sie Ihr Unternehmen aus den Live-Vorschlägen. MyCompanyDesk ruft dann Ihr KVK-Basisprofil ab und füllt Ihre Unternehmensdaten vor: juristischer Name, Handelsnamen, Rechtsform, Adresse und Geschäftstätigkeit. Es werden nur leere Felder gefüllt; manuell Eingetragenes bleibt erhalten.
2. **Manuell eintragen:** ein kurzes Formular für Firmennamen, KVK-Nummer, Adresse, Postleitzahl und Ort. Nützlich, wenn Ihr Unternehmen zu neu ist, um in den Suchergebnissen zu erscheinen, oder Ihr Handelsname nicht dem entspricht, wonach Sie gesucht haben. Ihre Eingaben werden sofort bei Ihren Unternehmensdaten gespeichert. Über einen Link gelangen Sie jederzeit zurück zur Suche.

**Kein Handelsregister-Eintrag?**: Fahren Sie ohne Unternehmensdaten fort und tragen Sie sie später unter Unternehmensdaten in den Einstellungen nach.

Findet eine Suche nichts, sagt der Assistent das und bietet den Wechsel zur manuellen Eingabe an, mit dem bereits eingetippten Namen vorausgefüllt.

## Schritt: Womit wollen Sie starten?

Direkt nach dem KVK-Schritt fragt der Assistent **Womit wollen Sie starten?** mit drei Antworten:

- **Rechnungen und Angebote senden**: die gewohnte Route. Der Assistent fährt fort mit dem Schritt MwSt. und IBAN und dem Abschlussbildschirm.
- **Eine eigene Website**: Der Assistent endet hier, und **Zu Ihrer Website** bringt Sie zu `/website`, wo sich der Website-Editor öffnet.
- **E-Mail mit eigener Domain**: Der Assistent endet hier, und **Zu Ihrer E-Mail** bringt Sie zu `/inbox/setup`, wo das geschäftliche Postfach eingerichtet wird.

Die Wahl bestimmt nur, wo der Assistent Sie absetzt. Nichts wird ein- oder ausgeschaltet und nichts fertig vorausgewählt. Das Dashboard folgt derselben Wahl: Es bietet **Zet je website online** (Stellen Sie Ihre Website online) oder **Stel je zakelijke e-mail in** (Richten Sie Ihre geschäftliche E-Mail ein) an, bis die Website veröffentlicht ist oder ein eigenes Postfach auf Ihrer eigenen Domain besteht, und kehrt danach zur Rechnungsroute zurück.

## Schritt: MwSt. und IBAN

Dieser Schritt (**Wie werden Sie bezahlt?**) fragt nach den zwei Dingen, die auf jede Rechnung gehören.

**Berechnen Sie MwSt.?** Wählen Sie eine von drei Antworten:

- **Ja, ich berechne MwSt.**: die meisten Selbstständigen. Tragen Sie Ihre USt-IdNr. ein oder wählen Sie **Ich kenne meine USt-IdNr. jetzt nicht, ich trage sie später ein**; die App fragt dann erneut, wenn Sie Ihre erste Rechnung senden.
- **Nein, ich nehme an der KOR teil**: nur, wenn Sie sich selbst bei der Belastingdienst angemeldet und darüber Bescheid bekommen haben. Wenig Umsatz allein reicht nicht. Ihre Rechnungen werden dann ohne MwSt. erstellt und vermerken, dass Sie an der KOR teilnehmen.
- **Nein, ich bin befreit**: für manche Berufe, etwa Pflege durch registrierte Gesundheitsdienstleister oder Unterricht durch eine CRKBO-registrierte Lehrkraft. Ihre Rechnungen werden ohne MwSt. erstellt.

Sind Sie bei der KOR unsicher, fragt der Schritt "Nimmst du an der KOR (Kleinunternehmerregelung) teil?" mit **Ja, ich nehme teil**, **Nein** und **Weiß ich nicht**. Bei Weiß ich nicht erklärt er, dass Sie nicht teilnehmen, wenn Sie sich nicht selbst angemeldet haben, und dass der Brief der Belastingdienst es sicher sagt.

**Wohin sollen Kunden zahlen?** Tragen Sie Ihre IBAN und den Namen des Kontoinhabers ein oder wählen Sie **Trage ich später ein**, um das zu überspringen. Sie können Ihre IBAN später in den Einstellungen ergänzen, und die App fragt bei Ihrer ersten Rechnung erneut.

## Abschluss

**Setup abschließen** wendet Ihre Unternehmensdaten, Ihren MwSt.-Status und Ihre IBAN an. Der Abschlussbildschirm ("Du kannst jetzt Rechnungen stellen") bietet die Schaltfläche **Erste Rechnung erstellen** und nennt, was noch folgt: Ihr Konto absichern und Ihre Website werden später vorgeschlagen, wenn es passt, unter **Richten Sie das ein** im Dashboard. Im Hintergrund wird keine Website gebaut; wenn Sie den Bereich **Website** zum ersten Mal selbst öffnen, wird dort die Standard-Entwurfsseite angelegt (Startseite, Leistungen, Über uns, Kontakt, mit Ihren Daten auf den Rechtsseiten), die auf Ihre Veröffentlichung wartet.

Jeder neue Arbeitsbereich startet mit 60 Tagen Office, kostenlos und ohne Kreditkarte. Melden Sie sich über einen Einladungslink eines Partner-Buchhalters an, dauert diese Testphase 12 Monate. Danach wechselt Ihr Arbeitsbereich zurück zu Desk, ohne Bezahlschranke.

## Überspringen und Fortsetzen

- **Überspringen:** **Jetzt überspringen** bringt Sie jederzeit zum Dashboard. `/setup` bleibt der Weg zurück, bis die Einrichtung abgeschlossen ist.
- **Website zuerst** (**Zuerst meine Website erstellen**): Unter der Frage **Sind Sie vor allem wegen Ihrer Website hier?** in der Fußleiste des ersten Schritts sitzt ein zweiter Ausgang, neben Überspringen. Er verlässt die Einrichtung ohne abzuschließen und öffnet direkt den Website-Assistenten; anders als das einfache Überspringen hält er die Aufgabe Ihre Website fertigstellen im Dashboard offen, denn es gibt noch keine Site, die fertigzustellen wäre.
- **Fortsetzen:** Antworten werden bei jeder Änderung gespeichert. Den Tab mittendrin zu schließen kostet nichts; beim nächsten Besuch geht es auf demselben Schritt weiter.
- **Nach dem Abschluss:** `/setup` leitet Sie dann zum Dashboard. Was der Assistent eingetragen hat, ändern Sie in den Einstellungen (siehe unten). Der Assistent füllt nur leere Felder auf, statt zu überschreiben: Was Sie selbst eingetragen hatten, bleibt stehen.

## Bearbeiten ohne den Assistenten

Jedes Feld, das der Assistent berührt, hat einen Platz in den **Einstellungen**:

- **Unternehmensdaten:** Name, KVK-Nummer, Adresse, USt-Nummer
- **Logo und Farbe:** Logo und Markenfarbe
- **Rechnungsdesign:** das Erscheinungsbild Ihrer PDFs
- **Ihre Website und Domain:** Domain und Website
- **Module:** Teile der App ein- oder ausschalten

Die vollständige Übersicht finden Sie in der [Einstellungsübersicht](/de/settings/).
