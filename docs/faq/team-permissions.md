---
title: Teamrechten
description: "Page permissions control what each team member or accountant can do: Read, Write and Create, matching the Lezen, Schrijven and Aanmaken toggles in the app."
last_verified: 2026-10-06
chatbot:
  triggers: ["team permissions", "manage team permissions", "page permissions", "read write create", "permission settings", "access control", "granular permissions", "read only", "write access", "create access", "pagina rechten", "teamrechten", "lezen schrijven", "toegang instellen", "seitenberechtigungen", "teamberechtigungen", "lese schreibzugriff", "permissions page", "permissions de l'equipe", "droits acces"]
  actions:
    - { label: "Open access settings", to: "/settings/toegang" }
  follow_up: ["How do I invite a new team member?", "How do I manage accountant access?", "How do I revoke someone's access?"]
---
Page permissions control what each team member or accountant can do per app page:

| Permission | App label | Allows |
|---|---|---|
| **Read** | Lezen | View the page and the records on it |
| **Write** | Schrijven | Edit existing records |
| **Create** | Aanmaken | Add new records |

To configure access:

1. Go to Settings → **Toegang en boekhouder** (access and accountant)
2. Click **Toegang beheren** (manage access) next to the member or accountant
3. Toggle Read, Write and Create per page
4. Save the permission changes

The drawer also has quick shortcuts:

- **Volledige toegang** (Full access) turns Read, Write and Create on for every page.
- **Alleen-lezen toegang** (Read-only access) turns Read on and Write/Create off for every page.
- **Alles intrekken** (Revoke all) turns everything off.

Read must be on before Write or Create can work. Turning Read off also disables Write and Create for that page.

The **Payments** page also requires Read access on the **Invoices** page, because payments can update invoice status (including marking invoices as paid) and process refunds.

The same right protects the invoice entry points scattered across the app. Every action that creates an invoice or a quote somewhere else (a **Factuur maken** action on an hour row, in an appointment, on the Nearby customers sheet, or on a project and contract page) asks for the right on **Facturen** (invoices), and without it the action stays hidden instead of ending in an error. Turning on automatic invoicing asks for Write access on Facturen, and starting a payment mandate asks for the same right. Read-gated lists behave consistently too: the transactions list on the VAT page skips invoice and expense rows the member has no Read right on, the document archive lists receipts, invoices and mail attachments only for members with the matching right, and shielded pieces stay out of the archive view for the accountant.

Create permission is scoped to new records only. A member with Create but no Write can add new records through the collection root, but cannot edit existing records, change status, use bulk actions, or confirm scanned receipts into new expenses.

Pages without a Read right stay out of reach for the member: the Boekhouding area shows only the tabs that member may open, and opening a direct link to a page without access shows a short note that the member has no access to that part of the app. The dashboard stays quiet about it, because every member lands there when signing in.
