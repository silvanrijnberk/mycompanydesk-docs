---
title: Two-factor authentication
description: "Two-factor authentication (2FA) adds a 6-digit code from an authenticator app on top of your password, go to Settings (Instellingen) > Inloggen."
last_verified: 2026-09-29
chatbot:
  triggers: ["two factor", "two-factor", "2fa", "two step", "authenticator", "mfa", "tweestapsverificatie", "twee-factor", "zwei faktor", "authentification deux facteurs", "double authentification"]
  actions:
    - { label: "Open login settings", to: "/settings/inloggen" }
  follow_up: ["How do I change my password?", "How do I reset a forgotten password?", "How do I manage team access?"]
---

Two-factor authentication (2FA) adds a 6-digit code from an authenticator app on top of your password.

To enable 2FA:
1. Go to Settings ("Instellingen") → "Inloggen"
2. Click "Enable authenticator app". Scan the QR code with an authenticator app (Google Authenticator, 1Password, Authy), or, if you have the installed MyCompanyDesk app, choose **Gebruik de MyCompanyDesk-app** to generate codes inside the app.
3. Enter the 6-digit code from the app or from **Instellingen > Inlogcodes** and click "Verify & enable"
4. Save the backup codes that appear. Each code works once when you don't have your authenticator at hand

From then on, signing in asks for the 6-digit code after your email and password. If you use the MyCompanyDesk app as your authenticator, find the current code under **Instellingen > Inlogcodes**. Check "Remember this device for 30 days" and trusted devices skip the code. Changing or resetting your password clears this trust on every device, so the 6-digit code is asked again.

On the same page you can also add passkeys (Touch ID, Face ID, Windows Hello or your phone), give each one a name, and remove the ones you no longer use. The login screen then offers passkey sign-in as well.

No 2FA on your account? Signing in from a browser we do not know yet still gets a check: a 6-digit code by email, valid for 15 minutes, and MyCompanyDesk remembers that browser for 30 days afterwards. See [a login code by email on a new browser](/en/account/security#a-login-code-by-email-on-a-new-browser).

Sensitive changes (your IBAN, login address, password, a domain that moves away, mail forwarding, API keys or a new admin) ask one more check on top of any login: **Confirm it's you**, with a passkey, the code app or an emailed code. A password is not enough for that step. See [Security](/en/account/security#confirm-its-you-for-sensitive-changes).

Lost access to your authenticator? Enter one of your backup codes at sign-in, or use the "Lost access to your second factor?" link on the login screen. After a 24-hour security delay your second factor is cleared and you can sign in with just your password.

To turn 2FA off, use the same settings page and confirm with a code from your authenticator app, a backup code, or your password.

Tip: Download your backup codes as a .txt file and keep them somewhere safe, away from the device you sign in on.
