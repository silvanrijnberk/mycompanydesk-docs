---
title: Flux bancaire
---

# Flux bancaire

Reliez votre compte bancaire à MyCompanyDesk et vos transactions arrivent automatiquement. Les règles et la catégorisation intelligente transforment les paiements sortants en brouillons de dépenses, et vous confirmez chaque brouillon avant qu'il n'entre dans votre comptabilité.

## Où le trouver

Le flux bancaire se trouve dans la partie Dépenses :

- **Connexions et réglages** : ouvrez **Dépenses** et cliquez sur la roue dentée dans l'en-tête de la page. Vous y reliez vos banques, contrôlez les dépenses importées automatiquement et gérez les règles et notifications.
- **Flux de transactions** : le bouton **Transactions** dans l'en-tête de la page Dépenses ouvre la liste des transactions bancaires importées.

## Relier un compte bancaire

1. Allez dans **Dépenses** et cliquez sur la roue dentée.
2. Dans la section banque, cliquez sur **Connecter votre première banque**, ou choisissez votre banque directement quand un sélecteur de banques est affiché.
3. Confirmez la connexion dans l'application ou le site de votre propre banque. C'est un parcours PSD2 sécurisé : MyCompanyDesk peut uniquement lire les transactions que vous autorisez et ne peut jamais déplacer d'argent.
4. Vous revenez ensuite dans MyCompanyDesk. La première synchronisation importe les transactions des 90 derniers jours ; ensuite le flux reste à jour automatiquement.

Vous pouvez relier jusqu'à 10 comptes de banques différentes. Chaque compte apparaît sur sa propre ligne avec le solde actuel et le moment de la dernière synchronisation. Utilisez **Connecter une autre banque** pour en ajouter. Le consentement bancaire expire périodiquement selon les règles PSD2 (en général tous les 90 jours) ; vous êtes prévenu à l'avance.

Pour chaque compte, vous pouvez :

- Activer ou désactiver l'**import automatique**, pour décider quels comptes alimentent vos dépenses.
- Lancer une **synchronisation manuelle** à tout moment.
- Déconnecter le compte.

## Fréquence de synchronisation

La fréquence à laquelle MyCompanyDesk recherche de nouvelles transactions est un réglage unique pour tout l'espace de travail : **Temps réel**, **Toutes les 4 heures** ou **Chaque jour**. La synchronisation manuelle par compte fonctionne toujours en plus.

## De la transaction à la dépense

Les nouvelles transactions passent par vos règles et la catégorisation intelligente :

1. Vos propres règles sont vérifiées en premier. Une transaction qui correspond reçoit la catégorie de la règle.
2. Les transactions sans correspondance reçoivent une suggestion de catégorie de la catégorisation intelligente, ou retombent sur votre catégorie par défaut si vous en avez défini une.
3. Une transaction sortante catégorisée devient un **brouillon de dépense** : la contrepartie devient le fournisseur, et le montant, la date et le traitement de TVA habituel de la catégorie sont remplis.
4. Le brouillon arrive dans la file de contrôle : rien n'est comptabilisé sans que vous le voyiez.

Seules les transactions sortantes deviennent des dépenses ; les paiements entrants ne sont jamais transformés en dépenses. Les dépenses issues de transactions bancaires affichent un petit badge banque dans la liste des dépenses, pour que vous voyiez toujours d'où vient une écriture.

## Vérifier les dépenses importées automatiquement

La carte **Dépenses importées automatiquement à vérifier** s'affiche en haut des réglages des dépenses dès que des brouillons attendent. Chaque ligne montre le fournisseur, la date, le montant, la catégorie suggérée et l'origine de la suggestion (une de vos règles, votre catégorie par défaut, une suggestion intelligente ou le flux bancaire).

Pour chaque brouillon, vous pouvez :

- **Confirmer** : comptabiliser la dépense telle quelle. Elle rejoint votre liste de dépenses et compte dans les rapports et la TVA.
- **Modifier** : ouvrir la dépense pour ajuster la catégorie, la TVA ou le montant avant de comptabiliser.
- **Rejeter** : écarter le brouillon. La transaction retourne dans le flux pour un traitement manuel.

## Réglages du flux

Sur la même page de réglages, vous contrôlez le comportement du flux :

- **Import automatique** : activer ou désactiver la création automatique de brouillons de dépenses pour tout l'espace de travail.
- **Catégorisation intelligente** : laisser MyCompanyDesk suggérer une catégorie pour les transactions sans règle.
- **Ignorer les virements internes** : passer les virements entre vos propres comptes reliés.
- **Demander les justificatifs par e-mail** : un passage quotidien envoie aux fournisseurs une demande groupée pour les justificatifs manquants. Chaque fournisseur n'est sollicité qu'une fois par transaction.
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

## Le flux de transactions

Ouvrez **Transactions** depuis l'en-tête de la page Dépenses pour voir toutes les transactions importées, avec quelques chiffres rapides en haut (transactions du mois, part comptabilisée automatiquement et nombre de transactions qui demandent encore votre attention). Trois onglets répartissent le flux :

- **À lettrer** : transactions qui ne sont encore associées à rien.
- **Lettrées** : transactions associées à une facture ou une dépense, avec un lien vers l'enregistrement.
- **Ignorées** : transactions que vous avez ignorées.

Pour chaque transaction ouverte :

- **Associer** ouvre une fenêtre où vous associez la transaction à une facture ou une dépense existante. L'argent sortant suggère des dépenses, l'argent entrant des factures, et vous pouvez basculer et rechercher.
- **Ignorer** déplace la transaction vers l'onglet Ignorées.

L'association est toujours une étape manuelle : MyCompanyDesk n'associe pas automatiquement les transactions aux clients, factures ou dépenses existantes.

## Notifications

En bas de la page de réglages, trois notifications bancaires s'activent indépendamment :

- **Erreurs de synchronisation** : un e-mail et une notification dans l'application quand une connexion bancaire ne parvient pas à synchroniser, avec un lien pour corriger.
- **Résumé hebdomadaire** : un e-mail le lundi matin résumant l'activité bancaire de la semaine écoulée. Il est sauté quand il n'y a rien à signaler.
- **Grosses transactions** : une alerte quand une transaction atteint ou dépasse un montant que vous fixez vous-même.

## Dépannage

**Ma connexion bancaire affiche une erreur.** Ouvrez les réglages des dépenses via la roue dentée sur la page Dépenses. Si votre banque demande une nouvelle autorisation, vous le verrez sur la ligne de la connexion ; la notification d'erreur y mène aussi.

**Une transaction n'est pas devenue une dépense.** Vérifiez que l'import automatique est activé, que le montant dépasse votre montant minimum et qu'il s'agit d'un paiement sortant. Vous pouvez toujours associer la transaction à la main sur la page Transactions.

**Je ne reçois pas de notifications.** Vérifiez les interrupteurs en bas de la page de réglages des dépenses.
