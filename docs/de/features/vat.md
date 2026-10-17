---
title: MwSt
description: "Erfassen Sie vereinnahmte und gezahlte MwSt., bereiten Sie die Erklärung vor und behalten Sie Fristen im Blick, nach dem Formular der Belastingdienst."
last_verified: 2026-10-14
---

<!-- TODO(source-missing): The app also accepts the historical Dutch VAT rates 6% and 19% on invoices, quotes, contracts, recurring invoices and catalog items. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# MwSt

Erfassen Sie vereinnahmte und gezahlte Mehrwertsteuer, bereiten Sie Ihre Erklärung vor und behalten Sie die Fristen im Blick. MyCompanyDesk unterstützt länderspezifische MwSt.-Abläufe: Für niederländische Unternehmen folgen die MwSt.-Seiten dem Erklärungsformular der Belastingdienst, für andere unterstützte Länder gelten deren Fristen und Regeln. So sind die Zahlen, die Sie sehen, die Zahlen, die Sie einreichen.

## Wo Sie es finden

Öffnen Sie **Steuern** in der Seitenleiste. Der Bereich beginnt mit den MwSt.-Tabs **Übersicht**, **Erklärung**, **Prüfung**, **Transaktionen**, **Korrekturen** und **Zeiträume**. Nach einer Trennlinie folgen die Tabs zur Einkommensteuer: **Gewinnerklärung** und, wenn sie für Sie gilt, **Box 3**. Die MwSt.-Tabs sind in jedem Abonnement kostenlos; für die Einkommensteuer-Tabs brauchen Sie Office. Aktiver Tab und Zeitraum stehen in der URL, sodass Neuladen und die Zurück-Taste Ihre Position behalten.

Die Auswahl **Zeitraum** in der Werkzeugleiste folgt der Erklärungshäufigkeit aus Ihren MwSt.-Einstellungen. Bei vierteljährlicher Abgabe sehen Sie Q1 bis Q4 plus ganzes Jahr, bei monatlicher Abgabe M01 bis M12 plus ganzes Jahr, bei jährlicher Abgabe nur das ganze Jahr. Ein Wechsel wirkt sich auf jede Karte in jedem Tab aus. Dieselbe Häufigkeit bestimmt die Zeiträume bei einer manuellen Korrektur. Mit der Jahresauswahl neben den Tabs wechseln Sie alles in ein anderes Jahr, und hinter der Schaltfläche **Exportieren** in der Werkzeugleiste liegen die CSV-Downloads für Ihren Buchhalter.

Weil Tab und Zeitraum in der URL stehen, öffnen Links aus der MwSt.-Fristerinnerung im Benachrichtigungsbereich, aus dem Fristen-Chip im Kalender, aus der Push-Benachrichtigung und aus der MwSt.-Zeitraumkarte bei den Ausgaben genau den Zeitraum, um den es geht, statt des aktuellen Quartals. Alte Links zur MwSt.-Seite funktionieren weiter und landen im selben Zeitraum.

## MwSt.-Einstellungen

Unter **Einstellungen › MwSt.** liegen die Entscheidungen, die die MwSt.-Seiten und viele Rechnungsvorgaben steuern.

### Erklärungshäufigkeit

Die Frage "Wie oft machst du MwSt.-Voranmeldung?" legt fest, welche Zeiträume in der Auswahl erscheinen und welche Erklärungen Sie abgeben müssen:

| Auswahl | Angezeigte Zeiträume |
|---|---|
| **Monatlich** | M01 bis M12 plus ganzes Jahr |
| **Vierteljährlich** | Q1 bis Q4 plus ganzes Jahr |
| **Einmal im Jahr** | Nur ganzes Jahr |

Eine geänderte Häufigkeit schreibt frühere Erklärungen nicht um. Sie bestimmt nur, wie künftige Zeiträume gruppiert werden. Betrifft die Änderung bereits eingereichte Zeiträume, nennt die App diese und sagt, ab welchem Zeitraum die neue Häufigkeit gilt.

### MwSt.-Satz

"Welchen MwSt.-Satz verwendest du meistens?" bestimmt den Standardsatz für neue Rechnungszeilen und andere steuerpflichtige Posten: 21 %, 9 % oder 0 % (sources/vat-rates.yaml#countries.NL.standard, reduced, zero). Pro Rechnung oder Beleg können Sie jederzeit einen anderen Satz wählen.

### 9-%-Vorschlag für Speisen und Getränke

Wenn Sie einen ganz neuen Artikel in Ihrem Angebot anlegen, kann MyCompanyDesk fragen: "Verkaufen Sie Speisen oder Getränke? Dafür gelten meist 9 % MwSt." Die Frage erscheint nur, wenn Ihr Arbeitsbereich noch nie selbst einen Standardsatz in Einstellungen › MwSt. gewählt hat, KOR und Steuerbefreiung beide aus sind und Ihre eigenen Daten (KVK/SBI-Code, Ihre Antwort im Assistenten oder Ihre Unternehmensbeschreibung, nie der Firmenname) eindeutig auf Gastronomie oder Lebensmittel hindeuten. Mit **Auf 9% setzen** erhält nur dieser eine Artikel den ermäßigten Satz (sources/vat-rates.yaml#countries.NL.reduced). Nichts ist vorausgewählt: Wer die Frage ignoriert, ändert nichts, bei bestehenden Artikeln erscheint sie nie, und Arbeitsbereiche mit KOR oder Steuerbefreiung sehen sie nicht.

### Standard-MwSt.-Satz für Ausgaben

**Und für Ihre Ausgaben?** legt fest, welcher MwSt.-Satz bei einer neuen Ausgabe vorausgewählt ist. Pro Ausgabe können Sie ihn weiterhin ändern.

### Von der MwSt. befreit

Der Schalter **Meine Leistungen sind von der Umsatzsteuer befreit (zum Beispiel Pflege oder Bildung)** ist für Unternehmen, deren Leistungen gesetzlich befreit sind. Ist er an, stehen neue Rechnungs- und Angebotszeilen standardmäßig auf befreit, und der Tab Prüfung erinnert daran, dass Vorsteuer auf Kosten für befreite Tätigkeiten nicht abzugsfähig ist. Verwechseln Sie das nicht mit der KOR; dafür gelten andere Regeln.

### Kleinunternehmerregelung (KOR)

Die KOR-Karte fragt, ob Sie an der niederländischen **kleineondernemersregeling** teilnehmen, und hat den Schalter **Ich nehme an der Kleinunternehmerregelung teil**. Ist er an:

- tragen Ihre Rechnungen keine MwSt. und Sie geben keine MwSt.-Erklärung ab;
- wird vereinnahmte MwSt. nicht als zu zahlen angezeigt und Vorsteuer nicht abgezogen;
- zeigt eine Anzeige Ihren Umsatz dieses Jahres bis heute neben der Grenze.

Die Anzeige kennt drei Zustände:

- **Unter der Grenze**: normale Fortschrittsfarbe.
- **Nahe der Grenze**: ab 80 % der Grenze weist die Zeile unter der Anzeige darauf hin, Ihren Umsatz im Blick zu behalten, damit Sie das Überschreiten einplanen können. Nehmen Sie teil, zeigt ab 90 % zusätzlich ein oranger Hinweis, wie viel Spielraum noch bleibt.
- **Über der Grenze**: sobald Ihr Umsatz in diesem Jahr 20.000 € ohne MwSt. übersteigt ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)), meldet eine rote Warnung, dass die KOR nicht mehr gilt. Ab der Rechnung, mit der Sie die Grenze überschritten haben, berechnen Sie wieder MwSt., und zwar auf den vollen Betrag dieser Rechnung. Melden Sie sich sofort bei der Belastingdienst ab: Für den Rest dieses Jahres und das folgende Jahr können Sie dann nicht mehr an der KOR teilnehmen ([`sources/vat-rates.yaml#countries.NL.small_business_on_exceed`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)).

Die Schwellen von 80 % und 90 % legt MyCompanyDesk selbst fest, um Sie rechtzeitig zu warnen; die Belastingdienst bestimmt nur die Grenze von 20.000 €.

<!-- TODO(source-missing): whether the KOR switch is offered to workspaces outside the Netherlands is not yet verified. -->

Erfüllen Sie die Voraussetzungen der KOR nicht mehr, schalten Sie sie aus und prüfen Sie die nächste Erklärung mit Ihrem Buchhalter. Mehr zur KOR lesen Sie [weiter unten](#kor).

## Tab Übersicht

Die obere Karte fasst den gewählten Zeitraum zusammen:

- **Saldo**: dieselbe Nettosumme wie Rubrik 5g im Tab Erklärung: vereinnahmte und selbst berechnete MwSt. (Rubriken 2a/4a/4b) abzüglich der Vorsteuer aus Rubrik 5b, einschließlich manueller Korrekturen. MwSt. aus der OSS-Regelung zählt nicht mit, weil sie in eine eigene Erklärung gehört. Der Saldo trägt das Label "Zu zahlen" oder "Zurückzufordern" und folgt der Zeitraumauswahl.
- **Fristenring**: ein runder Countdown bis zur nächsten Abgabefrist, berechnet aus dem Fristenplan des Landes Ihres Arbeitsbereichs und Ihrer Erklärungshäufigkeit. Rot bei 3 Tagen oder weniger, orange bis 14 Tage, sonst grün. Ist eine Erklärung eingereicht, aber noch nicht bezahlt, bleibt der Ring bis zum Zahlungstermin bei diesem Zeitraum und zeigt **Eingereicht, Zahlung offen**, am Zahltag selbst **Heute zahlen**. Ein eingereichter Zeitraum, der beglichen ist oder mit einer Erstattung endete, hält den Ring nicht mehr fest; der Countdown springt zur nächsten Erklärung. Für einen niederländischen Arbeitsbereich ist die Frist bei einer Monats- oder Quartalserklärung der letzte Tag des Monats nach dem Zeitraum, bei einer Jahreserklärung vor dem 1. April des Folgejahres (also spätestens der 31. März). Bis dahin müssen sowohl die Erklärung als auch die Zahlung bei der Belastingdienst eingegangen sein ([`sources/nl-vat-filing.yaml#deadlines`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-filing.yaml)).

<!-- TODO(source-missing): The app also uses country-specific VAT filing deadlines for workspaces outside the Netherlands (GB, DE and others). Those rules are not in sources/ yet; do not list per-country due dates for them until a human adds them. -->
- **Rücklage**: ein Vorschlag, wie viel Sie zurücklegen sollten, nämlich die noch zu zahlende MwSt. plus 10 % Puffer, sichtbar, wenn Sie zahlen müssen. Bekommen Sie Geld zurück, zeigt die Kachel die Erstattung.

Unter dem Saldo stehen zwei Schaltflächen: **Erklärung öffnen** springt zum Tab Erklärung, und **Wie wird das berechnet?** geht die Rechnung hinter dem Saldo durch.

Über dieser Karte warnt ein Banner, wenn Ihre Daten unvollständig sind (Rechnungsentwürfe oder Ausgaben ohne MwSt.), damit Sie das vor der Abgabe beheben.

Darunter zeigen die Zeitraumkarten des Jahres je Zeitraum Umsatz, MwSt. aus und ein und den Saldo, mit der Abgabefrist. Ein eingereichter Zeitraum zeigt das Einreichungsdatum. Ein Klick auf eine Karte wechselt den Zeitraum für die ganze Seite. Künftige Zeiträume bleiben leer, bis echte Daten darin stehen.

Eine Jahreskarte schließt den Tab ab: Umsatz, geschuldete MwSt. und Vorsteuer für das ganze Jahr, dazu eine Schätzung der Einkommensteuer (oder der Körperschaftsteuer bei einer BV) für dieses Jahr mit dem Link **Berechnung ansehen**.

MyCompanyDesk schickt Ihnen außerdem einmal pro MwSt.-Zeitraum eine E-Mail, wenn die Abgabefrist näher rückt. Die E-Mail verlinkt direkt auf die MwSt.-Seiten und folgt dem Schalter **Wenn Sie bald eine MwSt.-Erklärung abgeben müssen** unter Einstellungen › Benachrichtigungen; dort schalten Sie sie ab.

Ist Ihr Unternehmen eine niederländische BV oder NV, sendet derselbe Schalter einmal pro Jahr auch eine Erinnerung vor der Frist der Körperschaftsteuererklärung (vennootschapsbelasting). Die Erinnerung erscheint im Benachrichtigungsbereich und kommt per E-Mail.

## Tab Prüfung

Eine Checkliste, die vor der Abgabe gegen den aktiven Zeitraum läuft. Jede Prüfung hat einen Link, der Sie direkt zu den betroffenen Buchungen bringt:

- **Entwürfe**: Rechnungen, die noch Entwurf sind und nicht in die Erklärung eingehen.
- **Fehlende MwSt.**: Ausgaben ohne MwSt.-Betrag.
- **Fehlende Belege**: Ausgaben ohne angehängten Beleg.
- **ICP offen**: innergemeinschaftliche B2B-Verkäufe, die separat in der ICP-opgaaf gemeldet werden müssen. Betrag und Anzahl folgen denselben Regeln wie die ICP-opgaaf selbst und stimmen daher mit den Zeilen überein, die tatsächlich gemeldet werden.
- **Herkunft bei Reverse-Charge**: Ausgaben mit verlagerter MwSt., bei denen Land oder KVK-Nummer des Lieferanten fehlen, sodass Rubrik 2a/4a/4b nicht belegt werden kann.
- **Abzugsdifferenz**: Ausgaben, deren abzugsfähige MwSt. nicht der gesamten MwSt. entspricht, etwa weil die Kategorie nicht voll abzugsfähig ist oder Privatnutzung vorliegt. Das entspricht den Markierungen im Tab Transaktionen.
- **Ausgaben zum Bestätigen**: Bankausgaben, die noch auf Ihre Bestätigung warten. Sie zählen noch nicht in die Erklärung, auch ihre MwSt. nicht; bestätigen oder entfernen Sie sie unter Zu bestätigen bei den Ausgaben. Diese Prüfung erscheint nur, wenn Ihr Zeitraum solche Ausgaben enthält.

Der Kopf zeigt, wie viele Punkte noch offen sind, oder dass für den Zeitraum alles in Ordnung ist. Regelungen wie KOR, Steuerbefreiung und private Pkw-Nutzung erscheinen hier nur, wenn sie auf Sie zutreffen. Liegt Ihr Umsatz noch im Bereich der KOR, zeigt dieser Tab außerdem einen Hinweis mit Link zu den KOR-Einstellungen. Eine Zeile unten öffnet Ihr Archiv des Jahres: Belege, Rechnungen und Vereinbarungen an einem Ort.

## Tab Erklärung

### Rubrikenübersicht

Eine Tabelle, die dem Erklärungsformular der Belastingdienst folgt:

| Abschnitt | Rubriken |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Jede Zeile zeigt den Betrag (netto) und den MwSt.-Betrag. Rubriken ohne Transaktionen im Zeitraum werden zu einer Zeile zusammengefasst; **Alle Rubriken anzeigen** klappt sie auf. Unten steht der Betrag, den Sie zahlen oder zurückbekommen. Korrekturen außerhalb des Formulars stehen in eigenen Zeilen: eine allgemeine Buchungskorrektur als **Correctie**, eine Minderung nach der alten KOR als **Vermindering volgens de oude KOR**. Die CSV-Zusammenfassung erhält eine passende Korrekturzeile, wenn diese nicht null ist, sodass Saldo, vereinnahmte und gezahlte MwSt. aufgehen. Die Spalte MwSt.-Saldo im Jahresüberblick verwendet dieselbe Nettosumme wie die Rubrikenübersicht und ergibt daher dieselbe Summe.

Rubrik 4a erfasst Einkäufe mit Reverse-Charge bei Lieferanten außerhalb der EU, Rubrik 4b solche bei Lieferanten innerhalb der EU. MyCompanyDesk leitet die richtige Rubrik aus dem Land des Lieferanten ab, damit die Summe in 5a stimmt.

### Abgabe

Ein Bereich neben der Tabelle zeigt, wo der Zeitraum steht (Entwurf, eingereicht, bezahlt oder Erstattung), und verlinkt mit den jeweiligen Zahlen auf die Tabs Prüfung, Transaktionen und Korrekturen. Ist der Zeitraum vorbei, übertragen Sie die Zahlen in Mijn Belastingdienst Zakelijk: **Mijn Belastingdienst Zakelijk öffnen** öffnet das Unternehmensportal unter `mijn.belastingdienst.nl/mbo-portaal/` ohne zusätzliche Auswahlseite. Danach nutzen Sie **Als eingereicht markieren**, damit MyCompanyDesk festhält, dass Sie die Erklärung abgegeben haben. Nach der Abgabe können Sie das Zahlungskennzeichen (betalingskenmerk) aus Ihrer Bestätigung speichern.

### Exporte für Ihren Buchhalter

Die Schaltfläche **Exportieren** in der Werkzeugleiste bietet CSV-Exporte: einen Buchhalter-Export, eine MwSt.-Übersicht für das gewählte Quartal und einen Jahresüberblick. Rechnungsentwürfe und stornierte Rechnungen zählen nicht mit, sodass die Summen zu Ihrer Erklärung passen.

Der Dateiname der ZIP-Datei des Buchhalter-Exports enthält Firmenname, Zeitraum und Exportprofil, und auch die README darin nennt das Unternehmen. So kann ein Buchhalter, der Exporte für mehrere Mandanten herunterlädt, die Dateien leicht auseinanderhalten.

### Warnung bei Abweichung von einer eingereichten Erklärung

Bei niederländischer MwSt. berechnet der Tab Erklärung die Erklärung auch dann weiter aus Ihren aktuellen Buchungen, wenn der Zeitraum als eingereicht markiert ist. Stimmt die Berechnung nicht mehr mit dem Eingereichten überein, erscheint über der Rubrikenübersicht eine Warnung. Sie stellt die eingereichten und die aktuellen Beträge für Rubrik 5a, 5b und die Nettosumme in 5g gegenüber und zeigt je Zeile die Differenz.

Die Warnung sagt auch, was zu tun ist, und richtet sich nach der Differenz in der Nettosumme (5g). Bis einschließlich 1.000 € MwSt. nehmen Sie die Differenz in Ihre nächste reguläre Erklärung auf. Über 1.000 € ist eine förmliche Berichtigungserklärung (suppletieaangifte) Pflicht, und nur dann zeigt die Warnung die Schaltfläche **Suppletie erstellen** ([`sources/nl-vat-corrections.yaml#suppletie.next_return_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Haben sich nur die Rubriken verschoben und ist der zu zahlende oder zu erstattende Betrag gleich geblieben, sagt die Warnung das, und Sie müssen nichts buchen.

### Internationale Karten

Bei internationalen Geschäften erscheinen unter der Tabelle zusätzliche Karten:

- **ICP-opgaaf**: innergemeinschaftliche B2B-Verkäufe, gruppiert nach USt-IdNr. des Kunden, nicht nach Kundendatensatz. Gruppiert und angezeigt wird die normalisierte Nummer (ohne Leerzeichen oder Punkte), ein Kunde ohne USt-IdNr. bleibt unter seinem eigenen Datensatz, und ein Kunde mit zwei USt-IdNrn. steht in zwei Zeilen. Pflicht, wenn Sie Waren oder Dienstleistungen an umsatzsteuerlich registrierte Kunden in anderen EU-Ländern verkauft haben. Die Karte folgt der Zeitraumauswahl, ein Quartalsexport enthält also nur die EU-Kunden dieses Quartals.
- **EU-OSS**: B2C-Verkäufe je Land für die One-Stop-Shop-Regelung.
- **Ausländische USt.**: Ihnen berechnete ausländische MwSt., die Sie möglicherweise über das EU-Erstattungsverfahren zurückfordern können. Die Karte zeigt nur Lieferanten aus EU-Mitgliedstaaten; Ausgaben bei Lieferanten außerhalb der EU erscheinen hier nicht. Da ein Erstattungsantrag an einen einzelnen Mitgliedstaat geht, prüft die Karte den EU-Mindestbetrag je Land: Liegt der erstattungsfähige Betrag eines Landes darunter, nennt eine Warnung die betroffenen Länder. Ausgaben ohne Lieferantenland werden gemeinsam als eine Gruppe geprüft.

Diese Karten bleiben verborgen, solange es keine internationalen Daten gibt; die meisten Arbeitsbereiche sehen sie also nie.

## Tab Korrekturen

Hier stehen je Jahr die Posten, die nicht aus Rechnungen oder Ausgaben stammen, mit der Schaltfläche **Korrektur hinzufügen**. Jede Korrektur hat eine Art, eine Richtung, ein Steuerjahr und einen Zeitraum, einen MwSt.-Betrag und eine optionale Erläuterung; die Liste zeigt, in welcher Erklärung sie verarbeitet wird:

- **Privatanteil** (privé-onttrekking) zählt in Rubrik 1d.
- **Berichtigung** (suppletie, eine Korrektur einer früheren Erklärung) wird mit Rubrik 5a oder 5b verrechnet (unter der KOR berührt sie die Vorsteuer nicht, Rubrik 5b bleibt also null).
- **Korrektur** hat kein eigenes Feld; sie verschiebt nur die von MyCompanyDesk angezeigte Zahllast oder Erstattung, keine Rubrik, die Sie übertragen.

Geben Sie einen positiven Betrag ein und wählen Sie eine Richtung (**MwSt. zu zahlen** oder **MwSt. zu erstatten**). Negative Beträge werden abgelehnt; das Formular bittet Sie dann, die Richtung zu wählen. Die Richtung bestimmt, ob die Korrektur die Zahllast erhöht oder senkt.

Das Steuerjahr akzeptiert Jahre von 2000 bis zum laufenden Jahr plus eins. Spätere Jahre werden mit einem Hinweis abgelehnt, weil eine Korrektur für ein künftiges Jahr nirgends mehr auffindbar wäre. Das ursprüngliche Jahr bei einer Berichtigung nutzt denselben Bereich und muss das Steuerjahr sein, zu dem die ursprüngliche Buchung gehört.

Eine Korrektur zählt nur in einer Erklärung, wenn ihr Zeitraum zu Ihrer Erklärungshäufigkeit passt. Eine Korrektur für Q1 zählt zum Beispiel in keiner Monats- oder Jahreserklärung, eine für M03 in keiner Quartalserklärung. Fällt der Zeitraum einer Korrektur in keine Erklärung, zeigt die Liste eine orange Warnung mit Erklärung, damit Sie den Zeitraum vor der Abgabe anpassen können.

Wenn Sie eine Korrektur speichern oder löschen, aktualisieren sich Rubrikenübersicht, obere Karte und Zeitraumkarten sofort; Neuladen oder ein Zeitraumwechsel ist nicht nötig.

Bei einer **Suppletie** zeigt die Liste auch, welchen Weg die Belastingdienst vorschreibt. Die Grenze liegt bei 1.000 € MwSt. ([`sources/nl-vat-corrections.yaml#suppletie.next_return_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)): 1.000 € oder weniger dürfen Sie in Ihrer nächsten regulären Erklärung verrechnen, mehr als 1.000 € erfordert eine förmliche Berichtigungserklärung (suppletieaangifte). MyCompanyDesk prüft das je korrigiertem Zeitraum und addiert alle Suppleties für diesen Zeitraum, sodass eine Zeile über 600 € und eine über 700 € zusammen als 1.300 € zählen. Haben Sie zu wenig MwSt. erklärt? Dann reichen Sie die Suppletie innerhalb von 8 Wochen ein, nachdem Sie den Fehler entdeckt haben ([`sources/nl-vat-corrections.yaml#suppletie.deadline_after_discovery_weeks`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Korrigieren können Sie bis einschließlich 5 Jahre nach dem Jahr, auf das sich die Korrektur bezieht ([`sources/nl-vat-corrections.yaml#suppletie.correction_window_years`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)).

### Private Pkw-Nutzung

Ziehen Sie MwSt. für ein Firmenfahrzeug ab, müssen Sie am Jahresende die private Nutzung korrigieren. Wenn Sie Autokosten buchen, zeigt der Tab Korrekturen eine vorgeschlagene Zeile **Private Pkw-Nutzung**; **Berechnen** öffnet die Korrektur:

- Wählen Sie zwischen einer pauschalen Korrektur auf Basis des Listenpreises und einer Korrektur nach tatsächlicher Nutzung auf Basis eines lückenlosen Fahrtenbuchs (**Ich führe ein lückenloses Fahrtenbuch**).
- Die Pauschale beträgt 2,7 % des Listenpreises einschließlich MwSt. und BPM ([`sources/nl-vat-corrections.yaml#private_car_use.standard_pct_of_catalogue_value`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Sie sinkt auf 1,5 %, wenn die private Nutzung später als 4 Jahre nach dem Jahr stattfindet, in dem Sie das Fahrzeug in Gebrauch genommen haben, oder wenn Sie das Fahrzeug ohne Vorsteuerabzug gekauft haben, etwa über die Differenzbesteuerung oder von privat ([`sources/nl-vat-corrections.yaml#private_car_use.reduced_applies_when`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Für ein Fahrzeug, das Sie 2021 in Gebrauch genommen haben, gelten also bis einschließlich 2025 2,7 % und ab 2026 1,5 %. Für den niedrigeren Satz schalten Sie **Auto älter als 5 Jahre oder ohne MwSt.-Abzug gekauft** ein.

Die vorgeschlagene Zeile erscheint nur im letzten Zeitraum des Jahres (Q4, M12 oder die Jahreserklärung), weil die Korrektur in die letzte Erklärung des Jahres gehört ([`sources/nl-vat-corrections.yaml#private_car_use.declared_in`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). Die Korrektur fließt in die Summen des Zeitraums im Tab Erklärung ein.

## Tab Transaktionen

Eine Liste jeder Rechnung und Ausgabe, die in den gewählten Zeitraum einfließt, praktisch für Stichproben vor der Abgabe. Suchen Sie nach Nummer oder Kunde und grenzen Sie die Liste mit den Chips **Alle**, **Verkauf**, **Einkauf**, **Ohne Beleg**, **Ohne MwSt.** und **Reverse-Charge** ein. Jede Zeile zeigt ihre Rubrik und verlinkt auf die zugrunde liegende Rechnung oder Ausgabe.

Nicht voll abzugsfähige Ausgaben tragen eine Markierung wie **MwSt. nicht abzugsfähig** oder **MwSt. teilweise abzugsfähig**. Fahren Sie über die Markierung (oder fokussieren Sie sie), um zu sehen, wie viel der MwSt. auf die Ausgabe als Vorsteuer in Rubrik 5b zählt. Nutzen Sie die KOR, erklärt der Hinweis, dass keine Vorsteuer abgezogen wird, weil Rubrik 5b für den ganzen Zeitraum null ist; die Markierung betrifft dann den Zeitraum, nicht die einzelne Ausgabe.

## Tab Zeiträume

Der Tab Zeiträume listet jeden Zeitraum des Jahres mit Status, Einreichungsdatum, Zahlungskennzeichen und Saldo. Der Status ist **Eingereicht**, **Noch einzureichen** (der Zeitraum ist vorbei, die Frist aber noch nicht), **Überfällig**, **Vorübergehend offen** (eine Sperre ist für eine Korrektur aufgehoben), **Gesperrt**, **Laufend**, **Kommt noch** oder **Nicht zutreffend** für Zeiträume, die vor Ihrem Arbeitsbereich endeten. Ein Zeitraum, dessen Frist ohne eingereichte Erklärung verstrichen ist, steht auf **Überfällig**, auch wenn seine Buchungen schon gesperrt sind.

- **Automatisch sperren**: Sobald die Abgabefrist eines Zeitraums vorbei ist, sperrt MyCompanyDesk ihn automatisch, damit Ihre Bücher zur abgegebenen Erklärung passen.
- **Selbst sperren**: Mit **Sperren** sperren Sie jeden vergangenen Zeitraum des gewählten Jahres selbst, etwa direkt nach einer frühen Abgabe. Sperren Sie einen noch laufenden Zeitraum, erhalten Sie eine zusätzliche Warnung. Zeiträume, die vor Ihrem Arbeitsbereich endeten, lassen sich nicht sperren, weil MyCompanyDesk dafür keine Daten hat.
- **Als eingereicht markieren**: Markieren Sie einen Zeitraum als eingereicht, sobald Sie die Erklärung abgegeben haben. Gibt es eine festgehaltene Erklärung für einen nicht markierten Zeitraum, weist die Liste darauf hin. Öffnen Sie eine MwSt.-Fristerinnerung im Benachrichtigungsbereich, verwendet **Als eingereicht markieren** den Zeitraum aus dieser Erinnerung und nicht das heutige Datum, sodass das richtige Quartal oder der richtige Monat aktualisiert wird. Außerdem erledigt es nur die Erinnerungen für diesen Zeitraum, nicht alle offenen MwSt.-Erinnerungen des Arbeitsbereichs.
- **Markierung aufheben**: Haben Sie einen Zeitraum versehentlich als eingereicht markiert, entfernen Sie diesen Vermerk. MyCompanyDesk fragt zuerst nach einer Bestätigung. Der Zeitraum bleibt gesperrt, Aufgabe und Frist kommen zurück, und bei der Belastingdienst ändert sich nichts: Eine abgegebene Erklärung bleibt abgegeben.
- **Vorübergehend entsperren**: Müssen Sie etwas korrigieren? Entsperren Sie einen Zeitraum vorübergehend (72 Stunden), danach sperrt er sich von selbst, oder nutzen Sie **Erneut sperren**, wenn Sie fertig sind. Eine Sperre ganz entfernen können Sie nur, solange die Abgabefrist noch nicht verstrichen ist.

Der Abgabestatus wird je exaktem Zeitraum geführt, nicht nach Bereichen. Eine eingereichte Jahreserklärung markiert die vier Quartale nicht als eingereicht, und ein eingereichtes Quartal nicht die Monate darin. Die Sperre gilt dagegen für den ganzen Bereich, eine Jahressperre schützt also jedes Quartal.

**Zeitpunkt der Abgabe und Korrekturen.** Sie können einen Zeitraum erst als eingereicht markieren, wenn er vorbei ist; vorher sagt die Schaltfläche, ab welchem Datum es geht. Ein Zeitraum lässt sich nur einmal als eingereicht markieren. Um einen eingereichten Zeitraum zu korrigieren, legen Sie eine Korrektur oder Berichtigung in einem offenen Zeitraum an.

**Gesperrte Zeiträume und Massenaktionen.** Massenaktionen auf Ausgaben oder Rechnungen werden abgelehnt, wenn eine ausgewählte Zeile in einem gesperrten MwSt.-Zeitraum liegt. Die Fehlermeldung nennt den genauen Zeitraum (zum Beispiel "1. Apr. 2026 bis 30. Juni 2026") und erklärt den nächsten Schritt. Ist der Zeitraum schon eingereicht, bleibt nur eine Berichtigungserklärung. Handelt es sich um eine reine Sperre (Frist vorbei, keine Erklärung eingereicht), können Sie den Zeitraum im Tab Zeiträume vorübergehend entsperren oder die Zeilen dieses Zeitraums aus der Auswahl nehmen und es erneut versuchen.

Das Bearbeiten einer Rechnung oder Ausgabe in einem gesperrten Zeitraum wird im Formular verhindert: Die finanziellen Felder werden schreibgeschützt (Notizen bleiben bearbeitbar), und das Formular bietet einen Korrekturweg an, etwa eine Korrektur im aktuellen offenen Zeitraum oder eine Gutschrift. Dieselbe Sperre greift, wenn Sie eine Bankzuordnung bestätigen oder eine Ausgabe als bezahlt markieren: Liegt die Transaktion in einem gesperrten Zeitraum, wird die Aktion verhindert und die App verweist auf eine Korrektur im aktuellen offenen Zeitraum.

Gleichzeitige Abgabeversuche für denselben Zeitraum werden nacheinander abgearbeitet. Treffen zwei Anfragen zugleich ein, etwa durch einen Doppelklick oder zwei offene Tabs, wird die zweite mit einer klaren Meldung abgelehnt statt mit einem Fehler.

## KOR

Die Kleinunternehmerregelung verwalten Sie unter **Einstellungen › MwSt.**: Eine Karte stellt Ihren Jahresumsatz der Grenze von 20.000 € gegenüber ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)), mit Fortschrittsbalken, erklärt, was die Teilnahme für Ihre Rechnungen bedeutet, und enthält den Schalter zur Teilnahme. Sie bleiben bis einschließlich genau 20.000 € Jahresumsatz berechtigt; erst Umsatz darüber beendet die KOR. Liegt Ihr Umsatz noch im KOR-Bereich, zeigt der Tab Prüfung einen Hinweis mit Link dorthin. Ist die KOR an, klappen die übrigen MwSt.-Einstellungen (Erklärungshäufigkeit, Standardsatz, Befreiung) hinter die Schaltfläche **Andere MwSt.-Einstellungen anzeigen** weg, und oben steht "Du nimmst an der KOR teil: Du berechnest keine MwSt."

Überschreiten Sie 20.000 €, während Sie noch teilnehmen, erscheint oben im Rechnungseditor eine Warnung. Sie sagt, dass Sie über der KOR-Grenze liegen, erklärt, dass die Rechnung MwSt. statt 0 % enthalten muss, und die Schaltfläche öffnet **Einstellungen › MwSt.**, damit Sie sich bei der Belastingdienst abmelden und die KOR ausschalten können.

Die KOR lässt sich auch direkt im Rechnungsformular einschalten. Eine neue oder im Entwurf befindliche Rechnung mit MwSt., während das Unternehmen keine USt-IdNr. hat und noch nicht teilnimmt, zeigt bei den Zeilen einen KOR-Tipp. **KOR einschalten** fragt zuerst nach einer Bestätigung; der Schalter gilt für die MwSt.-Zahlen des ganzen Jahres und die noch offenen Erklärungen, und offene Rechnungs- und Angebotsentwürfe sowie Arbeitsberichte ohne Unterschrift gehen mit auf 0 % MwSt. Haben Sie in diesem Jahr schon selbst eine MwSt.-Erklärung abgegeben? Dann weist der Dialog darauf hin, dass ein eingereichtes Jahr eine Berichtigung braucht, bevor die KOR wieder stimmt. Der Tipp erscheint nicht bei Angeboten, Gutschriften oder Rechnungen mit Reverse-Charge und bleibt weg, sobald Sie ihn schließen, eine USt-IdNr. hinterlegt ist oder die KOR an ist.

Ist die KOR an, brauchen Rechnungen keine USt-IdNr.: Die Prüfung vor dem Versand verlangt eine IBAN und hält die Rechnung nicht mehr wegen einer fehlenden USt-IdNr. zurück. Der Einrichtungsassistent stellt die KOR-Frage mit echten Antworten: ja, nein oder weiß ich nicht. Bei "weiß ich nicht" steht vorn, dass nur die eigene Anmeldung bei der Belastingdienst Sie in die Regelung bringt; ein niedriger Umsatz allein reicht nicht, und der Brief der Steuerbehörde gibt Gewissheit. Wählen Sie ja, wird die Regelung eingeschaltet und Rechnungen werden ohne MwSt. erstellt, mit einem Hinweis auf Ihre Teilnahme an der KOR.

Für eine Periode, die die KOR abdeckt, hält sich die App mit der Erklärung zurück: kein Fristen-Chip im Kalender, keine Fristerinnerung im Benachrichtigungsbereich, keine Aufgabe zur MwSt.-Erklärung und keine E-Mail zur anstehenden Erklärung. Sind Sie mitten in einer Periode zur KOR gewechselt, schließt diese Periode noch als normale Erklärung ab, mit Frist, Aufgabe und E-Mail; Erinnerungen aus der Zeit vor dem Wechsel lösen sich von selbst auf.

### Dokumente und E-Mails unter der KOR

Ist die KOR an, zählen Dokumentzeilen als 0 % MwSt. PDFs von Rechnungen, Angeboten, Gutschriften und Verträgen zeigen **Zwischensumme** und **Gesamt** ohne Netto/Brutto-Zusatz und ohne MwSt.-Zeile, Rechnungs-E-Mails lassen die Netto/Brutto-Zusammenfassung unter den Zeilen weg, und neue Artikel in Ihrem Angebot stehen standardmäßig auf 0 % MwSt. Auch der Zeileneditor schweigt dazu: Eine Zeile zeigt keinen MwSt.-Satz und kein Label "0 % MwSt." oder "netto", weder im Zeilenfenster noch auf der mobilen Zeilenkarte noch in der Dokumentansicht. Die Unterschriftsseite zeigt **Gesamt** statt **Gesamt inklusive MwSt.**, wenn das Angebot keine MwSt. enthält. Dieselbe Formulierung gilt, solange der separate Befreiungsschalter an ist, und MwSt.-Formulierungen in den Bedingungen, die Sie über Ihre Website veröffentlichen, bleiben neutral, auch wenn die KOR später wieder ausgeschaltet wird.

## KIA und Box 3

Die KIA (kleinschaligheidsinvesteringsaftrek) und Box 3 gehören zur Einkommensteuer. Sie finden sie in den Tabs **Gewinnerklärung** und **Box 3** unter **Steuern**, nach den MwSt.-Tabs, und sie erfordern Office. Der Tab **Box 3** erscheint nur, wenn das Modul Objekte eingeschaltet ist und Ihr Unternehmen keine BV ist.

## MwSt.-Fragen an den Assistenten

Der eingebaute Assistent beantwortet Fragen zu Ihrer Erklärung mit den Zahlen Ihres eigenen Arbeitsbereichs, und seine Antworten springen direkt zum passenden Tab oder Datensatz.

## Tipps

- Stellen Sie den Zeitraum auf den Zeitraum, den Sie einreichen; jede Karte und jede Kennzahl zieht mit.
- Gehen Sie den Tab Prüfung durch, bevor Sie den Tab Erklärung öffnen; eine saubere Checkliste bedeutet meist, dass die Rubrikenübersicht zum Formular der Belastingdienst passt.
- Nutzen Sie die Rücklage als Zielbetrag zum Zurücklegen; 10 % Puffer sind schon eingerechnet.
- Der Fristenring folgt Ihrer Erklärungshäufigkeit und wird bei drei Tagen rot. Nehmen Sie das als klares Signal zur Abgabe.
- Die MwSt.-Kachel im Dashboard nutzt dieselbe Erklärungshäufigkeit wie die MwSt.-Seiten, die angezeigte Frist und der Zeitraum passen also immer zu Ihrem tatsächlichen Abgaberhythmus.
- Verkaufen Sie B2B innerhalb der EU? Öffnen Sie vor der Abgabe die Karte ICP-opgaaf; sie ist eine eigene Meldung, die man leicht vergisst.
- Markieren Sie einen Zeitraum direkt nach der Abgabe als eingereicht und lassen Sie ihn danach von der automatischen Sperre schützen.
- Setzen Sie den Betrag einer Ausgabe auf null, verschwindet die abgeleitete MwSt. sofort, sodass eine korrigierte Ausgabe keine alte MwSt. in der Erklärung hinterlässt.

## Siehe auch

- [Wie gebe ich eine MwSt.-Erklärung ab?](/de/faq/vat-return)
- [Rechnungen](/de/features/invoices)
- [Ausgaben](/de/features/expenses)
- [Unternehmenseinstellungen](/de/settings/company)
