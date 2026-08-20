---
title: Rechnungen
description: "Erstellen Sie Rechnungen, versenden Sie sie mit Zahlungslinks und verfolgen Sie sie vom Entwurf über offen bis bezahlt, mit Filtern je Status."
---

# Rechnungen

Rechnungen stehen im Mittelpunkt von MyCompanyDesk. Erstellen Sie professionelle Rechnungen, versenden Sie sie mit Zahlungslinks an Kunden und verfolgen Sie Zahlungen bis zum Abschluss.

## Übersicht

Die Rechnungsseite zeigt alle Ihre Rechnungen mit Filter- und Suchfunktionen. Die Status-Tabs in der oberen Leiste lassen Sie schnell zwischen folgenden Ansichten wechseln:

- **Alle**: jede Rechnung
- **Entwürfe**: erstellt, aber nicht gesendet
- **Offen**: gesendete, offene oder überfällige Rechnungen
- **Website-Verkäufe**: Online-Verkäufe, wenn Ihr Workspace Websiteverkäufe aktiviert hat

Sie können weiterhin den **Status**-Filter verwenden, um die Liste auf einen beliebigen Status einzugrenzen, einschließlich gesendet, überfällig, bezahlt oder storniert.

## Rechnung erstellen

### Vollständiges Formular

1. Gehen Sie zu **Rechnungen > Neue Rechnung**
2. Wählen oder erstellen Sie einen **Kunden**
3. Fügen Sie **Positionen** mit Beschreibung, Menge, Einzelpreis und USt.-Satz hinzu. Der Standard-USt.-Satz für neue Positionen stammt aus Ihren Steuereinstellungen (Finanzen → Steuern). Bei Kunden mit Reverse-Charge wird automatisch 0% verwendet.
4. Legen Sie das **Rechnungsdatum** und das **Fälligkeitsdatum** fest
5. Fügen Sie optionale **Anmerkungen** oder **interne Bemerkungen** hinzu
6. Klicken Sie auf **Speichern**, um einen Entwurf zu erstellen

### Schnellerfassung

Für eine schnellere Erstellung:

1. Klicken Sie auf die Schnellerfassungs-Schaltfläche auf der Rechnungsliste
2. Wählen Sie einen Kunden
3. Fügen Sie Positionen hinzu oder wählen Sie eine Vorlage
4. Speichern (und optional sofort versenden)

### Aus einer Vorlage

Sie können eine neue Rechnung an zwei Stellen aus einer gespeicherten Vorlage starten:

- Im **vollständigen Rechnungsformular** klicken Sie auf **Aus Vorlage starten** (nur sichtbar, wenn gespeicherte Rechnungsvorlagen vorhanden sind). Wählen Sie eine Vorlage aus und das Formular füllt sich direkt mit den Positionen, dem Kunden und den anderen gespeicherten Daten. Passen Sie nach Bedarf an und speichern und versenden Sie.
- Aus der **Schnellerfassungs-Schublade** klicken Sie auf **Vorlage verwenden**, wählen Sie eine gespeicherte Vorlage aus und alle Positionen sind vorausgefüllt. Passen Sie nach Bedarf an und speichern und versenden Sie.

Gespeicherte Vorlagen behalten die vollständige Position: Beschreibung, Menge, Einheit, Preis, USt.-Satz, Rabatt und ob die Position von der USt. befreit ist. Die Verknüpfung mit einem Katalogartikel wird bewusst nicht übernommen, da dieser Artikel später gelöscht werden kann und die Vorlage dann beim nächsten Gebrauch fehlschlagen würde.

## Rechnung einem Objekt zuordnen

Wenn der Umsatz zu einer Mietimmobilie, einem Fahrzeug oder einem anderen Vermögensgegenstand gehört, wählen Sie im Rechnungsformular das entsprechende Objekt aus. Die Rechnung wird dann auf der Objektdetailseite aufgeführt und in deren Gesamtumsatz einbezogen. Das gilt sowohl für Rechnungen, die aus einem Mietvertrag erzeugt wurden, als auch für direkte Zuordnungen wie Servicekostenabrechnungen, Einzelrechnungen und Verkaufsrechnungen.

## Rechnungsdetails

Jede Rechnung hat eine Detailseite, die zeigt:

- Kundeninformationen
- Positionen mit Zwischensummen
- USt.-Aufschlüsselung
- Gesamtbetrag
- Status und Verlauf
- Zahlungslink (falls gesendet)

## Dokumentvorschau

Jede gespeicherte Rechnung hat auf der Detailseite eine live PDF-Vorschau. Die Vorschau zeigt die Rechnung genau so, wie sie Ihr Kunde sieht: Layout, Positionen, Summen, Markenauftritt und Logo.

Im Kopf der Vorschau finden Sie Schaltflächen für **PDF herunterladen**, **Drucken** und **Design anpassen**. Klicken Sie auf **Design anpassen**, um direkt zum Rechnungsdesign zu springen und das Erscheinungsbild aller Ihrer Rechnungen, Angebote und Erinnerungen anzupassen. Nach dem Bearbeiten kehren Sie zu der Rechnung zurück, von der Sie gekommen sind. Auf Mobilgeräten befindet sich dieselbe Aktion im Overflow-Menü, damit der Kopf der Vorschau übersichtlich bleibt.

## Aktionen

Die Hauptaktion auf der Rechnungsdetailseite richtet sich nach dem Rechnungsstatus:

- **Senden** — Verfügbar für Entwurfs-, gesendete und überfällige Rechnungen. Das ist die primäre nächste Schritt, solange die Rechnung den Kunden noch erreichen muss.
- **Duplizieren** — Wird bei stornierten Rechnungen angezeigt, damit Sie sie schnell neu anlegen können.
- **Als bezahlt markieren** — Wird angezeigt, wenn ein Kunde eine Zahlung meldet, damit Sie diese bestätigen können, anstatt die Rechnung erneut zu senden.

Zusätzliche Aktionen finden sich im Overflow-Menü neben der Hauptaktion:

- **PDF herunterladen** — Laden Sie die Rechnung als professionell formatiertes PDF-Dokument mit Ihrem Firmenlogo, Ihren Markenfarben und allen Rechnungsdetails herunter.
- **Stornieren** — Stornieren Sie eine Rechnung, die nicht mehr bezahlt werden soll. Stornierte Rechnungen bleiben für Prüfungszwecke in Ihren Unterlagen.
- **Duplizieren** — Erstellen Sie eine Kopie einer bestehenden Rechnung, nützlich für wiederkehrende Abrechnungen an denselben Kunden.
- **Erinnerung senden** — Senden Sie eine Zahlungserinnerung für überfällige Rechnungen.

### Senden

Senden Sie die Rechnung per E-Mail an Ihren Kunden. Die E-Mail enthält:

- Eine anpassbare Nachricht (basierend auf Ihrer E-Mail-Vorlage)
- Die Rechnungs-PDF als Anhang
- Einen Zahlungslink für die Online-Zahlung

Vor dem Versenden zeigt die E-Mail-Vorschau die Nachricht genau so, wie der Kunde sie erhält. Im Sende-Dialog schalten Sie die **Ansehen-Schaltfläche**, **Download-Schaltfläche**, **PDF-Anhang**, **Rechnungspositionen** und, falls Online-Zahlungen aktiviert sind, die Schaltfläche **Zahlung bestätigen** ein oder aus. Diese Schalter werden direkt in der Vorschau übernommen, sodass Sie genau sehen, was der Kunde bekommt.

Wenn in Ihrem Arbeitsbereich Allgemeine Geschäftsbedingungen in Dokumenten hinterlegt sind, zeigt der E-Mail-Vorschau-Dialog außerdem den Schalter **Allgemeine Geschäftsbedingungen mitschicken** an. Bei Rechnungen ist er standardmäßig deaktiviert. Wenn Sie ihn einschalten, wird die aktuelle AGB-PDF der E-Mail beigefügt und der Versand als Übergabemoment auf dem AGB-Dokument protokolliert.

### Als Peppol E-Rechnung senden

Wenn Ihr Workspace im Pro-Tarif ist und [Peppol E-Rechnung](/de/features/peppol) aktiviert hat, bietet der Sende-Dialog außerdem **E-Rechnung (Peppol)** an. Die Rechnung wird dann digital im Buchhaltungssystem Ihres Kunden zugestellt, anstatt per E-Mail. Sie wählen pro Rechnung, welchen Kanal Sie verwenden.

### PDF herunterladen

Laden Sie die Rechnung als professionell formatiertes PDF-Dokument herunter. Das PDF enthält Ihr Firmenlogo, Ihre Markenfarben und alle Rechnungsdetails.

### Als bezahlt markieren

Bestätigen Sie die Zahlung manuell, wenn ein Kunde per Banküberweisung oder einer anderen Offline-Methode zahlt.

### Stornieren

Stornieren Sie eine Rechnung, die nicht mehr bezahlt werden soll. Stornierte Rechnungen bleiben für Prüfungszwecke in Ihren Unterlagen.

### Duplizieren

Erstellen Sie eine Kopie einer bestehenden Rechnung, nützlich für wiederkehrende Abrechnungen an denselben Kunden.

Gutschriften können nicht dupliziert werden. Ein Duplikat würde auf keine Rechnung verweisen und dennoch als negative Umsatz in der USt.-Erklärung zählen. Erstellen Sie stattdessen eine neue Korrektur über “Gutschrift erstellen” auf der Rechnung, die Sie korrigieren möchten.

### Erinnerung senden

Senden Sie eine Zahlungserinnerung für überfällige Rechnungen. Wenn Ihr Arbeitsbereich Online-Zahlungen aktiviert hat, bietet die Erinnerungsmail dem Kunden dieselben Zahlungsoptionen wie die ursprüngliche Rechnung: einen Button **Ansehen \u0026 bezahlen**, einen Button **Zahlung bestätigen** und einen QR-Code auf der PDF zum Scannen und Bezahlen.

## Massenaktionen

Wählen Sie mehrere Rechnungen aus der Liste, um Aktionen in großem Umfang durchzuführen:

- **Als versendet markieren** — Mehrere Entwurfsrechnungen gleichzeitig als versendet markieren
- **Als bezahlt markieren** — Zahlung für mehrere Rechnungen erfassen
- **Archivieren** — Rechnungen ins Archiv verschieben
- **Löschen** — Rechnungen dauerhaft entfernen

Das endgültige Löschen einer Rechnung (einzeln, als Massenaktion, beim Leeren des Papierkorbs oder beim Löschen aller Rechnungen) hebt die Verknüpfung mit verbundenen Ausgaben auf. Diese Ausgaben erscheinen wieder in der Liste nicht-fakturierter Ausgaben und können einer anderen Rechnung zugeordnet werden.

Massenhaftes Freigeben führt dieselben MwSt.- und Statusprüfungen durch wie beim Versenden einer einzelnen Rechnung. Rechnungen, die eine Prüfung nicht bestehen, werden übersprungen; die Ergebnisübersicht zeigt den Grund an.

## Zahlungslinks

Wenn Sie eine Rechnung versenden, wird ein eindeutiger Zahlungslink generiert. Ihr Kunde kann:

1. Auf den Link in der E-Mail klicken
2. Die Rechnung im **Kundenportal** ansehen
3. Direkt online bezahlen, über Ihr verbundenes Mollie- oder Stripe-Konto

Die Zahlung wird automatisch erfasst und der Rechnungsstatus wird auf **Bezahlt** aktualisiert.

Wird eine Rechnung nach dem Versand storniert, funktioniert der Zahlungslink nicht mehr. Wenn ein Kunde auf den Link in der alten E-Mail oder PDF klickt, sieht er eine Nachricht, dass die Rechnung storniert wurde und nicht mehr online bezahlt werden kann.

## Online-Zahlungen

Aktivieren Sie Online-Rechnungszahlungen, indem Sie Ihr eigenes Mollie- oder Stripe-Konto verbinden:

1. Gehen Sie zu **Geld → Zahlungen** in der Seitenleiste Ihres Arbeitsbereichs
2. Verbinden Sie unter **Online betalingen** den gewünschten Anbieter
3. Mollie unterstützt iDEAL, Bancontact, Kreditkarte und Banküberweisung
4. Stripe Connect unterstützt Karte, Apple Pay, Google Pay und SEPA-Lastschrift

Nach der Verbindung enthält jede von Ihnen versendete Rechnung einen Zahlungslink. Ihre Kunden bezahlen über Ihr eigenes Anbieterkonto. Das Geld geht direkt an Sie. MyCompanyDesk verarbeitet oder verwahrt keine Zahlungen für Sie.

## Zahlungsanbieter-Badge

Wenn eine Rechnung vollständig bezahlt ist, zeigt die Kopfzeile des Zahlungsbereichs ein Badge an, das angibt, über welchen Anbieter die Zahlung eingegangen ist: "Bezahlt über Mollie" oder "Bezahlt über Stripe". Der dominante Anbieter wird angezeigt, wenn mehrere Zahlungsmethoden verwendet wurden. So sehen Sie auf einen Blick, wo das Geld eingegangen ist, ohne durch den Zahlungsverlauf scrollen zu müssen.

## Zahlungen rückerstatten

Online-Zahlungen über Mollie oder Stripe können direkt aus MyCompanyDesk rückerstattet werden. Wenn Sie eine Zahlung rückerstatten:

- Wird der volle Betrag über denselben Zahlungsanbieter an den Kunden zurücküberwiesen
- Wird die Rückerstattung sofort von Mollie oder Stripe verarbeitet
- Wird die Zahlung in Ihrer Verwaltung als rückerstattet markiert

Teilrückerstattungen, die Sie bei Mollie oder Stripe auslösen (zum Beispiel, wenn Sie dort nur einen Teil des Betrags zurückerstatten), erscheinen jetzt in der Zahlungsliste mit dem Rückerstattungsdatum und dem noch gebuchten Restbetrag.

Offline-Zahlungsmethoden (Banküberweisung, Bargeld) nutzen den bestehenden Stornierungsweg: die Zahlung wird ohne anbieterseitige Rückerstattung als storniert markiert. Wenn Sie eine Zahlung stornieren, wird der Rechnungsstatus auf den Zustand zurückgesetzt, der zur Rechnungshistorie passt. War die Rechnung bereits per E-Mail an den Kunden versendet, springt sie zurück auf **Gesendet**; war sie noch nie versendet, springt sie zurück auf **Offen**. Der ursprüngliche Versandverlauf bleibt erhalten.

So erstatten Sie eine Zahlung:

1. Öffnen Sie die Rechnungsdetailseite
2. Suchen Sie die Zahlung in der Zahlungsliste
3. Klicken Sie auf die Schaltfläche **Rückerstatten** (nur für Mollie- und Stripe-Zahlungen verfügbar)
4. Geben Sie optional einen Grund an
5. Bestätigen Sie die Rückerstattung

## Dokumenttypen

Das Rechnungsmodul unterstützt mehrere Dokumenttypen:

- **Rechnung** — Standard-Abrechnungsdokument
- **Gutschrift** — Anpassung für Rückerstattungen oder Korrekturen
- **Erinnerung** — Zahlungserinnerung für überfällige Rechnungen

## Filtern und Suchen

Verwenden Sie die Filterleiste, um Ihre Rechnungen einzugrenzen:

- **Status** — Entwurf, Gesendet, Überfällig, Bezahlt, Storniert
- **Kunde** — Nach bestimmtem Kunden filtern
- **Projekt** — Nach verknüpftem Projekt filtern
- **Datumsbereich** — Nach Rechnungs- oder Fälligkeitsdatum filtern
- **Suche**: Nach Rechnungsnummer, Kundenname, Referenz oder Notizen suchen
- **Direktlinks**: Benachrichtigungen und E-Mails, die direkt zu einer Rechnung verlinken, löschen beim Öffnen der Seite alle aktiven Datumsbereichsfilter, damit die Rechnung nicht von einem vorhandenen Filter ausgeblendet wird

## Fälligkeitsübersicht

Die Registerkarte **Offen** zeigt eine Fälligkeitsübersicht, die offene Rechnungen nach der Anzahl Tage über dem Fälligkeitsdatum gruppiert. Die angezeigten Beträge sind die verbleibende einziehbare Restsumme: der Rechnungsbetrag abzüglich der gebuchten Zahlungen, einschließlich aller Gutschriften, die bereits für diese Rechnung ausgestellt wurden.

Da die Karte nur die Rechnungen sieht, die in der aktuellen Listenansicht geladen sind, sind die Betragssummen eine Momentaufnahme dieser Seite, keine vollständige Lebenszeitbilanz des Arbeitsbereichs. Eine vollständig gutgeschriebene Rechnung erscheint nicht mehr als noch einzuziehendes Geld, sodass die Summen mit dem übereinstimmen, was Ihr Kunde im Portal sieht und was die Rechnungsdetailseite zeigt.

## Export

Exportieren Sie Ihre Rechnungen als CSV zur Verwendung in Excel, Google Sheets oder Ihrer Buchhaltungssoftware.

::: info
CSV-Export erfordert den **Pro**-Tarif oder höher.
:::

## Finalisieren und Versenden

Wenn Sie eine Rechnung finalisieren oder versenden, prüft MyCompanyDesk, ob Ihre Firma eine USt-IdNr. (Umsatzsteuer-Identifikationsnummer) und eine IBAN hinterlegt hat. In den Niederlanden ist eine USt-IdNr. gesetzlich auf der Rechnung vorgeschrieben, und Ihre IBAN zeigt Kunden, wohin sie zahlen sollen.

Fehlt eines der Felder, öffnet sich ein Dialog, in dem Sie die Angaben direkt nachtragen können. Nach dem Speichern wird die Rechnung automatisch finalisiert.

Die App blockiert die Finalisierung auch, wenn Ihre Firmendaten unvollständig sind (z. B. ein fehlender Firmenname oder eine fehlende Adresse) oder wenn die Rechnung keine Positionen enthält. Die Fehlermeldung zeigt genau, was fehlt, damit Sie es korrigieren können, bevor die Rechnung beim Kunden landet.

Mengenangaben in der PDF werden in derselben Sprache formatiert wie der Rest des Dokuments, sodass eine englische Rechnung die englische Zahlenformatierung und eine niederländische Rechnung die niederländische Formatierung verwendet.

Wenn Ihr Arbeitsbereich die manuelle Nummerierung verwendet, fragt die App beim Finalisieren oder Versenden auch nach der Rechnungsnummer. MyCompanyDesk schlägt die nächste Nummer in Ihrer Serie vor, aber Sie können auch eine beliebige andere Nummer eingeben. Die Nummer ist Pflicht und muss eindeutig sein.

Warten Sie noch auf Ihre USt-IdNr. vom Finanzamt, oder sind Sie unter der Kleinunternehmerregelung (KOR) befreit? Sie können den Hinweis überspringen und trotzdem fortfahren. Tragen Sie Ihre USt-IdNr. später nach, sobald sie vorliegt.

Sobald eine Rechnung finalisiert wurde, können Sie sie nicht mehr in einem Schritt archivieren oder löschen, da die Rechnungsnummer bereits verwendet wurde. Nutzen Sie stattdessen die Stornierungs- oder Gutschrifts-Flow, wenn eine finalisierte Rechnung nicht mehr bezahlt werden soll.

## Rechnungen von anderen MyCompanyDesk-Nutzern empfangen

Wenn Ihnen ein Lieferant, der ebenfalls MyCompanyDesk nutzt, eine Rechnung per E-Mail schickt, können Sie diese direkt als strukturierten Entwurf in Ihre Ausgaben übernehmen lassen. Die Beträge stammen aus der Rechnung selbst, sodass weder Scannen noch Abtippen nötig ist. Der Entwurf wird immer mit dem Status "zur Prüfung" angelegt und erst nach Ihrer Freigabe gebucht.

Die Funktion ist standardmäßig deaktiviert. Schalten Sie sie unter **Einstellungen > Automatisierung** (`/settings/automatisering`) im Abschnitt **Rechnungen von anderen MyCompanyDesk-Nutzern** ein. Sie können sie dort jederzeit wieder ausschalten.

Wenn die Funktion aktiv ist:

- Erscheint jede eingehende Rechnung als Entwurf unter **Ausgaben**, bereits vorausgefüllt mit Lieferantenname und Positionssummen.
- Zeigt die Beschreibung an, von welchem MyCompanyDesk-Arbeitsbereich die Rechnung stammt, und dass sie über MyCompanyDesk eingegangen ist.
- Kann eine Regel für vertraute Lieferanten die Kategorie vorausfüllen, der Entwurf bleibt aber auf jeden Fall "zur Prüfung", damit nichts automatisch gebucht wird.
- Kann dieselbe Rechnung nie zweimal als Entwurf entstehen: ein Datenbank-Index blockiert Duplikate, auch wenn der Absender die E-Mail erneut verschickt.
- Schützt MyCompanyDesk Ihren Prüfungseingang, indem es jedem Absender maximal zehn Entwürfe in Ihrem Arbeitsbereich pro rollierendem 24-Stunden-Fenster erlaubt. Dieses Limit finden Sie in `apps/api/src/modules/invoices/network-delivery.service.js#NETWORK_DAILY_PAIR_CAP`.

Die Funktion ist auf beiden Seiten kostenlos. Sie funktioniert nur, wenn der Lieferant die Rechnung an eine Mailbox schickt, die MyCompanyDesk für Sie betreibt. Wenn Sie lieber über ein Netzwerk empfangen möchten, können Sie Lieferantenrechnungen auch über [Peppol E-Rechnung](/de/features/peppol) erhalten.

## Tipps

- Richten Sie Ihre [E-Mail-Vorlagen](/de/settings/email) ein, bevor Sie Ihre erste Rechnung versenden
- Verwenden Sie [wiederkehrende Rechnungen](/de/features/recurring-invoices) für regelmäßige Abrechnungen
- Prüfen Sie die [Berichte](/de/features/reports)-Seite für Umsatzeinblicke
- Aktivieren Sie [KI-Vorschläge](/de/advanced/ai-features) für intelligente Beschreibungsverbesserungen
- Nutzen Sie [Peppol E-Rechnung](/de/features/peppol), wenn Ihr Kunde digitale Zustellung bevorzugt
