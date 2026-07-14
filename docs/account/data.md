---
title: "Data Import & Export"
last_verified: 2026-07-02
---

# Data Import & Export

Import existing data into MyCompanyDesk and export your records for backup or use in other tools.

## Import

### CSV import

Import data from CSV files for:

- **Customers** with name, email, phone, address, VAT number
- **Invoices** with invoice details
- **Expenses** with categories and amounts

Other record types (such as projects or objects) cannot be imported from CSV; you create those in the app itself.

### How to import

The import wizard lives on its own page in the app: open `/profile/import` directly, useful when you are moving over from another tool right after signing up.

1. Select the **data type** you want to import (customers, invoices, or expenses)
2. Upload your **CSV file**
3. **Map columns** by matching your CSV column headers to MyCompanyDesk fields
4. **Import** to create the records; the result shows how many rows were imported and how many failed

### Import tips

- Use UTF-8 encoding for your CSV files
- Include a header row with column names
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

Exports live in one place: open **Instellingen** (Settings) and pick **Gegevens downloaden** (download your data).

### CSV export

Download your records per type:

- **Invoices** as CSV, with amounts, dates, and statuses
- **Customers** as CSV, your full customer list
- **Expenses** as CSV, with categories and amounts

::: info
CSV exports are available from the **Starter** plan. The complete JSON backup is available on every plan, including Free.
:::

### Complete backup

The same page offers a **complete backup**: all your data in one JSON file. Use it as a periodic backup or as a full snapshot of your records, for example for a GDPR data request.

Exports contain only the data you have access to. PDF versions of invoices are downloaded separately, from each invoice's own page.

## Tips

- Export your data regularly as a backup
- Rather than emailing files to your accountant, give them direct access via **Settings > Toegang en boekhouder**; they always see your latest figures
- When switching from another tool, use the import wizard to migrate your customer list
