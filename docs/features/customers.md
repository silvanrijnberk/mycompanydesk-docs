---
title: Customers
---

# Customers

Manage your complete customer database. Every invoice, quote, and project links back to a customer record.

## Overview

The customers page lists all your clients with key information at a glance. Use search and filters to find customers quickly.

## Creating a customer

1. Go to **Customers > New Customer**
2. Fill in the customer details:
   - **Name** — Company or individual name (required)
   - **Email** — Contact email for sending invoices
   - **Phone** — Contact phone number
   - **Address** — Street, postal code, city, country
   - **VAT number** — Customer's VAT registration (for B2B)
   - **Customer number** — Auto-generated or custom
3. Click **Save**

::: tip
You can also create customers inline when creating an invoice or quote — no need to navigate away.
:::

### KVK autofill

When creating a Dutch customer, MyCompanyDesk can autofill company details from the KVK (Kamer van Koophandel) register. Two lookup methods are available:

- **Name search** — Start typing the company name in the **Name** field. A dropdown shows matching KVK entries with city and KVK number. Select one to autofill the name and KVK number fields.
- **Chamber number lookup** — Enter an 8-digit KVK number in the **Chamber of Commerce** field. On blur, MyCompanyDesk looks up the number and fills in any empty fields (name, address, postal code, city, country).

A verified badge appears next to the chamber number field on successful lookup. If the KVK number is not found, an error message is shown. Both lookups are available only for Dutch customers.

## Customer detail page

The customer detail page shows:

- **Contact information** — All stored details
- **Invoice history** — Every invoice sent to this customer
- **Expense history** — Expenses linked to this customer
- **Contracts** - Active and inactive contracts, with signing status badges and a PDF preview icon when e-signing is enabled
- **Projects** — Active and completed projects
- **Statistics** — Total revenue, outstanding balance, average payment time

## Actions

- **Edit** — Update customer information
- **Create invoice** — Start a new invoice pre-filled with this customer
- **Create quote** — Start a new quote for this customer
- **Archive** — Move to archive (can be restored later)
- **Delete** — Permanently remove the customer

## Bulk actions

Select multiple customers for:

- **Archive** — Bulk archive inactive customers
- **Restore** — Bring back archived customers
- **Delete** — Remove multiple customers

## Quick view

On desktop, click a customer in the list to open the **quick view** slide panel. This shows key details and actions without leaving the list:

- Customer info summary
- Recent invoices
- Edit button to open the full edit page

## Import customers

Import your existing customer database from CSV:

1. Go to **Profile > Import**
2. Select **Customers** as the data type
3. Upload your CSV file
4. Map your CSV columns to MyCompanyDesk fields (name, email, address, etc.)
5. Review the preview
6. Confirm to import

## Export customers

Export your customer list as CSV from the customers page (Pro plan and above).

## Tips

- Keep customer emails up to date — they're used for invoice delivery
- Use the search bar for instant fuzzy matching across all customer fields
- Pin your most important customers as favorites for quick access
- Assign VAT numbers to enable reverse charge on B2B invoices
