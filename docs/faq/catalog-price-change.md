---
title: Change all prices at once
last_verified: 2026-08-06
chatbot:
  triggers:
    - "change all prices"
    - "bulk price change"
    - "update prices"
    - "prijzen aanpassen"
    - "alle prijzen veranderen"
    - "massenpreisänderung"
    - "modifier tous les prix"
  actions: []
  follow_up:
    - "Will this change prices on invoices I already sent?"
    - "How do I undo a price change?"
---

Go to **Aanbod** (the catalog of products and services you sell) and click **Change prices** (**Prijzen aanpassen** in the Dutch interface) to update many prices in one go.

## How it works

1. Choose how you want to change prices:
   - **Percentage** — raise or lower every price by a percentage.
   - **Fixed amount** — add or subtract the same amount from every price.
   - Use a negative value to lower prices.
2. Choose rounding:
   - **Exact cents** keeps the normal decimal price.
   - **Whole euros** rounds the result to whole euros.
3. Click **Check changes** to open a preview that lists every item with its old and new price.
4. Review the list, then click **Change prices** to apply it.

The preview also tells you if any items are skipped because they do not have a price (for example, price-on-request items), and it warns you when an active promotion would stop being an active promotion after the change.

## Published price indices as a hint

Below the percentage field you may see a hint with published inflation figures from Statistics Netherlands (CBS). It shows several indices side by side because they answer different questions and routinely differ by whole percentage points:

- **CPI** — what households pay on average. The reference most wage and rent indexation uses.
- **HICP** — the same prices, calculated by the European method. Used to compare the Netherlands with other EU countries.
- **DPI** — what businesses charge each other for commercial services. Often closer to your own rates than consumer prices.

Click any row to copy the percentage into the field, then adjust it before you apply. The figures are not recommendations; they are a starting point for your own judgement.

## What changes and what does not

- Only the prices in your **Aanbod** are updated.
- Existing invoices, quotes, and contracts keep the prices they were created with.
- You can undo a change right after applying it. A single undo reverses the whole batch in one step.

If you undo and nothing is restored, the prices were edited again in the meantime. In that case the app skips them instead of overwriting the newer change.

## Print a price list

You can also print your catalog as a customer-facing price list. Open **Aanbod** and click **Price list** to open `/aanbod/prijslijst`.

The page lists your active items grouped into **Services**, **Products**, and **Subscriptions**. Empty groups are skipped. Turn on **Only show what is on my website** to print the same subset that appears on your site builder. Click **Print or save as PDF** to use the browser print dialog.

Prices are rendered with the same helpers used elsewhere in the app, so the sheet shows the same amounts a customer would see online. The list carries a note that all prices are exclusive of VAT and that no rights can be derived from it.
