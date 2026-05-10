---
title: "Stop recurring"
last_verified: 2026-05-09
chatbot:
  triggers: ["stop recurring", "cancel recurring", "pause recurring", "disable recurring", "end recurring", "terugkerend stoppen", "terugkerend annuleren", "wiederkehrend stoppen", "arreter recurrent"]
  actions:
    - { label: "Open recurring invoices", to: "/recurring-invoices" }
    - { label: "Open recurring expenses", to: "/recurring-expenses" }
  follow_up: ["How do I edit a recurring item?", "How do I create a new recurring invoice?"]
---

Pour arrêter ou suspendre un élément récurrent :
1. Allez dans Factures récurrentes (ou Dépenses)
2. Ouvrez l'élément récurrent
3. Cliquez sur « Modifier » et définissez une date de fin, ou désactivez
4. Enregistrez - aucun élément supplémentaire ne sera généré
