---
title: Unternehmen einrichten
description: "Der Einrichtungsassistent füllt Unternehmensdaten, Steuerstatus und IBAN für Ihre erste Rechnung, mit KVK-Abfrage und Live-Vorschau."
last_verified: 2026-10-13
---

# Unternehmen einrichten

Beim ersten Anmelden führt MyCompanyDesk Sie durch einen kurzen **Einrichtungsassistenten** unter `/setup` (**Lass uns Ihr Unternehmen einrichten**). Der Assistent dreht sich um Ihre erste Rechnung: Er füllt den Absenderblock, Ihren USt.-Status und Ihre IBAN aus, mit einer Live-Vorschau der Rechnung daneben. Ihre Unternehmensdaten schlagen Sie im niederländischen Handelsregister (KVK) nach. Nichts ist endgültig: Jeder Schritt lässt sich überspringen, und alles kann später in den Einstellungen geändert werden.

## Wo Sie den Assistenten finden

- **Erste Anmeldung:** Der Assistent öffnet sich automatisch.
- **Später:** Solange Sie den Assistenten noch nicht abgeschlossen haben, öffnen Sie ihn direkt über `/setup` und machen dort weiter, wo Sie waren. Das Dashboard zeigt unter **Richten Sie das ein**, was noch offen ist. Nach dem Abschluss leitet `/setup` Sie zum Dashboard weiter; Ihre Daten ändern Sie dann in den Einstellungen.
- **Überspringen:** Auf jedem Schritt gibt es eine Schaltfläche **Jetzt überspringen**. Ihre bisherigen Antworten werden gespeichert.
- **Vor allem wegen der Website hier?** Im ersten Schritt steht die Frage **Sind Sie vor allem wegen Ihrer Website hier?** mit dem Link **Zuerst meine Website erstellen**. Er bringt Sie direkt zum Website-Assistenten.

Der Assistent hat drei Schritte: **Handelsregister**, **Start** und **MwSt. und IBAN**.

## Schritt 1: Ihre Unternehmensdaten (KVK)

Dieser Schritt füllt den Absenderblock Ihrer Rechnung. Geben Sie im Feld **Firmenname oder KVK-Nummer** Ihren Firmennamen oder Ihre KVK-Nummer ein und wählen Sie Ihr Unternehmen aus der Liste. MyCompanyDesk ruft dann Ihr KVK-Basisprofil ab und füllt Ihre Unternehmensdaten vor: juristischer Name, Handelsnamen, Rechtsform, Adresse und Geschäftstätigkeit. Es werden nur leere Felder gefüllt; was Sie bereits eingetragen haben, bleibt unverändert.

Haben Sie sich über die Website von MyCompanyDesk registriert und Ihr Unternehmen dort bereits gesucht, übernimmt der Assistent diese KVK-Nummer und wendet sie automatisch an, sobald Sie diesen Schritt erreichen.

Die Vorschau, die Sie dort gesehen haben, erkennt Ihre Branche zuerst am Firmennamen. Ist das nicht eindeutig, liest sie die Geschäftstätigkeit (SBI) aus Ihrem KVK-Basisprofil und lässt bei Bedarf eine KI die passendste Branche wählen. Passt nichts, zeigt sie ein neutrales Beispiel. Der Ort stammt aus Ihrer KVK-Eintragung, sofern vorhanden.

Kein Treffer oder keine KVK-Eintragung?

- **Manuell eintragen**: Geben Sie Firmenname, KVK-Nummer (optional), Adresse, Postleitzahl und Ort selbst ein und klicken Sie auf **Speichern und fortsetzen**.
- **Ich habe keinen Handelsregister-Eintrag**: Überspringen Sie die Suche und tragen Sie Ihre Daten später in den Einstellungen ein.

## Schritt 2: Womit möchten Sie beginnen?

Wählen Sie, was Sie zuerst brauchen:

- **Rechnungen und Angebote senden**: Sie gehen weiter zum letzten Schritt, MwSt. und IBAN.
- **Eine eigene Website**: Der Assistent schließt mit **Zu Ihrer Website** ab und bringt Sie zum Website-Assistenten.
- **E-Mail mit eigener Domain**: Der Assistent schließt mit **Zu Ihrer E-Mail** ab und bringt Sie zur Einrichtung Ihrer E-Mail.

Diese Wahl bestimmt nur, wo Sie beginnen. Nichts wird ein- oder ausgeschaltet; alles andere bleibt verfügbar.

## Schritt 3: MwSt. und IBAN

Dieser Schritt (**Wie werden Sie bezahlt?**) besteht aus zwei Teilen: Ihrem USt.-Status und Ihrer IBAN. Beide müssen beantwortet sein, bevor Sie weitermachen können; ist die Schaltfläche grau, steht der Grund direkt daneben.

**USt.-Status**

Wählen Sie eine von drei Optionen:

- **Ja, ich berechne MwSt.**: Geben Sie Ihre USt-IdNr. ein. Haben Sie sie gerade nicht zur Hand, klicken Sie auf **Ich kenne meine USt-IdNr. jetzt nicht, ich trage sie später ein**.
- **Nein, ich nehme an der KOR teil**: Sie haben sich bei der niederländischen Steuerbehörde für die Kleinunternehmerregelung angemeldet. Ihre Rechnungen werden ohne MwSt. erstellt und weisen auf die KOR hin.
- **Nein, ich bin befreit**: für umsatzsteuerbefreite Berufe, etwa Pflege durch einen registrierten Gesundheitsdienstleister.

Unsicher? Klicken Sie auf **Welche Wahl passt zu mir?** für eine kurze Erklärung. Sie können das später in den Einstellungen ändern.

**IBAN**

Der Assistent fragt nach der IBAN, auf die Kunden zahlen. Ihre IBAN steht auf Ihren Rechnungen, zusammen mit einem QR-Code, mit dem Kunden direkt bezahlen können. Geben Sie Ihre IBAN jetzt ein oder klicken Sie auf **Trage ich später ein**.

Überspringen Sie USt-IdNr. oder IBAN, fragt MyCompanyDesk beim Versand Ihrer ersten Rechnung noch einmal danach.

## Abschließen

Klicken Sie auf **Setup abschließen**. Der Assistent übernimmt Ihre Unternehmensdaten, Ihren USt.-Status, Ihre IBAN und die Standardeinstellungen und zeigt "Du kannst jetzt Rechnungen stellen". Von dort klicken Sie auf **Erste Rechnung erstellen** oder wählen "Noch kein Kunde oder Auftrag? Sieh dich zuerst in deinem Dashboard um". Die Absicherung Ihres Kontos und Ihre Website kommen später von selbst zur Sprache, unter **Richten Sie das ein** im Dashboard.

## Die Website: gebaut, wenn Sie sie öffnen, online, wenn Sie veröffentlichen

MyCompanyDesk legt keine Website unter Ihrem Arbeitsbereich an, bevor Sie danach fragen. Registrieren Sie sich und stellen Sie Rechnungen, ohne den Bereich Website je zu öffnen, dann wartet dort nichts Halbfertiges.

Beim ersten Öffnen von **Website** hilft Ihnen ein kurzer Website-Assistent beim Start: was Sie tun, was die Website vor allem erreichen soll, Ihre Farben, Ihr Logo und auf Wunsch eigene Fotos. Danach wird Ihre Website als Entwurf erstellt, mit Ihren Registrierungsdaten an den richtigen Stellen. Nichts geht von selbst online: Veröffentlichen bleibt Ihr Moment. Erst bei der ersten Veröffentlichung erhält Ihre Website ihre Adresse, die schlichte Form Ihres Firmennamens unter mycompanydesk.site.

## Später ändern

Alles, was der Assistent einstellt, lässt sich in den **Einstellungen** bearbeiten:

| Ich möchte ändern... | Öffnen |
|---|---|
| Firmenname, Adresse, KVK- oder USt-Nummer | **Unternehmensdaten** |
| Logo und Markenfarbe | **Logo und Farbe** |
| Wie Kunden Sie bezahlen: IBAN, iDEAL, PayPal | **Bezahlung** |
| Zahlungsziel, Erinnerungen, Gültigkeit von Angeboten | **Rechnungen und Angebote** |
| Das Erscheinungsbild Ihrer Rechnungs-PDFs | **Rechnungsgestaltung** |
| Ihre Website und Domain | **Ihre Website und Domain** |

Die vollständige Übersicht finden Sie in der [Einstellungsübersicht](/de/settings/).

## Nächste Schritte

Ihr Unternehmen ist eingerichtet. Zeit, [Ihre erste Rechnung zu erstellen](/de/getting-started/first-invoice).
