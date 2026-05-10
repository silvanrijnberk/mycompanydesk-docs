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

Om een offerte om te zetten naar een factuur:
1. Open de offerte-detailpagina
2. Klik op "Factuur maken vanuit offerte"
3. Er wordt een nieuwe conceptfactuur gemaakt met gekopieerde klant, regels en notities
4. Controleer vervaldatum en betaalvoorwaarden
5. Sla op en verstuur
