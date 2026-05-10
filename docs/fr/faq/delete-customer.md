---
title: Delete Customer
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
3. Dans la barre laterale, faites defiler jusqu'a la section « Zone de danger »
4. Cliquez sur « Supprimer »
5. Confirmez la suppression

Les clients ayant des factures liees ne peuvent pas toujours etre supprimes. Archivez alors le client a la place.
