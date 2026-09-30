---
title: Customer Portal
description: "Your customers get their own portal page for your business: invoices, quotes, contracts, appointments and messages together, with online payment."
---

# Customer Portal

The customer portal is your client's page for your business. Every invoice, quote and contract you send carries a link into it, and the full portal opens with an email login link. Together it holds their documents, appointments and messages in one secure, branded place.

## How it works

When you send an invoice, a unique **payment link** is generated. When your customer clicks this link, they land on the invoice in their portal and can:

1. **View the invoice** - See all details, line items, and totals
2. **Download the PDF** - Get a copy of the invoice
3. **Pay online** - Complete payment through the portal using the **Pay now** button
4. **Confirm payment**: Acknowledge a bank transfer (not shown for credit notes, canceled invoices, or original invoices that have been fully credited, because none of these asks the customer for payment)

Portal links open in the customer's web browser. Even when the MyCompanyDesk app is installed on the customer's phone, tapping an invoice link opens the browser, not the app.

### Two ways in

An invoice link only proves that someone received that email. It shows **their invoices** and that invoice, and nothing that acts on the customer's behalf: signing quotes, managing appointments and messaging need the full portal. The full portal opens with a login link that is emailed to the customer (see below), so it is tied to the email address your customer card has.

## Logging in with an email link

On the portal the access screen asks the customer for their email address and mails a new login link. The link works once and stays valid for one hour. It is only sent to the address the company knows from the customer card, and the screen does not reveal whether an address is known, so nobody can use it to check who your customer is.

Once the link is opened, that browser stays signed in for this customer at your company. **Log out** ends those sessions in that browser. The portal always identifies itself with your company name and branding, and its contact block shows your public business email, so customers reach the right mailbox even when their first invoice went to a private address.

## Portal features

### Overview

The overview is the home page of the portal: your branding and a greeting up top (with your own welcome text under it, if you set one), next to a fixed company card with your contact details. A short **To do** list gathers what still needs the customer (pay an invoice, sign a document, read a new message), and once everything is settled the page says so plainly: **Everything has been paid, nothing is outstanding.** If a payment is still being checked after a bank-transfer acknowledgement, the page mentions that too instead of asking for money a second time.

### Invoice list

When a customer has several invoices, the portal also shows a list with every invoice, credit note, and their current status. The "Open" and "Overdue" summary cards above the table add up the **remaining balance** per document, not the gross total. So a €1,000 invoice with a €400 partial payment contributes €600 to the open amount, and a credit note that has already been applied to its parent invoice contributes €0 so it is not subtracted twice. "Overdue" is derived from the due date: any sent or open invoice with a due date before today is counted there, so the card stays current even when invoices rarely carry the legacy `overdue` status.

Draft invoices never appear in the portal list. A portal link is only generated when an invoice is sent, so unsent drafts have no customer-facing link and cannot be viewed in the portal.

### Invoice view

The invoice opens in the portal design: your company block at the top, the invoice details such as date, due date and invoice number, and below that a payment panel that puts the two ways to pay behind tabs: **Pay online** (the Mollie or Stripe buttons, when connected) and **Bank transfer**, with the payment reference the customer quotes and a QR code, so paying without the online buttons stays possible. Next to that, the panel keeps showing what has already been paid, any credit applied, and the remaining balance.

On the same page sits the conversation with the customer: a **Questions about this invoice** ask box next to the detail, so a question about this exact invoice is asked and answered in one thread. The customer can also download the PDF here, and the same pattern repeats under a quote, contract, document or appointment.

### Payment

Customers can pay directly through the portal. If you have connected Mollie or Stripe, pay buttons appear on the invoice view so customers can complete payment in one click. Pay buttons and the total amount due are hidden for credit notes, canceled invoices, and original invoices that have been fully credited, because none of these asks the customer for money. For invoices with partial payments or credit notes, the portal shows the amount already received, any credit applied, and the balance still due before the customer pays, so the pay button amount matches the remaining outstanding amount. When payment is confirmed, the invoice status in your dashboard automatically updates to **Paid**. The portal also tells the customer the truth after a Mollie or iDEAL return: if the payment provider has not yet confirmed the payment, the page says so instead of pretending the payment is being processed, and the customer can try again.

With Mollie or Stripe connected, the invoice and reminder emails lead with a **Pay now** button, followed by **View invoice** for customers who want to look first. The button opens the portal with a direct-pay flag, which starts the payment right away and forwards the customer to the payment page. Three guarantees come with that design:

- **The payment only starts in a real browser.** The portal page starts it when the customer opens the mail link, so link scanners that preview email (corporate mail filters and similar) never create a payment on their own, and every check (already paid, withdrawn, credit note, "I have paid" awaiting confirmation) stays on the payment request itself.
- **A background tab does not pay on its own.** When the mail was opened in a background tab earlier, the payment starts only when the customer actually looks at the portal page.
- **Paid invoices stop asking.** An invoice that is already paid, canceled, or where a payment is still awaiting the provider's confirmation gets no Pay now button, and the mail opens the portal without one.

The scan-to-pay QR code on the invoice PDF uses the same fixed link, so it keeps working, unlike one-time checkout URLs that expire in the mail.

#### Mollie payment controls

Once Mollie is connected, you get a **Betaalknop op facturen** toggle in your workspace under **Money → Payments → Online betalingen**. Turn it on to add a Mollie **Pay now** button to every outgoing invoice. Turn it off and the button disappears without disconnecting Mollie.

Below the toggle is a **Betaalmethoden** section listing every payment method enabled in your Mollie dashboard (iDEAL, Bancontact, credit card, and more). By default all methods are shown to customers. Tick specific methods to narrow the set, only those appear on your invoices. Clear all ticks to go back to "show everything."

A **Stuur testbetaling** button lets you walk a free €1 test checkout through Mollie, so you can confirm everything works before your customers see it. No real money moves.

#### Stripe payment controls

Once Stripe is connected, you get a **Betaalknop op facturen** toggle in your workspace under **Money → Payments → Online betalingen**. Turn it on to add a Stripe **Pay now** button to every outgoing invoice. Turn it off and the button disappears without disconnecting Stripe. The toggle is only available once Stripe onboarding (KYC) is complete.

Below the toggle is a **Betaalmethoden** section listing every supported payment method cross-referenced with your Stripe account capabilities (card, iDEAL, Bancontact, SEPA Direct Debit, PayPal, Klarna, and Link by Stripe). By default Stripe Checkout automatically picks the right method per customer. Tick specific methods to limit what customers see, only those appear at checkout. Clear all ticks to return to automatic selection.

An **Open Stripe Dashboard** button deep-links you to your Stripe payment-method settings so you can verify your integration and test payments directly in Stripe.

### Quotes and contracts

The **Documents** tab lists what this customer has received from you: quotes, contracts and other signable documents. Documents waiting for a signature come first, with a **View and sign** action; a quote shows until its validity date, and statuses follow the flow of the document (received, accepted, declined, expired, signed). Signing happens on a secured signing page, and it asks for an SMS code when you require one for the document.

The signing page sits in the same jacket as the rest of the portal: your name at the top, the document, a step line (read, sign, confirm) and one consent sentence, **I agree to this quote and the terms of {company}** for a quote, before the button says **Sign and send**. The signature itself stays as it was: draw or type the name, with a confirmation email and the PDF as download after signing. The signing page also carries the same ask box as every other page in the portal, so a question about this document ends up in a thread instead of a side channel.

### Appointments

The portal lists the upcoming and past appointments belonging to this customer, including the seats they signed up for on a group session (see [Online appointments](/en/features/site-bookings)). Appointments can be added to the customer's own calendar, and rescheduling or cancelling goes through the same page the confirmation email refers to. Appointments that were not booked with this customer's email address stay private.

### Questions per document

Every view in the portal carries its own conversation: under an invoice there is **Questions about this invoice**, under a quote **Questions about this quote**, and the same pattern for contracts, other documents and appointments. The customer writes a question, it lands in your inbox inside the app, and your reply arrives both in the thread and in the customer's email. A question is never answered to a different item: each thread belongs to the document it was opened from.

Asking a question needs the full portal. Someone who arrives through an invoice payment link alone sees where the door is: the portal offers to email the login link to the address your customer card has, and the ask box explains that questions are asked in the full portal. Portal messages without an email signature and without quoted history underneath keep their shape: the reply that lands in your inbox reads as your customer wrote it.

### Messages

The messages tab stays the direct line for everything that is not tied to one document. The customer writes a question or note, it lands in your inbox inside the app, and your reply arrives both in the portal and in the customer's email. Customers without an email address on their record see a hint to call or mail you instead.

### Branding

The customer portal uses your company branding:

- Company logo
- Brand colour
- Company information

This creates a professional, consistent experience for your customers.

### The look of the portal

Under **Settings → Customer portal** (in Dutch: Klantportaal) you choose how it all looks, without extra work: logo, colour and company data already have their own place, and they carry over. Here you set:

- **Style**: five styles, each derived from your brand colour, so a pale or almost black brand colour turns out the same way for your customer as in the preview. **Calm** (white, your colour only in buttons and accents), **Warm** (soft paper and rounded shapes), **Colour** (your colour in the header and the first task), **Sharp** (angular and businesslike, a clear grid) or **Evening** (a dark header with large lettering). Each tile in the picker carries a live miniature in that style.
- **Default look**: light or dark, or left on **follow the customer's device** (the customer can still switch it themselves).
- **Welcome text**: a short line under the greeting. If you leave it empty, something fitting stands there instead.
- **Your photo on the company card**: with a profile photo, the contact card shows you with your name instead of the company data. Your logo stays at the top.

Next to the settings stands the live preview: the real portal overview with sample data, at the width your customer gets, exactly as he sees it. Company card contents and the portal link point to their own places: logo and colour sit under **Appearance**, the business data under **Company details**.

Sending a customer their login link, or signing a single customer out everywhere, happens on the customer page under the **Customer portal** block.

## Frozen invoice copy

The invoice view and PDF download are rendered from a snapshot taken when the invoice is sent. That snapshot freezes your company details, customer details, document language, and branding as they were at send time. Customers therefore see the invoice exactly as it was sent, even if you later update your workspace settings or the customer record. Drafts do not have a snapshot yet and cannot be viewed in the portal, because a portal link is only generated when the invoice is sent.

## Access security

Each portal link is:

- **Unique** - Generated per invoice
- **Token-based** - Secured with a unique access token
- **Invoice-specific** - Only shows the specific invoice

Customers don't need a MyCompanyDesk account to view and pay invoices. Every portal session is pinned to one customer at one company by the server, so a session opened at one business never shows documents from another, and portal pages are always sent without caching so personal data never sits in shared caches.

## Customer event tracking

MyCompanyDesk tracks customer interactions with the portal:

- When the customer opens the invoice
- When they download the PDF
- When they initiate payment
- When payment is confirmed

This helps you understand customer engagement and follow up effectively.

## Tips

- Include a personal note in your invoice email to encourage portal use
- The portal works on all devices - mobile, tablet, and desktop
- Payment confirmations are sent to both you and the customer
- Check the customer event history on the invoice detail page to see portal interactions