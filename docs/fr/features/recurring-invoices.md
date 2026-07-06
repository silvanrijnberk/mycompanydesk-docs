---
title: Factures récurrentes
---

# Factures récurrentes

Automatisez votre facturation régulière en configurant des factures qui se génèrent selon un calendrier.

## Vue d'ensemble

Les factures récurrentes sont des modèles qui créent automatiquement de nouvelles factures à des intervalles définis. Idéal pour :

- Les forfaits mensuels
- La facturation d'abonnements
- L'encaissement des loyers
- Les contrats de maintenance
- Les honoraires de conseil réguliers

## Créer une facture récurrente

1. Allez dans **Factures récurrentes > Nouveau**
2. Remplissez le modèle :
   - **Client** : à qui facturer
   - **Lignes de facturation** : ce qu'il faut facturer (descriptions, montants, TVA)
   - **Fréquence** : à quelle fréquence (hebdomadaire, mensuelle, trimestrielle, annuelle)
   - **Date de début** : quand commencer la génération
3. Cliquez sur **Enregistrer**

La facture récurrente est créée avec le statut **Active** et générera sa première facture à la prochaine date programmée.

L'option **Envoi automatique de l'e-mail à la création** est activée par défaut : chaque facture générée est envoyée immédiatement par e-mail au client. Désactivez-la si vous préférez vérifier et envoyer chaque facture vous-même.

## Options de fréquence

| Fréquence | Description |
|---|---|
| **Hebdomadaire** | Tous les 7 jours |
| **Mensuelle** | Le même jour chaque mois |
| **Trimestrielle** | Tous les 3 mois |
| **Annuelle** | Une fois par an |

## Gérer les factures récurrentes

### Mettre en pause

Arrêtez temporairement la génération de factures :

1. Ouvrez la facture récurrente
2. Cliquez sur **Mettre en pause**
3. Le statut passe à **En pause** : aucune facture n'est générée

### Reprendre

Redémarrez une facture récurrente en pause :

1. Ouvrez la facture récurrente en pause
2. Cliquez sur **Reprendre**
3. La génération reprend à partir de la prochaine date programmée

### Modifier

La modification d'une facture récurrente n'affecte que les factures **futures**. Les factures déjà générées ne sont pas modifiées.

### Supprimer

Supprimez entièrement le modèle récurrent. Les factures précédemment générées restent dans vos archives.

## Factures générées

À chaque déclenchement d'une facture récurrente, une nouvelle facture est créée :

- Elle utilise les lignes et le client du modèle
- Elle suit votre numérotation de factures actuelle
- Elle est envoyée automatiquement par e-mail, ou conservée en **Brouillon** à vérifier et envoyer si vous avez désactivé l'envoi automatique
- Chaque facture générée est indépendante : vous pouvez la modifier sans affecter le modèle

## Consulter l'historique

La page de détail de la facture récurrente affiche toutes les factures précédemment générées, vous permettant de suivre l'historique complet de facturation.

## Conseils

- Combinez avec les [contrats](/fr/features/contracts) pour la facturation contractuelle
- Examinez les factures générées avant le premier envoi automatique pour vous assurer que tout est correct
- Utilisez l'aperçu de la prochaine occurrence pour voir quand la prochaine facture sera créée
- Consultez le compteur de factures actives et les indicateurs en haut de la page
