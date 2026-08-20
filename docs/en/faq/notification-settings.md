---
title: "Notification settings"
last_verified: 2026-08-19
chatbot:
  triggers:
    - "notifications"
    - "notification settings"
    - "email notifications"
    - "alerts"
    - "meldingen"
    - "notificatie instellingen"
    - "benachrichtigungen"
    - "parametres notification"
  actions: []
  follow_up:
    - "How do I send payment reminders?"
    - "How do I change my email?"
---

To manage your notification settings:

1. Go to Settings → "Meldingen" (notifications)
2. Switch the notification topics on or off. The categories are:
   - **Invoice attention**: late invoices, invoices nearing their due date, drafts left untouched, failed direct debits, failed invoice deliveries, paused automatic contract invoicing and time entries without a rate.
   - **Money in**: payments, confirmed payments and unusual bank transactions.
   - **Upcoming deadlines**: VAT, income tax, corporate tax, the KOR threshold, and contracts or projects that are about to expire. You get these well in advance so you are never late. This category also includes automated bookings that could not be made because the date falls in a VAT period that has already been filed and locked, such as a forwarded inbox invoice or a bank transaction. The notification names the supplier and invoice date and points you to the inbox or bank feed so you can book it in the current period or file a supplementary return.
   - **New opportunities**: quote requests, signed quotes and website sales.
   - **New inbox message**: a ping on your phone whenever a customer or supplier emails.
   - **Expense due**: upcoming due dates on expenses you created, such as scheduled rent or utility costs, so you can pay or record them on time.
   - **Vendor rule learned**: an in-app alert when MyCompanyDesk learns a new trusted-vendor bank rule from your confirmed drafts.
   - **Tips and news from MyCompanyDesk**: at most one email per month.
   Critical messages about your account are always sent and cannot be turned off.
3. On the same page you can also turn on push notifications for the device you are using
4. If you dismissed the browser prompt, click the notification bell at the top of the app, choose **More options** (three dots), and select **Turn on** to enable push notifications later
5. Changes save automatically

## The notification list

Notifications are grouped into three buckets so the list reads as a timeline: **Today**, **Yesterday**, and **Older**.

Opening the list marks everything inside it as seen, so the bell count goes back to zero. Each row keeps its own unread dot until you open it.

If several similar informational updates arrive on the same day, such as release notes or product tips, they collapse behind the newest one. A button shows how many more there are; click it to expand the group, click again to collapse it.

On a phone or tablet you can swipe a row to act quickly: swipe left to dismiss, swipe right to snooze. The row shows what will happen when you release it. Dismiss and snooze buttons are also available on every row.

You can move through the list with the keyboard: arrow keys move the selection, Enter or Space opens the selected notification, and Esc closes the drawer. The drawer sits above other floating UI so focus stays inside it while it is open.

While the list is loading for the first time, grey placeholder rows shaped like real notifications appear instead of a spinner, so the layout does not jump when the actual rows arrive. When you dismiss or snooze a row, the remaining rows glide up into the gap rather than snapping to a new position. Expanding a folded group animates its extra rows in place.

## Snoozing a notification

You can temporarily silence an action notification without marking it as read. Click the notification bell to open the list, then choose **Snooze** on the row you want to defer. You can snooze until:

- **1 hour** from now
- **Tomorrow** at 09:00
- **Next week** at 09:00

The notification disappears from the unread list after the next refresh, but the row stays visible with an **Undo** button until then. Release notes and tips cannot be snoozed; those you either read or mark as read.

## Do not disturb

Open the notification list and click **More options** (three dots) in the header to set **Do not disturb** for push notifications. Choose between:

- **Off**
- **1 hour**
- **Until tomorrow** at 09:00

While do-not-disturb is active, push notifications are held back, but the notifications still appear in the app list and emails are not affected. A chip in the panel header shows the active state and the time it expires.

## The detail panel

Clicking a notification opens a right-hand panel with the full context for that item. For an overdue invoice you see the total, open amount, payment status and issue date. For a VAT deadline you see the period and due date. For rolled-up notifications the panel lists the individual invoices, quotes or records behind the summary.

The panel waits for the underlying record to load before it switches. Until the record arrives, the previous notification stays visible and its buttons are inactive, so nothing shifts under your cursor. Once the record is ready, the panel cross-fades to the new notification in one smooth step.

The actions for that item are ranked so the most important one comes first and is marked as the primary action. The rest stay on the same row. If more actions fit than the panel has room for, the extra ones move behind a **More actions** button (three dots). Tap it to see the remaining actions without leaving the drawer.

The available actions depend on the notification:

- **Mark as paid**: records a manual payment for the remaining balance and resolves the invoice notification.
- **Mark as filed**: marks the VAT period as filed; shown only for VAT-deadline notifications.
- **Send reminder**: sends a payment reminder for the invoice, shown for overdue invoices.
- **Open**: opens the underlying record, such as the invoice, quote or contract.
- **Snooze** (or **Later**): temporarily defers the notification without marking it as read.
- **Dismiss** (or the **X** icon): removes the notification from your own unread list. On a phone the same close icon sits in the top right of the detail overlay, so it does not overlap the amount.

Release notes and tips have no detail panel because there is no underlying record to act on.

Push notifications work in your browser and in the Android app. On Android the notification shows the app icon, category colour and, where available, the sender's avatar.

If you are troubleshooting a missing alert, check both the notification toggle and the email address on your account.
