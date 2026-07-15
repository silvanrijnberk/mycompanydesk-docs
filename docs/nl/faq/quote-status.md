---
title: "Offertestatus"
last_verified: 2026-07-02
chatbot:
  triggers: ["quote status", "quote statuses", "quote lifecycle", "draft open sent canceled", "offerte status", "angebotsstatus", "statut devis", "estado cotizacion", "status proposta"]
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I mark a quote as finalized?", "How do I mark as sent?", "How do I convert to invoice?"]
---

De offertestatussen op een rij:
• Concept: nog te bewerken, nog niet naar de klant verstuurd
• Verzonden: bij de klant afgeleverd
• Geaccepteerd: de klant is akkoord met de offerte
• Geweigerd: de klant heeft de offerte afgewezen
• Verlopen: de geldig-tot-datum is verstreken; dit wordt automatisch getoond

Op de offertedetailpagina zie je de huidige fase als een lifecycle-kaart: Concept → Verzonden, gevolgd door Geaccepteerd of Geweigerd als beslissingsvertakking. Verlopen en geannuleerde offertes worden aan het einde van de flow als eindresultaat getoond.

Zet je een geaccepteerde offerte om naar een factuur, dan blijft de offerte Geaccepteerd en krijgt die de markering "Omgezet naar factuur".

Tip: Gebruik de filters in de offertelijst om eerst naar concepten en verlopen offertes te kijken.
