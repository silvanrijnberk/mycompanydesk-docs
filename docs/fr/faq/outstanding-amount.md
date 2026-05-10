---
title: Outstanding amount
last_verified: 2026-05-09
chatbot:
  triggers: ["outstanding amount", "total unpaid", "money owed", "total outstanding", "how much owed", "openstaand bedrag", "totaal onbetaald", "offener betrag", "montant impaye", "somme due"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open outstanding report", to: "/reports/outstanding" }
  follow_up: ["How do I send payment reminders?", "How do I view overdue invoices?", "How do I debug a wrong total?"]
---
Pour consulter le montant total ouvert ou impaye :
1. Allez dans Factures et filtrez sur Ouvert, Envoye ou En retard
2. Verifiez les totaux dans la liste ou l en-tete KPI
3. Pour plus de detail, ouvrez Rapports → En attente

Si les totaux semblent incorrects, verifiez d abord les filtres de date et de statut.
