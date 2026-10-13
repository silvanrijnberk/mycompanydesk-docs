---
title: Workspaces
description: "One central page for every workspace you manage, your own businesses and client administrations, without ever mixing your own money with client money."
last_verified: 2026-10-13
---

# Workspaces

The Workspaces page at `/werkruimtes` is one central place for everything you manage. It replaces the older boekhouder desk and adapts to your actual role: one workspace, several of your own businesses, or client administrations.

> **Your own money and client money are never mixed.** A combined view over your own companies makes sense because the money is yours. A total over client administrations would be meaningless, so the page keeps those strictly separate.

## Where to find it

- Open the workspace switcher in the left sidebar and choose **Manage workspaces**.
- The same switcher lives in the mobile menu header, so you reach the workspaces overview from one place on every screen size.
- The old `/boekhouder` URL redirects here.
- The workspace switcher now shows an overview row at the top. Your own businesses and any client administrations are grouped separately, and a search field appears once you hold more than eight workspaces.
- Each row shows the workspace's own mark: its logo, or a coloured initials tile. Your own businesses carry their colour; client administrations stay neutral. The workspace you are currently in is highlighted.

Clicking a workspace in the switcher now swaps you in without a full page reload. The app clears the previous workspace's state from Pinia stores and module caches, throws away any in-flight requests that would arrive after the switch, reloads the shell so the navigation rail and permissions update, and then routes you to the target page.

## The workspace frame

Once you are in Workspaces, a dedicated sidebar replaces the regular navigation. It groups the pages like this:

- **Overview**: **Today** (`/werkruimtes`), **Agenda** (`/werkruimtes/agenda`) and **Work** (`/werkruimtes/werk`). These three are always there.
- **Yours**: **Businesses** (`/werkruimtes/bedrijven`), the overview of your own businesses. Always there as well.
- **Customer work**: **Customers** (`/werkruimtes/klanten`), **Requests** (`/werkruimtes/verzoeken`) and **Insight** (`/werkruimtes/inzicht`). Appears as soon as you have access to a client administration.
- **Firm**: **Your firm** (`/werkruimtes/kantoor`), **Billing** and **Export**. Appears when you belong to an accounting firm.

**Today** shows what needs attention now, in two separate blocks: your own businesses first, then your clients (at most eight; anything beyond that is mentioned, not silently left out).

### Ownership indicator

Each workspace row and each item in the new frame pages carries a small ownership indicator. Your own businesses keep their workspace colour; client administrations stay neutral. You will see it in the workspace switcher, in the agenda, and in the work list, so you always know which side of the own/client boundary a row belongs to.

### Agenda (`/werkruimtes/agenda`)

The agenda groups every upcoming deadline across all your workspaces by date. It looks 30 days back and 90 days forward, so an overdue deadline from last week is still visible. Overdue deadlines appear first. Each row shows the workspace name, the deadline label, and an ownership indicator. Click a row to switch into that workspace and open the relevant page.

### Work (`/werkruimtes/werk`)

The work page lists open work in two blocks: your own businesses first, then client administrations. This keeps the two kinds of work apart, because your own to-dos and things you are waiting for from a client need different actions. Each row shows the workspace, the task label, and a due badge. Clicking a row switches to the workspace and opens the relevant page; for a client request, the request itself opens.

### Firm pages (`/werkruimtes/kantoor/*`)

If you belong to an accounting firm, the Firm group holds three pages:

- **Your firm** (`/werkruimtes/kantoor`) - firm members, pending client invitations, partner share link and referral stats, and whether Office has been granted for free.
- **Billing** (`/werkruimtes/kantoor/facturatie`) - offer to take over a client administration's subscription. The client must accept before anything is charged, the price per administration is shown before you confirm, and a pending offer is shown separately so you can withdraw it until the client responds.
- **Export** (`/werkruimtes/kantoor/export`) - export several client administrations at once. Choose the year, period, and export format, select the administrations, and the app downloads one archive per client. Any failed export stays on screen so you can see what did not complete.

## Loading states and errors

When you open a Workspaces frame page, the app first waits for the shell data (workspace list, token, permissions) to be ready, then fetches the page data. This prevents a cold navigation from showing an empty "nothing to do" state while the request is still in flight.

If the data call fails, the page shows an explicit error state with a **Retry** button instead of pretending there is nothing to show. The workspace switcher in the rail is still usable, so you can move to another workspace without waiting for the failing page to recover. On the billing page, the client list and the billing totals load separately: if the totals fail, the client list remains available and the price column is simply empty, rather than showing a false zero.

## If you have one workspace

On **Businesses** you then get three entry points instead of an empty list:

- **More than one company?** with **Add company**, for a holding, a second company, or a side business. Each new business gets its own administration with separate VAT, invoices, and books.
- **Working with an accountant?** with **Invite accountant**, if you work with an external accountant.
- **Are you an accountant yourself?** with a link to the partner program, if you want to manage multiple client administrations from one place.

## Combined workspace: your own businesses

If you own more than one business, **Businesses** (`/werkruimtes/bedrijven`) shows a combined overview:

- A single sentence states what your businesses turned over this year, and whether that resulted in a profit or loss.
- A strip shows combined revenue, profit, outstanding receivables, and VAT set aside.
- A share bar shows the revenue split across businesses.
- Below the figures is one row per business. Rows stay in a fixed order (your home business first, then by creation date) so you always know where to look.

**View together** opens **Together** (`/werkruimtes/bedrijven/samen`): a table with your businesses side by side for a year you pick, with a totals row underneath.

### Signals inside each row

Each business row shows chips for the things that need attention right now. Every chip is a deep link: it switches you into that workspace and lands on the page that matches the signal.

| Chip | Meaning | Deep link |
|---|---|---|
| VAT period with a deadline | How many days until the VAT return is due, or how many days late it is | `/belastingen/btw` |
| Overdue invoices | Invoices that have not been paid on time | `/invoices` |
| Missing receipts | Expense items without a receipt | `/expenses` |
| Drafts | Invoices still in draft | `/invoices` |
| VAT filed | The previous return was filed | `/belastingen/btw` |
| Trial period days left | The business is still on an Office trial | None, just a note |
| Deactivated | The business is set to inactive; you can still view and export | None, just a note |

Your own businesses use the same KPIs as the dashboard of each individual workspace, so the numbers cannot disagree.

## Intercompany positions (Onderling)

If your own businesses invoice each other, each workspace normally only sees its own half. The Businesses page shows the net position between every pair of your own businesses, so the rekening-courant you used to keep on paper is visible in the app.

The block appears only when at least two of your own businesses actually have open invoices to each other, so it stays out of the way for everyone else. It sits below the combined overview of your businesses, because it is a relationship between your businesses rather than a property of any single one.

- Links are created automatically when a customer's VAT number matches one of your other workspaces. That match only ever looks at your own businesses, so a customer of someone else is never reached.
- If the automatic match is wrong, or if no VAT number is available, you can link or unlink a customer by hand from the customer page. A manual link always wins over the automatic one.
- The position is the net balance across open invoices between the two businesses, net of posted payments. A positive number means one business owes the other.
- Each pair is phrased as a sentence from the side that is owed, for example "[creditor] has [amount] to receive from [debtor]". If the balance runs the other way, the sentence flips creditor and debtor instead of showing a negative number.
- The line also shows how many open invoices make up the balance.
- When more than one pair has a balance, the card shows a combined total of all open intercompany positions at the top.

## Kantoor workspace: client administrations

If you are an accountant managing client administrations, **Today** shows which clients need something now, and **Customers** (`/werkruimtes/klanten`) is the full list to work through, with filters such as what is late, who is waiting on you and what is assigned to you:

- A headline tells you how many of your clients need attention today.
- A figures strip shows total clients, deadlines this week, clients that need attention, and open invitations.
- Rows are sorted by urgency so the administrations that need action today appear first.
- A search field is always visible, so you can filter client administrations without waiting for a threshold.
- Open client invitations are shown in their own card; an invited contact is not counted as an active client.

The row chips and deep links work the same as in the combined workspace, but rows use aggregated signal queries so the desk scales to large client lists. The page does not add up client money.

### Accountant firm members

If you work in an accounting firm, the firm has its own member list under **Team members** on **Your firm**. Admins invite colleagues with **Invite colleague**; each member gets a role (member or admin). Adding someone to the firm does not give them access to any client; you grant that per client, and only when that client allows it. The row of each colleague shows how many clients they have been assigned to, so you can see who is working on what.

### Client work and requests

Each client row shows a work chip when something is waiting. Open it to see who is handling the client right now and what you have asked the client for.

- **Take it** assigns the client to you. **Release it** hands the work back so a colleague can pick it up. The status updates live for everyone in the firm, so two people do not start the same tax return unknowingly.
- **Ask this customer something** creates a task in the client's own workspace, with a notification. Choose what it is about (for example missing receipts), say what you are asking and add a note, and the client sees it as a regular to-do. As soon as the client ticks the task off, the request is resolved and the work chip disappears. There is no manual 'waiting on client' status to reset; it simply follows from an open request. All open questions across your clients are listed together on **Requests**, oldest first.

## Adding your own business

Open **Bedrijf toevoegen** and give the new business a name.

Several businesses of your own are part of **Office**: an extra business costs €5.99 per month or €59.90 per year (excl. VAT) on top of Office, up to 10 businesses of your own. On Desk you have one business. The app shows the extra cost before you confirm. During your own Office trial you pay nothing for the extra business; after the trial it is added to your subscription at the price shown.

If you hold Office for free under a fixed arrangement, that free Office covers one business. For a second business the app offers a separate checkout. The price is shown before you start; only the second business is billed on its own subscription. After the payment is confirmed, you can name the second business.

## Copy settings from another business

When you add a business, or later from the **Manage** drawer of an existing one, you can copy the setup from another business you already have. This saves you from re-entering your branding, invoice layout and defaults.

Turn on **Copy settings from a business you already have** and pick the source. If you only have one other business, the choice is shown as a switch with its name. The following groups can be copied:

- **Branding** (logo, colours and fonts).
- **Invoices and quotes** (layout, payment term, reminders and your own email texts).
- **VAT** (return period and default rate).
- **Expenses and receipts** (default category, mileage allowance and your own categories).
- **Modules** (which modules are turned on, plus your time-registration setup).
- **Address and contact** (address, phone, email and website).

Your chamber of commerce number, VAT number, bank account and invoice numbering are never copied: those belong to one business only.

## Manage or remove a business

For each of your own businesses, open the row menu and choose **Manage**. A drawer opens with two options.

### Set a business to inactive

Choose **Set inactive** when you stop working in a business but still need to keep its records. The administration stays readable and you can still export everything, because you are required to keep the books for the statutory retention period. You cannot add new invoices, expenses or customers, and the business no longer counts toward your subscription.

The drawer states how much less you will pay per month or year before you confirm.

To resume, open the same drawer and choose **Reactivate**.

### Delete a business

Choose **Delete** only for a business you created by mistake. The workspace checks whether anything has been booked; as soon as an invoice, expense or customer exists, deletion is refused and you must set the business to inactive instead. This guard is server-side, so the refusal wording always matches the actual data.

## Inviting a client

Accountants can invite a client directly from the page:

1. Click **Klant uitnodigen**.
2. Fill in the client's email address, company name, and optional chamber of commerce number.
3. Click **Uitnodiging versturen**.

The client creates their own account and remains the owner of their administration. You get access as soon as the invitation is accepted, and the client can revoke it at any time. Pending invitations can be resented or revoked. The invite link is valid for 30 days.

## Navigation follows your role

The left rail now hides items your current workspace role is not allowed to use, so you no longer see links that would return a 403. When a part of the app is restricted for a role, its menu item disappears automatically.

In a client workspace the rail is shorter because parts that belong to the client (inbox, website, subscription, team settings, domains, and AI assistants) are denied to an accountant. The workspace switcher and the Workspaces item remain visible so you can always move between administrations.

## Permissions

- Workspace owners and team admins can add businesses and manage workspace settings.
- Accountants see only the workspaces and pages their client granted.
- Team members see the Workspaces entry when they hold more than one workspace and their role allows it.

## Insights for accountants (Inzicht)

The Insight page, `/werkruimtes/inzicht`, compares client administrations and shows workload per period. It sits in the Customer work group, which appears as soon as you manage client administrations.

The page is deliberately about counts and dates, not amounts:

- It does not add up client money, because client money is not yours.
- It does not show a total "portfolio value" or revenue across clients.

### Client comparison

The first table lists your clients side by side:

| Column | Meaning |
|---|---|
| Client | The client administration name. |
| VAT | Whether the current VAT period is filed, how many days until it is due, or how many days late it is. |
| Closed by you | How many of the client's recent filing periods were closed in this office. |
| To collect | Number of overdue invoices. |
| Receipts | Number of missing receipts. |
| Paid | Number of paid invoices in the selected year. |
| Payment term | Average days late on paid invoices, if any. |

Rows are sorted by urgency: clients that need action today appear first. The VAT badge uses the same severity logic as the workspace dashboard.

### Workload per period

The second table shows workload across all your clients, split by period:

| Column | Meaning |
|---|---|
| Period | The VAT period or "Other tasks" for work that is not tied to a period. |
| Closed | Administrations whose period is filed. |
| Busy | Administrations with active work in progress. |
| Open | Administrations with an open period that has not been touched yet. |
| Nothing yet | Administrations with no registered activity for the period. |

Use this table to spot a pile-up before it becomes a deadline problem. Periods are year-agnostic; the comparison table above filters by year.

### What is NOT on this page

A **"Percentage of VAT returns on time"** is deliberately not shown. In MyCompanyDesk, "filed" means a period was closed here. A client who files elsewhere will never have a closed period here, so a historical percentage would systematically mark them late. That would be an accusation based on missing data, not an accuracy issue. A quality metric like this first needs an explicit signal per administration that filing happens here.

Instead, the comparison table now includes a **Closed by you** column. It shows how many of the client's recent periods were closed in this office, based on the same closed periods. A client who files elsewhere simply shows 0, because nothing was closed here. The column is intentionally neutral and is never red, because it describes your own work, not the client's behavior.

## Related

- [People with access and your accountant](/en/settings/team) for inviting teammates and accountants and setting page permissions
- [Reports](/en/features/reports) for the lapsed-customers view and other report pages
- [Dashboard](/en/features/dashboard) for the day-to-day briefing of one workspace
