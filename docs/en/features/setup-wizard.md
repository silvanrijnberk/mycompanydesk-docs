---
title: Setup wizard
description: "The wizard at /setup pulls your company details from the KVK register, asks where you want to start and sets up VAT and IBAN for invoicing."
last_verified: 2026-10-13
---

# Setup wizard

The setup wizard at `/setup` (**Let's set up your business**) gets a new workspace ready in a few minutes. It pulls your company details from the Dutch trade register (KVK) and shows a live preview of your invoice while you work. Right after the KVK step it asks where you want to start: with invoices and quotes, with your own website, or with email on your own domain. Nothing is locked in: every step can be skipped and everything can be changed later in Settings.

If you came here for the basic walkthrough, start at [Set up your company](/en/getting-started/company-setup). This page is the reference for every step and option.

## When the wizard is offered

- **First sign-in:** new accounts land in the wizard automatically.
- **Until setup is finished:** navigate to `/setup` to continue where you stopped. Once you have finished, `/setup` sends you to the dashboard. There is no banner at the top of the dashboard; while setup still has loose ends, the dashboard points at the next step in its own way, under **Zet dit op**.

The wizard is skippable. **Skip for now** takes you to the dashboard without finishing; nothing is lost, because every answer is saved the moment you give it. Come back later and you continue exactly where you stopped.

## The steps

The wizard asks, in order:

1. **KVK** (Find your company in the Trade Register)
2. **Start** (What do you want to start with?): your pick (see [the step below](#step-what-do-you-want-to-start-with))
3. **VAT and IBAN** (How do you get paid?): only on the invoicing route

**Continue** moves forward once a step has what it needs, and **Back** goes one step back. On the last step of the invoicing route, **Finish setup** applies everything; if you picked the website or email, that button reads **Go to your website** or **Go to your email**.

## Step: KVK

Two ways through:

1. **Search:** type your company name (two characters or more) and pick your business from the live suggestions. MyCompanyDesk then retrieves your KVK Basisprofiel and prefills your company details: legal name, trade names, legal form, address and business activity. Prefill only fills empty fields; anything you already entered by hand is preserved.
2. **Fill in manually**: a short form for company name, KVK number, address, postal code and city. Use it when your business is too new to appear in the search results, or when your trade name does not match what you searched for. Your entries are saved to your company details right away. A link takes you back to search at any time.

No KVK registration? Continue without company data and fill it in later under **Business details** in Settings.

When a search finds nothing, the wizard says so and offers to switch to manual entry with the name you typed already filled in.

## Step: What do you want to start with?

Directly after the KVK step, the wizard asks **What do you want to start with?** with three answers:

- **Send invoices and quotes**: the usual route. The wizard continues with the VAT and IBAN step and the finish screen.
- **Your own website**: the wizard stops here and **Go to your website** takes you to `/website`, where the site editor opens.
- **Email on your own domain**: the wizard stops here and **Go to your email** takes you to `/inbox/setup`, where the business mailbox is set up.

The choice only steers where the wizard hands you over. Nothing is switched on or off and nothing arrives preselected. The dashboard follows the same choice: it offers **Put your website online** or **Set up your business email** until the site is published or an own mailbox exists on your own domain, and returns to the invoice route afterwards.

## Step: VAT and IBAN

This step (**How do you get paid?**) asks for the two things every invoice needs.

**Do you charge VAT?** Pick one of three answers:

- **Yes, I charge VAT**: most freelancers. Enter your VAT ID, or choose **I don't know my VAT ID right now, I'll fill it in later**; the app then asks again when you send your first invoice.
- **No, I take part in the KOR**: only if you registered for it yourself with the Belastingdienst and received a letter about it. Low turnover alone is not enough. Your invoices are then made without VAT and state that you take part in the KOR.
- **No, I'm exempt**: for some professions, such as care by a registered care provider or teaching by a CRKBO-registered teacher. Your invoices are made without VAT.

If you are unsure about the KOR, the step asks **Do you use the KOR (small business scheme)?** with **Yes, I use it**, **No** and **I don't know**. With I don't know it explains that you are not in the KOR unless you registered yourself, and that the Belastingdienst letter tells you for sure.

**Where should customers pay you?** Enter your IBAN and the account holder name, or choose **I'll fill this in later** to skip it. You can add your IBAN later in Settings, and the app asks again with your first invoice.

## Finish

**Finish setup** applies your company details, VAT status and IBAN. The finish screen (**You're ready to invoice**) offers a **Create your first invoice** button and names what comes next: securing your account and your website are suggested later, when it suits, under **Zet dit op** on the dashboard. No website is built in the background; the first time you open the **Website** area yourself, the default draft site is created there (home, services, about, contact, with your details on the legal pages), still waiting for you to publish it.

Every new workspace starts with 60 days of Office, free, no credit card needed. If you sign up through an invitation link from a partner accountant, that trial lasts 12 months. When it ends, your workspace moves back to Desk, with no paywall.

## Skipping and resuming

- **Skip:** **Skip for now** exits to the dashboard at any point. `/setup` stays the way back until setup is finished.
- **Website first** (**Build my website first**): under the question **Mainly here for your website?** in the footer of the first step sits a second exit, beside Skip. It leaves the setup without finishing and opens the website setup wizard directly; unlike the plain skip it keeps the Finish your website task on the dashboard open, because no site exists yet to finish.
- **Resume:** answers are saved on every change. Closing the tab mid-step loses nothing; the next visit continues on the same step.
- **After finishing:** `/setup` then sends you to the dashboard. You change what the wizard filled in under Settings (see below). The wizard only fills empty fields rather than overwriting: whatever you had filled in yourself stays.

## Editing without the wizard

Every field the wizard touches has a home in **Settings**:

- **Business details**: name, KVK number, address, VAT number
- **Logo and colour**: logo and brand colour
- **Invoice design**: the look of your PDFs
- **Your website and domain**: domain and website
- **Modules**: switch app parts on or off

See the [settings overview](/en/settings/) for the full map.
