---
title: Domains, Website, and Inbox
last_verified: 2026-07-02
---

# Domains, Website, and Inbox

Your own domain, your business website, and a shared email inbox work together in MyCompanyDesk. Add a domain once and it becomes your website address and the home of your business email. This page covers all three: managing domains, building and publishing your website, and working in the inbox.

## Your domain

Domains are managed under **Settings**, in the tile **"Je website en domein"** (`/settings/domein`). The page opens with your current live web address and a **Bekijk live** button, followed by everything you need to add and manage domains.

### Adding a domain

One chooser offers three paths:

- **Claim your free .nl domain.** If your plan includes a free .nl domain, the option "Je eerste .nl-domein is gratis" appears at the top. Pick a name and MyCompanyDesk takes care of the rest: registration, website, and email.
- **Buy a new domain.** Choose "Zoek een vrije domeinnaam", type the name you want, and check availability. You see the yearly price, including DNS and SSL, before you pay. Supported extensions are .nl, .eu, .com, .net, and .org. After a secure checkout the domain is registered and set up for you.
- **Connect a domain you already own.** Choose "Ik heb al een domein" for a guided, plain-language flow. You pick how to connect: let MyCompanyDesk handle everything (recommended, you change two nameserver addresses at your current provider once) or connect only your website (you add a single CNAME record; your email stays where it is). The guide walks you through it step by step with copy buttons for the exact values, and a "Controleer nu" button to check the connection. Changes at your provider can take up to 24 hours; MyCompanyDesk keeps checking automatically and notifies you when the domain is active.

### The free .nl domain

The free claim has a few requirements, and the page shows exactly which ones are still open:

- The domain must be a .nl domain.
- Your workspace needs a linked KVK number.
- The domain name must match your registered business name or a trade name.
- One free domain per business; a business that already claimed one cannot claim a second.

Founding Members keep their free domain for life: MyCompanyDesk covers the yearly renewal. During a trial, the free domain is registered under MyCompanyDesk's name and becomes fully yours when you continue on Pro, with renewal handled automatically through your subscription. Leaving before that? You can take the domain with you for a one-time, all-in payment of 15 euros; after payment you receive the transfer code so you can move it to any provider. The claim dialog explains all of this before you confirm.

### While a domain is pending

Domains that are still being connected appear in their own "Domeinen in afwachting" card with a status badge and the exact instructions for your provider. Use the **Verifiëren** button to check right away, or wait: MyCompanyDesk re-checks every few minutes and notifies you the moment the domain is active.

### Managing an active domain

Every active domain gets its own card with its own tabs. By default you see one clean view, **Routing**, which controls what the domain does. Five technical tabs are available for power users: **DNS-records**, **SSL / TLS**, **URL-omleidingen** (redirects), **Analyse** (visitor and traffic statistics), and **Beveiliging** (threats blocked in the last 30 days). These appear only when you switch on **Geavanceerde modus**, a per-device toggle on the **Weergave** page in Settings. Domains connected with a single CNAME record show only the Routing tab.

### Renewals

- **Free domain on Pro**: renews automatically as part of your subscription. Nothing to do.
- **Founding Member domain**: renewed for free by MyCompanyDesk, for life.
- **Purchased domain**: renews via your saved card. You can save a card during checkout for automatic renewal; without one, you get a reminder before the expiry date and a **Verlengen** button to renew manually.

### Taking a domain elsewhere

For domains registered in your name you can request the transfer code ("Verhuiscode ophalen") at any time and move the domain to another provider. Keep in mind that transferring away a domain you claimed for free ends the free-domain perk; the claim dialog warns you about this before you claim.

## Your website

The website builder is a top-level **Website** area in the navigation, with four tabs: **Editor**, **Pagina's**, **Stijl**, and **Koppelingen**. Each workspace has one website; it is served on your connected domain once published.

### Editor

Compose pages by adding and arranging blocks. Select any block to edit its content, layout, style, and animation. The editor supports undo and redo, a desktop, tablet, and mobile preview, and saving any block as a reusable block in your personal "Mijn blokken" library so you can drop it onto other pages later.

Publishing is one click: the **Publiceer** button shows how many unpublished changes you have, warns you if example text is still in place, and pushes a snapshot live. A revert action restores the last published version if you want to undo your edits.

### Blocks

The catalog holds around 37 block types, organized in groups. The main families:

- **Basics**: hero, section heading, text, image, list, columns, video and embeds, downloads.
- **Your business**: team, testimonials, customer logos, locations, timeline, social media.
- **Your work**: services, portfolio, gallery, before and after, step-by-step process, blog overview, stats, spotlight.
- **Conversion**: call to action, quote, contact form, appointment booking, pricing, product, newsletter signup, FAQ, countdown, comparison.
- **Structure**: navigation, footer, language switcher, divider, marquee.

There is no custom HTML block; for external content, use the embed block (YouTube, Vimeo, Google Maps, and similar).

### Selling through your site

Pricing tiers and the product block can carry a buy button. Connect Mollie or Stripe under Koppelingen and customers pay through your own account; funds go directly to you. The price you set is the final price your customer pays, VAT included, and you choose the VAT rate per tier or product (21% by default).

### Pagina's

Create pages from a template, rename, duplicate, or delete them, and filter by status: Alles, Live, Concept, Ingepland. Pages can go live immediately or on a scheduled date and time. Per page you control menu visibility, an optional password, the language, and SEO settings such as the title, description, and social sharing image. The Pagina's tab also holds the navigation editor (drag and drop your menu, with dropdown groups and external links) and URL redirects.

### Stijl

All design in one place: brand colors and dark mode, logo and favicon, typography, buttons and corner rounding, navbar style, spacing, animations, and an announcement bar. The "Eigen code" section is for power users: custom CSS and analytics snippets, plus the cookie banner configuration.

### Koppelingen

Connect payment providers (Mollie and Stripe) with inline setup cards, and third-party tools: Mailchimp, Plausible, and Trustpilot. The tab also links related MyCompanyDesk features, such as quote requests, your services and rates, customers, and the customer portal.

## Sales from your website

Purchases made through buy buttons on your published site are tracked on their own **Verkoop** page (`/sales`). This log is only for website sales; regular invoices live under Invoices.

Each sale shows the date, product, site, customer, payment provider (Mollie or Stripe), amount, and status: paid, awaiting payment, failed, refunded, or expired. An invoice is created automatically for every sale and can be opened straight from the row. Paid sales offer two actions: **refund** the full amount through the original payment provider, and **regenerate the invoice** if it is missing. The list can be exported as CSV.

## Inbox

The inbox at `/inbox` is a three-pane workspace: a rail on the left with your mailboxes, folders, and labels, the thread list in the middle, and the reading pane on the right. On very wide screens an extra panel shows quick actions next to the open thread.

The folders: **Inbox**, **Met ster** (starred), **Gesluimerd** (snoozed), **Verzonden** (sent), **Concepten** (drafts), **Archief**, **Spam**, and **Prullenbak** (trash).

### Reading mail

Messages are grouped into conversations; long threads collapse the middle messages behind a "show earlier messages" control. Remote images are blocked by default for your privacy, with a one-click "show images" action; senders you trust can be allowed to always show images. Reply, reply all, and forward are all available, and replies automatically go out from the address your customer wrote to.

### Writing mail

Hit **Opstellen** (or press `c`) to open the compose drawer: a rich-text editor with bold, italic, underline, lists, and links, plus attachments and Cc/Bcc fields behind an "Add Cc/Bcc" toggle. A "Verzenden vanaf" picker chooses the sending address, including send-only addresses such as noreply@. Unsent messages are saved as drafts automatically and live in Concepten.

Two send safeguards:

- **Undo send**: after sending you get 10 seconds to click "Ongedaan maken" before the message actually leaves.
- **Later verzenden**: schedule a message for tomorrow morning, Monday morning, or any date and time you pick. Scheduled messages can be cancelled from the thread until they go out.

### Searching

The search bar accepts free text and operators, which you can combine: `from:`, `to:`, `has:attachment`, `is:unread`, `is:starred`, `label:`, `after:YYYY-MM-DD`, and `before:YYYY-MM-DD`. For example: `from:bakker has:attachment`.

### Staying organized

- **Snooze** a thread until later today, tomorrow morning, or next week; it returns to your inbox at that moment.
- **Star** important threads and find them under Met ster.
- **Labels** group threads; filter on any label from the rail.
- **Mark as unread** persists across devices until you open the thread again.
- **Bulk actions**: select multiple threads and mark them read, archive them, mark them as spam, or delete them in one go.

### Keyboard shortcuts

Press `?` in the inbox for the full overlay. The essentials: `c` compose, `r` reply, `j` and `k` next and previous conversation, `e` archive, `s` star, `#` delete, `!` mark as spam, `/` search, `u` back to the list.

### Turning mail into work

The "Snel omzetten" actions convert the open thread into your next step: a new invoice, a new quote, a new expense, or a new customer, prefilled with the sender's details. If the sender is already a customer, the inbox recognizes them and links you straight to their customer page.

### Always up to date

There is no refresh button, on purpose. The inbox refreshes itself quietly while it is open on desktop, and on mobile you pull down to refresh.

### Inbox settings

Receiving is configured at `/inbox/settings`:

- **Postbussen en adressen**: add mailboxes on your domain, manage aliases (replies to an alias go out from that alias), send-only addresses, an optional retention period per mailbox, and the default mailbox. Mail sent to any address on your domain that has no mailbox of its own lands in the default mailbox, so nothing vanishes because of a typo.
- **Activiteit**: recent outbound deliveries and bounces.
- **Vertrouwde afzenders**: senders that are never marked as spam or always show images.
- **AVG-gegevensverwijdering**: data removal by email address, for team admins.
- **Domein**: the receiving status of your domain.

If mail for your domain currently arrives at another provider (Google Workspace or Microsoft 365, for example), the settings warn you: sending works right away, but receiving starts only once mail delivery for the domain moves to MyCompanyDesk.

### Rules

At `/inbox/settings/regels` you automate incoming mail. Each rule is one trigger plus one action. Triggers: the sender's domain, the sender's exact address, the subject contains a phrase, or the mailbox the mail arrives on. Actions: add a label, set a status (open, snoozed with a duration you pick, archived, or spam), or forward a copy to another address. Rules can be switched on and off individually.

## Sending and receiving

The inbox is the receiving side of your email, plus the replies you write there. Automated sending, such as invoice and quote delivery and payment reminders, is configured separately under **Settings**, then **E-mail**. See [Email](/settings/email) for the sending side.

## Related

- [Email](/settings/email): outgoing email, sender address, and delivery tracking.
- [Site Builder](/advanced/business-page): the full editor guide.
- [Payment methods](/faq/payment-methods): connecting Mollie or Stripe.
- [Settings overview](/settings/): where everything lives, including advanced mode.
