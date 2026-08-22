---
title: Dashboard
description: "Your workspace home screen: period switcher, KPI summary, an attention widget and blocks that appear only when your data makes them useful."
last_verified: 2026-08-22
---

# Dashboard

The dashboard at `/dashboard` is the home screen of your workspace. It answers one question: how is the business doing right now? The page shows a period switcher, a KPI summary row, a short attention widget, and a set of data-driven blocks that appear only when your workspace data says they are useful.

## Layout

The page is a single scrollable view built from a fixed catalogue of blocks. The order never changes, but a block only renders if your workspace data satisfies the test for it. A simple business therefore sees a shorter page, not empty placeholders.

At the top sits a period switcher and the KPI row. Below that comes the attention widget, then supporting blocks such as the trend chart, ageing, revenue sources, quote pipeline, expense mix, cash chart, VAT card, and recent activity.

## Period switcher

Every figure in the KPI row and the pace calculations follows the selected period. Choose between **month**, **quarter**, and **year**. The trend chart always stays at 12 months so the comparison stays honest.

## KPI row

The KPI row shows five separate cards. Each card shows one headline figure, a comparison with the previous comparable period where an honest comparison exists, and a small sparkline for trend. The cards share the same border, radius and grid as the blocks below them, so the row reads as part of the dashboard instead of a separate table strip. Every card links to the matching report or list.

| Card | What it shows |
|---|---|
| **Cash** | Current cash position, either from a connected bank account or an estimated balance, plus runway in weeks |
| **Receivables** | Outstanding invoices, with the overdue slice called out |
| **Revenue** | Revenue for the selected period and the pace for the full period, with change vs the previous comparable period |
| **Payables** | Money you still need to pay out, with the overdue slice called out |
| **Profit** | Net profit for the selected period, with margin when it can be computed |

The cash card keeps a soft brand tint so the eye starts there, but it is the same width as the others. When the cash figure comes from a connected bank account, the card also shows the time of the last sync.

A card with no honest history renders without a sparkline rather than invent a flat line. The trend line lives inside its own card under a soft fill, and the line colour follows the card's meaning: a loss draws in the error colour even though the slot is profit, and a real bank balance draws its trajectory instead of an empty band. The delta badge sits on the label row rather than beside the figure, so a percentage change does not read as part of the number it stands next to. Badge colour follows meaning, not just direction: receivables rising is bad news even though the arrow points up.

## Attention widget

The attention widget is fed by the Vandaag signal engine. It shows up to four tasks that need action today or this week. Each row shows a severity dot, a short title, and a link to the record. The widget only surfaces tasks; it does not contain the full ranked list, the explanation chips, or the action buttons. The full list lives in the bell panel.

The Vandaag engine ranks signals into four severity levels:

- **critical**: money leaking or a hard deadline closing
- **attention**: a real task, today or this week
- **upcoming**: dated, but not yet urgent
- **good**: earned positive news

The engine is deterministic. No model is involved in producing the signals, so the page stays useful when the AI layer is down.

## Supporting blocks

The blocks below the KPI row appear only when they earn their place. The catalogue decides both whether to show a block and which form to use.

| Block | Content |
|---|---|
| **Trend** | 12-month dual-bar chart of revenue and costs, with the profit line |
| **Ageing** | Receivables aged by bucket |
| **Revenue sources** | Largest customers by year-to-date revenue |
| **Quotes** | Open quote pipeline and expiring quotes |
| **Expense mix** | Cost breakdown by category, shown as bars or treemap depending on space |
| **Cash chart** | Cash position over 12 months with forecast |
| **Activity** | Recent invoice, payment, and expense events |
| **VAT card** | Current VAT period, checklist progress, and next deadline |

On phones, large visual forms such as treemaps or funnels fall back to simpler forms so the numbers remain readable.

## First-run state

A brand-new workspace with no invoices or customers lands on a calm first-run screen instead of the full dashboard. It offers one focal action: create your first invoice. A small discovery panel also invites you to personalise invoice styling, the website, or account security. Dismissing the panel hides only the panel; sending your first invoice exits first-run mode. You can also skip the first-run screen with the **Show my dashboard** option.

## Getting started card

While the setup checklist still has open steps, a pinned card appears above the dashboard. It lists the remaining steps and a link back to the setup wizard. Dismissing the card is stored server-side, so it stays hidden across devices. The wizard is non-blocking: new signups land on `/dashboard` directly.

## Loading and error states

While the dashboard decides whether this is a first-run workspace and loads the briefing, a skeleton mirrors the final shape of the page. If the Vandaag fetch fails, the page shows an explicit error with a retry button instead of an all-clear built from empty data. If a period switch fails while older numbers are still on screen, a stale notice appears with an inline retry.

## See also

- [Use the dashboard](/en/faq/use-dashboard)
- [Reports](/en/features/reports)
- [Customers](/en/features/customers)
- [Invoices](/en/features/invoices)
- [VAT](/en/features/vat)
