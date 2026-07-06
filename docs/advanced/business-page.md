---
title: Site Builder
---

# Site Builder

Build your business website with a visual editor. Create multiple pages, compose them with sections and blocks, style everything with complete design themes, and publish when you are ready.

## Overview

The site builder lives under the top-level **Website** item in the main navigation (`/website`). Every new workspace starts with a 4-page default site (Home, Diensten, Over ons, Contact) so you have a real multi-page foundation from day one.

The Website area has four screens, shown as tabs at the top:

- **Editor**: Compose pages by adding, arranging, and styling sections, with a live preview of the real site.
- **Pagina's** (Pages): Manage pages, their paths, visibility, publish status, and per-page SEO.
- **Stijl** (Style): Site-wide design: themes, colors, fonts, buttons, navbar, spacing, and animations.
- **Koppelingen** (Integrations): Connect product features and third-party services to your website.

The top bar is always visible and shows your public site address, the save indicator, the number of unpublished changes, and the Publish button.

## The editor

The **Editor** tab shows three panes: the section list on the left, the live preview in the middle, and the inspector on the right. The preview renders your actual site, so what you see is what visitors get.

- **Add sections**: Click **Add section** to open the block picker, organized in groups (Basis, Bedrijf, Werk, Conversie, Structuur). Search by name or browse the groups.
- **Click to edit**: Click any block in the live preview to select it and open its settings in the inspector. On mobile, tapping a block in the preview jumps straight to its settings.
- **Drag to reorder**: Drag sections up or down in the section list to reorder them. The navigation and footer stay locked in place. Arrow buttons are available as a keyboard-friendly alternative.
- **Undo and redo**: Press Cmd/Ctrl+Z to undo and Cmd/Ctrl+Shift+Z (or Ctrl+Y) to redo any edit, including deleting a section. Deleting a section also shows a toast with an instant undo action. Toolbar buttons show what the next undo or redo will do.
- **Duplicate and delete**: Each section row has duplicate and delete actions.
- **Responsive preview**: Toggle between desktop, tablet, and mobile viewports. The desktop preview always renders at a true desktop width and scales to fit, so you never see a squished layout.

## AI writing help

Three AI tools help you write your site, all inside the editor.

### Rewrite a text field

Text fields in the inspector show four small tone buttons once there is enough text to work with:

- **Korter** (Shorter): Cuts the text to about half its length while keeping the meaning.
- **Kalmer** (Calmer): Makes the text warmer and more reassuring.
- **Scherper** (Sharper): Tightens the wording with stronger verbs.
- **Vriendelijker** (Friendlier): Softens the tone to be more approachable.

The rewrite stays in the same language as the original and never invents new information. The result replaces your field content inline; you can click another tone, undo, or keep editing.

### Fill a whole section: Vul met AI

At the top of the content inspector, sections with real text fields show a **Vul met AI** button. One click writes all of that section's copy in a single request, based on your company profile. The result is cached with alternative variants, so clicking again cycles through different versions for free until you find one you like. Sections you already filled by hand are respected: the tool writes copy, you stay in control.

### Regenerate your site draft: Regenereer met AI

The top bar has a **Regenereer met AI** button that opens the AI draft panel for any workspace, not just fresh ones. It reads your business register data (legal name, industry, city) and proposes a tagline, an about-us text, and three service drafts. You can edit everything inline before accepting, regenerate for a fresh set, or dismiss. On a brand-new workspace the same panel appears automatically as a quick-start banner. If AI is unavailable, a sensible fallback based on your industry and company name is used.

## Pages

The **Pagina's** tab lists all your pages with their status, path, and quick actions.

### Creating pages

1. Click **New page**.
2. Enter a title and a path (e.g. `/about`).
3. Choose a page template or start blank.
4. The page opens in the editor, where you can add sections and build it out.

### Default pages

Every new workspace comes with four pages already created:

| Page | Path | Description |
|---|---|---|
| Home | `/` | Your main landing page. Cannot be deleted. |
| Diensten | `/diensten` | Show what you offer. Pre-filled with a services section. |
| Over ons | `/over-ons` | Tell visitors who you are. |
| Contact | `/contact` | Contact form and details. Linked from the footer. |

These pages are wired into the navigation header and footer automatically. You can edit or delete any of them, except the Home page which is always required.

### Page status: Live, Concept, or Scheduled

- **Live**: Included in the publish snapshot. Visitors see it after you publish.
- **Concept** (draft): Work in progress. Hidden from visitors even after you publish the site.
- **Ingepland** (scheduled): Goes live automatically at the date and time you set.

The home page starts as Live; every other new page starts as Concept so nothing goes public before you are ready. Quick-toggle buttons in the pages table switch a page between Live and Concept instantly, and the change lights up the Publish button. A site whose home page is in Concept renders nothing when published; switch it back to Live and publish to restore the site.

### Per-page SEO

Each page row expands to an **SEO & sociaal** panel where you set the page's SEO title, meta description, and canonical URL. Site-wide domain settings live under **Settings > Domains**.

## Blocks

The block picker offers a broad catalog: hero, text, image, gallery, list, columns, spotlight, services, team, testimonials, logos, social links, locations, timeline, portfolio, before/after, process steps, blog list, stats, quote, CTA, contact form, appointment calendar, pricing, product, newsletter, FAQ, dividers, and a language switcher. There is no free-form HTML block; custom code goes through the Style tab's own CSS and the analytics allowlist instead.

Three conversion-focused blocks are recent additions:

- **Lichtkrant** (Marquee): A continuously scrolling band of short messages, e.g. "Gratis kennismakingsgesprek".
- **Aftelklok** (Countdown): A live countdown to a deadline, with a message once it expires.
- **Vergelijking** (Comparison): A "we versus others" table that compares features row by row.

Some blocks, like the navigation and footer, are system blocks: they are always present and cannot be added or removed manually.

### Stock photo search

Image fields include a **Stockfoto** button next to the upload and URL options. It opens an inline search panel connected to Unsplash, the free stock photo library:

- Type a search term (e.g. "hair salon", "coffee") and hit enter.
- Click any photo in the results grid to use it as your section image.
- Attribution is handled automatically: pages that use a stock photo show a photographer credit in the footer of your published site, so you are always compliant.
- If stock photos are not available on your workspace, the button stays hidden.

### Saved blocks

Save any section as a reusable block and build a personal library:

1. Click the bookmark icon on a section row and give the block a name.
2. Your saved blocks appear under **Mijn blokken** at the top of the block picker.
3. Click a saved block to insert a copy on any page. Editing the inserted section never touches the saved template, and vice versa.
4. Remove a saved block from the library with the x icon on its card; sections already inserted from it are unaffected.

## Section layout variants

Most block types offer multiple layout variants. Pick one from the **Stijl** dropdown in the inspector's layout panel. The default variant preserves the existing look, so older sections keep rendering as they always did.

### Hero variants

| Variant | Effect |
|---|---|
| **Standaard (split rechts)** | Default. Image on the right, text on the left. |
| **Split: beeld links** | Mirror of the default: image on the left. |
| **Portret (ronde foto links)** | Round portrait photo on the left. |
| **Portret (ronde foto rechts)** | Round portrait photo on the right. |
| **Gecentreerd** | Text centered, optional image beneath it. |
| **Banner met overlay** | Full-bleed background image with a gradient overlay. |
| **Minimaal (alleen tekst)** | Text-only in a narrow column. Clean and quiet. |

### Services variants

| Variant | Effect |
|---|---|
| **Standaard (kaarten)** | Default. Grid of cards with icon, title, and description. |
| **Icoon-raster** | Denser, icon-led layout. Best for 4 or more short items. |
| **Lijst** | Vertical rows with icons, separated by thin rules. |
| **Accordeon** | Clickable rows; the description opens on click. |

### Pricing variants

| Variant | Effect |
|---|---|
| **Standaard (kaarten)** | Default. Side-by-side tier cards. |
| **Vergelijkingstabel** | Feature matrix: tiers as columns, features as rows with check marks. |

### Testimonials variants

| Variant | Effect |
|---|---|
| **Standaard (raster)** | Default. Quote cards in a grid. |
| **Spotlight (één quote)** | One large magazine-style pull quote, extra quotes as chips below. |
| **Lopende band** | A horizontally scrolling row of quote cards. Hover pauses it. |

### Other blocks with variants

Team (grid, cards, or list rows), FAQ (accordion or open two-column), CTA (colored bar, split, or minimal), process (grid or vertical timeline), timeline (left line or centered alternating), stats (grid, cards, or compact bar), logos (strip or bordered grid), locations (two columns or list), newsletter (centered or framed card), and spotlight (image right or left) each have their own variant set in the same dropdown.

## Section style

Every section has a style panel in the inspector with one-click looks and fine-grained controls.

### One-click looks: Sfeer

The **Sfeer** picker applies a curated combination of background, shape, and framing in one click, so a section gets a deliberate mood without hand-tuning every knob. Looks that suit the selected block type are listed first as recommended. The nine looks are: **Schoon** (calm and neutral), **Zacht** (tinted band with a subtle shape), **Warm** (tinted with a soft accent shape), **Golfovergang** (flowing wave transition into the next section), **Botanisch** (tinted band with a leaf motif), **Patroon** (light band with a fine dot pattern), **Statement** (dark, dramatic band), **Merk** (band in your brand color), and **Zwevend** (a rounded card floating on the background). Your own background colors, gradients, and images survive switching looks.

### Backgrounds

- **Solid**: White, paper, ink, brand, or any custom color.
- **Verloop** (gradient): Pick two colors and an angle for a gradient background.
- **Background image**: Upload or pick an image, set its focal point, and add an overlay scrim in dark, brand, light, or a custom tint so text stays readable.

### Shapes, cards, and edges

- **Decorative shapes**: Paint a soft accent-colored shape behind the section content. Choose from organic shapes (Blob, Cirkels, Ring, Boog), patterns (Stippen, Raster, Golven, Confetti), and botanical motifs (Blad, Bloem, Rank).
- **Inset card**: Float the section as a rounded, lifted card on the page background instead of a full-width band.
- **Shadows and borders**: Four shadow strengths and border options (top, bottom, both, or all around).
- **Bottom divider**: An organic shape at the section's bottom edge (Golf, Boog, or Schuin) that flows into the next section instead of a hard horizontal cut. Dividers are decorative and invisible to screen readers.

### Per-device layout

The layout panel gives every section separate mobile controls:

- **Mobile padding**: Override the top and bottom padding for small screens, so a spacious desktop section does not tower over phone visitors.
- **Hide per device**: Hide a section on mobile, tablet, or desktop independently. Build a mobile-only banner or a desktop-only showcase without duplicate pages.

## Section animations

Every section has an **Animation** panel in the inspector.

### Animation types

| Type | Effect |
|---|---|
| **Fade omhoog** | Fades in while sliding up. |
| **Fade in** | Fades in from transparent. |
| **Schuif van rechts** | Fades in while sliding in from the right. |
| **Inzoomen** | Scales in from slightly smaller. |
| **Uitvouwen (horizontaal)** | Reveals from a horizontal line outward. |
| **Stagger** | Children appear one after another. |
| **Cascade (hero)** | A layered entrance designed for hero sections. |
| **Mask reveal** | Reveals using a clip mask. |

### Controls

- **Trigger**: When the animation starts: when the section scrolls into view (default), immediately on page load, or on hover.
- **Snelheid** (speed): Animation duration in milliseconds; default 600ms.
- **Vertraging** (delay): Wait time before the animation starts.
- **Easing**: The acceleration curve: **Soepel**, **Vloeiend**, **Gelijkmatig**, or **Lineair**.
- **Stagger**: When enabled, the section's direct children animate in sequence on top of any animation type.

Visitors with reduced motion enabled at the OS level see every section in its final state immediately; no animations play.

## Styling your site: the Stijl tab

The **Stijl** screen controls the look of your entire site through nine sub-tabs: **Kleuren**, **Merk**, **Typografie**, **Knoppen & vormen**, **Navbar**, **Ruimte & layout**, **Animaties**, **Blokken-bibliotheek**, and **Eigen code**. Changes save automatically and apply to all pages.

### Kleuren (colors)

- **Design gallery**: The **Ontwerpen** section shows 18 complete themes, each with a visual preview card: Editorial, Studio, Tech, Atelier, Bold, Calm, Mono, Vivid, Kust, Luxe, Bloei, Fris, Brut, Zacht, Magazine, Pop, Redactioneel, and Warm vakwerk. One click applies the theme's colors, fonts, and spacing while your own text, photos, logo, and buttons stay untouched.
- **Save your own themes**: Under **Mijn thema's**, save your current look with a name and re-apply it later with one click. Saved themes get the same visual preview cards as the built-in gallery.
- **Color tokens**: Every color is a token (brand, accent, paper, ink, surface, and more); everything on the site that uses a token changes with it. Palette presets give quick starting combinations.
- **Readability check**: The editor warns when a text and background combination has too little contrast to read comfortably, and confirms when all combinations pass. It never blocks saving or publishing.
- **Dark mode**: Choose **Uit** (no dark mode), **Knop** (visitors get a sun/moon toggle, their choice is remembered), or **Volg systeem** (the site follows the visitor's OS preference). When dark mode is on, a paired dark palette appears; colors you leave empty inherit a sensible default.

### Merk (brand)

Upload your logo for light backgrounds, an optional variant for dark backgrounds, and a favicon (the small icon in the browser tab; square, preferably 512x512 PNG). Without a favicon, the site falls back to your logo, then your business profile picture.

### Typografie

Choose heading, body, and mono fonts from the built-in font library of around 18 typefaces across serif, sans-serif, script, and mono categories, including Inter, DM Sans, Fraunces, Playfair Display, Space Grotesk, Lora, and handwritten faces like Caveat. Fonts load fast and render identically in the editor preview and on your live domain.

### Knoppen & vormen (buttons and shapes)

Set the corner radius and shape language of the site and customize the default button style, with a live sample that updates as you change options.

### Navbar

- **Layout and background**: Standard, centered, or split layout; solid, translucent blur, or transparent background; optional thin bottom line; sticky on scroll (default on).
- **Nav buttons**: Add up to three buttons on the right side of the navigation, each with its own label, link, and style (**Effen** or **Ghost**). Use one as a single CTA or pair a quiet secondary button with a solid primary one.
- **Phone and call bar**: Add a clickable phone number next to the buttons, and enable the **Mobile call bar** to pin a fixed tap-to-call button at the bottom of the screen on phones.
- **Aankondigingsbalk** (announcement bar): A narrow bar above the navigation on every page, ideal for a promotion or notice. Set the text, an optional link, the color style, and whether visitors can dismiss it. A live mini-preview shows the result.
- **Zwevende contactknop** (floating contact button): A fixed button in the bottom-right corner of every page that lets visitors reach you in one tap via WhatsApp, phone, or email. Fill in at least one channel.

### Ruimte & layout (spacing)

Set the global density, the maximum page width, and the vertical padding rhythm between sections.

### Animaties

Pick a site-wide motion style with animated preview cards: **Geen** (static), **Subtiel** (soft fade up), **Zacht** (fade only), **Zijwaarts** (slide in from the side), **Onthullen** (reveal left to right), or **Speels** (elements appear one by one). A checkbox keeps the site respecting visitors' reduced-motion preference (recommended). Per-section animations in the editor build on top of this.

### Blokken-bibliotheek

A visual reference of every block you can use in the editor, organized by group, so you can scan what is available before you build.

### Eigen code (custom code)

- **Custom CSS**: Write your own CSS to fine-tune or override anything. Imports and external URLs are not allowed; use uploaded media instead.
- **Analytics snippets**: Free-form scripts are not supported; instead, toggle vetted snippets for Plausible, Umami, or Matomo, plus font preconnects.
- **Cookiemelding** (cookie notice): Show a dismissible notice at the bottom of the site with your own text and a link to your privacy policy. Recommended as soon as you embed videos, maps, or other external content.

## Navigation and footer

The navigation editor arranges your site's header and footer:

- Drag pages to reorder the top-level navigation. The home page is always first and locked.
- Create dropdown groups to nest up to 8 items under a parent label.
- Add external links that point outside your site.
- Switch any item between a plain link and a button style (Knop effen or Knop ghost).
- **Footer columns**: Build the footer as columns, each with a title and its own list of links, plus an optional legal line at the bottom.
- The navbar style settings (brand name, nav buttons, phone, call bar, sticky) are also editable here, directly above the menu.

Changes save automatically with a short debounce after you stop typing.

## Publishing

The top bar shows how many unpublished changes exist. Publishing snapshots only the pages marked as Live; Concept pages stay hidden.

1. Click **Publish** in the top bar.
2. If any block still contains untouched placeholder text, a guard dialog lists them so example copy cannot ship live by accident.
3. Your site is published to your public URL.

A **Revert** action discards unpublished changes and returns the draft to the last published state, after a confirmation. Scheduled pages go live automatically at their set time.

## Public URL

Your website is served at the highest-priority URL available:

1. Your custom domain (e.g. `https://acme.nl`) when verified and enabled
2. Your workspace subdomain (e.g. `https://acme.mycompanydesk.com`)
3. The fallback portal route (`/portal/{slug}`)

One website, one URL: as soon as a custom domain is active, the workspace subdomain steps aside automatically (and comes back if you later remove the domain). Domains are managed under **Settings > Domains**. See [Domains, Website and Inbox](/features/domains-website-inbox) for setup and verification.

## Contact form

The contact form block is a live submit handler. You choose which fields it shows: **Naam**, **E-mail**, **Telefoon**, **Bedrijf**, **Dienst** (a picker of your services), and **Bericht**. Only the fields you enable are submitted, so hiding a field never breaks the form.

What happens on submit:

1. The platform creates a quote request under your company, with the selected service stored on the lead.
2. You receive a workspace notification, and the request appears in **Quotes > Requests**.
3. The visitor sees your customizable success message, or is forwarded to a page you choose (e.g. `/bedankt`).

Extra delivery options per form:

- **Extra email recipients**: Add addresses that receive a copy of every submission, one per line.
- **Webhook**: Send every submission as JSON to an https URL of your choice (e.g. Zapier or Make).

Contact-form submissions are rate-limited to 5 per minute per IP address, and a bot-protection widget appears before submit when configured on your workspace.

## Newsletter signup

The newsletter block captures email signups from your published site with a double opt-in flow: after submitting, the visitor receives a confirmation email and must click the link to activate the subscription. The visitor always sees a success banner, so subscription state stays private. Once confirmed, the subscriber appears in your newsletter audience. Newsletter submissions share the contact form's rate limit and bot protection.

## Pricing tiers with buy buttons

The pricing section lists your plans or packages. Each tier can optionally include a buy button:

- Set a tier as **purchasable** and provide the amount in cents (e.g. 4999 for EUR 49.99).
- A **Buy now** button replaces the static CTA link. Visitors go through the MyCompanyDesk checkout, which redirects to Mollie or Stripe Connect for payment.
- The button label defaults to "Koop nu" and can be customized per tier.
- Tiers without buy buttons keep the regular CTA link.

The **Product** block is a standalone single-item buy card for when a full pricing table is more than you need: one name, description, optional image, price, buy button, and an optional note line for delivery info. See [Sales](/features/domains-website-inbox#sales) for tracking payments and orders.

## Managing requests

See [Quotes - Quote Requests](/features/quotes#quote-requests) for details on managing incoming requests.

## Subscription requirement

The public website is a paid feature, visible while your workspace is on a Starter or Pro plan. When a workspace lapses to Free, the site stays live for a 7-day grace period, then goes dark.

- **Paid or trialing**: The site is always visible.
- **Lapsed to Free**: The site remains visible for 7 days after your access ends, then returns a 404 page.
- **Uncertain state**: If the system cannot determine when your paid access ended, the site stays up rather than risking an accidental takedown.

This gate applies to all public serving paths and is checked on every request, so it stays accurate even if your subscription changes.

## Related

- [Domains, Website and Inbox](/features/domains-website-inbox): Custom domain setup, verification, SSL, and email inbox.
- [Company Settings](/settings/company): Where your company details, branding, and address live.
- [Quotes](/features/quotes): Managing quote requests that come in through your website.
- [Plan & payments](/settings/billing): Subscription plans and feature flags.
