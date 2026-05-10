---
title: Customer merge
last_verified: 2026-05-09
chatbot:
  triggers: ["merge customers", "duplicate customer", "combine customers", "customer duplicate", "klanten samenvoegen", "dubbele klant", "kunden zusammenfuhren", "fusionner clients", "doublons clients"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I edit a customer?", "How do I find a customer?", "How do I delete a customer?"]
---
To handle duplicate customers:
1. Identify the duplicate entries in your customer list
2. Decide which record to keep (the one with the most complete data)
3. Update the keeper record with any missing information from the duplicate
4. Re-assign invoices from the duplicate to the keeper if needed
5. Delete the duplicate record

Tip: Prevent duplicates by searching for existing customers before creating new ones.
