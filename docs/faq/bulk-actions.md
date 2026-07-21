---
title: Bulk actions
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk action", "bulk delete", "bulk send", "select multiple", "batch operation", "meerdere selecteren", "bulk verwijderen", "massenbearbeitung", "action en masse"]
  actions: []
  follow_up: ["How do I delete multiple invoices?", "How do I export selected items?"]
---
To perform bulk actions:
1. Go to the list view (Invoices, Expenses, or Customers)
2. Select multiple items using the checkboxes
3. Use the bulk action menu at the top of the list
4. Choose the action (e.g. delete, send, export)
5. Confirm the bulk operation

## Bulk finalizing checks

When you finalize or send invoices in bulk, MyCompanyDesk runs the same VAT and status checks as when you send one invoice. For example, a reverse-charge invoice cannot be finalized unless the customer has a VAT number, and a 0% VAT line (sources/vat-rates.yaml#countries.NL.zero) must have a clear basis (reverse charge or an approved zero-rate reason). Invoices that fail a check are skipped, and the results screen lists the affected invoices with the reason so you can fix them.

Tip: Use filters first to narrow down the list, then select all visible items for efficient batch processing.
