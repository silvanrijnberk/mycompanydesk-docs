---
title: Customer Portal
---

# Customer Portal

The customer portal lets your clients view and pay invoices online through a secure, branded interface.

## How it works

When you send an invoice, a unique **payment link** is generated. When your customer clicks this link, they're taken to the customer portal where they can:

1. **View the invoice** — See all details, line items, and totals
2. **Download the PDF** — Get a copy of the invoice
3. **Pay online** — Complete payment through the portal
4. **Confirm payment** — Acknowledge a bank transfer

## Portal features

### Invoice view

The portal shows a clean, branded view of the invoice including:

- Your company logo and branding
- Invoice number and date
- Line items with descriptions and amounts
- VAT breakdown
- Total amount due
- Due date

### Payment

Customers can pay directly through the portal. If you have connected Mollie or Stripe, pay buttons appear on the invoice view so customers can complete payment in one click. When payment is confirmed, the invoice status in your dashboard automatically updates to **Paid**.

#### Mollie payment controls

Once Mollie is connected, you get a **Betaalknop op facturen** toggle in your workspace under **Money → Payments → Online betalingen**. Turn it on to add a Mollie pay button to every outgoing invoice. Turn it off and the button disappears without disconnecting Mollie.

Below the toggle is a **Betaalmethoden** section listing every payment method enabled in your Mollie dashboard (iDEAL, Bancontact, credit card, and more). By default all methods are shown to customers. Tick specific methods to narrow the set, only those appear on your invoices. Clear all ticks to go back to "show everything."

A **Stuur testbetaling** button lets you walk a free €1 test checkout through Mollie, so you can confirm everything works before your customers see it. No real money moves.

#### Stripe payment controls

Once Stripe is connected, you get a **Betaalknop op facturen** toggle in your workspace under **Money → Payments → Online betalingen**. Turn it on to add a Stripe pay button to every outgoing invoice. Turn it off and the button disappears without disconnecting Stripe. The toggle is only available once Stripe onboarding (KYC) is complete.

Below the toggle is a **Betaalmethoden** section listing every supported payment method cross-referenced with your Stripe account capabilities (card, iDEAL, Bancontact, SEPA Direct Debit, PayPal, Klarna, and Link by Stripe). By default Stripe Checkout automatically picks the right method per customer. Tick specific methods to limit what customers see, only those appear at checkout. Clear all ticks to return to automatic selection.

An **Open Stripe Dashboard** button deep-links you to your Stripe payment-method settings so you can verify your integration and test payments directly in Stripe.

### Branding

The customer portal uses your company branding:

- Company logo
- Accent color
- Company information

This creates a professional, consistent experience for your customers.

## Access security

Each portal link is:

- **Unique** — Generated per invoice
- **Token-based** — Secured with a unique access token
- **Invoice-specific** — Only shows the specific invoice

Customers don't need a MyCompanyDesk account to view and pay invoices.

## Customer event tracking

MyCompanyDesk tracks customer interactions with the portal:

- When the customer opens the invoice
- When they download the PDF
- When they initiate payment
- When payment is confirmed

This helps you understand customer engagement and follow up effectively.

## Tips

- Include a personal note in your invoice email to encourage portal use
- The portal works on all devices — mobile, tablet, and desktop
- Payment confirmations are sent to both you and the customer
- Check the customer event history on the invoice detail page to see portal interactions
