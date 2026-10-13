---
title: Merge customers
description: "To merge duplicate customers: open the duplicate, choose Merge with in the More menu, and pick the main customer that should remain."
last_verified: 2026-09-26
chatbot:
  triggers: ["merge customers", "duplicate customer", "combine customers", "customer duplicate", "klanten samenvoegen", "dubbele klant", "kunden zusammenfuhren", "fusionner clients", "doublons clients"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I edit a customer?", "How do I find a customer?", "How do I delete a customer?"]
---
To merge duplicate customers:
1. Go to Customers and open the duplicate, which is the customer that should disappear
2. Open the "More" menu in the page header (the ⋯ menu on your phone) and choose "Merge with…"
3. Under "Main customer", search for the customer that should remain
4. You see how many invoices, quotes, and other records will move over. Click "Merge"

Invoices, quotes, contracts, projects, hours (recurring ones too), expenses, recurring invoices, documents, work orders, and internal notes move to the main customer. The duplicate is then archived. Only a team admin can merge customers.

An archived customer cannot be the main customer of a merge. Restore the archived customer first: while a customer is archived, their recurring invoices and contracts are not billed, so the merge would silently stop that billing.

Tip: Prevent duplicates by searching for existing customers before creating new ones.
