---
title: Kundenportal
description: "Ihre Kunden erhalten ihre eigene Portalseite für Ihr Unternehmen: Rechnungen, Angebote, Verträge, Termine und Nachrichten zusammen, mit Onlinezahlung."
---

# Kundenportal

Das Kundenportal ist die Seite Ihres Kunden bei Ihrem Unternehmen. Jede Rechnung, jedes Angebot und jeder Vertrag, die Sie senden, enthält einen Link dorthin, und das vollständige Portal öffnet sich mit einem E-Mail-Link zum Einloggen. Hier steht alles zusammen: Dokumente, Termine und Nachrichten, in einer gesicherten Umgebung in Ihrem Design.

## So funktioniert es

Wenn Sie eine Rechnung versenden, wird ein eindeutiger **Zahlungslink** generiert. Wenn Ihr Kunde auf diesen Link klickt, landet er bei der Rechnung in seinem Portal und kann dort:

1. **Die Rechnung ansehen** kann - Alle Details, Positionen und Gesamtbeträge einsehen
2. **Das PDF herunterladen** kann - Eine Kopie der Rechnung erhalten
3. **Online bezahlen** kann - Die Zahlung direkt über das Portal über die Schaltfläche **Jetzt bezahlen** abschließen
4. **Zahlung bestätigen** kann: Eine Banküberweisung bestätigen (nicht sichtbar für Gutschriften, stornierte Rechnungen oder Originalrechnungen, die vollständig gutgeschrieben wurden, da der Kunde in keinem dieser Fälle noch etwas zu zahlen hat)
5. **In meine Buchhaltung**: die Rechnung in die eigenen MyCompanyDesk-Ausgaben übernehmen (nur sichtbar für Geschäftskunden bei einer echten, gültigen Rechnung)

Portallinks werden im Browser des Kunden geöffnet. Auch wenn der Kunde die MyCompanyDesk-App auf seinem Telefon installiert hat, öffnet ein Tipp auf den Rechnungslink den Browser, nicht die App.

### Zwei Wege hinein

Ein Rechnungslink beweist nur, dass jemand diese E-Mail erhalten hat. Er zeigt **die Rechnungen dieses Kunden** und genau diese Rechnung, sonst nichts, was im Namen des Kunden geschieht: Angebote unterschreiben, Termine verwalten und Nachrichten schreiben verlangen das vollständige Portal. Es öffnet sich über einen Login-Link, der dem Kunden per E-Mail geschickt wird (siehe unten), und ist damit an die E-Mail-Adresse Ihrer Kundenkarte gebunden.

## Einloggen mit einem E-Mail-Link

Am Portal fragt der Zugangsbildschirm nach der E-Mail-Adresse des Kunden und schickt danach einen neuen Login-Link. Der Link funktioniert einmal und bleibt eine Stunde gültig. Er geht nur an die Adresse, die das Unternehmen von der Kundenkarte kennt, und der Bildschirm verrät nicht, ob eine Adresse bekannt ist, damit niemand darüber prüfen kann, wer Ihre Kunden sind.

Nach dem Öffnen des Links bleibt dieser Browser für diesen Kunden bei Ihrem Unternehmen eingeloggt. **Abmelden** beendet diese Sitzungen in diesem Browser. Das Portal zeigt sich immer mit Ihrem Firmennamen und Ihrem Design, und der Kontaktbereich zeigt Ihre öffentliche geschäftliche E-Mail-Adresse, damit Kunden die richtige Mailbox erreichen, selbst wenn die erste Rechnung an eine Privatadresse ging.

## Portal-Funktionen

### Übersicht

Die Übersicht ist die Startseite des Portals: Ihr Design und eine Begrüßung oben, mit Ihrer eigenen Begrüßungszeile darunter, wenn Sie eine gesetzt haben, neben der festen Firmenkarte mit Ihren Kontaktdaten. Eine kurze **Zu erledigen**-Liste sammelt, was noch vom Kunden verlangt wird (eine Rechnung bezahlen, ein Dokument unterschreiben, eine neue Nachricht lesen), und wenn alles erledigt ist, sagt die Seite es genau so: **Alles ist bezahlt, es ist nichts offen.** Wird eine Zahlung nach einer Meldung des Kunden noch geprüft, sagt die Seite auch das, statt ein zweites Mal um Geld zu bitten.

### Rechnungsliste

Wenn ein Kunde mehrere Rechnungen hat, zeigt das Portal auch eine Liste mit jeder Rechnung, Gutschrift und dem aktuellen Status. Die Zusammenfassungskarten "Offen" und "Überfällig" über der Tabelle addieren den **Restbetrag pro Beleg**, nicht den Bruttobetrag. Eine Rechnung über 1.000 € mit einer Teilzahlung von 400 € trägt also 600 € zum offenen Betrag bei, und eine Gutschrift, die bereits mit ihrer Ursprungsrechnung verrechnet wurde, trägt 0 € bei, damit sie nicht zweimal abgezogen wird. "Überfällig" leitet sich aus dem Fälligkeitsdatum ab: jede versendete oder offene Rechnung mit einem Fälligkeitsdatum vor heute wird dort gezählt, damit die Karte auch dann aktuell bleibt, wenn Rechnungen nur noch selten den Legacy-Status `overdue` tragen.

Entwürfe erscheinen nie in der Rechnungsliste. Ein Portal-Link wird erst erzeugt, wenn eine Rechnung versendet wird; unversendete Entwürfe haben daher keine kundenseitige Ansicht und können nicht über das Portal eingesehen werden.

### Rechnungsansicht

Die Rechnung öffnet sich im Portaldesign: Ihr Firmenblock oben, die Rechnungsdaten wie Datum, Fälligkeitsdatum und Rechnungsnummer, und darunter ein Zahlungspanel, das die zwei Wege zu zahlen als Registerkarten anbietet: **Online bezahlen** (die Mollie- oder Stripe-Schaltflächen, wenn ein Anbieter verbunden ist) und **Selbst überweisen**, mit dem Verwendungszweck, den der Kunde bei seiner Überweisung einsetzt, und einem QR-Code, damit Zahlen ohne Online-Buttons möglich bleibt. Daneben zeigt das Panel weiter den bereits erhaltenen Betrag, die angewandte Gutschrift und den offenen Restbetrag.

Auf derselben Seite sitzt das Gespräch mit dem Kunden: das Fragefeld **Fragen zu dieser Rechnung** neben der Ansicht, sodass eine Frage zu genau dieser Rechnung in einem eigenen Gespräch gestellt und beantwortet wird. Das PDF lädt der Kunde hier ebenfalls herunter, und dasselbe Muster wiederholt sich unter einem Angebot, Vertrag, Dokument und Termin.

### Zahlung

Kunden können direkt über das Portal bezahlen. Wenn Sie Mollie oder Stripe verbunden haben, erscheinen Zahlungsschaltflächen auf der Rechnungsansicht, sodass Ihr Kunde mit einem Klick bezahlen kann. Zahlungsschaltflächen und der fällige Gesamtbetrag werden für Gutschriften, stornierte Rechnungen und Originalrechnungen, die vollständig gutgeschrieben wurden, ausgeblendet, da der Kunde in keinem dieser Fälle noch Geld überweisen muss. Bei Rechnungen mit Teilzahlungen oder Gutschriften zeigt das Portal den bereits erhaltenen Betrag, die angewandte Gutschrift und die noch offene Restsumme an, bevor der Kunde zahlt, sodass der Betrag auf der Zahlungsschaltfläche mit dem verbleibenden offenen Betrag übereinstimmt. Wenn die Zahlung bestätigt wird, aktualisiert sich der Rechnungsstatus in Ihrem Dashboard automatisch auf **Bezahlt**. Das Portal zeigt dem Kunden nach einer Rückkehr aus Mollie oder iDEAL auch die Wahrheit an: wenn der Zahlungsanbieter die Zahlung noch nicht bestätigt hat, sagt die Seite das ehrlich, anstatt vorzugeben, dass die Zahlung in Bearbeitung ist, und der Kunde kann es danach erneut versuchen.

Mit Mollie oder Stripe beginnt die Rechnungs- und die Erinnerungse-Mail mit einer Schaltfläche **Jetzt bezahlen**, daneben steht **Rechnung ansehen** für Kunden, die zuerst hinschauen möchten. Die Schaltfläche öffnet das Portal mit einem Direktzahlungs-Kennzeichen, daraufhin startet die Zahlung sofort und der Kunde wird zur Zahlungsseite weitergeleitet. An diesem Entwurf hängen drei Garantien:

- **Die Zahlung startet nur in einem echten Browser.** Die Portalseite beginnt die Zahlung, wenn der Kunde seinen Maillink öffnet. Linkscanner, die E-Mails vorab laden (wie geschäftliche Mailfilter), richten deshalb nie eine eigene Zahlung ein, und alle Prüfungen (schon bezahlt, zurückgezogen, Gutschrift, „ich habe bezahlt“ in Wartestellung) bleiben bei der Zahlungsanfrage selbst.
- **Ein Hintergrund-Tab zahlt nicht von allein.** Wurde die Mail zuvor in einem Hintergrund-Tab geöffnet, beginnt die Zahlung erst, wenn der Kunde die Portalseite tatsächlich ansieht.
- **Bezahlte Rechnungen fragen nicht nach Geld.** Eine Rechnung, die bereits bezahlt, zurückgezogen ist oder deren Zahlung noch auf Bestätigung wartet, erhält keine Schaltfläche „Jetzt bezahlen“; diese Mail öffnet das Portal ohne sie.

Der Scan-und-Bezahl-QR-Code auf der Rechnungs-PDF nutzt dieselbe feste Verlinkung und bleibt daher brauchbar, anders als einmalige Checkout-URLs, die in der Mail ablaufen.

#### Mollie-Zahlungseinstellungen

Sobald Mollie verbunden ist, erhalten Sie einen **Betaalknop op facturen**-Schalter in Ihrem Arbeitsbereich unter **Geld → Zahlungen → Online betalingen**. Aktivieren Sie ihn, um eine Mollie-Schaltfläche mit dem Label **Jetzt bezahlen** auf jeder ausgehenden Rechnung anzuzeigen. Deaktivieren Sie ihn, und die Schaltfläche verschwindet, ohne Mollie zu trennen.

Unter dem Schalter befindet sich ein **Betaalmethoden**-Bereich, der jede in Ihrem Mollie-Dashboard aktivierte Zahlungsmethode auflistet (iDEAL, Bancontact, Kreditkarte und mehr). Standardmäßig sehen Kunden alle Methoden. Aktivieren Sie bestimmte Methoden, um die Auswahl einzugrenzen, nur diese erscheinen auf Ihren Rechnungen. Entfernen Sie alle Häkchen, um zu "alle anzeigen" zurückzukehren.

Mit der Schaltfläche **Stuur testbetaling** können Sie einen kostenlosen €1-Test-Checkout über Mollie durchlaufen, um sicherzustellen, dass alles funktioniert, bevor Ihre Kunden es sehen. Es fließt kein echtes Geld.

#### Stripe-Zahlungseinstellungen

Sobald Stripe verbunden ist, erhalten Sie einen **Betaalknop op facturen**-Schalter in Ihrem Arbeitsbereich unter **Geld → Zahlungen → Online betalingen**. Aktivieren Sie ihn, um eine Stripe-Schaltfläche mit dem Label **Jetzt bezahlen** auf jeder ausgehenden Rechnung anzuzeigen. Deaktivieren Sie ihn, und die Schaltfläche verschwindet, ohne Stripe zu trennen. Der Schalter ist erst verfügbar, nachdem das Stripe-Onboarding (KYC) abgeschlossen ist.

Unter dem Schalter befindet sich ein **Betaalmethoden**-Bereich, der jede unterstützte Zahlungsmethode zeigt, abgeglichen mit den Capabilities Ihres Stripe-Kontos (Karte, iDEAL, Bancontact, SEPA-Lastschrift, PayPal, Klarna und Link by Stripe). Standardmäßig wählt Stripe Checkout automatisch die richtige Methode pro Kunde. Aktivieren Sie bestimmte Methoden, um die Auswahl einzuschränken, nur diese erscheinen im Checkout. Entfernen Sie alle Häkchen, um zur automatischen Auswahl zurückzukehren.

Die Schaltfläche **Open Stripe Dashboard** verlinkt Sie direkt zu Ihren Stripe-Zahlungsmethodeneinstellungen, damit Sie Ihre Integration überprüfen und Zahlungen direkt in Stripe testen können.

### Die Rechnung in die eigene Buchhaltung

Ein Geschäftskunde, der selbst MyCompanyDesk benutzt, kann Ihre Rechnung mit der Schaltfläche **In meine Buchhaltung**, neben **PDF herunterladen**, direkt in die eigenen Ausgaben übernehmen. MyCompanyDesk importiert die Rechnung als Ausgabenentwurf in diesen Arbeitsbereich, mit den Beträgen, der Umsatzsteuer und der PDF, und öffnet sie, bereit zur Prüfung. Die Schaltfläche erscheint bei echten, gültigen Rechnungen für Geschäftskunden: Angebote, Gutschriften, stornierte Rechnungen und vollständig gutgeschriebene Rechnungen haben nichts zu buchen, also bleibt die Schaltfläche weg.

Fehlt das Konto noch, zeigt die Seite, welche Rechnung es ist, wer sie geschickt hat und für wie viel, mit **Konto erstellen** und **Ich habe bereits ein Konto** daneben. Danach nimmt MyCompanyDesk den Import von selbst wieder auf, auf demselben Gerät, bis zu einer Woche lang (der Browser behält den wartenden Import sieben Tage, siehe `apps/web/utils/pendingInvoiceImport.ts#MAX_AGE_MS`).

Der Import teilt die Dublettenprüfung mit Rechnungen, die automatisch ankommen (siehe [Receiving invoices from other MyCompanyDesk users](/de/features/invoices#receiving-invoices-from-other-mycompanydesk-users)), sodass dieselbe Rechnung nie zweimal gebucht wird. Auf Ihrer eigenen Rechnung lesen Sie es danach: **Kunde hat die Rechnung in die eigene Buchhaltung übernommen**.

### Angebote und Verträge

Der Tab **Angebote und Verträge** zeigt, was dieser Kunde von Ihnen erhalten hat: Angebote, Verträge und andere unterschreibbare Dokumente. Dokumente, die auf eine Unterschrift warten, stehen oben, mit der Aktion **Ansehen und unterschreiben**; ein Angebot bleibt bis zu seiner Gültigkeit im Blick, und Status folgen dem Ablauf des Dokuments (erhalten, angenommen, abgelehnt, abgelaufen, unterschrieben). Unterschrieben wird auf einer gesicherten Signierseite, die eine SMS-Kennung verlangt, wenn Sie das für ein Dokument vorschreiben.

Die Signierseite trägt dasselbe Gewand wie der Rest des Portals: Ihr Name im Kopf, das Dokument, eine Schrittlinie (lesen, unterschreiben, bestätigen) und eine Zustimmungszeile, **Ich bin mit diesem Angebot und den Bedingungen von {company} einverstanden** bei einem Angebot, bevor die Schaltfläche **Signieren und senden** heißt. Die Unterschrift selbst funktioniert wie bisher: Name zeichnen oder tippen, danach eine Bestätigungs-E-Mail und das PDF als Download. Die Signierseite trägt dasselbe Fragefeld wie der Rest des Portals, sodass eine Frage zu diesem Dokument in einem Gespräch landet statt am Rand.

### Termine

Das Portal zeigt die kommenden und vergangenen Termine dieses Kunden, auch die Plätze, die er für einen Gruppentermin (Workshop, Kurs, Führung) belegt hat; siehe [Online-Terminbuchung](/de/features/site-bookings). Termine lassen sich in den eigenen Kalender des Kunden übernehmen, Verschieben oder Absagen läuft über dieselbe Seite, auf die der Link in der Bestätigungsmail zeigt. Termine, die nicht mit der E-Mail-Adresse dieses Kunden gebucht wurden, bleiben unsichtbar.

### Fragen pro Dokument

Jede Ansicht im Portal hat ein eigenes Gespräch: Zu einer Rechnung steht **Fragen zu dieser Rechnung**, zu einem Angebot **Fragen zu diesem Angebot**, und dasselbe Muster gilt für Verträge, übrige Dokumente und Termine. Der Kunde schreibt seine Frage, sie trifft in Ihrem Postfach in der App ein, und Ihre Antwort kommt sowohl im Gespräch als auch in der E-Mail des Kunden an. Eine Frage gehört zu dem Dokument, an dem sie gestellt wurde: jedes Gespräch bleibt bei seinem eigenen Bereich.

Um eine Frage zu stellen, brauchen Sie das vollständige Portal. Wer allein über den Zahlungslink einer Rechnung hereinkommt, sieht, wo die Tür ist: das Portal bietet an, eine Login-Link an die Adresse zu mailen, die auf der Kundenkarte steht, und das Fragefeld erklärt, dass Fragen im vollständigen Portal gestellt werden. Nachrichten im Portal bleiben, wie sie geschrieben sind: die E-Mail, die bei Ihnen eintrifft, ist die Frage Ihres Kunden, ohne Mail-Signatur und ohne zitierte Vorgeschichte darunter.

### Nachrichten

Der Nachrichten-Tab ist die direkte Verbindung zu Ihrem Postfach. Der Kunde schreibt eine Frage oder Mitteilung, sie trifft in Ihrem Postfach in der App ein, und Ihre Antwort kommt sowohl im Portal als auch in der E-Mail des Kunden an. Kunden ohne E-Mail-Adresse auf ihrem Datensatz sehen einen Hinweis, Sie anzurufen oder zu mailen.

### Branding

Das Kundenportal verwendet Ihr Unternehmensbranding:

- Firmenlogo
- Marktfarbe
- Unternehmensinformationen

Dies schafft ein professionelles, konsistentes Erlebnis für Ihre Kunden.

### So sieht es aus

Unter **Einstellungen → Kundenportal** wählen Sie, wie alles aussieht, ohne Zusatzarbeit: Logo, Farbe und Unternehmensdaten haben bereits ihren eigenen Ort und werden von selbst mitgenommen. Hier stellen Sie selbst ein:

- **Stil**: fünf Stile, jeder aus Ihrer Marktfarbe abgeleitet, sodass eine blasse oder fast schwarze Farbe bei Ihrem Kunden genauso ausfällt wie in der Vorschau. **Ruhig** (weiß, Ihre Farbe nur in Schaltflächen und Akzenten), **Warm** (weiches Papier und runde Formen), **Farbe** (Ihre Farbe im Kopf und in der ersten Aufgabe), **Klar** (kantig und sachlich, ein klares Raster) oder **Abend** (ein dunkler Kopf mit großer Schrift). Jede Kachel in der Auswahl trägt eine kleine Vorschau in diesem Stil.
- **Darstellung**: hell oder dunkel, oder lassen Sie sie auf **Wie Ihr Kunde möchte** stehen, sodass das Portal folgt, was das Gerät Ihres Kunden verlangt (Ihr Kunde kann es selbst immer umschalten).
- **Begrüßungszeile**: eine kurze Zeile unter der Begrüßung. Lassen Sie sie leer, dann zeigen wir selbst, was für Ihren Kunden bereitliegt.
- **Ihr Foto auf der Karte**: mit einem Profilfoto stehen Sie mit Ihrem Namen auf der Kontaktkarte, statt Ihrem Unternehmen. Ihr Logo bleibt oben.

Neben den Einstellungen steht die Vorschau: der echte Portalüberblick mit Beispieldaten, in der Breite, die Ihr Kunde bekommt, genau so, wie Ihr Kunde sie sieht. Der Inhalt der Firmenkarte und der Portallink verweisen an ihre eigenen Orte: Logo und Farbe passen Sie bei **Erscheinungsbild** an, die Unternehmensdaten bei **Firmendaten**.

Einem Kunden seinen Login-Link schicken oder ihn überall ausloggen, tun Sie auf der Kundenseite, im Block **Kundenportal**.

## Eingefrorene Rechnungskopie

Rechnungsansicht und PDF-Download werden aus einer Momentaufnahme gerendert, die beim Senden erstellt wird. Diese Momentaufnahme friert Ihre Unternehmensdaten, Kundendaten, Dokumentensprache und Ihr Branding zum Zeitpunkt des Versands ein. Kunden sehen die Rechnung daher genau so, wie sie gesendet wurde, auch wenn Sie später Einstellungen oder den Kundendatensatz ändern. Entwürfe haben noch keine Momentaufnahme und können nicht über das Portal eingesehen werden, weil ein Portal-Link erst beim Versenden erzeugt wird.

## Zugangssicherheit

Jeder Portal-Link ist:

- **Eindeutig** - Pro Rechnung generiert
- **Token-basiert** - Mit einem einzigartigen Zugangstoken gesichert
- **Rechnungsspezifisch** - Zeigt nur die spezifische Rechnung

Kunden benötigen kein MyCompanyDesk-Konto, um Rechnungen einzusehen und zu bezahlen. Jede Portalsitzung wird vom Server an genau einen Kunden bei einem Unternehmen gebunden, deshalb zeigt eine Sitzung bei einem Unternehmen nie Dokumente eines anderen, und Portalseiten werden immer ohne Caching versendet, damit personenbezogene Daten nie in geteilten Caches landen.

## Kundenereignis-Tracking

MyCompanyDesk verfolgt Kundeninteraktionen mit dem Portal:

- Wann der Kunde die Rechnung öffnet
- Wann er das PDF herunterlädt
- Wann er die Zahlung einleitet
- Wann die Zahlung bestätigt wird
- Wann der Kunde die Rechnung in die eigene Buchhaltung übernimmt

Dies hilft Ihnen, das Kundenengagement zu verstehen und effektiv nachzufassen.

## Tipps

- Fügen Sie Ihrer Rechnungs-E-Mail eine persönliche Notiz hinzu, um die Portal-Nutzung zu fördern
- Das Portal funktioniert auf allen Geräten - Mobiltelefon, Tablet und Desktop
- Zahlungsbestätigungen werden sowohl an Sie als auch an den Kunden gesendet
- Prüfen Sie den Kundenereignisverlauf auf der Rechnungsdetailseite, um Portal-Interaktionen einzusehen