---
title: Dashboard
description: "The workspace home screen answers how the business is doing and what needs you now, with the deeper figures one click away on Figures."
last_verified: 2026-09-30
---

# Dashboard

The dashboard at `/dashboard` is the home screen of your workspace. It is one page (internally we call it **Mijn bedrijf**, my business) that holds the money, the parts of your business that ask for attention, and everything else you can switch on. Every number comes from your own data, today, without a second step after it.

A second page sits behind it: **Figures** (`/cijfers`), the analysis view with the KPI tiles, the trend chart, ageing and the other deep figures that used to live on the dashboard. The money card links to it, and the sidebar has its own **Figures** entry.

## To do now (Nu doen)

At the top sits **Do now**: one list of what deserves your attention now, and every item carries its own button, so an invoice can be sent and a reminder goes out from the same row. The row shows nothing that is not true; typical items are:

- An invoice that was never sent, or a draft invoice waiting to go out, with the amount involved
- Overdue invoices, with a reminder action
- The VAT return and its deadline
- Quote requests waiting for a quote, and quotes that have gone quiet
- Bank rows that still have to be matched
- An online booking agenda that sits on a site that is not live
- A website that is offline while visitors still come, or changes that are not published yet

When your trial is about to end, that appears here first, above everything else, as the one item with a hard deadline.

One rule keeps this list free of noise: **Te laat** (overdue) only counts when MyCompanyDesk knows your payments. A payment registered in the last six months shows the book is being tracked; a bank connection or online payments alone does not, because a connection nobody ticks off, or online payments that stay switched on while customers transfer, would mark every invoice late. Invoices are only put in this list as overdue when that signal is there.

The same list also lands in your mailbox every Monday: only when there is something to do, only for the workspace owner, and with a ping on your phone when something on it is urgent. You turn the mail on or off under Settings → Meldingen (notifications).

## The money card

Next to **Do now** stands the money card, with the four figures that answer "how are we doing" in one view:

- **Free to spend**: your bank balance minus the VAT reservation and your fixed monthly costs
- **Bank balance**
- **Receivables**, with the overdue slice called out
- **Revenue per month**

The reservation follows the same quarter logic as the VAT card, so monthly filers and early submitters do not lose the wrong amount from view. The balance counts your business accounts; a linked personal account stays out of the figures. A link under the card opens the full **Figures** analysis view.

## A card for every module

Every part of the business that is running, asks for attention, or is only half set up, gets its own card on the page. Every card carries:

- the **status**: Running, Attention, Partly set up (as "2 of 4 done"), Not used yet, or Can't be loaded
- a **one-sentence highlight** from its own data: the next automatic invoice, the VAT estimate, the balance trend, your newest customer, or visitors on your site
- a **reason sentence with its own button** where the card asks for attention

Each card reads its own source: the website card shows visitors and views (the draft while you are still building, the live site after publishing), the customer portal card lists what your customers did with your quotes and invoices in the last 30 days, the reviews card shows your score, the bank card shows the balance trend and anything that still has to be matched, the calendar card shows your first upcoming appointments. So you read the state of your whole business without opening each part separately.

Parts that are running without their own card content do not get an empty card; they appear by name under **All modules** (Alle onderdelen) instead, so the grid only carries cards with something to show.

## Set this up next (Zet dit op)

What you have not started yet comes in under **Set this up next**: up to three next steps to set up, each with a reason from your own data ("8 invoices still open? With a payment button in the mail your customers pay immediately"), a short minutes estimate, and an undo for dismissing one. The steps are read live from your data, not from a fixed checklist: a done step closes itself, and it never disagrees with reality.

The banners that used to stand above the dashboard are gone; every notification now sits where it belongs:

- the trial that is about to end is the first line in **Do now**
- securing your account, setting a payment method, push notifications and the free domain appear as steps in **Set this up next**
- product news and the link to the app form a compact line under the rest

If you had dismissed one of those banners before, it stays dismissed: the conditions and the hide switches are the same.

## All modules (Alle onderdelen)

Under the cards sits the **All modules** list: everything already in use without its own card, and everything not yet in use, as one discoverable list.

- A cross turns a module off, the same switch you find under **Settings → Modules**. A switched-off module also disappears from the sidebar, so the menu and the page keep telling the same story, and it returns from the restore list at the bottom.
- Where a module shares its switch with another one, both are switched and restored together.
- A module your plan does not include stays visible, marked with the plan that unlocks it, so you know it exists.

## First visit

A new workspace receives the same page, because setup now happens there: there is no separate first-run takeover anymore. **Set this up next** puts **First invoice** at the top as long as no invoice has been sent. The old starting checklist, whose tasks closed but never reopened and slowly drifted away from reality, is gone. The app banner stays quiet until your first invoice has been sent, so a fresh workspace is not asked for the app before anything has gone out.

## For accountants

A bookkeeper looking along in someone else's books sees the dashboard the way the customer experiences it: the running parts and what asks for attention there. Setup steps, the module switches and product news are left out, because setting up is the owner's work, not the accountant's.

## Figures: the analysis view

The deep figures of the old dashboard live here, unchanged. The page is a single scrollable view built from the blocks below; a block only renders when your data satisfies the test for it.

## Period switcher

Every figure in the KPI row and the pace calculations follows the selected period. Choose between **month**, **quarter**, and **year**. The trend chart always stays at 12 months so the comparison stays honest.

## KPI row

The KPI row always shows five tiles. Each tile shows one headline figure, a comparison with the previous comparable period where an honest comparison exists, and a small sparkline for trend. Tiles link to the relevant report or list.

| Tile | What it shows |
|---|---|
| **Cash** | Current cash position, either from a connected bank account or an estimated balance, plus runway in weeks |
| **Receivables** | Outstanding invoices, with the overdue slice called out |
| **Revenue** | Revenue for the selected period and the pace for the full period, with change vs the previous comparable period |
| **Payables** | Money you still need to pay out, with the overdue slice called out |
| **Profit** | Net profit for the selected period, with margin when it can be computed |

### Cash tile

The **Cash** tile shows, alongside your balance, what is already committed. Two lines break this down:

- **Reserved for VAT** - the positive quarter balance that should already be set aside
- **Fixed costs per month** - your monthly fixed costs

The final line shows **Free to spend**: what actually remains after those reservations. The VAT reservation uses the same quarter logic as the VAT card so monthly filers and early submitters do not see the wrong amount subtracted.

The balance counts your business accounts: a linked personal account stays out of the cash position and the cash forecast. Its withdrawals that might be business expenses are named separately in the to-process lines instead, so the number you see here matches Boekhouding → Bank and the badge on Transacties.

A tile that has no honest history renders without a sparkline rather than invent a flat line. The colour of a delta badge follows meaning, not just direction: receivables rising is bad news even though the arrow points up.

The KPI row shows cash-movement figures; the **Profit** tile and the trend block use a profit-and-loss view. In the P&L view, expenses are without VAT, investments are spread through their depreciation schedule, and drafts still pending review are excluded. Use the P&L report if you want the same profit figure in a detailed report.

## Voor jou (For you)

The **Voor jou** block is a personal task and signal board on the dashboard. It keeps the most relevant next actions in one place without replacing the full bell panel or the attention widget.

It groups:

- **All tasks** (`Alle taken`) - everything the workspace thinks needs your attention
- **Overdue** (`{n} te laat`) - late invoices, bills, or other items
- **Today** (`{n} vandaag`) - items due today
- **Open** (`{n} open`) - still waiting
- **Mail** (`{n} mail`) - unread conversation threads
- **Appointments** (`geen afspraken | {n} afspraak | {n} afspraken`) - upcoming bookings

Each row shows the type of item (invoice, conversation, appointment, etc.) and a direct link to open it. When there is nothing to do, the block shows **Niets op je bord.** (Nothing on your plate). If loading fails, a retry button lets you try again.

## Attention widget

The attention widget is fed by the Vandaag signal engine. It shows up to four tasks that need action today or this week. Each row shows a severity dot, a short title, and a link to the record. The widget only surfaces tasks; it does not contain the full ranked list, the explanation chips, or the action buttons. The full list lives in the bell panel.

The Vandaag engine ranks signals into four severity levels:

- **critical**: money leaking or a hard deadline closing
- **attention**: a real task, today or this week
- **upcoming**: dated, but not yet urgent
- **good**: earned positive news

The engine is deterministic. No model is involved in producing the signals, so the page stays useful when the AI layer is down.

### Action chips

Some attention rows carry an action chip, for example to send a payment reminder. The first tap on a chip that requires confirmation arms it and shows the text **Are you sure? Tap again**; only the second tap executes the action. If no second tap arrives within five seconds, the chip disarms itself. This stops a stray tap from accidentally emailing a customer.

## Supporting blocks

The blocks below the KPI row appear only when they earn their place. The catalogue decides both whether to show a block and which form to use.

| Block | Content |
|---|---|
| **Trend** | 12-month dual-bar chart of revenue and costs, with the profit line |
| **Ageing** | Receivables aged by bucket |
| **Revenue sources** | Largest customers by year-to-date revenue |
| **Quotes** | Open quote pipeline and expiring quotes |
| **Expense mix** | Cost breakdown by category, shown as bars |
| **Cash chart** | Cash position over 12 months with forecast |
| **Activity** | Recent invoice, payment, and expense events |
| **VAT card** | Current VAT period, checklist progress, and next deadline |

On phones, large visual forms fall back to simpler forms so the numbers remain readable.

## Loading and error states

A skeleton mirrors the final shape of the view, so the page never shifts under your eyes. If the load of **Mijn bedrijf** fails, the page says what is wrong and carries a retry button, instead of an all-clear built from empty data. If the card contents fail while the overall state did load, every card falls back to the one sentence of its state. On the **Figures** page an error carries the same retry, and a period switch that fails while older figures are on screen shows a stale notice with an inline retry. The **Voor jou** block has the same explicit error-and-retry behaviour when its overview cannot be loaded.

## See also

- [Use the dashboard](/en/faq/use-dashboard)
- [Reports](/en/features/reports)
- [Customers](/en/features/customers)
- [Invoices](/en/features/invoices)
- [VAT](/en/features/vat)
