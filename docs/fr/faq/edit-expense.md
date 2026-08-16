---
title: Edit an expense
last_verified: 2026-08-16
chatbot:
  triggers: ["edit expense", "change expense", "modify expense", "update expense", "correct expense", "uitgave bewerken", "uitgave wijzigen", "ausgabe bearbeiten", "modifier depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I change the expense category?", "How do I upload a receipt?", "How do I restore a trashed expense?"]
---
Pour modifier une dépense :
1. Ouvrez la dépense depuis la liste
2. Cliquez sur « Modifier »
3. Mettez à jour le fournisseur, montant, catégorie, date ou notes
4. Enregistrez vos modifications

Une dépense dans la corbeille ne peut pas être modifiée. Restaurez-la depuis la corbeille d'abord, puis modifiez-la.

Les mêmes restrictions s'appliquent lorsque vous acceptez une suggestion IA. Une dépense dans la corbeille ou une période de TVA verrouillée bloque le bouton Appliquer, et la suggestion n'est pas écrite.
