---
title: "Rabatt auf einer Rechnung"
description: "So setzen Sie einen Rabatt auf eine Rechnungsposition: Prozent oder fester Betrag, und der Rabatt erscheint auf der Rechnung und in der E-Mail."
last_verified: 2026-09-30
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---

Jede Rechnungsposition kann einen eigenen Rabatt erhalten:

1. Bearbeiten oder erstellen Sie eine Rechnung
2. Klicken Sie auf das Preisschild-Symbol bei der Position, die den Rabatt erhalten soll
3. Wählen Sie im kleinen Panel den Rabatttyp: **Prozentsatz** oder **fester Betrag**
4. Geben Sie den Rabattwert ein und wählen Sie **Fertig**

Auf der Position erscheint dann ein Chip mit dem Rabatt (zum Beispiel -10 %), und die Summe der Position passt sich an: der ursprüngliche Betrag ist durchgestrichen, darunter steht der reduzierte Betrag.

Ein Prozentrabatt kann nicht höher als 100 % sein. Der Rabattwert darf nicht negativ sein. Wenn Sie die gesamte Position verschenken möchten, setzen Sie den Prozentsatz auf 100 %.

## Der Rabatt auf der Rechnung selbst

Der Rabatt gehört zur Rechnung, damit Ihr Kunde genau sieht, was abgezogen wurde:

- Auf der Rechnungs-PDF bekommt der Rabatt eine eigene Zeile unter der Beschreibung, zum Beispiel „Rabatt 20%: -900,00 €“, und in der Betragsspalte ist der ursprüngliche Betrag durchgestrichen.
- Die gemailte Rechnung nennt den Rabatt hinter der Positionsbeschreibung, mit dem abgezogenen Betrag.
- Über der Zwischensumme erscheinen im Summenblock eine Zeile **Summe vor Rabatt** und eine Zeile **Rabatt**.

Rabatt später ändern? Klicken Sie auf den Chip bei der Position. Entfernen geht im selben Panel mit **Rabatt entfernen**.

## Rabatt mit einer negativen Position

Sie können den Rabatt auch als eigene Position geben: Fügen Sie eine separate Position mit einem negativen Betrag für den Rabatt hinzu. Die Summe zeigt den reduzierten Betrag.

Tipp: Beschriften Sie die Rabattposition eindeutig (z. B. "Skonto -5 %"), damit der Kunde den Abzug versteht.
