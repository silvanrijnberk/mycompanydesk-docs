---
title: Time registration
last_verified: 2026-07-27
---

# Time registration

Track hours, travel and project time in MyCompanyDesk. Entries flow straight into project reporting, invoicing and expense claims.

## Logging time

### Timer

1. Open the time registration page.
2. Press **Start** on the timer.
3. Pick a customer, project and task.
4. Stop the timer when you are done.

The recorded block appears in your list and can be edited, invoiced or converted to an expense.

### Manual entries

If you prefer, add a block manually:

1. Click **Nieuwe tijdregel** (new time entry).
2. Enter date, duration, customer, project, task and description.
3. Save.

Manual entries behave the same as timer entries and can be billed later.

### Travel

When you add a time entry for a trip, the travel form asks for the transport mode, origin, destination and distance.

For **car** trips, a **Vehicle** picker appears once your workspace has vehicle objects. You can choose:

- **Private car** (or leave the picker empty) - the trip follows your workspace's normal car-ownership setting and receives the standard kilometre allowance when you convert it to an expense.
- A company vehicle - the trip is linked to that vehicle. A hint explains that the trip does not receive a kilometre allowance, because the vehicle's real costs (fuel, maintenance and depreciation) are already tracked as expenses on the object.

Only car trips show the vehicle picker; public transport, bicycle and other modes do not.

### Default line description

Set a default description in your personal time settings. Every new entry starts with that text, so you type less and keep time descriptions consistent.

### Hours-only mode

Some roles only need to log total hours, not customers or projects. If your workspace uses hours-only mode, the form hides customer, project and task fields. Ask an admin to enable this in the workspace time settings.

## Invoicing your hours

Time entries can be turned into invoice lines:

1. Select one or more entries from the list.
2. Choose **Factureren** (invoice).
3. Pick an invoice or create a new draft.
4. MyCompanyDesk adds a line per entry with the correct quantity and hourly rate.

Only billable entries can be invoiced. Entries marked as non-billable are excluded from the invoice flow.

## Expense claims from time entries

Travel entries can also be converted into expenses:

1. Select a travel entry.
2. Choose **Kostennota** (expense claim).
3. MyCompanyDesk creates an expense based on the distance and the kilometre rate set in the workspace.

The kilometre rate, vehicle ownership and any company vehicle selection are taken from the time entry and workspace defaults, so the claim matches what was actually driven.

## Where to find time registration

- **Menu** > **Tijdregistratie** - main time list
- Project detail page - hours per project
- Customer detail page - hours per customer
- Invoice draft - add lines directly from uninvoiced entries

## Related

- [Projects](/features/projects)
- [Invoices](/features/invoices)
- [Expenses](/features/expenses)
- [Objects & assets](/features/objects)
