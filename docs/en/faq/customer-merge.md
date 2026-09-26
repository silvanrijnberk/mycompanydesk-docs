---
title: Merge customers
description: "To handle duplicate customers: identify the duplicate entries in your customer list, decide which record to keep (the one with the most complete data)."
last_verified: 2026-09-26
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

An archived customer cannot be the merge target. Restore the archived customer first: while a customer is archived, their recurring invoices and contracts are not billed, so the merge would silently stop that billing.

Tip: Prevent duplicates by searching for existing customers before creating new ones.
