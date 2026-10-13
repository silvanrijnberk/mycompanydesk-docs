---
title: Change all prices at once
description: "Go to Catalog, click Prices, and use the raise simulator to see what a price change would do before you apply it."
last_verified: 2026-09-03
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

Go to **Catalog** and click **Prices** to see what you charge, what you actually received for it, and what a price change would yield.

## How it works

1. Choose what you want to change:
   - **All**: every item in the catalog.
   - **Services**, **Products** or **Subscriptions**: only items of that type.
2. Choose how much:
   - **Percentage**: raise or lower every price by a percentage.
   - **Fixed amount**: add or subtract the same amount from every price.
   - Use a negative value to lower prices.
3. Choose rounding:
   - **To the cent** keeps the normal decimal price.
   - **To the nearest euro** rounds the result to whole euros.
4. Click **Review what changes** to open a preview that lists every item with its old and new price.
5. Review the list, then click the button with the count, for example **Adjust 12 prices**, to apply it.

The preview also tells you if any items are skipped because they do not have a price (for example, price-on-request items), because they are a bundle whose price follows its components, or because the rounding makes no difference. It warns you when an active promotion would stop being an active promotion after the change. If the selection includes subscriptions, the preview also explains that existing subscribers keep their current price; the new price only applies to the next person who signs up.

## What changes and what does not

- Only the prices in your **Catalog** are updated.
- Existing invoices, quotes, and contracts keep the prices they were created with.
- Running subscriptions keep the price they were signed at. To raise existing subscribers too, change their recurring invoice.
- Right after applying, you can reverse the change with **Undo** in the notice. That reverses the whole batch in one step. If a price has been changed again in the meantime, nothing is reverted.

## Inflation hint when editing one item

When you edit a single catalog item with a fixed price, an inflation hint may appear next to the price field. It measures from the date that price was last set (or from when the item was created, if the price never changed). Undo actions do not count as a new price decision, so the hint stays anchored to a real pricing moment.

The hint shows price-index readings as clickable suggestions. Each row displays the period it covers, the percentage change, and what your current price would become if you applied it. Click a suggestion to fill that new amount into the price field. You still save the item yourself, so you always review the change before it lands.

The hint only appears in edit mode and only for items with a fixed price. Price-on-request items and brand-new items have no history to measure from, so they do not show it.

## Print a price list

You can also print your catalog as a customer-facing price list. There is no button for it in the menu: go to `/aanbod/prijslijst` in the app in your browser.

The page lists your active items grouped into **Services**, **Products**, **Packages** and **Subscriptions**, and empty groups are skipped. If your workspace has the website module, you also get the **Only what's on your website** switch, so you print exactly the subset your site builder shows. Without the website module, services and products print as one group without a header, while packages and subscriptions keep their own header. Click **Print or save as PDF** to use the browser print dialog.

Prices are rendered with the same helpers used elsewhere in the app, so the sheet shows the same amounts a customer would see online. The list carries a note that all prices are exclusive of VAT and that no rights can be derived from it.
