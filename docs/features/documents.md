---
title: Documents
---

# Documents

Store, track and digitally sign agreements that do not have a price attached, such as general terms, NDAs and data-processing agreements.

## Overview

Documents are for paper-trail agreements with customers or partners that are not invoices, quotes or recurring contracts. Typical uses:

- **General terms** -- keep a record that your customer received them before an agreement was closed.
- **Processing agreement (DPA)** -- document GDPR/AVG processor arrangements.
- **NDA** -- capture a signed confidentiality agreement.
- **Other** -- any other agreement you want to store, send and optionally sign.

::: info
The documents module is optional. Enable it in **Company > Features** if you do not see it in the navigation.
:::

## Creating a document

1. Go to **Documents > New Document**
2. Pick a kind: **General terms**, **Processing agreement**, **NDA** or **Other**
3. Fill in:
   - **Title** -- a descriptive name
   - **Customer** -- optional; link the document to a customer record
   - **Content** -- the agreement text that will be shown to the signer
4. Click **Save**

You can create a document from a template or from scratch. Documents created from a template render the template text at the time they are created, so later template edits do not change already-created documents.

## Providing terms to a customer

MyCompanyDesk lets you record when general terms were provided to a customer.

### Manual provision

If you want to record a date yourself:

1. Open the document detail page
2. Click **Record as provided**
3. Choose the date the terms were handed to the customer

Once recorded, the document detail page shows a **Provided** badge and the provided date. If the document is linked to a customer, this is also visible in the documents list.

### Attach terms when sending a quote or invoice

If your workspace has general terms stored in Documents, the email preview when sending a quote or invoice shows an **Include general terms** toggle. For quotes this toggle is on by default, because sending terms with a quote is the legally relevant moment for terhandstelling. For invoices it is off by default.

When the toggle is on, the current terms PDF is attached to the outgoing email. After the email is sent successfully, MyCompanyDesk records that send as the provision event on the terms document. The document detail page then shows:

- the recipient and date of the quote or invoice email that delivered the terms
- a link to the quote or invoice, so you can open the actual send

If the terms were already marked as provided manually, the earlier record is kept. Later sends do not overwrite it.

::: tip
This turns a bare date into verifiable evidence. Instead of saying "we provided the terms on this day", the document points to the real email that carried them.
:::

## Processing agreement gap on the customer page

On the customer detail page, MyCompanyDesk checks whether a customer has a contract but no processing agreement (DPA) stored in Documents. When that gap exists, a hint appears in the documents card with a **Create processing agreement** link that starts a new DPA pre-filled for that customer.

The hint is only shown when the documents and contracts modules are enabled and the documents card would otherwise be empty. It is a quiet prompt to fix a compliance gap at the place you would act on it.

## Signing

Documents support the same digital signing flow as contracts. You can add one or more signing parties through the document form. Each party receives a signing link by email.

When a document has signing enabled, the detail page shows a signing card with:

- The status of each party (draft, sent, partially signed, signed, expired or terminated)
- A **View** button that opens an inline preview of the signed document
- A download button to save the PDF

### Requesting a signature

To send a signing request, open the document and use the signing card or the **Send signing request** action. The system emails each party a secure signing link. The email includes the document PDF and the signing link, not an invoice PDF or invoice links. If the email cannot be delivered, the failure is shown on the document detail page instead of being reported as sent.

### Multi-party signing

Documents use mutual signing: the counterparty signs first via a secure link, then you (the owner) counter-sign to finalize the document. After both signatures are recorded, the document status becomes **Signed**.

### Signing on the documents list

The documents list includes a **Signing** column showing the signing status for each document that has signing enabled. Statuses appear as colored badges: draft, sent, partially signed and signed.

A signing filter dropdown above the list lets you narrow the view by signing status, or filter to documents without digital signing.

### SMS verification

Signing links can require SMS verification before a party can view and sign the document. When enabled, the signer must enter a mobile number and confirm a 6-digit code sent by SMS.

- **Send code** -- after entering their mobile number, the signer taps the button and receives a code
- **Verify code** -- the signer enters the 6-digit code to prove access to the phone number
- **Verified badge** -- once confirmed, a "Verified" badge appears with the last four digits of the number

If the wrong code is entered, the signer can request a new one. SMS verification is configured per signing session and applies to all parties.

### Signed PDF and audit trail

After the document is fully signed, both parties receive a signed PDF by email. The signed PDF includes the document body plus a signature page with an audit trail (IP address and timestamp). You can also download the PDF at any time from the document detail page.

## Document statuses

| Status | Description |
|---|---|
| **Draft** | Created but not yet sent |
| **Sent** | Signing invitation sent to one or more parties |
| **Partially signed** | At least one party has signed, final counter-signature still pending |
| **Signed** | All required signatures are recorded |
| **Expired** | The signing link expired before all parties signed |
| **Terminated** | No longer active |

## Tips

- Link each document to a customer so you can find it again quickly
- Record when you provided general terms -- this matters if a dispute arises
- Add signing parties when creating a document to enable digital signing
- Use the signing status filter to see which documents still need signatures
