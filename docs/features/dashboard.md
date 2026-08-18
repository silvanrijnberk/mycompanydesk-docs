---
title: Dashboard
last_verified: 2026-08-18
---

# Dashboard

The dashboard at `/dashboard` is the home screen of your workspace. It shows how the business is doing right now: a short summary row, a ranked list of signals that need attention, and a set of data-driven blocks that appear only when they have something useful to say.

## Layout

The page is a single scrollable view built from a fixed set of blocks. The order never changes, but a block is only rendered if your workspace data satisfies the test for it. A simple business therefore sees a shorter page, not empty placeholders.

At the top sits a short **lede** followed by a period switcher and the KPI row. Below that come the ranked **Vandaag** signals, then supporting blocks such as the trend chart, ageing, revenue sources, quote pipeline, expense mix, cash chart, VAT card, and recent activity.

## Period switcher

Every figure in the summary row and the pace calculations follows the selected period. Choose between **month**, **quarter**, and **year**. The trend chart always stays at 12 months so the comparison stays honest.

## Lede

The lede is a one-paragraph summary of the current business picture. It is generated from the same live data as the rest of the page and is keyed to the underlying signals, so names, amounts, and routes cannot drift.

By default the lede is deterministic. On Pro workspaces it can be rephrased by an AI layer, but the model only reformulates the facts the deterministic engine already produced. If the model is unavailable, the deterministic lede remains.

## KPI row

The KPI row contains up to five tiles. Each tile shows one headline figure, a comparison with the previous comparable period, and a small sparkline for trend. Tiles link to the relevant report or list.

| Tile | What it shows |
|---|---|
| **Revenue** | Revenue for the selected period, with change vs the previous period |
| **Costs** | Costs for the selected period, with change vs the previous period |
| **Profit** | Net profit for the selected period, with change vs the previous period |
| **Receivables** | Outstanding invoices and days sales outstanding |
| **Liquidity / runway** | Current cash position and estimated runway |

A tile that has no honest history renders without a sparkline rather than inventing a flat line. Receivables rising, for example, is shown as an upward arrow marked in warning colour because the direction and the meaning are kept separate.

## Vandaag signals

The Vandaag engine is the decision layer behind the dashboard. It ranks what needs attention today into four severity levels:

- **critical**: money leaking or a hard deadline closing
- **attention**: a real task, today or this week
- **upcoming**: dated, not yet urgent
- **good**: earned positive news

Each signal is a single card with a finding, a one-line explanation of why it matters, evidence chips, and an action. Actions can be:

- a link to the relevant page
- enabling auto-reminders
- sending a reminder for a specific invoice
- dismissing the signal

Signals can be snoozed. A snooze removes the card immediately; if the server call fails, the card comes back and the workspace is told why. After any action succeeds, the list reloads so the ranking stays correct.

The engine is deterministic. No model is involved in producing the signals, so the page is fully useful when the AI layer is down.

## Supporting blocks

The blocks below the KPI row appear only when they earn their place. The catalogue decides both whether to show a block and which form to use.

| Block | Content |
|---|---|
| **Trend** | 12-month dual-bar chart of revenue and costs, with profit line |
| **Attention** | Top open items requiring action, surfaced from the signal engine |
| **Ageing** | Receivables aged by bucket |
| **Revenue sources** | Largest customers by year-to-date revenue |
| **Quotes** | Open quote pipeline and expiring quotes |
| **Expense mix** | Cost breakdown by category, shown as bars or treemap depending on space |
| **Cash chart** | 12-month cash position with forecast |
| **Activity** | Recent invoice, payment, and expense events |
| **VAT card** | Current VAT period, checklist progress, and next deadline |

On phones, large visual forms such as treemaps or funnels fall back to simpler forms so the numbers remain readable.

## Welcome screen

On a brand-new account with no invoices or customers, the dashboard shows a welcome screen instead of the full overview. It points to three first actions: create an invoice, add a customer, or log an expense. Once at least one invoice or customer exists, the welcome screen disappears and the full dashboard takes its place.

## Loading and error states

While data loads, a skeleton placeholder mirrors the final shape of each block. A hidden timeout of 2.5 seconds guarantees the skeleton never traps a user on a slow connection. The `prefers-reduced-motion: reduce` media query disables all entry animations.

If the Vandaag fetch fails, the page shows an explicit error with a retry button instead of an all-clear built from empty data. If a period switch fails while older numbers are still on screen, a stale notice appears with an inline retry.

## Setup banner

While the setup wizard at `/setup` still has fields to fill, a banner pins itself above the dashboard with the count of pending fields and a **Resume setup** button. It can be dismissed per browser via localStorage and stays hidden until the wizard is completed. The wizard is non-blocking: new signups land on `/dashboard` directly.

## See also

- [Use the dashboard](/faq/use-dashboard)
- [Reports](/features/reports)
- [Customers](/features/customers)
- [Invoices](/features/invoices)
- [VAT](/features/vat)
