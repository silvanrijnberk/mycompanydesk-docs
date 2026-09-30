---
title: Einrichtungsassistent
description: "Der Assistent unter /setup richtet Ihr Unternehmen ein und fragt danach, womit Sie starten wollen: Rechnungen, Ihre Website oder geschäftliche E-Mail."
last_verified: 2026-09-30
---

# Einrichtungsassistent

Der Einrichtungsassistent unter `/setup` macht einen neuen Arbeitsbereich in wenigen Minuten startklar. Er beginnt bei Ihrer Rechnung: Er fragt, wen Sie abrechnen möchten, holt Ihre Unternehmensdaten aus dem niederländischen Handelsregister (KVK) und zeigt dabei eine Live-Vorschau der Rechnung. Direkt nach dem KVK-Schritt fragt er, womit Sie starten wollen: mit Rechnungen und Angeboten, mit Ihrer eigenen Website oder mit E-Mail auf Ihrer eigenen Domain. Nichts steht fest: Jeder Schritt lässt sich überspringen, und alles lässt sich später in den Einstellungen ändern.

Wenn Sie die Grundlagen suchen, beginnen Sie bei [Unternehmen einrichten](/de/getting-started/company-setup). Diese Seite ist die Referenz für jeden Schritt und jede Option.

## Wann der Assistent erscheint

- **Erste Anmeldung:** Neue Konten landen automatisch im Assistenten.
- **Jederzeit:** Rufen Sie `/setup` auf, um den Assistenten zu starten oder erneut zu durchlaufen. Ein Banner oben auf dem Dashboard gibt es nicht mehr; solange die Einrichtung offene Enden hat, weist das Dashboard Sie unten auf der Seite selbst auf den nächsten Schritt hin, unter **Richten Sie das ein**.

Der Assistent blockiert Sie nirgends. **Vorerst überspringen** bringt Sie zum Dashboard, ohne abzuschließen; dabei geht nichts verloren, denn jede Antwort wird sofort gespeichert. Kommen Sie später zurück, machen Sie genau dort weiter, wo Sie aufgehört haben.

## Die Schritte

Der Assistent fragt, in dieser Reihenfolge:

1. **Kunde:** wen Sie abrechnen möchten
2. **KVK:** Ihre Unternehmensdaten
3. **Womit Sie starten:** Ihre Wahl (siehe [den Schritt unten](#schritt-womit-wollen-sie-starten))
4. **Zahlungseingang:** Ihr IBAN und USt.-Status (nur auf der Rechnungsroute)
5. **Abschluss:** Testbestätigung

**Weiter** führt fort, sobald ein Schritt hat, was er braucht; **Einrichtung abschließen** auf dem letzten Schritt wendet alles an.

## Schritt: Kunde

Der Assistent öffnet mit einer Live-Vorschau der Rechnung und fragt nach dem Kunden. Beginnen Sie, den Kundennamen zu tippen.

- Wenn der Kunde bereits in Ihrem Arbeitsbereich existiert, wählen Sie ihn aus der Liste aus.
- Um einen neuen Kunden direkt zu erstellen, tippen Sie den Namen und klicken Sie auf **Kunde erstellen**. Das Inline-Formular fragt nach Kundennamen und Adresse. Die KVK-Suche kann niederländische Unternehmen vorschlagen und die Adresse automatisch ausfüllen; private Kunden fügen Sie hinzu, indem Sie die Adresse von Hand eingeben.
- Die Kunden-E-Mail ist optional und wird nur verwendet, wenn Sie die Rechnung senden.

Nur der Kundenname ist erforderlich, um fortzufahren. Die restlichen Kundendaten können Sie später auf der Kundenseite vervollständigen.

## Schritt: KVK

Zwei Wege:

1. **Suchen:** Tippen Sie Ihren Firmennamen (zwei Zeichen oder mehr) und wählen Sie Ihr Unternehmen aus den Live-Vorschlägen. MyCompanyDesk ruft dann Ihr KVK-Basisprofil ab und füllt Ihre Unternehmensdaten vor: juristischer Name, Handelsnamen, Rechtsform, Adresse und Geschäftstätigkeit. Es werden nur leere Felder gefüllt; manuell Eingetragenes bleibt erhalten.
2. **Manuell eintragen:** ein kurzes Formular für Firmennamen, KVK-Nummer, Adresse, Postleitzahl und Ort. Nützlich, wenn Ihr Unternehmen zu neu ist, um in den Suchergebnissen zu erscheinen, oder Ihr Handelsname nicht dem entspricht, wonach Sie gesucht haben. Ihre Eingaben werden sofort bei Ihren Unternehmensdaten gespeichert. Über einen Link gelangen Sie jederzeit zurück zur Suche.

**Kein Handelsregister-Eintrag?**: Fahren Sie ohne Unternehmensdaten fort und tragen Sie sie später unter Unternehmensdaten in den Einstellungen nach.

Findet eine Suche nichts, sagt der Assistent das und bietet den Wechsel zur manuellen Eingabe an, mit dem bereits eingetippten Namen vorausgefüllt.

## Schritt: Womit wollen Sie starten?

Direkt nach dem KVK-Schritt fragt der Assistent **Womit wollen Sie starten?** mit drei Antworten:

- **Rechnungen und Angebote**: die gewohnte Route. Der Assistent fährt fort mit der Rechnungsvorschau, dem Schritt Zahlungseingang (IBAN und USt.-Status) und dem Abschlussbildschirm.
- **Ihre eigene Website**: der Assistent endet hier, und eine Schaltfläche bringt Sie zu `/website`, wo sich der Website-Editor öffnet.
- **E-Mail auf Ihrer eigenen Domain**: der Assistent endet hier, und eine Schaltfläche bringt Sie zu `/inbox/setup`, wo das geschäftliche Postfach eingerichtet wird.

Die Wahl bestimmt nur, wo der Assistent Sie absetzt. Nichts wird ein- oder ausgeschaltet und nichts fertig vorausgewählt. Das Dashboard folgt derselben Wahl: Es bietet **Zet je website online** (Stellen Sie Ihre Website online) oder **Stel je zakelijke e-mail in** (Richten Sie Ihre geschäftliche E-Mail ein) an, bis die Website veröffentlicht ist oder ein eigenes Postfach auf Ihrer eigenen Domain besteht, und kehrt danach zur Rechnungsroute zurück.

## Schritt: Zahlungseingang

Der Assistent fragt nach der IBAN, auf die Kunden überweisen. Sie können jetzt Ihre Geschäfts-IBAN eingeben oder auf **IBAN später hinzufügen** klicken, um diesen Schritt zu überspringen. Beachten Sie, dass ein Kunde Sie ohne IBAN kaum bequem bezahlen kann.

Wenn Sie noch auf Ihre USt-IdNr. vom Finanzamt warten oder unter die Kleinunternehmerregelung fallen, können Sie trotzdem fortfahren und die USt-IdNr. später hinzufügen.

## Schritt: Abschluss

Der letzte Schritt bestätigt Ihre Testphase:

- **Ihre Testphase:** Jeder neue Arbeitsbereich startet mit 60 Tagen Pro, kostenlos, ohne Kreditkarte.

**Einrichtung abschließen** wendet Ihre Unternehmensdaten, USt.-Status, IBAN und Standardeinstellungen an. Der Abschlussbildschirm nennt, was noch folgt: die Sicherheit Ihres Kontos und Ihre Website werden später vorgeschlagen, wann es passt, unter **Richten Sie das ein** auf dem Dashboard. Im Hintergrund wird nirgendwo eine Website gebaut; beim ersten Öffnen des Bereichs **Website** selbst wird dort die Standard-Entwurfssite angelegt (Startseite, Leistungen, Über uns, Kontakt, mit Ihren Daten bei den rechtlichen Seiten), noch wartend auf Ihre Veröffentlichung.

## Überspringen, Fortsetzen und erneut Durchlaufen

- **Überspringen:** **Vorerst überspringen** bringt Sie jederzeit zum Dashboard. `/setup` bleibt der Weg zurück, bis die Einrichtung abgeschlossen ist.
- **Fortsetzen:** Antworten werden bei jeder Änderung gespeichert. Den Tab mittendrin zu schließen kostet nichts; beim nächsten Besuch geht es auf demselben Schritt weiter.
- **Erneut durchlaufen:** Nach dem Abschluss startet `/setup` den Ablauf wieder beim ersten Schritt, mit Ihren gespeicherten Antworten. Der Assistent füllt leere Felder auf, statt zu überschreiben: eine aufgebaute Dienstleistungsliste, ein hochgeladenes Logo oder selbst gewählte Einstellungen werden nicht ersetzt.

## Bearbeiten ohne den Assistenten

Jedes Feld, das der Assistent berührt, hat einen Platz in den **Einstellungen**:

- **Unternehmensdaten:** Name, KVK-Nummer, Adresse, USt-Nummer
- **Logo und Farbe:** Logo und Markenfarbe
- **Rechnungsdesign:** das Erscheinungsbild Ihrer PDFs
- **Deine Website und Domain:** Domain und Website
- **Funktionen:** Teile der App ein- oder ausschalten

Die vollständige Übersicht finden Sie in der [Einstellungsübersicht](/de/settings/).
