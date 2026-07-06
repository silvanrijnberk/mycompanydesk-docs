---
title: Customers
---

# Customers

Manage your complete customer database. Every invoice, quote, and project links back to a customer record.

## Overview

The customers page lists all your clients with key information at a glance. The list is ordered by name, with your favorites pinned to the top. Search finds customers by name, customer number, email address, or city. Status tabs switch between All statuses, Active, Prospects, Archive, and Trash, and a date range filter narrows the list down further.

## Creating a customer

1. Go to **Customers** and click **Create**
2. Fill in the customer details:
   - **Name**: company or individual name (required)
   - **Email**: contact email for sending invoices
   - **Phone**: contact phone number
   - **Address**: street, postal code, city, country
   - **VAT number**: the customer's VAT registration (for B2B)
   - **Customer number**: auto-generated or custom
3. Click **Save**

::: tip
Customer pickers across the app (invoices, quotes, time registration, and more) include an **Add new customer** link that opens the new-customer page, so you can add a missing customer mid-flow.
:::

### KVK autofill

When creating a Dutch customer, MyCompanyDesk can autofill company details from the KVK (Kamer van Koophandel) register. Two lookup methods are available:

- **Name search**: Start typing the company name in the **Name** field. A dropdown shows matching KVK entries with city and KVK number. Select one to autofill the name and KVK number fields.
- **Chamber number lookup**: Enter an 8-digit KVK number in the **Chamber of Commerce** field. On blur, MyCompanyDesk looks up the number and fills in any empty fields (name, address, postal code, city, country).

A verified badge appears next to the chamber number field on successful lookup. If the KVK number is not found, an error message is shown. Both lookups are available only for Dutch customers.

## Prospects

A prospect is a potential customer without a customer number. You can create quotes for prospects, but not invoices. Mark a customer as a prospect with the **Prospect** toggle on the customer form; prospects get their own **Prospects** tab on the customers page and a badge on their card. When a prospect becomes a real customer, open their detail page and use **Convert to customer**: you assign a customer number and the record becomes a regular customer.

## Customer detail page

The customer detail page shows:

- **Contact information**: email, phone, and address
- **Business details**: VAT number, Chamber of Commerce number, IBAN, and payment terms
- **Billing information**: hourly rate, payment terms, and whether automatic invoicing of logged time is active
- **Summary**: total invoiced, invoice count, and last invoice date
- **Recent invoices**: the latest invoices for this customer, with a link to the full list
- **Recent time registrations**: the latest logged hours for this customer
- **Contracts**: active and inactive contracts, with signing status badges and a PDF preview icon when e-signing is enabled
- **Notes**: free-form notes about this customer
- **Actions**: edit, create invoice, create quote, archive, and delete

### Email health banner

A warning banner appears at the top of the customer detail page when the customer's email address has recently bounced (permanently undeliverable) or generated a spam complaint. The banner is quiet when the address is healthy.

- **Bounce**: shows a red banner with the last failed delivery date and the rejection reason from the email provider. If no specific reason was given, a generic note is shown instead.
- **Complaint**: shows a yellow banner warning that the customer marked your email as spam. The message advises against sending more mail to that address without prior contact.

This information comes from provider events and outbound message delivery status, helping you spot delivery problems before sending the next invoice or quote.

## Favorites

Favorites keep your most important customers one click away:

- **Star a customer** on their card in the list, in the quick view panel, or on their detail page. A yellow star marks favorites.
- **Bulk add or remove**: select multiple customers and use the **Favorite** or **Unfavorite** bulk actions.
- **Pinned first**: favorites always appear at the top of the customers list and at the top of every customer picker in the app (invoices, quotes, time registration), marked with a star.

## Actions

- **Edit**: update customer information
- **Create invoice**: start a new invoice pre-filled with this customer
- **Create quote**: start a new quote for this customer
- **Archive**: move to archive (can be restored later)
- **Delete**: staged deletion, see below

### Deleting a customer

Deletion is staged, so you never lose data by accident. Deleting an active customer archives them first. Deleting an archived customer moves them to the trash. Deleting from the trash removes the customer permanently. You can restore from the archive or the trash at any time, and empty the whole trash in one go from the Trash tab.

## Bulk actions

Select multiple customers for:

- **Favorite / Unfavorite**: add or remove the selection as favorites
- **Archive**: archive active customers in bulk
- **Restore**: bring archived or trashed customers back
- **Move to trash**: move archived customers to the trash
- **Delete**: permanently remove the selected customers

## Quick view

On desktop, click a customer in the list to open the **quick view** slide panel. This shows key details and actions without leaving the list:

- Financial summary: total invoiced, invoice count, and outstanding amount
- Contact details, address, customer number, VAT number, hourly rate, payment terms, and last invoice date
- Quick actions: create invoice, create quote, send an email, and toggle favorite
- An **Edit** button that opens the full edit page

## Import customers

Import your existing customer database from CSV:

1. Go to **Profile > Import**
2. Select **Customers** as the data type
3. Upload your CSV file
4. Map your CSV columns to MyCompanyDesk fields (name, email, address, etc.)
5. Review the preview
6. Confirm to import

## Export customers

Export your customer list as CSV via **Settings > Gegevens downloaden** (available from the Starter plan). The same page also offers a full backup of all your data.

## Tips

- Keep customer emails up to date; they are used for invoice delivery
- Search matches name, customer number, email address, and city
- Star your most important customers as favorites for quick access
- Assign VAT numbers to enable reverse charge on B2B invoices
