---
title: Devis
---

# Devis

Envoyez des devis professionnels a vos clients potentiels et convertissez-les en factures une fois acceptes.

## Vue d'ensemble

La section devis vous permet de creer, envoyer et suivre des devis. Les devis suivent un flux similaire aux factures mais sont des estimations sans engagement.

## Creer un devis

1. Allez dans **Devis > Nouveau devis**
2. Selectionnez ou creez un **client**
3. Ajoutez des **lignes** avec descriptions, quantites, prix et taux de TVA
4. Definissez une date de **validite** (duree de validite du devis)
5. Ajoutez des **notes** optionnelles
6. Cliquez sur **Enregistrer**

Le formulaire de devis est similaire au formulaire de facture -- si vous savez creer une facture, vous savez deja creer un devis.

## Envoyer un devis

1. Ouvrez la page de detail du devis
2. Cliquez sur **Envoyer**
3. Verifiez l'apercu de l'e-mail
4. Cliquez sur **Envoyer** pour le transmettre a votre client

Le PDF du devis est joint a l'e-mail pour que le client puisse l'examiner.

Si votre espace de travail a des conditions generales dans Documents, l'apercu d'e-mail propose aussi l'option **Joindre les conditions generales**. Elle est activee par defaut pour les devis. Quand elle est activee, le PDF des conditions actuelles est joint a l'e-mail et l'envoi est enregistre comme evenement de remise sur le document des conditions.

## Faire signer un devis en ligne

Vous pouvez demander à un client de signer un devis en ligne au lieu de ne l'envoyer que sous forme de PDF. Ouvrez la page de détail du devis et choisissez **Envoyer pour signature** pour envoyer une demande de signature au client. Le statut du devis passe à **Envoyé** afin que vous puissiez le suivre.

Si l'e-mail de signature ne peut pas être livré en raison d'un problème avec vos paramètres d'envoi, un message d'erreur apparaît vous demandant de vérifier vos paramètres e-mail et de réessayer. La demande de signature elle-même est créée sur le serveur, vous pouvez donc la renvoyer une fois les paramètres e-mail corrigés.

## Brouillon de facture automatique à la signature

Si votre espace de travail a activé le paramètre optionnel sous **Paramètres > Factures > Devis**, MyCompanyDesk crée automatiquement un brouillon de facture lorsqu'un client signe un devis. Le brouillon reprend les mêmes lignes et totaux que le devis signé.

Vous trouvez le brouillon dans **Factures > Brouillons**. Vérifiez-le, ajoutez un numéro si votre espace utilise la numérotation manuelle, et envoyez-le quand vous êtes prêt. Si le brouillon ne peut pas être créé, par exemple parce qu'aucun numéro n'est disponible, vous recevez une notification pour pouvoir créer la facture vous-même.

## Actions sur la page de detail du devis

L'action principale sur la page de detail du devis depend du statut du devis :

- **Envoyer** — Disponible pour les devis brouillon et envoyes, pour que le devis puisse atteindre le client.
- **Convertir en facture** — Disponible des que le client a accepte le devis, le transformant en facture en un clic.
- **Dupliquer / creer une nouvelle version** — Disponible pour les devis refuses ou expires, pour les reemettre rapidement.

Des actions supplementaires se trouvent dans le menu deroulant a cote de l'action principale :

- **Apercu du PDF** — Consultez le PDF du devis en plein ecran avant de l'envoyer.
- **Telecharger le PDF** — Telechargez le devis sous forme de document PDF mis en forme professionnellement avec le logo de votre entreprise, les couleurs de votre marque et tous les details du devis.
- **Copier le devis** — Creez une copie du devis existant.

## Statuts des devis

| Statut | Description |
|---|---|
| **Brouillon** | Cree mais non envoye |
| **Envoye** | Transmis au client |
| **Accepte** | Le client a accepte le devis |
| **Refuse** | Le client a decline le devis |
| **Expire** | Date de validite depassee |
| **Facture** | Converti en facture |

## Convertir en facture

Une fois que votre client accepte votre devis, convertissez-le en facture en un clic :

1. Ouvrez le devis accepte
2. Cliquez sur **Convertir en facture**
3. Verifiez la facture pre-remplie (toutes les lignes sont reportees)
4. Effectuez les ajustements necessaires
5. Enregistrez et envoyez la facture

## Demandes de devis

Les clients peuvent soumettre des demandes de devis via votre [constructeur de site](/fr/advanced/business-page). Celles-ci apparaissent dans **Devis > Demandes**.

### Gerer les demandes

Chaque demande affiche :

- Nom et e-mail du client
- Service demande ou description
- Date de soumission
- Statut

### Statuts des demandes

| Statut | Description |
|---|---|
| **Nouvelle** | Vient d'etre recue, non examinee |
| **Examinee** | Vous avez lu la demande |
| **Devis envoye** | Vous avez envoye un devis en reponse |
| **Fermee** | Demande resolue (acceptee ou refusee) |

### Repondre a une demande

1. Ouvrez la demande
2. Cliquez sur **Marquer comme examinee** apres lecture
3. Cliquez sur **Creer un devis** pour generer un devis pour ce client
4. Le devis est pre-rempli avec les informations du client

## Actions groupees

- **Envoyer** -- Envoyez plusieurs devis en une fois
- **Archiver** -- Deplacez les devis vers les archives
- **Supprimer** -- Supprimez des devis

## Conseils

- Les indicateurs de demandes de devis (recues, devis envoyes, fermees) sont affiches en haut de la page des demandes
- Utilisez la fonctionnalite d'ajout rapide pour une creation rapide de devis

## Contexte tableau de bord

Les devis nécessitant un suivi apparaissent aussi dans l'onglet du tableau de bord **Bonne nouvelle** :

- **Demandes ouvertes**: combien de demandes de devis via le site attendent une réponse, plus l'attente la plus longue.
- **Devis à expiration**: combien de devis expirent cette semaine, et combien sont déjà expirés sans réponse.

Les demandes de devis proviennent du formulaire du constructeur de site. Voir [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox) pour configurer le formulaire.
