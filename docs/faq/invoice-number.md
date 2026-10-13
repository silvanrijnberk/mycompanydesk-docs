---
title: "Factuurnummer"
description: "Factuurnummers worden automatisch toegekend: MyCompanyDesk nummert je facturen netjes op volgorde, zoals de Belastingdienst het wil."
last_verified: 2026-08-05
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Reset invoice numbering", to: "/settings/gegevens-wissen" }
  follow_up: ["How do I set up my company settings?", "How do I change the PDF style?", "How do I create my first invoice?"]
---

Factuurnummers worden automatisch toegekend:
1. Maak een factuur en maak hem definitief; MyCompanyDesk geeft hem dan het volgende nummer, netjes op volgorde, zoals de Belastingdienst het wil
2. Kom je over van een ander pakket? Stel bij Instellingen › "Facturen en offertes" onder "Nummering" een "Voorvoegsel" en je "Eerstvolgende factuurnummer" in. Dat nummer kun je alleen vooruit zetten, nooit terug
3. Wil je een eigen nummer op een concept? Open de factuur in het formulier en klik in de zijbalk op "Eigen nummer invoeren". Het nummer moet uniek zijn
4. Wil je een zelf ingesteld eerstvolgend nummer weer kwijt? Ga naar Instellingen › "Gegevens wissen" en kies "Factuurnummering terugzetten". Nieuwe facturen gaan dan automatisch verder na het hoogste nummer van dit jaar

Tip: Concepten hebben nog geen definitief nummer. Verwijder testconcepten voordat je ze afrondt, dan blijft je reeks zonder gaten.
