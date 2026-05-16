---
title: Contracts
---

# Contracts

Manage recurring service agreements and rental contracts with automatic billing schedules.

## Overview

Contracts represent ongoing agreements with customers — such as monthly service contracts, rental agreements, or maintenance plans. They can generate invoices automatically on a set schedule.

::: info
The contracts module is optional. Enable it in **Company > Features** if you don't see it in the navigation.
:::

## Creating a contract

1. Go to **Contracts > New Contract**
2. Fill in:
   - **Name** — A descriptive title (e.g., "Monthly cleaning service")
   - **Customer** — The client party to the contract
   - **Amount** — The recurring billing amount
   - **Recurrence** — How often to bill (weekly, monthly, quarterly, yearly)
   - **Start date** — When the contract begins
   - **End date** — Optional end date
   - **Description** — Terms and details
3. Click **Save**

## Contract statuses

| Status | Description |
|---|---|
| **Active** | Currently in effect, generates invoices |
| **Inactive** | Paused — no invoices generated |

## Automatic invoicing

Active contracts with a recurrence schedule automatically generate invoices at each billing period. The system:

1. Creates a draft invoice based on the contract terms
2. Applies the correct customer, amount, and description
3. Follows your invoice numbering settings

You can review and send generated invoices manually, or configure auto-sending.

## Linking to assets

Contracts can be linked to [objects/assets](/features/objects) for rental management:

- Associate a contract with a property, vehicle, or piece of equipment
- Track which assets are currently rented and to whom
- View contract history per asset

## Metrics

The contracts list page shows summary metrics:

- Total active contracts
- Total contract value
- Contracts by recurrence type

## Bulk actions

- **Change status** — Activate or deactivate multiple contracts
- **Archive** — Move to archive
- **Restore** — Bring back archived contracts

## Signing

Contracts support electronic signing. You can add parties through the contract form, and each party receives a signing link via email.

When a contract has been signed, the contract detail page shows a signing card with:

- The status of each party (invited, viewed, signed, or expired)
- A **View** button that opens an inline preview of the signed document
- A download button to save the PDF

The preview page includes a toolbar with print and download actions, and renders the signed contract directly in the browser.

### Signing on the contracts list

The contracts list includes a **Signing** column showing the signing status for each contract that has e-signing enabled. Statuses appear as colored badges: draft (neutral), sent (warning), partially signed (info), and active (success).

A signing filter dropdown above the list lets you narrow the view by signing status, or filter to contracts without e-signing ("No e-signing").

::: info Legacy contracts
Contracts created before the e-signing feature was added do not show a signing card on the detail page. The system detects legacy contracts by checking whether the contract has signing parties, a template, or signing content. Only contracts created or updated after the e-signing rollout include the signing card.

Legacy contracts show a dash in the Signing column and appear under the "No e-signing" filter.
:::

## Tips

- Use contracts together with [recurring invoices](/features/recurring-invoices) for different billing scenarios
- Link contracts to objects for full rental management
- Set end dates to get notified before contracts expire
- Review the contracts filter to see active vs. inactive at a glance
- Filter by signing status to find contracts that still need signatures
- Add signing parties when creating a contract to enable electronic signing
