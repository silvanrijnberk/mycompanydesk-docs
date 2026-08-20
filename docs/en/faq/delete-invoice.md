---
title: "Delete an invoice"
description: "To delete an invoice: open the invoice you want to remove, in the sidebar, scroll to the Danger Zone section, click Delete, confirm the deletion."
last_verified: 2026-08-15
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

Only draft invoices can be deleted permanently in one step. For sent or paid invoices, each delete action moves the invoice one stage down: active becomes Archived, archived becomes Trash, and trash becomes permanently gone. Use Cancel if you want to keep the record visible in the invoice list.

If you delete by mistake, check the Archive or Trash views and restore the invoice before it reaches the last stage.
