---
title: Ausgaben
description: "Erfassen Sie Ausgaben, scannen Sie Belege, verwalten Sie Kategorien mit eigenen Steuersätzen und lassen Sie Abschreibungen automatisch laufen."
last_verified: 2026-10-13
---

# Ausgaben

Verfolgen Sie alle Ihre Geschäftsausgaben, scannen Sie Belege mit KI und kategorisieren Sie Kosten für eine genaue Buchführung und USt.-Meldung.

## Übersicht

Die Ausgabenseite listet alle Ihre erfassten Ausgaben auf. Die Tabs über der Liste lassen Sie schnell zwischen folgenden Ansichten wechseln:

- **Alle**: alle erfassten Ausgaben
- **Noch zu bezahlen**: noch nicht bezahlte Ausgaben
- **Bezahlt**: bereits bezahlte Ausgaben
- **Zu bestätigen**: nur sichtbar, wenn etwas bereitsteht, etwa Bankzeilen und Entwürfe, die noch nicht in der Buchhaltung sind

Ausgaben, die noch bestätigt werden müssen (Entwürfe aus der Bankverbindung oder dem Posteingang, die noch nicht in der Buchhaltung sind), zeigen statt bezahlt oder unbezahlt **Noch zu bestätigen**. Sie zählen noch nirgends mit und können bis zur Buchung nicht für Massenaktionen ausgewählt werden.

Sie können weiterhin nach Kategorie, Status, fakturiert oder nicht und Zeitraum filtern, und unter **Anzeigen** wechseln Sie zwischen **Aktiv**, **Archiv** und **Papierkorb**. Klicken Sie auf eine Ausgabe, um die Detailseite zu öffnen. Mit **Hinzufügen** erfassen Sie eine neue Ausgabe: Dort scannen Sie einen Beleg oder geben die Daten selbst ein.

## Ausgabe erstellen

### Manuelle Eingabe

1. Gehen Sie zu **Ausgaben**, klicken Sie auf **Hinzufügen** und wählen Sie unten **Mehr Felder nötig?**, um das vollständige Formular zu öffnen
2. Füllen Sie aus:
   - **Lieferant** - An wen Sie gezahlt haben
   - **Beschreibung** - Wofür die Ausgabe ist
   - **Betrag** - Gesamtkosten (inklusive oder exklusive USt.)
   - **Datum** - Wann die Ausgabe angefallen ist
   - **Kategorie** - Aus den Kategorien Ihres Arbeitsbereichs auswählen. Wenn Sie unter **Einstellungen › Ausgaben** eine Standard-Ausgabenkategorie festgelegt haben, ist diese hier bereits vorausgefüllt.
   - **MwSt.-Satz** - Wird mit dem Standard-USt.-Satz für Ausgaben Ihres Arbeitsbereichs vorausgefüllt (einstellbar unter **Einstellungen › Ausgaben**). Sie können ihn jederzeit pro Ausgabe überschreiben.
   - **Zahlungsmethode** - Wird mit der Standard-Zahlungsmethode für Ausgaben Ihres Arbeitsbereichs vorausgefüllt, falls festgelegt.
3. Hängen Sie optional ein **Beleg**-Bild oder PDF an
4. Verknüpfen Sie optional mit einem **Projekt** oder **Kunden**
5. Klicken Sie auf **Speichern**

### Schnellerfassung

Für die meisten Ausgaben genügt das Seitenpanel:

1. Klicken Sie auf der Ausgabenliste auf **Hinzufügen**
2. Wählen Sie **Beleg scannen** oder laden Sie ein Foto oder PDF hoch, oder geben Sie die Daten selbst ein
3. Prüfen Sie Lieferant, Betrag, Datum, Kategorie und USt.
4. Speichern

### Aus einer Vorlage

Wenn Sie eine neue Ausgabe erstellen, klicken Sie auf **Aus Vorlage** (nur sichtbar, wenn gespeicherte Ausgabenvorlagen vorhanden sind). Wählen Sie eine Vorlage aus und das Formular füllt sich direkt mit dem gespeicherten Lieferanten, der Kategorie, dem Betrag und den anderen Daten. Passen Sie nach Bedarf an und klicken Sie auf **Speichern**.

### Aus Banktransaktionen

Wenn Ihr [Bankkonto](/de/features/bank) verbunden ist (Office), werden kategorisierte ausgehende Transaktionen automatisch in Ausgabenentwürfe umgewandelt. Jede Ausgabe erhält die Gegenpartei als Lieferant, den absoluten Betrag als Brutto, den Standard-USt.-Satz und die Behandlung der Kategorie sowie das Buchungsdatum der Transaktion. Ausgabenentwürfe erscheinen zuerst unter **Zu bestätigen** auf der Ausgabenseite, wo Sie sie bestätigen, bearbeiten oder ablehnen können, bevor sie in Ihre Buchhaltung gelangen. Siehe [Von der Transaktion zur Ausgabe](/de/features/bank#von-der-transaktion-zur-ausgabe) für den vollständigen Ablauf.

### Belegscanner

Lassen Sie die KI Ausgabendetails automatisch aus Belegen extrahieren:

1. Gehen Sie zu **Ausgaben** und klicken Sie auf **Hinzufügen**. Mit **Beleg scannen** liest das Seitenpanel den Beleg sofort aus. Möchten Sie einen Beleg in mehrere Zeilen aufteilen, öffnen Sie das vollständige Formular und legen Sie den Beleg bei **Beginnen Sie mit einem Beleg** ab: Sie landen dann auf dem Scanbildschirm
2. Laden Sie ein Belegbild (JPEG, PNG, WebP) oder PDF hoch
3. Wählen Sie auf dem Scanbildschirm bei Bedarf unter **Erweiterte Einstellungen** › **Extraktionsmodus**:
   - **Einzelbetrag** - Eine Ausgabe aus dem Beleg
   - **Mehrere Posten** - Mehrere Positionen aus einem Beleg
4. Überprüfen Sie die extrahierten Daten (Datum, Betrag, Lieferant, Beschreibung)
5. Bestätigen Sie, um die Ausgabe(n) zu erstellen

Steht für einen gescannten Beleg schon eine Ausgabe in Ihren Büchern, meist die Bankbuchung derselben Zahlung, trägt die Prüfkarte den Button **Beleg hier anhängen** (für eine Ausgabe, die noch keinen Beleg hat): der Beleg hängt dann an der bestehenden Ausgabe, statt eine zweite zu buchen, und die Zeile fällt aus der Prüfung. Doppelte Beträge auf einem Beleg werden markiert und bleiben getrennte Kosten. Siehe [Belege scannen](/de/advanced/receipt-scanning) für die Einzelheiten.

::: info
Der Belegscanner ist in jedem Tarif verfügbar, auch in Desk. Die Anzahl der Scans pro Monat hängt von Ihrem Tarif ab: 3 in Desk und 200 in Office. Der USt.-Satz einer neuen Ausgabe beginnt mit Ihrer Standard-Arbeitsbereichseinstellung.
:::

Wenn eine weitergeleitete E-Mail oder ein Scan zwar eine Ausgabe erzeugt, der Beleg selbst aber nicht angehängt werden kann (zum Beispiel ein nicht unterstützter Dateityp oder eine zu große Datei), wird die Ausgabe dennoch erstellt und mit einem Hinweis versehen, dass der Anhang fehlt. Laden Sie den Beleg anschließend manuell auf der Detailseite der Ausgabe hoch.

### Gesperrte MwSt.-Perioden

Wenn eine Posteingangsnachricht in eine Ausgabe mit einem Datum innerhalb einer bereits angegebenen MwSt.-Periode umgewandelt wird, wird die automatische Buchung abgelehnt, um die eingereichte Voranmeldung zu schützen. Statt die Rechnung stillschweigend zu verwerfen, erstellt MyCompanyDesk eine Benachrichtigung, die Lieferanten und Rechnungsdatum nennt und darauf hinweist, dass die MwSt.-Periode gesperrt ist. Die Benachrichtigung führt Sie zur Posteingangsliste, damit Sie die weitergeleitete Rechnung dort finden. Sie haben dann dieselben zwei Optionen wie bei anderen gesperrten Perioden: buchen Sie die Ausgabe manuell mit einem Datum in der aktuell offenen Periode, oder reichen Sie eine ergänzende MwSt.-Voranmeldung für die gesperrte Periode ein.

Das Seitenpanel von **Hinzufügen** zeigt denselben MwSt.-Perioden-Status neben dem Datumsfeld vor dem Speichern an, damit eine gesperrte oder Toleranzperiode sichtbar ist, bevor der Server die Buchung ablehnt.

## Lieferantenlogos

Wenn ein Lieferant ein bekanntes Logo hat, zeigt MyCompanyDesk es neben dem Lieferantennamen in der Ausgabenliste und in der Lieferanten-Autovervollständigung an, wenn Sie eine Ausgabe erstellen oder bearbeiten. Das Logo stammt aus dem KVK-Register für niederländische Unternehmen oder aus einer kuratierten Liste gängiger Marken. Ist kein Logo verfügbar, zeigt die App stattdessen ein Monogramm.

## Ausgabenkategorien

Kategorien gehören zu Ihrem Arbeitsbereich. Jeder Arbeitsbereich beginnt mit sechs Standardkategorien, die den Kostenposten der niederländischen Einkommensteuererklärung folgen: allgemeine Kosten, Bürokosten, Auto und Reisen, Telefon und Internet, Bewirtung sowie Einkauf und Material. Mit **Magischen Setup-Assistenten starten** fügen Sie eine Auswahl hinzu, die zu Ihrer Branche passt.

Jede Kategorie trägt eine eigene **MwSt.-Behandlung**, einen abzugsfähigen Anteil, die Wahl, ob Käufe standardmäßig als Investition abgeschrieben werden, und eine Nutzungsdauer. Sie verwalten Kategorien unter **Einstellungen › Ausgabenkategorien**. Standardkategorien können Sie bearbeiten und archivieren, aber nicht löschen. Eigene Kategorien lassen sich nicht löschen, solange Ausgaben oder wiederkehrende Ausgaben sie noch verwenden; archivieren Sie sie dann. Kategorien helfen bei der Organisation Ihrer Ausgaben und werden in Berichten für Kostenaufschlüsselungen verwendet.

## USt.-Behandlung

Jede Ausgabe kann ihren eigenen USt.-Satz haben. Gängige Optionen:

- **21 %** - Standardsatz
- **9 %** - Ermäßigter Satz
- **0 %** - Nullsatz oder befreit

Der USt.-Betrag wird automatisch berechnet und in Ihre [USt.-Berichte](/de/features/vat) aufgenommen.

### USt.-Behandlung

In Sonderfällen legen Sie die USt.-Behandlung für die Ausgabe fest:

- **Standard**: inländische USt.
- **MwSt. auf mich verlagert (Inland)**: ein niederländischer Lieferant verlagert die USt. auf Sie, etwa ein Subunternehmer im Bau. Das gehört in Rubrik 2a.
- **Reverse-Charge (EU)**: Sie bilanzieren die USt. selbst für einen EU-B2B-Einkauf, Rubrik 4b.
- **Reverse-Charge (außerhalb der EU)**: ein Lieferant außerhalb der EU stellt 0 % USt. (sources/vat-rates.yaml#countries.NL.zero) in Rechnung, Sie bilanzieren sie selbst in Rubrik 4a. Verwenden Sie dies zum Beispiel für einen US-Lieferanten wie Anthropic oder OpenAI.
- **Befreit**: die Leistung ist von der USt. befreit.
- **Ausländische USt. in Rechnung gestellt**: ausländische USt., die eventuell über das EU-Erstattungsverfahren zurückzuholen ist.

Die Behandlung wird normalerweise aus der Kategorie übernommen. Sie können sie pro Ausgabe überschreiben.

Eine Kategorie kann auch begrenzen, was die Erklärung zurückholt. Eine Kategorie mit einem Absetzungsanteil unter 100 % (etwa eine Kategorie für Bewirtung oder Geschenke) lässt einen Teil der USt., oder alles, außerhalb der Erklärung, auch wenn der Schalter „USt abzugsfähig“ an ist. Kommt auf dieser Ausgabe sonst USt. zurück, warnt das Formular unter dem Schalter und nennt die Kategorie und den Anteil, den Sie zurückbekommen; bei ausgeschaltetem Schalter, ausländischer oder befreiter USt., keiner USt. auf dem Beleg oder der Kleinunternehmerregelung (KOR) gibt es nichts zurückzuholen und die Warnung bleibt aus. Die Buchungskarte auf der Detailseite zeigt dieselbe Warnung als Kennzeichen.

### USt.-Betrag manuell

Normalerweise berechnet MyCompanyDesk den USt.-Betrag aus dem Satz und dem Nettobetrag. Stimmt das nicht mit dem Lieferantendokument überein, zum Beispiel einer Gutschrift mit Netto EUR 0 und nur USt., können Sie den USt.-Betrag manuell eingeben. Der Satz steuert den Betrag dann nicht mehr; das Formular verwendet Ihre Eingabe.

### Korrekturen in gesperrten Perioden

Sitzt eine Ausgabe in einer gesperrten USt.-Periode, blockiert das Formular Änderungen an den Finanzfeldern und bietet einen Korrekturweg an: **Korrektur im aktuellen Zeitraum erstellen**. Die Korrektur wird in einer späteren, offenen Periode erstellt und verweist auf den ursprünglichen gesperrten Beleg, sodass die Nachvollziehbarkeit erhalten bleibt.

Das Gate vergleicht die Werte, die tatsächlich geschrieben werden sollen, nicht nur die im Formular sichtbaren Felder. Das betrifft auch Ausgaben mit Zeilen zu mehreren USt.-Sätzen, den Investitionsschalter und Abschreibungseingaben wie Nutzungsdauer, Restwert und Privatnutzungsanteil. Jede finanziell bedeutsame Änderung in einer eingereichten Periode wird abgelehnt; nicht-finanzielle Anpassungen wie Notizen, Zahlungsstatus oder Beleganhänge bleiben weiterhin möglich.

## Investitionen und Abschreibung

Schalten Sie bei einer Ausgabe **Investition (abschreiben)** ein, oder ist das bei ihrer Kategorie standardmäßig eingestellt, wird die Ausgabe zur Investition:

- Es wird ein monatlicher Abschreibungsplan über die Laufzeit bei **Abschreiben über (Jahre)** erstellt, standardmäßig die Nutzungsdauer der Kategorie (60 Monate, falls nicht gesetzt).
- Der Plan verwendet lineare Abschreibung mit Tages-Pro-Rata für den ersten und letzten Kalendermonat, im Einklang mit den Richtlinien der Steuerbehörde.
- Die Abschreibung fließt in Ihre Berichte ein.

Die abschreibungsfähige Basis entspricht dem Wert, den die Buchhaltung als Anlage aktiviert, nicht dem Bruttobetrag ohne USt. Damit werden auch nicht abziehbare Vorsteuer (bei Kategorien mit einem Abzugsanteil unter 100 %) und der Geschäftsanteil nach Privatnutzung berücksichtigt, sodass Abschreibungsplan, Anlagenregister und KIA-Berechnung alle von derselben Zahl ausgehen.

Das Bearbeiten von Kategorie, Datum, Betrag, USt.-Behandlung, Privatnutzungsanteil, Nutzungsdauer oder Restwert bei einer bestehenden Ausgabe löst eine Neuberechnung aus. Wenn eine bestehende Abschreibungszeile bereits in eine gesperrte USt.-Periode fällt, wird die Neuberechnung abgelehnt, damit die eingereichte Erklärung nicht stillschweigend geändert wird. Das Zurückstufen einer Investitionsausgabe in eine Nicht-Investitionskategorie löscht die Abschreibungszeilen.

Eine Investition, deren eigenes Datum noch in einer offenen Periode liegt, kann trotzdem auf einen gesperrten Plan stoßen, wenn ihre Abschreibungszeilen in eine spätere, gesperrte MwSt.-Periode reichen. In diesem Fall meldet das Formular, dass die Abschreibung in einen gesperrten MwSt.-Zeitraum reicht. Verwenden Sie die Aktion **Vorübergehend entsperren** für diesen Zeitraum auf der [MwSt.-Seite](/de/features/vat) und wiederholen Sie die Bearbeitung.

## Ausgaben verknüpfen

Verknüpfen Sie Ausgaben mit:

- **Projekte** - Projektkosten genau verfolgen
- **Kunden** - Kosten mit bestimmten Kunden verknüpfen, zum Beispiel zur späteren Weiterberechnung
- **Lieferanten** - Erfassen, an wen Sie gezahlt haben

## Weiterberechnung und Kostenänderungen

Eine kundenverknüpfte Ausgabe kann auf einer Rechnung weiterberechnet werden. Dafür hat die Ausgabe selbst einen Schalter **An den Kunden weiterberechnen**: weiterberechnete Ausgaben landen auf der nächsten Rechnung des Kunden und zeigen **Steht bereits auf einer Rechnung**, sobald sie auf einer stehen. Das [automatische Abrechnen von Stunden](/de/features/time-registration#automatische-zeitabrechnung) übernimmt nur Ausgaben, die diesen Schalter aktiv haben.

Auf der Ausgabendetailseite erscheint eine Zeile **Verknüpfte Rechnung**, sobald sie zu einer Rechnung hinzugefügt wurde, und ein Hinweis **Kosten nach Rechnungsstellung geändert**, wenn der Kostenpreis der Ausgabe nach dem Versand der Rechnung bearbeitet wurde. Dieser Hinweis bedeutet, dass der Betrag auf der Rechnung nicht mehr mit der zugrunde liegenden Ausgabe übereinstimmt; öffnen Sie die Rechnung oder bearbeiten Sie die Ausgabe, um beides wieder auf den gleichen Stand zu bringen.

## Massenaktionen

Wählen Sie mehrere Ausgaben für die Sammelarbeit. Während einer Auswahl erscheint eine Spalte mit Häkchen in der Liste; außerhalb einer Auswahl gibt es keine Häkchen, und an eine leere Liste hängt gar kein Auswahl-Button. Ihre Sortierung in der Liste bleibt gemerkt und übersteht ein Neuladen.

- **Archivieren** - Ins Archiv verschieben. Wenn Sie mehrere unbezahlte Ausgaben mit Fälligkeitsdatum auf einmal archivieren, werden deren offene Zahlungserinnerungen pausiert. Die Massenaktionsleiste zeigt vorher eine Bestätigung, sobald eine ausgewählte Ausgabe unbezahlt ist und ein Fälligkeitsdatum hat, damit Sie wissen, wie viele der ausgewählten Ausgaben ihre Erinnerung verlieren. Solange die Ausgaben archiviert sind, bleibt die Erinnerung aus. Stellen Sie eine archivierte Ausgabe später wieder her, wird die Erinnerung beim nächsten täglichen Lauf neu angelegt, aber frühestens in der folgenden Nacht.
- **Löschen** - In den Papierkorb verschieben, wo Sie die Ausgabe noch wiederherstellen können. Im **Archiv** wählen Sie **Zu aktiv wiederherstellen** oder **In Papierkorb verschieben**; im **Papierkorb** wählen Sie **Zum Archiv wiederherstellen** oder **Endgültig löschen**.
- **Als bezahlt markieren** - Markiert ausgewählte Ausgaben als bezahlt. Wenn Sie einen Bank- oder Inbox-Entwurf als bezahlt markieren, wird gleichzeitig die Markierung "Zu prüfen" entfernt, sodass die Zeile in Ihren Berichten, der USt.-Erklärung und dem Buchhalterexport sichtbar ist, anstatt verborgen zu bleiben. Das passiert nur beim Setzen auf bezahlt, nicht beim Zurücksetzen auf unbezahlt.

Wird eine Massenaktion abgelehnt, weil eine oder mehrere ausgewählte Zeilen in einen gesperrten USt.-Zeitraum fallen, nennt die Fehlermeldung den genauen Zeitraum und erklärt den nächsten Schritt. Ein bereits abgegebener und gesperrter Zeitraum lässt sich nur über eine Suppletieabgabe wieder öffnen. Eine reine Sperre (die Abgabefrist ist abgelaufen, aber es wurde keine Abgabe eingereicht) können Sie auf der USt.-Seite vorübergehend entsperren. Entfernen Sie die Zeilen aus diesem Zeitraum aus Ihrer Auswahl, oder nutzen Sie die passende Korrektur-Route, und versuchen Sie es erneut.

## Kilometerpauschale

Wenn Sie mit einem Privatwagen geschäftlich unterwegs sind, können Sie diese Fahrten als eine einzelne Ausgabe mit Kilometerpauschale buchen. Die Fahrten kommen aus der Zeiterfassung und aus dem Fahrtenverzeichnis unten, das Erfassen braucht deshalb Zugang zu diesen Seiten; ohne Zugang sagt der Ablauf, was Sie beim Administrator anfragen können.

1. Gehen Sie zu **Ausgaben › Kilometer** und klicken Sie über der Liste auf **Jetzt buchen**. Sie landen bei **Kilometerpauschale erfassen**.
2. Wählen Sie den Zeitraum, den Sie buchen möchten.
3. Wählen Sie die Fahrten aus, die Sie übernehmen möchten.
4. Klicken Sie auf **Als Ausgabe buchen**.

Die Ausgabe wird mit einer Zeile für die gesamten geschäftlichen Kilometer erstellt.

<!-- TODO(source-missing): Der niederländische Kilometerpauschalesatz pro Kilometer ist noch nicht in sources/ hinterlegt. Geben Sie den Satz nicht in der Dokumentation wieder, bis ein Mensch den aktuellen Betrag auf belastingdienst.nl überprüft hat. -->

Wenn Ihr Workspace einen Firmenwagen nutzt, sind die tatsächlichen Autokosten bereits als Ausgabe gebucht; eine separate Kilometerpauschale ist dann nicht nötig.

Zugtickets und andere Autokosten können Sie auch als reguläre Ausgabe erfassen unter **Ausgaben › Hinzufügen** mit Lieferant, Betrag, Datum und Kategorie.

## Fahrten

Das Verzeichnis **Fahrten** unter Ausgaben hält Ihre Kilometer des Jahres fest, mit oder ohne Stunden. Eine Fahrt trägt ein Datum, Start und Ziel, die Kilometer einfache Strecke, geschäftlich oder privat, einen optionalen Kunden und eine Notiz. Stundenbrauch gibt es keinen mehr: jeder Kilometer-Einstieg (der auf **Ausgaben**, in der Befehlspalette und in den Reiseeinstellungen) öffnet direkt das Fahrtenformular.

Beim Anlegen einer Fahrt fragt das Formular **Womit fahren Sie?**. Wählen Sie den Privatwagen, bringt jeder geschäftliche Kilometer einen festen Betrag pro Kilometer als Kilometerpauschale, die Sie als Kosten buchen. Wählen Sie Firmenwagen oder Transporter, sind Tanken, Wartung und Versicherung bereits als Ausgaben gebucht, es erscheint keine Pauschale, und Ihre Fahrten stehen hier nur für Ihre Unterlagen. Bis die Frage beantwortet ist, bleibt die Pauschale unsichtbar. In einem Workspace mit Team beantwortet der Administrator die Frage für alle.

Das Verzeichnis gruppiert Fahrten pro Monat und summiert je Monat: geschäftliche Kilometer, private Kilometer und die Kilometerpauschale, die daraus folgt. Noch nicht als Kosten gebuchte Fahrten zeigen dieses Total mit dem Link **Jetzt buchen** in die Kilometerpauschale oben. Eine Fahrt, die zu einer erfassten Stunde gehört, trägt die Markierung **Bei Stunden**; eine gebuchte Fahrt zeigt das ebenfalls. Eine gebuchte Fahrt ändern Sie, indem Sie zuerst die Ausgabe löschen, die daraus entstanden ist.

## Fremdwährung

Die Buchhaltung rechnet in Euro. Läuft die Rechnung in einer Fremdwährung hinter der Ausgabe, werden diese Währung und der Betrag auf dem Dokument neben dem Eurobetrag gespeichert, während Berichte, Umsatzsteuervoranmeldung und Hauptbuch weiter in Euro rechnen.

So entsteht der Eurobetrag:

- **Scan in einer anderen Währung**: der Scanbildschirm fragt nach dem Eurobetrag, dem Betrag, für den Ihre Bank das Dokument umrechnet. Bis dieser Betrag steht, zeigt die Karte den Betrag des Dokuments in seiner eigenen Währung, nie einen erfundenen Eurobetrag. Nur der Eurobetrag kommt in Ihre Bücher.
- **Weitergeleitete Rechnung (Eingang)**: eine Fremdwährungsrechnung, die sich selbst bucht, rechnet auf den Referenzkursen der Europäischen Zentralbank (EZB) des Tages, markiert als vorläufiger Betrag. An Wochenenden und Feiertagen gibt es keinen eigenen Kurs; der Ablauf nimmt den Kurs des letzten Werktags. Gibt es gar keinen Kurs, wird nichts geraten: eine einzige Meldung schickt Sie zum Scanbildschirm, um den Eurobetrag selbst einzugeben.
- **Die Bank gewinnt**: sobald die Zahlung auf einem verbundenen Bankkonto auftaucht, ersetzt die echte Abbuchung die vorläufige Umrechnung. Der Eurobetrag wird der Betrag der Bank, inklusive des Aufschlags des Kartenherausgebers, und daneben wird keine zweite Kostenposition gebucht. Liegt die Ausgabe in einem abgeschlossenen USt-Zeitraum, bleibt alles unverändert: die Verknüpfung bleibt stehen und eine Notiz an der Ausgabe sagt, was die Bank abgebucht hat und dass der Rest in eine nächste Anmeldung gehört.

In der Liste zeigt eine Ausgabe in Fremdwährung den umgerechneten Eurobetrag; die Ausgabendetails bewahren die ursprüngliche Währung, den ursprünglichen Betrag und das Datum des genutzten Kurses.

## Wiederkehrende Ausgaben

Für regelmäßige Kosten (Miete, Abonnements usw.) richten Sie in Office [wiederkehrende Ausgaben](/de/features/recurring-expenses) ein, um die Erstellung zu automatisieren. Sie erreichen sie über die Schaltfläche **Wiederkehrende Ausgaben** auf der Ausgabenseite.

## Import

Importieren Sie Ausgaben aus CSV:

1. Gehen Sie zu **Einstellungen › Wechseln** und klicken Sie auf **Rechnungen importieren**; Sie landen bei **CSV-Daten importieren**
2. Wählen Sie **Ausgaben** als Datentyp
3. Laden Sie Ihre CSV-Datei hoch
4. Ordnen Sie Spalten den Feldern zu
5. Überprüfen und bestätigen Sie

## Meldungen bei abweichendem Zahlungsmuster

MyCompanyDesk beobachtet Lieferanten, die normalerweise monatlich eine Rechnung stellen, aber jetzt nichts mehr liefern. Wenn ein Lieferant Ausgaben in drei verschiedenen Monaten hatte und danach etwa 50 Tage lang keine bestätigte Ausgabe mehr, erstellt das System eine Benachrichtigung mit der Frage, ob Ihnen eine Rechnung fehlt.

Die Prüfung zählt nur bestätigte Ausgaben. Ausgabenentwürfe oder noch nicht bestätigte Ausgaben gelten nicht als "wir haben eine Rechnung gesehen", sodass ein unbestätigter Import die Meldung nicht stoppt. Das Ziel ist, eine fehlende wiederkehrende Rechnung aufzufangen, bevor sie Ihre Buchhaltung durcheinanderbringt.

Wenn Sie die Meldung öffnen, können Sie die fehlende Ausgabe direkt erfassen oder abweisen, wenn die Stille erwartet war.

## Prüfprotokoll

Beim Anlegen einer Ausgabe wird jetzt für jeden Entstehungspfad ein Prüfprotokoll-Eintrag geschrieben, nicht nur für das manuelle Webformular. Das gilt für gescannte Belege aus der App, Entwürfe aus der Bankverbindung, CSV-Importe, wiederkehrende Ausgaben, Posteingangs- und weitergeleitete E-Mail-Entwürfe, Peppol-E-Rechnungen und Fahrten. Der Eintrag nennt Lieferant und Datum bzw. die Ausgabennummer, falls bereits vergeben, sodass im Verlauf nachvollziehbar ist, woher eine Ausgabe stammt.

## Tipps

- Legen Sie Ihren Standard-USt.-Satz, Ihre Standard-Ausgabenkategorie und Ihre Standard-Zahlungsmethode für Ausgaben unter **Einstellungen › Ausgaben** fest, damit das Formular nicht jedes Mal leer startet. Eine 0-%-Einstellung funktioniert korrekt; das Formular behandelt sie als bewusste Wahl.
- Aktivieren Sie [KI-Vorschläge](/de/advanced/ai-features) für automatische Kategorieempfehlungen
- Hängen Sie immer Belege an - sie sind für Steuerprüfungen unerlässlich
- Verwenden Sie Projekte, um das Verhältnis von Ausgaben zu Einnahmen zu verfolgen
- Prüfen Sie den [Ausgabenbericht](/de/features/reports) für Ausgabenaufschlüsselungen
