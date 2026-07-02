---
title: Company Settings
last_verified: 2026-07-02
---

# Company Settings

Everything that defines how your business looks to the outside world: the name on your invoices, your logo and brand colour, and your public website.

## Where to find it

Open **Instellingen** (Settings) from the menu, or go to `/settings`. Company topics are rows in the **Je bedrijf** (your business) group:

- **Bedrijfsgegevens** (business details) at `/settings/bedrijfsgegevens`: company info, address, KvK number, VAT number
- **Logo en kleur** (logo and colour) at `/settings/uiterlijk`: logo, brand colour, document styling
- **Factuurontwerp** (invoice design) at `/settings/factuurontwerp`: the invoice design studio, covered on [PDF Customization](/settings/pdf)

Old links to the previous workspace settings pages redirect to the new locations automatically.

## Business details (Bedrijfsgegevens)

Path: `/settings/bedrijfsgegevens`

The identity form. What every invoice, quote, and email shows.

- **Business name**: appears on every document
- **Address**: street, postal code, city, country (with address autocomplete)
- **Registration**: KvK or other registration number. The **Refresh from KVK** button pulls the latest data from the Dutch Chamber of Commerce registry and fills any blank fields (business name, address, postal code, city, country). It never overwrites values you already set. Each workspace gets 100 free KVK lookups per day (cached results do not count toward the limit). When 20 or fewer lookups remain, the field hint switches to a counter showing how many are left. If the daily cap is reached, you can enter the data manually or try again tomorrow.
- **Tax ID**: VAT number (e.g. `NL123456789B01`)
- **Contact**: public email, phone, support email
- **Website + social**: used by the email signature, business page, and footers

Changes save automatically.

## Logo and colour (Logo en kleur)

Path: `/settings/uiterlijk`

Branding for invoices, quotes, and outgoing email, with a live preview of the result.

- **Logo upload**: used on every PDF and email header
- **Brand colour**: one accent colour across your documents and public business page
- **Style presets**: pick a document style, available on Starter and up
- **PDF footer**: the footer text at the bottom of your documents

There is one style and one brand colour for all document types; a second accent colour no longer exists. For full control over the layout, colours, and font of your invoices and quotes, open the **Factuurontwerp** row (the invoice design studio); see [PDF Customization](/settings/pdf).

## Your website

Your public business page is managed in the top-level **Website** area of the app, not under Settings. It has its own pages: **Pagina's** (pages), **Stijl** (style), **Domein & SEO**, and **Koppelingen** (integrations).

- The website is available from the Starter plan.
- Connecting your own domain, replacing the default `mycompanydesk.com` subdomain, requires Pro. DNS, SPF, and DKIM records are managed for you, tucked behind an advanced strip most users never need to open.

## Related

- [PDF Customization](/settings/pdf) for the Factuurontwerp design studio
- [Plan & payments](/settings/billing) to unlock the custom domain
- [Email setup](/settings/email) for sending from your own domain
- The setup wizard at `/setup` walks new workspaces through these settings in one flow
