---
title: Recurring Expenses
description: "Automate regular costs like rent, subscriptions, insurance and utilities with templates that create expense records on a schedule."
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

1. Go to **Recurring**, tab **Expenses**, and click **Add recurring expense**
2. Fill in the template:
   - **Name**: what the expense is for
   - **Supplier**: the supplier's name. As you type, the field suggests suppliers you used before and companies from the KVK register
   - **Category**: the expense category
   - **Description** and optionally a **Project**
   - Under **Schedule**: the **Frequency** (weekly, monthly, quarterly or yearly) and the **Start Date**
   - Under **Expense details**: the **Amount excl. VAT**, the **VAT Rate**, whether the VAT is deductible (**VAT deductible**) and the **VAT treatment**, which is how the expense is handled in your VAT return
3. Click **Save**

::: tip Expense details
On a new recurring expense the **Expense details** block starts collapsed; expand it to fill in the amounts and VAT. When you edit an existing recurring expense, it is open straight away.
:::

### Supplier identity

When you pick a company under **From the Trade Register (KVK)** in the **Supplier** field, the template also stores that supplier's KVK number and country, and a **KVK** label appears next to the name. That has two effects:

- **Supplier suggestions** use the saved identity, so you do not have to reselect the same vendor each month.
- **Generated expenses** carry the same supplier identity as the template, which means reverse-charge and import-VAT logic (for example EU B2B or non-EU suppliers) is applied automatically, just like on a manually entered expense.

If you edit the supplier name later and it no longer matches the chosen KVK company, the KVK number and country are cleared. **Unlink from KVK** removes the link yourself. That way no stale identity data stays behind.

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

If an expense was created from a recurring template, the expense detail page shows an **automatically created from recurring expense** banner. When the template still exists, the banner links back to it so you can jump straight from the expense to the template that generated it. If the template has since been deleted, the banner shows plain text instead of a dead link.

## What happens if my plan changes?

Recurring expenses are part of the Office plan. If you upgrade from Desk to Office, scheduled generation starts from the next due date. If you downgrade from Office to Desk, generation pauses automatically; existing templates and previously generated expenses stay in your workspace, and generation resumes when you upgrade again.

## Tips

- Review your recurring expenses periodically to catch cancelled subscriptions
- Link recurring expenses to projects for accurate project costing
- Use categories consistently for meaningful reports
