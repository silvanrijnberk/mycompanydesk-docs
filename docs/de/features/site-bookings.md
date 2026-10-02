---
title: Online-Termine
description: Lassen Sie Kunden direkt über Ihre Website Termine mit Site Bookings buchen.
last_verified: 2026-10-02
---

# Online-Termine

Mit **Site Bookings** fügen Sie Ihrer Website einen Block hinzu, über den Besucher direkt einen Termin bei Ihnen buchen können. Ob Kennenlerntermin, Angebotsgespräch oder Serviceeinsatz: der Kunde wählt einen Service, ein passendes Zeitfenster und bestätigt die Anfrage. Sie entscheiden, welche Services Sie anbieten, wann Sie verfügbar sind und ob jede Buchung erst von Ihnen freigegeben werden muss.

## Für wen ist das gedacht?

- Freiberufler und kleine Unternehmen, die Kunden über ihre Website buchen lassen möchten.
- Unternehmen, die ihren Kalender per Klick verfügbar machen möchten.
- Jeder, der wiederkehrende Termintypen als separate Services anbieten möchte.

## Was wird benötigt?

- Eine Website, die mit dem **Website-Builder** erstellt wurde.
- Ein Kalender in MyCompanyDesk, in dem Termine landen.
- Mindestens ein Service, den Sie als buchbaren Termin anbieten möchten.

## Verfügbare Zeiten und Öffnungszeiten

Die Zeiten, die Besucher buchen können, stammen aus einer zentralen Quelle: **Einstellungen** > **Unternehmensdaten** > **Öffnungszeiten**.

- Legen Sie pro Tag fest, ob geöffnet oder geschlossen ist, und geben Sie für geöffnete Tage einen oder zwei Zeiträume an.
- Verwenden Sie **Sonderöffnungszeiten** für Feiertage, Urlaub oder einmalige Änderungen; diese wirken sich auch darauf aus, ob der Terminblock einen Tag anbietet.
- Der Terminblock berücksichtigt automatisch Ihre Öffnungszeiten und Ihren verbundenen Kalender, damit keine doppelten oder unmöglichen Termine entstehen.

Siehe [Unternehmenseinstellungen](/de/settings/company) für das Einrichten Ihrer Öffnungszeiten.

## Terminblock zur Website hinzufügen

1. Öffnen Sie den **Website-Builder** in der App.
2. Bearbeiten Sie die Seite, auf der der Terminblock erscheinen soll.
3. Suchen Sie in der Blockbibliothek nach **Termine** oder **Site Bookings**.
4. Ziehen Sie den Block an die gewünschte Stelle auf der Seite.
5. Klicken Sie auf den Block, um die Einstellungen zu öffnen.

Sobald Sie die Seite veröffentlichen, zeigt Ihre Website das Terminformular an.

## Services und Zeitfenster einstellen

In den Blockeinstellungen legen Sie fest, wie Kunden buchen können:

- **Service**: geben Sie dem Termin einen Namen, zum Beispiel „Kennenlerntermin“ oder „Installationsbesuch“.
- **Preis (optional)**: geben Sie einen Preis ein, falls der Termin kostenpflichtig sein soll.
- **Dauer**: wählen Sie, wie lange der Termin dauert, zum Beispiel 30 oder 60 Minuten.
- **Vorausbuchung**: legen Sie fest, wie weit im Voraus jemand einen Termin buchen darf.
- **Freigabe erforderlich**: aktivieren Sie diese Option, wenn jede Anfrage zunächst manuell von Ihnen freigegeben werden soll.
- **Externen Kalender blockieren**: lassen Sie das Tool Ihren bestehenden Kalender prüfen, damit keine Doppelbuchungen entstehen.

Die **verfügbaren Zeitfenster** selbst stammen aus den zentralen Öffnungszeiten in [Unternehmensdaten](/de/settings/company). Der Block blendet Tage und Zeiträume aus, die dort nicht geöffnet sind.

Im Editor zeigt der Terminblock die Services aus Ihrem Angebot als Chips an, genau wie auf der Live-Site: den Namen, die Dauer und den Preis inklusive MwSt., wie Besucher ihn sehen, dazu eine einzige MwSt.-Zeile unter der Reihe. Ein Klick auf einen Chip wechselt im Editor nur den Service, auf dem das Beispielraster aufbaut; Verfügbarkeiten werden dort nicht geladen und nichts gebucht.

:::tip
Verknüpfen Sie den Block mit einer **E-Mail-Adresse**, damit Besucher eine automatische Bestätigung erhalten und Sie bei jeder neuen Buchung benachrichtigt werden.
:::

## Gruppentermine

Nicht jede Buchung ist ein Kunde zu einer frei gewählten Zeit. Ein **Gruppentermin** (ein Workshop, ein Kurs, eine Führung) hat eine feste Zeit und eine Anzahl von Plätzen, und mehrere Kunden können gleichzeitig teilnehmen. Sie planen die Sitzungen im Kalender unter **Gruppentermine**:

- **Sortiment-Item**: Name und, falls Sie einen berechnen, Preis der Sitzung kommen aus dem Sortiment-Item, das Sie auswählen. Noch kein Sortiment? Legen Sie zuerst eine Service an, zum Beispiel für Ihren Workshop.
- **Ein oder mehrere Termine**: planen Sie mehrere Startzeiten auf einmal, jede mit ihrer Dauer.
- **Plätze**: wie viele Personen in die Sitzung passen (zwischen 1 und 500). **Max. pro Anmeldung** legt fest, wie viele Personen eine Anmeldung mitbringen darf (bis 50).
- **Anmeldung offen bis**: bis zum Beginn, eine bestimmte Zahl von Stunden davor oder eine Woche davor. Bis dahin können die Teilnehmenden sich auch selbst abmelden.
- **Ort**: optional, zum Beispiel Ihr Studio.
- **Zahlung**: vollständig online im Voraus bezahlt (ein Platz ist erst bestätigt, wenn er bezahlt ist; ohne Mollie oder Stripe zahlt man vor Ort) oder **vor Ort**, wobei nach der Sitzung für jede Teilnehmende ein Rechnungsentwurf bereitliegt.

Besuchende melden sich über den Block **Gruppentermine** auf Ihrer Website an, in einer Anmeldung für eine oder mehrere Personen, solange Plätze übrig sind. Jede Anmeldung wird getrennt pro Person geführt, deshalb funktionieren Erinnerungsmails, der persönliche Abmeldelink, Onlinezahlung und eine eventuelle Rechnung pro Teilnehmendem. Im Kalender trägt jede Sitzung einen Auslastungsbalken, damit Sie auf einen Blick sehen, wie voll die Gruppe ist, und eine Sitzung belegt Ihren eigenen Kalender neben Ihren Terminen; derselbe Zeitpunkt kann also nicht doppelt belegt sein.

Auf der Sitzungsseite finden Sie die Teilnehmenden: in einem Zug mailen, jemanden per Hand hinzufügen, als Nichterscheinen kennzeichnen oder eine Einzelperson abmelden (sie erhält eine E-Mail und die Plätze werden wieder frei). Sie können die ganze Sitzung auch verschieben oder absagen; eine Verschiebemeldung geht nur an Teilnehmende, die auch wirklich per E-Mail erreichbar sind. Eine unbezahlte Anmeldung, die unbezahlt bleibt, wird **abgelaufen** statt abgesagt, und erst eine abgelaufene Anmeldung bekommt ihre Plätze zurück, wenn die Zahlung noch rechtzeitig eintrifft. Anmeldungen, die Sie selbst oder die besuchende Person abgemeldet hat, kommen nicht zurück, und das Geld geht zurück. Teilnehmende finden ihre gebuchte Sitzung wie jeden Termin mit Ihnen in ihrem Kundenportal unter **Termine**.

## Einen Termin über das Portal buchen

Besucher sehen auf Ihrer Website eine Übersicht mit verfügbaren Zeiten. Sobald sie ein Zeitfenster wählen, geben sie ihre Daten ein und bestätigen die Anfrage. Je nach Einstellung:

- wird der Termin sofort endgültig, oder
- kommt die Anfrage als „zur Freigabe“ herein und muss von Ihnen zuerst bestätigt werden.

Der Termin erscheint direkt in Ihrem MyCompanyDesk-Kalender, inklusive gewähltem Service und etwaigen Hinweisen des Kunden.

## Termine verwalten

Nachdem ein Termin gebucht wurde, können Sie ihn im Kalender verwalten:

- **Bearbeiten**: ändern Sie Datum, Uhrzeit oder Service über den Kalender.
- **Stornieren**: löschen Sie den Termin. Der Kunde wird automatisch informiert, wenn Sie die E-Mail-Einstellungen aktiviert haben.
- **Verschieben**: bieten Sie über den Terminblock oder den Kalender ein alternatives Zeitfenster an.

Ein **bestätigter** Online-Termin zählt außerdem als erfasste Stunden im **Zeitplan**, damit Sie Ihre Termine neben Ihren Zeiteinträgen sehen. Diese Stunden sind über den Zeitplan nicht abrechenbar; der Umsatz des Termins wird separat über den Termin selbst in Rechnung gestellt.

Eine Kundin oder ein Kunde kann online stornieren, solange der Termin noch nicht begonnen hat. Ein Termin, für den bereits eine Rechnung erstellt wurde, lässt sich online nicht mehr stornieren: Die Stornierseite weist darauf hin und bittet den Kunden, sich bei Ihnen zu melden.

## Anzahlung

Der Terminblock kann Besucher beim Buchen um eine Anzahlung bitten. Schalten Sie **Anzahlung** in den Blockeinstellungen ein und wählen Sie einen festen Betrag oder einen Prozentsatz des Dienstpreises. Eine Anzahlung braucht einen verbundenen Zahlungsanbieter (Mollie oder Stripe); ohne einen solchen bucht der Block einfach ohne Anzahlung.

Solange die Anzahlung nicht eingegangen ist, bleibt die Buchung offen: Die App zeigt **Zahlung ausstehend** statt der Annehmen-Schaltfläche, und das Annehmen wird verweigert, bis das Geld da ist. Ablehnen können Sie in der Zwischenzeit trotzdem; bei einer unbezahlten Anfrage steht nur dieser Knopf. Lehnen Sie eine Anfrage ab, oder läuft eine Anfrage ab, geht die bezahlte Anzahlung von selbst zurück. Trifft später noch eine Zahlung für eine Anfrage ein, die unterdessen abgelehnt, zurückgezogen oder abgelaufen ist, geht auch dieser Betrag automatisch zurück. Auch eine Stornierung durch den Besucher zahlt den Betrag von selbst zurück, solange sie in das Rückerstattungsfenster fällt, das Sie in den Blockeinstellungen einstellen. Im Standard läuft dieses Fenster bis einen Tag vor dem Start; Sie können es auf Ihren ganzen Buchungshorizont ausdehnen, damit jede Stornierung vor dem Start zurückzahlt, oder auf null setzen: Dann zahlt nichts automatisch zurück, und Sie erstatten selbst über die Schaltfläche **Anzahlung zurückerstatten** am Termin.

Das Verschieben eines Termins öffnet das Rückerstattungsfenster nicht erneut.

## Erinnerungen und Stornierungsmails

MyCompanyDesk kann automatisch eine Erinnerungsmail vor dem Termin senden. Auch eine Stornierungsmail an den Kunden ist möglich. Ob und wann diese E-Mails versendet werden, legen Sie in den Blockeinstellungen und Ihren Unternehmenseinstellungen fest. Wurde für einen Termin schon eine Erinnerung gesendet und wird er danach verschoben, geht die Erinnerung für die neue Startzeit noch einmal heraus.

## Häufig gestellte Fragen

**Warum sehe ich keine verfügbaren Zeiten?**
Prüfen Sie, ob Sie mindestens einen Service angelegt haben, ob dieser eine Dauer hat, und ob Ihre Zeitfenster in der Zukunft liegen. Eine aktivierte Freigabe kann außerdem dazu führen, dass Zeiten erst sichtbar werden, nachdem Sie eine Anfrage bestätigt haben.

**Kann ich mehrere Services anbieten?**
Ja. Pro Terminblock können Sie einen oder mehrere Services anzeigen. Jeder Service hat einen eigenen Namen, eine eigene Dauer und einen eigenen Preis.

**Wird bei der Buchung eine Zahlung verlangt?**
Nur dann, wenn Sie der Service einen Preis zuweisen. Ohne Preis ist die Buchung kostenlos und Sie erhalten lediglich eine Reservierung.

## Verwandte Themen

- [Website-Builder](/de/advanced/business-page)
- [Zeiterfassung](/de/features/time-registration)
- [Kunden](/de/features/customers)
- [Domains, Website & Posteingang](/de/features/domains-website-inbox)
