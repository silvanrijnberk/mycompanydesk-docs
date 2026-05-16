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
   - **Name** — A clear identifier (e.g., "Apartment 3B" or "Excavator CAT 320")
   - **Type** — Property, Vehicle, Machine, or Other
   - **Status** — Available, Rented, or Inactive
   - **Description** — Details about the asset
3. Click **Save**

## Object detail page

The detail page shows:

- Asset information and type
- Current status
- **WOZ history** (for Properties) — annual WOZ values used in the Box 3 tax calculation
- Linked contracts
- Rental history
- Associated invoices

### WOZ history (Property objects)

For objects with type **Property**, the detail page includes a WOZ history section. WOZ values (Waardering Onroerende Zaken) are the municipality-assessed property values used in Dutch Box 3 tax calculations.

- **View** annual WOZ values per year.
- **Add** new values by entering the year and the WOZ value assigned by the municipality.
- Box 3 uses the WOZ value with peildatum 1 January. Enter the value that applies to the start of the tax year.
- If no values are entered yet, the section shows an empty state prompting you to add the first one.

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
