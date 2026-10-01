---
title: Paramètres entreprise
description: "The name on your invoices, address, KvK, logo, brand colour, website and opening hours, grouped in Settings."
last_verified: 2026-09-29
---

# Company Settings

Everything that defines how your business looks to the outside world: the name on your invoices, your logo and brand colour, your public website, and your opening hours.

## Where to find it

Open **Instellingen** (Settings) from the menu, or go to `/settings`. Company topics are rows in the **Je bedrijf** (your business) group:

- **Bedrijfsgegevens** (business détails) at `/settings/bedrijfsgegevens`: company info, address, KvK number, VAT number, opening hours
- **Logo en kleur** (logo and colour) at `/settings/uiterlijk`: logo, brand colour, document styling
- **Factuurontwerp** (invoice design) at `/settings/factuurontwerp`: the invoice design studio, covered on [PDF Customization](/en/settings/pdf)

Old links to the previous workspace settings pages redirect to the new locations automatically.

## Business détails (Bedrijfsgegevens)

Path: `/settings/bedrijfsgegevens`

The identity form. What every invoice, quote, and email shows.

- **Business name**: appears on every document
- **Address**: street, postal code, city, country (with address autocomplete)
- **Registration**: KvK or other registration number. The row warns you (advisory only) when the number does not look like a valid KvK number; actual lookups are done by the fill-in helper at the top of the page, see below.
- **Tax ID**: VAT number (e.g. `NL123456789B01`)
- **Contact**: public email, phone, support email, timezone
- **Website + social**: used by the email signature, business page, and footers. Paste the full address of your profile or page (for example `https://instagram.com/yourcompany`); a value that would not become a link is flagged after you leave the field, and a bare username shows where it would link.

Changes save automatically.

## Aide au remplissage (Vul je gegevens automatisch in)

En haut de la page Bedrijfsgegevens se trouve la carte **Vul je gegevens automatisch in**. Elle tire vos données d'entreprise de deux sources et les place côte à côte :

- **Kamer van Koophandel (KvK)** : nom de l'entreprise et adresse
- **Google** : téléphone, site web et heures d'ouverture depuis votre profil Google Business

Chaque suggestion figure sous **Dit vonden we** (voici ce que nous avons trouvé) avec sa source indiquée. Cochez ce que vous voulez reprendre et appuyez sur **Overnemen** (reprendre, le bouton compte ce que vous avez coché). Neufs, seuls les champs vides sont remplis : une ligne qui contient déjà quelque chose est marquée **al ingevuld** (déjà rempli) et est passée. Une recherche n'écrase donc jamais votre propre travail. Le bouton KvK qui se trouvait sous le champ d'immatriculation vit désormais dans cette carte : le remplissage automatique se passe ainsi à un seul endroit.

## Certifications (Keurmerken)

Path: `/settings/bedrijfsgegevens#keurmerken`

The **Keurmerken** card on the Bedrijfsgegevens page holds your company's certifications and quality marks, such as STEK, VCA or CE. They appear on your website, and under your emails per mail type as chosen under Settings → Email. You manage them in one place.

- **Add a certification**: choose an image (PNG, JPG, WebP or SVG, 3 MB at most). MyCompanyDesk trims the white space around the logo, caps its height at 480 pixels and converts it to a PNG with transparency. An SVG is rasterized, so mail programs that cannot show SVG still display the mark.
- **Name**: required, up to 64 characters. The name describes the logo for people who cannot see it.
- **Link (optional)**: for example the register page where customers can verify your certificate. The link must start with `https://` or `http://`.
- Up to six certifications. Reorder them with the up and down arrows; to replace the image, remove the certification and add it again.
- One switch, on by default: **Tonen op je website** feeds the Keurmerken block on your website. Whether the logos also appear under your emails is chosen per mail type under **Settings → Email**; the card shows a note with a link there.
- Adding your first certification automatically places a **Keurmerken** block on the homepage of your website, as a draft. It goes live when you publish your site.
- Removing a certification keeps the file on the server, so emails that already went out keep showing the mark. An empty list, or **Tonen op je website** switched off, makes the block hide itself on the website.

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

Your opening hours are shown on the public business page and in the online appointments block. The website tab is managed under the top-level **Website** area; the booking block is covered on [Online appointments](/en/features/site-bookings). Both pull from the same source, so a change here updates both places.

Changes save automatically. See [Online appointments](/en/features/site-bookings) for how the booking block uses your opening hours.

### Suivre Google (Ook op Google bijhouden)

Dans la carte Heures d'ouverture se trouve une ligne qui relie vos horaires à votre profil Google Business. Activez **Ook op Google bijhouden** (tenir aussi à jour sur Google), connectez-vous à Google et choisissez l'établissement à mettre à jour. Ensuite, chaque changement fait ici est posé sur votre profil Google dans la nuit ; la ligne l'annonce avec **Je wijziging gaat vannacht naar Google** (votre changement part ce soir vers Google).

Vos semaines diffèrent-elles ? La ligne demande alors la version qui fait foi, car MyCompanyDesk ne réécrit jamais Google de sa propre initiative : **Zet mijn tijden op Google** (mettre mes heures sur Google) ou **Neem die van Google over** (reprendre celles de Google). Reprendre remplace les heures ci-dessus par celles de Google, ce qui met aussi à jour l'affichage « Ouvert » sur votre site. Seuls les jours différents sont listés, et un jour **sur rendez-vous** apparaît comme fermé chez Google, car Google ne connaît pas cet état. Avec **Nu bijwerken** (mettre à jour maintenant), envoyez vos heures à Google sans attendre la ronde nocturne ; après un envoi échoué, le bouton réapparaît à côté de l'erreur.

Désactiver l'interrupteur arrête la tenue à jour, mais votre compte et votre établissement restent connectés.

## Logo and colour (Logo en kleur)

Path: `/settings/uiterlijk`

Branding for invoices, quotes, and outgoing email, with a live preview of the result.

- **Logo upload**: used on every PDF and email header
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
