---
title: "Supprimer un client"
description: "Pour supprimer un client : ouvrez son profil, faites défiler jusqu'à la Zone de danger dans la barre latérale, cliquez sur Supprimer et confirmez."
last_verified: 2026-05-09
chatbot:
  triggers: ["delete customer", "remove customer", "trash customer", "klant verwijderen", "klant wissen", "kunde loschen", "supprimer client"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I archive a customer instead?", "How do I edit customer details?"]
---

Pour supprimer un client :
1. Allez dans Clients et trouvez le client
2. Ouvrez le profil
3. Dans la barre latérale, faites défiler jusqu'à la section « Zone de danger »
4. Cliquez sur « Supprimer »
5. Confirmez la suppression

La suppression n'est jamais bloquée, même pour les clients ayant des factures liées. Elle se fait par étapes : supprimer un client actif l'archive d'abord, le supprimer à nouveau le déplace vers la Corbeille, et le supprimer depuis la Corbeille est définitif. Jusqu'à cette dernière étape, vous pouvez toujours restaurer le client depuis la vue Archives ou Corbeille.

Si vous choisissez **Supprimer tous les clients** dans les paramètres de l'espace de travail, la confirmation vous avertit que les contrats en cours et les factures récurrentes seront arrêtés.
