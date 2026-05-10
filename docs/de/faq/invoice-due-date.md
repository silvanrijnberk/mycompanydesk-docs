---
title: Invoice due date
last_verified: 2026-05-09
chatbot:
  triggers: ["set due date", "change due date", "payment terms", "payment deadline", "when invoice due", "net 30", "net 14", "vervaldatum", "betaaltermijn", "zahlungsfrist", "echeance", "date d echeance", "conditions de paiement", "modifier conditions de paiement", "changer conditions de paiement", "comment modifier les conditions de paiement", "comment changer les conditions de paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set default payment terms?", "How do I send reminders?", "How do I view overdue invoices?"]
---
So aenderst du die Frist einer Rechnung:
1. Oeffne die Rechnung im Bearbeitungsmodus
2. Aktualisiere in der Karte mit den Rechnungsdetails das Feld „Faelligkeitsdatum"
3. Speichere die Rechnung

Wenn neue Rechnungen standardmaessig mit einer anderen Frist starten sollen, passe die Zahlungsfrist des Kunden oder die Standardwerte unter Unternehmen → Rechnungsstellung an.
