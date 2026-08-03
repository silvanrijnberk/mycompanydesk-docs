---
title: "Accountant access"
last_verified: 2026-08-03
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
    - "client invite"
    - "uitnodiging klant"
    - "klant uitnodigen"
  actions:
    - { label: "Open access settings", to: "/settings/team" }
  follow_up:
    - "How do I set page permissions?"
    - "How do I invite a team member?"
    - "How do I revoke access?"
    - "What happens when my accountant invites me?"
---

There are two ways accountant access can start: either you invite your accountant from your own workspace, or your accountant invites you to create a workspace from their boekhouder portal.

## You invite your accountant

1. Go to Settings → "Toegang en boekhouder" (access and accountant)
2. In the Boekhouder (accountant) section, use "Add accountant" to add the contact details
3. Send the invite when you want them to create an account
4. Open Manage access to set page permissions

Accountant access is free on every plan; it does not require Pro or a team seat. Common statuses are contact-only, invited, active, and revoked.

## Your accountant invites you

If your accountant uses MyCompanyDesk, they can send you an invite from their boekhouder portal. You receive an email with a link to `/register?uitnodiging=TOKEN`.

1. Click the link in the email
2. The signup page names the inviting firm and pre-fills the email address the invite was sent to
3. Create your own account. You remain the owner of your workspace and data
4. After signup, your accountant automatically gets accountant access to your workspace

You can revoke that access at any time from Settings → "Toegang en boekhouder". The invite link is valid for 30 days and can be resent or revoked by your accountant.

## What your accountant sees

Once your accountant has access, their boekhouder portal shows a triage desk with one row per client. The desk sorts clients by urgency, so your accountant can see at a glance who needs attention today.

- Clients with an upcoming or missed VAT deadline are flagged first.
- Overdue invoices and missing receipts are counted for each client.
- Clients whose books are on track show the status "Loopt goed".

Your accountant can click any client to jump straight into that workspace with the permissions you set. They see only the pages you granted, and they can invite or manage client workspaces from the same screen.
