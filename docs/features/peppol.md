---
title: Peppol e-invoicing
---

# Peppol e-invoicing

Send invoices and credit notes as structured e-invoices over the Peppol network. Your customer receives them directly in their accounting software, without you having to rely on PDFs or email alone.

## Overview

Peppol e-invoicing is an alternative sending method next to email. When you send an invoice, you choose per invoice whether to deliver it by email or as an e-invoice via Peppol. The invoice stays the same document in MyCompanyDesk; only the delivery channel changes.

This is useful when your customer asks for e-invoices.

## Availability

Peppol e-invoicing is available on the Pro plan. Workspaces on Free or Starter do not see the e-invoice sending option.

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

## Supported document types

- **Invoice** — standard billing document
- **Credit note** — adjustment for refunds or corrections

## What your customer needs

Your customer must be reachable on the Peppol network. In practice this means their accounting software is connected to Peppol and they have shared their Peppol receiver identifier with you. MyCompanyDesk validates the receiver before sending; if the customer cannot be reached, the send fails and you can fall back to email.

## Troubleshooting

**The Peppol option does not show.** Check that your workspace is on the Pro plan and that e-invoicing is enabled in the invoice settings. Also verify that your company profile has all required fields listed above.

**Sending failed.** A failed Peppol send usually means the receiver could not be reached on the network, or one of the required invoice fields is missing. Fix the issue and retry, or send by email to keep the workflow moving.

**I enabled e-invoicing but want to turn it off.** Open the invoice settings and disable the Peppol option. Existing invoices are unaffected; you simply no longer see the Peppol send choice.

## Related

- [Invoices](/features/invoices) — creating and sending invoices
- [Settings: Plan & payments](/settings/billing) — which plans include Peppol e-invoicing
