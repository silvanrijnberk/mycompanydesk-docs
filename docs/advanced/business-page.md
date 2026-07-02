---
title: Site Builder
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
- **Responsive preview**: Toggle between desktop, tablet, and mobile viewports while editing.

The site builder lives at **Company > Your website** (`/website`).

## AI scaffolding

When you open the site builder for the first time on a fresh workspace, the editor shows a quick-start banner at the top. It reads your business register data (legal name, industry code, city) and generates a starter tagline, an about-us paragraph and three service drafts for you. You can edit everything inline before accepting, regenerate if the first suggestion is not quite right, or dismiss the banner. No wizard questions, no upfront friction.

What the banner can do for you:

- **Generate**: Click **Generate suggestion** to let the AI read your KVK data and propose copy.
- **Edit inline**: Adjust the tagline, about text and service names and descriptions right in the banner.
- **Accept**: Click **Apply** to write the accepted copy to your workspace. Your company description, hero tagline and services are updated in one go.
- **Regenerate**: Not happy with the result? Click **Regenerate** for a fresh set of suggestions.
- **Dismiss**: The banner remembers your choice locally. It stays hidden until you reset your workspace data.

The banner uses the Gemini AI model (lite variant) when available on your workspace. If AI is not configured, the banner still works with a sensible fallback based on your industry code and company name.

## Tabs

The site builder has five tabs (six when Style is expanded):

- **Editor**: Compose pages by adding and arranging sections. Click any section to inspect its content, layout, style, or animation settings. Drag sections to reorder, duplicate, or delete them.
- **Pages**: Manage your pages: create new ones from templates, set paths and visibility, and see which pages are live, draft, or scheduled. Click a page to open it in the editor. The locked home page cannot be deleted. Each page shows a Live/Concept badge alongside quick-toggle buttons: click the globe icon to set a draft page live, or use the eye-off icon to hide a live page back to concept.
- **Style**: Customize your site-wide design tokens. Apply a one-click preset (Editorial), then fine-tune colors (brand, accent, paper, ink), fonts (heading, body, mono from the font library), navbar (layout, background, CTA style), scale (radius, density, max width, section spacing), motion preferences, button styles, and custom CSS. You can also add head snippets for analytics (Plausible, Umami, Matomo) or font preconnects. Click the Style header to open or close the tab strip.
- **Domain & SEO**: Configure your custom domain and SEO settings. The content here is scoped to the domain selected in the topbar domain switcher. When the default site (listed as the workspace name) is selected, no domain-specific panel appears. See [Domains, Website and Inbox](/features/domains-website-inbox) for the full domain management workflow.
- **Integrations**: Connect third-party services to your website.

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

See [Sales](/features/domains-website-inbox#sales) for tracking payments and orders.

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
- **Scale**: Set border radius, content density (compact, airy, generous), maximum content width, and vertical section spacing.
- **Motion**: Enable reduced motion or choose a motion style (Off, Subtle fade, Slide up).
- **Buttons**: Customize button border radius, padding, and hover effects.
- **Navbar**: Set the layout (standard, centered, split), background style (solid, translucent blur, transparent), and CTA button appearance (filled, outline, text-only). The navbar settings apply to every page.
- **Phone & call bar**: Add a clickable phone number to your navigation bar. When set, the phone number appears beside the CTA button on desktop and in the mobile navigation drawer. Enable the **Mobile call bar** toggle to pin a fixed "tap to call" button at the bottom of the screen on mobile devices, so visitors can reach you with one tap regardless of where they are on the page. The phone label defaults to "Call us" when left empty.
- **Custom CSS**: Write your own CSS that gets injected into the site. Useful for fine-tuning or overriding defaults.
- **Favicon**: Upload a favicon for your site. It is shown in browser tabs and bookmarks. If not set, the site falls back to your light logo, then your business profile picture.
- **Head snippets**: Add analytics scripts (Plausible, Umami, Matomo) or font preconnects via the snippet picker.

Changes in the Style tab are saved automatically on edit and apply to all pages.

## Publishing

The top bar shows how many unpublished changes exist. Publishing snapshots only the pages marked as Live. Pages in Concept stay hidden from the public site, even after you publish.

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

## Public URL

Your website is served at the highest-priority URL available:

1. Your custom domain (e.g. `https://acme.nl`) when verified and enabled
2. Your workspace subdomain (e.g. `https://acme.mycompanydesk.com`)
3. The fallback portal route (`/portal/{slug}`)

See [Domains, Website and Inbox](/features/domains-website-inbox) for domain setup and verification.

## Contact form

The contact form block (`form` section type) is a live submit handler. When a visitor fills in the fields you configured (name, email, phone, company, message) and hits send, the platform creates a quote request and notifies your workspace. The form shows a success banner on completion and an inline error if something goes wrong. All inputs are disabled during submit to prevent double sends.

What happens on submit:

1. Only the fields the block actually renders are sent, so hiding the name input does not break the backend.
2. The platform creates a quote request under the company tied to the site slug.
3. You receive a workspace notification (same path as the legacy `/portal/quote-request` route).
4. The request appears in **Quotes > Requests**.
5. The visitor sees a customizable success message.

Contact-form submissions are rate-limited to 5 per minute per IP address. A Cloudflare Turnstile widget also appears before submit when configured on your workspace, blocking automated bot submissions without slowing real visitors down.

## Newsletter signup

The newsletter block (`newsletter` section type) captures email signups from your published site. The backend uses a double opt-in flow: after submit, the visitor receives a confirmation email and must click the link to activate their subscription. Suppressed addresses and already-active subscribers are treated the same as new signups from the form's perspective (no data leakage).

What happens on submit:

1. The platform stores the subscription with `source: "site_form"`.
2. If the address is not already active and not suppressed, a double opt-in email is sent.
3. The visitor sees a success banner regardless, keeping the subscription state private.
4. Once confirmed, the subscriber appears in the newsletter audience for that workspace.

Newsletter submissions share the same rate limit as the contact form: 5 per minute per IP address. The Turnstile bot-protection widget is also active on newsletter forms when configured.

## Managing requests

See [Quotes - Quote Requests](/features/quotes#quote-requests) for details on managing incoming requests.

## Subscription requirement

The public website (business page and site builder) is a paid feature. It is visible while your workspace is on a Starter or Pro plan. When a workspace lapses to Free, the site stays live for a 7-day grace period, then goes dark.

- **Paid or trialing**: The site is always visible.
- **Lapsed to Free**: The site remains visible for 7 days after your access ends (based on trial end, cancellation date, or paid period end, whichever is most recent). After the grace window, the site returns a 404 page.
- **Uncertain state**: If the system cannot determine when your paid access ended, the site stays up rather than risking an accidental takedown.

This gate applies to all public serving paths: the business page, the service-detail route, and the site builder's rendered pages. It is checked on every request, before any caching layer, so it stays accurate even if your subscription changes mid-cache.

Source: `apps/api/src/modules/billing/entitlement.service.js` — `PUBLIC_PAGE_GRACE_DAYS`, `computePublicPageGate`, `getPublicPageVisibility`.

## Related

- [Domains, Website and Inbox](/features/domains-website-inbox): Custom domain setup, verification, SSL, and email inbox.
- [Company Settings](/settings/company): Where your company details, branding, and address live.
- [Quotes](/features/quotes): Managing quote requests that come in through your website.
- [Plan & payments](/settings/billing): Subscription plans and feature flags.