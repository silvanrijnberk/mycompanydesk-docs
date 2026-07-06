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

Start typing the customer name. If the customer exists, select them from the dropdown. If not, click **Add new customer** to open the new-customer page and add them.

### Add line items

Each line item has:

- **Description**: what you're billing for
- **Quantity**: number of units
- **Unit price**: price per unit
- **VAT rate**: applicable VAT percentage (0%, 9%, 21%, etc.)

Click **Add item** to add more line items. The total is calculated automatically including VAT.

### Set invoice details

- **Invoice number**: auto-generated based on your numbering settings
- **Invoice date**: defaults to today
- **Due date**: calculated from your default payment terms (adjustable)
- **Notes**: optional notes that appear on the invoice

### Save as draft or finalize

When saving, you choose between two options:

- **Save as draft**: the invoice stays fully editable, and no definitive invoice number is assigned yet.
- **Finalize**: the invoice is locked, gets its definitive invoice number, and moves to the **Open** status, ready to send. Finalizing is also when MyCompanyDesk runs its readiness checks: it verifies that your BTW-id and IBAN are on file, and opens a dialog to fill them in if not.

## Preview the invoice

Before sending, preview how the PDF will look:

1. Open the invoice detail page
2. Click **Preview** to see the generated PDF
3. Check that all information is correct: company details, customer info, line items, totals

## Send the invoice

When you're ready to send:

1. Click **Send** on the invoice detail page
2. Review the email that will be sent to your customer:
   - Subject line (customizable)
   - Email body (based on your email template)
   - PDF attachment
   - Payment link (if enabled)
3. Click **Send** to deliver the invoice

The invoice status changes to **Sent**.

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
| **Draft** | Created but not finalized. Fully editable. |
| **Open** | Finalized and ready to send, but not yet sent. |
| **Sent** | Delivered to the customer. Waiting for payment. |
| **Overdue** | Past the due date and still unpaid. |
| **Paid** | Payment received and confirmed. |
| **Needs verification** | The customer marked the invoice as paid in the customer portal; confirm the payment on your side. |
| **Cancelled** | Invoice was cancelled. No payment expected. |

## Quick add with templates

For routine invoices where you bill similar items regularly, use templates:

1. Create an invoice with your commonly used line items
2. Click **Save as Template**
3. Next time, click **Templates** under Quick Actions in the sidebar. Choosing a template opens a new invoice with everything pre-filled; adjust as needed and save or finalize.

## Next steps

Congratulations on sending your first invoice! Explore more features:

- [Track your expenses](/features/expenses)
- [Create quotes](/features/quotes) for potential work
- [Set up recurring invoices](/features/recurring-invoices) for regular billing
- [View reports](/features/reports) to understand your finances
