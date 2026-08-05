---
title: "Expense category"
last_verified: 2026-08-05
chatbot:
  triggers: ["expense category", "categorize expense", "expense categories", "which category", "change category", "uitgave categorie", "categorie wijzigen", "ausgabe kategorie", "categorie depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["Which expenses are tax deductible?", "How do I create a new expense?", "How do I view expenses by category?"]
---

To set or change an expense category:
1. Open the expense in edit mode
2. Find the "Category" dropdown
3. Select a category from your workspace list (system defaults or a custom category you added)
4. Save the expense

The standard categories follow the Dutch tax return, so your bookkeeping lines up with your aangifte. You can add your own categories in **Settings > Expense categories**, then archive or delete them there if they are no longer needed. Categories with expenses already linked to them cannot be deleted; archive them to hide them from the form. Use categories consistently so filters, lists, and reports stay easy to review.
