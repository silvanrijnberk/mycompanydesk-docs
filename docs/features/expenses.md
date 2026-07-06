---
title: Expenses
last_verified: 2026-07-02
---

# Expenses

Track business expenses, scan receipts, and let MyCompanyDesk handle VAT defaults and depreciation for larger purchases.

## Overview

The expenses page lists every recorded expense. Use the search box and the filter menu to narrow the list by category, invoice status (invoiced or uninvoiced) and date range, and switch between the **Active**, **Archive** and **Trash** views. The cards above the list double as quick filters: click the unpaid card to show only unpaid expenses, or the uncategorized card to show expenses that still need a category. Links from the VAT page and the invoices page can also open the list pre-filtered, for example on expenses with a missing receipt, a missing VAT amount, or costs you can still bill to a customer. Every applied filter shows as a chip you can remove with one click.

Expenses that came in through your [bank feed](/features/bank) carry a small bank icon, so you can always tell them apart from manual entries.

Click an expense to open its detail page, or click **Add** to record one manually. The gear icon at the top opens the expense settings.

## Categories

MyCompanyDesk ships with six standard categories that map directly onto the Dutch tax return:

- **Algemene kosten**
- **Kantoorkosten**
- **Autokosten & reizen**
- **Telefoon & internet**
- **Representatiekosten**
- **Inkoop & materiaal**

On top of these you can add categories of your own. Open the gear icon on the expenses page and go to **Expense categories**, then run the category wizard: pick your industry and it suggests a tailored set, optionally refined by a short description of your business.

Each category carries its own defaults: a VAT treatment, a deductible percentage for partially deductible costs, a suggested VAT rate, and optionally an automatic investment flag with a default depreciation period. These defaults flow into the form whenever you pick the category. You can edit or archive categories at any time; the six standard ones can be renamed but not removed.

## Creating an expense

### Manual entry

1. Go to **Expenses** and click **Add**.
2. Type the **supplier** name. The autocomplete suggests vendors you have used before.
3. Pick a **category**. Its VAT treatment, suggested VAT rate and deductible percentage are filled in for you. If you set a default category in the expense settings, it is pre-selected.
4. Fill in the **description**, **amount excl. VAT**, **VAT rate** and **date**. The VAT amount is calculated automatically; you can also enter the amount incl. VAT and let the form work out the rest.
5. Optionally adjust the **VAT treatment**, link a **customer** or **project**, and add a **reference**, **notes** or a different **payment method**.
6. Click **Save**.

The form has no receipt field. After saving, the detail page prompts you to upload the receipt there, as an image or PDF.

### Generate from supplier

Once you have typed a supplier name, the **Generate** button (sparkles icon, top right) suggests the remaining fields for you: description, category, VAT treatment, amount and date. Review the result before saving; it is a head start, not an autopilot.

### From bank transactions

When your [bank feed](/features/bank) is connected, outgoing transactions can be turned into expenses. Each one carries the counterparty as supplier, the amount, and the booking date, and you review them before they land in your books. See [reviewing auto-imported expenses](/features/bank#reviewing-auto-imported-expenses) for the full workflow.

### Receipt scanner

For image or PDF receipts:

1. Go to **Expenses > Scan Receipt**.
2. Upload a JPEG, PNG, WebP or PDF file.
3. Review the extracted supplier, date, amount, VAT and category.
4. Confirm to create the expense(s).

Under **Advanced Settings** you can choose between **Single total** (one expense for the whole receipt) and **Multiple items** (split the document into separate expenses), limit a PDF to certain pages, and have the scanned file attached to each created expense as its receipt.

Receipt scanning is available on every plan, with a monthly allowance per plan: 3 scans on Free, 30 on Starter and 200 on Pro.

## VAT treatment

Every expense has a VAT treatment that decides how it lands on your VAT return:

| Treatment | Meaning |
|---|---|
| **Standard** | The supplier charges Dutch VAT. This is the default. |
| **Reverse-charge** | The VAT is shifted to you (verleggingsregeling), typical for EU B2B purchases. The supplier invoices 0% and you account for the VAT yourself. |
| **Exempt** | The purchase is exempt from VAT: nothing to deduct. |
| **Foreign VAT charged** | A foreign supplier charged you their local VAT. This is not deductible on your Dutch return. |

The treatment is inherited from the category. Override it on the expense itself when reality differs, for example a software purchase from a US vendor that charged VAT instead of applying the usual reverse charge.

## Investments and depreciation

Larger purchases (a laptop, machinery, furniture) are usually not booked as a cost in one go but written off over several years. MyCompanyDesk handles this per expense:

- The form has an **Investment (depreciate)** switch. Flip it on to book the expense as an investment.
- From 450 euros excl. VAT the form suggests it for you, with a one-click **Book as investment** button. Categories can also be set to flag investments automatically.
- Choose the write-off period in the **Depreciate over (years)** field, from 1 to 10 years. This overrides the category default; if the category has none, 5 years is used.
- A live preview shows roughly what the monthly depreciation will be.

You reclaim the VAT in full in the quarter of purchase; only the amount excluding VAT is spread over the chosen period. The monthly depreciation lines flow into your reports automatically. If you later change the amount, date or period, the schedule is recalculated.

## Linking

Link expenses to:

- **Projects** to track project costs.
- **Customers** to associate purchases with a client, for example costs you want to rebill.
- **Suppliers** as a free-form name; reused vendors surface in the autocomplete.

## Bulk actions

Select multiple expenses to act on them at once. On the active list you can choose **Mark as Paid** (when all selected expenses are unpaid), **Archive** or **Delete**. The Archive view offers restore to active or move to trash; the Trash view offers restore to archive or permanent deletion.

## Recurring expenses

For predictable costs (rent, subscriptions, hosting), set up [recurring expenses](/features/recurring-expenses) to generate the records on schedule.

## Import

Import historical expenses from CSV via **Profile > Import**. Map your columns to the expense fields, preview, and confirm.

## Tips

- Pick the right category first: VAT treatment, deductible percentage and the investment flag all flow from it.
- Set your default category and payment method via the gear icon on the expenses page, and your usual VAT rate under **Settings > BTW**, so the form starts pre-filled.
- If you find yourself overriding the VAT treatment on every expense in a category, edit the category default instead.
- Always attach receipts. The pre-filing checks on the [VAT page](/features/vat) flag missing receipts before you file.
