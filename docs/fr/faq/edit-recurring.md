---
title: "Edit a recurring invoice"
last_verified: 2026-08-15
chatbot:
  triggers:
    - "edit recurring"
    - "change recurring"
    - "update recurring"
    - "modify recurring frequency"
    - "change frequency"
    - "terugkerend bewerken"
    - "frequentie wijzigen"
    - "wiederkehrend bearbeiten"
    - "modifier recurrent"
  actions:
    - { label: "Open recurring invoices", to: "/recurring-invoices" }
  follow_up:
    - "How do I stop a recurring invoice?"
    - "How do I create a new recurring invoice?"
---

Pour modifier un élément récurrent :
1. Allez dans Factures récurrentes (ou Dépenses)
2. Ouvrez l'élément récurrent
3. Cliquez sur « Modifier »
4. Modifiez le montant, la fréquence, le client ou les lignes
5. Enregistrez - les futures générations utiliseront le modèle mis à jour

Remarque : les modifications ne concernent que les factures/dépenses futures. Les éléments déjà créés restent inchangés.

Remarque : si vous modifiez la date de début avant la création du premier élément, la prochaine date planifiée est déplacée en conséquence. Une fois le premier élément créé, la date de début ne modifie plus le calendrier.
