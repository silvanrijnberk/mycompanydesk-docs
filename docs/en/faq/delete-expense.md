---
title: Delete an expense
description: "To delete an expense: open the expense from your expense list, in the sidebar, scroll to the Danger Zone section, click Delete, confirm the deletion."
last_verified: 2026-08-16
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

While an expense is in the Trash, it cannot be edited. Restore it first if you need to make any changes.

If you archive an unpaid expense that has a due date, you will stop getting payment reminders for it while it is archived. You can still restore the expense from the Archive. If you do, the daily sweep recreates the reminder, but not immediately; it returns the next night at the earliest.
