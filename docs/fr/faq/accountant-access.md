---
title: "Acces comptable"
last_verified: 2026-06-05
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
    - "boekhouder dashboard"
    - "accountant dashboard"
  actions:
    - { label: "Ouvrir les parametres d equipe", to: "/settings?section=team" }
    - { label: "Ouvrir le tableau de bord comptable", to: "/boekhouder" }
  follow_up:
    - "Que peut voir mon comptable ?"
    - "Comment inviter mon comptable ?"
    - "Comment revoquer l acces ?"
---

# Acces comptable

Donnez a votre comptable un acces en lecture seule aux parties financieres de votre espace de travail. Il peut consulter les factures, les depenses, la TVA, les transactions bancaires et les rapports sans pouvoir modifier vos parametres, votre site web ou votre configuration e-mail.

## Inviter un comptable

1. Allez dans **Parametres > Equipe** (ou `/workspace/account/team`)
2. Dans la section **Comptables**, cliquez sur **Ajouter un comptable**
3. Saisissez le nom et l adresse e-mail
4. Cliquez sur **Inviter** -- il recoit un e-mail avec un lien pour accepter

L invitation est valable 30 jours. Si elle expire, vous pouvez en envoyer une nouvelle. L e-mail d invitation est envoye en neerlandais et indique clairement la portee en lecture seule et les permissions accordees.

::: tip
L invitation est liee a l adresse e-mail : seule la personne dont l adresse correspond exactement peut accepter. Le transfert du lien d invitation a quelqu un d autre ne fonctionnera pas.
:::

## Ce que votre comptable peut voir

Apres acceptation, votre comptable dispose d un acces en lecture seule a :

- Factures et avoirs
- Depenses et justificatifs
- Apercu TVA et declaration
- Transactions bancaires
- Rapports

Il n a **pas** acces a votre site web/constructeur de site, parametres e-mail, parametres de l espace de travail ou pages de configuration.

## Le tableau de bord comptable

Apres acceptation, votre comptable voit un tableau de bord dedie a `/boekhouder` affichant :

- Son propre espace de travail principal
- Tous les espaces de travail clients auxquels il a acces, avec les dates de dernier acces

Il clique sur **Ouvrir** sur un espace de travail client pour y acceder. Une barre de recherche apparait lorsqu il a plus de cinq clients.

## Gerer l acces

En tant que proprietaire de l espace de travail, allez dans **Parametres > Equipe** pour voir toutes les invitations en attente et les acces comptables actifs. De la, vous pouvez :

- **Consulter** les comptables en attente et actifs avec leur e-mail, nom et derniere activite
- **Revoquer une invitation** avant qu elle ne soit acceptee (le lien cesse immediatement de fonctionner)
- **Revoquer un acces actif** pour supprimer l acces d un comptable (effet immediat)

## Statuts

| Statut | Signification |
|---|---|
| **En attente** | Invitation envoyee, pas encore acceptee |
| **Actif** | Le comptable a accepte et peut acceder a votre espace de travail |
| **Revoque** | L acces a ete supprime par vous |
| **Expire** | L invitation n a pas ete acceptee dans les 30 jours |
