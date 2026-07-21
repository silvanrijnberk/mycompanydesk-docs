---
title: VAT
last_verified: 2026-07-02
---

<!-- TODO(source-missing): RichardTool 5407b44 added historical Dutch VAT rates 6% and 19% to the valid invoice/quote/contract/recurring-invoice/catalog rate set. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# VAT

Track collected and paid VAT, prepare your aangifte, and stay ahead of deadlines. MyCompanyDesk supports the Dutch VAT flow (BTW): the page mirrors the Belastingdienst aangifte, so the numbers you see are the numbers you file.

## Page layout

The VAT page has three tabs: **Overview**, **Filing** and **Transactions** (Overzicht, Aangifte and Transacties when your app language is Dutch). Both the active tab and the active period are kept in the URL, so refresh and the back button preserve your place.

A page-wide period selector (Q1 to Q4 plus full year) sits next to the tab bar; switching it updates every card on every tab. If your workspace files monthly, the selector shows the twelve months instead of quarters, matching the filing frequency in your tax settings. A year switcher at the top of the page moves everything to another year.

## Hero card

The hero summarises the selected period:

- **Balance**: net VAT (collected minus paid) with a "te betalen" or "terug te ontvangen" label. It follows the period selector.
- **Deadline ring**: a circular countdown to the next filing deadline. Red when 3 days or fewer remain, amber up to 14 days, green otherwise.
- **VAT savings pot (BTW-spaarpotje)**: a suggested reserve of the period balance plus a 10% buffer, shown when you owe VAT. When you are due money back, the tile flips to a green refund tile instead.

Two buttons sit under the balance: **Open aangifte** jumps to the Filing tab, and **How is this calculated?** walks through the math behind the balance.

A banner above the hero warns when your data is incomplete (draft invoices or expenses without VAT), so you can fix it before filing.

## Overview tab

### Quarter strip

Four cards (Q1 to Q4) summarising revenue, VAT collected, VAT paid, and the balance per quarter, along with the filing deadline and a lock badge on filed or locked quarters. Click a card to switch the page-wide period.

### Pre-filing checks

A checklist that runs against the active period. Every check has a fix link that takes you straight to the affected records:

- **Drafts**: invoices still in draft that will not count in the aangifte.
- **Missing VAT**: expenses without a VAT amount.
- **Missing receipts**: expenses without an attached receipt.
- **ICP pending**: EU B2B sales that need to be reported separately on the ICP-opgaaf.
- **Reverse-charge origin**: expenses with reverse-charge VAT whose supplier country or KVK number is missing, so rubriek 2a/4b cannot be proven.

A badge in the header shows the number of blockers, or that everything is clear.

### Summary and year totals

Below the checks you see the year's key figures (revenue, expenses, profit, VAT collected and paid, an estimated tax burden, and a recommended reserve), plus a one-line total across the quarters.

While your revenue is still in KOR territory, this tab also shows a hint pointing to the KOR settings (see below).

## Filing tab

### Rubrieken sheet

A table that mirrors the Belastingdienst aangifteformulier:

| Section | Codes |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Each row shows the omzet (excl.) and the VAT amount. The bottom bar shows the total to pay or receive. Corrections that fall outside the form (KOR, suppletie) appear as a separate adjustment row, so what you actually pay stays visible.

### Exports for your accountant

A download card next to the sheet offers CSV exports: a full export for your boekhouder, a BTW summary for the selected quarter, and a year overview.

### International cards

When you have international activity, companion cards appear under the sheet:

- **ICP-opgaaf**: EU B2B sales grouped per customer. Required when you sold goods or services to VAT-registered customers in other EU countries.
- **OSS breakdown**: per-country B2C sales for the One Stop Shop scheme.
- **Foreign VAT**: foreign VAT charged to you that may be reclaimable through the EU refund procedure.
- **Corrections**: privé-onttrekking, suppletie, and other adjustments rolled into the period totals.

These cards stay hidden until there is actual international data, so most workspaces never see them.

## Transactions tab

A flat list of every invoice and expense feeding the selected period, useful for spot-checking records before you file. Filter chips narrow the list down: **All**, **Missing receipt**, **Missing VAT**, **Reverse charge** and **Foreign VAT**, each with a live count. Every row links to the underlying invoice or expense.

## Period locking

A summary bar at the top of the VAT page shows how many periods are locked; expand it to manage them.

- **Automatic locking**: once a period's filing deadline has passed, MyCompanyDesk locks it automatically, so your books keep matching the aangifte you filed.
- **Manual locking**: period chips let you lock any past period of the selected year yourself, for example right after filing early. Locking a period that is still running triggers an extra warning.
- **Mark as filed**: flag a locked period as filed once you have submitted the aangifte. Filed quarters show this in the quarter strip too.
- **Temporary unlock**: need to fix something? Unlock a period temporarily (72 hours) and it relocks by itself, or relock it manually when you are done. Removing a lock entirely is only possible while the filing deadline has not yet passed.

Editing an invoice or expense inside a locked period is blocked at the form: the financial fields turn read-only (notes stay editable) and the form offers a correction path instead, such as creating a correction in the current open period or a credit invoice.

## KOR

The kleineondernemersregeling is managed under **Settings → BTW**: a card tracks your year revenue against the €20,000 threshold with a progress bar, explains what enrolment means for your invoicing, and has the enrolment toggle. While your revenue is still below the KOR range, the VAT page shows a hint linking there.

If you pass the threshold while still enrolled, a warning banner appears at the top of the invoice editor so you do not accidentally issue a 0% invoice once VAT is due again. The banner shows your current KOR limit and links to **Settings → BTW** to deregister.

## KIA and Box 3

KIA (kleinschaligheidsinvesteringsaftrek) and Box 3 are income tax topics and live under **Reports → Income tax**, not on the VAT page. The Box 3 card only appears for workspaces using the properties module.

## VAT assistant

The built-in assistant can answer questions about your aangifte using your own workspace numbers, and its replies can jump straight to the matching tab or record.

## Tips

- Set the page period to the tijdvak you are filing; every card and metric updates together.
- Run through the pre-filing checks before opening the Filing tab; a clean checklist usually means the rubrieken sheet matches the Belastingdienst form.
- Use the savings pot as a target for what to set aside; it already includes a 10% buffer.
- The deadline ring goes red at three days. Treat that as a hard cue to file.
- Selling B2B in the EU? Open the ICP-opgaaf card before filing; it is a separate submission that is easy to forget.
- Mark a period as filed right after submitting, then let the automatic lock protect it.
