---
title: Bank Feed
description: "Link your bank account so transactions flow in automatically. Rules turn outgoing payments into draft expenses that you confirm before they book."
last_verified: 2026-08-21
---

# Bank Feed

Link your bank account to MyCompanyDesk and your transactions flow in automatically. Rules and smart categorisation turn outgoing payments into draft expenses, and you confirm every draft before it lands in your books.

## Where to find it

The bank feed lives in the Expenses area:

- **Connections and settings**: open **Expenses** and click the gear icon in the page header. This opens the expense settings, where you link banks, review auto-imported expenses, and manage rules and notifications.
- **Bank queue**: at the top of the Expenses page you see the rows that still need review.
- **Transaction feed**: the **Transacties** button in the Expenses page header opens the list of imported bank transactions.

## Linking a bank account

1. Go to **Expenses** and click the gear icon.
2. In the bank section, click **Link your first bank**, or pick your bank directly when a bank picker is shown.
3. Confirm the connection in your bank's own app or website. This is a secure PSD2 flow: MyCompanyDesk can only read the transactions you allow and can never move money.
4. You are sent back to MyCompanyDesk when you are done. The first sync imports transactions from the past 90 days; after that the feed stays current automatically.

You can link up to 10 accounts across different banks. Each account appears as its own row with the current balance and the time of the last sync. Use **Link another bank** to add more. Bank consent expires periodically under PSD2 rules (typically every 90 days), and you get a heads-up before it does.

Per account you can:

- Toggle **auto-import** on or off, so you decide which accounts feed your expenses.
- Set an **import-from date**. This date controls from when transactions appear in your actual task list. We still fetch transactions before that date (for linking, reconciling and balance), but they do not ask for your action. Leave it empty and every imported transaction lands in the list.
- Trigger a **manual sync** at any time.
- Disconnect the account.

## Sync frequency

How often MyCompanyDesk checks for new transactions is one setting for your whole workspace: **Realtime**, **Every 4 hours**, or **Daily**. The manual sync per account always works on top of this.

## From transaction to expense

Before a transaction is categorised, outgoing lines are checked against expenses that are already in your books. When the match is unambiguous, the bank line is linked to the existing expense automatically. MyCompanyDesk compares amount, date and counterparty/supplier name; only a strong match on all of these links a transaction without asking first. This creates nothing new; it simply records which payment settled the cost.

After the link pass, new transactions run through your rules and the smart categoriser:

1. Your own rules are checked first. A matching transaction gets the rule's category.
2. Transactions without a rule match get a category suggestion from smart categorisation, or fall back to your default category if you set one.
3. A categorised outgoing transaction becomes a **draft expense**: the counterpart becomes the supplier, and the amount, date, and the category's usual VAT treatment are filled in.
4. The draft lands in the review queue, so nothing is booked without you seeing it.

Transactions from the first import, which pulls roughly the past 90 days, never auto-confirm. They always land in the review queue, even when the categorisation is confident. This only applies to the backlog from before the account was connected; new transactions arriving afterwards follow the normal review rules. The import-from date per account determines from which point that backlog appears in your task list; anything before it remains available for linking and reconciling, but does not request review.

Only outgoing transactions become expenses; incoming payments are never turned into expenses. Expenses created from bank transactions show a small bank badge in the expenses list, so you can always see where an entry came from.

## The bank queue

The bank queue sits at the top of the Expenses page. It shows transactions that have not yet been booked as expenses: review rows prepared by the feed, plus expense candidates from the bank feed. Each row shows the supplier, date, amount, the suggested category, and where that suggestion came from (one of your rules, your default category, a smart suggestion, or the bank feed).

The queue is cached within your session. When you return to Expenses, the rows appear in the first frame and the background refreshes them in place. That prevents the list underneath from shifting down while you are already reading it. The cache belongs to your current workspace: switching workspaces rebuilds it from scratch.

::: info
The queue loads up to 100 review rows and 100 expense candidates per fetch. When the server has more rows, the queue indicates this and automatically pulls the next batch after an action, so nothing gets stuck behind a full page.
:::

For each draft you can:

- **Book**: shown when the row already has a category. Books the expense as-is. It moves to your expense list and counts in reports and VAT.
- **Set up**: shown when the row has no category yet. It opens the bank-row sheet, where you can choose the category before booking. The sheet shows the raw bank description and counterpart account when they add context, any suggested category with the reason for it, and a preview of the VAT that will apply. You can also tick **Remember this supplier** to create a vendor rule that will auto-book future matching payments from this supplier without review. Then click **Book** to confirm or **Ignore** to remove the draft. On a phone the same sheet opens from the row.
- **Edit**: open the expense to adjust the category, VAT, or amount before booking.
- **Reject**: discard the draft. The transaction returns to the feed for manual handling.

If the category you selected has been archived since the page loaded, the confirm or edit action is refused with an `EXPENSE_CATEGORY_UNKNOWN` error instead of silently booking the expense under a different category. Refresh the page to load the current category list and pick again.

### Catching up on older queue lines

When you connect a bank, the first import can pull in transactions from before you started using MyCompanyDesk. Many of those older rows are from a period that has already been filed, so there is nothing left to decide. When the queue detects a block of stale rows, it offers **Catch up to here**.

Clicking it closes every queue line before the suggested date, including rows that are not currently visible. Nothing is deleted: the transactions move to **Ignored**, and you can undo the action in one click. From that point on, MyCompanyDesk only asks you about transactions from the suggested date onward.

The offer only appears while there are stale rows. Once they are cleared, the catch-up banner disappears automatically.

## Feed settings

On the same settings page you control how the feed behaves:

- **Auto-import**: turn the automatic creation of draft expenses on or off for the whole workspace.
- **Smart categorisation**: let MyCompanyDesk suggest a category for transactions without a rule.
- **Ignore own transfers**: skip transfers between your own linked accounts.
- **Ask for receipts by email**: a daily sweep emails suppliers one consolidated request for receipts that are still missing. Each supplier is asked only once per transaction. An **automatically chase suppliers for receipts** option turns this into a repeat reminder: after the first request, suppliers are re-contacted on day 7 and day 14 until a receipt is uploaded. A counter on the setting shows how many payments are currently waiting for a receipt.
- **Minimum import amount**: transactions below this euro amount are not turned into expenses.
- **Default category**: the fallback category when nothing else matches.
- **Booking date**: choose whether expenses use the transaction date, the value date, or the receipt date.

## Rules

Rules teach MyCompanyDesk how to categorise recurring payments. On the settings page, click **Add rule** and fill in:

1. A name for the rule (usually the vendor).
2. One keyword.
3. The expense category it should get.

The keyword is matched against the transaction description and the counterpart name; capitalisation does not matter. Matching transactions get the rule's category and become draft expenses. Rules apply to all linked accounts, each rule shows how often it has matched, and you can edit or delete a rule at any time.

A rule matches on a single keyword. Amount conditions are not supported, and rules are created on the settings page, not from the transaction feed.

## Vendor trust rules

When the same supplier is paid regularly, MyCompanyDesk can learn to trust that vendor and skip the draft-review step for matching transactions. You control this on the settings page:

- **Learn trusted suppliers from my confirmed drafts**: when enabled, a supplier becomes a "trusted vendor" after enough confirmed drafts and matching rule usage.
- **Trusted vendors need my review**: choose whether trusted-vendor transactions still appear in the review queue, or are booked automatically.

A vendor only becomes trusted when there is a strong, consistent pattern of confirmed payments and an active categorisation rule. You can disable the feature at any time; when disabled, all previously learned vendor trust is cleared and every transaction goes back through the normal review flow.

## The transaction feed

Open **Transacties** from the Expenses page header to see every imported transaction, with a few quick stats at the top (transactions this month, the share booked automatically, and how many still need your attention). Three tabs split the feed:

- **Te koppelen**: transactions that are not linked to anything yet.
- **Gekoppeld**: transactions linked to an invoice or expense, with a link to that record.
- **Genegeerd**: transactions you chose to ignore.

For each open transaction:

- **Koppelen** opens a window where you link the transaction to an existing invoice or expense. Money out suggests expenses and money in suggests invoices, and you can flip between the two and search.
- **Negeren** moves the transaction to the ignored tab.

Most linking is still a manual step. MyCompanyDesk does, however, automatically link an imported bank line to an existing expense when the match is unambiguous. Customers, invoices, and anything unclear still need your confirmation.

## Notifications

Five bank notifications can be switched on independently at the bottom of the settings page:

- **Sync errors**: an email and in-app notification when a bank connection fails to sync, with a link to fix it.
- **Weekly digest**: a Monday morning email summarising the past week's bank activity. It is skipped when there was nothing to report.
- **Large transactions**: an alert when a transaction meets or exceeds a euro threshold you set yourself.
- **Vendor rule learned**: an in-app notification when MyCompanyDesk has learned a new trusted vendor rule from your confirmed drafts.
- **Locked VAT period**: a one-time alert when the bank feed tries to book an outgoing transaction inside a VAT period that has already been filed and locked. The row is skipped permanently so the sync does not retry forever, and the notification tells you how to handle it: book the expense manually with a current-period date, or file a supplementary VAT return.

## Troubleshooting

**My bank connection shows an error.** Open the expense settings via the gear on the Expenses page. If your bank needs a fresh authorisation you will see it on the connection row; the sync-error notification also links you there.

**A transaction did not become an expense.** Check that auto-import is on, that the amount is above your minimum import amount, and that it is an outgoing payment. You can always link the transaction by hand on the Transacties page.

**A bank transaction landed in a locked VAT period.** The bank feed cannot auto-book expenses dated inside a period that has already been filed. You get a one-time "Bank transaction: locked VAT period" notification, the row is marked as permanently skipped, and the next sync does not retry it. To record the cost, either create the expense manually with a date in the current open period, or ask your accountant whether a supplementary VAT filing is the right route.

**I am not getting notifications.** Check the notification toggles at the bottom of the expense settings page.
