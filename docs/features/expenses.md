---
title: Expenses
last_verified: 2026-05-09
---

# Expenses

Track business expenses, scan receipts, manage workspace categories with their own VAT defaults, and let depreciation schedules run automatically for investments.

## Overview

The expenses page lists every recorded expense. Filter by category, project, date range or status. Click an expense to open the detail page; click **New** to add one manually, or **Scan receipt** to extract one from an image or PDF.

## Categories

Categories are stored per workspace in the `expense_categories` table — they aren't a hardcoded enum. Each category carries:

- A **key** (slug used by the API and the form).
- A **VAT treatment** default (see below).
- A **deduction percentage** for partially-deductible categories.
- An **auto-flag investment** flag that turns matching expenses into investments automatically.
- A **default useful-life** in months for the depreciation engine.

The setup wizard seeds an industry-tailored set on top of the eleven system defaults, so a software-heavy workspace ends up with extra keys like `cloud_services_eu`, while a hospitality workspace might get `food_client_meeting`. New categories from the wizard validate the same way as system defaults — unknown or mistyped keys are rejected with a 400. Edit, archive or add categories from the categories settings page.

## Creating an expense

### Manual entry

1. Go to **Expenses > New**.
2. Type the **supplier** name. The supplier autocomplete suggests previously-used vendors as you type.
3. Pick a **category**. The form pulls the category's default VAT treatment, default VAT rate hint and deduction percentage straight into the matching fields.
4. Fill in the **description**, **amount excl. VAT**, **VAT rate** and **date**. The VAT amount is calculated automatically; you can also enter the inclusive amount and let the form back out the components.
5. Optionally set the **VAT treatment** (overrides the category default), **payment method**, **customer**, **project**, **reference** and **notes**.
6. Optionally attach a **receipt**.
7. Click **Save**.

### Generate from supplier

When you're creating a new expense and you've typed a supplier name, the **Generate** button (sparkles icon, top right) runs an LLM prefill. It uses the supplier and any partial inputs to suggest a description, category, VAT treatment, amount and date. Review the result before saving — the prefill is a draft, not an autopilot.

### From bank transactions

When your [bank feed](/features/bank) is connected, categorised outgoing transactions are automatically turned into draft expenses. Each one carries the transaction's counterpart as supplier, the absolute amount as gross, the category's default VAT rate and treatment, and the transaction's booking date. Draft expenses first appear in the bank-feed review inbox, where you can confirm, edit, or reject them before they land in your books. See [reviewing auto-imported expenses](/features/bank#reviewing-auto-imported-expenses) for the full workflow.

### Receipt scanner

For image or PDF receipts:

1. Go to **Expenses > Scan receipt**.
2. Upload a JPEG, PNG, WebP or PDF file.
3. Choose **Single** (one expense from the receipt) or **Multiple** (split a receipt into separate expenses).
4. Review the extracted supplier, date, amount, VAT and category.
5. Confirm to create the expense(s).

Receipt scanning is on the Pro plan and above.

## VAT treatment

Every expense has a `vat_treatment` field that decides how it lands on your VAT return:

| Value | Meaning |
|---|---|
| `standard` | Domestic VAT charged by the supplier — the default. |
| `b2b_reverse_charge` | Verleggingsregeling: you self-account for the VAT on an EU B2B purchase. |
| `vat_exempt` | The supply is exempt from VAT. |
| `foreign_vat_charged` | A non-EU supplier charged you VAT (typically reclaimable through the EU refund procedure). |

The treatment is normally inherited from the category default. Override it on a per-expense basis when reality differs — for example, a Software-category expense from a US vendor that did charge VAT instead of applying the EU reverse-charge default.

## Multi-rate lines

Receipts that mix VAT rates (a supermarket bill with food at 9% and drinks at 21%, say) are recorded on the expense's `lines` column — a JSONB array on the `expenses` table:

```json
[
  { "description": "Food",  "amount_excl_vat": 22.50, "vat_rate": 9,  "vat_amount": 2.03 },
  { "description": "Drinks", "amount_excl_vat": 12.00, "vat_rate": 21, "vat_amount": 2.52 }
]
```

When `lines` is null or empty, the flat fields (`amount_excl_vat`, `vat_rate`, `vat_amount`, `amount_incl_vat`) are the source of truth — the single-rate path is unchanged. When `lines` is present, the line totals drive the flat fields and aggregators iterate the lines for accuracy on the VAT return.

::: info
The form UI for adding lines from the screen is a follow-up — at the moment lines are settable through the API. Single-rate entry from the form works exactly as before.
:::

## Depreciation for investments

Categories with `auto_flag_investment = true` (typically equipment and other capex) turn an expense into an investment automatically:

- The expense is marked `is_investment = true`.
- A monthly depreciation schedule is generated using the category's `useful_life_months` (default 60 if unset).
- The schedule uses straight-line depreciation with daily pro-rata for the first and last calendar month, in line with Belastingdienst guidance.
- Lines live in `expense_depreciation_lines` and feed your reports.

Editing the category, date or amount on an existing expense re-triggers the recompute — old lines are deleted and a fresh schedule is written. Toggling an expense out of an investment-flagged category cleans up the depreciation lines too.

## Linking and filtering

Link expenses to:

- **Projects** — Track project costs.
- **Customers** — Associate purchases with a client (e.g. for billable expenses).
- **Suppliers** — Free-form supplier name; reused vendors surface in the autocomplete.

Filters on the list cover category, project, customer, date range and status (active vs archived).

## Bulk actions

Select multiple expenses for:

- **Categorize** — Re-assign the category (re-runs the depreciation hook for newly-investment-flagged rows).
- **Archive** — Move to archive.
- **Delete** — Permanently remove.
- **Export** — Download as CSV.

## Recurring expenses

For predictable costs (rent, subscriptions, hosting), set up [recurring expenses](/features/recurring-expenses) to generate the records on schedule.

## Import

Import historical expenses from CSV via **Profile > Import** > **Expenses**. Map your columns to the expense fields, preview, and confirm.

## Tips

- Pick the right category first — VAT treatment, deduction percentage and the investment flag all flow from it.
- Use the per-expense VAT treatment override sparingly; if you find yourself overriding every entry in a category, the category default is wrong and should be edited.
- Always attach receipts. The pre-filing checks on the [VAT page](/features/vat) flag missing receipts before you file.
- For mixed-rate receipts, use the lines API path until the form UI ships — single-rate entry is fine for everything else.
- Investment expenses can take a moment to recompute when you change the date or amount. The depreciation lines refresh in the background.
