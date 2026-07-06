---
title: Votre première facture
---

# Votre première facture

Ce guide vous accompagne dans la création et l'envoi de votre première facture dans MyCompanyDesk.

## Avant de commencer

Assurez-vous d'avoir :

- [Configuré les informations de votre entreprise](/fr/getting-started/company-setup) (nom, adresse, numéro de TVA, IBAN)
- Au moins un client à facturer (vous pouvez en créer un pendant le processus)

## Créer une facture

1. Naviguez vers **Factures** dans la barre latérale
2. Cliquez sur le bouton **Nouvelle facture** (ou utilisez le bouton flottant **+** sur mobile)
3. Remplissez le formulaire de facture :

### Sélectionner un client

Commencez à taper le nom du client. Si le client existe, sélectionnez-le dans la liste déroulante. Sinon, cliquez sur **Ajouter un nouveau client** pour ouvrir la page de création de client et l'ajouter.

### Ajouter des lignes de facturation

Chaque ligne contient :

- **Description** : ce que vous facturez
- **Quantité** : le nombre d'unités
- **Prix unitaire** : le prix par unité
- **Taux de TVA** : le pourcentage de TVA applicable (0 %, 9 %, 21 %, etc.)

Cliquez sur **Ajouter un élément** pour ajouter d'autres lignes. Le total est calculé automatiquement, TVA incluse.

### Définir les détails de la facture

- **Numéro de facture** : généré automatiquement selon vos paramètres de numérotation
- **Date de facture** : par défaut, la date du jour
- **Date d'échéance** : calculée à partir de vos conditions de paiement par défaut (ajustable)
- **Notes** : notes optionnelles qui apparaissent sur la facture

### Enregistrer en brouillon ou finaliser

Au moment d'enregistrer, vous choisissez entre deux options :

- **Enregistrer en brouillon** : la facture reste entièrement modifiable et aucun numéro de facture définitif n'est encore attribué.
- **Finaliser** : la facture est verrouillée, reçoit son numéro de facture définitif et passe au statut **Ouverte**, prête à être envoyée. C'est aussi au moment de la finalisation que MyCompanyDesk effectue ses contrôles de préparation : il vérifie que votre numéro de TVA et votre IBAN sont renseignés, et ouvre une fenêtre pour les compléter si ce n'est pas le cas.

## Prévisualiser la facture

Avant l'envoi, prévisualisez l'apparence du PDF :

1. Ouvrez la page de détail de la facture
2. Cliquez sur **Aperçu** pour voir le PDF généré
3. Vérifiez que toutes les informations sont correctes : coordonnées de l'entreprise, informations client, lignes de facturation, totaux

## Envoyer la facture

Lorsque vous êtes prêt à envoyer :

1. Cliquez sur **Envoyer** sur la page de détail de la facture
2. Vérifiez l'e-mail qui sera envoyé à votre client :
   - Objet (personnalisable)
   - Corps de l'e-mail (basé sur votre modèle d'e-mail)
   - Pièce jointe PDF
   - Lien de paiement (si activé)
3. Cliquez sur **Envoyer** pour transmettre la facture

Le statut de la facture passe à **Envoyée**.

::: tip
Vous pouvez personnaliser vos modèles d'e-mail dans **Paramètres > E-mail**. Les modèles prennent en charge votre image de marque et peuvent être définis par langue.
:::

## Suivre le paiement

Une fois envoyée, la facture apparaît dans vos vues **Envoyées** ou **En retard**. Lorsque le client paie :

- Si le client paie via le **lien de paiement**, la facture est automatiquement marquée comme payée
- Pour les virements bancaires, cliquez sur **Marquer comme payée** sur la facture pour enregistrer le paiement manuellement

## Statuts des factures

| Statut | Description |
|---|---|
| **Brouillon** | Créée mais pas encore finalisée. Entièrement modifiable. |
| **Ouverte** | Finalisée et prête à être envoyée, mais pas encore envoyée. |
| **Envoyée** | Transmise au client. En attente de paiement. |
| **En retard** | Date d'échéance dépassée et toujours impayée. |
| **Payée** | Paiement reçu et confirmé. |
| **Vérification requise** | Le client a marqué la facture comme payée dans le portail client ; confirmez le paiement de votre côté. |
| **Annulée** | La facture a été annulée. Aucun paiement attendu. |

## Ajout rapide avec des modèles

Pour les factures courantes où vous facturez régulièrement des éléments similaires, utilisez les modèles :

1. Créez une facture avec vos lignes de facturation habituelles
2. Cliquez sur **Enregistrer comme modèle**
3. La prochaine fois, cliquez sur **Modèles** sous les Actions rapides dans la barre latérale. Choisir un modèle ouvre une nouvelle facture avec tout prérempli ; ajustez si nécessaire, puis enregistrez ou finalisez.

## Prochaines étapes

Félicitations pour l'envoi de votre première facture ! Découvrez d'autres fonctionnalités :

- [Suivre vos dépenses](/fr/features/expenses)
- [Créer des devis](/fr/features/quotes) pour des missions potentielles
- [Configurer des factures récurrentes](/fr/features/recurring-invoices) pour la facturation régulière
- [Consulter les rapports](/fr/features/reports) pour comprendre vos finances
