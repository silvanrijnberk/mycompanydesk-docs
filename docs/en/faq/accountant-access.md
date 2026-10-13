---
title: "Accountant access"
description: "Accountant access can start two ways: you invite your accountant from your own workspace, or your accountant invites you from their portal."
last_verified: 2026-08-15
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
    - { label: "Open accountant settings", to: "/settings/boekhouder" }
  follow_up:
    - "How do I set page permissions?"
    - "How do I invite a team member?"
    - "How do I revoke access?"
    - "What happens when my accountant invites me?"
---

There are two ways accountant access can start: either you invite your accountant from your own workspace, or your accountant invites you to create a workspace from their boekhouder portal.

## You invite your accountant

1. Go to Settings › "Your accountant"
2. Under "Boekhouder uitnodigen" (invite accountant), enter your accountant's email address and click "Uitnodiging versturen" (send invitation). Your accountant receives an email with an acceptance link that is valid for 30 days
3. Once your accountant accepts, they appear under "Actieve boekhouders" (active accountants), where you can also revoke their access
4. Only need an address to send documents to, without your accountant signing in? Add a contact under "Contactpersoon voor verzenden" (contact for sending). If a contact has an account, the "Paginatoegang" (page access) button sets which pages they can see

Accountant access is free on every plan; it does not require Office or a team seat. Under "Wat je boekhouder heeft gedaan" (what your accountant did) you see every change an accountant makes in your books.

## Automatic delivery

Automatic forwarding is part of Office. First add a contact under Settings › "Your accountant", then turn on the switch in the "Automatisch doorsturen" (automatic forwarding) section. MyCompanyDesk then emails your accountant your sales invoices (as soon as you send them, or once they are paid) and your expenses, with the invoice PDF and receipts attached. You choose how often this happens (immediately, daily, weekly, monthly or per quarter), whether quotes go along for information, and whether only expenses with a receipt are sent. "Laatst verstuurd" (last sent) shows what was delivered. VAT return figures are not included; download those as CSV from **Taxes › VAT return**.

## Your accountant invites you

If your accountant uses MyCompanyDesk, they can send you an invite from their boekhouder portal. You receive an email with a link to `/register?uitnodiging=TOKEN`.

1. Click the link in the email
2. The signup page names the inviting firm and pre-fills the email address the invite was sent to
3. Create your own account. You remain the owner of your workspace and data
4. After signup, your accountant automatically gets accountant access to your workspace

If the workspace you are invited into already has its own active subscription, the firm cannot take over the billing for it until that subscription is cancelled. You will see an error if the firm tries to set up office billing while your own subscription is still active.

You can revoke that access at any time from Settings › "Your accountant". The invite link is valid for 30 days and can be resent or revoked by your accountant.

## What your accountant sees

Once your accountant has access, their boekhouder portal shows a triage desk with one row per administration. The desk sorts administrations by urgency, so your accountant can see at a glance which administration needs attention today.

- Administrations with an upcoming or missed VAT deadline are flagged first.
- Overdue invoices and missing receipts are counted for each administration.
- Administrations whose books are on track show the status "Loopt goed".

Your accountant can click any administration to jump straight into that workspace with the permissions you set. They see only the pages you granted, and they can invite or manage administrations from the same screen.


## Managing multiple businesses

If you run more than one business, or your accountant manages multiple administrations, use the workspace switcher in the left sidebar to add and switch between them. You can add your own business from the switcher; each gets its own administration with separate VAT, invoices, and bookkeeping. Desk includes one business of your own. With Office you can run up to 10, at €5.99 per month or €59.90 per year for each extra business (excl. VAT).

When you have more than one administration, the left navigation also shows **Workspaces** as a direct link to the triage desk.

Accountants invited by a client see those managed workspaces alongside their own business. See [Reports](/en/features/reports) and [Dashboard](/en/features/dashboard) for how work is shown across administrations.
