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

So exportierst oder lädst du ein PDF herunter:
1. Öffne die Rechnung aus der Liste
2. Klicke auf die PDF-Vorschau oder den Download-Button
3. Das PDF verwendet deine Vorlage aus Einstellungen → PDF-Editor
