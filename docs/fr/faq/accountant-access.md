---
title: "Accès du comptable"
description: "L'accès comptable commence de deux façons : vous invitez votre comptable depuis votre espace, ou votre comptable vous invite depuis son portail."
last_verified: 2026-08-15
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
    - { label: "Open accountant settings", to: "/settings/boekhouder" }
  follow_up:
    - "How do I set page permissions?"
    - "How do I invite a team member?"
    - "How do I revoke access?"
    - "What happens when my accountant invites me?"
---

L'accès comptable peut commencer de deux façons : vous invitez votre comptable depuis votre propre espace de travail, ou votre comptable vous invite à créer un compte depuis son portail comptable.

## Vous invitez votre comptable

1. Allez dans Paramètres › « Votre comptable »
2. Sous « Boekhouder uitnodigen » (inviter un comptable), saisissez l'adresse e-mail de votre comptable et cliquez sur « Uitnodiging versturen » (envoyer l'invitation). Votre comptable reçoit un e-mail avec un lien d'acceptation valable 30 jours
3. Dès que votre comptable accepte, il apparaît sous « Actieve boekhouders » (comptables actifs), où vous pouvez aussi révoquer son accès
4. Vous voulez seulement une adresse à laquelle envoyer vos documents, sans que votre comptable se connecte ? Ajoutez alors un contact sous « Contactpersoon voor verzenden » (contact pour l'envoi). Si un contact a un compte, le bouton « Paginatoegang » (accès aux pages) définit les pages qu'il peut voir

L'accès comptable est gratuit sur tous les plans ; il ne nécessite ni Office ni place d'équipe. Sous « Wat je boekhouder heeft gedaan » (ce que votre comptable a fait), vous voyez chaque modification qu'un comptable apporte à votre comptabilité.

## Votre comptable vous invite

Si votre comptable utilise MyCompanyDesk, il peut vous inviter directement depuis son portail comptable. Vous recevez alors un e-mail avec un lien vers `/register?uitnodiging=TOKEN`.

1. Cliquez sur le lien dans l'e-mail
2. La page d'inscription affiche le cabinet qui vous invite et préremplit l'adresse e-mail à laquelle l'invitation a été envoyée
3. Créez votre compte avec e-mail et mot de passe. Vous restez propriétaire de votre espace de travail et de vos données
4. Après l'inscription, votre comptable obtient automatiquement l'accès pour vérifier vos déclarations

Si l'espace de travail pour lequel vous êtes invité dispose déjà de son propre abonnement actif, le cabinet ne peut pas prendre en charge sa facturation tant que cet abonnement n'est pas résilié. Vous verrez une erreur si le cabinet tente de configurer la facturation par le cabinet alors que votre propre abonnement est encore actif.

Vous pouvez révoquer cet accès plus tard dans Paramètres › « Votre comptable ». Le lien d'invitation est valable 30 jours et votre comptable peut le renvoyer ou le révoquer.

## Ce que votre comptable voit

Une fois que votre comptable a accès, son portail comptable affiche un tableau de triage avec une ligne par administration. Le tableau trie par urgence, pour que votre comptable voie d'un coup quelle administration a besoin d'attention aujourd'hui.

- Les administrations avec une échéance TVA proche ou dépassée apparaissent en premier.
- Les factures en retard et les reçus manquants sont comptés par administration.
- Les administrations dont la comptabilité est en ordre affichent "Loopt goed".

Votre comptable clique sur une administration pour ouvrir directement son espace de travail avec les permissions que vous avez définies. Il ne voit que les pages que vous avez autorisées et peut inviter ou gérer des administrations depuis le même écran.

## Livraison automatique

Le transfert automatique fait partie d'Office. Ajoutez d'abord un contact dans Paramètres › « Votre comptable », puis activez l'interrupteur dans la section « Automatisch doorsturen » (transfert automatique). MyCompanyDesk envoie alors de lui-même à votre comptable vos factures de vente (dès que vous les envoyez ou dès qu'elles sont payées) et vos dépenses par e-mail, avec le PDF de la facture et les reçus en pièce jointe. Vous choisissez la fréquence (immédiatement, chaque jour, chaque semaine, chaque mois ou chaque trimestre), si les devis sont joints à titre d'information et si seules les dépenses avec reçu sont envoyées. « Laatst verstuurd » (derniers envois) montre ce qui a été livré. Les chiffres de la déclaration de TVA ne sont pas inclus ; téléchargez-les en CSV depuis **Impôts › Déclaration de TVA**.

## Gérer plusieurs entreprises

Si vous gérez plusieurs entreprises, ou si votre comptable gère plusieurs administrations, le sélecteur d'espace de travail dans la barre latérale gauche vous permet d'ajouter et de basculer entre elles. Vous pouvez ajouter votre propre entreprise depuis le sélecteur ; chacune obtient une administration dédiée avec sa propre TVA, factures et comptabilité. Desk comprend une seule entreprise à vous. Avec Office, vous pouvez en gérer jusqu'à 10, pour 5,99 € par mois ou 59,90 € par an par entreprise supplémentaire (hors TVA).

Lorsque vous avez plus d'une administration, la navigation de gauche affiche aussi **Espaces de travail** comme lien direct vers le tableau de triage.

Les comptables invités par un client voient ces espaces de travail administrés à côté de leur propre entreprise. Voir [Rapports](/fr/features/reports) et [Tableau de bord](/fr/features/dashboard) pour savoir comment le travail est présenté entre administrations.
