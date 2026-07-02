---
title: Tweestapsverificatie
last_verified: 2026-07-02
chatbot:
  triggers: ["two factor", "two-factor", "2fa", "two step", "authenticator", "mfa", "tweestapsverificatie", "twee-factor", "zwei faktor", "authentification deux facteurs", "double authentification"]
  actions:
    - { label: "Open login settings", to: "/settings/inloggen" }
  follow_up: ["How do I change my password?", "How do I reset a forgotten password?", "How do I manage team access?"]
---

Tweestapsverificatie (2FA) voegt een 6-cijferige code uit een authenticator-app toe bovenop je wachtwoord.

Zo schakel je 2FA in:
1. Ga naar Instellingen → "Inloggen"
2. Klik op "Authenticator-app inschakelen" en scan de QR-code met een authenticator-app (Google Authenticator, 1Password, Authy)
3. Voer de 6-cijferige code uit de app in en klik op "Verifiëren & inschakelen"
4. Bewaar de back-upcodes die verschijnen. Elke code werkt één keer als je je authenticator niet bij de hand hebt

Vanaf dan vraagt inloggen na je e-mailadres en wachtwoord om de 6-cijferige code. Vink "Dit apparaat 30 dagen onthouden" aan en vertrouwde apparaten slaan de code over.

Op dezelfde pagina kun je ook passkeys toevoegen (Touch ID, Face ID, Windows Hello of je telefoon), elke passkey een naam geven en passkeys verwijderen die je niet meer gebruikt. Het inlogscherm biedt daarna ook inloggen met een passkey aan.

Geen toegang meer tot je authenticator? Vul bij het inloggen een van je back-upcodes in, of gebruik de link "Geen toegang meer tot je tweede factor?" op het inlogscherm. Na een veiligheidswachttijd van 24 uur wordt je tweede factor gewist en kun je weer inloggen met alleen je wachtwoord.

Wil je 2FA uitschakelen? Dat doe je op dezelfde instellingenpagina en bevestig je met een code uit je authenticator-app, een back-upcode of je wachtwoord.

Tip: download je back-upcodes als .txt-bestand en bewaar ze op een veilige plek, los van het apparaat waarmee je inlogt.
