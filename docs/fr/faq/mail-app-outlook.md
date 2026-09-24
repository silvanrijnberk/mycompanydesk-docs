---
title: "E-mails dans Outlook, Apple Mail ou sur votre téléphone"
description: "Envoyez depuis votre adresse MCD avec un logiciel de messagerie via SMTP et un mot de passe d'application. La lecture dans Outlook, pas encore."
last_verified: 2026-09-24
chatbot:
  triggers: ["outlook", "apple mail", "iphone mail", "mail op mijn telefoon", "mailapp", "mail app", "smtp", "app-wachtwoord", "imap", "pop3", "thunderbird", "mail instellen op telefoon", "outlook op mijn telefoon", "mail app password", "e-mail auf dem handy", "application mail", "e-mails sur mon téléphone", "mot de passe d'application", "configurer ma messagerie", "outlook sur mon téléphone", "logiciel de messagerie"]
  actions:
    - { label: "Ouvrir Adresses", to: "/inbox/settings" }
  follow_up: ["Comment transférer tous mes e-mails vers Gmail ?", "Comment créer une adresse e-mail supplémentaire ?"]
---

# E-mails dans Outlook, Apple Mail ou sur votre téléphone

Si votre messagerie professionnelle se trouve dans la boîte de réception MyCompanyDesk (Office), vous la lisez et y répondez dans MyCompanyDesk. Vous pouvez en plus envoyer depuis votre propre adresse avec un autre logiciel de messagerie. La lecture dans un autre logiciel de messagerie n'est pas encore possible.

Attention : il s'agit ici de la boîte mail sur votre propre domaine. Connecter Gmail ou Outlook sous **Paramètres** → **E-mail** est autre chose : cela détermine seulement le compte depuis lequel partent vos factures et devis. Voir [E-mail](/fr/settings/email).

## Puis-je lire mes e-mails dans Outlook ou Apple Mail sur mon iPhone ou mon téléphone ?

Pas encore. Outlook, Apple Mail et la plupart des autres applications de messagerie demandent, à l'ajout d'un compte, un serveur de courrier entrant (IMAP ou POP3). MyCompanyDesk ne le propose pas encore, vous ne pouvez donc pas configurer entièrement un tel compte sur votre téléphone.

Ce qui fonctionne :

- **Lire et répondre sur votre téléphone :** utilisez l'application MyCompanyDesk ou MyCompanyDesk dans votre navigateur. Toute votre boîte de réception y est.
- **Recevoir une copie ailleurs :** activez **Transférer vers un e-mail** pour recevoir une copie de chaque message entrant sur votre propre adresse e-mail. Voir [Transférer vos e-mails vers Gmail ou une autre adresse](/fr/faq/forward-mail).
- **Envoyer depuis un autre logiciel de messagerie :** voir ci-dessous.

## Comment envoyer des e-mails depuis mon adresse MCD avec un autre logiciel de messagerie ?

Dans un logiciel de messagerie qui accepte son propre serveur de courrier sortant (par exemple Gmail via « Envoyer des e-mails en tant que », ou un logiciel de messagerie sur votre ordinateur), vous pouvez envoyer depuis votre adresse MCD. Créez d'abord un mot de passe d'application :

1. Ouvrez **Boîte de réception** et choisissez **Adresses** en haut.
2. À côté de la boîte mail, cliquez sur l'icône de téléphone (**Connecter l'app mail**).
3. Donnez-lui un nom si vous le souhaitez, par exemple « Ordinateur portable », et cliquez sur **Créer un mot de passe d'application**.
4. Copiez le mot de passe tout de suite. Il ne s'affiche qu'une seule fois. Vous l'avez perdu ? Révoquez-le et créez-en un nouveau.

Saisissez ensuite ces informations pour le courrier sortant dans votre logiciel de messagerie :

| Réglage | Valeur |
|---|---|
| Serveur de courrier sortant (SMTP) | `smtp.mycompanydesk.nl` |
| Port et sécurité | 587 avec STARTTLS, ou 465 avec SSL/TLS |
| Nom d'utilisateur | votre adresse e-mail complète, par exemple `info@votreentreprise.fr` |
| Mot de passe | le mot de passe d'application (pas votre mot de passe de connexion) |

Dans Gmail, cela se fait via **Paramètres** → **Comptes** → **Envoyer des e-mails en tant que** → ajouter une autre adresse e-mail, avec les informations SMTP ci-dessus.

Ce que vous envoyez ainsi apparaît aussi dans la bonne conversation de votre boîte de réception MyCompanyDesk.

## Bon à savoir

- Vous pouvez avoir au maximum 5 mots de passe d'application par boîte mail. Créez-en un par appareil : vous pourrez ainsi en révoquer un avec **Révoquer** sans toucher aux autres.
- Vous ne pouvez envoyer que depuis l'adresse de cette boîte mail ou l'une de ses adresses supplémentaires.
- La boîte mail sur votre propre domaine, et donc tout ceci, fait partie d'Office. Voir [Formules et tarifs](/fr/faq/plans).
- MyCompanyDesk ajoute automatiquement votre signature sous chaque e-mail. Si votre logiciel de messagerie a aussi sa propre signature, vos e-mails en porteront deux. Voir [Configurer votre signature e-mail](/fr/faq/email-signature).
