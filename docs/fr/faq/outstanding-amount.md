---
title: "Montant impayé"
last_verified: 2026-07-02
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open client report", to: "/reports/clients?tab=outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---

Pour voir le total des montants impayés :
1. Allez dans Factures et filtrez sur Ouvert, Envoyée ou En retard
2. Consultez les totaux dans la liste ou l'en-tête KPI
3. Pour le détail, ouvrez Rapports → Rapport clients et passez à l'onglet "En souffrance"

Astuce : si les totaux semblent incorrects, vérifiez d'abord la période et les filtres de statut.
