---
title: Online-Termine
description: Lassen Sie Kunden über den Terminblock Ihrer Website direkt einen Termin buchen oder ein Datum anfragen, optional mit Anzahlung.
last_verified: 2026-10-13
---

# Online-Termine

Mit dem Block **Online boeken (afspraak plannen)** (Online buchen) fügen Sie Ihrer Website einen Block hinzu, über den Besucher direkt einen Termin bei Ihnen buchen können. Ob Kennenlerntermin, Angebotsgespräch oder Serviceeinsatz: der Kunde wählt einen Service, ein passendes Zeitfenster und bestätigt die Anfrage. Sie entscheiden, welche Services Sie anbieten, wann Sie verfügbar sind und ob jede Buchung erst von Ihnen freigegeben werden muss.

## Für wen ist das gedacht?

- Selbstständige und Freiberufler, die Kunden über ihre Website buchen lassen möchten.
- Unternehmen, die ihren Kalender per Klick verfügbar machen möchten.
- Jeder, der wiederkehrende Termintypen als separate Services anbieten möchte.

## Was wird benötigt?

- Eine Website, die mit dem **Website-Builder** erstellt wurde.
- Ein Kalender in MyCompanyDesk, in dem Termine landen.
- Mindestens ein Service in Ihrem **Katalog**, den Sie als buchbaren Termin anbieten möchten.

## Verfügbare Zeiten und Öffnungszeiten

Die Zeiten, die Besucher buchen können, stammen aus einer zentralen Quelle: **Einstellungen** › **Unternehmensdaten** › **Öffnungszeiten**.

- Legen Sie pro Tag fest, ob geöffnet oder geschlossen ist, und geben Sie für geöffnete Tage einen oder zwei Zeiträume an.
- Verwenden Sie **Freie Tage und Ausnahmen** für Feiertage, Urlaub oder einmalige Änderungen; diese wirken sich auch darauf aus, ob der Terminblock einen Tag anbietet.
- Der Terminblock berücksichtigt automatisch Ihre Öffnungszeiten und Ihren verbundenen Kalender, damit keine doppelten oder unmöglichen Termine entstehen.

Siehe [Unternehmenseinstellungen](/de/settings/company) für das Einrichten Ihrer Öffnungszeiten.

## Terminblock zur Website hinzufügen

1. Öffnen Sie den **Website-Builder** in der App.
2. Bearbeiten Sie die Seite, auf der der Terminblock erscheinen soll.
3. Suchen Sie in der Blockbibliothek nach **Online boeken (afspraak plannen)**.
4. Ziehen Sie den Block an die gewünschte Stelle auf der Seite.
5. Klicken Sie auf den Block, um die Einstellungen zu öffnen.

Sobald Sie die Seite veröffentlichen, zeigt Ihre Website das Terminformular an.

## Services und Zeitfenster einstellen

In den Blockeinstellungen legen Sie fest, wie Kunden buchen können:

- **Hoe boeken klanten?** (wie Kunden buchen): Wählen Sie **Direct boeken (vrije tijden)** (direkt buchen, freie Zeiten), wenn Besucher selbst einen freien Moment wählen, oder **Aanvraag (jij bevestigt)** (Anfrage, Sie bestätigen), wenn sie einen Moment anfragen, den Sie bestätigen. Eine Anfrage kommt als Lead in Ihrem Posteingang an, mit einer Benachrichtigung.
- **Services**: Der Block zeigt die Services aus Ihrem Katalog, jeweils mit eigener Dauer. Für andere Services in diesem Block füllen Sie **Diensten met eigen duur (optioneel)** (Services mit eigener Dauer) mit Name, Dauer und optionalem Preis aus. Die Reihenfolge ändern Sie im Katalog.
- **Duur per afspraak (minuten)** und **Pauze tussen afspraken (minuten)**: wie lange ein Termin dauert, wenn der Service keine eigene Dauer hat, und wie viel Luft zwischen zwei Terminen bleibt.
- **Minimaal vooraf boeken (uren)** und **Online te boeken tot (dagen vooruit)**: wie kurzfristig jemand noch buchen darf und wie weit im Voraus.
- **Zelf accepteren voor de afspraak vaststaat** (erst selbst annehmen): Die Zeit wird reserviert, und Sie bestätigen oder lehnen ab unter **Zeitplan › Termine**. Nach Ihrer Zusage erhält der Besucher automatisch die Bestätigung mit Kalendereinladung.
- **Gekoppelde agenda blokkeert tijden** (verbundener Kalender blockiert Zeiten): Termine in Ihrem verbundenen Google- oder Outlook-Kalender machen diese Zeiten unbuchbar. Ganztägige Einträge zählen hier nicht; dafür nutzen Sie freie Tage bei Ihren Öffnungszeiten.

Die **verfügbaren Zeitfenster** selbst stammen aus den zentralen Öffnungszeiten in [Unternehmensdaten](/de/settings/company). Der Block blendet Tage und Zeiträume aus, die dort nicht geöffnet sind.

Im Editor zeigt der Terminblock die Services aus Ihrem Katalog als Chips an, genau wie auf der Live-Site: den Namen, die Dauer und den Preis inklusive MwSt., wie Besucher ihn sehen, dazu eine einzige MwSt.-Zeile unter der Reihe. Ein Klick auf einen Chip wechselt im Editor nur den Service, auf dem das Beispielraster aufbaut; Verfügbarkeiten werden dort nicht geladen und nichts gebucht.

:::tip
Verknüpfen Sie den Block mit einer **E-Mail-Adresse**, damit Besucher eine automatische Bestätigung erhalten und Sie bei jeder neuen Buchung benachrichtigt werden.
:::

## Datumsanfragen

Nicht jedes Gewerbe verkauft Zeitfenster. Ein DJ, ein Foodtruck oder ein Hochzeitsfotograf verliert Tage, und die Frage eines Besuchers lautet nicht „Dienstag um 14:00?“, sondern „ist der 14. Juni noch frei?“. Für diese Gewerbe stellen Sie im Block **Hoe boeken klanten?** (wie Kunden buchen) auf **Aanvraag (jij bevestigt)** (Anfrage, Sie bestätigen) und aktivieren **Alleen een datum vragen (geen tijd)** (nur ein Datum erfragen, ohne Zeit). Das Formular fragt dann nur nach einem Datum. Mit **Op welke dagen kun je?** (an welchen Tagen können Sie) wählen Sie, auf welche Wochentage eine Anfrage fallen darf.

Unter dem Datum sieht der Besucher, ob dieser Tag noch frei ist. Die Antwort kommt aus Ihrem eigenen Kalender:

- **Ein Tag ist belegt, wenn schon etwas darauf liegt**: eine Buchung über Ihre Site, ein Gruppentermin, ein Eintrag in Ihrem eigenen MyCompanyDesk-Kalender (geplant oder gearbeitet), ein Termin in Ihrem eigenen verknüpften Google- oder Outlook-Kalender (ganztägige Einträge eingeschlossen), oder ein Tag, den Sie bei Besonderen Tagen auf geschlossen gestellt haben.
- **Nicht gezählt**: Ihre festen Wochenzeiten (im Anfragemodus schränken sie nichts ein, jeder Ihrer Wochentage darf angefragt werden), Geburtstage und Arbeitsorte aus Ihren verknüpften Kalendern, mit Ihnen geteilte oder nur abonnierte Kalender (etwa ein Feiertagskalender), Einträge, die Sie abgelehnt oder als frei markiert haben, und ein Auftritt vom Abend zuvor, der bis spätestens 6:00 weiterläuft: das ist die Nacht des Vortages, nicht des nächsten Tages.
- Die Site schaut rund zwei Jahre voraus. Weiter sagt sie nichts, statt den Tag als belegt zu nennen.
- Die Antwort lautet nur frei oder belegt: Ihre Site sagt einem Besucher nie, was an dem Tag auf Ihrem Kalender liegt.
- Jede Anfrage landet bei Ihnen: das Datum kommt als Anfrage an, die Sie bestätigen, wie im übrigen Anfragemodus.

Besucher können kein Datum aus der Vergangenheit senden, und ein Datumsfeld auf einem gewöhnlichen Anfrageformular lehnt Vergangenes auf dieselbe Weise ab.

Der Block kann Anfragen auch ein eigenes Tempo geben. In den Blockeinstellungen stellt **Minimaal aantal dagen van tevoren** (Mindestvorlauf in Tagen, nur bei nur-ein-Datum) ein, wie viele ganze Tage voraus der erste Datumsvorschlag der Tagauswahl beginnt: 0 = ab heute, ein früheres Datum ist schlicht nicht wählbar. Liegt eine Zeit auf dem Block, lehnt **Minimaal van tevoren** (Mindestvorlauf in Stunden oder Tagen) eine Anfrage für einen früheren Moment ab. Ohne Wert gilt keine Frist außer der Regel gegen die Vergangenheit; Tagauswahl und Server wenden dieselbe Regel an; was die Site anbietet und was gespeichert wird, widerspricht sich nie. **Maximaal aantal aanvragen per week (optioneel)** begrenzt die offenen oder angenommenen Anfragen dieses Blocks für Tage in einer Woche (Montag bis Sonntag); ist die Woche voll, erscheinen die Tage dieser Woche auf Ihrer Site als nicht frei, und eine Anfrage, die Sie auf geschlossen setzen, zählt nicht mehr mit. Leer oder 0 heißt kein Maximum. In der Bestätigung steht neben dem Datum auch der Wochentag, sodass eine Anfrage mit einem Tagesnamen ankommt und nicht nur als nackte Zahl.

## Gruppentermine

Nicht jede Buchung ist ein Kunde zu einer frei gewählten Zeit. Ein **Gruppentermin** (ein Workshop, ein Kurs, eine Führung) hat eine feste Zeit und eine Anzahl von Plätzen, und mehrere Kunden können gleichzeitig teilnehmen. Sie planen die Sitzungen im Kalender unter **Gruppentermine**:

- **Sortiment-Item**: Name und, falls Sie einen berechnen, Preis der Sitzung kommen aus dem Sortiment-Item, das Sie auswählen. Noch kein Sortiment? Legen Sie zuerst eine Service an, zum Beispiel für Ihren Workshop.
- **Ein oder mehrere Termine**: planen Sie mehrere Startzeiten auf einmal, jede mit ihrer Dauer.
- **Plätze**: wie viele Personen in die Sitzung passen (zwischen 1 und 500). **Max. pro Anmeldung** legt fest, wie viele Personen eine Anmeldung mitbringen darf (bis 50).
- **Anmeldung möglich bis**: bis zum Beginn, eine bestimmte Zahl von Stunden davor oder eine Woche davor. Bis dahin können die Teilnehmenden sich auch selbst abmelden.
- **Ort**: optional, zum Beispiel Ihr Studio.
- **Zahlung**: vollständig online im Voraus bezahlt (ein Platz ist erst bestätigt, wenn er bezahlt ist; ohne Mollie oder Stripe zahlt man vor Ort) oder **vor Ort**, wobei nach der Sitzung für jede Teilnehmende ein Rechnungsentwurf bereitliegt.

Besuchende melden sich über den Block **Gruppentermine** auf Ihrer Website an, in einer Anmeldung für eine oder mehrere Personen, solange Plätze übrig sind. Jede Anmeldung wird getrennt pro Person geführt, deshalb funktionieren Erinnerungsmails, der persönliche Abmeldelink, Onlinezahlung und eine eventuelle Rechnung pro Teilnehmendem. Im Kalender trägt jede Sitzung einen Auslastungsbalken, damit Sie auf einen Blick sehen, wie voll die Gruppe ist, und eine Sitzung belegt Ihren eigenen Kalender neben Ihren Terminen; derselbe Zeitpunkt kann also nicht doppelt belegt sein.

Auf der Sitzungsseite finden Sie die Teilnehmenden: in einem Zug mailen, jemanden per Hand hinzufügen, als Nichterscheinen kennzeichnen oder eine Einzelperson abmelden (sie erhält eine E-Mail und die Plätze werden wieder frei). Sie können die ganze Sitzung auch verschieben oder absagen; eine Verschiebemeldung geht nur an Teilnehmende, die auch wirklich per E-Mail erreichbar sind. Eine unbezahlte Anmeldung, die unbezahlt bleibt, wird **abgelaufen** statt abgesagt, und erst eine abgelaufene Anmeldung bekommt ihre Plätze zurück, wenn die Zahlung noch rechtzeitig eintrifft. Anmeldungen, die Sie selbst oder die besuchende Person abgemeldet hat, kommen nicht zurück, und das Geld geht zurück. Teilnehmende finden ihre gebuchte Sitzung wie jeden Termin mit Ihnen in ihrem Kundenportal unter **Termine**.

## Wiederkehrende Termine

Ein Termin, der immer wieder kommt, muss nicht einzeln geplant werden. Bei **Termin planen** und bei **Neue Gruppensitzung** fragt das Formular **Wiederholen**: jede Woche, alle zwei Wochen, alle paar Wochen (eins bis zwölf) oder jeden Monat, und für wie lange: **bis ich stoppe** (Sie können von jedem Termin aus jederzeit stoppen), **eine Anzahl von Malen** oder **bis einschließlich einem Datum**.

Direkt darunter sitzt die Wahl der Bestätigung: eine WhatsApp-Nachricht, die auf Ihrem Telefon versandbereit liegt, eine E-Mail für die ganze Serie (Tag, Zeit und ein Link zum Verschieben, mit einer Erinnerung am Vortag jedes Termins), oder gar keine Bestätigung. WhatsApp senden Sie selbst; die E-Mail verschickt MyCompanyDesk.

Danach läuft Ihr wiederkehrender Termin von selbst:

- Der Kalender plant immer ein rollierendes Jahr voraus, eine nächtliche Runde füllt nach, so stehen die nächsten Termine einfach da. Liste und Kalender markieren jede Wiederholung mit dem Wiederholungs-Symbol, und die Zeile auf dem Terminblatt zeigt, wer die Serie geplant hat und wie lange sie läuft.
- Vor dem Anlegen zeigt die Vorschau **Kommende Termine** die kommenden Daten, Konflikte in Orange; ein Datum abwählen lässt es aus, der Rest geht durch.
- Beim Stornieren oder Verschieben eines Termins fragt die App zuerst: **nur dieses Datum** (die Serie läuft weiter) oder **dieses und alle folgenden** (die Serie endet nach diesem Datum). Eine kurze E-Mail kann die Kundin oder den Kunden informieren.
- Eine Gruppensitzungs-Serie hat pro Datum eigene Plätze und eigene Anmeldungen pro Sitzung. **Ganze Serie bearbeiten** wendet eine Änderung auf jedes folgende Datum an, und beim Absagen bekommt jede Person ihre eigene Nachricht, per E-Mail wo eine Adresse existiert und per WhatsApp wo nur eine Telefonnummer hinterlegt ist.
- **Wer war da?** an der Sitzung nimmt die Anwesenheit pro Person auf. Haken Sie jemanden mit einer Stempelkarte an, wird sofort eine Entwertung auf der Karte vorgenommen; das Häkchen weg macht es rückgängig. Wie Karten und Entwertungen funktionieren, steht unter [Stempelkarten](/de/features/customers#stempelkarten).

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

Der Terminblock kann Besucher beim Buchen um eine Anzahlung bitten. Schalten Sie **Aanbetaling vragen** (Anzahlung verlangen) in den Blockeinstellungen ein und wählen Sie einen festen Betrag oder einen Prozentsatz des Dienstpreises. Eine Anzahlung braucht einen verbundenen Zahlungsanbieter (Mollie oder Stripe); ohne einen solchen bucht der Block einfach ohne Anzahlung.

Solange die Anzahlung nicht eingegangen ist, bleibt die Buchung offen: Die App zeigt **Zahlung ausstehend** statt der Annehmen-Schaltfläche, und das Annehmen wird verweigert, bis das Geld da ist. Ablehnen können Sie in der Zwischenzeit trotzdem; bei einer unbezahlten Anfrage steht nur dieser Knopf. Lehnen Sie eine Anfrage ab, oder läuft eine Anfrage ab, geht die bezahlte Anzahlung von selbst zurück. Trifft später noch eine Zahlung für eine Anfrage ein, die unterdessen abgelehnt, zurückgezogen oder abgelaufen ist, geht auch dieser Betrag automatisch zurück. Auch eine Stornierung durch den Besucher zahlt den Betrag von selbst zurück, solange der Besucher rechtzeitig storniert, gemäß **Kosteloos annuleren** (kostenlos stornieren) in den Blockeinstellungen: bis 24 Stunden vorher (Standard), bis 48 Stunden vorher, bis eine Woche vorher, immer erstatten (jede Stornierung vor dem Start) oder nie automatisch erstatten: Dann entscheiden Sie selbst über die Schaltfläche **Anzahlung zurückerstatten** am Termin.

Das Verschieben eines Termins öffnet das Rückerstattungsfenster nicht erneut.

## Erinnerungen und Stornierungsmails

MyCompanyDesk kann automatisch eine Erinnerungsmail vor dem Termin senden. Auch eine Stornierungsmail an den Kunden ist möglich. Ob und wann diese E-Mails versendet werden, legen Sie in den Blockeinstellungen und Ihren Unternehmenseinstellungen fest. Wurde für einen Termin schon eine Erinnerung gesendet und wird er danach verschoben, geht die Erinnerung für die neue Startzeit noch einmal heraus.

## Häufig gestellte Fragen

**Warum sehe ich keine verfügbaren Zeiten?**
Prüfen Sie, ob Sie mindestens einen Service in Ihrem Katalog haben, ob dieser eine Dauer hat und ob Ihre Öffnungszeiten im kommenden Zeitraum offene Tage haben. Steht der Block auf **Aanvraag (jij bevestigt)**, wählt der Besucher keine freie Zeit, sondern fragt einen Moment oder ein Datum an.

**Kann ich mehrere Services anbieten?**
Ja. Der Block zeigt die Services aus Ihrem Katalog oder die Services, die Sie im Block selbst eintragen. Jeder Service hat einen eigenen Namen, eine eigene Dauer und einen eigenen Preis.

**Wird bei der Buchung eine Zahlung verlangt?**
Nur wenn Sie **Aanbetaling vragen** einschalten und Mollie oder Stripe verbunden haben. Ein Preis bei einem Service wird nur angezeigt; ohne Anzahlung ist die Buchung eine Reservierung, und Sie stellen die Rechnung danach aus dem Termin heraus.

## Verwandte Themen

- [Website-Builder](/de/advanced/business-page)
- [Zeiterfassung](/de/features/time-registration)
- [Kunden](/de/features/customers)
- [Domains, Website & Posteingang](/de/features/domains-website-inbox)
