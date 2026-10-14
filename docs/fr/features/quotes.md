---
title: Devis
description: "Créez et envoyez des devis, suivez leur acceptation et convertissez un devis accepté en facture en une seule étape."
---

# Devis

Envoyez des devis professionnels à vos clients potentiels et convertissez-les en factures une fois acceptés.

## Vue d'ensemble

La section Devis vous permet de créer, d'envoyer et de suivre vos devis. Les devis suivent un parcours proche de celui des factures, mais ce sont des estimations sans engagement.

## Créer un devis

1. Ouvrez **Devis** et cliquez sur **Créer un devis**
2. Sélectionnez ou créez un **client**
3. Ajoutez des **lignes** avec descriptions, quantités, prix et taux de TVA
4. Fixez une date de **validité** (durée pendant laquelle le devis reste valable)
5. Ajoutez des **notes** si besoin
6. Cliquez sur **Enregistrer**

Le formulaire de devis ressemble au formulaire de facture : si vous savez créer une facture, vous savez déjà créer un devis. Les devis sont illimités dans tous les abonnements, Desk compris.

Le formulaire porte le même choix que celui des factures, dans l'en-tête de colonne du champ prix : prix avec ou sans TVA. Avec des prix TTC, vous tapez ce que paie le client et la TVA en est extraite. Voir [Factures](/fr/features/invoices#prix-ttc).

## Des photos sur votre devis

Un devis peut contenir jusqu'à douze photos. Elles montrent ce dont il s'agit : l'emplacement, la situation actuelle ou le dégât avant votre intervention. Ajoutez-les sur le devis avec **Ajouter des photos**, depuis la caméra ou depuis votre galerie.

Chaque photo porte une description facultative, pour que le client sache ce qu'il regarde. Vous pouvez changer l'ordre des photos ou en supprimer. Les photos ajoutées avant l'enregistrement du devis sont gardées en attente : le devis est enregistré comme brouillon automatiquement, pour que rien ne se perde.

Les photos figurent sous les lignes, à trois endroits : dans le PDF du devis, sur la page de devis publique que votre client ouvre, et dans la vue de signature. Chaque photo est réduite de notre côté à une taille adaptée au web : ajouter des photos ne ralentit pas le devis. Si les photos sont trop lourdes ensemble pour une pièce jointe, le PDF ne garde que celles qui tiennent et l'application vous signale que toutes n'y sont pas.

Dès que le devis est accepté ou refusé, en attente de signature ou dans la corbeille, les photos sont verrouillées et ne peuvent plus être modifiées.

## Envoyer un devis

1. Ouvrez la page du devis
2. Cliquez sur **Envoyer**
3. Vérifiez l'aperçu de l'e-mail
4. Cliquez sur **Envoyer** pour le transmettre à votre client

Dans la fenêtre d'envoi, vous trouvez des interrupteurs pour le **Bouton afficher (lien en ligne)**, le **Bouton télécharger** et la **Pièce jointe PDF**. Par défaut, le PDF est joint pour que le client puisse examiner le devis.

Pour un devis, au moins l'un de ces interrupteurs doit être activé ; sinon le client ne peut ouvrir le devis nulle part et le bouton **Envoyer** est désactivé. Les factures gardent toujours un bouton vers le portail client en secours, mais pas les devis.

Si votre espace de travail contient des conditions générales dans Documents, l'aperçu de l'e-mail affiche aussi l'interrupteur **Joindre les conditions générales**. Il est activé par défaut pour les devis. Activé, le PDF des conditions en vigueur est joint à l'e-mail et l'envoi est enregistré comme moment de remise sur le document des conditions.

Un devis a aussi besoin d'au moins une ligne avant de pouvoir être finalisé ou envoyé : l'application refuse un devis vide et vous demande d'ajouter d'abord une ligne.

## Activité client

Une fois qu'un devis a été envoyé par e-mail, la page de détail affiche des pastilles d'activité qui fonctionnent comme pour les factures :

- **Envoyé** : l'e-mail a quitté votre espace de travail.
- **Ouvert** : le client a ouvert l'e-mail (suivi par un pixel intégré à l'envoi du devis).
- **Consulté** : le client a ouvert la page publique du devis.
- **Téléchargé** : le client a téléchargé le PDF du devis.

Un devis n'affiche jamais une pastille **Payé**, car les devis ne sont pas payés directement ; un devis signé apparaît dans sa propre carte de signature.

Les pastilles restent inactives tant que le devis n'a pas réellement été envoyé. Avant cela, la carte reste masquée pour ne pas encombrer la page. L'activité des devis et celle des factures restent séparées, pour que les signaux d'un devis ne se mélangent jamais à ceux d'une facture.

## Faire signer un devis en ligne

Vous pouvez demander à un client de signer un devis en ligne au lieu de ne l'envoyer que sous forme de PDF. Ouvrez la page de détail du devis et choisissez **Envoyer pour signature** pour envoyer une demande de signature au client. Le statut du devis passe à **Envoyé** afin que vous puissiez le suivre. Le lien de signature s'ouvre dans le navigateur du client, pas dans l'appli MyCompanyDesk, même lorsque l'appli est installée sur son téléphone.

Si l'e-mail de signature ne peut pas être livré en raison d'un problème avec vos paramètres d'envoi, un message d'erreur apparaît vous demandant de vérifier vos paramètres e-mail et de réessayer. La demande de signature elle-même est créée sur le serveur, vous pouvez donc la renvoyer une fois les paramètres e-mail corrigés.

Une demande de signature ne peut plus être envoyée une fois qu'un devis a été refusé ou après la date de validité. L'action **Envoyer pour signature** est bloquée pour les devis dont le statut est **Refusée** ou **Expiré**, afin que vous ne puissiez plus demander à un client de signer un devis qui n'est plus actif. L'action est également refusée lorsque le client a déjà signé le devis : un devis signé ne reçoit pas de seconde demande de signature. Et un devis que vous avez déjà passé vous-même sur **Acceptée** ne peut plus être refusé via le lien de signature ; le client peut toujours le signer via le lien.

Le bloc de signature dans le PDF du devis suit la langue du document : si le devis est réglé sur l'anglais, l'allemand ou le français, le bloc de signature et l'historique de signature qui l'accompagne paraissent dans cette même langue. Les contrats restent en néerlandais.

## Actions sur la page du devis

Le bouton principal de la page du devis suit l'étape où en est le devis :

- **Envoyer** : sur un brouillon ou un devis finalisé, pour que le devis parvienne au client. Si le devis doit être signé en ligne, **Envoyer pour signature** prend cette place.
- **Marquer comme accepté** : sur un devis envoyé, quand le client a dit oui en dehors du lien de signature.
- **Convertir en facture** : dès que le client a accepté le devis, pour le transformer en facture en un clic. Le menu des autres actions le propose aussi pour un devis envoyé ou un brouillon, et chaque conversion fait passer le devis en **Acceptée** ; un brouillon reçoit alors son numéro de devis.
- **Voir la facture** : une fois le devis facturé.
- **Dupliquer** : sur un devis refusé, pour le réémettre rapidement.

D'autres actions se trouvent, selon le statut, dans le menu à côté du bouton principal :

- **Aperçu** et **Télécharger PDF** : consulter le PDF du devis en plein écran, ou le télécharger mis en forme avec votre logo, vos couleurs et toutes les données du devis.
- **Dupliquer** : créer une copie du devis.
- **Créer un bon d'intervention** : commencer un [bon d'intervention](/fr/features/werkbonnen) avec les lignes du devis.
- **Convertir en contrat** : faire de l'accord un [contrat](/fr/features/contracts) (Office).
- **Envoyer au comptable**.

## Aperçu du document

Chaque devis enregistré dispose d'un aperçu PDF en direct sur sa page, comme une facture. L'aperçu montre le devis exactement comme votre client le verra.

L'en-tête de l'aperçu comporte les boutons **Télécharger PDF**, **Imprimer** et **Modifier le design**. Cliquez sur **Modifier le design** pour accéder directement à la mise en page des factures et ajuster l'apparence de toutes vos factures, devis et rappels. Une fois terminé, vous revenez au devis d'où vous veniez. Sur mobile, la même action se trouve dans le menu des autres actions, pour garder l'en-tête de l'aperçu dégagé.

## Statuts des devis

| Statut | Description |
|---|---|
| **Brouillon** | Créé mais pas envoyé |
| **Finalisé** | Numéroté et prêt, pas encore envoyé |
| **Envoyée** | Transmis au client |
| **Acceptée** | Le client a accepté le devis |
| **Refusée** | Le client a refusé le devis |
| **Expiré** | Date de validité dépassée |

Une fois un devis accepté transformé en facture, le devis garde le statut **Acceptée** et son bouton principal devient **Voir la facture**.

## Convertir en facture

Dès que votre client accepte votre devis, convertissez-le en facture en un clic :

1. Ouvrez le devis accepté
2. Cliquez sur **Convertir en facture**
3. Vérifiez la facture préremplie (toutes les lignes sont reprises)
4. Faites les ajustements nécessaires
5. Enregistrez et envoyez la facture

## Acompte à l'acceptation

Un devis peut inclure un acompte, facturé dès que le client signe. Dans le formulaire de devis, cherchez la section **Acompte à l'acceptation** et choisissez :

- **%** pour un pourcentage du total du devis
- **€** pour un montant fixe que vous saisissez vous-même
- **Aucun** pour aucun acompte

La TVA sur l'acompte est calculée sur la facture d'acompte avec les taux des lignes sous-jacentes. Le PDF du devis et l'e-mail nomment l'acompte sous son propre libellé « Acompte à l'acceptation », et un montant fixe y est toujours indiqué HT. Un acompte doit être d'au moins 0,50 €.

Sur la page que votre client signe, l'acompte forme sa propre section : il peut payer en ligne immédiatement, ouvrir la facture d'acompte ou payer plus tard via le lien dans l'e-mail.

Quand le client signe, la facture d'acompte est créée à partir des mêmes lignes. Avec le réglage par défaut, elle est envoyée immédiatement avec un lien de paiement ; vous pouvez aussi la préparer en brouillon et l'envoyer vous-même. La facture d'acompte reçoit son propre délai de paiement, plus court que votre délai habituel, car le client vient de dire oui. La page de détail du devis suit la facture d'acompte sur la carte **Acompte** : convenu, brouillon, envoyée, en retard ou payée.

Quand vous convertissez le reste du travail en facture, cette facture finale reçoit une ligne négative **Déduit l'acompte**, pour que le client ne paie que le restant. Cette déduction s'applique aussi quand le travail du devis est facturé via un bon d'intervention ; cette facture ne peut être créée que lorsque la facture d'acompte n'est plus un brouillon. Une fois le travail facturé via un bon d'intervention, l'ajout d'un acompte au devis est refusé. La facture d'acompte elle-même reste une facture normale dans vos listes, dont la TVA est due sur la période de sa propre date de facture. Retirez la déduction et le client paie le montant complet en plus de l'acompte ; vous pourrez déduire l'acompte à nouveau plus tard.

Vous recevez une notification dès que la facture d'acompte a été envoyée, attend en brouillon ou n'a pas pu être envoyée. La valeur par défaut de l'espace se règle sous **Paramètres › Factures et devis**, dans Acompte : le pourcentage par défaut sur les nouveaux devis, le délai de paiement (7 jours par défaut) et l'envoi immédiat à la signature ou la préparation en brouillon. Vous ajustez ou retirez l'acompte par devis.

## Demandes de devis

Les clients peuvent soumettre des demandes via votre [site web](/fr/advanced/business-page). À côté de **Devis** se trouve un second onglet, nommé d'après le type de formulaire de votre site : **Demandes de devis**, **Messages**, **Demandes de rendez-vous** ou **Demandes de rappel**. Toutes les demandes entrantes y arrivent. Le type est inscrit sur la demande elle-même, si bien que l'e-mail, la notification et la liste le nomment comme le visiteur l'entendait.

### Gérer les demandes

Chaque demande affiche :

- le nom et l'e-mail du client (pour une demande de rappel : le téléphone, et un e-mail seulement si le formulaire le laisse facultatif)
- le service demandé ou la description
- la date de soumission
- le statut
- les photos quand le visiteur en a envoyé (voir ci-dessous)

La liste peut se limiter à **Devis uniquement**, pour qu'un flot de messages n'enterre pas les devis qui restent à faire.

### Statuts des demandes

| Statut | Description |
|---|---|
| **Nouveau** | Vient d'arriver, pas encore examinée |
| **Examiné** | Vous avez lu la demande |
| **Devis envoyé** | Vous avez répondu avec un devis (pour un message : **Répondu** ; pour un rendez-vous : **Planifié** ; pour un rappel : **Rappelé**) |
| **Fermé** | Demande traitée (acceptée ou refusée) |

### Photos sur une demande

Sur les formulaires de devis et de message de votre site, vous pouvez activer **Les visiteurs peuvent envoyer des photos**. Un visiteur ajoute alors jusqu'à trois photos à la demande, chacune au maximum 10 Mo, en JPEG, PNG ou WebP. Une photo iPhone au format HEIC ou HEIF reçoit immédiatement un message qui demande un format courant. Les photos figurent sur la demande et s'ouvrent en pleine taille depuis celle-ci.

Les formulaires de rappel et de rendez-vous n'acceptent pas de photos : ils demandent un moment, pas la description d'un chantier.

### Demandes de rappel

Une demande de rappel est pour les visiteurs qui préfèrent le téléphone : ils laissent leur nom et leur numéro, et le formulaire n'exige aucune adresse e-mail. Une demande de rappel a **Rappeler** comme action principale et **Marquer comme rappelé** pour les clôturer. Quand vous transformez la demande en devis et l'envoyez, le statut suit la même marche que pour toute autre demande.

Le rappel est un choix propre à chaque bloc de formulaire de votre site ; le réglage global de l'entreprise couvre seulement les types devis, message et rendez-vous. Pratique pour les clients sans e-mail : ils demandent via votre site, vous les rappelez.

### Répondre à une demande

1. Ouvrez la demande
2. Cliquez sur **Marquer comme examiné** après lecture
3. Cliquez sur **Créer un devis** pour générer un devis pour ce client
4. Le devis est prérempli avec les informations du client

Lorsque vous créez un devis à partir d'une demande, le message du demandeur s'affiche en lecture seule au-dessus du champ de notes, marqué comme visible uniquement par vous. Il n'atterrit plus dans les notes elles-mêmes, car les notes s'impriment sur le PDF du devis et apparaissent dans le portail client.

### Brouillon de devis IA à partir d'une demande

Quand un client soumet une demande de devis via le formulaire de votre site, MyCompanyDesk peut rédiger automatiquement un brouillon de devis. L'IA lit le texte de la demande et votre propre **Catalogue**, puis propose les lignes qu'elle y retrouve.

- Les articles de votre catalogue gardent leur prix, leur taux de TVA et leur unité. L'IA ne suggère que des quantités.
- Le travail qui ne figure pas dans votre catalogue devient une ligne de description au prix de 0, pour que vous fixiez le prix vous-même.
- Le brouillon est créé comme devis au statut **Brouillon**. Il n'est pas envoyé automatiquement et aucune fiche client n'est créée à partir du formulaire non vérifié.
- Une notification vous indique qu'un brouillon est prêt. Ouvrez la demande, vérifiez les lignes, liez ou créez le client, et envoyez le devis quand vous le souhaitez.

C'est un brouillon automatique, pas une proposition finalisée. Vérifiez toujours les prix et les descriptions avant d'envoyer.

### Client suggéré depuis la demande

Quand vous cliquez sur **Créer un devis** sur une demande, le nom et l'adresse e-mail du demandeur apparaissent comme client suggéré en haut du champ client. Cliquez sur **Utiliser** pour créer le client et l'ajouter au devis, ou ignorez la suggestion et choisissez vous-même un client existant. Le demandeur ne devient client qu'une fois votre confirmation donnée ; un client existant dont le nom ressemble seulement n'est pas choisi en silence.

## Actions groupées

Pendant une sélection, une colonne de cases à cocher apparaît dans la liste, sinon nulle part ; une liste vide n'a pas du tout de bouton de sélection.

- **Marquer comme envoyé** : passer en envoyé des devis que vous avez remis en dehors de MyCompanyDesk. Aucun e-mail ne part.
- **Archiver** : déplacer les devis dans l'archive
- **Supprimer** : déplacer les devis dans la corbeille

Dans l'archive et la corbeille, vous restaurez les devis.

## Conseils

- En haut de la page des demandes, vous voyez combien de demandes sont nouvelles et combien il y en a au total
- Les devis peuvent être liés à des projets pour mieux suivre le travail

## Contexte tableau de bord

La carte **Devis** du tableau de bord suit les 30 derniers jours, de la demande à la commande : combien de demandes sont arrivées, combien de devis vous avez émis (et combien restent ouverts ou sont au point mort) et combien sont devenus des commandes. En dessous figurent vos plus gros devis ouverts, chacun avec un bouton **Relancer**.

Les demandes de devis arrivent par le formulaire de votre site. Voir [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox) pour configurer le formulaire.
