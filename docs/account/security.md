---
title: Security
last_verified: 2026-07-02
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

With 2FA enabled, you need both your password and a code from your authenticator app to log in.

### Logging in with 2FA

After entering your password, the login screen asks for the 6-digit code from your authenticator app. No access to the app? Enter one of your backup codes in the same field.

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

## Sessions

The sessions card on **Settings > Inloggen** has a single **Log out** action that ends your current session. There is no list of other devices or per-session revoking. If you suspect someone else has access to your account, change your password.

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

## Account deletion

If you want to stop using MyCompanyDesk, go to **Settings > Account opzeggen** (cancel your account). This row is visible to admins only. Read the page carefully: it explains what happens to your subscription and your data before you confirm.

::: warning
Ending your account is a big step. Download a copy of your records first via **Settings > Gegevens downloaden**; Dutch tax rules require you to be able to show your administration for 7 years.
:::
