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
1. Go to the list view (for example Invoices, Quotes, Expenses, or Customers)
2. Select items: on desktop the checkbox appears when you hover over a row. You can also choose "Select multiple" in a row's menu; all checkboxes then appear
3. A bar appears at the bottom of the screen with the number of selected items, "Select all", and the available actions
4. Choose the action, for example "Mark as paid", "Mark as Sent", "Mark as Canceled", "Archive", or "Delete" (which actions you get depends on the list and on what you selected)
5. Confirm the action when asked

## Checks when marking drafts as sent in bulk

When you mark draft invoices as sent in bulk, they get an invoice number and MyCompanyDesk runs the same checks as for a single invoice. Your VAT ID, IBAN, and business address must be filled in, a reverse-charge invoice cannot be finalized unless the customer has a VAT number, and a 0% VAT line (sources/vat-rates.yaml#countries.NL.zero) must have a clear basis (reverse charge or an approved zero-rate reason). If one invoice fails a check, the whole action stops; the message names that invoice so you can fix it first.

## Bulk archiving expenses

Archiving several unpaid expenses at once can stop their open payment reminders. The bulk bar shows a confirmation first when any selected expense is unpaid and has a due date, so you know how many of the selected expenses lose a reminder. The reminder stays paused while the expenses are archived. If you restore an archived expense later, the daily sweep recreates the reminder, but not immediately; it returns the next night at the earliest.

Tip: Use filters first to narrow down the list, then select all visible items for efficient batch processing.
