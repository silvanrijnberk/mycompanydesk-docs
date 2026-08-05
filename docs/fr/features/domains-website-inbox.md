---
title: Domaines, site web & inbox
last_verified: 2026-08-05
---

# Domaines, site web & inbox

MyCompanyDesk gère votre identité publique en un seul endroit : un domaine personnalisé, un site marketing brandé et une boîte de réception partagée qui collecte les messages.

## Domaine personnalisé

Vous pouvez pointer votre propre domaine vers MyCompanyDesk. Une fois configuré, le site marketing et toutes les pages hébergées sont servis depuis votre domaine.

Pour utiliser un domaine personnalisé :

1. Allez dans **Paramètres > Domaine**.
2. Saisissez le domaine souhaité.
3. Ajoutez les enregistrements DNS indiqués (généralement un enregistrement CNAME ou A).
4. Attendez la propagation DNS. Nous la vérifions automatiquement et affichons le statut dans l'app.

Vous pouvez également utiliser un sous-domaine, comme `www.votredomaine.fr` ou `help.votredomaine.fr`.

### Sous-domaines que nous hébergeons

Si vous ne souhaitez pas utiliser votre propre domaine, nous pouvons vous fournir un sous-domaine sur `mycompanydesk.com`. C'est utile pour les tests ou pour les comptes plus petits qui n'ont pas besoin d'un domaine entièrement brandé.

### Santé du domaine

La page de domaine indique si le DNS est correctement configuré. Si quelque chose change chez votre fournisseur DNS, le statut est mis à jour lors de la prochaine vérification.

## Site marketing

Le site marketing est une page d'accueil publique pour votre entreprise. Il comprend :

- Le nom de l'entreprise et le slogan
- Les coordonnées et les liens sociaux
- Une courte description de votre activité
- Un bouton d'appel à l'action qui oriente les visiteurs vers le bon endroit

Vous modifiez le contenu depuis **Paramètres > Site web**. Les modifications sont publiées automatiquement.

### Carte postale d'outreach

Nous pouvons imprimer et envoyer une carte postale avec un QR code unique menant à votre page d'accueil. Quelqu'un scanne le code, nous comptons le scan, puis redirigeons le visiteur vers votre site avec une courte référence (`ref`) dans l'URL, afin que la page puisse attribuer un inscription ultérieure à la carte physique. Le scan lui-même est compté côté serveur et fonctionne indépendamment du consentement aux cookies. La référence n'est stockée qu'après qu'un visiteur a accepté les cookies analytics, comme décrit dans [Cookies & tracking](/account/cookies-tracking).

Dans la vue admin du prospect, vous voyez combien de fois la carte a été scannée et quand le premier scan a eu lieu. La carte postale est conçue comme un échantillon unique ; ce n'est pas un abonnement ni un service récurrent.

### Bases du SEO

Le site marketing inclut des balises meta par défaut pour le titre et la description. Vous pouvez les remplacer depuis **Paramètres > Site web**.

### Analytics

Le site utilise une analytics respectueuse de la vie privée. Consultez [Cookies & tracking](/account/cookies-tracking) pour savoir exactement ce qui est collecté et comment refuser.

## Boîte de réception partagée

Chaque espace de travail MyCompanyDesk dispose d'une boîte de réception partagée qui collecte les messages envoyés à l'adresse e-mail de l'espace ou soumis via le formulaire de contact du site.

### Adresse de l'inbox

Votre adresse d'inbox ressemble à `votresociete@inbox.mycompanydesk.com` ou, si vous utilisez un domaine personnalisé, `bonjour@votredomaine.fr`. Vous trouverez l'adresse exacte dans **Inbox > Paramètres**.

### Ce qui arrive dans l'inbox

- Les soumissions du formulaire de contact du site marketing
- Les e-mails envoyés à l'adresse de l'espace de travail
- Les notifications automatiques que nous envoyons en votre nom

### Attribution et réponse

Les membres de l'équipe peuvent consulter, attribuer et répondre aux messages depuis l'inbox. Les réponses sont envoyées depuis l'adresse de l'espace de travail, pour que la conversation reste organisée en un seul endroit.

### Spam et modération

L'inbox dispose d'un filtrage anti-spam de base. Les messages suspects sont signalés pour vérification plutôt que d'apparaître dans la liste principale.

## Pages publiques

Certaines fonctionnalités, comme les articles d'aide ou les pages de réservation, peuvent être publiées comme pages publiques sous votre domaine. Chaque page publique hérite de votre branding et de vos paramètres de domaine.

## Cookies, tracking et consentement

Votre site marketing affiche une bannière de cookies. Les détails sur l'analytics et le stockage sont documentés dans [Cookies & tracking](/account/cookies-tracking). Seules les clés documentées sont utilisées ; aucun traqueur tiers n'est chargé avant consentement.

## Supprimer un domaine

Si vous ne souhaitez plus utiliser un domaine personnalisé, vous pouvez le supprimer dans **Paramètres > Domaine**. Votre espace de travail retombera alors sur le sous-domaine `mycompanydesk.com` jusqu'à ce que vous en ajoutiez un nouveau.

## Sujets connexes

- [Paramètres du compte](/account/settings)
- [Cookies & tracking](/account/cookies-tracking)
- [Membres de l'équipe & permissions](/account/team-members)
