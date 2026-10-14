---
title: Flux bancaire
description: "Reliez votre compte bancaire pour que les transactions arrivent seules. Des règles créent des brouillons de dépense que vous validez avant écriture."
---

# Flux bancaire

Reliez votre compte bancaire à MyCompanyDesk et vos transactions arrivent automatiquement. Les règles et la catégorisation intelligente transforment les paiements sortants en brouillons de dépenses, et vous confirmez chaque brouillon avant qu'il n'entre dans votre comptabilité.

La connexion bancaire fait partie d'**Office**, et vous pouvez relier jusqu'à 3 comptes bancaires. Sur Desk, vous voyez un bouton pour changer d'abonnement à la place de la page de connexion.

## Où le trouver

Le flux bancaire se trouve dans la partie Dépenses :

- **Connexions et réglages** : **Paramètres › Connecter un compte bancaire** (`/settings/bankkoppeling`), aussi accessible via le bouton **Paramètres** de la page Dépenses. Vous y reliez vos banques et gérez les réglages du flux, les règles et les notifications.
- **File d'attente bancaire** : en haut de la page Dépenses, le bloc **Depuis votre banque** affiche les lignes qui doivent encore être vérifiées.
- **Flux de transactions** : l'onglet **Transactions** à côté de Dépenses dans la barre supérieure ouvre la liste des transactions bancaires importées.

## Relier un compte bancaire

1. Allez dans **Paramètres › Connecter un compte bancaire**.
2. Dans la section banque, cliquez sur **Connecter votre première banque**, ou choisissez votre banque directement quand un sélecteur de banques est affiché.
3. Confirmez la connexion dans l'application ou le site de votre propre banque. C'est un parcours PSD2 sécurisé : MyCompanyDesk peut uniquement lire les transactions que vous autorisez et ne peut jamais déplacer d'argent.
4. Vous revenez ensuite dans MyCompanyDesk. La première synchronisation importe les transactions des 90 derniers jours ; ensuite le flux reste à jour automatiquement.

Vous pouvez relier jusqu'à 3 comptes bancaires, y compris de banques différentes. Chaque compte apparaît sur sa propre ligne avec le solde actuel et le moment de la dernière synchronisation. Utilisez **Connecter une autre banque** pour en ajouter. Le consentement bancaire expire périodiquement selon les règles PSD2 (en général tous les 90 jours) ; vous êtes prévenu à l'avance.

Pour chaque compte, vous pouvez :

- Activer ou désactiver l'**import automatique**, pour décider quels comptes alimentent vos dépenses.
- Définir une **date d'import**. Cette date détermine à partir de quand les transactions apparaissent dans votre liste de tâches réelle. Nous récupérons tout de même les transactions antérieures (pour l'association, le rapprochement et le solde), mais elles ne demandent pas d'action de votre part. Laissez vide et chaque transaction importée apparaît dans la liste.
- Lancer une **synchronisation manuelle** à tout moment.
- Déconnecter le compte.

## Fréquence de synchronisation

La fréquence à laquelle MyCompanyDesk recherche de nouvelles transactions est un réglage unique pour tout l'espace de travail : **Toutes les 4 heures** ou **Chaque jour à 06:00**. Le temps réel n'existe pas : une connexion PSD2 récupère les transactions à intervalles. **Synchroniser maintenant** récupère tout immédiatement, et la synchronisation manuelle par compte fonctionne toujours en plus.

## De la transaction à la dépense

Avant qu'une transaction ne soit catégorisée, les lignes sortantes sont comparées aux dépenses déjà présentes dans vos comptes. Si la correspondance est sans ambiguïté, MyCompanyDesk relie automatiquement la ligne bancaire à cette dépense existante. La vérification compare le montant, la date et le nom de la contrepartie/du fournisseur ; seule une correspondance forte sur tous les signaux lie une transaction sans demande préalable. Cela ne crée rien de nouveau ; cela enregistre simplement quel paiement a réglé la dépense.

Après la passe de liaison, les nouvelles transactions passent par vos règles et la catégorisation intelligente :

1. Vos propres règles sont vérifiées en premier. Une transaction qui correspond reçoit la catégorie de la règle.
2. Les transactions sans correspondance reçoivent une suggestion de catégorie de la catégorisation intelligente, ou retombent sur votre catégorie par défaut si vous en avez défini une.
3. Une transaction sortante catégorisée devient un **brouillon de dépense** : la contrepartie devient le fournisseur, et le montant, la date et le traitement de TVA habituel de la catégorie sont remplis.
4. Le brouillon arrive dans la file de contrôle : rien n'est comptabilisé sans que vous le voyiez.

Les transactions issues du premier import, qui récupère environ les 90 derniers jours, ne sont jamais auto-confirmées. Elles atterrissent toujours dans la file de contrôle, même si la catégorisation est sûre. Cela ne vaut que pour l'arriéré d'avant la connexion ; les nouvelles transactions ensuite suivent les règles de contrôle normales. La date d'import par compte détermine à partir de quel moment cet arriéré apparaît dans votre liste de tâches ; tout ce qui est antérieur reste disponible pour l'association et le rapprochement, mais ne demande pas de contrôle.

Seules les transactions sortantes deviennent des dépenses ; les paiements entrants ne sont jamais transformés en dépenses. Les dépenses issues de transactions bancaires affichent un petit badge banque dans la liste des dépenses, avec une infobulle et un label pour lecteur d'écran qui nomment la banque connectée. Les logos exacts de banque ne sont plus affichés, afin que la liste reste lisible quand de nombreuses lignes bancaires se mélangent aux autres dépenses. Les brouillons arrivés sous forme de facture par e-mail portent à la place un petit badge enveloppe, avec « Depuis vos e-mails » comme infobulle.

## La file d'attente bancaire

La file d'attente bancaire se trouve en haut de la page Dépenses, dans un bloc à part. Elle affiche tout ce qui reste à comptabiliser : les lignes de vérification préparées par le flux, les candidats-dépenses issus du flux bancaire, les brouillons de dépenses que votre boîte de réception crée à partir des factures transmises, et les brouillons issus des factures électroniques reçues. Le bandeau au-dessus des lignes indique ce qui attend : « Depuis votre banque · pas encore comptabilisé » tant que chaque ligne vient de la banque, « Depuis vos e-mails · pas encore comptabilisé » tant que chaque ligne est arrivée par e-mail, et « Pas encore comptabilisé » dès que les deux sortes se côtoient. Chaque ligne montre le fournisseur, la date, le montant, la catégorie suggérée et l'origine de la suggestion (une de vos règles, votre catégorie par défaut, une suggestion intelligente ou le flux bancaire). Rien de tout cela ne compte tant que vous ne l'avez pas comptabilisé.

La file est mise en cache dans votre session. Lorsque vous revenez dans Dépenses, les lignes apparaissent dans la première image et l'arrière-plan les actualise à leur place. Ainsi, la liste située en dessous ne descend plus pendant que vous êtes déjà en train de lire. Le cache appartient à votre espace de travail actuel : changer d'espace de travail le reconstruit à partir de zéro.

::: info
La file charge jusqu'à 100 lignes de vérification et 100 candidats-dépenses par récupération. Lorsque le serveur a plus de lignes, la file l'indique et tire automatiquement le lot suivant après une action, pour que rien ne reste bloqué derrière une page pleine.
:::

Pour chaque ligne, vous pouvez :

- **Comptabiliser** : comptabiliser la dépense avec la catégorie choisie. Elle rejoint votre liste de dépenses et compte dans les rapports et la TVA.
- **Choisir une catégorie** : sélectionner une autre catégorie avant de comptabiliser.
- **Ignorer** : retirer la ligne de la file. Vous la retrouvez sous **Ignorées** dans l'onglet Transactions.

**Tout comptabiliser** et **Tout ignorer** traitent toute la file d'un coup ; Tout ignorer demande d'abord une confirmation et s'annule immédiatement.

Si la puce de catégorie choisie a été archivée depuis le chargement de la page, l'action Comptabiliser est refusée avec l'erreur `EXPENSE_CATEGORY_UNKNOWN` au lieu de choisir silencieusement une autre catégorie. Rechargez la page pour obtenir la liste de catégories actuelle et choisissez à nouveau.

### Rattraper les anciennes lignes en une fois

Quand vous reliez un compte bancaire, la première importation peut récupérer des transactions d'avant MyCompanyDesk. Beaucoup de ces lignes anciennes appartiennent à une période déjà déclarée, donc il n'y a plus rien à décider. Dès que la file détecte un bloc de lignes périmées, elle propose **Mettre à jour jusqu'ici**.

Cliquer ferme toutes les lignes de la file avant la date suggérée, y compris celles qui ne sont pas visibles actuellement. Rien n'est supprimé : les transactions passent dans **Ignorées**, et vous pouvez annuler l'action en un clic. Dès lors, MyCompanyDesk ne vous demande que les transactions à partir de la date suggérée.

L'offre n'apparaît que tant qu'il reste des lignes périmées. Une fois le bloc traité, la bannière disparaît d'elle-même.

## Réglages du flux

Sur la même page de réglages, vous contrôlez le comportement du flux :

- **Import automatique dans Dépenses** : activer ou désactiver la création automatique de brouillons de dépenses pour tout l'espace de travail.
- **Catégorisation intelligente** : laisser MyCompanyDesk suggérer une catégorie pour les transactions sans règle.
- **Ignorer mes virements internes** : passer les virements entre vos propres comptes reliés.
- **Demander le justificatif par e-mail** : un passage quotidien envoie aux fournisseurs une demande groupée pour les justificatifs manquants. Chaque fournisseur n'est sollicité qu'une fois par transaction. Un compteur à côté du réglage indique combien de paiements attendent actuellement un justificatif.
- **Montant minimum d'import** : les transactions sous ce montant ne deviennent pas des dépenses.
- **Catégorie par défaut sans règle** : la catégorie appliquée quand rien d'autre ne correspond.
- **Date de comptabilisation** : choisissez si les dépenses utilisent la date de transaction, la date de valeur ou la date du justificatif.

La catégorisation intelligente et la demande automatique des justificatifs manquants se trouvent aussi ensemble sous **Paramètres › Automatisation**, dans le bloc **Depuis votre banque**.

## Règles

Les règles apprennent à MyCompanyDesk comment catégoriser les paiements récurrents. Sur la page de réglages, cliquez sur **Ajouter une règle** et renseignez :

1. Un nom pour la règle (généralement le fournisseur).
2. Un mot-clé.
3. La catégorie de dépense associée.

Le mot-clé est comparé à la description et au nom de la contrepartie ; les majuscules n'ont pas d'importance. Les transactions correspondantes reçoivent la catégorie de la règle et deviennent des brouillons de dépenses. Les règles s'appliquent à tous les comptes reliés, chaque règle indique combien de fois elle a correspondu, et vous pouvez modifier ou supprimer une règle à tout moment.

Une règle porte sur un seul mot-clé. Les conditions sur le montant ne sont pas prises en charge, et les règles se créent sur la page de réglages, pas depuis le flux de transactions.

## Fournisseurs habituels

Quand vous comptabilisez un paiement à un fournisseur depuis votre banque, MyCompanyDesk retient ce fournisseur avec la catégorie choisie. Ensuite, les dépenses de ce fournisseur sont comptabilisées automatiquement, y compris ses factures électroniques. À ce moment, vous recevez la notification **Fournisseur habituel appris**, pour que cela ne passe jamais inaperçu.


Un paiement marqué comme privé, ou un virement vers votre propre compte, n'apprend aucune règle. **Paramètres › Automatisation** indique combien de fournisseurs habituels sont comptabilisés automatiquement. Les règles elles-mêmes se consultent, se modifient et se suppriment dans le bloc **Règles fournisseur → catégorie** de la page Connecter un compte bancaire.

## Le flux de transactions

Ouvrez l'onglet **Transactions** à côté de Dépenses pour voir toutes les transactions importées, avec quelques chiffres rapides en haut (transactions du mois, part comptabilisée automatiquement et nombre de transactions qui demandent encore votre attention). Trois onglets répartissent le flux :

- **À traiter** : transactions qui ne sont encore associées à rien.
- **Lettrées** : transactions associées à une facture ou une dépense, avec un lien vers l'enregistrement.
- **Ignorées** : transactions que vous avez ignorées.

Pendant que vous traitez l'onglet des transactions non lettrées, les lignes qui ne comptent pas comme à traiter restent dans des groupes repliés en dessous : **Compte personnel** pour les lignes d'un compte personnel relié (le groupe n'apparaît que si vous en avez relié un), et **Plus anciennes** pour les lignes d'avant la date à partir de laquelle le flux suit le compte. Une ligne marquée comme privée porte une note indiquant qu'elle reste hors comptabilité ; une ligne pas encore examinée le dit aussi. Les compteurs à traiter de cette page, de Comptabilité › Banque et des tuiles du tableau de bord partagent une même définition et comptent aussi les débits de votre compte personnel qui pourraient être des dépenses professionnelles, afin que les totaux concordent partout.

Pour chaque transaction ouverte :

- **Associer** ouvre une fenêtre où vous associez la transaction à une facture ou une dépense existante. L'argent sortant suggère des dépenses, l'argent entrant des factures, et vous pouvez basculer et rechercher.
- **Ignorer** déplace la transaction vers l'onglet Ignorées.

L'association reste le plus souvent manuelle. MyCompanyDesk associe toutefois automatiquement une ligne bancaire importée à une dépense existante quand la correspondance est sans ambiguïté. Les clients, les factures et tout ce qui est peu clair nécessitent toujours votre confirmation.

## Notifications

En bas de la page Connecter un compte bancaire, trois notifications bancaires s'activent indépendamment :

- **E-mail en cas d'erreur de synchronisation** : un e-mail et une notification dans l'application quand une connexion bancaire ne parvient pas à synchroniser, avec un lien pour corriger.
- **Récapitulatif hebdomadaire** : un e-mail le lundi matin résumant l'activité bancaire de la semaine écoulée. Il est sauté quand il n'y a rien à signaler. Le résumé hebdomadaire est désactivé par défaut dans chaque espace de travail, pour qu'un seul e-mail arrive le lundi : tant qu'il est désactivé, les lignes bancaires encore à rapprocher apparaissent dans l'e-mail du lundi de **À faire maintenant**. Seuls les espaces de travail dont l'e-mail du lundi était déjà désactivé gardent le résumé tel quel, car aucun autre e-mail ne reprend alors les lignes non rapprochées. Réactivez le résumé dans cette liste si vous souhaitez la synthèse séparée ; quand il est activé, l'e-mail du lundi laisse ces lignes de côté.
- **Notification sur grosses transactions** : une alerte quand une transaction atteint ou dépasse un montant que vous fixez vous-même.

En plus, vous recevez toujours ces notifications, sans interrupteur :

- **Fournisseur habituel appris** : une notification dans l'application quand MyCompanyDesk a appris un nouveau fournisseur habituel à partir d'une dépense que vous avez comptabilisée.
- **Période de TVA verrouillée** : une alerte unique quand le flux bancaire tente de comptabiliser une transaction sortante dans une période de TVA déjà déclarée et verrouillée. La ligne est ignorée définitivement pour éviter que la synchronisation ne réessaie indéfiniment, et la notification explique les options : comptabilisez la dépense manuellement avec une date dans la période ouverte en cours, ou déposez une déclaration rectificative.

## Dépannage

**Ma connexion bancaire affiche une erreur.** Ouvrez **Paramètres › Connecter un compte bancaire**. Si votre banque demande une nouvelle autorisation, vous le verrez sur la ligne de la connexion ; la notification d'erreur y mène aussi.

**Une transaction n'est pas devenue une dépense.** Vérifiez que l'import automatique est activé, que le montant dépasse votre montant minimum et qu'il s'agit d'un paiement sortant. Vous pouvez toujours associer la transaction à la main dans l'onglet Transactions.

**Une transaction bancaire tombe dans une période de TVA verrouillée.** Le flux bancaire ne peut pas comptabiliser automatiquement des dépenses datées dans une période déjà déclarée. Vous recevez l'alerte unique "Banktransactie: btw-periode vergrendeld", la ligne est marquée comme ignorée définitivement et la prochaine synchronisation ne la réessaie pas. Pour enregistrer le coût malgré tout, comptabilisez la dépense manuellement avec une date dans la période ouverte en cours, ou demandez à votre comptable si une déclaration rectificative est la bonne démarche.

**Je ne reçois pas de notifications.** Vérifiez les interrupteurs en bas de la page Connecter un compte bancaire.
