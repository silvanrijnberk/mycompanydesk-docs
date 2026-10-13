---
title: "Trouver les factures supprimées"
description: "Les factures supprimées se trouvent dans Factures : cliquez sur Filtres et choisissez la vue Corbeille sous Afficher."
last_verified: 2026-05-09
chatbot:
  triggers: ["where are deleted invoices", "where can i find deleted invoices", "where do i find deleted invoices", "where can i find trashed invoices", "invoice trash", "trashed invoices", "deleted invoices", "verwijderde facturen", "facturen prullenbak", "waar vind ik mijn verwijderde facturen", "waar staan verwijderde facturen", "geloschte rechnungen", "geloeschte rechnungen", "geloeschten rechnungen", "meine geloeschten rechnungen", "rechnungen papierkorb", "wo finde ich geloschte rechnungen", "wo finde ich geloeschte rechnungen", "wo finde ich meine geloeschten rechnungen", "factures supprimees", "mes factures supprimees", "corbeille factures", "ou trouver les factures supprimees"]
  actions:
    - { label: "Open invoices", to: "/invoices?view=trash" }
  follow_up: ["Where do I find archived invoices?", "How do I restore an invoice from trash?", "How do I search invoices?"]
---

Les factures supprimées se trouvent dans Factures : cliquez sur Filtres au-dessus de la liste et choisissez la vue Corbeille sous Afficher. Sur votre téléphone, utilisez le bouton de filtre en haut. S'il s'agit plutôt de factures archivées, utilisez la vue Archives.

Seuls les brouillons sans numéro de facture peuvent être supprimés ou archivés. Une facture finalisée n'arrive donc jamais dans la Corbeille ; vous la trouvez dans la liste habituelle, même si elle a été annulée.
