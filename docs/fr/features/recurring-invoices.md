---
title: Factures recurrentes
description: "Créez des modèles de facture qui se génèrent selon un calendrier : forfaits mensuels, abonnements, loyers et contrats de maintenance."
---

# Factures recurrentes

Automatisez votre facturation reguliere en configurant des factures qui se generent selon un calendrier.

## Vue d'ensemble

Les factures recurrentes sont des modeles qui creent automatiquement de nouvelles factures a des intervalles definis. Ideal pour :

- Les abonnements mensuels
- La facturation d'abonnements
- L'encaissement des loyers
- Les contrats de maintenance
- Les honoraires de conseil reguliers

## Creer une facture recurrente

1. Allez dans **Factures recurrentes > Nouveau**
2. Remplissez le modele :
   - **Client** -- A qui facturer
   - **Lignes de facturation** -- Ce qu'il faut facturer (descriptions, montants, TVA)
   - **Frequence** -- A quelle frequence (hebdomadaire, mensuelle, trimestrielle, annuelle)
   - **Date de debut** -- Quand commencer la generation
3. Cliquez sur **Enregistrer**

::: tip Plus d'options
Dans le formulaire de nouvelle facture recurrente, les champs optionnels restent ranges sous **Plus d'options**. Les notes s'y trouvent par defaut; depliez la section pour les ajouter.
:::

La facture recurrente est creee avec le statut **Active** et generera sa premiere facture a la prochaine date programmee.

## Lignes de facturation

Les lignes des factures recurrentes fonctionnent comme les lignes des factures normales :
- Chaque ligne doit avoir une description. Si la description est trop longue, le formulaire affiche une erreur de validation.
- Chaque ligne peut beneficier d'une remise en pourcentage ou d'un montant fixe.
- Une remise en pourcentage ne peut pas depasser 100 %.
- Une valeur de remise ne peut pas etre negative.

## Options de paiement et détails de facture

Une facture récurrente peut porter les mêmes champs de document qu'une facture normale. Sous **Options de paiement**, choisissez le moyen de paiement de cette série. Tant que vous n'avez rien choisi, chaque facture suit les réglages de paiement de votre entreprise, si bien qu'un changement sous Paramètres → Paiement se répercute tout seul sur la série. Une fois le choix fait, le bouton **Utiliser le réglage par défaut de votre entreprise** le retire. La note de paiement fonctionne pareil.

Sous **Détails de la facture**, réglez ce que porte chaque facture de la série : **l'autoliquidation de la TVA**, la **Référence**, le **Projet** et l'**Actif** auquel la facturation se rapporte, plus l'interrupteur qui cache cette série à votre comptable. MyCompanyDesk suggère l'autoliquidation quand un client ressemble à une entreprise de l'UE hors des Pays-Bas, et vous alerte si le client n'a pas de numéro de TVA. L'autoliquidation exige le numéro de TVA du client : sans lui, le formulaire refuse d'enregistrer la série ; si le numéro a disparu plus tard, la génération garde cette facture comme brouillon sans numéro et vous en avertit, pour qu'aucune facture invalide ne parte jamais toute seule.

Tout ce que vous réglez ici est reporté tel quel sur chaque facture que la série crée. Les factures déjà générées gardent ce qu'elles ont reçu alors ; voir [l'autoliquidation](/fr/faq/reverse-charge) pour les cas où ce traitement s'applique.

## Options de frequence

| Frequence | Description |
|---|---|
| **Hebdomadaire** | Tous les 7 jours |
| **Mensuelle** | Le meme jour chaque mois |
| **Trimestrielle** | Tous les 3 mois |
| **Annuelle** | Une fois par an |

## Mode d'envoi

Sous **Après la création**, la série décide ce que devient chaque facture qu'elle produit :

- **Brouillon** : la facture reste en brouillon. Vous la vérifiez et l'envoyez vous-même.
- **Envoyer** : vous recevez une notification et la facture part chez le client un jour plus tard, sauf si vous la retenez dans ce délai. Une facture retenue reste dans l'application, prête à repartir.
- **Prélever** : comme pour Envoyer, et le montant est aussi prélevé via le mandat de prélèvement du client. Ce mandat se met en place une fois pour toutes sur un contrat avec ce client ; voir [Prélèvement automatique](/fr/features/contracts#automatic-collection).

Le formulaire précise tout seul quand un choix n'est pas possible : Envoyer exige un client avec une adresse e-mail, et Prélever un mandat de prélèvement valide.

## Période sur la facture

Chaque série choisit ce que ses lignes disent de la période qu'elles facturent :

- **Aucune** : les lignes figurent sur la facture telles que vous les avez écrites.
- **Période en cours** : la période qui contient la date de facture.
- **Période précédente** : la période avant la date de facture (à terme échu).
- **Période suivante** : la période après la date de facture (à l'avance).

Le formulaire montre un aperçu de la ligne sur la prochaine facture. Laissez Aucune quand la description en dit déjà assez au client.

## Durée

Sous **Durée**, vous décidez combien de temps la série travaille :

- **Sans fin** : la série ne se termine pas.
- **Jusqu'à une date** : la série s'arrête après cette date. Une facture sort encore pour une période qui commence à cette date ou avant, pour que la dernière période ne se perde pas : à terme échu, la facture de juin part encore le 1er juillet quand la série va jusqu'au 30 juin.
- **Un nombre de fois** : la série s'arrête après autant de factures. La page compte combien sont déjà passées.

Une fois arrivée à son terme, la série se met en veille toute seule et une notification nomme la dernière facture qu'elle a créée.

## Augmentation annuelle des prix

Une facture récurrente peut augmenter elle-même le prix de ses lignes, une fois par an. Ouvrez la facture récurrente et activez **Augmentation annuelle des prix** :

- **Augmenter selon** : l'indice des prix à la consommation du CBS (IPC), ou un pourcentage fixe.
- **Chaque année le** : le jour et le mois où l'augmentation prend effet chaque année.
- **Prévenir le client par e-mail** : combien de mois à l'avance le client reçoit l'e-mail.

L'augmentation travaille ligne par ligne : le prix de chaque ligne augmente du pourcentage choisi, arrondi au centime, et les composants de forfait sous une ligne suivent.

Environ une semaine avant l'échéance de l'annonce, vous recevez une notification avec les montants attendus et un aperçu de l'e-mail ; un clic suffit pour passer l'année. Ne faites rien, et le reste suit tout seul : le jour de l'envoi, le client reçoit l'annonce depuis votre propre adresse e-mail, et à la date d'effet, exactement les lignes promises dans cet e-mail passent au nouveau prix, en une seule fois. Une ligne ajoutée après l'e-mail, ou dont vous avez mis le prix à la main, garde le prix que vous lui avez donné.

Les factures des périodes d'avant la date d'effet gardent les anciens prix, même quand elles sont créées après. Une période facturée à l'avance reçoit les nouveaux prix dès que le client a été prévenu. L'e-mail d'annonce ne parle de montants hors TVA que là où la TVA s'applique, et nomme la première facture qui portera les nouveaux prix.

Si l'annonce ne peut pas partir avant la date d'effet, l'augmentation ne va pas au bout et une notification vous dit pourquoi. La carte garde un petit historique : augmentations appliquées, années passées, années sans hausse de l'IPC.

L'augmentation tourne sur une facture récurrente active avec au moins une ligne. Une série en pause ne planifie rien et le dit sur la carte. Si les augmentations automatiques ne sont pas incluses dans votre abonnement, vous pouvez toujours ajuster les prix des lignes vous-même.

## Gérer les factures récurrentes

### Mettre en pause

Arretez temporairement la generation de factures :

1. Ouvrez la facture recurrente
2. Cliquez sur **Mettre en pause**
3. Le statut passe a **En pause** -- aucune facture n'est generee

### Reprendre

Redemarrez une facture recurrente en pause :

1. Ouvrez la facture recurrente en pause
2. Cliquez sur **Reprendre**
3. La generation reprend a partir de la prochaine date programmee

### Modifier

La modification d'une facture recurrente n'affecte que les factures **futures**. Les factures deja generees ne sont pas modifiees.

### Supprimer

Supprimez le modele recurrent entierement. Les factures precedemment generees restent dans vos archives.

## Factures generees

A chaque declenchement d'une facture recurrente, une nouvelle facture est creee :

- Elle utilise les lignes et le client du modele
- Elle recoit le prochain numero de facture automatique
- Ce qui arrive ensuite suit le mode d'envoi de la série : la facture reste en brouillon, part un jour plus tard sauf si vous la retenez, ou son montant est aussi prélevé via le mandat de prélèvement
- Chaque facture generee est independante -- vous pouvez la modifier sans affecter le modele

### Periodes de TVA verrouillees

Si la date programmee tombe dans une periode de TVA deja declaree et verrouillee, MyCompanyDesk ne cree **pas** de facture. Cette periode est ignoree de maniere permanente pour la generation automatique (reessayer ne reussirait jamais de lui-meme), et le planning passe a la prochaine echeance. Vous recevez une notification pour decider : creez une facture a date actuelle pour le client, ou declarez le chiffre d'affaires via une declaration rectificative.

Un modele en pause ou recomment relance est particulierement susceptible de rencontrer ce cas, car la prochaine date programmee peut se retrouver en retard sur le dernier trimestre declare.

## Consulter l'historique

La page de detail de la facture recurrente affiche toutes les factures precedemment generees, vous permettant de suivre l'historique complet de facturation.

## Lien source

Si une facture a été générée à partir d'un modèle récurrent, la page de détail de la facture affiche un bandeau **Créé automatiquement depuis une facture récurrente** avec un lien vers ce modèle. Vous pouvez ainsi passer d'une facture individuelle au modèle qui l'a produite en un clic.

## Actions groupees

- **Mettre en pause / Reprendre** -- Basculez plusieurs factures recurrentes
- **Supprimer** -- Supprimez plusieurs modeles

## Que se passe-t-il si ma formule change ?

Les factures récurrentes font partie de la formule Office. En montant de version de Desk vers Office, la génération automatique démarre à la prochaine échéance. Si vous rétrogradez d'Office vers Desk, la génération se met en pause automatiquement. Le modèle et les factures déjà créées restent dans votre espace de travail, et le planning reprend lors d'une nouvelle montée de version.

## Conseils

- Combinez avec les [contrats](/fr/features/contracts) pour la facturation contractuelle
- Examinez les factures generees avant le premier envoi automatique pour vous assurer que tout est correct
- Utilisez l'apercu de la prochaine occurrence pour voir quand la prochaine facture sera creee
- Consultez le compteur d'actifs et les indicateurs en haut de la page
