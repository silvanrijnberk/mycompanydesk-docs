---
title: VAT on invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---
So setzt du MwSt auf eine Rechnung:
1. Bearbeite oder erstelle eine Rechnung
2. Setze den MwSt-Satz pro Position (z.B. 19%, 7%, 0%)
3. Das System berechnet die MwSt automatisch
4. MwSt-Summen erscheinen in der Rechnungsübersicht
