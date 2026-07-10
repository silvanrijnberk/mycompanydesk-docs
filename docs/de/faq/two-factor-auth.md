---
title: Zwei-Faktor-Authentifizierung
last_verified: 2026-07-10
chatbot:
  triggers: ["two factor", "two-factor", "2fa", "two step", "authenticator", "mfa", "tweestapsverificatie", "twee-factor", "zwei faktor", "authentification deux facteurs", "double authentification"]
  actions:
    - { label: "Open login settings", to: "/settings/inloggen" }
  follow_up: ["How do I change my password?", "How do I reset a forgotten password?", "How do I manage team access?"]
---

Die Zwei-Faktor-Authentifizierung (2FA) ergänzt Ihr Passwort um einen 6-stelligen Code aus einer Authenticator-App.

So aktivieren Sie 2FA:
1. Gehen Sie zu Einstellungen → "Anmeldung"
2. Klicken Sie auf "Authenticator-App aktivieren". Scannen Sie den QR-Code mit einer Authenticator-App (Google Authenticator, 1Password, Authy), oder wählen Sie, wenn Sie die installierte MyCompanyDesk-App verwenden, "MyCompanyDesk-App verwenden" aus, um Codes direkt in der App zu erzeugen.
3. Geben Sie den 6-stelligen Code aus der App oder unter **Einstellungen > Anmeldecodes** ein und klicken Sie auf "Prüfen & aktivieren"
4. Bewahren Sie die angezeigten Backup-Codes auf. Jeder Code funktioniert einmal, wenn Sie Ihren Authenticator nicht zur Hand haben

Ab dann fragt die Anmeldung nach E-Mail-Adresse und Passwort zusätzlich nach dem 6-stelligen Code. Wenn Sie die MyCompanyDesk-App als Authenticator nutzen, finden Sie den aktuellen Code unter **Einstellungen > Anmeldecodes**. Aktivieren Sie die Option, dieses Gerät 30 Tage zu merken, und vertrauenswürdige Geräte überspringen den Code.

Auf derselben Seite können Sie außerdem Passkeys hinzufügen (Touch ID, Face ID, Windows Hello oder Ihr Telefon), jedem Passkey einen Namen geben und nicht mehr genutzte Passkeys entfernen. Der Anmeldebildschirm bietet danach auch die Anmeldung per Passkey an.

Kein Zugriff mehr auf Ihren Authenticator? Geben Sie bei der Anmeldung einen Ihrer Backup-Codes ein, oder nutzen Sie den Link "Kein Zugriff mehr auf Ihren zweiten Faktor?" auf dem Anmeldebildschirm. Nach einer Sicherheitswartezeit von 24 Stunden wird Ihr zweiter Faktor gelöscht und Sie können sich wieder nur mit Ihrem Passwort anmelden.

Zum Deaktivieren von 2FA nutzen Sie dieselbe Einstellungsseite und bestätigen mit einem Code aus Ihrer Authenticator-App, einem Backup-Code oder Ihrem Passwort.

Tipp: Laden Sie Ihre Backup-Codes als .txt-Datei herunter und bewahren Sie sie an einem sicheren Ort auf, getrennt von dem Gerät, mit dem Sie sich anmelden.
