---
title: Edit an expense
last_verified: 2026-08-16
chatbot:
  triggers: ["edit expense", "change expense", "modify expense", "update expense", "correct expense", "uitgave bewerken", "uitgave wijzigen", "ausgabe bearbeiten", "modifier depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I change the expense category?", "How do I upload a receipt?", "How do I restore a trashed expense?"]
---
To edit an expense:
1. Open the expense from the list
2. Click "Edit"
3. Update the vendor, amount, category, date, or notes. Saving an amount of EUR 0.00 is blocked unless the record is a genuine zero-value entry such as a VAT-only credit note.
4. Save your changes

Open the attachment section on the same record if you also need to replace or add the receipt file.

A trashed expense cannot be edited. Restore it from Trash first, then make your changes.

The same restrictions apply when you accept an AI suggestion. A trashed expense or a locked VAT period blocks the Apply button, and the suggestion is not written.
