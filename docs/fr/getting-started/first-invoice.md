---
title: Votre première facture
description: "Pas à pas pour créer et envoyer votre première facture, de vos données d'entreprise au client, jusqu'au bouton d'envoi."
---

# Votre première facture

Ce guide vous accompagne pas à pas dans la création et l'envoi de votre première facture dans MyCompanyDesk.

## Avant de commencer

Assurez-vous d'avoir :

- [Configuré les informations de votre entreprise](/fr/getting-started/company-setup) (nom, adresse, numéro de TVA, IBAN). S'il manque encore votre numéro de TVA ou votre IBAN, MyCompanyDesk vous le demande au moment de finaliser la facture.
- Au moins un client à facturer (vous pouvez en créer un pendant le processus)

## Créer une facture

1. Allez dans **Factures** dans la barre latérale
2. Cliquez sur **Créer** (ou utilisez le bouton **+** sur votre téléphone)
3. Remplissez la facture

Sur téléphone ou tablette, une nouvelle facture s'ouvre en trois étapes : **Client**, **Lignes** et **Vérifier**. **Suivant** vous mène à l'étape d'après. Sur un grand écran, tout tient sur une seule page.

### Sélectionner un client

Commencez à taper le nom du client dans le champ **Rechercher un client...**. Si le client existe, sélectionnez-le dans la liste. Sinon, choisissez **Ajouter un nouveau client**. Le panneau **Nouveau client** demande le type de client (**Particulier** ou **Entreprise**), le nom et l'adresse. Pour une entreprise, la recherche KVK retrouve les données et remplit l'adresse automatiquement ; pour un particulier, vous saisissez l'adresse vous-même. L'e-mail est facultatif. Cliquez sur **Ajouter** et le client figure sur la facture.

### Ajouter des lignes

Chaque ligne comporte :

- **Description** : ce que vous facturez
- **Qté** : nombre d'unités
- **Prix** : prix unitaire. Par défaut, vous saisissez les prix hors TVA ; activez **Prix TTC** si vous préférez saisir le montant que paie votre client.
<!-- TODO(source-missing): The app also accepts the historical Dutch rates 6% and 19% on invoices and catalog items. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
- **Taux de TVA**: Pourcentage de TVA applicable (0 %, 9 %, 21 %, etc.)

Cliquez sur **Ajouter une ligne** pour d'autres lignes, ou choisissez un produit ou un service dans votre offre. Le total est calculé automatiquement, TVA comprise.

### Définir les détails de la facture

- **Numéro de facture** : proposé automatiquement. La facture reçoit son numéro définitif lorsque vous la finalisez.
- **Date de facture** : aujourd'hui par défaut
- **Date d'échéance** : calculée selon votre délai de paiement par défaut (modifiable)
- **Notes** : notes facultatives qui apparaissent sur la facture

### Enregistrer

Vous avez deux boutons :

- **Enregistrer comme brouillon** : conserve la facture en **Brouillon**. Vous pouvez encore tout modifier.
- **Finaliser** : attribue son numéro à la facture et la rend prête à l'envoi. Ensuite, les données ne peuvent plus être modifiées (exigence de l'administration fiscale néerlandaise).

## Vérifier la facture

Dans le formulaire de facture, cliquez sur **Voir l'aperçu** pour voir à quoi ressemble le PDF. Vérifiez que tout est correct : données de l'entreprise, informations client, lignes et totaux. La page de la facture affiche aussi le document, et vous pouvez l'enregistrer avec **Télécharger PDF**.

## Envoyer la facture

Une facture finalisée qui n'est pas encore partie a le statut **À envoyer**. Pour l'envoyer :

1. Cliquez sur **Envoyer** sur la page de la facture
2. Dans la fenêtre **Envoyer l'email**, vérifiez l'e-mail destiné à votre client :
   - **À** : l'adresse e-mail de votre client
   - **Objet** et **Message** (modifiables)
   - Sous **Inclure dans l'email** : le **Bouton afficher (lien en ligne)**, le **Bouton télécharger** et la **Pièce jointe PDF**. Grâce au lien en ligne, votre client consulte et paie la facture.
3. Cliquez sur **Envoyer l'email**

Le statut de la facture passe à **Envoyée**. Vous l'avez envoyée vous-même, par exemple via WhatsApp ? Cliquez alors sur **Marquer comme envoyée**.

::: tip
Vous modifiez vos textes d'e-mail dans **Paramètres › E-mail**. Vous pouvez aussi adapter le texte dans la fenêtre d'envoi et cocher **Utiliser ce texte désormais pour les factures**.
:::

## Suivre le paiement

Après l'envoi, la facture apparaît sous **En attente de paiement**, ou sous **En retard** une fois la date d'échéance dépassée. Lorsque le client paie :

- Si le client paie en ligne (iDEAL, à configurer dans **Paramètres › Paiement**), la facture est automatiquement marquée comme payée
- Pour un virement bancaire, cliquez sur **Marquer comme payée** sur la facture pour enregistrer le paiement manuellement

## Statuts des factures

| Statut | Description |
|---|---|
| **Brouillon** | Créée mais pas encore finalisée. Entièrement modifiable. |
| **À envoyer** | Définitive, pas encore envoyée. |
| **Envoyée** | Remise au client. En attente de paiement. |
| **En retard** | Date d'échéance dépassée et pas encore payée. |
| **Vérification requise** | Le client indique avoir payé. Vérifiez-le et marquez la facture comme payée. |
| **Payée** | Paiement reçu et confirmé. |
| **Annulée** | La facture a été annulée. Aucun paiement attendu. |

## Utiliser des modèles

Gagnez du temps avec les modèles de facture :

1. Créez une nouvelle facture avec vos lignes les plus utilisées
2. Cliquez sur **Enregistrer comme modèle**
3. La prochaine fois, choisissez **À partir d'un modèle** sur une nouvelle facture, et toutes les lignes sont préremplies

## Prochaines étapes

Félicitations pour l'envoi de votre première facture ! Découvrez d'autres fonctionnalités :

- [Suivre vos dépenses](/fr/features/expenses)
- [Créer des devis](/fr/features/quotes) pour des travaux potentiels
- [Configurer des factures récurrentes](/fr/features/recurring-invoices) pour la facturation régulière (Office)
- [Consulter les rapports](/fr/features/reports) pour comprendre vos finances
