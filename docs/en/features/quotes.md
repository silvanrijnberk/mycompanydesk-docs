---
title: Quotes
description: "Create and send quotations, track whether they are accepted, and convert an accepted quote into an invoice in one step."
---

# Quotes

Send professional quotations to potential customers and convert them to invoices when accepted.

## Overview

The quotes section lets you create, send, and track quotations. Quotes follow a similar workflow to invoices but are non-binding estimates.

## Creating a quote

1. Go to **Quotes** and click **Create quote**
2. Select or create a **customer**
3. Add **line items** with descriptions, quantities, prices, and VAT rates
4. Set a **valid until** date (how long the quote is valid)
5. Add optional **notes**
6. Click **Save**

The quote form is similar to the invoice form: if you know how to create an invoice, you already know how to create a quote. Quotes are unlimited on every plan, Desk included.

The form carries the same **Amounts incl. VAT** switch as the invoice form. With it on, you type the prices the customer pays and the VAT comes out of them. See [Invoices](/en/features/invoices#prices-including-vat).

## Photos on a quote

A quote can hold up to twelve photos. They show what the quote is about: the spot, the current situation, or the damage before you start. Add them on the quote with **Add photos**, straight from the camera or from your gallery.

Every photo carries an optional description, so the customer knows what they are looking at. You can reorder photos or remove them again. Photos you add before saving the quote are kept as pending: the quote is saved as a draft automatically, so nothing is lost.

The photos appear below the line items, in three places: on the quote PDF, on the public quote page your customer opens, and in the signing view. Each photo is shrunk to a web-friendly size on our side, so adding photos does not slow down the quote. If the photos together are too large to attach to an email, the PDF carries the ones that fit and the app tells you that some did not make it.

Once the quote has been accepted or rejected, is out for signing, or sits in the trash, the photos are locked and can no longer be changed.

## Sending a quote

1. Open the quote detail page
2. Click **Send**
3. Review the email preview
4. Click **Send** to deliver it to your customer

The send dialog has switches for the **View button (online link)**, the **Download button** and the **PDF attachment**. By default the PDF is attached so the customer can review it.

At least one of these must be turned on for a quote, otherwise the customer has no way to open the quote and the **Send** button is disabled. Invoices always keep a customer portal button as a fallback, but quotes do not.

If your workspace has general terms in Documents, the email preview also shows an **Include terms and conditions** switch. It is on by default for quotes. When enabled, the current terms PDF is attached to the email and the send is recorded as the provision event on the terms document.

A quote also needs at least one line before it can be finalized or sent: the app refuses an empty quote and asks you to add a line first.

## Customer activity

Once a quote has been emailed, the quote detail page shows a set of engagement pills that mirror the activity log already used for invoices:

- **Sent**: the email left your workspace.
- **Opened**: the customer opened the email (tracked by a pixel embedded in the quote send).
- **Viewed**: the customer opened the public quote page.
- **Downloaded**: the customer downloaded the quote PDF.

A quote never shows a **Paid** pill, because quotes are not paid directly; a signed quote is shown in its own signing card instead.

The pills remain off until the quote is actually emailed. Before that, the activity card stays hidden so it does not clutter the page. Quote and invoice activity are kept apart, so the signals of a quote never mix with those of an invoice.

## Online quote signing

You can ask a customer to sign a quote online instead of sending it only as a PDF. On the quote detail page, choose **Send for signing** to send a signing request to the customer. The quote status changes to **Sent** so you can track it. The signing link opens in the customer's web browser, not inside the MyCompanyDesk app, even when the app is installed on their phone.

If the signing e-mail cannot be delivered because of a problem with your sender settings, an error toast appears with the message to check your e-mail settings and try again. The signing request itself is created on the server, so you can resend it once the e-mail settings are fixed.

A signing request cannot be sent once a quote has been rejected or after its validity date has passed. The **Send for signing** action is blocked for quotes in the **Rejected** or **Expired** status, so you cannot ask a customer to sign a quote that is no longer active. The action is also refused when the customer has already signed the quote, so a signed quote gets no second signing request. And a quote you have already set to **Accepted** yourself can no longer be declined through the sign link, while the customer can still sign it.

The signing block in the quote PDF follows the quote's document language: if the PDF is set to English, German or French, the signature block and the signing record underneath it print in that same language. Contract documents stay in Dutch.

## Quote detail actions

The top action on the quote detail page follows the step the quote is at:

- **Send**: on a draft or finalized quote, so the quote can reach the customer. When the quote is meant to be signed online, **Send for signing** takes its place.
- **Mark as accepted**: on a sent quote, when the customer said yes outside the signing link.
- **Convert to invoice**: once the customer has accepted the quote, turning it into an invoice with one click. The more menu also offers it on a sent or draft quote, and every conversion lands the quote in **Accepted**; a draft is given its quote number at that moment.
- **View invoice**: once the quote has been invoiced.
- **Duplicate**: on a declined quote, so you can reissue it quickly.

Additional actions live in the more menu next to the top action, depending on the status:

- **Preview** and **Download PDF**: view the quote PDF in full screen, or download it as a formatted PDF with your company logo, branding colors and all quote details.
- **Duplicate**: create a copy of the quote.
- **Create work order**: start a [work order](/en/features/werkbonnen) with the quote's lines.
- **Record as contract**: turn the agreement into a [contract](/en/features/contracts) (Office).
- **Send to accountant**.

## Document preview

Every saved quote has a live PDF preview on its detail page, just like an invoice. The preview shows the quote exactly as your customer will see it.

The preview header has a **Download PDF** button, a **Print** button, and a **Change design** button. Click **Change design** to jump straight to the invoice design settings and adjust the look of all your invoices, quotes and reminders. When you are done, you return to the quote you came from. On mobile the same action lives in the page's overflow menu so the preview header stays uncluttered.

## Quote statuses

| Status | Description |
|---|---|
| **Draft** | Created but not sent |
| **Finalized** | Numbered and ready, not sent yet |
| **Sent** | Delivered to the customer |
| **Accepted** | Customer accepted the quote |
| **Declined** | Customer declined the quote |
| **Expired** | Past the valid-until date |

Once you have turned an accepted quote into an invoice, the quote keeps the status **Accepted** and its top action becomes **View invoice**.

## Convert to invoice

Once a customer accepts your quote, convert it to an invoice with one click:

1. Open the accepted quote
2. Click **Convert to invoice**
3. Review the pre-filled invoice (all line items carry over)
4. Make any adjustments if needed
5. Save and send the invoice

## Deposit on acceptance

A quote can include a deposit that is invoiced as soon as the customer signs. In the quote form, find the **Deposit on acceptance** section and choose:

- **%** for a percentage of the quote total
- **€** for a fixed amount you enter yourself
- **None** for no deposit

VAT on the deposit is calculated on the deposit invoice at the rates of the underlying lines. The quote PDF and the email name the deposit under its own "Deposit on acceptance" label, and a fixed deposit is always marked excl. VAT there. A deposit has to be at least €0.50.

The page your customer signs shows the deposit as its own section: they can pay it online right away, open the deposit invoice, or pay later via the link in the email.

When the customer signs, the deposit invoice is created from the same line items. With the default delivery setting it is sent immediately with a payment link; you can also keep it as a draft and send it yourself. The deposit invoice gets its own payment term, shorter than your usual term, because the customer has just said yes. The quote detail page follows the deposit invoice on its **Deposit** card: agreed, draft, sent, overdue or paid.

When you convert the rest of the work to an invoice, the final invoice carries a negative **Settles deposit** line, so the customer only pays what is left. This settlement also applies when the quote's work is invoiced through a work order; that invoice can only be created once the deposit invoice is no longer a draft. Once the work has been invoiced through a work order, adding a deposit to the quote is refused. The deposit invoice itself stays a normal invoice in your lists, with its VAT due in the period of its own invoice date. Remove the settlement and the customer pays the full amount on top of the deposit; you can settle the deposit again later.

You get a notification when the deposit invoice has been sent, is waiting as a draft, or could not be sent. The workspace default lives under **Settings › Invoices and quotes**, under Deposit: the standard percentage on new quotes, the payment term (7 days unless you change it), and whether signing sends the invoice right away or sets it up as a draft. You can adjust or remove the deposit per quote.

## Quote requests

Customers can submit requests through your [website](/en/advanced/business-page). Next to **Quotes** sits a second tab, named after the kind of form on your website: **Quote requests**, **Messages**, **Appointment requests** or **Call-back requests**. Every incoming request lands there. The kind is part of each request, so the mail, notification and list name it the way the visitor meant it.

### Managing requests

Each request shows:

- Customer name and email (for a call-back request, phone and only an optional email)
- Requested service or description
- Date submitted
- Status
- Photos when the visitor sent any (see below)

The list can filter to **Quotes only**, so a stream of messages does not bury the quotes you still owe people.

### Request statuses

| Status | Description |
|---|---|
| **New** | Just received, unreviewed |
| **Reviewed** | You've read the request |
| **Quote sent** | You've responded with a quote (for a message: **Replied**; for an appointment: **Scheduled**; for a call-back: **Called back**) |
| **Closed** | Request resolved (accepted or declined) |

### Photos on requests

On quote and message forms on your website, you can switch on **Visitors can send photos along**. A visitor then adds up to three photos with the request, each up to 10 MB, as JPEG, PNG or WebP. An iPhone photo in HEIC or HEIF format gets a clear message telling the visitor to pick another format. The photos show on the request card and open full size from there.

Call-back and appointment forms do not accept photos: they ask about a moment, not describing work.

### Call-back requests

A call-back request is for visitors who prefer a phone call: they leave their name and phone number, and the form does not require an email address at all. A call-back request carries a **Call back** button as the main action, and **Mark as called back** to complete one. When you turn the request into a quote and send it, the status follows the same lifecycle as any other request.

Call-back is a per-form choice on your website; a workspace-wide default only covers the quote, message and appointment kinds. Handy for clients who do not use email: they ask through your site, you call them back.

### Responding to a request

1. Open the request
2. Click **Mark as reviewed** after reading
3. Click **Create quote** to generate a quote for this customer
4. The quote is pre-filled with the customer's information

When you create a quote from a request, the customer's own message shows read-only above the notes field, marked as visible only to you. It no longer lands in the notes themselves, because notes print on the quote PDF and appear in the customer portal.

### AI concept quote from a request

When a customer submits a quote request through the form on your website, MyCompanyDesk can draft a concept quote automatically. The AI reads the request text and your own catalog, then proposes line items it can match.

- Matched catalog items keep their catalog price, VAT rate and unit. The AI only suggests quantities.
- Work that does not fit the catalog becomes a description-only line at price 0, so you can price it yourself.
- The draft is created as a quote in **Draft** status. It is not sent automatically and no customer record is created from the unverified form.
- A notification tells you a concept quote is ready. Open the request, review the lines, link or create the customer, and send it when you are ready.

This is a best-effort draft, not a finished proposal. Always check the prices and descriptions before sending.

### Suggested customer from the request

When you click **Create quote** on a request, the requester's name and email appear as a suggested customer at the top of the customer field. Click **Use** to create the customer and put them on the quote, or ignore the suggestion and pick an existing customer yourself. The requester only becomes a customer once you confirm the suggestion; a customer whose name merely looks similar is never picked silently.

## Bulk actions

During a selection a checkbox column appears in the list, and nowhere else; an empty list carries no select button at all.

- **Mark as sent**: set quotes you delivered outside MyCompanyDesk to sent. No email goes out.
- **Archive**: move quotes to the archive
- **Delete**: move quotes to the trash

In the archive and the trash you restore quotes again.

## Tips

- The top of the requests page shows how many requests are new and how many there are in total
- Quotes can link to projects for better tracking

## Dashboard context

The **Quotes** card on the dashboard follows the last 30 days from request to job: how many requests came in, how many quotes you issued (with how many are still open or have gone quiet) and how many became jobs. Below that it lists your largest open quotes, each with a **Follow up** button.

Website quote requests come from the form on your website. See [Domains, Website & Inbox](/en/features/domains-website-inbox) for setting up the form.
