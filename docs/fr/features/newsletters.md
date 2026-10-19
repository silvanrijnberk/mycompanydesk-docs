---
title: Infolettres
description: "Rédigez, planifiez et envoyez des mailings à vos clients. L'éditeur est relié à votre liste clients, sans import CSV pour tenir les destinataires à jour."
last_verified: 2026-10-19
---

# Infolettres

> Les infolettres font partie d'**Office**. Le module est désactivé par défaut : activez-le dans **Paramètres › Modules**. Il vous faut pour cela votre propre domaine avec e-mail, car les infolettres partent toujours de votre propre domaine.

L'éditeur d'infolettres vous aide à rédiger, planifier et envoyer des campagnes à vos clients. Il est lié à votre liste de clients, donc les destinataires restent synchronisés sans importer de fichier CSV.

## Où le trouver

Activez la fonctionnalité dans **Paramètres › Modules** (la ligne **Newsletters**), puis ouvrez **Communication › Newsletters** dans le menu principal.

La page comporte quatre onglets :

- **Campagnes** : brouillons, envois planifiés et campagnes envoyées.
- **Abonnés** : le public qui reçoit vos infolettres.
- **Vue d'ensemble** : les chiffres clés des campagnes récentes.
- **Paramètres** : expéditeur, inscription et désinscription.

Vous avez besoin de l'accès aux paramètres de l'espace de travail pour activer ou désactiver la fonctionnalité.

## Liste des campagnes

Chaque campagne apparaît sur une ligne unique avec :

- une icône colorée qui reflète l'état de la campagne
- l'objet, ou *pas d'objet* si le brouillon est encore vide
- une ligne de métadonnées avec l'horodatage pertinent
- un badge d'état (Brouillon, Planifiée, En cours d'envoi, Envoyée, Annulée ou Échec)
- une petite jauge montrant le taux d'ouverture dès qu'une campagne est envoyée
- une action principale : **Ouvrir l'éditeur** pour les brouillons et les envois planifiés, **Voir** pour les envois envoyés
- des actions supplémentaires dans le menu débordant : **Résultat** (dès qu'un envoi a eu lieu), **Renvoyer** (pour une campagne échouée) et **Supprimer** (tant que la campagne n'est pas envoyée)

Survolez la ligne pour afficher le menu débordant sur ordinateur. Sur téléphone, balayez la ligne ou maintenez-la enfoncée.

## Créer une campagne

Il existe deux points d'entrée :

- **Brouillon vierge** dans l'en-tête de page crée un brouillon vide.
- **Créer une newsletter** lance l'assistant IA, qui transforme une courte consigne en une première version de votre envoi.

Les deux aboutissent dans l'éditeur de campagne, où vous pouvez modifier l'objet, le pré-en-tête, le contenu, l'expéditeur et le public avant d'envoyer ou de planifier.

## Envoyer et planifier

- **Envoyer** met la campagne immédiatement en file d'attente.
- **Programmer** vous permet de choisir une date et une heure futures. **Annuler la programmation** refait de la lettre un brouillon.
- **Envoyer un test** envoie d'abord un exemplaire de test à l'adresse de votre choix.

Vos modifications sont enregistrées automatiquement pendant que vous tapez ; il n'y a pas de bouton d'enregistrement séparé.

Une fois qu'une campagne est en file d'attente ou envoyée, elle ne peut plus être supprimée ; une campagne échouée peut être renvoyée depuis le menu débordant.

Les e-mails de confirmation et de bienvenue des nouveaux abonnés viennent de votre entreprise : votre nom comme expéditeur et votre propre adresse de réponse, plutôt qu'une adresse MyCompanyDesk anonyme. Si l'envoi d'une campagne planifiée échoue, vous recevez une notification (Nieuwsbrief niet verstuurd, newsletter non envoyée) et pouvez la renvoyer ensuite.

## Ajouter des abonnés : sur quoi avez-vous le droit de leur écrire ?

Quand vous ajoutez vous-même des adresses, depuis une liste ou depuis vos clients, l'application vous demande d'abord sur quoi vous avez le droit d'écrire à ces personnes :

- **Elles ont elles-mêmes dit qu'elles veulent votre newsletter.** Choisissez ceci quand des personnes se sont inscrites chez vous ou ont dit oui.
<!-- TODO(source-missing) : le cadre juridique pour écrire à ses propres clients sur ses propres produits similaires (soft opt-in) n'est pas encore dans sources/. La formulation de l'application est citée ci-dessous littéralement ; n'en faites pas une explication juridique plus large tant qu'il n'y a pas de fichier source. -->
- **Ce sont des clients qui ont acheté chez vous.** L'application explique sur place ce que cela signifie pour vos envois (vos propres produits ou services similaires, et seulement s'ils ont pu refuser à l'achat) et n'ajoute que les clients qui ont une facture envoyée. Chaque newsletter comporte un lien de désabonnement.

La réponse est conservée avec l'import, pour que vous puissiez toujours montrer pourquoi telle personne figure sur la liste.

Deux garde-fous de plus :

- **D'abord un e-mail de confirmation** (double opt-in) : les gens ne rejoignent la liste qu'en cliquant sur le lien dans cet e-mail. Les e-mails de confirmation partent en petites vagues sur quelques heures, pour ne pas finir en spam. C'est le choix le plus sûr quand vous n'êtes pas certain qu'ils aient dit oui.
- **Depuis les clients** : seuls les clients avec une facture envoyée sont ajoutés.

## Registres de consentement

Chaque fois que vous ajoutez vous-même des adresses, MyCompanyDesk conserve quand c'est arrivé, par qui, sur quelle base (leur consentement ou votre propre client), avec quelle déclaration vous avez confirmé et avec quel résultat (ajouté, en attente de l'e-mail de confirmation, ou ignorés). Les registres vivent dans leur propre vue au sein du module newsletter, ils s'exportent en CSV, et il est sage de les garder : quand quelqu'un demande pourquoi il reçoit votre newsletter, voilà votre réponse.

Les personnes qui s'inscrivent sur votre propre site confirment par e-mail ; cela ne demande pas de registre séparé.

## Résultats

Ouvrez l'action **Résultat** d'une campagne envoyée, en cours d'envoi ou échouée pour voir les données de livraison et d'ouverture par destinataire. L'onglet Vue d'ensemble agrège ces chiffres au niveau de l'espace de travail.
