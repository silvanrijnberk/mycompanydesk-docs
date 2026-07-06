---
title: Contracts
---

# Contracts

Manage recurring service agreements and rental contracts with automatic billing schedules.

## Overview

Contracts represent ongoing agreements with customers, such as monthly service contracts, rental agreements, or maintenance plans. They can generate invoices automatically on a set schedule.

::: info
The contracts module is optional. Enable it in **Settings > Onderdelen** if you don't see it in the navigation.
:::

## Creating a contract

1. Go to **Contracts > New Contract**
2. Fill in:
   - **Name**: A descriptive title (e.g., "Monthly cleaning service")
   - **Customer**: The client party to the contract
   - **Service and amount**: What you deliver and the recurring billing amount
   - **Recurrence**: How often to bill (weekly, monthly, quarterly, yearly)
   - **Start date**: When the contract begins
3. Click **Save**

A contract has no end date field; it keeps billing until you pause it. In the form you can also choose when the first invoice should be created, and whether generated invoices are sent automatically.

## Contract statuses

| Status | Description |
|---|---|
| **Active** | Currently in effect, generates invoices |
| **Paused** | On hold, no invoices generated |

At the end of its life a contract can also show as **Ended**, **Expired** or **Terminated**.

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

The contracts list page shows summary cards:

- **Active Contracts**, with the total count alongside
- **Monthly Revenue** from active contracts, normalised across billing frequencies
- **Total Contracts**
- **Next invoice**, the date the next contract invoice will be generated

Click a card to filter the list accordingly.

## Bulk actions

Select multiple contracts to **Archive** or **Delete** them at once. The Archive view offers restore or move to trash; the Trash view offers restore or permanent deletion.

## Signing

Contracts support electronic signing. You can add parties through the contract form, and each party receives a signing link via email.

When a contract has been signed, the contract detail page shows a signing card with:

- The status of each party (invited, viewed, signed, or expired)
- A **View** button that opens an inline preview of the signed document
- A download button to save the PDF

The preview page includes a toolbar with print and download actions, and renders the signed contract directly in the browser. The signed PDF and review PDF both include the full contract body text, so every downloaded copy is self-contained.

### Signing on the contracts list

The contracts list includes a **Signing** column showing the signing status for each contract that has e-signing enabled. Statuses appear as colored badges: draft (neutral), sent (warning), partially signed (info), and active (success).

A signing filter dropdown above the list lets you narrow the view by signing status, or filter to contracts without e-signing ("No e-signing").

::: info Legacy contracts
Contracts created before the e-signing feature was added do not show a signing card on the detail page. The system detects legacy contracts by checking whether the contract has signing parties, a template, or signing content. Only contracts created or updated after the e-signing rollout include the signing card.

Legacy contracts show a dash in the Signing column and appear under the "No e-signing" filter.
:::

### SMS verification

Signing links can require SMS verification before a party can view and sign the document. When enabled, the signer must enter a mobile number and confirm a 6-digit code sent by SMS.

- **Send code**: After entering their mobile number, the signer taps the button and receives a code
- **Verify code**: The signer enters the 6-digit code to prove access to the phone number
- **Verified badge**: Once confirmed, a "Verified" badge appears with the last four digits of the number

If the wrong code is entered, the signer can request a new one. You switch SMS verification on per signer when adding the parties to the contract, so you can require it for one party and not for another.

## Template versions

Contract templates support versioning so you can track changes over time. Each version is a frozen snapshot of the template content at a point in time, letting you evolve your templates without affecting contracts that were already created.

### Publishing a version

1. Go to **Contracts > Templates**
2. Find your template and click the **Versions** button
3. In the versions modal, enter:
   - **Label** :  A short identifier for the version (e.g. "v2"). If left empty the system auto-assigns a sequential label.
   - **Change note** :  A short description of what changed in this version
4. Click **Publish**

The current draft is snapshotted as a new version. Existing contracts stay pinned to the version they were created from, so publishing never rewrites historical contract text.

### Viewing version history

Each template's version history shows:

- The version label (e.g. "v1", "v2")
- The change note and publish date
- A **Current** badge on the latest published version
- An **Archived** badge on all previous versions

### How versions affect contracts

When a contract is created from a template, it pins to the version that was current at the time. If you later publish a new version of the template, existing contracts keep rendering from their pinned version. This means you can safely revise templates without altering active contracts.

## Tips

- Use contracts together with [recurring invoices](/features/recurring-invoices) for different billing scenarios
- Link contracts to objects for full rental management
- Review the status filter to see active vs. paused contracts at a glance
- Filter by signing status to find contracts that still need signatures
- Add signing parties when creating a contract to enable electronic signing
