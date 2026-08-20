---
title: Accountant forwarding
last_verified: 2026-08-19
---

# Accountant forwarding

If your accountant works in their own package, such as Exact, SnelStart, Twinfield, or Yuki, you can have MyCompanyDesk send invoices and expenses to them automatically. This avoids mailing records one by one.

## Where to find it

Go to **Settings** > **Access & accountant** (`/settings/team`) and open the **Accountant** section. Below the contact list is a card called **Automatic forwarding**.

## What you can set

The card reads from and writes to `/api/team/accountant-delivery`. Any workspace member can read the settings; only team admins can change them.

| Setting | Options |
|---|---|
| **Recipient** | Choose an existing accountant contact, or none |
| **Sales invoices** | Off, when sent, or when paid |
| **Expenses** | Off, or when created |
| **How often** | Directly, daily, weekly (Monday), monthly, or quarterly |
| **Only expenses with receipt** | Hold back expenses that do not have a receipt yet |
| **Attach receipts** | Include receipt images as attachments |
| **Attach invoice PDF** | Include the invoice PDF |
| **Include quotes** | Include accepted quotes as well |
| **Enabled** | Master switch for automatic forwarding |

The default cadence for most offices is weekly on Monday, because one bundled email is easier to process than a separate message for every record.

### Deductibility in the export

The `uitgaven.csv` file in the forwarded export now ends with a column that shows the category's deduction percentage for each expense. This replaces the older "Deductible" yes/no column: the percentage tells the accountant exactly how much of the VAT is deductible, and the same row still shows the deductible VAT amount so the line detail matches the VAT summary.

The included `leesmij.txt` explains that this percentage accounts for part of the difference between the VAT on the invoice and the amount reclaimed in the VAT return. Other factors, such as reverse-charge VAT, foreign supplier VAT, or private use on an expense, can also change the deductible amount. If an accountant wants to verify a line, they can open the expense in the app to see the VAT treatment.

### Receipt requirement

When **Only expenses with receipt** is on, expenses without a receipt are not forwarded. They stay in the workspace and the count is included in the forwarding email so you know what is still pending. Your accountant needs the receipt to reclaim VAT, so this switch prevents incomplete records from leaving the workspace.

## Permission to change settings

Only team admins can edit the dropdowns, checkboxes, and the master switch. Non-admins see the current settings but cannot save changes.

## What is forwarded

Only records that are ready for an accountant leave the workspace:

- Not hidden from the accountant.
- Not pending review (bank or inbox items you have not confirmed yet).
- Not trashed or archived.
- Invoices must be sent; draft invoices are not forwarded.
- When the receipt requirement is on, expenses must have a receipt.

The engine runs on a watermark (`last_delivered_at`), not on individual status hooks, so a record is never missed because a new payment path was added later.

## Delivery log and activity

The **Access & accountant** page keeps a delivery log showing what was forwarded and when. It also records an activity overview for the connected accountant: what they viewed or changed inside the workspace. Both logs are visible to workspace owners and team admins; the accountant can see the delivery log but cannot erase it.

## Manual forwarding from a record

You can also send a single invoice, expense, or quote to your accountant straight from its detail page. Look for the **Send to accountant** button near the email actions. This records a manual delivery in the same log, so you can see it next to automatic forwarding. Failed manual sends are logged too, so you do not resend the same record by accident.

## Sent box

Manual sends and other workspace emails appear in the **Sent** box in your inbox. They are grouped under the accountant category, so you can see at a glance which documents already left the workspace.

## Related

- [Access & accountant](/en/settings/team) for inviting your accountant and choosing a contact
- [Invoices](/en/features/invoices) for sending and managing sales invoices
- [Expenses](/en/features/expenses) for adding receipts and expenses
- [Quotes](/en/features/quotes) for creating and converting estimates
