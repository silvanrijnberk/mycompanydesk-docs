---
title: Bulk delete
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
2. Select multiple items using the checkboxes
3. Click the bulk action button at the top
4. Choose "Delete" from the dropdown
5. Confirm the bulk deletion

Note: Only draft items can typically be bulk deleted. Sent or paid items should be cancelled individually.
