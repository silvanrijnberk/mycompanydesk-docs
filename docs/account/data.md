# Data Import & Export

Import existing data into MyCompanyDesk and export your records for backup or use in other tools.

## Import

### CSV import

Import data from CSV files for:

- **Customers** — Name, email, phone, address, VAT number
- **Invoices** — Invoice details with line items
- **Expenses** — Expense records with categories
- **Projects** — Project names and details
- **Objects** — Asset records

### How to import

1. Go to **Profile > Import**
2. Select the **data type** you want to import
3. Upload your **CSV file**
4. **Map columns** — Match your CSV column headers to MyCompanyDesk fields
5. **Preview** — Review the data before importing
6. **Confirm** — Click Import to create the records

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

### CSV export

Export your data as CSV from the respective list pages:

- **Invoices** — All invoices with amounts, dates, statuses
- **Expenses** — All expenses with categories and amounts
- **Customers** — Your customer database

Click the **Export** button on the list page to download.

::: info
CSV export requires the **Pro** plan or higher.
:::

### GDPR data export

Export all your personal data in JSON format:

1. Go to **Profile > Data**
2. Click **Export My Data**
3. Download the JSON file containing all your account data

This GDPR export includes:

- Your profile information
- All invoices, expenses, quotes
- Customer records
- Project and time data
- Settings and preferences

## Tips

- Export your data regularly as a backup
- Use CSV export to share data with your accountant
- When switching from another tool, use the import wizard to migrate your customer list
- The GDPR export provides a complete snapshot of your data
