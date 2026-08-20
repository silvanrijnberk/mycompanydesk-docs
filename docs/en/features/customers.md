---
title: Customers
description: "Manage your customer database, with segment tiles, search and filters, and every invoice, quote and project linked back to a customer record."
---

# Customers

Manage your complete customer database. Every invoice, quote, and project links back to a customer record.

## Overview

The customers page lists all your clients with key information at a glance. Use search and filters to find customers quickly.

## Customer list segments

At the top of the customers page, a strip of tiles gives a quick snapshot of your customer base. The numbers are independent of the search and date filters on the list, so a tile always reflects the whole book.

- **Customers with overdue invoices**: how many customers currently owe you money. Click the tile to open the overdue invoices page.
- **Dormant customers**: active customers who were invoiced before but have not received an invoice in the last N months. Click the tile to filter the list to dormant customers. The default dormancy window is six months; the tile label shows the exact window the workspace uses.
- **Prospects**: active customers who have never been invoiced. Click the tile to filter the list to prospects.
- **Total customers**: the fixed active customer count. Click the tile to clear the list filters.

The status filter above the list also lets you switch between All statuses, Active, Prospects, Dormant, Archived and Trash.

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

- **Name search**: Start typing the company name in the **Name** field. A dropdown shows matching KVK entries with city and KVK number. Select one to autofill the name and KVK number fields.
- **Chamber number lookup**: Enter an 8-digit KVK number in the **Chamber of Commerce** field. On blur, MyCompanyDesk looks up the number and fills in any empty fields (name, address, postal code, city, country).

A verified badge appears next to the chamber number field on successful lookup. If the KVK number is not found, an error message is shown. Both lookups are available only for Dutch customers.

Each workspace gets 100 free KVK lookups per day (cached results do not count). When 20 or fewer lookups remain, the KVK field hint shows a counter of how many are left. If the daily cap is hit, the form shows a quota-exceeded message, and you can enter the data manually or try again tomorrow.

## Customer detail page

The customer detail page shows:

- **Contact information** — All stored details
- **Invoice history** — Every invoice sent to this customer
- **Expense history** — Expenses linked to this customer
- **Contracts** - Active and inactive contracts, with signing status badges and a PDF preview icon when e-signing is enabled
- **Documents**: agreements stored for this customer, such as general terms, NDAs and DPAs. If the customer has a contract but no processing agreement, a hint appears with a link to create one.
- **Projects** — Active and completed projects
- **Statistics** — Total revenue, outstanding balance, average payment time

### Processing agreement gap

When a customer has a contract but no processing agreement (DPA) in Documents, the documents card on the customer detail page shows a hint and a **Create processing agreement** link. This points out a compliance gap where you are likely to act on it. The hint only appears when the documents and contracts modules are enabled and the documents card is otherwise empty.

### Email health banner

A warning banner appears at the top of the customer detail page when the customer's email address has recently bounced (permanently undeliverable) or generated a spam complaint. The banner is quiet when the address is healthy.

- **Bounce**, shows a red banner with the last failed delivery date and the rejection reason from the email provider. If no specific reason was given, a generic note is shown instead.
- **Complaint**, shows a yellow banner warning that the customer marked your email as spam. The message advises against sending more mail to that address without prior contact.

This information comes from provider events and outbound message delivery status, helping you spot delivery problems before sending the next invoice or quote.

## Linking a customer to one of your own businesses

If you own more than one business, a card titled **Eigen bedrijf** can appear on the customer detail page. It lets you say that this customer is one of your own companies, which is used to calculate the intercompany positions on the Workspaces page.

- The card only appears when you own at least two businesses and the customer is not in the workspace you are currently viewing. A company cannot be its own counterparty.
- Pick one of your own businesses from the dropdown, or choose **None of my own businesses** to remove a link.
- Links are created automatically when the customer's VAT number matches one of your other workspaces. When this happens, the card shows a note so you can tell it was automatic and change it if it is wrong.
- A manual link always wins over an automatic one. The automatic linker never overwrites a link you set by hand.

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

Export your customer list as CSV from the customers page (Starter plan and above).

## Lapsed customers

The [Reports > Clients > Lapsed](/en/features/reports) tab lists customers who bought before but have not had an invoice this year. The view shows the count, their previous total spend, and the date of their last invoice, with links to call or email each customer directly. It lives inside Reports because reactivating old customers is campaign-style work, not an item that fits an urgency-sorted feed.

The standard customer list also segments inactive customers itself; the Lapsed tab adds the campaign-style reminder without replacing that filter.

## Tips

- Keep customer emails up to date — they're used for invoice delivery
- Use the search bar for instant fuzzy matching across all customer fields
- Pin your most important customers as favorites for quick access
- Assign VAT numbers to enable reverse charge on B2B invoices
