# mycompanydesk-docs

VitePress source for **[docs.mycompanydesk.com](https://docs.mycompanydesk.com)**, hosted on Cloudflare Pages.

The same content also feeds the in-app **MyCompanyDesk chatbot** via the `search_docs` tool. This is intentional: one corpus, two consumers (humans on the public site, the LLM agent inside the app). Add a page once, both surfaces pick it up.

## Develop

```bash
npm install
npm run docs:dev             # http://localhost:5173
npm run check                # descriptions + language, all 612 pages
```

## Build & deploy

```bash
npm run docs:build    # → docs/.vitepress/dist
```

The site is published via Cloudflare Pages. Any merge to `main` should trigger a build (Pages project: `mycompanydesk-docs`). Use `wrangler pages deploy docs/.vitepress/dist` for a one-off deploy from local.

## Contributing

### Page structure

Dutch is the root locale: `docs/` holds the Dutch pages and they are served unprefixed (`/features/invoices`). The other locales live under `docs/en/`, `docs/de/`, `docs/fr/` and are served under their prefix (`/en/features/invoices`).

Within each locale the pages are organized into top-level folders that mirror the app's IA:

- `docs/getting-started/` — onboarding flows, first-run setup
- `docs/features/` — per-feature reference (vat, expenses, invoices, dashboard, ...)
- `docs/settings/` — workspace + account settings (`/workspace/...` and `/me/...`)
- `docs/account/` — personal `/me/*` surfaces
- `docs/advanced/` — power-user features, integrations, API
- `docs/api/` — REST endpoint reference

Sidebar config is in `docs/.vitepress/config.mjs` — every locale (nl/en/de/fr) has its own sidebar tree. When you add a page, register it in **all four** locales. Dutch sidebar links have no prefix; the other three do.

### Frontmatter

Every page should carry frontmatter:

```yaml
---
title: Create an invoice
last_verified: 2026-05-09
chatbot:
  triggers: ["create invoice", "new invoice"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I send an invoice?"]
---
```

#### `title` (required)

Displayed in the sidebar and used as the chatbot's page title when citing the page.

#### `description` (required)

One sentence, 40 to 155 characters, in the page's own language, saying what the page actually lets you do. It becomes the page's `<meta name="description">` and `og:description`, which is the text Google prints under the search result and the text answer engines quote. It must be unique within its locale: `.vitepress/config.mjs` only falls back to a generic per-locale string for a page that has none, and 612 pages sharing one description is what this replaced.

Avoid em-dashes, and avoid double quotes (the in-app chatbot parses frontmatter with its own reader that does not unescape `\"`).

`npm run check:descriptions` enforces all of the above, plus that a nl/de/fr page is not still carrying the English `title`.

#### `last_verified` (recommended)

ISO date (`YYYY-MM-DD`) of the last time someone confirmed the page matches the live app. The chatbot surfaces this so users know how fresh the answer is. The weekly Huisbot `docs_freshness_check` cron diffs this against the last 90 days of MCD `development` commits and opens a PR if drift is detected.

#### `chatbot` (optional but recommended on user-facing pages)

Tells the in-app chatbot how to use the page beyond raw text matching.

- **`triggers`** — array of phrases. If the user types something matching one of these (case-insensitive substring or exact), the chatbot **skips the LLM entirely** and returns the page body + actions + follow-ups. Use for the most common questions on the page. Keep them short and high-signal.
- **`actions`** — array of `{ label, to }` objects. Rendered as buttons under the answer; clicking opens the in-app route. Use for "open the page where this is configured."
- **`follow_up`** — array of suggested next questions. Rendered as chips under the answer for the user to tap.

All three are optional; the chatbot still indexes the page body for semantic search even without a `chatbot` block.

### Style

- One H1 per page (the title in frontmatter; VitePress renders it).
- Tight, scannable. Tables and lists welcome.
- No emojis. Use Lucide icon names if you need to reference UI iconography.
- Concrete: real paths, real component names, real field names. No marketing fluff.
- Write for the user: "Open Settings → Account → Team" not "Users navigate to..."

### When code changes

- **Always update `last_verified`** when you touch a page, even for typos. It's the freshness signal everyone (humans, chatbot, audit cron) uses to trust the page.
- If your code change ships a UI change in MCD, schedule the docs change in the same week. The longer drift sits, the more compounding it gets.

### Audit

`AUDIT_2026-05-09.md` (root) is the latest staleness report — run by Huisbot, lists which pages are fresh / stale / unsure relative to the last 90 days of MCD `development` commits. Refresh the audit before big rewrites:

```bash
# (run by Huisbot's docs_freshness_check cron, weekly)
```

## Language quality

German is written with real umlauts and eszett and in the Sie-form; French with its accents and apostrophes. `npm run check:language` rejects the ASCII stand-ins (`oeffnen`, `ueberfaellig`, `einschliesslich`, `creer`, `l entreprise`) that an earlier translation pipeline produced in bulk.

Two carve-outs are deliberate:

- `chatbot.triggers` in frontmatter stay ASCII. They are search terms matching what a user types, not prose, so the checker only reads the body.
- The **German app UI is itself in the du-form** (`Über dich`, `Deine Daten`, `Dein Abonnement`). Those labels are quoted verbatim; the prose around them stays Sie-form.

`FR_BACKLOG` in the checker lists 20 French pages that an earlier run wrote entirely without accents. It is a ratchet: a listed page may shrink or be cleared, never grow, and any page not listed fails outright. Clearing that backlog is a French writing pass, not a find-and-replace, because it needs `à` vs `a`, `où` vs `ou` and every past participle decided in context.

## i18n

Dutch is the **default** locale: it sits at the root of `docs/`, `<html lang>` is `nl`, and `hreflang="x-default"` points at the Dutch page, because MyCompanyDesk sells to Dutch businesses. English is still the **authoring** source of truth: write `docs/en/features/vat.md`, then mirror it to `docs/features/vat.md` (Dutch), `docs/de/features/vat.md` and `docs/fr/features/vat.md`.

Bulk locale-file sync (filling missing keys, re-translating drift) is owned by Huisbot's `auto-improve.translations_reeval` weekly cron — it spawns Claude Code workers, opens PRs to `main` autonomously. There is no in-repo sync command; just write English and the cron handles the rest within a week.

## License

Proprietary. © MyCompanyDesk.
