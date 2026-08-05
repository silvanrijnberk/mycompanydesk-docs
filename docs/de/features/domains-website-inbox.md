---
title: Domains, Website & Inbox
last_verified: 2026-08-05
---

# Domains, Website & Inbox

MyCompanyDesk verwaltet deine öffentliche Identität an einem Ort: eine eigene Domain, eine branded Marketing-Website und eine gemeinsame Inbox, die Nachrichten sammelt.

## Eigene Domain

Du kannst eine eigene Domain auf MyCompanyDesk verweisen. Sobald sie eingerichtet ist, werden die Marketing-Website und alle gehosteten Seiten über deine Domain ausgeliefert.

So verwendest du eine eigene Domain:

1. Gehe zu **Einstellungen > Domain**.
2. Gib die gewünschte Domain ein.
3. Füge die angezeigten DNS-Einträge hinzu (meist ein CNAME- oder A-Record).
4. Warte, bis sich DNS verbreitet hat. Wir prüfen das automatisch und zeigen den Status in der App an.

Du kannst auch eine Subdomain verwenden, z. B. `www.deinedomain.de` oder `help.deinedomain.de`.

### Von uns gehostete Subdomains

Wenn du keine eigene Domain verwenden möchtest, geben wir dir eine Subdomain auf `mycompanydesk.com`. Dies ist praktisch zum Testen oder für kleinere Accounts, die keine vollständig branded Domain brauchen.

### Domain-Status

Die Domain-Seite zeigt an, ob DNS korrekt konfiguriert ist. Wenn sich etwas bei deinem DNS-Provider ändert, wird der Status beim nächsten Check aktualisiert.

## Marketing-Website

Die Marketing-Website ist eine öffentliche Landingpage für dein Unternehmen. Sie enthält:

- Firmenname und Tagline
- Kontaktdaten und Social-Media-Links
- Eine kurze Beschreibung dessen, was du tust
- Einen Call-to-Action-Button, der Besucher an die richtige Stelle leitet

Du bearbeitest die Inhalte unter **Einstellungen > Website**. Änderungen werden automatisch veröffentlicht.

### Outreach-Sample-Karte

Wir können eine Postkarte mit einem eindeutigen QR-Code drucken und versenden, der auf deine Landingpage führt. Wenn jemand den Code scannt, zählen wir den Scan und leiten den Besucher auf deine Website mit einer kurzen Referenz (`ref`) in der URL weiter, damit die Seite eine spätere Anmeldung der physischen Karte zuordnen kann. Der Scan selbst wird serverseitig gezählt und funktioniert unabhängig von der Cookie-Einwilligung. Die Referenz wird erst gespeichert, nachdem ein Besucher Analytics-Cookies akzeptiert hat, wie unter [Cookies & Tracking](/account/cookies-tracking) beschrieben.

In der Admin-Prospect-Ansicht siehst du, wie oft die Karte gescannt wurde und wann der erste Scan stattfand. Die Postkarte ist als einmaliges Sample gedacht; sie ist kein Abonnement oder wiederkehrender Dienst.

### SEO-Grundlagen

Die Marketing-Website enthält Standard-Meta-Tags für Titel und Beschreibung. Du kannst diese unter **Einstellungen > Website** überschreiben.

### Analytics

Die Website verwendet privacy-freundliche Analytics. Siehe [Cookies & Tracking](/account/cookies-tracking) für genaue Informationen zu den erfassten Daten und zur Ablehnung.

## Gemeinsame Inbox

Jeder MyCompanyDesk-Workspace hat eine gemeinsame Inbox, die Nachrichten sammelt, die an die Workspace-E-Mail-Adresse gesendet oder über das Kontaktformular auf der Website eingereicht wurden.

### Inbox-Adresse

Deine Inbox-Adresse lautet zum Beispiel `deinefirma@inbox.mycompanydesk.com` oder, wenn du eine eigene Domain verwendest, `hallo@deinedomain.de`. Die genaue Adresse findest du unter **Inbox > Einstellungen**.

### Was in der Inbox landet

- Einreichungen über das Kontaktformular auf der Marketing-Website
- E-Mails an die Workspace-Adresse
- Automatische Benachrichtigungen, die wir in deinem Namen versenden

### Zuweisen und Antworten

Teammitglieder können Nachrichten in der Inbox ansehen, zuweisen und beantworten. Antworten werden von der Workspace-Adresse aus gesendet, damit das Gespräch an einem Ort bleibt.

### Spam und Moderation

Die Inbox hat einen grundlegenden Spam-Filter. Verdächtige Nachrichten werden zur Prüfung markiert, anstatt in der Hauptliste zu erscheinen.

## Öffentliche Seiten

Einige Funktionen wie Hilfe-Artikel oder Buchungsseiten können als öffentliche Seiten unter deiner Domain veröffentlicht werden. Jede öffentliche Seite übernimmt dein Branding und deine Domain-Einstellungen.

## Cookies, Tracking und Einwilligung

Deine Marketing-Website zeigt ein Cookie-Banner. Details zu Analytics und Speicherung findest du unter [Cookies & Tracking](/account/cookies-tracking). Es werden nur dokumentierte Schlüssel verwendet; vor der Einwilligung werden keine Third-Party-Tracker geladen.

## Eine Domain entfernen

Wenn du eine eigene Domain nicht mehr verwenden möchtest, kannst du sie unter **Einstellungen > Domain** entfernen. Dein Workspace fällt dann auf die `mycompanydesk.com`-Subdomain zurück, bis du eine neue hinzufügst.

## Verwandte Themen

- [Kontoeinstellungen](/account/settings)
- [Cookies & Tracking](/account/cookies-tracking)
- [Teammitglieder & Berechtigungen](/account/team-members)
