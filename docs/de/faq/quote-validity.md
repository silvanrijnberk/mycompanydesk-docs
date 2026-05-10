---
title: Quote Validity
last_verified: 2026-05-09
chatbot:
  triggers: ["quote validity", "valid until quote", "quote expiry", "quote expiration", "how long quote valid", "quote valid days", "geldigheid offerte", "offerte geldig", "angebotsgultigkeit", "devis validite", "validez devis", "validez cotizacion", "validade proposta"]
  actions:
    - { label: "Open company setup", to: "/company?section=invoicing" }
    - { label: "Open Branding & Documents", to: "/company?section=brandingDocuments" }
  follow_up: ["Where do I change numbering format?", "How do I edit valid-until per quote?", "How do I preview the final PDF?"]
---

Die Angebotsgueltigkeit stellst du an zwei Stellen ein:
1. Gehe zu Unternehmen → Rechnungsstellung und setze dort „Angebotsgueltigkeit" fuer den Standardzeitraum
2. Gehe zu Unternehmen → Marke & Dokumente, wenn du auch die Dokumenteinstellung „Angebotsgueltigkeit (Tage)" abstimmen willst
3. Aenderungen in beiden Bereichen werden automatisch gespeichert

Tipp: Gleiche beide Einstellungen an, damit Verhalten und PDF uebereinstimmen.
