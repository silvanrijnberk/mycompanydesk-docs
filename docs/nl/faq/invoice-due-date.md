---
title: Invoice due date
last_verified: 2026-05-09
chatbot:
  triggers: ["set due date", "change due date", "payment terms", "payment deadline", "when invoice due", "net 30", "net 14", "vervaldatum", "betaaltermijn", "zahlungsfrist", "echeance", "date d echeance", "conditions de paiement", "modifier conditions de paiement", "changer conditions de paiement", "comment modifier les conditions de paiement", "comment changer les conditions de paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set default payment terms?", "How do I send reminders?", "How do I view overdue invoices?"]
---
Om de deadline van een factuur te wijzigen:
1. Open de factuur in bewerkingsmodus
2. Werk in de kaart met factuurdetails het veld "Vervaldatum" bij
3. Sla de factuur op

Wil je dat nieuwe facturen standaard met een andere deadline starten, pas dan de betaaltermijn van de klant of de standaardwaarden onder Bedrijf → Facturatie aan.
