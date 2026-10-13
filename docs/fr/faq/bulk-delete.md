---
title: "Supprimer plusieurs éléments"
description: "Pour supprimer plusieurs éléments à la fois : accédez à la vue en liste concernée (Factures, Dépenses, etc.)."
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk delete", "delete multiple", "mass delete", "delete all", "remove multiple", "meerdere verwijderen", "alles verwijderen", "mehrere loschen", "supprimer plusieurs", "suppression en masse"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I cancel a sent invoice?", "How do I filter items before bulk actions?", "How do I export items before deleting?"]
---

Pour supprimer plusieurs éléments à la fois :
1. Accédez à la vue en liste concernée (Factures, Dépenses, etc.)
2. Sélectionnez les éléments : sur ordinateur, la case à cocher apparaît quand vous survolez une ligne, ou choisissez « Sélectionner plusieurs » dans le menu d'une ligne
3. Cliquez sur « Supprimer » dans la barre en bas de l'écran
4. Confirmez la suppression

La suppression se fait par étapes : depuis la liste active, les éléments passent d'abord aux archives ou à la corbeille, et seul « Supprimer définitivement » dans la corbeille les efface vraiment. Jusqu'à cette dernière étape, vous pouvez les récupérer avec « Restaurer vers actif » ou « Restaurer vers archives ».
