---
title: VAT
description: "Track collected and paid VAT, prepare your return and stay ahead of deadlines. The page mirrors the Dutch btw form for companies in the Netherlands."
last_verified: 2026-10-24
---

<!-- TODO(source-missing): The app also accepts the historical Dutch VAT rates 6% and 19% on invoices, quotes, contracts, recurring invoices and catalog items. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# VAT

Track collected and paid VAT, prepare your return, and stay ahead of deadlines. MyCompanyDesk supports country-specific VAT flows: the VAT pages mirror the Dutch btw form for companies in the Netherlands, and uses each workspace country's filing deadlines and rules for other supported countries, so the numbers you see are the numbers you file.

## Where to find it

Open **Taxes** in the sidebar. The section starts with the VAT tabs: **Overview**, **Return**, **Checks**, **Transactions**, **Corrections** and **Periods**. After a divider come the income tax tabs **Profit return** and, when they apply to you, **Box 3**. The VAT tabs are free on every plan; the income tax tabs need Office. The active tab and period are kept in the URL, so refresh and the back button preserve your place.

A **Period** selector in the toolbar follows the filing frequency in your VAT settings. Quarterly filers see Q1 to Q4 plus full year, monthly filers see M01 to M12 plus full year, and yearly filers see the full-year option. Switching it updates every card on every tab. The same filing frequency drives the period labels when you book a manual correction. A year switcher next to the tabs moves everything to another year, and the **Export** button in the toolbar holds the CSV downloads for your accountant.

Because the tab and period are in the URL, links from the VAT deadline reminder in your notification panel, the agenda-deadline chip, the push notification and the VAT-period card in Expenses all open the exact period the message refers to instead of defaulting to the current quarter. Old links to the VAT page keep working and land on the same period.

## VAT settings

**Settings › VAT** holds the choices that drive the VAT pages and many invoice defaults.

### Filing frequency

The question **How often do you file a VAT return?** sets which periods appear in the period selector and which returns you must file:

| Choice | Periods shown |
|---|---|
| **Every month** | M01 to M12 plus full year |
| **Every 3 months** | Q1 to Q4 plus full year |
| **Once a year** | Full year only |

Changing the frequency does not rewrite historical returns. It only affects how future periods are grouped. When the change touches periods you already filed, the app tells you which ones and from which period the new frequency starts.

### VAT rate

**Which VAT rate do you usually use?** sets the default for new invoice lines and other taxable items: 21%, 9% or 0% (sources/vat-rates.yaml#countries.NL.standard, reduced, zero). You can always pick another rate per invoice or receipt.

### 9% suggestion for food and drink

When you add a brand-new item in your catalog, MyCompanyDesk may ask: "Do you sell food or drink? That's usually 9% VAT." The question appears only when your workspace has never picked its own default rate in Settings › VAT, the KOR and exempt toggles are both off, and your own registered data (KVK/SBI code, signup answer or business description, never the company name) clearly points to food or hospitality. Clicking **Set to 9%** applies the reduced rate (sources/vat-rates.yaml#countries.NL.reduced) to that one item. Nothing is preselected: ignoring the question changes nothing, existing items never show it, and KOR or exempt workspaces never see it.

### Default expense VAT rate

**And for your expenses?** sets the VAT rate that is preselected when you add a new expense. You can still change it per expense.

### Exempt from VAT

The toggle **My services are VAT-exempt (for example healthcare or education)** is for businesses whose services are exempt by law. When it is on, new invoice and quote lines default to exempt, and the Checks tab reminds you that input VAT on costs for exempt activities is not deductible. Do not confuse this with the KOR; they have different rules.

### Small business scheme (KOR)

The KOR card asks whether you take part in the Dutch **kleineondernemersregeling** and has the switch **I'm taking part in the KOR**. When enabled:

- Your invoices carry no VAT and you do not file VAT returns.
- Collected VAT is not shown as payable; input VAT is not deducted.
- A meter shows your revenue this year up to today against the threshold.

The meter has three states:

- **Under the limit**: normal progress colour.
- **Near the limit**: from 80% of the threshold the line under the meter tells you to keep an eye on your revenue, so you can plan for crossing it. While you are enrolled, an amber notice from 90% also says how much room is left.
- **Over the limit**: as soon as your revenue this year goes above €20,000 excluding VAT ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)), a red warning says the KOR no longer applies. From the invoice that crossed the threshold you must charge VAT again, on the full amount of that invoice. Deregister with the Belastingdienst straight away: the KOR is then closed to you for the rest of that year and the next ([`sources/vat-rates.yaml#countries.NL.small_business_on_exceed`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)).

The 80% and 90% points are choices MyCompanyDesk makes to warn you in time; the Belastingdienst itself only sets the €20,000 limit.

<!-- TODO(source-missing): whether the KOR switch is offered to workspaces outside the Netherlands is not yet verified. -->

If the business no longer qualifies for the KOR, turn the switch off and double-check the next return with your accountant. More on the KOR [below](#kor).

### Lines outside VAT

An invoice line can be **Outside VAT** (buiten btw): money you pay on your customer's behalf and pass on unchanged, such as a fee you pay to a government body. The line does not stand in the way of finalizing the invoice, counts in no rubriek of the return, is not part of the ICP-opgaaf, counts as no revenue of yours and stays out of the KOR revenue as well. The flag exists on invoice lines, on the items of a recurring invoice and on an offering item whose invoice line should carry it. On the PDF, in the email and on the invoice detail the line reads **Outside VAT**, and the VAT summary carries its own **Of which outside VAT** line. No VAT rate is suggested on such a line, and picking a rate above 0% removes the flag again. MyCompanyDesk points out what it is for: costs you pay in the customer's name and pass on at cost, such as fees or court fees, because tourist tax usually belongs in your rental price and carries the reduced 9% rate instead (sources/vat-rates.yaml#countries.NL.reduced).

### Reverse charge

Reverse charge lives with the lines now. The phone steps bring the choice up for every business customer; the long form brings it up for a Dutch business with a VAT number and asks whether you work for them as a subcontractor, for example in construction, cleaning or temp work, because that is where it is often applied. It never turns itself on for a Dutch customer: you switch it.

For a business customer in another EU country with a VAT number, or one outside the EU, the switch turns itself on. The note under it says so, and for a customer outside the EU the form explains what applying it means for a service to such a business. Services to a business outside the EU stay off the ICP-opgaaf below.

<!-- TODO(source-missing): what the form explains for customers outside the EU (services to such a business, the exceptions it names, and goods as an export) has no entry under sources/ yet; describe the substance once a human curates it. -->

## Overview tab

The hero summarises the selected period:

- **Balance**: the same net total as rubriek 5g on the Return tab: VAT collected and self-charged (rubrieken 2a/4a/4b) minus the input VAT that goes into rubriek 5b, with manual corrections included. VAT owed through the OSS scheme is not part of it, because that belongs on its own return. It carries a "to pay" or "to reclaim" label and follows the period selector.
- **Deadline ring**: a circular countdown to the next filing deadline, computed from your workspace country's schedule and your filing frequency. Red when 3 days or fewer remain, amber up to 14 days, green otherwise. Has a return been submitted but its amount is still open, the ring stays on that period until the payment date and the hint reads **Filed, payment open**, with **Pay today** on the payment day itself; a submitted period that is settled, or one that came out as a refund, no longer holds the ring and the countdown moves on to the next filing. For a Dutch workspace the deadline is the last day of the month after the period for a monthly or quarterly return, and before 1 April of the following year (so 31 March at the latest) for an annual return. By then the Belastingdienst must have received both the return and the payment ([`sources/nl-vat-filing.yaml#deadlines`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-filing.yaml)).

<!-- TODO(source-missing): The app also uses country-specific VAT filing deadlines for workspaces outside the Netherlands (GB, DE and others). Those rules are not in sources/ yet; do not list per-country due dates for them until a human adds them. -->
- **Savings pot**: a suggested reserve of the VAT you still have to pay plus a 10% buffer, shown when the balance is payable. When you are due money back, the tile shows the refund instead.

Two buttons sit under the balance: **Open aangifte** jumps to the Return tab, and **How is this calculated?** walks through the math behind the balance.

A banner above the hero warns when your data is incomplete (draft invoices or expenses without VAT), so you can fix it before filing.

Below the hero, the period cards for the year show revenue, VAT out and in, and the balance per period, with the filing deadline. A period that has been filed shows its filing date. Click a card to switch the page-wide period. Upcoming periods stay empty until they contain actual data.

A year card closes the tab: revenue, VAT owed and input VAT for the whole year, plus an estimate of the income tax (or corporate income tax for a BV) for that year with a **View the calculation** link. The overview also carries a set-aside card: it suggests about how much to set aside this month for the income tax and the health insurance contribution (or the corporate income tax), from your figures at the current pace, divided over the months of the year. The assumptions stand in plain language on the card, starting later in the year adds a catch-up line for the months before, and a per-month view shows how the amount builds up. The estimate runs on your own figures and is not tax advice; the taxes card on the dashboard shows the same amount as one line.

MyCompanyDesk also emails you once per VAT period as the filing deadline approaches. The email links straight to the VAT pages and follows the **When a deadline is coming up** toggle in Settings › Notifications, so you can turn it off there.

If your company is a Dutch BV or NV, the same toggle also sends a once-per-year reminder ahead of the corporate income tax (vennootschapsbelasting) filing deadline. The reminder appears in the notification panel and is sent by email.

## Checks tab

A checklist that runs against the active period before you file. Every check has a fix link that takes you straight to the affected records:

- **Drafts**: invoices still in draft that will not count in the aangifte.
- **Missing VAT**: expenses without a VAT amount.
- **Missing receipts**: expenses without an attached receipt.
- **ICP pending**: EU B2B sales that need to be reported separately on the ICP-opgaaf. The amount and count use the same classification rules as the ICP return, so they match the lines that will actually appear on the submission.
- **Reverse-charge origin**: expenses with reverse-charge VAT whose supplier country or KVK number is missing, so rubriek 2a/4a/4b cannot be proven.
- **Deductible mismatch**: expenses whose deductible VAT does not equal their total VAT, for example because the category is not fully deductible or private use applies. This mirrors the flags shown on the Transactions tab.
- **Expenses to confirm**: bank expenses still waiting on your confirmation. They do not count in the aangifte yet, their VAT included; confirm or remove them in Expenses under To confirm. This check only appears when the period holds such expenses.

The header shows how many points are open, or that everything is in order for the period. Schemes such as the KOR, the exemption and private use of a car only appear here when they apply to you. While your revenue is still in KOR territory, this tab also shows a hint with a link to the KOR settings. A row at the bottom opens your archive for the year: receipts, invoices and agreements in one place.

## Return tab

### Rubrieken sheet

A table that mirrors the Belastingdienst aangifteformulier:

| Section | Codes |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Each row shows the amount (excl.) and the VAT amount. Rubrieken without transactions in the period fold into one line; **Show all rubrieken** opens them. The bottom bar shows the total to pay or receive. Corrections that fall outside the form appear on their own rows: a generic booking correction is shown as **Correctie**, while a reduction under the old KOR scheme is shown as **Vermindering volgens de oude KOR**. The CSV summary adds a matching corrections line when these are nonzero, so the balance, collected and paid figures add up. The year-overview btw-saldo column uses the same net-VAT total as the rubrieken sheet, so its rows total to the same figure.

Rubriek 4a captures reverse-charge purchases from suppliers outside the EU; rubriek 4b captures reverse-charge purchases from EU suppliers. MyCompanyDesk derives the correct rubriek from the supplier country so the total in 5a stays accurate.

### Filing

A panel next to the sheet shows where the period stands (draft, filed, paid or refund) and links to the Checks, Transactions and Corrections tabs with their counts. Once the period has ended, take the figures over at Mijn Belastingdienst Zakelijk: **Open Mijn Belastingdienst Zakelijk** opens the business portal at `mijn.belastingdienst.nl/mbo-portaal/` without an extra chooser step. Then use **Mark as filed** so MyCompanyDesk records that you filed the return. After filing you can save the betalingskenmerk (payment reference) from your confirmation.

### Exports for your accountant

The **Export** button in the toolbar offers CSV exports: an accountant export, a VAT summary for the selected quarter, and a year overview. Draft and cancelled invoices do not count, so the totals match your return.

The accountant export's ZIP filename includes the company name, the period and the export profile, and the README inside also names the company. This makes it easier for an accountant who downloads exports for several clients to tell the files apart.

### Filed-return drift warning

For Dutch VAT, once a period is marked as filed the Return tab keeps recalculating the return from your live records. If the current calculation no longer matches what you submitted, a warning banner appears above the rubrieken sheet. It compares the filed and current amounts for rubriek 5a, 5b and the net total in 5g, and shows the difference for each row.

The banner tells you what to do next, based on the difference in the net total (5g). Up to and including €1,000 of VAT, you include the difference in your next regular return. Above €1,000 a formal suppletieaangifte is required, and only then does the banner show a **Create suppletie** button ([`sources/nl-vat-corrections.yaml#suppletie.next_return_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). If the rows shifted but the net payable or refundable amount stayed the same, the banner says so and there is nothing to book.

### International cards

When you have international activity, companion cards appear under the sheet:

- **ICP-opgaaf**: EU B2B sales grouped per customer VAT id, not per customer record. Grouping and display both use the normalised number (no spaces or dots), a customer without a VAT number still groups under its own record, and one customer with two VAT ids appears on two lines. Required when you sold goods or services to VAT-registered customers in other EU countries. The card follows the page-wide period selector, so a quarterly export lists only that quarter's EU customers.
- **EU OSS**: per-country B2C sales for the One Stop Shop scheme.
- **Foreign VAT**: foreign VAT charged to you that may be reclaimable through the EU refund procedure. This card only lists suppliers from EU member states; expenses from non-EU suppliers are not shown here. Because a refund request goes to one member state, the card tests the EU minimum claim amount per country: when a country's own reclaimable amount sits below that minimum, a warning appears and names the countries concerned, so you know which claims fall below it. Expenses on rows without a supplier country are tested as one group together.

These cards stay hidden until there is actual international data, so most workspaces never see them.

## Corrections tab

Entries that do not come from invoices or expenses live here, per year, with **Add correction**. Each correction has a kind, a direction, a tax year and period, a VAT amount and an optional note, and the list shows in which return it is processed:

- **Private withdrawal** counts in rubriek 1d.
- **Suppletie** (a correction on an earlier return) is offset against rubriek 5a or 5b (under the KOR it does not affect input VAT, so rubriek 5b stays zero).
- **Adjustment** does not get its own box; it only shifts the payable or refundable total shown by MyCompanyDesk, not a rubriek you copy across.

Enter a positive amount and choose a direction (VAT due or VAT refund). Negative amounts are rejected and the form asks you to pick the direction instead; the direction determines whether the correction increases VAT payable or decreases it.

The tax year accepts years between 2000 and the current calendar year plus one. Years above that range are rejected with an inline message, because a correction saved for a future year would become unreachable. The original year field for a suppletie uses the same range and must be the tax year the original entry belongs to.

A correction is only counted in a return when its period matches your filing frequency. For example, a correction saved as Q1 will not be included in any monthly or yearly return, and a correction saved as M03 will not be included in any quarterly return. The list shows an orange warning and a hint when a correction's period does not appear in any return, so you can edit its period before filing.

When you save or delete a correction, the rubrieken sheet, the hero and the period cards update immediately; there is no need to refresh or switch periods.

For a **Suppletie**, the list also says which route the Belastingdienst requires. The limit is €1,000 of VAT ([`sources/nl-vat-corrections.yaml#suppletie.next_return_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)): €1,000 or less may go into your next regular return, more than €1,000 needs a formal suppletieaangifte. MyCompanyDesk tests this per corrected period and adds up all suppletie corrections on that period, so a line of €600 and one of €700 count as €1,300 together. Did you declare too little VAT? Then file the suppletie within 8 weeks of finding the error ([`sources/nl-vat-corrections.yaml#suppletie.deadline_after_discovery_weeks`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). You can correct up to 5 years after the year the correction relates to ([`sources/nl-vat-corrections.yaml#suppletie.correction_window_years`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)).

### Company car private use

When you deduct VAT on a company car, you must correct for private use at the end of the year. When you book car costs, the Corrections tab shows a suggested **Private use of car** row; **Calculate** opens the correction:

- Choose between a flat-rate correction based on the car's list price, or an actual-use correction based on a complete trip log (**I keep a complete trip log**).
- The flat rate is 2.7% of the list price including VAT and BPM ([`sources/nl-vat-corrections.yaml#private_car_use.standard_pct_of_catalogue_value`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). It drops to 1.5% when the private use takes place later than 4 years after the year you started using the car, or when the car was bought without VAT deduction, for example under the margin scheme or from a private seller ([`sources/nl-vat-corrections.yaml#private_car_use.reduced_applies_when`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). A car first used in 2021 therefore uses 2.7% up to and including 2025 and 1.5% from 2026. For the lower rate, turn on **Car older than 5 years or bought without VAT deduction**.

The suggested row only appears in the last period of the year (Q4, M12 or the annual return), because the correction belongs in the last return of the year ([`sources/nl-vat-corrections.yaml#private_car_use.declared_in`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/nl-vat-corrections.yaml)). The correction is rolled into the period totals on the Return tab.

## Transactions tab

A list of every invoice and expense feeding the selected period, useful for spot-checking records before you file. Search by number or customer, and narrow the list with the chips **All**, **Sales**, **Purchases**, **No receipt**, **No VAT** and **Reverse charge**. Every row shows its rubriek and links to the underlying invoice or expense.

Expense rows that are not fully deductible show a flag such as **VAT not deductible** or **VAT partly deductible**. Hover the flag (or focus it) to see a tooltip explaining how much of the expense VAT counts as input VAT in rubriek 5b. If you use the KOR, the tooltip explains that no input VAT is deducted because rubriek 5b is zero for the whole period; the flag is then about the period, not the individual expense.

## Periods tab

The Periods tab lists every period of the year with its status, filing date, betalingskenmerk and balance: filed, to be filed (the period has ended but its filing deadline has not passed yet), late, temporarily open (a lock is lifted for a fix), locked, running, upcoming, or not applicable for periods that ended before your workspace existed. A period whose deadline has passed without a filed return shows as late even when its bookings are already locked.

- **Automatic locking**: once a period's filing deadline has passed, MyCompanyDesk locks it automatically, so your books keep matching the aangifte you filed.
- **Manual locking**: **Lock** any past period of the selected year yourself, for example right after filing early. Locking a period that is still running triggers an extra warning. Periods that ended before the workspace was created cannot be locked, because MyCompanyDesk holds no data for them and cannot have filed a return on your behalf.
- **Mark as filed**: flag a period as filed once you have submitted the aangifte. If a recorded return exists for a period that is not marked as filed, the list says so. When you open a btw-deadline reminder in the notification panel, the **Mark as filed** action uses the period named in that reminder rather than today's date, so it updates the correct quarter or month. It also resolves only the reminders for that period, not every outstanding VAT reminder in the workspace.
- **Undo filed mark**: if you marked a period as filed by mistake, you can remove that filing record. MyCompanyDesk asks for confirmation first. The period stays locked, the filing task and deadline return, and nothing changes at the tax authority. Your submitted return remains submitted.
- **Unlock temporarily**: need to fix something? Unlock a period temporarily (72 hours) and it relocks by itself, or use **Lock again** when you are done. Removing a lock entirely is only possible while the filing deadline has not yet passed.

Filing status is tracked per exact tijdvak, not by range containment. A filed year return does not mark the four quarters as filed, and a filed quarter does not mark the months inside it as filed. Locking still covers the whole range, so a year lock still protects every quarter.

**Filing timing and corrections.** You can only mark a period as filed after it ends; before that the button explains from which date it is possible. You can mark a period as filed only once. To correct a filed period, add a correction or suppletie in an open period instead.

**Locked periods and bulk actions.** Bulk actions on expenses or invoices are refused when any selected row falls inside a locked VAT period. The error message names the exact period (for example, "1 Apr 2026 to 30 Jun 2026") and explains the real next step. If the period is already filed, the only route is a supplementary VAT return. If it is a bare lock (the filing deadline has passed but no return was filed), the period can be unlocked temporarily from the Periods tab, or you can remove the rows in that period from your selection and retry.

Editing an invoice or expense inside a locked period is blocked at the form: the financial fields turn read-only (notes stay editable) and the form offers a correction path instead, such as creating a correction in the current open period or a credit invoice. The same guard also applies when you confirm a bank-transaction match or mark an expense as paid: if the transaction falls in a locked period, the action is blocked and the app tells you to use a correction in the current open period instead.

Concurrent filing attempts for the same period are serialized. If two submissions race, for example from a double click or two open tabs, the second request is rejected with a clear message instead of failing.

## KOR

The kleineondernemersregeling is managed under **Settings › VAT**: a card tracks your year revenue against the €20,000 threshold ([`sources/vat-rates.yaml#countries.NL.small_business_threshold_eur`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)) with a progress bar, explains what enrolment means for your invoicing, and has the enrolment toggle. You remain eligible up to and including exactly €20,000 of year revenue; only revenue above that ends KOR eligibility. While your revenue is still in the KOR range, the Checks tab shows a hint linking there. With the KOR on, the rest of the VAT settings (filing frequency, default rate, exemption) fold away behind a **Show other VAT settings** button, and the top of the page reads "You take part in the KOR: you charge no VAT."

If you go above €20,000 while still enrolled, a warning banner appears at the top of the invoice editor. The banner title says you are above the KOR threshold, the body names the invoice that crossed it (by number and date) and explains that from that invoice on you charge VAT again, and the button opens **Settings › VAT** so you can deregister with the Belastingdienst. In your VAT return the KOR still applies up to and including that crossing invoice; after it you charge VAT and may deduct input VAT again. The settings card also offers to record a KOR end date (see below).

With no VAT due, **Taxes** stays quiet about filing in the same way as the dashboard: the exemption and the KOR show the reason there instead of a deadline, and there is no check ahead of the return, no quarterly deadline chip and no filing-deadline email. A deadline only appears on a period that actually carries VAT due.

Invoices that went out without VAT after you crossed the threshold need correcting. You do not change an invoice you have sent: the settings card lists them and, for each one, the fix is a credit note followed by a new invoice with VAT. The card offers to walk through them one by one.

The KOR can also be turned on from the invoice form itself. A new or draft invoice that carries VAT while the company has no VAT number and is not enrolled yet shows a KOR tip at the lines. **Turn on KOR** asks for confirmation first, and the switch applies from that day: the invoices and VAT returns from before stay as they are, and open draft invoices, draft quotes and unsigned work orders go to 0% VAT along with it. Did your KOR start earlier? Then change the start date under **Settings › VAT**. The tip also knows when to stay away: it does not appear once you answered no to the KOR in the setup wizard, when the workspace has taken part in the KOR before, or when your services are VAT-exempt, and once 90 days of data exist it follows the pace of the year instead of counting invoices one by one. The tip does not appear on quotes, credit notes or reverse-charge invoices, and it stays away once you dismiss it, once a VAT number is on record or once the KOR is on.

### Start and end of your participation

The settings card records from when up to when you took part: "Took part from" a start date, "up to and including" an end date. When you turn the KOR on from the invoice form, the dialog asks if the start date is really today; if it started earlier, pick that date in Settings.

The setup wizard asks the same, in its own words: saying there that you take part in the KOR asks **Since when do you take part in the KOR?** and fills in 1 January of the current year, changeable. With the start at the top of the year, the KOR also covers the receipts from before your registration day, and its rule holds there: input VAT is not deducted ([`sources/vat-rates.yaml#countries.NL.notes`](https://github.com/silvanrijnberk/mycompanydesk-docs/blob/main/sources/vat-rates.yaml)). Only when the period is already filed and locked does it fall back to today. Did you deregister before and say yes again now? Then the enrolment starts today, not as a silent continuation of the old participation.

Are you stopping with the KOR yourself? Then you deregister with the Belastingdienst and record the last day you took part. Returns up to and including that day stay under the KOR; after it you charge VAT and may deduct input VAT again. The dialog explains the rules around that last day, including that de-registering takes effect from the start of a VAT return period. Did you cross the turnover threshold instead? Then the day before the invoice that did it becomes the end date by itself.

Going over the threshold closes the KOR to you for the rest of that year and the next (sources/vat-rates.yaml#countries.NL.small_business_on_exceed). Until you can take part again, the card shows the date you can register from and keeps asking you to deregister with the Belastingdienst in the meantime; open invoices that went out without VAT are walked back to the correct figures with the credit-note flow above.

While the KOR is on, invoices do not need a VAT number: the check before sending asks for an IBAN and no longer holds the invoice for a missing VAT ID. The setup wizard asks the KOR question with real answers: yes, no, or I don't know. I don't know leads with the rule that only signing up for the scheme with the Belastingdienst yourself puts you in it; low turnover alone is not enough, and the letter from the tax office tells you for sure. Choosing yes switches the scheme on and invoices are made without VAT, carrying a note that you take part in the KOR.

While the KOR covers a filing period, the app keeps quiet about filing it: no agenda-deadline chip, no reminder in your notification panel, no VAT return task, and no filing-deadline email. Did you switch to the KOR mid-period? Then that period still closes as a normal return, with its deadline, task and email, and reminders left over from before the switch clear themselves. The exemption behaves the same way while no VAT is due: Taxes names the reason there instead of a deadline, with no check ahead of the return, no quarterly deadline chip and no filing-deadline email, and only a period that actually carries VAT due gets them back.

### Documents and emails under the KOR

While the KOR toggle is on, document lines count as 0% VAT. Invoice, quote, credit note and contract PDFs print **Subtotal** and **Total** without excl./incl. VAT labels and without a VAT line, invoice emails leave out the excl./incl. VAT summary under the lines, and new catalog items default to 0% VAT. An invoice whose lines are all exempt shows **Exempt** where the VAT line would sit, instead of a bare 0.00. The line editor keeps quiet about it too: a line shows no VAT rate and no "0% VAT" or "excl. VAT" label, in the line sheet, on the mobile line card and in the document detail. The signing page shows **Total** instead of **Total including VAT** when the quote carries no VAT. The same document wording applies while the separate exempt toggle is on, and VAT wording in the terms you publish through your site stays neutral even after the KOR is switched off again.

## KIA and Box 3

KIA (kleinschaligheidsinvesteringsaftrek) and Box 3 are income tax topics. They live in the **Profit return** and **Box 3** tabs under **Taxes**, after the VAT tabs, and need Office. The **Box 3** tab only appears when the Assets module is on and the business is not a BV.

## VAT assistant

The built-in assistant can answer questions about your aangifte using your own workspace numbers, and its replies can jump straight to the matching tab or record.

## Tips

- Set the page period to the tijdvak you are filing; every card and metric updates together.
- Run through the Checks tab before opening the Return tab; a clean checklist usually means the rubrieken sheet matches the Belastingdienst form.
- Use the savings pot as a target for what to set aside; it already includes a 10% buffer.
- The deadline ring follows your filing frequency and goes red at three days. Treat that as a hard cue to file.
- The dashboard VAT tile uses the same filing frequency as the VAT page, so the upcoming deadline and period it shows always match your actual aangifte rhythm.
- Selling B2B in the EU? Open the ICP-opgaaf card before filing; it is a separate submission that is easy to forget.
- Mark a period as filed right after submitting, then let the automatic lock protect it.
- Zeroing an expense amount clears the derived VAT immediately, so a corrected expense cannot leave stale VAT on the aangifte.

## See also

- [How do I file a VAT return?](/en/faq/vat-return)
- [Invoices](/en/features/invoices)
- [Expenses](/en/features/expenses)
- [Company settings](/en/settings/company)
