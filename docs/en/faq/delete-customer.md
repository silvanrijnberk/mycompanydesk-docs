---
title: Delete customer
description: "To delete a customer: open the customer, choose Delete in the More menu at the top and confirm. Deleting goes through the archive and the trash."
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
3. Open the "More" menu in the page header (the ⋯ menu on your phone)
4. Click "Delete"
5. Confirm the deletion

It happens in stages: deleting an active customer archives them first, deleting again moves them to the Trash, and deleting from the Trash removes them permanently. You can restore the customer from the Archive or Trash view at any point before that final step.

Archiving and moving to the trash always work. The final step is blocked while something is still running for this customer: active contracts, active recurring invoices, an active recurring time registration, open quotes, unpaid or draft invoices, hours that have not been invoiced yet, and work orders that have not been invoiced yet. The message tells you what is still open. Hours that are only planned for the future do not block the deletion.

When you choose **Delete all customers** under Settings › "Clear data", the confirmation warns you that ongoing contracts and recurring invoices will be stopped as part of the deletion.
