---
title: Create Expense
last_verified: 2026-05-09
chatbot:
  triggers: ["create expense", "new expense", "add expense", "log expense", "record expense", "track expense", "uitgave toevoegen", "nieuwe uitgave", "uitgave aanmaken", "ausgabe hinzufugen", "wie erstelle ich eine ausgabe", "ajouter depense", "comment creer une depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I upload a receipt?", "How do I categorize expenses?", "How do I mark an expense as paid?"]
---

Here's how to add an expense:
1. Go to Expenses and open "New Expense"
2. Enter the supplier, category, description, amount, and date
3. Save the expense so the record is created
4. If you want to attach a receipt, open the saved expense and use "Upload Receipt" on the detail page

Tip: Receipt upload happens after the expense is saved, not on the new-expense form itself.
