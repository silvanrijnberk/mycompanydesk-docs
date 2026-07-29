---
title: Dokumente
---

# Dokumente

Speichern, verfolgen und digital signieren von Vereinbarungen ohne Preis — wie Allgemeine Geschäftsbedingungen, Geheimhaltungsvereinbarungen und Auftragsverarbeitungsverträge.

## Überblick

Dokumente dienen der Dokumentation von Vereinbarungen mit Kunden oder Partnern, die keine Rechnungen, Angebote oder wiederkehrende Verträge sind. Typische Anwendungsfälle:

- **Allgemeine Geschäftsbedingungen** — nachweisen, dass der Kunde sie vor Abschluss einer Vereinbarung erhalten hat.
- **Auftragsverarbeitungsvertrag** — DSGVO-Auftragsverarbeitungsvereinbarungen dokumentieren.
- **Geheimhaltungsvereinbarung (NDA)** — eine unterschriebene Geheimhaltungserklärung speichern.
- **Sonstiges** — jedes andere Dokument, das Sie speichern, senden und ggf. signieren lassen möchten.

::: info
Das Dokumentenmodul ist optional. Aktivieren Sie es unter **Unternehmen > Funktionen**, falls es nicht im Menü erscheint.
:::

## Ein Dokument erstellen

1. Gehen Sie zu **Dokumente > Neues Dokument**
2. Wählen Sie eine Art: **Allgemeine Geschäftsbedingungen**, **Auftragsverarbeitungsvertrag**, **Geheimhaltung** oder **Sonstiges**
3. Füllen Sie aus:
   - **Titel** — ein beschreibender Name
   - **Kunde** — optional; verknüpfen Sie das Dokument mit einem Kunden
   - **Inhalt** — der Text, den der Unterzeichner zu sehen bekommt
4. Klicken Sie auf **Speichern**

Sie können ein Dokument auf Basis einer Vorlage erstellen oder von Grund auf neu anlegen. Dokumente, die aus einer Vorlage erstellt wurden, rendern den Vorlagentext zum Zeitpunkt der Erstellung. Spätere Vorlagenänderungen wirken sich nicht auf bereits erstellte Dokumente aus.

## AGB übergeben

MyCompanyDesk protokolliert, wann Sie Allgemeine Geschäftsbedingungen an einen Kunden übergeben haben:

1. Öffnen Sie die Detailseite des Dokuments
2. Klicken Sie auf **Als übergeben protokollieren**
3. Wählen Sie das Datum, an dem Sie die AGB an den Kunden übergeben haben

Danach zeigt die Detailseite ein Badge **Übergeben** mit dem Datum. Ist das Dokument mit einem Kunden verknüpft, ist dies auch in der Dokumentenliste sichtbar.

::: tip
Senden Sie Allgemeine Geschäftsbedingungen zusammen mit einem Angebot und protokollieren Sie das Datum hier. So haben Sie eine klare Nachweiskette, falls die AGB jemals angefochten werden.
:::

## Signieren

Dokumente verwenden denselben digitalen Signatur-Workflow wie Verträge. Sie fügen über das Dokumentenformular eine oder mehrere Parteien hinzu. Jede Partei erhält einen Signatur-Link per E-Mail.

Wenn ein Dokument die Signierung unterstützt, zeigt die Detailseite eine Signatur-Karte mit:

- Dem Status jeder Partei (Entwurf, gesendet, teilweise signiert, signiert, abgelaufen oder beendet)
- Einer Schaltfläche **Anzeigen**, die eine Inline-Vorschau des signierten Dokuments öffnet
- Einer Download-Schaltfläche zum Speichern der PDF

### Gegenseitige Signatur

Dokumente werden gegenseitig signiert: Die Gegenpartei signiert zuerst über einen sicheren Link, danach signieren Sie als Eigentümer. Erst nach beiden Unterschriften lautet der Status **Signiert**.

### Signatur in der Dokumentenliste

Die Dokumentenliste zeigt eine Spalte **Signatur** mit dem Status jedes Dokuments, für das digitale Signatur aktiviert ist. Status erscheinen als farbige Badges: Entwurf, gesendet, teilweise signiert und signiert.

Über der Liste befindet sich ein Filter, mit dem Sie nach Signaturstatus filtern oder nach Dokumenten ohne digitale Signatur suchen können.

### SMS-Verifizierung

Signatur-Links können eine SMS-Verifizierung verlangen, bevor eine Partei das Dokument einsehen und signieren kann. Wenn aktiviert, muss der Unterzeichner eine Mobilnummer eingeben und einen 6-stelligen Code per SMS bestätigen.

- **Code senden** — nach Eingabe der Mobilnummer erhält der Unterzeichner einen Code
- **Code verifizieren** — der Unterzeichner gibt den 6-stelligen Code ein, um Zugriff auf die Nummer nachzuweisen
- **Verifiziert-Badge** — danach erscheint ein Badge mit den letzten vier Ziffern der Nummer

Bei Eingabe eines falschen Codes kann der Unterzeichner einen neuen anfordern. Die SMS-Verifizierung wird pro Signiersitzung konfiguriert und gilt für alle Parteien.

### Signierte PDF und Audit-Trail

Nachdem das Dokument vollständig signiert wurde, erhalten beide Parteien eine signierte PDF per E-Mail. Die PDF enthält den Dokumententext sowie eine Signaturseite mit einem Audit-Trail (IP-Adresse und Zeitstempel). Sie können die PDF auch jederzeit über die Detailseite herunterladen.

## Dokumentenstatus

| Status | Beschreibung |
|---|---|
| **Entwurf** | Erstellt, aber noch nicht gesendet |
| **Gesendet** | Signatur-Einladung an eine oder mehrere Parteien gesendet |
| **Teilweise signiert** | Mindestens eine Partei hat signiert; letzter Gegengruß noch ausstehend |
| **Signiert** | Alle erforderlichen Unterschriften sind erfasst |
| **Abgelaufen** | Der Signatur-Link ist abgelaufen, bevor alle Parteien signiert haben |
| **Beendet** | Nicht mehr aktiv |

## Tipps

- Verknüpfen Sie ein Dokument mit einem Kunden, damit Sie es später schnell wiederfinden
- Protokollieren Sie, wann Sie Allgemeine Geschäftsbedingungen übergeben haben — das ist bei Streitigkeiten wichtig
- Fügen Sie beim Erstellen eines Dokuments Signaturparteien hinzu, um digitale Signatur zu aktivieren
- Verwenden Sie den Signaturstatus-Filter, um zu sehen, welche Dokumente noch eine Unterschrift benötigen
