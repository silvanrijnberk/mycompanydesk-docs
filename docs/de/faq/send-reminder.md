---
title: Send reminder
last_verified: 2026-08-16
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

So sendest du eine Erinnerung fuer eine unbezahlte Rechnung:
1. Oeffne die Rechnung
2. Nutze die Aktion „Erinnerung senden"
3. Pruefe die Nachricht und sende sie ab

Die Erinnerung nennt den noch offenen Restbetrag (Rechnungsbetrag abzüglich der bereits eingegangenen Zahlungen). Hat der Kunde bereits eine Anzahlung oder Ratenzahlung geleistet, mahnt die Erinnerung den Rest an, nicht den vollen Rechnungsbetrag.

Eine Erinnerung kann nicht gesendet werden, wenn:
- die Rechnung noch ein Entwurf ist
- die Rechnung storniert wurde
- die Rechnung bereits als bezahlt markiert ist
- der Kunde im Portal angegeben hat, dass er bereits bezahlt hat, und der Status "Überprüfung erforderlich" ist
- es sich um eine Gutschrift oder Rückerstattungsnotiz handelt
- die Rechnung vollständig durch eine Gutschrift ausgeglichen wurde
- nichts mehr offen steht (zum Beispiel weil der Kunde bezahlt hat, während die Seite geöffnet war)

Wenn eine Rechnung ueberfaellig ist, schlaegt die Rechnungsdetailseite einen naechsten Schritt vor:

- **Erinnerung senden** — fuer Rechnungen, die knapp ueber dem Fälligkeitsdatum liegen
- **Schaerfere Erinnerung senden** — fuer bereits einmal erinnerte Rechnungen
- **Dringende Erinnerung senden** — fuer Rechnungen, die mehr als ein paar Tage ueberfaellig sind. Der Knopf oeffnet den Erinnerungsdialog; die Detailzeile schlaegt zusaetzlich vor, den Kunden anzurufen oder eine Ratenzahlung anzubieten.
- **Gutschrift oder Korrektur erstellen** — wenn der Kunde die Rechnung bestreitet oder sich Betraege geaendert haben

Fuer die meisten Faelle senden Sie Erinnerungen 1 Tag vor dem Fälligkeitsdatum (freundlich), 3 Tage danach (fester) und 10 Tage danach (letzte Mahnung). Danach folgt ein Telefonat.

Die Erinnerungsvorlage kannst du auch unter Einstellungen → E-Mails anpassen.
