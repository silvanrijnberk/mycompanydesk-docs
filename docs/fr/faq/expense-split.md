---
title: Expense split
last_verified: 2026-05-09
chatbot:
  triggers: ["split expense", "divide expense", "expense between categories", "allocate expense", "expense allocation", "uitgave splitsen", "uitgave verdelen", "ausgabe aufteilen", "repartir depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I categorize expenses?", "Which expenses are tax deductible?", "How do I upload a receipt?"]
---
Pour repartir une depense sur plusieurs categories :
1. Ouvrez la depense en mode edition
2. Utilisez, si le formulaire le permet, des lignes pour repartir le montant
3. Attribuez une categorie differente a chaque ligne
4. Verifiez que le total correspond au montant du recu
5. Enregistrez

Si la repartition dans un seul enregistrement n est pas disponible, creez des depenses separees en faisant reference au meme recu.
