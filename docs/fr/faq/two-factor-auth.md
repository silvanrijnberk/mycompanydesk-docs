---
title: Authentification à deux facteurs
last_verified: 2026-07-02
chatbot:
  triggers: ["two factor", "two-factor", "2fa", "two step", "authenticator", "mfa", "tweestapsverificatie", "twee-factor", "zwei faktor", "authentification deux facteurs", "double authentification"]
  actions:
    - { label: "Open login settings", to: "/settings/inloggen" }
  follow_up: ["How do I change my password?", "How do I reset a forgotten password?", "How do I manage team access?"]
---

L'authentification à deux facteurs (2FA) ajoute un code à 6 chiffres issu d'une application d'authentification en plus de votre mot de passe.

Pour activer la 2FA :
1. Allez dans Paramètres → "Connexion"
2. Cliquez sur "Activer l'application d'authentification" et scannez le QR code avec une application d'authentification (Google Authenticator, 1Password, Authy)
3. Saisissez le code à 6 chiffres de l'application et cliquez sur "Vérifier et activer"
4. Conservez les codes de secours affichés. Chaque code fonctionne une seule fois quand vous n'avez pas votre authentificateur sous la main

Dès lors, la connexion demande le code à 6 chiffres après votre e-mail et votre mot de passe. Activez l'option pour mémoriser cet appareil pendant 30 jours et les appareils de confiance sautent cette étape.

Sur la même page, vous pouvez aussi ajouter des passkeys (Touch ID, Face ID, Windows Hello ou votre téléphone), donner un nom à chaque passkey et supprimer celles que vous n'utilisez plus. L'écran de connexion propose ensuite également la connexion par passkey.

Plus d'accès à votre authentificateur ? Saisissez l'un de vos codes de secours à la connexion, ou utilisez le lien "Vous n'avez plus accès à votre deuxième facteur ?" sur l'écran de connexion. Après un délai de sécurité de 24 heures, votre deuxième facteur est effacé et vous pouvez vous reconnecter avec votre seul mot de passe.

Pour désactiver la 2FA, utilisez la même page de paramètres et confirmez avec un code de votre application d'authentification, un code de secours ou votre mot de passe.

Astuce : téléchargez vos codes de secours au format .txt et conservez-les en lieu sûr, à l'écart de l'appareil avec lequel vous vous connectez.
