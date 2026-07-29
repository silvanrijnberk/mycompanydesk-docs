---
title: Documents
---

# Documents

Store, track and digitally sign agreements that do not have a price attached — such as general terms, NDAs and data-processing agreements.

## Overview

Documents are for paper-trail agreements with customers or partners that are not invoices, quotes or recurring contracts. Typical uses:

- **General terms** — keep a record that your customer received them before an agreement was closed.
- **Processing agreement (DPA)** — document GDPR/AVG processor arrangements.
- **NDA** — capture a signed confidentiality agreement.
- **Other** — any other agreement you want to store, send and optionally sign.

::: info
The documents module is optional. Enable it in **Company > Features** if you do not see it in the navigation.
:::

## Creating a document

1. Go to **Documents > New Document**
2. Pick a kind: **General terms**, **Processing agreement**, **NDA** or **Other**
3. Fill in:
   - **Title** — a descriptive name
   - **Customer** — optional; link the document to a customer record
   - **Content** — the agreement text that will be shown to the signer
4. Click **Save**

You can create a document from a template or from scratch. Documents created from a template render the template text at the time they are created, so later template edits do not change already-created documents.

## Providing terms to a customer

MyCompanyDesk lets you record when general terms were provided to a customer:

1. Open the document detail page
2. Click **Record as provided**
3. Choose the date the terms were handed to the customer

Once recorded, the document detail page shows a **Provided** badge and the provided date. If the document is linked to a customer, this is also visible in the documents list.

::: tip
Send general terms together with a quote and record the date here. That gives you a clear paper trail if the terms are ever disputed.
:::

## Signing

Documents support the same digital signing flow as contracts. You can add one or more signing parties through the document form. Each party receives a signing link by email.

When a document has signing enabled, the detail page shows a signing card with:

- The status of each party (draft, sent, partially signed, signed, expired or terminated)
- A **View** button that opens an inline preview of the signed document
- A download button to save the PDF

### Multi-party signing

Documents use mutual signing: the counterparty signs first via a secure link, then you (the owner) counter-sign to finalize the document. After both signatures are recorded, the document status becomes **Signed**.

### Signing on the documents list

The documents list includes a **Signing** column showing the signing status for each document that has signing enabled. Statuses appear as colored badges: draft, sent, partially signed and signed.

A signing filter dropdown above the list lets you narrow the view by signing status, or filter to documents without digital signing.

### SMS verification

Signing links can require SMS verification before a party can view and sign the document. When enabled, the signer must enter a mobile number and confirm a 6-digit code sent by SMS.

- **Send code** — after entering their mobile number, the signer taps the button and receives a code
- **Verify code** — the signer enters the 6-digit code to prove access to the phone number
- **Verified badge** — once confirmed, a "Verified" badge appears with the last four digits of the number

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
- Record when you provided general terms — this matters if a dispute arises
- Add signing parties when creating a document to enable digital signing
- Use the signing status filter to see which documents still need signatures
