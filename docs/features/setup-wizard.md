---
title: Setup wizard
last_verified: 2026-07-15
---

# Setup wizard

The setup wizard at `/setup` gets a new workspace ready in a few minutes. It is built around your first invoice: it asks who you are billing, pulls your company details from the Dutch trade register (KVK), fills in your payment details and VAT status, and shows a live preview of the invoice while you work. Nothing is locked in: every step can be skipped and everything can be changed later in Settings.

If you came here for the basic walkthrough, start at [Set up your company](/getting-started/company-setup). This page is the reference for every step and option.

## When the wizard is offered

- **First sign-in:** new accounts land in the wizard automatically.
- **Dashboard banner:** while setup is unfinished, a banner at the top of the dashboard offers to finish it. The banner can be hidden with the close button; hiding it is per browser, and `/setup` stays reachable directly.
- **Any time:** navigate to `/setup` to run or re-run the wizard.

The wizard is skippable. **Leave for now** takes you to the dashboard without finishing; nothing is lost, because every answer is saved the moment you give it. Come back later and you continue exactly where you stopped.

## The steps

The wizard shows a progress bar with up to four steps:

1. **Customer:** who you are billing
2. **KVK:** your company details
3. **Get paid:** your IBAN and VAT status
4. **Finish:** trial confirmation and optional next steps

**Continue** moves forward once a step has what it needs; **Finish setup** on the last step applies everything.

## Step: Customer

The wizard opens with a live invoice preview and asks for the customer. Start typing the customer name.

- If the customer already exists in your workspace, select them from the dropdown.
- To create a new customer inline, type the name and click **Create customer**. The inline form asks for the customer name and address. The KVK lookup can suggest Dutch businesses and fill in the address automatically; private customers can be added by typing the address by hand.
- The customer email is optional and only used when you send the invoice.

Only the customer name is required to continue. You can finish the customer's details later from the customer page.

## Step: KVK

Two ways through:

1. **Search:** type your company name (two characters or more) and pick your business from the live suggestions. MyCompanyDesk then retrieves your KVK Basisprofiel and prefills your company details: legal name, trade names, legal form, address and business activity. Prefill only fills empty fields; anything you already entered by hand is preserved.
2. **Fill in manually**: a short form for company name, KVK number, address, postal code and city. Use it when your business is too new to appear in the search results, or when your trade name does not match what you searched for. Your entries are saved to your company details right away. A link takes you back to search at any time.

No KVK registration? Continue without company data and fill it in later under **Business details** in Settings.

When a search finds nothing, the wizard says so and offers to switch to manual entry with the name you typed already filled in.

## Step: Get paid

The wizard asks for the IBAN that customers pay to. You can enter your business IBAN now, or click **I'll add my IBAN later** to skip it. Keep in mind that your customer cannot easily pay you without an IBAN.

If you are waiting for your VAT ID from the Tax Authority, or fall under the small business scheme (KOR), you can continue anyway and add your VAT ID later.

## Step: Finish

The final step confirms your trial:

- **Your trial:** every new workspace starts with 60 days of Pro, free, no credit card needed.

**Finish setup** applies your company details, VAT status, IBAN and default settings. The finish screen also offers optional next steps, such as setting up a website. Website setup is opt-in: nothing is created unless you choose it from the finish screen or the dashboard checklist.

## Skipping, resuming and re-running

- **Skip:** **Leave for now** exits to the dashboard at any point. The dashboard banner keeps a way back until setup is finished.
- **Resume:** answers are saved on every change. Closing the tab mid-step loses nothing; the next visit continues on the same step.
- **Re-run:** after finishing, `/setup` starts the flow again from the first step with your saved answers. The wizard fills blanks rather than overwriting: a services list you built, a logo you uploaded or settings you chose by hand are not replaced.

## Editing without the wizard

Every field the wizard touches has a home in **Settings**:

- **Business details**: name, KVK number, address, VAT number
- **Logo and colour**: logo and brand colour
- **Invoice design**: the look of your PDFs
- **Your website and domain**: domain and website
- **Features**: switch app parts on or off

See the [settings overview](/settings/) for the full map.
