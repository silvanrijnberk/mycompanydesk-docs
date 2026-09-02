---
title: Company Settings
description: "The name on your invoices, address, KvK, logo, brand colour, website and opening hours, grouped in Settings."
last_verified: 2026-09-03
---

# Company Settings

Everything that defines how your business looks to the outside world: the name on your invoices, your logo and brand colour, your public website, and your opening hours.

## Where to find it

Open **Instellingen** (Settings) from the menu, or go to `/settings`. Company topics are rows in the **Je bedrijf** (your business) group:

- **Bedrijfsgegevens** (business details) at `/settings/bedrijfsgegevens`: company info, address, KvK number, VAT number, opening hours
- **Logo en kleur** (logo and colour) at `/settings/uiterlijk`: logo, brand colour, document styling
- **Factuurontwerp** (invoice design) at `/settings/factuurontwerp`: the invoice design studio, covered on [PDF Customization](/en/settings/pdf)

Old links to the previous workspace settings pages redirect to the new locations automatically.

## Business details (Bedrijfsgegevens)

Path: `/settings/bedrijfsgegevens`

The identity form. What every invoice, quote, and email shows.

- **Business name**: appears on every document
- **Address**: street, postal code, city, country (with address autocomplete)
- **Registration**: KvK or other registration number. The **Refresh from KVK** button pulls the latest data from the Dutch Chamber of Commerce registry and fills any blank fields (business name, address, postal code, city, country). It never overwrites values you already set. Each workspace gets 100 free KVK lookups per day (cached results do not count toward the limit). When 20 or fewer lookups remain, the field hint switches to a counter showing how many are left. If the daily cap is reached, you can enter the data manually or try again tomorrow.
- **Tax ID**: VAT number (e.g. `NL123456789B01`)
- **Contact**: public email, phone, support email, timezone
- **Website + social**: used by the email signature, business page, and footers

Changes save automatically.

## Opening hours

Path: `/settings/bedrijfsgegevens#openingstijden`

From here you manage one central source for your opening hours. The same hours feed your website and the online appointments block, so you never have to keep two places in sync.

**Weekly schedule**

- Set each day as **open** or **closed**.
- For an open day, enter one or two time blocks, for example `09:00 – 12:00` and `13:00 – 17:00`.
- A day you do not configure falls back to office hours (`09:00 – 17:00`) for your site and booking block.
- You can also set a day to **by appointment** so it appears open without fixed times.

**Special days**

- Add individual dates for holidays, vacations, or one-off changes.
- For each special day choose **closed**, **by appointment**, or a **custom time block**.
- The online appointments block and your website respect these exceptions.

Changes save automatically. See [Online appointments](/en/features/site-bookings) for how the booking block uses your opening hours.

## Logo and colour (Logo en kleur)

Path: `/settings/uiterlijk`

Branding for invoices, quotes, and outgoing email, with a live preview of the result.

- **Logo upload**: used on every PDF and email header
- **Brand colour**: one accent colour across your documents and public business page
- **Style presets**: pick a document style, available on Starter and up
- **PDF footer**: the footer text at the bottom of your documents

There is one style and one brand colour for all document types; a second accent colour no longer exists. For full control over the layout, colours, and font of your invoices and quotes, open the **Factuurontwerp** row (the invoice design studio); see [PDF Customization](/en/settings/pdf).

## Your website

Your public business page is managed in the top-level **Website** area of the app, not under Settings. It is a dashboard with six tabs: Overview, Visitors, Findability, Connections, Domain & email, and Settings. The site editor opens from **Edit site**.

- The website is available from the Starter plan.
- Connecting your own domain, replacing the default `mycompanydesk.com` subdomain, requires Pro. DNS, SPF, and DKIM records are managed for you, tucked behind an advanced strip most users never need to open.

## Related

- [PDF Customization](/en/settings/pdf) for the Factuurontwerp design studio
- [Plan & payments](/en/settings/billing) to unlock the custom domain
- [Email setup](/en/settings/email) for sending from your own domain
- The setup wizard at `/setup` walks new workspaces through these settings in one flow
