---
title: Quotes
---

# Quotes

Send professional quotations to potential customers and convert them to invoices when accepted.

## Overview

The quotes section lets you create, send, and track quotations. Quotes follow a similar workflow to invoices but are non-binding estimates.

## Creating a quote

1. Go to **Quotes > New Quote**
2. Select or create a **customer**
3. Add **line items** with descriptions, quantities, prices, and VAT rates
4. Set a **valid until** date (how long the quote is valid)
5. Add optional **notes**
6. Click **Save**

The quote form is similar to the invoice form — if you know how to create an invoice, you already know how to create a quote.

## Sending a quote

1. Open the quote detail page
2. Click **Send**
3. Review the email preview
4. Click **Send** to deliver it to your customer

The send dialog has toggles for the **View button**, **Download button**, and **PDF attachment**. By default the PDF is attached so the customer can review it.

At least one of these must be turned on for a quote, otherwise the customer has no way to open the quote and the **Send** button is disabled. Invoices always keep a customer portal button as a fallback, but quotes do not.

If your workspace has general terms in Documents, the email preview also shows an **Include general terms** toggle. It is on by default for quotes. When enabled, the current terms PDF is attached to the email and the send is recorded as the provision event on the terms document.

## Customer activity

Once a quote has been emailed, the quote detail page shows a set of engagement pills that mirror the activity log already used for invoices:

- **Sent**: the email left your workspace.
- **Opened**: the customer opened the email (tracked by a pixel embedded in the quote send).
- **Viewed**: the customer opened the public quote page.
- **Downloaded**: the customer downloaded the quote PDF.

A quote never shows a **Paid** pill, because quotes are not paid directly; a signed quote is shown in its own signing card instead.

The pills remain off until the quote is actually emailed. Before that, the activity card stays hidden so it does not clutter the page.

Events are stored in the same `invoice_customer_events` log as invoice events, scoped by an `entity_type` column so quote events are kept separate from invoice events.

Source: `apps/api/src/modules/invoices/customer-events.service.js` - `recordEvent`, `getEventsForQuote`; `apps/api/src/db/migrations/20270302000000_customer_events_entity_type.js` - `entity_type` column; `apps/api/src/modules/quotes/quotes.routes.js` - `GET /:id/customer-events`.

## Online quote signing

You can ask a customer to sign a quote online instead of sending it only as a PDF. On the quote detail page, choose **Send for signing** to send a signing request to the customer. The quote status changes to **Sent** so you can track it.

If the signing e-mail cannot be delivered because of a problem with your sender settings, an error toast appears with the message to check your e-mail settings and try again. The signing request itself is created on the server, so you can resend it once the e-mail settings are fixed.

## Quote detail actions

The top action on the quote detail page depends on the quote status:

- **Send** — Available for draft and sent quotes, so the quote can reach the customer.
- **Convert to Invoice** — Available once the customer has accepted the quote, turning it into an invoice with one click.
- **Duplicate / Create new version** — Available for rejected or expired quotes so you can reissue them quickly.

Additional actions live in the overflow menu next to the top action:

- **Preview PDF** — View the quote PDF in full screen before sending.
- **Download PDF** — Download the quote as a professionally formatted PDF document with your company logo, branding colors, and all quote details.
- **Copy quote** — Create a copy of the existing quote.

## Document preview

Every saved quote has a live PDF preview on its detail page, just like an invoice. The preview shows the quote exactly as your customer will see it.

The preview header has a **Download PDF** button, a **Print** button, and a **Change design** button. Click **Change design** to jump straight to the invoice design settings and adjust the look of all your invoices, quotes and reminders. When you are done, you return to the quote you came from. On mobile the same action lives in the page's overflow menu so the preview header stays uncluttered.

## Quote statuses

| Status | Description |
|---|---|
| **Draft** | Created but not sent |
| **Sent** | Delivered to the customer |
| **Accepted** | Customer accepted the quote |
| **Rejected** | Customer declined the quote |
| **Expired** | Past the valid-until date |
| **Invoiced** | Converted to an invoice |

## Convert to invoice

Once a customer accepts your quote, convert it to an invoice with one click:

1. Open the accepted quote
2. Click **Convert to Invoice**
3. Review the pre-filled invoice (all line items carry over)
4. Make any adjustments if needed
5. Save and send the invoice

## Quote requests

Customers can submit quote requests through your [site builder](/advanced/business-page). These appear in **Quotes > Requests**.

### Managing requests

Each request shows:

- Customer name and email
- Requested service or description
- Date submitted
- Status

### Request statuses

| Status | Description |
|---|---|
| **New** | Just received, unreviewed |
| **Reviewed** | You've read the request |
| **Quoted** | You've sent a quote in response |
| **Closed** | Request resolved (accepted or declined) |

### Responding to a request

1. Open the request
2. Click **Mark as Reviewed** after reading
3. Click **Create Quote** to generate a quote for this customer
4. The quote is pre-filled with the customer's information

### AI concept quote from a request

When a customer submits a quote request through your site builder or contact form, MyCompanyDesk can draft a concept quote automatically. The AI reads the request text and your own catalog, then proposes line items it can match.

- Matched catalog items keep their catalog price, VAT rate and unit. The AI only suggests quantities.
- Work that does not fit the catalog becomes a description-only line at price 0, so you can price it yourself.
- The draft is created as a quote in **Draft** status. It is not sent automatically and no customer record is created from the unverified form.
- A notification tells you a concept quote is ready. Open the request, review the lines, link or create the customer, and send it when you are ready.

This is a best-effort draft, not a finished proposal. Always check the prices and descriptions before sending.

## Bulk actions

- **Send** — Send multiple quotes at once
- **Archive** — Move quotes to archive
- **Delete** — Remove quotes

## Tips

- Quote request metrics (received, quoted, closed) are shown at the top of the requests page
- Use the quick-add feature for rapid quote creation
- Quotes can link to projects for better tracking


## Dashboard context

Quote follow-ups also appear in the dashboard **Good news** tab:

- **Open requests**: how many website quote requests are waiting for an answer, plus the oldest waiting time.
- **Expiring quotes**: how many quotes expire this week, and how many have already expired without an answer.

Website quote requests come from the site-builder form. See [Domains, Website & Inbox](/features/domains-website-inbox) for setting up the form.
