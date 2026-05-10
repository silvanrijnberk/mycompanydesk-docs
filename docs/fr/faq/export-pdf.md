---
title: "Export to PDF"
last_verified: 2026-05-09
chatbot:
  triggers:
    - "export pdf"
    - "download pdf"
    - "print invoice"
    - "pdf invoice"
    - "generate pdf"
    - "pdf export"
    - "pdf downloaden"
    - "factuur afdrukken"
    - "factuur downloaden"
    - "rechnung herunterladen"
    - "telecharger pdf"
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open Branding & Documents", to: "/company?section=brandingDocuments" }
  follow_up:
    - "How do I change the PDF style?"
    - "How do I send an invoice by email?"
---

Pour exporter ou télécharger un PDF :
1. Ouvrez la facture depuis la liste
2. Cliquez sur l'aperçu PDF ou le bouton de téléchargement
3. Le PDF utilise votre modèle de Paramètres → Éditeur PDF
