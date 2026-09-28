---
title: "Offertestatus"
description: "De offertestatussen op een rij: concept: nog te bewerken, nog niet naar de klant verstuurd, verzonden: bij de klant afgeleverd."
last_verified: 2026-09-28
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

Op de tekenpagina krijgt de klant een duidelijke uitleg als een offerte niet meer getekend kan worden: een offerte waarvan de geldig-tot-datum voorbij is, vraagt de klant om een nieuwe offerte; een offerte die al omgezet is naar een factuur of overeenkomst laat zien dat er niets meer te doen valt; en een offerte die al geaccepteerd is, kan niet meer worden afgewezen. In dat laatste geval wijst de pagina de klant op contact opnemen met jou bij een veranderd idee.

Tip: Gebruik de filters in de offertelijst om eerst naar concepten en verlopen offertes te kijken.
