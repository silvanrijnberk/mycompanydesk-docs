---
title: Delete an expense
description: "To delete an expense: open it, click More at the top and choose Delete. Deleting goes through the Archive and the Trash first."
last_verified: 2026-08-16
chatbot:
  triggers: ["delete expense", "remove expense", "trash expense", "erase expense", "uitgave verwijderen", "uitgave wissen", "hoe verwijder ik een uitgave", "ausgabe loschen", "wie losche ich eine ausgabe", "supprimer depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I edit an expense instead?", "How do I export my expense data?"]
---

To delete an expense:
1. Open the expense from your expense list
2. Click "More" at the top (on your phone, the menu with the three dots)
3. Choose "Delete"
4. Confirm the deletion

Deletion happens in stages. Deleting an active expense archives it first, deleting it again from the Archive moves it to the Trash. It is only gone for good once you select it in the Trash and choose "Delete permanently", or click "Empty trash". Until that last step you can restore the expense from the Archive or Trash view (under Filters, at Show). If you select expenses in the list and choose Delete there, they all move to the Trash at once, where you can still restore them.

If the expense falls in a VAT period that is already locked, you cannot archive or delete it. Create a correction instead.

While an expense is in the Trash, it cannot be edited. Restore it first if you need to make any changes.

If you archive an unpaid expense that has a due date, you will stop getting payment reminders for it while it is archived. You can still restore the expense from the Archive. If you do, the daily sweep recreates the reminder, but not immediately; it returns the next night at the earliest.
