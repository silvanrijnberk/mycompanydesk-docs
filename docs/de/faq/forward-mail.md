---
title: "Mail an Gmail oder eine andere Adresse weiterleiten"
description: "Leiten Sie alle eingehenden Mails automatisch an Ihre eigene E-Mail-Adresse wie Gmail weiter, oder senden Sie per Regel eine Kopie an eine andere Adresse."
last_verified: 2026-09-24
chatbot:
  triggers: ["doorsturen", "automatisch doorsturen", "mail doorsturen", "doorsturen naar gmail", "alle mail doorsturen", "forward", "forwarding", "kopie naar gmail", "weiterleiten", "transférer", "mail weiterleiten", "e-mail weiterleiten", "an gmail weiterleiten", "automatisch weiterleiten", "alle mails weiterleiten", "kopie an gmail", "weiterleitung"]
  actions:
    - { label: "Zu Adressen", to: "/inbox/settings" }
    - { label: "Zu Regeln & Routing", to: "/inbox/regels" }
  follow_up: ["Kann ich meine Mail in Outlook auf dem Handy lesen?", "Wie lege ich eine zusätzliche E-Mail-Adresse an?"]
---

# Mail an Gmail oder eine andere Adresse weiterleiten

Mail, die auf Ihrer eigenen Domain im MyCompanyDesk-Posteingang (Office) ankommt, können Sie automatisch weiterleiten lassen. Dafür gibt es zwei Wege.

Das ist etwas anderes als **Gmail verbinden** unter **Einstellungen** → **E-Mail**: Damit legen Sie nur fest, von welchem Konto Sie Rechnungen und Angebote versenden. Es ist auch etwas anderes als die Weiterleitung von Rechnungen an Ihren Steuerberater.

## Alle Mail automatisch an Ihre eigene E-Mail-Adresse weiterleiten

1. Öffnen Sie **Posteingang** und wählen Sie oben **Adressen**.
2. Scrollen Sie zur Karte **An E-Mail weiterleiten**.
3. Schalten Sie **Nachrichten weiterleiten** ein.

Sie erhalten dann von jeder eingehenden Nachricht, aus all Ihren Postfächern, eine Kopie an die E-Mail-Adresse, mit der Sie sich bei MyCompanyDesk anmelden. Melden Sie sich mit einer Gmail-Adresse an, landet also Ihre gesamte Mail in Gmail. Diese Option ist standardmäßig eingeschaltet.

- Das Gespräch bleibt zusätzlich ganz normal in Ihrem Posteingang.
- Antworten Sie aus Gmail oder Ihrer Mail-App auf eine solche Kopie, geht Ihre Antwort an den ursprünglichen Absender und landet im richtigen Gespräch in MyCompanyDesk.
- Anhänge werden in der Kopie nicht mitgeschickt. Sie öffnen sie im Posteingang; jede Kopie enthält einen Link.
- Spam wird nicht weitergeleitet.
- Die Zieladresse wählen Sie hier nicht selbst: Es ist immer Ihre Login-E-Mail-Adresse. Möchten Sie an eine andere Adresse weiterleiten, nutzen Sie eine Regel (siehe unten) oder ändern Sie Ihre Login-E-Mail-Adresse, siehe [E-Mail-Adresse ändern](/de/faq/change-email).

## Mit einer Regel an eine andere Adresse weiterleiten

Mit einer Regel senden Sie eine Kopie an jede beliebige Adresse, zum Beispiel an Ihr Gmail oder an einen Kollegen.

1. Öffnen Sie **Posteingang** und wählen Sie oben **Regeln & Routing**.
2. Klicken Sie auf **Neue Regel** und geben Sie ihr einen Namen.
3. Wählen Sie bei **Wenn** die Option **Landet in Postfach** und bei **Wert zum Abgleich** das Postfach, zum Beispiel `info@ihrefirma.de`.
4. Wählen Sie bei **Dann** die Option **Kopie weiterleiten an** und tragen Sie die Adresse ein, zum Beispiel `ihrname@gmail.com`.
5. Speichern Sie die Regel.

Möchten Sie alle Mail weiterleiten, legen Sie eine Regel pro Postfach an. Sie können auch nach Absender oder Betreff weiterleiten.

Gut zu wissen:

- Sie können höchstens 5 Weiterleitungsregeln haben, und pro Tag gehen höchstens 200 weitergeleitete Nachrichten hinaus.
- Eine weitergeleitete Nachricht kommt von einer MyCompanyDesk-Adresse, mit „Fwd:“ vor dem Betreff. Klicken Sie auf Antworten, geht Ihre Antwort an den ursprünglichen Absender.
- Anhänge werden nicht mitgeschickt.
- Nur Administratoren können Regeln anlegen.

## Siehe auch

- [Mail in Outlook, Apple Mail oder auf dem Handy](/de/faq/mail-app-outlook)
- [Domains, Website und Posteingang](/de/features/domains-website-inbox)
