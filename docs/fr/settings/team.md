---
title: "Accès et comptable"
last_verified: 2026-08-04
---

# Accès et comptable

Donnez à un associé, un employé ou votre comptable accès à votre comptabilité. Chaque personne reçoit son propre identifiant. Dans l'application, ces paramètres sont répartis sur deux pages : **Personnes ayant accès** et **Votre comptable**.

## Où le trouver

Ouvrez **Paramètres** depuis le menu et choisissez l'une des deux pages :

- **Personnes ayant accès** pour inviter des collègues et définir les permissions de page.
- **Votre comptable** pour inviter votre comptable.

Vous pouvez aussi naviguer directement vers `/settings/toegang` ou `/settings/boekhouder`. L'ancienne route d'application `/settings/team` redirige vers `/settings/toegang`. Cette page de documentation couvre les deux pages de l'application.

Les deux pages sont :

- **Personnes ayant accès** : invitez des collègues et définissez ce qu'ils peuvent voir et faire. Cette page nécessite le plan Pro ; sur Free et Starter, une invitation à mettre à niveau s'affiche. Sur Pro, il n'y a pas de limite au nombre de personnes invitées.
- **Votre comptable** : invitez votre comptable et gérez son accès. Cette page est gratuite sur tous les plans.

## Ce que contient la page

### Nom de l'espace de travail

Une carte avec un seul champ. Le nom de l'espace de travail apparaît dans la navigation, sur les invitations et dans le menu de l'espace de travail dans la barre latérale. Seuls les administrateurs peuvent le modifier. Les modifications sont enregistrées automatiquement.

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

## Livraison automatique à votre comptable

Une fois un comptable connecté, vous pouvez faire en sorte que MyCompanyDesk livre automatiquement des enregistrements. L'export rassemble les factures de vente, les dépenses et un récapitulatif de TVA dans un format que le logiciel de votre comptable peut importer, afin que les chiffres n'aient pas à être ressaisis.

Ouvrez la ligne du comptable dans **Paramètres → Votre comptable**, choisissez **Livraison automatique**, sélectionnez les flux à inclure (par exemple factures de vente, dépenses et un récapitulatif de TVA), le moment de déclenchement et le format. Un journal de livraison montre ce qui a été envoyé et quand.

### Vue d'ensemble des activités du comptable

MyCompanyDesk conserve désormais une vue d'ensemble des activités pour chaque comptable connecté. Elle enregistre ce que le comptable a consulté ou modifié dans votre espace de travail, afin que vous puissiez toujours relire ce qui s'est passé. Cette vue est disponible dans la même ligne du comptable, à côté du journal de livraison.

<!-- TODO(source-missing): confirmer l'abonnement/entitlement qui débloque la livraison automatique et les formats/profils d'export supportés -->

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

Ouvrez le menu de l'espace de travail dans l'en-tête de la barre latérale pour passer d'un espace à l'autre, voir l'abonnement ou en créer un nouveau.

Si vous avez accès à plus d'un espace de travail, le menu renvoie aussi vers la vue d'ensemble **Espaces de travail** sur `/werkruimtes`. Cette page liste tous les espaces que vous possédez ou gérez en tant que comptable, met en évidence les échéances et les éléments ouverts par espace, et vous permet d'ouvrir le bon espace en un clic.

## Plans en un coup d'œil

| Possibilité | Free | Starter | Pro |
|---|---|---|---|
| Propriétaire uniquement | oui | oui | oui |
| Inviter des membres d'équipe | non | non | oui (illimité) |
| Accès comptable | oui | oui | oui |

## Voir aussi

- [Abonnement et paiements](/fr/settings/billing) pour débloquer les membres d'équipe
- [Compte et sécurité](/fr/account/security) pour les passkeys et la vérification en deux étapes
