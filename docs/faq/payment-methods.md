---
title: "Payment methods"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "payment methods"
    - "add payment method"
    - "how to pay"
    - "bank transfer"
    - "payment options"
    - "betaalmethoden"
    - "betaalmethode toevoegen"
    - "zahlungsmethoden"
    - "modes de paiement"
    - "moyens de paiement"
  actions:
    - { label: "Open payment options", to: "/company?section=paymentOptions" }
  follow_up:
    - "How do I add my bank details?"
    - "How do I change the PDF template?"
---

To configure payment methods on documents:
1. Go to Company → Payment Options
2. Enable the methods you want to offer, such as bank transfer or PayPal
3. Set the default method
4. Add the related account details and payment instructions
5. Changes in that section save automatically

The enabled methods and instructions appear on supported document templates.

## Online payment processors

You can connect your own Mollie or Stripe account so customers can pay invoices directly online. Funds go straight to your own account. MyCompanyDesk only handles the integration.

To connect a processor:
1. Go to **Money → Payments** in your workspace
2. Under **Online betalingen**, click **Verbind Mollie** or **Verbind Stripe**
3. Follow the OAuth flow to authorize your account
4. Once connected, sent invoices include a payment link your customers can use

Mollie supports iDEAL, Bancontact, credit card, and bank transfer, ideal for Dutch and Belgian customers. Stripe Connect supports card, Apple Pay, Google Pay, and SEPA direct debit, suitable for international customers.

To disconnect, click **Loskoppelen** on the relevant card. After disconnecting, customers can no longer pay via that processor.

### Mollie payment settings

Once Mollie is connected, a **Betaalknop op facturen** toggle and **Betaalmethoden** section appear on the Mollie card. The toggle turns the pay button on or off across all invoices without disconnecting. The method list, fetched live from your Mollie dashboard, lets you limit which payment methods customers see. A **Stuur testbetaling** button runs a free €1 test checkout through Mollie so you can confirm everything works end-to-end.

### Stripe payment settings

Once Stripe is connected and onboarding (KYC) is complete, a **Betaalknop op facturen** toggle and **Betaalmethoden** section appear on the Stripe card. The toggle turns the Stripe pay button on or off across all invoices without disconnecting. The method list, cross-referenced with your Stripe account capabilities, lets you limit which payment methods customers see at checkout (card, iDEAL, Bancontact, SEPA Direct Debit, PayPal, Klarna, Link by Stripe). Clearing all ticks returns to automatic method selection by Stripe Checkout. An **Open Stripe Dashboard** button deep-links you to your Stripe payment-method settings so you can verify your integration and test payments.
