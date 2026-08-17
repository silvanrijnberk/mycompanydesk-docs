---
title: "Rabatt auf einer Rechnung"
last_verified: 2026-07-02
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---

So fügen Sie einer Rechnung einen Rabatt hinzu:
1. Bearbeiten oder erstellen Sie eine Rechnung
2. Fügen Sie eine separate Position mit einem negativen Betrag für den Rabatt hinzu
3. Die Summe zeigt den reduzierten Betrag
4. Speichern Sie die Rechnung

Ein separates Rabattfeld gibt es nicht; eine negative Position ist der Weg, in MyCompanyDesk einen Rabatt zu gewähren.

Tipp: Beschriften Sie die Rabattposition eindeutig (z. B. "Skonto -5 %"), damit der Kunde den Abzug versteht.

## Positionsbezogener Rabatt

Jede Rechnungsposition kann auch einen eigenen Rabatt erhalten:
1. Fügen Sie eine Position hinzu oder bearbeiten Sie eine Position
2. Wählen Sie den Rabatttyp: **Prozentsatz** oder **fester Betrag**
3. Geben Sie den Rabattwert ein

Ein Prozentrabatt kann nicht höher als 100 % sein. Der Rabattwert darf nicht negativ sein. Wenn Sie die gesamte Position kostenlos abgeben möchten, setzen Sie den Prozentsatz auf 100 %.
