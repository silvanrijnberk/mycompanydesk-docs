---
title: "Ajouter un client"
last_verified: 2026-05-09
chatbot:
  triggers: ["create customer", "new customer", "add customer", "add client", "new client", "klant toevoegen", "nieuwe klant", "klant aanmaken", "kunde hinzufugen", "wie fuege ich einen kunden hinzu", "neuer kunde", "ajouter client", "comment ajouter un nouveau client"]
  actions:
    - { label: "Create customer", to: "/customers/new" }
  follow_up: ["How do I create an invoice for this customer?", "Which customer fields are most important?", "How do I import customers in bulk?"]
---
Voici comment ajouter un client :
1. Allez dans Clients et ouvrez « Nouveau client »
2. Saisissez le nom du client ou de l entreprise ainsi que les coordonnees
3. Ajoutez l e-mail, le numero de telephone et l adresse
4. Renseignez si besoin le numero de TVA, l IBAN et le delai de paiement
5. Enregistrez le client

Astuce : le formulaire client n a pas de champ separe pour la langue preferee pour le moment, alors concentrez-vous sur les donnees de facturation et de paiement reutilisees plus tard.
