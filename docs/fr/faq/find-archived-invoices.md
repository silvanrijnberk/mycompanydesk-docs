---
title: "Trouver les factures archivées"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "where are archived invoices"
    - "where can i find archived invoices"
    - "where do i find archived invoices"
    - "invoice archive"
    - "archived invoices"
    - "gearchiveerde facturen"
    - "facturen archief"
    - "waar vind ik mijn gearchiveerde facturen"
    - "archivierte rechnungen"
    - "archivierten rechnungen"
    - "rechnungen archiv"
    - "wo finde ich archivierte rechnungen"
    - "wo finde ich meine archivierten rechnungen"
    - "factures archivees"
    - "mes factures archivees"
    - "archives factures"
    - "ou trouver les factures archivees"
  actions:
    - { label: "Open invoices", to: "/invoices?view=archived" }
  follow_up:
    - "Where do I find deleted invoices?"
    - "How do I search invoices?"
    - "How do I cancel an invoice?"
---

Les factures archivées se trouvent dans Factures -> Archives. Si vous êtes déjà dans la liste des factures, passez à la vue Archives. Les factures supprimées sont dans la Corbeille.
