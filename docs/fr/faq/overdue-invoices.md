---
title: "Factures en retard"
description: "Pour gérer les factures en retard : allez dans Factures, filtrez par statut En retard, triez par échéance et ouvrez-en une pour relancer."
last_verified: 2026-10-13
chatbot:
  triggers: ["overdue invoices", "late invoices", "unpaid invoices", "outstanding invoices", "invoices not paid", "achterstallige facturen", "onbetaalde facturen", "uberfaellige rechnungen", "factures impayees"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I send payment reminders?", "How do I see total outstanding amounts?", "How do I mark an invoice as paid?"]
---

Pour consulter et gérer les factures en retard :
1. Allez dans Factures
2. Le groupe **En retard** se trouve en haut de la liste. Pour n'afficher que ces factures, choisissez le statut « En retard » sous **Filtres**
3. Cliquez sur la colonne Date d'échéance pour trier par échéance
4. Ouvrez une facture pour envoyer un rappel ou afficher les détails

L'onglet **En attente de paiement** indique aussi d'un coup d'œil combien de factures sont en retard, et le tableau de bord vous ramène vers les factures en retard.
