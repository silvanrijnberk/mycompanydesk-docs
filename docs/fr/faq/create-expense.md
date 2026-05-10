---
title: Create Expense
last_verified: 2026-05-09
chatbot:
  triggers: ["create expense", "new expense", "add expense", "log expense", "record expense", "track expense", "uitgave toevoegen", "nieuwe uitgave", "uitgave aanmaken", "ausgabe hinzufugen", "wie erstelle ich eine ausgabe", "ajouter depense", "comment creer une depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I upload a receipt?", "How do I categorize expenses?", "How do I mark an expense as paid?"]
---

Voici comment ajouter une depense :
1. Allez dans Depenses et ouvrez « Nouvelle depense »
2. Saisissez le fournisseur, la categorie, la description, le montant et la date
3. Enregistrez la depense pour creer l enregistrement
4. Ouvrez ensuite la depense enregistree si vous voulez utiliser « Televerser le recu »

Astuce : le televersement du recu se fait sur la page detail apres l enregistrement.
