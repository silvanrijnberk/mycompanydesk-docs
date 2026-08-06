---
title: "Automatischer Rechnungsentwurf aus unterschriebenem Angebot"
last_verified: 2026-08-06
chatbot:
  triggers:
    - "quote auto invoice"
    - "automatic invoice from quote"
    - "draft invoice quote signing"
    - "offerte automatisch factuur"
    - "automatisch conceptfactuur offerte"
    - "angebot automatisch rechnung"
    - "devis facture automatique"
  actions:
    - { label: "Einstellungen öffnen", to: "/settings/facturen" }
    - { label: "Angebote öffnen", to: "/quotes" }
  follow_up:
    - "Wo finde ich den Rechnungsentwurf?"
    - "Kann ich die Rechnung nach dem Erstellen noch bearbeiten?"
    - "Was passiert, wenn der Rechnungsentwurf nicht erstellt werden kann?"
---

# Automatischer Rechnungsentwurf aus unterschriebenem Angebot

Sie können MyCompanyDesk so einstellen, dass ein Rechnungsentwurf automatisch erstellt wird, wenn ein Kunde ein Angebot online unterschreibt.

## Einschalten

1. Gehen Sie zu **Einstellungen → Rechnungen und Angebote** (`/settings/facturen`).
2. Scrollen Sie zum Abschnitt **Angebote**.
3. Aktivieren Sie den Schalter **Rechnungsentwurf bei Unterschrift erstellen**.
4. Änderungen werden automatisch gespeichert.

## Was bei der Unterschrift passiert

- Das unterschriebene Angebot durchläuft die normale Statusfolge.
- MyCompanyDesk erstellt eine neue Rechnung im Status **Entwurf** mit denselben Positionen, Summen und demselben Kunden wie das unterschriebene Angebot.
- Der Entwurf erscheint unter **Rechnungen → Entwürfe**.

## Bevor Sie die Rechnung senden

Prüfen Sie den Entwurf wie jede andere Rechnung. Wenn Ihr Arbeitsbereich manuelle Nummerierung verwendet, hat der Entwurf noch keine Nummer. Fügen Sie eine Nummer hinzu, bevor Sie ihn senden. Positionen, Notizen und das Fälligkeitsdatum können Sie wie gewohnt bearbeiten.

## Wenn etwas schiefgeht

Wenn der Rechnungsentwurf nicht erstellt werden kann — etwa weil keine Rechnungsnummer verfügbar ist — erhalten Sie eine Benachrichtigung. Sie können dann selbst eine Rechnung aus dem unterschriebenen Angebot erstellen über **In Rechnung umwandeln**.

## Verwandt

- [Angebote](/de/features/quotes)
- [Rechnungen](/de/features/invoices)
- [Angebotsnummerierung](/de/faq/quote-numbering)
