---
title: "Accountant access"
last_verified: 2026-06-05
chatbot:
  triggers:
    - "accountant access"
    - "accountant permissions"
    - "add accountant"
    - "invite accountant"
    - "accountant toevoegen"
    - "boekhouder"
    - "buchhalter einladen"
    - "buchhalter zugang"
    - "comptable acces"
    - "ajouter comptable"
    - "accountant invite"
    - "revoke accountant"
    - "boekhouder dashboard"
    - "accountant dashboard"
  actions:
    - { label: "Open team settings", to: "/settings?section=team" }
    - { label: "Open accountant dashboard", to: "/boekhouder" }
  follow_up:
    - "What can my accountant see?"
    - "How do I invite my accountant?"
    - "How do I revoke accountant access?"
---

# Accountant access

Give your accountant (boekhouder) read-only access to the financial parts of your workspace. They can view invoices, expenses, VAT, bank transactions, and reports without being able to change your settings, website, or email configuration.

## Inviting an accountant

1. Go to **Settings > Team** (or `/workspace/account/team`)
2. In the **Accountants** section, click **Add accountant**
3. Enter their name and email address
4. Click **Invite** — they receive an email with a link to accept

The invite is valid for 30 days. If it expires, you can send a new one. The invite email is sent in Dutch and clearly states the read-only scope and permissions being granted.

::: tip
The invitation is email-locked: only the person at the exact email address you entered can accept it. Forwarding the invite link to someone else will not work.
:::

## What your accountant can see

Once they accept, your accountant has read-only access to:

- Invoices and credit notes
- Expenses and receipts
- VAT overview and aangifte
- Bank transactions
- Reports

They **cannot** access your website/site builder, email settings, workspace settings, or any configuration pages.

## The accountant dashboard

After accepting, your accountant sees a dedicated dashboard at `/boekhouder` that lists:

- Their own home workspace
- All client workspaces they have been granted access to, with last-accessed dates

They click **Open** on any client workspace to switch into it. A search bar appears when they have more than five clients. The dashboard makes it easy for accountants managing multiple clients to find the right workspace quickly.

## Managing access

As the workspace owner, go to **Settings > Team** to see all pending invites and active accountant grants. From here you can:

- **View** pending and active accountants with their email, name, and last activity
- **Revoke an invite** before it is accepted (the link stops working immediately)
- **Revoke an active grant** to remove an accountant's access (takes effect immediately)

## Statuses

| Status | Meaning |
|---|---|
| **Pending** | Invite sent, not yet accepted |
| **Active** | Accountant has accepted and can access your workspace |
| **Revoked** | Access has been removed by you |
| **Expired** | Invite was not accepted within 30 days |
