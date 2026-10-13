---
title: Customers
description: "Manage your customer database, with segment tiles, search and filters, and every invoice, quote and project linked back to a customer record."
---

# Customers

Manage your complete customer database. Every invoice, quote, and project links back to a customer record.

## Overview

The customers page lists all your clients with key information at a glance. Use search and filters to find customers quickly. Clicking a customer in the list opens the customer's detail page.

## Customer list segments

At the top of the customers page, a strip of tiles gives a quick snapshot of your customer base. The numbers are independent of the search and date filters on the list, so a tile always reflects the whole book.

- **Customers with overdue invoices**: how many customers currently owe you money. Click the tile to open the overdue invoices page.
- **Gone quiet**: active customers who were invoiced before but have not received an invoice in recent months. Click the tile to filter the list to those customers. The default window is six months; the tile names the window the workspace uses (for example "no invoice in 6 months").
- **Prospects**: active customers who have never been invoiced. Click the tile to filter the list to prospects.
- **Total customers**: the fixed active customer count. Click the tile to clear the list filters.

The status filter above the list also lets you switch between All statuses, Active, Prospects, Gone quiet, Archive and Trash.

## Creating a customer

1. Go to **Customers** and click **Create**
2. Fill in the customer details:
   - **Name**: Company or individual name (required)
   - **Email**: Contact email for sending invoices
   - **Phone**: Contact phone number
   - **Address**: Street, postal code, city, country
   - **VAT number**: Customer's VAT registration (for B2B)
   - **Customer number**: Auto-generated or custom
3. Click **Save**

::: tip
You can also create customers inline when creating an invoice or quote, with no need to navigate away.
:::

### KVK autofill

When creating a Dutch customer, MyCompanyDesk can autofill company details from the KVK (Kamer van Koophandel) register. Two lookup methods are available:

- **Name search**: Start typing the company name in the **Name** field. A dropdown shows matching KVK entries with city and KVK number. Select one to autofill the name and KVK number fields.
- **Chamber number lookup**: Enter an 8-digit KVK number in the **Chamber of Commerce** field. On blur, MyCompanyDesk looks up the number and fills in any empty fields (name, address, postal code, city, country).

A verified badge appears next to the chamber number field on successful lookup. If the KVK number is not found, an error message is shown. Both lookups are available only for Dutch customers.

If a lookup does not work out, simply fill in the details yourself.

### Company logos from the KVK register

For Dutch customers with a registered logo, MyCompanyDesk fetches the logo from the KVK register and shows it next to the company name in the customer list, the customer detail page, and the KVK search suggestions when you create a customer. If no logo is available, or while the logo is still loading, the app falls back to a monogram so the row height does not jump.

The logo is for display only; it does not replace your own workspace logo on invoices or documents.

## Customer detail page

The customer detail page shows:

- **Contact information**: All stored details
- **Invoice history**: Every invoice sent to this customer
- **Expense history**: Expenses linked to this customer
- **Contracts** - Active and inactive contracts, with signing status badges and a PDF preview icon when e-signing is enabled
- **Documents**: agreements stored for this customer, such as general terms, NDAs and DPAs. If the customer has a contract but no processing agreement, a hint appears with a link to create one.
- **Projects**: Active and completed projects
- **Statistics**: Total revenue, outstanding balance, average payment time

### Processing agreement gap

When a customer has a contract but no processing agreement (DPA) in Documents, the documents card on the customer detail page shows a hint and a **Draft a data processing agreement** link. This points out a compliance gap where you are likely to act on it. The hint only appears when the Contracts module is on (Office) and the documents card is otherwise empty.

### Email health banner

A warning banner appears at the top of the customer detail page when the customer's email address has recently bounced (permanently undeliverable) or generated a spam complaint. The banner is quiet when the address is healthy.

- **Bounce**, shows a red banner with the last failed delivery date and the rejection reason from the email provider. If no specific reason was given, a generic note is shown instead.
- **Complaint**, shows a yellow banner warning that the customer marked your email as spam. The message advises against sending more mail to that address without prior contact.

This information comes from provider events and outbound message delivery status, helping you spot delivery problems before sending the next invoice or quote.

## Linking a customer to one of your own businesses

If you own more than one business, a card titled **Own business** can appear on the customer detail page. It lets you say that this customer is one of your own companies, which is used to calculate the intercompany positions on the Workspaces page.

- The card only appears when you own at least two businesses and the customer is not in the workspace you are currently viewing. A company cannot be its own counterparty.
- Pick one of your own businesses from the dropdown, or choose **None of my own businesses** to remove a link.
- Links are created automatically when the customer's VAT number matches one of your other workspaces. When this happens, the card shows a note so you can tell it was automatic and change it if it is wrong.
- A manual link always wins over an automatic one. The automatic linker never overwrites a link you set by hand.

## Actions

- **Edit**: update customer information
- **Create Invoice**: start a new invoice pre-filled with this customer
- **Create quote**: start a new quote for this customer
- **New work order**: start a work order for this customer (when the Work orders module is on)
- **Merge with…**: merge a duplicate customer into this one
- **Archive**: move to archive (can be restored later)

:::caution
Archiving a customer with an active recurring invoice or ongoing contracts asks for a confirmation first. The warning is honest about what archiving does: while a customer is archived, MyCompanyDesk creates no recurring invoices and bills no contracts for them, and skipped periods are not billed later. End the recurring invoice or contract first if that billing has to keep running.
:::

A customer who is a prospect (has never been invoiced) carries no **Create Invoice** action, not even in the more menu, and the server refuses invoice creation for them anyway. The customer page shows a **Convert to customer** button instead; once their status is active, all invoicing actions appear.

- **Delete**: move the customer to the trash

## Bulk actions

Select multiple customers for:

- **Add to favorites**: mark customers as favorites
- **Archive**: archive customers in one go
- **Delete**: move customers to the trash

In the archive you choose **Restore to active** or **Move to trash**; in the trash **Restore to archive** or **Delete permanently**.

## Import customers

Import your existing customer database from CSV:

1. Click **Import** on the customers page (or go to **Settings › Switching** and choose **Import customers**)
2. Check that **Customers** is selected as the data type
3. Upload your CSV file
4. Map your CSV columns to MyCompanyDesk fields (name, email, address, etc.)
5. Review the preview
6. Confirm to import

## Export customers

Download your customer list as a CSV file from **Settings › Download data** (available on every plan).

## Lapsed customers

The **Gone quiet** tab of the client report **Who are my clients?** in [Reports](/en/features/reports) (Office) lists customers who bought before but have not had an invoice this year. The view shows the count, their previous total spend, and the date of their last invoice, with links to call or email each customer directly. It lives inside Reports because reactivating old customers is campaign-style work, not an item that fits an urgency-sorted feed.

The standard customer list also segments inactive customers itself; the report tab adds the campaign-style reminder without replacing that filter.

## Tips

- Keep customer emails up to date: they're used for invoice delivery
- Use the search bar for instant fuzzy matching across all customer fields
- Mark your most important customers as favorites for quick access
- Assign VAT numbers to enable reverse charge on B2B invoices
