---
title: Transmission au comptable
description: "Transmettez factures et dépenses automatiquement au logiciel de votre comptable, comme Exact, SnelStart, Twinfield ou Yuki, au lieu d'un envoi manuel."
last_verified: 2026-10-13
---

# Transmission au comptable

Si votre comptable travaille dans son propre logiciel, comme Exact, SnelStart, Twinfield ou Yuki, vous pouvez faire envoyer automatiquement factures et dépenses par MyCompanyDesk. Cela évite d'envoyer les pièces une par une par e-mail.

## Où la trouver

Allez dans **Paramètres › Votre comptable** (`/settings/boekhouder`). Sous la liste de contacts se trouve la carte **Transmission automatique**.

La transmission automatique fait partie d'**Office**. Sur Desk, vous voyez à cet endroit un bouton pour changer d'abonnement. Envoyer une pièce à la main à votre comptable (voir plus bas) fonctionne sur tous les abonnements, et l'accès comptable est lui aussi gratuit sur tous les abonnements.

## Ce que vous pouvez régler

Chaque membre de l'espace de travail peut voir les réglages ; seuls les administrateurs d'équipe peuvent les modifier.

| Réglage | Options |
|---|---|
| **Destinataire** | Choisir un contact comptable existant, ou aucun |
| **Factures de vente** | Désactivé, à l'envoi, ou au paiement |
| **Dépenses** | Désactivée, ou à la création |
| **Fréquence** | Directement, quotidiennement, hebdomadaire (lundi), mensuel ou trimestriel |
| **Uniquement les dépenses avec justificatif** | Retenir les dépenses sans justificatif |
| **Joindre les justificatifs** | Inclure les images de justificatifs en pièce jointe |
| **Joindre le PDF de la facture** | Inclure le PDF de la facture |
| **Inclure aussi les devis** | Inclure également les devis acceptés |
| **Transmission automatique activée** | Interrupteur principal |

Le rythme par défaut pour la plupart des cabinets est hebdomadaire le lundi, car un seul e-mail regroupé est plus facile à traiter qu'un message par pièce.

### Déductibilité dans l'export

Le fichier `uitgaven.csv` de l'export transféré se termine par une colonne indiquant le pourcentage de déduction de la catégorie. Cela remplace l'ancienne colonne « Déductible » Oui/Non : le pourcentage indique exactement au comptable quelle part de la TVA est déductible, et le montant de TVA déductible figure toujours sur la même ligne, de sorte que le détail par ligne correspond au récapitulatif TVA.

Le fichier `leesmij.txt` inclus explique que ce pourcentage ne couvre qu'une partie de l'écart entre la TVA sur le justificatif et le montant récupéré sur la déclaration. D'autres facteurs, comme la TVA d'autoliquidation, la TVA étrangère ou l'usage privé, peuvent aussi modifier le montant déductible. Si le comptable veut vérifier une ligne, il peut ouvrir la dépense dans l'application pour voir le traitement de TVA.

### Obligation de justificatif

Quand **Uniquement les dépenses avec justificatif** est activé, les dépenses sans justificatif ne sont pas transmises. Elles restent dans l'espace de travail et le nombre est indiqué dans l'e-mail de transmission, pour que vous sachiez ce qui manque encore. Votre comptable a besoin du justificatif pour récupérer la TVA, donc ce commutateur empêche les pièces incomplètes de quitter l'espace de travail.

## Permission de modifier les réglages

Seuls les administrateurs d'équipe peuvent modifier les listes déroulantes, les cases à cocher et l'interrupteur principal. Les non-administrateurs voient les réglages actuels mais ne peuvent pas enregistrer de modifications.

## Ce qui est transmis

Seules les pièces prêtes pour un comptable quittent l'espace de travail :

- Non cachées au comptable.
- Non en attente de validation (éléments bancaires ou de boîte de réception que vous n'avez pas encore confirmés).
- Non mis à la corbeille ni archivés.
- Les factures doivent être envoyées; les brouillons ne sont pas transmis.
- Si l'obligation de justificatif est activée, les dépenses doivent avoir un justificatif.

Le transfert retient jusqu'à quel moment tout a été livré et reprend ensuite tout ce qui s'ajoute : aucune pièce n'est oubliée, même si un nouveau mode de paiement apparaît plus tard.

## Journal de livraison et activité

La page **Votre comptable** conserve sous **Derniers envois** un journal de livraison indiquant ce qui a été transmis et quand. Elle enregistre également une vue d'ensemble de l'activité du comptable connecté : ce qu'il a consulté ou modifié dans l'espace de travail. Les deux journaux sont visibles par les propriétaires et les administrateurs ; le comptable peut voir le journal de livraison mais ne peut pas l'effacer.

## Transmission manuelle depuis une pièce

Vous pouvez aussi envoyer une seule facture, dépense ou devis à votre comptable depuis sa page de détail, sur tous les abonnements. Cherchez le bouton **Envoyer au comptable** près des actions e-mail. Cela enregistre une livraison manuelle dans le même journal, pour que vous la voyiez à côté de la transmission automatique. Les envois manuels échoués sont aussi enregistrés, afin que vous ne renvoyiez pas la même pièce par inadvertance.

## Éléments envoyés

Les envois manuels et les autres e-mails de l'espace de travail apparaissent dans la boîte **Envoyé** de votre boîte de réception. Ils sont regroupés sous la catégorie comptable, pour que vous voyiez d'un coup d'œil quels documents ont déjà quitté l'espace de travail.

## Voir aussi

- [Personnes ayant accès et votre comptable](/fr/settings/team) pour inviter votre comptable et choisir un contact (dans l'application : **Paramètres › Votre comptable**)
- [Factures](/fr/features/invoices) pour envoyer et gérer les factures de vente
- [Dépenses](/fr/features/expenses) pour ajouter des justificatifs et des dépenses
- [Devis](/fr/features/quotes) pour créer et convertir des devis
