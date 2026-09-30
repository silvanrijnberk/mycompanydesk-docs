---
title: Set up your company
description: "The setup wizard fills in your sender block, payment details and VAT status around your first invoice, with a KVK lookup and a live preview."
last_verified: 2026-09-30
---

# Set up your company

The first time you sign in, MyCompanyDesk walks you through a short **setup wizard** at `/setup`. The wizard is built around your first invoice: it asks who you are billing and fills in your sender block, payment details and VAT status while showing a live preview of the invoice. You can also have it look up your company in the Dutch trade register (KVK). Nothing is locked in: every step can be skipped and everything can be changed later in Settings.

## Where to find it

- **First sign-in:** the wizard opens automatically.
- **Later:** open `/setup` directly at any time to run or re-run the wizard. While setup is unfinished the dashboard keeps pointing at the next step in its own way, under **Zet dit op**.
- **Skipping:** the wizard has a **Leave for now** button on every step. Your answers so far are saved, so you continue where you left off.

## Step 1: Who you are billing

The wizard opens with a live invoice preview and asks for the customer. Start typing the customer name.

- If the customer already exists in your workspace, select them from the dropdown.
- To create a new customer inline, type the name and click **Create customer**. The inline form asks for the customer name and address. The KVK lookup can suggest Dutch businesses by company name or KVK number and fill in the address automatically; private customers can be added by typing the address by hand.
- The customer email is optional and only used when you send the invoice.

Only the customer name is required to continue. You can finish the customer's details later from the customer page.

## Step 2: Your company details (KVK)

This step prefills the sender block of your invoice. If you signed up via the marketing site and selected your business in the KVK lookup there, your KVK number is already carried into the wizard and auto-applied as soon as you reach this step. MyCompanyDesk then pulls your KVK Basisprofiel and prefills your company details: legal name, trade names, legal form, address and business activity. It only fills fields that are still empty, so anything you already entered stays untouched.

The marketing-site preview that brings you into the wizard now recognizes a wider range of trades. It first tries to match your trade from the business name. If the name is ambiguous, it can also read the SBI description from your KVK Basisprofiel and, if still needed, use a lightweight AI classifier to pick the best fit. When nothing matches, the preview falls back to a neutral self-employed persona instead of a generic handyman placeholder, and it uses your registered city when one is available.

No match, or no KVK registration?

- **Fill in manually**: enter your company name, KVK number, address, postal code and city yourself.
- **No KVK registration?**: skip the lookup entirely and add your details later in Settings.

## Step 3: How you get paid

The step has two parts: your VAT status and your IBAN.

**VAT status**

If you charge VAT, select **Yes, I charge VAT** and enter your VAT ID. While the field is empty, a hint reminds you that a VAT ID is required to continue; if you do not have it yet, click **I don't know my VAT ID right now, I'll fill it in later** to skip it. If you are exempt (for example through the small businesses scheme, KOR), select **No, I'm exempt** instead. You can change this later in Settings.

**IBAN**

The wizard asks for the IBAN that customers pay to. You can enter your business IBAN now, or click **I'll fill this in later** to skip it. While the field is empty, a hint reminds you that an IBAN is required before you can send invoices. Keep in mind that your customer cannot easily pay you without an IBAN.

## Step 4: Finish setup

The final step confirms your 60-day Pro trial, no credit card needed, and applies everything, then takes you to the dashboard. Nothing runs in the background while the screen confirms: the finish message names what stays behind for later (securing your account, and your website), and those suggestions follow on the dashboard under **Zet dit op** when it fits. MyCompanyDesk no longer generates a website or picks services for you here; a website is built the first time you open the **Website** area yourself.

Click **Finish setup** and the wizard applies your company details, VAT status, IBAN and default settings, then takes you to your dashboard.

## The website: built when you open it, live when you publish

MyCompanyDesk does not put a website under your workspace before you ask for one. Sign up and send invoices without ever opening the Website area, and nothing half-finished is waiting there.

The first time you open **Website**, a standard site is created as a draft: a home page, services, an about page and contact, plus the privacy statement and terms and conditions with your registration details filled in where they belong. Only lines you can vouch for stand on the pages; empty blocks stay empty until you write them, and the website wizard does not invent an origin story or a stock answer anymore. Nothing goes online on its own either: publishing stays the moment you choose, and only then does your web address go live. Your workspace subdomain, the form of your company name under mycompanydesk.com, is only applied when you publish.

## Changing things later

Everything the wizard sets can be edited in **Settings**:

| I want to change... | Open |
|---|---|
| Company name, address, KVK or VAT number | **Business details** |
| Logo and brand colour | **Logo and colour** |
| How customers pay you: IBAN, iDEAL, PayPal | **Getting paid** |
| Payment terms, reminders, quote validity | **Invoices and quotes** |
| The look of your invoice PDFs | **Invoice design** |
| Your website and domain | **Your website and domain** |

See the [settings overview](/en/settings/) for the full map. You can also re-run the wizard from `/setup` whenever you like; it fills in blanks rather than overwriting what you set yourself.

## Next steps

Your company is set up. Time to [create your first invoice](/en/getting-started/first-invoice).
