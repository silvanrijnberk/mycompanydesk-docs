---
title: Company Settings
last_verified: 2026-05-09
---

# Company Settings

Everything that defines how your business looks to the outside world — the name on your invoices, your logo, your public business page, and the domain customers find you on.

## Where to find it

Open the workspace switcher → **Workspace settings** → **Company**, or navigate directly to `/workspace/organization/company`.

The umbrella page is a tile menu with four leaves and a shortcut to the magical setup wizard at `/setup` (shown as a wide tile while there are still pending setup steps).

## What you can change

The Company surface is split into four focused pages.

### About your business

Path: `/workspace/organization/company/about`

The identity form. What every invoice, quote, and email shows.

- **Business name** — appears on every document
- **Address** — street, postal code, city, country (with address autocomplete)
- **Registration** — KvK or other registration number. The **Refresh from KVK** button pulls the latest data from the Dutch Chamber of Commerce registry and fills any blank fields (business name, address, postal code, city, country). It never overwrites values you already set. Each workspace gets 100 free KVK lookups per day (cached results do not count toward the limit). If the daily cap is reached, you can enter the data manually or try again tomorrow.
- **Tax ID** — VAT number (e.g. `NL123456789B01`)
- **Contact** — public email, phone, support email
- **Website + social** — used by the email signature, business page, and footers

This page wraps the `CompanyInfo` component. Changes auto-save through the `useWorkspaceSettings` pipeline.

### Look & feel

Path: `/workspace/organization/company/look`

Branding for invoices, quotes, and outgoing email.

- **Logo upload** — used on every PDF and email header
- **Brand colour** — primary accent across documents and the public business page
- **PDF style presets** — gated by the `style_presets` feature (Pro and Business)
- **Document styling** — header layout, footer content, accent placement

The page is scaffolding around the existing `CompanyBranding` component (a full inner-form rebuild is on the roadmap; the chrome is already the redesigned tone).

### Your website

Path: `/workspace/organization/company/website`

A simple public business page customers can find online — contact info, what you do, and links to message you.

- Gated by the `public_business_page` feature (Pro and Business)
- Locked workspaces still see the tile but the leaf shows an upgrade prompt
- Wraps the `CompanyServices` component

When a user clicks through the wizard's "set up your website" tile they land here.

### Your own .com address

Path: `/workspace/organization/company/address`

Hook up a domain you already own (or buy a new one) for your website and email.

- Gated by the `custom_domains` feature (Pro and Business)
- Replaces the default `acme.mycompanydesk.com` subdomain
- DNS, SPF, and DKIM records are managed for you
- The DNS record table sits behind an "Advanced" strip — most users never need to look at it

This page is the most technical surface in the Company tree; the intro deliberately explains in plain language what the feature is for before any DNS UI appears.

## Plan gating quick reference

| Leaf | Free | Starter | Pro | Business |
|---|---|---|---|---|
| About your business | yes | yes | yes | yes |
| Look & feel | yes | yes | yes | yes |
| Your website | locked | locked | yes | yes |
| Your own .com address | locked | locked | yes | yes |

Locked tiles stay visible so you know the feature exists; clicking one opens the upgrade prompt.

## Related

- [Plan & payments](/settings/billing) — to unlock website and custom-domain features
- [Email setup](/settings/email) — your business email lives on the same domain
- The magical setup wizard at `/setup` walks new workspaces through every leaf in one flow
