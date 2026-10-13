---
title: "Rechercher des factures"
description: "Pour trouver une facture : accédez aux Factures, cherchez par client, numéro ou référence et filtrez par statut."
last_verified: 2026-10-13
chatbot:
  triggers: ["search invoices", "find invoice", "filter invoices", "sort invoices", "search invoice", "look up invoice", "factuur zoeken", "facturen filteren", "rechnung suchen", "chercher facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I filter by status?", "How do I find a customer?"]
---

Pour rechercher une facture spécifique :
1. Accédez aux Factures
2. Tapez le nom du client, le numéro de facture ou une référence dans la barre de recherche
3. Choisissez un statut sous **Filtres** : À envoyer, Brouillon, En attente de paiement, En retard, Vérification requise, Payé ou Annulée. Les onglets **Tous**, **À envoyer** et **En attente de paiement** servent de filtres rapides
4. Cliquez sur la facture pour l'ouvrir

Astuce : combinez la recherche avec un filtre de statut pour des résultats plus rapides.
