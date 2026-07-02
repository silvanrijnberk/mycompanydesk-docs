---
title: Receipt Scanning
---

# Receipt Scanning

Automatically extract expense data from receipt images and PDF invoices using AI-powered OCR.

::: info
Receipt scanning is available on every plan, with a monthly cap on the number of scans: 3 on Free, 30 on Starter, and 200 on Pro. The cap resets on the first of each calendar month.
:::

## Overview

Instead of manually entering every expense, take a photo of a receipt or upload a PDF and let MyCompanyDesk extract the details automatically.

## Supported formats

- **Images** — JPEG, PNG, WebP
- **PDF** — PDF invoices and receipts
- **Maximum file size** — 50MB

## How to scan a receipt

1. Go to **Expenses > Scan Receipt**
2. Upload your receipt file (drag and drop or click to browse). The scanner takes one file at a time.
3. Optionally open the advanced options and choose the extraction mode:
   - **Single**: extract one expense from the receipt
   - **Multiple**: extract multiple line items from the same receipt (the default)
4. Wait for processing (a few seconds)
5. Review the extracted data:
   - Date
   - Amount
   - Supplier name
   - Description / items
6. Edit any fields that need correction
7. Click **Confirm** to create the expense(s)

## Extraction modes

### Single mode

Best for simple receipts with one total:

- Restaurant bills
- Gas station receipts
- Single-item purchases

Extracts: date, total amount, supplier, description.

### Multiple mode

Best for itemized receipts or invoices:

- Office supply orders with multiple items
- Supplier invoices with line items
- Shopping lists

Extracts: individual line items with descriptions and amounts.

## Advanced settings

The scanner has an advanced options panel:

- **Instructions**: add free-text context to help the AI (e.g., "This is a Dutch receipt from Albert Heijn")
- **Extraction mode**: single expense or multiple line items (default: multiple)
- **Category**: limit extraction to one expense category, or leave it on any category
- **Filter tags**: keyword tags; only items matching the tags are extracted
- **Price range**: a minimum and maximum amount; items outside the range are skipped
- **Attach receipt**: whether the original file is attached to the created expense (on by default)

## Tips for best results

- **Good lighting** — Take photos in well-lit conditions
- **Flat surface** — Place the receipt on a flat surface
- **Full receipt** — Make sure the entire receipt is in frame
- **Clear text** — Ensure text is legible and not blurry
- **One receipt per scan** — Scan receipts individually for best accuracy

## After scanning

Once confirmed, the expense is created with:

- All extracted data pre-filled
- The original receipt attached as a file
- Category suggestions (if AI suggestions are enabled)

You can edit the expense afterward like any manually created expense.

## Scanning several receipts

The uploader takes one file at a time. To process several receipts, scan them one after another; each scan counts once towards your monthly cap. For a receipt or invoice that contains multiple items, use the **Multiple** extraction mode to create several expenses from a single scan.

## Tips

- Scan receipts as soon as you receive them — don't let them pile up
- Check the extracted amount carefully, especially for receipts with multiple currencies
- Enable AI suggestions for automatic categorization after scanning
- Keep the original receipt file attached for tax audit purposes
