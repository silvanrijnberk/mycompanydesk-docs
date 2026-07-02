---
title: Zugang und Steuerberater
last_verified: 2026-07-02
---

# Zugang und Steuerberater

Geben Sie einem Partner, Mitarbeiter oder Ihrem Steuerberater Zugang zu Ihrer Buchhaltung. Jede Person erhält einen eigenen Login. In der App heißt diese Seite **Toegang en boekhouder** (Zugang und Steuerberater).

## Wo Sie es finden

Öffnen Sie **Einstellungen** über das Menü und wählen Sie **Zugang und Steuerberater**, oder gehen Sie direkt zu `/settings/team`. Alte Links zu den Teameinstellungen leiten hierher weiter.

Die Seite hat zwei Bereiche:

- **Personen mit Zugang**: Laden Sie Teamkollegen ein und legen Sie fest, was sie sehen und tun können. Dieser Bereich erfordert den Pro-Tarif; auf Free und Starter erscheint ein Upgrade-Hinweis. Auf Pro gibt es keine Begrenzung der Anzahl eingeladener Personen.
- **Steuerberater**: Laden Sie Ihren Steuerberater ein und verwalten Sie dessen Zugang. Dieser Bereich ist in jedem Tarif kostenlos.

## Was auf der Seite steht

### Name des Arbeitsbereichs

Eine Karte mit einem einzigen Feld. Der Name des Arbeitsbereichs erscheint in der Navigation, auf Einladungen und im Kontomenü der App. Nur Team-Admins können ihn bearbeiten. Änderungen werden automatisch gespeichert.

### Aktuelle Mitglieder

Eine Liste aller Personen, die sich anmelden können. Jede Zeile zeigt:

- Avatar mit Initialen und einem Anwesenheitspunkt (grün online, grau inaktiv, ausgeblendet, wenn Sie kein Admin sind)
- Name und E-Mail-Adresse
- Rollen-Badge oder Rollenauswahl (nur Admin)
- Ein Einstellungssymbol, das das Panel **Zugang verwalten** öffnet
- Letzte Aktivität ("Vor 2 Minuten aktiv", "Gestern zuletzt gesehen"), nur Admin

Ist die Liste leer, zeigt die Karte den Solo-Zustand: Sie arbeiten allein, Ihr Arbeitsbereich ist voll funktionsfähig, und Sie fügen Teamkollegen hinzu, wann immer Sie bereit sind.

### Jemandem Zugang geben

Admins geben eine E-Mail-Adresse ein und senden die Einladung. In der App heißt die Schaltfläche **Iemand toegang geven** (jemandem Zugang geben). Der Eingeladene erhält eine E-Mail mit einem Link; wer noch kein MyCompanyDesk-Konto hat, erstellt beim Annehmen eines. Ausstehende Einladungen erscheinen in einer separaten Karte mit Sendezeitpunkt und einem Badge.

Nicht-Admins sehen stattdessen einen Hinweis: Nur Team-Admins können neue Mitglieder einladen.

### Steuerberater

Eine separate Liste für externe Steuerberater, in jedem Tarif kostenlos. Ihr Steuerberater kann Ihre Zahlen einsehen und Ihre Abgaben prüfen, ohne einen Pro-Teamplatz zu belegen. Jede Zeile zeigt einen Status:

| Badge | Bedeutung |
|---|---|
| **Nur Kontakt** | In Ihrem Adressbuch, kein App-Zugang |
| **Eingeladen** | Einladungs-E-Mail gesendet, noch nicht angenommen |
| **Aktiviert** | Hat ein Konto und kann sich anmelden |
| **Widerrufen** | Zugang entfernt (kann später wiederhergestellt werden) |

Admin-Aktionen pro Zeile: **Steuerberater einladen**, das Panel **Zugang verwalten** und **Entfernen**.

## Rollen

| Rolle | Beschreibung |
|---|---|
| **Admin** | Vollzugriff. Kann Mitglieder einladen und entfernen, Rollen ändern, das Abonnement verwalten und Unternehmenseinstellungen bearbeiten. |
| **Mitglied** | Zugriff auf das, was der Admin im Panel Zugang verwalten freigibt. |
| **Steuerberater** | Ein eigener Kontakttyp. Erhält Zugang über den Steuerberater-Ablauf statt über die Mitgliedereinladung. |

Rollen werden direkt in der Mitgliederzeile über ein Menü umgeschaltet (nur Admin). Ihre eigene Rolle können Sie nicht ändern.

## Berechtigungen

Das Panel **Zugang verwalten** öffnet eine Berechtigungstabelle pro Seite. Jede Zeile ist ein Bereich der App: Dashboard, Rechnungen, Ausgaben, Kunden, Projekte, Objekte, Verträge, Angebote, Vermietung, Berichte und Einstellungen.

Für jede Seite gibt es drei unabhängige Schalter:

- **Lesen**: sieht die Seite und die Einträge darauf
- **Schreiben**: kann bestehende Einträge bearbeiten
- **Erstellen**: kann neue Einträge hinzufügen

Das Panel zeigt außerdem einen Hinweis **Zugang widerrufen** für gesperrte Konten (die Wiederherstellen-Schaltfläche aktiviert sie erneut).

## Anmeldesicherheit

Die Anmeldesicherheit jedes Mitglieds liegt beim eigenen Konto, unter **Einstellungen** und dann **Anmeldung**, nicht auf dieser Seite:

- **Passkeys**: Mitglieder können einen oder mehrere Passkeys registrieren; danach ist die Passkey-Schaltfläche der Standardweg zur Anmeldung statt des Passwortfelds.
- **Zwei-Schritt-Verifizierung**: Ist sie aktiviert, fragt die Anmeldung nach dem Passwort nach einem 6-stelligen Code aus einer Authenticator-App.

Admins können die Passkeys oder Zwei-Schritt-Verifizierung eines anderen Mitglieds nicht verwalten; das sind persönliche Zugangsdaten. Wer ausgesperrt ist, nutzt die Wiederherstellungsoption auf dem Anmeldebildschirm, um sie zurückzusetzen.

## Arbeitsbereiche wechseln

Öffnen Sie den Arbeitsbereich-Umschalter in der oberen Leiste, um zwischen Arbeitsbereichen zu wechseln oder einen neuen anzulegen.

## Tarife im Überblick

| Möglichkeit | Free | Starter | Pro |
|---|---|---|---|
| Nur der Inhaber | ja | ja | ja |
| Teammitglieder einladen | nein | nein | ja (unbegrenzt) |
| Steuerberater-Zugang | ja | ja | ja |

## Verwandte Themen

- [Tarif und Zahlungen](/de/settings/billing), um Teammitglieder freizuschalten
- [Konto und Sicherheit](/de/account/security) für Passkeys und Zwei-Schritt-Verifizierung
