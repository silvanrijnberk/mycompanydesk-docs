---
title: Sicherheit
---

# Sicherheit

Schützen Sie Ihr Konto mit starker Authentifizierung und überwachen Sie den Zugang.

## Passwort

Verwenden Sie ein starkes, einzigartiges Passwort für Ihr MyCompanyDesk-Konto. Ändern Sie es unter **Profil > Passwort**.

### Passwortanforderungen

- Mindestens 8 Zeichen
- Mischung aus Buchstaben, Zahlen und Sonderzeichen empfohlen

## Zwei-Faktor-Authentifizierung

Fügen Sie Ihrem Konto eine zusätzliche Sicherheitsebene hinzu:

1. Gehen Sie zu **Profil > Sicherheit**
2. Klicken Sie auf **Zwei-Faktor-Authentifizierung aktivieren**
3. Scannen Sie den QR-Code mit Ihrer Authenticator-App (Google Authenticator, Authy usw.)
4. Geben Sie den Bestätigungscode ein, um zu bestätigen
5. Speichern Sie Ihre **Wiederherstellungscodes** an einem sicheren Ort

Mit aktivierter 2FA benötigen Sie sowohl Ihr Passwort als auch einen Code aus Ihrer Authenticator-App, um sich anzumelden.

### 2FA deaktivieren

1. Gehen Sie zu **Profil > Sicherheit**
2. Klicken Sie auf **Zwei-Faktor-Authentifizierung deaktivieren**
3. Geben Sie Ihr Passwort zur Bestätigung ein

## Passwortlose Anmeldung (Magic Link)

Sie können sich ohne Passwort mit einem einmaligen Link anmelden, der an Ihre E-Mail gesendet wird:

1. Gehen Sie zur Anmeldeseite
2. Klicken Sie auf **Senden Sie mir einen Anmeldelink**
3. Geben Sie Ihre E-Mail-Adresse ein
4. Öffnen Sie Ihren Posteingang und klicken Sie auf den Link

Der Link ist 15 Minuten gültig und kann nur einmal verwendet werden. Aus Sicherheitsgründen werden beim Anfordern eines neuen Links alle noch offenen Links ungültig.

::: tip
Wenn Sie Ihre E-Mail nach der Registrierung bestätigen, werden Sie automatisch angemeldet. Ein zusätzlicher Anmeldeschritt ist dann nicht erforderlich.
:::

## Sitzungsverwaltung

Sehen und verwalten Sie Ihre aktiven Sitzungen:

- Alle Geräte und Browser anzeigen, bei denen Sie angemeldet sind
- Letzte Aktivitätszeit für jede Sitzung einsehen
- Nicht erkannte Sitzungen **widerrufen**

::: warning
Wenn Sie eine Sitzung sehen, die Sie nicht erkennen, widerrufen Sie sie sofort und ändern Sie Ihr Passwort.
:::

## Passkeys

Mit Passkeys können Sie sich mit Biometrie oder einem Sicherheitsschlüssel statt eines Passworts anmelden. Gehen Sie zu **Profil > Sicherheit**, um sie zu verwalten.

- Registrieren Sie mehrere Passkeys (Face ID, Touch ID, Windows Hello, Hardware-Schlüssel)
- Benennen Sie jeden Passkey, damit Sie einzelne Geräte widerrufen können
- Sobald ein Passkey registriert ist, wird standardmäßig die Passkey-Schaltfläche beim Anmelden angezeigt

::: info
In Arbeitsbereichen, in denen Passkeys von einem Administrator verwaltet werden, sehen Mitglieder ohne Admin-Rechte eine Infokarte anstelle des Verwaltungspanels. Bitten Sie Ihren Administrator, einen Passkey für Sie einzurichten, oder Ihnen Admin-Rechte zu geben, damit Sie sie selbst konfigurieren können.
:::

## Social Login

Wenn Sie Google oder Microsoft zur Anmeldung verwenden:

- Ihre Authentifizierung wird vom Anbieter gehandhabt
- MyCompanyDesk sieht oder speichert Ihr Google-/Microsoft-Passwort nie
- Sie können Social Login über **Profil > Verbundene Apps** trennen

## Datenschutz

MyCompanyDesk nimmt Datensicherheit ernst:

- Alle Daten werden über HTTPS übertragen
- Passwörter werden mit bcrypt gehasht
- Datenbankverbindungen sind verschlüsselt
- Regelmäßige Backups gewährleisten Datensicherheit
- DSGVO-konforme Datenverarbeitung

## Kontolöschung

Wenn Sie Ihr Konto löschen müssen:

1. Gehen Sie zu **Profil > Daten**
2. Klicken Sie auf **Konto löschen**
3. Geben Sie Ihr Passwort zur Bestätigung ein
4. Alle Ihre Daten werden dauerhaft entfernt

::: warning
Die Kontolöschung ist unwiderruflich. Exportieren Sie Ihre Daten vorher, wenn Sie eine Sicherungskopie benötigen.
:::
