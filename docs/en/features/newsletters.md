---
title: Newsletters
description: "Write, schedule and send mailings to your customers. The editor is linked to your customer list, so recipients stay in sync without CSV imports."
last_verified: 2026-08-18
---

# Newsletters

> **Status: in active development.** Newsletters ship behind the `newsletters` feature flag. Enable them in Settings > Components.

The newsletter editor helps you write, schedule and send mailings to your customers. It is linked to your customer list, so recipients stay in sync without importing CSV files.

## Where to find it

Enable the feature from **Settings > Components**, then open **Newsletters** from the main navigation.

The page has three tabs:

- **Campaigns** - drafts, scheduled mailings and sent campaigns.
- **Overview** - key numbers for recent campaigns.
- **Subscribers** - the audience that receives your newsletters.

You need workspace admin rights to turn the feature on or off.

## Campaign list

Each campaign appears as a single row that shows:

- a coloured icon that reflects the campaign status
- the subject line, or *no subject* when the draft is still empty
- one line of metadata with the relevant timestamp
- a status pill (draft, scheduled, sending, sent, cancelled or failed)
- a small meter showing the open rate once a campaign has been sent
- one primary action: **Edit** for drafts, **View** for sent or scheduled mailings
- extra actions behind the overflow menu, including **Results**, **Resend** and **Delete**

Hover the row to reveal the overflow menu on desktop. On mobile the menu is always visible.

## Creating a campaign

There are two entry points:

- **New newsletter** in the page header starts a blank draft.
- **Create with AI** starts the AI wizard, which turns a short prompt into a first version of your mailing.

Both end up on the campaign editor, where you can edit the subject, preheader, body, sender and audience before sending or scheduling.

## Sending and scheduling

- **Send now** queues the campaign immediately.
- **Schedule** lets you pick a date and time in the future.
- **Save draft** stores the campaign without sending it.

Once a campaign is queued or sent it can no longer be deleted; you can resend a failed campaign from the overflow menu.

## Results

Open the **Results** action on a sent, sending or failed campaign to see per-recipient delivery and open data. The overview tab also rolls these numbers up into workspace-level totals.
