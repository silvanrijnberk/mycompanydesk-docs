---
title: Documents
description: "All your receipts, invoices, email attachments and own files in one place, plus agreements like terms and NDAs you can have signed online."
---

# Documents

Documents is the archive of your administration: everything you need to keep sits here in one place, sorted by where it came from. On top of that you record agreements that have no price attached and have them signed online, such as general terms, NDAs and data processing agreements.

## Overview

**Documents** is in the navigation for everyone, on every plan. Tabs at the top show:

- **All**: the whole archive
- **Agreements**: your general terms, data processing agreements, NDAs and other agreements (see [Agreements](#agreements))
- **Receipts**: the receipts attached to your expenses
- **Invoices**: the invoices you issued
- **Uploaded**: files you uploaded yourself
- **From email**: attachments from your inbox worth keeping

Receipts, invoices and email attachments show up by themselves; you do not have to store them again. You see the **Agreements** tab when the Contracts module is on (Office), and the **From email** tab with the full business inbox (Office).

## The archive

**Search your archive** searches all documents on the tab you are on. **Year** takes you back to a single year, and on the **Uploaded** tab you can also filter by **Category**. When you switch tabs, the year and the search term stay in place.

For each document you can choose:

- **Download**: save the file
- **Open**: go to the invoice, expense or customer the document belongs to
- **Book as expense**: for a receipt that arrived as an email attachment. You scan it, check it and book it; after that it sits under **Receipts**.
- **Rename** and **Delete**: for files you uploaded yourself

### Uploading something yourself

Click **Upload** to add your own files, such as a Chamber of Commerce (KvK) extract, an insurance policy or your annual accounts. You can upload a photo, PDF, Word, Excel, text or CSV file, and pick several files at once. For each file you can fill in a **Name**, a **Category**, a **Customer** and a **Document date**.

The categories are: Chamber of Commerce (KvK) extract, Insurance, ID document, Annual accounts, Belastingdienst, Bank, Pension and Other.

## Agreements

Agreements are for arrangements with customers or partners that are not invoices, quotes or contracts with billing. Typical uses:

- **Terms and conditions**: keep a record that your customer received them before an agreement was closed.
- **Data processing agreement**: document GDPR/AVG processor arrangements.
- **Non-disclosure agreement**: capture a signed confidentiality agreement.
- **Other**: any other agreement you want to store, send and optionally have signed.

::: info
Agreements are part of Office and come with the Contracts module. If you do not see the **Agreements** tab, switch on **Contracts** under **Settings › Modules**.
:::

The **Agreements** tab also shows a **What's missing** card: it tells you when you have no general terms yet, or when customers with a contract do not have a data processing agreement yet.

### Creating an agreement

1. Go to **Documents**, tab **Agreements**, and click **Create document**
2. Under **Document type**, pick a kind: **Terms and conditions**, **Data processing agreement**, **Non-disclosure agreement** or **Other**
3. Fill in:
   - **Title**: a descriptive name
   - **Customer**: optional; link the document to a customer
   - the questions that come with the chosen template
4. Check the preview and click **Create**

You create a document from a template. The text is fixed at the moment you create it, so later template edits do not change existing documents.

### Providing terms to a customer

MyCompanyDesk records when you provided general terms to a customer.

#### Manual provision

If you want to record a date yourself:

1. Open the document's page
2. Click **Record as provided**
3. Choose the date the terms were handed to the customer

Once recorded, the page shows a **Provided** badge and the date. If the document is linked to a customer, this is also visible in the list.

#### Attach terms when sending a quote or invoice

If your workspace has general terms stored in Documents, the email preview when sending a quote or invoice shows an **Include terms and conditions** switch. For quotes it is on by default, because sending terms with a quote is the legally relevant moment for providing them (terhandstelling). For invoices it is off by default. You change both defaults under **Settings › Invoices and quotes**, under **Terms and conditions**.

When the switch is on, the current terms PDF is attached to the outgoing email. After the email is sent, MyCompanyDesk records that send as the provision event on the terms document. The document's page then shows:

- the recipient and date of the quote or invoice email that delivered the terms
- a link to the quote or invoice, so you can open the actual send

If the terms were already marked as provided manually, the earlier record is kept. Later sends do not overwrite it.

::: tip
This turns a bare date into verifiable evidence. Instead of saying "we provided the terms on this day", the document points to the real email that carried them.
:::

### Processing agreement gap on the customer page

On the customer detail page, MyCompanyDesk checks whether a customer has a contract but no data processing agreement stored in Documents. When that gap exists, a hint appears in the documents card with a **Draft a data processing agreement** link that starts a new one for that customer.

The hint is only shown when the Contracts module is on and the documents card would otherwise be empty. It is a quiet prompt to fix a gap at the place you would act on it.

### Signing

You have an agreement signed online by the customer linked to it, so link a customer to the document first. Then click **Send for signing**: the customer receives a secure signing link by email.

The document's page shows a signing card with:

- the status of each party
- a **View** button that opens a preview of the signed document
- a download button to save the PDF

#### Mutual signing

Agreements are signed by both sides: the counterparty signs first via the secure link, then you sign with **Countersign**. Only after both signatures does the status become **Signed**.

#### Signing on the list

The list of agreements has a **Signing** column showing the signing status of each document that is signed online. Statuses appear as colored badges: **Not sent**, **Pending**, **Partially signed** and **Signed**.

The filter above the list narrows it by signing status, or shows documents without digital signing.

#### Signed PDF and audit trail

Once both parties have signed, both receive a signed PDF by email. The PDF includes the document text plus a signature page with an audit trail (IP address and timestamp). You can also download the PDF at any time from the document's page.

### Agreement statuses

| Status | Description |
|---|---|
| **Draft** | Created but not yet sent |
| **Sent** | Signing request sent to the counterparty |
| **Partially signed** | At least one party has signed; the final signature is still pending |
| **Signed** | All signatures are recorded |
| **Declined** | The counterparty declined to sign |
| **Expired** | The signing link expired before all parties signed |
| **Terminated** | No longer active |

## Tips

- Upload loose papers you need to keep, such as insurance policies and your KvK extract, so everything sits together
- Link each agreement to a customer, so you can find it quickly and have it signed
- Record when you provided general terms: this matters if a dispute arises
- Use the signing status filter to see which agreements still need a signature
