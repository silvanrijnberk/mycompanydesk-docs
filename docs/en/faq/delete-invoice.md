---
title: "Delete an invoice"
description: "Delete a draft invoice via More and Delete. A finalized invoice cannot be deleted; mark it as canceled instead."
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
1. Open the draft invoice you want to remove
2. Click "More" at the top (on your phone, the menu with the three dots)
3. Choose "Delete"
4. Confirm the deletion

Only a draft that has no invoice number yet can be deleted. Even then it happens in stages: active becomes Archive, archived becomes Trash. The draft is only gone for good once you select it in the Trash and choose "Delete permanently", or click "Empty trash".

A finalized invoice (one with an invoice number) cannot be deleted or archived: it has to stay in your records. To withdraw it, choose "Mark as Canceled" in the same menu (not available on a paid invoice), or create a credit note.

If you delete by mistake, open Filters in the invoice list, pick the Archive or Trash view under Show, open the invoice and choose "Restore to active" before it reaches the last stage.
