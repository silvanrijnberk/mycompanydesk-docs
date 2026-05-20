---
title: Dashboard
last_verified: 2026-05-20
---

# Dashboard

The dashboard at `/dashboard` is your home base. It presents a fixed briefing layout that surfaces what needs your attention, key financial indicators, and recent activity in a single scrollable view.

## Architecture

The dashboard is a single page (`BriefingDashboard`) composed of editorial blocks. There is no per-user customization. Every user in the workspace sees the same structure, fed from the same live data.

While data loads, the dashboard shows a **skeleton** placeholder (`BriefingSkeleton`): a layout-matched shimmer that mirrors the final shape of each card. Once the core data is settled (metrics cached and liquidity resolved), the skeleton dissolves into a coordinated fade-up entrance. Every top-level block rises with a staggered delay so the whole dashboard appears in one smooth motion. A safety net of 2.5 seconds ensures the skeleton never traps the user on slow connections. The `prefers-reduced-motion: reduce` media query disables all entry animations.

The shell loads:
- A **hero** panel with greeting, AI-lede, and period context
- A **pulse** row of four KPIs: liquidity/runway, revenue (month + YTD), receivables + DSO, and VAT balance + deadline
- A **briefing feed** split into three tabs: **Now** (requires attention), **This Week** (upcoming), and **Good News** (confirmations)
- A **cash chart** spanning a 12-month window with actual + forecast
- A **week card**, **project margins** list, **top clients** list, **activity feed**, and a **VAT ring**
- A **setup banner** that persists until the wizard at `/setup` is completed

## Hero

The top-of-page greets with a time-of-day greeting. The AI-lede is the hero's centerpiece: a short, personal, AI-written briefing that synthesizes the full picture of the business.

The AI briefing speaks in the first person ("ik") and addresses the user informally ("je"). It opens with the single most urgent action for today, then at most one or two supporting points where they add value. It closes with a suggested in-app next step (e.g. "stuur Atelier Norden vandaag een herinnering", "rond je BTW af"). The model draws on a full digest of live signals: liquidity and runway, revenue and profit (MTD + YTD), overdue receivables (count, total, worst customer), bills (due soon + overdue), draft counts, project margins, VAT position (balance, deadline, checklist progress, reserve), unbilled hours, recent payments, and new customers. All amounts are rounded to whole euros.

When the AI briefing is still loading, the hero shows the previous day's cached deterministic lede. The cross-fade to the AI version is a smooth opacity-and-slide transition (`Transition` with `mode="out-in"`). The AI briefing appears with a sparkle icon and the primary text color.

The AI briefing is available in all four supported languages. It is generated once per calendar day per company on Vertex AI `europe-west1` (Gemini 2.5 Flash) and cached for the rest of the day. When the model is unavailable or the workspace is not entitled (Pro only), the deterministic lede is shown alone and no cross-fade occurs.

The hero also carries the period label (month is default).

## Pulse row

The four-cell pulse row replaces the old money tiles and KPI headline. Each cell presents a focused metric with context:

| Cell | What it shows |
|---|---|
| **Liquidity** | Current balance (actual when a bank connection is active, estimated otherwise), plus runway in weeks |
| **Revenue** | Current month revenue with percentage vs previous month, plus year-to-date |
| **Receivables** | Total outstanding, overdue count, and days sales outstanding |
| **VAT** | Balance (refund or pay), deadline date, and tax reserve |

## Briefing feed

The feed is the main attention surface. It assembles real signals from workspace data into a structured list with three tab views:

- **Now.** Items that require action today: overdue invoices, overdue bills, open receipts, draft invoices waiting for send, and VAT checklist items.
- **This week.** Items due in the coming week: invoices due, bills to pay, and VAT deadlines.
- **Good news.** Confirmations: recently paid invoices, revenue growth, and new customers this month.

Each feed item shows the entity, amount, and contextual detail. The feed opens from a tab bar anchored to the top of the list.

## Right rail and bottom row

| Card | Content |
|---|---|
| **Cash (12-month)** | A line chart with actual cash position through today and a forecast forward to month-end. Requires enough history to generate the projection. |
| **Week card** | Hours logged this week. |
| **Project margins** | All projects with revenue, sorted by margin percentage, colour-coded green/amber/red. |
| **Top clients** | Top clients by revenue this year, with percentage of total. |
| **Recent activity** | Invoice created, invoice paid, and expense added events. |
| **VAT ring** | Current VAT return period, checklist completion, and open receipt count. Links to the VAT return. |

## Setup banner

While the setup wizard at `/setup` still has fields to fill, a `FinishSetupBanner` pins itself above the dashboard with the count of pending fields and a **Resume setup** button. It includes a dismiss button (X icon) that hides the banner per browser via localStorage, surviving reloads until the wizard is completed. The wizard is non-blocking: new signups land on `/dashboard` directly and are not force-redirected.
