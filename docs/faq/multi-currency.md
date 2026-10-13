---
title: "Meerdere valuta"
description: "Je administratie rekent in euro's. Facturen, offertes en rapportages staan in EUR; bonnen in een vreemde valuta worden omgerekend naar een eurobedrag."
last_verified: 2026-10-13
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I set up my company settings?", "How do I change my language?"]
---

MyCompanyDesk houdt je administratie in euro's. Facturen, offertes en rapportages staan allemaal in EUR. Er is geen valuta-instelling en geen valutakeuze per document; dit is een bewuste productkeuze, geen ontbrekende voorkeur.

Uitgavedocumenten in een andere valuta worden wel ondersteund. Een bon uit het buitenland of een leveranciersfactuur in dollars of ponden wordt opgeslagen met de originele munt en het bedrag op het document, terwijl de uitgave zelf een eurobedrag voor je boeken meedraagt: het scanscherm vraagt om het eurobedrag waarvoor je bank het document omrekent, en een betaling die op een gekoppelde bankrekening opduikt, rekent de uitgave af op wat de bank werkelijk heeft afgeschreven. Zie Vreemde valuta bij [Uitgaven](/features/expenses#vreemde-valuta).

Factureer je een klant in het buitenland, dan blijft de factuur gewoon in euro's.

Tip: Spreek vooraf met buitenlandse klanten af dat je in euro's factureert. Zij betalen het eurobedrag en een eventuele omrekening gebeurt aan hun kant.
