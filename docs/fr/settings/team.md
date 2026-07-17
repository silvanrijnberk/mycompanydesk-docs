---
title: "Accès et comptable"
last_verified: 2026-07-16
---

# Accès et comptable

Donnez à un associé, un employé ou votre comptable accès à votre comptabilité. Chaque personne reçoit son propre identifiant. Dans l'application, cette page s'appelle **Toegang en boekhouder** (accès et comptable).

## Où le trouver

Ouvrez **Paramètres** depuis le menu et choisissez **Accès et comptable**, ou allez directement sur `/settings/team`. Les anciens liens vers les paramètres d'équipe redirigent ici.

La page comporte deux sections :

- **Personnes ayant accès** : invitez des collègues et définissez ce qu'ils peuvent voir et faire. Cette section nécessite le plan Pro ; sur Free et Starter, une invitation à mettre à niveau s'affiche. Sur Pro, il n'y a pas de limite au nombre de personnes invitées.
- **Comptable** : invitez votre comptable et gérez son accès. Cette section est gratuite sur tous les plans.

## Ce que contient la page

### Nom de l'espace de travail

Une carte avec un seul champ. Le nom de l'espace de travail apparaît dans la navigation, sur les invitations et dans le menu du compte dans l'application. Seuls les administrateurs peuvent le modifier. Les modifications sont enregistrées automatiquement.

### Membres actuels

Une liste de toutes les personnes pouvant se connecter. Chaque ligne affiche :

- Un avatar avec initiales et un point de présence (vert en ligne, gris inactif, masqué si vous n'êtes pas administrateur)
- Le nom et l'adresse e-mail
- Le badge de rôle ou le sélecteur de rôle (administrateur uniquement)
- Une icône de réglages qui ouvre le panneau **Gérer l'accès**
- La dernière activité (« Actif il y a 2 minutes », « Vu hier »), administrateur uniquement

Si la liste est vide, la carte affiche l'état solo : vous travaillez seul, votre espace de travail est pleinement fonctionnel, et vous ajoutez des collègues quand vous êtes prêt.

### Donner accès à quelqu'un

Les administrateurs saisissent une adresse e-mail et envoient l'invitation. Dans l'application, le bouton s'appelle **Iemand toegang geven** (donner accès à quelqu'un). L'invité reçoit un e-mail avec un lien ; s'il n'a pas encore de compte MyCompanyDesk, il en crée un au moment d'accepter. Les invitations en attente figurent dans une carte séparée avec l'heure d'envoi et un badge.

Les non-administrateurs voient à la place un message d'information : seuls les administrateurs peuvent inviter de nouveaux membres.

### Comptable

Une liste séparée pour les comptables externes, gratuite sur tous les plans. Votre comptable peut consulter vos chiffres et vérifier vos déclarations sans occuper une place d'équipe Pro. Chaque ligne affiche un statut :

| Badge | Signification |
|---|---|
| **Contact uniquement** | Dans votre carnet d'adresses, sans accès à l'application |
| **Invité** | E-mail d'invitation envoyé, pas encore accepté |
| **Activé** | Possède un compte et peut se connecter |
| **Révoqué** | Accès retiré (peut être restauré plus tard) |

Actions administrateur par ligne : **Inviter le comptable**, le panneau **Gérer l'accès** et **Supprimer**.

## Agir en tant que comptable

Quand un comptable accepte une invitation ou bascule dans votre espace de travail depuis son propre compte, l'application affiche une bannière en haut de l'écran :

> « Vous travaillez dans la comptabilité de [client] en tant que comptable. »

La bannière contient aussi l'action **Retour à mon propre espace de travail**. Seul ce comptable la voit ; elle rappelle que ses modifications s'appliquent à votre comptabilité, pas à la sienne.

## Rôles

| Rôle | Description |
|---|---|
| **Administrateur** | Accès complet. Peut inviter et supprimer des membres, changer les rôles, gérer l'abonnement et modifier les paramètres de l'entreprise. |
| **Membre** | Accès à ce que l'administrateur accorde dans le panneau Gérer l'accès. |
| **Comptable** | Un type de contact distinct. Reçoit l'accès via le parcours comptable plutôt que via l'invitation de membre. |

Les rôles se changent directement sur la ligne du membre via un menu (administrateur uniquement). Vous ne pouvez pas changer votre propre rôle.

## Permissions

Le panneau **Gérer l'accès** ouvre un tableau de permissions par page. Chaque ligne correspond à une section de l'application : Tableau de bord, Factures, Dépenses, Clients, Projets, Objets, Contrats, Devis, Locations, Rapports et Paramètres.

Pour chaque page, trois interrupteurs indépendants :

- **Lecture** : voit la page et les enregistrements qu'elle contient
- **Écriture** : peut modifier les enregistrements existants
- **Création** : peut ajouter de nouveaux enregistrements

Le panneau affiche aussi un bandeau **Accès révoqué** pour les comptes suspendus (le bouton Restaurer les réactive).

## Sécurité de connexion

La sécurité de connexion de chaque personne se trouve sur son propre compte, sous **Paramètres** puis **Connexion**, et non sur cette page :

- **Passkeys** : les membres peuvent enregistrer une ou plusieurs passkeys ; ensuite, le bouton passkey devient la méthode de connexion par défaut à la place du champ mot de passe.
- **Vérification en deux étapes** : lorsqu'elle est activée, la connexion demande, après le mot de passe, un code à 6 chiffres provenant d'une application d'authentification.

Les administrateurs ne peuvent pas gérer les passkeys ni la vérification en deux étapes d'un autre membre ; ce sont des identifiants personnels. Une personne bloquée utilise l'option de récupération sur l'écran de connexion pour les réinitialiser.

## Changer d'espace de travail

Ouvrez le sélecteur d'espace de travail dans la barre supérieure pour passer d'un espace à l'autre ou en créer un nouveau.

## Plans en un coup d'œil

| Possibilité | Free | Starter | Pro |
|---|---|---|---|
| Propriétaire uniquement | oui | oui | oui |
| Inviter des membres d'équipe | non | non | oui (illimité) |
| Accès comptable | oui | oui | oui |

## Voir aussi

- [Abonnement et paiements](/fr/settings/billing) pour débloquer les membres d'équipe
- [Compte et sécurité](/fr/account/security) pour les passkeys et la vérification en deux étapes
