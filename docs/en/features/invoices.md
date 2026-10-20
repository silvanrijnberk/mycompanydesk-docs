---
title: Invoices
description: "Create professional invoices, send them with payment links, and track them from draft through outstanding to paid, with filters on every status."
---

# Invoices

Invoices are at the core of MyCompanyDesk. Create professional invoices, send them to customers with payment links, and track payments through to completion. Creating and sending invoices is unlimited on every plan, Desk included.

## Settings for invoices and quotes

**Settings › Invoices and quotes** holds defaults that apply to every new invoice and quote.

### Payment terms

Set the default number of days a customer gets to pay: **14 days** (what most people choose), **30 days**, **60 days**, or another number of days you type yourself (0 shows as **Immediately**). This value appears on every new invoice, but you can override it per invoice.

### Reminders

Turn on **Overdue? Automatically send a reminder** and MyCompanyDesk sends a friendly reminder once an invoice is three days past its due date, then every week until it is paid. Automatic reminders are part of Office. Sending a reminder yourself from the invoice works on every plan.

### Quote validity

Choose how long quotes stay valid by default: **2 weeks**, **1 month** or **2 months**. Every new quote gets a valid-until date filled in from this setting, so a quote never goes out without one.

### Auto-invoice signed quotes

When **Signed? Automatically prepare a draft invoice** is on, a signed quote automatically becomes a draft invoice. The draft is ready for your review; you still choose when to send it. This automation is part of Office.

### Attach terms by default

If you keep your general terms in Documents, every send can attach them as a PDF. Under **Terms and conditions** on the same settings page you choose, separately for quotes and for invoices, whether the send dialog starts with that box ticked. Out of the box, quotes carry their terms and invoices do not. The box itself stays adjustable on every send.

### Invoice numbering

MyCompanyDesk numbers invoices automatically in the order the Belastingdienst expects, unless you set a custom prefix or starting number under **Numbering**.

| Field | What it does |
|---|---|
| **Prefix** | Text in front of the year on every new invoice, for example `INV-` or `2026_`. Sent invoices keep their existing number. |
| **Next invoice number** | The next number to use. You can only move forward, never back, because lowering the number would create duplicates. |

The preview under the fields shows what your next invoice number will look like. Already sent invoices are never renumbered when you change these settings.

### Document language

Under **Which language do you create your documents in?** you choose the language for invoices, quotes and emails to your customers. Dutch is the default. Invoices in other languages are part of Office. An invoice that has been finalized keeps the language it was made in.

The language is also a per-customer and per-invoice choice: set it on the customer and every document for that customer comes out in their language, and set it on a draft invoice for the one-off exception. MyCompanyDesk reads the choice in the order invoice, then customer, then workspace. It freezes when the document is sent: the PDF, the email, the portal view, a credit note and the latest reminder keep speaking the language the document left in. Quotes follow the customer. The same plan limit carries over: documents in other languages are part of Office.

### Peppol e-invoicing

A toggle on the same settings page enables [Peppol e-invoicing](/en/features/peppol) (Office). When you switch it on, your company details are registered with the Peppol access point and you can send or receive e-invoices alongside email. See the Peppol page for identity verification, receiving, and missing-field checks.

## Overview

The invoices page lists your invoices under tabs: **All** ("what needs you first"), **To send** and **Awaiting payment**. The three tabs carry live counts, the payment tabs also show their total amount in euros, and the awaiting tab raises a red alert with the number of overdue invoices.

Inside the lists, invoices are grouped by where they stand, so the work you must do comes first and finished work sinks to the bottom:

- **Overdue**, then **To send**, then **Awaiting payment**: the work sitting with you now
- **Paid in September** (the two most recent months with rows), then **Paid earlier** for everything before that, collapsed until you press Show
- **Paid**: paid without an attributable month
- **Cancelled or credited**: the archive of work that is no longer live

Every group header carries the count of the whole group and, where it applies, the group total. Collapse a group with "Hide" and its rows stop counting towards the pages while the header stays in place. A month dated in the future (almost always a typo in the date) never collapses: it stays open with its own header so the mistake stays visible.

Next to the dates, each row carries a **Status** column that says the state in plain words: "Draft", "To send", "due date 12 May passed", "due in 3 days", "customer says: paid". The **Status** filter in the filter panel still narrows the list to any single status, including drafts, late, paid and cancelled. Once you sell through your website, a **Website sales** tab appears next to **Invoices** with its own list of those sales.

## Creating an invoice

### Full form

1. Go to **Invoices** and click **Create**
2. Select or create a **customer**
3. Add **line items** with description, quantity, unit price, and VAT rate. The default VAT rate for new lines comes from **Settings › VAT**. If a customer has reverse charge enabled, the line automatically uses 0%.
4. Set the **invoice date** and **due date**
5. Add optional **notes** or **internal remarks**
6. Click **Save** to create a draft

On the phone, a new invoice opens as a short step-by-step flow instead of the full form: customer first, then the lines, then a review step before saving and sending.

Did the invoice start from a quote? The quote's own note then sits right above yours as **Note from the quote (not on the invoice)**, with **Take over** beside it when you want the note copied onto the invoice.

### From a template

In the invoice form, click **From template** (only shown when you have saved invoice templates). Pick a template, and the form fills itself in place with its line items, customer and other saved data. Adjust anything you need, then save and send. You save an invoice as a template with **Save as Template** in the more menu on the invoice.

Saved templates keep the full line: description, quantity, unit, unit price, VAT rate, discount, and whether the line is VAT exempt. They deliberately do not keep the link to a catalog item, because catalog items can be deleted later and the template would then fail when used.

### Invoicing a customer's month in one drawer

The drawer **Invoice {customer}** gathers what one customer still has open in one period: a fixed price per month, appointments that took place, logged hours, trips and costs to pass on. **Invoice everything** does the same for all customers at once; on a customer's page on the phone, **Invoice {month}** sits right under the heading. The period is yours to pick when another month is the one you want, and the drawer groups the work as one line per day or one total line per group.

**Prepare invoice** turns the selection into drafts: you check them first, nothing goes to the customer yet, and preparing for all customers makes one draft each. The sources you invoiced are locked as the lines are added, so the same hours, appointments and trips no longer appear in the other flows; a line carries the links to what it bills instead of a copy of the text.

## Prices including VAT

Above the line items you choose whether you type prices with or without VAT. With prices including VAT, a line price is the price the customer pays, VAT included, and the VAT is taken back out of the price instead of added on top. On desktop the choice sits in the column header of the price field: it reads **Price excl. VAT** or **Price incl. VAT**, and clicking it opens a menu whose two options, **Prices without VAT** and **Prices with VAT included**, each carry their own short explanation. On mobile, where the line items have no column headers, the same choice sits as its own line above the list. The choice exists on invoices, quotes and recurring invoices, and each document remembers its own choice.

- The price you typed is what stays: change the VAT rate on the line afterwards and the amount including VAT remains in place, with the amount excluding VAT adjusting underneath it.
- A discount in euros on a line discounts what the customer pays. A percentage discount works the same as on any other line.
- On prices including VAT, the PDF and the invoice, quote and recurring-invoice detail pages show what the customer pays: the unit price and the line amount print including VAT (€38.00, not €31.40), the price excluding VAT sits underneath the unit price in small print, and the VAT block names the base of every rate ("VAT 21% on €35.54"). Package parts print including VAT too, so they add up to the package price. The totals of the document stay unchanged, and the e-invoice carries the same figures.
- Working with prices excluding VAT while the prices you typed are the paid kind? When the customer is a private customer, the form asks whether the prices you typed include VAT. One click switches the document over without touching your amounts. Starting a new document for a private customer turns prices including VAT on by itself (the prices the app fills in from your offering keep their line totals), and a notice above the line list then says "Private customer: you are now typing prices including VAT.", with a **Turn off** button that puts prices excluding VAT back.

## Attributing an invoice to an asset

If the revenue belongs to a rental property, vehicle or other asset, select the asset in the invoice form. The invoice is then listed on that asset's detail page and included in its total revenue. This works both for invoices generated from a rental contract and for direct attribution, such as service-charge settlements, one-off charges and sale invoices. [Assets](/en/features/objects) are an Office module.

## Invoice details

Each invoice has a detail page showing:

- Customer information
- Line items with subtotals
- VAT breakdown
- Total amount
- Status and history
- Payment link (if sent)

## Document preview

Every saved invoice has a live PDF preview on its detail page. The preview shows the invoice exactly as your customer will see it: layout, line items, totals, branding and logo.

The preview header has a **Download PDF** button, a **Print** button, and a **Change design** button. Click **Change design** to jump straight to the invoice design settings and adjust the look of all your invoices, quotes and reminders. When you are done, you return to the invoice you came from. On mobile the same action lives in the page's overflow menu so the preview header stays uncluttered.

## Actions

The top action on the invoice detail page follows the step the invoice is at:

- **Finalize**: on a draft. The invoice gets its definitive number.
- **Send**: on a finalized invoice that has not gone to the customer yet.
- **Mark as paid**: on a sent invoice that is waiting for payment, and when the customer reports they paid, so you can confirm it instead of sending the invoice again.
- **Send Reminder**: on an overdue invoice. **Mark as paid** then moves to the more menu.
- **Duplicate**: on a paid or cancelled invoice, as a secondary button, so you can recreate it quickly.

Other actions live in the more menu next to the top action, depending on the status: **Duplicate**, **Repeat every month** (turns the invoice into a recurring invoice), sending the email again, **Send Reminder**, sending to your accountant, **Save as Template**, and cancelling the invoice. On the phone, the preview, **Download PDF** and **Change design** sit in that menu too.

### Send

Send the invoice to your customer via email. The email includes:

- A customizable message (based on your email template)
- The invoice PDF as an attachment
- A payment link for online payment

Before sending, the email preview shows the message exactly as your customer will receive it. Under **Include in email** the send dialog has switches for the **View button (online link)**, the **Download button**, the **PDF attachment** and **Include invoice items**. These switches are reflected in the live preview, so what you see is what your customer gets. Fine-tuning the message every time? Tick **Use this text from now on for invoices** in the same dialog and every next invoice email starts from that version; see [Email templates](/en/faq/email-template).

If your workspace has general terms in Documents, the email preview also shows an **Include terms and conditions** switch. It starts on or off following the attach-terms default you set for this document type under [Terms and conditions](#attach-terms-by-default) (out of the box: on for quotes, off for invoices). When enabled, the current terms PDF is attached to the email and the send is recorded as the provision event on the terms document.

### Send as Peppol e-invoice

If your workspace is on Office and has [Peppol e-invoicing](/en/features/peppol) enabled, the send dialog also offers **E-invoice (Peppol)**. This delivers the invoice digitally to your customer's accounting software instead of sending it by email. You choose per invoice which channel to use.

### Download PDF

Download the invoice as a professionally formatted PDF document. The PDF includes your company logo, branding colors, and all invoice details.

Some invoices are longer than one page. The PDF then keeps the totals together with the final lines, marks them with a note that the invoice continues, and gives the payment details a final page of their own. No continuation page opens with an empty table or a repeated copy of the numbers.

A PDF can end up with your customer, so downloading or sharing one first asks a short question. Once the PDF is out, the amounts, the lines and the customer details of the invoice can no longer be changed, and the app would rather you check everything before that moment. Carry on from the dialog to download or share, or look the invoice over first.

### Mark as paid

Manually confirm payment when a customer pays via bank transfer or other offline method. The dialog asks **When was it paid?**: you pick the day the money came in, the day your bank statement shows, and a date in the future is refused. A payment you paid back again asks for that refund date in the same way.

Marked by mistake? **Undo** puts the invoice back to the status it came from. In bulk, the undo reports how many invoices went back, and drafts that went straight from draft to paid stay paid through it.

### Cancel

Cancel an invoice that should no longer be paid. Cancelled invoices remain in your records for auditing purposes.

### Duplicate

Create a copy of an existing invoice, useful for billing the same customer again.

Credit notes cannot be duplicated. A duplicate would not reference any invoice and would still count as negative revenue in the VAT return, so create a new correction with **Create credit note** on the invoice you want to correct instead.

### Send reminder

Send a payment reminder for overdue invoices. This works on every plan; only the automatic reminders are part of Office. If your workspace has online payments enabled, the reminder email gives the customer the same payment options as the original invoice: a **View & pay** button, a **Confirm payment** button, and a scan-and-pay QR code on the PDF.

## Bulk actions

Select multiple invoices from the list to perform actions in bulk. The checkbox column appears in the list while you are selecting, and not at any other time; an empty list carries no select button.

- **Mark as paid**: record payment for multiple invoices
- **Mark as Sent**: mark invoices you delivered outside MyCompanyDesk as sent. This only changes the status and gives the invoices their definitive number; no email goes out.
- **Mark as Canceled**: cancel multiple invoices at once
- **Archive**: move invoices to the archive
- **Delete**: move invoices to the trash

In the archive and the trash you restore invoices again, and from the trash you delete them permanently.

Permanently deleting an invoice (single delete, bulk delete, empty trash, or delete all) releases any attached expenses. They return to the uninvoiced list and can be added to another invoice.

Marking invoices as sent in bulk runs the same VAT and status checks as finalizing a single invoice. Invoices that fail a check are skipped, and the results screen explains why.

If a bulk action is refused because one or more selected rows fall inside a locked VAT period, the error message names the exact period and tells you what to do next. A filed and locked period can only be reopened via a supplementary VAT return. A bare lock (the period's filing deadline has passed but no return was filed) can be unlocked temporarily from the VAT page. Remove rows that fall in that period from your selection, or use the matching correction route, then try again.

## Payment links

When you send an invoice, a unique payment link is generated. Your customer can:

1. Click the link in the email
2. View the invoice in the **customer portal**
3. Pay directly online using your connected Mollie or Stripe account

With Mollie or Stripe connected, the email itself leads with a **Pay now** button that goes straight to the payment page, with **View invoice** next to it for customers who want to look first. The payment only starts in the customer's own browser, so email scanners cannot start one. Details on [the customer portal](/en/advanced/customer-portal#payment).

Payment is automatically recorded and the invoice status updates to **Paid**.

If an invoice is canceled after it was sent, the payment link stops working. If a customer clicks the link in the old email or PDF, they see a message that the invoice was canceled and can no longer be paid online.

## Online payments

Enable online invoice payments by connecting your own Mollie or Stripe account:

1. Go to **Settings › Payment**
2. Under **Let customers pay with iDEAL**, connect Mollie or Stripe
3. The payment methods your customer sees are the ones that are active in your own Mollie or Stripe account, such as iDEAL, card or Bancontact

Once connected, every invoice you send includes a payment link. Your customers pay through your own processor account. Funds go directly to you. MyCompanyDesk does not handle or hold your payments.

On the same page you enter your IBAN for bank transfers (the scan-and-pay QR code on the PDF uses it) and, with **Customers can also pay via PayPal**, the email address of your PayPal account.

## Payment processor badge

When an invoice is fully paid, the payment section header shows a badge identifying which processor the payment came through: "Paid via Mollie" or "Paid via Stripe". The dominant processor is displayed when multiple payment methods were used. This lets you see at a glance where the money landed without scrolling through the payment history.

## Payment refunds

Online payments made via Mollie or Stripe can be refunded directly from MyCompanyDesk. When you refund a payment:

- The full amount is returned to your customer through the same payment provider
- The refund is processed immediately by Mollie or Stripe
- The payment is marked as refunded in your records

Partial refunds initiated at Mollie or Stripe (for example, when you refund only part of the amount there) appear in the payment list with the refund date and the remaining booked amount.

Non-online methods (bank transfer, cash) use the existing void path: the payment is marked voided without a processor-side refund. When you void a payment, the invoice status is restored to the state that matches the invoice history. If the invoice had already been emailed to the customer, it returns to **Sent**; if it had never been sent, it returns to **To send**. The original sending history is preserved.

To refund a payment:

1. Open the invoice detail page
2. Locate the payment in the payment list
3. Click **Refund** (available for Mollie and Stripe payments only)
4. Add an optional reason
5. Confirm the refund

## Document types

The invoice module supports multiple document types:

- **Invoice**: standard billing document
- **Credit note**: adjustment for refunds or corrections
- **Reminder**: payment reminder for overdue invoices

## Filtering and search

Use the filter panel and the search field to narrow down your invoices:

- **Status**: to send, draft, awaiting payment, overdue, needs verification, paid or cancelled
- **Period**: filter by invoice date
- **View**: active invoices, the archive or the trash
- **Search**: search by customer, number or reference
- **Deep links**: notifications and emails that link straight to an invoice clear any active date-range filter when they open the page, so the invoice is not hidden by an existing filter

To see the invoices of one customer, open them from that customer's detail page.

## Receivables ageing card

On desktop, the side panel next to the list shows a **Receivables ageing** card that groups open invoices by how many days they are past their due date: current, 1 to 30, 31 to 60, 61 to 90 and more than 90 days late. Click a group to narrow the list to it. The amounts shown are the remaining collectible balance: the invoice total minus posted payments, with any credit notes already issued against the invoice taken into account.

Because the card only sees the invoices loaded in the current list view, its bucket totals are a snapshot of that page, not a full workspace-lifetime figure. A fully credited invoice no longer appears as money still to collect, so the totals match what your customer sees in the portal and what the invoice detail page shows.

## Export

Download your invoices as a CSV file for Excel, Google Sheets, or your accounting software from **Settings › Download data**. This export is available on every plan.

## Finalizing and sending

When you finalize or send an invoice, MyCompanyDesk checks that your company has a btw-id (VAT number) and IBAN on file. In the Netherlands, a valid invoice requires your btw-id, and your IBAN tells customers where to pay.

If either field is missing, a dialog opens so you can fill them in right there. Once saved, your invoice finalizes automatically.

The app also blocks finalization if your company details are incomplete (for example a missing business name or address) or if the invoice has no line items. The error message points to exactly what is missing, so you can fix it before the invoice goes to the customer.

The customer's own details are checked too. A business customer with VAT on the invoice needs their address on it, otherwise they cannot deduct the VAT on their side; with an address missing, finalizing stops and the form explains why.

Invoice quantities on the PDF are formatted in the same language as the rest of the document, so an English invoice uses English number formatting and a Dutch invoice uses Dutch formatting.

If your workspace uses manual numbering, the app also asks you to enter the invoice number when you finalize or send. MyCompanyDesk suggests the next number in your sequence, but you can type any number you like. The number is required and must be unique.

If you are still waiting for your btw-id from the Belastingdienst, or you are exempt under the small business scheme (KOR), you can acknowledge the gap and proceed anyway. You should add your btw-id later once you have it.

Once an invoice has been finalized, it cannot be archived or deleted in one step, because the invoice number has already been used. Use the cancel or credit-note flow to handle a finalized invoice that should no longer be paid.

## Receiving invoices from other MyCompanyDesk users

When a supplier who also uses MyCompanyDesk emails you an invoice, you can have it land straight in your expenses as a structured draft. The amounts come from the invoice itself, so there is no scanning or retyping. The draft is always created in review status and is not booked until you approve it.

This feature is off by default. Turn it on at **Settings › Automation** under **Invoices from other MyCompanyDesk users**. You can switch it off at any time from the same place.

When the feature is active:

- Each incoming invoice appears as a draft expense under **Expenses** with the supplier name and the line totals already filled in.
- The description shows which MyCompanyDesk workspace sent it and that it arrived via MyCompanyDesk.
- Trusted-vendor rules may prefill the category, but the draft still stays in review so nothing is booked automatically.
- The same invoice can never be turned into two drafts, even if the sender resends the email.
- To protect your review queue, MyCompanyDesk accepts at most ten drafts from the same sender in your workspace per rolling 24-hour window.

The second way in needs no settings: the customer portal carries an **Add to my books** button on the invoice itself, and the click is the opt-in. MyCompanyDesk books the draft in the receiver's workspace at that moment, without the switch above and without the daily cap, and it works whatever mailbox the invoice arrived at. Both entrances share the same duplicate check, so an invoice that already arrived automatically is never booked a second time. See [Customer portal](/en/advanced/customer-portal#add-the-invoice-to-your-books) for the button and the account step.

The feature is free on both sides. The automatic route only works when the supplier emails the invoice to a mailbox that MyCompanyDesk hosts for you. If you prefer a network-based channel, you can also receive supplier invoices through [Peppol e-invoicing](/en/features/peppol).

## Tips

- Set up your [email templates](/en/settings/email) before sending your first invoice
- Use [recurring invoices](/en/features/recurring-invoices) (Office) for regular billing
- Check the [reports](/en/features/reports) (Office) for revenue insights
- Turn on [AI suggestions](/en/advanced/ai-features) (Office) for smart description improvements
- Use [Peppol e-invoicing](/en/features/peppol) (Office) when your customer prefers digital delivery
