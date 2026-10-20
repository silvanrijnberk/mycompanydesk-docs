---
title: Expenses
description: "Track business expenses, scan receipts, manage categories with their own VAT defaults, and let depreciation schedules run for investments."
last_verified: 2026-10-13
---

# Expenses

Track business expenses, scan receipts, manage workspace categories with their own VAT defaults, and let depreciation schedules run automatically for investments. Manage categories, defaults and the bank link under **Settings › Expenses**, **Settings › Expense categories** and **Settings › Connect bank account**.

## Overview

The expenses page lists every recorded expense. The tabs above the list let you switch quickly between:

- **All**: every recorded expense
- **To pay**: expenses not yet paid
- **Paid**: expenses already paid
- **To confirm**: only shown when something is waiting, such as bank lines and drafts that are not yet in your books

Expenses that still need confirmation (bank or inbox drafts that are not yet in your books) show **Still to confirm** instead of paid or unpaid. They do not count anywhere yet and cannot be selected for bulk actions until they are booked.

You can still filter by category, status, invoiced or not and period, and under **Show** you switch between **Active**, **Archive** and **Trash**. Click an expense to open the detail page. Click **Add** to record one: you scan a receipt there or fill in the details yourself.

Trashed expenses can be viewed in the Trash view, but they cannot be edited, marked as paid, or have their receipt replaced. Restore the expense first if you need to change it.

## Categories

Categories belong to your workspace; they are not a fixed list in the app. Each category carries:

- A **Name** you recognise.
- A default **VAT treatment** (see below).
- A **Deductible %** for partially deductible categories.
- The choice **Treat purchases as investment (depreciate)**, which records new expenses in that category as an investment by default.
- A **Useful life (months)** for depreciation.

Every workspace starts with six default categories: general costs, office costs, car and travel, phone and internet, entertainment, and purchasing and materials. **Run magic-setup wizard** adds a set that fits your trade on top, so a software business gets a category for EU cloud services and a hospitality business one for food at client meetings. Default categories can be edited and archived, but not deleted. You can archive a category to hide it from the form. An archived category still appears in the dropdown for expenses that already use it, marked as "(archived)", so you can keep editing those expenses. Create, edit and delete your own categories from **Settings › Expense categories**. Deleting a category is blocked while expenses or recurring expenses still use it; archive it instead.

## Creating an expense

### Manual entry

1. Go to **Expenses**, click **Add** and pick **Need more fields?** at the bottom to open the full form.
2. Type the **supplier** name. The supplier autocomplete suggests previously-used vendors as you type.
3. Pick a **category**. The form pulls the category's default VAT treatment, default VAT rate hint and deduction percentage straight into the matching fields. If a workspace-wide default expense category is set under **Settings › Expenses**, it is pre-filled here.
4. Fill in the **description**, **amount excl. VAT**, **VAT rate** and **date**. The VAT rate and the **payment method** are pre-filled from your workspace defaults (set under **Settings › Expenses**). The VAT amount is calculated automatically; you can also enter the inclusive amount and let the form back out the components.
5. Optionally set the **VAT treatment** (overrides the category default), **customer**, **project** and **notes**. The pre-filled category and payment method can be overridden on a per-expense basis.
6. Optionally attach a **receipt**.
7. Click **Save**.

### Improve an existing expense

When you edit an expense on Office, the **Improve** button (sparkles icon, top right) suggests changes to fields such as the description and category. You see the current and proposed value side by side, accept what you want, and click **Apply accepted changes**. On a new expense the form starts with **Start with a receipt** instead: drop a photo or PDF and the supplier, amount and VAT are filled in for you.

### From a template

When creating a new expense, click **From template** (only shown when you have saved expense templates). Pick a template and the form fills itself in place with the saved supplier, category, amount and other data. Adjust anything you need, then click **Save**.

### From bank transactions

When your [bank account](/en/features/bank) is connected (Office), categorised outgoing transactions are automatically turned into draft expenses. Each one carries the transaction's counterpart as supplier, the absolute amount as gross, the category's default VAT rate and treatment, and the transaction's booking date. Draft expenses first appear under **To confirm** on the expenses page, where you can confirm, edit, or reject them before they land in your books. See [from transaction to expense](/en/features/bank#from-transaction-to-expense) for the full workflow.

### Receipt scanner

For image or PDF receipts:

1. Go to **Expenses** and click **Add**. **Scan a receipt** reads the receipt right in the side panel. To split a receipt into several lines, open the full form and drop the receipt on **Start with a receipt**: that takes you to the scan screen.
2. Upload a JPEG, PNG, WebP or PDF file.
3. On the scan screen, optionally pick **Single total** (one expense from the receipt) or **Multiple items** (split a receipt into separate lines) under **Advanced Settings** › **Extraction mode**.
4. Review the extracted supplier, date, amount, VAT and category.
5. Confirm to create the expense(s).

When a scanned receipt matches an expense already standing in your books, typically the bank's booking of the same payment, the review card carries **Add receipt to this one** (for an expense that has no receipt yet): the receipt is attached to the existing expense instead of a second booking, and the row drops out of the review. Repeated amounts on one receipt are flagged while staying separate costs. See [Receipt scanning](/en/advanced/receipt-scanning) for the detail.

Receipt scanning is available on every plan, including Desk. The number of scans per month depends on your plan: 3 on Desk and 200 on Office.

### Locked VAT periods

If an inbox message is converted into an expense with a date inside a VAT period that has already been filed, the automated booking is refused to protect the filed return. Instead of silently dropping the invoice, MyCompanyDesk creates a notification that names the supplier and invoice date and tells you the VAT period is locked. The notification routes to the inbox list, so you can find the original forwarded invoice there. You then have the same two options as other locked-period cases: book the expense manually with a date in the current open period, or file a supplementary VAT return for the locked period.

The capture drawer shows the same VAT-period chip next to the date field before you save, so a locked or grace-period date is visible before the server refuses it.

When a forwarded email or a scan produces an expense but the receipt file itself cannot be attached (for example, an unsupported file type or a file over the limit), the expense is still created and a note is added to it telling you that the attachment is missing. Upload the receipt manually on the expense detail page when that happens.

## Supplier logos

When a supplier has a known logo, MyCompanyDesk shows it next to the supplier name in the expense list and in the supplier autocomplete when you create or edit an expense. The logo comes from the KVK register for Dutch businesses or from a curated list of common brands. If no logo is available, the app shows a monogram instead.

## VAT treatment

Every expense has a **VAT treatment** that decides how it lands on your VAT return:

| Treatment | Meaning |
|---|---|
| Standard | Domestic VAT charged by the supplier, the default. |
| VAT reverse charged to me (domestic) | A Dutch supplier shifts the VAT to you, for example a subcontractor in construction. This goes in rubriek 2a. |
| Reverse charge (EU supplier) | Verleggingsregeling: you self-account for the VAT on an EU B2B purchase. |
| Reverse charge (supplier outside the EU) | Non-EU supplier invoices 0% VAT (sources/vat-rates.yaml#countries.NL.zero); you self-account under rubriek 4a, not 4b. Use this for suppliers such as Anthropic or OpenAI. |
| Exempt | The supply is exempt from VAT. |
| Foreign VAT charged | A foreign supplier charged you VAT (typically reclaimable through the EU refund procedure). |

The treatment is normally inherited from the category default. Override it on a per-expense basis when reality differs - for example, a Software-category expense from a US vendor that did charge VAT instead of applying the EU reverse-charge default.

Categories can also cap what the return reclaims. A category that carries a deduction percentage below 100% (think of a meal or gift category) leaves part of the VAT, or all of it, outside the return, even when the deductible switch is on. Where the expense would otherwise claim VAT back, the form warns under the switch and names the category and the share you get back; with the deductible switch off, foreign or exempt VAT, no VAT charged, or the KOR there is nothing to claim and no warning appears. The booking card on the expense detail page carries the same warning as a flag.

### Manual VAT amount

The VAT amount is normally calculated from the rate and the net amount. If the supplier's document (for example a credit note with net EUR 0 and VAT only) does not match that calculation, click the VAT amount and enter it yourself. The percentage then stops driving the amount, and the form uses your figure.

### Corrections in locked periods

When an expense sits in a locked VAT period, the detail form blocks changes to the financial fields and offers a correction path. The correction is created in a later, open period and carries a note that links back to the original locked expense, so the audit trail stays intact.

The gate compares the values that are actually about to be written, not just the fields visible in the form. That includes expenses with lines at several VAT rates, the investment switch, and depreciation inputs such as useful life, residual value and private-use percentage. Any financially meaningful change on a filed period is refused; inert edits such as notes, payment status or receipt attachments still go through.

## Multi-rate lines

Receipts that mix VAT rates (a supermarket bill with food at 9% and drinks at 21%, say) keep a line per rate when they come in through a receipt scan, a Peppol e-invoice or a bank import. The line totals drive the expense's amounts, and the VAT return reads every line at its own rate. The form cannot change such an expense to a single rate. To enter a mixed receipt by hand, book one expense per VAT rate.

## Depreciation for investments

Turn on **Investment (depreciate)** on an expense, or **Treat purchases as investment (depreciate)** on its category, and the expense becomes an investment:

- A monthly depreciation schedule is generated over **Depreciate over (years)**, which defaults to the category's useful life (60 months if unset).
- The schedule uses straight-line depreciation with daily pro-rata for the first and last calendar month, in line with Belastingdienst guidance.
- The depreciation feeds your reports.

The depreciable basis equals the value the books capitalise as an asset, not the raw amount excluding VAT. That means it also folds in non-deductible input VAT (for categories with a deduction percentage below 100%) and the business share after private-use percentage, so the schedule, the object register and the KIA calculation all read from the same figure.

Editing the category, date, amount, VAT treatment, private-use percentage, useful life or residual value on an existing expense re-triggers the recompute. If any existing depreciation line already falls inside a locked VAT period, the recompute is refused so the filed return is not restated silently. Toggling an expense out of an investment-flagged category cleans up the depreciation lines too.

An investment whose own date is still in an open period can still hit a locked schedule if its depreciation lines run into a later, locked VAT period. In that case the form tells you the depreciation runs into a locked VAT period. Use the **Unlock temporarily** action for that period on the [VAT page](/en/features/vat) and retry the edit.

## Linking and filtering

Link expenses to:

- **Projects** - Track project costs.
- **Customers** - Associate purchases with a client (e.g. for rebillable expenses).
- **Suppliers** - Free-form supplier name; reused vendors surface in the autocomplete.

Filters on the list cover status, category, invoiced or not, and period, and **Show** switches between active, archived and trashed expenses.

## Rebilling and cost-price changes

When an expense is linked to a customer it can be rebilled on an invoice. The expense detail has a **Charge to the customer** switch: flagged expenses land on the customer's next invoice, and show **Already on an invoice** once they are on one. [Automatic time invoicing](/en/features/time-registration#automatic-time-invoicing) only includes expenses that carry this flag.

The expense detail shows a **Linked invoice** line when it has been added to an invoice, and a warning badge **Cost changed after invoicing** when the expense's cost price was edited after the invoice was sent. That badge means the amount on the invoice no longer matches the underlying expense; open the invoice or edit the expense to bring them back in line.

## Bulk actions

Select multiple expenses for bulk work. While a selection is running a checkbox column appears in the list; outside a selection there are no checkboxes, and an empty list shows no select button at all. Your sort choice on the list is remembered, so a reload keeps it.

- **Archive** - Move to archive. Archiving unpaid expenses that have a due date pauses their open payment reminders. The bulk bar asks for confirmation first when any selected expense is unpaid and has a due date, so you know how many of the selected expenses lose a reminder. The reminder stays paused while the expenses are archived. If you restore an archived expense later, the daily sweep recreates the reminder, but not immediately; it returns the next night at the earliest.
- **Delete** - Move to the trash, where you can still restore the expense. In **Archive** you pick **Restore to active** or **Move to trash**; in **Trash** you pick **Restore to archive** or **Delete permanently**.
- **Mark as paid** - Mark selected expenses as paid. Marking a bank or inbox draft as paid clears its "To review" flag at the same time, so the row shows up in your reports, VAT return and accountant export instead of staying hidden. This only happens when you set the status to paid, not when you move it back to unpaid.

If a bulk action is refused because one or more selected rows fall inside a locked VAT period, the error message names the exact period and tells you what to do next. A filed and locked period can only be reopened via a supplementary VAT return. A bare lock (the period's filing deadline has passed but no return was filed) can be unlocked temporarily from the VAT page. Remove rows that fall in that period from your selection, or use the matching correction route, then try again.

## Mileage allowance

If you drive a private car for business trips, you can book those trips as a single expense with a mileage allowance. The trips come from Schedule and from the Trips screen below, so booking them asks for access to those; without access, the flow explains what to ask your admin for instead of failing.

1. Go to **Expenses › Mileage** and click **Book now** above the list. That opens **Log mileage allowance**.
2. Pick the period you want to book.
3. Select the trips to include.
4. Click **Book as expense**.

The expense is created with one line for the total business kilometres.

The allowance is €0.25 per business kilometre for trips in 2026 and €0.23 for trips up to and including 2025 ([`sources/nl-mileage.yaml#ib_entrepreneur.per_km_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-mileage.yaml)). Every trip is priced at the rate of its own year, so a period that spans 1 January combines both rates. The allowance carries no VAT, and fuel, insurance, tolls and parking are included in it: you cannot deduct those separately on top ([`sources/nl-mileage.yaml#ib_entrepreneur.conditions`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-mileage.yaml)).

If your workspace uses a company car, the actual car costs are already booked as expenses, so a separate mileage allowance is not needed.

Train tickets and other car costs can also be recorded as regular expenses under **Expenses › Add** with the supplier, amount, date and category.

## Trips

The **Trips** screen under Expenses holds your kilometres for the year, with or without hours. A trip carries a date, where you went from and to, the kilometres one way, whether it was business or private, an optional customer and a note. An hour entry is no longer needed to record kilometres: every kilometre entry (the one on **Expenses**, in the search palette and in the travel settings) opens the trip form.

A route is more than from and to. The trip form carries **stops**: intermediate addresses on the way, and **Back to the start** plans the return along them without counting the kilometres twice. Trips to your appointments, work orders and hours at a client show up by themselves, from home past your addresses and back again; nothing needs confirming. A trip you changed by hand stays as you entered it when the appointment moves later, and one you left alone adjusts with it.

Trips can bill themselves out. **Bill to a customer** charges a whole trip to one customer for a fixed amount or per kilometre (the rate is remembered per customer), either as a draft invoice now or set aside for the next monthly invoice to that customer. A trip that still needs an invoice carries a **To invoice** mark, and once its costs sit on an invoice or work order the trip is locked: remove them there first before changing it.

Visiting customers can come with a **call-out fee**: a fixed amount per visit, a price per kilometre, or none. You set it per customer, or for all your customers at once with one choice. On a day trip past several clients, every visit becomes its own invoice line, divided evenly per visit or by distance; the trip detail shows the route and that split over your clients. **Log work** notes a customer's hours, kilometres and call-out fee in one sheet, and what it gathers goes on that customer's next invoice.

When you add a trip, the form asks **What do you drive?**. Pick a private car and every business kilometre earns a fixed allowance per kilometre, which you book as a cost. Pick a company car or van and the fuel, maintenance and insurance are already booked as expenses, so no allowance is shown and the trips are for your records only. Until the question is answered, the allowance stays out of sight; on a workspace with a team, the workspace admin answers the question for everyone.

The screen groups trips per month and totals each month: business kilometres, private kilometres and the allowance they add up to. Trips that are not yet booked as a cost carry that total with a **Book now** link into the mileage allowance flow above. A trip that belongs to a logged hour entry is marked as such, and a trip that has been booked shows that too. Changing a booked trip starts with deleting the expense it became.

## Foreign currency

The books stay in euros. When the document behind an expense is in another currency, that currency and the amount on the document are recorded next to the euro amount, while every report, the VAT return and the ledger keep reading euros.

How the euro amount comes about:

- **Scan in another currency**: the scan screen asks for the euro amount, the amount your bank converts the document to. Until it is entered, the card shows the document amount in its own currency, never an invented euro figure. Only the euro amount reaches your books.
- **Forwarded invoice (inbox)**: a foreign-currency invoice that books itself carries a conversion at the European Central Bank rate of the document date, marked as a provisional amount. Weekend and holiday dates have no rate of their own and use the rate of the previous working day. When no rate exists at all, nothing is guessed: one notification points you to the scan screen to enter the euro amount yourself.
- **The bank wins**: as soon as the payment turns up on a connected bank account, the actual debit takes the place of the provisional conversion. The euro amount becomes what the bank charged, card issuer's surcharge included, and no second cost is booked beside it. An expense that sits in a locked VAT period is never quietly changed: it stays linked to the bank transaction and a note on the expense tells you what the bank debited and that the difference belongs on a next return.

In the list, a foreign-currency expense shows the euro amount with a converted note; the expense detail keeps the original currency, the original amount and the date of the rate used.

## Recurring expenses

For predictable costs (rent, subscriptions, hosting), set up [recurring expenses](/en/features/recurring-expenses) on Office to generate the records on schedule. The **Recurring expenses** button on the expenses page takes you there.

## Import

Import historical expenses from CSV via **Settings › Switching** › **Import invoices**, which opens **Import CSV Data**; pick **Expenses** there. Map your columns to the expense fields, preview, and confirm.

## Pattern-break notifications

MyCompanyDesk watches for suppliers that usually send a bill every month but have gone quiet. If a supplier had expenses in three separate months and then no confirmed expense for about 50 days, it creates a notification asking whether you are missing a bill.

The check looks at confirmed expenses only. Pending or draft expenses do not count as "we saw a bill", so an unconfirmed import does not stop the notification. The goal is to catch a missing recurring invoice before it throws off your records.

When you open the notification, you can record the missing expense or dismiss it if the silence is expected.

## Audit trail

Creating an expense now writes an audit-trail entry for every creation path, not only for the manual web form. This covers receipts scanned from the app, bank-feed drafts, CSV imports, recurring expenses, inbox and forwarded-email drafts, Peppol e-invoices and mileage trips. The entry names the supplier and date, or the expense number when one is assigned, so the history shows where each expense originated.

## Tips

- Pick the right category first - VAT treatment, deduction percentage and the investment flag all flow from it.
- Set your workspace default VAT rate, default expense category and default payment method in **Settings › Expenses** to stop the form starting with empty fields every time. A 0% VAT setting works correctly; the form treats it as intentional.
- Use the per-expense VAT treatment override sparingly; if you find yourself overriding every entry in a category, the category default is wrong and should be edited.
- Always attach receipts. The pre-filing checks on the [VAT page](/en/features/vat) flag missing receipts before you file.
- For mixed-rate receipts you enter by hand, book one expense per VAT rate.
- Investment expenses can take a moment to recompute when you change the date or amount. The depreciation lines refresh in the background.
