---
title: Schedule
description: "Log hours, plan your days and turn billable time into invoices. Schedule puts time registration, your agenda and calendar suggestions in one place."
last_verified: 2026-10-01
---

# Schedule

Log working hours, plan your days, and turn billable time into invoices. The **Schedule** page in the sidebar combines time registration with an agenda: you see today's plan, planned entries next to logged ones, and suggestions from your connected calendars, all in one place.

## The page at a glance

Switch between four views with the selector at the top (swipe between periods on mobile):

- **Day**: today's plan and logged hours. Depending on your settings you get a timeline or a compact list, with planned entries shown separately from logged ones. Events from connected calendars appear alongside your entries and can be converted into time entries with one tap, and you get suggestions based on your recent activity.
- **Week**: on desktop, a seven-day planner where solid blocks are logged hours and hatched blocks are planned; click an empty slot to add an entry. On mobile, a per-day summary you can tap to drill down.
- **Month**: totals per day; select a day to jump to it.
- **List**: a searchable table of all entries with filters for invoice status, customer, project, and travel, plus totals for the current selection.

Planned entries carry a **Tentative** badge; press **Confirm** once the work actually happened to turn them into logged hours.

If you want, enable **Auto-confirm tentative time** in the schedule settings. When this is on, tentative entries are confirmed automatically once their scheduled date has passed, even if nobody opens the Schedule page.

Totals only count hours that were actually worked. Planned entries for later days stay out of the tracked-hours totals on the dashboard (**Uren dit jaar**, Hours this year), in reports (**Tracked hours**), and on the **Work & time** view until they are confirmed; the side panel states that basis. The hours criterion meter for the income tax return counts by its own basis, shown underneath the meter: only your own confirmed hours plus travel time, so its number can differ from the totals here.

## Logging time

### Timer

On mobile, the day view includes a timer: start it when you begin working and stop it to log the elapsed time as an entry. You can make the timer your default way of working via the work mode setting (see Settings below).

### Manual entries

1. Click **Add Entry** (keyboard shortcut A, or the + button on mobile)
2. The quick-add drawer opens: pick the customer and optionally a project, enter your hours, and adjust the description and rate where needed
3. Enter time as a total number of hours, or switch to a start and end time
4. Save the entry

### Default line description

When adding a time entry, the description field is automatically pre-filled from your default line descriptions. The system checks in order:

1. The project's default line description
2. The customer's default line description
3. The workspace default

Your own input is never overwritten. Once you type a custom description, the pre-filled value will not replace it.

### Hours-only mode

Prefer to log just a total per day? Enable **Hours only mode** in the schedule settings. It hides the timeline and the start and end time inputs, so you enter only the total hours per day. The rate and billable fields stay available.

## Invoicing your hours

The rate shown for each time entry is the **effective hourly rate** for that entry. If the entry has its own hourly rate, that rate is used; otherwise it falls back to the project rate, then to the customer rate, and finally to your workspace default rate. This means the line amount on an invoice always reflects the actual rate stored with the entry.

The entry itself shows which rate that will be. Does the entry have no hourly rate of its own? Then it says **Uurtarief van het project** (project hourly rate), and the totals in the list count that project rate for those entries. Once an entry has been invoiced, it shows the rate that was actually billed: the rate on the invoice line, not what the project charges today. In the edit window, a hint appears when the rate is left empty: the invoice will use the project rate.

### Create an invoice from the Schedule page

When you have uninvoiced entries, click **Create Invoice**. A drawer opens where you pick a customer; it lists all uninvoiced entries for that customer with their total. Confirm, and a draft invoice is created with one line per entry. Billable travel time and travel costs linked to those entries are added as separate lines.

### Pick individual entries on the invoice form

Want to invoice only some entries? Create or edit an invoice directly: the invoice form has a time section that lists the uninvoiced entries for the selected customer, so you choose exactly which ones to include.

### Line descriptions on the invoice

Invoice lines are described automatically: the entry's own description is used first, otherwise the project name, otherwise the period. A per-customer description template (set on the customer page) overrides this format.

### Automatic time invoicing

Automatic invoicing is decided per project. On a project page you choose how its hours are invoiced:

- **Manual** (the default): you create the invoice yourself from the project's hours.
- **On a fixed day** (the default): you pick the rhythm on the project: every week on a weekday, or every month on a day of the month. The hours logged up to and including the previous invoice day go on an invoice for the project's customer, together with the expenses charged to that customer. A month is invoiced on the day you picked, up to the 28th, or on the last day of the month, so short months never skip; the rule lives in `packages/shared/src/logic/billing-schedule.ts#isValidBillingSchedule`.
- **When the project is completed**: once you mark the project as completed, everything still open goes on a final invoice for the customer.

If the project belongs to a contract that invoices on its own, the contract decides and the project page says so; you cannot give that project its own rhythm.

On the customer's page, the **Automatic invoicing** card brings it all together: every project of that customer with its choice, a switch for hours without a project, and your sending preference:

- **Prepare**: the invoice is created for you, you get a notification and you send it yourself.
- **Send automatically**: the invoice is created, you get a notification, and it goes out to the customer by itself one day later. During that day you can still hold it back; held-back invoices stay ready in the app.

Everything that falls due for the same customer on the same day lands on a single invoice, unless a project is set to put it on its own invoice. Hours without a project join the same invoice when the switch on the customer card is on; the card sets their day with the same picker the projects use. The first automatic invoice is best sent yourself, so you have seen once what it looks like; the card tells you the same the first time round.

Anything unusual holds the automatic send back: a customer without an email address, hours without a rate, an amount notably above the previous months, or an invoice that covers a longer stretch because automatic invoicing was paused. Those invoices are only prepared, and the notification tells you why.

Expenses are only included when the expense itself is set to [charge to the customer](/en/features/expenses#rebilling-and-cost-price-changes).

If your plan does not include automatic time invoicing, it stays paused; the notification tells you so. Automatic invoices use your workspace's default VAT rate and respect your KOR or VAT-exemption settings, matching the VAT treatment of invoices you create manually.

## Bulk actions

Select multiple entries in the list view (long-press on mobile) to act on them at once:

- **Mark billable** or **Mark not billable**
- **Archive**
- Delete

## External calendar sync

Connect Google Calendar or Outlook Calendar to bring your agenda and your hours together. Open the schedule settings from **Instellingen** > **Uren & agenda**, or from the settings gear on the Schedule page, and follow the calendar link. You can also go straight to the connected calendars page. There you can:

- Connect **Google Calendar** or **Outlook Calendar**
- Turn syncing on per connection with **Enable sync**
- Choose the **Sync direction**: **Push to calendar** (your logged hours appear in your calendar), **Pull from calendar** (your events appear on the Schedule page, ready to log), or **Both**
- Enable a read-only **Calendar Subscription (iCal)** feed to follow your logged hours from any calendar app

Events pulled from a connected calendar show up in the day and week views; tap one to turn it into a time entry.

## Online appointments and hours

Appointments that customers book through the **Site Bookings** block on your website are automatically placed in your calendar once approved. A confirmed online appointment also counts as worked hours in Schedule, so you do not have to log it separately. These hours are **not billable** through Schedule; the revenue from the appointment is invoiced from the appointment itself. See [Online appointments](/en/features/site-bookings) for setting up your bookable hours.

## Settings

Schedule settings live under **Instellingen** > **Uren & agenda**. Here you configure:

- **Hours only mode**, **Auto-confirm tentative time**, and other entry behavior
- The work mode: **Hours**, **Shifts**, or **Timer**
- The working hours shown on the timeline
- Which quick-add steps appear (project, notes, travel)
- The default hourly rate (team admins)
- Travel defaults such as addresses, vehicle, and mileage rate
- Use your current location as the starting point for a trip when your device allows it
- A link to connect an external calendar

## Tips

- Log time daily for accurate records; the suggestions make re-logging recurring work a one-tap action
- Plan your week ahead with tentative entries and confirm them as you go
- Check uninvoiced time regularly so no billable hours slip through
- Connect your calendar once and your meetings become loggable entries automatically
