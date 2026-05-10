---
title: "Convert a quote to an invoice"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "convert quote to invoice"
    - "create invoice from quote"
    - "quote to invoice"
    - "accept quote invoice"
    - "offerte omzetten factuur"
    - "offerte naar factuur"
    - "angebot in rechnung"
    - "devis en facture"
    - "convertir cotizacion factura"
    - "converter proposta fatura"
    - "converti preventivo fattura"
  actions:
    - { label: "Open quotes", to: "/quotes" }
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up:
    - "Does conversion overwrite the quote?"
    - "How do I set invoice due date after conversion?"
    - "How do I send the invoice?"
---

So wandelst du ein Angebot in eine Rechnung um:
1. Oeffne die Angebotsdetailseite
2. Klicke auf „Rechnung aus Angebot erstellen"
3. Es wird ein neuer Rechnungsentwurf mit kopierten Daten erstellt
4. Faelligkeit und Zahlungsbedingungen pruefen
5. Speichern und senden
