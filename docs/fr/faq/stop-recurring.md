---
title: "Arrêter une facture récurrente"
last_verified: 2026-07-02
chatbot:
  triggers: ["stop recurring", "cancel recurring", "pause recurring", "disable recurring", "end recurring", "terugkerend stoppen", "terugkerend annuleren", "wiederkehrend stoppen", "arreter recurrent"]
  actions:
    - { label: "Open recurring invoices", to: "/recurring-invoices" }
    - { label: "Open recurring expenses", to: "/recurring-expenses" }
  follow_up: ["How do I edit a recurring item?", "How do I create a new recurring invoice?"]
---

Pour arrêter une facture récurrente :
1. Allez dans Factures récurrentes
2. Ouvrez la facture récurrente
3. Cliquez sur "Mettre en pause" sur la page de détail ; le même bouton affiche ensuite "Activer" pour reprendre plus tard
4. Tant qu'elle est en pause, aucune nouvelle facture n'est générée

Il n'y a pas de champ de date de fin ; la mise en pause est la façon d'arrêter la planification, et l'historique des factures déjà générées reste intact. Il n'y a pas non plus d'actions groupées dans la liste des factures récurrentes, mettez donc chaque élément en pause individuellement. Les dépenses récurrentes fonctionnent de la même manière, avec leurs propres boutons Mettre en pause et Activer.

Astuce : la mise en pause est sans risque. Rien n'est supprimé, et un clic sur "Activer" relance la planification.

Si votre formule passe d'Office à Desk, les factures et dépenses récurrentes se mettent automatiquement en pause. Les factures et dépenses déjà créées restent dans vos archives, et les plannings reprennent lors d'une nouvelle montée de version.
