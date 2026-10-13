---
title: Receipt Scanning
description: "Photograph a receipt or upload a PDF and AI-powered OCR fills in the expense. Monthly caps: 3 scans on Desk, 200 on Office."
---

# Receipt Scanning

Automatically extract expense data from receipt images and PDF invoices using AI-powered OCR.

::: info
Receipt scanning is available on every plan, with a monthly cap on the number of scans: 3 on Desk and 200 on Office. The cap resets on the first of each calendar month. Once your scans are used up, you can still attach the receipt and fill in the details yourself.
:::

## Overview

Instead of manually entering every expense, take a photo of a receipt or upload a PDF and let MyCompanyDesk extract the details automatically.

## Supported formats

- **Images**: JPEG, PNG and WebP. HEIC photos (the iPhone default) do not work; take a screenshot instead or set your camera to JPEG.
- **PDF**: PDF invoices and receipts, up to 15 MB per file. Split a larger PDF into smaller files.
- **Maximum file size**: 50 MB. Large photos are scaled down automatically before they are read.

You can scan a credit note or return receipt (negative total) like any other receipt. The review card marks such a line as a credit note with a negative amount, so you see it before you book it. Only the automatic booking of receipts from your inbox skips credit notes; scan those yourself.

::: tip File size note
The receipt attached to the created expense is capped at 10 MB. If you scan a larger file, the expense is still created, but the receipt is not attached and a warning tells you to upload it manually on the expense. Reducing the file size before scanning also prevents this.
:::

## How to scan a receipt

The quickest way is through the regular expense form:

1. Go to **Expenses** and click **Add**.
2. Choose **Scan a receipt** to take a photo, or upload a file (photo or PDF).
3. Wait a few seconds. Supplier, amount, VAT and date are filled in for you.
4. Check the details, correct anything that is off and save the expense.

To pull several lines from one document or steer the scanner, use the **Scan Receipt** page. It opens when you pick a file under **Start with a receipt** in the full expense form (**Open the full form**), or on Office when you choose **Scan & book as expense** for an attachment in your inbox. The scan starts right away.

1. To set options first, click **New Scan** after a scan and open **Advanced Settings**. Under **Extraction mode**, choose:
   - **Single total**: one expense for the receipt total (the default)
   - **Multiple items**: one expense per line on the same receipt
2. Upload your receipt file (drag and drop or click to browse) and click **Scan Now**. The scanner takes one file at a time and is done within a few seconds.
3. Review the extracted data:
   - Date
   - Amount
   - Supplier name
   - Description / items
4. Edit any fields that need correction.
5. Click **Add 1 expense** (or for example **Add 3 expenses** for several lines) to create the expense(s).

## Extraction modes

### Single total

Best for simple receipts and most invoices:

- Restaurant bills
- Gas station receipts
- Single-item purchases

Extracts: date, total amount, supplier, description.

### Multiple items

Best when you want to book the lines of a receipt or invoice as separate expenses:

- Office supply orders with multiple items
- Supplier invoices with line items
- Shopping lists

Extracts: individual line items with descriptions and amounts.

## Advanced settings

The scanner has an advanced options panel:

- **Instructions**: tell the scanner in up to 200 characters what to look for or what to ignore (e.g. "Only include fuel expenses, ignore parking")
- **Extraction mode**: **Single total** or **Multiple items** (default: Single total)
- **Expense type**: limit the scan to one expense category, or leave it on **Any category (auto-detect)**
- **Filter by exact match**: keywords; only lines whose description or supplier matches at least one keyword are kept
- **Price range (incl. VAT)**: a minimum and maximum amount; lines outside the range are skipped
- **Attach receipt to expenses**: whether the original file is attached to every created expense (on by default)

## Scanning limits

Receipts and invoices with too many line items to process in one pass are rejected with a "too many lines" message. If you see this, split the document into smaller parts (for example, one page or a smaller group of line items at a time), or enter the expenses manually.

## Tips for best results

- **Good lighting**: Take photos in well-lit conditions
- **Flat surface**: Place the receipt on a flat surface
- **Full receipt**: Make sure the entire receipt is in frame
- **Clear text**: Ensure text is legible and not blurry
- **One receipt per scan**: Scan receipts individually for best accuracy

## After scanning

Once confirmed, the expense is created with:

- All extracted data pre-filled
- The original receipt attached as a file
- A suggested category and VAT rate; if the card says they were guessed, give them a quick check

When the scanner resolves a supplier country (for example, a foreign supplier or a matched Dutch KVK number), the review card also shows a VAT treatment selector. The scanner proposes a default based on the supplier and amount, but you can change it before confirming. This matters for reverse-charge purchases from another EU country and for non-EU import expenses.

You can edit the expense afterward like any manually created expense.

## Currency and duplicate bookings

The scanner recognises when a document is in a currency other than euro. In that case the review card shows the original amount with its currency and a separate field where you enter the euro amount as your bank converted it. The foreign-currency lines cannot be confirmed until the euro amount is filled in. If the document is already in euro, the card shows "This is just euros" and the flow stays unchanged.

When the scanner thinks a receipt was already booked, it shows a warning with the date, supplier and amount of the existing expense. You can open that expense or choose to book the receipt again anyway if the warning is wrong; saving then asks once more with "Same expense twice?" before it books. The check is a soft guard, not a hard block; it only prevents accidentally entering the same receipt twice.

When the receipt already scanned has an expense standing in your books for it, or close to it, the review card carries the **Add receipt to this one** button (when that expense has no receipt yet): the receipt is attached to the expense standing there instead of booking a second one, the row disappears out of the review, and with the last row you land on the expense. An expense that already carries a receipt never gets a second one over it.

Rows on the same receipt stay separate costs: three equal parking tickets on one receipt book as three costs, and the repeated amount gets flagged instead of quietly skipped. When the whole batch sits already in your books, the confirmation says so instead of booking it a second time.

The scanner can also recognise your own sales invoices and warn that the document looks like a sales invoice rather than an expense. That warning does not block you; you can still continue if it is a return or a correction.

## Permissions

The receipt scanner is gated by the same page permission as the Expenses page. A team member needs **Read** access to Expenses to open the scanner, and **Create** access to confirm a scanned receipt into a new expense. Members without the Create permission still see the scanner, but cannot finish the confirmation. This applies whether the receipt is uploaded from the Expenses page or created through a shared photo flow.

## Scanning several receipts

The uploader takes one file at a time. To process several receipts, scan them one after another; each scan counts once towards your monthly cap. For a receipt or invoice that contains multiple items, choose **Multiple items** to create several expenses from a single scan.

## Tips

- Scan receipts as soon as you receive them, and don't let them pile up
- Check the extracted amount carefully, especially for receipts with multiple currencies
- Keep the original receipt file attached for tax audit purposes
- For receipts in a foreign currency, always check that the euro amount matches your bank's conversion
- Unsure about a duplicate-booking warning? Open the existing expense to verify
