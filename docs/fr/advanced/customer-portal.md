---
title: Portail client
description: "Chaque client dispose de son propre portail chez vous : factures, devis, contrats, rendez-vous et messages réunis, avec paiement en ligne."
---

# Portail client

Le portail client est la page de votre client chez votre entreprise. Chaque facture, devis et contrat que vous envoyez porte un lien vers ce portail, et le portail complet s'ouvre grâce à un lien de connexion envoyé par e-mail. On y retrouve tout ensemble : les documents, les rendez-vous et les messages, dans un espace sécurisé à votre image.

## Comment ça fonctionne

Lorsque vous envoyez une facture, un **lien de paiement** unique est généré. Lorsque votre client clique sur ce lien, il arrive sur la facture dans son portail et peut y :

1. **Consulter la facture** : voir tous les détails, les lignes et les totaux
2. **Télécharger le PDF** : obtenir une copie de la facture avec **Télécharger le PDF**
3. **Payer en ligne** : effectuer le paiement dans l'onglet **Payer en ligne**
4. **Signaler un virement** : avec **Déjà payé ? Prévenez {company}** puis **J'ai payé**, indiquer qu'il a payé par virement (non visible pour les avoirs, les factures annulées ou les factures d'origine entièrement créditées, car le client n'a dans aucun de ces cas rien à payer)
5. **Ajouter à ma comptabilité** : mettre la facture dans ses propres dépenses MyCompanyDesk (visible seulement pour les clients professionnels sur une facture réelle et valide)

Les liens du portail s'ouvrent dans le navigateur du client. Même si le client a l'appli MyCompanyDesk installée sur son téléphone, toucher le lien d'une facture ouvre le navigateur, pas l'appli.

### Deux manières d'entrer

Un lien de facture prouve seulement que quelqu'un a reçu cet e-mail. Il affiche **les factures de ce client** et cette facture, rien de plus : signer un devis, gérer des rendez-vous et écrire des messages demandent le portail complet. Celui-ci s'ouvre grâce à un lien de connexion envoyé par e-mail au client (voir plus bas), lié de ce fait à l'adresse de sa fiche client.

## Se connecter avec un lien par e-mail

Au portail, l'écran d'accès demande l'adresse e-mail du client et envoie ensuite un nouveau lien de connexion. Ce lien fonctionne une seule fois et reste valable une heure. Il ne part que vers l'adresse que l'entreprise connaît pour ce client, et l'écran ne révèle pas si une adresse est connue, afin que personne ne puisse vérifier ainsi qui sont vos clients.

Une fois le lien ouvert, votre client reste connecté 30 jours sur cet appareil, sans mot de passe. **Se déconnecter** met fin à cette session dans ce navigateur. Le portail se reconnaît toujours à votre nom d'entreprise et à votre image de marque, et son bloc de contact affiche votre adresse e-mail professionnelle publique, pour que les clients joignent la bonne boîte mail même si leur première facture est partie vers une adresse personnelle.

## Fonctionnalités du portail

### Cartes à tampons

Un client qui a acheté chez vous une carte à tampons la voit ici : la carte avec ce qu'il reste à tamponner, sa validité, ce pour quoi elle vaut et quand elle a servi pour la dernière fois. Le tamponnage est pour vous (depuis un rendez-vous, une séance de groupe ou la carte même dans l'application) ; le portail montre le solde et l'historique, y compris par un lien de partage qui fonctionne sans aucune connexion.

### Aperçu

L'aperçu est la page d'accueil du portail : votre image de marque et une salutation en haut, avec votre propre texte de bienvenue en dessous si vous en avez mis un, à côté de la carte fixe de l'entreprise avec vos coordonnées. Une courte liste **À faire** rassemble ce qui attend encore le client (payer une facture, signer un document, lire un nouveau message), et quand tout est réglé, la page le dit tout simplement : **Tout est payé, rien n'est en attente.** Si un paiement signalé par le client est encore en cours de contrôle, la page le dit aussi, au lieu de demander l'argent une seconde fois.

### Factures

L'onglet **Factures** range chaque facture et chaque avoir dans l'un de trois groupes : **À payer**, **Payées** et **Avoirs et factures annulées**. À côté figurent deux totaux : **À payer** et **Payé en** pour l'année en cours. Si le client a signalé un paiement que vous vérifiez encore, ce montant apparaît à part sous **En attente de confirmation**, et non dans le montant à payer.

**À payer** additionne le **solde restant par document**, pas le total brut, et inclut les factures dont la date d'échéance est déjà passée. Ainsi, une facture de 1 000 € avec un paiement partiel de 400 € contribue à hauteur de 600 € au montant à payer, et un avoir déjà appliqué à sa facture source contribue à 0 € pour ne pas être déduit deux fois.

Les brouillons n'apparaissent jamais dans la liste du portail. Un lien de portail n'est généré qu'au moment de l'envoi d'une facture : les brouillons non envoyés n'ont donc aucun lien visible par le client et ne peuvent pas être consultés via le portail.

### Vue de la facture

La facture s'ouvre dans le design du portail : votre bloc d'entreprise en haut, les détails de la facture comme la date, la date d'échéance et le numéro, et en dessous un panneau de paiement qui propose les deux manières de payer comme onglets : **Payer en ligne** (les boutons Mollie ou Stripe, quand un prestataire est relié) et **Virement**, avec la mention de paiement que le client indique lors de son virement et un code QR, pour que payer sans boutons en ligne reste possible. À côté, le panneau continue de montrer le montant déjà reçu, l'avoir appliqué et le solde restant.

Sur la même page se trouve la conversation avec le client : le champ de question **Questions sur cette facture** à côté de la vue, pour qu'une question sur exactement cette facture se pose et se réponde dans une conversation propre. Le client y télécharge aussi le PDF, et le même motif se répète sous un devis, un contrat, un document et un rendez-vous.

### Paiement

Les clients peuvent payer directement via le portail. Si vous avez connecté Mollie ou Stripe, des boutons de paiement apparaissent sur la vue de la facture pour que votre client puisse payer en un clic. Les boutons de paiement et le montant total dû sont masqués pour les avoirs, les factures annulées et les factures d'origine entièrement créditées, car le client n'a dans aucun de ces cas d'argent à transférer. Pour les factures avec paiements partiels ou avoirs, le portail affiche le montant déjà reçu, l'avoir appliqué et le solde restant dû avant le paiement, de sorte que le montant sur le bouton de paiement corresponde au montant restant dû. Lorsque le paiement est confirmé, le statut de la facture dans votre tableau de bord passe automatiquement à **Payée**. Le portail dit aussi au client la vérité après un retour Mollie ou iDEAL : si le prestataire de paiement n'a pas encore confirmé le paiement, la page le dit au lieu de prétendre que le paiement est en cours de traitement, et le client peut réessayer ensuite.

Avec Mollie ou Stripe connecté, le courriel de facture comme celui de rappel commence par un bouton **Payer maintenant**, suivi de **Voir la facture** pour les clients qui veulent d'abord regarder. Le bouton ouvre le portail avec un indicateur de paiement direct : le paiement démarre aussitôt et le client est conduit vers la page de paiement. Cette conception s'accompagne de trois garanties :

- **Le paiement ne démarre que dans un vrai navigateur.** C'est la page du portail qui lance le paiement au moment où le client ouvre son lien du courriel. Les analyseurs de liens qui prévisualisent les courriels (filtres de messagerie professionnels et semblables) ne créent donc jamais de paiement de leur propre initiative, et toutes les vérifications (déjà payée, retirée, avoir, « j'ai payé » en attente) restent portées par la demande de paiement elle-même.
- **Un onglet en arrière-plan ne paie pas tout seul.** Si le courriel a d'abord été ouvert dans un onglet en arrière-plan, le paiement ne démarre que lorsque le client regarde effectivement la page du portail.
- **Les factures payées ne demandent plus d'argent.** Une facture déjà payée, annulée ou dont un paiement attend encore une confirmation ne reçoit pas de bouton « Payer maintenant » ; ce courriel ouvre le portail sans lui.

Le QR de scan et de paiement du PDF de la facture utilise le même lien fixe, et fonctionne donc toujours, contrairement aux URL de paiement uniques qui expirent dans le courriel.

#### Paramètres de paiement Mollie

Une fois Mollie connecté, vous obtenez un interrupteur **Betaalknop op facturen** sous **Paramètres › Paiement**, dans le bloc **Permettre aux clients de payer par iDEAL**. Activez-le pour ajouter un bouton de paiement Mollie à chaque facture que vous envoyez. Désactivez-le et le bouton disparaît sans déconnecter Mollie.

Sous l'interrupteur se trouve une section **Betaalmethoden** listant chaque méthode de paiement activée dans votre tableau de bord Mollie (iDEAL, Bancontact, carte bancaire, et plus). Par défaut, les clients voient toutes les méthodes. Cochez des méthodes spécifiques pour restreindre la sélection, seules celles-ci apparaissent sur vos factures. Décochez tout pour revenir à « tout afficher ».

Le bouton **Stuur testbetaling** vous permet de parcourir un paiement de 1 € dans le mode test de Mollie, pour confirmer que tout fonctionne avant que vos clients ne le voient. Aucun argent réel n'est transféré.

#### Paramètres de paiement Stripe

Une fois Stripe connecté, vous obtenez un interrupteur **Betaalknop op facturen** sous **Paramètres › Paiement**, dans le bloc **Permettre aux clients de payer par iDEAL**. Activez-le pour ajouter un bouton de paiement Stripe à chaque facture que vous envoyez. Désactivez-le et le bouton disparaît sans déconnecter Stripe. L'interrupteur n'est disponible qu'une fois l'onboarding Stripe (KYC) terminé.

Sous l'interrupteur se trouve une section **Betaalmethoden** listant chaque méthode de paiement prise en charge, croisée avec les capacités de votre compte Stripe (carte, iDEAL, Bancontact, prélèvement SEPA, PayPal, Klarna et Link by Stripe). Par défaut, Stripe Checkout choisit automatiquement la bonne méthode par client. Cochez des méthodes spécifiques pour restreindre ce que les clients voient, seules celles-ci apparaissent au checkout. Décochez tout pour revenir à la sélection automatique.

Le bouton **Open Stripe Dashboard** vous redirige directement vers vos paramètres de méthodes de paiement Stripe, afin que vous puissiez vérifier votre intégration et tester les paiements directement dans Stripe.

### La facture dans votre propre comptabilité

Un client professionnel qui utilise lui-même MyCompanyDesk peut importer votre facture directement dans ses propres dépenses avec le bouton **Ajouter à ma comptabilité**, à côté de **Télécharger le PDF**. MyCompanyDesk importe la facture comme dépense provisoire dans cet espace de travail, avec les montants, la TVA et le PDF joint, et l'ouvre prête à vérifier. Le bouton apparaît sur de vraies factures valides pour des clients professionnels : devis, avoirs, factures annulées et factures entièrement créditées n'ont rien à comptabiliser, donc pas de bouton.

Pas encore de compte ? La page montre quelle facture c'est, qui l'a envoyée et pour combien, avec **Créer un compte** et **J'ai déjà un compte** à côté. Ensuite, MyCompanyDesk reprend l'import tout seul, sur cet appareil, pendant une semaine au plus.

L'import partage la même déduplication que les factures qui arrivent par la voie automatique (voir [Receiving invoices from other MyCompanyDesk users](/fr/features/invoices#receiving-invoices-from-other-mycompanydesk-users)), pour que la même facture ne soit jamais comptabilisée deux fois. Sur votre propre facture, vous relisez ce qui s'est passé : **Le client a ajouté la facture à sa propre comptabilité**.

### Devis, contrats et documents

Les onglets **Devis**, **Contrats** et **Documents** montrent ce que ce client a reçu de vous. Un onglet n'apparaît que s'il contient quelque chose : un client qui n'a que des factures ne voit pas d'onglet Devis vide. Les documents qui attendent une signature arrivent en tête, avec l'action **Consulter et signer**. Un devis reste visible jusqu'à sa date de validité, et le statut suit le cours du document (par exemple **En attente de vous**, **Accepté**, **Refusé**, **Expiré** ou **Signé**). La signature passe par une page de signature sécurisée, qui demande un code SMS lorsque vous l'imposez pour un document.

La page de signature porte le même habit que le reste du portail : votre nom dans l'en-tête, le document, une barre d'étapes (**Lire le document**, **Placer votre signature**, **Confirmer**) et, pour un devis, une phrase de consentement, **J'accepte ce devis et les conditions de {company}.**, avant le bouton **Signer et envoyer**. Votre client dessine ou tape son nom, puis reçoit un e-mail de confirmation et le PDF en téléchargement. S'il ne veut pas d'un devis, il choisit **Je ne suis pas d'accord** et peut indiquer une raison. La page de signature porte le même champ de question que le reste du portail, pour qu'une question sur ce document arrive dans une conversation au lieu d'un canal à part.

### Rendez-vous

Le portail affiche les rendez-vous à venir et passés de ce client, y compris les places qu'il a réservées pour une séance de groupe (atelier, cours, visite guidée) ; voir [Rendez-vous en ligne](/fr/features/site-bookings). Avec **Ajouter à mon agenda**, le client ajoute un rendez-vous à son propre agenda, et **Déplacer ou annuler** passe par la même page que celle du lien dans le courriel de confirmation. Les rendez-vous qui n'ont pas été réservés avec l'adresse e-mail de ce client restent invisibles.

### Questions par document

Chaque vue du portail porte sa propre conversation : à une facture s'ajoute **Questions sur cette facture**, à un devis **Questions sur ce devis**, et le même motif vaut pour les contrats, les autres documents et les rendez-vous. Le client écrit sa question, elle arrive dans votre boîte dans l'appli, et votre réponse parvient à la fois dans la conversation et dans le courriel du client. Une question appartient au document depuis lequel elle est posée : chaque conversation reste à son propre sujet. Il n'y a pas d'onglet Messages séparé : chaque question appartient à l'élément qu'elle concerne, et l'aperçu indique pour chaque élément s'il y a des messages.

Poser une question demande le portail complet. Celui qui n'arrive qu'avec le lien d'une facture voit où est la porte : avec **M'envoyer le lien**, le portail propose d'envoyer le lien de connexion par courriel à l'adresse que votre fiche client possède, et le champ de question explique que les questions se posent dans le portail complet. Les messages du portail restent tels qu'ils sont écrits : le courriel qui vous arrive est la question de votre client, sans signature de courriel et sans historique cité dessous.

### Image de marque

Le portail client utilise l'image de marque de votre entreprise :

- Logo de l'entreprise
- Couleur de marque
- Informations de l'entreprise

Cela crée une expérience professionnelle et cohérente pour vos clients.

### L'apparence du portail

Sous **Paramètres › Espace client** vous choisissez l'apparence de l'ensemble, sans travail supplémentaire : logo, couleur et données de l'entreprise ont déjà leur propre place et viennent avec d'eux-mêmes. Ici vous réglez vous-même :

- **Style** : cinq styles, chacun tiré de votre couleur de marque, pour qu'une couleur pâle ou presque noire ressorte chez votre client comme dans l'aperçu. **Sobre** (blanc, votre couleur seulement dans les boutons et les accents), **Chaleureux** (papier doux et formes arrondies), **Couleur** (votre couleur dans l'en-tête et la première tâche), **Net** (anguleux et professionnel, une grille claire) ou **Soirée** (un en-tête sombre avec de grandes lettres). Chaque tuile du sélecteur porte un petit aperçu dans ce style.
- **Affichage** : **Toujours clair** ou **Toujours sombre**, ou laissez-le sur **Selon votre client**, pour que l'espace suive ce que l'appareil de votre client demande (votre client peut toujours le changer lui-même).
- **Texte de bienvenue** : une courte ligne sous la salutation. Laissez-la vide, nous indiquons nous-mêmes ce qui attend votre client.
- **Votre photo sur la carte** : avec une photo de profil, c'est vous qui figurez avec votre nom sur la carte de contact, à la place de votre entreprise. Votre logo reste en haut.

À côté des réglages se trouve l'aperçu : le vrai aperçu du portail avec des données d'exemple, dans la largeur que reçoit votre client, exactement comme votre client le voit. Le contenu de la carte d'entreprise et le lien du portail renvoient à leurs propres places : le logo et la couleur se règlent sous **Logo et couleur**, les données de l'entreprise sous **Données de l'entreprise**.

Envoyer à un client son lien de connexion ou le déconnecter partout, cela se fait sur la page du client, dans le bloc **Espace client**.

## Copie figée de la facture

La vue de la facture et le téléchargement du PDF sont rendus à partir d'un instantané pris lors de l'envoi. Cet instantané fige les informations de votre entreprise, les informations client, la langue du document et l'image de marque telles qu'elles étaient à l'envoi. Les clients voient donc la facture exactement comme elle a été envoyée, même si vous modifiez ensuite les paramètres de l'espace de travail ou la fiche client. Les brouillons n'ont pas encore d'instantané et ne sont pas consultables via le portail, car un lien de portail n'est généré que lors de l'envoi de la facture.

## Sécurité d'accès

Chaque lien du portail est :

- **Unique** : généré par facture
- **Sécurisé** : avec un jeton d'accès unique
- **Limité** : un lien de facture n'affiche que les factures de ce client, ni devis, ni rendez-vous, ni messages

Les clients n'ont pas besoin d'un compte MyCompanyDesk pour consulter et payer leurs factures. Chaque session du portail est épinglée par le serveur à un seul client chez une seule entreprise ; une session ouverte chez une entreprise n'affiche donc jamais les documents d'une autre, et les pages du portail sont toujours envoyées sans mise en cache, pour que les données personnelles ne restent jamais dans des caches partagés.

## Suivi des événements client

MyCompanyDesk suit les interactions des clients avec le portail :

- Quand le client ouvre la facture
- Quand il télécharge le PDF
- Quand il initie un paiement
- Quand le paiement est confirmé
- Quand le client ajoute la facture dans sa propre comptabilité

Cela vous aide à comprendre l'engagement de vos clients et à effectuer des relances efficacement.

## Conseils

- Incluez une note personnelle dans votre e-mail de facture pour encourager l'utilisation du portail
- Le portail fonctionne sur tous les appareils : mobile, tablette et ordinateur
- Les confirmations de paiement sont envoyées à vous et au client
- Consultez l'historique des événements client sur la page de détail de la facture pour voir les interactions avec le portail