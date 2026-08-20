---
title: USt.-Verwaltung
description: "Verfolgen Sie erhaltene und gezahlte Umsatzsteuer, bereiten Sie die Erklärung vor und halten Sie Fristen ein, mit landesspezifischen Regeln."
---

<!-- TODO(source-missing): RichardTool 5407b44 added historical Dutch VAT rates 6% and 19% to the valid invoice/quote/contract/recurring-invoice/catalog rate set. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# USt.-Verwaltung

Verfolgen Sie vereinnahmte und gezahlte USt., bereiten Sie Ihre Erklärung vor und behalten Sie Fristen im Blick. MyCompanyDesk unterstützt länderspezifische USt.-Abläufe: Für Unternehmen in den Niederlanden spiegelt die Seite das Aangifte-Formular der Belastingdienst, für andere unterstützte Länder verwendet sie die jeweiligen nationalen Abgabefristen und Regeln. So sind die Zahlen, die Sie sehen, die Zahlen, die Sie einreichen.

## Seitenaufbau

Die USt.-Seite hat drei Reiter: **Übersicht**, **Erklärung** und **Transaktionen**. Der aktive Reiter und der aktive Zeitraum stehen in der URL, sodass Aktualisieren und die Zurücktaste Ihre Position bewahren.

Neben der Reiterleiste sitzt eine seitenweite Zeitraumauswahl, die Ihrer Abgabefrequenz folgt. Bei vierteljährlicher Abgabe zeigt sie Q1 bis Q4 plus Gesamtjahr, bei monatlicher Abgabe die zwölf Monate plus Gesamtjahr, und bei jährlicher Abgabe nur die Jahresoption. Ein Wechsel wirkt auf jede Karte in jedem Reiter. Dieselbe Frequenz bestimmt die Zeitraumbezeichnungen bei einer manuellen Korrektur. Mit dem Jahresumschalter oben auf der Seite wechseln Sie das Jahr.

Aktiver Reiter und Zeitraum stehen beide in der URL, sodass Links aus der USt.-Fristen-Erinnerung im Benachrichtigungsbereich, dem Agenda-Fristen-Chip, der Push-Benachrichtigung und der USt.-Zeitraum-Karte in Ausgaben genau den Zeitraum öffnen, auf den die Nachricht sich bezieht, anstatt auf das aktuelle Quartal zurückzufallen.

## Herokarte

Die Herokarte fasst den gewählten Zeitraum zusammen:

- **Saldo**: Netto-USt. (vereinnahmt minus gezahlt) mit dem Hinweis "te betalen" oder "terug te ontvangen". Der Saldo folgt der Zeitraumauswahl.
- **Fristenring**: ein runder Countdown zur nächsten Abgabefrist, basierend auf dem Land Ihres Arbeitsbereichs und Ihrer Abgabefrequenz. Rot bei 3 Tagen oder weniger, gelb bis 14 Tage, sonst grün.

<!-- TODO(source-missing): RichardTool 8bd35ae1 führte länderspezifische USt.-Abgabefristen ein (NL, GB, DE und andere). Die genauen Fristregeln pro Land sind noch nicht in sources/ hinterlegt. Vermerken Sie keine konkreten Fristen pro Land, bis ein Mensch sie in sources/ ergänzt hat. -->
- **MwSt.-Rücklage (BTW-spaarpotje)**: eine vorgeschlagene Rücklage aus dem Zeitraumsaldo plus 10% Puffer, sichtbar, wenn Sie USt. schulden. Steht Ihnen eine Erstattung zu, wird die Kachel zu einer grünen Erstattungskachel.

Unter dem Saldo stehen drei Schaltflächen: **Erklärung öffnen** springt zum Reiter Erklärung, **Wie wird das berechnet?** erklärt die Rechnung hinter dem Saldo, und **Mijn Belastingdienst Zakelijk öffnen** öffnet das Geschäftsportal unter `mijn.belastingdienst.nl/mbo-portaal/`, damit Sie die Erklärung ohne zusätzliche Auswahlseite abgeben können.

Über der Herokarte warnt ein Banner, wenn Ihre Daten unvollständig sind (Rechnungsentwürfe oder Ausgaben ohne USt.), damit Sie das vor der Abgabe beheben können.

MyCompanyDesk sendet Ihnen auch einmal pro USt.-Zeitraum eine E-Mail, wenn die Abgabefrist naht. Die E-Mail verlinkt direkt zur USt.-Seite und folgt Ihrem USt.-Fristen-Schalter unter Einstellungen → Benachrichtigungen, sodass Sie sie dort deaktivieren können.

Wenn Ihr Unternehmen eine niederländische BV oder NV ist, sendet derselbe USt.-Fristen-Schalter auch einmal pro Jahr eine Erinnerung vor der Abgabefrist für die Körperschaftsteuer (vennootschapsbelasting). Die Benachrichtigung erscheint im Benachrichtigungsbereich und wird per E-Mail versendet.

## Reiter Übersicht

### Quartalsleiste

Vier Karten (Q1 bis Q4) mit Umsatz, vereinnahmter USt., gezahlter USt. und Saldo pro Quartal, dazu die Abgabefrist und ein Schlosssymbol auf eingereichten oder gesperrten Quartalen. Ein Klick auf eine Karte wechselt den seitenweiten Zeitraum. Zukünftige Quartale bleiben leer, bis tatsächliche Daten vorhanden sind; danach zeigen sie wie frühere Quartale den Saldo und ein Status-Badge.

### Prüfungen vor der Abgabe

Eine Checkliste, die gegen den aktiven Zeitraum läuft. Jede Prüfung hat einen Korrekturlink direkt zu den betroffenen Datensätzen:

- **Entwürfe**: Rechnungen im Entwurfsstatus, die nicht in die Erklärung einfließen.
- **Fehlende USt.**: Ausgaben ohne USt.-Betrag.
- **Fehlende Belege**: Ausgaben ohne angehängten Beleg.
- **ICP offen**: EU-B2B-Verkäufe, die separat in der ICP-Meldung anzugeben sind. Betrag und Anzahl verwenden dieselben Klassifizierungsregeln wie die ICP-Meldung, sodass sie zu den Zeilen passen, die tatsächlich übermittelt werden.
- **Reverse-Charge-Ursprung**: Ausgaben mit Reverse-Charge-MwSt., bei denen das Land oder die KVK-Nummer des Lieferanten fehlt, sodass die Rubrik 2a/4a/4b nicht belegt werden kann.
- **Abzugsdifferenz**: Ausgaben, deren abzugsfähige MwSt. nicht ihrer Gesamt-MwSt. entspricht, weil die Kategorie nicht vollständig abzugsfähig ist oder Privatgebrauch vorliegt. Dies spiegelt die Kennzeichen auf dem Reiter Transaktionen wider.

Ein Zähler in der Kopfzeile zeigt die Zahl der Blocker oder dass alles in Ordnung ist.

### Zusammenfassung und Jahreswerte

Unter den Prüfungen sehen Sie die Kernzahlen des Jahres (Umsatz, Ausgaben, Gewinn, vereinnahmte und gezahlte USt., eine geschätzte Steuerlast und eine empfohlene Rücklage) sowie eine einzeilige Jahressumme über die Quartale.

Solange Ihr Umsatz noch im KOR-Bereich liegt, zeigt dieser Reiter außerdem einen Hinweis auf die KOR-Einstellungen (siehe unten).

## Reiter Erklärung

### Rubrieken-Übersicht

Eine Tabelle, die das Erklärungsformular der Belastingdienst spiegelt:

| Abschnitt | Codes |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Jede Zeile zeigt den Umsatz (exkl.) und den USt.-Betrag. Die Leiste unten zeigt die Summe, die zu zahlen oder zu erstatten ist. Korrekturen außerhalb des Formulars erscheinen auf eigenen Zeilen: eine allgemeine Buchungskorrektur wird als **Correctie** angezeigt, eine Minderung nach dem alten KOR-Schema als **Vermindering volgens de oude KOR**. Die USt.-Zusammenfassungs-CSV fügt eine passende Korrekturzeile hinzu, wenn diese Beträge ungleich null sind, sodass Saldo, vereinnahmte und gezahlte USt. zusammenpassen. Die USt.-Saldo-Spalte in der Jahresübersicht verwendet denselben Netto-USt.-Gesamtbetrag wie die Rubrieken-Übersicht, sodass die Zeilen auf denselben Wert summieren.

Geben Sie bei einer manuellen Korrektur einen positiven Betrag ein und wählen Sie eine Richtung (USt. zu zahlen oder USt. zu erstatten). Negative Beträge werden abgelehnt und das Formular zeigt einen Fehler, der Sie auffordert, stattdessen die Richtung zu wählen; die Richtung bestimmt, ob die Korrektur den Zeitraumsaldo erhöht oder verringert.

Das Steuerjahrfeld akzeptiert Jahre zwischen 2000 und dem aktuellen Kalenderjahr plus eins. Jahre darüber werden mit einer Inline-Meldung abgelehnt, denn eine Korrektur für ein späteres Jahr wäre auf der USt.-Seite nicht mehr auffindbar. Auch das Feld "Ursprungsjahr" für Korrekturen verwendet diesen Bereich; ein Referenzjahr außerhalb des Bereichs oder in der Zukunft wird blockiert, damit die Korrektur immer auf einen erreichbaren Zeitraum verweist.

Eine Korrektur wird nur in eine Erklärung übernommen, wenn ihr Zeitraum zu Ihrer USt.-Abgabefrequenz passt. Eine als Q1 gespeicherte Korrektur fließt beispielsweise weder in eine monatliche noch in eine jährliche Erklärung ein, und eine als M03 gespeicherte Korrektur fließt nicht in eine vierteljährliche Erklärung ein. Die Korrekturkarte zeigt ein oranges Warn-Badge und einen Hinweis, wenn der Zeitraum einer Korrektur in keine Erklärung übernommen wird, damit Sie ihn vor der Abgabe anpassen können.

Rubrik 4a ist für Reverse-Charge-Einkäufe von Lieferanten außerhalb der EU (`import_reverse_charge`); Rubrik 4b ist für Reverse-Charge-Einkäufe von EU-Lieferanten (`b2b_reverse_charge`). MyCompanyDesk leitet anhand des Lieferantenlands die richtige Rubrik ab, damit die Summe in 5a stimmt.

Wenn Sie eine Korrektur speichern oder löschen, aktualisieren sich die Rubrieken-Übersicht, die Herokarte, die Quartalsleiste und die Abgabe-Aktionskarte sofort; Sie müssen nicht neu laden oder den Zeitraum wechseln. Auch die Karte für Privatnutzung des Firmenwagens wird live aktualisiert, sobald die dazugehörige Korrektur gebucht ist.

### Exporte für die Buchhaltung

Eine Downloadkarte neben der Übersicht bietet CSV-Exporte: einen vollständigen Export für die Buchhaltung, eine USt.-Übersicht des gewählten Quartals und eine Jahresübersicht.

Der ZIP-Dateiname enthält den Firmennamen, den Zeitraum und das Exportprofil, und auch die README nennt das Unternehmen. So kann eine Buchhaltung, die Exporte für mehrere Mandanten herunterlädt, die Dateien leicht unterscheiden.

<!-- TODO(source-missing): RichardTool 4ffca446 zeigt in der App einen Hinweis auf Nullmeldungen mit Verweis auf eine Einladung der Belastingdienst und ein Verzuimboete. sources/ enthält keine Quelle für die niederländische Nullmeldungspflicht oder Verzuimboetes; gib diese Behauptung nicht wieder, bis ein Mensch die Regel auf belastingdienst.nl geprüft hat. -->

### Hinweis auf Nullmeldung

Ist der gewählte Zeitraum beendet und sind sowohl Rubrik 5a als auch 5b gleich null, erscheint auf dem Reiter Erklärung eine Infokarte, die daran erinnert, dass eine Nullmeldung möglicherweise trotzdem abgegeben werden muss, wenn das Finanzamt Sie aufgefordert hat. Die Karte wird für Zeiträume nicht angezeigt, die vor der Erstellung des Arbeitsbereichs endeten, weil MyCompanyDesk für diese Zeiträume keine Daten hält.

### Internationale Karten

Bei internationaler Aktivität erscheinen unter der Übersicht ergänzende Karten:

- **ICP-Meldung**: EU-B2B-Verkäufe je Kunde gruppiert. Erforderlich, wenn Sie an USt.-registrierte Kunden in anderen EU-Ländern verkauft haben. Die Karte folgt der seitenweiten Zeitraumauswahl, sodass ein Quartalsexport nur die EU-Kunden dieses Quartals enthält.
- **OSS-Aufschlüsselung**: B2C-Verkäufe je Land für das One-Stop-Shop-Verfahren.
- **Ausländische USt.**: Ihnen berechnete ausländische USt., die möglicherweise über das EU-Erstattungsverfahren zurückzuholen ist.
- **Korrekturen**: manuelle MwSt.-Korrekturen, jede mit einem Hinweis, der erklärt, wo sie in der Erklärung landet. Eine Privatentnahme fließt in Rubrik 1d ein. Eine Suppletie wird gegen Rubrik 5a oder 5b verrechnet (bei Teilnahme an der KOR wirkt sie sich nicht auf die Vorsteuer aus, sodass Rubrik 5b bei null bleibt). Eine allgemeine Anpassung erhält kein eigenes Kästchen; sie verschiebt nur den zu zahlenden oder erstattungsfähigen Betrag, den MyCompanyDesk anzeigt, nicht aber eine Rubrik, die Sie übernehmen.

<!-- TODO(source-missing): RichardTool e671fd80 zeigt in der App eine Belastingdienst-Schwelle von 1.000 EUR für suppletie-Korrekturen (bis einschließlich 1.000 EUR in die nächste reguläre Erklärung; darüber formelle suppletieaangifte erforderlich). sources/ enthält diese Schwelle nicht; Wert und Linkziel nicht erfinden, bis ein Mensch die aktuelle Regel auf belastingdienst.nl geprüft hat. -->

Diese Karten bleiben verborgen, bis es tatsächlich internationale Daten gibt; die meisten Arbeitsbereiche sehen sie nie.

### Hinweis bei Abweichung einer eingereichten Erklärung

<!-- TODO(source-missing): RichardTool 28c9641 fügte eine Warnung bei Abweichung einer eingereichten Erklärung hinzu, die eine Belastingdienst-Schwelle nutzt, um zwischen "in die nächste reguläre Erklärung einbeziehen" und "formelle suppletieaangifte erforderlich" zu wählen. sources/ enthält diese Schwelle nicht; Wert und Linkziel nicht erfinden, bis ein Mensch die Regel auf belastingdienst.nl geprüft hat. -->

Für die niederländische MwSt. berechnet der Reiter **Erklärung** nach dem Einreichen bei jedem Öffnen die Erklärung aus Ihren Live-Daten neu. Stimmt diese Berechnung nicht mehr mit Ihrer eingereichten Erklärung überein, erscheint ein Warnbanner über der Rubrieken-Übersicht. Es vergleicht die eingereichten und aktuellen Beträge für Rubrik 5a, 5b und das Nettototal in 5g und zeigt pro Zeile die Differenz.

Das Banner sagt Ihnen, wie es weitergeht. Es teilt Ihnen mit, ob Sie die Differenz in Ihre nächste reguläre Erklärung einbeziehen, eine formelle suppletieaangifte einreichen oder feststellen, dass die Rubriken sich verschoben haben, während der zu zahlende oder erstattungsfähige Betrag gleich geblieben ist.

### Privatnutzung des Firmenwagens

Wenn Sie die Mehrwertsteuer auf einen Firmenwagen abziehen, müssen Sie am Jahresende den Privatanteil korrigieren. MyCompanyDesk hat hierfür einen eigenen MwSt.-Korrektur-Workflow:

- Wählen Sie zwischen einer Pauschalkorrektur auf Basis des Katalogpreises oder einer Korrektur auf Basis des tatsächlichen Nutzens mit einem lückenlosen Fahrtenbuch.
- Der Pauschalsatz hängt davon ab, ob das Fahrzeug älter als die Altersgrenze ist oder ohne MwSt.-Abzug gekauft wurde.

Die Korrektur fließt in die Periodentotalen auf dem Reiter **Erklärung** ein.

<!-- TODO(source-missing): Die niederländischen Pauschalsätze für die MwSt.-Korrektur bei Privatnutzung eines Firmenwagens und die Altersgrenze sind noch nicht in sources/ hinterlegt. Geben Sie die Werte nicht in der Dokumentation wieder, bis ein Mensch die aktuellen Regeln auf belastingdienst.nl überprüft hat. -->

## Reiter Transaktionen

Eine flache Liste jeder Rechnung und Ausgabe, die in den gewählten Zeitraum einfließt, nützlich für Stichproben vor der Abgabe. Filterchips grenzen die Liste ein: **Alle**, **Beleg fehlt**, **MwSt. fehlt**, **Reverse Charge** und **Auslands-MwSt.**, jeweils mit Zähler. Jede Zeile verlinkt auf die zugehörige Rechnung oder Ausgabe.

Ausgaben, die nicht vollständig abzugsfähig sind, erhalten ein Kennzeichen wie **MwSt. nicht abzugsfähig** oder **MwSt. teilweise abzugsfähig**. Halten Sie die Maus darauf (oder fokussieren Sie es), um einen Tooltip zu sehen, der angibt, wie viel der MwSt. auf die Ausgabe als Vorsteuer in Rubrik 5b zählt. Wenn Sie an der KOR teilnehmen, erklärt der Tooltip, dass keine Vorsteuer abgezogen wird, weil Rubrik 5b für den ganzen Zeitraum null ist; das Kennzeichen bezieht sich dann auf die Erklärung, nicht auf die Ausgabe selbst.

## Periodensperren

Eine Übersichtsleiste oben auf der USt.-Seite zeigt, wie viele Zeiträume gesperrt sind; klappen Sie sie auf, um sie zu verwalten.

- **Automatisches Sperren**: Sobald die Abgabefrist eines Zeitraums verstrichen ist, sperrt MyCompanyDesk ihn automatisch, damit Ihre Buchhaltung zu der eingereichten Erklärung passt.
- **Manuelles Sperren**: Über Zeitraumchips sperren Sie jeden vergangenen Zeitraum des gewählten Jahres selbst, etwa direkt nach einer frühen Abgabe. Bei einem noch laufenden Zeitraum erscheint zuerst eine zusätzliche Warnung. Zeiträume, die vor der Erstellung des Arbeitsbereichs endeten, können nicht gesperrt werden, weil MyCompanyDesk für sie keine Daten hält und keine Erklärung in Ihrem Namen abgegeben hat.
- **Als eingereicht markieren**: Kennzeichnen Sie einen gesperrten Zeitraum als eingereicht, sobald Sie die Erklärung abgegeben haben. Wenn Sie eine USt.-Abgabe-Deadline-Erinnerung im Benachrichtigungsbereich öffnen, verwendet die Aktion **Als eingereicht markieren** den in dieser Erinnerung genannten Zeitraum statt des heutigen Datums, damit das richtige Quartal oder der richtige Monat aktualisiert wird. Sie löst darüber hinaus nur die Erinnerungen für diesen Zeitraum, nicht jede ausstehende USt.-Erinnerung im Arbeitsbereich. Eingereichte Quartale zeigen das auch in der Quartalsleiste.
- **Eingereicht-Markierung entfernen**: wenn Sie einen Zeitraum versehentlich als eingereicht markiert haben, können Sie diesen Vermerk entfernen. MyCompanyDesk fragt zuerst nach einer Bestätigung, denn dadurch entfällt der Nachweis, dass Sie für diesen Zeitraum eine Erklärung abgegeben haben. Der Zeitraum bleibt gesperrt, die Abgabeaufgabe und die Frist kehren zurück, und beim Finanzamt ändert sich nichts. Ihre abgegebene Erklärung bleibt abgegeben.
- **Vorübergehend entsperren**: Müssen Sie etwas korrigieren? Entsperren Sie einen Zeitraum vorübergehend (72 Stunden); danach sperrt er sich von selbst wieder, oder Sie sperren früher manuell. Eine Sperre ganz entfernen geht nur, solange die Abgabefrist noch nicht verstrichen ist.

Der Einreichungsstatus wird für den genauen Zeitraum erfasst, nicht für enthaltene Unterzeiträume. Ein eingereichtes Jahr markiert nicht automatisch die einzelnen Quartale als eingereicht, und ein eingereichtes Quartal markiert nicht automatisch die darin enthaltenen Monate. Die Sperre gilt jedoch für den gesamten Zeitraum, sodass eine Jahressperre jedes Quartal schützt.

**Abgabetiming und Korrekturen.** Einen Zeitraum können Sie erst abgeben, nachdem er beendet ist. Wenn Sie vor dem letzten Tag des Zeitraums abgeben möchten, zeigt die App einen Fehler und bittet Sie zu warten, bis der Zeitraum vorbei ist. Ein Zeitraum kann nur einmal als eingereicht markiert werden; ist er bereits eingereicht, können Sie ihn von der USt.-Seite nicht erneut abgeben. Korrigieren Sie eine eingereichte Periode stattdessen mit einer Korrektur oder Suppletie in einem offenen Zeitraum. Im Reiter Erklärung sehen Sie, welche Zeiträume noch offen und welche bereits eingereicht sind.

Das Bearbeiten einer Rechnung oder Ausgabe in einem gesperrten Zeitraum wird im Formular blockiert: Die Finanzfelder werden schreibgeschützt (Notizen bleiben bearbeitbar) und das Formular bietet stattdessen einen Korrekturweg an, etwa eine Korrektur im aktuell offenen Zeitraum oder eine Korrekturrechnung. Derselbe Schutz greift auch beim Buchen eines Bank-Abgleichs oder Markieren einer Ausgabe als bezahlt: fällt die Transaktion in einen gesperrten Zeitraum, blockiert die App die Aktion und verweist auf eine Korrektur im aktuell offenen Zeitraum.

Gleichzeitige Versuche, denselben Zeitraum abzugeben, werden serialisiert. Wenn zwei Abgaben gleichzeitig eintreffen, etwa durch einen Doppelklick oder zwei geöffnete Tabs, wird die zweite Anfrage mit einer klaren Meldung abgelehnt statt mit einem Datenbankfehler zu scheitern.

## KOR

Die Kleinunternehmerregelung (kleineondernemersregeling) verwalten Sie unter **Einstellungen → MwSt.**: Eine Karte verfolgt Ihren Jahresumsatz gegen die Schwelle von 20.000 EUR ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](../../../sources/vat-rates.yaml)) mit einem Fortschrittsbalken, erklärt, was die Teilnahme für Ihre Rechnungen bedeutet, und enthält den Anmeldeschalter. Sie bleiben bis einschließlich genau 20.000 EUR Jahresumsatz teilnahmeberechtigt; erst darüber endet die KOR-Berechtigung. Solange Ihr Umsatz 20.000 EUR nicht übersteigt, zeigt die USt.-Seite einen Hinweis mit Link dorthin.

Überschreiten Sie die 20.000 EUR während der Teilnahme, erscheint oben im Rechnungseditor eine Warnung. Der Titel zeigt an, dass Sie über der KOR-Grenze liegen, der Text erklärt, dass diese Rechnung USt. enthalten muss und nicht 0 %, und der Button verlinkt zu **Einstellungen → MwSt.**, damit Sie sich beim Belastingdienst abmelden und die KOR ausschalten können.

## KIA und Box 3

KIA (kleinschaligheidsinvesteringsaftrek) und Box 3 sind Einkommensteuerthemen und stehen unter **Berichte → Einkommensteuer**, nicht auf der USt.-Seite. Die Box-3-Karte erscheint nur für Arbeitsbereiche, die das Immobilienmodul nutzen.

## USt.-Assistent

Der eingebaute Assistent beantwortet Fragen zu Ihrer Erklärung mit den Zahlen Ihres eigenen Arbeitsbereichs, und seine Antworten können direkt zum passenden Reiter oder Datensatz springen.

## Tipps

- Stellen Sie den Seitenzeitraum auf den Zeitraum, für den Sie abgeben; jede Karte und jede Kennzahl zieht mit.
- Gehen Sie die Prüfungen durch, bevor Sie den Reiter Erklärung öffnen; eine saubere Checkliste bedeutet meist, dass die Rubrieken-Übersicht zum Formular der Belastingdienst passt.
- Nutzen Sie die MwSt.-Rücklage als Ziel für das, was Sie zurücklegen; der Puffer von 10% ist bereits enthalten.
- Der Fristenring folgt Ihrer Abgabefrequenz und wird bei drei Tagen rot. Nehmen Sie das als hartes Signal zur Abgabe.
- Die USt.-Kachel im Dashboard verwendet dieselbe Abgabefrequenz wie die USt.-Seite, sodass angezeigte Frist und Zeitraum immer zu Ihrem tatsächlichen Abgabetakt passen.
- Verkaufen Sie B2B in der EU? Öffnen Sie vor der Abgabe die ICP-Karte; das ist eine separate Meldung, die leicht vergessen wird.
- Markieren Sie einen Zeitraum direkt nach der Abgabe als eingereicht und lassen Sie die automatische Sperre ihn danach schützen.
- Wenn Sie einen Ausgabenbetrag auf null setzen, wird die abgeleitete USt. sofort gelöscht, sodass eine korrigierte Ausgabe keine veraltete USt. auf der Erklärung hinterlässt.
