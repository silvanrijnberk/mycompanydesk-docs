---
title: Access & accountant
last_verified: 2026-08-04
---

# Access & accountant

Give a partner, employee, or your accountant access to your books. Each person gets their own login. In the app these settings are split into two pages: **Mensen met toegang** (people with access) and **Je boekhouder** (your accountant).

## Where to find it

Open **Instellingen** (Settings) from the menu and choose one of:

- **Mensen met toegang** to invite teammates and set page permissions.
- **Je boekhouder** to invite your accountant.

You can also navigate directly to `/settings/toegang` or `/settings/boekhouder`. The old `/settings/team` app route redirects to `/settings/toegang`. This docs page covers both app pages.

The two pages are:

- **Mensen met toegang** (people with access): invite teammates and manage what they can see and do. This page requires the Pro plan; Free and Starter workspaces see an upgrade prompt. On Pro there is no limit on the number of people you invite.
- **Je boekhouder** (your accountant): invite your accountant and manage their access. This page is free on every plan.

## What's on the page

### Workspace name

A single-field card. The workspace name appears in the navigation, on invitations, and in the workspace menu in the sidebar. Only team admins can edit it. Changes save automatically.

### Current members

A list of everyone who can sign in. Each row shows:

- Avatar with initials and a presence dot (green online, grey idle, hidden if you're not an admin)
- Name and email
- Role badge or role picker (admin only)
- A settings icon that opens the **Manage access** drawer
- Last activity ("Active 2 minutes ago", "Last seen yesterday"), admin only

When the list is empty, the card shows the solo state: "You're working solo. Your workspace is fully functional. Add teammates when you're ready."

### Give someone access

Admins type an email address and send the invite. In the app the button is called **Iemand toegang geven** (give someone access). The invitee receives an email with a link; if they don't have a MyCompanyDesk account they create one during acceptance. Pending invitations show in a separate **Pending invitations** card with a sent-at timestamp and a `Pending` badge.

Non-admins see an info banner instead: "Only team admins can invite new members."

### Accountant

A separate list for external accountants, free on every plan. Your accountant can see your figures and check your returns without taking up a Pro team seat. Each row shows a status:

| Badge | Meaning |
|---|---|
| **Contact only** | In your address book, no app access |
| **Invited** | Invitation email sent, not yet accepted |
| **Activated** | Has an account and can sign in |
| **Revoked** | Access removed (can be restored later) |

Admin actions per row: **Invite accountant**, **Manage access** drawer, **Remove**.

## Automatic delivery to your accountant

Once an accountant is connected, you can have MyCompanyDesk deliver records to them automatically. The export bundles sales invoices, expenses and accepted quotes in a format your accountant's software can import, so the data does not have to be retyped. VAT return figures are not included; download those as CSV from **Taxes → VAT return**.

Open the accountant row in **Settings → Je boekhouder**, choose **Automatic delivery**, pick the streams you want to include (for example sales invoices, expenses and accepted quotes), the trigger moment, and the format. A delivery log shows what was sent and when.

### Accountant activity overview

MyCompanyDesk now keeps an activity overview for each connected accountant. It records what the accountant viewed or changed while in your workspace, so you can always read back what happened. The overview is available in the same accountant row, next to the delivery log.

<!-- TODO(source-missing): confirm the exact entitlement that gates automatic delivery and the supported export formats/profiles -->

## Roles

| Role | Description |
|---|---|
| **Admin** | Full access. Can invite/remove members, change roles, manage billing, edit company settings, and manage domains and DNS. |
| **Member** | Access to whatever the admin grants in the Manage Access drawer. |
| **Accountant** | A separate type of contact. Granted access via the accountant flow rather than the member invite. |

Roles are toggled inline on the member row via a dropdown (admin only). You can't change your own role.

## Permissions

The **Manage access** drawer opens a per-page permission table. Each row is one section of the app: Dashboard, Invoices, Expenses, Customers, Projects, Objects, Contracts, Quotes, Rentals, Reports, Time registration, Taxes (VAT), and Settings.

For each page, three independent toggles:

- **Read**: sees the page and the records on it
- **Write**: can edit existing records
- **Create**: can add new records

The drawer also has an **Access revoked** banner for accounts that have been suspended (the Restore button re-enables them).

## Sign-in security

Each person's sign-in security lives on their own account, under **Instellingen** (Settings) and then **Inloggen** (signing in), not on this page:

- **Passkeys**: members can register one or more passkeys; once registered, sign-in defaults to the passkey button instead of the password field.
- **Two-step verification**: when enabled, signing in asks for a 6-digit code from an authenticator app after the password.

Admins cannot manage another member's passkeys or two-step verification; those are personal credentials. A member who is locked out can use the account recovery option on the sign-in screen to reset them.

## Switching workspaces

Open the workspace menu in the sidebar header to jump between workspaces, open subscription details, or create a new one.

If you have access to more than one workspace, the menu also links to the **Workspaces** overview at `/werkruimtes`. That page lists every workspace you own or manage as an accountant, highlights deadlines and open items per workspace, and lets you open the right workspace in one click.

## Plan gating quick reference

| Capability | Free | Starter | Pro |
|---|---|---|---|
| Workspace owner only | yes | yes | yes |
| Invite team members | no | no | yes (unlimited) |
| Accountant access | yes | yes | yes |

## Related

- [Plan & payments](/settings/billing) to unlock team members
- [Account & security](/account/security) for passkey and two-step verification setup
