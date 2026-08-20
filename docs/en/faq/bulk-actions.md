---
title: Bulk actions
description: "To perform bulk actions: go to the list view (Invoices, Expenses, or Customers), select multiple items using the checkboxes."
last_verified: 2026-05-09
chatbot:
  triggers: ["bulk action", "bulk delete", "bulk send", "select multiple", "batch operation", "meerdere selecteren", "bulk verwijderen", "massenbearbeitung", "action en masse"]
  actions: []
  follow_up: ["How do I delete multiple invoices?", "How do I export selected items?"]
---
To perform bulk actions:
1. Go to the list view (Invoices, Expenses, or Customers)
2. Select multiple items using the checkboxes
3. The action bar appears at the bottom of the page on desktop and at the bottom of the screen on mobile
4. Choose the action (e.g. delete, send, export)
5. Confirm the bulk operation

## Bulk finalizing checks

When you finalize or send invoices in bulk, MyCompanyDesk runs the same VAT and status checks as when you send one invoice. For example, a reverse-charge invoice cannot be finalized unless the customer has a VAT number, and a 0% VAT line (sources/vat-rates.yaml#countries.NL.zero) must have a clear basis (reverse charge or an approved zero-rate reason). Invoices that fail a check are skipped, and the results screen lists the affected invoices with the reason so you can fix them.

## Bulk archiving expenses

Archiving several unpaid expenses at once can stop their open payment reminders. The bulk bar shows a confirmation first when any selected expense is unpaid and has a due date, so you know how many of the selected expenses lose a reminder. The reminder stays paused while the expenses are archived. If you restore an archived expense later, the daily sweep recreates the reminder, but not immediately; it returns the next night at the earliest.

Tip: Use filters first to narrow down the list, then select all visible items for efficient batch processing.
