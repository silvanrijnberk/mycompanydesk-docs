---
title: Ausgaben
---

# Ausgaben

Verfolgen Sie alle Ihre Geschäftsausgaben, scannen Sie Belege mit KI und kategorisieren Sie Kosten für eine genaue Buchführung und USt.-Meldung.

## Übersicht

Die Ausgabenseite listet alle Ihre erfassten Ausgaben auf. Die Zahlungsstatus-Tabs in der oberen Leiste lassen Sie schnell zwischen folgenden Ansichten wechseln:

- **Alle**: alle erfassten Ausgaben
- **Unbezahlt**: noch nicht bezahlte Ausgaben
- **Bezahlt**: bereits bezahlte Ausgaben

Sie können weiterhin nach Kategorie, Projekt, Zeitraum oder Status filtern. Klicken Sie auf eine Ausgabe, um die Detailseite zu öffnen; klicken Sie auf **Neu**, um manuell eine hinzuzufügen, oder **Beleg scannen**, um einen aus einem Bild oder PDF zu extrahieren.

## Ausgabe erstellen

### Manuelle Eingabe

1. Gehen Sie zu **Ausgaben > Neue Ausgabe**
2. Füllen Sie aus:
   - **Beschreibung** - Wofür die Ausgabe ist
   - **Betrag** - Gesamtkosten (inklusive oder exklusive USt.)
   - **Datum** - Wann die Ausgabe angefallen ist
   - **Kategorie** - Aus vordefinierten Kategorien auswählen. Wenn Sie unter Arbeitsbereichseinstellungen eine Standard-Ausgabenkategorie festgelegt haben, ist diese hier bereits vorausgefüllt.
   - **USt.-Satz** - Wird mit dem Standard-USt.-Satz fur Ausgaben Ihres Arbeitsbereichs vorausgefullt (einstellbar unter Arbeitsbereichseinstellungen). Sie konnen ihn jederzeit pro Ausgabe uberschreiben.
   - **Zahlungsmethode** - Wird mit der Standard-Zahlungsmethode fur Ausgaben Ihres Arbeitsbereichs vorausgefullt, falls festgelegt.
3. Hängen Sie optional ein **Beleg**-Bild oder PDF an
4. Verknüpfen Sie optional mit einem **Projekt** oder **Kunden**
5. Klicken Sie auf **Speichern**

### Schnellerfassung

Verwenden Sie die Schnellerfassungs-Schublade für schnelle Ausgabenerfassung:

1. Klicken Sie auf die Schnellerfassungs-Schaltfläche auf der Ausgabenliste
2. Geben Sie Betrag und Beschreibung ein
3. Wählen Sie eine Schnellkategorie
4. Speichern

### Aus einer Vorlage

Wenn Sie eine neue Ausgabe erstellen, klicken Sie auf **Aus Vorlage starten** (nur sichtbar, wenn gespeicherte Ausgabenvorlagen vorhanden sind). Wählen Sie eine Vorlage aus und das Formular füllt sich direkt mit dem gespeicherten Lieferanten, der Kategorie, dem Betrag und den anderen Daten. Passen Sie nach Bedarf an und klicken Sie auf **Speichern**.

### Aus Banktransaktionen

Wenn Ihr [Bankfeed](/de/features/bank) verbunden ist, werden kategorisierte ausgehende Transaktionen automatisch in Ausgabenentwürfe umgewandelt. Jede Ausgabe erhält die Gegenpartei als Lieferant, den absoluten Betrag als Brutto, den Standard-USt.-Satz und die Behandlung der Kategorie sowie das Buchungsdatum der Transaktion. Ausgabenentwürfe erscheinen zuerst im Prüf-Posteingang des Bankfeeds, wo Sie sie bestätigen, bearbeiten oder ablehnen können, bevor sie in Ihre Buchhaltung gelangen. Siehe [automatisch importierte Ausgaben prüfen](/de/features/bank#automatisch-importierte-ausgaben-prufen) für den vollständigen Ablauf.

### Belegscanner

Lassen Sie die KI Ausgabendetails automatisch aus Belegen extrahieren:

1. Gehen Sie zu **Ausgaben > Beleg scannen**
2. Laden Sie ein Belegbild (JPEG, PNG, WebP) oder PDF hoch
3. Wählen Sie den Extraktionsmodus:
   - **Einzeln** - Eine Ausgabe aus dem Beleg
   - **Mehrfach** - Mehrere Positionen aus einem Beleg
4. Überprüfen Sie die extrahierten Daten (Datum, Betrag, Lieferant, Beschreibung)
5. Bestätigen Sie, um die Ausgabe(n) zu erstellen

::: info
Belegscanner erfordert den **Pro**-Tarif oder hoher. Der USt.-Satz einer neuen Ausgabe beginnt mit Ihrer Standard-Arbeitsbereichseinstellung.
:::

## Ausgabenkategorien

MyCompanyDesk bietet vordefinierte Kategorien mit Symbolen zur schnellen Auswahl:

- Bürobedarf
- Reise & Transport
- Essen & Trinken
- Software & Abonnements
- Ausstattung
- Professionelle Dienstleistungen
- Marketing & Werbung
- Versicherung
- Miete & Nebenkosten
- Und mehr...

Kategorien helfen bei der Organisation Ihrer Ausgaben und werden in Berichten für Kostenaufschlüsselungen verwendet.

## USt.-Behandlung

Jede Ausgabe kann ihren eigenen USt.-Satz haben. Gängige Optionen:

- **21 %** - Standardsatz
- **9 %** - Ermäßigter Satz
- **0 %** - Nullsatz oder befreit

Der USt.-Betrag wird automatisch berechnet und in Ihre [USt.-Berichte](/de/features/vat) aufgenommen.

### USt.-Behandlung

In Sonderfällen legst du die USt.-Behandlung für die Ausgabe fest:

- **Standard**: inländische USt.
- **Reverse-Charge (EU)**: du bilanzierst die USt. selbst für einen EU-B2B-Einkauf, Rubrik 4b.
- **Reverse-Charge (außerhalb der EU)**: ein Lieferant außerhalb der EU stellt 0 % USt. (sources/vat-rates.yaml#countries.NL.zero) in Rechnung, du bilanzierst sie selbst in Rubrik 4a. Verwende dies zum Beispiel für einen US-Lieferanten wie Anthropic oder OpenAI.
- **Befreit**: die Leistung ist von der USt. befreit.
- **Ausländische USt. in Rechnung gestellt**: ausländische USt., die eventuell über das EU-Erstattungsverfahren zurückzuholen ist.

Die Behandlung wird normalerweise aus der Kategorie übernommen. Du kannst sie pro Ausgabe überschreiben.

### USt.-Betrag manuell

Normalerweise berechnet MyCompanyDesk den USt.-Betrag aus dem Satz und dem Nettobetrag. Stimmt das nicht mit dem Lieferantendokument überein, zum Beispiel einer Gutschrift mit Netto EUR 0 und nur USt., kannst du den USt.-Betrag manuell eingeben. Der Satz steuert den Betrag dann nicht mehr; das Formular verwendet deine Eingabe.

### Korrekturen in gesperrten Perioden

Sitzt eine Ausgabe in einer gesperrten USt.-Periode, blockiert das Formular Änderungen an den Finanzfeldern und bietet einen Korrekturweg an. Die Fehlermeldung wird über den Code `PERIOD_LOCKED` ausgegeben, sodass eine deutsche Erklärung statt des rohen Backend-Textes angezeigt wird. Die Korrektur wird in einer späteren, offenen Periode erstellt und verweist auf den ursprünglichen gesperrten Beleg, sodass die Nachvollziehbarkeit erhalten bleibt.

Das Gate vergleicht die Werte, die tatsächlich geschrieben werden sollen, nicht nur die im Formular sichtbaren Felder. Das betrifft auch mehrwertige `lines`, Investitionsmarker und Abschreibungseingaben wie Nutzungsdauer, Restwert und Privatnutzungsanteil. Jede finanziell bedeutsame Änderung in einer eingereichten Periode wird abgelehnt; nicht-finanzielle Anpassungen wie Notizen, Zahlungsstatus oder Beleganhänge bleiben weiterhin möglich.

## Investitionen und Abschreibung

Kategorien mit `auto_flag_investment = true` (in der Regel Ausstattung und andere Anlagegüter) machen aus einer Ausgabe automatisch eine Investition:

- Die Ausgabe wird als `is_investment = true` markiert.
- Es wird ein monatlicher Abschreibungsplan anhand von `useful_life_months` der Kategorie erstellt (Standard 60 Monate, falls nicht gesetzt).
- Der Plan verwendet lineare Abschreibung mit Tages-Pro-Rata für den ersten und letzten Kalendermonat, im Einklang mit den Richtlinien der Steuerbehörde.
- Die Zeilen werden in `expense_depreciation_lines` gespeichert und fließen in die Berichte ein.

Die abschreibungsfähige Basis entspricht den aktivierten Kosten, die die Buchhaltung auf das Anlagekonto bucht (`apps/api/src/modules/ledger/posting-engine.js`), nicht dem Bruttobetrag ohne USt. Damit werden auch nicht abziehbare Vorsteuer (bei Kategorien mit einem Abzugsanteil unter 100 %) und der Geschäftsanteil nach Privatnutzung berücksichtigt, sodass Abschreibungsplan, Anlagenregister und KIA-Berechnung alle von derselben Zahl ausgehen.

Das Bearbeiten von Kategorie, Datum, Betrag, USt.-Behandlung, Privatnutzungsanteil, Nutzungsdauer oder Restwert bei einer bestehenden Ausgabe löst eine Neuberechnung aus. Wenn eine bestehende Abschreibungszeile bereits in eine gesperrte USt.-Periode fällt, wird die Neuberechnung abgelehnt, damit die eingereichte Erklärung nicht stillschweigend geändert wird. Das Zurückstufen einer Investitionsausgabe in eine Nicht-Investitionskategorie löscht die Abschreibungszeilen.

## Ausgaben verknüpfen

Verknüpfen Sie Ausgaben mit:

- **Projekte** - Projektkosten genau verfolgen
- **Kunden** - Kosten mit bestimmten Kunden verknüpfen, zum Beispiel zur späteren Weiterberechnung
- **Lieferanten** - Erfassen, an wen Sie gezahlt haben

## Massenaktionen

Wählen Sie mehrere Ausgaben für:

- **Kategorisieren** - Kategorie in großem Umfang ändern
- **Archivieren** - Ins Archiv verschieben
- **Löschen** - Dauerhaft entfernen
- **Exportieren** - Als CSV herunterladen

## Kilometerpauschale

Wenn Sie mit einem Privatwagen geschäftlich unterwegs sind, können Sie diese Fahrten als eine einzelne Ausgabe mit Kilometerpauschale buchen.

1. Gehen Sie zu **Ausgaben** und öffnen Sie die Kilometerpauschale.
2. Wählen Sie den Zeitraum, den Sie buchen möchten.
3. Wählen Sie die Fahrten aus, die Sie übernehmen möchten.
4. Klicken Sie auf **Als Ausgabe buchen**.

Die Ausgabe wird mit einer Zeile für die gesamten geschäftlichen Kilometer erstellt.

<!-- TODO(source-missing): Der niederländische Kilometerpauschalesatz pro Kilometer ist noch nicht in sources/ hinterlegt. Geben Sie den Satz nicht in der Dokumentation wieder, bis ein Mensch den aktuellen Betrag auf belastingdienst.nl überprüft hat. -->

Wenn Ihr Workspace einen Firmenwagen nutzt, sind die tatsächlichen Autokosten bereits als Ausgabe gebucht; eine separate Kilometerpauschale ist dann nicht nötig.

Zugtickets und andere Autokosten können Sie auch als reguläre Ausgabe erfassen unter **Ausgaben > Neu** mit Lieferant, Betrag, Datum und Kategorie.

## Wiederkehrende Ausgaben

Für regelmäßige Kosten (Miete, Abonnements usw.) richten Sie [wiederkehrende Ausgaben](/de/features/recurring-expenses) ein, um die Erstellung zu automatisieren.

## Import

Importieren Sie Ausgaben aus CSV:

1. Gehen Sie zu **Profil > Import**
2. Wählen Sie **Ausgaben** als Datentyp
3. Laden Sie Ihre CSV-Datei hoch
4. Ordnen Sie Spalten den Feldern zu
5. Überprüfen und bestätigen Sie

## Meldungen bei abweichendem Zahlungsmuster

MyCompanyDesk beobachtet Lieferanten, die normalerweise monatlich eine Rechnung stellen, aber jetzt nichts mehr liefern. Wenn ein Lieferant Ausgaben in drei verschiedenen Monaten hatte und danach etwa 50 Tage lang keine bestätigte Ausgabe mehr, erstellt das System eine Benachrichtigung mit der Frage, ob Ihnen eine Rechnung fehlt.

Die Prüfung zählt nur bestätigte Ausgaben. Ausgabenentwürfe oder noch nicht bestätigte Ausgaben gelten nicht als "wir haben eine Rechnung gesehen", sodass ein unbestätigter Import die Meldung nicht stoppt. Das Ziel ist, eine fehlende wiederkehrende Rechnung aufzufangen, bevor sie Ihre Buchhaltung durcheinanderbringt.

Wenn Sie die Meldung öffnen, können Sie die fehlende Ausgabe direkt erfassen oder abweisen, wenn die Stille erwartet war.

## Tipps

- Legen Sie Ihren Standard-USt.-Satz, Ihre Standard-Ausgabenkategorie und Ihre Standard-Zahlungsmethode fur Ausgaben unter **Arbeitsbereichseinstellungen** fest, damit das Formular nicht jedes Mal leer startet. Eine 0-%-Einstellung funktioniert korrekt; das Formular behandelt sie als bewusste Wahl.
- Aktivieren Sie [KI-Vorschläge](/de/advanced/ai-features) für automatische Kategorieempfehlungen
- Hängen Sie immer Belege an - sie sind für Steuerprüfungen unerlässlich
- Verwenden Sie Projekte, um das Verhältnis von Ausgaben zu Einnahmen zu verfolgen
- Prüfen Sie den [Ausgabenbericht](/de/features/reports) für Ausgabenaufschlüsselungen
