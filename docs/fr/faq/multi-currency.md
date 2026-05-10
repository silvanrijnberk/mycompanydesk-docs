---
title: "Multi currency"
last_verified: 2026-05-09
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Open profile preferences", to: "/profile?section=preferences" }
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I change my default currency?", "How do I set up my company settings?"]
---

Comportement actuel pour les devises :
1. Définissez votre devise par défaut dans Mon compte → Préférences
2. Les nouveaux documents utilisent cette valeur par défaut lorsque c'est pris en charge
3. Les factures existantes conservent la devise avec laquelle elles ont été enregistrées

Le formulaire de facture actuel ne propose pas de sélecteur de devise par facture.
