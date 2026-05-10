---
title: "Delete expense"
last_verified: 2026-05-09
chatbot:
  triggers: ["delete expense", "remove expense", "trash expense", "erase expense", "uitgave verwijderen", "uitgave wissen", "hoe verwijder ik een uitgave", "ausgabe loschen", "wie losche ich eine ausgabe", "supprimer depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I edit an expense instead?", "How do I export my expense data?"]
---

Pour supprimer une depense :
1. Ouvrez la depense depuis la liste
2. Dans la barre laterale, faites defiler jusqu'a la section « Zone de danger »
3. Cliquez sur « Supprimer »
4. Confirmez la suppression

Les depenses supprimees disparaissent des listes, totaux et rapports associes dans l'application.
