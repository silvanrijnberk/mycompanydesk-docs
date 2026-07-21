---
title: Unternehmen einrichten
last_verified: 2026-07-21
---

# Unternehmen einrichten

Beim ersten Anmelden führt MyCompanyDesk Sie durch einen kurzen **Einrichtungsassistenten** unter `/setup`. Der Assistent dreht sich um Ihre erste Rechnung: Er fragt, wen Sie abrechnen möchten, und füllt währenddessen den Absenderblock, Zahlungsdetails und den USt.-Status aus, mit einer Live-Vorschau der Rechnung. Sie können Ihr Unternehmen auch im niederländischen Handelsregister (KVK) nachschlagen lassen. Nichts ist endgültig: Jeder Schritt lässt sich überspringen, und alles kann später in den Einstellungen geändert werden.

## Wo Sie den Assistenten finden

- **Erste Anmeldung:** Der Assistent öffnet sich automatisch.
- **Später:** Solange die Einrichtung nicht abgeschlossen ist, zeigt ein Banner oben auf dem Dashboard eine Schaltfläche zurück in den Assistenten. Sie können das Banner ausblenden oder jederzeit direkt zu `/setup` gehen.
- **Überspringen:** Auf jedem Schritt gibt es eine Schaltfläche **Vorerst überspringen**. Ihre bisherigen Antworten werden gespeichert, Sie machen später einfach dort weiter, wo Sie waren.

## Schritt 1: Wen Sie abrechnen möchten

Der Assistent öffnet mit einer Live-Vorschau der Rechnung und fragt nach dem Kunden. Beginnen Sie, den Kundennamen zu tippen.

- Wenn der Kunde bereits in Ihrem Arbeitsbereich existiert, wählen Sie ihn aus der Liste aus.
- Um einen neuen Kunden direkt zu erstellen, tippen Sie den Namen und klicken Sie auf **Kunde erstellen**. Das Inline-Formular fragt nach Kundennamen und Adresse. Die KVK-Suche kann niederländische Unternehmen vorschlagen und die Adresse automatisch ausfüllen; private Kunden fügen Sie hinzu, indem Sie die Adresse von Hand eingeben.
- Die Kunden-E-Mail ist optional und wird nur verwendet, wenn Sie die Rechnung senden.

Nur der Kundenname ist erforderlich, um fortzufahren. Die restlichen Kundendaten können Sie später auf der Kundenseite vervollständigen.

## Schritt 2: Ihre Unternehmensdaten (KVK)

Dieser Schritt füllt den Absenderblock Ihrer Rechnung. Wenn Sie sich über die Marketingseite registriert und Ihr Unternehmen in der KVK-Suche dort ausgewählt haben, wird Ihre KVK-Nummer bereits in den Assistenten übernommen und sobald Sie diesen Schritt erreichen automatisch angewendet. MyCompanyDesk ruft dann Ihr KVK-Basisprofil ab und füllt Ihre Unternehmensdaten vor: juristischer Name, Handelsnamen, Rechtsform, Adresse und Geschäftstätigkeit. Es werden nur leere Felder gefüllt; was Sie bereits eingetragen haben, bleibt unverändert.

Die Vorschau auf der Marketingseite, die Sie in den Assistenten führt, erkennt jetzt ein breiteres Spektrum an Branchen. Sie prüft zuerst, ob Ihr Gewerk aus dem Firmennamen hervorgeht. Ist das unklar, kann sie auch die SBI-Branche aus Ihrem KVK-Basisprofil lesen und, falls es dann immer noch nicht passt, einen leichten AI-Classifier das passendste Gewerk wählen lassen. Passt nichts, zeigt die Vorschau eine neutrale Selbstständigen-Persona anstelle eines generischen Handwerker-Platzhalters. Der angezeigte Ort stammt aus Ihrer KVK-Registrierung, sofern vorhanden.

Kein Treffer oder keine KVK-Registrierung?

- **Manuell eintragen:** Geben Sie Firmennamen, KVK-Nummer, Adresse, Postleitzahl und Ort selbst ein.
- **Kein Handelsregister-Eintrag?**: Überspringen Sie die Suche ganz und ergänzen Sie Ihre Daten später in den Einstellungen.

## Schritt 3: Wie Sie bezahlt werden möchten

Der Assistent fragt nach der IBAN, auf die Kunden überweisen. Sie können jetzt Ihre Geschäfts-IBAN eingeben oder auf **IBAN später hinzufügen** klicken, um diesen Schritt zu überspringen. Beachten Sie, dass ein Kunde Sie ohne IBAN kaum bequem bezahlen kann.

Wenn Sie noch auf Ihre USt-IdNr. vom Finanzamt warten oder unter die Kleinunternehmerregelung fallen, können Sie trotzdem fortfahren und die USt-IdNr. später hinzufügen.

## Schritt 4: Einrichtung abschließen

Der letzte Schritt bestätigt Ihre 60-tägige Pro-Testphase, kostenlos und ohne Kreditkarte, und wendet alles an. Vom Abschlussbildschirm aus werden auch optionale nächste Schritte angeboten, etwa das Einrichten einer Website. Eine Website einzurichten ist optional, außer wenn Sie über die KVK-Suche auf der Landing-Page gestartet sind: In diesem Fall wurde bereits eine thematische Website erstellt, die im Website-Editor auf Sie wartet.

Klicken Sie auf **Einrichtung abschließen** und der Assistent wendet Ihre Unternehmensdaten, USt.-Status, IBAN und Standardeinstellungen an und bringt Sie zu Ihrem Dashboard.

## Später ändern

Alles, was der Assistent einstellt, lässt sich in den **Einstellungen** bearbeiten:

| Ich möchte ändern... | Öffnen |
|---|---|
| Firmenname, Adresse, KVK- oder USt-Nummer | **Unternehmensdaten** |
| Logo und Markenfarbe | **Logo und Farbe** |
| Wie Kunden Sie bezahlen: IBAN, iDEAL, PayPal | **Zahlung** |
| Zahlungsziel, Erinnerungen, Gültigkeit von Angeboten | **Rechnungen und Angebote** |
| Das Erscheinungsbild Ihrer Rechnungs-PDFs | **Rechnungsdesign** |
| Ihre Website und Domain | **Deine Website und Domain** |

Die vollständige Übersicht finden Sie in der [Einstellungsübersicht](/de/settings/). Sie können den Assistenten auch jederzeit über `/setup` erneut durchlaufen; er füllt leere Felder auf, statt zu überschreiben, was Sie selbst eingestellt haben.

## Nächste Schritte

Ihr Unternehmen ist eingerichtet. Zeit, [Ihre erste Rechnung zu erstellen](/de/getting-started/first-invoice).
