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

## Conseils

- Utilisez les contrats conjointement avec les [factures recurrentes](/fr/features/recurring-invoices) pour differents scenarios de facturation
- Liez les contrats aux objets pour une gestion locative complete
- Definissez des dates de fin pour etre averti avant l'expiration des contrats
- Utilisez le filtre des contrats pour voir les actifs vs. les inactifs en un coup d'oeil
