---
title: Site Builder
---

# Site Builder

Build your business website with a drag-and-drop editor. Create multiple pages, compose them with sections and blocks, customize colors and fonts, and publish when you are ready.

## Overview

The site builder replaces the old single-page business profile. It gives you a full website editor with:

- **Multi-page support**: Create as many pages as you need, each with its own path and sections.
- **Domain switcher**: When your workspace has multiple custom domains (Pro plan), a dropdown in the top bar lets you switch between editing the default site and a per-domain variant. Each domain gets its own pages, navigation, design tokens, and publish snapshot.
- **Section blocks**: Add hero, text, gallery, spotlight, services, team, testimonials, contact form, and custom HTML sections to any page.
- **Design tokens**: Set brand colors, fonts, spacing, border radius, motion style, custom CSS, and a site favicon. Changes apply across the whole site.
- **Navigation editor**: Drag-and-drop reorder of header links, with dropdown groups and external links.
- **Publish snapshots**: Work in draft, preview your changes, then publish. Unpublished changes are tracked in the top bar.
- **Responsive preview**: Toggle between desktop, tablet, and mobile viewports while editing.

The site builder lives at **Company > Your website** (`/website`).

## Tabs

The site builder has five tabs (six when Style is expanded):

- **Editor**: Compose pages by adding and arranging sections. Click any section to inspect its content, layout, style, or animation settings. Drag sections to reorder, duplicate, or delete them.
- **Pages**: Manage your pages: create new ones from templates, set paths and visibility, and see which pages are live, draft, or scheduled. Click a page to open it in the editor. The locked home page cannot be deleted.
- **Style**: Customize your site-wide design tokens. Apply a one-click preset (Editorial), then fine-tune colors (brand, accent, paper, ink), fonts (heading, body, mono from the font library), navbar (layout, background, CTA style), scale (radius, density, max width, section spacing), motion preferences, button styles, and custom CSS. You can also add head snippets for analytics (Plausible, Umami, Matomo) or font preconnects. Click the Style header to open or close the tab strip.
- **Domain & SEO**: Configure your custom domain and SEO settings. The content here is scoped to the domain selected in the topbar domain switcher. When the default site (listed as the workspace name) is selected, no domain-specific panel appears. See [Domains, Website and Inbox](/features/domains-website-inbox) for the full domain management workflow.
- **Integrations**: Connect third-party services to your website.

## Creating pages

1. Go to the **Pages** tab.
2. Click **New page**.
3. Enter a title and a path (e.g. `/about`).
4. Choose a template or start blank.
5. The page opens in the editor, where you can add sections and build it out.

Each page gets a unique path. The home page (`/`) is created by default and cannot be deleted.

## Building pages with sections

In the **Editor** tab:

- Click **Add section** to see the available block types (hero, text, gallery, spotlight, services, team, testimonials, contact form, pricing, product, custom HTML, and more).
- Select a block type to insert it onto the page.
- Click any section to open the inspector panel, where you can edit its content, layout, style, and animation.
- Drag sections up or down to reorder. Use the duplicate and delete actions on each section.

Some sections have system-only variants that are available on the locked home page but not on custom pages.

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

## Styling your site

In the **Style** tab, you control the look and feel of your entire site:

- **Presets**: One-click starting points that set colors, fonts, and spacing in one go. The Editorial preset ships a navy-and-gold palette with serif headlines and mono eyebrows, reflecting the MyCompanyDesk house style. Applying a preset merges the tokens into your workspace, preserving your logo, custom CSS, and head snippets.
- **Colors**: Pick brand, accent, paper, ink, surface, and muted colors. The palette is applied through CSS custom properties.
- **Dark mode**: Choose how your site handles dark mode. Three options: **Off** (no dark mode, site stays in its light palette), **Button** (visitors see a sun/moon toggle in the navigation bar and can switch themes, with their choice saved locally), or **System** (the site follows the visitor's OS-level preference automatically via a live media-query listener). When dark mode is on, a paired dark palette appears where you can set night-optimized versions of each color. If you leave the dark palette empty, the site applies a sensible default inversion that keeps your brand and accent colors intact.
- **Typography**: Choose heading, body, and mono fonts from the built-in font library (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Scale**: Set border radius, content density (compact, airy, generous), maximum content width, and vertical section spacing.
- **Motion**: Enable reduced motion or choose a motion style (none, subtle, playful).
- **Buttons**: Customize button border radius, padding, and hover effects.
- **Navbar**: Set the layout (standard, centered, split), background style (solid, translucent blur, transparent), and CTA button appearance (filled, outline, text-only). The navbar settings apply to every page.
- **Custom CSS**: Write your own CSS that gets injected into the site. Useful for fine-tuning or overriding defaults.
- **Favicon**: Upload a favicon for your site. It is shown in browser tabs and bookmarks. If not set, the site falls back to your light logo, then your business profile picture.
- **Head snippets**: Add analytics scripts (Plausible, Umami, Matomo) or font preconnects via the snippet picker.

Changes in the Style tab are saved automatically on edit and apply to all pages.

## Publishing

The top bar shows how many unpublished changes exist. When you are ready:

1. Click **Publish** in the top bar.
2. Your site is published to the public URL (your custom domain, workspace subdomain, or the fallback portal route).

Unpublished changes are tracked per page and per token. The publish button is disabled when there is nothing to publish.

## Navigation

The navigation editor lets you arrange your site's header links:

- Drag pages to reorder the top-level navigation.
- Create dropdown groups to nest pages under a parent label.
- Add external links that point outside your site.
- The logo in the header is clickable and always links back to the home page.
- The home page is always first and locked in position.

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

Contact-form submissions are rate-limited to 5 per minute per IP address.

## Newsletter signup

The newsletter block (`newsletter` section type) captures email signups from your published site. The backend uses a double opt-in flow: after submit, the visitor receives a confirmation email and must click the link to activate their subscription. Suppressed addresses and already-active subscribers are treated the same as new signups from the form's perspective (no data leakage).

What happens on submit:

1. The platform stores the subscription with `source: "site_form"`.
2. If the address is not already active and not suppressed, a double opt-in email is sent.
3. The visitor sees a success banner regardless, keeping the subscription state private.
4. Once confirmed, the subscriber appears in the newsletter audience for that workspace.

Newsletter submissions share the same rate limit as the contact form: 5 per minute per IP address.

## Managing requests

See [Quotes - Quote Requests](/features/quotes#quote-requests) for details on managing incoming requests.

## Related

- [Domains, Website and Inbox](/features/domains-website-inbox): Custom domain setup, verification, SSL, and email inbox.
- [Company Settings](/settings/company): Where your company details, branding, and address live.
- [Quotes](/features/quotes): Managing quote requests that come in through your website.