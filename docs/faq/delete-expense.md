---
title: Delete an expense
last_verified: 2026-05-09
chatbot:
  triggers: ["delete expense", "remove expense", "trash expense", "erase expense", "uitgave verwijderen", "uitgave wissen", "hoe verwijder ik een uitgave", "ausgabe loschen", "wie losche ich eine ausgabe", "supprimer depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I edit an expense instead?", "How do I export my expense data?"]
---

To delete an expense:
1. Open the expense from your expense list
2. In the sidebar, scroll to the "Danger Zone" section
3. Click "Delete"
4. Confirm the deletion

Deletion happens in stages. Deleting an active expense archives it first, deleting it again from the Archive moves it to the Trash, and deleting it from the Trash removes it permanently. You can restore an expense from the Archive or Trash view at any point before the final step. Note: selecting expenses in the list and using the bulk Delete action removes them permanently right away.
