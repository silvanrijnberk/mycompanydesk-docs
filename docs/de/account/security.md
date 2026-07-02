---
title: Sicherheit
last_verified: 2026-07-02
---

# Sicherheit

Schützen Sie Ihr Konto mit starker Authentifizierung. Alles Folgende finden Sie im Einstellungsbereich: Öffnen Sie **Einstellungen** und wählen Sie **Anmelden**, sofern nicht anders angegeben.

## Passwort

Verwenden Sie ein starkes, einzigartiges Passwort für Ihr MyCompanyDesk-Konto. Ändern Sie es unter **Einstellungen > Anmelden**.

### Passwortanforderungen

- Mindestens 8 Zeichen
- Eine Mischung aus Buchstaben, Zahlen und Symbolen wird empfohlen

## Zwei-Faktor-Authentifizierung

Fügen Sie Ihrem Konto eine zusätzliche Sicherheitsebene hinzu:

1. Gehen Sie zu **Einstellungen > Anmelden**
2. Starten Sie die Einrichtung der Bestätigung in zwei Schritten
3. Scannen Sie den QR-Code mit Ihrer Authenticator-App (Google Authenticator, 1Password, Authy und ähnliche)
4. Geben Sie den Bestätigungscode ein
5. Bewahren Sie Ihre **Backup-Codes** an einem sicheren Ort auf

Mit aktivierter 2FA benötigen Sie zum Anmelden sowohl Ihr Passwort als auch einen Code aus Ihrer Authenticator-App.

### Anmelden mit 2FA

Nach der Eingabe Ihres Passworts fragt der Anmeldebildschirm nach dem 6-stelligen Code aus Ihrer Authenticator-App. Kein Zugriff auf die App? Geben Sie in dasselbe Feld einen Ihrer Backup-Codes ein.

Wenn Sie sich mit Passwort und Code anmelden, können Sie **dieses Gerät 30 Tage merken** ankreuzen; dieses Gerät überspringt den Code-Schritt dann einen Monat lang.

### Zweiten Faktor verloren?

Haben Sie keinen Zugriff mehr auf Ihre Authenticator-App oder Ihren Passkey, nutzen Sie den Wiederherstellungslink auf dem Code-Bildschirm:

1. Geben Sie Ihre E-Mail-Adresse ein; wir senden einen Bestätigungslink.
2. Das Öffnen des Links startet eine Sicherheitswartezeit von 24 Stunden.
3. Nach der Wartezeit melden Sie sich nur mit Ihrem Passwort an. Ihre Passkeys, Ihre Authenticator-App und Ihre Backup-Codes werden automatisch gelöscht, damit Sie sie neu einrichten können.

Die Wartezeit existiert, damit ein Angreifer, der nur Ihr Passwort kennt, den Schutz Ihres Kontos nicht sofort entfernen kann.

### 2FA deaktivieren

1. Gehen Sie zu **Einstellungen > Anmelden**
2. Wählen Sie die Deaktivierung der Bestätigung in zwei Schritten
3. Bestätigen Sie mit einem aktuellen Code aus Ihrer Authenticator-App, einem Backup-Code oder Ihrem Passwort

## Anmelden ohne Passwort (Magic Link)

Sie können sich ohne Passwort mit einem einmaligen Link anmelden, der an Ihre E-Mail gesendet wird:

1. Gehen Sie zur Anmeldeseite
2. Klicken Sie auf **Anmeldelink zusenden**
3. Geben Sie Ihre E-Mail-Adresse ein
4. Öffnen Sie Ihr Postfach und klicken Sie auf den Link

Der Link ist 15 Minuten gültig und kann nur einmal verwendet werden. Aus Sicherheitsgründen macht das Anfordern eines neuen Links frühere Links ungültig.

::: tip
Wenn Sie Ihre E-Mail-Adresse nach der Registrierung bestätigen, werden Sie automatisch angemeldet. Es ist kein zusätzlicher Anmeldeschritt nötig.
:::

## Passkeys

Mit Passkeys melden Sie sich mit Biometrie oder einem Sicherheitsschlüssel statt mit einem Passwort an. Sie stehen jedem Nutzer zur Verfügung: Verwalten Sie Ihre eigenen Passkeys unter **Einstellungen > Anmelden**.

- Registrieren Sie mehrere Passkeys (Face ID, Touch ID, Windows Hello, Hardware-Schlüssel)
- Benennen Sie jeden Passkey, damit Sie Geräte einzeln widerrufen können
- Auf dem Anmeldebildschirm erscheint nach Eingabe Ihrer E-Mail-Adresse eine Passkey-Schaltfläche, wenn Ihr Konto einen besitzt

## Sitzungen

Die Sitzungskarte unter **Einstellungen > Anmelden** hat eine einzige Aktion: **Abmelden**, die Ihre aktuelle Sitzung beendet. Es gibt keine Liste anderer Geräte und kein Widerrufen einzelner Sitzungen. Vermuten Sie, dass jemand anderes Zugriff auf Ihr Konto hat, ändern Sie Ihr Passwort.

## Anmelden über Google oder Microsoft

Wenn Sie sich mit Google oder Microsoft anmelden:

- Die Authentifizierung übernimmt der Anbieter
- MyCompanyDesk sieht oder speichert Ihr Google- oder Microsoft-Passwort niemals
- Sie können zusätzlich unter **Einstellungen > Anmelden** ein Passwort festlegen, um sich auch per E-Mail anmelden zu können

## Datenschutz

MyCompanyDesk nimmt Datensicherheit ernst:

- Alle Daten werden über HTTPS übertragen
- Passwörter werden gehasht gespeichert, nie im Klartext
- DSGVO-konforme Datenverarbeitung
- Regelmäßige Backups halten Ihre Daten sicher

## Konto kündigen

Möchten Sie MyCompanyDesk nicht mehr nutzen, gehen Sie zu **Einstellungen > Konto kündigen**. Diese Zeile ist nur für Administratoren sichtbar. Lesen Sie die Seite in Ruhe: Sie erklärt, was mit Ihrem Abonnement und Ihren Daten geschieht, bevor Sie bestätigen.

::: warning
Die Kündigung Ihres Kontos ist ein großer Schritt. Laden Sie zuerst eine Kopie Ihrer Unterlagen über **Einstellungen > Daten herunterladen** herunter; die niederländische Steuerbehörde verlangt, dass Sie Ihre Verwaltung 7 Jahre lang vorzeigen können.
:::
