---
title: Factures
---

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
3. Ajoutez des **lignes de facturation** avec description, quantite, prix unitaire et taux de TVA. Le taux de TVA par defaut pour les nouvelles lignes provient de vos parametres fiscaux (Finances → TVA). Pour les clients en autoliquidation, le taux est automatiquement de 0%.
4. Definissez la **date de facture** et la **date d'echeance**
5. Ajoutez des **notes** ou **remarques internes** optionnelles
6. Cliquez sur **Enregistrer** pour creer un brouillon

### Prefixe de facture

Definissez un prefixe personnalise pour vos numeros de facture dans **Espace de travail > Finances > Factures**. Le prefixe est ajoute devant chaque numero de facture au format `[PREFIXE]AAAA-NNN` (par ex. le prefixe "INV-" donne des numeros comme "INV-2026-001"). Laissez-le vide pour une numerotation simple. Le prefixe est limite a 20 caracteres.

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

### Rappels de paiement automatiques

Activez les rappels automatiques pour ne plus avoir a relancer manuellement les factures en retard. Allez dans **Espace de travail > Finances > Factures** et activez **Automatische herinneringen**.

Lorsque cette option est activee :

- Un e-mail de rappel est envoye pour toute facture ouverte qui a 3 jours ou plus de retard
- Des rappels de suivi sont envoyes tous les 7 jours jusqu'a ce que la facture soit payee ou annulee
- Maximum un rappel par facture par periode de 7 jours
- Le rappel utilise votre modele d'e-mail standard

Desactivez l'option pour arreter les rappels automatiques sans affecter les factures deja envoyees.

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
3. Payer directement en ligne via votre compte Mollie ou Stripe connecte

Le paiement est automatiquement enregistre et le statut de la facture passe a **Payee**.

## Frais de service

Des frais de service ou d'administration fixes peuvent etre ajoutes automatiquement aux factures contenant des entrees de temps. Configurez les frais a trois niveaux :

| Niveau | Chemin |
|---|---|
| Valeur par defaut de l'espace de travail | **Espace de travail > Finances > Temps et deplacements** |
| Par client | Formulaire client > parametres de facturation |
| Remplacement personnel | **Mon compte > Temps et deplacements** (`/me/time-travel/time`) |

Chaque niveau a trois champs : **description**, **montant** et **taux de TVA**. Les frais au niveau client ont priorite sur le personnel, qui a priorite sur l'espace de travail. La ligne de frais est ajoutee une fois par facture lorsqu'au moins une entree de temps est presente.

## Inclusion automatique des depenses

Lorsque cette option est activee, les depenses non facturees pour le meme client sont automatiquement ajoutees comme lignes de facturation lors de la creation d'une facture a partir d'entrees de temps. Cela vous evite d'ajouter manuellement les depenses a chaque facture. L'option est disponible a :

- **Niveau espace de travail** : Espace de travail > Finances > Temps et deplacements
- **Par client** : Formulaire client > parametres de facturation

Lorsque l'espace de travail et un client ont tous deux l'option activee, la valeur du client prevaut.

## Paiements en ligne

Activez les paiements de factures en ligne en connectant votre propre compte Mollie ou Stripe :

1. Allez dans **Argent → Paiements** dans la barre laterale de votre espace de travail
2. Sous **Online betalingen**, connectez le prestataire de votre choix
3. Mollie prend en charge iDEAL, Bancontact, la carte bancaire et le virement
4. Stripe Connect prend en charge la carte, Apple Pay, Google Pay et le prelevement SEPA

Une fois connecte, chaque facture que vous envoyez inclut un lien de paiement. Vos clients paient via votre propre compte prestataire. Les fonds vous sont verses directement. MyCompanyDesk ne traite ni ne conserve vos paiements.

## Badge du prestataire de paiement

Lorsqu'une facture est integralement payee, l'en-tete de la section des paiements affiche un badge indiquant par quel prestataire le paiement est arrive : "Paye via Mollie" ou "Paye via Stripe". Le prestataire dominant est affiche lorsque plusieurs methodes de paiement ont ete utilisees. Vous voyez ainsi en un coup d'oeil ou l'argent a ete recu, sans faire defiler l'historique des paiements.

## Remboursement des paiements

Les paiements en ligne effectues via Mollie ou Stripe peuvent etre rembourses directement depuis MyCompanyDesk. Lorsque vous remboursez un paiement :

- Le montant total est retourne au client via le meme prestataire de paiement
- Le remboursement est traite immediatement par Mollie ou Stripe
- Le paiement est marque comme rembourse dans vos archives

Les methodes de paiement hors ligne (virement bancaire, especes) utilisent le chemin d'annulation existant: le paiement est marque comme annule sans remboursement cote prestataire.

Pour rembourser un paiement :

1. Ouvrez la page de detail de la facture
2. Localisez le paiement dans la liste des paiements
3. Cliquez sur le bouton **Rembourser** (disponible uniquement pour les paiements Mollie et Stripe)
4. Ajoutez une raison facultative
5. Confirmez le remboursement

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

## Finalisation et envoi

Lorsque vous finalisez ou envoyez une facture, MyCompanyDesk verifie que votre entreprise a un numero de TVA et un IBAN dans votre profil. Aux Pays-Bas, un numero de TVA est obligatoire sur la facture, et votre IBAN indique aux clients ou payer.

Si l'un de ces champs est manquant, une fenetre s'ouvre pour que vous puissiez le remplir directement. Une fois enregistre, la facture est automatiquement finalisee.

Vous attendez encore votre numero de TVA de l'administration fiscale, ou vous beneficiez du regime de la franchise en base (KOR) ? Vous pouvez passer l'alerte et continuer malgre tout. Ajoutez votre numero de TVA des que vous l'avez.

## Conseils

- Configurez vos [modeles d'e-mail](/fr/settings/email) avant d'envoyer votre premiere facture
- Utilisez les [factures recurrentes](/fr/features/recurring-invoices) pour la facturation reguliere
- Consultez la page des [rapports](/fr/features/reports) pour des analyses de revenus
- Activez les [suggestions IA](/fr/advanced/ai-features) pour des ameliorations intelligentes des descriptions
