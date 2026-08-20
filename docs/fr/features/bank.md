---
title: Flux bancaire
description: "Reliez votre compte bancaire pour que les transactions arrivent seules. Des règles créent des brouillons de dépense que vous validez avant écriture."
---

# Flux bancaire

Reliez votre compte bancaire à MyCompanyDesk et vos transactions arrivent automatiquement. Les règles et la catégorisation intelligente transforment les paiements sortants en brouillons de dépenses, et vous confirmez chaque brouillon avant qu'il n'entre dans votre comptabilité.

## Où le trouver

Le flux bancaire se trouve dans la partie Dépenses :

- **Connexions et réglages** : ouvrez **Dépenses** et cliquez sur la roue dentée dans l'en-tête de la page. Vous y reliez vos banques, contrôlez les dépenses importées automatiquement et gérez les règles et notifications.
- **File d'attente bancaire** : en haut de la page Dépenses, vous voyez les lignes qui doivent encore être vérifiées.
- **Flux de transactions** : le bouton **Transactions** dans l'en-tête de la page Dépenses ouvre la liste des transactions bancaires importées.

## Relier un compte bancaire

1. Allez dans **Dépenses** et cliquez sur la roue dentée.
2. Dans la section banque, cliquez sur **Connecter votre première banque**, ou choisissez votre banque directement quand un sélecteur de banques est affiché.
3. Confirmez la connexion dans l'application ou le site de votre propre banque. C'est un parcours PSD2 sécurisé : MyCompanyDesk peut uniquement lire les transactions que vous autorisez et ne peut jamais déplacer d'argent.
4. Vous revenez ensuite dans MyCompanyDesk. La première synchronisation importe les transactions des 90 derniers jours ; ensuite le flux reste à jour automatiquement.

Vous pouvez relier jusqu'à 10 comptes de banques différentes. Chaque compte apparaît sur sa propre ligne avec le solde actuel et le moment de la dernière synchronisation. Utilisez **Connecter une autre banque** pour en ajouter. Le consentement bancaire expire périodiquement selon les règles PSD2 (en général tous les 90 jours) ; vous êtes prévenu à l'avance.

Pour chaque compte, vous pouvez :

- Activer ou désactiver l'**import automatique**, pour décider quels comptes alimentent vos dépenses.
- Définir une **date d'import**. Cette date détermine à partir de quand les transactions apparaissent dans votre liste de tâches réelle. Nous récupérons tout de même les transactions antérieures (pour l'association, le rapprochement et le solde), mais elles ne demandent pas d'action de votre part. Laissez vide et chaque transaction importée apparaît dans la liste.
- Lancer une **synchronisation manuelle** à tout moment.
- Déconnecter le compte.

## Fréquence de synchronisation

La fréquence à laquelle MyCompanyDesk recherche de nouvelles transactions est un réglage unique pour tout l'espace de travail : **Temps réel**, **Toutes les 4 heures** ou **Chaque jour**. La synchronisation manuelle par compte fonctionne toujours en plus.

## De la transaction à la dépense

Avant qu'une transaction ne soit catégorisée, les lignes sortantes sont comparées aux dépenses déjà présentes dans vos comptes. Si la correspondance est sans ambiguïté, MyCompanyDesk relie automatiquement la ligne bancaire à cette dépense existante. La vérification compare le montant, la date et le nom de la contrepartie/du fournisseur ; seule une correspondance forte sur tous les signaux lie une transaction sans demande préalable. Cela ne crée rien de nouveau ; cela enregistre simplement quel paiement a réglé la dépense.

Après la passe de liaison, les nouvelles transactions passent par vos règles et la catégorisation intelligente :

1. Vos propres règles sont vérifiées en premier. Une transaction qui correspond reçoit la catégorie de la règle.
2. Les transactions sans correspondance reçoivent une suggestion de catégorie de la catégorisation intelligente, ou retombent sur votre catégorie par défaut si vous en avez défini une.
3. Une transaction sortante catégorisée devient un **brouillon de dépense** : la contrepartie devient le fournisseur, et le montant, la date et le traitement de TVA habituel de la catégorie sont remplis.
4. Le brouillon arrive dans la file de contrôle : rien n'est comptabilisé sans que vous le voyiez.

Les transactions issues du premier import, qui récupère environ les 90 derniers jours, ne sont jamais auto-confirmées. Elles atterrissent toujours dans la file de contrôle, même si la catégorisation est sûre. Cela ne vaut que pour l'arriéré d'avant la connexion ; les nouvelles transactions ensuite suivent les règles de contrôle normales. La date d'import par compte détermine à partir de quel moment cet arriéré apparaît dans votre liste de tâches ; tout ce qui est antérieur reste disponible pour l'association et le rapprochement, mais ne demande pas de contrôle.

Seules les transactions sortantes deviennent des dépenses ; les paiements entrants ne sont jamais transformés en dépenses. Les dépenses issues de transactions bancaires affichent un petit badge banque dans la liste des dépenses, pour que vous voyiez toujours d'où vient une écriture.

## La file d'attente bancaire

La file d'attente bancaire se trouve en haut de la page Dépenses. Elle affiche les transactions qui ne sont pas encore comptabilisées en tant que dépenses : les lignes de vérification préparées par le flux, ainsi que les candidats-dépenses issus du flux bancaire. Chaque ligne montre le fournisseur, la date, le montant, la catégorie suggérée et l'origine de la suggestion (une de vos règles, votre catégorie par défaut, une suggestion intelligente ou le flux bancaire).

La file est mise en cache dans votre session. Lorsque vous revenez dans Dépenses, les lignes apparaissent dans la première image et l'arrière-plan les actualise à leur place. Ainsi, la liste située en dessous ne descend plus pendant que vous êtes déjà en train de lire. Le cache appartient à votre espace de travail actuel : changer d'espace de travail le reconstruit à partir de zéro.

::: info
La file charge jusqu'à 100 lignes de vérification et 100 candidats-dépenses par récupération. Lorsque le serveur a plus de lignes, la file l'indique et tire automatiquement le lot suivant après une action, pour que rien ne reste bloqué derrière une page pleine.
:::

Pour chaque brouillon, vous pouvez :

- **Confirmer** : comptabiliser la dépense telle quelle. Elle rejoint votre liste de dépenses et compte dans les rapports et la TVA.
- **Modifier** : ouvrir la dépense pour ajuster la catégorie, la TVA ou le montant avant de comptabiliser.
- **Rejeter** : écarter le brouillon. La transaction retourne dans le flux pour un traitement manuel.

Si la puce de catégorie choisie a été archivée depuis le chargement de la page, l'action Confirmer ou Modifier est refusée avec l'erreur `EXPENSE_CATEGORY_UNKNOWN` au lieu de comptabiliser silencieusement la dépense sous une autre catégorie. Actualisez la page pour charger la liste des catégories actuelles et choisissez à nouveau.

## Réglages du flux

Sur la même page de réglages, vous contrôlez le comportement du flux :

- **Import automatique** : activer ou désactiver la création automatique de brouillons de dépenses pour tout l'espace de travail.
- **Catégorisation intelligente** : laisser MyCompanyDesk suggérer une catégorie pour les transactions sans règle.
- **Ignorer les virements internes** : passer les virements entre vos propres comptes reliés.
- **Demander les justificatifs par e-mail** : un passage quotidien envoie aux fournisseurs une demande groupée pour les justificatifs manquants. Chaque fournisseur n'est sollicité qu'une fois par transaction. L'option **Relancer automatiquement les fournisseurs pour les justificatifs** transforme ce premier envoi en relance répétée : après la première demande, les fournisseurs sont recontactés au jour 7 et au jour 14 jusqu'à ce qu'un justificatif soit téléversé. Un compteur à côté du réglage indique combien de paiements attendent actuellement un justificatif.
- **Montant minimum d'import** : les transactions sous ce montant ne deviennent pas des dépenses.
- **Catégorie par défaut** : la catégorie appliquée quand rien d'autre ne correspond.
- **Date de comptabilisation** : choisissez si les dépenses utilisent la date de transaction, la date de valeur ou la date du justificatif.

## Règles

Les règles apprennent à MyCompanyDesk comment catégoriser les paiements récurrents. Sur la page de réglages, cliquez sur **Ajouter une règle** et renseignez :

1. Un nom pour la règle (généralement le fournisseur).
2. Un mot-clé.
3. La catégorie de dépense associée.

Le mot-clé est comparé à la description et au nom de la contrepartie ; les majuscules n'ont pas d'importance. Les transactions correspondantes reçoivent la catégorie de la règle et deviennent des brouillons de dépenses. Les règles s'appliquent à tous les comptes reliés, chaque règle indique combien de fois elle a correspondu, et vous pouvez modifier ou supprimer une règle à tout moment.

Une règle porte sur un seul mot-clé. Les conditions sur le montant ne sont pas prises en charge, et les règles se créent sur la page de réglages, pas depuis le flux de transactions.

## Règles de confiance fournisseurs

Lorsqu'un même fournisseur est payé régulièrement, MyCompanyDesk peut apprendre à lui faire confiance et sauter l'étape de vérification des brouillons pour les transactions correspondantes. Vous contrôlez cela sur la page de réglages :

- **Apprendre les fournisseurs de confiance depuis mes brouillons confirmés** : lorsque cette option est activée, un fournisseur devient un "fournisseur de confiance" après suffisamment de brouillons confirmés et d'utilisation de la règle de catégorisation associée.
- **Les fournisseurs de confiance nécessitent ma vérification** : choisissez si les transactions de fournisseurs de confiance apparaissent quand même dans la file de vérification, ou si elles sont comptabilisées automatiquement.

Un fournisseur ne devient digne de confiance que s'il présente un motif fort et constant de paiements confirmés et qu'une règle de catégorisation active existe. Vous pouvez désactiver la fonction à tout moment ; dans ce cas, toute la confiance précédemment acquise est effacée et chaque transaction repasse par le flux de vérification normal.

## Le flux de transactions

Ouvrez **Transactions** depuis l'en-tête de la page Dépenses pour voir toutes les transactions importées, avec quelques chiffres rapides en haut (transactions du mois, part comptabilisée automatiquement et nombre de transactions qui demandent encore votre attention). Trois onglets répartissent le flux :

- **À lettrer** : transactions qui ne sont encore associées à rien.
- **Lettrées** : transactions associées à une facture ou une dépense, avec un lien vers l'enregistrement.
- **Ignorées** : transactions que vous avez ignorées.

Pour chaque transaction ouverte :

- **Associer** ouvre une fenêtre où vous associez la transaction à une facture ou une dépense existante. L'argent sortant suggère des dépenses, l'argent entrant des factures, et vous pouvez basculer et rechercher.
- **Ignorer** déplace la transaction vers l'onglet Ignorées.

L'association reste le plus souvent manuelle. MyCompanyDesk associe toutefois automatiquement une ligne bancaire importée à une dépense existante quand la correspondance est sans ambiguïté. Les clients, les factures et tout ce qui est peu clair nécessitent toujours votre confirmation.

## Notifications

En bas de la page de réglages, cinq notifications bancaires s'activent indépendamment :

- **Erreurs de synchronisation** : un e-mail et une notification dans l'application quand une connexion bancaire ne parvient pas à synchroniser, avec un lien pour corriger.
- **Résumé hebdomadaire** : un e-mail le lundi matin résumant l'activité bancaire de la semaine écoulée. Il est sauté quand il n'y a rien à signaler.
- **Grosses transactions** : une alerte quand une transaction atteint ou dépasse un montant que vous fixez vous-même.
- **Règle fournisseur apprise** : une notification dans l'application quand MyCompanyDesk a appris une nouvelle règle de fournisseur de confiance à partir de vos brouillons confirmés.
- **Période de TVA verrouillée** : une alerte unique quand le flux bancaire tente de comptabiliser une transaction sortante dans une période de TVA déjà déclarée et verrouillée. La ligne est ignorée définitivement pour éviter que la synchronisation ne réessaie indéfiniment, et la notification explique les options : comptabilisez la dépense manuellement avec une date dans la période ouverte en cours, ou déposez une déclaration rectificative.

## Dépannage

**Ma connexion bancaire affiche une erreur.** Ouvrez les réglages des dépenses via la roue dentée sur la page Dépenses. Si votre banque demande une nouvelle autorisation, vous le verrez sur la ligne de la connexion ; la notification d'erreur y mène aussi.

**Une transaction n'est pas devenue une dépense.** Vérifiez que l'import automatique est activé, que le montant dépasse votre montant minimum et qu'il s'agit d'un paiement sortant. Vous pouvez toujours associer la transaction à la main sur la page Transactions.

**Une transaction bancaire tombe dans une période de TVA verrouillée.** Le flux bancaire ne peut pas comptabiliser automatiquement des dépenses datées dans une période déjà déclarée. Vous recevez l'alerte unique "Banktransactie: BTW-periode vergrendeld", la ligne est marquée comme ignorée définitivement et la prochaine synchronisation ne la réessaie pas. Pour enregistrer le coût malgré tout, comptabilisez la dépense manuellement avec une date dans la période ouverte en cours, ou demandez à votre comptable si une déclaration rectificative est la bonne démarche.

**Je ne reçois pas de notifications.** Vérifiez les interrupteurs en bas de la page de réglages des dépenses.
