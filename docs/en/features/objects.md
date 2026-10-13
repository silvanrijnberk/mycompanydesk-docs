---
title: "Assets"
description: "Track buildings, vehicles, machines and other assets: value, depreciation, rent, costs and WOZ. On Office, switched on under Modules."
---

# Assets

Keep track of what your business owns, what it is worth and what it earns: buildings and garages you rent out, your company car, machines, tools and other assets.

::: info
**Assets** is part of the Office plan. If you do not see it in the navigation, switch on **Assets & Objects** under **Settings › Modules**.
:::

## Overview

The **Assets** page lists all your assets, grouped by kind (buildings, vehicles, tools and machines, furniture, electronics, other). The key figures sit at the top: **Value now**, **Total Rent Value**, what is **Vacant**, **Costs this year** and **Depreciation this year**.

## Types

When you add an asset you pick a type: **Property / Garage**, **Apartment**, **Office**, **Retail**, **Vehicle**, **Machine**, **Equipment**, **Furniture**, **Electronics** or **Other**. Properties, apartments, offices and retail units get an address and a WOZ history.

## Statuses

| Status | Meaning |
|---|---|
| **Active** | In use (the default for a new asset) |
| **Available** | Ready to be rented out or used |
| **Occupied** | In use or rented out |
| **Maintenance** | Temporarily unavailable because of maintenance |
| **Inactive** | Not in use |
| **Sold** / **Disposed** | No longer part of your business |

An asset with a running rental contract shows as **Rented** in the list.

## Adding an asset

1. Go to **Assets** and click **Add asset**
2. Enter the **Name** (for example "Garage Utrecht, box 12") and pick the **Type**
3. Click **Save**

::: tip More details
Only the name is required. Fill in the rest whenever you like in the collapsible sections: **Address / Location** (for buildings), **Details** (reference, description, default rent), **Value** (purchase date, purchase price, current value, sale date, proceeds and VAT regime) and **Status**. The VAT regime starts at **With VAT**; for an **Apartment** (residential) it starts at **Without VAT**. Your own choice in the form always wins, and existing assets keep whatever was saved for them.
:::

## The asset page

An asset's page shows:

- At the top, the **Total Revenue** and the status, with the number of active contracts
- The key details: address (with a map link), default rent, current tenant and the purchase
- **History**: contracts, invoices, maintenance and documents in one timeline
- **WOZ history** (for buildings)
- **Business asset**: purchase value, depreciation and book value, once a purchase booked as an investment is linked to the asset
- **Mileage records** (for vehicles with trips)
- **Financial summary**: **Total Revenue**, **Total costs**, **Net cash flow** and a **Per year** breakdown
- **Action items**, such as a missing WOZ value for Box 3

### Revenue and invoices

**Total Revenue** adds up every paid invoice linked to the asset, excluding VAT:

- invoices generated from a contract attached to this asset
- invoices linked to the asset directly, such as service charges, one-off invoices and sale invoices

The Box 3 report only counts rent received and goes by the date the money came in, so the two amounts can differ; the page explains this too.

### History

**History** puts contracts, invoices, maintenance and documents in one chronological list. Through **Add** you choose **Log maintenance** (date, description, category, cost, performed by) or **Add document**. You delete maintenance and documents here; a contract or invoice is managed on its own page.

A contract still waiting for a signature shows its signing status: **Not sent**, **Pending**, **Partially signed**, **Expired** or **Terminated**. Once the contract is signed, you see whether it is active again. Older contracts that were never set up for digital signing show no signing status.

### WOZ history (buildings)

For properties, apartments, offices and retail units, the page keeps the WOZ values per year. Box 3 uses the WOZ value that applied on 1 January of that year (the peildatum).

- Add a value with the year and the WOZ value set by the municipality.
- When the asset has a valid Dutch address and the history is still empty, MyCompanyDesk fetches the values from the Kadaster by itself. **Refresh** fetches the latest data at any time; those values carry the **Kadaster** label.
- If the Kadaster has no data for the address (a new build, for example), you see a notice and enter the values yourself.

With a WOZ history from the Kadaster, the card also shows an **Estimated current value**: the latest WOZ value carried forward with the CBS house price index for the region of the property.

### Business asset and bodemwaarde

When a purchase you depreciate as an investment is linked to the asset (link the expense through the **Asset** field on the expense form), the **Business asset** block shows:

- **Purchase value**: what you paid for it
- **On the balance sheet**: the capitalised business share, after any non-deductible VAT and private use
- **Depreciated so far** and **Depreciation this year**
- **Book value**: what is still on the balance sheet
- The depreciation schedule per calendar year

For buildings, the block also shows the **Bodemwaarde**: the legal floor, based on the WOZ value, below which a building's book value may not drop. MyCompanyDesk does not quietly rewrite the schedule. If depreciation has gone below the floor you see **Over-depreciated**; if the book value sits exactly on the floor, you get a notice saying so. You fix it by setting the purchase's residual value to the bodemwaarde. When the asset has one purchase, the link **Open the purchase to adjust the residual value** opens it directly. Vehicles, machines and other assets that are not buildings have no bodemwaarde.

### Sold or disposed of

When you sell an asset, throw it away or take it out of your business otherwise, fill in the **Value** section of the form:

- **Sale date**: the date the asset left your business.
- **Proceeds (excl. VAT)**: the amount received. Leave it empty if you do not know it yet; enter 0 if you threw it away without proceeds.

Once the sale date is saved, the **Business asset** block shows a **Sold or disposed of** part with the date, the **Book value at sale**, the **Proceeds** and the **Book profit** or **Book loss**. Without proceeds you only see the book value written off, with a note that the profit or loss can only be determined once the proceeds are known.

The block also warns when the depreciation schedule still plans amounts after the sale date. Those keep landing in your profit and loss until you change the depreciation term on the purchase.

## Linking to contracts, invoices and expenses

- **Contracts**: create a rental contract for an asset, with the tenant (customer) and terms.
- **Invoices**: link an invoice to an asset directly on the invoice form, or let it come from a rental contract. Both count toward total revenue.
- **Recurring invoices**: link a recurring invoice to an asset for automatic rent invoicing.
- **Expenses**: link costs to an asset through the **Asset** field; they then count toward that asset's costs.

## Filtering

Filter the list by:

- **Kind**: the group (for example buildings or vehicles)
- **Type**: the asset type
- **Status**: a status, or **Vacant (with rent)** for assets with a rent that are not rented out now
- **Search** by name or description

**View** switches between active, archived and deleted assets.

## Bulk actions

- **Archive** and **Delete** (to the trash) in the active list
- **Restore to active** and **Move to trash** in the archive
- **Restore to archive** and **Delete permanently** in the trash

An asset with active contracts cannot be deleted.

## Tips

- Use the **Vacant (with rent)** filter to see quickly what you can rent out
- Link every rent invoice and every cost to its asset, so revenue, costs and net cash flow per asset add up
- Use recurring invoices or contracts for automatic rent invoicing
- Enter the WOZ value as of 1 January for your Box 3 return
