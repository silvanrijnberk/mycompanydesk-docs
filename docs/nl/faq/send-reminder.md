---
title: Send reminder
last_verified: 2026-08-15
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

Om een herinnering te versturen voor een onbetaalde factuur:
1. Open de factuur
2. Gebruik de actie "Herinnering versturen"
3. Controleer het bericht en verstuur het

De herinnering vermeldt het resterende openstaande bedrag (factuurbedrag minus de al ontvangen betalingen). Heeft de klant een aanbetaling of termijnbetaling gedaan, dan vraagt de herinnering om het restant, niet om het volledige factuurbedrag.

Je kunt geen herinnering versturen als:
- de factuur nog een concept is
- de factuur is geannuleerd
- de factuur al als betaald staat aangemerkt
- de klant via het portaal heeft aangegeven dat hij al betaald heeft en de factuur op 'Klant zegt: betaald' staat
- het een creditnota of refundnota betreft
- er niets meer openstaat (bijvoorbeeld omdat de klant betaalde terwijl de pagina openstond)

Je kunt het herinneringssjabloon ook aanpassen via Instellingen → E-mails.
