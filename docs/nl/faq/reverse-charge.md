---
title: "BTW verlegd"
last_verified: 2026-07-02
chatbot:
  triggers: ["reverse charge", "reverse charge invoice", "eu invoice", "intracommunautair", "intracommunity", "btw verlegd", "reverse charge rechnung", "autoliquidation", "intra-community"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer VAT number?", "How does reverse charge affect my VAT return?", "How do I preview an invoice?"]
---

Zo maak je een factuur met BTW verlegd (EU):
1. Ga naar Facturen → Nieuwe factuur
2. Kies je EU-klant en controleer of het BTW-nummer bij de klant is ingevuld
3. Zet de schakelaar "BTW verlegd" aan op het factuurformulier; MyCompanyDesk stelt dit automatisch voor bij zakelijke EU-klanten
4. De BTW op alle factuurregels springt automatisch naar 0%, je hoeft niets handmatig aan te passen
5. Bekijk het voorbeeld om de vermelding van de verlegde BTW te controleren en verstuur de factuur

Tip: De schakelaar staat altijd op het factuurformulier; je hoeft vooraf niets in je instellingen aan te zetten.

## Uitgaven met verlegde BTW

Ontvang je een factuur met verlegde BTW van een leverancier, dan moet MyCompanyDesk weten waar de leverancier vandaan komt om de BTW in de juiste rubriek van de aangifte te zetten:

- Een Nederlandse leverancier met KVK-nummer of land NL komt in rubriek 2a (binnenlandse verleggingsregeling).
- Een leverancier uit een ander EU-land komt in rubriek 4b (intracommunautaire verwerving).

Ontbreekt het land of het KVK-nummer, dan markeert de controle voor het indienen op de BTW-pagina de uitgave en blokkeert het indienen totdat je het aanvult. Open de uitgave, vul het ontbrekende land of KVK-nummer in en voer de controles opnieuw uit.
