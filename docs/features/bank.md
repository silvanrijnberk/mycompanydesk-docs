---
title: Bank Feed
last_verified: 2026-07-02
---

# Bank Feed

Link your bank account to MyCompanyDesk and your transactions flow in automatically. Rules and smart categorisation turn outgoing payments into draft expenses, and you confirm every draft before it lands in your books.

## Where to find it

The bank feed lives in the Expenses area:

- **Connections and settings**: open **Expenses** and click the gear icon in the page header. This opens the expense settings, where you link banks, review auto-imported expenses, and manage rules and notifications.
- **Transaction feed**: the **Transacties** button in the Expenses page header opens the list of imported bank transactions.

## Linking a bank account

1. Go to **Expenses** and click the gear icon.
2. In the bank section, click **Link your first bank**, or pick your bank directly when a bank picker is shown.
3. Confirm the connection in your bank's own app or website. This is a secure PSD2 flow: MyCompanyDesk can only read the transactions you allow and can never move money.
4. You are sent back to MyCompanyDesk when you are done. The first sync imports transactions from the past 90 days; after that the feed stays current automatically.

You can link up to 10 accounts across different banks. Each account appears as its own row with the current balance and the time of the last sync. Use **Link another bank** to add more. Bank consent expires periodically under PSD2 rules (typically every 90 days), and you get a heads-up before it does.

Per account you can:

- Toggle **auto-import** on or off, so you decide which accounts feed your expenses.
- Trigger a **manual sync** at any time.
- Disconnect the account.

## Sync frequency

How often MyCompanyDesk checks for new transactions is one setting for your whole workspace: **Realtime**, **Every 4 hours**, or **Daily**. The manual sync per account always works on top of this.

## From transaction to expense

New transactions run through your rules and the smart categoriser:

1. Your own rules are checked first. A matching transaction gets the rule's category.
2. Transactions without a rule match get a category suggestion from smart categorisation, or fall back to your default category if you set one.
3. A categorised outgoing transaction becomes a **draft expense**: the counterpart becomes the supplier, and the amount, date, and the category's usual VAT treatment are filled in.
4. The draft lands in the review queue, so nothing is booked without you seeing it.

Only outgoing transactions become expenses; incoming payments are never turned into expenses. Expenses created from bank transactions show a small bank badge in the expenses list, so you can always see where an entry came from.

## Reviewing auto-imported expenses

The **Auto-imported expenses to review** card sits at the top of the expense settings page whenever drafts are waiting. Each row shows the supplier, date, amount, the suggested category, and where that suggestion came from (one of your rules, your default category, a smart suggestion, or the bank feed).

For each draft you can:

- **Confirm**: book the expense as-is. It moves to your expense list and counts in reports and VAT.
- **Edit**: open the expense to adjust the category, VAT, or amount before booking.
- **Reject**: discard the draft. The transaction returns to the feed for manual handling.

## Feed settings

On the same settings page you control how the feed behaves:

- **Auto-import**: turn the automatic creation of draft expenses on or off for the whole workspace.
- **Smart categorisation**: let MyCompanyDesk suggest a category for transactions without a rule.
- **Ignore own transfers**: skip transfers between your own linked accounts.
- **Ask for receipts by email**: a daily sweep emails suppliers one consolidated request for receipts that are still missing. Each supplier is asked only once per transaction.
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

## The transaction feed

Open **Transacties** from the Expenses page header to see every imported transaction, with a few quick stats at the top (transactions this month, the share booked automatically, and how many still need your attention). Three tabs split the feed:

- **Te koppelen**: transactions that are not linked to anything yet.
- **Gekoppeld**: transactions linked to an invoice or expense, with a link to that record.
- **Genegeerd**: transactions you chose to ignore.

For each open transaction:

- **Koppelen** opens a window where you link the transaction to an existing invoice or expense. Money out suggests expenses and money in suggests invoices, and you can flip between the two and search.
- **Negeren** moves the transaction to the ignored tab.

Linking is always a manual step: MyCompanyDesk does not automatically match transactions to customers, invoices, or existing expenses.

## Notifications

Three bank notifications can be switched on independently at the bottom of the settings page:

- **Sync errors**: an email and in-app notification when a bank connection fails to sync, with a link to fix it.
- **Weekly digest**: a Monday morning email summarising the past week's bank activity. It is skipped when there was nothing to report.
- **Large transactions**: an alert when a transaction meets or exceeds a euro threshold you set yourself.

## Troubleshooting

**My bank connection shows an error.** Open the expense settings via the gear on the Expenses page. If your bank needs a fresh authorisation you will see it on the connection row; the sync-error notification also links you there.

**A transaction did not become an expense.** Check that auto-import is on, that the amount is above your minimum import amount, and that it is an outgoing payment. You can always link the transaction by hand on the Transacties page.

**I am not getting notifications.** Check the notification toggles at the bottom of the expense settings page.
