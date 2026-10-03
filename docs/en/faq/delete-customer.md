---
title: Delete customer
description: "To delete a customer: go to Customers and find the customer, open their profile, in the sidebar, scroll to the Danger Zone section, click Delete."
last_verified: 2026-10-03
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

Deleting is almost never blocked, not even for customers with linked invoices. It happens in stages: deleting an active customer archives them first, deleting again moves them to the Trash, and deleting from the Trash removes them permanently. You can restore the customer from the Archive or Trash view at any point before that final step.

Two things do block that final step: an active recurring time registration for this customer (stop it under Uren first) and hours for this customer that have not been invoiced yet (invoice them first, or mark them as not billable). Hours that are only planned for the future do not block the deletion.

When you choose **Delete all customers** from workspace settings, the confirmation warns you that ongoing contracts and recurring invoices will be stopped as part of the deletion.
