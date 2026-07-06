---
title: Factures
---

# Factures

Les factures sont au coeur de MyCompanyDesk. Créez des factures professionnelles, envoyez-les à vos clients avec des liens de paiement et suivez les paiements jusqu'à leur réception.

## Vue d'ensemble

La page des factures affiche toutes vos factures avec des possibilités de filtrage et de recherche. Les onglets en haut sont des vues, pas des statuts :

- **Actives** : votre liste de travail
- **Archives** : les factures que vous avez archivées
- **Corbeille** : les factures en attente de suppression définitive

Au sein d'une vue, la liste déroulante de statut filtre par :

- **Tous les statuts** : toutes les factures de la vue
- **Brouillon** : créée mais non finalisée
- **Ouverte** : finalisée et prête à envoyer, mais pas encore envoyée
- **Envoyée** : transmise au client
- **Payée** : paiement reçu
- **En retard** : date d'échéance dépassée, impayée
- **À vérifier** : le client a marqué la facture comme payée dans le portail client, en attente de votre confirmation

## Créer une facture

### Formulaire complet

1. Allez dans **Factures > Nouvelle facture**
2. Sélectionnez ou créez un **client**
3. Ajoutez des **lignes** avec description, quantité, prix unitaire et taux de TVA. Le taux de TVA par défaut des nouvelles lignes provient de vos paramètres fiscaux (Paramètres > BTW). Si l'autoliquidation est activée pour un client, la ligne utilise automatiquement 0 %.
4. Définissez la **date de facture** et la **date d'échéance**
5. Ajoutez des **notes** ou **remarques internes** optionnelles
6. Enregistrez comme **brouillon** pour continuer à modifier plus tard, ou **finalisez** pour verrouiller la facture et la préparer à l'envoi

### Brouillon ou finalisation

Enregistrer comme brouillon garde la facture entièrement modifiable. La finalisation verrouille la facture, attribue le numéro de facture définitif et passe le statut à **Ouverte** (prête à envoyer). C'est aussi au moment de la finalisation que les contrôles de préparation se déclenchent : MyCompanyDesk vérifie que votre entreprise a un BTW-id (numéro de TVA) et un IBAN enregistrés (voir [Finalisation et envoi](#finalisation-et-envoi)).

### À partir d'un modèle

Les modèles se trouvent dans la barre latérale : cliquez sur **Modèles** sous Actions rapides pour ouvrir la fenêtre des modèles. Choisir un modèle de facture ouvre une nouvelle facture avec tous les champs du modèle pré-remplis ; ajustez si besoin, puis enregistrez ou finalisez.

Pour créer un modèle, ouvrez une facture et cliquez sur **Enregistrer comme modèle**.

### Facturer des heures enregistrées

Quand vous sélectionnez un client sur le formulaire de facture, MyCompanyDesk récupère les heures non facturées de ce client. Ajoutez-les une par une ou en une fois ; chaque enregistrement devient une ligne avec les heures, le taux horaire et une description remplie automatiquement. Si l'enregistrement de temps n'a pas de description propre, une valeur par défaut lisible est utilisée, basée sur le nom du projet ou la période. Vous pouvez aussi définir un modèle de description par client sur la fiche client pour contrôler la formulation de ces lignes.

Les dépenses non facturées du client peuvent être récupérées de la même manière.

## Détails de la facture

Chaque facture dispose d'une page de détail affichant :

- Informations du client
- Lignes avec sous-totaux
- Ventilation de la TVA
- Montant total
- Statut et historique
- Lien de paiement (si envoyée)

## Actions

### Envoyer

Envoyez la facture à votre client par e-mail. L'e-mail comprend :

- Un message personnalisable (basé sur votre modèle d'e-mail)
- La facture PDF en pièce jointe
- Un lien de paiement pour le paiement en ligne

### Télécharger le PDF

Téléchargez la facture sous forme de document PDF mis en forme professionnellement. Le PDF inclut le logo de votre entreprise, vos couleurs de marque et tous les détails de la facture.

### Marquer comme payée

Confirmez manuellement le paiement lorsqu'un client paie par virement bancaire ou une autre méthode hors ligne.

### Annuler

Annulez une facture qui ne doit plus être payée. Les factures annulées restent dans vos archives à des fins d'audit.

### Dupliquer

Créez une copie d'une facture existante, utile pour la facturation récurrente au même client.

### Envoyer un rappel

Envoyez un rappel de paiement pour les factures en retard.

## Actions groupées

Sélectionnez plusieurs factures dans la liste pour effectuer des actions groupées :

- **Envoyer** : marque les factures sélectionnées comme envoyées. Seul le statut est mis à jour ; aucun e-mail n'est envoyé.
- **Marquer comme payées** : enregistrer le paiement de plusieurs factures
- **Annuler** : annuler plusieurs factures
- **Archiver** : déplacer des factures vers les archives
- **Supprimer** : retirer des factures

Dans les vues Archives et Corbeille, les actions groupées deviennent restaurer, déplacer vers la corbeille et supprimer définitivement.

## Liens de paiement

Lorsque vous envoyez une facture, un lien de paiement unique est généré. Votre client peut :

1. Cliquer sur le lien dans l'e-mail
2. Consulter la facture dans le **portail client**
3. Payer directement en ligne via votre compte Mollie ou Stripe connecté

Le paiement est automatiquement enregistré et le statut de la facture passe à **Payée**.

## Paiements en ligne

Activez les paiements de factures en ligne en connectant votre propre compte Mollie ou Stripe :

1. Allez dans **Paramètres > Betalen**
2. Sous **Klanten laten betalen met iDEAL**, connectez le prestataire de votre choix
3. Mollie prend en charge iDEAL, Bancontact, la carte bancaire et le virement
4. Stripe Connect prend en charge la carte, Apple Pay, Google Pay et le prélèvement SEPA

Une fois connecté, chaque facture que vous envoyez inclut un lien de paiement. Vos clients paient via votre propre compte prestataire. Les fonds vous sont versés directement. MyCompanyDesk ne traite ni ne conserve vos paiements.

## Badge du prestataire de paiement

Lorsqu'une facture est intégralement payée, l'en-tête de la section des paiements affiche un badge indiquant par quel prestataire le paiement est arrivé : "Payé via Mollie" ou "Payé via Stripe". Le prestataire dominant est affiché lorsque plusieurs méthodes de paiement ont été utilisées. Vous voyez ainsi en un coup d'oeil où l'argent a été reçu, sans faire défiler l'historique des paiements.

## Remboursement des paiements

Les paiements en ligne effectués via Mollie ou Stripe peuvent être remboursés directement depuis MyCompanyDesk. Lorsque vous remboursez un paiement :

- Le montant total est retourné au client via le même prestataire de paiement
- Le remboursement est traité immédiatement par Mollie ou Stripe
- Le paiement est marqué comme remboursé dans vos archives

Les méthodes hors ligne (virement bancaire, espèces) utilisent le chemin d'annulation existant : le paiement est marqué comme annulé sans remboursement côté prestataire.

Pour rembourser un paiement :

1. Ouvrez la page de détail de la facture
2. Localisez le paiement dans la liste des paiements
3. Cliquez sur le bouton **Rembourser** (disponible uniquement pour les paiements Mollie et Stripe)
4. Ajoutez une raison facultative
5. Confirmez le remboursement

## Types de documents

Le module de facturation prend en charge plusieurs types de documents :

- **Facture** : document de facturation standard
- **Avoir** : ajustement pour remboursements ou corrections
- **Rappel** : rappel de paiement pour les factures en retard

## Filtrage et recherche

La liste propose :

- **Recherche** : par numéro de facture, nom de client ou description
- **Onglets de vue** : Actives, Archives, Corbeille
- **Statut** : Tous les statuts, Brouillon, Ouverte, Envoyée, Payée, En retard, À vérifier
- **Plage de dates** : filtrer par date

## Export

Exportez vos factures au format CSV via **Paramètres > Gegevens downloaden** (disponible à partir du plan Starter). La même page propose aussi une sauvegarde complète de toutes vos données.

## Finalisation et envoi

Lorsque vous finalisez ou envoyez une facture, MyCompanyDesk vérifie que votre entreprise a un BTW-id (numéro de TVA) et un IBAN enregistrés. Aux Pays-Bas, une facture valide exige votre BTW-id, et votre IBAN indique aux clients où payer.

Si l'un de ces champs manque, une fenêtre s'ouvre pour que vous puissiez le remplir directement. Une fois enregistré, votre facture est finalisée automatiquement.

Si vous attendez encore votre BTW-id de la Belastingdienst, ou si vous êtes exonéré au titre du régime des petites entreprises (KOR), vous pouvez prendre acte du champ manquant et continuer malgré tout. Ajoutez votre BTW-id plus tard, dès que vous l'avez.

## Conseils

- Configurez vos [modèles d'e-mail](/fr/settings/email) avant d'envoyer votre première facture
- Utilisez les [factures récurrentes](/fr/features/recurring-invoices) pour la facturation régulière
- Consultez la page des [rapports](/fr/features/reports) pour des analyses de revenus
- Activez les [suggestions IA](/fr/advanced/ai-features) pour des améliorations intelligentes des descriptions
