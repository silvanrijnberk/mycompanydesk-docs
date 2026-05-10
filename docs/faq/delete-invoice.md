---
title: "Delete an invoice"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "delete invoice"
    - "remove invoice"
    - "trash invoice"
    - "erase invoice"
    - "get rid of invoice"
    - "factuur verwijderen"
    - "factuur wissen"
    - "hoe verwijder ik een factuur"
    - "rechnung loschen"
    - "wie losche ich eine rechnung"
    - "supprimer facture"
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up:
    - "How do I cancel an invoice instead?"
    - "How do I find a specific invoice?"
    - "Can I undo a deleted invoice?"
---

To delete an invoice:
1. Open the invoice you want to remove
2. In the sidebar, scroll to the "Danger Zone" section
3. Click "Delete"
4. Confirm the deletion

Only draft invoices can be deleted. For sent or paid invoices, use Cancel so the record stays available in the invoice list.
