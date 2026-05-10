---
title: Discount invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---
Pour ajouter une remise à une facture :
1. Ouvrez la facture en mode édition
2. Recherchez le champ « Remise » sur chaque ligne ou sur le total de la facture
3. Saisissez la remise en pourcentage ou en montant fixe
4. Les totaux sont recalculés automatiquement
5. Enregistrez la facture

Astuce : Vous pouvez appliquer des remises par ligne ou comme remise globale sur la facture.
