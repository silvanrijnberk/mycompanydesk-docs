---
title: Invoices
---

# Invoices

Invoices are at the core of MyCompanyDesk. Create professional invoices, send them to customers with payment links, and track payments through to completion.

## Overview

The invoices page shows all your invoices with filtering and search capabilities. Use the status tabs to quickly view:

- **All** — Every invoice
- **Draft** — Created but not sent
- **Sent** — Delivered to customers
- **Overdue** — Past due date, unpaid
- **Paid** — Payment received
- **Cancelled** — Cancelled invoices

## Creating an invoice

### Full form

1. Go to **Invoices > New Invoice**
2. Select or create a **customer**
3. Add **line items** with description, quantity, unit price, and VAT rate
4. Set the **invoice date** and **due date**
5. Add optional **notes** or **internal remarks**
6. Click **Save** to create a draft

### Quick Add

For faster creation:

1. Click the quick-add button on the invoices list
2. Select a customer
3. Add items or choose a template
4. Save (and optionally send immediately)

### From a template

1. When creating a new invoice, click **Use Template**
2. Select a saved template
3. All line items are pre-filled — adjust as needed
4. Save and send

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

Create a copy of an existing invoice — useful for recurring billing to the same customer.

### Send reminder

Send a payment reminder for overdue invoices.

## Bulk actions

Select multiple invoices from the list to perform actions in bulk:

- **Send** — Send multiple draft invoices at once
- **Mark as paid** — Record payment for multiple invoices
- **Archive** — Move invoices to the archive
- **Delete** — Permanently remove invoices

## Payment links

When you send an invoice, a unique payment link is generated. Your customer can:

1. Click the link in the email
2. View the invoice in the **customer portal**
3. Pay directly online using your connected Mollie or Stripe account

Payment is automatically recorded and the invoice status updates to **Paid**.

## Online payments

Enable online invoice payments by connecting your own Mollie or Stripe account:

1. Go to **Money → Payments** in your workspace sidebar
2. Under **Online betalingen**, connect your processor of choice
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

Non-online methods (bank transfer, cash) use the existing void path — the payment is marked voided without a processor-side refund.

To refund a payment:

1. Open the invoice detail page
2. Locate the payment in the payment list
3. Click the **refund** button (available for Mollie and Stripe payments only)
4. Add an optional reason
5. Confirm the refund

## Document types

The invoice module supports multiple document types:

- **Invoice** — Standard billing document
- **Credit note** — Adjustment for refunds or corrections
- **Reminder** — Payment reminder for overdue invoices

## Filtering and search

Use the filter bar to narrow down your invoices:

- **Status** — Draft, Sent, Overdue, Paid, Cancelled
- **Customer** — Filter by specific customer
- **Project** — Filter by linked project
- **Date range** — Filter by invoice or due date
- **Search** — Search by invoice number, customer name, or description

## Export

Export your invoices as CSV for use in Excel, Google Sheets, or your accounting software.

::: info
CSV export requires the **Pro** plan or higher.
:::

## Finalizing and sending

When you finalize or send an invoice, MyCompanyDesk checks that your company has a BTW-id (VAT number) and IBAN on file. In the Netherlands, a valid invoice requires your BTW-id, and your IBAN tells customers where to pay.

If either field is missing, a dialog opens so you can fill them in right there. Once saved, your invoice finalizes automatically.

If you are still waiting for your BTW-id from the Belastingdienst, or you are exempt under the small business scheme (KOR), you can acknowledge the gap and proceed anyway. You should add your BTW-id later once you have it.

## Tips

- Set up your [email templates](/settings/email) before sending your first invoice
- Use [recurring invoices](/features/recurring-invoices) for regular billing
- Check the [reports](/features/reports) page for revenue insights
- Enable [AI suggestions](/advanced/ai-features) for smart description improvements
