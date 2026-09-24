---
title: "Connecter votre propre domaine et les serveurs de noms"
description: "Connecter un domaine de Hostinger ou d'ailleurs : où trouver les deux serveurs de noms, le bon ordre pour vos e-mails et quand un code de transfert sert."
last_verified: 2026-09-24
chatbot:
  triggers: ["nameservers", "nameserver", "domein koppelen", "eigen domein", "hostinger", "dns", "verhuiscode", "domein verhuizen", "domein aansluiten", "connect domain", "name servers", "domain verbinden", "connecter mon domaine", "serveurs de noms", "serveur de noms", "connecter un domaine", "mon propre domaine", "code de transfert", "transférer mon domaine", "code epp"]
  actions:
    - { label: "Ouvrir Votre site et domaine", to: "/settings/domein" }
  follow_up: ["Puis-je importer mes anciens e-mails ?", "Comment publier mon site web ?"]
---

# Connecter votre propre domaine et les serveurs de noms

Avec Office, vous connectez votre propre nom de domaine, par exemple `votreentreprise.fr`, à MyCompanyDesk. Votre site web et votre messagerie professionnelle fonctionnent alors sur ce domaine. Votre domaine peut rester chez votre fournisseur actuel, comme Hostinger : il suffit de modifier les serveurs de noms.

## Où connecter mon domaine ?

Allez dans **Paramètres** → **Votre site et domaine**. Vous y accédez aussi depuis **Site web** → **Domaine & e-mail**, via **Gérer**. Vous choisissez ensuite comment commencer :

- **Je viens d'un autre hébergeur :** vous avez aujourd'hui votre messagerie, et peut-être votre site, chez Hostinger ou un autre hébergeur. Cet assistant connecte votre domaine, crée vos boîtes mail et reprend vos anciens e-mails. C'est le meilleur choix si votre messagerie déménage aussi.
- **J'ai déjà un domaine :** vous avez un domaine, mais pas de messagerie à reprendre. Choisissez ensuite **Laisser MyCompanyDesk tout gérer** (recommandé) et cliquez sur **Suivant**.
- **Transférer votre domaine chez nous :** l'enregistrement de votre domaine passe lui aussi chez MyCompanyDesk. Il vous faut pour cela un code de transfert.
- **Votre premier domaine .nl est gratuit** ou **Rechercher un nom de domaine disponible :** si vous n'avez pas encore de domaine.

## Quels serveurs de noms dois-je saisir ?

Après l'ajout de votre domaine, MyCompanyDesk affiche deux serveurs de noms, à l'étape **Configurez ces informations chez votre fournisseur de domaine**. Ils se terminent par `ns.cloudflare.com` et changent d'un domaine à l'autre : recopiez exactement les deux qui s'affichent pour votre domaine. Vous les retrouvez plus tard dans la carte **Domaines en attente**, sous **Paramètres** → **Votre site et domaine**.

Dans l'assistant **Je viens d'un autre hébergeur**, les serveurs de noms s'affichent si vous choisissez **Je ne veux pas transférer mon domaine** à l'étape du transfert.

## Modifier les serveurs de noms chez Hostinger

1. Connectez-vous à Hostinger (hPanel) et ouvrez **Domaines**.
2. Choisissez votre domaine et allez dans **DNS / Serveurs de noms**.
3. Choisissez **Modifier les serveurs de noms**, puis l'option des serveurs de noms personnalisés.
4. Remplacez les serveurs de noms par les deux de MyCompanyDesk et enregistrez.

Les noms des menus chez Hostinger peuvent varier légèrement.

Chez d'autres fournisseurs, le réglage s'appelle souvent aussi « Serveurs de noms », « Nameservers » ou « Serveurs DNS ». Cherchez ce réglage et remplacez ce qui y figure par les deux adresses.

MyCompanyDesk vérifie ensuite de lui-même si tout fonctionne. Avec **Vérifier maintenant**, vous contrôlez tout de suite. Cela prend généralement moins d'une heure, parfois jusqu'à une journée. Dès que votre domaine est **Actif**, vous recevez un message.

## Dans quel ordre, pour que vos e-mails continuent de fonctionner ?

Ne modifiez vos serveurs de noms qu'une fois votre messagerie prête chez nous. Sinon, plus aucun e-mail n'arrive tant que vous n'avez pas activé l'e-mail chez nous.

1. Connectez votre domaine. Si votre messagerie doit suivre, utilisez l'assistant **Je viens d'un autre hébergeur** : il crée tout de suite vos boîtes mail et reprend vos anciens e-mails.
2. Si vous connectez votre domaine via **J'ai déjà un domaine**, cliquez d'abord sur **Activer l'e-mail** dans la carte **E-mail** et créez vos boîtes mail. Vous voyez alors « Ta boîte est prête. Le courrier sur ce domaine fonctionnera dès que tes serveurs de noms pointeront vers nous. »
3. Si votre site web doit aussi être sur ce domaine, publiez-le chez MyCompanyDesk (voir [Publier votre site web et le mettre en ligne](/fr/faq/publish-website)), puis activez-le sur votre domaine via **Site web** → **Domaine & e-mail** → **Mettez votre site en ligne sur ce domaine**.
4. Modifiez seulement maintenant les serveurs de noms chez votre fournisseur.

Dès que votre domaine est actif, MyCompanyDesk configure automatiquement les réglages de messagerie (comme les enregistrements MX). Ne résiliez votre offre chez votre ancien hébergeur qu'une fois tous vos e-mails repris.

Attention : les réglages que vous aviez chez votre ancien hébergeur, comme un site hébergé là-bas ou d'autres enregistrements DNS, ne sont pas repris. Si votre site est encore chez votre ancien hébergeur, il n'est plus accessible via votre domaine après la modification des serveurs de noms. Préparez donc votre site chez MyCompanyDesk avant de modifier les serveurs de noms.

## Ai-je besoin d'un code de transfert ?

Non, pas pour votre messagerie ni pour votre site. Modifier les serveurs de noms suffit. Le code de transfert (aussi appelé code d'autorisation ou code EPP) ne sert que si vous voulez aussi transférer l'enregistrement de votre domaine chez MyCompanyDesk, pour ne plus le payer chez votre ancien fournisseur. Chez Hostinger, ce code s'appelle « Authorization code » et se trouve sous **Domaines** → **Gérer**. Sur le même écran, désactivez aussi le verrou de transfert (transfer lock). Transférer un domaine `.nl` est gratuit.

## Voir aussi

- [Importer vos anciens e-mails](/fr/faq/import-old-mail)
- [Publier votre site web et le mettre en ligne](/fr/faq/publish-website)
- [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox)
