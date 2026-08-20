---
title: Quote validity
last_verified: 2026-07-02
chatbot:
  triggers: ["quote validity", "valid until quote", "quote expiry", "quote expiration", "how long quote valid", "quote valid days", "geldigheid offerte", "offerte geldig", "angebotsgultigkeit", "devis validite", "validez devis", "validez cotizacion", "validade proposta"]
  actions:
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How does quote numbering work?", "How do I edit valid-until per quote?", "How do I preview the final PDF?"]
---

Quote validity is a single setting:
1. Go to Settings → "Facturen en offertes"
2. Under "Hoe lang blijft een offerte geldig?" (how long does a quote stay valid?), pick 2 weeks, 1 month, or 2 months
3. Changes save automatically

New quotes get their valid-until date from this choice. Once that date passes, the quote shows as Expired in your quote list.

Tip: The Expired status appears automatically, you do not have to update quotes yourself.
