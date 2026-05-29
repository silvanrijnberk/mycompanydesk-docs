---
title: My Account
last_verified: 2026-05-29
---

# My Account

Your personal account settings live under **My Account** at `/me`. This is everything that belongs to *you* — your profile, language, security, connected accounts. It is separate from **Workspace** (`/workspace/...`), which holds shared company settings that every team member sees.

## Account vs workspace

| Surface | Path | Scope | Examples |
|---|---|---|---|
| **My Account** | `/me/...` | Just you | Your name, password, passkeys, language, theme, push notifications |
| **Workspace** | `/workspace/...` | Shared with team | Company info, branding, invoice templates, billing, team members |

Changing your interface language under **My Account** only changes it for you. Changing the invoice language under **Workspace** changes the default for every invoice your company sends.

## Sidebar layout

The `/me` shell has its own left sidebar (collapsed to a sheet on mobile) with three groups:

- **Account** — Profile, App look, Notifications
- **Work** — Time and travel, Calendar
- **Security** — Sign-in and security, My data

Pages with grey card-edit-and-go content auto-save while you type and show a "Saving / Saved" pill at the top right. Security and Data pages have explicit Save / Confirm actions.

## Profile

`/me/profile`

- **First name** and **Last name** — Used in the sidebar avatar and on outgoing emails when team-member attribution is enabled.
- **Email** — Read-only. This is your login. To change it, contact support.
- **Profile picture** — Upload PNG, JPG, or WebP up to 5 MB. The crop is round.

## App look

`/me/preferences`

This page covers everything cosmetic and locale-related.

- **Theme** — Light, Dark, or System. Switching is instant.
- **Font size** — Small, Medium, Large. Affects every page; finance numbers stay tabular at every size.
- **Language**: The MyCompanyDesk interface is Dutch-only. There is no interface language setting. Document language (for invoices, quotes, and emails) is set per document via Company → Invoicing.
- **Timezone** — Used for dates on invoices, expenses, and time entries.
- **Date format** — DD-MM-YYYY, MM/DD/YYYY, YYYY-MM-DD.
- **Time format** — 12-hour or 24-hour.
- **Number separator** — `1.234,56` (European) or `1,234.56` (US/UK).
- **Default currency** — EUR, USD, GBP. Used as the default on new invoices and expenses; per-document overrides still work.
- **Working week** — Which days count as working days. Drives KPIs on the dashboard and the time-registration grid.
- **Dashboard profile** — One of eight roles (owner, bookkeeper, AR, AP, freelancer, VAT compliance, project, growth). Picks which cards show on `/dashboard`.

::: tip
Invoice language is set per invoice and is independent of your interface language. You can run the app in English while sending Dutch invoices.
:::

## Notifications

`/me/notifications`

Three independent channels — email, in-app, push — each with their own toggles. Toggles are auto-saved.

### Email

- **Invoice reminders** — When a customer's invoice is approaching the due date.
- **Payment confirmations** — When a customer pays an invoice.
- **News and updates** — Product announcements (low frequency).
- **VAT deadline emails** — A reminder before each VAT filing deadline.

### In-app

These appear in the bell menu in the header.

- **Overdue invoices**
- **Deadline reminders**
- **Draft reminders** — Drafts that have been sitting for a while.
- **Contract renewals**
- **Recurring notifications** — When a recurring invoice or expense is generated.
- **VAT deadline alerts** — In addition to the email.
- **VAT reminder window** — How many days ahead to start warning (7, 14, or 30).

### Push

Browser/PWA push. Requires permission grant. When the master toggle is off, the per-event sub-toggles hide.

- **Overdue invoices**
- **Deadlines**
- **Payments**
- **Recurring**

## Sign-in and security

`/me/security`

- **Password** — Current + new + confirm. Minimum 8 characters. Skipped if you signed up with Google or Microsoft and never set one; you can still set one here to enable email login.
- **Passkeys** — Add and manage WebAuthn credentials (Face ID, Touch ID, Windows Hello, hardware keys). Each passkey is named so you can revoke individually. Passwordless sign-in works once any passkey is registered.
- **Two-factor (TOTP)** — Set up an authenticator app (Authy, 1Password, Google Authenticator). Scan the QR or enter the secret manually. After verifying, you get backup codes — store them somewhere safe.
- **Sessions** — Sign out of the current session. (Session list across devices is not surfaced today.)
- **Danger zone** — **Delete account** permanently removes your user. If you are the only owner of a workspace, you are blocked until you transfer ownership or close the workspace from `/workspace/account/billing`.

## Calendar

`/me/connected`

Two-way sync with Google Calendar or Outlook for time entries and travel. The connect flow runs OAuth in a popup and stores the refresh token server-side. Each connection lists which calendar it writes to and lets you disconnect.

OAuth scopes are requested per purpose:

- **Sign-in** (Google or Microsoft) — `email`, `profile`. Granted once at signup; visible here so you can revoke.
- **Send email as you** (Gmail or Outlook) — `gmail.send` or `Mail.Send`. Used for outbound invoices.
- **Calendar sync** — `calendar.events`. Used by the time-registration calendar view.

## Time and travel

`/me/time-travel`

Personal defaults that drive the time-registration and travel modules. The page has two tabs:

- **Time** (`/me/time-travel/time`) — Personal overrides for time-registration defaults.
- **Travel** (`/me/time-travel/travel`) — Home address, NS-Business OV-chip, default car, mileage rate.

### Time overrides

The Time tab lets you override workspace-wide time-registration defaults for your own entries. Each field has a clear button that reverts to the workspace value. All changes auto-save.

| Setting | What it controls |
|---|---|
| **Hourly rate** | Your default rate for new time entries |
| **Rounding interval** | Snap entry duration to 15, 30, or 60-minute increments |
| **Require project** | Block saving an entry without a project |
| **Require description** | Block saving an entry without a description |
| **Default line description** | Pre-fill the description field on new entries |
| **Invoice description format** | Template for formatting time-entry lines on invoices |
| **Service fee** | Fixed fee line (description, amount, VAT rate) auto-added to invoices with time entries |
| **Day start / end** | Working-day boundaries on the timeline view |
| **Break** | Enable/disable break display plus start time and duration |

When a personal value is set, it takes priority over the workspace default. See [Time Registration > Personal overrides](/features/time-registration#personal-overrides) for the full cascade rules.

Workspace-level travel settings (per-company defaults, OV cards owned by the company) live under `/workspace/financial/travel`.

## My data

`/me/data`

Personal data export and import. Plan-gated: lapsed (read-only) workspaces see a banner pointing at the upgrade required for exports.

- **Invoices**, **Customers**, **Expenses** — Per-entity CSV download.
- **Complete backup** — One ZIP with everything, JSON-shaped for re-import.
- **Import from CSV** — Opens the legacy importer at `/profile/import`. Supports invoices, customers, expenses with a column-mapping step.

This page only handles *your* personal account data export. Workspace-level exports (full-company accounting export, accountant package) live under `/workspace/account/data`.

## Mobile

`/me/mobile`

Settings that only apply to the mobile/PWA app.

- **Quick navigation** — Toggle the radial menu shown when long-pressing the FAB; reorder which six destinations appear, or pin them to specific positions.
- **Biometric unlock** — Use Face ID / Touch ID for app re-entry after lock.
- **Offline preview** — Cache recently viewed invoices and expenses for offline viewing.

## Where things moved from

If you were on the older `/profile/...` tree, here is the map:

| Old path | New path |
|---|---|
| `/profile` | `/me/profile` |
| `/profile/notifications` | `/me/notifications` |
| `/profile/security` | `/me/security` |
| `/profile/data` | `/me/data` |
| `/profile/connected` | `/me/connected` |
| `/profile/preferences` (theme, language) | `/me/preferences` |
