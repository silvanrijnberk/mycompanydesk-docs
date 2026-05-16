---
title: Constructeur de site
---

# Constructeur de site

Construisez votre site web professionnel avec un editeur par glisser-deposer. Creez plusieurs pages, composez-les avec des sections et des blocs, personnalisez les couleurs et les polices, puis publiez quand vous etes pret.

## Vue d'ensemble

Le constructeur de site remplace l'ancien profil d'entreprise a page unique. Vous obtenez un editeur de site complet avec :

- **Pages multiples**: Creez autant de pages que necessaire, chacune avec son propre chemin et ses propres sections.
- **Blocs de section**: Ajoutez des sections hero, texte, galerie, services, equipe, temoignages, formulaire de contact et HTML personnalise a chaque page.
- **Tokens de design**: Definissez les couleurs de marque, les polices, les espacements, les coins arrondis, le style de mouvement, le CSS personnalise et un favicon de site. Les modifications s'appliquent a l'ensemble du site.
- **Editeur de navigation**: Reorganisez les liens d'en-tete par glisser-deposer, avec des groupes deroulants et des liens externes.
- **Snapshots de publication**: Travaillez en brouillon, previsualisez vos modifications, puis publiez. Les modifications non publiees sont affichees dans la barre superieure.
- **Apercu responsive**: Basculez entre les vues desktop, tablette et mobile pendant l'edition.

Le constructeur de site se trouve sous **Entreprise > Votre site web** (`/website`).

## Onglets

Le constructeur de site dispose de cinq onglets :

- **Editeur**: Composez des pages en ajoutant et en organisant des sections. Cliquez sur une section pour modifier son contenu, sa mise en page, son style ou son animation. Faites glisser les sections pour les reordonner, les dupliquer ou les supprimer.
- **Pages**: Gelez vos pages : creez-en de nouvelles a partir de modeles, definissez les chemins et la visibilite, et voyez quelles pages sont en ligne, en brouillon ou planifiees. Cliquez sur une page pour l'ouvrir dans l'editeur. La page d'accueil verrouillee ne peut pas etre supprimee.
- **Style**: Personnalisez vos tokens de design a l'echelle du site : couleurs (marque, accent, papier, encre), polices (titres, corps, mono de la bibliotheque de polices), echelle (rayon, densite, largeur maximale, espacement des sections), mouvement, styles de boutons et CSS personnalise. Vous pouvez egalement ajouter des snippets d'en-tete pour l'analytique (Plausible, Umami, Matomo) ou les preconnexions de polices.
- **Domaine et SEO**: Configurez votre domaine personnalise et vos parametres SEO. Consultez [Domaines, site web et boite de reception](/fr/features/domains-website-inbox) pour la gestion complete des domaines.
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

- Cliquez sur **Ajouter une section** pour voir les types de blocs disponibles (hero, texte, galerie, services, equipe, temoignages, formulaire de contact, tarifs, produit, HTML personnalise, etc.).
- Selectionnez un type de bloc pour l'inserer sur la page.
- Cliquez sur une section pour ouvrir le panneau d'inspection, ou vous pouvez modifier son contenu, sa mise en page, son style et son animation.
- Faites glisser les sections vers le haut ou le bas pour les reordonner. Utilisez les actions dupliquer et supprimer sur chaque section.

Certaines sections ont des variantes systeme uniquement disponibles sur la page d'accueil verrouillee.

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

## Personnaliser le style de votre site

Dans l'onglet **Style**, vous controlez l'apparence de l'ensemble de votre site :

- **Couleurs**: Choisissez les couleurs de marque, d'accent, de papier, d'encre, de surface et attenuees. La palette est appliquee via des proprietes CSS personnalisees.
- **Typographie**: Choisissez les polices de titre, de corps et mono dans la bibliotheque integree (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Echelle**: Definissez le rayon des coins, la densite (compact, aere, genereux), la largeur maximale du contenu et l'espacement vertical des sections.
- **Mouvement**: Activez le mouvement reduit ou choisissez un style de mouvement (aucun, subtil, ludique).
- **Boutons**: Personnalisez le rayon, le remplissage et les effets de survol des boutons.
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

## Formulaire de demande de devis

Les visiteurs peuvent toujours soumettre des demandes de devis via la section formulaire de contact :

1. Ils remplissent leur nom, leur e-mail et leur message.
2. La demande est soumise.
3. Vous recevez une notification.
4. La demande apparait dans **Devis > Demandes**.

Les demandes de devis sont limitees a 1 par 15 minutes par adresse IP.

## Gerer les demandes

Consultez [Devis -- Demandes de devis](/fr/features/quotes#quote-requests) pour les details sur la gestion des demandes entrantes.

## Voir aussi

- [Domaines, site web et boite de reception](/fr/features/domains-website-inbox): Configuration de domaine personnalise, verification, SSL et boite de reception e-mail.
- [Parametres de l'entreprise](/fr/settings/company): Ou se trouvent les details, l'image de marque et l'adresse de votre entreprise.
- [Devis](/fr/features/quotes): Gerer les demandes de devis qui arrivent via votre site web.