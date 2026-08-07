---
title: Recurring Expenses
---

# Recurring Expenses

Automate tracking of regular business costs like rent, subscriptions, and utilities.

## Overview

Recurring expenses work like recurring invoices but for costs. Set up a template and let MyCompanyDesk create expense records automatically.

Common use cases:

- Office rent
- Software subscriptions
- Insurance premiums
- Utility bills
- Lease payments

## Creating a recurring expense

1. Go to **Recurring Expenses > New**
2. Fill in the template:
   - **Description**: what the expense is for
   - **Supplier**: free-form supplier name, with autocomplete for previously used vendors
   - **Country** and **Registration number (KVK)**: optional supplier identity fields; when filled, they flow into every expense generated from this template
   - **Amount**: the recurring cost
   - **Category**: expense category
   - **VAT rate**: applicable VAT
   - **VAT treatment**: how the expense is handled for your VAT return
   - **Frequency**: weekly, monthly, quarterly, or yearly
3. Click **Save**

::: tip More options
The recurring-expense form keeps optional details behind **More options**. Notes and the supplier identity fields sit there by default; expand the section when you want to add them.
:::

### Supplier identity

Filling the supplier name, country, and KVK number on a recurring template has two effects:

- **Supplier suggestions** use the saved identity, so you do not have to reselect the same vendor each month.
- **Generated expenses** carry the same supplier identity as the template, which means reverse-charge and import-VAT logic (for example EU B2B or non-EU suppliers) is applied automatically, just like on a manually entered expense.

If you edit the supplier name later and it no longer matches the saved KVK record, the KVK and country fields are cleared to prevent stale identity data.

## Frequency options

| Frequency | Description |
|---|---|
| **Weekly** | Every 7 days |
| **Monthly** | Same day each month |
| **Quarterly** | Every 3 months |
| **Yearly** | Once per year |

## Managing recurring expenses

### Pause / Resume

Toggle automatic generation on or off. Pausing stops new expense creation; resuming continues from the next scheduled date.

### Edit

Changes to the template affect future expenses only. Existing expenses are not modified.

### Delete

Remove the template. Previously generated expenses remain in your records.

## Generated expenses

Each generated expense:

- Matches the template's amount, category, and VAT settings
- Carries the template's supplier identity (name, country, and KVK number) when those fields are filled
- Is dated to the scheduled occurrence date
- Can be edited independently after creation

## Source link

If an expense was created from a recurring template, the expense detail page shows an **automatically created from recurring expense** banner with a link back to that template. This lets you jump straight from a single expense to the template that generated it.

## What happens if my plan changes?

Recurring expenses are part of the Office plan. If you upgrade from Desk to Office, scheduled generation starts from the next due date. If you downgrade from Office to Desk, generation pauses automatically; existing templates and previously generated expenses stay in your workspace, and generation resumes when you upgrade again.

## Tips

- Review your recurring expenses periodically to catch cancelled subscriptions
- Link recurring expenses to projects for accurate project costing
- Use categories consistently for meaningful reports
