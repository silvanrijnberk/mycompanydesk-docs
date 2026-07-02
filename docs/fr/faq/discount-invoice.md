---
title: "Remise sur une facture"
last_verified: 2026-07-02
chatbot:
  triggers: ["discount", "add discount", "invoice discount", "percentage discount", "reduce price", "korting", "korting toevoegen", "rabatt", "rabatt gewahren", "remise", "reduction"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set payment terms?", "How do I create a credit note?", "How do I preview the invoice PDF?"]
---

Pour appliquer une remise sur une facture :
1. Modifiez ou créez une facture
2. Ajoutez une ligne séparée avec un montant négatif pour la remise
3. Le total reflète le montant réduit
4. Enregistrez la facture

Il n'y a pas de champ de remise dédié ; une ligne négative est la façon d'accorder une remise dans MyCompanyDesk.

Astuce : libellez clairement la ligne de remise (par ex. "Remise pour paiement anticipé -5 %") pour que le client comprenne la déduction.
