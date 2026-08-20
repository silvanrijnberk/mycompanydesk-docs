---
title: "Factuurnummer"
description: "Factuurnummers worden automatisch toegekend: maak een factuur; MyCompanyDesk nummert die netjes op volgorde, zoals de Belastingdienst het wil."
last_verified: 2026-08-05
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Reset invoice numbering", to: "/settings/opzeggen" }
  follow_up: ["How do I set up my company settings?", "How do I change the PDF style?", "How do I create my first invoice?"]
---

Factuurnummers worden automatisch toegekend:
1. Maak een factuur; MyCompanyDesk nummert die netjes op volgorde, zoals de Belastingdienst het wil
2. Er is geen nummeringsformaat om in te stellen
3. Wil je een eigen nummer op een concept? Open de factuur in het formulier en klik in de zijbalk op "Eigen nummer invoeren"
4. Wil je de reeks opnieuw laten beginnen? Ga naar Instellingen → "Account opzeggen" en gebruik "Factuurnummering resetten"

## Handmatige nummeringsmodus

Standaard nummert MyCompanyDesk facturen automatisch. Als je werkruimte handmatige nummering gebruikt, krijgt een factuur pas een nummer wanneer je hem afrondt, verstuurt of als verstuurd markeert.

Op dat moment opent een dialoog waarin je het factuurnummer invult. MyCompanyDesk toont het volgende nummer in je reeks als suggestie, maar je mag elk nummer invoeren dat je wilt. Het nummer is verplicht en moet uniek zijn.

Tip: Concepten hebben nog geen definitief nummer. Verwijder testconcepten voordat je ze afrondt, dan blijft je reeks zonder gaten.
