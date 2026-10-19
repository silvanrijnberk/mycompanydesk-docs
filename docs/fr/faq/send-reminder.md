---
title: "Envoyer un rappel"
description: "Pour relancer une facture impayée : ouvrez-la et utilisez l'action Envoyer un rappel. Le rappel indique le montant restant dû."
last_verified: 2026-10-19
chatbot:
  triggers: ["send reminder", "payment reminder", "remind customer", "follow up", "chase payment", "herinnering sturen", "betaalherinnering", "aanmaning", "zahlungserinnerung", "relance", "rappel paiement"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I set up automatic reminders?", "How do I view overdue invoices?", "How do I mark an invoice as paid?"]
---

Pour envoyer un rappel pour une facture impayée :
1. Ouvrez la facture
2. Utilisez l'action « Envoyer un rappel »
3. Vérifiez le message puis envoyez-le

Le rappel indique le montant restant dû (montant total de la facture moins les paiements déjà reçus). Si le client a déjà versé un acompte ou un paiement partiel, le rappel demande le solde, pas le montant total de la facture.

Si votre espace de travail a activé les paiements en ligne, le courriel de rappel offre au client les mêmes options de paiement que la facture d'origine : un bouton **Payer maintenant**, un bouton **Voir la facture**, le bouton **Déjà payé ? Signalez-le** et un QR-code sur le PDF pour scanner et payer. Cela vaut pour les rappels manuels et automatiques.

Vous ne pouvez pas envoyer de rappel lorsque :
- la facture est encore un brouillon
- la facture n'a jamais été envoyée à votre client : un rappel n'est jamais le premier courriel qu'un client reçoit au sujet d'une facture. MyCompanyDesk le refuse ; la facture part d'abord. Dès qu'un paiement est arrivé ou qu'un envoi au client est enregistré, les relances repartent.
- la facture est annulée
- la facture est déjà marquée comme payée
- le client a indiqué dans le portail qu'il a déjà payé et que le statut est Vérification requise ; les relances attendent que vous confirmiez le paiement ou la déclaration rejetée
- il s'agit d'un avoir ou d'une note de remboursement
- la facture a été entièrement créditée par un avoir
- il ne reste plus rien à payer (par exemple, le client a payé pendant que la page était ouverte)

Une déclaration du portail a aussi une fin. Si cinq jours ouvrés passent après la déclaration sans qu'aucun paiement n'arrive, MyCompanyDesk vérifie les faits : avec une connexion bancaire fonctionnelle sur le numéro de compte de la facture, qui ne montre aucun paiement entrant depuis environ la date de facture, la facture revient sur envoyée, la déclaration est effacée, et votre client peut payer ou déclarer à nouveau ; une notification vous dit que cela s'est produit. Dans tout autre cas, MyCompanyDesk vous demande une seule fois si le paiement est arrivé, et laisse la facture en l'état jusqu'à votre décision. Vous pouvez aussi agir vous-même : la page de facture propose **Confirmer le paiement** quand l'argent est là, et **Pas reçu** pour remettre la facture sur envoyée, ce qui fait repartir les relances et permet à votre client de payer ou de déclarer à nouveau.

Quand une facture est en retard, la page de détail propose la prochaine étape sous **Action suggérée** :

- **Envoyer la 1ère relance** : pour les factures en retard qui n'ont pas encore été relancées
- **Envoyer la relance #2** (et suivantes) : pour les factures déjà relancées
- **Envoyer une relance urgente** : pour les factures en retard depuis longtemps. Le bouton ouvre la boîte de dialogue du rappel ; la ligne de détail suggère aussi d'appeler le client ou de proposer un échéancier.
- **Créer un avoir ou une correction** : si le client conteste la facture ou si les montants ont changé

Vous préférez ne pas suivre cela vous-même ? Activez **En retard ? Envoyer automatiquement un rappel** dans Paramètres › **Factures et devis** (Office). Dès qu'une facture a trois jours de retard, MyCompanyDesk envoie de lui-même un rappel aimable, puis à nouveau chaque semaine, jusqu'au nombre de rappels que vous y choisissez. Ensuite, le déroulé ci-dessous prend le relais. Si rien ne bouge, appelez votre client.

## Retards de paiement : la relance finale et les frais de recouvrement

Quand votre client ne paie pas, la loi fixe ce qui peut alors se passer. MyCompanyDesk parcourt ce chemin avec vous :

1. **Les rappels arrivent à leur terme.** Après le nombre de rappels que vous avez fixé, l'envoi s'arrête automatiquement et vous recevez une notification. Les rappels ne coûtent jamais rien à votre client ; ce n'est possible qu'après la relance finale.
2. **La relance finale.** Vous pouvez l'envoyer vous-même depuis la facture, ou MyCompanyDesk l'envoie automatiquement si vous l'activez dans ce même réglage. Le texte est imposé, parce que la loi prescrit ce qu'il doit dire. Son contenu dépend du client : un client particulier voit les frais de recouvrement qui pourront suivre après un délai ; un client entreprise voit le montant forfaitaire et les intérêts légaux, déjà dus. Le caractère professionnel de votre client découle de sa fiche : un client enregistré comme entreprise, sans numéro de Chambre de commerce ni numéro de TVA, est traité comme un particulier.
3. **Le délai.** Après la relance finale, votre client obtient un temps pour payer. La page de la facture indique jusqu'à quand. Si l'e-mail n'est pas arrivé parce que l'adresse ne fonctionne pas, vous ne pouvez pas encore facturer de frais : corrigez d'abord l'adresse et renvoyez, ou expédiez la lettre par la poste et marquez-la comme envoyée.
4. **Facturer les frais.** Quand le délai est passé sans paiement, la page de la facture propose de facturer les frais. MyCompanyDesk prépare une facture brouillon avec les frais de recouvrement (et, pour une entreprise, les intérêts), que vous vérifiez et envoyez. Plusieurs factures impayées d'un même client sont regroupées dans une seule lettre, comme la loi l'exige.

Chaque étape vous envoie une notification, pour que vous sachiez où en est chaque facture en retard. Dans Paramètres › **Factures et devis**, vous réglez aussi combien de rappels sont envoyés et si la relance finale part automatiquement.

Vous modifiez le texte de votre courriel de rappel dans Paramètres › **E-mail** › **E-mails de factures et devis**. Le texte de la relance finale est fixé par la loi et ne peut pas être modifié.
