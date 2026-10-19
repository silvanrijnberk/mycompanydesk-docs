---
title: "Data Import & Export"
description: "Import customers, invoices and expenses from CSV, and export your records for backup or for use in another tool."
last_verified: 2026-10-19
---

# Data Import & Export

Import existing data into MyCompanyDesk and export your records for backup or use in other tools.

## Import

### CSV import

Import data from CSV files for:

- **Customers** with name, email, phone, address, VAT number
- **Invoices** with invoice details
- **Expenses** with categories and amounts
- **Catalog**: your products and services, with price (excl. VAT), unit and VAT rate

Other record types (such as projects or objects) cannot be imported from CSV; you create those in the app itself.

### How to import

The import wizard lives on its own page in the app, **Import CSV Data**. Open it with **Import** on your customer list, via **Settings › Switching**, or directly at `/profile/import`, useful when you are moving over from another tool right after signing up.

1. Select the **data type** you want to import (customers, invoices, expenses or catalog)
2. Upload your **CSV file**
3. **Map columns** by matching your CSV column headers to MyCompanyDesk fields
4. **Import** to create the records; the result shows how many rows were imported and how many failed

If the result is not what you expected, **Undo this import** removes exactly the rows this import created, except rows that something is already linked to.

### Import tips

- Use UTF-8 encoding for your CSV files
- Include a header row with column names
- Both commas and semicolons are recognised as separators
- Date formats should be consistent (YYYY-MM-DD recommended)
- Amount fields should use dot (.) as decimal separator
- Empty fields are skipped (existing defaults are used)

### Column mapping

The import wizard shows your CSV columns and lets you map each to the corresponding MyCompanyDesk field. Common mappings:

| CSV column | Maps to |
|---|---|
| Company Name / Name | Customer name |
| Email | Customer email |
| Street / Address | Street address |
| ZIP / Postal Code | Postal code |
| City | City |
| VAT / BTW | VAT number |
| Phone | Phone number |

## Export

Exports live in one place: open **Settings** and pick **Download data**.

### CSV export

Download your records per type:

- **Invoices** as CSV, with amounts, dates, and statuses
- **Customers** as CSV, your full customer list
- **Expenses** as CSV, with categories and amounts

::: info
The CSV exports of your invoices, expenses and customer list, plus the complete JSON backup, are available on every plan, including Desk.
:::

### Complete backup

The same page offers a **complete backup**: all your data in one JSON file. Use it as a periodic backup or as a full snapshot of your records, for example for a GDPR data request.

### Download everything

Next to the CSV exports, the same page offers **Download everything**: one ZIP file with everything your workspace holds. That includes the PDFs of your invoices, quotes, work orders and contracts, the photos and PDFs of your receipts, your documents, your business email, your website files and your VAT returns, plus an audit file per year that an accountant or the tax authorities can import.

Making the file takes a while when there is a lot in it, so MyCompanyDesk emails you when it is ready instead of keeping you waiting. A few rules that come with it:

- Only the owner or an admin of the workspace can download everything at once. Others download the lists they have access to.
- You can create one new download per day.
- The file stays downloadable for a limited period and is then deleted from our side. Save it somewhere safe yourself.
- If something could not be included, that is listed per item in a LEESMIJ.txt in the ZIP.

CSV exports include only the data you have access to.

Export everything you need before you delete your account; see [Delete account](/en/faq/delete-account).

## Location data

MyCompanyDesk can use your location when you explicitly choose to:

- Find a **Customer nearby** from the customer list.
- Use **Current location** as the starting address of a trip when logging hours.

We only read your location in those two cases, in the app or in your browser. We turn it into an address or a filtered customer list, and we do not store the raw coordinates. You can refuse or revoke the permission at any time in your device or browser settings.

## Tips

- Export your data regularly as a backup
- Rather than emailing files to your accountant, give them direct access via **Settings › Your accountant**; they always see your latest figures
- When switching from another tool, use the import wizard to migrate your customer list
