---
title: Settings overview
last_verified: 2026-06-04
---

# Settings overview

MyCompanyDesk's settings tree is split into two trees that reflect who they belong to:

- **`/workspace/...`** — settings shared by every member of one company. Edits here affect everyone in the workspace.
- **`/me/...`** — settings personal to the logged-in user. Edits here follow you across workspaces.

The old flat `/settings/*` and `/profile/*` URLs are gone. If you've bookmarked a `/settings/something` link, see [Where things moved](#where-things-moved) below.

## Why the split exists

A real user often belongs to more than one workspace — a freelancer doing the books for a client, an accountant invited to several customer companies, a team member moonlighting on a side project. Account-level preferences (notification quiet hours, password, connected Google/Microsoft account, language, time-format, mobile push tokens) should follow that person across every workspace they're a member of. Workspace-level preferences (company name, VAT regime, invoice numbering, expense categories, email signature, team roster, plan + billing) belong to the company, not to the individual managing it.

Splitting the trees lets the same person sign into two workspaces and see the same `/me` settings in both, while `/workspace` always reflects the currently active company.

## Workspace settings (`/workspace/...`)

Shared across the team. Editing requires team-admin permission; non-admins see a read-only banner.

The desktop sidebar groups workspace settings into five sections:

### Organization

| Page | Path | Covers |
|---|---|---|
| Company | `/workspace/organization/company` | Umbrella with the two leaves below |
| About your business | `/workspace/organization/company/about` | Name, KvK / registry, VAT, address |
| Look & feel | `/workspace/organization/company/look` | Logo, brand colour, second accent, PDF document styling |

Your public business page and custom domain moved to the top-level **Website** surface (`/website`, with the Pagina's and Domein & SEO tabs) — they are no longer under the company umbrella. The legacy `/workspace/organization/{branding,profile,services,website,domains}`, `/workspace/organization/company/{website,address}`, and `/company/*` paths now redirect to their new homes.

### Email

Email is **not** in the workspace settings tree — it lives under the top-level **Inbox** surface (`/inbox`). The settings sit behind the Inbox tabs, with focused deep editors under `/inbox/settings/*`.

| Page | Path | Covers |
|---|---|---|
| Inbox settings | `/inbox?tab=instellingen` | Mailboxes, aliases, delivery method, activity log, signature — all in one tab |
| Templates | `/inbox?tab=sjablonen` | Document email templates hub |
| Mailboxes & address | `/inbox/settings/address` | Shared `info@`, aliases, sending address, MX status, DKIM |
| Sending | `/inbox/settings/sending` | Delivery method (Resend / Gmail / Outlook) + OAuth connect |
| Signature | `/inbox/settings/signature` | Email footer / signature toggles with live preview |
| Templates | `/inbox/settings/messages` | Per-document-type subject + body, include-buttons |
| Activity log | `/inbox/settings/log` | Delivery / open / bounce events |

The legacy `/workspace/email/*` and `/workspace/communication/*` paths redirect here. The inbox / Cloudflare Email Sending product is the primary surface.

### Financial

| Page | Path | Covers |
|---|---|---|
| Money umbrella | `/workspace/financial/money` | Tile menu — Invoices, Tax, How customers pay |
| Invoices | `/workspace/financial/money/invoices` | Numbering, payment terms, late fees |
| Tax | `/workspace/financial/money/tax` | VAT regime, KOR toggle, ICP, OSS |
| Payments | `/workspace/financial/money/payments` | Default payment method, instructions |
| Expenses | `/workspace/financial/expenses` | Defaults, depreciation toggles |
| Expense categories | `/workspace/financial/categories` | Workspace `expense_categories` table |
| Bank accounts | `/workspace/financial/bank-accounts` | Link your bank, sync transactions, vendor rules |
| Time & Travel | `/workspace/financial/time-travel` | Working hours, OV / NS, mileage |

### Features

| Page | Path | Covers |
|---|---|---|
| Features | `/workspace/features` | Module on/off — quotes, contracts, objects, projects, recurring — plus AI processing mode + text-check language |

App theme and appearance are a **personal** preference, not a workspace one — they live at `/me/preferences`. The old `/workspace/modules/*` paths redirect to `/workspace/features`.

### Account

The "Account" group inside `/workspace` is the **workspace's** account — not yours. It owns the team roster and the subscription that the company pays for.

| Page | Path | Covers |
|---|---|---|
| Team | `/workspace/account/team` | Team members, accountants, roles, invites |
| Billing | `/workspace/account/billing` | Plan, Stripe customer portal, usage, invoices |
| Danger zone | `/workspace/account/danger-zone` | Workspace deletion |

## Account settings (`/me/...`)

Personal to the logged-in user. Travels with you across workspaces.

The `/me` sidebar groups pages into three sections:

### Account

| Page | Path | Covers |
|---|---|---|
| Profile | `/me/profile` | Display name, avatar, default workspace |
| Preferences | `/me/preferences` | Locale, date format, time format, theme, advanced mode |
| Notifications | `/me/notifications` | Email + push, per-type toggles, quiet hours |

### Work

| Page | Path | Covers |
|---|---|---|
| Time & Travel defaults | `/me/time-travel` | Personal defaults overlaid on the workspace defaults |
| Connected | `/me/connected` | Google / Microsoft sign-in, Gmail / Outlook send, OAuth scopes per provider |

The old `/me/time-registration` and `/me/travel` paths redirect to the two halves of `/me/time-travel`.

### Security

| Page | Path | Covers |
|---|---|---|
| Security | `/me/security` | Password, TOTP + backup codes, passkey step-up, sessions, new-device email |
| Data | `/me/data` | CSV import/export, GDPR export, account deletion |
| Mobile | `/me/mobile` | Capacitor APK install, push tokens, mobile-specific toggles |

## Where things moved

Quick reference for users following an old link or instruction.

| Looking for… | Now at |
|---|---|
| Company name & registration | `/workspace/organization/company/about` |
| VAT number | `/workspace/organization/company/about` |
| Logo & brand colour | `/workspace/organization/company/look` |
| Website / business page copy | `/website` |
| Custom domain | `/website?tab=domein` |
| Email signature | `/inbox/settings/signature` |
| Email templates | `/inbox/settings/messages` |
| Mailboxes & aliases | `/inbox/settings/address` |
| Invoice numbering | `/workspace/financial/money/invoices` |
| VAT regime / KOR / ICP / OSS | `/workspace/financial/money/tax` |
| Payment instructions | `/workspace/financial/money/payments` |
| Expense categories | `/workspace/financial/categories` |
| Mileage rate / OV defaults | `/workspace/financial/time-travel` |
| Module on/off (quotes, contracts, …) | `/workspace/features` |
| Team members & roles | `/workspace/account/team` |
| Plan & subscription | `/workspace/account/billing` |
| Delete the workspace | `/workspace/account/danger-zone` |
| Your name & avatar | `/me/profile` |
| Language / date format / theme | `/me/preferences` |
| Notification preferences | `/me/notifications` |
| Password & 2FA | `/me/security` |
| Bank accounts (moved from `/me/bank-accounts`) | `/workspace/financial/bank-accounts` |
| Connected Google / Microsoft account | `/me/connected` |
| CSV import & export | `/me/data` |
| Delete your user account | `/me/data` |

## Permissions

- **Workspace settings** require team-admin permission. Non-admins viewing a `/workspace/...` page see a banner explaining the page is admin-only; they can still read the values, but every input is disabled.
- **Account settings** are always available to the logged-in user. There is no admin override for another user's `/me` settings.

## Search & deep-linking

Cmd-K (Ctrl-K on Windows / Linux) opens a global search. Results from the settings index deep-link to the right page with `?focus=<anchor>`, scrolling the matching card into view with a brief highlight. Use this instead of remembering paths — typing "VAT", "signature", "team", "password" all work.

## Related pages

- [Setup wizard](/features/setup-wizard) — fills most workspace settings on first run, can be re-run.
- [Set Up Your Company](/getting-started/company-setup) — first-time walk-through.
- [Company settings](/settings/company) — deep dive on the Organization > Company tree.
- [Email integration](/settings/email) — deep dive on the Inbox (`/inbox`) email settings.
- [Team management](/settings/team) — deep dive on `/workspace/account/team`.
- [Bank feed](/features/bank) — deep dive on `/workspace/financial/bank-accounts`.
- [Billing & plans](/settings/billing) — deep dive on `/workspace/account/billing`.
- [Profile](/account/profile) — deep dive on `/me/profile`.
- [Security](/account/security) — deep dive on `/me/security`.
- [Data import & export](/account/data) — deep dive on `/me/data`.
