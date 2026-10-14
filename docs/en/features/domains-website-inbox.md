---
title: Domains, Website, and Inbox
description: "Custom domains, the hosted business website and the shared inbox: what is included in Desk and Office and how they work together."
last_verified: 2026-10-14
---

# Domains, Website, and Inbox

> **Available to everyone.** The website on a free mycompanydesk.site address and an inbox for reading and replying are included in Desk. Custom domains and the full inbox are included in Office.

Custom domains, the hosted business website, and the shared email inbox ship as one product. The reason: they share state. The same connected domain that proves you control `acme.nl` also makes `acme.nl` your website's URL and lets `info@acme.nl` start receiving mail. There is one onboarding flow, one settings tree, and one place in the app to manage all of it.

## The bundled value

Add a domain once and you get three things:

- **A custom address.** Your business lives at `acme.nl` instead of `acme.mycompanydesk.site`.
- **A live website.** The hosted business page is automatically published on the verified domain.
- **A working inbox.** `info@acme.nl`, plus `support@`, `sales@` and a send-only `noreply@` alias, start catching mail and sending replies.

You can run the bundled flow from the inbox setup (`/inbox/setup`), which connects your domain and switches the inbox on in one flow, or piece by piece from **Settings › Your website and domain** (`/settings/domein`). If you pick "Your own website" or "Email on your own domain" at "What do you want to start with?" in the [Setup wizard](/en/getting-started/company-setup), the wizard then hands you over to your website or to the inbox setup.

## One onboarding flow

The inbox setup at `/inbox/setup` is the recommended entry point. It runs every step in one go, so you answer a few questions and the platform wires everything underneath.

### Step 1: Add a domain

Two paths:

- **Free workspace subdomain**: `your-slug.mycompanydesk.site`. No DNS work; the slug (a plain form of your company name) is registered as a Cloudflare Pages custom domain and the website is live within seconds. The subdomain is applied when you publish the website, not before. This address is part of Desk: the website carries a small "Made with MyCompanyDesk" badge and stays online permanently. On your own domain (Office) there is no badge.
- **Your own domain**: paste `acme.nl`. Two setup modes are supported:
  - **Nameserver mode** (recommended): a Cloudflare zone is created for the domain. You change your registrar's nameservers to the two `*.ns.cloudflare.com` hostnames the wizard shows. Cloudflare becomes authoritative DNS for the domain, which is what unlocks email, SSL and DNS-record management inside MyCompanyDesk.
  - **CNAME mode** covers a subdomain (e.g. `portal.acme.nl`), or for connecting only the website on a main domain while email and everything else stay at your current provider ("Only connect my website"). You add a single CNAME record at your current provider; on a main domain that is usually `www.` plus your domain, because most providers cannot put a CNAME record on the bare domain. Once the record is live, `www.<your domain>` shows your MyCompanyDesk website. Email routing is not available in this mode; hosting the website on the bare domain itself needs nameserver mode.

Adding a custom domain automatically deactivates the workspace subdomain: there is one canonical website per company, never two.

### Step 2: Verify

Verification runs both on demand and on a poll. The detail page has a **Verify** button, and a background task re-checks every pending domain at intervals.

- **Nameserver mode** is verified once Cloudflare reports the zone as active. The status moves from waiting for nameservers, through waiting for verification, to active. You are notified via the in-app notification bell when the flip happens.
- **CNAME mode** is verified by resolving the CNAME and confirming it points at the Pages target. The status moves from waiting for the CNAME record to active.

A nameserver domain that has been waiting for your nameservers for 30 days without ever connecting is removed automatically, which frees the name again for another workspace. Domains that already have a mailbox on them (imported mail included), domains we hold at the registrar ourselves, and purchases or transfers in progress are never removed this way.

### Step 3: SSL

SSL is provisioned by Cloudflare automatically once the zone is active. The default mode is **Full (strict)**; you can change it from `Domain detail › SSL` (`off / flexible / full / strict`). The certificate-status field on the SSL panel mirrors Cloudflare's verification result.

### Step 4: Website goes live

The hosted business page (see [Site Builder](/en/advanced/business-page)) is automatically published at the domain root once the zone is active. Your website lands on the best address you have, in this order:

1. A custom domain that carries your website → `https://acme.nl`
2. A subdomain of your custom domain for your website → `https://portal.acme.nl`
3. The workspace subdomain → `https://acme.mycompanydesk.site`
4. The fallback portal route (`/portal/<slug>`) when nothing else is configured.

### Step 5: Inbox catches mail

For custom domains in nameserver mode, the wizard switches on the inbox after verification. That step is safe to run more than once and does the following:

- Sets up sending on the bare domain (`acme.nl` by default) and writes the DKIM and SPF records to your DNS. Passing an explicit subdomain label provisions `<label>.<domain>` instead (e.g. `mail.acme.nl`).
- Sets a catch-all rule through Cloudflare Email Routing, so all mail to the domain arrives in your inbox.
- Inspects the apex MX records. If they are empty or already point at Cloudflare, the wizard installs the Cloudflare MX. If a third-party provider (Google Workspace, Microsoft 365) is already there, the wizard refuses to overwrite it and shows a warning so you can decide.
- Creates `info@acme.nl` as the default shared mailbox.
- Provisions `support@` and `sales@` as bidirectional aliases of `info@`, and `noreply@` as a send-only alias (allowed in From, dropped on inbound).
- If you pick an address other than `info@` in the address step (for example `jan@acme.nl`), that mailbox becomes your default mailbox.

The inbox can also be enabled before verification has completed. Cloudflare refuses to provision mail on a zone whose nameservers do not point at us yet, so your mailbox is then created right away while the zone-wide steps (routing, catch-all, apex MX) are postponed: the app tells you that mail on the domain starts working once your nameservers point at us. The moment the domain becomes active, the platform finishes the provisioning by itself.

## Per-feature reference

### Custom domains

UI lives at **Settings › Your website and domain** (`/settings/domein`, page title "Your domain"). The older paths `/workspace/organization/company/address`, `/workspace/organization/domains`, and `/workspace/communication/domains` all redirect here.

The page splits into two sections:

- **Pending domains**: Domains still being verified always appear at the top.
- **Active domains**: every active domain gets its own card with its own tabs, and each card remembers its own tab. A card opens on the **Routing** tab.

The page defaults to a clean view. Five power-user tabs are hidden unless you turn on **Advanced mode**: **DNS Records**, **SSL / TLS**, **URL Redirects**, **Analytics** and **Security**. A CNAME-mode domain only has the Routing tab. Advanced mode is a per-device switch on the **Display** page in settings; see the [Settings overview](/en/settings/).

What the page lets you do:

- **Buy or claim a domain** via the domain purchase card. Enter a domain name, check availability against OpenProvider, and either buy it or claim it free if your workspace qualifies for the free `.nl` claim.
- **Add a domain** (nameserver or CNAME mode) via a dedicated card that is always visible.
- **Move a domain to us** (transfer in) with the authorization code from your current registrar, or run the migration wizard when your mail still lives at another hoster.
- **Verify** a pending domain.
- **Manage DNS records** for the selected active domain: A, AAAA, CNAME, MX, TXT, SRV, CAA, NS. Changes go straight to Cloudflare.
- **SSL** for the selected domain: view certificate status, change SSL mode.
- **URL redirects** for the selected domain: three free Cloudflare Page Rules per zone. Source pattern + destination + 301/302.
- **Email security** for the selected domain: SPF/DMARC/DKIM check with a one-click "fix" that writes safe defaults (`v=spf1 ~all`, `v=DMARC1; p=quarantine; …`). If your domain already carries its own SPF or DMARC record, it stays in place and the check accepts any single policy record of that kind.
- **Analytics** for the selected domain: last 30 days of requests, bandwidth, threats, visitors, pageviews. When Cloudflare does not deliver those numbers, the tab shows an empty state instead of an error.
- **Remove** the selected domain: the domain leaves your workspace and the Cloudflare zone (or the website link in CNAME mode) is cleaned up. If this domain carried your website, the site falls back to another active website domain or to the free mycompanydesk.site address.
- **Review inactive domains** in their own card: expired domains, domains transferred away, and CNAME domains that never connected are listed with a status badge and a short explanation, each with a Remove action; expired domains also offer a contact-support route.

#### Renewal lifecycle

Domain renewal follows three paths depending on how the domain was acquired:

1. **Free renewal with Office** (a free claimed domain in a workspace that became a paying Office customer): MyCompanyDesk pays for the renewal. The domain auto-renews as long as the workspace is really on Office; if the subscription is cancelled to run until the end of its period and Office stops before the domain expires, the free renewal no longer applies and renewing the domain is up to you. No payment method needed.
2. **Paid auto-renewal** (a purchased domain, or a free claimed domain in a workspace without Office): Charged annually via the saved card. Works like any subscription renewal.
3. **Manual renewal**: if a workspace with a free claimed domain drops off Office and has no saved card, the domain does not renew automatically. You see a notification and start a one-off payment for the renewal from it, in a Stripe payment window inside MyCompanyDesk. This is the only way to keep a domain alive without an active subscription or saved card.

#### Trial-exit domain buy-out

When a customer on an Office trial decides to leave before converting to paid Office, they have a third option for their free `.nl` domain: buy it out for a flat €15.00 incl. VAT (one-time). In the buy-out window the customer pays via Stripe and receives full ownership. Once paid, the domain holder is transferred from MyCompanyDesk to the customer and the EPP (transfer) code is shown so the domain can be moved to any registrar.

The €15.00 price is deliberately quoted inclusive of Dutch VAT because the charge is triggered at the moment the customer leaves. The amount is €12.40 plus 21% Dutch VAT, rounded to the nearest cent, so the total lands exactly on €15.00.

The buy-out price is a product price, not a transfer surcharge. MyCompanyDesk never charges for the transfer code itself once the customer is the registered holder.

#### Transfer consequences

Transferring a domain registered through MyCompanyDesk to another registrar has permanent consequences, detected by the weekly check with the registrar:

- **Free claimed domains**: the free-domain perk is lost. The workspace can never claim another free domain. Note that buying out the domain during the trial (see buy-out section above) is not a transfer, but a holder handover that gives the customer ownership before any transfer happens, so the free-domain perk is preserved for the duration of the trial.
- **Purchased domains**: no perk is lost. The domain is simply marked as transferred.

The claim window warns about these consequences before a free-domain claim is submitted, and requires explicit acknowledgement from the user. A "Held during trial" notice explains that the domain is registered under MyCompanyDesk during the trial and will be transferred to the customer for free when they become a paying Office customer, or available for buy-out at €15 on early exit. A workspace that is already a paying Office customer sees its own text: the domain moves to your name right away and renews free of charge every year you keep Office; stop Office and you renew it yourself afterwards. What a transfer revokes is recorded so support can look it up.

#### Buy or claim a domain

The domain purchase card sits in the domain chooser on the Your domain page. The card lets

- **Buy**: Paid purchase via OpenProvider. You enter a domain name, the card checks availability and price, and then opens the purchase window. After you fill in the registrant details, you pay via Stripe in the same window. Once the payment is complete, MyCompanyDesk registers the domain with OpenProvider and connects it to Cloudflare in nameserver mode.
- **Free claim**: Eligible workspaces on an Office trial or with a paid Office subscription can claim one `.nl` domain free of charge for the first year. The card checks whether your workspace meets the conditions. The window asks for the registrant details and then submits the claim. MyCompanyDesk pays the first-year registration fee.

How the domain renews after the first year:

- **Free claimed**: workspaces on an Office trial. The first year is free. At the end of the free year the workspace must be on a paid Office plan; the domain then renews as part of the Office subscription, paid by the workspace. If the workspace stops paying Office after the free year, the domain lapses and must be renewed manually. During the free year you can save a card in the window for automatic renewal later.
- **Purchased**: domains bought at full price. Renewal is charged via the saved payment method on the annual cycle. If the charge fails, a manual-renewal notification is sent.

Eligibility is decided by a set of hard conditions checked on our side:

- **Active Office workspace**: the workspace must be on Office (trial or paid). Workspaces on Desk cannot claim.
- **KVK required**: the workspace must have a linked KVK number.
- **Domain must be `.nl`**: the free program only covers the NL TLD.
- **Domain must match the KVK name**: the domain must correspond to the registered legal name or a trade name.
- **One free domain per KVK number**: A KVK that has already claimed (and then transferred away) a free domain is blocked permanently.

Account age and site-content quality are not hard gates. They would block legitimate onboarding-day claims, which contradicts the “set up your business in a day, domain included” pitch. Instead, both count towards a risk score as soft signals that help sort the review queue, and approval is decided by hard facts first; the score only fills in the middle ground. A person reviews the claim first (the claim window says an answer usually comes within one working day) when the workspace is under heightened signup scrutiny, when the account signed up from outside the Netherlands, when the claim request itself comes from outside the Netherlands, when the registry shows the business as dissolved, when the legal form or the number of employees sits outside the program profile (for example an NV or a foundation, or a company with more than a couple of employees), or when the KVK number already belongs to another customer workspace. A claim goes through without waiting when the business fits the program profile and the person behind the account provably belongs to it: the name on the account appears in the KVK name of a business registered in the last 180 days, or the verified email domain of the account matches the website the KVK lists for the business, which also holds for older companies. Both paths need a normal verdict from the automated check; if it is unavailable, a person looks at the claim. In every other case the score decides: a good score passes, a lower score goes to a person. The same rules apply to every workspace, on trial or paying. The score and its reasons stay internal: the claim never shows them. The card can still show a tip, for example that your website is not published yet, without blocking the claim.

When a condition is not met, the card lists the remaining requirements so the user can see what is left to unlock before the free claim becomes available.

The supported TLDs for purchase are `.nl`, `.eu`, `.com`, `.net`, and `.org`. Other TLDs show an unsupported message with a suggestion to buy the domain elsewhere and connect it through the existing option for a domain you already own.

#### Move a domain to us (transfer in)

A domain registered elsewhere used to be connect-only: the registration itself stayed with the old registrar, so renewal and the transfer-out route did not know about it. The option **Also move my domain name to MyCompanyDesk** in the domain chooser brings the registration itself to MyCompanyDesk. You need the authorization code (the transfer code) from your current registrar, and the registry requires a phone number with the request.

The chooser quotes the transfer before you commit:

- **A `.nl` transfer is free.** The registry charges nothing and adds no year, so your current expiry date stays as it is. Renewal afterwards works like a paid purchase: you get a reminder first and only pay when you renew yourself.
- **`.eu`, `.com`, `.net` and `.org` cost the one-time registration price**, and the transfer adds one year to the domain.

The transfer is requested at the registry with your authorization code and our nameservers attached, so mail and website keep pointing at MyCompanyDesk. For `.nl` this usually completes within minutes; for other TLDs it can take up to five days. The Your domain page shows a status card per transfer: requested, moved (the card disappears once the zone is active), or failed with the registrar's reason and a retry with a new code. A wrong code or an active transfer lock at your current hoster comes back as a refusal that tells you what to do.

The quote refuses, with a named reason, when the TLD is not supported for transfer, when the domain is already registered with us (connect it through the "I already have a domain" option instead), when the domain is linked to another workspace, when a transfer for it is already running, or when the domain is not yet connected in nameserver mode with its mail at us. That last refusal exists because moving the registration first would silence your mail; the migration wizard below connects the domain first and moves the mail along with it.

Moving a domain you had connected yourself updates your existing domain, so your settings, mail and website stay as they are. A failed transfer is refunded and the domain simply stays connected. Renewal treats transferred domains like paid purchases.

#### Coming from another hoster (mail migration)

The option **I am switching from another host** runs the whole move as one wizard: it connects your domain, prepares your mailboxes, imports the mail from your old mailboxes, transfers the domain registration to us, imports what arrived during the transfer, and ends with the notice that you can cancel your package at the old hoster. You need the password of each old mailbox and, for the transfer, the authorization code. Nameservers, MX records and ports stay out of sight; only the rare fallback step mentions them.

Your mailboxes are ready from the start. Even while your domain is still with the old hoster, every mailbox already exists and importing your old mail can begin right away. Receiving and sending from those addresses switch on as soon as the domain is with us; the wizard handles the move itself later in the same flow, and the platform completes the mail setup automatically the moment the domain is active. While you wait, the Addresses and sending tab under Settings › Email marks the domain with a **Waiting for your domain** state: as soon as the nameservers have been switched, mail turns on automatically and there is nothing you need to do.

The mail step asks for every address you had with the old hoster, one row per address, and the wizard only creates mailboxes for the addresses you name. Each address gets its own mailbox here; the first one becomes the default mailbox. An address that only forwarded to another address, without a password of its own, needs no entry: its mail already arrived in the mailbox it pointed at. Extra addresses can reuse the first address's password or get their own. The addresses move one at a time: while one is being moved, the rest wait in line, and each address card shows where it stands. Do not cancel your package at the old hoster until every address is done; the final screen lists the addresses that moved and, when an address did not come across completely, tells you to get in touch before cancelling anything. Messages that could not be moved at all, for instance because they are too large or unreadable, stay only at the old hoster; the final screen tells you how many, so you can save them yourself before cancelling your plan there.

The import is a persistent job on our side, not a browser action. The job is stored server-side with the passwords of the old mailboxes encrypted (AES-GCM), and only with your explicit consent. After the domain activates, a follow-up run imports what arrived in between, a sweep run 48 hours later picks up the rest, and then the stored passwords are wiped. Fourteen days is the hard term: after that the passwords are gone in every case. When the import finishes, an in-app notification tells you how many messages arrived from how many folders, up to which date, and that you can now cancel your package at the old hoster. The IMAP host is guessed from your current MX records, with `imap.<domain>` and `mail.<domain>` as fallbacks; known hosters such as Hostinger are recognised by name, and where a hoster requires an app password the wizard says so.

Two safeguards belong to the same flow. Deleting a mailbox or turning the inbox off asks for a confirmation that names how many messages will disappear, including imported history. And the transfer quote refuses while your mail has not moved yet, for the reason above. The privacy promise behind this: we keep the passwords of your old mailboxes encrypted until the transfer is complete, at most fourteen days, and delete them afterwards. That promise is also on the [privacy page](https://mycompanydesk.nl/privacy).

### Hosted website

Your website home lives at **Communication › Website** (`/website`). It is a dashboard with seven tabs in the top bar: Overview, Visitors, Results, Pages, Findability, Connections and Domain & email.

What the tabs cover:

- **Overview** tab: preview your site, see whether it is live, and check how many unpublished changes are waiting. The status card is also where you roll the site back to the live version.
- **Results** tab: what the site brought in, in one view: requests through the contact form, appointments through the booking block and sales through a product block, also per page.
- **Pages** tab: per page, whether it draws visits and requests and whether it can be found, with the Google texts of each page editable right there. Adding or removing pages happens in the editor.
- **Visitors** tab: See where visitors come from and how they move through the site.
- **Findability** tab: SEO and page metadata, plus the card for service pages described below. Old `/website/seo` links redirect here.
- **Connections** tab: Payment processors (Mollie, Stripe Connect) and third-party services such as Mailchimp, Plausible, and Trustpilot. Old `/website/integraties` links redirect here.
- **Domain & email** tab: Custom domain, DNS, SSL, redirects, and inbox setup. See the custom domains section above.

Old links to the Settings tab land on Overview. Your workspace has one website, even when you have several custom domains.

The public site is served at the highest-priority URL the company owns: custom domain root → workspace subdomain → fallback `/portal/<slug>` route.

You can extend the site with the **Online boeken (afspraak plannen)** block so visitors can book an appointment directly from your website. See [Online appointments](/en/features/site-bookings).

#### Service pages for findability

The Findability tab has a card titled "Meer pagina's waar mensen op zoeken" ("More pages people search for"; the app shows this card in Dutch no matter the app language). It only appears when there is something to do: one or more services from your Aanbod catalog without a page of their own, or drafted pages waiting for your review.

Opening the card lists the proposals. Every proposal is a service you really sell, taken from your Aanbod, with its future address shown: each page gets its own spot under `/diensten/`. A proposal can carry a reason from Google Search Console: the search term that matches the service, how often it gets searched, and the position you hold on it. Such terms only rank the proposals and are answered inside the page's FAQ; no page is ever made for a bare search term. A term that matches no service gets no page either. The list instead says why: a term for your whole business (the trade plus your town) belongs to your home page, a search naming your company is left out because those visitors already found you, and a service that is not in your Aanbod yet can get a page once you add it there. A service that already has a page, under its own path or under a page titled like the service, is not proposed twice: two pages fighting over one term push each other down in the results.

When the facts on file are too thin to fill a real page, the dialog asks you instead of inventing filler: what the service involves, roughly what it costs, and how long it takes. Your answers are saved with the service in your Aanbod where those fields were still empty, so they count as facts next time, and the written text goes through the same fact check as every other AI text on your site.

The pages are written one by one and land as drafts. Nothing goes live on its own: you review the drafts, tick the ones you want, and publish exactly those, without your other unpublished changes being taken along. Published pages stay out of the menu. They appear in the footer under their own **Diensten** (Services) column, next to the Pages column, and in your sitemap, so Google finds them. If your site is not live yet, the pages are ready and go live as soon as you publish the website.

The search card ties into this too. Under a query that gets searched while you rank low, the link under it opens this same dialog whenever there are proposals to make; otherwise it still leads to the page list.

### Taking your site offline

If you need to pause your site, use the **Offline** toggle in the **Overview** tab. While the site is offline, visitors and search crawlers receive a 503 page with a `Retry-After` header. The suggested retry interval starts at five minutes and scales up to one day for a site that has been down for a day or longer.

After three days offline, the Overview card shows a warning that Google treats a long outage as a removed page and that it can take weeks to regain search visibility once the site comes back. This warning is shown to you so you can decide whether the outage is still intentional.

### Site packages

`/website/pakketten` is a gallery of approved, pre-styled site packages. You can search by industry or style. Picking a package replaces your draft site (pages, sections, and theme tokens) but never publishes; you review the result in the site builder and publish when you are ready. Older `/website/ontwerpen` links redirect here.

See [Site Builder](/en/advanced/business-page) for the full editor guide.

### Email inbox

The inbox has its own place in the app, at `/inbox`.

When a forwarded supplier invoice is converted into a draft expense from an attachment, the expense is only booked after you confirm it.

Before the bill is booked, the rule also looks at the expenses already standing in your books: an invoice can land on an existing expense instead of becoming a second one, with manually entered expenses and foreign-currency payments included. The supplier name carries the match, with the amount and a skewed window around it, because a payment often follows its invoice by weeks and a monthly supplier keeps its euro debit and its next invoice roughly a month apart. An invoice in dollars, pounds or francs can land next to the euro debit of the same supplier a few days apart, without any exchange rate in the system. Without supplier-name evidence, the rule only pairs the invoice with a bank-side expense of the same amount, and only when exactly one candidate fits. An expense that already carries a receipt never gets a second one over it; such an invoice books into To review instead, with a note pointing at the existing expense, because a reminder that arrives as a different file cannot be told apart. The catch-up on the bills tab also re-judges invoice mails after a change to the triage: bills that the triage once missed get another look, and a temporary outage never takes threads out of that catch-up for good. The triage model reads the file names of the attachments as well. If the invoice date falls in a VAT period that has already been filed, the automated booking is refused and you get a notification instead of silently dropping the invoice; the notification lands on the inbox list and tells you which supplier and invoice date are involved, so you can book it manually in the current period or file a supplementary return.

Capabilities:

- **Threading**: inbound mail is grouped into threads keyed by RFC 822 `Message-ID` / `In-Reply-To` / `References`. Each thread shows a preview of the latest message, the participants, its status and labels. Messages you have already read collapse to one line (sender, preview, time); the newest message and anything that was still unread stay open (as in Gmail). Click a collapsed line to open it, or "Expand all {n} messages" to show everything.
- **Reply**: inline reply box on the thread. Smart `From` picks the address the original mail was sent to, so a customer who emailed `support@acme.nl` gets a reply from `support@`, not `info@`.
- **Reply all**: reply to all participants on the thread with one click. The action appears next to reply in the thread header and includes every recipient from the original message.
- **Forward**: forward the entire thread to another recipient. Opens a compose drawer with the original message body and attachments preserved for editing before sending. The forwarded message header shows the original sender, date and subject.
- **CC and BCC**: CC and BCC fields are available on both compose and reply through an "Add Cc/Bcc" toggle. Addresses accept comma-separated lists or paste from clipboard. The inputs stay hidden until needed, matching the standard inbox pattern where most messages do not need them.
- **Drafts**: save partially written messages and come back to them later. Drafts are stored server-side and persist across browser sessions. Each draft carries a subject, recipient list, body and any attachments added. Drafts that are missing a subject show "(no subject)", and drafts without a recipient show "(no recipient)". In the thread list, a conversation that holds a reply draft of yours carries a red "Draft" label next to the name, so you can tell at a glance which thread you were mid-response on; opening it loads the draft straight into the reply box.
- **Compose**: drawer form with a unified identity picker that sets both mailbox and sender address in one control, customer picker (or freeform `To`), subject, body, CC/BCC fields and attachments. Bounced-recipient warning is shown before send.
- **Default sender**: the Send-from field of a new message opens on your own default mailbox, so in a workspace with several logins everyone is offered their own address instead of a colleague's. Without a saved choice it falls back to the first personal mailbox of the workspace, or the first mailbox. When the field sits on a mailbox that is not your default yet, a "Make this my default address" link under the field saves that mailbox as yours, and the hint then reads "This is your default address for new messages." The default applies to new messages only: a reply always goes from the mailbox the conversation arrived on, and invoices and quotes keep their own workspace sender address.
- **Send-from aliases**: `info@`, `support@`, `sales@` are bidirectional aliases on the same mailbox. `noreply@` is send-only. It is selectable as From, but inbound mail to it is dropped on ingest.
- **Sender name** - outgoing mail carries a name next to the address: the display name of the mailbox, or your company name when no display name is filled in. Mailboxes without one show "Sends as" with the company name in the mailbox list, and clearing the display name sends under the company name again.
- **Mailbox rail** - when your mailboxes sit on more than one domain, the mailbox list in the left rail groups them under a heading per domain. Each row shows only the part before the @, and `info@` sorts at the top of its group. With a single domain the headings are left out.
- **Attachments**: upload before send (compose and reply both). Tapping an attachment on inbound mail opens a preview first: PDFs render page by page, images and plain-text files show inline, and any other file type gets a file card with its size. A long PDF shows the first pages and points to the download for the rest. **Download** and **Share** sit next to the preview as separate buttons, so looking at a file is never an accidental download; on Android, saving lands the file in Downloads and sharing opens the system share sheet. Signed download URLs expire after a short TTL.
- **Alias notice**: when an inbound message arrives at an address on your own domain that isn't yet a declared alias, the thread shows a soft notice with an "Add as alias" action. Addresses outside your own domain are never offered as aliases.
- **Linking**: threads can be linked to a customer, project or invoice for cross-referencing.
- **Catch-all fallback**: mail to any local-part on the domain falls through to the default mailbox (one per domain). This means typos and undeclared aliases don't vanish silently.
- **Activity**: outbound sends, mailbox changes and thread state changes are recorded for the workspace. On a wide screen the side panel next to the conversation shows that history under **Activity**.
- **HTML email rendering**: HTML emails are rendered with their original styles intact inside a sandboxed iframe. The renderer strips scripts, forms and event handlers during sanitisation, and blocks remote images by default to protect your privacy. A notice bar appears when images are blocked, with a single-click "Show images" action that re-renders the message with images enabled. Text-only fallback displays the plain-text part when no HTML body is present.
- **Star/unstar**: mark important threads with a star for quick access. A star icon appears next to the status dot on starred threads in the thread list. The toolbar has a star button that toggles the state for the currently open thread. The "Starred" folder in the left rail, next to Inbox, Snoozed, Sent, Drafts, Archive, Spam and Trash, filters to only starred threads.
- **Read by**: when a thread is still marked as new to you and a colleague has already opened it, the row names that colleague: Read by Anissa. On your phone you see an eye icon with the first name. Former colleagues and the accountant are not named.
- **Soft-delete**: threads can be moved to Trash instead of being permanently destroyed. A delete button (trash icon) appears in the toolbar for non-deleted threads. Once deleted, the button changes to a restore action that moves the thread back to the inbox. The Trash folder sits in the left rail, so you can review deleted threads before they are purged.
- **Full-text search**: a search bar above the thread list lets you search across all inbox messages by subject, body text, snippet, and sender. The search weights the fields, so subject matches appear before body matches. Results are grouped by thread, with the best-matching message's snippet shown as a preview line. Supports quoted phrases, `OR`, and `-` exclusions. A single word of at least three characters is also matched inside email addresses and sender names, so searching for part of an address, like the domain, finds the thread. Multi-word and negated searches keep using full-text matching only. A 250 ms debounce keeps the UI responsive, and the loading spinner gives real-time feedback.
- **What the sender wants**: in the Office inbox, the row of a triaged thread shows one short line about what the latest message asks of you ("Requests a quote, wants to be finished in December"), written by the AI triage when the message arrived. The line only stands while the sender has the last word and the triage ran after it; once you have replied, or newer mail arrived that has not been triaged, the row falls back to the opening words of the message. See [Inbox groups](#inbox-groups-office) below.
- **Internal notes**: a private note on the thread, for you and your team. The note appears in the conversation itself, at the point it was written, marked as internal only; the customer never sees it. You can @mention a teammate in a note.
- **Save a sender as customer**: when a thread comes from an address that does not match one of your customers, the sender strip above the message says "Not in your customers yet" and offers to save the sender as a customer in one click.
- **AI reply drafts (Office)**: see [AI reply drafts](#ai-reply-drafts) below.

#### Inbox groups (Office)

On Office, the Inbox folder groups incoming mail by what it asks of you. Three tabs sit above the list:

- **Waiting on you**: conversations where the sender is waiting for an answer. When a message has been sitting for a full day, the row counts the days it has been waiting. Mail that does not ask for an answer gets no waiting count, however long it has been sitting.
- **Bills**: supplier invoices the triage recognised. The list opens the thread straight onto the bill card; a catch-up pass gives older bill mails another look whenever the triage has changed.
- **Other**: newsletters and system messages, the mail you read when there is time left.

A tab without mail disappears. The tabs carry workspace-wide counts. When everything that was waiting on you is answered, the list shows a quiet "All done" notice instead of rows. On Desk, where the inbox is limited to reading and replying, the list stays one folder.

The tabs live on the Inbox folder itself: labels and Starred work as always, and the Other group takes the place of the former Promotions folder. Archiving, snoozing and closing move a conversation out of the group it was in, the same way they always moved it out of the open list.

#### Bill card in the reader

For a thread the triage marked as a bill, the message reader shows the mail as a bill card:

- Once the invoice's attachment is booked as an expense (automatically after triage, or through the book button), the card shows the amount including VAT, the VAT amount, and the state of the expense straight from your books: waiting in To review, or already booked. The button opens the expense.
- Before the bill is booked, the card shows only what the email text itself says, labelled "Amount (from the email)" so it is never mistaken for a booked figure.
- The card flags overdue bills: "before 21 October" turns into "overdue since 21 October", highlighted in red once the due date has passed.

#### AI reply drafts

Office can draft the reply for you. Above the reply editor sits a "Draft a reply" toggle. Opening it shows what the AI can work with:

- **Direction chips**: Confirm, Decline politely, Ask for info, and Say thanks. Each chip asks for the whole reply in that direction.
- **Your own instruction**: type what the reply should say ("confirm the appointment for Tuesday") and press Generate.
- **Rewrite my text**: when you have already written something, the AI polishes your own draft instead and fixes grammar, tone and clarity without adding facts.

While it writes, the editor shows "Writing your reply…" and stays out of reach. The writing state belongs to the open conversation: if you switch to another thread in the meantime, the answer is not written into the wrong conversation, and when it is done the editor scrolls the text into view instead of throwing a cursor in it. A generated reply lands in the editor as text you can still edit, saves as a draft automatically, and is never shown as sent. A failed send never misleads the drafting either: the AI reads messages that actually arrived or really went out, never drafts and never failed mail. When you were the last one to write on the thread (you sent a quote or answered a question) and nothing has come back since, "Draft a reply" writes a short follow-up instead: it refers to what you sent and invites a reaction, without ever pretending the customer replied.

The drafted reply states what the last message in the thread asked for, in the language that message was written in, addressed as one person ("I"), and signed with your name. It does not invent facts, prices or dates: where something needed is unknown, it leaves a plain placeholder like [datum]. If the thread was flagged as suspicious, the whole AI reply toolbox stays hidden. On a fresh triage, one-tap quick replies can appear above the reply editor ("I would love to come and have a look"): they open the reply box and generate the mail in that direction, available while the sender's message is still the last one.

#### Drafts

The Drafts folder sits in the left rail. Drafts are saved server-side, so they survive browser restarts and follow you across devices. When you start a new message or reply and close the compose drawer without sending, the content is automatically saved as a draft; there is no separate save button. A draft started from a thread carries a "Reply" chip. Editing a draft opens the compose drawer pre-filled with the saved content. Deleting a draft in the Drafts folder requires a confirmation step.

Opening a thread that holds a reply draft puts that draft in the reply box, where the header shows "Draft" with a trash action next to it. Discarding deletes the draft, empties the reply box back to its empty template and shows a toast with "Undo", so one tap on the trash never costs you a written answer: undo puts your text back into the box while the thread is still open (attachments included), or re-saves it as a draft otherwise. The draft only leaves the server once the toast's undo option is gone. If the delete fails, your text returns to the box with a clear error message; a draft that was already sent or thrown away elsewhere counts as discarded.

The inbox uses your custom domain only after the inbox is switched on and your domain's MX records point at Cloudflare. Until then, the workspace can still send mail through the default delivery path described in [Email Integration](/en/settings/email), but it can't receive mail.

#### Live polling

The inbox refreshes automatically while the tab is open. The thread list polls every 45 seconds for new mail, and the sidebar badge refreshes every 60 seconds. Both pause when the tab is hidden, so no unnecessary network traffic in the background. The polling is silent: no loading spinners flash on background refreshes, and polls are skipped entirely during an active search to keep your results stable. On a phone, pull the list down to fetch the latest state right away; while that refresh runs, another pull does not start a second one.

#### Mark as unread

You can mark any open thread as unread from the toolbar. Unlike earlier versions where the unread state was a local-only toggle that a refetch would discard, this is now persisted server-side. The sidebar badge counts unread messages, not threads with unread, and updates accordingly. The thread stays unread across page reloads, browser restarts, and devices until you open it again.

If a thread is moved to Trash, Spam, Archive or Snoozed from the list while its reader is open, the reader closes automatically. This keeps the detail view in sync with the folder you are viewing, so you don't keep composing a reply to a thread that has already left the current view.

#### Spam filter

Every incoming email passes through a spam filter before anything else happens with it: a large set of rules on headers, links and content, DNS blocklists, phishing feeds, and a statistical filter that keeps learning from the Spam and Not spam buttons you press. Marking a message as spam also reports its text to a store every workspace shares: text you reported counts for your inbox at once, and for other inboxes once two different workspaces have reported the same text. Email the filter rates as spam never reaches your inbox: it lands in the Spam folder directly, with the reasons attached, and it notifies nothing: no push message and no row in the notification list. Email the filter is unsure about stays in the inbox and carries a red notice at the top of the reader ("This might be spam.") with the reasons underneath and a Mark as spam button beside them.

The reasons are concrete: the same text was already marked as spam, the sender claims a well-known name but mailed from a different domain, a link points at a known phishing site, the reply address sits on a list of abused addresses or leads somewhere other than the sender, an outsider names your own domain in the subject, a link goes to an anonymous hosting service instead of the sender's website, the sender's domain was only just created, the domain extension is one mostly used for spam, a link or the sending server is on a spam list, the email did not really come from the domain it names as sender, it carries hidden text, or it resembles email that was marked as spam before. The strongest reasons come first.

Two more things change along with it. On a thread flagged as suspicious, the AI summary card stays hidden, so a phishing email is never paraphrased in our voice. And when you mark a thread as Not spam, it moves back to your inbox and the sender is trusted, so their next message arrives normally. Your own reports of that text are withdrawn with it.

The AI judgement keeps running beside the filter, but it can only raise a verdict, never lower one, and it never sends real email to Spam on its own. The filter itself is never allowed to cost you email: if it is unreachable or too slow, the message arrives exactly as it would have before.

#### Sender logos and photos

Incoming mail carries the sender's face next to the message, in the thread list and in the reader. MyCompanyDesk looks for a logo or photo in three places, in this order: the logo the sender's domain publishes via BIMI (the same mechanism Gmail uses), the Gravatar photo attached to the address, and the icon of the sender's own website. For free mail domains such as Gmail, Outlook and iCloud only Gravatar is consulted, so not every Gmail sender ends up with the same Gmail logo.

A logo only appears on a message that proves it really came from that domain: the message must pass DMARC or carry DKIM that is aligned with the From domain. A forged sender keeps the neutral monogram, so a missing logo is the safe state, not a defect.

Looking up and fetching images happens entirely on our server, never in your browser. Gravatar and the sender's website learn nothing about who reads the mail, and the images are re-encoded and served from our own storage afterwards.

Outgoing mail shows the photo of whoever actually wrote it: your own photo, or a colleague's from the member list. Older outgoing mail without a recorded author shows your photo in a one-person workspace and the monogram in a team.

#### Using your mailbox in a mail app

You can connect a MyCompanyDesk mailbox to a regular mail app: **Settings › Email › Addresses and sending**, open the mailbox, then **Connect mail app**. The window gives you everything the app asks for: the incoming server (IMAP), POP3 for apps without IMAP, the outgoing server (SMTP), the username (your mailbox address) and an app password.

The inbox stays the source of truth. Reading, sending, folders and read status stay in sync with your Inbox in MyCompanyDesk, in both directions: read a message in your mail app and it shows as read in the inbox, and mail you send from the mail app lands in the right conversation. The folders are fixed (Inbox, Archive, Sent, Drafts, Junk, Trash) and appear under their familiar names in your mail app; creating or renaming folders from the mail app is not supported.

The window walks you through setup per mail app, with a step-by-step guide for Apple Mail, Outlook, the Gmail app and Thunderbird. For Apple devices you can download an installation profile that fills in the server settings for you, and Thunderbird finds the servers on its own. In the Gmail app you add the account with **Personal (IMAP)**; Gmail on the web does not fetch other accounts, but you can connect it for sending.

For a domain whose mail is hosted with MyCompanyDesk, Outlook can fill in the server settings by itself: it tries `imap.` and `smtp.` names under your own domain first and finds our servers behind them, with a valid certificate. If Outlook proposes the settings on its own, all you have to do is accept them. If it proposes nothing, set the account up by hand: the Outlook guide lists every field in the order Outlook itself shows them, each with a copy button, and tells you what belongs in it. The **Connect mail app** dialog keeps naming the shared servers (`imap.mycompanydesk.nl`); those keep working for every mailbox, so the values there remain a safe fallback. One thing to watch for: if Outlook has already filled in a server name, check whether a dot sits behind it, like `imap.mycompanydesk.nl.`, and remove that dot, or the connection will not work.

A password keeps working until you revoke it yourself, so create one per device and revoke exactly the one that misbehaves; revoking disconnects that mail app immediately. A password is 16 characters in four groups of four, the way Apple and Google format theirs. Copying it into your mail app is still the easiest, but typing works too: capitals, spaces and dashes do not matter, for both incoming and outgoing. You do not need to save or remember it. If your mail app asks for a password again later, or you set up another device, just create a new one and revoke the old one. Older app passwords, the long form that started with mcd-, keep working unchanged. Next to the password the window shows a QR code you scan with your phone's camera to copy the password over there; the code appears when you create the password from a browser on your computer, not in the app on your phone itself.

When your mail app cannot sign in, the window tells you why. At the top it names the most recent rejected sign-in with the day and time and explains what to do about it, and each app password in the list shows its last rejection with a short reason. A rejection disappears from view once signing in succeeds again afterwards. The reasons the server can report: the password has been revoked (create a new one below and put it in your mail app, for both incoming and outgoing), there is a typo in the password (enter it again in your mail app, or create a new one below), the mail app is using your old password or your MyCompanyDesk password instead of an app password, the username is wrong (enter the full mailbox address), your account currently has no access to the Inbox, or the Inbox is turned off for this domain.

Whether reading through IMAP and POP3 is switched on can depend on the server. If reading is not available yet, the window says so and you can still set up sending. POP3 fetches the inbox folder only, so IMAP is the better choice when your app supports it.

One thing to know about POP3: many apps delete mail from the server once they have fetched it, and those conversations then move to the trash here and are gone after 30 days. Use IMAP if your app supports it, or turn on 'leave a copy on the server' in your app.

### Sales

When you add buy buttons to pricing tiers or a product block on your public site, every completed payment creates a sale record. Track them at **Invoices › Website sales** (`/invoices?view=website-sales`).

What the sales log shows:

- A chronologically ordered list of all purchases made through your site.
- The payment processor (Mollie or Stripe Connect) and the payment status (paid, pending, failed, expired or refunded).
- The originating section (which pricing tier or product block was purchased).
- Customer email, amount paid, and currency.

Sales records are created by the checkout on your public site, which checks the section, creates a payment through the connected processor, and redirects the buyer to the hosted checkout page.

The invoice of a paid sale has a **Paid via your website** block with two buttons:

- **Regenerate invoice.** Re-creates the linked invoice if it was lost or not generated during the purchase. Safe to run even if the invoice already exists.
- **Refund.** Returns the full amount to the customer through the original payment processor (Mollie or Stripe). A credit note is automatically created against the linked invoice for your bookkeeping. Only available for paid sales.

### Post-purchase flow

When a payment completes, the platform automatically runs the following steps. Everything runs in the background: failures are recorded and do not affect the payment status the buyer sees.

1. **Invoice generated.** An invoice is created from the sale, with the product name, price and the buyer's email. The price you set in the editor is the final customer price, VAT included. The invoice line splits this into an ex-VAT amount and the VAT rate you configured on the pricing tier or product block (default 21%). If the buyer's email matches an existing customer in your workspace, the invoice is linked to that customer. Otherwise a minimal customer record is created. The invoice is finalised immediately (status sent) since payment was already received.
2. **Payment recorded.** A payment is registered on the invoice. The payment method is the processor (Mollie or Stripe), and the reference holds that processor's payment reference, so you can always trace the payment.
3. **Customer receipt.** The buyer receives a confirmation email with the product name, amount and payment method. If an invoice was generated, the email includes a secure portal link to view and download the invoice PDF.
4. **Owner notified.** You get an in-app notification and an email summary of the sale: product, amount, customer email, and a direct link to the invoice.

The checkout-success and checkout-cancelled pages show the buyer a branded result screen that uses your site's design tokens (colors) so the page stays on-brand.

## Inbox tab visibility

The Inbox tab is always visible in the sidebar and bottom navigation. On Desk the inbox is limited to reading and replying; composing new messages, your own mailboxes and domains belong to Office. On Office the tab is always present, even before a domain has been connected, because it is the entry point to the inbox setup wizard.

For a workspace that already has an inbox-enabled domain, the tab shows the real inbox with unread counts and full thread management. For Office workspaces without an inbox-enabled domain yet, selecting the tab redirects to `/inbox/setup` so you can wire the domain and enable the inbox in one flow.

## Sending mail vs receiving mail

This bundle is the **receiving** side. Outgoing email (invoice delivery, reminders, quote sends) is handled by the broader email pipeline described in [Email Integration](/en/settings/email). The inbox is for receiving customer mail and composing replies; it does not route your automated invoice sends. Invoice delivery always respects your chosen delivery method under [Email Integration](/en/settings/email) (Gmail, Outlook, or the built-in sender). The inbox domain's DKIM is used for outbound replies composed in the inbox, not for automated transactional mail.

## Limits and gotchas

- **One website per company.** Adding a custom domain deactivates the workspace subdomain. Removing the domain that carries your site falls back on its own: the site moves to another active website domain when there is one, otherwise to the free mycompanydesk.site address.
- **One live inbox per domain.** The platform allows only one workspace at a time to receive mail on a given domain. If another workspace already has an inbox enabled on `acme.nl`, your attempt to enable the inbox on the same name is blocked. Websites and CNAME-only claims are not blocked; only a live inbox is exclusive.
- **You cannot claim a zone another workspace already holds.** When you add a nameserver-mode domain, the platform checks whether the underlying Cloudflare zone is already live for a different workspace. If it is, the add is refused with a clear error so you cannot "verify" a domain off someone else's DNS.
- **Re-adding your own removed domain still works.** If your workspace previously removed a domain, the existing zone can be reused for the same workspace; the guard only blocks another workspace from taking it over.
- **CNAME mode has no email.** Email routing requires a full Cloudflare zone, which only nameserver mode provides.
- **The wizard refuses to overwrite an existing third-party MX.** If your domain already points at Google Workspace or Microsoft 365, the wizard reports a conflict and you have to choose: migrate MX to Cloudflare, or stay on your existing provider and skip the bundled inbox.
- **Reserved subdomains.** `app`, `admin`, `api`, `www`, `mail`, `support`, `portal`, `dashboard` and a handful of others are blocked at the workspace-slug level.
- **Your plan decides what you see.** If something is not in your plan, you see an upgrade button instead of the editor.

## Related

- [Setup wizard](/en/getting-started/company-setup): pick website or mail there to start in this flow.
- [Email Integration](/en/settings/email): outgoing email, send-from identity picker, delivery tracking.
- [Site Builder](/en/advanced/business-page): the full editor guide.
- [Company Settings](/en/settings/company): company details, logo and colour.
- [Plan & payments](/en/settings/billing): what is included in Desk and Office.