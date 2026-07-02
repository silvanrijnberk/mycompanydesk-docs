---
title: "Validité des devis"
last_verified: 2026-07-02
chatbot:
  triggers: ["quote validity", "valid until quote", "quote expiry", "quote expiration", "how long quote valid", "quote valid days", "geldigheid offerte", "offerte geldig", "angebotsgultigkeit", "devis validite", "validez devis", "validez cotizacion", "validade proposta"]
  actions:
    - { label: "Open invoice settings", to: "/settings/facturen" }
  follow_up: ["How does quote numbering work?", "How do I edit valid-until per quote?", "How do I preview the final PDF?"]
---

La validité des devis se règle à un seul endroit :
1. Allez dans Paramètres → "Factures et devis"
2. Sous "Combien de temps un devis reste-t-il valable ?", choisissez 2 semaines, 1 mois ou 2 mois
3. Les modifications sont enregistrées automatiquement

Les nouveaux devis reçoivent leur date de validité selon ce choix. Une fois cette date dépassée, le devis apparaît comme Expiré dans votre liste de devis.

Astuce : le statut Expiré apparaît automatiquement, vous n'avez pas à mettre à jour vos devis vous-même.
