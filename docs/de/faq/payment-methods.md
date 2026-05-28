---
title: "Payment methods"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "payment methods"
    - "add payment method"
    - "how to pay"
    - "bank transfer"
    - "payment options"
    - "betaalmethoden"
    - "betaalmethode toevoegen"
    - "zahlungsmethoden"
    - "modes de paiement"
    - "moyens de paiement"
  actions:
    - { label: "Open payment options", to: "/company?section=paymentOptions" }
  follow_up:
    - "How do I add my bank details?"
    - "How do I change the PDF template?"
---

So verwaltest du Zahlungsmethoden auf Dokumenten:
1. Gehe zu Unternehmen → Zahlungsoptionen
2. Aktiviere die Methoden, die du verwenden willst
3. Lege die Standardmethode fest
4. Fuege Kontodaten und Zahlungsanweisungen hinzu
5. Aenderungen in diesem Bereich werden automatisch gespeichert

Die aktivierten Methoden und Hinweise erscheinen auf Dokumentvorlagen, die diese Felder unterstuetzen.

## Online-Zahlungsanbieter

Du kannst dein eigenes Mollie- oder Stripe-Konto verbinden, damit Kunden Rechnungen direkt online bezahlen koennen. Das Geld geht direkt auf dein Konto. MyCompanyDesk stellt nur die Verbindung her.

So verbindest du einen Anbieter:
1. Gehe zu **Geld → Zahlungen** in deinem Arbeitsbereich
2. Klicke unter **Online betalingen** auf **Verbind Mollie** oder **Verbind Stripe**
3. Folge dem OAuth-Vorgang zur Autorisierung deines Kontos
4. Nach der Verbindung enthaelt jede versendete Rechnung einen Zahlungslink fuer deine Kunden

Mollie unterstuetzt iDEAL, Bancontact, Kreditkarte und Bankueberweisung, ideal fuer niederlaendische und belgische Kunden. Stripe Connect unterstuetzt Karte, Apple Pay, Google Pay und SEPA-Lastschrift, geeignet fuer internationale Kunden.

Zum Trennen klicke auf **Loskoppelen** auf der entsprechenden Karte. Nach der Trennung koennen Kunden nicht mehr ueber diesen Anbieter bezahlen.

### Mollie-Zahlungseinstellungen

Sobald Mollie verbunden ist, erscheinen ein **Betaalknop op facturen**-Schalter und ein **Betaalmethoden**-Bereich auf der Mollie-Karte. Der Schalter aktiviert oder deaktiviert die Zahlungsschaltflaeche auf allen Rechnungen, ohne Mollie zu trennen. Die Methodenliste, live aus Ihrem Mollie-Dashboard, laesst Sie auswaehlen, welche Zahlungsmethoden Ihre Kunden sehen. Mit **Stuur testbetaling** durchlaufen Sie einen kostenlosen €1-Test-Checkout ueber Mollie, um zu bestaetigen, dass alles Ende-zu-Ende funktioniert.

### Stripe-Zahlungseinstellungen

Sobald Stripe verbunden und das Onboarding (KYC) abgeschlossen ist, erscheinen ein **Betaalknop op facturen**-Schalter und ein **Betaalmethoden**-Bereich auf der Stripe-Karte. Der Schalter aktiviert oder deaktiviert die Stripe-Zahlungsschaltflaeche auf allen Rechnungen, ohne Stripe zu trennen. Die Methodenliste, abgeglichen mit den Capabilities Ihres Stripe-Kontos, laesst Sie waehlen, welche Zahlungsmethoden Ihre Kunden beim Checkout sehen (Karte, iDEAL, Bancontact, SEPA-Lastschrift, PayPal, Klarna, Link by Stripe). Entfernen Sie alle Haekchen, um zur automatischen Methodenauswahl durch Stripe Checkout zurueckzukehren. Mit **Open Stripe Dashboard** werden Sie direkt zu Ihren Stripe-Zahlungsmethodeneinstellungen verlinkt, um Ihre Integration zu ueberpruefen und Zahlungen zu testen.
