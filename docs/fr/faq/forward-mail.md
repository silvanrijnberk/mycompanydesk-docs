---
title: "Transférer vos e-mails vers Gmail ou une autre adresse"
description: "Faites suivre automatiquement tous les e-mails entrants vers votre propre adresse, comme Gmail, ou envoyez une copie vers une autre adresse avec une règle."
last_verified: 2026-09-24
chatbot:
  triggers: ["doorsturen", "automatisch doorsturen", "mail doorsturen", "doorsturen naar gmail", "alle mail doorsturen", "forward", "forwarding", "kopie naar gmail", "weiterleiten", "transférer", "transférer mes e-mails", "transfert automatique", "rediriger mes e-mails", "copie vers gmail", "faire suivre"]
  actions:
    - { label: "Ouvrir Adresses", to: "/inbox/settings" }
    - { label: "Ouvrir Règles & routage", to: "/inbox/regels" }
  follow_up: ["Puis-je lire mes e-mails dans Outlook sur mon téléphone ?", "Comment créer une adresse e-mail supplémentaire ?"]
---

# Transférer vos e-mails vers Gmail ou une autre adresse

Les e-mails qui arrivent sur votre propre domaine dans la boîte de réception MyCompanyDesk (Office) peuvent être transférés automatiquement. Il existe deux façons de le faire.

À ne pas confondre avec **Connecter Gmail** sous **Paramètres** → **E-mail** : ce bouton détermine seulement le compte depuis lequel vous envoyez vos factures et devis. Ce n'est pas non plus l'envoi de factures à votre comptable.

## Transférer automatiquement tous vos e-mails vers votre propre adresse

1. Ouvrez **Boîte de réception** et choisissez **Adresses** en haut.
2. Descendez jusqu'à la carte **Transférer vers un e-mail**.
3. Activez **Transférer les messages**.

Vous recevez alors une copie de chaque message entrant, de toutes vos boîtes mail, à l'adresse e-mail avec laquelle vous vous connectez à MyCompanyDesk. Si vous vous connectez avec une adresse Gmail, tous vos e-mails arrivent donc aussi dans Gmail. Cette option est activée par défaut.

- La conversation reste aussi dans votre boîte de réception.
- Si vous répondez à une telle copie depuis Gmail ou votre application de messagerie, votre réponse part vers l'expéditeur d'origine et s'ajoute à la bonne conversation dans MyCompanyDesk.
- Les pièces jointes ne sont pas incluses dans la copie. Vous les ouvrez dans la boîte de réception ; chaque copie contient un lien.
- Les spams ne sont pas transférés.
- Vous ne choisissez pas l'adresse de destination ici : c'est toujours votre adresse e-mail de connexion. Pour transférer vers une autre adresse, utilisez une règle (ci-dessous) ou changez votre adresse de connexion via [Modifier l'adresse e-mail](/fr/faq/change-email).

## Transférer vers une autre adresse avec une règle

Une règle vous permet d'envoyer une copie vers n'importe quelle adresse, par exemple votre Gmail ou celle d'un collègue.

1. Ouvrez **Boîte de réception** et choisissez **Règles & routage** en haut.
2. Cliquez sur **Nouvelle règle** et donnez-lui un nom.
3. Sous **Quand**, choisissez **Reçu dans la boîte aux lettres** et, sous **Valeur de correspondance**, la boîte mail, par exemple `info@votreentreprise.fr`.
4. Sous **Faire**, choisissez **Transférer une copie à** et saisissez l'adresse, par exemple `votrenom@gmail.com`.
5. Enregistrez la règle.

Pour transférer tous vos e-mails, créez une règle par boîte mail. Vous pouvez aussi transférer selon l'expéditeur ou l'objet.

Bon à savoir :

- Vous pouvez avoir au maximum 5 règles de transfert, et au maximum 200 messages transférés partent par jour.
- Un message transféré vient d'une adresse MyCompanyDesk, avec « Fwd: » devant l'objet. Si vous cliquez sur Répondre, votre réponse part vers l'expéditeur d'origine.
- Les pièces jointes ne sont pas incluses.
- Seuls les administrateurs peuvent créer des règles.

## Voir aussi

- [E-mails dans Outlook, Apple Mail ou sur votre téléphone](/fr/faq/mail-app-outlook)
- [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox)
