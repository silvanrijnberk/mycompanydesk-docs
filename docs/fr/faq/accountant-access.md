---
title: "Accès du comptable"
last_verified: 2026-08-04
chatbot:
  triggers:
    - "accountant access"
    - "accountant permissions"
    - "add accountant"
    - "invite accountant"
    - "accountant toevoegen"
    - "boekhouder"
    - "buchhalter einladen"
    - "buchhalter zugang"
    - "comptable acces"
    - "ajouter comptable"
    - "accountant invite"
    - "revoke accountant"
    - "client invite"
    - "uitnodiging klant"
    - "klant uitnodigen"
  actions:
    - { label: "Open access settings", to: "/settings/team" }
  follow_up:
    - "How do I set page permissions?"
    - "How do I invite a team member?"
    - "How do I revoke access?"
    - "What happens when my accountant invites me?"
---

L'accès comptable peut commencer de deux façons : vous invitez votre comptable depuis votre propre espace de travail, ou votre comptable vous invite à créer un compte depuis son portail comptable.

## Vous invitez votre comptable

1. Allez dans Paramètres → « Accès et comptable »
2. Dans la section Comptable, cliquez sur « Ajouter un comptable » et saisissez les coordonnées
3. Envoyez l'invitation quand vous voulez que votre comptable crée un compte
4. Ouvrez « Gérer l'accès » pour définir les permissions de page

L'accès comptable est gratuit sur tous les plans ; il ne nécessite ni Pro ni place d'équipe. Les statuts courants sont contact seul, invité, actif et révoqué.

## Votre comptable vous invite

Si votre comptable utilise MyCompanyDesk, il peut vous inviter directement depuis son portail comptable. Vous recevez alors un e-mail avec un lien vers `/register?uitnodiging=TOKEN`.

1. Cliquez sur le lien dans l'e-mail
2. La page d'inscription affiche le cabinet qui vous invite et préremplit l'adresse e-mail à laquelle l'invitation a été envoyée
3. Créez votre compte avec e-mail et mot de passe. Vous restez propriétaire de votre espace de travail et de vos données
4. Après l'inscription, votre comptable obtient automatiquement l'accès pour vérifier vos déclarations

Vous pouvez révoquer cet accès plus tard dans Paramètres → « Accès et comptable ». Le lien d'invitation est valable 30 jours et votre comptable peut le renvoyer ou le révoquer.

## Ce que votre comptable voit

Une fois que votre comptable a accès, son portail comptable affiche un tableau de triage avec une ligne par administration. Le tableau trie par urgence, pour que votre comptable voie d'un coup quelle administration a besoin d'attention aujourd'hui.

- Les administrations avec une échéance TVA proche ou dépassée apparaissent en premier.
- Les factures en retard et les reçus manquants sont comptés par administration.
- Les administrations dont la comptabilité est en ordre affichent "Loopt goed".

Votre comptable clique sur une administration pour ouvrir directement son espace de travail avec les permissions que vous avez définies. Il ne voit que les pages que vous avez autorisées et peut inviter ou gérer des administrations depuis le même écran.

## Livraison automatique

Une fois votre comptable connecté, allez dans **Paramètres → Accès et comptable** et activez la livraison automatique. MyCompanyDesk envoie alors chaque trimestre un export avec les factures de vente, les dépenses et un récapitulatif de TVA dans un format compatible, afin que les chiffres n'aient pas à être retranscrits manuellement. Vous choisissez vous-même les flux inclus et consultez un journal des livraisons effectuées.

## Gérer plusieurs entreprises

Si vous gérez plusieurs entreprises, ou si votre comptable gère plusieurs administrations, le sélecteur d'espace de travail dans la barre latérale gauche vous permet d'ajouter et de basculer entre elles. Vous pouvez ajouter votre propre entreprise depuis le sélecteur ; chacune obtient une administration dédiée avec sa propre TVA, factures et comptabilité.

Lorsque vous avez plus d'une administration, la navigation de gauche affiche aussi **Espaces de travail** comme lien direct vers le tableau de triage.

Les comptables invités par un client voient ces espaces de travail administrés à côté de leur propre entreprise. Voir [Croissance](/fr/features/groei) et [Tableau de bord](/fr/features/dashboard) pour savoir comment le travail est présenté entre administrations.
