---
title: VAT on invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---
Pour définir la TVA sur une facture :
1. Modifiez ou créez une facture
2. Définissez le taux de TVA par ligne (ex. 21%, 6%, 0%)
3. Le système calcule la TVA automatiquement
4. Les totaux TVA apparaissent dans le résumé

Les nouvelles lignes de facture démarrent avec le taux de TVA par défaut issu de vos paramètres fiscaux (Finances → TVA → Taux de TVA standard Factures). Vous pouvez le modifier dans Paramètres de l'espace de travail → Finances → TVA. Pour les clients en autoliquidation, le taux est toujours de 0%.
