---
title: "Supprimer une dépense"
last_verified: 2026-05-09
chatbot:
  triggers: ["delete expense", "remove expense", "trash expense", "erase expense", "uitgave verwijderen", "uitgave wissen", "hoe verwijder ik een uitgave", "ausgabe loschen", "wie losche ich eine ausgabe", "supprimer depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I edit an expense instead?", "How do I export my expense data?"]
---

Pour supprimer une dépense :
1. Ouvrez la dépense depuis votre liste de dépenses
2. Dans la barre latérale, faites défiler jusqu'à la section « Zone de danger »
3. Cliquez sur « Supprimer »
4. Confirmez la suppression

La suppression se fait par étapes. Supprimer une dépense active l'archive d'abord, la supprimer à nouveau depuis les Archives la déplace vers la Corbeille, et la supprimer depuis la Corbeille est définitif. Jusqu'à cette dernière étape, vous pouvez toujours restaurer la dépense depuis la vue Archives ou Corbeille. Attention : sélectionner des dépenses dans la liste et y utiliser l'action groupée Supprimer les supprime définitivement tout de suite.
