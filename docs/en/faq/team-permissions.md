---
title: Team permissions
description: "Page permissions control what each team member or your accountant may do per page: Read, Write and Create."
last_verified: 2026-10-13
chatbot:
  triggers: ["team permissions", "manage team permissions", "page permissions", "read write create", "permission settings", "access control", "granular permissions", "read only", "write access", "create access", "pagina rechten", "teamrechten", "lezen schrijven", "toegang instellen", "seitenberechtigungen", "teamberechtigungen", "lese schreibzugriff", "permissions page", "permissions de l'equipe", "droits acces"]
  actions:
    - { label: "Open access settings", to: "/settings/toegang" }
  follow_up: ["How do I invite a new team member?", "How do I manage accountant access?", "How do I revoke someone's access?"]
---

Page permissions control what each team member or your accountant may do per app page:

| Permission | Allows |
|---|---|
| **Read** | View the page and the records on it |
| **Write** | Edit existing records |
| **Create** | Add new records |

To configure access:

1. For a team member: go to Settings › **People with access**, open the menu on that person's row and choose **Manage access**. For your accountant: go to Settings › **Your accountant** and click **Paginatoegang** (page access, shown in Dutch)
2. Toggle Read, Write and Create per page
3. Click **Save**

The same window also has quick shortcuts:

- **Grant full access** turns Read, Write and Create on for every page.
- **Read-only access** turns Read on and Write/Create off for every page.
- **Revoke all** turns everything off.

Read must be on before Write or Create can work. Turning Read off also disables Write and Create for that page.

The pages in the window are Dashboard, Tasks, Inbox, Invoices, Expenses, Customers, Projects, Objects / Assets, Contracts, Documents, Newsletters, Reports, Time tracking, Taxes (VAT) and Settings. Payments have no row of their own: they belong to **Invoices**. The trips behind the mileage allowance live in Time tracking and ask for Read on that page. Saved routes and the trip suggestions used by the public-transport expense open with Read on Time tracking or Expenses.

The same right protects the invoice entry points elsewhere in the app, such as the **Create invoice** action on an hour row, in an appointment, among nearby customers, or on a project or contract page. They ask for the right on **Invoices**, and without it the action stays hidden instead of ending in an error. Turning on automatic invoicing asks for Write access on Invoices, and starting a payment mandate asks for the same right. Read-gated lists behave consistently too: the transactions list on the VAT page skips invoice and expense rows the member has no Read right on, the document archive lists receipts, invoices and mail attachments only for members with the matching right, and shielded pieces stay out of the archive view for the accountant.

Create permission is scoped to new records only. A member with Create but no Write can add new records, but cannot edit existing records, change status, use bulk actions, or confirm scanned receipts into new expenses.

Pages without a Read right stay out of reach for the member: Bookkeeping shows only the tabs that member may open, and opening a direct link to a page without access shows a short note that the member has no access to that part of the app. The dashboard stays quiet about it, because every member lands there when signing in.
