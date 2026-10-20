---
title: Contracts
description: "Manage service agreements and rental contracts, have them signed online and let them generate invoices on a set schedule (Office)."
---

# Contracts

Manage recurring service agreements and rental contracts with automatic billing schedules.

## Overview

Contracts represent ongoing agreements with customers, such as monthly service contracts, rental agreements, or maintenance plans. They can generate invoices automatically on a set schedule.

::: info
Contracts are part of Office and an optional module. Switch it on under **Settings › Modules** (the **Contracts** row) if you don't see **Contracts** in the navigation.
:::

## Creating a contract

1. Go to **Contracts** and click **Create**
2. Fill in:
   - **Subject**: service, rental or collaboration
   - **Customer**: the client party to the contract
   - **Contract Name**: a descriptive title (e.g., "Monthly cleaning service")
   - **How is the price agreed?**: see [Rate basis](#rate-basis) below
   - **Amount (excl. VAT)** and **VAT Rate**
   - **Recurrence**: weekly, monthly, quarterly or yearly
   - **Start date**, an optional **End date**, and the date of the **First Invoice**
   - **Which period does the invoice cover?**: see [Invoice period](#invoice-period)
3. Click **Save**

You can also start a contract from a quote: the lines carry over, so an accepted quote becomes a contract without retyping it.

::: tip More options
The new-contract form keeps optional details tidy: the **More options** section reveals extra fields such as a service charge with its own amount and VAT rate. These are not required to create the contract, but you can expand them when you need them.
:::

The form also picks the matching template for you: when exactly one contract template fits the contract, it is already selected. No template fits? A note under the form says the contract will carry no terms, so you cannot overlook it.

## Rate basis

Every contract answers **How is the price agreed?**:

- **Fixed amount**: the same amount each period, such as rent or a fixed monthly fee.
- **Hourly rate**: you invoice the hours logged on projects linked to this contract.
- **Daily rate**: you invoice the days worked on projects linked to this contract.
- **Fixed project price**: a single agreed total for the whole assignment, invoiced once. A one-off assignment like this needs no invoice date on the contract.

For hourly and daily contracts, the contract detail page shows a **Work under this contract** card with the agreed, invoiced and logged totals, plus the linked projects. A day is counted as 8 hours.

A fixed project price does not repeat: the contract generates one invoice and then stops.

## Contract statuses

| Status | Description |
| --- | --- |
| **Active** | Currently in effect, generates invoices |
| **Paused** | No invoices are generated until you activate it again |
| **Ended** | The end date has passed and the last period has been invoiced |
| **Terminated** | You ended the agreement with **Terminate agreement** |

Invoices that a contract generates are always created in the workspace that owns the contract.

## Pausing, ending or terminating a contract

You can stop an active contract in several ways:

- **Pause**: the contract stays open but stops generating invoices. **Activate** it again at any time to resume billing. Periods that fell entirely within the pause are not invoiced afterwards.
- **Set an end date**: the contract runs until that date and then automatically becomes **Ended**. No invoices are generated for any period that ends after the end date.
- **Terminate agreement**: ends the agreement for good. A terminated contract cannot be terminated a second time.

When you edit an active contract and add an end date, the app warns that future invoices will stop. If you remove the end date before it is reached, the contract resumes normal invoicing.

## End dates

You can set an **End date** when creating or editing a contract. Leave it empty for an open-ended contract.

When an end date is set:

- The contract detail page shows the end date, or **Open-ended** if none is set.
- No invoices are generated for any period that ends after the end date.
- The contracts list and the contract show an **Expires soon** label when the end date is within 30 days, and **Extend end date** lets you move it.
- When the end date passes and the last period has been invoiced, the status changes to **Ended** automatically.

## Automatic invoicing

A contract that is not signed yet shows **Waiting for signature** in the list and generates no invoice: the first invoice only comes when the contract has actually been signed.

Active contracts with a recurrence schedule automatically generate invoices at each billing period. The system:

1. Creates an invoice based on the contract terms
2. Applies the correct customer, amount, and description
3. Uses the same automatic invoice numbering

On the contract, the **Automatic invoicing** card answers **What happens to the invoice?**:

- **Draft**: the invoice stays as a draft. You check and send it yourself.
- **Send**: the invoice is automatically emailed to the customer.
- **Collect**: the invoice is automatically collected via the saved payment mandate (see [Automatic collection](#automatic-collection)).

Generated invoices are tagged as rental invoices only when the contract is a rental contract. Service and collaboration contracts produce ordinary invoices. This affects the badge shown on the invoice, the email template used when the invoice is sent, and whether the revenue is attributed to a linked asset.

When a contract is based on an hourly, daily or fixed project price, you also get a warning when the contract budget is exceeded or when logged hours cannot be priced because no rate was set.

### Invoice delivery and auto-invoicing notifications

If a generated invoice cannot be emailed to the customer, the app creates an **Invoice didn't reach the customer** notification. This happens when the customer has no email address, your sender email is not configured, the address is blocked after a bounce or spam report, or the send fails for another reason. The notification opens the invoice so you can fix the cause and resend.

If your workspace is no longer on Office (for example after the trial ends), the app creates an **Automatic invoicing has stopped** notification when contract invoices are ready but not being sent. The notification tells you how many contract invoices are waiting and since when, and points you to the subscription page.

## Invoice period

Under **Which period does the invoice cover?** you choose which period a contract invoice bills, relative to the invoice date:

- **The one of the invoice date**: the period that contains the invoice date (default)
- **The previous one (in arrears)**: the period before the invoice date
- **The next one (in advance)**: the period after the invoice date

The form shows an example of the line as it will appear on the invoice. A contract that bills in arrears never covers a period that starts before its start date, and the period that contains the end date still gets its invoice afterwards.

## Automatic collection

For recurring contracts you can collect the billed amount automatically from the customer's stored payment mandate instead of sending a payment link by email. This requires a connected payment provider (Mollie or Stripe, under **Settings › Payment**) and a valid customer mandate.

### Setting up automatic collection

On the contract detail page, click **Set up automatic direct debit** and let the customer authorise the mandate. Once the mandate is valid, choose **Collect** under **Automatic invoicing**. The system then charges each generated invoice automatically.

### Failed collection

If a charge fails or the mandate is no longer valid, you receive an **Automatic direct debit failed** notification. The notification links directly to the contract so you can set up the mandate again or follow up with the customer.

## Price indexation

Recurring contracts can be adjusted for inflation or agreed yearly rises. Open the contracts list and choose **Raise prices** in the menu at the top to preview what a percentage increase would do across eligible contracts. A contract is only eligible if at least one year has passed since it started or since its last rise.

The preview shows, per contract:

- The current rate or amount per period
- The new rate or amount after the increase
- The date the contract was last adjusted

You apply the rise per contract, never in bulk, so you can skip customers you have not yet spoken to. Once applied, the change updates the stored contract terms and future invoices reflect the new amount.

::: tip Agree first
Discuss any price rise with your customer before applying it. The preview changes nothing until you click **Apply** on a specific contract.
:::

### Automatic yearly increases

A contract that gets a yearly rise by agreement can carry that rise out itself. Open the contract and set up the **Yearly increase**:

- **Increase by**: **CPI (CBS)**, the Dutch consumer price figure, or a **Fixed percentage** you choose yourself.
- **Every year on**: the day and month the increase takes effect each year.
- **Email client**: the client or tenant is emailed ahead of time from your own email address; you choose how many months in advance.

The eligibility rule is the app's own: it works on a running contract with a fixed amount per period. Each year, about a week before the announcement is due, you get told what the planned increase adds up to, and you can **Skip this year** with one click. Do nothing, and both steps happen on their own: the client gets the announcement email first, and the price only changes after that email went out. Invoices for periods before the start date keep the old price; periods from the start date on use the new one. If the announcement email cannot be sent before the start date, the increase does not go ahead and a notification tells you why.

A manual increase with a future start date, applied from **Raise prices** on the contracts list, follows the same schedule but without an announcement email.

## Linking to assets

Contracts can be linked to [assets](/en/features/objects) for rental management:

- Associate a contract with a property, vehicle, or piece of equipment
- Track which assets are currently rented and to whom
- View contract history per asset

## Linking to projects

Contracts can also be linked to [projects](/en/features/projects). When you create or edit a project, choose the contract in the **Contract** field. Hours you log on that project are then included on the contract's invoice. Archived contracts still appear in the dropdown, labelled with **(archived)** after the name, so you can keep an existing link or pick an older agreement when needed.

This is useful for retainer-style or time-and-materials agreements: the contract sets the rate basis, and the linked projects supply the hours.

You can unlink a project at any time; existing hours stay on the invoice they were already added to.

## The contracts list

The tabs above the list show **All**, **Awaiting signature**, **Draft** and **Running**. The summary at the top shows the **Monthly Revenue** of your recurring contracts, the work on an **Hourly basis** that has not been invoiced yet, and the **Next invoice**. The filter panel narrows the list by status (active, paused, ended), recurrence and signing status.

## Bulk actions

- **Archive**: move contracts to the archive
- **Delete**: move contracts to the trash

In the archive you use **Restore to active** or **Move to trash**; in the trash **Restore to archive** or **Delete permanently**.

## Signing

Contracts support electronic signing. You add parties through the contract form and send the contract with **Send for signing**; each party receives a signing link via email. Sending opens a send sheet first, with the recipient, the subject and the text of the email as the server composes it: nothing is sent until you press **Send**. **Send link** and **Resend** on the signing card open the same sheet, so every send shows its email first.

When a contract has been signed, the contract detail page shows a signing card with:

- The status of each party (invited, viewed, signed, or expired)
- A **View** button that opens an inline preview of the signed document
- The recorded fingerprint (SHA-256) of the signed content, so you and your customer can prove later that the PDF has not changed since signing; a public verification page checks a signed PDF against it
- A download button to save the PDF

The preview page includes a toolbar with print and download actions, and renders the signed contract directly in the browser. The signed PDF and review PDF both include the full contract body text, so every downloaded copy is self-contained.

### Sender branding on the signing page

When a recipient opens a contract to sign, the signing page carries the sender's brand:

- The sender's logo appears at the top of the page
- The page uses the sender's brand accent color
- Text and buttons automatically adjust so they stay readable against that color

This gives signers an experience that looks like it comes from the company that invited them, rather than a generic third-party page.

### Signing on the contracts list

The contracts list includes a **Signing** column showing the signing status for each contract that has e-signing enabled. Statuses appear as colored badges: **Not sent**, **Pending**, **Partially signed** and **Signed**.

The signing filter in the filter panel lets you narrow the view by signing status, or filter to contracts without electronic signing (**No e-signing**). Contracts without signing parties, such as older contracts, show a dash in the Signing column and appear under that filter.

### SMS verification

Per party you can switch on **Require SMS verification**. That signer must then confirm a code sent by SMS before the signature is valid; the phone number is entered while signing.

- **Send code**: after entering their mobile number, the signer taps the button and receives a 6-digit code
- **Verify code**: the signer enters the code to prove access to the phone number
- **Verified badge**: once confirmed, a "Verified" badge appears with the last four digits of the number

If the wrong code is entered, the signer can request a new one. The SMS confirmation is recorded on the signed PDF.

## Template versions

Contract templates live under **Contract templates**, which you open from the menu at the top of the contracts list. You can give a template versions to keep track of how its text changed.

### Publishing a version

1. Open **Contract templates**
2. Find your template and click **Versions**
3. Under **Publish current draft as a new version**, enter:
   - **Label**: a short identifier for the version (e.g. "v2"). If left empty, the app assigns the next number itself.
   - **Change note**: a short description of what changed in this version
4. Click **Publish**

### Viewing version history

Each template's version history shows:

- The version label (e.g. "v1", "v2")
- The change note and publish date
- A **Current** badge on the latest published version
- An **Archived** badge on all previous versions

### How versions affect contracts

A version is a name and a note on the current text, not a separate copy: new contracts always use the most recent template text, even if you keep editing after publishing. Contracts that were already created keep their own, fixed text and never change along with the template. You can safely revise templates without altering existing contracts.

## Tips

- Use contracts together with [recurring invoices](/en/features/recurring-invoices) for different billing scenarios
- Link contracts to assets for full rental management
- Set end dates to get notified before contracts expire; a contract ends automatically after its end date
- Pause a contract instead of setting an end date if you want to stop and resume billing later
- Filter by signing status to find contracts that still need signatures
- Add signing parties when creating a contract to enable electronic signing
