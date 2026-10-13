---
title: Firmeneinstellungen
description: "The name on your invoices, address, KvK, logo, brand colour, website and opening hours, grouped in Settings."
last_verified: 2026-10-11
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
- **Registration**: KvK or other registration number. The row warns you (advisory only) when the number does not look like a valid KvK number; actual lookups are done by the fill-in helper at the top of the page, see below.
- **Tax ID**: VAT number (e.g. `NL123456789B01`)
- **Contact**: public email, phone, support email, timezone. The address you log in with is not put on your website until you confirm it as your public address (the website wizard and the publish dialog ask); your invoices keep using it either way.
- **Website + social**: used by the email signature, business page, and footers. Paste the full address of your profile or page (for example `https://instagram.com/yourcompany`); a value that would not become a link is flagged after you leave the field, and a bare username shows where it would link.

Changes save automatically.

## Ausfüllhilfe (Vul je gegevens automatisch in)

Oben auf der Seite Bedrijfsgegevens liegt die Karte **Vul je gegevens automatisch in**. Sie zieht Ihre Unternehmensdaten aus zwei Quellen und stellt sie nebeneinander:

- **Kamer van Koophandel (KvK)**: Firmenname und Adresse
- **Google**: Telefon, Website und Öffnungszeiten aus Ihrem Google-Unternehmensprofil

Jeder Vorschlag steht unter **Dit vonden we** (Das haben wir gefunden) mit genannter Quelle. Kreuzen Sie an, was Sie übernehmen wollen, und drücken Sie **Overnemen** (übernehmen, die Schaltfläche zählt mit, was Sie gewählt haben). Gefüllt werden nur leere Felder: eine Zeile, in der schon etwas steht, wird mit **al ingevuld** (schon ausgefüllt) markiert und übersprungen. Eine Abfrage überschreibt also nie Ihre eigene Arbeit. Die KvK-Schaltfläche, die bisher unter dem Registrierungsfeld lag, sitzt jetzt in dieser Karte; das automatische Ausfüllen geschieht so an einem Ort.

## Certifications (Keurmerken)

Path: `/settings/bedrijfsgegevens#keurmerken`

The **Keurmerken** card on the Bedrijfsgegevens page holds your company's certifications and quality marks, such as STEK, VCA or CE. They appear on your website, and under your emails per mail type as chosen under Settings → Email. You manage them in one place.

- **Add a certification**: choose an image (PNG, JPG, WebP or SVG, 3 MB at most). MyCompanyDesk trims the white space around the logo, caps its height at 480 pixels and converts it to a PNG with transparency. An SVG is rasterized, so mail programs that cannot show SVG still display the mark. The image is optional: a certification can carry just its name, and a name-only mark shows as its name on your website and in the text version of your e-mails.
- **Name**: required, up to 64 characters. The name describes the logo for people who cannot see it.
- **Link (optional)**: for example the register page where customers can verify your certificate. The link must start with `https://` or `http://`.
- Up to six certifications. Reorder them with the up and down arrows; to replace the image, remove the certification and add it again.
- One switch, on by default: **Tonen op je website** feeds the Keurmerken block on your website. Whether the logos also appear under your emails is chosen per mail type under **Settings → Email**; the card shows a note with a link there.
- Adding your first certification automatically places a **Keurmerken** block on the homepage of your website, as a draft. It goes live when you publish your site.
## Form of address on your website (Aanspreekvorm op je website)

Below the Keurmerken card sits the card that decides how your website talks to its visitors: **Je en jij** (personal, "Ik help je graag.") or **U** (polite, "Ik help u graag."). The fixed texts on your site, buttons, form lines, thank-you messages, follow the choice at once; a one-person business speaks as ik instead of we. What you or the text writer already wrote keeps its own voice until you press **Zet alle teksten om naar je** or **Zet alle teksten om naar u**: one run converts every text standing on the site, your own typed text included, changing only the form of address and never the content. The result names how many texts changed and which stayed standing, and a publish puts them live. The website wizard asks the same choice in its first step and writes the same setting.

## Opening hours

Path: `/settings/bedrijfsgegevens#openingstijden`

From here you manage one central source for your opening hours. The same hours feed your website and the online appointments block, so you never have to keep two places in sync.

**Weekly schedule**

- Set each day as **open** or **closed**.
- For an open day, enter one or two time blocks, for example `09:00 - 12:00` and `13:00 - 17:00`.
- A day you do not configure falls back to office hours (`09:00 - 17:00`) for your site and booking block.
- You can also set a day to **by appointment** so it appears open without fixed times.

**Special days**

- Add individual dates for holidays, vacations, or one-off changes.
- For each special day choose **closed**, **by appointment**, or a **custom time block**.
- The online appointments block and your website respect these exceptions.

**Public website and appointments**

Your opening hours are shown on the public business page and in the online appointments block. The website tab is managed under the top-level **Website** area; the booking block is covered on [Online appointments](/en/features/site-bookings). Both pull from the same source, so a change here updates both places. These hours limit the moments customers can pick themselves online. Someone who requests an appointment instead is not limited by them: any day can be asked, and you confirm.

Changes save automatically. See [Online appointments](/en/features/site-bookings) for how the booking block uses your opening hours.

### Google mitführen (Ook op Google bijhouden)

In der Karte Öffnungszeiten sitzt eine Zeile, die Ihre Zeiten mit Ihrem Google-Unternehmensprofil verbindet. Schalten Sie **Ook op Google bijhouden** ein (auch auf Google aktuell halten), melden Sie sich bei Google an und wählen Sie den Standort, der aktualisiert werden darf. Ändern Sie danach etwas, stellt MyCompanyDesk diese Änderung in der Nacht auch auf Ihrem Google-Profil; die Zeile meldet das mit **Je wijziging gaat vannacht naar Google** (Ihre Änderung geht heute Nacht zu Google).

Weichen die Wochen ab? Dann fragt die Zeile, welche Fassung gilt, denn MyCompanyDesk überschreibt Google nie von sich aus: **Zet mijn tijden op Google** (meine Zeiten auf Google stellen) oder **Neem die van Google over** (Googles Zeiten übernehmen). Das Übernehmen ersetzt die oben stehenden Zeiten durch die von Google und aktualisiert damit auch die „Jetzt geöffnet“-Anzeige auf Ihrer Website. Gelistet werden nur die Tage, die abweichen, und ein Tag auf **auf Termin** erscheint bei Google als geschlossen, weil Google diesen Zustand nicht kennt. Mit **Nu bijwerken** (jetzt aktualisieren) schicken Sie Ihre Zeiten ohne Warten auf die nächtliche Runde zu Google; nach einer misslungenen Zustellung steht die Schaltfläche neben dem Fehler erneut bereit.

Schalten Sie den Schalter aus, wird das Nachhalten gestoppt, aber Ihr Konto und Ihr Standort bleiben verbunden.

## Logo and colour (Logo en kleur)

Path: `/settings/uiterlijk`

Branding for invoices, quotes, and outgoing email, with a live preview of the result.

- **Logo upload**: used on every PDF and email header
- **Display name** (Weergavenaam): an optional brand name on your emails and PDFs. Leave it empty and your business name is used. Once it differs from the business name, it also decides what your invoice and the app menu carry; the business-details form then shows under the name field what displays at the moment ("Your invoice and menu currently show: ..."), with a link back to this page.
- **Brand colour**: one accent colour across your website, newsletter, emails, documents and public business page. If you set a different accent colour in **Factuurontwerp** (invoice design), that colour is what customers see on invoices, quotes, emails and the payment page. A hint under **Logo en kleur** offers a one-click option to make it your workspace brand colour too.
- **Style presets**: pick a document style, available on every plan
- **PDF footer**: the footer text at the bottom of your documents

There is one default brand colour for all customer surfaces; a second accent colour no longer exists. For full control over the layout, colours, and font of your invoices and quotes, open the **Factuurontwerp** row (the invoice design studio); see [PDF Customization](/en/settings/pdf).

## Your website

Your public business page is managed in the top-level **Website** area of the app, not under Settings. It is a dashboard with six tabs: Overview, Visitors, Findability, Connections, Domain & email, and Settings. The site editor opens from **Edit site**.

- The website is available on every plan. On Desk it runs on a `mycompanydesk.site` address with a small badge.
- Connecting your own domain, replacing the default `mycompanydesk.site` subdomain, requires Office. DNS, SPF, and DKIM records are managed for you, tucked behind an advanced strip most users never need to open.

## Related

- [PDF Customization](/en/settings/pdf) for the Factuurontwerp design studio
- [Plan & payments](/en/settings/billing) to unlock the custom domain
- [Email setup](/en/settings/email) for sending from your own domain
- The setup wizard at `/setup` walks new workspaces through these settings in one flow
