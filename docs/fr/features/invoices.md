---
title: Factures
---

# Factures

Les factures sont au coeur de MyCompanyDesk. Creez des factures professionnelles, envoyez-les a vos clients avec des liens de paiement et suivez les paiements jusqu'a leur reception.

## Vue d'ensemble

La page des factures affiche toutes vos factures avec des fonctionnalites de filtrage et de recherche. Les onglets de statut dans la barre superieure permettent de basculer rapidement entre :

- **Toutes** : toutes les factures
- **Brouillons** : creees mais non envoyees
- **En attente** : factures envoyees, ouvertes ou en retard
- **Ventes du site** : ventes en ligne, lorsque votre espace de travail a active les ventes de site web

Vous pouvez toujours utiliser le filtre **Statut** pour affiner la liste a n'importe quel statut, y compris envoyee, en retard, payee ou annulee.

## Creer une facture

### Formulaire complet

1. Allez dans **Factures > Nouvelle facture**
2. Selectionnez ou creez un **client**
3. Ajoutez des **lignes de facturation** avec description, quantite, prix unitaire et taux de TVA. Le taux de TVA par defaut pour les nouvelles lignes provient de vos parametres fiscaux (Finances → TVA). Pour les clients en autoliquidation, le taux est automatiquement de 0%.
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

Vous pouvez commencer une nouvelle facture a partir d'un modele enregistre a deux endroits :

- Dans le **formulaire de facturation complet**, cliquez sur **Demarrer a partir du modele** (affiche uniquement si vous avez des modeles de facture enregistres). Choisissez un modele et le formulaire se remplit directement avec ses lignes, son client et ses autres donnees enregistrees. Ajustez selon vos besoins, puis enregistrez et envoyez.
- Dans le **tiroir d'ajout rapide**, cliquez sur **Utiliser un modele**, selectionnez un modele enregistre, et toutes les lignes de facturation sont pre-remplies. Ajustez selon vos besoins, puis enregistrez et envoyez.

## Attribuer une facture a un objet

Si le revenu concerne une propriete locative, un vehicule ou un autre actif, selectionnez l'objet dans le formulaire de facture. La facture est alors liste sur la page de detail de cet objet et integree a son chiffre d'affaires total. Cela vaut aussi bien pour les factures generees a partir d'un contrat de location que pour les attributions directes, comme les regularisations de charges de copropriete, les factures ponctuelles et les factures de vente.

## Details de la facture

Chaque facture dispose d'une page de detail affichant :

- Informations du client
- Lignes de facturation avec sous-totaux
- Ventilation de la TVA
- Montant total
- Statut et historique
- Lien de paiement (si envoye)

## Actions

L'action principale sur la page de detail de la facture depend du statut de la facture :

- **Envoyer** — Disponible pour les factures brouillon, envoyees et en retard. C'est la prochaine etape principale tant que la facture n'a pas encore atteint le client.
- **Dupliquer** — Affiche pour les factures annulees afin de les recreer rapidement.
- **Marquer comme payee** — Affiche lorsqu'un client signale un paiement, pour le confirmer au lieu de renvoyer la facture.

Des actions supplementaires se trouvent dans le menu deroulant a cote de l'action principale :

- **Telecharger le PDF** — Telechargez la facture sous forme de document PDF mis en forme professionnellement avec le logo de votre entreprise, les couleurs de votre marque et tous les details de la facture.
- **Annuler** — Annulez une facture qui ne doit plus etre payee. Les factures annulees restent dans vos archives a des fins d'audit.
- **Dupliquer** — Creez une copie d'une facture existante, utile pour la facturation recurrente au meme client.
- **Envoyer un rappel** — Envoyez un rappel de paiement pour les factures en retard.

### Envoyer

Envoyez la facture a votre client par e-mail. L'e-mail comprend :

- Un message personnalisable (base sur votre modele d'e-mail)
- La facture PDF en piece jointe
- Un lien de paiement pour le paiement en ligne

Avant l'envoi, l'apercu d'e-mail montre le message exactement comme le client le recevra. La boite d'envoi propose des options pour le bouton **Voir**, le bouton **Telecharger**, la **piece jointe PDF**, les **lignes de facturation** et, si les paiements en ligne sont actives, le bouton **Confirmer le paiement**. Ces options sont immediatement refletees dans l'apercu, donc ce que vous voyez est ce que le client recevra.

Si votre espace de travail a des conditions generales dans Documents, l'apercu d'e-mail comprend aussi l'option **Joindre les conditions generales**. Pour les factures, elle est desactivee par defaut. Quand elle est activee, le PDF des conditions actuelles est joint a l'e-mail et l'envoi est enregistre comme evenement de remise sur le document des conditions.

### Envoyer en tant que facture electronique Peppol

Si votre workspace est sur le plan Pro et que la [facturation electronique Peppol](/fr/features/peppol) est activee, la boite d'envoi propose aussi **Facture electronique (Peppol)**. La facture est alors livree numeriquement dans le logiciel comptable de votre client, au lieu de l'envoyer par e-mail. Vous choisissez par facture quel canal utiliser.

### Telecharger le PDF

Telechargez la facture sous forme de document PDF mis en forme professionnellement. Le PDF inclut le logo de votre entreprise, les couleurs de votre marque et tous les details de la facture.

### Marquer comme payee

Confirmez manuellement le paiement lorsqu'un client paie par virement bancaire ou autre methode hors ligne.

### Annuler

Annulez une facture qui ne doit plus etre payee. Les factures annulees restent dans vos archives a des fins d'audit.

### Dupliquer

Creez une copie d'une facture existante -- utile pour la facturation recurrente au meme client.

### Envoyer un rappel

Envoyez un rappel de paiement pour les factures en retard. Si votre espace de travail a activé les paiements en ligne, le courriel de rappel offre au client les mêmes options de paiement que la facture d'origine : un bouton **Voir \u0026 payer**, un bouton **Confirmer le paiement** et un QR-code sur le PDF pour scanner et payer.

## Actions groupees

Selectionnez plusieurs factures dans la liste pour effectuer des actions groupees :

- **Marquer comme envoyee** -- Marquez plusieurs factures brouillon en une fois comme envoyees
- **Marquer comme payees** -- Enregistrez le paiement de plusieurs factures
- **Archiver** -- Deplacez les factures vers les archives
- **Supprimer** -- Supprimez definitivement des factures

La suppression definitive d'une facture (suppression individuelle, action groupee, vidage de la corbeille ou suppression totale) efface le lien avec les depenses associees. Ces depenses reviennent dans la liste des depenses non facturees et peuvent etre ajoutees a une autre facture.

La finalisation groupée applique les mêmes contrôles de TVA et de statut que pour l'envoi d'une seule facture. Les factures qui échouent à un contrôle sont ignorées; l'écran de résultats indique pourquoi.

## Liens de paiement

Lorsque vous envoyez une facture, un lien de paiement unique est genere. Votre client peut :

1. Cliquer sur le lien dans l'e-mail
2. Consulter la facture dans le **portail client**
3. Payer directement en ligne via votre compte Mollie ou Stripe connecte

Le paiement est automatiquement enregistre et le statut de la facture passe a **Payee**.

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

Les remboursements partiels inities chez Mollie ou Stripe (par exemple, lorsque vous ne remboursez qu'une partie du montant la-bas) apparaissent desormais dans la liste des paiements avec la date du remboursement et le montant restant comptabilise.

Les methodes de paiement hors ligne (virement bancaire, especes) utilisent le chemin d'annulation existant : le paiement est marque comme annule sans remboursement cote prestataire. Quand vous annulez un paiement, le statut de la facture revient a l'etat qui correspond a son historique. Si la facture avait deja ete envoyee par e-mail au client, elle repasse a **Envoyee** ; si elle n'avait jamais ete envoyee, elle repasse a **En attente**. L'historique d'envoi original est conserve.

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
- **Recherche** -- Rechercher par numero de facture, nom de client, reference ou notes
- **Liens profonds** -- Les notifications et e-mails pointant directement vers une facture effacent toute plage de dates active a l'ouverture de la page, pour que la facture ne soit pas masquee par un filtre existant

## Export

Exportez vos factures au format CSV pour les utiliser dans Excel, Google Sheets ou votre logiciel de comptabilite.

::: info
L'export CSV necessite le plan **Pro** ou superieur.
:::

## Finalisation et envoi

Lorsque vous finalisez ou envoyez une facture, MyCompanyDesk verifie que votre entreprise a un numero de TVA et un IBAN dans votre profil. Aux Pays-Bas, un numero de TVA est obligatoire sur la facture, et votre IBAN indique aux clients ou payer.

Si l'un de ces champs est manquant, une fenetre s'ouvre pour que vous puissiez le remplir directement. Une fois enregistre, la facture est automatiquement finalisee.

L'application bloque aussi la finalisation si les informations de votre entreprise sont incompletes (par exemple un nom ou une adresse manquants) ou si la facture ne contient aucune ligne. Le message d'erreur indique exactement ce qui manque, afin que vous puissiez le corriger avant que la facture n'atteigne le client.

Les quantites sur le PDF sont formatees dans la meme langue que le reste du document, donc une facture en anglais utilise la presentation anglaise des nombres et une facture neerlandaise utilise la presentation neerlandaise.

Si votre espace de travail utilise la numerotation manuelle, l'application vous demande aussi le numero de facture lors de la finalisation ou de l'envoi. MyCompanyDesk propose le numero suivant de votre serie, mais vous pouvez saisir le numero de votre choix. Le numero est obligatoire et doit etre unique.

Vous attendez encore votre numero de TVA de l'administration fiscale, ou vous beneficiez du regime de la franchise en base (KOR) ? Vous pouvez passer l'alerte et continuer malgre tout. Ajoutez votre numero de TVA des que vous l'avez.

Une fois une facture finalisee, vous ne pouvez plus l'archiver ou la supprimer en une etape, car le numero de facture a deja ete utilise. Utilisez plutot le flux d'annulation ou d'avoir pour une facture finalisee qui ne doit plus etre payee.

## Recevoir des factures d'autres utilisateurs MyCompanyDesk

Lorsqu'un fournisseur qui utilise aussi MyCompanyDesk vous envoie une facture par e-mail, vous pouvez la recevoir directement comme dépense en brouillon structuré. Les montants sont tirés de la facture elle-même, donc aucune saisie manuelle n'est nécessaire. Le brouillon est toujours créé avec le statut "à vérifier" et n'est comptabilisé qu'après votre validation.

Cette fonctionnalité est désactivée par défaut. Activez-la dans **Paramètres > Automatisations** (`/settings/automatisering`), rubrique **Factures d'autres utilisateurs MyCompanyDesk**. Vous pouvez la désactiver à tout moment au même endroit.

Quand la fonctionnalité est active :

- Chaque facture entrante apparaît comme dépense en brouillon dans **Dépenses**, déjà pré-remplie avec le nom du fournisseur et les montants des lignes.
- La description indique l'espace de travail MyCompanyDesk expéditeur et que la facture est arrivée via MyCompanyDesk.
- Une règle de fournisseur fiable peut pré-remplir la catégorie, mais le brouillon reste "à vérifier" pour éviter toute comptabilisation automatique.
- La même facture ne peut jamais donner lieu à deux brouillons : un mécanisme dédoublonné dans la base de données bloque les doublons, même si l'expéditeur renvoie l'e-mail.
- Pour protéger votre file de vérification, MyCompanyDesk limite chaque expéditeur à dix brouillons dans votre espace de travail par fenêtre glissante de 24 heures. Cette limite est définie dans `apps/api/src/modules/invoices/network-delivery.service.js#NETWORK_DAILY_PAIR_CAP`.

La fonctionnalité est gratuite des deux côtés. Elle ne fonctionne que si le fournisseur envoie la facture à une boîte e-mail hébergée par MyCompanyDesk pour vous. Si vous préférez un canal réseau, vous pouvez aussi recevoir les factures fournisseurs via la [facturation électronique Peppol](/fr/features/peppol).

## Conseils

- Configurez vos [modeles d'e-mail](/fr/settings/email) avant d'envoyer votre premiere facture
- Utilisez les [factures recurrentes](/fr/features/recurring-invoices) pour la facturation reguliere
- Consultez la page des [rapports](/fr/features/reports) pour des analyses de revenus
- Activez les [suggestions IA](/fr/advanced/ai-features) pour des ameliorations intelligentes des descriptions
- Utilisez la [facturation electronique Peppol](/fr/features/peppol) lorsque votre client prefere une livraison numerique
