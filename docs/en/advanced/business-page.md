---
title: Site Builder
last_verified: 2026-08-20
---

# Site Builder

Build your business website with a drag-and-drop editor. Create multiple pages, compose them with sections and blocks, customize colors and fonts, and publish when you are ready.

## Overview

The site builder replaces the old single-page business profile. Every new workspace starts with a 4-page default site (Home, Diensten, Over ons, Contact) so you have a real multi-page foundation from day one. The editor gives you:

- **Multi-page support**: Create as many pages as you need, each with its own path and sections. The four default pages are ready to edit, remove, or add to.
- **Domain switcher**: When your workspace has multiple custom domains (Pro plan), a dropdown in the top bar lets you switch between editing the default site and a per-domain variant. Each domain gets its own pages, navigation, design tokens, and publish snapshot.
- **Section blocks**: Add hero, text, gallery, spotlight, services, team, testimonials, contact form, and custom HTML sections to any page. Save sections as reusable blocks to build a personal library.
- **Design tokens**: Set brand colors, fonts, spacing, border radius, motion style, custom CSS, and a site favicon. Changes apply across the whole site.
- **Navigation editor**: Drag-and-drop reorder of header links, with dropdown groups, external links, and inline navbar styling (brand name, CTA button, phone, call bar, sticky).
- **Publish snapshots**: Work in draft, preview your changes, then publish. Unpublished changes are tracked in the top bar.
- **Responsive preview**: Toggle between desktop, tablet, and mobile viewports while editing. In desktop view you can also pick a real viewport width (1280, 1440, or 1920 pixels), so the site's own media queries answer honestly instead of being simulated.
- **Resizable panes**: Drag the right edge of the left rail and the left edge of the right inspector to make either pane wider or narrower. Double-click a resize handle to return to the default width. The width is remembered per device in localStorage.
- **Zoom and fit-to-window**: Zoom the canvas from 25% to 200%, or click the zoom value to jump to fit, 50%, 100%, or 200%. The stage scrolls when the scaled canvas exceeds it.
- **Keyboard shortcuts**: Undo/redo, move the selected section, zoom, fit to window, close panels, and open the shortcut reference with the standard keys shown in the bottom bar.

Your website dashboard lives at **Company > Your website** (`/website`). The editor opens from there.

Opening `/website` lands on the section overview: it shows your live site, publish status, and a clear entry point to the editor. The editor itself is at `/website/editor`, reached deliberately from the overview rather than taking over the whole screen on arrival.

## AI scaffolding

When you open the site builder for the first time on a fresh workspace, the editor shows a quick-start banner at the top. It reads your business register data (legal name, industry code, city) and generates a starter tagline, an about-us paragraph and three service drafts for you. You can edit everything inline before accepting, regenerate if the first suggestion is not quite right, or dismiss the banner. No wizard questions, no upfront friction.

What the banner can do for you:

- **Generate**: Click **Generate suggestion** to let the AI read your KVK data and propose copy.
- **Edit inline**: Adjust the tagline, about text and service names and descriptions right in the banner.
- **Accept**: Click **Apply** to write the accepted copy to your workspace. Your company description, hero tagline and services are updated in one go.
- **Regenerate**: Not happy with the result? Click **Regenerate** for a fresh set of suggestions.
- **Dismiss**: The banner remembers your choice locally. It stays hidden until you reset your workspace data.

The banner uses the Gemini AI model (lite variant) when available on your workspace. If AI is not configured, the banner still works with a sensible fallback based on your industry code and company name.

## Website setup wizard

Before you ever open the editor, the website setup wizard can build your first draft for you. It opens automatically the first time a new workspace visits `/website`, and you can restart it later from **Company > Your website > Style** by clicking **Set up again**. The wizard asks four questions and then may show an optional web-address step:

1. **What you do** (pre-filled from your KVK data) - your work, services and tone.
2. **What you want** - whether the site should bring in leads, showcase your work, build credibility or get found online.
3. **Logo** - keep the AI-generated logo or upload your own PNG/SVG.
4. **Brand colour** - pick one of the suggested swatches or enter your own hex colour.
5. **Web address** (only when your workspace does not already have an active domain or CNAME serving the site) — add or connect the domain where your site will live. You can skip this step and set up an address later.

Your answers are saved as the site brief. When you finish, the AI writes fresh copy for your whole draft site based on the brief and your workspace data, applies your chosen logo and brand colour, and leaves everything as a draft. Nothing is published automatically. You review the result in the editor and publish when you are happy with it.

The same wizard can also rewrite an existing site from scratch. Restarting it from the Style tab confirms first, because finishing replaces copy you may have edited yourself. The site stays a draft until you publish it yourself.

## Tabs

The site builder has three tabs: Editor, Pages, and Style. Click the Style header to open or close its sub-tabs, which include Animation.

- **Editor**: Compose pages by adding and arranging sections. Click any section to inspect its content, layout, style, or animation settings. Drag sections to reorder, duplicate, or delete them.
- **Pages**: Manage your pages: create new ones from templates, set paths and visibility, and see which pages are live, draft, or scheduled. Click a page to open it in the editor. The locked home page cannot be deleted. Each page shows a Live/Concept badge alongside quick-toggle buttons: click the globe icon to set a draft page live, or use the eye-off icon to hide a live page back to concept.
- **Style**: Customize your site-wide design tokens. Apply a one-click preset (Editorial), then fine-tune colors (brand, accent, paper, ink), fonts (heading, body, mono from the font library), navbar (layout, background, CTA style), scale (radius, density, max width, section spacing), motion preferences, button styles, and custom CSS. You can also add head snippets for analytics (Plausible, Umami, Matomo) or font preconnects. Click the Style header to open or close the tab strip.

Domain, SEO, and third-party integrations are managed from the `/website` home tabs, not inside the editor.

### Site packages gallery

The **Site packages** gallery (`Company > Your website > Pakketten`) is the fastest way to start from a complete, pre-styled site. It lists every approved site package: a finished template, color pack, and font pairing built for a specific trade, rendered with a small swatch card that shows the package's own palette.

How it works:

1. Open **Company > Your website** and click **Pakketten** in the top bar.
2. Browse the cards. Each card shows a real screenshot of the package when one has been generated, otherwise a color swatch built from the package's own palette. The name, trade, page count, and short description sit below the image.
3. Click **Preview** to open a live sample of the package in a new tab.
4. Click **Use this package**. A confirmation explains that your current draft site (pages, sections, and style) will be replaced.
5. The package is applied to your **draft** only. Nothing is published automatically.
6. The editor opens so you can review the result, change copy and images, and publish when you are ready.

The same gallery lives inside the editor. Open the **Ontwerp** rail to browse packages on the canvas itself. Click **Preview** on a card to see the package's public preview at full size, alongside your own site, and use **Back to all designs** to keep comparing. Applying a package from the editor reloads your draft and returns you to the Sections rail so you can keep editing.

Search the gallery by trade or style with the search field. The count next to the field updates as you filter. If no packages are available yet, the page tells you they will appear once the first designs are approved.

Source: `apps/web/pages/website/pakketten.vue`; `apps/web/components/site-builder/SiteEditorScreen.vue`; `apps/web/components/site-builder/SitePackageGallery.vue`; `apps/web/services/site-packages.service.ts`; `apps/api/src/modules/sites/packages.service.js`.

### Bespoke designs

The site builder also ships a set of ready-made **bespoke designs** that replace the standard style presets with a curated template, color pack, and brand accent. Open the **Bespoke designs** panel from the Style tab to browse the gallery. Each card is a live preview filled with your own workspace data (services, photos, reviews, contact details), so you see exactly how the design looks before you apply it.

Picking a design sets three things at once:

- **Template**: the layout family and section structure (for example, a centred hero with a marquee of reviews, or a split-spotlight services page).
- **Color pack**: a curated palette variant for that template. Most templates offer multiple packs such as warm, cool, neutral, bold, or muted. Changing the pack keeps the same template but swaps CSS custom-property tokens, so the layout stays intact while the feel changes.
- **Brand accent**: an optional override for the template's accent color. Leave it empty to use the pack's default accent; enter your own hex color to make buttons, highlights, and badges match your brand. You can clear the override at any time to fall back to the pack default.

Your business logo is used automatically if you have uploaded one. Templates that support a logo render it in the navbar or hero area. Templates that expect a text wordmark fall back to your business name when no logo is set, controlled by a conditional rule so the right element appears.

When you find a design you like, click **Use this design**. The current site is published straight away with the new template, pack, and accent applied, and your public URL immediately shows the change.

### Reordering sections on a bespoke page

After applying a bespoke design, open any page in the bespoke content editor. The **Sections** panel lists every top-level section on that page. Drag a section to a new position, or use the up and down buttons. Toggle the visibility switch to hide a section without deleting it. The navigation, hero and footer sections stay locked in place; you cannot move or hide them.

### On-canvas section controls

You can also reorder, hide and remove sections directly on the live preview canvas. Hover over any top-level section to see its name and a small toolbar. Use the arrows to move the section up or down, the eye icon to hide it (or show it again), and the trash icon to remove a section you added yourself. Locked chrome such as the navigation, hero and footer shows the section name on hover but has no move, hide or remove actions.

Click a section to keep it selected; the outline then stays visible even when you move the mouse away, so you can compare positions while you scroll or edit content. Both the canvas and the **Sections** panel read from the same underlying order, so a change in one place is reflected in the other immediately.

### Footer content

Bespoke templates that include a minimal footer now let you add your own footer content without changing the design. Open any page in the bespoke content editor and scroll to the **Voettekst** (footer) panel.

From there you can add:

- **Legal line**: your KvK/BTW or other small print, rendered in the template's footer style.
- **Link columns**: titled columns of links, useful for pages like contact, terms or services.
- **Contact details**: toggle to show your email, phone and address from your company details.
- **Social links**: toggle to show the social links saved in your company details.

The design still controls colour, type and spacing; you only supply the content. Links accept internal paths (`/contact`), external HTTPS URLs, email (`mailto:`) or phone (`tel:`). If a template already shows contact or social details in its footer, the matching toggle is hidden to avoid duplicates.

### Overriding section button links

Some bespoke sections include clickable buttons or links that would normally point to a fixed page baked into the design, such as a contact page, a booking URL or a phone number. The bespoke content editor lets you override the destination of each addressable button per page.

Open a page in the bespoke content editor and select the section whose button you want to change. In the **Sections** panel, each section that contains addressable buttons shows a **Buttons** list. Pick the button you want to override and enter its new destination. You can link to another page on your site, an external URL, an email address (`mailto:`) or a phone number (`tel:`). Links are checked against the same allowed schemes as navigation links for safety. If you leave the override empty, the button keeps the template's original destination.

### Adding and editing sections

When you open a bespoke page in the editor, the **Sections** panel now offers the full section catalogue. Sections that belong to the design itself appear first and use the template's own markup and your workspace data, so they look native. Sections from the broader catalogue are bridged in on the same palette and typography, but carry their own per-instance content fields.

Click **Add section** to open the picker, choose the kind you want, and the section drops onto the page with sensible defaults. The inspector on the right shows the fields for the selected section, whether they come from your workspace data or from the section's own content props. You can reorder, hide, or remove added sections the same way as the design's own sections.

### Renaming pages

Template pages have a fixed address and a menu label that is baked into the design's markup. Rather than editing every link by hand, the **Pages** panel lets you rename the menu label of any template page. Click the pencil next to a page, type the new label, and every link to that page in the navigation and footer updates automatically. The page address itself does not change, so no redirect is needed and existing links keep working.

If you clear the field or type the design's original name back, the rename is removed and the design's own label returns.

### Editing design copy

Designs contain small pieces of literal text, such as kickers, captions, and micro-headings, that are not connected to your workspace data. In edit mode these text snippets are editable on the canvas: click the text, type the change, and press Enter or click outside to save. The override is stored per section and per page, and the public site shows your version instead of the design's original words.

Text inside repeating blocks is not editable this way, because one static path would change every repeated item. Editing is also limited to text that sits inside a section, so there is always a stable address for the override. To undo a change, clear the field or type the design's original text back.

## Creating pages

1. Go to the **Pages** tab.
2. Click **New page**.
3. Enter a title and a path (e.g. `/about`).
4. Choose a template or start blank.
5. The page opens in the editor, where you can add sections and build it out.

### Default pages

Every new workspace comes with four pages already created:

| Page | Path | Description |
|---|---|---|
| Home | `/` | Your main landing page. Cannot be deleted. |
| Diensten | `/diensten` | Show what you offer. Pre-filled with a services section. |
| Over ons | `/over-ons` | Tell visitors who you are. |
| Contact | `/contact` | Contact form and details. Linked from the footer. |

These pages are wired into the navigation header and footer automatically. You can edit or delete any of them, except the Home page which is always required. The navigation updates its links when you add or remove pages.

### Page status: Live vs Concept

Pages have a status that controls whether they appear on your published site:

- **Live**: The page is included in the publish snapshot. Visitors see it on your public site after you publish.
- **Concept** (draft): The page is a work in progress. It stays hidden from visitors even after you publish the site.

The home page starts as **Live** by default. Every other new page starts as **Concept** so it does not go public before you are ready. You can toggle any page between Live and Concept with the quick-action buttons in the Pages table. Changing the status updates immediately and lights up the Publish button in the top bar, so the next publish picks up the change.

A site whose home page is in Concept renders nothing when published. If you toggle the home page to Concept, switch it back to Live and publish to restore the site.

## Building pages with sections

In the **Editor** tab:

- Click **Add section** to see the available block types (hero, text, gallery, spotlight, services, team, testimonials, contact form, pricing, product, custom HTML, and more).
- Select a block type to insert it onto the page.
- Click any section to open the inspector panel, where you can edit its content, layout, style, and animation.
- Drag sections up or down to reorder. Use the duplicate and delete actions on each section.

Some sections have system-only variants that are available on the locked home page but not on custom pages.

## AI assistant tools

Two AI-powered tools help you write and illustrate your pages faster, right inside the editor inspector.

### Text rewrite

Every text and textarea field in the section inspector gets four small tone buttons below it when the field has enough content (more than a few words). The buttons send your current text to the server, which runs a lightweight Gemini model to rewrite it with a specific tone:

- **Shorter**: Cuts the text to about half its length while keeping the meaning.
- **Calmer**: Makes the text warmer and more reassuring. Less sales pitch, more confidence.
- **Sharper**: Tightens the wording. Stronger verbs, no hesitation.
- **Friendlier**: Softens the tone to be warmer and more approachable.

The rewrite always stays in the same language as the original (usually Dutch). The model only rewrites, it does not invent new information. The rewritten text replaces your field content inline. You can click another tone button, undo, or edit further.

The text field is limited to 2000 characters for the rewrite call, so the model returns quickly and stays predictable. If the AI service is temporarily unavailable, you will see an error message and your original text stays untouched.

### Stock photo search

When you open the image upload field in any section block (hero, spotlight, team, portfolio, logos, product), you now see a **Stockfoto** button next to the upload and URL paste buttons. Clicking it opens an inline search panel connected to Unsplash, the free stock photo library.

- Type a search term (e.g. "hair salon", "coffee", "wood") and hit enter.
- Results appear in a grid. Click any photo to insert it as your section image.
- The search is proxied through the MyCompanyDesk server, so your Unsplash access key never reaches the browser.
- Attribution is tracked automatically per Unsplash's API guidelines and rendered on your published site. When your site goes live, a "Foto's: `photographer` · Unsplash" credit line appears in the footer for every page that uses at least one stock photo, so you are always compliant.
- If Unsplash is not configured on your workspace, the Stockfoto button stays hidden so you never see a broken feature.

## Saved blocks

Save any section as a reusable block and build a personal library of pre-styled building blocks. Saved blocks appear at the top of the section adder, so you can drop a saved layout onto any page without rebuilding it from scratch.

### Save a section as a block

1. Click the bookmark icon on any section row in the editor.
2. Give the block a name (the section label or type is pre-filled as a suggestion).
3. The block is saved to your personal library for this workspace.

### Insert a saved block

1. Click **Add section** on any page.
2. Your saved blocks appear under **My blocks** at the top of the adder panel.
3. Click a saved block to insert it as a new section on the current page.

Inserting a saved block copies its template into a fresh section row. Editing or deleting the inserted section does not touch the saved block in your library, and the other way around.

### Manage your library

- **Remove a block** from the library by clicking the x icon on the block in the adder panel. This only removes the saved template; it does not affect sections already inserted from it.
- The **My blocks** header is hidden when your library is empty, so a first-time editor does not see an empty category.

### Section layout variants

Hero, services, pricing, and testimonials sections support multiple layout variants. Pick one from the **Stijl** (Style) dropdown in the inspector's Layout tab to change how the section renders. The default variant preserves the existing look, so sections you built before this feature keep rendering as they always did.

#### Hero variants

| Variant | Effect |
|---|---|
| **Standard (split right)** | Default. Image on the right, text on the left. Falls back to centered text when there is no image. |
| **Split left** | Mirror of the default: image on the left, text on the right. Requires an image. |
| **Centered** | Text centered, optional image beneath it in a wide 16:9 frame. |
| **Banner** | Full-bleed background image with a gradient overlay. White text on a dark scrim, tall so the image breathes. Requires an image. |
| **Minimal** | Text-only in a narrow column. No image. Clean and quiet for documentation-style pages. |

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
| **Spotlight (single quote)** | A single large pull-quote in magazine style, centered with serif typography. Extra testimonials appear as small attribution chips below the main quote. |
| **Marquee** | A horizontally scrolling row of quote cards. Hover pauses the animation; the OS reduced-motion preference stops it entirely. The track loops seamlessly with two copies of the item set. |

### Spotlight

The spotlight block is an alternating media-and-text row. Each instance shows an image on one side and text on the other: eyebrow, title, subtitle, bullets with check marks, and an optional call-to-action link. You control which side the image sits on via the layout panel.

A few things to know:

- **Image side**: The layout variant defaults to image-right. Switch to image-left in the layout panel to flip the row.
- **Optional pieces**: Eyebrow, subtitle, bullets, CTA, and image are all optional. A spotlight with only a title and image still renders cleanly.
- **Stacking**: Add several spotlight sections in a row to build the classic feature-list pattern from the MCD landing page.
- **Sticky media**: Enable "Image stays while scrolling" in the spotlight inspector to pin the image while the text beside it scrolls. Desktop only; it only shows when there is enough text next to the image to make it meaningful. On mobile the image stacks normally.

### Pricing tiers with buy buttons

The pricing section lets you list your plans or packages. Each tier can optionally include a buy button:

- Set a tier as **purchasable** and provide the **amount in cents** (e.g. 4999 for EUR 49.99).
- A **Buy now** button replaces the static CTA link. Visitors clicking it go through the MyCompanyDesk checkout, which redirects to Mollie or Stripe Connect for payment.
- The buy-button label defaults to "Koop nu" but can be customised per tier with the **buyLabel** field.
- Pricing tiers without buy buttons keep the existing CTA link behaviour.

Pricing sections can also render as a feature comparison matrix. Switch the layout variant to **Comparison table** in the inspector. The matrix shows each tier as a column and every feature from all tiers as a row, with check marks where a tier includes the feature. This makes plan-to-plan comparison easy at a glance. See [Section layout variants](#section-layout-variants) for the full options.

### Product block

A standalone single-item buy card, for when a full pricing table is more than you need:

- One product name, description, optional image, price, and a buy button.
- Same checkout plumbing as the pricing buy buttons, your visitor pays through Mollie or Stripe Connect.
- An optional note line under the button for delivery info, disclaimers, or shipping notes.

See [Sales](/en/features/domains-website-inbox#sales) for tracking payments and orders.

### Catalog sections

Some bespoke templates include a live catalog section that pulls items straight from your Aanbod catalog. If the current page structurally repeats over services, products, or subscriptions, the content editor shows a **Catalog** panel for each kind that is actually used on that page.

The panel lives outside the template frame, so it never interferes with the template's own styling. From here you control only the presentation of the catalog on this site:

- **Heading and intro**: set the section title and a short introduction.
- **Order**: drag items into the order you want, or use the up and down buttons. The natural Aanbod order is used for anything you do not explicitly reorder.
- **Show or hide**: toggle the eye icon to keep an item in Aanbod but hide it on this website.

The item content itself, title, price, description, and image, is read-only in the editor. It is pulled from the live Aanbod catalog and must be edited there. The price follows the price mode set in Aanbod: a fixed amount, "from" an amount, or "On request" when no price is set.

If the catalog kind has no eligible items yet, the panel shows an empty state with a link to add an item in Aanbod.

## Section animations

Every section block has an **Animation** panel in the inspector. It lets you add motion that plays when the section enters the viewport, on page load, or on hover.

### Animation types

| Type | Effect |
|---|---|
| **Fade up** | Section fades in while sliding up from 1rem below. |
| **Fade in** | Section fades in from transparent. |
| **Slide right** | Section fades in while sliding left by 2rem. |
| **Reveal** | Section reveals from right to left using a clip mask. |
| **Stagger** | Children fade up one after another in 80ms steps instead of the section itself moving. |
| **Word by word** | Hero title only. Each word of the hero title appears on its own beat; non-hero blocks fade in normally. |

### Triggers

How the animation starts:

- **In-view** (default): Animation fires when the section scrolls into the viewport. Uses the browser's IntersectionObserver. Once a section has animated in it stays visible.
- **Load**: Animation fires immediately when the page mounts.
- **Hover**: Animation fires on mouseenter and reverses on mouseleave.

### Controls

- **Duration**: How long the animation takes, in milliseconds. Default is 700ms.
- **Delay**: Wait time before the animation starts, in milliseconds. Default is 0ms.
- **Easing**: The acceleration curve. Options are **ease-out** (default), **linear**, and **spring**.
- **Stagger children**: When enabled, the section stays at its resting state and its direct children animate in sequentially. This modifier works on top of any animation type (fade-up + stagger children, fade-in + stagger children, etc.). The section root animation is suppressed so the children carry the motion alone.

### Motion reduction

Visitors who have `prefers-reduced-motion: reduce` enabled at the OS level see every section in its final resting state immediately. No animations play. Workspace-level motion tokens can also force reduced motion on a per-site basis. When reduced motion is active the section never receives the hidden start-state class, so the server-rendered HTML is accessible before any JavaScript runs.

## Section dividers

Each section block has a **Bottom divider** setting in the inspector's style panel. It adds an SVG shape at the section's bottom edge that overflows into the next section, creating an organic visual transition instead of a hard horizontal cut. The divider draws the current section's background color, so it works best between adjacent sections that have different solid backgrounds.

### Divider types

| Type | Effect |
|---|---|
| **Wave** | A smooth S-curve along the bottom edge. |
| **Curve** | A concave bowl: the next section intrudes upward in the middle. |
| **Slant** | A right-rising diagonal cut from left to right. |
| **None** | No divider. Sections meet at a flat horizontal edge (default). |

### How it works

- The divider SVG sits entirely below the section, in the next section's space. It does not overlap the current section's content.
- The filled portion of the path draws the current section's background extending downward. The transparent area below the shape lets the next section show through.
- The divider preserves the section's background color automatically, including custom hex values and CSS variable tokens.
- Dividers are decorative (`aria-hidden="true"`) and do not affect keyboard or screen-reader navigation.

## Styling your site

In the **Style** tab, you control the look and feel of your entire site:

- **Presets**: One-click starting points that set colors, fonts, and spacing in one go. Eight presets are available: **Editorial** (navy and gold, serif headlines), **Studio** (warm cream with terracotta), **Tech** (sharp slate with electric blue), **Atelier** (bone-white with deep green), **Bold** (high-contrast black with a bright accent), **Calm** (sage green and soft white), **Mono** (architectural minimalism, no accent color), and **Vivid** (cobalt and coral on cool white). Applying a preset merges the tokens into your workspace, preserving your logo, custom CSS, and head snippets.
- **Colors**: Pick brand, accent, paper, ink, surface, and muted colors. The palette is applied through CSS custom properties.
- **Dark mode**: Choose how your site handles dark mode. Three options: **Off** (no dark mode, site stays in its light palette), **Button** (visitors see a sun/moon toggle in the navigation bar and can switch themes, with their choice saved locally), or **System** (the site follows the visitor's OS-level preference automatically via a live media-query listener). When dark mode is on, a paired dark palette appears where you can set night-optimized versions of each color. If you leave the dark palette empty, the site applies a sensible default inversion that keeps your brand and accent colors intact.
- **Typography**: Choose heading, body, and mono fonts from the built-in font library (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Self-hosted fonts**: All fonts are served from MyCompanyDesk itself, not from Google Fonts or another third-party CDN. The same font files are used in the editor preview and on your published site, so the typeface looks identical everywhere and visitor IP addresses stay on your domain.
- **Scale**: Set border radius, content density (compact, airy, generous), maximum content width, vertical section spacing, and card style. The card style controls how content cards render across sections: **Flat** (no border), **Bordered** (default, thin outline), **Shadowed** (soft shadow), **Elevated** (strong shadow), **Brut** (hard outline with offset shadow), **Lijn** (outline only, no fill), or **Glass** (translucent frosted card with a backdrop blur). Glass looks best over a photo, gradient, or decorative band; on a plain background it falls back to a softly tinted card.
- **Motion**: Enable reduced motion or choose a motion style (Off, Subtle fade, Slide up).
- **Buttons**: Customize button border radius, padding, and hover effects.
- **Navbar**: Set the layout (standard, centered, split), background style (solid, translucent blur, transparent), and CTA button appearance (filled, outline, text-only). The navbar settings apply to every page.
- **Phone & call bar**: Add a clickable phone number to your navigation bar. When set, the phone number appears beside the CTA button on desktop and in the mobile navigation drawer. Enable the **Mobile call bar** toggle to pin a fixed "tap to call" button at the bottom of the screen on mobile devices, so visitors can reach you with one tap regardless of where they are on the page. The phone label defaults to "Call us" when left empty.
- **Reading progress bar**: Show a thin progress indicator at the top of every page as visitors scroll. The bar uses your brand color and can be turned on or off from the Style tab.
- **Custom CSS**: Write your own CSS that gets injected into the site. Useful for fine-tuning or overriding defaults.
- **Favicon**: Upload a favicon for your site. It is shown in browser tabs and bookmarks. If not set, the site falls back to your light logo, then your business profile picture.
- **Head snippets**: Add analytics scripts (Plausible, Umami, Matomo) or font preconnects via the snippet picker.

### Logo import

If you already have a logo on your website, you can import it directly into MyCompanyDesk. In the **Style** tab, look for the logo import option and enter the URL of the page that contains your logo. MyCompanyDesk fetches the page, extracts the best available logo, and creates both a light and a dark version for your site. After import you can still replace or adjust each version separately in the style settings.

Changes in the Style tab are saved automatically on edit and apply to all pages.

## Publishing

The top bar shows a dot when unpublished changes are waiting. Publishing snapshots only the pages marked as Live. Pages in Concept stay hidden from the public site, even after you publish.

Until you publish, your public URL sends a `noindex` robots tag. That keeps the auto-provisioned workspace subdomain out of search engines while you are still building.

When you are ready:

1. Click **Publish** in the top bar.
2. Your site is published to the public URL (your custom domain, workspace subdomain, or the fallback portal route).

Unpublished changes are tracked per page and per token. The publish button is disabled when there is nothing to publish. Toggling a page between Live and Concept is an immediate save that registers as an unpublished change, so the Publish button lights up the moment you toggle.

## Navigation

The navigation editor lets you arrange your site's header links and control how the navigation bar looks across your entire site:

- Drag pages to reorder the top-level navigation.
- Create dropdown groups to nest pages under a parent label.
- Add external links that point outside your site.
- The logo in the header is clickable and always links back to the home page.
- The home page is always first and locked in position.

Above the main navigation menu, a **Navbar** panel gives you direct access to the header styling settings that were previously only available in the Style tab. You can set:

- **Brand name**: Text shown in the header when no logo image is uploaded (leave empty to use the logo from Branding).
- **CTA button**: The label and destination link for the call-to-action button in the top-right corner. Both fields must be filled for the button to appear.
- **Phone number**: A clickable `tel:` link that appears next to the CTA button on desktop and in the mobile navigation drawer. Leaving it empty hides the call button.
- **Phone label**: The text shown next to the phone icon on mobile (defaults to the locale-native equivalent of "Call us" when left empty).
- **Mobile call bar**: When enabled, a fixed "tap to call" button stays pinned at the bottom of the screen on mobile devices.
- **Sticky navbar**: When enabled (default on), the navigation bar stays visible as the visitor scrolls down the page.

These settings apply to every page on your site, the same way they do in the Style tab. Changes save automatically with a short debounce after you stop typing. For the visual layout, background style, and button appearance controls, see the [Style tab](#styling-your-site).

## Footer links

The footer editor lives on the **Footer** tab of the navigation editor. It composes the bottom of every published page from two sources: automatic blocks that pull from your pages and company settings, and manual link columns you add yourself.

### Automatic footer blocks

Three switches control content that is generated for you:

- **Show page links automatically** ("Pagina's"): a sitemap column with a link to every live, indexable page on your site. It is on by default for new sites because it helps search engines find every page and prevents orphaned pages. The home page, blog posts, draft pages, password-protected pages, and pages marked "noindex" or hidden from the sitemap are excluded automatically. Hide an individual page from this column by turning off **Show in sitemap** in that page's SEO settings.
- **Show contact details** ("Contact"): your public email, phone number, and address from your company details.
- **Show social links** ("Social"): the social URLs saved in your company details.

These blocks appear in your site's own footer styling, below any manual columns. If your design already shows contact or social details, the matching toggle is hidden so nothing appears twice.

### Manual link columns

Below the automatic switches you can add up to six curated footer columns. Each column has a title and a list of links. Use them for legal pages, product categories, or external resources. Links accept internal paths, external HTTPS URLs, email (`mailto:`), or phone (`tel:`).

## Company merge tokens

Text fields in the site builder can contain merge tokens that pull live company data from your workspace settings. When the published site renders, each token is replaced with the current value from **Company Settings > Business details** (`/settings/bedrijfsgegevens`). This means you can type your company name, address, or contact details once and keep every page in sync automatically.

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
- If a value is empty in your company settings, the token renders as a bracketed hint on the public site, for example `[bedrijfsnaam]`, so you can spot what is still missing.
- Tokens are resolved after the publish snapshot, so later edits to your company details show on the live site without a new publish.
- Legal pages seeded by the platform use these tokens automatically. Editing the surrounding text does not break the binding.

Source: `packages/shared/src/site-blocks/company-tokens.ts#COMPANY_TOKENS`.

## Public URL

Your website is served at the highest-priority URL available:

1. Your custom domain (e.g. `https://acme.nl`) when verified and enabled
2. Your workspace subdomain (e.g. `https://acme.mycompanydesk.com`)
3. The fallback portal route (`/portal/{slug}`)

See [Domains, Website and Inbox](/en/features/domains-website-inbox) for domain setup and verification.

## Contact form

The contact form block (`form` section type) is a live submit handler. When a visitor fills in the fields you configured (name, email, phone, company, message) and hits send, the platform creates a quote request and notifies your workspace. The form shows a success banner on completion and an inline error if something goes wrong. All inputs are disabled during submit to prevent double sends.

What happens on submit:

1. Only the fields the block actually renders are sent, so hiding the name input does not break the backend.
2. The platform creates a quote request under the company tied to the site slug.
3. You receive a workspace notification (same path as the legacy `/portal/quote-request` route).
4. The request appears in **Quotes > Requests**.
5. The visitor sees a customizable success message.

Contact-form submissions are only accepted when the site has been published: submissions to a draft or unpublished workspace are rejected. They are rate-limited to 5 per minute per IP address and also guarded by a per-company abuse cap, so one busy visitor cannot exhaust your notification budget. A Cloudflare Turnstile widget also appears before submit when configured on your workspace, blocking automated bot submissions without slowing real visitors down.

## Newsletter signup

The newsletter block (`newsletter` section type) captures email signups from your published site. The backend uses a double opt-in flow: after submit, the visitor receives a confirmation email and must click the link to activate their subscription. Suppressed addresses and already-active subscribers are treated the same as new signups from the form's perspective (no data leakage).

What happens on submit:

1. The platform stores the subscription with `source: "site_form"`.
2. If the address is not already active and not suppressed, a double opt-in email is sent.
3. The visitor sees a success banner regardless, keeping the subscription state private.
4. Once confirmed, the subscriber appears in the newsletter audience for that workspace.

Newsletter submissions share the same rate limit as the contact form: 5 per minute per IP address. The Turnstile bot-protection widget is also active on newsletter forms when configured.

## Legal pages

The site builder seeds every new workspace with two standard legal pages: **Privacy Policy** (`/privacy`) and **Terms & Conditions** (`/algemene-voorwaarden`). The content uses placeholder markers for company details. When the page is rendered for visitors, these markers are replaced with the values from your **Company Settings** — business name, address, postal code, city, country, registration number, VAT number, and public email.

You can edit the legal pages in the editor like any other page. The editor preserves the placeholder anchors inside the content, so opening and saving a page without changing it still lets future updates to your company details flow through automatically.

The legal pages are rendered at publish time, just like the rest of your site. They share the same Live/Concept status and the same subscription visibility gate.

## Managing requests

See [Quotes - Quote Requests](/en/features/quotes#quote-requests) for details on managing incoming requests.

## Subscription requirement

The public website (business page and site builder) is available on every plan and stays online. MyCompanyDesk branding is address-based: the badge appears when the site is served on a workspace subdomain, and it is removed when the site is served on a custom domain (Pro).

- **Free**: the site is visible on the workspace subdomain with a small MyCompanyDesk badge.
- **Starter and Pro**: the site is always visible; no badge on a custom domain, badge on the workspace subdomain.
- **Uncertain state**: if the system cannot determine your plan, the site stays up rather than risking an accidental takedown.

This gate applies to all public serving paths: the business page, the service-detail route, and the site builder's rendered pages. It is checked on every request, before any caching layer, so it stays accurate even if your subscription changes mid-cache.

Source: `apps/api/src/modules/billing/entitlement.service.js` — `computePublicPageGate`, `getPublicPageVisibility`, `renderer.service.js` for the address-based badge rule.

## Related

- [Domains, Website and Inbox](/en/features/domains-website-inbox): Custom domain setup, verification, SSL, and email inbox.
- [Company Settings](/en/settings/company): Where your company details, branding, and address live.
- [Quotes](/en/features/quotes): Managing quote requests that come in through your website.
- [Plan & payments](/en/settings/billing): Subscription plans and feature flags.