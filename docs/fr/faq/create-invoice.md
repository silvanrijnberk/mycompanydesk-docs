---
title: Create an invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["create invoice", "new invoice", "make invoice", "add invoice", "write invoice", "send invoice", "first invoice", "how to invoice", "maak factuur", "nieuwe factuur", "factuur maken", "factuur aanmaken", "hoe maak ik een factuur", "rechnung erstellen", "wie erstelle ich eine rechnung", "neue rechnung", "creer facture", "comment creer une facture"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer first?", "How do I change the PDF style?", "How do I set payment terms?"]
---

Voici comment creer une facture :
1. Allez dans Factures et ouvrez « Nouvelle facture »
2. Selectionnez un client ou ajoutez-en un depuis le selecteur client
3. Ajoutez des lignes avec description, quantite, prix et TVA
4. Definissez dans la carte des details la date de facture et la date d echeance
5. Utilisez « Enregistrer comme brouillon » si la facture n est pas encore prete, ou « Finaliser » quand elle est prete
6. Apres l enregistrement, ouvrez la page detail de la facture pour la previsualiser ou l envoyer

Astuce : Les reglages comme la numerotation, les delais de paiement et les PDF se trouvent sous Entreprise.
