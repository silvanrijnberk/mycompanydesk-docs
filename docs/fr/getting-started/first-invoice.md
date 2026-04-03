# Votre premiere facture

Ce guide vous accompagne dans la creation et l'envoi de votre premiere facture dans MyCompanyDesk.

## Avant de commencer

Assurez-vous d'avoir :

- [Configure les informations de votre entreprise](/fr/getting-started/company-setup) (nom, adresse, IBAN)
- Au moins un client a facturer (vous pouvez en creer un pendant le processus)

## Creer une facture

1. Naviguez vers **Factures** dans la barre laterale
2. Cliquez sur le bouton **Nouvelle facture** (ou utilisez le bouton flottant **+** sur mobile)
3. Remplissez le formulaire de facture :

### Selectionner un client

Commencez a taper le nom du client. Si le client existe, selectionnez-le dans la liste deroulante. Sinon, cliquez sur **Creer un nouveau client** pour l'ajouter directement.

### Ajouter des lignes de facturation

Chaque ligne contient :

- **Description** -- Ce que vous facturez
- **Quantite** -- Nombre d'unites
- **Prix unitaire** -- Prix par unite
- **Taux de TVA** -- Pourcentage de TVA applicable (0 %, 9 %, 21 %, etc.)

Cliquez sur **Ajouter un element** pour ajouter d'autres lignes. Le total est calcule automatiquement, TVA incluse.

### Definir les details de la facture

- **Numero de facture** -- Genere automatiquement selon vos parametres de numerotation
- **Date de facture** -- Par defaut, la date du jour
- **Date d'echeance** -- Calculee a partir de vos conditions de paiement par defaut (ajustable)
- **Notes** -- Notes optionnelles qui apparaissent sur la facture

### Enregistrer

Cliquez sur **Enregistrer** pour creer la facture en tant que **brouillon**. Vous pouvez encore tout modifier avant l'envoi.

## Previsualiser la facture

Avant l'envoi, previsualisez l'apparence du PDF :

1. Ouvrez la page de detail de la facture
2. Cliquez sur **Apercu** pour voir le PDF genere
3. Verifiez que toutes les informations sont correctes -- coordonnees de l'entreprise, informations client, lignes de facturation, totaux

## Envoyer la facture

Lorsque vous etes pret a envoyer :

1. Cliquez sur **Envoyer** sur la page de detail de la facture
2. Verifiez l'e-mail qui sera envoye a votre client :
   - Objet (personnalisable)
   - Corps de l'e-mail (base sur votre modele d'e-mail)
   - Piece jointe PDF
   - Lien de paiement (si active)
3. Cliquez sur **Envoyer** pour transmettre la facture

Le statut de la facture passe de **Brouillon** a **Envoyee**.

::: tip
Vous pouvez personnaliser vos modeles d'e-mail dans **Parametres > E-mail**. Les modeles prennent en charge votre image de marque et peuvent etre definis par langue.
:::

## Suivre le paiement

Une fois envoyee, la facture apparait dans vos vues **Envoyees** ou **En retard**. Lorsque le client paie :

- Si le client paie via le **lien de paiement**, la facture est automatiquement marquee comme payee
- Pour les virements bancaires, cliquez sur **Marquer comme payee** sur la facture pour enregistrer le paiement manuellement

## Statuts des factures

| Statut | Description |
|---|---|
| **Brouillon** | Creee mais pas encore envoyee. Entierement modifiable. |
| **Envoyee** | Transmise au client. En attente de paiement. |
| **En retard** | Date d'echeance depassee et toujours impayee. |
| **Payee** | Paiement recu et confirme. |
| **Annulee** | La facture a ete annulee. Aucun paiement attendu. |

## Ajout rapide

Pour une creation de facture plus rapide, utilisez l'**ajout rapide** :

1. Cliquez sur l'icone d'ajout rapide sur la page de liste des factures
2. Selectionnez un client
3. Ajoutez des elements (ou utilisez un modele enregistre)
4. Enregistrez et envoyez immediatement si vous le souhaitez

L'ajout rapide est ideal pour les factures courantes ou vous facturez regulierement des elements similaires.

## Utiliser des modeles

Gagnez du temps avec les modeles de factures :

1. Creez une facture avec vos lignes de facturation courantes
2. Cliquez sur **Enregistrer comme modele**
3. La prochaine fois, creez une nouvelle facture a partir du modele -- tous les elements sont pre-remplis

## Prochaines etapes

Felicitations pour l'envoi de votre premiere facture ! Decouvrez d'autres fonctionnalites :

- [Suivre vos depenses](/fr/features/expenses)
- [Creer des devis](/fr/features/quotes) pour des travaux potentiels
- [Configurer des factures recurrentes](/fr/features/recurring-invoices) pour la facturation reguliere
- [Consulter les rapports](/fr/features/reports) pour comprendre vos finances
