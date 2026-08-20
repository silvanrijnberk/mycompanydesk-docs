---
title: "Geldigheid van offertes"
last_verified: 2026-07-02
chatbot:
  triggers: ["quote validity", "valid until quote", "quote expiry", "quote expiration", "how long quote valid", "quote valid days", "geldigheid offerte", "offerte geldig", "angebotsgultigkeit", "devis validite", "validez devis", "validez cotizacion", "validade proposta"]
  actions:
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How does quote numbering work?", "How do I edit valid-until per quote?", "How do I preview the final PDF?"]
---

De geldigheid van offertes is één instelling:
1. Ga naar Instellingen → "Facturen en offertes"
2. Kies onder "Hoe lang blijft een offerte geldig?" voor 2 weken, 1 maand of 2 maanden
3. Wijzigingen worden automatisch opgeslagen

Nieuwe offertes krijgen hun geldig-tot-datum op basis van deze keuze. Is die datum voorbij, dan staat de offerte als Verlopen in je offertelijst.

Tip: De status Verlopen verschijnt vanzelf, je hoeft offertes niet zelf bij te werken.
