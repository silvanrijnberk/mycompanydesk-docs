---
title: "Zahlungsmethoden"
last_verified: 2026-07-02
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
    - { label: "Open payment settings", to: "/settings/betalen" }
  follow_up:
    - "How do I add my bank details?"
    - "How do I change the PDF template?"
---

So verwalten Sie Zahlungsmethoden auf Dokumenten:
1. Gehen Sie zu Einstellungen und öffnen Sie „Zahlung"
2. Tragen Sie Ihre IBAN ein, um die Banküberweisung anzubieten; eine eingetragene IBAN aktiviert sie automatisch und setzt einen Zahlungs-QR-Code auf Ihre Rechnungen
3. Aktivieren Sie PayPal und geben Sie Ihre PayPal-E-Mail-Adresse ein, wenn Sie das anbieten möchten
4. Verbinden Sie Mollie oder Stripe, wenn Kunden online bezahlen sollen, zum Beispiel mit iDEAL
5. Änderungen auf dieser Seite werden automatisch gespeichert

Die aktivierten Methoden erscheinen unten auf Ihren Rechnungen.

## Online-Zahlungsanbieter

Sie können Ihr eigenes Mollie- oder Stripe-Konto verbinden, damit Kunden Rechnungen direkt online bezahlen können. Das Geld geht direkt auf Ihr Konto. MyCompanyDesk stellt nur die Verbindung her.

So verbinden Sie einen Anbieter:
1. Gehen Sie zu **Einstellungen → Zahlung**
2. Klicken Sie unter **Online betalingen** auf **Verbind Mollie** oder **Verbind Stripe**
3. Folgen Sie dem OAuth-Vorgang zur Autorisierung Ihres Kontos
4. Nach der Verbindung enthält jede versendete Rechnung einen Zahlungslink für Ihre Kunden

Mollie unterstützt iDEAL, Bancontact, Kreditkarte und Banküberweisung, ideal für niederländische und belgische Kunden. Stripe Connect unterstützt Karte, Apple Pay, Google Pay und SEPA-Lastschrift, geeignet für internationale Kunden.

## Online-Zahlungsgebühr im kostenlosen Plan

Im kostenlosen Plan fällt für Online-Rechnungszahlungen eine kleine Servicegebühr an. Wenn ein Kunde eine Rechnung online bezahlt, werden 0,50 € über Ihr Mollie- oder Stripe-Konto als Application Fee einbehalten. Online-Zahlungen in Starter und Pro bleiben kostenlos. Der Hinweis wird neben **Online betalingen** auf `/settings/betalen` angezeigt, solange Ihr Arbeitsbereich im kostenlosen Plan ist.

Der genaue Betrag wird serverseitig konfiguriert. Der Hinweis in der App zeigt derzeit 0,50 €, passend zu `config.billing.freeTierSurchargeCents` in `apps/api/src/config/env.js`. Über `config.billing.freeTierSurchargeMinInvoiceCents` lässt sich außerdem ein Mindestrechnungsbetrag konfigurieren; ändert sich dieser Wert, müssen diese Seite und der Hinweis in der App gemeinsam aktualisiert werden.

Zum Trennen klicken Sie auf **Loskoppelen** auf der entsprechenden Karte. Wenn in den letzten 24 Stunden Zahlungen eingegangen sind, erscheint eine Warnung, dass möglicherweise noch ausstehende Webhooks eintreffen und dass Rückzahlungen für diese Zahlungen manuell bearbeitet werden müssen. Nach der Trennung können Kunden nicht mehr über diesen Anbieter bezahlen.

### Mollie-Zahlungseinstellungen

Sobald Mollie verbunden ist, erscheinen ein **Betaalknop op facturen**-Schalter und ein **Betaalmethoden**-Bereich auf der Mollie-Karte. Der Schalter aktiviert oder deaktiviert die Zahlungsschaltfläche auf allen Rechnungen, ohne Mollie zu trennen. Die Methodenliste, live aus Ihrem Mollie-Dashboard, lässt Sie auswählen, welche Zahlungsmethoden Ihre Kunden sehen. Mit **Stuur testbetaling** durchlaufen Sie einen kostenlosen €1-Test-Checkout über Mollie, um zu bestätigen, dass alles Ende-zu-Ende funktioniert.

### Stripe-Zahlungseinstellungen

Sobald Stripe verbunden und das Onboarding (KYC) abgeschlossen ist, erscheinen ein **Betaalknop op facturen**-Schalter und ein **Betaalmethoden**-Bereich auf der Stripe-Karte. Der Schalter aktiviert oder deaktiviert die Stripe-Zahlungsschaltfläche auf allen Rechnungen, ohne Stripe zu trennen. Die Methodenliste, abgeglichen mit den Capabilities Ihres Stripe-Kontos, lässt Sie wählen, welche Zahlungsmethoden Ihre Kunden beim Checkout sehen (Karte, iDEAL, Bancontact, SEPA-Lastschrift, PayPal, Klarna, Link by Stripe). Entfernen Sie alle Häkchen, um zur automatischen Methodenauswahl durch Stripe Checkout zurückzukehren. Mit **Open Stripe Dashboard** werden Sie direkt zu Ihren Stripe-Zahlungsmethodeneinstellungen verlinkt, um Ihre Integration zu überprüfen und Zahlungen zu testen.
