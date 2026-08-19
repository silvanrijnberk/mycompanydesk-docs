---
title: Depenses recurrentes
---

# Depenses recurrentes

Automatisez le suivi de vos couts professionnels reguliers comme le loyer, les abonnements et les charges.

## Vue d'ensemble

Les depenses recurrentes fonctionnent comme les factures recurrentes mais pour les couts. Configurez un modele et laissez MyCompanyDesk creer automatiquement des enregistrements de depenses.

Cas d'utilisation courants :

- Loyer du bureau
- Abonnements logiciels
- Primes d'assurance
- Factures de charges
- Paiements de leasing

## Creer une depense recurrente

1. Allez dans **Depenses recurrentes > Nouveau**
2. Remplissez le modele :
   - **Description** : l'objet de la depense
   - **Fournisseur**: nom de fournisseur libre, avec autocompletion pour les fournisseurs deja utilises
   - **Pays** et **Numero d'enregistrement (KVK)**: champs optionnels pour l'identite du fournisseur; lorsqu'ils sont renseignes, ils sont reportes dans chaque depense generee a partir de ce modele
   - **Montant**: le cout recurrent
   - **Categorie**: categorie de depense
   - **Taux de TVA**: TVA applicable
   - **Traitement de TVA**: comment la depense est traitee pour la declaration de TVA
   - **Frequence**: hebdomadaire, mensuelle, trimestrielle ou annuelle
3. Cliquez sur **Enregistrer**

::: tip Plus d'options
Dans le formulaire de depense recurrente, les champs optionnels restent ranges sous **Plus d'options**. Les notes et l'identite du fournisseur s'y trouvent par defaut; depliez la section pour les ajouter.
:::

### Identite du fournisseur

Renseigner le nom du fournisseur, le pays et le numero KVK dans un modele recurrent a deux effets :

- **Les suggestions de fournisseurs** utilisent l'identite enregistree, ce qui evite de reselectionner le meme fournisseur chaque mois.
- **Les depenses generees** conservent la meme identite de fournisseur que le modele. Ainsi, la logique d'autoliquidation ou de TVA a l'importation (par exemple pour des achats intracommunautaires ou hors UE) est appliquee automatiquement, comme pour une depense saisie manuellement.

Si vous modifiez le nom du fournisseur et qu'il ne correspond plus a l'enregistrement KVK enregistre, les champs KVK et pays sont effaces. Le formulaire evite ainsi qu'une identite de fournisseur obsolete persiste.

## Options de frequence

| Frequence | Description |
|---|---|
| **Hebdomadaire** | Tous les 7 jours |
| **Mensuelle** | Le meme jour chaque mois |
| **Trimestrielle** | Tous les 3 mois |
| **Annuelle** | Une fois par an |

## Gerer les depenses recurrentes

### Mettre en pause / Reprendre

Activez ou desactivez la generation automatique. La mise en pause arrete la creation de nouvelles depenses ; la reprise continue a partir de la prochaine date programmee.

### Modifier

Les modifications du modele n'affectent que les depenses futures. Les depenses existantes ne sont pas modifiees.

### Supprimer

Supprimez le modele. Les depenses precedemment generees restent dans vos archives.

## Depenses generees

Chaque depense generee :

- Correspond au montant, a la categorie et aux parametres de TVA du modele
- Reporte l'identite du fournisseur du modele (nom, pays et numero KVK) lorsque ces champs sont renseignes
- Est datee a la date d'occurrence programmee
- Peut etre modifiee independamment apres creation

## Lien source

Si une depense a ete creee a partir d'un modele recurrent, la page de detail de la depense affiche un bandeau **Cree automatiquement depuis une depense recurrente**. Tant que le modele existe encore, le bandeau renvoie vers celui-ci et vous pouvez passer en un clic de la depense au modele qui l'a generee. S'il a ete supprime entre-temps, le bandeau affiche un simple texte au lieu d'un lien mort.

## Reessai en cas de periode bloquee

Si une periode est temporairement bloquee au moment ou la planification s'execute, MyCompanyDesk reessaie la creation plus tard au lieu de sauter definitivement cette periode. Vous recevez une notification si la periode reste bloquee apres les reessais.

## Que se passe-t-il si ma formule change ?

Les dépenses récurrentes font partie de la formule Office. En montant de version de Desk vers Office, la génération automatique démarre à la prochaine échéance. Si vous rétrogradez d'Office vers Desk, la génération se met en pause automatiquement. Le modèle et les dépenses déjà créées restent dans votre espace de travail, et le planning reprend lors d'une nouvelle montée de version.

## Conseils

- Examinez periodiquement vos depenses recurrentes pour detecter les abonnements annules
- Liez les depenses recurrentes aux projets pour un calcul precis des couts par projet
- Utilisez les categories de maniere coherente pour des rapports pertinents
