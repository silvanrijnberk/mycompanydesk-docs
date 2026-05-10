---
title: Reverse charge
last_verified: 2026-05-09
chatbot:
  triggers: ["reverse charge", "reverse charge invoice", "eu invoice", "intracommunautair", "intracommunity", "btw verlegd", "reverse charge rechnung", "autoliquidation", "intra-community"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer VAT number?", "How does reverse charge affect my VAT return?", "How do I set VAT to 0% on line items?"]
---
Pour creer une facture avec autoliquidation :
1. Accedez a Factures → Nouvelle facture
2. Selectionnez votre client dans l'UE et verifiez que son numero de TVA est renseigne dans sa fiche
3. Ajoutez des lignes avec 0 % de TVA
4. Ouvrez l'apercu pour verifier les champs TVA et la mention affiches sur le document
5. Enregistrez et envoyez
