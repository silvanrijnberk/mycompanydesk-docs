---
title: VAT
last_verified: 2026-08-16
---

<!-- TODO(source-missing): RichardTool 5407b44 added historical Dutch VAT rates 6% and 19% to the valid invoice/quote/contract/recurring-invoice/catalog rate set. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# VAT

Track collected and paid VAT, prepare your return, and stay ahead of deadlines. MyCompanyDesk supports country-specific VAT flows: the page mirrors the Dutch BTW form for companies in the Netherlands, and uses each workspace country's filing deadlines and rules for other supported countries, so the numbers you see are the numbers you file.

## Page layout

The VAT page has three tabs: **Overview**, **Filing** and **Transactions** (Overzicht, Aangifte and Transacties when your app language is Dutch). Both the active tab and the active period are kept in the URL, so refresh and the back button preserve your place.

A page-wide period selector sits next to the tab bar and follows the filing frequency in your tax settings. Quarterly filers see Q1 to Q4 plus full year, monthly filers see M01 to M12 plus full year, and yearly filers see the full-year option. Switching it updates every card on every tab. The same filing frequency drives the period labels when you book a manual correction, so monthly filers see M01 to M12, quarterly filers see Q1 to Q4, and yearly filers keep the full-year option. A year switcher at the top of the page moves everything to another year.

The active tab and period are both in the URL, so links from the VAT deadline reminder in your notification panel, the agenda-deadline chip, the push notification, and the VAT-period card in Expenses all open the exact period the message refers to instead of defaulting to the current quarter.

The active tab and period are both in the URL, so links from the VAT deadline reminder in your notification panel, the agenda-deadline chip, the push notification, and the VAT-period card in Expenses all open the exact period the message refers to instead of defaulting to the current quarter.

## Hero card

The hero summarises the selected period:

- **Balance**: net VAT (collected minus paid) with a "te betalen" or "terug te ontvangen" label. It follows the period selector.
- **Deadline ring**: a circular countdown to the next filing deadline, computed from your workspace country's schedule and your filing frequency. Red when 3 days or fewer remain, amber up to 14 days, green otherwise.

<!-- TODO(source-missing): RichardTool 8bd35ae1 introduced country-specific VAT filing deadlines (NL, GB, DE, and others). The exact deadline rules per country are not yet in sources/. Do not list specific per-country due dates until a human adds them to sources/. -->
- **VAT savings pot (BTW-spaarpotje)**: a suggested reserve of the period balance plus a 10% buffer, shown when you owe VAT. When you are due money back, the tile flips to a green refund tile instead.

Three buttons sit under the balance: **Open aangifte** jumps to the Filing tab, **How is this calculated?** walks through the math behind the balance, and **Open Mijn Belastingdienst Zakelijk** opens the business portal at `mijn.belastingdienst.nl/mbo-portaal/` so you can finish the submission without an extra chooser step.

A banner above the hero warns when your data is incomplete (draft invoices or expenses without VAT), so you can fix it before filing.

MyCompanyDesk also emails you once per VAT period as the filing deadline approaches. The email links straight to the VAT page and follows your VAT deadlines toggle in Settings → Notifications, so you can turn it off there.

If your company is a Dutch BV or NV, the same VAT deadlines toggle also sends a once-per-year reminder ahead of the corporate income tax (vennootschapsbelasting) filing deadline. The reminder appears in the notification panel and is sent by email.

## Overview tab

### Quarter strip

Four cards (Q1 to Q4) summarising revenue, VAT collected, VAT paid, and the balance per quarter, along with the filing deadline and a lock badge on filed or locked quarters. Click a card to switch the page-wide period. Upcoming quarters stay empty until they contain actual data, then they show the balance and a status badge just like past quarters.

### Pre-filing checks

A checklist that runs against the active period. Every check has a fix link that takes you straight to the affected records:

- **Drafts**: invoices still in draft that will not count in the aangifte.
- **Missing VAT**: expenses without a VAT amount.
- **Missing receipts**: expenses without an attached receipt.
- **ICP pending**: EU B2B sales that need to be reported separately on the ICP-opgaaf. The amount and count use the same classification rules as the ICP return, so they match the lines that will actually appear on the submission.
- **Reverse-charge origin**: expenses with reverse-charge VAT whose supplier country or KVK number is missing, so rubriek 2a/4a/4b cannot be proven.
- **Deductible mismatch**: expenses whose deductible VAT does not equal their total VAT, for example because the category is not fully deductible or private use applies. This mirrors the flags shown on the Transactions tab.

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

Each row shows the omzet (excl.) and the VAT amount. The bottom bar shows the total to pay or receive. Corrections that fall outside the form appear on their own rows: a generic booking correction is shown as **Correctie**, while a reduction under the old KOR scheme is shown as **Vermindering volgens de oude KOR**. The CSV summary adds a matching corrections line when these are nonzero, so the balance, collected and paid figures add up. The year-overview BTW-saldo column uses the same net-VAT total as the rubrieken sheet, so its rows total to the same figure.

When you add a manual correction, enter a positive amount and choose a direction (VAT due or VAT refund). Negative amounts are rejected and the form shows an error asking you to pick the direction instead; the direction determines whether the correction increases VAT payable or decreases it.

The year field accepts tax years between 2000 and the current calendar year plus one. Years above that range are rejected with an inline message, because a correction saved for a future year would become unreachable on the VAT page.

The reference year field for VAT corrections uses the same 2000-to-current-plus-one range. The reference year must be the tax year the original entry belongs to; choosing a year outside the range or a future reference year is blocked, because the correction would otherwise point to a period that cannot be reached from the VAT page.

A correction is only counted in a return when its period matches your workspace's VAT filing frequency. For example, a correction saved as Q1 will not be included in any monthly or yearly return, and a correction saved as M03 will not be included in any quarterly return. The corrections card shows an orange warning badge and a hint when a correction's period does not appear in any return, so you can edit its period before filing.

Rubriek 4a captures reverse-charge purchases from suppliers outside the EU (`import_reverse_charge`); rubriek 4b captures reverse-charge purchases from EU suppliers (`b2b_reverse_charge`). MyCompanyDesk derives the correct rubriek from the supplier country so the total in 5a stays accurate.

When you save or delete a correction, the rubrieken sheet, hero card, quarter strip and filing-action card update immediately; there is no need to refresh or switch periods. The company-car private-use card also refreshes live when its correction is booked.

### Exports for your accountant

A download card next to the sheet offers CSV exports: a full export for your boekhouder, a BTW summary for the selected quarter, and a year overview.

The ZIP filename includes the company name, the period and the export profile, and the README inside also names the company. This makes it easier for an accountant who downloads exports for several clients to tell the files apart.

<!-- TODO(source-missing): RichardTool 4ffca446 surfaced a nil-return reminder that mentions a Belastingdienst invitation and a verzuimboete. sources/ has no entry for Dutch nil-VAT-return obligations or fines; do not quote the invitation requirement or the fine in docs until a human verifies the current rule at belastingdienst.nl. -->

### Nil-return reminder

If the selected period has ended and both rubriek 5a and 5b are zero, an info card appears on the Filing tab to remind you that a nil return may still need to be filed when your tax authority invited you to do so. The card is not shown for periods that ended before the workspace was created, because MyCompanyDesk holds no data for those periods.

### Filed-return drift warning

<!-- TODO(source-missing): RichardTool 28c9641 added a filed-return drift warning that uses a Belastingdienst threshold to choose between "include in the next regular return" and "formal suppletieaangifte required". sources/ has no entry for this threshold; do not quote the value or link target in docs until a human verifies the rule at belastingdienst.nl. -->

For Dutch VAT, once a period is marked as filed the Filing tab keeps recalculating the return from your live records. If the current calculation no longer matches what you submitted, a warning banner appears above the rubrieken sheet. It compares the filed and current amounts for rubriek 5a, 5b and the net total in 5g, and shows the difference for each row.

The banner tells you what to do next. It either tells you to include the difference in your next regular return, to file a formal suppletieaangifte, or to note that the rows shifted while the net payable or refundable amount stayed the same.

### International cards

When you have international activity, companion cards appear under the sheet:

- **ICP-opgaaf**: EU B2B sales grouped per customer. Required when you sold goods or services to VAT-registered customers in other EU countries. The card follows the page-wide period selector, so a quarterly export lists only that quarter's EU customers.
- **OSS breakdown**: per-country B2C sales for the One Stop Shop scheme.
- **Foreign VAT**: foreign VAT charged to you that may be reclaimable through the EU refund procedure.
- **Corrections**: manual VAT corrections, each with a hint that explains where it lands on the return. A private withdrawal counts in rubriek 1d. A suppletie is offset against rubriek 5a or 5b (under the KOR it does not affect input VAT, so rubriek 5b stays zero). A generic adjustment does not get its own box; it only shifts the payable or refundable total shown by MyCompanyDesk, not a rubriek you copy across.


<!-- TODO(source-missing): RichardTool e671fd80 surfaces a Belastingdienst €1,000 threshold for suppletie corrections (under = next regular aangifte, over = formal suppletieaangifte required). sources/ has no entry for this threshold; do not invent the value or the link target until a human verifies the current rule at belastingdienst.nl. -->

These cards stay hidden until there is actual international data, so most workspaces never see them.

### Company car private use

When you deduct VAT on a company car, you must correct for private use at the end of the year. MyCompanyDesk has a dedicated VAT correction flow for this:

- Choose between a flat-rate correction based on the car's list price, or an actual-use correction based on a complete trip log.
- The flat-rate percentage depends on whether the car is older than the threshold year or bought without VAT deduction.

The correction is rolled into the period totals on the Filing tab.

<!-- TODO(source-missing): The Dutch flat-rate percentages for company-car private-use VAT correction and the age threshold are not yet in sources/. Do not quote the values in docs until a human verifies the current rules at belastingdienst.nl. -->

## Transactions tab

A flat list of every invoice and expense feeding the selected period, useful for spot-checking records before you file. Filter chips narrow the list down: **All**, **Missing receipt**, **Missing VAT**, **Reverse charge** and **Foreign VAT**, each with a live count. Every row links to the underlying invoice or expense.

Expense rows that are not fully deductible show a flag such as **VAT not deductible** or **VAT partly deductible**. Hover the flag (or focus it) to see a tooltip explaining how much of the expense VAT counts as input VAT in rubriek 5b. If you use the KOR, the tooltip explains that no input VAT is deducted because rubriek 5b is zero for the whole period; the flag is then about the period, not the individual expense.

## Period locking

A summary bar at the top of the VAT page shows how many periods are locked; expand it to manage them.

- **Automatic locking**: once a period's filing deadline has passed, MyCompanyDesk locks it automatically, so your books keep matching the aangifte you filed.
- **Manual locking**: period chips let you lock any past period of the selected year yourself, for example right after filing early. Locking a period that is still running triggers an extra warning. Periods that ended before the workspace was created cannot be locked, because MyCompanyDesk holds no data for them and cannot have filed a return on your behalf.
- **Mark as filed**: flag a locked period as filed once you have submitted the aangifte. When you open a BTW-deadline reminder in the notification panel, the **Mark as filed** action uses the period named in that reminder rather than today's date, so it updates the correct quarter or month. It also resolves only the reminders for that period, not every outstanding VAT reminder in the workspace. Filed quarters show this in the quarter strip too.
- **Unmark as filed**: if you marked a period as filed by mistake, you can remove that filing record. MyCompanyDesk asks for confirmation first, because the action removes the record that you filed for this period. The period stays locked, the filing task and deadline return, and nothing changes at the tax authority. Your submitted return remains submitted.
- **Temporary unlock**: need to fix something? Unlock a period temporarily (72 hours) and it relocks by itself, or relock it manually when you are done. Removing a lock entirely is only possible while the filing deadline has not yet passed.

Filing status is tracked per exact tijdvak, not by range containment. A filed year return does not mark the four quarters as filed, and a filed quarter does not mark the months inside it as filed. Locking still covers the whole range, so a year lock still protects every quarter.

**Filing timing and corrections.** You can only file a period after it ends. If you try to file before the last day of the period has passed, the app shows an error telling you to wait until the period is over. You can mark a period as filed only once; if it is already marked as filed, you cannot file it again from the VAT page. To correct a filed period, add a correction/suppletie in an open period instead. The Filing tab shows which periods are still open and which are already filed.

Editing an invoice or expense inside a locked period is blocked at the form: the financial fields turn read-only (notes stay editable) and the form offers a correction path instead, such as creating a correction in the current open period or a credit invoice. The same guard also applies when you confirm a bank-transaction match or mark an expense as paid: if the transaction falls in a locked period, the action is blocked and the app tells you to use a correction in the current open period instead.

Concurrent filing attempts for the same period are serialized. If two submissions race, for example from a double click or two open tabs, the second request is rejected with a clear message instead of failing with a database error.

## KOR

The kleineondernemersregeling is managed under **Settings → BTW**: a card tracks your year revenue against the €20,000 threshold ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](../../sources/vat-rates.yaml)) with a progress bar, explains what enrolment means for your invoicing, and has the enrolment toggle. You remain eligible up to and including exactly €20,000 of year revenue; only revenue above that ends KOR eligibility. While your revenue is still in the KOR range, the VAT page shows a hint linking there.

If you go above €20,000 while still enrolled, a warning banner appears at the top of the invoice editor. The banner title says you are above the KOR threshold, the body explains that the invoice must include VAT rather than 0%, and the CTA opens **Settings → BTW** so you can deregister with the Belastingdienst and turn KOR off.

## KIA and Box 3

KIA (kleinschaligheidsinvesteringsaftrek) and Box 3 are income tax topics and live under **Reports → Income tax**, not on the VAT page. The Box 3 card only appears for workspaces using the properties module.

## VAT assistant

The built-in assistant can answer questions about your aangifte using your own workspace numbers, and its replies can jump straight to the matching tab or record.

## Tips

- Set the page period to the tijdvak you are filing; every card and metric updates together.
- Run through the pre-filing checks before opening the Filing tab; a clean checklist usually means the rubrieken sheet matches the Belastingdienst form.
- Use the savings pot as a target for what to set aside; it already includes a 10% buffer.
- The deadline ring follows your filing frequency and goes red at three days. Treat that as a hard cue to file.
- The dashboard VAT tile uses the same filing frequency as the VAT page, so the upcoming deadline and period it shows always match your actual aangifte rhythm.
- Selling B2B in the EU? Open the ICP-opgaaf card before filing; it is a separate submission that is easy to forget.
- Mark a period as filed right after submitting, then let the automatic lock protect it.
- Zeroing an expense amount clears the derived VAT immediately, so a corrected expense cannot leave stale VAT on the aangifte.
