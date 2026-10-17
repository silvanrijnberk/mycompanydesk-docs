---
title: Company Settings
description: "The name on your invoices, address, KvK, logo, brand colour, certifications and opening hours, grouped in Settings."
last_verified: 2026-10-13
---

# Company Settings

Everything that defines how your business looks to the outside world: the name on your invoices, your logo and brand colour, your certifications, your website and your opening hours.

## Where to find it

Open **Settings** from the menu, or go to `/settings`. Company topics are rows in the **Your business** and **Invoices and money** groups:

- **Business details** at `/settings/bedrijfsgegevens`: company name, address, KvK and VAT number, contact details, certifications and opening hours
- **Logo and colour** at `/settings/uiterlijk`: your logo, display name and brand colour
- **Invoice design** at `/settings/factuurontwerp`: the invoice design studio, covered on [PDF design](/en/settings/pdf)

Old links to the previous workspace settings pages redirect to the new locations automatically.

## Business details

Path: `/settings/bedrijfsgegevens`

The details that appear on every invoice, quote and email. They need to be correct.

- **Company name**: appears on every document
- **KvK number**: warns you (advisory only) when the number does not have 8 digits; actual lookups are done by the fill-in helper at the top of the page, see below
- **VAT number**: for example `NL123456789B01`
- **Address**: street, postal code, city and country, with help filling in your address
- **Contact**: email, phone, support email, website and timezone. The address you log in with is not put on your website until you confirm it as your public address (the website wizard and the publish dialog ask); your invoices use it either way.
- **About your business**: a short **Business description** for your business page in the customer portal
- **Social media**: Instagram, Facebook, LinkedIn and X. Paste the full address of your profile or page (for example `https://instagram.com/yourcompany`); a value that would not become a link is flagged after you leave the field, and a bare username shows where it would link.

Your IBAN does not go here but under **Settings › Payments**. Changes save automatically.

## Fill in your details automatically

At the top of the Business details page sits the **Fill in your details automatically** card. It fetches your company details from two sources and puts them side by side:

- **Chamber of Commerce (KvK)**: name and address
- **Google**: phone, website and opening hours from your Google Business Profile

Each suggestion is listed under **This is what we found** with its source. Tick what you want and press the **Take over** button (it counts what you picked). Only empty fields are filled: a row that already has a value is marked **already filled in** and skipped. A lookup never overwrites your own work.

## Certifications

Path: `/settings/bedrijfsgegevens#keurmerken`

The **Certifications** card on the Business details page holds your company's certifications and quality marks, such as STEK, VCA or CE. They appear on your website, and under your emails per mail type as chosen under Settings › Email. You manage them in one place.

- **Add a certification**: choose an image (PNG, JPG, WebP or SVG, 3 MB at most). MyCompanyDesk trims the white space around the logo, caps its height at 480 pixels and converts it to a PNG with transparency. An SVG is rasterized, so mail programs that cannot show SVG still display the mark. The image is optional: a certification can carry just its name, and a name-only mark shows as its name on your website and in the text version of your emails.
- **Name**: required, up to 64 characters. The name describes the logo for people who cannot see it.
- **Link (optional)**: for example the register page where customers can verify your certificate. The link must start with `https://` or `http://`.
- Up to six certifications. Reorder them with the up and down arrows; to replace the image, remove the certification and add it again.
- One switch, on by default: **Show on your website** feeds the Certifications block on your website. Whether the logos also appear under your emails is chosen per mail type under **Settings › Email**; the card shows a note with a link there.
- Adding your first certification automatically places a **Certifications** block on the homepage of your website, as a draft. It goes live when you publish your site.

## How your website addresses visitors

Below the Certifications card sits the card that decides how your website speaks to its visitors in Dutch: **Informal (je)** ("Ik help je graag.") or **Formal (u)** ("Ik help u graag."). The fixed texts on your site, such as buttons, form lines and thank-you messages, follow the choice at once; a one-person business speaks as "ik" instead of "we". What you or the text writer already wrote keeps its own form of address. The card offers to switch those texts in one go too, including what you typed yourself: only the form of address changes, never the content. You then see how many texts changed and which stayed as they were, and publishing puts them live. The website wizard asks the same question in its first step and writes the same setting.

## Opening hours

Path: `/settings/bedrijfsgegevens#openingstijden`

From here you manage one central source for your opening hours. The same hours appear on your website (the Open now badge and your business details) and apply to the online appointments block, so you never have to keep two places in sync.

**Your regular week**

- Set each day to **Open** or **Closed**.
- Give an open day one or two time blocks, for example `09:00 - 12:00` and `13:00 - 17:00`.
- If you have not set anything yet, you see a suggestion (Monday to Friday, 09:00 - 17:00). Your site only shows opening hours once you change something here and it is saved.

**Days off and exceptions**

- Add single dates or a continuous period for holidays, vacations or one-off changes.
- Choose **Closed**, **By appointment** or **Custom hours** for each one.
- **Add public holidays** marks recognised public holidays in the next twelve months as closed with a tap.
- The online appointments block and your website respect these exceptions.

**Website and appointments**

Your opening hours appear on your website and in the online appointments block. The website itself is managed in the top-level **Website** area; the booking block is covered on [Online appointments](/en/features/site-bookings). Both read from the same source, so a change here updates both places. These hours limit the moments customers can pick themselves online. Someone who requests an appointment instead is not limited by them: any day can be requested, and you confirm.

Changes save automatically.

### Also keep up to date on Google

The Opening hours card has a row that links your hours to your Google Business Profile. Turn on **Also keep up to date on Google**, sign in with Google and pick the location that may be updated. From then on, when you change something, MyCompanyDesk puts that change on your Google profile tonight as well; the row says so with **Your change goes to Google tonight**.

Do the two weeks drift apart? Then the row asks which version should apply, because MyCompanyDesk never overwrites Google on its own: **Set my hours on Google** or **Adopt Google's hours**. Adopting replaces the hours above with Google's, which also updates the Open now notice on your website. Only the days that differ are listed, and a day set to **By appointment** shows on Google as closed, because Google does not know that state. **Update now** sends your hours to Google without waiting for the nightly run; after a failed send the error appears with the button next to it again.

Turning the switch off stops the syncing, but your account and location stay connected.

## Logo and colour

Path: `/settings/uiterlijk`

Your branding for invoices, quotes, emails and your website, with a live preview of the result.

- **Display name**: an optional brand name on your emails and PDFs. Leave it empty and your company name is used. Once it differs from the company name, it also decides what your invoice and the app menu show; the Business details form then shows under the name field what displays at the moment ("Your invoice and menu currently show: ..."), with a link back to this page.
- **Brand colour**: one colour for your website, newsletter, emails and documents. Enter a colour code or pick one of the presets; a warning appears when a colour is too light to stay readable. If you set a different accent colour in **Invoice design**, that colour is what customers see on invoices, quotes, emails and the payment page. A note under the colour offers a one-click option to make that accent colour your brand colour too.
- **Company Logo**: upload your logo as SVG (recommended), PNG or JPG. PNG and JPG go up to 10 MB, SVG up to 2 MB; MyCompanyDesk downsizes an oversized raster image itself on upload. It appears on every PDF and at the top of your emails. For photo logos there is a button that removes the background.
- **Generate Logo from Text**: no logo yet? Create one here from a text, such as your initials, and a background colour.
- **Preview**: shows how your brand looks on invoices and emails.

Changes save automatically. There is one brand colour for everything customers see. For full control over the layout, colours and font of your invoices and quotes, open the **Invoice design** row; see [PDF design](/en/settings/pdf).

## Your website

Your website is managed in the top-level **Website** area of the app, not under Settings. It is a dashboard with seven tabs: Overview, Visitors, Results, Pages, Findability, Connections, and Domain & email. The editor opens from **Edit site**.

- The website is included in every plan. On Desk it runs on a `mycompanydesk.site` address with a small "Gemaakt met MyCompanyDesk" badge.
- Connecting your own domain, instead of the default `mycompanydesk.site` address, is part of Office. DNS, SPF and DKIM records are managed for you, tucked behind an advanced strip most people never need to open.

## Related

- [PDF design](/en/settings/pdf) for the Invoice design studio
- [Plan & payments](/en/settings/billing) for a custom domain
- [Email](/en/settings/email) for sending from your own domain
- The setup wizard at `/setup` walks new workspaces through these settings in one flow
