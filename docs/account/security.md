---
title: Security
---

# Security

Protect your account with strong authentication and monitor access.

## Password

Use a strong, unique password for your MyCompanyDesk account. Change it from **Profile > Password**.

### Password requirements

- At least 8 characters
- Mix of letters, numbers, and symbols recommended

## Two-factor authentication

Add an extra layer of security to your account:

1. Go to **Profile > Security**
2. Click **Enable Two-Factor Authentication**
3. Scan the QR code with your authenticator app (Google Authenticator, Authy, etc.)
4. Enter the verification code to confirm
5. Save your **recovery codes** in a secure location

With 2FA enabled, you'll need both your password and a code from your authenticator app to log in.

### Disabling 2FA

1. Go to **Profile > Security**
2. Click **Disable Two-Factor Authentication**
3. Enter your password to confirm

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

## Session management

View and manage your active sessions:

- See all devices and browsers where you're logged in
- View last activity time for each session
- **Revoke** sessions you don't recognize

::: warning
If you see a session you don't recognize, revoke it immediately and change your password.
:::

## Social login

If you use Google or Microsoft to sign in:

- Your authentication is handled by the provider
- MyCompanyDesk never sees or stores your Google/Microsoft password
- You can disconnect social login from **Profile > Connected Apps**

## Data protection

MyCompanyDesk takes data security seriously:

- All data is transmitted over HTTPS
- Passwords are hashed using bcrypt
- Database connections are encrypted
- Regular backups ensure data safety
- GDPR-compliant data handling

## Account deletion

If you need to delete your account:

1. Go to **Profile > Data**
2. Click **Delete Account**
3. Enter your password to confirm
4. All your data is permanently removed

::: warning
Account deletion is irreversible. Export your data first if you need a backup.
:::
