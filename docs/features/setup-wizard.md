---
title: Setup wizard
last_verified: 2026-07-02
---

# Setup wizard

The setup wizard at `/setup` gets a new workspace ready in a few minutes: it asks what work you do and what you want from the app, pulls your company details from the Dutch trade register (KVK), optionally sets up a web address and brand, and confirms your trial. It is the front door for first-time users and stays available afterwards.

If you came here for the basic walkthrough, start at [Set up your company](/getting-started/company-setup). This page is the reference for every step and option.

## When the wizard is offered

- **First sign-in:** new accounts land in the wizard automatically.
- **Dashboard banner:** while setup is unfinished, a banner at the top of the dashboard offers to finish it. The banner can be hidden with the close button; hiding it is per browser, and `/setup` stays reachable directly.
- **Any time:** navigate to `/setup` to run or re-run the wizard.

The wizard is non-blocking. **Voor nu overslaan** (skip for now) takes you to the dashboard without finishing; nothing is lost, because every answer is saved the moment you give it. Come back later and you continue exactly where you stopped.

## The steps

The wizard shows a progress bar with up to six steps:

1. **Werk** (work): what kind of work you do
2. **Doelen** (goals): what you want to do with MyCompanyDesk
3. **KVK**: your company details
4. **Online adres** (web address): only when you picked the website goal
5. **Merk** (brand): only when you picked the website goal
6. **Je proefperiode** (your trial): trial confirmation and finish

**Doorgaan** (continue) moves forward once a step has what it needs; **Setup afronden** (finish setup) on the last step applies everything.

## Step: Werk

A grid of common trades: Timmerman, Schilder, Loodgieter, Elektricien, Stukadoor, Hovenier, Fotograaf, Kapper, Schoonheidsspecialist, Webdesigner, Consultant, Verhuurder, and **Iets anders** (something else) with a free-text field.

Picking a trade pre-ticks a matching set of goals on the next step: a carpenter gets invoices, quotes, expenses, hours and projects; a landlord gets rentals, invoices, expenses and VAT. You can change every tick on the goals step; the wizard only resets them if you come back and pick a different trade.

You need to pick a trade to continue.

## Step: Doelen

A checklist of eight goals:

- **Facturen sturen** (send invoices)
- **Offertes maken** (make quotes)
- **Uitgaven bijhouden** (track expenses)
- **Uren schrijven** (log hours)
- **Projecten beheren** (manage projects)
- **Verhuur bijhouden** (manage rentals)
- **Online gevonden worden** (be found online)
- **Btw en overzichten** (VAT and overviews)

Each ticked goal switches the matching part of the app on for your workspace; unticked goals stay off so the menu stays calm. You can always change this later under **Onderdelen** (features) in Settings.

**Online gevonden worden** is the goal with the biggest effect on the wizard itself: it adds the **Online adres** and **Merk** steps. Without it, no website is set up and you go from KVK straight to the final step.

At least one goal must be ticked to continue.

## Step: KVK

Three ways through:

1. **Search:** type your company name (two characters or more) and pick your business from the live suggestions. MyCompanyDesk then retrieves your KVK Basisprofiel and prefills your company details: legal name, trade names, legal form, address and business activity. Prefill only fills empty fields; anything you already entered by hand is preserved.
2. **Vul handmatig in** (fill in manually): a short form for company name, KVK number, address, postal code and city. Use it when your business is too new to appear in the search results, or when your trade name does not match what you searched for. Your entries are saved to your company details right away. A link takes you back to search at any time.
3. **Geen KVK-inschrijving?** (no KVK registration): continue without company data and fill it in later under **Bedrijfsgegevens** in Settings.

When a search finds nothing, the wizard says so and offers to switch to manual entry with the name you typed already filled in.

The step also asks for a one-line description of what your business does; when your company was found in the register, it is pre-filled from your registered business activity. On **Doorgaan**, MyCompanyDesk uses your company name and this description to generate brand suggestions in the background: a brand colour, a tagline and starter content. You see the result on the Merk step (when you have the website goal) and on your documents and website after finishing.

To continue, pick a company, save a manual entry, or choose the no-KVK option.

## Step: Online adres

Shown only with the website goal. Three cards:

- **Gratis subdomein** (free subdomain): pick a name for a free address ending in `.mycompanydesk.site`. The name is pre-filled from your company name, and availability is checked live while you type. Continue is only enabled once the name is confirmed available.
- **Ik heb al een domein** (I already have a domain): type a domain you own. It is connected to your workspace when you finish the wizard; if it does not point to MyCompanyDesk yet, you complete the DNS steps afterwards from your website settings.
- **Registreer een domein** (register a domain): search for a domain, see availability and price, and buy it directly in the wizard. On a Pro trial you can claim one `.nl` domain free for the first year instead of buying. A successful purchase is attached to your workspace immediately.

The step can be skipped; a domain can always be added later from your website settings.

## Step: Merk

Shown only with the website goal, and fully optional:

- **Logo upload:** PNG, JPG, SVG or WebP. The dominant colour of your logo is picked up as your brand colour automatically. If you skip the upload, MyCompanyDesk generates a clean initials logo from your business name, so your invoices and website never look unfinished.
- **Preview:** the brand colour and tagline proposed for you, based on your KVK details and your one-line description. Editing them is a follow-up in Settings; nothing on this step blocks you from continuing.

## Step: Je proefperiode

The final step confirms your trial:

- **Your trial:** every new workspace starts with 60 days of Pro, free, no credit card needed.

**Setup afronden** applies everything: your company details, brand colour, logo, starter services and email templates, expense categories that fit your work, and, with the website goal, your website and domain. A summary lists what was set up, with buttons to go to the dashboard or straight into the website builder.

## Skipping, resuming and re-running

- **Skip:** **Voor nu overslaan** exits to the dashboard at any point. The dashboard banner keeps a way back until setup is finished.
- **Resume:** answers are saved on every change. Closing the tab mid-step loses nothing; the next visit continues on the same step.
- **Re-run:** after finishing, `/setup` starts the flow again from the first step with your saved answers. The wizard fills blanks rather than overwriting: a services list you built, a logo you uploaded or settings you chose by hand are not replaced.

## Editing without the wizard

Every field the wizard touches has a home in **Instellingen** (Settings):

- **Bedrijfsgegevens** (business details): name, KVK number, address, VAT number
- **Logo en kleur** (logo and colour): logo and brand colour
- **Factuurontwerp** (invoice design): the look of your PDFs
- **Je website en domein** (your website and domain): domain and website
- **Onderdelen** (features): switch app parts on or off

See the [settings overview](/settings/) for the full map.
