---
title: "Convertir un devis en facture"
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

Pour convertir un devis en facture :
1. Ouvrez la page detail du devis
2. Cliquez sur « Creer une facture depuis le devis »
3. Une facture brouillon est creee avec client, lignes et notes copies
4. Verifiez echeance et conditions de paiement
5. Enregistrez puis envoyez
