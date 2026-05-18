---
title: Constructeur de site
---

# Constructeur de site

Construisez votre site web professionnel avec un editeur par glisser-deposer. Creez plusieurs pages, composez-les avec des sections et des blocs, personnalisez les couleurs et les polices, puis publiez quand vous etes pret.

## Vue d'ensemble

Le constructeur de site remplace l'ancien profil d'entreprise a page unique. Vous obtenez un editeur de site complet avec :

- **Pages multiples**: Creez autant de pages que necessaire, chacune avec son propre chemin et ses propres sections.
- **Selecteur de domaine**: Lorsque votre espace de travail possede plusieurs domaines personnalises (abonnement Pro), un menu deroulant dans la barre superieure vous permet de basculer entre l'edition du site principal et une variante par domaine. Chaque domaine dispose de ses propres pages, navigation, tokens de design et snapshot de publication.
- **Blocs de section**: Ajoutez des sections hero, texte, galerie, spotlight, services, equipe, temoignages, formulaire de contact et HTML personnalise a chaque page.
- **Tokens de design**: Definissez les couleurs de marque, les polices, les espacements, les coins arrondis, le style de mouvement, le CSS personnalise et un favicon de site. Les modifications s'appliquent a l'ensemble du site.
- **Editeur de navigation**: Reorganisez les liens d'en-tete par glisser-deposer, avec des groupes deroulants et des liens externes.
- **Snapshots de publication**: Travaillez en brouillon, previsualisez vos modifications, puis publiez. Les modifications non publiees sont affichees dans la barre superieure.
- **Apercu responsive**: Basculez entre les vues desktop, tablette et mobile pendant l'edition.

Le constructeur de site se trouve sous **Entreprise > Votre site web** (`/website`).

## Onglets

Le constructeur de site dispose de cinq onglets (six lorsque Style est deplie) :

- **Editeur**: Composez des pages en ajoutant et en organisant des sections. Cliquez sur une section pour modifier son contenu, sa mise en page, son style ou son animation. Faites glisser les sections pour les reordonner, les dupliquer ou les supprimer.
- **Pages**: Gelez vos pages : creez-en de nouvelles a partir de modeles, definissez les chemins et la visibilite, et voyez quelles pages sont en ligne, en brouillon ou planifiees. Cliquez sur une page pour l'ouvrir dans l'editeur. La page d'accueil verrouillee ne peut pas etre supprimee.
- **Style**: Personnalisez vos tokens de design a l'echelle du site. Choisissez un preset en un clic (Editorial) puis ajustez les couleurs (marque, accent, papier, encre), les polices (titres, corps, mono de la bibliotheque de polices), la barre de navigation (disposition, arriere-plan, style du CTA), l'echelle (rayon, densite, largeur maximale, espacement des sections), le mouvement, les styles de boutons et le CSS personnalise. Vous pouvez egalement ajouter des snippets d'en-tete pour l'analytique (Plausible, Umami, Matomo) ou les preconnexions de polices. Cliquez sur l'en-tete Style pour deplier ou replier l'onglet.
- **Domaine et SEO**: Configurez votre domaine personnalise et vos parametres SEO. Le contenu ici est lie au domaine selectionne dans le selecteur de domaine de la barre superieure. Lorsque le site principal (affiche sous le nom de votre espace de travail) est selectionne, aucun panneau specifique au domaine n'apparait. Consultez [Domaines, site web et boite de reception](/fr/features/domains-website-inbox) pour la gestion complete des domaines.
- **Integrations**: Connectez des services tiers a votre site web.

## Creer des pages

1. Allez dans l'onglet **Pages**.
2. Cliquez sur **Nouvelle page**.
3. Saisissez un titre et un chemin (par ex. `/a-propos`).
4. Choisissez un modele ou commencez avec une page vierge.
5. La page s'ouvre dans l'editeur, ou vous pouvez ajouter des sections et la construire.

Chaque page recoit un chemin unique. La page d'accueil (`/`) est creee par defaut et ne peut pas etre supprimee.

## Construire des pages avec des sections

Dans l'onglet **Editeur** :

- Cliquez sur **Ajouter une section** pour voir les types de blocs disponibles (hero, texte, galerie, spotlight, services, equipe, temoignages, formulaire de contact, tarifs, produit, HTML personnalise, etc.).
- Selectionnez un type de bloc pour l'inserer sur la page.
- Cliquez sur une section pour ouvrir le panneau d'inspection, ou vous pouvez modifier son contenu, sa mise en page, son style et son animation.
- Faites glisser les sections vers le haut ou le bas pour les reordonner. Utilisez les actions dupliquer et supprimer sur chaque section.

Certaines sections ont des variantes systeme uniquement disponibles sur la page d'accueil verrouillee.

### Spotlight

Le bloc spotlight est une rangee alternee d'image et de texte. Chaque rangee affiche une image d'un cote et du texte de l'autre : un eyebrow, un titre, un sous-titre, des puces avec coches et un lien call-to-action optionnel. Vous choisissez de quel cote l'image apparait dans le panneau de mise en page.

Quelques points a savoir :

- **Cote de l'image** : La variante de mise en page est par defaut image-a-droite. Passez a image-a-gauche dans le panneau de mise en page pour inverser la rangee.
- **Elements optionnels** : L'eyebrow, le sous-titre, les puces, le CTA et l'image sont tous optionnels. Un spotlight avec seulement un titre et une image s'affiche tout aussi proprement.
- **Empilement** : Ajoutez plusieurs sections spotlight les unes en dessous des autres pour reproduire le schema classique de liste de fonctionnalites de la landing page MCD.

### Grille tarifaire avec boutons d'achat

La section tarifs affiche vos forfaits ou abonnements. Chaque niveau peut optionnellement avoir un bouton d'achat :

- Marquez un niveau comme **purchasable** et indiquez le **montant en centimes** (ex. 4999 pour EUR 49,99).
- Un bouton **Acheter** remplace le lien CTA statique. Les visiteurs qui cliquent passent par le checkout MyCompanyDesk et sont rediriges vers Mollie ou Stripe Connect pour le paiement.
- Le libelle du bouton est par defaut "Acheter", personnalisable par niveau avec le champ **buyLabel**.
- Les niveaux sans bouton d'achat conservent le comportement de lien CTA existant.

### Bloc produit

Une fiche d'achat autonome pour un seul article, quand un tableau tarifaire complet est superflu :

- Un nom de produit, une description, une image optionnelle, un prix et un bouton d'achat.
- Meme plomberie de checkout que les boutons d'achat des tarifs, votre visiteur paie via Mollie ou Stripe Connect.
- Une ligne de note optionnelle sous le bouton pour les informations de livraison, les mentions legales ou les remarques.

Consultez [Ventes](/fr/features/domains-website-inbox#ventes) pour le suivi des paiements et des commandes.

## Animations de section

Chaque bloc de section dispose d'un panneau **Animation** dans l'inspecteur. Il vous permet d'ajouter du mouvement qui se declenche lorsque la section entre dans le viewport, au chargement de la page ou au survol.

### Types d'animation

| Type | Effet |
|---|---|
| **Fade up** | La section apparait en glissant de 1rem vers le haut. |
| **Fade in** | La section apparait depuis la transparence. |
| **Slide right** | La section apparait en glissant de 2rem vers la droite. |
| **Reveal** | La section se devoile de droite a gauche via un masque de decoupage. |
| **Stagger** | Les elements enfants apparaissent les uns apres les autres par pas de 80ms, au lieu que la section elle-meme bouge. |

### Declencheurs

Comment l'animation demarre :

- **In-view** (par defaut) : L'animation se declenche lorsque la section entre dans le viewport. Utilise l'IntersectionObserver du navigateur. Une fois animee, la section reste visible.
- **Load** : L'animation se declenche immediatement au chargement de la page.
- **Hover** : L'animation se declenche au survol (mouseenter) et revient a la sortie (mouseleave).

### Controles

- **Duration** : Duree de l'animation en millisecondes, par defaut 700ms.
- **Delay** : Delai avant le demarrage de l'animation en millisecondes, par defaut 0ms.
- **Easing** : La courbe d'acceleration. Choix entre **ease-out** (par defaut), **linear** et **spring**.
- **Stagger children** : Lorsque active, la section elle-meme reste immobile et ses elements enfants directs s'animent en sequence. Cette option fonctionne en complement de tout type d'animation (fade-up + stagger children, fade-in + stagger children, etc.). L'animation de la section est supprimee pour que seuls les enfants portent le mouvement.

### Reduction de mouvement

Les visiteurs ayant `prefers-reduced-motion: reduce` active au niveau du systeme d'exploitation voient chaque section directement dans sa position finale. Aucune animation n'est jouee. Au niveau de l'espace de travail, les tokens de mouvement peuvent egalement desactiver les animations par site. Lorsque la reduction de mouvement est active, la section ne recoit jamais la classe de depart masquee, de sorte que le HTML rendu cote serveur soit accessible avant meme l'execution de JavaScript.

## Personnaliser le style de votre site

Dans l'onglet **Style**, vous controlez l'apparence de l'ensemble de votre site :

- **Presets** : Des points de depart en un clic qui definissent les couleurs, les polices et les espacements d'un coup. Le preset Editorial apporte une palette bleu marine et or avec des titres serif et des eyebrows mono, reflet du style maison MyCompanyDesk. Appliquer un preset fusionne les tokens avec votre espace de travail, en preservant votre logo, votre CSS personnalise et vos snippets d'en-tete.
- **Couleurs**: Choisissez les couleurs de marque, d'accent, de papier, d'encre, de surface et attenuees. La palette est appliquee via des proprietes CSS personnalisees.
- **Mode sombre**: Definit le comportement du site en affichage sombre. Trois options : **Desactive** (pas de mode sombre, le site reste sur le theme clair), **Bouton** (les visiteurs voient un bouton soleil/lune dans la navigation et peuvent changer de theme, leur choix est enregistre localement), ou **Suivre le systeme** (le site suit automatiquement la preference du visiteur au niveau du systeme d'exploitation via un ecouteur media-query en direct). Lorsque le mode sombre est actif, une palette sombre apparait, vous permettant de definir une version nocturne de chaque couleur. Si vous laissez la palette sombre vide, le site applique une inversion par defaut qui preserve vos couleurs de marque et d'accent.
- **Typographie**: Choisissez les polices de titre, de corps et mono dans la bibliotheque integree (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Echelle**: Definissez le rayon des coins, la densite (compact, aere, genereux), la largeur maximale du contenu et l'espacement vertical des sections.
- **Mouvement**: Activez le mouvement reduit ou choisissez un style de mouvement (aucun, subtil, ludique).
- **Boutons**: Personnalisez le rayon, le remplissage et les effets de survol des boutons.
- **Barre de navigation**: Definissez la disposition (standard, centree, divisee), le style d'arriere-plan (plein, flou translucide, transparent) et l'apparence du bouton CTA (plein, contour, texte seul). Les parametres de navigation s'appliquent a chaque page.
- **CSS personnalise**: Ecrivez votre propre CSS qui sera injecte dans le site. Utile pour les ajustements fins ou pour remplacer les valeurs par defaut.
- **Favicon**: Telechargez un favicon pour votre site. Il apparait dans les onglets du navigateur et les favoris. Si vous n'en definissez pas, le site utilise votre logo clair, puis votre photo de profil d'entreprise.
- **Snippets d'en-tete**: Ajoutez des scripts d'analytique (Plausible, Umami, Matomo) ou des preconnexions de polices via le selecteur de snippets.

Les modifications dans l'onglet Style sont enregistrees automatiquement et s'appliquent a toutes les pages.

## Publier

La barre superieure indique le nombre de modifications non publiees. Lorsque vous etes pret :

1. Cliquez sur **Publier** dans la barre superieure.
2. Votre site est publie sur l'URL publique (votre domaine personnalise, le sous-domaine de l'espace de travail ou la route portail de secours).

Les modifications non publiees sont suivies par page et par token. Le bouton Publier est desactive lorsqu'il n'y a rien a publier.

## Navigation

L'editeur de navigation vous permet d'organiser les liens d'en-tete de votre site :

- Faites glisser les pages pour reordonner la navigation.
- Creez des groupes deroulants pour imbriquer des pages sous un libelle parent.
- Ajoutez des liens externes qui pointent hors de votre site.
- Le logo dans l'en-tete est cliquable et renvoie toujours a la page d'accueil.
- La page d'accueil est toujours en premiere position et verrouillee.

## URL publique

Votre site web est servi a l'URL la plus prioritaire disponible :

1. Votre domaine personnalise (par ex. `https://acme.fr`) lorsqu'il est verifie et active
2. Votre sous-domaine d'espace de travail (par ex. `https://acme.mycompanydesk.com`)
3. La route portail de secours (`/portal/{slug}`)

Consultez [Domaines, site web et boite de reception](/fr/features/domains-website-inbox) pour la configuration et la verification du domaine.

## Formulaire de contact

Le bloc formulaire de contact (`form` type de section) dispose d'un gestionnaire d'envoi actif. Lorsqu'un visiteur remplit les champs que vous avez configurés (nom, e-mail, téléphone, entreprise, message) et clique sur Envoyer, la plateforme crée une demande de devis et notifie votre espace de travail. Le formulaire affiche une bannière de succès une fois terminé et une erreur inline en cas de problème. Tous les champs sont désactivés pendant l'envoi pour éviter les doubles soumissions.

Ce qui se passe lors de l'envoi :

1. Seuls les champs que le bloc rend effectivement sont envoyés. Le fait de masquer le champ nom ne casse donc pas le backend.
2. La plateforme crée une demande de devis sous l'entreprise liée au slug du site.
3. Vous recevez une notification dans votre espace de travail (même chemin que l'ancienne route `/portal/quote-request`).
4. La demande apparait dans **Devis > Demandes**.
5. Le visiteur voit un message de succes personnalisable.

Les soumissions du formulaire de contact sont limitees a 5 par minute par adresse IP.

## Inscription a la newsletter

Le bloc newsletter (`newsletter` type de section) capture les inscriptions par e-mail depuis votre site publie. Le backend utilise un flux de double opt-in : apres l'envoi, le visiteur recoit un e-mail de confirmation et doit cliquer sur le lien pour activer son abonnement. Les adresses supprimees et les abonnes deja actifs sont traites de la meme maniere que les nouvelles inscriptions du point de vue du formulaire (pas de fuite de donnees).

Ce qui se passe lors de l'envoi :

1. La plateforme enregistre l'abonnement avec `source: "site_form"`.
2. Si l'adresse n'est pas deja active et n'est pas supprimee, un e-mail de double opt-in est envoye.
3. Le visiteur voit une banniere de succes dans tous les cas, preservant ainsi la confidentialite du statut d'abonnement.
4. Une fois confirme, l'abonne apparait dans l'audience de la newsletter de cet espace de travail.

Les soumissions a la newsletter partagent la meme limite de taux que le formulaire de contact : 5 par minute par adresse IP.

## Gerer les demandes

Consultez [Devis -- Demandes de devis](/fr/features/quotes#quote-requests) pour les details sur la gestion des demandes entrantes.

## Voir aussi

- [Domaines, site web et boite de reception](/fr/features/domains-website-inbox): Configuration de domaine personnalise, verification, SSL et boite de reception e-mail.
- [Parametres de l'entreprise](/fr/settings/company): Ou se trouvent les details, l'image de marque et l'adresse de votre entreprise.
- [Devis](/fr/features/quotes): Gerer les demandes de devis qui arrivent via votre site web.