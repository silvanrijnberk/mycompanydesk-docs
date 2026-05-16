---
title: Dashboard
last_verified: 2026-05-09
---

# Dashboard

The dashboard at `/dashboard` is your home base. It is a **customisable grid of sections** rendered on top of one of eight role-based templates, with separate desktop and mobile layouts that you can edit independently.

## Architecture

The page is a single shell (`DashboardShell`) over a section registry. Each section is a self-contained component that pulls its own data, has its own period scope, and ships with sensible default sizes for both devices.

- **Desktop.** A 12-column drag-and-drop grid (`DesktopGridEngine`) with row-height locked to 5rem. Sections can be moved, resized within their min-size, and added or removed.
- **Mobile.** A vertical stack (`MobileStackEngine`) where each section is full-width. You reorder by drag and toggle visibility per section in the edit sheet.
- **Persistence.** Layouts are saved per workspace at `/api/dashboard/layout`. The shell waits for the API to confirm your saved layout before rendering, so you do not see the template flash on page load.

::: info
Both layouts are tied to your **dashboard profile** (see below). Switching profiles loads that profile's saved layout — your customisations are kept per profile.
:::

## Profiles

There are eight role-based profiles. The active profile decides which sections the template ships with, but you can customise every profile freely.

| Profile ID | Focus |
|---|---|
| `owner_director` | Cash flow, profitability, high-level overview |
| `bookkeeper_accountant` | VAT, compliance, audit trails, period locks |
| `ar_invoicing` | AR aging, outstanding payments, cash forecast |
| `ap_purchases` | Cash flow, operational queue, expense view |
| `freelancer_simple` | Mixed: cash flow, VAT, urencriterium, profit margin |
| `vat_compliance` | Upcoming VAT, queue, KPI focus on tax |
| `project_job_based` | Project profitability, time tracking |
| `growth_operations` | Period comparison, customer concentration |

Pick your profile from the profile selector in the dashboard. The default profile is set on the workspace in **Workspace > Account > Preferences**; individual users can override it in **Me > Preferences**.

## Sections

The registry ships thirteen sections. Mobile-only and desktop-only flags reflect what fits sensibly at each width.

| Section ID | Lucide icon | Category | Devices | Default desktop size |
|---|---|---|---|---|
| `kpi-headline` | `bar-chart-3` | accounting | both | 12 × 4 |
| `operational-queue` | `bell` | platform | both | 6 × 3 |
| `activity-timeline` | `activity` | activity | both | 6 × 3 |
| `ar-aging` | `clock-3` | accounting | both | 6 × 3 |
| `cash-flow-forecast` | `trending-up` | accounting | desktop only | 8 × 5 |
| `period-comparison` | `git-compare` | accounting | desktop only | 6 × 5 |
| `customer-concentration` | `pie-chart` | accounting | desktop only | 4 × 5 |
| `upcoming-vat` | `receipt` | accounting | desktop only | 4 × 3 |
| `urencriterium-progress` | `clock` | accounting | both | 4 × 4 |
| `profit-margin` | `percent` | accounting | both | 6 × 4 |
| `email-activity` | `mail` | activity | both | 6 × 4 |
| `portal-activity` | `door-open` | activity | both | 6 × 4 |
| `website-activity` | `globe` | activity | both | 6 × 4 |

### KPI headline

Adapts column count to its rendered width: 1 / 2 / 3 / 4 columns for widths < 4 / 4–5 / 6–9 / 10+. Cards include revenue, expenses, profit, VAT balance, outstanding receivables, and the rest of the metrics relevant to the active profile.

### Operational queue (alerts)

The queue is the alerts surface. It groups attention items into tiers and colour-codes them:

- **Tier 1 (red / orange).** Overdue invoices, VAT deadline within the reminder window, cash position negative, overdue bills, VAT review flags, projects over budget, overdue project invoices.
- **Tier 2 (amber).** Invoice number gaps, uncategorised expenses, draft invoices, VAT checklist incomplete, missing supplier fields on expenses, bank-imported expenses waiting for review.

Every alert links to the underlying record list so one click moves you from "I see a number" to "I am fixing it". Stats inside each alert (oldest overdue days, average days, outstanding total) are computed from live workspace data.

The VAT-deadline reminder window is configurable in **Workspace > Compliance > VAT** via `vatDeadlineReminderDays`; the default is country-aware.

### AR aging

Receivables broken into the standard 0–30 / 31–60 / 61–90 / 90+ buckets with totals per bucket. Click a bucket to drill into `/invoices?status=overdue` filtered to that age band.

### Cash-flow forecast

A line chart projecting cash position from current receivables and recurring obligations. Desktop-only because it needs the chart real estate.

### Period comparison

Compares the selected period against the previous one across revenue, expenses, and profit. Each section has its own period override, so you can compare this quarter on one card while looking at this month on another.

### Activity timeline

A feed of recent invoice / quote / expense / customer / payment events in the workspace.

### Sections that need their own integrations

- **Email activity.** Send / open / click / reply counts, gated on the email module.
- **Portal activity.** Customer-portal opens / downloads / payments per invoice.
- **Website activity.** Visits and quote-request submissions on your business page.

## Period selector

Each section that exposes `period.enabled = true` carries its own period control. The default is **month**, with custom date ranges supported. Periods are scoped per section, not per page — use it when you want one chart on quarter and another on year-to-date side by side.

## Edit mode

Click the **pencil icon** in the top-right of the dashboard to enter edit mode.

### Desktop

A toolbar appears with **Cancel** / **Reset** / **Save** / **Add section**. Drag any section by its header to move it, drag the bottom-right grip to resize within the section's min-size. The "Add section" picker shows only sections that are not already on the grid. **Reset** restores the active profile's template; **Cancel** discards unsaved changes.

### Mobile

A bottom sheet opens with a vertical reorder list and per-section visibility toggles. Drag the handle to reorder, tap the eye icon to hide a section. Save commits the new order; Reset restores the profile template.

## Setup banner

While the magical setup wizard at `/setup` still has fields to fill, a `FinishSetupBanner` pins itself above the dashboard with the count of pending fields and a **Resume setup** button. It disappears the moment you complete the wizard or the pending count drops to zero — there is no manual dismiss and no "skip for now". The old onboarding card on the dashboard was removed; this banner replaces it.

## Drill-through

Every entity link in the dashboard takes you to a filtered list view, not a detail page:

| Source | Destination |
|---|---|
| Overdue invoice alert | `/invoices?status=overdue` |
| Draft invoice alert | `/invoices?status=draft` |
| Cash warning | `/reports/cashflow` |
| VAT deadline | `/vat` |
| Uncategorised expenses | `/expenses` |
| AR aging bucket | `/invoices?status=overdue` (age-filtered) |
| Customer concentration slice | `/customers/{id}` |

## Mobile behaviour

The mobile layout collapses every section to full width. Sections with `availableOn: "desktop-only"` are not shown on mobile at all — no sideways scrolling rails, no truncated charts, no inner scroll. Profile defaults pre-hide sections that do not earn their height on a phone (the email / portal / website activity sections default to hidden on mobile and can be enabled in the edit sheet).
