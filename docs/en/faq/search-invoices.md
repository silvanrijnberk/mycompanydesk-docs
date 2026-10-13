---
title: "Search invoices"
description: "To search and filter invoices: go to Invoices, search by customer name, invoice number or reference, and pick a status filter."
last_verified: 2026-10-13
chatbot:
  triggers: ["search invoices", "find invoice", "filter invoices", "sort invoices", "search invoice", "look up invoice", "factuur zoeken", "facturen filteren", "rechnung suchen", "chercher facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I filter by status?", "How do I find a customer?"]
---

To search for a specific invoice:
1. Go to Invoices
2. Type the customer name, invoice number or a reference in the search bar
3. Pick a status under **Filters**: To send, Draft, Awaiting payment, Overdue, Needs verification, Paid or Canceled. The **All**, **To send** and **Awaiting payment** tabs work as quick filters
4. Click the invoice to open it

Tip: Combine search with a status filter for the fastest results.
