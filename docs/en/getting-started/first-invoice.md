---
title: Your First Invoice
description: "A step by step walkthrough of creating and sending your first invoice, from company details and customer to the send button."
---

# Your First Invoice

This guide walks you through creating and sending your first invoice in MyCompanyDesk.

## Before you start

Make sure you have:

- [Set up your company information](/en/getting-started/company-setup) (name, address, VAT ID, IBAN). If your VAT ID or IBAN is still missing, MyCompanyDesk asks for it when you finalize the invoice.
- At least one customer to invoice (you can create one during the process)

## Create an invoice

1. Go to **Invoices** in the sidebar
2. Click **Create** (or use the **+** button on your phone)
3. Fill in the invoice

On a phone or tablet, a new invoice opens in three steps: **Customer**, **Lines** and **Review**. **Next** takes you to the following step. On a large screen everything sits on one page.

### Select a customer

Start typing the customer name in the **Search for a customer...** field. If the customer exists, select them from the list. If not, choose **Add new customer**. The **New customer** panel asks for the customer type (**Private individual** or **Business**), the name and the address. For businesses, the KVK lookup finds the details and fills in the address automatically; for private customers you type the address yourself. Email is optional. Click **Add** and the customer is on the invoice.

### Add lines

Each line has:

- **Description**: what you are billing for
- **Qty**: number of units
- **Price**: price per unit. By default you type prices without VAT; switch on **Prices incl. VAT** if you would rather type the amount your customer pays.
<!-- TODO(source-missing): The app also accepts the historical Dutch rates 6% and 19% on invoices and catalog items. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
- **VAT rate**: Applicable VAT percentage (0%, 9%, 21%, etc.)

Click **Add Line Item** for more lines, or pick a product or service from your offering. The total is calculated automatically, including VAT.

### Set invoice details

- **Invoice number**: suggested automatically. The invoice gets its fixed number when you finalize it.
- **Invoice date**: defaults to today
- **Due date**: calculated from your default payment terms (adjustable)
- **Notes**: optional notes that appear on the invoice

### Save

You have two buttons:

- **Save as Draft**: keeps the invoice as a **Draft**. You can still change everything.
- **Finalize**: gives the invoice its number and makes it ready to send. After that the details can no longer be changed (required by the Dutch Tax Administration).

## Review the invoice

In the invoice form, click **View preview** to see what the PDF looks like. Check that everything is correct: company details, customer info, lines and totals. The invoice page also shows the document, and you can **Download PDF** there.

## Send the invoice

A finalized invoice that has not gone out yet has the status **To send**. To send it:

1. Click **Send** on the invoice page
2. In the **Send Email** window, check the email to your customer:
   - **To**: your customer's email address
   - **Subject** and **Message** (editable)
   - Under **Include in email**: the **View button (online link)**, the **Download button** and the **PDF attachment**. Through the online link your customer views and pays the invoice.
3. Click **Send Email**

The invoice status changes to **Sent**. Sent it yourself, for example over WhatsApp? Click **Mark as Sent**.

::: tip
You can change your email texts in **Settings › Email**. You can also edit the text in the send window and tick **Use this text from now on for invoices**.
:::

## Track payment

After sending, the invoice sits under **Awaiting payment**, or under **Overdue** once the due date has passed. When the customer pays:

- If the customer pays online (iDEAL, set up in **Settings › Payments**), the invoice is marked as paid automatically
- For bank transfers, click **Mark as paid** on the invoice to record the payment manually

## Invoice statuses

| Status | Description |
|---|---|
| **Draft** | Created but not finalized yet. Fully editable. |
| **To send** | Final, not sent yet. |
| **Sent** | Delivered to the customer. Awaiting payment. |
| **Overdue** | Past the due date and not yet paid. |
| **Needs verification** | The customer says they have paid. Check it and mark the invoice as paid. |
| **Paid** | Payment received and confirmed. |
| **Canceled** | Invoice was canceled. No payment expected. |

## Use templates

Save time with invoice templates:

1. Create a new invoice with your most-used lines
2. Click **Save as Template**
3. Next time, choose **From template** on a new invoice, and all lines are pre-filled

## Next steps

Congratulations on sending your first invoice! Explore more features:

- [Track your expenses](/en/features/expenses)
- [Create quotes](/en/features/quotes) for potential work
- [Set up recurring invoices](/en/features/recurring-invoices) for regular billing (Office)
- [View reports](/en/features/reports) to understand your finances
