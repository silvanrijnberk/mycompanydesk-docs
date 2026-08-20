---
title: Team permissions
description: "Page permissions control what each team member or accountant can do: read - view data, write - edit existing records, create - add new records."
last_verified: 2026-07-02
chatbot:
  triggers: ["team permissions", "manage team permissions", "page permissions", "read write create", "permission settings", "access control", "granular permissions", "read only", "write access", "create access", "pagina rechten", "teamrechten", "lezen schrijven", "toegang instellen", "seitenberechtigungen", "teamberechtigungen", "lese schreibzugriff", "permissions page", "permissions de l'equipe", "droits acces"]
  actions:
    - { label: "Open access settings", to: "/settings/team" }
  follow_up: ["How do I invite a new team member?", "How do I manage accountant access?", "How do I revoke someone's access?"]
---
Page permissions control what each team member or accountant can do:
• Read - view data
• Write - edit existing records
• Create - add new records

To configure:
1. Go to Settings → "Toegang en boekhouder" (access and accountant)
2. Open Manage access for the member or accountant
3. Toggle Read, Write, and Create per page
4. Save the permission changes

Note: Read is required before Write or Create works.

The Payments page also requires Read access on the Invoices page, because payments can update invoice status (including marking invoices as paid) and process refunds.

Create permission is scoped to new records only. A member with Create but no Write can add new records through the collection root, but cannot edit existing records, change status, use bulk actions, or confirm scanned receipts into new expenses.
