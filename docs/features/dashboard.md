---
title: Dashboard
last_verified: 2026-07-02
---

# Dashboard

The dashboard is your home base. It presents a briefing that surfaces what needs your attention, key financial indicators, and recent activity in a single scrollable view.

## Layout

The dashboard has a fixed briefing layout: there are no settings to rearrange or hide individual cards, and every user in the workspace sees the same structure, fed from the same live data. The content does adapt to your situation: a brand-new account sees a welcome screen, the project margins card only appears when the projects feature is enabled for your workspace, and reminder banners can be dismissed per browser.

### Welcome screen

On a brand-new account with no invoices or customers, the dashboard shows a welcome screen instead of the full briefing. It guides you to three core first actions: create an invoice, add a customer, or log an expense. A link to the [Getting Started](/getting-started/introduction) docs sits below the action cards. Once at least one invoice or customer exists, the welcome screen disappears permanently and the full dashboard takes its place.

### First load

While data loads, the dashboard shows a placeholder that mirrors the final shape of each card, so nothing jumps around. Once the data is in, the dashboard fades into view.

The dashboard consists of:

- A **hero** panel with a greeting, the AI briefing, and period context
- A **pulse** row of four KPIs: liquidity/runway, revenue (month + YTD), receivables + DSO, and VAT balance + deadline
- A **briefing feed** with four tabs: **All**, **Now** (requires attention), **This week** (upcoming), and **Good news** (confirmations)
- A **cash chart** spanning a 12-month window with actual + forecast
- A **week card**, **project margins** list, **top clients** list, **activity feed**, and a **VAT ring**
- A **setup banner** that persists until the setup wizard is completed

## Hero

The top of the page greets you with a time-of-day greeting. The AI briefing is the hero's centerpiece: a short, personal, AI-written briefing that synthesizes the full picture of your business.

The AI briefing speaks in the first person and addresses you directly. It opens with the single most urgent action for today, then at most one or two supporting points where they add value. It closes with a suggested in-app next step (for example, sending a specific customer a reminder, or finishing your VAT return). It draws on a full digest of live signals: liquidity and runway, revenue and profit (month + YTD), overdue receivables (count, total, worst customer), bills (due soon + overdue), draft counts, project margins, VAT position (balance, deadline, checklist progress, reserve), unbilled hours, recent payments, and new customers. All amounts are rounded to whole euros.

While the AI briefing is still loading, the hero shows the previous day's cached standard summary, then smoothly transitions to the AI version. The AI briefing appears with a sparkle icon.

The AI briefing is available on every plan and in all four supported languages. It is generated once per calendar day per company and cached for the rest of the day. If the briefing cannot be generated, the standard summary is shown instead.

The hero also carries the period label (month is the default).

## Pulse row

The four-cell pulse row presents focused metrics with context:

| Cell | What it shows |
|---|---|
| **Liquidity** | Current balance (actual when a bank connection is active, estimated otherwise), plus runway in weeks |
| **Revenue** | Current month revenue with percentage vs previous month, plus year-to-date |
| **Receivables** | Total outstanding, overdue count, and days sales outstanding |
| **VAT** | Balance (refund or pay), deadline date, and tax reserve |

## Briefing feed

The feed is the main attention surface. It assembles real signals from workspace data into a structured list with four tab views, starting with **All** (everything combined):

- **Now.** Items that require action today: overdue invoices, overdue bills, open receipts, draft invoices waiting for send, and VAT checklist items.
- **This week.** Items due in the coming week: invoices due, bills to pay, and VAT deadlines.
- **Good news.** Confirmations: recently paid invoices, revenue growth, and new customers this month.

Each feed item shows the entity, amount, and contextual detail. The feed opens from a tab bar anchored to the top of the list.

## Right rail and bottom row

| Card | Content |
|---|---|
| **Cash (12-month)** | A line chart with actual cash position through today and a forecast forward to month-end. Requires enough history to generate the projection. |
| **Week card** | Hours logged this week. |
| **Project margins** | All projects with revenue, sorted by margin percentage, colour-coded green/amber/red. Shown when the projects feature is enabled. |
| **Top clients** | Top clients by revenue this year, with percentage of total. |
| **Recent activity** | Invoice created, invoice paid, and expense added events. |
| **VAT ring** | Current VAT return period, checklist completion, and open receipt count. Links to the VAT return. |

## Setup banner

While the setup wizard still has fields to fill, a banner pins itself above the dashboard with the count of pending fields and a **Resume setup** button. It includes a dismiss button that hides the banner in your browser until the wizard is completed, even across reloads. The wizard is non-blocking: new signups land on the dashboard directly and are not forced through it.
