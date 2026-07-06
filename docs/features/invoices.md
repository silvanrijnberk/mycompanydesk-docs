---
title: Invoices
---

# Invoices

Invoices are at the core of MyCompanyDesk. Create professional invoices, send them to customers with payment links, and track payments through to completion.

## Overview

The invoices page shows all your invoices with filtering and search capabilities. The tabs at the top are views, not statuses:

- **Active**: your working list of invoices
- **Archive**: invoices you have archived
- **Trash**: invoices waiting for permanent deletion

Within a view, the status dropdown filters by:

- **All statuses**: every invoice in the view
- **Draft**: created but not finalized
- **Open**: finalized and ready to send, but not yet sent
- **Sent**: delivered to customers
- **Paid**: payment received
- **Overdue**: past due date, unpaid
- **Needs verification**: the customer marked the invoice as paid in the customer portal, awaiting your confirmation

## Creating an invoice

### Full form

1. Go to **Invoices > New Invoice**
2. Select or create a **customer**
3. Add **line items** with description, quantity, unit price, and VAT rate. The default VAT rate for new lines comes from your tax settings (Settings > BTW). If a customer has reverse charge enabled, the line automatically uses 0%.
4. Set the **invoice date** and **due date**
5. Add optional **notes** or **internal remarks**
6. Save as a **draft** to keep editing later, or **finalize** to lock the invoice and prepare it for sending

### Draft or finalize

Saving as a draft keeps the invoice fully editable. Finalizing locks the invoice, assigns the definitive invoice number, and sets the status to **Open** (ready to send). Finalizing is also the moment the readiness checks fire: MyCompanyDesk verifies that your company has a BTW-id (VAT number) and IBAN on file (see [Finalizing and sending](#finalizing-and-sending)).

### From a template

Templates live in the sidebar: click **Templates** under Quick Actions to open the templates modal. Choosing an invoice template opens a new invoice with all template fields pre-filled; adjust as needed, then save or finalize.

To create a template, open an invoice and click **Save as Template**.

### Billing time entries

When you select a customer on the invoice form, MyCompanyDesk pulls in that customer's unbilled time entries. Add them individually or in one go; each entry becomes a line item with the hours, the hourly rate, and an automatically filled description. If the time entry has no description of its own, a readable default is used, based on the project name or the period. You can also set a per-customer description template on the customer record to control how these lines are worded.

Unbilled expenses for the customer can be pulled in the same way.

## Invoice details

Each invoice has a detail page showing:

- Customer information
- Line items with subtotals
- VAT breakdown
- Total amount
- Status and history
- Payment link (if sent)

## Actions

### Send

Send the invoice to your customer via email. The email includes:

- A customizable message (based on your email template)
- The invoice PDF as an attachment
- A payment link for online payment

### Download PDF

Download the invoice as a professionally formatted PDF document. The PDF includes your company logo, branding colors, and all invoice details.

### Mark as paid

Manually confirm payment when a customer pays via bank transfer or other offline method.

### Cancel

Cancel an invoice that should no longer be paid. Cancelled invoices remain in your records for auditing purposes.

### Duplicate

Create a copy of an existing invoice, useful for recurring billing to the same customer.

### Send reminder

Send a payment reminder for overdue invoices.

## Bulk actions

Select multiple invoices from the list to perform actions in bulk:

- **Send**: marks the selected invoices as sent. This updates the status only; no emails are sent.
- **Mark as paid**: record payment for multiple invoices
- **Cancel**: cancel multiple invoices
- **Archive**: move invoices to the archive
- **Delete**: remove invoices

In the Archive and Trash views, the bulk actions change to restore, move to trash, and delete forever.

## Payment links

When you send an invoice, a unique payment link is generated. Your customer can:

1. Click the link in the email
2. View the invoice in the **customer portal**
3. Pay directly online using your connected Mollie or Stripe account

Payment is automatically recorded and the invoice status updates to **Paid**.

## Online payments

Enable online invoice payments by connecting your own Mollie or Stripe account:

1. Go to **Settings > Betalen**
2. Under **Klanten laten betalen met iDEAL**, connect your processor of choice
3. Mollie supports iDEAL, Bancontact, credit card, and bank transfer
4. Stripe Connect supports card, Apple Pay, Google Pay, and SEPA direct debit

Once connected, every invoice you send includes a payment link. Your customers pay through your own processor account. Funds go directly to you. MyCompanyDesk does not handle or hold your payments.

## Payment processor badge

When an invoice is fully paid, the payment section header shows a badge identifying which processor the payment came through: "Paid via Mollie" or "Paid via Stripe". The dominant processor is displayed when multiple payment methods were used. This lets you see at a glance where the money landed without scrolling through the payment history.

## Payment refunds

Online payments made via Mollie or Stripe can be refunded directly from MyCompanyDesk. When you refund a payment:

- The full amount is returned to your customer through the same payment provider
- The refund is processed immediately by Mollie or Stripe
- The payment is marked as refunded in your records

Non-online methods (bank transfer, cash) use the existing void path: the payment is marked voided without a processor-side refund.

To refund a payment:

1. Open the invoice detail page
2. Locate the payment in the payment list
3. Click the **refund** button (available for Mollie and Stripe payments only)
4. Add an optional reason
5. Confirm the refund

## Document types

The invoice module supports multiple document types:

- **Invoice**: standard billing document
- **Credit note**: adjustment for refunds or corrections
- **Reminder**: payment reminder for overdue invoices

## Filtering and search

The list offers:

- **Search**: search by invoice number, customer name, or description
- **View tabs**: Active, Archive, Trash
- **Status**: All statuses, Draft, Open, Sent, Paid, Overdue, Needs verification
- **Date range**: filter by date

## Export

Export your invoices as CSV via **Settings > Gegevens downloaden** (available from the Starter plan). The same page also offers a full backup of all your data.

## Finalizing and sending

When you finalize or send an invoice, MyCompanyDesk checks that your company has a BTW-id (VAT number) and IBAN on file. In the Netherlands, a valid invoice requires your BTW-id, and your IBAN tells customers where to pay.

If either field is missing, a dialog opens so you can fill them in right there. Once saved, your invoice finalizes automatically.

If you are still waiting for your BTW-id from the Belastingdienst, or you are exempt under the small business scheme (KOR), you can acknowledge the gap and proceed anyway. You should add your BTW-id later once you have it.

## Tips

- Set up your [email templates](/settings/email) before sending your first invoice
- Use [recurring invoices](/features/recurring-invoices) for regular billing
- Check the [reports](/features/reports) page for revenue insights
- Enable [AI suggestions](/advanced/ai-features) for smart description improvements
