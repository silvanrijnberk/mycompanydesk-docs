---
title: "Erinnerung senden"
description: "Erinnerung zu einer unbezahlten Rechnung senden: Öffnen Sie die Rechnung und nutzen Sie Erinnerung senden, sie nennt den offenen Restbetrag."
last_verified: 2026-08-16
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

So senden Sie eine Erinnerung für eine unbezahlte Rechnung:
1. Öffnen Sie die Rechnung
2. Nutzen Sie die Aktion „Erinnerung senden“
3. Prüfen Sie die Nachricht und senden Sie sie ab

Die Erinnerung nennt den noch offenen Restbetrag (Rechnungsbetrag abzüglich der bereits eingegangenen Zahlungen). Hat der Kunde bereits eine Anzahlung oder Ratenzahlung geleistet, mahnt die Erinnerung den Rest an, nicht den vollen Rechnungsbetrag.

Wenn Ihr Arbeitsbereich Online-Zahlungen aktiviert hat, bietet die Erinnerungsmail dem Kunden dieselben Zahlungsoptionen wie die ursprüngliche Rechnung: einen Button **Ansehen \u0026 bezahlen**, einen Button **Zahlung bestätigen** und einen QR-Code auf der PDF zum Scannen und Bezahlen. Das gilt für manuelle und automatische Erinnerungen.

Eine Erinnerung kann nicht gesendet werden, wenn:
- die Rechnung noch ein Entwurf ist
- die Rechnung storniert wurde
- die Rechnung bereits als bezahlt markiert ist
- der Kunde im Portal angegeben hat, dass er bereits bezahlt hat, und der Status Überprüfung erforderlich ist; Erinnerungen warten, bis Sie die Zahlung bestätigen oder die Meldung zurücksetzen
- es sich um eine Gutschrift oder Rückerstattungsnotiz handelt
- die Rechnung vollständig durch eine Gutschrift ausgeglichen wurde
- nichts mehr offen steht (zum Beispiel weil der Kunde bezahlt hat, während die Seite geöffnet war)

Auch eine Meldung aus dem Portal hat ein Ende. Bleiben fünf Werktage nach der Meldung (die Wartezeit und die Rücksetzregel stehen in `apps/api/src/modules/scheduler/scheduler.service.js#checkStalePaymentClaims`) Zahlungen aus, prüft MyCompanyDesk die Fakten: mit einer funktionierenden Bankanbindung auf der Kontonummer der Rechnung, die seit dem Rechnungsdatum keinen Zahlungseingang zeigt, setzt MyCompanyDesk die Rechnung zurück auf versendet, entfernt die Meldung, und Ihr Kunde kann wieder zahlen oder sich melden; eine Mitteilung sagt Ihnen, dass dies geschehen ist. In allen anderen Fällen fragt MyCompanyDesk Sie einmal nach, ob die Zahlung gekommen ist, und lässt die Rechnung unangetastet, bis Sie entscheiden. Sie können auch selbst handeln: auf der Rechnung stehen **Zahlung bestätigen**, wenn das Geld da ist, und **Nicht eingegangen**, um die Rechnung zurück auf versendet zu setzen, sodass Erinnerungen wieder laufen und Ihr Kunde erneut zahlen oder sich melden kann.

Wenn eine Rechnung überfällig ist, schlägt die Rechnungsdetailseite einen nächsten Schritt vor:

- **Erinnerung senden** — für Rechnungen, die knapp über dem Fälligkeitsdatum liegen
- **Schärfere Erinnerung senden** — für bereits einmal erinnerte Rechnungen
- **Dringende Erinnerung senden** — für Rechnungen, die mehr als ein paar Tage überfällig sind. Der Knopf öffnet den Erinnerungsdialog; die Detailzeile schlägt zusätzlich vor, den Kunden anzurufen oder eine Ratenzahlung anzubieten.
- **Gutschrift oder Korrektur erstellen** — wenn der Kunde die Rechnung bestreitet oder sich Beträge geändert haben

Für die meisten Fälle senden Sie Erinnerungen 1 Tag vor dem Fälligkeitsdatum (freundlich), 3 Tage danach (fester) und 10 Tage danach (letzte Mahnung). Danach folgt ein Telefonat.

Die Erinnerungsvorlage können Sie auch unter Einstellungen → E-Mails anpassen.
