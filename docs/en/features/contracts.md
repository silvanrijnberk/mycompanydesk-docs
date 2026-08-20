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

::: tip Meer opties
The new-contract form keeps optional details tidy: the **More options** section reveals extra fields for service charge amount, VAT rate, and service description. These are not required to create the contract, but you can expand them when you need them.
:::

## Rate basis

Every contract has a **Rate basis** that controls how the amount is agreed:

- **Fixed amount** -- the same amount each period, such as rent or a fixed monthly fee.
- **Hourly rate** -- you invoice the hours logged on projects linked to this contract.
- **Daily rate** -- you invoice the days worked on projects linked to this contract.
- **Fixed project price** -- a single agreed total for the whole assignment, invoiced once.

For hourly and daily contracts, the contract detail page shows a **Work under this contract** card with the agreed, invoiced and logged totals, plus the linked projects. A day is counted as 8 hours.

A fixed project price does not repeat: the contract generates one invoice and then stops.

## Contract statuses

| Status | Description |
|---|---|
| **Active** | Currently in effect, generates invoices |
| **Inactive** | Paused — no invoices generated |

## End dates

You can set an **End date** when creating or editing a contract. Leave it empty for an open-ended contract.

When an end date is set:

- The contract detail page shows the end date, or **Open-ended** if none is set.
- No invoices are generated for periods after the end date.
- The contracts list shows an **Expires soon** label when the end date is within 30 days.

## Automatic invoicing

Active contracts with a recurrence schedule automatically generate invoices at each billing period. The system:

1. Creates a draft invoice based on the contract terms
2. Applies the correct customer, amount, and description
3. Uses the same automatic invoice numbering

Generated invoices are tagged as rental invoices only when the contract is a rental contract. Service and collaboration contracts produce ordinary invoices. This affects the badge shown on the invoice, the email template used when the invoice is sent, and whether the revenue is attributed to a linked object.

You can review and send generated invoices manually, or configure auto-sending. When a contract is based on an hourly, daily or fixed project price, you also get a warning when the contract budget is exceeded or when logged hours cannot be priced because no rate was set.

### Invoice delivery and auto-invoicing notifications

If a generated invoice cannot be emailed to the customer, the app creates an **Invoice not sent** notification. This happens when the customer has no email address, your sender email is not configured, the address is blocked after a bounce or spam report, or the send fails for another reason. The notification opens the invoice so you can fix the cause and resend.

If your plan no longer includes automatic contract invoicing, the app creates an **Auto-invoicing paused** notification when contract invoices are ready but not being sent. The notification tells you how many contract invoices are waiting and since when, and points you to the subscription page to upgrade.

## Invoice period

Contracts bill for a period relative to the invoice date:

- **Current** — the period that contains the invoice date (default)
- **Previous** — the period before the invoice date
- **Next** — the period after the invoice date; legacy value kept for older rental contracts that bill in advance

The form today only lets you choose **current** or **previous**. If you have an older contract set to **next**, the API keeps that value when you save, so the contract stays editable.

## Automatic collection

For recurring contracts you can collect the billed amount automatically from the customer's stored payment mandate instead of sending a payment link by email. This requires a connected payment provider (Mollie or Stripe) and a valid customer mandate.

### Setting up automatic collection

On the contract detail page, open the **Automatic collection** card and set up the mandate. Once the mandate is valid, turn the toggle on. The system then charges each generated invoice automatically.

### Failed collection

If a charge fails or the mandate is no longer valid, you receive an "Automatic collection failed" notification. The notification links directly to the contract so you can reconnect the mandate or follow up with the customer.

## Price indexation

Recurring contracts can be adjusted for inflation or agreed yearly rises. Open the contracts list and click **Raise prices** to preview what a percentage increase would do across eligible contracts. A contract is only eligible if at least one year has passed since it started or since its last rise.

The preview shows, per contract:

- The current rate or amount per period
- The new rate or amount after the increase
- The date the contract was last adjusted

You apply the rise per contract, never in bulk, so you can skip customers you have not yet spoken to. Once applied, the change updates the stored contract terms and future invoices reflect the new amount.

::: tip Agree first
Discuss any price rise with your customer before applying it. The preview changes nothing until you click **Apply** on a specific contract.
:::

## Linking to assets

Contracts can be linked to [objects/assets](/en/features/objects) for rental management:

- Associate a contract with a property, vehicle, or piece of equipment
- Track which assets are currently rented and to whom
- View contract history per asset

## Linking to projects

Contracts can also be linked to [projects](/en/features/projects). When you create or edit a project, choose the contract in the **Contract** field. Hours you log on that project are then included on the contract's invoice.

This is useful for retainer-style or time-and-materials agreements: the contract sets the rate basis, and the linked projects supply the hours.

You can unlink a project at any time; existing hours stay on the invoice they were already added to.

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

The preview page includes a toolbar with print and download actions, and renders the signed contract directly in the browser. The signed PDF and review PDF both include the full contract body text, so every downloaded copy is self-contained.

### Sender branding on the signing page

When a recipient opens a contract to sign, the signing page carries the sender's brand:

- The sender's logo appears at the top of the page
- The page uses the sender's brand accent color
- Text and buttons automatically adjust so they stay readable against that color

This gives signers an experience that looks like it comes from the company that invited them, rather than a generic third-party page.

### Signing on the contracts list

The contracts list includes a **Signing** column showing the signing status for each contract that has e-signing enabled. Statuses appear as colored badges: draft (neutral), sent (warning), partially signed (info), and active (success).

A signing filter dropdown above the list lets you narrow the view by signing status, or filter to contracts without e-signing ("No e-signing").

::: info Legacy contracts
Contracts created before the e-signing feature was added do not show a signing card on the detail page. The system detects legacy contracts by checking whether the contract has signing parties, a template, or signing content. Only contracts created or updated after the e-signing rollout include the signing card.

Legacy contracts show a dash in the Signing column and appear under the "No e-signing" filter.
:::

### SMS verification

Signing links can require SMS verification before a party can view and sign the document. When enabled, the signer must enter a mobile number and confirm a 6-digit code sent by SMS.

- **Send code** — After entering their mobile number, the signer taps the button and receives a code
- **Verify code** — The signer enters the 6-digit code to prove access to the phone number
- **Verified badge** — Once confirmed, a "Verified" badge appears with the last four digits of the number

If the wrong code is entered, the signer can request a new one. SMS verification is configured per signing session and applies to all parties.

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

- Use contracts together with [recurring invoices](/en/features/recurring-invoices) for different billing scenarios
- Link contracts to objects for full rental management
- Set end dates to get notified before contracts expire
- Review the contracts filter to see active vs. inactive at a glance
- Filter by signing status to find contracts that still need signatures
- Add signing parties when creating a contract to enable electronic signing
