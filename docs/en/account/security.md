---
title: Security
description: "Protect your account with a strong password, two-factor authentication and an eye on active sessions, all under Settings, Inloggen."
last_verified: 2026-09-30
---

# Security

Protect your account with strong authentication. Everything below lives in the Settings area: open **Instellingen** (Settings) and pick **Inloggen** (signing in), unless noted otherwise.

## Password

Use a strong, unique password for your MyCompanyDesk account. Change it on **Settings > Inloggen**.

### Password requirements

- At least 8 characters
- Mix of letters, numbers, and symbols recommended

## Two-factor authentication

Add an extra layer of security to your account:

1. Go to **Settings > Inloggen**
2. Start the two-step verification setup
3. Scan the QR code with your authenticator app (Google Authenticator, 1Password, Authy, and similar)
4. Enter the verification code to confirm
5. Save your **backup codes** in a secure location

If you have the installed MyCompanyDesk app, you can choose to generate your login codes inside the app instead. During setup, choose **Gebruik de MyCompanyDesk-app**, then find your codes under **Instellingen > Inlogcodes** in the app.

With 2FA enabled, you need both your password and a code from your authenticator app to log in.

### Logging in with 2FA

After entering your password, the login screen asks for the 6-digit code from your authenticator app. If you use the MyCompanyDesk app as your authenticator, open it and use the current code from **Instellingen > Inlogcodes**. No access to the app? Enter one of your backup codes in the same field.

When you log in with your password and a code, you can tick **remember this device for 30 days**, so this device skips the code step for a month.

### Lost your second factor?

If you no longer have your authenticator app or passkey, use the recovery link on the code screen:

1. Enter your email address; we send a confirmation link.
2. Opening the link starts a 24-hour security waiting period.
3. After the waiting period, log in with just your password. Your passkeys, authenticator app and backup codes are cleared automatically, so you can set them up fresh.

The waiting period exists so that an attacker with only your password cannot instantly strip your account's protection.

### Disabling 2FA

1. Go to **Settings > Inloggen**
2. Choose to disable two-step verification
3. Confirm with a current code from your authenticator app, a backup code, or your password

## Confirm it's you for sensitive changes

Some changes are too important to sit behind a password alone. MyCompanyDesk asks to **Confirm it's you** before you can:

- Change or clear an existing IBAN or PayPal address
- Change your login address or password
- Remove or move a domain
- Forward mail to another address
- Create an API key
- Promote someone to admin, or transfer ownership

You confirm with your passkey, a code from your authenticator app (or from **Instellingen > Inlogcodes** in the installed app), or a 6-digit code by email. Your password is not accepted for this step, because whoever typed it once could be anyone. After a confirmation you get about 15 minutes of quiet: a fresh sign-in with a code, passkey or Google counts the same way. Filling in a value for the first time (starting onboarding, an empty IBAN field) never asks, because there is no existing value to protect.

## A login code by email on a new browser

No two-factor authentication on your account? Your password alone is still not enough on a browser your account does not know yet: after your password, we email a 6-digit code. The login screen then shows the code step you may know from 2FA, now under the title **Confirm it's you**, with the (partly hidden) email address the code was sent to.

The code is valid for 15 minutes. No email arrived? Look in your spam folder, or use **Send a new code**; the newest code replaces the previous one. After five wrong attempts the code no longer works and you ask for a new one. Once you enter the code, MyCompanyDesk remembers this browser for 30 days, like the "remember this device for 30 days" option at 2FA, except here it happens automatically.

If the code cannot be sent at all, the login screen points you to signing in with Google, Microsoft or a passkey instead, or to trying again in a few minutes. The very first login right after registering skips this step, because your email address was just verified.

One exception: is your login address on a domain whose mailbox MyCompanyDesk hosts itself? Then the code step stays off, because the code would wait in exactly the mailbox you can only read after logging in. Set up two-factor authentication for those accounts instead. Right after signing in with such an address, the app offers **Beveilig je inlog** (Secure your sign-in): add a passkey, or use the code app inside the installed app. You can put the offer off for 14 days. From then on, a hosted-domain account with a passkey no longer accepts the password alone as a login, so a leaked password cannot open your mailbox.

## Passwordless sign-in (magic link)

You can sign in without a password using a one-time link sent to your email:

1. Go to the login page
2. Click **Send me a sign-in link**
3. Enter your email address
4. Check your inbox and click the link

The link is valid for 15 minutes and can only be used once. For security, requesting a new link invalidates any outstanding ones.

::: tip
If you verify your email after signing up, you are signed in automatically. No extra login step is needed.
:::

## Passkeys

Passkeys let you sign in with biometrics or a security key instead of a password. They are available to every user: manage your own passkeys on **Settings > Inloggen**.

- Register multiple passkeys (Face ID, Touch ID, Windows Hello, hardware keys)
- Name each passkey so you can revoke individual devices
- On the login screen, once you enter your email address, a passkey sign-in button is offered if your account has one
- Passkeys also cover the **Confirm it's you** check for sensitive changes (see above), where a password is not enough

On a domain whose mailbox MyCompanyDesk hosts, adding a passkey changes login itself: the password alone no longer signs you in (see the hosted-domain paragraph above).

## Sessions

The sessions card on **Settings > Inloggen** has a single **Log out** action that ends your current session. There is no list of other devices or per-session revoking. If you suspect someone else has access to your account, change your password. Changing or resetting your password ends every other session for your account (the device you made the change on stays signed in) and revokes the trusted devices that skip the code step.

Sessions slide with your usage: as long as you keep using MyCompanyDesk, your session renews itself and you stay signed in. After 30 days without use, your session ends, and a session never lasts longer than 90 days from the moment you signed in. Signing in again starts both windows anew.

## Social login

If you use Google or Microsoft to sign in:

- Your authentication is handled by the provider
- MyCompanyDesk never sees or stores your Google or Microsoft password
- You can also set a password on **Settings > Inloggen** to enable email login alongside it

## Data protection

MyCompanyDesk takes data security seriously:

- All data is transmitted over HTTPS
- Passwords are stored hashed, never in plain text
- GDPR-compliant data handling
- Regular backups ensure data safety
- The `bsn` (Dutch citizen service number) field is used only for rental workflows and is never returned in customer API responses

For details on cookies, analytics identifiers, and Do Not Track handling, see [Cookies and analytics](/en/account/cookies-tracking).

## Account deletion

If you want to stop using MyCompanyDesk, go to **Settings > Account opzeggen** (cancel your account). This row is visible to admins only. Read the page carefully: it explains what happens to your subscription and your data before you confirm.

::: warning
Ending your account is a big step. Download a copy of your records first via **Settings > Gegevens downloaden**; Dutch tax rules require you to be able to show your administration for 7 years.
:::
