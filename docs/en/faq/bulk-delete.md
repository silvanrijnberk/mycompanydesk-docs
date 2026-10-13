---
title: Bulk delete
description: "To delete multiple invoices or expenses at once: go to the list view (Invoices or Expenses), select multiple items using the checkboxes."
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk delete", "delete multiple", "mass delete", "delete all", "remove multiple", "meerdere verwijderen", "alles verwijderen", "mehrere loschen", "supprimer plusieurs", "suppression en masse"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I cancel a sent invoice?", "How do I filter items before bulk actions?", "How do I export items before deleting?"]
---

To delete multiple invoices or expenses at once:
1. Go to the list view (Invoices or Expenses)
2. Select the items: on desktop the checkbox appears when you hover over a row, or choose "Select multiple" in a row's menu
3. Click "Delete" in the bar at the bottom of the screen
4. Confirm the deletion

Deleting happens in stages: from the active list, items first go to the archive or the trash, and only "Delete permanently" in the trash removes them for good. Until that last step you can bring them back with "Restore to active" or "Restore to archive".
