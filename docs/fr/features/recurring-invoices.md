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

La facture recurrente est creee avec le statut **Active** et generera sa premiere facture a la prochaine date programmee.

## Options de frequence

| Frequence | Description |
|---|---|
| **Hebdomadaire** | Tous les 7 jours |
| **Mensuelle** | Le meme jour chaque mois |
| **Trimestrielle** | Tous les 3 mois |
| **Annuelle** | Une fois par an |

## Gerer les factures recurrentes

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
- Elle suit votre numerotation de factures actuelle
- Elle commence en tant que **Brouillon** (a examiner et envoyer) ou est envoyee automatiquement si configure
- Chaque facture generee est independante -- vous pouvez la modifier sans affecter le modele

## Consulter l'historique

La page de detail de la facture recurrente affiche toutes les factures precedemment generees, vous permettant de suivre l'historique complet de facturation.

## Actions groupees

- **Mettre en pause / Reprendre** -- Basculez plusieurs factures recurrentes
- **Supprimer** -- Supprimez plusieurs modeles

## Conseils

- Combinez avec les [contrats](/fr/features/contracts) pour la facturation contractuelle
- Examinez les factures generees avant le premier envoi automatique pour vous assurer que tout est correct
- Utilisez l'apercu de la prochaine occurrence pour voir quand la prochaine facture sera creee
- Consultez le compteur d'actifs et les indicateurs en haut de la page
