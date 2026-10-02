---
title: Recurring Invoices
description: "Set up invoice templates that generate on a schedule, for monthly retainers, subscriptions, rent collection and maintenance contracts."
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
   - **Customer** — Who to bill
   - **Line items** — What to bill for (descriptions, amounts, VAT)
   - **Frequency** — How often (weekly, monthly, quarterly, yearly)
   - **Start date** — When to start generating
3. Click **Save**

::: tip More options
The new recurring-invoice form keeps optional details behind **More options**. Notes sit there by default; expand the section when you want to add them.
:::

The recurring invoice is created in **Active** status and will generate its first invoice on the next scheduled date.

## Line items

Recurring invoice line items work the same way as regular invoice lines:
- Each line must have a description. If the description is too long the form will show a validation error.
- Each line can carry a percentage or fixed discount.
- A percentage discount cannot be higher than 100%.
- A discount value cannot be negative.

## Payment options and invoice details

A recurring invoice can carry the same document fields a normal invoice has. Under **Payment options**, pick the payment method of this series. As long as you pick nothing, every invoice follows the payment settings of your business, so a change in Settings under **Betalen** (getting paid) carries into the series by itself. Once you pick one, **Use your business default** undoes it. The payment note works the same way.

Under **Invoice details**, set what every invoice in the series shows: **VAT Reverse Charge (BTW verlegd)**, the **Reference**, the **Project** and the **Asset** the billing belongs to, plus a switch to hide this series from your accountant. MyCompanyDesk suggests reverse charge when a customer looks like an EU business outside the Netherlands, and warns when the customer has no VAT number. Reverse charge needs the customer's VAT number: the form refuses to save the series without one, and if the number is gone later, the generation holds that invoice as an unnumbered draft and notifies you, instead of sending an invalid invoice unattended.

Everything set here is carried one on one onto each invoice the series generates. Previously generated invoices keep what they got at the time; see [reverse charge](/en/faq/reverse-charge) for when the treatment applies.

## Frequency options

| Frequency | Description |
|---|---|
| **Weekly** | Every 7 days |
| **Monthly** | Same day each month |
| **Quarterly** | Every 3 months |
| **Yearly** | Once per year |

## Delivery method

Under **After it is created**, the series decides what happens to each invoice it generates:

- **Draft**: the invoice waits as a draft. You check it and send it yourself.
- **Send**: you get a notification and the invoice goes to the customer one day later, unless you hold it back during that day. A held-back invoice stays in the app, ready to send.
- **Collect**: the same as Send, and the amount is also collected through the customer's direct debit mandate. You set that mandate up on a contract with this customer; see [Automatic collection](/en/features/contracts#automatic-collection).

The form tells you when a choice is not available: Send needs a customer with an email address, and Collect needs a valid direct debit mandate.

## Period on the invoice

Each series picks what its lines say about the period they bill:

- **None**: the lines appear on the invoice exactly as you wrote them.
- **Current**: the period that contains the invoice date.
- **Previous**: the period before the invoice date (in arrears).
- **Next**: the period after the invoice date (in advance).

The form shows a preview of how the line reads on the next invoice. Leave it on None when the description already tells the customer enough.

## Duration

Under **Runs** you decide how long the series keeps working:

- **Ongoing**: the series has no end.
- **Until a date**: the series stops after that date. Invoices are still created for a period that starts on or before that date, so the closing period is not lost: billed in arrears, the invoice for June still goes out on 1 July when the series runs until 30 June.
- **A number of times**: the series stops after that many invoices. The page counts how many have been made.

When the series reaches its end, it switches itself off and you get one notification naming the last invoice it made.

## Automatic yearly price increase

A recurring invoice can raise its line prices once a year on its own. Open the recurring invoice and turn on **Yearly price increase**:

- **Increase by**: the CPI (CBS) consumer price figure, or a fixed percentage.
- **Every year on**: the day and month the increase takes effect each year.
- **Email client**: how many months in advance the customer is emailed.

The increase works per line: every line price rises with the percentage, rounded to the cent, and the package components under a line rise along with it.

About a week before the announcement is due, you get a notification with the expected amounts and an email preview, and you can skip this year with one click. Do nothing and the rest runs on its own: on the mail date the customer gets the announcement from your own email address, and on the effective date exactly the lines promised in that email move to their new price in one go. A line you added after the email, or repriced by hand, keeps the price you gave it.

Invoices for periods before the effective date keep the old prices, even when they are created after the date. A period billed in advance gets the new prices as soon as the customer has been emailed. The announcement email mentions amounts excluding VAT only where VAT applies, and names the first invoice that carries the new prices.

If the announcement cannot be sent before the effective date, the increase does not go ahead and a notification tells you why. The card keeps a short history: applied rises, skipped years, and years in which the CPI did not rise.

The increase runs on an active recurring invoice with at least one line. A paused series plans no increase and the card says so. When automatic increases are not part of your plan, you can still adjust the line prices yourself.

## Managing recurring invoices

### Pause

Temporarily stop invoice generation:

1. Open the recurring invoice
2. Click **Pause**
3. Status changes to **Paused** — no invoices are generated

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
- It receives the next automatic invoice number
- What happens next follows the delivery method of the series: the invoice waits as a draft, it goes out one day later unless you hold it back, or it is also collected through the direct debit mandate
- Each generated invoice is independent — you can edit it without affecting the template

### Locked VAT periods

If the scheduled date falls inside a VAT period that has already been filed and locked, MyCompanyDesk does **not** create the invoice. That period is skipped permanently for automatic generation (retrying would never succeed on its own), and the schedule moves on to the next due date. You receive a notification so you can decide what to do next: create a current-dated invoice for the customer, or handle the revenue through a supplementary VAT filing.

A paused or recently resumed template is especially likely to hit this case, because the next scheduled date may lag behind the most recently filed quarter.

## Viewing history

The recurring invoice detail page shows all previously generated invoices, so you can track the full billing history.

## Source link

If an invoice was generated from a recurring template, the invoice detail page shows a **created from recurring invoice** banner with a link back to that template. This lets you jump straight from a single invoice to the template that produced it.

## What happens if my plan changes?

Recurring invoices are part of the Office plan. If you upgrade from Desk to Office, scheduled generation starts from the next due date. If you downgrade from Office to Desk, generation pauses automatically; existing templates and previously generated invoices stay in your workspace, and generation resumes when you upgrade again.

## Bulk actions

- **Pause / Resume** — Toggle multiple recurring invoices
- **Delete** — Remove multiple templates

## Tips

- Combine with [contracts](/en/features/contracts) for contract-based billing
- Review generated invoices before the first auto-send to make sure everything looks right
- Use the next occurrence preview to see when the next invoice will be created
- Check the active count and metrics at the top of the page
