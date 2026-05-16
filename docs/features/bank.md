---
title: Bank Feed
last_verified: 2026-05-16
---

# Bank Feed

Connect your bank accounts to MyCompanyDesk for automatic transaction imports, matching, and real-time alerts. The bank feed keeps your books current without manual entry.

## Connecting a bank account

1. Go to **Workspace** → **Financial** → **Bank Accounts**.
2. Click **Connect bank** and choose your institution from the list.
3. Complete the authorisation flow in the pop-up window.
4. Once connected, MyCompanyDesk syncs historical transactions from the past 90 days and keeps the feed current with periodic automatic syncs.

You can connect multiple accounts across different banks. Each account appears as a separate connection with its own sync cadence and transaction list.

## Transaction syncing

MyCompanyDesk syncs transactions from your connected accounts on an automatic schedule. You can also trigger a manual sync from the bank-accounts page at any time. New transactions are matched against your existing customers, invoices, and expenses using vendor rules and AI matching. Matched transactions flow directly into your books; unmatched ones appear in the bank feed for manual review.

### Sync failures

If a sync fails (for example, the bank's authorisation expired or the connection dropped), MyCompanyDesk sends you an email and an in-app notification with the connection name and a link to fix it. You can also opt into push notifications for sync errors under notification preferences.

## Notifications

The bank feed supports four notification preferences, controllable per workspace from the bank-accounts settings page:

| Preference | What it does |
|---|---|
| **Sync-error alerts** | Email and in-app notification when a bank connection fails to sync. |
| **Large-transaction alerts** | Push and in-app alert when a transaction exceeds a threshold you set (for example, €5,000). |
| **Weekly digest** | A Monday-morning email summarising the week's imported transactions, unmatched items, and top auto-categorised vendors. |
| **Receipt requests** | An automated daily sweep that emails your suppliers asking for missing receipts on outgoing unmatched transactions. |

All notifications are best-effort: they never block or interrupt a sync. You can turn each one on or off independently.

### Large-transaction threshold

Set a euro amount in the bank-accounts settings. Any incoming or outgoing transaction whose absolute value meets or exceeds that amount triggers a push notification and an in-app alert. This is useful for spotting large payments or unexpected charges quickly.

### Weekly digest

Every Monday at 08:00 (workspace-local time), MyCompanyDesk emails you a short summary of your bank-feed activity from the past seven days:

- Number of new transactions imported.
- Number of unmatched outgoing transactions still waiting for a receipt.
- Top three auto-categorised vendors.

If there was no activity that week the digest is skipped. The digest honours your workspace notification setting and only sends when `notify_weekly_summary` is on.

### Supplier receipt requests

When enabled, MyCompanyDesk runs a daily sweep at 06:00 local time. For each workspace with `ask_receipt_email` turned on, it finds outgoing unmatched transactions from the last 30 days whose counterpart matches a customer with an email address on file. It sends each supplier one consolidated email listing all the transactions that need a receipt, then tags those transactions so the same supplier isn't asked again.

## Managing vendor rules

Vendor rules let you teach MyCompanyDesk how to categorise recurring transactions:

- Create a rule from any transaction by clicking **Create rule** in the bank feed.
- Rules match on counterpart name, description, or amount patterns.
- Matched transactions are linked to the correct customer, invoice, or expense automatically.
- The weekly digest highlights your top-performing rules.

Rules you create are workspace-scoped and apply to all connected bank accounts.

## Troubleshooting

**My bank connection shows an error.** Open the bank-accounts settings page. If your bank requires re-authorisation you'll see a prompt to reconnect. Sync-error notifications also link you there.

**A transaction didn't match.** Review the transaction in the bank feed under the unmatched filter. You can match it manually, create a new customer or expense from it, or create a vendor rule so it's matched automatically next time.

**I'm not getting notifications.** Check the notification toggles in the bank-accounts settings page. For push notifications, make sure push is enabled in your account profile. For the weekly digest, confirm `notify_weekly_summary` is on and that there was actual bank activity that week.
