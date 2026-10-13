---
title: "Trouver les clients supprimés"
description: "Les clients supprimés se trouvent dans Clients : cliquez sur Filtres et choisissez la vue Corbeille sous Statut."
last_verified: 2026-05-09
chatbot:
  triggers: ["where are deleted customers", "where can i find deleted customers", "where do i find deleted customers", "customer trash", "trashed customers", "deleted customers", "verwijderde klanten", "klanten prullenbak", "geloschte kunden", "geloeschte kunden", "geloeschten kunden", "kunden papierkorb", "clients supprimes", "mes clients supprimes", "corbeille clients"]
  actions:
    - { label: "Open customers", to: "/customers?status=trash" }
  follow_up: ["Where do I find archived customers?", "How do I search customers?", "How do I restore a customer?"]
---

Les clients supprimés se trouvent dans Clients : cliquez sur Filtres au-dessus de la liste et choisissez la vue Corbeille sous Statut. Sur votre téléphone, utilisez le bouton de filtre en haut.

Gardez à l'esprit que la suppression se fait par étapes : la première suppression d'un client actif l'archive. Donc si un client n'est pas dans la Corbeille, regardez d'abord la vue Archives.
