---
title: Toegang en boekhouder
description: "Give a partner, employee or your accountant their own login, with page permissions under Mensen met toegang and Je boekhouder for your accountant."
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

- **Mensen met toegang** (people with access): invite teammates and manage what they can see and do. This page requires the Office plan; Desk workspaces see an upgrade prompt. On Office there is no limit on the number of people you invite.
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

A separate list for external accountants, free on every plan. Your accountant can see your figures and check your returns without taking up a team seat. Each row shows a status:

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

| Toggle | App label | What it does |
|---|---|---|
| **Read** | Lezen | Sees the page and the records on it |
| **Write** | Schrijven | Can edit existing records |
| **Create** | Aanmaken | Can add new records |

The drawer includes quick shortcuts:

- **Volledige toegang** (Full access) turns Read, Write and Create on for every page.
- **Alleen-lezen toegang** (Read-only access) turns Read on and Write/Create off for every page.
- **Alles intrekken** (Revoke all) turns everything off.

Read must be on before Write or Create can work. Turning Read off also disables Write and Create for that page.

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

| Capability | Desk | Office |
|---|---|---|
| Workspace owner only | yes | yes |
| Invite team members | no | yes (unlimited) |
| Accountant access | yes | yes |

## Member and accountant lifecycle

### Inviting someone

Admins click **Iemand toegang geven** and enter an email address. If the invitee already has a MyCompanyDesk account, the existing empty workspace merges into your team; a workspace with data stays separate. Pending invitations appear in the **Openstaande uitnodigingen** card with a sent-at timestamp and an **In afwachting** badge. Admins can resend or cancel an invite from that card.

By default, new team members get full Read and Write access to Invoices, Customers, Expenses and Reports. Adjust this after acceptance via **Toegang beheren** next to their name.

### Roles

- **Admin** (Beheerder): full access, can invite and remove members, change roles, manage billing, edit company settings and manage domains.
- **Member** (Lid): access only to the pages granted in the Manage access drawer.
- **Owner** (Eigenaar): the workspace owner can be changed with the **Eigenaar maken** action; customer emails are then sent via the new owner's account.

You cannot change your own role.

### Removing or leaving

- **Uit team verwijderen** (remove from team) removes a member. Their invoices, hours and notes stay in the workspace.
- **Dit team verlaten** (leave team) is available to members. After leaving, they return to their own workspace and lose access to this one.
- **Toegang intrekken** (revoke access) and **Toegang herstellen** (restore access) suspend or re-enable an account without deleting history.

### Access revoked screen

If a person's access to a workspace is revoked, the app shows a screen with the title **Geen toegang meer** and the message that their access has been revoked. They can contact the workspace admin or switch to another workspace.

## Related

- [Plan & payments](/en/settings/billing) to unlock team members
- [Account & security](/en/account/security) for passkey and two-step verification setup
