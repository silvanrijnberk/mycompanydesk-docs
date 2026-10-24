---
title: Site Builder
description: "Build a multi-page business website with the drag-and-drop editor: sections and blocks, your own colours and fonts, and publish when you are ready."
last_verified: 2026-10-24
---

# Site Builder

Build your business website with a drag-and-drop editor. Create multiple pages, compose them with sections and blocks, customize colors and fonts, and publish when you are ready.

## Overview

The site builder replaces the old single-page business profile. Every new workspace starts with a default site (Home, Diensten, Over mij and Contact, plus a privacy policy and terms and conditions) so you have a real multi-page foundation from day one. The editor gives you:

- **Multi-page support**: Create as many pages as you need, each with its own path and sections. The default pages are ready to edit, remove, or add to.
- **Section blocks**: Add blocks such as a large header, text, gallery, photo with text, services, team, customer reviews and a contact form to any page. Save blocks as reusable blocks to build a personal library.
- **Design tokens**: Set brand colors, fonts, spacing, border radius, motion style, custom CSS, and a site favicon. Changes apply across the whole site.
- **Navigation editor**: Drag-and-drop reorder of header links, with dropdown groups, external links, and inline navbar styling (brand name, CTA button, phone, call bar, sticky).
- **Publish snapshots**: Work in draft, preview your changes, then publish. Unpublished changes are tracked in the top bar.
- **Responsive preview**: Toggle between desktop, tablet, and mobile viewports while editing. In desktop view you can also pick a real viewport width (1280, 1440, or 1920 pixels), so the site's own media queries answer honestly instead of being simulated.
- **Resizable panes**: Drag the right edge of the left rail and the left edge of the right inspector to make either pane wider or narrower. Double-click a resize handle to return to the default width. The width is remembered per device in localStorage.
- **Zoom and fit-to-window**: Zoom the canvas from 25% to 200%, or click the zoom value to jump to fit, 50%, 100%, or 200%. The stage scrolls when the scaled canvas exceeds it.
- **Keyboard shortcuts**: Undo and redo, select, move, duplicate or delete a block, zoom, fit to window and close panels. Open the full shortcut overview with ⌘/ or the **Sneltoetsen** (shortcuts) button at the bottom of the rail.

Your website lives in the sidebar under **Communication › Website** (`/website`). The editor opens from there.

Opening `/website` lands on the **Overview** tab: it shows your site, its publish status, and the **Edit site** button. The other tabs are **Visitors**, **Results**, **Pages**, **Findability**, **Connections** and **Domain & email**. The editor itself is at `/website/editor`, reached deliberately through **Edit site** rather than taking over the whole screen on arrival. On a phone the editor opens in a light edit mode for texts, photos, reviews and contact details, without dragging or style settings.

## Website setup wizard

Before you ever open the editor, the website setup wizard can build your first draft for you. Signing up does not build a site yet: the first time you open **Website**, the wizard starts by itself. If an older account already had a site made for it that is not live yet, you see **We hebben je website alvast gemaakt** (we already made your website) instead, with the choice **Zet mijn site live** (put my site live) or **Eerst aanpassen** (adjust first). You can restart it at any time in the editor under **Hele site** (whole site) › **Merk** (brand) by clicking **Set up again**; on a restart it starts from what is already true. It runs these steps:

1. **What you do** (pre-filled from your KVK data) - your work, services and tone. The same step carries your business name (required, saved together with your company details), phone number, WhatsApp (yes, with the same number as your phone, or another number), an optional Instagram name (plus Facebook or LinkedIn if you want it), saved with your company details and switching the footer's social links on once filled in, opening hours (with quick picks for weekdays, the weekend, or every day, and the times set per day), the address your contact page shows, and the address customers may e-mail you on, asked as **Email address for customers** with a checkbox for whether your site shows it. Your login address is prefilled there but only lands on your site while the show-it box stays on; changing the address updates your company details (and your invoices) with it.
2. **What you want** - whether the site should bring in leads, showcase your work, build credibility or get found online.
3. **Light or dark, and colour** - the wizard asks whether your site should come out light or dark, then offers colour sets with gentle, softer shades, a deep blue among the dark options, or your own hex colour. The generated logo preview follows your pick straight away, so the colour step sits before the logo step.
4. **Logo** - keep the AI-generated logo, upload your own PNG/SVG, or use just your business name as a text logo.
5. **Your own photos** (optional) - add up to six photos of your own work. The first lands at the top of your home page, the next ones on the page about you, and from two photos the site also builds a photo gallery out of them. Skip this step and the site gets example photos you can replace later.
6. **Web address** (only when your workspace does not already have an active domain or CNAME serving the site). Add or connect the domain where your site will live. You can skip this step and set up an address later; a site that is already live keeps its address.

Your answers are saved as the site brief. When you finish, the AI writes fresh copy for your whole draft site based on the brief and your workspace data, applies your chosen logo and brand colour, and leaves everything as a draft. Nothing is published automatically. You review the result in the editor and publish when you are happy with it. On the closing card you can adjust the title your site carries in Google before you finish. The finishing run takes about half a minute; leave the screen open, it tells you which stage it is working through.

The services in the first question each take an optional price with a choice between **incl. VAT** and **excl. VAT**, and a preview under the field shows exactly what a visitor will see for it. By default the site shows what the customer pays, so an amount entered excluding VAT is converted at that item's VAT rate; a workspace-wide switch on the site builder blocks, described under [Pricing tiers with buy buttons](#pricing-tiers-with-buy-buttons), can flip the whole site to showing prices without VAT instead. When your workspace charges no VAT (exempt or small business scheme) the field simply reads Price and the hint notes that the prices carry no VAT; type all prices excluding VAT and they appear on the site that way. Each price also takes a unit (per hour, per person) and the row previews the line a visitor will see. Switch on **from** for a starting price, or leave the field empty and your site shows "On request". A price already set in your offering is filled in automatically, and each service carries a tick for whether customers can book it online.

When the booking question is on **Customers pick a time themselves**, the service list also asks how long each appointment lasts. Every service starts with a suggested duration in minutes, based on the name of the service and the work you described in the wizard: a plain cut gets a smaller suggestion than colouring, and a dog salon gets a longer one. Each suggestion is yours to change, and a duration already set in your offering is filled in automatically. A duration is a whole number of minutes between 5 and 480. A service without a duration cannot be booked online: clearing the field keeps the service on your site, but the appointments block no longer offers it to customers as a bookable time. The booking question itself now knows five answers: customers pick a time themselves, they send a request that you confirm, they sign up for a fixed session (a workshop, a class or a guided walk), they ask you for a quote (they describe the job, photos can come along, and the request lands in your inbox), or there is no online booking. A sign-up is built with your first date, sign-up closes two hours before the start, and customers pay on the spot; leave the date empty and you plan the sessions later in the agenda under **Groepsafspraken**. If your site already has an appointments block, the wizard starts on the mode that block uses and follows your choice when you finish.

You can also stop halfway: click **Finish later** or reload, and your answers are still there when you return. The wizard keeps what you changed on that device for about a week, and restores a saved answer only while the underlying value is unchanged; if company details or services changed in the meantime, from Settings or another device, the current value wins.

The same wizard can also rewrite an existing site from scratch. Restarting it from **Merk** confirms first, because finishing replaces copy you may have edited yourself. The site stays a draft until you publish it yourself.

## Editor layout

The editor's top bar holds a row of tabs: first **Hele site** (whole site), then every page of your site. Drag a page tab to change the order (the home page always stays first), or click **+** (**Pagina toevoegen**, add page) for a new page. The tab you pick decides what the rail on the left offers:

- **A page**: **Blokken** (the blocks on this page, to add, move, duplicate or delete them), **Stijl** (what only this page may do differently, such as its background and width) and **Instellingen** (title, web address, menu visibility and how the page shows in Google). Click a block to edit it in the inspector on the right: content, layout, style and animation.
- **Hele site**: **Ontwerp** (the packages gallery), **Kleuren** (colours), **Merk** (brand), **Letters** (fonts), **Knoppen** (buttons), **Menubalk** (menu bar), **Ruimte** (spacing), **Animatie**, **Elementen** (site-wide elements), **Navigatie**, **Footer**, **Versies** (earlier publishes and saved versions, with a way back) and, set apart at the bottom, **Eigen CSS** (custom CSS).

The list of all your pages, with their status, Google description and visit numbers, sits outside the editor on the **Pages** tab of Website. Domain, findability in Google and third-party connections live there too, on the **Domain & email**, **Findability** and **Connections** tabs, not inside the editor.

### Site packages gallery

The packages gallery (`/website/pakketten`, and in the editor **Hele site** › **Ontwerp**) is the fastest way to start from a complete, pre-styled site. It lists every approved site package: a finished template with colours and a font pairing built for a specific trade.

How it works:

1. In the editor open **Hele site** › **Ontwerp**, or go to `/website/pakketten`.
2. Browse the cards. Each card shows a preview of the package, with its name, trade, page count and a short description.
3. Click **Bekijk voorbeeld** (view preview) to look at the package: on `/website/pakketten` in a new tab, in the editor at full size next to your own site.
4. Choose how to use the package:
   - **Take the look**: only the package's colours, fonts and button style. Your pages, blocks and texts stay exactly as they are.
   - **Use this design**: your current draft site (pages, blocks and style) is replaced by the package. MyCompanyDesk then generates photos and texts for your business; the sample figures, reviews and projects from the design stay empty until you fill them in. Your previous draft is kept as a restore point, so you can always go back.
5. Either way a confirmation asks first, and only your **draft** changes. Nothing is published automatically.
6. You review the result in the editor, change copy and images, and publish yourself.

In the editor, applying a package returns you to **Blokken** so you can keep editing. From a preview, **Terug naar alle ontwerpen** (back to all designs) takes you back to the gallery.

Search with the search field (**Zoek een ontwerp**, search a design) or filter by style. The design count next to it updates as you filter.

### On-canvas controls

You can also work on blocks directly on the canvas. Hover over a block to see its name and a small toolbar. Use the arrows to move the block up or down, the plus button (**Blok hier invoegen**, insert block here) to add a block in between, and the actions **Dupliceren** (duplicate), **Kopieer naar pagina…** (copy to page), **Vergrendelen** (lock) and **Verwijderen** (delete). A locked block only offers unlocking. The navigation and footer show their name on hover, but you edit those under **Hele site** › **Navigatie** and **Footer**.

Click a block to keep it selected; the outline then stays visible when you move the mouse away. The canvas and the **Blokken** list read from the same order, so a change in one place shows in the other immediately. In the **Blokken** list you can also hide a block without deleting it.

You can type text straight on the canvas too: click the text, type the change and click elsewhere to save. The matching field in the inspector follows along at once.

Headings that the wizard, a rewrite or a new block write for you come out in sentence form, so a heading reads like a sentence; names such as your company or a brand keep their own capitals.

### Address, map, service area and parking on the contact page

The contact page shows where you work and how to reach it. The **Locaties** block falls back to your business address when you have no locations of your own, and a contact block leaves out an address that a Locaties block already shows on the same page. A new contact page no longer starts with an empty Locaties block. A map (**Kaart tonen**) is drawn from your address when you want one, **Werkgebied** (work area) is one of the presets under **Blok toevoegen** (add block) when you want to show where you come to your customers, and the access section is named **Bereikbaarheid en parkeren** (access and parking).

### A separate address for your website

For a business at home, the site does not have to show that home address. Under **Settings › Business details** you fill in a separate **address for your website**, and the footer, the contact block, the address data for search engines and the legal pages show that address instead. Your invoices keep the registered address. The website wizard's at-home step mentions the address that would otherwise appear at the bottom of the page. Leave the field empty and the site shows the business address, as before.

### The form of address on your site (Aanspreekvorm)

Your site answers its visitors in a form of address you choose: **Je en jij** (personal: "Ik help je graag.") or **U** (polite: "Ik help u graag."). The choice lives in the website wizard's first step and on the card **How your website addresses visitors** under **Settings › Business details** (options **Informal (je)** and **Formal (u)**); both write the same setting. Fixed texts on the site, such as buttons, form lines and thank-you messages, follow the choice at once. What you or the text writer already wrote keeps its own voice; the button on that card, **Switch all texts to informal (je)** or **Switch all texts to formal (u)**, converts everything standing on the site in one run, your own typed text included, changing only the form of address and not the content. The result tells you how many texts were adjusted and which stayed standing, and a publish puts them live. Sections you add later take the form of address the site already carries, and the legal pages, the privacy policy and the terms, render in the chosen form too. For a one-person business the fixed texts speak as ik (I) instead of we; the wizard asks your first name for that voice, and never introduces you with your company name.

## Creating pages

1. In the editor click **+** (**Pagina toevoegen**, add page) after the page tabs, or click **New page** on the **Pages** tab of Website.
2. Give the page a name and pick a **Soort pagina** (page type).
3. The page opens in the editor, where you can add blocks and build it out. You change its web address under the page's **Instellingen**. A page you create here is added to your menu automatically; the 404 page and blog post pages are not. If setting that menu entry fails, MyCompanyDesk tells you and you can turn it on yourself in the menu editor.

### Default pages

Every new workspace comes with these pages already created:

| Page | Path | Description |
|---|---|---|
| Home | `/` | Your main landing page. Cannot be deleted. |
| Diensten | `/diensten` | Show what you offer. Pre-filled with a services section. |
| Over mij | `/over-ons` | Tell visitors who you are. |
| Contact | `/contact` | Contact form and details. Linked from the footer. |
| Privacybeleid | `/privacy` | See Legal pages below. |
| Algemene voorwaarden | `/algemene-voorwaarden` | See Legal pages below. |

These pages are wired into the navigation header and footer automatically. You can edit or delete any of them, except the Home page which is always required. The navigation updates its links when you add or remove pages.

### Page status: Live vs Concept

Pages have a status that controls whether they appear on your published site:

- **Live**: The page is included in the publish snapshot. Visitors see it on your public site after you publish.
- **Concept** (draft): The page is a work in progress. It stays hidden from visitors even after you publish the site.

A new page starts as **Live**, so it goes out with your next publish and a menu link never points at a missing page. A new blog post starts as **Concept**. The home page is always live. You switch a page between Live and Concept with the **Concept** / **Live** toggle next to it in **Manage pages**. Changing the status updates immediately and lights up the Publish button in the top bar, so the next publish picks up the change.

A site whose home page is in Concept renders nothing when published. If you toggle the home page to Concept, switch it back to Live and publish to restore the site.

## Building pages with sections

Open a page in the editor. In the **Blokken** list:

- Click **Blok toevoegen** (add block) to see the available block types (large header, text, gallery, photo with text, services, team, customer reviews, contact form, pricing, product, certifications, online booking, and more).
- Select a block type to insert it onto the page.
- Click any section to open the inspector panel, where you can edit its content, layout, style, and animation.
- Drag sections up or down to reorder. Use the duplicate and delete actions on each section.

Some sections have system-only variants that are available on the locked home page but not on custom pages.

## AI assistant tools

Two AI-powered tools help you write and illustrate your pages faster, right inside the editor inspector.

### Text rewrite

Every text and textarea field in the section inspector gets four small tone buttons below it when the field has enough content (more than a few words). The buttons send your current text to the server, which runs a lightweight Gemini model to rewrite it with a specific tone:

- **Korter** (shorter): Cuts the text to about half its length while keeping the meaning.
- **Kalmer** (calmer): Makes the text warmer and more reassuring. Less sales pitch, more confidence.
- **Scherper** (sharper): Tightens the wording. Stronger verbs, no hesitation.
- **Vriendelijker** (friendlier): Softens the tone to be warmer and more approachable.

The rewrite always stays in the same language as the original (usually Dutch). The model only rewrites, it does not invent new information. The rewritten text replaces your field content inline. You can click another tone button, undo, or edit further.

The text field is limited to 2000 characters for the rewrite call, so the model returns quickly and stays predictable. If the AI service is temporarily unavailable, you will see an error message and your original text stays untouched.

### Stock photo search

When you open the image upload field in any section block (hero, spotlight, team, portfolio, logos, product), you now see a **Stockfoto** button next to the upload and URL paste buttons. Clicking it opens an inline search panel connected to Unsplash, the free stock photo library.

- Type a search term (e.g. "hair salon", "coffee", "wood") and hit enter.
- Results appear in a grid. Click any photo to insert it as your section image.
- The search is proxied through the MyCompanyDesk server, so your Unsplash access key never reaches the browser.
- Attribution is tracked automatically per Unsplash's API guidelines and rendered on your published site. The "Foto's: `photographer` · Unsplash" credit line in the footer names the photographers of the stock photos a visitor actually sees on the published site: a service card that picked up your own photo from your offering no longer earns a credit, the same photographer is named once, and photos you replaced drop out.

Alt text follows your own photos: an upload's alt comes from the image file's name (place names kept whole, at most 200 characters), and you can replace that alt afterwards, on an upload as well as on a stock photo already in place.
- If Unsplash is not configured on your workspace, the Stockfoto button stays hidden so you never see a broken feature.

## Saved blocks

Save any section as a reusable block and build a personal library of pre-styled building blocks. Saved blocks appear at the top of the section adder, so you can drop a saved layout onto any page without rebuilding it from scratch.

### Save a section as a block

1. In the **Blokken** list, open a block's **Meer acties** (more actions) menu and choose **Bewaar als blok** (save as block).
2. Give the block a name (the block label is pre-filled as a suggestion).
3. The block is saved to your personal library for this workspace.

### Insert a saved block

1. Click **Blok toevoegen** on any page.
2. Your saved blocks appear under **Mijn blokken** (my blocks) at the top of the adder panel.
3. Click a saved block to insert it as a new section on the current page.

Inserting a saved block copies its template into a fresh section row. Editing or deleting the inserted section does not touch the saved block in your library, and the other way around.

### Manage your library

- **Remove a block** from the library by clicking the x icon on the block in the adder panel. This only removes the saved template; it does not affect sections already inserted from it.
- The **Mijn blokken** header is hidden when your library is empty, so a first-time editor does not see an empty category.

### Section layout variants

Many blocks support multiple layout variants, including the large header, services, pricing, customer reviews, team, FAQ, figures and the call to action. Pick one from the **Stijl** (Style) dropdown in the inspector's Layout tab to change how the section renders. The default variant preserves the existing look, so sections you built before this feature keep rendering as they always did.

#### Large header variants

| Variant | Effect |
|---|---|
| **Standaard (foto rechts)** | Default. Photo on the right, text on the left. Falls back to centered text when there is no photo. |
| **Foto links** | Mirror of the default: photo on the left, text on the right. |
| **Portret (ronde foto links)** / **Portret (ronde foto rechts)** | A round portrait photo next to the text. |
| **Gecentreerd** | Text centered, optional photo beneath it. |
| **Foto als achtergrond** | Full-width background photo with light text on top. |
| **Minimaal (alleen tekst)** | Text only in a narrow column. No photo. |
| **Redactioneel**, **Affiche**, **Omkaderd**, **Groot cijfer** | Typographic variants without a photo: a large heading with a meta column, a statement between rules, a print-style frame, or a large outlined numeral. |

#### Services variants

| Variant | Effect |
|---|---|
| **Standard (cards)** | Default. Grid of cards in 2, 3, or 4 columns. Icon, title, and description per item. |
| **Icon grid** | Denser, icon-led layout with larger icons and less card chrome. Best for 4 or more short-label items. |
| **List** | Vertical rows with an icon on the left and text on the right, separated by thin rules. Good for long read-through lists. |
| **Accordion** | Vertically stacked clickable rows. Description hidden until the row opens. Uses the same chevron animation as the FAQ block. |

#### Pricing variants

| Variant | Effect |
|---|---|
| **Standard (cards)** | Default. Side-by-side tier cards with name, price, feature list, and buy button or CTA. |
| **Comparison table** | Feature matrix. Rows are the union of all features across tiers. Columns are the tiers. Each cell shows a check mark or a dash so visitors can scan across columns to compare plans. The highlighted tier column stays tinted. |

#### Testimonials variants

| Variant | Effect |
|---|---|
| **Standard (grid)** | Default. Cards in a 2 to 3-column grid. Each card shows the quote, name, and optional role. |
| **Spotlight (één quote)** (single quote) | A single large pull-quote in magazine style, centered with serif typography. Extra testimonials appear as small attribution chips below the main quote. |
| **Marquee** | A horizontally scrolling row of quote cards. Hover pauses the animation; the OS reduced-motion preference stops it entirely. The track loops seamlessly with two copies of the item set. |

### Photo with text

The **Foto met tekst** (photo with text) block is an alternating media-and-text row. Each instance shows an image on one side and text on the other: eyebrow, title, subtitle, bullets with check marks, and an optional call-to-action link. You control which side the image sits on via the layout panel.

A few things to know:

- **Image side**: The layout variant defaults to image-right. Switch to image-left in the layout panel to flip the row.
- **Optional pieces**: Eyebrow, subtitle, bullets, CTA, and image are all optional. A spotlight with only a title and image still renders cleanly.
- **Stacking**: Add several spotlight sections in a row to build a classic list of features, one below the other.
- **Sticky media**: Switch on **Foto blijft staan als je scrolt** (photo stays while you scroll) in the inspector to pin the image while the text beside it scrolls. Desktop only; it only shows when there is enough text next to the image to make it meaningful. On mobile the image stacks normally.

### Pricing tiers with buy buttons

The pricing section lets you list your plans or packages. Each tier can optionally include a buy button:

- Switch on **Met koopknop** (with buy button) for a tier and fill in **Prijs bij afrekenen (incl. btw)**, the amount the buyer actually pays (for example 750,00). Keep the price text on the card the same.
- A **Buy now** button replaces the static CTA link. Visitors clicking it go through the MyCompanyDesk checkout, which redirects to Mollie or Stripe Connect for payment.
- The buy-button label defaults to "Koop nu" but can be customised per tier in the **Koop-knop tekst** (buy button text) field.
- Pricing tiers without buy buttons keep the existing CTA link behaviour.

Pricing sections can also render as a feature comparison matrix. Switch the layout variant to **Comparison table** in the inspector. The matrix shows each tier as a column and every feature from all tiers as a row, with check marks where a tier includes the feature. This makes plan-to-plan comparison easy at a glance. See [Section layout variants](#section-layout-variants) for the full options.

Blocks that show catalog prices, services, products, subscriptions or pricing tiers, carry **Prijzen op je website: inclusief / exclusief btw** in the inspector, saved workspace-wide. On the default, including, your site shows what the customer pays, and a structured price carries its own small label (including VAT, or exempt when your workspace charges no VAT) so the amount is never ambiguous. The excluding choice prints the typed amount without VAT with an **excl. btw** label: on service cards, in the pricing block, in the appointment block's service list and on group sessions. Free, On request and your own website text stay untouched, and what a visitor actually pays at checkout, through a deposit, a product buy button or an online payment, remains including VAT. Saving re-bakes the published site.

### Product block

A standalone single-item buy card, for when a full pricing table is more than you need:

- One product name, description, optional image, price, and a buy button.
- Same checkout plumbing as the pricing buy buttons, your visitor pays through Mollie or Stripe Connect.
- An optional note line under the button for delivery info, disclaimers, or shipping notes.

See [Sales](/en/features/domains-website-inbox#sales) for tracking payments and orders.

### Certifications block

The **Keurmerken** block shows your company's certifications and quality marks (STEK, VCA, CE and more), exactly as you enter them under **Settings › Business details**. You manage that list in one place: the block is data-bound, so the inspector has no items editor, only the presentation.

- **Caption**: "Certificeringen en keurmerken" by default. Type your own caption, or leave it empty for a block without a heading.
- **Style**: white tiles (default) or plain. **Size**: small, medium, or large.
- A certification is fine without an image: a name-only mark shows as its name on the site and in the text version of your e-mails. An image stays optional; when you place one, it goes through the usual trimming and conversions.
- Up to six certifications; order, name, and link are set under Settings › Business details. When you add your first certification, MyCompanyDesk automatically places a Keurmerken block on your homepage, as a draft: before a closing call-to-action if that is the last block, otherwise at the bottom before the footer. It is not published right away; you publish. If your site already has a certifications section, no second one is added.
- If the list is empty, or **Show on your website** is switched off under Settings › Business details, the block hides itself on the published site. The editor also tells you when certifications are switched off for the website.
- When you remove a certification, the file is kept and email that already went out keeps showing the logo; the block only hides itself once the list is completely empty.

### Services and products from your offering

Blocks with services, products or subscriptions pull their items from your offering (Aanbod). A description you type for a service is one text: the services block on your home page and the services page share it, so a fix lands in both at once. Re-baking the site never puts a service card's draft text live: until you publish, the cards keep the text they had.

The price follows the price mode set in your offering: a fixed amount, "from" an amount, or "On request" when no price is set. A price of zero is a real price: a deliberately free item shows "Free" on the site, the price list, the catalog list and the booking block, instead of being treated as unpriced; only items with no price at all show "On request".

## Section animations

Every block has an **Animatie** tab in the inspector. It lets you add motion that plays when the block comes into view, on page load, or when the pointer is on it.

### Animation style

Pick how the block appears under **Animatie-stijl** (animation style):

| Style | Effect |
|---|---|
| **Geen** (none) | No animation, the block is simply there. |
| **Zacht omhoog** (soft up, default) | The block fades in while sliding up a little. |
| **Zacht in beeld** (soft in) | The block fades in from transparent. |
| **Schuif van rechts** (slide from the right) | The block fades in while sliding in from the side. |
| **Inzoomen** (zoom in) | The block grows slightly to its own size. |
| **Uitvouwen (horizontaal)** (unfold horizontally) | The block unfolds across its width. |
| **Na elkaar** (one after another) | The block's items appear one after another instead of the block itself moving. |
| **Trap (paginakop)** (cascade, page header) | The parts of the page header appear in steps. |
| **Onthullen** (reveal) | The block is revealed through a mask. |
| **Woord voor woord (titel in de paginakop)** (word by word) | Large header only. Each word of the title appears on its own beat; other blocks simply fade in. |

### When it starts

- **Bij in beeld komen** (on entering view, default): The animation plays when the block scrolls into view. Once a block has animated in it stays visible.
- **Direct bij laden** (on load): The animation starts as soon as the page has loaded.
- **Bij aanwijzen** (on hover): The animation starts when the pointer enters the block and reverses when it leaves.

### Controls

- **Snelheid** (speed): How long the animation takes, from 200 to 1600 milliseconds. Default 600 ms.
- **Vertraging** (delay): Wait time before the animation starts, from 0 to 1200 milliseconds. Default 0 ms.
- **Soort beweging** (kind of motion): The easing curve. Options are **Soepel** (smooth, default), **Vloeiend** (fluid), **Gelijkmatig** (even) and **Lineair** (linear).
- **Onderdelen na elkaar** (items one after another): Only on blocks with several items. The block's items appear shortly after one another instead of all at once.

How blocks appear site-wide is set under **Hele site** › **Animatie**: **Geen**, **Subtiel**, **Zacht**, **Zijwaarts**, **Onthullen** or **Speels**.

### Motion reduction

Visitors who have `prefers-reduced-motion: reduce` enabled at the OS level see every section in its final resting state immediately. No animations play. Workspace-level motion tokens can also force reduced motion on a per-site basis. When reduced motion is active the section never receives the hidden start-state class, so the server-rendered HTML is accessible before any JavaScript runs.

## Section dividers

Each block has an **Onderkant scheiding** (bottom divider) setting in the inspector's style panel. It adds an SVG shape at the section's bottom edge that overflows into the next section, creating an organic visual transition instead of a hard horizontal cut. The divider draws the current section's background color, so it works best between adjacent sections that have different solid backgrounds.

### Divider types

| Type | Effect |
|---|---|
| **Golf** (wave) | A smooth S-curve along the bottom edge. |
| **Boog** (curve) | A concave bowl: the next section intrudes upward in the middle. |
| **Schuin** (slant) | A right-rising diagonal cut from left to right. |
| **Geen** (none) | No divider. Sections meet at a flat horizontal edge (default). |

### How it works

- The divider SVG sits entirely below the section, in the next section's space. It does not overlap the current section's content.
- The filled portion of the path draws the current section's background extending downward. The transparent area below the shape lets the next section show through.
- The divider preserves the section's background color automatically, including custom hex values and CSS variable tokens.
- Dividers are decorative (`aria-hidden="true"`) and do not affect keyboard or screen-reader navigation.

## Styling your site

Under **Hele site** in the editor you control the look and feel of your entire site. Each part has its own button in the rail:

- **Kleuren** (colours): At the top you pick the text size for your visitors (**Normal**, **Large** or **Extra large**). Below that sit the **Kleurthema's** (colour themes): ready-made colour schemes (among them Editorial, Studio, Tech, Atelier, Bold, Calm, Mono and Vivid) that you apply in one click. Your fonts, block styles, texts, photos, logo and buttons stay as they are; choose **Ook letters en vormen overnemen** (also take the fonts and shapes) if you want the theme's fonts and shapes too. Then you set six colours one by one under plain names: **Hoofdkleur** (primary colour), **Tweede kleur** (second colour), **Pagina-achtergrond** (page background), **Blokken en kaarten** (blocks and cards), **Tekst** (text) and **Kleine tekst** (secondary text). A readability check warns you when a combination has too little contrast.
- **Donkere kleuren** (dark colours, at the bottom of Kleuren): Four options: **Uit** (off, the site stays light), **Altijd donker** (always dark, for every visitor), **Knop in menubalk** (button in the menu bar, visitors see a sun/moon toggle and can switch) and **Volgt het toestel** (follows the device setting of the visitor). With a dark version on, you pick a ready-made dark set or set the dark colours yourself; an empty field takes the same colour as in light mode, and a primary or second colour that would vanish on the dark page (black, navy) automatically gets a lighter night version. At the top of Kleuren you also find **Liever een donkere site?** (rather a dark site?), with **Bekijk donkere ontwerpen** (jumps to the dark designs in the gallery) and **Maak mijn site donker** (make my site dark). When you apply a site package while your site is always dark, the site asks first, because the package turns Altijd donker off so the result looks like its preview.
- **Merk** (brand): Your logo for a light and (optionally) a dark background, your favicon, and the **Set up again** button for the wizard. If no favicon is set, the site falls back to your light logo, then your business profile picture.
- **Letters** (fonts): Choose heading and body fonts from the built-in font library (among them Inter, Geist, DM Sans, Fraunces, Lora, Space Grotesk and DM Serif Display), or a ready-made font pairing. All fonts are served from MyCompanyDesk itself, not from Google Fonts or another third-party CDN. The same font files are used in the editor and on your published site, so the typeface looks identical everywhere and visitor IP addresses do not go to a third party.
- **Knoppen** (buttons): Corner radius, the default button style, the bullet style, the heading style (size, capitalisation, letter spacing and weight of headings), gradients on buttons, and the card style. The card style controls how cards for services, reviews and pricing look: **Vlak (geen rand)** (flat), **Met rand** (bordered, default), **Met schaduw** (shadowed), **Zwevend (sterke schaduw)** (elevated), **Brut (harde rand, blokschaduw)**, **Lijn (alleen contour)** (outline only) or **Glas (mooist op een foto)** (glass). Glass looks best over a photo, gradient, or decorative band; on a plain background it falls back to a softly tinted card.
- **Menubalk** (menu bar): The layout, shape and background of the menu bar, its button style, the logo size, the menu links and their effect, and whether the bar hides when scrolling down. The menu bar's content (logo or brand name, the button on the right, phone and WhatsApp number) lives here too; see [Navigation](#navigation).
- **Ruimte** (spacing): Density (**Compact**, **Ruim**, **Royaal**), maximum page width, space above and below blocks, colour alternation between blocks, background texture, and the colour look of your photos.
- **Animatie**: How blocks appear site-wide as visitors scroll (**Geen**, **Subtiel**, **Zacht**, **Zijwaarts**, **Onthullen** or **Speels**), plus **Minder beweging voor wie dat instelt** (less motion for visitors who ask for it in their system settings).
- **Elementen** (elements): Parts that appear on every page: the **Leesbalk** (a thin reading progress bar at the top or bottom while visitors scroll), an **Aankondigingsbalk** (announcement bar), the **Zwevende contactknop** (floating contact button for WhatsApp, phone or email) and a **Cookiemelding** (cookie notice).
- **Eigen CSS** (custom CSS): Write your own CSS that gets injected into the site. Useful for fine-tuning or overriding defaults. This button sits at the bottom of the rail, apart from the rest, because a mistake in it affects the whole site. The **Analytics-snippets** live here too (Plausible Analytics and a font preconnect); other analytics such as Umami, Matomo or Google Analytics are connected on the **Connections** tab of Website.

### Logo import

If you already have a logo on your website, you can import it directly into MyCompanyDesk. Under **Hele site** › **Merk**, use **Heb je al een website? Haal je logo daarvandaan** (already have a website? fetch your logo from it) and enter the URL of the page that contains your logo. MyCompanyDesk fetches the page, extracts the best available logo, and creates both a light and a dark version for your site. After import you can still replace each version separately.

Changes under **Hele site** are saved automatically and apply to all pages.

## Publishing

The top bar shows a dot when unpublished changes are waiting. Publishing snapshots only the pages marked as Live. Pages in Concept stay hidden from the public site, even after you publish.

Until you publish, your public URL sends a `noindex` robots tag. That keeps the workspace subdomain out of search engines while you are still building; the subdomain itself is only applied when you first publish.

When you are ready:

1. Click **Publish** in the top bar.
2. Your site is published to the public URL (your custom domain, your address on `mycompanydesk.site`, or the fallback address in the app).

Unpublished changes are tracked per page and per token. The publish button is disabled when there is nothing to publish. Toggling a page between Live and Concept is an immediate save that registers as an unpublished change, so the Publish button lights up the moment you toggle.

From whichever entry point you publish, the overview, the editor toolbar or the first-run screen, the same publish warning appears once something stands out, and it lists every point with its own action:

- **Placeholder copy** still untouched on your pages.
- **FAQ blocks** carrying questions without answers, with a link that opens that block to write them.
- **Pricing cards without a price.** A Tarieven block would go live with cards that carry no amount, so the warning names them and links to the block to fill in the prices.
- **Fields missing on your legal pages**, with a link that fills in the company details. Without a KVK number yet you can still publish: that line is left off the pages, and you add it later in the same place. An information line about the KVK number sits in the dialog itself, so the reason that number stands on your legal pages is named where you publish.
- **A contact block nobody can reach** (no phone and no e-mail anywhere on it).
- **Your login e-mail address.** The site keeps the address you log in with off your pages until you say it may be shown. The warning offers to show this address on your site, or a link to set a different public e-mail address; you can also keep the address off the site. A deliberate "no e-mail on my site" counts as information, not as a warning, and it never holds up publishing. Where the hidden address would have stood, your phone number and the rest of the sentence stay standing: the wording around the removed address is tidied up rather than printed.

Information only: if the site builder left example (stock) photos standing that you have not replaced yet, the dialog carries one line pointing at the first of them, with a button that opens that block so you can place a photo of your own. This line never opens the warning by itself; it also appears beside the publish button and on the Overview.

When everything still standing is informational, the dialog switches to a neutral "Ready to publish" that only asks for confirmation.

The first publish ends with **Your website is online**: **View your site** and **Share your link**, with a copy button for the address you hand out to customers.

A fast double-click cannot publish by accident: the confirm button in the publish warning ignores clicks for a moment after it opens, and a second click straight after the first cannot fire a duplicate publish or skip the warning.

## Navigation

The navigation editor (**Hele site** › **Navigatie**) lets you arrange your site's menu items:

- Drag pages to reorder the top-level navigation.
- Create dropdown groups to nest pages under a parent label.
- Add external links that point outside your site.
- The logo in the header is clickable and always links back to the home page.
- The home page is always first and locked in position.

The content of the menu bar itself is set under **Hele site** › **Menubalk**:

- **Logo** and **Merknaam** (brand name): Choose what the menu bar shows (**Automatisch**, **Alleen merknaam** or **Logo + merknaam**). Automatic shows your logo once you upload one, and your brand name otherwise.
- **Button**: The text and destination of the button on the right of the menu bar, and its **Knopstijl** (button style). Text and destination must both be filled for the button to appear.
- **Telefoonnummer (tel: link)** (phone number): A clickable phone number next to the button on desktop and in the mobile menu. Leave it empty to hide it.
- **Bel-label (mobiel)** (call label): The text next to the phone icon on mobile ("Bel direct" when left empty).
- **Belknop onderaan op mobiel** (call button at the bottom on mobile): A fixed call button at the bottom of the screen on mobile devices, so visitors can call you with one tap wherever they are on the page. The call bar can also carry WhatsApp next to the call button: it takes the WhatsApp number the rest of your site already carries (a WhatsApp button, a contact block with WhatsApp, or the floating contact button), while a **WhatsApp-nummer** you fill in here wins. On mobile the floating contact button leaves WhatsApp out as soon as the bar shows it, so WhatsApp never appears twice on one screen.
- **Menubalk blijft in beeld bij scrollen** (menu bar stays in view while scrolling): On by default. The menu bar stays visible as the visitor scrolls down the page.

These settings apply to every page on your site and save automatically. The menu bar's design (layout, background, button style) sits in the same place, see [Styling your site](#styling-your-site).

## Footer links

The footer editor lives under **Hele site** › **Footer**. It composes the bottom of every published page from two sources: automatic blocks that pull from your pages and company settings, and manual link columns you add yourself.

### Automatic footer blocks

Three switches control content that is generated for you:

- **Paginalinks automatisch tonen** (show page links automatically, "Pagina's"): a sitemap column with a link to every live, indexable page on your site. It is on by default for new sites because it helps search engines find every page and prevents orphaned pages. The home page, blog posts, draft pages, password-protected pages, and pages marked "noindex" or hidden from the sitemap are excluded automatically. Hide an individual page from this column by turning off **Tonen in sitemap** (show in sitemap) in that page's SEO settings.
- **Contactgegevens tonen** (show contact details, "Contact"): your public email, phone number, and address from your company details.
- **Social links tonen (Instagram, Facebook, LinkedIn)** ("Social"): the social URLs saved in your company details. For Instagram, Facebook and LinkedIn the footer panel lets you fill the address in directly, and asks for a confirmation before it updates the details in your company settings.

These blocks appear in your site's own footer styling, below any manual columns. If your design already shows contact or social details, the matching toggle is hidden so nothing appears twice.

### Manual link columns

Below the automatic switches you can add up to six curated footer columns. Each column has a title and a list of links. Use them for legal pages, product categories, or external resources. Links accept internal paths, external HTTPS URLs, email (`mailto:`), or phone (`tel:`).

## Company merge tokens

Text fields in the site builder can contain merge tokens that pull live company data from your workspace settings. When the published site renders, each token is replaced with the current value from **Settings › Business details** (`/settings/bedrijfsgegevens`). This means you can type your company name, address, or contact details once and keep every page in sync automatically.

Available tokens:

::: v-pre
| Token | Shows |
|---|---|
| `{{bedrijf.naam}}` | Business name |
| `{{bedrijf.adres}}` | Full address, joined from street, postal code, and city |
| `{{bedrijf.kvk}}` | Chamber of Commerce (KvK) number |
| `{{bedrijf.btw}}` | VAT number |
| `{{bedrijf.email}}` | Public email address |
:::

How to use them:

- In any text area field, click the chip that matches the value you want. The token is inserted at the cursor.
- You can also type a token by hand. Only the five keys above are supported.
- If a value is empty in your company settings, the token renders as a bracketed hint on the public site, for example `[bedrijfsnaam]`, so you can spot what is still missing. The e-mail token carries your public address: the address you log in with is public only once you confirmed it on your website (the publish dialog asks); until then, text that leaned on the token is tidied up on the published site with your phone number left standing, and no visitor ever sees the token itself.
- Tokens are resolved after the publish snapshot, so later edits to your company details show on the live site without a new publish.
- Legal pages seeded by the platform use these tokens automatically. Editing the surrounding text does not break the binding.

## Public URL

Your website is served at the highest-priority URL available:

1. Your custom domain (e.g. `https://acme.nl`) when verified and enabled (Office)
2. Your free address on `mycompanydesk.site` (e.g. `https://acme.mycompanydesk.site`), created from your company name at your first publish
3. The fallback address in the app (`/sites/{slug}`), as long as there is no free address yet

See [Domains, Website and Inbox](/en/features/domains-website-inbox) for domain setup and verification.

## Contact form

The contact form block is a live submit handler. When a visitor fills in the fields you configured (name, email, phone, company, message) and hits send, the platform creates a request and notifies your workspace. The form shows a success banner on completion and an inline error if something goes wrong. All inputs are disabled during submit to prevent double sends.

In the inspector, **Wat vraagt de klant?** (what does the customer ask for?) picks the block's request kind: **Offerte** (quote, a request for work), **Bericht** (message, a plain question or introduction), **Afspraak** (appointment, a request for a moment in your calendar), or **Terugbelverzoek** (call-back request, name and phone only, no email required). **Volg je bedrijfsinstelling** (follow your business setting) follows the workspace-wide default set under **Website › Connections**. The kind decides how submissions are named in your inbox, notifications and mail. The workspace-wide default also names the requests tab under **Quotes**, for example **Quote requests** or **Call-back requests**. A call-back form swaps the required email field for a required phone field.

On quote and message forms, **Bezoekers kunnen foto's meesturen** (visitors can send photos along) lets a visitor attach up to 3 photos (10 MB each, JPEG, PNG or WebP) to the request. See [Quote requests](/en/features/quotes#quote-requests) for what arrives on your side.

What happens on submit:

1. Only the fields the block actually renders are sent, so hiding the name input does not cause an error.
2. The platform creates a quote request under the company tied to the site slug.
3. You receive a workspace notification.
4. The request appears under **Quotes**, on the requests tab.
5. The visitor sees a customizable success message.

Contact-form submissions are only accepted when the site has been published: submissions to a draft or unpublished workspace are rejected. They are rate-limited to 5 per minute per IP address and also guarded by a per-company abuse cap, so one busy visitor cannot exhaust your notification budget. A Cloudflare Turnstile widget also appears before submit when configured on your workspace, blocking automated bot submissions without slowing real visitors down.

## Newsletter signup

The newsletter block captures email signups from your published site. Signing up uses double opt-in: after submit, the visitor receives a confirmation email and must click the link to activate their subscription. Suppressed addresses and already-active subscribers are treated the same as new signups from the form's perspective (no data leakage).

What happens on submit:

1. The platform stores the signup, with your website as its source.
2. If the address is not already active and not suppressed, a double opt-in email is sent.
3. The visitor sees a success banner regardless, keeping the subscription state private.
4. Once confirmed, the subscriber appears in the newsletter audience for that workspace.

Newsletter submissions share the same rate limit as the contact form: 5 per minute per IP address. The Turnstile bot-protection widget is also active on newsletter forms when configured.

## Legal pages

The site builder seeds every new workspace with two standard legal pages: **Privacy Policy** (`/privacy`) and **Terms & Conditions** (`/algemene-voorwaarden`). The content uses placeholder markers for company details. When the page is rendered for visitors, these markers are replaced with the values from your **Company Settings**: business name, address, postal code, city, country, registration number, VAT number, and public email.

The text of both pages is matched to your trade, terms and privacy alike. The terms page comes in two variants. Businesses that sell straight to consumers, appointment-based trades and shop or food trades such as a bakery, get consumer terms: they cover orders and appointments, the statutory right of withdrawal for consumers with its legal exception for made-to-order or perishable goods, payment, cancelling appointments and lessons, liability and complaints, plus a generic allergy note. Quote-based trades and B2B services keep the existing contractor terms, which cover quotes, extra work and delivery. Both variants use the same placeholder markers.

You can edit the legal pages in the editor like any other page. The editor preserves the placeholder anchors inside the content, so opening and saving a page without changing it still lets future updates to your company details flow through automatically.

When MyCompanyDesk improves the standard legal texts, existing sites are refreshed too. As soon as you open Website, the platform checks whether your privacy and terms pages are still, word for word, one of the standard texts it generates for your trade. A page you have edited yourself is never touched. A page that still carries the standard text is rewritten to the wording your trade needs: when that page was live, only that page is refreshed inside the published snapshot, so your other drafts are untouched and the publish bar does not report it as an unpublished change; a page in Concept stays a draft and shows the new text the next time you publish.

The legal pages are rendered at publish time, just like the rest of your site. They share the same Live/Concept status and the same subscription visibility gate.

## Managing requests

See [Quotes - Quote Requests](/en/features/quotes#quote-requests) for details on managing incoming requests.

## Subscription requirement

The public website (business page and site builder) is available on every plan and stays online. MyCompanyDesk branding is address-based: the badge appears when the site is served on a workspace subdomain, and it is removed when the site is served on a custom domain (Office).

- **Desk**: the site is visible on your `mycompanydesk.site` address, with a small MyCompanyDesk badge.
- **Office**: the site is always visible; there is no badge on a custom domain. Connecting your own domain is only available on Office (up to 5 custom domains).
- **Design and style**: the packages, colour themes and all style settings are available on every plan.
- **Uncertain state**: if the system cannot determine your plan, the site stays up rather than risking an accidental takedown.

This gate applies to all public serving paths: the business page, the service-detail route, and the site builder's rendered pages. It is checked on every request, before any caching layer, so it stays accurate even if your subscription changes mid-cache.

## Related

- [Domains, Website and Inbox](/en/features/domains-website-inbox): Custom domain setup, verification, SSL, and email inbox.
- [Company Settings](/en/settings/company): Where your company details, branding, and address live.
- [Quotes](/en/features/quotes): Managing quote requests that come in through your website.
- [Plan & payments](/en/settings/billing): What Desk and Office include.
