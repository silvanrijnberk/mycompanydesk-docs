---
title: Site Builder
---

# Site Builder

Build your business website with a drag-and-drop editor. Create multiple pages, compose them with sections and blocks, customize colors and fonts, and publish when you are ready.

## Overview

The site builder replaces the old single-page business profile. It gives you a full website editor with:

- **Multi-page support**: Create as many pages as you need, each with its own path and sections.
- **Section blocks**: Add hero, text, gallery, services, team, testimonials, contact form, and custom HTML sections to any page.
- **Design tokens**: Set brand colors, fonts, spacing, border radius, motion style, custom CSS, and a site favicon. Changes apply across the whole site.
- **Navigation editor**: Drag-and-drop reorder of header links, with dropdown groups and external links.
- **Publish snapshots**: Work in draft, preview your changes, then publish. Unpublished changes are tracked in the top bar.
- **Responsive preview**: Toggle between desktop, tablet, and mobile viewports while editing.

The site builder lives at **Company > Your website** (`/website`).

## Tabs

The site builder has five tabs:

- **Editor**: Compose pages by adding and arranging sections. Click any section to inspect its content, layout, style, or animation settings. Drag sections to reorder, duplicate, or delete them.
- **Pages**: Manage your pages: create new ones from templates, set paths and visibility, and see which pages are live, draft, or scheduled. Click a page to open it in the editor. The locked home page cannot be deleted.
- **Style**: Customize your site-wide design tokens: colors (brand, accent, paper, ink), fonts (heading, body, mono from the font library), scale (radius, density, max width, section spacing), motion preferences, button styles, and custom CSS. You can also add head snippets for analytics (Plausible, Umami, Matomo) or font preconnects.
- **Domain & SEO**: Configure your custom domain and SEO settings. See [Domains, Website and Inbox](/features/domains-website-inbox) for the full domain management workflow.
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

- Click **Add section** to see the available block types (hero, text, gallery, services, team, testimonials, contact form, pricing, product, custom HTML, and more).
- Select a block type to insert it onto the page.
- Click any section to open the inspector panel, where you can edit its content, layout, style, and animation.
- Drag sections up or down to reorder. Use the duplicate and delete actions on each section.

Some sections have system-only variants that are available on the locked home page but not on custom pages.

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

## Styling your site

In the **Style** tab, you control the look and feel of your entire site:

- **Colors**: Pick brand, accent, paper, ink, surface, and muted colors. The palette is applied through CSS custom properties.
- **Typography**: Choose heading, body, and mono fonts from the built-in font library (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Scale**: Set border radius, content density (compact, airy, generous), maximum content width, and vertical section spacing.
- **Motion**: Enable reduced motion or choose a motion style (none, subtle, playful).
- **Buttons**: Customize button border radius, padding, and hover effects.
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

## Quote request form

Visitors can still submit quote requests through the contact form section:

1. They fill in their name, email, and message.
2. The request is submitted.
3. You receive a notification.
4. The request appears in **Quotes > Requests**.

Quote requests are rate-limited to 1 per 15 minutes per IP address.

## Managing requests

See [Quotes - Quote Requests](/features/quotes#quote-requests) for details on managing incoming requests.

## Related

- [Domains, Website and Inbox](/features/domains-website-inbox): Custom domain setup, verification, SSL, and email inbox.
- [Company Settings](/settings/company): Where your company details, branding, and address live.
- [Quotes](/features/quotes): Managing quote requests that come in through your website.