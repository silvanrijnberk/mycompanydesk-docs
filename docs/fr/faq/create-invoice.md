---
title: "Créer une facture"
description: "Voici comment créer une facture : allez dans Factures et cliquez sur Créer, sélectionnez un client ou ajoutez-en un depuis le sélecteur de clients."
last_verified: 2026-07-02
chatbot:
  triggers: ["create invoice", "new invoice", "make invoice", "add invoice", "write invoice", "send invoice", "first invoice", "how to invoice", "maak factuur", "nieuwe factuur", "factuur maken", "factuur aanmaken", "hoe maak ik een factuur", "rechnung erstellen", "wie erstelle ich eine rechnung", "neue rechnung", "creer facture", "comment creer une facture"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer first?", "How do I change the PDF style?", "How do I set payment terms?"]
---

Voici comment créer une facture :
1. Allez dans Factures et cliquez sur « Créer »
2. Sélectionnez un client, ou ajoutez-en un avec « Ajouter un nouveau client » en bas du sélecteur de clients
3. Ajoutez les lignes avec description, quantité, prix et TVA
4. Définissez la date de facture et la date d'échéance dans la carte des détails de la facture
5. Utilisez « Enregistrer comme brouillon » si la facture n'est pas encore prête, ou « Finaliser » quand elle l'est (MyCompanyDesk vérifie d'abord votre numéro de TVA et votre IBAN, vous pouvez les remplir directement si besoin)
6. Après l'enregistrement, ouvrez la page de détail de la facture pour l'afficher ou l'envoyer

Si le client a des heures ou des dépenses non facturées, le formulaire affiche une section qui vous permet de les ajouter comme lignes de facture.

Astuce : les valeurs par défaut comme le délai de paiement et la validité des devis se trouvent dans Paramètres › « Factures et devis » ; la numérotation des factures est automatique, il n'y a rien à configurer. Vérifiez que votre numéro de TVA et votre IBAN sont renseignés pour finaliser sans interruption.
