---
title: Peppol E-Rechnung
last_verified: 2026-08-15
---

# Peppol E-Rechnung

Senden Sie Rechnungen und Gutschriften als strukturierte E-Rechnung über das Peppol-Netzwerk. Ihr Kunde empfängt sie direkt in seiner Buchhaltung, ohne dass Sie ausschließlich auf PDFs oder E-Mail angewiesen sind.

## Übersicht

Mit Peppol E-Rechnung senden Sie Rechnungen und Gutschriften als strukturierte E-Rechnung über das Peppol-Netzwerk und können auch Eingangsrechnungen von Lieferanten auf dieselbe Weise empfangen. Wenn Sie senden, wählen Sie pro Rechnung aus, ob Sie sie per E-Mail oder als E-Rechnung über Peppol zustellen. Die Rechnung bleibt in MyCompanyDesk dasselbe Dokument; nur der Zustellkanal ändert sich.

Senden ist nützlich, wenn Ihr Kunde E-Rechnungen wünscht. Empfangen wandelt Lieferantenrechnungen automatisch in vorausgefüllte Entwürfe um, die Sie nur noch prüfen müssen.

Wenn der Lieferant ebenfalls MyCompanyDesk nutzt, können Sie seine strukturierte Rechnung auch direkt ohne Peppol empfangen. Siehe [Rechnungen von anderen MyCompanyDesk-Nutzern empfangen](/de/features/invoices#rechnungen-von-anderen-mycompanydesk-nutzern-empfangen).

## Verfügbarkeit

Peppol E-Rechnung ist im Pro-Tarif verfügbar. Workspaces auf Free oder Starter sehen die Optionen zum E-Rechnungsversand und -empfang nicht.

## Bevor Sie senden können

Bevor Sie zum ersten Mal über Peppol senden, benötigt MyCompanyDesk Ihre Unternehmensdaten. Diese werden verwendet, um Sie über den verbundenen Zugangspunkt im Peppol-Netzwerk zu registrieren:

- Firmenname
- Handelsregisternummer
- USt-IdNr.
- IBAN
- Geschäftsadresse (Straße, Postleitzahl, Ort)

Fehlt ein Wert, fragt die Rechnungseinstellungsseite Sie, diesen zu ergänzen, bevor Sie E-Rechnung aktivieren können. Ihre bestehenden Unternehmensprofilfelder werden wiederverwendet, Sie müssen sie nicht zweimal eingeben.

Wenn Sie E-Rechnung aktivieren, stimmen Sie zu, Handelsregisternummer, USt-IdNr. und Geschäftsadresse beim Peppol-Zugangspunkt zu registrieren. MyCompanyDesk verbindet sich über einen Recommand-Zugangspunkt mit dem Netzwerk.

## Eine E-Rechnung senden

1. Erstellen Sie eine Rechnung oder Gutschrift wie gewohnt
2. Öffnen Sie die Detailseite
3. Klicken Sie auf **Senden**
4. Wählen Sie **E-Rechnung (Peppol)** als Zustellmethode
5. Prüfen Sie die Vorschau
6. Klicken Sie auf **E-Rechnung über Peppol senden**

Die Rechnung wird digital im Buchhaltungssystem Ihres Kunden zugestellt. Eine erfolgreiche Zustellung wird in MyCompanyDesk bestätigt; wenn die Zustellung fehlschlägt, sehen Sie eine Fehlermeldung und können es erneut versuchen oder stattdessen per E-Mail senden.

E-Mail und Peppol schließen sich nicht aus. Sie können heute per E-Mail senden und morgen als E-Rechnung, pro Rechnung wählen, was zum Kunden passt.

## Eine E-Rechnung erneut senden

Eine Peppol-Sendung ist eine echte, rechtsverbindliche E-Rechnung im Netzwerk, nicht nur eine Kopie einer E-Mail. Deshalb erzeugt ein zweiter Versand derselben Rechnung zwei separate E-Rechnungen. MyCompanyDesk blockt einen versehentlichen zweiten Peppol-Versand: wurde die Rechnung bereits über Peppol gesendet oder zugestellt, erscheint beim erneuten Klick auf **E-Rechnung über Peppol senden** ein Bestätigungsdialog statt sofort zu senden.

Der Dialog zeigt an, wann die Rechnung erstmalig gesendet wurde, und fragt, ob Sie wirklich eine zweite E-Rechnung senden möchten. Wenn Sie bestätigen, wird eine neue Peppol-E-Rechnung versandt. Wenn Sie abbrechen, wird nichts gesendet und die bestehende Peppol-Zustellung bleibt unverändert.

Wenn Sie nur eine Erinnerung oder ein aktuelles PDF senden möchten, verwenden Sie stattdessen E-Mail. E-Mail-Neuversendungen erzeugen keine doppelten Peppol-E-Rechnungen.

## E-Rechnungen empfangen

Wenn der Empfang aktiviert ist, können Lieferanten Ihnen E-Rechnungen über Peppol senden. MyCompanyDesk wandelt jede eingehende E-Rechnung in einen vorausgefüllten Ausgabenentwurf um, der bereits Lieferant, Betrag, USt. und Datum enthält. Der Entwurf erscheint unter Ausgaben zur Prüfung; Sie können ihn wie jede andere Ausgabe prüfen, bearbeiten und buchen.

### Verfügbarkeit

Empfangen ist Teil von Peppol E-Rechnung und im Pro-Tarif verfügbar. Sie müssen den E-Rechnungsversand bereits aktiviert haben, bevor Sie den Empfang einschalten können.

### Bevor Sie empfangen können

Stellen Sie sicher, dass Ihr Unternehmensprofil dieselben Angaben enthält wie für den Versand:

- Firmenname
- Handelsregisternummer
- USt-IdNr.
- IBAN
- Geschäftsadresse (Straße, Postleitzahl, Ort)

Wenn Sie den Empfang aktivieren, werden Handelsregisternummer und USt-IdNr. als Peppol-Empfänger registriert. Ein Unternehmen kann nur über ein Buchhaltungspaket gleichzeitig empfangen, da dieselbe Handelsregisternummer und USt-IdNr. nicht bei mehreren Providern hinterlegt sein darf.

### Empfangen aktivieren

1. Öffnen Sie **Einstellungen > Rechnungen** (`/settings/facturen`)
2. Klicken Sie im Peppol-Bereich auf **Empfangen aktivieren**
3. Bestätigen Sie, dass Handelsregisternummer und USt-IdNr. als Empfänger im Peppol-Netzwerk registriert werden dürfen

Ab dann kommen eingehende E-Rechnungen automatisch als Ausgabenentwürfe an. Es gibt keinen manuellen Importschritt.

### Unterstützte Währungen

MyCompanyDesk akzeptiert nur eingehende Peppol-E-Rechnungen in Euro (EUR). E-Rechnungen, die in einer anderen Währung eingehen, werden abgelehnt.

### Eingehende E-Rechnungen prüfen

Jede E-Rechnung landet als Entwurf unter **Ausgaben**. Der Entwurf ist mit Lieferant, Beschreibung, Betrag, USt. und Rechnungsdatum aus der eingehenden E-Rechnung vorausgefüllt. Wenn der Lieferant Reverse Charge angewendet hat, klassifiziert MyCompanyDesk dies als Reverse-Charge und belässt den USt.-Satz bei 0 %, sodass er in die richtige Rubrik Ihrer USt.-Erklärung fällt. Prüfen Sie die Angaben, fügen Sie bei Bedarf einen Beleg hinzu und speichern Sie ihn als reguläre Ausgabe.

### Empfangen deaktivieren

Öffnen Sie **Einstellungen > Rechnungen**, gehen Sie zum Peppol-Bereich und klicken Sie auf **Empfangen deaktivieren**. Sie erhalten keine neuen E-Rechnungen mehr über Peppol, aber bestehende Entwürfe und gebuchte Ausgaben bleiben unverändert. Sie können den Empfang jederzeit wieder aktivieren.

## Peppol E-Rechnung deaktivieren

Wenn Sie über MyCompanyDesk keine E-Rechnungen mehr senden oder empfangen möchten, können Sie Peppol E-Rechnung komplett deaktivieren. Dadurch wird Ihre Unternehmensregistrierung aus dem Peppol-Netzwerk entfernt und Ihre Identifikationsmerkmale freigegeben. Bereits gesendete Rechnungen und gebuchte Ausgaben bleiben bestehen.

So deaktivieren Sie Peppol E-Rechnung:

1. Öffnen Sie **Einstellungen > Rechnungen** (`/settings/facturen`)
2. Klicken Sie im Peppol-Bereich auf **E-Rechnung deaktivieren**
3. Bestätigen Sie, dass Sie Ihr Unternehmen aus dem Peppol-Netzwerk abmelden möchten

Nach der Bestätigung stoppen Senden und Empfang sofort. Wenn Sie Peppol später erneut nutzen möchten, können Sie E-Rechnung auf derselben Seite wieder aktivieren. Da Ihre frühere Registrierung dann entfernt wurde, müssen Sie die Identitätsprüfung erneut durchlaufen.

## Unterstützte Dokumenttypen

- **Rechnung** — Standard-Abrechnungsdokument
- **Gutschrift** — Korrektur für Rückerstattungen oder Anpassungen

## Was Ihr Kunde benötigt

Ihr Kunde muss über das Peppol-Netzwerk erreichbar sein. Das bedeutet in der Praxis, dass seine Buchhaltungssoftware an Peppol angebunden ist und er seine Peppol-Empfängerkennung mit Ihnen geteilt hat. MyCompanyDesk prüft den Empfänger vor dem Senden; ist der Kunde nicht erreichbar, schlägt der Versand fehl und Sie können auf E-Mail ausweichen.

## Fehlerbehebung

**Die Peppol-Option wird nicht angezeigt.** Prüfen Sie, ob Ihr Workspace im Pro-Tarif ist und E-Rechnung in den Rechnungseinstellungen aktiviert ist. Prüfen Sie auch, ob Ihr Unternehmensprofil alle erforderlichen Felder enthält.

**Senden fehlgeschlagen.** Ein fehlgeschlagener Peppol-Versand bedeutet meist, dass der Empfänger im Netzwerk nicht erreichbar war oder ein Pflichtfeld der Rechnung fehlte. Beheben Sie das Problem und versuchen Sie es erneut, oder senden Sie per E-Mail, um den Workflow weiterlaufen zu lassen.

**Ich habe E-Rechnung aktiviert, möchte es aber wieder deaktivieren.** Öffnen Sie die Rechnungseinstellungen und klicken Sie auf **E-Rechnung deaktivieren**. Damit wird Ihre Peppol-Registrierung entfernt und Senden und Empfangen stoppen. Bereits gesendete Rechnungen und gebuchte Ausgaben bleiben unverändert. Bei einer späteren Neuaaktivierung müssen Sie Ihre Identität erneut prüfen lassen.

**Empfangen lässt sich wegen eines Konflikts nicht aktivieren.** Ihre Handelsregisternummer oder USt-IdNr. ist bereits als Peppol-Empfänger bei einem anderen Buchhaltungspaket oder Provider registriert. Deaktivieren Sie den Empfang dort zuerst und aktivieren Sie ihn dann in MyCompanyDesk. Bis dahin können Sie weiterhin E-Rechnungen aus MyCompanyDesk versenden.

**Empfangen lässt sich nicht aktivieren: Unternehmensdaten fehlen.** Wenn der Peppol-Empfang nicht aktiviert werden kann, weil Ihr Unternehmensprofil keine Handelsregisternummer oder USt-IdNr. enthält, gibt MyCompanyDesk einen klaren 422-Fehler zurück. Ergänzen Sie die fehlende Nummer in Ihrem Unternehmensprofil und aktivieren Sie den Empfang danach erneut.

**Eine empfangene E-Rechnung stimmt nicht.** Öffnen Sie den Ausgabenentwurf, korrigieren Sie Lieferant, Betrag, USt. oder Beschreibung und speichern Sie ihn. Die ursprünglichen E-Rechnungsdaten bleiben in den Notizen der Ausgabe zur Kontrolle erhalten.

**Ich habe den Empfang deaktiviert, aber es tauchen noch Entwürfe auf.** Entwürfe, die bereits vor der Deaktivierung eingegangen sind, bleiben in Ihren Ausgaben; die Deaktivierung stoppt nur den Eingang neuer E-Rechnungen.

## Verwandt

- [Rechnungen](/de/features/invoices) — Rechnungen erstellen und senden
- [Einstellungen: Abonnement und Zahlungen](/de/settings/billing) — welche Abonnements Peppol E-Rechnung enthalten
