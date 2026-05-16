---
title: Contrats
---

# Contrats

Gerez les accords de services recurrents et les contrats de location avec des calendriers de facturation automatiques.

## Vue d'ensemble

Les contrats representent des accords en cours avec des clients -- tels que des contrats de services mensuels, des baux de location ou des plans de maintenance. Ils peuvent generer automatiquement des factures selon un calendrier defini.

::: info
Le module contrats est optionnel. Activez-le dans **Entreprise > Fonctionnalites** si vous ne le voyez pas dans la navigation.
:::

## Creer un contrat

1. Allez dans **Contrats > Nouveau contrat**
2. Remplissez :
   - **Nom** -- Un titre descriptif (par ex., "Service de nettoyage mensuel")
   - **Client** -- Le client partie au contrat
   - **Montant** -- Le montant de facturation recurrent
   - **Recurrence** -- Frequence de facturation (hebdomadaire, mensuelle, trimestrielle, annuelle)
   - **Date de debut** -- Quand le contrat commence
   - **Date de fin** -- Date de fin optionnelle
   - **Description** -- Conditions et details
3. Cliquez sur **Enregistrer**

## Statuts des contrats

| Statut | Description |
|---|---|
| **Actif** | Actuellement en vigueur, genere des factures |
| **Inactif** | En pause -- aucune facture generee |

## Facturation automatique

Les contrats actifs avec un calendrier de recurrence generent automatiquement des factures a chaque periode de facturation. Le systeme :

1. Cree un brouillon de facture base sur les termes du contrat
2. Applique le client, le montant et la description corrects
3. Suit vos parametres de numerotation des factures

Vous pouvez examiner et envoyer les factures generees manuellement, ou configurer l'envoi automatique.

## Liaison aux actifs

Les contrats peuvent etre lies aux [objets/actifs](/fr/features/objects) pour la gestion locative :

- Associez un contrat a une propriete, un vehicule ou un equipement
- Suivez quels actifs sont actuellement loues et a qui
- Consultez l'historique des contrats par actif

## Indicateurs

La page de liste des contrats affiche des indicateurs de synthese :

- Total des contrats actifs
- Valeur totale des contrats
- Contrats par type de recurrence

## Actions groupees

- **Changer le statut** -- Activez ou desactivez plusieurs contrats
- **Archiver** -- Deplacez vers les archives
- **Restaurer** -- Recuperez les contrats archives

## Signature electronique

Les contrats prennent en charge la signature electronique. Vous pouvez ajouter des parties via le formulaire de contrat, et chaque partie recoit un lien de signature par e-mail.

Lorsqu'un contrat est signe, la page de detail du contrat affiche une carte de signature avec :

- Le statut de chaque partie (invitee, consultee, signee ou expiree)
- Un bouton **Voir** qui ouvre un apercu en ligne du document signe
- Un bouton de telechargement pour enregistrer le PDF

La page d'apercu comprend une barre d'outils avec des actions d'impression et de telechargement, et affiche le contrat signe directement dans le navigateur.

### Signature sur la liste des contrats

La liste des contrats inclut une colonne **Signature** affichant le statut de signature pour chaque contrat avec signature electronique. Les statuts apparaissent sous forme de badges colores : brouillon (neutre), envoye (avertissement), partiellement signe (info) et actif (succes).

Un filtre de signature au-dessus de la liste vous permet de filtrer par statut de signature, ou d'afficher les contrats sans signature electronique (« Sans signature electronique »).

::: info Contrats existants
Les contrats crees avant l'introduction de la signature electronique n'affichent pas de carte de signature sur la page de detail. Le systeme detecte les contrats existants en verifiant si le contrat comporte des parties signataires, un modele ou un contenu de signature. Seuls les contrats crees ou mis a jour apres le deploiement de la signature electronique incluent la carte de signature.

Les contrats existants affichent un tiret dans la colonne Signature et apparaissent sous le filtre « Sans signature electronique ».
:::

## Conseils

- Utilisez les contrats conjointement avec les [factures recurrentes](/fr/features/recurring-invoices) pour differents scenarios de facturation
- Liez les contrats aux objets pour une gestion locative complete
- Definissez des dates de fin pour etre averti avant l'expiration des contrats
- Utilisez le filtre des contrats pour voir les actifs vs. les inactifs en un coup d'oeil
- Filtrez par statut de signature pour trouver les contrats qui doivent encore etre signes
- Ajoutez des parties signataires lors de la creation d'un contrat pour activer la signature electronique
