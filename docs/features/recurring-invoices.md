---
title: Recurring Invoices
---

# Recurring Invoices

Automate your regular billing by setting up invoices that generate on a schedule.

## Overview

Recurring invoices are templates that automatically create new invoices at specified intervals. Ideal for:

- Monthly retainers
- Subscription billing
- Rent collection
- Maintenance contracts
- Regular consulting fees

## Creating a recurring invoice

1. Go to **Recurring Invoices > New**
2. Fill in the template:
   - **Customer**: Who to bill
   - **Line items**: What to bill for (descriptions, amounts, VAT)
   - **Frequency**: How often (weekly, monthly, quarterly, yearly)
   - **Start date**: When to start generating
3. Click **Save**

The recurring invoice is created in **Active** status and will generate its first invoice on the next scheduled date.

The **Auto-send email on creation** option is on by default: each generated invoice is emailed to the customer straight away. Switch it off if you prefer to review and send each invoice yourself.

## Frequency options

| Frequency | Description |
|---|---|
| **Weekly** | Every 7 days |
| **Monthly** | Same day each month |
| **Quarterly** | Every 3 months |
| **Yearly** | Once per year |

## Managing recurring invoices

### Pause

Temporarily stop invoice generation:

1. Open the recurring invoice
2. Click **Pause**
3. Status changes to **Paused**: no invoices are generated

### Resume

Restart a paused recurring invoice:

1. Open the paused recurring invoice
2. Click **Resume**
3. Generation continues from the next scheduled date

### Edit

Editing a recurring invoice affects **future** invoices only. Previously generated invoices are not changed.

### Delete

Remove the recurring template entirely. Previously generated invoices remain in your records.

## Generated invoices

Each time a recurring invoice fires, a new invoice is created:

- It uses the template's line items and customer
- It follows your current invoice numbering
- It is emailed automatically, or kept as a **Draft** to review and send if you switched auto-send off
- Each generated invoice is independent: you can edit it without affecting the template

## Viewing history

The recurring invoice detail page shows all previously generated invoices, so you can track the full billing history.

## Tips

- Combine with [contracts](/features/contracts) for contract-based billing
- Review generated invoices before the first auto-send to make sure everything looks right
- Use the next occurrence preview to see when the next invoice will be created
- Check the active count and metrics at the top of the page
