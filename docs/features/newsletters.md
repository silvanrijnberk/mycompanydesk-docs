---
title: Newsletters
---

# Newsletters

Send email campaigns to your subscribers from your own verified domain. The Newsletters page shows your campaigns, your subscriber list, and the per-recipient results after you send.

## What you can do

- Compose newsletters with a drag-and-drop editor using hero, text, image, button, and footer blocks.
- Add subject, preview text, and merge tags such as `{{ first_name }}`, `{{ name }}`, and `{{ email }}` so each recipient gets a personalized message.
- Send a test email before you broadcast.
- Send immediately or schedule a campaign for a future date and time.
- Manage subscribers: add them manually, import a list, copy them from your customer list, or export the list.
- Review opens, clicks, deliveries, bounces, unsubscribes, and failures per recipient.

## Access

Open the Newsletters page from the main navigation. Your workspace needs the newsletter feature flag enabled.

## Subscribers

The Subscribers tab lists everyone who can receive your newsletters.

Each subscriber has one of these statuses:

- **Active** — will receive future campaigns.
- **Pending** — has not confirmed the opt-in yet.
- **Unsubscribed** — has opted out and will not receive campaigns.
- **Bounced** — delivery failed repeatedly; sending stops for this address.

You can add a single subscriber, paste a batch of email addresses, import from your customer list, or export the full list. Imported or manually added addresses must have consent to receive your emails.

## Creating a campaign

1. Go to the Campaigns tab and click **New issue**.
2. Enter a subject and preview text. The preview text appears under the subject in many inboxes.
3. Build the body with blocks. Use the hero block for a headline, add text, images, and a call-to-action button.
4. Optionally override the footer text; otherwise the app uses the sender address saved in your newsletter settings.
5. Send a test to yourself or a colleague, then click **Send** when you are ready. A confirmation dialog shows how many active subscribers will receive it.

Campaigns can also be scheduled. Scheduled campaigns stay locked until the planned moment; cancel the schedule if you need to make further edits.

## Results per recipient

After a campaign is sent, open its results page to see what happened to each address. The top shows aggregate figures for the campaign:

- **Sent** — we handed the message to your sending provider.
- **Delivered** — the provider confirmed the mailbox accepted it.
- **Bounced** — the mailbox rejected it or the address is unreachable.
- **Opened** — the recipient opened the email at least once.
- **Clicked** — the recipient clicked a link in the email.
- **Unsubscribed** — the recipient used the unsubscribe link.
- **Failed** — the campaign could not be sent to this address.

Below the totals the page lists every recipient. You can search by name or email address. Each row shows the headline status for that address, such as Sent, Delivered, Opened, Bounced, or Failed.

### Sent versus Delivered

A message marked **Sent** means it left our system. It only becomes **Delivered** when your email provider reports back that the mailbox accepted it. Some providers or sending paths do not return that feedback. In that case the page shows a note explaining that every recipient was handed to the provider, but whether the mailbox accepted it is not yet known.

This distinction matters for older campaigns sent before the feedback tracking was added, and for any path where delivery feedback is unavailable. The app never reports a message as Delivered without evidence.

## Before you can send

Newsletters require a few settings to be in place:

- Your own verified domain for sending. Campaigns never go out from mycompanydesk.com.
- A physical postal address in the footer, which is legally required for commercial email.
- A from-name and reply-to address so readers know who the email is from and replies land in your Inbox.

The editor will guide you to the relevant settings page if anything is missing.
