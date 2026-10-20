---
title: Contrats
description: "Gérez vos contrats de services et de location, faites-les signer en ligne et laissez-les générer vos factures (Office)."
---

# Contrats

Gérez les accords en cours avec vos clients, comme les contrats de services et de location, avec un calendrier de facturation fixe.

## Vue d'ensemble

Un contrat consigne un accord durable avec un client, par exemple un contrat de ménage mensuel, un bail ou un abonnement de maintenance. Un contrat peut générer lui-même des factures selon un calendrier fixe.

::: info
Les contrats font partie d'Office et sont un module que vous activez vous-même. Si **Contrats** n'apparaît pas dans la navigation, activez-le sous **Paramètres › Modules** (la ligne **Contrats**).
:::

## Créer un contrat

1. Ouvrez **Contrats** et cliquez sur **Créer**
2. Renseignez :
   - **Sujet** : services, location ou collaboration
   - **Client** : le client avec qui vous concluez l'accord
   - **Nom du contrat** : un nom clair (par exemple « Ménage mensuel »)
   - **Comment le prix a-t-il été convenu ?** : voir [Base tarifaire](#base-tarifaire) ci-dessous
   - **Montant (HT)** et **Taux de TVA**
   - **Récurrence** : hebdomadaire, mensuelle, trimestrielle ou annuelle
   - **Date de début**, éventuellement une **Date de fin**, et la date de la **Première facture**
   - **Quelle période la facture couvre-t-elle ?** : voir [Période facturée](#periode-facturee)
3. Cliquez sur **Enregistrer**

Vous pouvez aussi partir d'un devis : les lignes sont reprises, et un devis accepté devient un contrat sans que vous ne retypiez rien.

Le formulaire choisit aussi le modèle qui convient : quand un seul modèle de contrat correspond, il est déjà sélectionné ; aucun ne correspond ? Une note sous le formulaire indique que le contrat partirait sans conditions.

::: tip Plus d'options
Le formulaire range les données facultatives : sous **Plus d'options** se trouvent des champs supplémentaires, comme des frais de service avec leur propre montant et taux de TVA. Ils ne sont pas nécessaires pour créer le contrat, mais vous les dépliez quand vous en avez besoin.
:::

## Base tarifaire

Chaque contrat répond à la question **Comment le prix a-t-il été convenu ?** :

- **Montant fixe** : le même montant à chaque période, comme un loyer ou un forfait mensuel.
- **Taux horaire** : vous facturez les heures saisies sur les projets liés à ce contrat.
- **Taux journalier** : vous facturez les jours travaillés sur les projets liés à ce contrat.
- **Prix forfaitaire de projet** : un montant total convenu pour toute la mission, facturé une seule fois. Une mission ponctuelle de ce genre n'a pas besoin de date de facture.

Pour un taux horaire ou journalier, la page du contrat affiche la carte **Travail sous ce contrat** avec les totaux convenus, facturés et saisis, ainsi que les projets liés. Une journée compte pour 8 heures.

Un prix forfaitaire de projet ne se répète pas : le contrat génère une facture puis s'arrête.

## Statuts d'un contrat

| Statut | Signification |
| --- | --- |
| **Actif** | En cours, génère des factures |
| **En pause** | Ne génère aucune facture jusqu'à ce que vous le réactiviez |
| **Terminé** | La date de fin est passée et la dernière période a été facturée |
| **Résilié** | Vous avez mis fin à l'accord avec **Résilier le contrat** |

Les factures générées par un contrat sont toujours créées dans l'espace de travail auquel appartient le contrat.

## Mettre en pause, laisser expirer ou résilier un contrat

Vous arrêtez un contrat actif de plusieurs façons :

- **Mettre en pause** : le contrat reste en place mais ne génère plus de factures. Avec **Activer**, vous le relancez à tout moment. Les périodes entièrement comprises dans la pause ne sont pas facturées après coup.
- **Fixer une date de fin** : le contrat court jusqu'à cette date puis passe automatiquement à **Terminé**. Aucune facture n'est créée pour une période qui se termine après la date de fin.
- **Résilier le contrat** : met fin à l'accord de façon définitive. Un contrat résilié ne peut pas être résilié une seconde fois.

Si vous modifiez un contrat actif pour y ajouter une date de fin, l'application vous avertit que les factures s'arrêteront ensuite. Si vous retirez la date de fin avant qu'elle soit atteinte, le contrat continue de facturer normalement.

## Date de fin

Vous fixez une **Date de fin** en créant ou en modifiant un contrat. Laissée vide, le contrat court pour une durée indéterminée.

Quand une date de fin est fixée :

- la page du contrat affiche cette date, ou **Durée indéterminée** s'il n'y en a pas
- aucune facture n'est créée pour une période qui se termine après la date de fin
- la liste des contrats et le contrat affichent l'étiquette **Expire bientôt** quand la date de fin tombe dans les 30 jours, et **Prolonger la date de fin** vous permet de la repousser
- le statut passe automatiquement à **Terminé** une fois la date de fin passée et la dernière période facturée

## Facturation automatique

Un contrat pas encore signé porte dans la liste **En attente de signature** et ne produit aucune facture : la première vient quand le contrat est réellement signé.

Un contrat actif avec une récurrence génère de lui-même une facture à chaque période. Le système :

1. crée une facture selon les termes du contrat
2. y reporte le bon client, le montant et la description
3. utilise la même numérotation automatique des factures

Sur le contrat, la carte **Facturation automatique** répond à la question **Que se passe-t-il avec la facture ?** :

- **Brouillon** : la facture reste en brouillon. Vous la vérifiez et l'envoyez vous-même.
- **Envoyer** : la facture est automatiquement envoyée par e-mail au client.
- **Prélever** : la facture est automatiquement prélevée via le mandat de paiement enregistré (voir [Prélèvement automatique](#prelevement-automatique)).

Seul un contrat de location produit des factures marquées comme factures de loyer. Les contrats de services et de collaboration produisent des factures ordinaires. Cela détermine l'étiquette sur la facture, le modèle d'e-mail utilisé à l'envoi et l'attribution éventuelle du chiffre d'affaires à une propriété liée.

Si un contrat repose sur un taux horaire, un taux journalier ou un prix forfaitaire de projet, vous êtes aussi averti quand le budget du contrat est dépassé ou quand des heures saisies ne peuvent pas être valorisées faute de taux.

### Notifications d'envoi et de facturation automatique

Si une facture générée ne peut pas être envoyée par e-mail au client, l'application crée la notification **La facture n'est pas arrivée chez le client**. Cela arrive quand le client n'a pas d'adresse e-mail, que votre adresse d'expédition n'est pas configurée, que l'adresse est bloquée après un rebond ou un signalement de spam, ou que l'envoi échoue pour une autre raison. La notification ouvre la facture pour que vous corrigiez la cause et la renvoyiez.

Si votre espace de travail n'est plus sur Office (par exemple à la fin de la période d'essai), l'application crée la notification **La facturation automatique est à l'arrêt** dès que des factures de contrat sont prêtes mais ne partent pas. Elle indique combien de factures de contrat attendent et depuis quand, et renvoie vers la page de l'abonnement.

## Période facturée

Sous **Quelle période la facture couvre-t-elle ?**, vous choisissez quelle période une facture de contrat facture, par rapport à la date de facture :

- **Celle de la date de facture** : la période qui contient la date de facture (par défaut)
- **La précédente (à terme échu)** : la période avant la date de facture
- **La suivante (à l'avance)** : la période après la date de facture

Le formulaire montre un exemple de la ligne telle qu'elle apparaîtra sur la facture. Un contrat facturé à terme échu ne facture jamais une période antérieure à sa date de début, et la période qui contient la date de fin reçoit quand même sa facture ensuite.

## Prélèvement automatique

Pour un contrat récurrent, vous pouvez prélever le montant automatiquement via le mandat de paiement du client, au lieu d'envoyer un lien de paiement par e-mail. Il vous faut pour cela un prestataire de paiement connecté (Mollie ou Stripe, sous **Paramètres › Paiement**) et un mandat valable du client.

### Configurer le prélèvement automatique

Sur la page du contrat, cliquez sur **Configurer le prélèvement automatique** et faites confirmer le mandat par le client. Une fois le mandat valable, choisissez **Prélever** sous **Facturation automatique**. Le système prélève ensuite chaque facture générée de lui-même.

### Prélèvement échoué

Si un prélèvement échoue ou si le mandat n'est plus valable, vous recevez la notification **Le prélèvement automatique a échoué**. Elle mène directement au contrat, pour que vous reconfiguriez le mandat ou que vous contactiez le client.

## Indexation des prix

Vous ajustez les contrats récurrents à l'inflation ou à une hausse annuelle convenue. Dans la liste des contrats, choisissez **Augmenter les prix** dans le menu du haut pour voir l'effet d'une hausse en pourcentage sur les contrats concernés. Un contrat n'est concerné qu'après au moins un an depuis son début ou depuis sa dernière hausse.

L'aperçu indique, par contrat :

- le taux ou montant actuel par période
- le nouveau taux ou montant après la hausse
- la date du dernier ajustement

Vous appliquez la hausse contrat par contrat, jamais pour tous d'un coup, afin de laisser de côté les clients avec qui vous n'avez pas encore parlé. Ensuite, les nouveaux termes valent dans le contrat et les factures suivantes affichent le nouveau montant.

::: tip D'abord en parler
Discutez de toute hausse de prix avec votre client avant de l'appliquer. L'aperçu ne change rien tant que vous ne cliquez pas sur **Appliquer** pour un contrat donné.
:::

### Augmentation annuelle automatique

Un contrat qui, selon votre accord, augmente chaque année peut effectuer cette hausse lui-même. Ouvrez le contrat et réglez l'**Augmentation annuelle** :

- **Augmenter selon** : **IPC (CBS)**, l'indice néerlandais des prix à la consommation, ou un **Pourcentage fixe** que vous choisissez.
- **Chaque année au** : le jour et le mois où l'augmentation prend effet chaque année.
- **Prévenir le client par e-mail** : le client ou le locataire reçoit un e-mail à l'avance depuis votre propre adresse ; vous choisissez combien de mois à l'avance.

La condition posée par l'application : cela fonctionne sur un contrat en cours avec un montant fixe par période. Chaque année, environ une semaine avant l'envoi de l'annonce, vous recevez une notification avec l'augmentation prévue, et **Passer cette année** suffit pour l'ignorer d'un clic. Si vous ne faites rien, les deux étapes se font seules : le client reçoit d'abord l'e-mail d'annonce, et ce n'est qu'après son envoi que le prix change. Les factures pour les périodes antérieures à la date d'effet gardent l'ancien prix ; les périodes à partir de cette date utilisent le nouveau. Si l'e-mail d'annonce ne peut pas partir avant la date d'effet, l'augmentation n'a pas lieu et une notification vous en explique la raison.

Une augmentation manuelle avec une date d'effet future, appliquée via **Augmenter les prix** dans la liste des contrats, suit le même calendrier mais sans e-mail d'annonce.

## Lier à des propriétés

Vous liez des contrats à des [propriétés](/fr/features/objects) pour gérer vos locations :

- associer un contrat à un bien, un véhicule ou un équipement
- voir quelles propriétés sont louées et à qui
- consulter l'historique des contrats par propriété

## Lier à des projets

Vous liez aussi des contrats à des [projets](/fr/features/projects). En créant ou en modifiant un projet, choisissez le contrat dans le champ **Contrat**. Les heures saisies sur ce projet figurent alors sur la facture du contrat. Les contrats archivés restent dans la liste, avec **(archivé)** après le nom, pour garder un lien existant ou choisir un accord plus ancien si besoin.

Pratique pour les accords au taux horaire ou journalier : le contrat fixe la base tarifaire, les projets liés fournissent les heures.

Vous détachez un projet à tout moment ; les heures déjà facturées restent sur leur facture.

## La liste des contrats

Au-dessus de la liste se trouvent les onglets **Tous**, **En attente de signature**, **Brouillon** et **En cours**. En haut, vous voyez le **Revenu mensuel** de vos contrats récurrents, le travail **Sur base horaire** pas encore facturé et la **Prochaine facture**. Le panneau de filtres limite la liste par statut (actif, en pause, terminé), récurrence et statut de signature.

## Actions groupées

- **Archiver** : déplacer des contrats dans l'archive
- **Supprimer** : déplacer des contrats dans la corbeille

Dans l'archive, vous choisissez **Restaurer (actif)** ou **Mettre à la corbeille** ; dans la corbeille, **Restaurer (archives)** ou **Supprimer définitivement**.

## Signature

Vos contrats se signent électroniquement. Vous ajoutez des parties dans le formulaire du contrat et envoyez le contrat avec **Envoyer pour signature** ; chaque partie reçoit un lien de signature par e-mail. L'envoi ouvre d'abord une feuille d'envoi, avec le destinataire, l'objet et le texte de l'e-mail tels que le serveur les compose : rien ne part avant que vous appuyiez sur **Envoyer**. **Envoyer le lien** et **Renvoyer** sur la carte de signature ouvrent la même feuille, si bien que chaque envoi montre d'abord son e-mail.

Une fois un contrat signé, sa page affiche une carte de signature avec :

- le statut de chaque partie (invitée, a consulté, a signé ou expiré)
- un bouton **Voir** qui ouvre un aperçu du document signé
- l'empreinte (SHA-256) consignée du contenu signé, pour que vous et votre client puissiez prouver plus tard que le PDF n'a pas changé depuis la signature ; une page de vérification publique contrôle un PDF signé contre elle
- un bouton de téléchargement pour enregistrer le PDF

La page d'aperçu comporte une barre pour imprimer et télécharger, et affiche le contrat signé directement dans le navigateur. Le PDF signé et le PDF de contrôle contiennent tous deux le texte complet du contrat : chaque copie téléchargée se suffit à elle-même.

### Votre image de marque sur la page de signature

Quand quelqu'un ouvre un contrat pour le signer, la page de signature porte l'image de marque de l'expéditeur :

- le logo de l'expéditeur apparaît en haut de la page
- la page utilise la couleur d'accent de l'expéditeur
- les textes et les boutons s'adaptent automatiquement pour rester lisibles sur cette couleur

La page de signature donne ainsi l'impression de venir de l'entreprise qui a envoyé l'invitation, et non d'un site tiers anonyme.

### La signature dans la liste des contrats

La liste des contrats comporte une colonne **Signature** avec le statut de chaque contrat signé électroniquement. Les statuts apparaissent en étiquettes colorées : **Non envoyé**, **En attente**, **Partiellement signé** et **Signé**.

Le filtre de signature du panneau de filtres limite la liste par statut de signature, ou n'affiche que les contrats sans signature électronique (**Sans signature électronique**). Les contrats sans parties signataires, comme les contrats plus anciens, affichent un tiret dans la colonne Signature et relèvent de ce filtre.

### Vérification par SMS

Pour chaque partie, vous pouvez activer **Vérification par SMS requise**. Ce signataire doit alors confirmer un code reçu par SMS avant que sa signature soit valable ; il saisit son numéro au moment de signer.

- **Envoyer le code** : après avoir saisi son numéro de mobile, le signataire reçoit un code à 6 chiffres
- **Vérifier le code** : il saisit le code et prouve ainsi que le numéro lui appartient
- **Étiquette vérifiée** : une étiquette apparaît ensuite avec les quatre derniers chiffres du numéro

En cas de code erroné, le signataire peut en demander un nouveau. La confirmation par SMS figure sur le PDF signé.

## Versions des modèles

Les modèles de contrat se trouvent sous **Modèles de contrat**, que vous ouvrez depuis le menu en haut de la liste des contrats. Vous pouvez donner des versions à un modèle pour suivre l'évolution de son texte.

### Publier une version

1. Ouvrez **Modèles de contrat**
2. Repérez votre modèle et cliquez sur **Versions**
3. Sous **Publier le brouillon actuel comme nouvelle version**, renseignez :
   - **Étiquette** : un nom court pour la version (par exemple « v2 »). Laissée vide, l'application choisit elle-même le numéro suivant.
   - **Note de modification** : en quelques mots, ce qui a changé dans cette version
4. Cliquez sur **Publier**

### Consulter l'historique des versions

L'historique des versions d'un modèle affiche :

- l'étiquette de la version (par exemple « v1 », « v2 »)
- la note de modification et la date de publication
- l'étiquette **Actuelle** sur la dernière version publiée
- l'étiquette **Archivée** sur toutes les versions précédentes

### Ce que les versions changent aux contrats

Une version est un nom et une note sur le texte actuel, pas une copie à part : les nouveaux contrats utilisent toujours le texte le plus récent du modèle, même si vous continuez à le modifier après publication. Les contrats déjà créés gardent leur propre texte figé et ne changent jamais avec le modèle. Vous pouvez donc retravailler vos modèles sans toucher aux contrats existants.

## Conseils

- Utilisez les contrats avec les [factures récurrentes](/fr/features/recurring-invoices) pour différentes façons de facturer
- Liez vos contrats à des propriétés pour une gestion locative complète
- Fixez une date de fin pour voir à temps qu'un contrat arrive à échéance ; après cette date, il se termine de lui-même
- Mettez un contrat en pause plutôt que de fixer une date de fin si vous voulez reprendre la facturation plus tard
- Filtrez par statut de signature pour voir quels contrats attendent encore une signature
- Ajoutez des parties signataires en créant un contrat pour activer la signature électronique
