---
title: "Ajouter un client"
description: "Pour ajouter un client : allez dans Clients, cliquez sur Créer et saisissez le nom, les coordonnées, l'e-mail, le téléphone et l'adresse."
last_verified: 2026-05-09
chatbot:
  triggers: ["create customer", "new customer", "add customer", "add client", "new client", "klant toevoegen", "nieuwe klant", "klant aanmaken", "kunde hinzufugen", "wie fuege ich einen kunden hinzu", "neuer kunde", "ajouter client", "comment ajouter un nouveau client"]
  actions:
    - { label: "Create customer", to: "/customers/new" }
  follow_up: ["How do I create an invoice for this customer?", "Which customer fields are most important?", "How do I import customers in bulk?"]
---
Voici comment ajouter un client :
1. Allez dans Clients et cliquez sur « Créer »
2. Saisissez le nom du client ou de l'entreprise ainsi que les coordonnées
3. Ajoutez l'e-mail, le numéro de téléphone et l'adresse
4. Renseignez si besoin le numéro de TVA, l'IBAN et le délai de paiement
5. Enregistrez le client

Astuce : le formulaire client n'a pas de champ de langue préférée ; la langue de vos documents se règle pour tout l'espace de travail dans Paramètres › « Factures et devis ». Concentrez-vous donc sur les données de facturation et de paiement réutilisées plus tard.
