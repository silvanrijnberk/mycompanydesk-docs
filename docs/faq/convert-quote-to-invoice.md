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

To convert a quote to an invoice:
1. Open the quote detail page
2. Click "Create invoice from quote"
3. The app creates a new draft invoice with copied customer, lines, VAT mode, and notes
4. Review payment terms and due date
5. Save and send the invoice

The original quote stays available, and the invoice opens as a separate draft.
