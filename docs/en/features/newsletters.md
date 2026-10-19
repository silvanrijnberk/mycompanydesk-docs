---
title: Newsletters
description: "Write, schedule and send mailings to your customers. The editor is linked to your customer list, so recipients stay in sync without CSV imports."
last_verified: 2026-10-19
---

# Newsletters

> Newsletters are part of **Office**. The module is off by default: switch it on in **Settings › Modules**. You need your own domain with email for it, because newsletters always go out from your own domain.

The newsletter editor helps you write, schedule and send mailings to your customers. It is linked to your customer list, so recipients stay in sync without importing CSV files.

## Where to find it

Enable the feature from **Settings › Modules** (the **Newsletters** row), then open **Communication › Newsletters** from the main navigation.

The page has four tabs:

- **Campaigns**: drafts, scheduled mailings and sent campaigns.
- **Subscribers**: the audience that receives your newsletters.
- **Overview**: key numbers for recent campaigns.
- **Settings**: sender, sign-up and unsubscribe.

You need access to the workspace settings to turn the feature on or off.

## Campaign list

Each campaign appears as a single row that shows:

- a coloured icon that reflects the campaign status
- the subject line, or *no subject* when the draft is still empty
- one line of metadata with the relevant timestamp
- a status pill (Draft, Scheduled, Sending, Sent, Cancelled or Failed)
- a small meter showing the open rate once a campaign has been sent
- one primary action: **Open editor** for drafts and scheduled mailings, **View** for sent mailings
- extra actions behind the overflow menu: **Results** (once something has been sent), **Resend** (for a failed campaign) and **Delete** (as long as the campaign has not been sent)

Hover the row to reveal the overflow menu on desktop. On a phone, swipe the row or press and hold it.

## Creating a campaign

There are two entry points:

- **Blank draft** in the page header starts a blank draft.
- **Create newsletter** starts the AI wizard, which turns a short prompt into a first version of your mailing.

Both end up on the campaign editor, where you can edit the subject, preheader, body, sender and audience before sending or scheduling.

## Sending and scheduling

- **Send** queues the campaign immediately.
- **Schedule** lets you pick a date and time in the future. **Cancel schedule** turns the letter back into a draft.
- **Send test** first sends a test copy to an address you choose.

Your changes are saved automatically as you type; there is no separate save button.

Once a campaign is queued or sent it can no longer be deleted; you can resend a failed campaign from the overflow menu.

The confirmation and welcome mail for new subscribers come from your own company: your name as the sender and your own reply-to address, rather than an anonymous MyCompanyDesk address. When a scheduled mailing cannot be sent, you get a notification (Nieuwsbrief niet verstuurd, newsletter not sent) and can resend it afterwards.

## Adding subscribers: the basis you email on

When you add addresses yourself, from a list or from your customers, the app first asks what you may email these people:

- **They said themselves that they want your newsletter.** Choose this when people signed up or agreed with you directly.
<!-- TODO(source-missing): the legal rule for mailing your own customers about own, similar products (soft opt-in) is not yet in sources/. The app's own hint is quoted below; until a source file exists, do not expand this into a legal explanation. -->
- **They are customers who bought something from you.** The app explains on the spot what that means for your mailings (your own, similar products or services, and only when they could say no when they bought) and only adds customers who have a sent invoice. Every newsletter carries an unsubscribe link.

The answer is recorded with the import, so you can always show why each person is on the list.

Two extra safeguards:

- **Confirmation email first** (double opt-in): people only join the list once they click the link in that email. The confirmation mails go out in small batches over a few hours, so they do not land as spam. This is the safest choice when you are not sure they said yes.
- **From customers**: only customers who actually have a sent invoice are added.

## Consent records

Every time you add addresses yourself, MyCompanyDesk keeps a record of when it happened, by whom, on what basis (their consent or your own customer), which statement you confirmed and with which result (added, waiting for the confirmation email, or skipped). The records live in their own view under the newsletters module, they can be exported as CSV, and they are worth keeping: when someone asks why they receive your newsletter, this is your answer.

People who sign up on your own website confirm by email themselves; that needs no separate record.

## Results

Open the **Results** action on a sent, sending or failed campaign to see per-recipient delivery and open data. The overview tab also rolls these numbers up into workspace-level totals.
