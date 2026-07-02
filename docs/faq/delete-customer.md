---
title: Delete customer
last_verified: 2026-05-09
chatbot:
  triggers: ["delete customer", "remove customer", "trash customer", "klant verwijderen", "klant wissen", "kunde loschen", "supprimer client"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I archive a customer instead?", "How do I edit customer details?"]
---

To delete a customer:
1. Go to Customers and find the customer
2. Open their profile
3. In the sidebar, scroll to the "Danger Zone" section
4. Click "Delete"
5. Confirm the deletion

Deleting is never blocked, even for customers with linked invoices. It happens in stages: deleting an active customer archives them first, deleting again moves them to the Trash, and deleting from the Trash removes them permanently. You can restore the customer from the Archive or Trash view at any point before that final step.
