---
title: "Fälligkeitsdatum einer Rechnung"
last_verified: 2026-07-02
chatbot:
  triggers: ["set due date", "change due date", "payment terms", "payment deadline", "when invoice due", "net 30", "net 14", "vervaldatum", "betaaltermijn", "zahlungsfrist", "echeance", "date d echeance", "conditions de paiement", "modifier conditions de paiement", "changer conditions de paiement", "comment modifier les conditions de paiement", "comment changer les conditions de paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How do I set default payment terms?", "How do I send reminders?", "How do I view overdue invoices?"]
---

So ändern Sie die Frist einer einzelnen Rechnung:
1. Öffnen Sie die Rechnung im Bearbeitungsmodus
2. Aktualisieren Sie in der Karte mit den Rechnungsdetails das Feld "Fälligkeitsdatum"
3. Speichern Sie die Rechnung

Sollen künftige Rechnungen mit einer anderen Frist starten, passen Sie die Zahlungsfrist des Kunden an oder den Standard unter Einstellungen → "Rechnungen und Angebote" bei "Wie viele Tage hat ein Kunde Zeit zum Bezahlen?".

Tipp: Automatische Erinnerungen richten sich nach dem Fälligkeitsdatum; mit der richtigen Frist gehen auch die Erinnerungen zum passenden Zeitpunkt raus.
