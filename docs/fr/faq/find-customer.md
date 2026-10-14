---
title: "Trouver un client"
description: "Pour trouver un client : tapez dans la barre de recherche ; elle cherche nom, numéro client, e-mail, ville, contact, numéro KVK et téléphone."
last_verified: 2026-10-14
chatbot:
  triggers: ["find customer", "search customer", "look up customer", "filter customers", "klant zoeken", "klant vinden", "kunde suchen", "chercher client"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I edit a customer?", "How do I add a new customer?"]
---

Pour trouver un client :
1. Allez dans Clients
2. Utilisez la barre de recherche en haut ; elle recherche le nom du client, le numéro de client, l'adresse e-mail, la ville, la personne de contact, le numéro KVK et le téléphone
3. Pour le téléphone, seuls les chiffres comptent : 06 trouve aussi +316 et inversement
4. Les résultats se filtrent en temps réel pendant la saisie

Astuce : la liste est toujours triée par nom, avec les favoris épinglés en haut. Marquez comme favoris (l'étoile) les clients avec qui vous travaillez souvent pour les garder à portée de main.
