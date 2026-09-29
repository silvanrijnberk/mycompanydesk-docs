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

Portallinks werden im Browser des Kunden geöffnet. Auch wenn der Kunde die MyCompanyDesk-App auf seinem Telefon installiert hat, öffnet ein Tipp auf den Rechnungslink den Browser, nicht die App.

### Zwei Wege hinein

Ein Rechnungslink beweist nur, dass jemand diese E-Mail erhalten hat. Er zeigt **die Rechnungen dieses Kunden** und genau diese Rechnung, sonst nichts, was im Namen des Kunden geschieht: Angebote unterschreiben, Termine verwalten und Nachrichten schreiben verlangen das vollständige Portal. Es öffnet sich über einen Login-Link, der dem Kunden per E-Mail geschickt wird (siehe unten), und ist damit an die E-Mail-Adresse Ihrer Kundenkarte gebunden.

## Einloggen mit einem E-Mail-Link

Am Portal fragt der Zugangsbildschirm nach der E-Mail-Adresse des Kunden und schickt danach einen neuen Login-Link. Der Link funktioniert einmal und bleibt eine Stunde gültig. Er geht nur an die Adresse, die das Unternehmen von der Kundenkarte kennt, und der Bildschirm verrät nicht, ob eine Adresse bekannt ist, damit niemand darüber prüfen kann, wer Ihre Kunden sind.

Nach dem Öffnen des Links bleibt dieser Browser für diesen Kunden bei Ihrem Unternehmen eingeloggt. **Abmelden** beendet diese Sitzungen in diesem Browser. Das Portal zeigt sich immer mit Ihrem Firmennamen und Ihrem Design, und der Kontaktbereich zeigt Ihre öffentliche geschäftliche E-Mail-Adresse, damit Kunden die richtige Mailbox erreichen, selbst wenn die erste Rechnung an eine Privatadresse ging.

## Portal-Funktionen

### Übersicht

Die Übersicht ist die Startseite des Portals: Ihr Design, eine Begrüßung und eine kurze **Zu erledigen**-Liste, die sammelt, was noch vom Kunden verlangt wird (eine Rechnung bezahlen, ein Dokument unterschreiben, eine neue Nachricht lesen). Darunter stehen die Karten **offen** und **bezahlt** und die Rechnungen des Kunden.

### Rechnungsliste

Wenn ein Kunde mehrere Rechnungen hat, zeigt das Portal auch eine Liste mit jeder Rechnung, Gutschrift und dem aktuellen Status. Die Zusammenfassungskarten "Offen" und "Überfällig" über der Tabelle addieren den **Restbetrag pro Beleg**, nicht den Bruttobetrag. Eine Rechnung über 1.000 € mit einer Teilzahlung von 400 € trägt also 600 € zum offenen Betrag bei, und eine Gutschrift, die bereits mit ihrer Ursprungsrechnung verrechnet wurde, trägt 0 € bei, damit sie nicht zweimal abgezogen wird. "Überfällig" leitet sich aus dem Fälligkeitsdatum ab: jede versendete oder offene Rechnung mit einem Fälligkeitsdatum vor heute wird dort gezählt, damit die Karte auch dann aktuell bleibt, wenn Rechnungen nur noch selten den Legacy-Status `overdue` tragen.

Entwürfe erscheinen nie in der Rechnungsliste. Ein Portal-Link wird erst erzeugt, wenn eine Rechnung versendet wird; unversendete Entwürfe haben daher keine kundenseitige Ansicht und können nicht über das Portal eingesehen werden.

### Rechnungsansicht

Das Portal zeigt eine übersichtliche, gebrandete Ansicht der Rechnung, einschließlich:

- Ihr Firmenlogo und Branding
- Rechnungsnummer und Datum
- Positionen mit Beschreibungen und Beträgen
- USt.-Aufschlüsselung
- Fälliger Gesamtbetrag
- Bereits erhaltener Betrag, angewandte Gutschrift und Restbetrag (bei teilweise bezahlten oder gutgeschriebenen Rechnungen)
- Fälligkeitsdatum

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

### Angebote und Verträge

Der Tab **Angebote und Verträge** zeigt, was dieser Kunde von Ihnen erhalten hat: Angebote, Verträge und andere unterschreibbare Dokumente. Dokumente, die auf eine Unterschrift warten, stehen oben, mit der Aktion **Ansehen und unterschreiben**; ein Angebot bleibt bis zu seiner Gültigkeit im Blick, und Status folgen dem Ablauf des Dokuments (erhalten, angenommen, abgelehnt, abgelaufen, unterschrieben). Unterschrieben wird auf einer gesicherten Signierseite, die eine SMS-Kennung verlangt, wenn Sie das für ein Dokument vorschreiben.

### Termine

Das Portal zeigt die kommenden und vergangenen Termine dieses Kunden, auch die Plätze, die er für einen Gruppentermin (Workshop, Kurs, Führung) belegt hat; siehe [Online-Terminbuchung](/de/features/site-bookings). Termine lassen sich in den eigenen Kalender des Kunden übernehmen, Verschieben oder Absagen läuft über dieselbe Seite, auf die der Link in der Bestätigungsmail zeigt. Termine, die nicht mit der E-Mail-Adresse dieses Kunden gebucht wurden, bleiben unsichtbar.

### Nachrichten

Der Nachrichten-Tab ist die direkte Verbindung zu Ihrem Postfach. Der Kunde schreibt eine Frage oder Mitteilung, sie trifft in Ihrem Postfach in der App ein, und Ihre Antwort kommt sowohl im Portal als auch in der E-Mail des Kunden an. Kunden ohne E-Mail-Adresse auf ihrem Datensatz sehen einen Hinweis, Sie anzurufen oder zu mailen.

### Branding

Das Kundenportal verwendet Ihr Unternehmensbranding:

- Firmenlogo
- Akzentfarbe
- Unternehmensinformationen

Dies schafft ein professionelles, konsistentes Erlebnis für Ihre Kunden.

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

Dies hilft Ihnen, das Kundenengagement zu verstehen und effektiv nachzufassen.

## Tipps

- Fügen Sie Ihrer Rechnungs-E-Mail eine persönliche Notiz hinzu, um die Portal-Nutzung zu fördern
- Das Portal funktioniert auf allen Geräten - Mobiltelefon, Tablet und Desktop
- Zahlungsbestätigungen werden sowohl an Sie als auch an den Kunden gesendet
- Prüfen Sie den Kundenereignisverlauf auf der Rechnungsdetailseite, um Portal-Interaktionen einzusehen