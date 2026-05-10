---
title: "Quote numbering"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "quote number"
    - "quote numbering"
    - "change quote number"
    - "quote format"
    - "offerte nummer"
    - "offertenummer"
    - "angebotsnummer"
    - "numerotation devis"
    - "numero cotizacion"
    - "numero proposta"
    - "numero preventivo"
  actions:
    - { label: "Open company setup", to: "/company?section=invoicing" }
  follow_up:
    - "How do I set quote validity?"
    - "How do I edit a quote number safely?"
    - "How do I create a new quote?"
---

La numerotation des devis utilise les reglages de facturation :
1. Allez dans Configuration entreprise → Facturation
2. Definissez prefixe, numero suivant et format
3. Les nouveaux devis suivent cette sequence
