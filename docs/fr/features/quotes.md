---
title: Devis
description: "Créez et envoyez des devis, suivez leur acceptation et convertissez un devis accepté en facture en une seule étape."
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

## Des photos sur votre devis

Un devis peut contenir jusqu'à douze photos. Elles montrent ce dont il s'agit : l'emplacement, la situation actuelle ou le dégât avant votre intervention. Ajoutez-les sur le devis avec **Ajouter des photos**, depuis la caméra ou depuis votre galerie.

Chaque photo porte une description facultative, pour que le client sache ce qu'il regarde. Vous pouvez changer l'ordre des photos ou en supprimer. Les photos ajoutées avant l'enregistrement du devis sont gardées en attente : le devis est enregistré comme brouillon automatiquement, pour que rien ne se perde.

Les photos figurent sous les lignes, à trois endroits : dans le PDF du devis, sur la page de devis publique que votre client ouvre, et dans la vue de signature. Chaque photo est réduite de notre côté à une taille adaptée au web : ajouter des photos ne ralentit pas le devis. Si les photos sont trop lourdes ensemble pour une pièce jointe, le PDF ne garde que celles qui tiennent et l'application vous signale que toutes n'y sont pas.

Dès que le devis est accepté ou refusé, en attente de signature ou dans la corbeille, les photos sont verrouillées et ne peuvent plus être modifiées.

## Envoyer un devis

1. Ouvrez la page de detail du devis
2. Cliquez sur **Envoyer**
3. Verifiez l'apercu de l'e-mail
4. Cliquez sur **Envoyer** pour le transmettre a votre client

Dans la boite d'envoi, vous trouverez des options pour le bouton **Consulter**, le bouton **Telecharger** et la **piece jointe PDF**. Par defaut, le PDF est joint pour que le client puisse examiner le devis.

Pour un devis, au moins l'une de ces options doit etre activee ; sinon le client ne peut pas ouvrir le devis et le bouton **Envoyer** est desactive. Les factures conservent toujours un bouton vers le portail client en secours, mais pas les devis.

Si votre espace de travail a des conditions generales dans Documents, l'apercu d'e-mail propose aussi l'option **Joindre les conditions generales**. Elle est activee par defaut pour les devis. Quand elle est activee, le PDF des conditions actuelles est joint a l'e-mail et l'envoi est enregistre comme evenement de remise sur le document des conditions.

Un devis a aussi besoin d'au moins une ligne avant de pouvoir être finalisé ou envoyé : l'application refuse un devis vide et vous demande d'ajouter d'abord une ligne.

## Activité client

Une fois qu'un devis a été envoyé par e-mail, la page de détail affiche des pastilles d'activité qui fonctionnent comme pour les factures :

- **Envoyé**: l'e-mail a quitté votre espace de travail.
- **Ouvert**: le client a ouvert l'e-mail (suivi par un pixel intégré à l'envoi du devis).
- **Consulté**: le client a ouvert la page publique du devis.
- **Téléchargé**: le client a téléchargé le PDF du devis.

Un devis n'affiche jamais une pastille **Payé**, car les devis ne sont pas payés directement ; un devis signé apparaît dans sa propre carte de signature.

Les pastilles restent inactives tant que le devis n'a pas réellement été envoyé. Avant cela, la carte reste masquée pour ne pas encombrer la page.

Les événements sont stockés dans le même journal `invoice_customer_events` que les activités de facturation, séparés par une colonne `entity_type` afin que les devis et les factures ne se mélangent pas.

Source : `apps/api/src/modules/invoices/customer-events.service.js` - `recordEvent`, `getEventsForQuote` ; `apps/api/src/db/migrations/20270302000000_customer_events_entity_type.js` - colonne `entity_type` ; `apps/api/src/modules/quotes/quotes.routes.js` - `GET /:id/customer-events`.

## Faire signer un devis en ligne

Vous pouvez demander à un client de signer un devis en ligne au lieu de ne l'envoyer que sous forme de PDF. Ouvrez la page de détail du devis et choisissez **Envoyer pour signature** pour envoyer une demande de signature au client. Le statut du devis passe à **Envoyé** afin que vous puissiez le suivre.

Si l'e-mail de signature ne peut pas être livré en raison d'un problème avec vos paramètres d'envoi, un message d'erreur apparaît vous demandant de vérifier vos paramètres e-mail et de réessayer. La demande de signature elle-même est créée sur le serveur, vous pouvez donc la renvoyer une fois les paramètres e-mail corrigés.

Une demande de signature ne peut plus être envoyée une fois qu'un devis a été refusé ou après la date de validité. L'action **Envoyer pour signature** est bloquée pour les devis dont le statut est **Refusé** ou **Expiré**, afin que vous ne puissiez plus demander à un client de signer un devis qui n'est plus actif. L'action est également refusée lorsque le client a déjà signé le devis : un devis signé ne reçoit pas de seconde demande de signature. Et un devis que vous avez déjà passé vous-même sur **Accepté** ne peut plus être refusé via le lien de signature ; le client peut toujours le signer via le lien.

## Actions sur la page de detail du devis

L'action principale sur la page de detail du devis depend du statut du devis :

- **Envoyer** — Disponible pour les devis brouillon et envoyes, pour que le devis puisse atteindre le client.
- **Convertir en facture** — Disponible des que le client a accepte le devis, le transformant en facture en un clic.
- **Dupliquer / creer une nouvelle version** — Disponible pour les devis refuses ou expires, pour les reemettre rapidement.

Des actions supplementaires se trouvent dans le menu deroulant a cote de l'action principale :

- **Apercu du PDF** — Consultez le PDF du devis en plein ecran avant de l'envoyer.
- **Telecharger le PDF** — Telechargez le devis sous forme de document PDF mis en forme professionnellement avec le logo de votre entreprise, les couleurs de votre marque et tous les details du devis.
- **Copier le devis** — Creez une copie du devis existant.

## Apercu du document

Chaque devis enregistre dispose d'un apercu PDF en direct sur sa page de detail, comme pour une facture. L'apercu montre le devis exactement comme votre client le verra.

L'en-tete de l'apercu comporte des boutons **Telecharger le PDF**, **Imprimer** et **Modifier le design**. Cliquez sur **Modifier le design** pour acceder directement a la mise en page des factures et ajuster l'apparence de toutes vos factures, devis et relances. Une fois vos modifications terminees, vous revenez au devis d'origine. Sur mobile, la meme action se trouve dans le menu deroulant pour garder l'en-tete de l'apercu degage.

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

## Acompte à l'acceptation

Un devis peut inclure un acompte, facturé dès que le client signe. Dans le formulaire de devis, cherchez la section **Acompte à l'acceptation** et choisissez :

- **%** pour un pourcentage du total du devis
- **€** pour un montant fixe que vous saisissez vous-même
- **Aucun** pour aucun acompte

La TVA sur l'acompte est calculée sur la facture d'acompte avec les taux des lignes sous-jacentes. Le PDF du devis et l'e-mail nomment l'acompte sous son propre libellé « Acompte à l'acceptation », et un montant fixe y est toujours indiqué HT. Un acompte doit être d'au moins 0,50 €.

Sur la page que votre client signe, l'acompte forme sa propre section : il peut payer en ligne immédiatement, ouvrir la facture d'acompte ou payer plus tard via le lien dans l'e-mail.

Quand le client signe, la facture d'acompte est créée à partir des mêmes lignes. Avec le réglage par défaut, elle est envoyée immédiatement avec un lien de paiement ; vous pouvez aussi la préparer en brouillon et l'envoyer vous-même. La facture d'acompte reçoit son propre délai de paiement, plus court que votre délai habituel, car le client vient de dire oui. La page de détail du devis suit la facture d'acompte sur la carte **Acompte** : convenu, brouillon, envoyée, en retard ou payée.

Quand vous convertissez le reste du travail en facture, cette facture finale reçoit une ligne négative **Déduit l'acompte**, pour que le client ne paie que le restant. La facture d'acompte elle-même reste une facture normale dans vos listes, dont la TVA est due sur la période de sa propre date de facture. Retirez la déduction et le client paie le montant complet en plus de l'acompte ; vous pourrez déduire l'acompte à nouveau plus tard.

Vous recevez une notification dès que la facture d'acompte a été envoyée, attend en brouillon ou n'a pas pu être envoyée. La valeur par défaut de l'espace se règle sous **Paramètres > Factures et devis**, dans Acompte : le pourcentage par défaut sur les nouveaux devis, le délai de paiement (7 jours par défaut) et l'envoi immédiat à la signature ou la préparation en brouillon. Vous ajustez ou retirez l'acompte par devis.

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
4. Le devis est pré-rempli avec les informations du client

Lorsque vous créez un devis à partir d'une demande, le message du demandeur s'affiche en lecture seule au-dessus du champ de notes, marqué comme visible uniquement par vous. Il n'atterrit plus dans les notes elles-mêmes, car les notes s'impriment sur le PDF du devis et apparaissent dans le portail client.

### Brouillon de devis IA à partir d'une demande

Quand un client soumet une demande de devis via votre constructeur de site ou votre formulaire de contact, MyCompanyDesk peut automatiquement rediger un brouillon de devis. L'IA lit le texte de la demande et votre propre catalogue, puis propose des lignes qu'elle peut faire correspondre.

- Les articles du catalogue correspondants conservent leur prix catalogue, leur taux de TVA et leur unite. L'IA ne suggere que des quantites.
- Le travail qui ne correspond pas au catalogue devient une ligne de description au prix de 0, pour que vous puissiez fixer le prix vous-meme.
- Le brouillon est cree comme un devis au statut **Brouillon**. Il n'est pas envoye automatiquement et aucune fiche client n'est creee a partir du formulaire non verifie.
- Une notification vous indique qu'un brouillon est pret. Ouvrez la demande, verifiez les lignes, liez ou creez le client, et envoyez le devis quand vous le souhaitez.

C'est un brouillon automatique, pas une proposition finalisee. Verifiez toujours les prix et les descriptions avant d'envoyer.

### Client suggéré depuis la demande

Quand vous cliquez sur **Créer un devis** sur une demande, le nom et l'adresse e-mail du demandeur apparaissent comme client suggéré en haut du champ client. Cliquez sur **Utiliser** pour créer le client et l'ajouter au devis, ou ignorez la suggestion et choisissez vous-même un client existant. Le demandeur ne devient client qu'une fois votre confirmation donnée ; un client existant dont le nom ressemble seulement n'est pas choisi en silence.

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
