---
title: Peppol e-invoicing
---

# Peppol e-invoicing

Send invoices and credit notes as structured e-invoices over the Peppol network. Your customer receives them directly in their accounting software, without you having to rely on PDFs or email alone.

## Overview

Peppol e-invoicing lets you send invoices and credit notes as structured e-invoices over the Peppol network, and receive purchase invoices from suppliers the same way. When you send, you choose per invoice whether to deliver it by email or as an e-invoice via Peppol. The invoice stays the same document in MyCompanyDesk; only the delivery channel changes.

Sending is useful when your customer asks for e-invoices. Receiving puts supplier invoices straight into your expenses as drafts, ready for review.

## Availability

Peppol e-invoicing is available on the Pro plan. Workspaces on Free or Starter do not see the e-invoice sending or receiving options.

## Before you can send

Before the first Peppol send, MyCompanyDesk needs your company details. These are used to register you on the Peppol network via the connected access point:

- Company name
- Chamber of Commerce number (KVK)
- VAT number
- IBAN
- Business address (street, postal code, city)

If any of these are missing, the invoice settings page will ask you to complete them before you can enable e-invoicing. Your existing company profile fields are reused, so you do not enter them twice.

When you enable e-invoicing, you consent to registering your KVK number, VAT number and business address with the Peppol access point. MyCompanyDesk uses a Recommand access point to connect to the network.

## Sending an e-invoice

1. Create an invoice or credit note as usual
2. Open the detail page
3. Click **Send**
4. Choose **E-invoice (Peppol)** as the delivery method
5. Review the preview
6. Click **Send e-invoice via Peppol**

The invoice is delivered digitally to your customer's accounting system. A successful delivery is confirmed in MyCompanyDesk; if delivery fails, you will see an error and you can retry or send by email instead.

Email and Peppol are not mutually exclusive. You can send by email today and as an e-invoice tomorrow, choosing per invoice what fits the customer.

## Receiving e-invoices

When receiving is enabled, suppliers can send you e-invoices over Peppol. MyCompanyDesk turns each incoming e-invoice into a draft expense prefilled with the supplier, amount, VAT and date. The draft appears in your expenses for review; you can check, edit and book it the same way as any other expense.

### Availability

Receiving is part of Peppol e-invoicing and is available on the Pro plan. You must already have e-invoicing sending enabled before you can turn receiving on.

### Before you can receive

Make sure your company profile has the same details required for sending:

- Company name
- Chamber of Commerce number (KVK)
- VAT number
- IBAN
- Business address (street, postal code, city)

When you enable receiving, your KVK number and VAT number are registered as a Peppol receiver. A company can only receive through one accounting package at a time, because the same KVK/VAT cannot be registered at multiple providers.

### Enabling receiving

1. Open **Settings > Invoices** (`/settings/facturen`)
2. In the Peppol section, click **Enable receiving**
3. Confirm that your KVK/VAT may be registered as a receiver on the Peppol network

Once enabled, incoming e-invoices arrive automatically as draft expenses. There is no manual import step.

### Reviewing received e-invoices

Each e-invoice lands as a draft expense under **Expenses**. The draft is prefilled with the supplier, description, amount, VAT and invoice date from the incoming e-invoice. Review the details, attach a receipt if needed, and save it as a regular expense.

### Disabling receiving

Open **Settings > Invoices**, go to the Peppol section and click **Disable receiving**. You will stop receiving new e-invoices via Peppol, but existing draft and booked expenses stay unchanged. You can re-enable receiving at any time.

## Disabling Peppol e-invoicing

If you no longer want to send or receive e-invoices through MyCompanyDesk, you can disable Peppol e-invoicing entirely. This removes your company's registration from the Peppol network and frees your identifiers for use elsewhere. Invoices you already sent and expenses you already booked stay unchanged.

To disable Peppol e-invoicing:

1. Open **Settings > Invoices** (`/settings/facturen`)
2. In the Peppol section, click **Disable e-invoicing**
3. Confirm that you want to deregister from the Peppol network

After you confirm, sending and receiving e-invoices stops immediately. If you later want to use Peppol again, you can re-enable e-invoicing from the same page; you will need to complete identity verification again because your previous registration has been removed.

## Supported document types

- **Invoice** — standard billing document
- **Credit note** — adjustment for refunds or corrections

## What your customer needs

Your customer must be reachable on the Peppol network. In practice this means their accounting software is connected to Peppol and they have shared their Peppol receiver identifier with you. MyCompanyDesk validates the receiver before sending; if the customer cannot be reached, the send fails and you can fall back to email.

## Troubleshooting

**The Peppol option does not show.** Check that your workspace is on the Pro plan and that e-invoicing is enabled in the invoice settings. Also verify that your company profile has all required fields listed above.

**Sending failed.** A failed Peppol send usually means the receiver could not be reached on the network, or one of the required invoice fields is missing. Fix the issue and retry, or send by email to keep the workflow moving.

**I enabled e-invoicing but want to turn it off.** Open the invoice settings and click **Disable e-invoicing**. This removes your Peppol registration and stops both sending and receiving. Existing invoices and booked expenses stay unaffected. If you re-enable later, you will need to verify your identity again.

**Receiving failed to enable with a conflict error.** Your KVK number or VAT number is already registered for Peppol receiving at another accounting package or provider. Disable receiving there first, then enable it in MyCompanyDesk. Until then, you can still send e-invoices from MyCompanyDesk.

**A received e-invoice looks wrong.** Open the draft expense, correct the supplier, amount, VAT or description, and save it. The original e-invoice data is kept in the expense notes for reference.

**I disabled receiving but drafts still appear.** Drafts that arrived before you disabled receiving remain in your expenses; disabling only stops new e-invoices from coming in.

## Related

- [Invoices](/features/invoices) — creating and sending invoices
- [Settings: Plan & payments](/settings/billing) — which plans include Peppol e-invoicing
