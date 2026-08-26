---
title: Expenses
description: "Track business expenses, scan receipts, manage categories with their own VAT defaults, and let depreciation schedules run for investments."
last_verified: 2026-08-21
---

# Expenses

Track business expenses, scan receipts, manage workspace categories with their own VAT defaults, and let depreciation schedules run automatically for investments. Manage categories, defaults and bank feeds under **Settings > Expenses**, **Settings > Expense categories** and **Settings > Bank connection**.

## Overview

The expenses page lists every recorded expense. The payment status tabs in the top bar let you switch quickly between:

- **All**: every recorded expense
- **Unpaid**: expenses not yet paid
- **Paid**: expenses already paid

Expenses that still need confirmation — bank-feed or inbox drafts that are not yet in your books — show a warning status badge instead of paid/unpaid, are tinted with a dashed border so they do not look like confirmed expenses, and cannot be selected for bulk actions until they are booked.

You can still filter by category, project, date range, or status. Click an expense to open the detail page; click **New** to add one manually, or **Scan receipt** to extract one from an image or PDF.

Trashed expenses can be viewed in the Trash view, but they cannot be edited, marked as paid, or have their receipt replaced. Restore the expense first if you need to change it.

## Categories

Categories are stored per workspace in the `expense_categories` table - they aren't a hardcoded enum. Each category carries:

- A **key** (slug used by the API and the form).
- A **VAT treatment** default (see below).
- A **deduction percentage** for partially-deductible categories.
- An **auto-flag investment** flag that turns matching expenses into investments automatically.
- A **default useful-life** in months for the depreciation engine.

The setup wizard seeds an industry-tailored set on top of the eleven system defaults, so a software-heavy workspace ends up with extra keys like `cloud_services_eu`, while a hospitality workspace might get `food_client_meeting`. New categories from the wizard validate the same way as system defaults - unknown or mistyped keys are rejected with a 400. System categories cannot be edited or deleted, because they carry the tax-return mapping. You can archive a category to hide it from the form. An archived category still appears in the dropdown for expenses that already use it, marked as "(archived)", so you can keep editing those expenses. Create, edit and delete your own categories from **Settings > Expense categories**. Deleting a category is blocked while it is still used by expenses or recurring expenses; archive it instead.

## Creating an expense

### Manual entry

1. Go to **Expenses > New**.
2. Type the **supplier** name. The supplier autocomplete suggests previously-used vendors as you type.
3. Pick a **category**. The form pulls the category's default VAT treatment, default VAT rate hint and deduction percentage straight into the matching fields. If a workspace-wide default expense category is set under workspace settings, it is pre-filled here.
4. Fill in the **description**, **amount excl. VAT**, **VAT rate** and **date**. The VAT rate and the **payment method** are pre-filled from your workspace defaults (set under workspace settings as "Standard VAT rate expenses", default expense category and default payment method). The VAT amount is calculated automatically; you can also enter the inclusive amount and let the form back out the components.
5. Optionally set the **VAT treatment** (overrides the category default), **customer**, **project** and **notes**. The pre-filled category and payment method can be overridden on a per-expense basis.
6. Optionally attach a **receipt**.
7. Click **Save**.

### Generate from supplier

When you're creating a new expense and you've typed a supplier name, the **Generate** button (sparkles icon, top right) runs an LLM prefill. It uses the supplier and any partial inputs to suggest a description, category, VAT treatment, amount and date. If the form's VAT rate still matches your workspace default, the prefill will overwrite it with what it finds on the receipt; otherwise it leaves your override alone. Review the result before saving - the prefill is a draft, not an autopilot.

### From a template

When creating a new expense, click **Start from template** (only shown when you have saved expense templates). Pick a template and the form fills itself in place with the saved supplier, category, amount and other data. Adjust anything you need, then click **Save**.

### From bank transactions

When your [bank feed](/en/features/bank) is connected, categorised outgoing transactions are automatically turned into draft expenses. Each one carries the transaction's counterpart as supplier, the absolute amount as gross, the category's default VAT rate and treatment, and the transaction's booking date. Draft expenses first appear in the bank-feed review inbox, where you can confirm, edit, or reject them before they land in your books. See [reviewing auto-imported expenses](/en/features/bank#reviewing-auto-imported-expenses) for the full workflow.

### Receipt scanner

For image or PDF receipts:

1. Go to **Expenses > Scan receipt**.
2. Upload a JPEG, PNG, WebP or PDF file.
3. Choose **Single** (one expense from the receipt) or **Multiple** (split a receipt into separate expenses).
4. Review the extracted supplier, date, amount, VAT and category.
5. Confirm to create the expense(s).

Receipt scanning is available on every plan, including Free. The number of scans per month depends on your plan.

### Locked VAT periods

If an inbox message is converted into an expense with a date inside a VAT period that has already been filed, the automated booking is refused to protect the filed return. Instead of silently dropping the invoice, MyCompanyDesk creates an `inbox_expense_period_locked` notification that names the supplier and invoice date and tells you the VAT period is locked. The notification routes to the inbox list, so you can find the original forwarded invoice there. You then have the same two options as other locked-period cases: book the expense manually with a date in the current open period, or file a supplementary VAT return for the locked period.

The capture drawer shows the same VAT-period chip next to the date field before you save, so a locked or grace-period date is visible before the server refuses it.

When a forwarded email or a scan produces an expense but the receipt file itself cannot be attached (for example, an unsupported file type or a file over the limit), the expense is still created and a note is added to it telling you that the attachment is missing. Upload the receipt manually on the expense detail page when that happens.

## VAT treatment

Every expense has a `vat_treatment` field that decides how it lands on your VAT return:

| Value | Meaning |
|---|---|
| `standard` | Domestic VAT charged by the supplier - the default. |
| `b2b_reverse_charge` | Verleggingsregeling: you self-account for the VAT on an EU B2B purchase. |
| `import_reverse_charge` | Non-EU supplier invoices 0% VAT (sources/vat-rates.yaml#countries.NL.zero); you self-account under rubriek 4a, not 4b. Use this for suppliers such as Anthropic or OpenAI. |
| `vat_exempt` | The supply is exempt from VAT. |
| `foreign_vat_charged` | A non-EU supplier charged you VAT (typically reclaimable through the EU refund procedure). |

The treatment is normally inherited from the category default. Override it on a per-expense basis when reality differs - for example, a Software-category expense from a US vendor that did charge VAT instead of applying the EU reverse-charge default.

### Manual VAT amount

The VAT amount is normally calculated from the rate and the net amount. If the supplier's document (for example a credit note with net EUR 0 and VAT only) does not match that calculation, click the VAT amount and enter it yourself. The percentage then stops driving the amount, and the form uses your figure.

### Corrections in locked periods

When an expense sits in a locked VAT period, the detail form blocks changes to the financial fields and offers a correction path. The error is surfaced through the `PERIOD_LOCKED` code, so you see a Dutch explanation instead of the raw backend message. The correction is created in a later, open period and carries a note that links back to the original locked expense, so the audit trail stays intact.

The gate compares the values that are actually about to be written, not just the fields visible in the form. That includes multi-rate `lines`, investment toggles, and depreciation inputs such as useful life, residual value and private-use percentage. Any financially meaningful change on a filed period is refused; inert edits such as notes, payment status or receipt attachments still go through.

## Multi-rate lines

Receipts that mix VAT rates (a supermarket bill with food at 9% and drinks at 21%, say) are recorded on the expense's `lines` column - a JSONB array on the `expenses` table:

```json
[
  { "description": "Food",  "amount_excl_vat": 22.50, "vat_rate": 9,  "vat_amount": 2.03 },
  { "description": "Drinks", "amount_excl_vat": 12.00, "vat_rate": 21, "vat_amount": 2.52 }
]
```

When `lines` is null or empty, the flat fields (`amount_excl_vat`, `vat_rate`, `vat_amount`, `amount_incl_vat`) are the source of truth - the single-rate path is unchanged. When `lines` is present, the line totals drive the flat fields and aggregators iterate the lines for accuracy on the VAT return.

::: info
The form UI for adding lines from the screen is a follow-up - at the moment lines are settable through the API. Single-rate entry from the form works exactly as before.
:::

## Depreciation for investments

Categories with `auto_flag_investment = true` (typically equipment and other capex) turn an expense into an investment automatically:

- The expense is marked `is_investment = true`.
- A monthly depreciation schedule is generated using the category's `useful_life_months` (default 60 if unset).
- The schedule uses straight-line depreciation with daily pro-rata for the first and last calendar month, in line with Belastingdienst guidance.
- Lines live in `expense_depreciation_lines` and feed your reports.

The depreciable basis equals the capitalized cost that the ledger posts to the asset account (`apps/api/src/modules/ledger/posting-engine.js`), not the raw amount excluding VAT. That means it also folds in non-deductible input VAT (for categories with a deduction percentage below 100%) and the business share after private-use percentage, so the schedule, the object register and the KIA calculation all read from the same figure.

Editing the category, date, amount, VAT treatment, private-use percentage, useful life or residual value on an existing expense re-triggers the recompute. If any existing depreciation line already falls inside a locked VAT period, the recompute is refused so the filed return is not restated silently. Toggling an expense out of an investment-flagged category cleans up the depreciation lines too.

An investment whose own date is still in an open period can still hit a locked schedule if its depreciation lines run into a later, locked VAT period. In that case the form shows the `DEPRECIATION_SCHEDULE_LOCKED` error instead of `PERIOD_LOCKED`. Use the **Temporary unlock** action for that period on the [VAT page](/en/features/vat) and retry the edit.

## Linking and filtering

Link expenses to:

- **Projects** - Track project costs.
- **Customers** - Associate purchases with a client (e.g. for rebillable expenses).
- **Suppliers** - Free-form supplier name; reused vendors surface in the autocomplete.

Filters on the list cover category, project, customer, date range and status (active vs archived).

## Bulk actions

Select multiple expenses for:

- **Categorize** - Re-assign the category (re-runs the depreciation hook for newly-investment-flagged rows).
- **Archive** - Move to archive. Archiving unpaid expenses that have a due date pauses their open payment reminders. The bulk bar asks for confirmation first when any selected expense is unpaid and has a due date, so you know how many of the selected expenses lose a reminder. The reminder stays paused while the expenses are archived. If you restore an archived expense later, the daily sweep recreates the reminder, but not immediately; it returns the next night at the earliest.
- **Delete** - Permanently remove.
- **Export** - Download as CSV.
- **Mark as paid** - Mark selected expenses as paid. Marking a bank or inbox draft as paid clears its "To review" flag at the same time, so the row shows up in your reports, VAT return and accountant export instead of staying hidden. This only happens when you set the status to paid, not when you move it back to unpaid.

If a bulk action is refused because one or more selected rows fall inside a locked VAT period, the error message names the exact period and tells you what to do next. A filed and locked period can only be reopened via a supplementary VAT return. A bare lock (the period's filing deadline has passed but no return was filed) can be unlocked temporarily from the VAT page. Remove rows that fall in that period from your selection, or use the matching correction route, then try again.

## Mileage allowance

If you drive a private car for business trips, you can book those trips as a single expense with a mileage allowance.

1. Go to **Expenses** and open the mileage allowance flow.
2. Pick the period you want to book.
3. Select the trips to include.
4. Click **Book as expense**.

The expense is created with one line for the total business kilometres.

<!-- TODO(source-missing): The Dutch mileage allowance rate per kilometre is not yet in sources/. Do not quote the rate in docs until a human verifies the current figure at belastingdienst.nl. -->

If your workspace uses a company car, the actual car costs are already booked as expenses, so a separate mileage allowance is not needed.

Train tickets and other car costs can also be recorded as regular expenses under **Expenses > New** with the supplier, amount, date and category.

## Recurring expenses

For predictable costs (rent, subscriptions, hosting), set up [recurring expenses](/en/features/recurring-expenses) to generate the records on schedule.

## Import

Import historical expenses from CSV via **Profile > Import** > **Expenses**. Map your columns to the expense fields, preview, and confirm.

## Pattern-break notifications

MyCompanyDesk watches for suppliers that usually send a bill every month but have gone quiet. If a supplier had expenses in three separate months and then no confirmed expense for about 50 days, it creates a notification asking whether you are missing a bill.

The check looks at confirmed expenses only. Pending or draft expenses do not count as "we saw a bill", so an unconfirmed import does not stop the notification. The goal is to catch a missing recurring invoice before it throws off your records.

When you open the notification, you can record the missing expense or dismiss it if the silence is expected.

## Audit trail

Creating an expense now writes an audit-trail entry for every creation path, not only for the manual web form. This covers receipts scanned from the app, bank-feed drafts, CSV imports, recurring expenses, inbox and forwarded-email drafts, Peppol e-invoices and mileage trips. The entry names the supplier and date, or the expense number when one is assigned, so the history shows where each expense originated.

## Tips

- Pick the right category first - VAT treatment, deduction percentage and the investment flag all flow from it.
- Set your workspace default VAT rate, default expense category and default payment method in **Workspace settings** to stop the form starting with empty fields every time. A 0% VAT setting works correctly; the form treats it as intentional.
- Use the per-expense VAT treatment override sparingly; if you find yourself overriding every entry in a category, the category default is wrong and should be edited.
- Always attach receipts. The pre-filing checks on the [VAT page](/en/features/vat) flag missing receipts before you file.
- For mixed-rate receipts, use the lines API path until the form UI ships - single-rate entry is fine for everything else.
- Investment expenses can take a moment to recompute when you change the date or amount. The depreciation lines refresh in the background.
