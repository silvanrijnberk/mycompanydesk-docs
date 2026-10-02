---
title: "Btw verlegd"
description: "Zo maak je een factuur met btw verlegd (EU): ga naar Facturen > Nieuwe factuur, kies je EU-klant en controleer of het btw-nummer bij de klant is ingevuld."
last_verified: 2026-07-02
chatbot:
  triggers: ["reverse charge", "reverse charge invoice", "eu invoice", "intracommunautair", "intracommunity", "btw verlegd", "reverse charge rechnung", "autoliquidation", "intra-community"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer VAT number?", "How does reverse charge affect my VAT return?", "How do I preview an invoice?"]
---

Zo maak je een factuur met btw verlegd (EU):
1. Ga naar Facturen → Nieuwe factuur
2. Kies je EU-klant en controleer of het btw-nummer bij de klant is ingevuld
3. Zet de schakelaar "Btw verlegd" aan op het factuurformulier; MyCompanyDesk stelt dit automatisch voor bij zakelijke EU-klanten
4. De btw op alle factuurregels springt automatisch naar 0% als de schakelaar aan staat, en terug naar het vorige tarief als je hem weer uitzet; je hoeft niets handmatig aan te passen.
5. Bekijk het voorbeeld om de vermelding van de verlegde btw te controleren en verstuur de factuur

Facturen met verlegde btw worden gecontroleerd voordat ze worden verstuurd: de klant moet een btw-nummer hebben en de factuur moet op elke regel 0% (sources/vat-rates.yaml#countries.NL.zero) gebruiken. Deze controles worden ook uitgevoerd als je facturen bulksgewijs afrondt of verstuurt.

Tip: De schakelaar staat altijd op het factuurformulier; je hoeft vooraf niets in je instellingen aan te zetten.

## Uitgaven met verlegde btw

Ontvang je een factuur met verlegde btw van een leverancier, dan moet MyCompanyDesk weten waar de leverancier vandaan komt om de btw in de juiste rubriek van de aangifte te zetten:

- Een Nederlandse leverancier met KVK-nummer of land NL komt in rubriek 2a (binnenlandse verleggingsregeling).
- Een leverancier uit een ander EU-land komt in rubriek 4b (intracommunautaire verwerving).

Ontbreekt het land of het KVK-nummer, dan markeert de controle voor het indienen op de btw-pagina de uitgave en blokkeert het indienen totdat je het aanvult. Open de uitgave, vul het ontbrekende land of KVK-nummer in en voer de controles opnieuw uit.

## Importverleggingsregeling (leveranciers buiten de EU)

Sommige leveranciers buiten de EU rekenen geen Nederlandse btw op hun factuur. Jij moet de btw dan zelf aangeven op je aangifte. In MyCompanyDesk heet dit `import_reverse_charge` en komt het in rubriek 4a, niet 4b.

Gebruik deze behandeling als:

- De leverancier buiten de EU zit.
- De factuur 0% btw toont (sources/vat-rates.yaml#countries.NL.zero) en jij de btw zelf moet aangeven.
- Voorbeelden zijn facturen van Amerikaanse AI-platformen.

Vul het land van de leverancier in en controleer het nettobedrag; MyCompanyDesk zet de zelfberekende btw in de juiste rubriek.
