---
last_verified: 2026-05-09
---

# VAT

Track collected and paid VAT, prepare your aangifte, and stay ahead of deadlines. The Netherlands page is documented in detail below — other countries use the same five-tab layout with country-specific cards.

## Page layout

The VAT page is split into a hero and five tabs: **Overzicht**, **Aangifte**, **Transacties**, **Planner** and **Regels**. Both the active tab and the active period are reflected in the URL (`?tab=&period=`), so refresh and the back button preserve your place.

A page-wide period selector (Q1, Q2, Q3, Q4, full year) sits next to the tab bar. Switching it propagates to every card on every tab.

## Hero card

The hero summarises your year-to-date position:

- **Balance** — Net VAT (collected minus paid) with a "te betalen" or "terug te ontvangen" label.
- **Deadline ring** — A circular progress ring counting down to the next filing deadline. Red when 3 days or fewer remain, amber up to 14 days, green otherwise.
- **BTW-spaarpotje** — A suggested reserve next to the balance. The amount is the period balance times 1.10, so you have a small buffer on top of what you owe. When the balance is negative (refund expected) the tile flips to a green refund tile showing the amount due back.

Two CTAs sit under the balance:

- **Naar aangifte** jumps to the Aangifte tab.
- **Hoe wordt dit berekend?** opens a drawer that walks through the math (collected from rubriek 5a, minus paid in rubriek 5b, equals the balance).

## Overzicht tab

### Pre-filing checks

A checklist that runs against the active period. Every check has a "Fix now" deep link that takes you straight to the affected records:

- **Drafts** — Invoices in draft status that won't be counted in the aangifte.
- **Missing VAT** — Expenses without a VAT amount.
- **Missing receipts** — Expenses without an attached receipt.
- **ICP pending** — EU B2B sales that need to be reported separately on the ICP-opgaaf.

A badge in the header shows the number of blockers, or "all clear" when everything passes.

### Quarter strip

Four cards (Q1, Q2, Q3, Q4) summarising revenue, VAT collected, VAT paid and the balance for each quarter. Each card has a state derived from `period_locks`:

- **Filed** — Period is locked. No further edits allowed without unlocking.
- **Active** — The current quarter, still accepting new transactions.
- **Upcoming** — Future quarter.

Click a quarter card to switch the page-wide period selector to that quarter.

### Summary metrics and quarterly table

Below the strip you'll see the year totals (revenue, expenses, profit, VAT collected, VAT paid, taxable profit, corporate tax estimate, net profit, recommended reserve) and a quarterly breakdown table.

## Aangifte tab

### Rubrieken sheet

A unified table that mirrors the Belastingdienst aangifteformulier exactly:

| Section | Codes |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Berekening totaal | 5a, 5b, 5c, 5d, 5g |

Each row shows the omzet (excl.) and the BTW amount. The bottom bar highlights rubriek 5g (totaal te betalen of terug te ontvangen).

### Right rail

The Aangifte tab also surfaces drill-down cards as a companion column:

- **ICP-opgaaf** — EU B2B sales grouped per customer. Required when you sold goods or services to VAT-registered customers in other EU countries.
- **OSS-breakdown** — Per-country B2C sales for the One Stop Shop scheme.
- **Foreign-VAT refundables** — Foreign VAT charged to you that's reclaimable through the EU refund procedure. The deadline for the previous year is **30 September**.
- **Corrections** — Privé-onttrekking, suppletie and other adjustments rolled into the period totals.

## Transacties tab

A flat list of every invoice and expense feeding the active period. Useful for spot-checking individual records before filing. Filter by type, customer/supplier, VAT treatment, or rubriek.

## Planner tab

A compliance timeline showing every NL deadline (BTW per quarter, ICP, KOR review, KIA, IB) for the selected year. Each item links to the underlying record or settings page.

## Regels tab

### KOR (kleineondernemersregeling)

A toggle plus a YTD revenue tracker against the €20,000 threshold. The card shows:

- YTD revenue versus the limit.
- A progress bar with a colour that escalates as you approach the threshold.
- A status hint explaining what enrolment means for your invoicing.
- An enrolment toggle (calls the `kor-settings` endpoint).

### KIA (kleinschaligheidsinvesteringsaftrek)

Tracks investment-flagged expenses against the five-bracket NL deduction table for the year. The card surfaces your deduction amount and the bracket you fall into.

### Country insights

Country-specific guidance and rate references (NL by default; other countries surface their own variants).

## VAT assistant

A floating assistant card sits above the page (visible on every tab). It answers questions about your aangifte using your own workspace numbers, via the contextual-guide tool catalog. Tools like `vat_aangifte_rubrieken` and `vat_kor_status` let it cite the same numbers you see on screen, and "Open …" actions in its replies jump to the matching tab.

## Period locking

Period locks still exist — they're just not the headline of the page anymore. Filed quarters appear with a lock badge in the quarter strip. Editing a record inside a locked period is blocked at the form level; the form offers a one-click "Create correction" path that produces a suppletie or privé-onttrekking entry in the current period.

## Other countries

The same five-tab structure renders for Belgium, France, Germany, the UK, the US, Canada, the EU shell and a generic profile. Country-specific cards (rates, schemas, deduction tables) take the place of the NL-only KOR, KIA, ICP and OSS cards.

## Tips

- Set the page period to the quarter you're filing — every card and metric updates together.
- Run through the pre-filing checks before clicking "Naar aangifte"; a clean check list usually means the rubrieken sheet matches the Belastingdienst form.
- Use the spaarpotje as a target for what to set aside — it already includes a 10% buffer.
- The deadline ring goes red at three days. Treat that as a hard cue to file.
- For EU B2B sellers, open the ICP-opgaaf card before filing — it's a separate submission that's easy to forget.
