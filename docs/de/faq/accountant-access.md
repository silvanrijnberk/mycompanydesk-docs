---
title: "Buchhalter-Zugang"
last_verified: 2026-06-05
chatbot:
  triggers:
    - "accountant access"
    - "accountant permissions"
    - "add accountant"
    - "invite accountant"
    - "accountant toevoegen"
    - "boekhouder"
    - "buchhalter einladen"
    - "buchhalter zugang"
    - "comptable acces"
    - "ajouter comptable"
    - "accountant invite"
    - "revoke accountant"
    - "boekhouder dashboard"
    - "accountant dashboard"
  actions:
    - { label: "Team-Einstellungen oeffnen", to: "/settings?section=team" }
    - { label: "Buchhalter-Dashboard oeffnen", to: "/boekhouder" }
  follow_up:
    - "Was kann mein Buchhalter sehen?"
    - "Wie lade ich meinen Buchhalter ein?"
    - "Wie widerrufe ich den Zugang?"
---

# Buchhalter-Zugang

Geben Sie Ihrem Buchhalter (Steuerberater) Lesezugriff auf die finanziellen Bereiche Ihres Arbeitsbereichs. Er kann Rechnungen, Ausgaben, USt., Banktransaktionen und Berichte einsehen, ohne Ihre Einstellungen, Website oder E-Mail-Konfiguration aendern zu koennen.

## Buchhalter einladen

1. Gehen Sie zu **Einstellungen > Team** (oder `/workspace/account/team`)
2. Klicken Sie im Bereich **Buchhalter** auf **Buchhalter hinzufuegen**
3. Geben Sie Name und E-Mail-Adresse ein
4. Klicken Sie auf **Einladen** — der Buchhalter erhaelt eine E-Mail mit einem Akzeptierungslink

Die Einladung ist 30 Tage gueltig. Nach Ablauf koennen Sie eine neue senden. Die Einladungs-E-Mail wird auf Niederlaendisch versendet und nennt ausdruecklich den Lesezugriff und die gewaehrten Berechtigungen.

::: tip
Die Einladung ist an die E-Mail-Adresse gebunden: Nur die Person mit genau der eingegebenen E-Mail-Adresse kann akzeptieren. Das Weiterleiten des Einladungslinks funktioniert nicht.
:::

## Was Ihr Buchhalter sehen kann

Nach der Annahme hat Ihr Buchhalter Lesezugriff auf:

- Rechnungen und Gutschriften
- Ausgaben und Belege
- USt.-Uebersicht und Steuererklaerung
- Banktransaktionen
- Berichte

Er hat **keinen** Zugriff auf Ihre Website/den Site-Builder, E-Mail-Einstellungen, Arbeitsbereich-Einstellungen oder Konfigurationsseiten.

## Das Buchhalter-Dashboard

Nach der Annahme sieht Ihr Buchhalter ein spezielles Dashboard unter `/boekhouder` mit:

- Seinem eigenen Home-Arbeitsbereich
- Allen Mandanten-Arbeitsbereichen, zu denen er Zugang hat, mit dem Datum des letzten Zugriffs

Er klickt auf **Oeffnen** bei einem Mandanten-Arbeitsbereich, um dorthin zu wechseln. Eine Suchleiste erscheint, wenn er mehr als fuenf Mandanten hat.

## Zugang verwalten

Als Arbeitsbereich-Eigentuemer gehen Sie zu **Einstellungen > Team**, um alle ausstehenden Einladungen und aktiven Buchhalter-Zuweisungen zu sehen. Von dort koennen Sie:

- Ausstehende und aktive Buchhalter mit E-Mail, Name und letzter Aktivitaet **einsehen**
- Eine Einladung **widerrufen**, bevor sie angenommen wurde (der Link funktioniert sofort nicht mehr)
- Eine aktive Zuweisung **widerrufen**, um den Zugang eines Buchhalters zu entfernen (sofort wirksam)

## Status

| Status | Bedeutung |
|---|---|
| **Ausstehend** | Einladung gesendet, noch nicht angenommen |
| **Aktiv** | Buchhalter hat akzeptiert und kann auf Ihren Arbeitsbereich zugreifen |
| **Widerrufen** | Zugang wurde von Ihnen entzogen |
| **Abgelaufen** | Einladung wurde nicht innerhalb von 30 Tagen angenommen |
