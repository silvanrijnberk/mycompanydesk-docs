---
title: "Fehlgeschlagene Rechnungs-E-Mail"
description: "So beheben Sie eine fehlgeschlagene Rechnungs-E-Mail und wissen, was zu tun ist, wenn eine Nachricht zur Inhaltsprüfung zurückgehalten wird."
last_verified: 2026-10-01
chatbot:
  triggers: ["failed invoice email", "invoice email failed", "failed send invoice", "invoice not sending", "invoice email issue", "fix failed invoice email", "mislukte factuur-e-mail", "factuurmail mislukt", "factuur e-mail mislukt", "factuur versturen mislukt", "hoe los ik een mislukte factuur-e-mail op", "te veel ontvangers", "inhoudscontrole", "bericht vastgehouden", "fehlgeschlagene rechnungs-e-mail", "rechnungs-e-mail fehlgeschlagen", "rechnung senden fehlgeschlagen", "wie behebe ich eine fehlgeschlagene rechnungs-e-mail", "e-mail de facture echoue", "email facture echoue", "envoi facture echec", "comment corriger un e-mail de facture echoue", "recipient cap", "content hold", "message retenu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open email settings", to: "/settings/email" }
  follow_up: ["How do I change the customer email?", "How do I preview the invoice first?", "Where do I check email delivery settings?"]
---

So beheben Sie eine fehlgeschlagene Rechnungs-E-Mail:
1. Prüfen Sie, ob beim Kunden die richtige E-Mail-Adresse hinterlegt ist
2. Öffnen Sie die Detailseite der Rechnung und sehen Sie sich den Zustellstatus oder eine angezeigte Fehlermeldung an
3. Überprüfen Sie Ihre E-Mail-Einstellungen unter Einstellungen → "E-Mail"
4. Senden Sie die Rechnung erneut; auch Entwürfe lassen sich per E-Mail versenden, Senden ist die Hauptaktion und schließt den Entwurf im selben Schritt ab
5. Kommt die E-Mail weiterhin nicht an, bitten Sie den Kunden, den Spam- oder Junk-Ordner zu prüfen

## Neue Konten und Anti-Missbrauchsgrenzen

Wurde die Rechnung gerade aus einem neuen Arbeitsbereich verschickt? Dann kann der Fehler an einer unserer Anti-Missbrauchsgrenzen liegen:

- Die Nachricht hat zu viele Empfänger (an, cc und bcc zusammen). Die Fehlermeldung nennt das aktuelle Limit; teilen Sie die Nachricht in mehrere E-Mails auf. Das kann vorübergehend auch ein niedrigeres Limit sein, etwa ein Empfänger pro Nachricht. Wenn Sie mehr benötigen, wenden Sie sich an uns.
- Die Nachricht wird zur Inhaltsprüfung zurückgehalten. Was das bedeutet und was Sie dann tun, steht weiter unten.

## Ihre Nachricht wird zur Inhaltsprüfung zurückgehalten

Meldet die App, dass die Nachricht noch nicht gesendet wurde, weil wir sie zuerst prüfen? Dann hält unsere Inhaltsprüfung für ausgehende Post die Nachricht kurz zurück. Das passiert dabei:

- **Die Nachricht wurde nicht gesendet.** Sie liegt auch in keiner Warteschlange und geht nicht von selbst nachträglich hinaus. Ihr Kunde hat also noch nichts erhalten.
- **Wir sehen uns Text und Umstände an.** Dazu gehören die Zahl der Empfänger, der Betrag und wie neu Ihr Arbeitsbereich ist. Die Prüfung zielt auf Massenpost an Unbekannte und auf Missbrauch. Eine gewöhnliche Rechnung oder Mail an Ihre eigenen Kunden wird selten zurückgehalten.
- **Meist sind Sie innerhalb einer Stunde durch.** Nach der Freigabe erhalten Sie eine Benachrichtigung in der App. Senden Sie die Nachricht dann selbst erneut. Ab dann gehen Ihre Nachrichten sofort hinaus.
- **Die Prüfung gilt für Rechnungen und Angebote, einzelne E-Mails und den Posteingang.** Post an Ihren Steuerberater gehört nicht dazu.
- **Eine Störung der Prüfung hält Ihre Post nie auf.** Geht bei uns etwas schief, geht Ihre Nachricht einfach durch.

Die Prüfung überspringt sich selbst, sobald sich Ihr Arbeitsbereich bewährt hat: mit einer verifizierten Absendedomain, einem bezahlten Abonnement (eine Testphase zählt nicht), einer Reihe reibungslos zugestellter Nachrichten oder nachdem wir eine zurückgehaltene Nachricht freigegeben haben. Das Eintragen Ihrer KVK-Nummer hilft hier nicht: Das Register zeigt nicht, wer tatsächlich hinter einem Konto steckt.

Wird Ihre Nachricht nach einer Stunde immer noch zurückgehalten, oder kommt keine Benachrichtigung? Wenden Sie sich an uns, dann sehen wir nach.

Tipp: Sehen Sie sich zuerst die Vorschau der Rechnung an, wenn Sie vor dem erneuten Senden Kunde und Dokument bestätigen möchten.
