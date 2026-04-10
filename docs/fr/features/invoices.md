# Factures

Les factures sont au coeur de MyCompanyDesk. Creez des factures professionnelles, envoyez-les a vos clients avec des liens de paiement et suivez les paiements jusqu'a leur reception.

## Vue d'ensemble

La page des factures affiche toutes vos factures avec des fonctionnalites de filtrage et de recherche. Utilisez les onglets de statut pour consulter rapidement :

- **Toutes** -- Toutes les factures
- **Brouillon** -- Creees mais non envoyees
- **Envoyees** -- Transmises aux clients
- **En retard** -- Date d'echeance depassee, impayees
- **Payees** -- Paiement recu
- **Annulees** -- Factures annulees

## Creer une facture

### Formulaire complet

1. Allez dans **Factures > Nouvelle facture**
2. Selectionnez ou creez un **client**
3. Ajoutez des **lignes de facturation** avec description, quantite, prix unitaire et taux de TVA
4. Definissez la **date de facture** et la **date d'echeance**
5. Ajoutez des **notes** ou **remarques internes** optionnelles
6. Cliquez sur **Enregistrer** pour creer un brouillon

### Ajout rapide

Pour une creation plus rapide :

1. Cliquez sur le bouton d'ajout rapide dans la liste des factures
2. Selectionnez un client
3. Ajoutez des elements ou choisissez un modele
4. Enregistrez (et envoyez immediatement si vous le souhaitez)

### A partir d'un modele

1. Lors de la creation d'une nouvelle facture, cliquez sur **Utiliser un modele**
2. Selectionnez un modele enregistre
3. Toutes les lignes de facturation sont pre-remplies -- ajustez selon vos besoins
4. Enregistrez et envoyez

## Details de la facture

Chaque facture dispose d'une page de detail affichant :

- Informations du client
- Lignes de facturation avec sous-totaux
- Ventilation de la TVA
- Montant total
- Statut et historique
- Lien de paiement (si envoye)

## Actions

### Envoyer

Envoyez la facture a votre client par e-mail. L'e-mail comprend :

- Un message personnalisable (base sur votre modele d'e-mail)
- La facture PDF en piece jointe
- Un lien de paiement pour le paiement en ligne

### Telecharger le PDF

Telechargez la facture sous forme de document PDF mis en forme professionnellement. Le PDF inclut le logo de votre entreprise, les couleurs de votre marque et tous les details de la facture.

### Marquer comme payee

Confirmez manuellement le paiement lorsqu'un client paie par virement bancaire ou autre methode hors ligne.

### Annuler

Annulez une facture qui ne doit plus etre payee. Les factures annulees restent dans vos archives a des fins d'audit.

### Dupliquer

Creez une copie d'une facture existante -- utile pour la facturation recurrente au meme client.

### Envoyer un rappel

Envoyez un rappel de paiement pour les factures en retard.

### E-mail rapide

Depuis la barre laterale de detail de la facture, cliquez sur l'action rapide **e-mail** pour composer et envoyer un e-mail au client directement -- sans quitter la page de la facture.

## Actions groupees

Selectionnez plusieurs factures dans la liste pour effectuer des actions groupees :

- **Envoyer** -- Envoyez plusieurs factures brouillon en une fois
- **Marquer comme payees** -- Enregistrez le paiement de plusieurs factures
- **Archiver** -- Deplacez les factures vers les archives
- **Supprimer** -- Supprimez definitivement des factures

## Liens de paiement

Lorsque vous envoyez une facture, un lien de paiement unique est genere. Votre client peut :

1. Cliquer sur le lien dans l'e-mail
2. Consulter la facture dans le **portail client**
3. Payer directement en ligne

Le paiement est automatiquement enregistre et le statut de la facture passe a **Payee**.

## Types de documents

Le module de facturation prend en charge plusieurs types de documents :

- **Facture** -- Document de facturation standard
- **Avoir** -- Ajustement pour remboursements ou corrections
- **Rappel** -- Rappel de paiement pour les factures en retard

## Filtrage et recherche

Utilisez la barre de filtre pour affiner vos factures :

- **Statut** -- Brouillon, Envoyee, En retard, Payee, Annulee
- **Client** -- Filtrer par client specifique
- **Projet** -- Filtrer par projet lie
- **Plage de dates** -- Filtrer par date de facture ou d'echeance
- **Recherche** -- Rechercher par numero de facture, nom de client ou description

## Export

Exportez vos factures au format CSV pour les utiliser dans Excel, Google Sheets ou votre logiciel de comptabilite.

::: info
L'export CSV necessite le plan **Pro** ou superieur.
:::

## Conseils

- Configurez vos [modeles d'e-mail](/fr/settings/email) avant d'envoyer votre premiere facture
- Utilisez les [factures recurrentes](/fr/features/recurring-invoices) pour la facturation reguliere
- Consultez la page des [rapports](/fr/features/reports) pour des analyses de revenus
- Activez les [suggestions IA](/fr/advanced/ai-features) pour des ameliorations intelligentes des descriptions
