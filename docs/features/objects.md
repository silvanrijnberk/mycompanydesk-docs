---
title: "Objects & Assets"
---

# Objects & Assets

Track rental properties, vehicles, equipment, and other business assets with full lifecycle management.

::: info
The objects module is optional. Enable it in **Company > Features** if you don't see it in the navigation.
:::

## Overview

The objects module is designed for businesses that manage physical assets — particularly rental companies, property managers, and equipment rental services. Each object represents an asset you own or manage.

## Object types

| Type | Use case |
|---|---|
| **Property** | Rental apartments, offices, commercial spaces |
| **Vehicle** | Cars, trucks, vans, construction vehicles |
| **Machine** | Industrial equipment, tools, generators |
| **Other** | Any other asset type |

## Object statuses

| Status | Description |
|---|---|
| **Available** | Ready to be rented or used |
| **Rented** | Currently rented to a customer |
| **Inactive** | Not available (maintenance, retired) |

## Creating an object

1. Go to **Objects > New Object**
2. Fill in:
   - **Name** - A clear identifier (e.g., "Apartment 3B" or "Excavator CAT 320")
   - **Type** - Property, Vehicle, Machine, or Other
3. Click **Save**

::: tip More options
The new-object form only asks for the name by default. Use **More options** to add a description, and **Purchase and status** to set purchase date, price, current value, VAT regime and status. These fields are optional for creating the object; the status defaults to available.
:::

## Object detail page

The detail page shows:

- Asset information and type
- Current status
- **Total revenue**: real paid-invoice revenue for this object, computed from the financials endpoint
- **Active contracts**: number of currently active contracts linked to this object
- **WOZ history** (for Properties) — annual WOZ values used in the Box 3 tax calculation
- **Asset summary** (for Property objects with a recorded WOZ value) - capitalized value, accumulated depreciation, current book value and the legal floor (bodemwaarde) for the building
- Linked contracts
- Rental history
- Associated invoices

### Contract summary header

Above the contracts list, a summary header gives you a quick read on the object's contractual state:

- **Total contracts** linked to this object
- **Signed contracts**: how many have been fully signed
- **Monthly active total**: combined monthly value of all active contracts, normalised from mixed-frequency agreements (weekly, quarterly, yearly)

### WOZ history (Property objects)

For objects with type **Property**, the detail page includes a WOZ history section. WOZ values (Waardering Onroerende Zaken) are the municipality-assessed property values used in Dutch Box 3 tax calculations.

- **View** annual WOZ values per year.
- **Add** new values by entering the year and the WOZ value assigned by the municipality.
- Box 3 uses the WOZ value with peildatum 1 January. Enter the value that applies to the start of the tax year.
- If no values are entered yet, the section shows an empty state prompting you to add the first one.

#### Kadaster integration

When you add a Property object with a valid Dutch address, MyCompanyDesk can import the WOZ history directly from the Kadaster. This saves manual entry and gives you the same values the municipality filed.

- **Automatic lookup**: if the WOZ history is empty, the system fetches available values from the Kadaster when you open the detail page.
- **Manual refresh**: click **Refresh** to re-pull the latest Kadaster data at any time. Imported values are marked with a "Kadaster" source badge.
- **Missing data**: if the Kadaster has no records for the address (for example, a newly built property), a notice appears and you can enter values manually.

#### Estimated current value

For properties where a Kadaster WOZ history was fetched, MyCompanyDesk projects an estimated current market value. This projection takes the most recent WOZ peildatum and applies the CBS PBK price index for the property's COROP region, giving you a value that reflects current market trends.

### Asset summary and bodemwaarde (building floor)

Property objects that are tracked as a bezitting (capital asset) show an asset summary in the detail page:

- **Acquisition value**: what was paid for the asset.
- **Capitalized value**: the business part of the acquisition value, after deducting any private-use share.
- **Accumulated depreciation**: everything written off so far.
- **Depreciation this year**: the current calendar year's write-off.
- **Book value**: the remaining value on the balance (capitalized value minus accumulated depreciation).
- **Bodemwaarde**: the legal floor below which the book value of a building may not drop. It is based on the WOZ value recorded for the property.

The bodemwaarde is shown next to the book value because the two are only meaningful together. MyCompanyDesk does not silently rewrite the posted depreciation schedule; instead, it warns you when the current schedule has already gone below the floor, or notes when the book value has exactly reached it.

If a warning appears, the correction is made by setting the acquisition's residual value to the bodemwaarde. When the object has a single acquisition, a link opens the acquisition so you or your accountant can adjust it.

This rule applies to buildings only (for example, property, apartment, office or retail). Vehicles, machines, equipment and other non-building asset types do not have a bodemwaarde floor.

### Contract signing status

Each contract row in the object detail page now shows a signing status badge alongside the active/paused badge. The colour follows the same map used on the contract detail page:

- **Signed** (green): all parties have signed
- **Partially signed** (blue): some parties have signed, others pending
- **Sent** (yellow): the signing invite has been sent, no signatures yet
- **Expired** or **Terminated** (red): the signing request is no longer valid

Fully signed contracts show a small eye icon that opens an inline preview of the signed document, so you can read the completed contract without leaving the property page.

Legacy contracts created before the e-signing feature was added do not show a signing badge. The system detects legacy contracts the same way as on the contract detail page: contracts must have signing parties, a template, or signing content to show a badge.

## Linking objects to contracts and invoices

Objects integrate with other MyCompanyDesk features:

- **Contracts** — Create a rental contract for an object, specifying the tenant (customer) and terms
- **Invoices** — Invoices can be flagged as rental invoices and linked to objects
- **Recurring invoices** — Set up automatic monthly rent invoicing per object

## Filtering

Filter your objects by:

- **Type** — Property, Vehicle, Machine, Other
- **Status** — Available, Rented, Inactive
- **Search** — Find by name or description

## Bulk actions

- **Change status** — Update availability in bulk
- **Archive** — Move to archive
- **Delete** — Remove objects

## Tips

- Use the status filter to quickly see which assets are available for rent
- Link every rental invoice to its object for complete financial tracking per asset
- Set up contracts with recurrence for automatic rent invoicing
- Check the object metrics at the top of the page for availability overview
