---
title: "Gedeeltelijke betaling"
description: "Om een gedeeltelijke betaling op een factuur vast te leggen: open de factuur vanuit de lijst, klik op Betaling vastleggen of de betalingsactie."
last_verified: 2026-10-09
chatbot:
  triggers: ["partial payment", "record partial payment", "half payment", "part payment", "deposit received", "gedeeltelijke betaling", "deelbetaling", "aanbetaling ontvangen", "teilzahlung", "paiement partiel", "acompte recu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as fully paid?", "How do I send a reminder for the remaining balance?", "How do I view all partially paid invoices?"]
---

Om een gedeeltelijke betaling op een factuur vast te leggen:
1. Open de factuur vanuit de lijst
2. Klik op "Betaling vastleggen" of de betalingsactie
3. Voer het ontvangen bedrag in (minder dan het totaal)
4. Sla op - de factuurstatus verandert naar Gedeeltelijk betaald
5. Herhaal wanneer er aanvullende betalingen binnenkomen

Een bedrag hoger dan wat nog openstaat wordt geweigerd: het formulier waarschuwt met "Hoger dan het openstaande bedrag ({amount})" vóór je opslaat, in plaats van tot na de klik een nieuw saldo te tonen. De betaaldatum mag niet in de toekomst liggen, dus het datumveld biedt alleen Vandaag als snelkeuze.

Tip: Het resterende saldo wordt automatisch bijgehouden en verschijnt op de factuurdetailpagina. Gedeeltelijk betaalde facturen krijgen ook hun eigen herinneringsadvies voor het openstaande bedrag. In het klantportaal zien klanten bij gedeeltelijk betaalde facturen ook het al ontvangen bedrag en het openstaande restant voordat ze afrekenen.
