---
title: "Annuler une facture"
description: "Pour annuler une facture envoyée : ouvrez la facture depuis votre liste de factures."
last_verified: 2026-10-19
chatbot:
  triggers: ["cancel invoice", "void invoice", "annul invoice", "reverse invoice", "credit note", "undo invoice", "factuur annuleren", "factuur ongedaan", "hoe annuleer ik een factuur", "rechnung stornieren", "wie storniere ich eine rechnung", "annuler facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I create a credit note?", "How do I delete a draft invoice?", "How do I view cancelled invoices?"]
---

Pour annuler une facture qui n'est pas encore sortie (une facture finalisée que vous n'avez jamais envoyée, payée ni partagée) :
1. Ouvrez la facture depuis votre liste de factures
2. Ouvrez le menu « Plus » dans l'en-tête de la page (le menu ⋯ sur votre téléphone)
3. Cliquez sur « Marquer comme annulée » et confirmez
4. Le statut de la facture passe à Annulée

L'annulation n'est possible que tant que la facture n'a pas quitté votre bureau : elle ne doit pas avoir été envoyée, payée, ni être parvenue au client via un PDF téléchargé ou partagé. Une telle facture entre dans votre chiffre d'affaires et votre déclaration de TVA, et l'application refuse de la retirer. À cet endroit, la page propose **Créer un avoir / une correction** ; l'avoir annule la facture proprement et reçoit son propre numéro. Voir Avoir.

Les notifications liées à la facture, telles que en retard, échéance ou brouillon, sont également résolues, de sorte que l'action "Envoyer un rappel" n'apparaît plus pour elle dans la cloche. Cela s'applique aussi lorsque vous annulez plusieurs factures à la fois depuis la liste des factures.

Si des paiements ont déjà été enregistrés sur cette facture, le dialogue de confirmation affiche le montant encaissé et vous avertit qu'il doit encore être remboursé au client. Après l'annulation, un message sur la page de détail indique qu'un remboursement est en attente.

Si la facture est déjà entièrement payée, ou si un avoir a déjà été émis dessus, vous ne pouvez pas non plus l'annuler. Ouvrez la facture d'origine et utilisez plutôt « Créer un avoir / une correction ».

Les factures annulées ne peuvent pas faire l'objet d'un avoir. Si vous devez tout de même émettre une correction pour une facture déjà annulée, dupliquez la facture annulée, apportez la correction et renvoyez-la.

L'annulation est différente de la suppression : l'annulation change le statut en Annulée, mais la facture reste visible dans la liste ; la suppression passe par les paliers Archivé et Corbeille avant d'être définitive. La suppression définitive en une seule étape n'est possible que tant qu'un document est encore un brouillon sans numéro.

Une fois une facture annulée, elle n'est plus recouvrable. La page de détail de la facture et le portail client n'affichent plus de solde restant, même si des paiements ont déjà été enregistrés sur la facture. Les paiements déjà enregistrés restent visibles dans l'historique des paiements.

## Téléchargée ou partagée, mais jamais envoyée par e-mail

L'envoi n'est pas la seule façon pour une facture de rejoindre votre client. Si vous avez téléchargé ou partagé le PDF, la facture compte comme remise de la même façon : la page montre « Facture verrouillée : déjà chez votre client », les mentions exigées par la loi deviennent en lecture seule et l'annulation est refusée. Un avoir ou une correction est le chemin du retour, exactement comme pour une facture envoyée.

Astuce : l'annulation conserve le numéro de facture dans votre comptabilité ; la suppression n'est possible que tant qu'un document est encore un brouillon sans numéro.
