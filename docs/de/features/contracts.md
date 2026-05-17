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

## Vertragsstatus

| Status | Beschreibung |
|---|---|
| **Aktiv** | Derzeit in Kraft, generiert Rechnungen |
| **Inaktiv** | Pausiert — keine Rechnungen werden generiert |

## Automatische Rechnungsstellung

Aktive Verträge mit einem Wiederholungsplan generieren automatisch Rechnungen in jedem Abrechnungszeitraum. Das System:

1. Erstellt einen Rechnungsentwurf basierend auf den Vertragsbedingungen
2. Wendet den richtigen Kunden, Betrag und die Beschreibung an
3. Folgt Ihren Rechnungsnummerierungseinstellungen

Sie können generierte Rechnungen manuell überprüfen und versenden oder den automatischen Versand konfigurieren.

## Verknüpfung mit Vermögenswerten

Verträge können mit [Objekten/Vermögenswerten](/de/features/objects) für die Mietverwaltung verknüpft werden:

- Verknüpfen Sie einen Vertrag mit einer Immobilie, einem Fahrzeug oder einem Gerät
- Verfolgen Sie, welche Vermögenswerte derzeit vermietet sind und an wen
- Sehen Sie den Vertragsverlauf pro Vermögenswert

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
