---
title: "Répartir une dépense"
description: "Pour répartir une dépense sur plusieurs catégories : ouvrez la dépense en mode édition et attribuez une catégorie différente à chaque ligne."
last_verified: 2026-05-09
chatbot:
  triggers: ["split expense", "divide expense", "expense between categories", "allocate expense", "expense allocation", "uitgave splitsen", "uitgave verdelen", "ausgabe aufteilen", "repartir depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I categorize expenses?", "Which expenses are tax deductible?", "How do I upload a receipt?"]
---
Pour répartir une dépense sur plusieurs catégories :
1. Ouvrez la dépense en mode édition
2. Utilisez, si le formulaire le permet, des lignes pour répartir le montant
3. Attribuez une catégorie différente à chaque ligne
4. Vérifiez que le total correspond au montant du reçu
5. Enregistrez

Si la répartition dans un seul enregistrement n'est pas disponible, créez des dépenses séparées en faisant référence au même reçu.
