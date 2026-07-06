---
title: "Teilzahlung"
last_verified: 2026-05-09
chatbot:
  triggers: ["partial payment", "record partial payment", "half payment", "part payment", "deposit received", "gedeeltelijke betaling", "deelbetaling", "aanbetaling ontvangen", "teilzahlung", "paiement partiel", "acompte recu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as fully paid?", "How do I send a reminder for the remaining balance?", "How do I view all partially paid invoices?"]
---

Um eine Teilzahlung auf einer Rechnung zu erfassen:
1. Öffne die Rechnung aus der Liste
2. Klicke auf "Zahlung erfassen" oder die Zahlungsaktion
3. Gib den erhaltenen Betrag ein (weniger als der Gesamtbetrag)
4. Speichern - der Rechnungsstatus ändert sich zu Teilweise bezahlt
5. Wiederhole den Vorgang, wenn weitere Zahlungen eingehen

Tipp: Der Restbetrag wird automatisch verfolgt und auf der Rechnungsdetailseite angezeigt.
