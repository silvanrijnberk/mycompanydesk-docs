---
title: Team
last_verified: 2026-05-09
---

# Team

Add a partner, employee, or your accountant. Each person gets their own login.

## Where to find it

Open the workspace switcher → **Account** → **Team**, or navigate directly to `/workspace/account/team`.

The page is gated by the `team_members` feature (Pro and Business). Free and Starter workspaces see the upgrade prompt; the workspace owner is always counted as one team member.

## What's on the page

The page wraps the `CompanyTeam` component and is split into four cards.

### Workspace name

A single-field card. Workspace name appears in the navigation, on team invitations, and on the in-app account menu. Only team admins can edit it. Auto-saves through the workspace settings store.

### Current members

A list of everyone who can sign in. Each row shows:

- Avatar with initials and a presence dot (green online, grey idle, hidden if you're not an admin)
- Name and email
- Role badge or role picker (admin only)
- A `lucide:settings-2` icon that opens the **Manage access** drawer
- Last activity ("Active 2 minutes ago", "Last seen yesterday") — admin only

When the list is empty, the card shows the solo state: "You're working solo. Your workspace is fully functional. Add teammates when you're ready."

### Invite teammate

Admins type an email address and hit **Send invite**. The invitee receives an email with a link; if they don't have a MyCompanyDesk account they create one during acceptance. Pending invitations show in a separate **Pending invitations** card with sent-at timestamp and a `Pending` badge.

Non-admins see an info banner instead: "Only team admins can invite new members."

### Accountant contacts

A separate list for external accountants. Each row shows status:

| Badge | Meaning |
|---|---|
| **Contact only** | In your address book, no app access |
| **Invited** | Invitation email sent, not yet accepted |
| **Activated** | Has an account and can sign in |
| **Revoked** | Access removed (can be restored later) |

Admin actions per row: **Invite accountant**, **Manage access** drawer, **Remove**.

## Roles

| Role | Description |
|---|---|
| **Admin** | Full access. Can invite/remove members, change roles, manage billing, edit company settings. |
| **Member** | Access to whatever the admin grants in the Manage Access drawer. |
| **Accountant** | A separate type of contact. Granted access via the accountant flow rather than the member invite. |

Roles are toggled inline on the member row via a dropdown (admin only). You can't change your own role.

## Permissions tree

The **Manage access** drawer opens a per-page permission table. Each row is one section of the app, with three independent toggles.

| Page | Icon |
|---|---|
| Dashboard | `lucide:layout-dashboard` |
| Invoices | `lucide:file-text` |
| Expenses | `lucide:receipt` |
| Customers | `lucide:users` |
| Projects | `lucide:folder-kanban` |
| Objects | `lucide:box` |
| Contracts | `lucide:file-signature` |
| Quotes | `lucide:file-check` |
| Rentals | `lucide:home` |
| Reports | `lucide:bar-chart-3` |
| Settings | `lucide:settings` |

For each page, three independent toggles:

- **Read** — sees the page and the records on it
- **Write** — can edit existing records
- **Create** — can add new records

The drawer also has an **Access revoked** banner for accounts that have been suspended (the Restore button re-enables them).

The store handles the legacy boolean format too — older `page_access` values of `true` / `false` are migrated to `{ read: true, write: true, create: true }` (or all-false) on first load. Granular per-action permissions live behind the `advanced_permissions` feature (Business only); other plans get the read/write/create model with sensible defaults.

## Sign-in security

Each team member's sign-in security lives on their own profile, not on the team page:

- **Passkeys** — at `/me/security`. Members can register one or more passkeys via WebAuthn; once registered, sign-in defaults to the passkey button instead of the password field.
- **TOTP step-up** — at `/me/security`. When enabled, the login flow returns `{ totpRequired: true, sessionToken }` after the password and prompts for the 6-digit code in a second step. The session token is short-lived; an invalid or expired code returns `TOTP_SESSION_INVALID` / `TOTP_CODE_INVALID`.
- **Account recovery** — emergency wipe via `/api/auth/recovery` deletes every passkey and clears the TOTP secret in one transaction so a locked-out user can sign in again with email + password reset.

Admins cannot manage another member's passkeys or TOTP — those are personal credentials. To force a step-up reset, ask the member to use the recovery flow on their own account.

## Switching workspaces

Open the workspace switcher in the top bar to jump between workspaces or create a new one. The switcher is the same dropdown that opens the **Workspace settings** menu — workspaces and personal account live behind one entry point.

## Plan gating quick reference

| Capability | Free | Starter | Pro | Business |
|---|---|---|---|---|
| Workspace owner only | yes | yes | yes | yes |
| Invite team members | no | no | yes (up to 5) | yes (unlimited) |
| Granular per-action permissions | no | no | no | yes |
| Accountant contacts | yes | yes | yes | yes |

## Related

- [Plan & payments](/settings/billing) — to unlock `team_members` and `advanced_permissions`
- [Account & security](/account/security) — passkey and TOTP setup for the signed-in user
