---
title: "Exporter en PDF"
last_verified: 2026-07-02
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
    - { label: "Open logo and colour", to: "/settings/uiterlijk" }
    - { label: "Open invoice design", to: "/settings/factuurontwerp" }
  follow_up:
    - "How do I change the PDF style?"
    - "How do I send an invoice by email?"
---

Pour exporter ou télécharger un PDF :
1. Ouvrez la facture depuis la liste
2. Cliquez sur le bouton d'aperçu ou de téléchargement du PDF
3. Le PDF utilise votre logo, votre couleur et votre mise en page depuis Paramètres → "Logo et couleur" et Paramètres → "Mise en page des factures"

Astuce : définissez votre logo et votre couleur dans Paramètres → "Logo et couleur", et choisissez la mise en page, les couleurs et la police de vos factures dans Paramètres → "Mise en page des factures".
