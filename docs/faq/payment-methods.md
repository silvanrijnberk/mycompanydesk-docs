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
    - { label: "Open payment settings", to: "/settings/betalen" }
  follow_up:
    - "How do I add my bank details?"
    - "How do I change the PDF template?"
---

To configure payment methods on documents:
1. Go to Settings and open "Betalen"
2. Enter your IBAN to offer bank transfer; filling in an IBAN enables it automatically and adds a payment QR code to your invoices
3. Toggle PayPal on and enter your PayPal email address if you want to offer it
4. Connect Mollie or Stripe if you want customers to pay online, for example with iDEAL
5. Changes on this page save automatically

The enabled methods appear at the bottom of your invoices.

## Online payment processors

You can connect your own Mollie or Stripe account so customers can pay invoices directly online. Funds go straight to your own account. MyCompanyDesk only handles the integration.

To connect a processor:
1. Go to **Settings → Betalen**
2. Under **Online betalingen**, click **Verbind Mollie** or **Verbind Stripe**
3. Follow the OAuth flow to authorize your account
4. Once connected, sent invoices include a payment link your customers can use

Mollie supports iDEAL, Bancontact, credit card, and bank transfer, ideal for Dutch and Belgian customers. Stripe Connect supports card, Apple Pay, Google Pay, and SEPA direct debit, suitable for international customers.

To disconnect, click **Loskoppelen** on the relevant card. If there are payments from the last 24 hours, a warning appears reminding you that pending webhooks may still arrive and that refunds for those payments must be handled manually. After disconnecting, customers can no longer pay via that processor.

### Mollie payment settings

Once Mollie is connected, a **Betaalknop op facturen** toggle and **Betaalmethoden** section appear on the Mollie card. The toggle turns the pay button on or off across all invoices without disconnecting. The method list, fetched live from your Mollie dashboard, lets you limit which payment methods customers see. A **Stuur testbetaling** button runs a free €1 test checkout through Mollie so you can confirm everything works end-to-end.

### Stripe payment settings

Once Stripe is connected and onboarding (KYC) is complete, a **Betaalknop op facturen** toggle and **Betaalmethoden** section appear on the Stripe card. The toggle turns the Stripe pay button on or off across all invoices without disconnecting. The method list, cross-referenced with your Stripe account capabilities, lets you limit which payment methods customers see at checkout (card, iDEAL, Bancontact, SEPA Direct Debit, PayPal, Klarna, Link by Stripe). Clearing all ticks returns to automatic method selection by Stripe Checkout. An **Open Stripe Dashboard** button deep-links you to your Stripe payment-method settings so you can verify your integration and test payments.
