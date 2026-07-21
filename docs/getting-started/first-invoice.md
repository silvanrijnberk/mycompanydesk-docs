---
title: Your First Invoice
---

# Your First Invoice

This guide walks you through creating and sending your first invoice in MyCompanyDesk.

## Before you start

Make sure you have:

- [Set up your company information](/getting-started/company-setup) (name, address, BTW-id, IBAN)
- At least one customer to invoice (you can create one during the process)

## Create an invoice

1. Navigate to **Invoices** in the sidebar
2. Click the **New Invoice** button (or use the **+** floating button on mobile)
3. Fill in the invoice form:

### Select a customer

Start typing the customer name. If the customer exists, select them from the dropdown. If not, type the full name and click **Create customer** to add them inline. The inline form asks for a customer name and address. The KVK lookup can suggest Dutch businesses and fill in the address automatically; private customers can be added by typing the address by hand. Only the customer name is required; you can add the email and full address later on the customer page.

### Add line items

Each line item has:

- **Description** — What you're billing for
- **Quantity** — Number of units
- **Unit price** — Price per unit
<!-- TODO(source-missing): RichardTool 5407b44 widened the valid Dutch invoice/catalog VAT-rate set to include historical rates 6% and 19%. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
- **VAT rate** — Applicable VAT percentage (0%, 9%, 21%, etc.)

Click **Add item** to add more line items. The total is calculated automatically including VAT.

### Set invoice details

- **Invoice number** — Auto-generated based on your numbering settings
- **Invoice date** — Defaults to today
- **Due date** — Calculated from your default payment terms (adjustable)
- **Notes** — Optional notes that appear on the invoice

### Save

Click **Save** to create the invoice as a **draft**. You can still edit everything before sending.

## Preview the invoice

Before sending, preview how the PDF will look:

1. Open the invoice detail page
2. Click **Preview** to see the generated PDF
3. Check that all information is correct — company details, customer info, line items, totals

## Send the invoice

When you're ready to send:

1. Click **Send** on the invoice detail page
2. Review the email that will be sent to your customer:
   - Subject line (customizable)
   - Email body (based on your email template)
   - PDF attachment
   - Payment link (if enabled)
3. Click **Send** to deliver the invoice

The invoice status changes from **Draft** to **Sent**.

::: tip
You can customize your email templates in **Settings > Email**. Templates support your branding and can be set per language.
:::

## Track payment

Once sent, the invoice appears in your **Sent** or **Overdue** views. When the customer pays:

- If the customer pays via the **payment link**, the invoice is marked as paid automatically
- For bank transfers, click **Mark as Paid** on the invoice to record the payment manually

## Invoice statuses

| Status | Description |
|---|---|
| **Draft** | Created but not yet sent. Fully editable. |
| **Sent** | Delivered to the customer. Waiting for payment. |
| **Overdue** | Past the due date and still unpaid. |
| **Paid** | Payment received and confirmed. |
| **Cancelled** | Invoice was cancelled. No payment expected. |

## Quick add

For faster invoice creation, use **Quick Add**:

1. Click the quick-add icon on the invoices list page
2. Select a customer
3. Add items (or use a saved template)
4. Save and optionally send immediately

Quick Add is ideal for routine invoices where you bill similar items regularly.

## Using templates

Save time with invoice templates:

1. Create an invoice with your commonly used line items
2. Click **Save as Template** 
3. Next time, start a new invoice from the template — all items are pre-filled

## Next steps

Congratulations on sending your first invoice! Explore more features:

- [Track your expenses](/features/expenses)
- [Create quotes](/features/quotes) for potential work
- [Set up recurring invoices](/features/recurring-invoices) for regular billing
- [View reports](/features/reports) to understand your finances
