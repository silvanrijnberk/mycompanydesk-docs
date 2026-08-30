---
title: "Annuler une facture"
description: "Pour annuler une facture envoyée : ouvrez la facture depuis votre liste de factures."
last_verified: 2026-08-14
chatbot:
  triggers: ["cancel invoice", "void invoice", "annul invoice", "reverse invoice", "credit note", "undo invoice", "factuur annuleren", "factuur ongedaan", "hoe annuleer ik een factuur", "rechnung stornieren", "wie storniere ich eine rechnung", "annuler facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I create a credit note?", "How do I delete a draft invoice?", "How do I view cancelled invoices?"]
---

Pour annuler une facture envoyée :
1. Ouvrez la facture depuis votre liste de factures
2. Dans la barre latérale, faites défiler jusqu'à la section "Zone de danger"
3. Cliquez sur "Marquer comme annulée"
4. Le statut de la facture passe à Annulée

Les notifications liées à la facture, telles que en retard, échéance ou brouillon, sont également résolues, de sorte que l'action "Envoyer un rappel" n'apparaît plus pour elle dans la cloche. Cela s'applique aussi lorsque vous annulez plusieurs factures à la fois depuis la liste des factures.

Si des paiements ont déjà été enregistrés sur cette facture, le dialogue de confirmation affiche le montant encaissé et vous avertit qu'il doit encore être remboursé au client. Après l'annulation, un message sur la page de détail et dans l'aperçu rapide indique qu'un remboursement est en attente.

Si la facture est déjà payée, en tout ou en partie, ouvrez la facture d'origine et utilisez plutôt "Créer un avoir / une correction".

Les factures annulées ne peuvent pas faire l'objet d'un avoir. Si vous devez tout de même émettre une correction pour une facture déjà annulée, dupliquez la facture annulée, apportez la correction et renvoyez-la.

L'annulation est différente de la suppression : l'annulation change le statut en Annulée, mais la facture reste visible dans la liste ; la suppression passe par les paliers Archivé et Corbeille avant d'être définitive. La suppression définitive en une seule étape n'est possible que tant qu'un document est encore un brouillon sans numéro.

Une fois une facture annulée, elle n'est plus recouvrable. La page de détail de la facture, l'aperçu rapide dans la liste des factures et le portail client n'affichent plus de solde restant, même si des paiements ont déjà été enregistrés sur la facture. Les paiements déjà enregistrés restent visibles dans l'historique des paiements.

Astuce : l'annulation conserve le numéro de facture dans votre comptabilité ; la suppression n'est possible que tant qu'un document est encore un brouillon sans numéro.
