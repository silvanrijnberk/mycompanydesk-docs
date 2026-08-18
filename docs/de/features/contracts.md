---
title: Verträge
---

# Verträge

Verwalten Sie wiederkehrende Dienstleistungsvereinbarungen und Mietverträge mit automatischen Abrechnungsplänen.

## Übersicht

Verträge repräsentieren laufende Vereinbarungen mit Kunden — wie monatliche Dienstleistungsverträge, Mietvereinbarungen oder Wartungspläne. Sie können automatisch Rechnungen nach einem festgelegten Zeitplan generieren.

::: info
Das Vertragsmodul ist optional. Aktivieren Sie es unter **Unternehmen > Funktionen**, wenn Sie es nicht in der Navigation sehen.
:::

## Vertrag erstellen

1. Gehen Sie zu **Verträge > Neuer Vertrag**
2. Füllen Sie aus:
   - **Name** — Ein aussagekräftiger Titel (z. B. „Monatlicher Reinigungsservice")
   - **Kunde** — Die Vertragspartei
   - **Betrag** — Der wiederkehrende Abrechnungsbetrag
   - **Wiederholung** — Wie oft abgerechnet wird (wöchentlich, monatlich, vierteljährlich, jährlich)
   - **Startdatum** — Wann der Vertrag beginnt
   - **Enddatum** — Optionales Enddatum
   - **Beschreibung** — Bedingungen und Details
3. Klicken Sie auf **Speichern**

::: tip Weitere Optionen
Im Formular für neue Verträge bleiben optionale Angaben übersichtlich: der Abschnitt **Weitere Optionen** zeigt zusätzliche Felder für Servicezuschlag, USt.-Satz und Servicebeschreibung. Sie sind für das Erstellen des Vertrags nicht erforderlich, können aber bei Bedarf ausgeklappt werden.
:::

## Preisbasis

Jeder Vertrag hat eine **Preisbasis**, die festlegt, wie der Betrag vereinbart wurde:

- **Fester Betrag** -- jede Periode derselbe Betrag, zum Beispiel Miete oder eine feste Monatsgebühr.
- **Stundensatz** -- Sie fakturieren die Stunden, die Sie für Projekte erfassen, die mit diesem Vertrag verknüpft sind.
- **Tagessatz** -- Sie fakturieren die Tage, an denen Sie an Projekten arbeiten, die mit diesem Vertrag verknüpft sind.
- **Fester Projektpreis** -- ein vereinbarter Gesamtpreis für die gesamte Aufgabe, einmalig fakturiert.

Bei Stunden- und Tagessatzverträgen zeigt die Vertragsdetailseite eine Karte **Arbeit unter diesem Vertrag** mit den vereinbarten, fakturierten und erfassten Summen sowie den verknüpften Projekten. Ein Tag zählt als 8 Stunden.

Ein fester Projektpreis wiederholt sich nicht: der Vertrag erzeugt eine Rechnung und stoppt dann.

## Vertragsstatus

| Status | Beschreibung |
|---|---|
| **Aktiv** | Derzeit in Kraft, generiert Rechnungen |
| **Inaktiv** | Pausiert — keine Rechnungen werden generiert |

## Enddaten

Sie können ein **Enddatum** beim Erstellen oder Bearbeiten eines Vertrags angeben. Lassen Sie das Feld leer, um einen unbefristeten Vertrag zu führen.

Wenn ein Enddatum gesetzt ist:

- Die Vertragsdetailseite zeigt das Enddatum an, oder **Unbefristet**, wenn keines gesetzt ist.
- Nach dem Enddatum werden keine Rechnungen mehr erstellt.
- In der Vertragsliste erscheint das Label **Läuft bald ab**, wenn das Enddatum innerhalb von 30 Tagen liegt.

## Automatische Rechnungsstellung

Aktive Verträge mit einem Wiederholungsplan generieren automatisch Rechnungen in jedem Abrechnungszeitraum. Das System:

1. Erstellt einen Rechnungsentwurf basierend auf den Vertragsbedingungen
2. Wendet den richtigen Kunden, Betrag und die Beschreibung an
3. Verwendet dieselbe automatische Rechnungsnummerierung

Generierte Rechnungen werden nur dann als Mietrechnungen gekennzeichnet, wenn es sich um einen Mietvertrag handelt. Dienstleistungs- und Kooperationsverträge erzeugen gewöhnliche Rechnungen. Das beeinflusst das Badge auf der Rechnung, die beim Versand verwendete E-Mail-Vorlage und ob der Umsatz einem verknüpften Vermögenswert zugeordnet wird.

Sie können generierte Rechnungen manuell überprüfen und versenden oder den automatischen Versand konfigurieren. Wenn ein Vertrag auf einem Stundensatz, Tagessatz oder festen Projektpreis basiert, erhalten Sie auch eine Warnung, wenn das Vertragsbudget überschritten wird oder erfasste Stunden nicht bewertet werden konnten, weil kein Satz hinterlegt war.

### Benachrichtigungen zu Versand und automatischer Rechnungsstellung

Wenn eine erstellte Rechnung nicht per E-Mail an den Kunden versendet werden kann, erstellt die App eine Benachrichtigung **Rechnung nicht versendet**. Das passiert zum Beispiel, wenn der Kunde keine E-Mail-Adresse hat, Ihr E-Mail-Versand nicht eingerichtet ist, die Adresse nach einem Bounce oder Spam-Hinweis blockiert ist oder das Versenden aus einem anderen Grund fehlschlägt. Die Benachrichtigung öffnet die Rechnung, damit Sie die Ursache beheben und erneut senden können.

Wenn Ihr Paket die automatische Vertragsrechnungsstellung nicht mehr umfasst, erstellt die App eine Benachrichtigung **Automatische Rechnungsstellung pausiert**, sobald Vertragsrechnungen bereitstehen, aber nicht versendet werden. Die Benachrichtigung nennt die Anzahl wartender Vertragsrechnungen und seit wann, und verweist Sie auf die Abonnementseite, um zu upgraden.

## Rechnungszeitraum

Verträge berechnen einen Zeitraum relativ zum Rechnungsdatum:

- **Aktuell** — der Zeitraum, der das Rechnungsdatum enthält (Standard)
- **Vorheriger** — der Zeitraum vor dem Rechnungsdatum
- **Nächster** — der Zeitraum nach dem Rechnungsdatum; alter Wert, der für ältere Mietverträge mit Vorauszahlung erhalten bleibt

Im Formular kannst du heute nur **aktuell** oder **vorheriger** wählen. Wenn du einen älteren Vertrag hast, der auf **nächster** steht, behält die API diesen Wert beim Speichern bei, damit der Vertrag weiterhin bearbeitbar bleibt.

## Automatisches Einziehen

Bei wiederkehrenden Verträgen können Sie den berechneten Betrag automatisch über das hinterlegte Zahlungsmandat des Kunden einziehen, anstatt einen Zahlungslink per E-Mail zu senden. Dafür benötigen Sie einen verbundenen Zahlungsanbieter (Mollie oder Stripe) und ein gültiges Mandat des Kunden.

### Automatisches Einziehen einrichten

Öffnen Sie auf der Vertragsdetailseite die Karte **Automatisches Einziehen** und richten Sie das Mandat ein. Sobald das Mandat gültig ist, schalten Sie den Toggle um. Das System belastet dann jede generierte Rechnung automatisch.

### Fehlgeschlagene Belastung

Wenn eine Belastung fehlschlägt oder das Mandat nicht mehr gültig ist, erhalten Sie eine Benachrichtigung „Automatisches Einziehen fehlgeschlagen“. Die Benachrichtigung verlinkt direkt auf den Vertrag, damit Sie das Mandat erneut verbinden oder den Kunden kontaktieren können.

## Preisanpassung

Wiederkehrende Verträge können für Inflation oder vereinbarte jährliche Erhöhungen angepasst werden. Öffnen Sie die Vertragsliste und klicken Sie auf **Preise erhöhen**, um zu sehen, was eine prozentuale Erhöhung bei allen berechtigten Verträgen bewirken würde. Ein Vertrag ist nur berechtigt, wenn seit Beginn oder seit der letzten Erhöhung mindestens ein Jahr vergangen ist.

Die Vorschau zeigt pro Vertrag:

- Den aktuellen Tarif oder Betrag pro Periode
- Den neuen Tarif oder Betrag nach der Erhöhung
- Das Datum der letzten Anpassung des Vertrags

Sie wenden die Erhöhung pro Vertrag an, niemals pauschal, damit Sie Kunden überspringen können, mit denen Sie noch nicht gesprochen haben. Sobald sie angewendet ist, aktualisiert das System die hinterlegten Vertragsbedingungen und zukünftige Rechnungen zeigen den neuen Betrag.

::: tip Zuerst abstimmen
Besprechen Sie jede Preiserhöhung mit Ihrem Kunden, bevor Sie sie anwenden. Die Vorschau ändert nichts, bis Sie bei einem bestimmten Vertrag auf **Anwenden** klicken.
:::

## Verknüpfung mit Vermögenswerten

Verträge können mit [Objekten/Vermögenswerten](/de/features/objects) für die Mietverwaltung verknüpft werden:

- Verknüpfen Sie einen Vertrag mit einer Immobilie, einem Fahrzeug oder einem Gerät
- Verfolgen Sie, welche Vermögenswerte derzeit vermietet sind und an wen
- Sehen Sie den Vertragsverlauf pro Vermögenswert

## Verknüpfen mit Projekten

Verträge können auch mit [Projekten](/de/features/projects) verknüpft werden. Wenn Sie ein Projekt anlegen oder bearbeiten, wählen Sie den Vertrag im Feld **Vertrag** aus. Erfasste Stunden auf diesem Projekt werden dann auf der Rechnung des Vertrags ausgewiesen.

Das eignet sich für Retainer- oder Zeit-und-Material-Vereinbarungen: der Vertrag legt die Preisbasis fest, die verknüpften Projekte liefern die Stunden.

Sie können ein Projekt jederzeit wieder entknüpfen; bereits in Rechnung gestellte Stunden bleiben erhalten.

## Kennzahlen

Die Vertragsliste zeigt zusammenfassende Kennzahlen:

- Gesamtzahl aktiver Verträge
- Gesamtvertragswert
- Verträge nach Wiederholungsart

## Massenaktionen

- **Status ändern** — Mehrere Verträge aktivieren oder deaktivieren
- **Archivieren** — Ins Archiv verschieben
- **Wiederherstellen** — Archivierte Verträge zurückholen

## Signieren

Verträge unterstützen die elektronische Signatur. Sie können Parteien über das Vertragsformular hinzufügen; jede Partei erhält einen Signierlink per E-Mail.

Sobald ein Vertrag signiert wurde, zeigt die Vertragsdetailseite eine Signierkarte mit:

- Dem Status jeder Partei (eingeladen, angesehen, signiert oder abgelaufen)
- Eine **Ansehen**-Schaltfläche, die eine Inline-Vorschau des signierten Dokuments öffnet
- Eine Download-Schaltfläche zum Speichern des PDFs

Die Vorschauseite enthält eine Werkzeugleiste mit Druck- und Download-Aktionen und zeigt den signierten Vertrag direkt im Browser an. Sowohl das signierte PDF als auch das Prüfungs-PDF enthalten den vollständigen Vertragstext, sodass jede heruntergeladene Kopie eigenständig ist.

### Absender-Branding auf der Signierseite

Wenn ein Empfänger einen Vertrag zur Signierung öffnet, spiegelt die Signierseite das Branding des Absenders wider:

- Das Logo des Absenders erscheint oben auf der Seite
- Die Seite verwendet die Akzentfarbe der Marke des Absenders
- Text und Schaltflächen passen sich automatisch an, damit sie auf dieser Farbe lesbar bleiben

So erhalten Unterzeichner eine Erfahrung, die wie vom einladenden Unternehmen selbst stammt, und nicht wie eine generische Seite eines Drittanbieters.

### Signieren in der Vertragsliste

Die Vertragsliste enthält eine **Signatur**-Spalte, die den Signaturstatus für jeden Vertrag mit E-Signatur anzeigt. Die Status erscheinen als farbige Badges: Entwurf (neutral), gesendet (Warnung), teilweise signiert (Info) und aktiv (Erfolg).

Ein Signaturfilter-Dropdown über der Liste erlaubt es Ihnen, nach Signaturstatus zu filtern oder Verträge ohne E-Signatur ("Keine E-Signatur") anzuzeigen.

::: info Bestandsverträge
Verträge, die vor der Einführung der elektronischen Signatur erstellt wurden, zeigen keine Signierkarte auf der Detailseite an. Das System erkennt Bestandsverträge, indem es prüft, ob der Vertrag Signierparteien, eine Vorlage oder Signierinhalte besitzt. Nur Verträge, die nach der Einführung des E-Signings erstellt oder aktualisiert wurden, zeigen die Signierkarte an.

Bestandsverträge zeigen einen Bindestrich in der Signatur-Spalte und erscheinen unter dem Filter "Keine E-Signatur".
:::

### SMS-Verifizierung

Signierlinks können eine SMS-Verifizierung verlangen, bevor eine Partei das Dokument einsehen und signieren kann. Wenn aktiviert, muss der Unterzeichner eine Mobilnummer eingeben und einen 6-stelligen Code per SMS bestätigen.

- **Code senden** — Nach Eingabe der Mobilnummer tippt der Unterzeichner auf die Schaltfläche und erhält einen Code
- **Code bestätigen** — Der Unterzeichner gibt den 6-stelligen Code ein, um den Zugriff auf die Nummer nachzuweisen
- **Verifiziert-Badge** — Nach Bestätigung erscheint ein "Verifiziert"-Badge mit den letzten vier Ziffern der Nummer

Bei Eingabe eines falschen Codes kann der Unterzeichner einen neuen anfordern. Die SMS-Verifizierung wird pro Signiersitzung konfiguriert und gilt für alle Parteien.

## Vorlagenversionen

Vertragsvorlagen unterstützen Versionierung, damit Sie Änderungen im Laufe der Zeit nachverfolgen können. Jede Version ist ein eingefrorener Schnappschuss des Vorlageninhalts zu einem bestimmten Zeitpunkt, sodass Sie Ihre Vorlagen weiterentwickeln können, ohne bestehende Verträge zu beeinflussen.

### Eine Version veröffentlichen

1. Gehen Sie zu **Verträge > Vorlagen**
2. Suchen Sie Ihre Vorlage und klicken Sie auf die Schaltfläche **Versionen**
3. Geben Sie im Versionen-Modal ein:
   - **Bezeichnung** :  Eine kurze Kennung für die Version (z. B. "v2"). Lassen Sie das Feld leer, vergibt das System automatisch eine fortlaufende Bezeichnung.
   - **Änderungsnotiz** :  Eine kurze Beschreibung, was in dieser Version geändert wurde
4. Klicken Sie auf **Veröffentlichen**

Der aktuelle Entwurf wird als neue Version gespeichert. Bestehende Verträge bleiben an die Version gebunden, mit der sie erstellt wurden, sodass das Veröffentlichen niemals historische Vertragstexte überschreibt.

### Versionsverlauf anzeigen

Der Versionsverlauf jeder Vorlage zeigt:

- Die Versionsbezeichnung (z. B. "v1", "v2")
- Die Änderungsnotiz und das Veröffentlichungsdatum
- Ein **Aktuell**-Badge auf der zuletzt veröffentlichten Version
- Ein **Archiviert**-Badge auf allen früheren Versionen

### Wie Versionen Verträge beeinflussen

Wenn ein Vertrag aus einer Vorlage erstellt wird, wird er auf die zum Zeitpunkt aktuelle Version festgelegt. Wenn Sie später eine neue Version der Vorlage veröffentlichen, rendern bestehende Verträge weiterhin aus ihrer festgelegten Version. Sie können daher Vorlagen sicher überarbeiten, ohne aktive Verträge zu verändern.

## Tipps

- Verwenden Sie Verträge zusammen mit [wiederkehrenden Rechnungen](/de/features/recurring-invoices) für verschiedene Abrechnungsszenarien
- Verknüpfen Sie Verträge mit Objekten für eine vollständige Mietverwaltung
- Setzen Sie Enddaten, um vor Vertragsablauf benachrichtigt zu werden
- Verwenden Sie den Vertragsfilter, um aktive und inaktive Verträge auf einen Blick zu sehen
- Filtern Sie nach Signaturstatus, um Verträge zu finden, die noch signiert werden müssen
- Fügen Sie Signierparteien beim Erstellen eines Vertrags hinzu, um die elektronische Signatur zu aktivieren
