---
title: "Vervaldatum van een factuur"
last_verified: 2026-07-02
chatbot:
  triggers: ["set due date", "change due date", "payment terms", "payment deadline", "when invoice due", "net 30", "net 14", "vervaldatum", "betaaltermijn", "zahlungsfrist", "echeance", "date d echeance", "conditions de paiement", "modifier conditions de paiement", "changer conditions de paiement", "comment modifier les conditions de paiement", "comment changer les conditions de paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How do I set default payment terms?", "How do I send reminders?", "How do I view overdue invoices?"]
---

Zo pas je de vervaldatum van één factuur aan:
1. Open de factuur in bewerkmodus
2. Werk in de kaart met factuurdetails het veld "Vervaldatum" bij
3. Sla de factuur op

Wil je dat toekomstige facturen met een andere termijn starten, pas dan de betaaltermijn van de klant aan of de standaard via Instellingen → "Facturen en offertes" onder "Hoeveel dagen krijgt een klant om te betalen?".

Tip: Automatische herinneringen volgen de vervaldatum, dus met een juiste termijn gaan ook de herinneringen op het goede moment de deur uit.
