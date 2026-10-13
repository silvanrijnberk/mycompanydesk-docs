---
title: Dépenses récurrentes
description: "Automatisez les charges régulières comme le loyer, les abonnements, les assurances et les services avec des modèles qui créent les dépenses."
---

# Dépenses récurrentes

Automatisez le suivi de vos coûts professionnels réguliers, comme le loyer, les abonnements et les charges.

## Vue d'ensemble

Les dépenses récurrentes fonctionnent comme les factures récurrentes, mais pour les coûts. Configurez un modèle et laissez MyCompanyDesk créer automatiquement les dépenses.

Cas d'utilisation courants :

- Loyer du bureau
- Abonnements logiciels
- Primes d'assurance
- Factures d'énergie
- Paiements de leasing

## Créer une dépense récurrente

1. Ouvrez **Récurrent**, onglet **Dépenses**, et cliquez sur **Ajouter une dépense récurrente**
2. Remplissez le modèle :
   - **Nom** : l'objet de la dépense
   - **Fournisseur** : le nom du fournisseur. Pendant la saisie, le champ propose les fournisseurs déjà utilisés et des entreprises du registre néerlandais du commerce (KVK)
   - **Catégorie** : la catégorie de dépense
   - **Description** et, si besoin, un **Projet**
   - Sous **Planification** : la **Fréquence** (hebdomadaire, mensuelle, trimestrielle ou annuelle) et la **Date de début**
   - Sous **Détails de la dépense** : le **Montant HT**, le **Taux de TVA**, la déductibilité de la TVA (**TVA déductible**) et le **Traitement TVA**, c'est-à-dire la façon dont la dépense entre dans votre déclaration de TVA
3. Cliquez sur **Enregistrer**

::: tip Détails de la dépense
Pour une nouvelle dépense récurrente, le bloc **Détails de la dépense** est replié ; dépliez-le pour saisir les montants et la TVA. Quand vous modifiez une dépense récurrente existante, il est ouvert d'emblée.
:::

### Identité du fournisseur

Si vous choisissez dans le champ **Fournisseur** une entreprise sous **Depuis le registre du commerce (KVK)**, le modèle enregistre aussi le numéro KVK et le pays de ce fournisseur, et une étiquette **KVK** apparaît à côté du nom. Cela a deux effets :

- **Les suggestions de fournisseurs** utilisent l'identité enregistrée, ce qui évite de resélectionner le même fournisseur chaque mois.
- **Les dépenses générées** gardent la même identité de fournisseur que le modèle. Ainsi, la logique d'autoliquidation et de TVA à l'importation (par exemple pour des achats intracommunautaires ou hors UE) s'applique automatiquement, comme pour une dépense saisie à la main.

Si vous modifiez plus tard le nom du fournisseur et qu'il ne correspond plus à l'entreprise KVK choisie, le numéro KVK et le pays sont effacés. **Dissocier la liaison KVK** retire aussi le lien vous-même. Aucune identité obsolète ne reste ainsi en place.

## Options de fréquence

| Fréquence | Description |
|---|---|
| **Hebdomadaire** | Tous les 7 jours |
| **Mensuelle** | Le même jour chaque mois |
| **Trimestrielle** | Tous les 3 mois |
| **Annuelle** | Une fois par an |

## Gérer les dépenses récurrentes

### Mettre en pause / Reprendre

Activez ou désactivez la génération automatique. La mise en pause arrête la création de nouvelles dépenses ; la reprise continue à partir de la prochaine date prévue.

### Modifier

Les modifications du modèle n'affectent que les dépenses futures. Les dépenses existantes ne sont pas modifiées.

### Supprimer

Supprimez le modèle. Les dépenses déjà générées restent dans votre comptabilité.

## Dépenses générées

Chaque dépense générée :

- reprend le montant, la catégorie et les réglages de TVA du modèle
- reprend l'identité du fournisseur du modèle (nom, pays et numéro KVK) lorsqu'elle est renseignée
- est datée du jour d'occurrence prévu
- peut être modifiée indépendamment après sa création

## Lien source

Si une dépense a été créée à partir d'un modèle récurrent, la page de la dépense affiche un bandeau **Créée automatiquement depuis** suivi du nom de la dépense récurrente. Tant que le modèle existe, le bandeau renvoie vers lui et vous passez en un clic de la dépense au modèle qui l'a générée. S'il a été supprimé entre-temps, le bandeau affiche un simple texte au lieu d'un lien mort.

## Que se passe-t-il si ma formule change ?

Les dépenses récurrentes font partie de la formule Office. En montant de version de Desk vers Office, la génération automatique démarre à la prochaine échéance. Si vous rétrogradez d'Office vers Desk, la génération se met en pause automatiquement. Le modèle et les dépenses déjà créées restent dans votre espace de travail, et le calendrier reprend lors d'une nouvelle montée de version.

## Conseils

- Passez régulièrement en revue vos dépenses récurrentes pour repérer les abonnements résiliés
- Liez les dépenses récurrentes aux projets pour un calcul précis des coûts par projet
- Utilisez les catégories de façon cohérente pour des rapports pertinents
