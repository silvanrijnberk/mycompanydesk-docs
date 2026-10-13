---
title: "Supprimer un client"
description: "Pour supprimer un client : ouvrez sa fiche, choisissez Supprimer dans le menu Plus en haut et confirmez. La suppression passe par archives et corbeille."
last_verified: 2026-10-03
chatbot:
  triggers: ["delete customer", "remove customer", "trash customer", "klant verwijderen", "klant wissen", "kunde loschen", "supprimer client"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I archive a customer instead?", "How do I edit customer details?"]
---

Pour supprimer un client :
1. Allez dans Clients et trouvez le client
2. Ouvrez le profil
3. Ouvrez le menu « Plus » dans l'en-tête de la page (le menu ⋯ sur votre téléphone)
4. Cliquez sur « Supprimer »
5. Confirmez la suppression

La suppression se fait par étapes : supprimer un client actif l'archive d'abord, le supprimer à nouveau le déplace vers la Corbeille, et le supprimer depuis la Corbeille est définitif. Jusqu'à cette dernière étape, vous pouvez toujours restaurer le client depuis la vue Archives ou Corbeille.

Archiver et placer dans la corbeille fonctionnent toujours. L'étape définitive est bloquée tant que quelque chose est encore en cours pour ce client : contrats actifs, factures récurrentes actives, enregistrement de temps récurrent actif, devis en cours, factures impayées ou brouillons, heures pas encore facturées et bons d'intervention pas encore facturés. Le message indique ce qui reste ouvert. Les heures seulement planifiées pour l'avenir ne bloquent pas la suppression.

Si vous choisissez **Supprimer tous les clients** dans Paramètres › « Effacer les données », la confirmation vous avertit que les contrats en cours et les factures récurrentes seront arrêtés.
