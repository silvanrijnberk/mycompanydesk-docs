---
title: Quote validity
last_verified: 2026-05-09
chatbot:
  triggers: ["quote validity", "valid until quote", "quote expiry", "quote expiration", "how long quote valid", "quote valid days", "geldigheid offerte", "offerte geldig", "angebotsgultigkeit", "devis validite", "validez devis", "validez cotizacion", "validade proposta"]
  actions:
    - { label: "Open company setup", to: "/company?section=invoicing" }
    - { label: "Open Branding & Documents", to: "/company?section=brandingDocuments" }
  follow_up: ["Where do I change numbering format?", "How do I edit valid-until per quote?", "How do I preview the final PDF?"]
---

La validite des devis se regle a deux endroits :
1. Allez dans Entreprise → Facturation et reglez-y « Validite du devis » pour la periode par defaut
2. Allez dans Entreprise → Image de marque & documents si vous devez aussi aligner le reglage document « Validite du devis (jours) »
3. Les modifications dans les deux sections s enregistrent automatiquement

Astuce : alignez ces deux reglages pour que le comportement et le PDF correspondent.
