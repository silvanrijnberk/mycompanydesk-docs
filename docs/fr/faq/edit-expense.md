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
3. Mettez à jour le fournisseur, le montant, la catégorie, la date ou les notes. L'enregistrement avec un montant de 0,00 EUR est bloqué, sauf s'il s'agit d'un enregistrement réellement nul comme une note de crédit avec seulement de la TVA.
4. Enregistrez vos modifications

Une dépense dans la corbeille ne peut pas être modifiée. Restaurez-la depuis la corbeille d'abord, puis modifiez-la.

Les mêmes restrictions s'appliquent lorsque vous acceptez une suggestion IA. Une dépense dans la corbeille ou une période de TVA verrouillée bloque le bouton Appliquer, et la suggestion n'est pas écrite.
