---
title: Constructeur de site
---

# Constructeur de site

Construisez votre site web professionnel avec un editeur par glisser-deposer. Creez plusieurs pages, composez-les avec des sections et des blocs, personnalisez les couleurs et les polices, puis publiez quand vous etes pret.

## Vue d'ensemble

Le constructeur de site remplace l'ancien profil d'entreprise a page unique. Chaque nouvel espace de travail commence avec un site standard de 4 pages (Accueil, Services, A propos, Contact), vous offrant une vraie fondation multi-pages des le premier jour. L'editeur vous donne :

- **Pages multiples**: Creez autant de pages que necessaire, chacune avec son propre chemin et ses propres sections. Les quatre pages par defaut sont pretes a etre modifiees, supprimees ou completees.
- **Selecteur de domaine**: Lorsque votre espace de travail possede plusieurs domaines personnalises (abonnement Pro), un menu deroulant dans la barre superieure vous permet de basculer entre l'edition du site principal et une variante par domaine. Chaque domaine dispose de ses propres pages, navigation, tokens de design et snapshot de publication.
- **Blocs de section**: Ajoutez des sections hero, texte, galerie, spotlight, services, equipe, temoignages, formulaire de contact et HTML personnalise a chaque page. Sauvegardez des sections comme blocs reutilisables pour constituer votre propre bibliotheque.
- **Tokens de design**: Definissez les couleurs de marque, les polices, les espacements, les coins arrondis, le style de mouvement, le CSS personnalise et un favicon de site. Les modifications s'appliquent a l'ensemble du site.
- **Editeur de navigation**: Reorganisez les liens d'en-tete par glisser-deposer, avec des groupes deroulants, des liens externes et le style de la barre de navigation en ligne (nom de marque, bouton CTA, telephone, barre d'appel, sticky).
- **Snapshots de publication**: Travaillez en brouillon, previsualisez vos modifications, puis publiez. Les modifications non publiees sont affichees dans la barre superieure.
- **Apercu responsive**: Basculez entre les vues desktop, tablette et mobile pendant l'edition.

Le constructeur de site se trouve sous **Entreprise > Votre site web** (`/website`).

## Démarrage rapide par IA

Quand vous ouvrez le constructeur de site pour la première fois sur un nouvel espace de travail, une bannière de démarrage rapide apparaît en haut. Elle lit les données de votre registre de commerce (nom légal, code NAF, ville) et génère un premier slogan, un texte de présentation et trois services. Vous pouvez tout modifier sur place avant d'appliquer, régénérer si la première suggestion ne convient pas, ou masquer la bannière. Pas de questions, pas de friction.

Ce que la bannière fait pour vous :

- **Générer** : Cliquez sur **Générer une suggestion** pour laisser l'IA lire vos données et proposer du contenu.
- **Modifier en ligne** : Ajustez le slogan, le texte de présentation et les noms et descriptions des services directement dans la bannière.
- **Appliquer** : Cliquez sur **Appliquer** pour écrire le contenu validé dans votre espace de travail. La description de votre entreprise, le slogan hero et les services sont mis à jour en une fois.
- **Régénérer** : Pas satisfait du résultat ? Cliquez sur **Régénérer** pour obtenir un nouveau jeu de suggestions.
- **Masquer** : La bannière mémorise votre choix localement. Elle reste cachée jusqu'à ce que vous réinitialisiez les données de votre espace.

La bannière utilise le modèle IA Gemini (variante lite) s'il est disponible dans votre espace. Si l'IA n'est pas configurée, la bannière fonctionne quand même avec une solution de repli basée sur votre code NAF et le nom de votre entreprise.

## Onglets

Le constructeur de site dispose de cinq onglets (six lorsque Style est deplie) :

- **Editeur**: Composez des pages en ajoutant et en organisant des sections. Cliquez sur une section pour modifier son contenu, sa mise en page, son style ou son animation. Faites glisser les sections pour les reordonner, les dupliquer ou les supprimer.
- **Pages**: Gelez vos pages : creez-en de nouvelles a partir de modeles, definissez les chemins et la visibilite, et voyez quelles pages sont en ligne, en brouillon ou planifiees. Cliquez sur une page pour l'ouvrir dans l'editeur. La page d'accueil verrouillee ne peut pas etre supprimee. Chaque page affiche un badge En ligne/Brouillon avec des boutons d'action rapide : cliquez sur l'icone globe pour mettre une page brouillon en ligne, ou sur l'icone masquer pour repasser une page en ligne en brouillon.
- **Style**: Personnalisez vos tokens de design a l'echelle du site. Choisissez un preset en un clic (Editorial) puis ajustez les couleurs (marque, accent, papier, encre), les polices (titres, corps, mono de la bibliotheque de polices), la barre de navigation (disposition, arriere-plan, style du CTA), l'echelle (rayon, densite, largeur maximale, espacement des sections), le mouvement, les styles de boutons et le CSS personnalise. Vous pouvez egalement ajouter des snippets d'en-tete pour l'analytique (Plausible, Umami, Matomo) ou les preconnexions de polices. Cliquez sur l'en-tete Style pour deplier ou replier l'onglet.
- **Domaine et SEO**: Configurez votre domaine personnalise et vos parametres SEO. Le contenu ici est lie au domaine selectionne dans le selecteur de domaine de la barre superieure. Lorsque le site principal (affiche sous le nom de votre espace de travail) est selectionne, aucun panneau specifique au domaine n'apparait. Consultez [Domaines, site web et boite de reception](/fr/features/domains-website-inbox) pour la gestion complete des domaines.
- **Integrations**: Connectez des services tiers a votre site web.

## Creer des pages

1. Allez dans l'onglet **Pages**.
2. Cliquez sur **Nouvelle page**.
3. Saisissez un titre et un chemin (par ex. `/a-propos`).
4. Choisissez un modele ou commencez avec une page vierge.
5. La page s'ouvre dans l'editeur, ou vous pouvez ajouter des sections et la construire.

### Pages par défaut

Chaque nouvel espace de travail recoit quatre pages deja crees :

| Page | Chemin | Description |
|---|---|---|
| Accueil | `/` | Votre page d'atterrissage principale. Ne peut pas etre supprimee. |
| Services | `/diensten` | Montrez ce que vous proposez. Pre-remplie avec une section services. |
| A propos | `/over-ons` | Dites aux visiteurs qui vous etes. |
| Contact | `/contact` | Formulaire de contact et details. Lie depuis le pied de page. |

Ces pages sont automatiquement connectees a l'en-tete de navigation et au pied de page. Vous pouvez modifier ou supprimer n'importe laquelle, sauf la page d'Accueil qui est toujours obligatoire. La navigation met a jour ses liens quand vous ajoutez ou supprimez des pages.

### Statut des pages : En ligne vs Brouillon

Les pages ont un statut qui determine si elles apparaissent sur votre site publie :

- **En ligne** : La page est incluse dans le snapshot de publication. Les visiteurs la voient sur votre site public apres publication.
- **Brouillon** : La page est en cours d'elaboration. Elle reste invisible pour les visiteurs, meme apres la publication du site.

La page d'accueil demarre par defaut en **En ligne**. Toute autre nouvelle page demarre en **Brouillon** pour ne pas apparaitre publiquement avant que vous soyez pret. Vous pouvez basculer chaque page entre En ligne et Brouillon avec les boutons d'action rapide dans le tableau Pages. Le changement de statut est enregistre immediatement et active le bouton Publier dans la barre superieure.

Un site dont la page d'accueil est en Brouillon n'affiche rien lors de la publication. Si vous avez passe la page d'accueil en Brouillon, remettez-la en En ligne et publiez pour restaurer le site.

## Construire des pages avec des sections

Dans l'onglet **Editeur** :

- Cliquez sur **Ajouter une section** pour voir les types de blocs disponibles (hero, texte, galerie, spotlight, services, equipe, temoignages, formulaire de contact, tarifs, produit, HTML personnalise, etc.).
- Selectionnez un type de bloc pour l'inserer sur la page.
- Cliquez sur une section pour ouvrir le panneau d'inspection, ou vous pouvez modifier son contenu, sa mise en page, son style et son animation.
- Faites glisser les sections vers le haut ou le bas pour les reordonner. Utilisez les actions dupliquer et supprimer sur chaque section.

Certaines sections ont des variantes systeme uniquement disponibles sur la page d'accueil verrouillee.

## Outils d'assistance IA

Deux outils bases sur l'IA vous aident a rediger et illustrer vos pages plus rapidement, directement dans l'inspecteur de l'editeur.

### Reecriture de texte

Chaque champ de texte et zone de texte dans l'inspecteur de section affiche quatre petits boutons de ton en dessous des que le champ contient suffisamment de texte (plus de quelques mots). Les boutons envoient votre texte actuel au serveur, qui utilise un modele Gemini leger pour le reecrire avec un ton specifique :

- **Plus court** : Reduit le texte a environ la moitie de sa longueur tout en conservant le sens.
- **Plus calme** : Rend le texte plus apaise et rassurant. Moins de discours commercial, plus de confiance.
- **Plus percutant** : Affute la formulation. Des verbes plus forts, aucune hesitation.
- **Plus chaleureux** : Adoucit le ton, plus chaleureux et accessible.

La reecriture reste toujours dans la meme langue que l'original (generalement le neerlandais). Le modele ne fait que reecrire, il n'invente pas de nouvelles informations. Le texte reecrit remplace directement le contenu de votre champ. Vous pouvez cliquer sur un autre bouton de ton, annuler ou modifier davantage.

Le champ de texte est limite a 2000 caracteres pour l'appel de reecriture, afin que le modele reste rapide et previsible. Si le service IA est temporairement indisponible, vous verrez un message d'erreur et votre texte original reste intact.

### Recherche de photos libres

Lorsque vous ouvrez le champ de telechargement d'image dans n'importe quel bloc de section (hero, spotlight, equipe, portfolio, logos, produit), vous voyez maintenant un bouton **Stockfoto** a cote des boutons de telechargement et de collage d'URL. Un clic ouvre un panneau de recherche integre connecte a Unsplash, la bibliotheque gratuite de photos libres.

- Saisissez un terme de recherche (par ex. "salon de coiffure", "cafe", "bois") et appuyez sur Entree.
- Les resultats apparaissent dans une grille. Cliquez sur une photo pour l'inserer comme image de votre section.
- La recherche passe par le serveur MyCompanyDesk, votre cle d'acces Unsplash n'atteint donc jamais le navigateur.
- L'attribution est suivie automatiquement conformement aux directives API d'Unsplash et affichee sur votre site publie. Lorsque votre site est en ligne, une mention "Photos: <photographe> · Unsplash" apparait dans le pied de page de chaque page contenant au moins une photo libre, vous assurant ainsi une conformite permanente.
- Si Unsplash n'est pas configure sur votre espace de travail, le bouton Stockfoto reste masque, vous ne voyez donc jamais une fonctionnalite defaillante.

## Blocs sauvegardes

Sauvegardez n'importe quelle section comme bloc reutilisable et constituez une bibliotheque personnelle de composants pre-stylises. Les blocs sauvegardes apparaissent en haut du panneau d'ajout de section, vous permettant d'inserer une mise en page sauvegardee sur n'importe quelle page sans la reconstruire.

### Sauvegarder une section comme bloc

1. Cliquez sur l'icone de signet dans une ligne de section de l'editeur.
2. Donnez un nom au bloc (le libelle ou le type de la section est pre-rempli comme suggestion).
3. Le bloc est sauvegarde dans votre bibliotheque personnelle pour cet espace de travail.

### Inserer un bloc sauvegarde

1. Cliquez sur **Ajouter une section** sur une page.
2. Vos blocs sauvegardes apparaissent sous **Mes blocs** en haut du panneau.
3. Cliquez sur un bloc sauvegarde pour l'inserer comme nouvelle section sur la page actuelle.

L'insertion d'un bloc sauvegarde copie son modele dans une nouvelle ligne de section. Modifier ou supprimer la section inseree n'affecte pas le bloc sauvegarde dans votre bibliotheque, et inversement.

### Gerer votre bibliotheque

- **Supprimez un bloc** de la bibliotheque en cliquant sur l'icone x a cote du bloc. Cela supprime uniquement le modele sauvegarde ; les sections deja inserees a partir de ce bloc restent intactes.
- L'en-tete **Mes blocs** est masque lorsque votre bibliotheque est vide, afin qu'un nouvel editeur ne voie pas de categorie vide.

### Variantes de mise en page

Les sections hero, services, tarifs et temoignages prennent en charge plusieurs variantes de mise en page. Choisissez-en une dans le menu deroulant **Style** de l'onglet Mise en page du panneau d'inspection pour changer l'apparence de la section. La variante par defaut conserve l'aspect familier, vos sections creees avant cette fonctionnalite restent donc inchangees.

#### Variantes hero

| Variante | Effet |
|---|---|
| **Standard (divise a droite)** | Defaut. Image a droite, texte a gauche. Se replie en texte centre quand il n'y a pas d'image. |
| **Divise a gauche** | Miroir du standard : image a gauche, texte a droite. Necessite une image. |
| **Centre** | Texte centre, image optionnelle en dessous dans un cadre large 16:9. |
| **Banniere** | Image en fond pleine largeur avec un degrade en surimpression. Texte blanc sur fond sombre, haute pour laisser respirer l'image. Necessite une image. |
| **Minimal** | Texte seul dans une colonne etroite. Pas d'image. Propre et discret, adapte aux pages de type documentation. |

#### Variantes services

| Variante | Effet |
|---|---|
| **Standard (cartes)** | Defaut. Grille de cartes en 2, 3 ou 4 colonnes. Icone, titre et description par element. |
| **Grille d'icones** | Mise en page plus dense, axee sur les icones avec des icones plus grands et moins d'habillage. Ideal pour 4 elements courts ou plus. |
| **Liste** | Lignes verticales avec une icone a gauche et le texte a droite, separees par des traits fins. Convient aux longues listes a parcourir. |
| **Accordeon** | Lignes cliquables empilees verticalement. Description masquee jusqu'a ce que la ligne soit ouverte. Utilise la meme animation de chevron que le bloc FAQ. |

#### Variantes tarifs

| Variante | Effet |
|---|---|
| **Standard (cartes)** | Defaut. Cartes de niveaux cote a cote avec nom, prix, liste de fonctionnalites et bouton d'achat ou CTA. |
| **Tableau comparatif** | Matrice de fonctionnalites. Les lignes sont toutes les fonctionnalites de tous les niveaux regroupees. Les colonnes sont les niveaux. Chaque cellule affiche une coche ou un tiret pour que les visiteurs puissent rapidement scanner les colonnes et comparer les forfaits. La colonne du niveau mis en avant reste teintee. |

#### Variantes temoignages

| Variante | Effet |
|---|---|
| **Standard (grille)** | Defaut. Cartes en grille de 2 a 3 colonnes. Chaque carte affiche la citation, le nom et le role optionnel. |
| **Spotlight (citation unique)** | Une grande citation unique en style magazine, centree avec typographie serif. Les temoignages supplementaires apparaissent comme de petits badges nominatifs sous la citation principale. |
| **Bandeau defilant** | Une rangee de cartes de citations defilant horizontalement. Le survol met la defilement en pause ; la preference de mouvement reduit du systeme l'arrete completement. La piste boucle de maniere transparente avec deux copies de l'ensemble. |

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

Les sections tarifs peuvent egalement s'afficher sous forme de matrice comparative. Passez la variante de mise en page sur **Tableau comparatif** dans le panneau d'inspection. La matrice presente chaque niveau comme une colonne et toutes les fonctionnalites de tous les niveaux comme des lignes, avec des coches la ou un niveau inclut la fonctionnalite. Vous voyez ainsi en un coup d'oeil comment les forfaits se comparent. Voir [Variantes de mise en page](#variantes-de-mise-en-page) pour toutes les options.

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

## Sepurateurs de section

Chaque bloc de section dispose d'un parametre **Separateur inferieur** dans le panneau de style de l'inspecteur. Il ajoute une forme SVG au bord inferieur de la section qui deborde dans la section suivante, creant une transition visuelle organique au lieu d'une coupure nette. Le separateur utilise la couleur de fond de la section actuelle, il fonctionne donc le mieux entre des sections adjacentes ayant des fonds unis differents.

### Types de separateurs

| Type | Effet |
|---|---|
| **Vague** | Une courbe en S lisse le long du bord inferieur. |
| **Courbe** | Un bol concave : la section suivante remonte au centre. |
| **Diagonale** | Une coupe diagonale montante de gauche a droite. |
| **Aucun** | Aucun separateur. Les sections se rejoignent sur un bord horizontal droit (par defaut). |

### Fonctionnement

- Le separateur SVG se trouve entierement sous la section, dans l'espace de la section suivante. Il ne chevauche pas le contenu de la section actuelle.
- La partie remplie du chemin dessine l'arriere-plan de la section actuelle vers le bas. La zone transparente sous la forme laisse la section suivante apparaitre.
- Le separateur reprend automatiquement la couleur de fond de la section, y compris les valeurs hexadecimales personnalisees et les tokens de variables CSS.
- Les separateurs sont decoratifs (`aria-hidden="true"`) et n'affectent pas la navigation au clavier ou par lecteur d'ecran.

## Personnaliser le style de votre site

Dans l'onglet **Style**, vous controlez l'apparence de l'ensemble de votre site :

- **Presets** : Des points de depart en un clic qui definissent les couleurs, les polices et les espacements d'un coup. Huit presets sont disponibles : **Editorial** (bleu marine et or, titres serif), **Studio** (creme chaud avec terre cuite), **Tech** (ardoise sobre avec bleu electrique), **Atelier** (blanc os avec vert profond), **Bold** (noir a fort contraste avec un accent vif), **Calm** (vert sauge et blanc doux), **Mono** (minimalisme architectural, sans couleur d'accent) et **Vivid** (cobalt et corail sur blanc froid). Appliquer un preset fusionne les tokens avec votre espace de travail, en preservant votre logo, votre CSS personnalise et vos snippets d'en-tete.
- **Couleurs**: Choisissez les couleurs de marque, d'accent, de papier, d'encre, de surface et attenuees. La palette est appliquee via des proprietes CSS personnalisees.
- **Mode sombre**: Definit le comportement du site en affichage sombre. Trois options : **Desactive** (pas de mode sombre, le site reste sur le theme clair), **Bouton** (les visiteurs voient un bouton soleil/lune dans la navigation et peuvent changer de theme, leur choix est enregistre localement), ou **Suivre le systeme** (le site suit automatiquement la preference du visiteur au niveau du systeme d'exploitation via un ecouteur media-query en direct). Lorsque le mode sombre est actif, une palette sombre apparait, vous permettant de definir une version nocturne de chaque couleur. Si vous laissez la palette sombre vide, le site applique une inversion par defaut qui preserve vos couleurs de marque et d'accent.
- **Typographie**: Choisissez les polices de titre, de corps et mono dans la bibliotheque integree (Geist, Inter, DM Sans, DM Serif Display, Fraunces, Instrument Serif, Geist Mono).
- **Echelle**: Definissez le rayon des coins, la densite (compact, aere, genereux), la largeur maximale du contenu et l'espacement vertical des sections.
- **Mouvement**: Activez le mouvement reduit ou choisissez un style de mouvement (Desactive, Fondu subtil, Glissement).
- **Boutons**: Personnalisez le rayon, le remplissage et les effets de survol des boutons.
- **Barre de navigation**: Definissez la disposition (standard, centree, divisee), le style d'arriere-plan (plein, flou translucide, transparent) et l'apparence du bouton CTA (plein, contour, texte seul). Les parametres de navigation s'appliquent a chaque page.
- **Telephone et barre d'appel**: Ajoutez un numero de telephone cliquable a votre barre de navigation. Le numero apparait a cote du bouton CTA sur ordinateur et dans le tiroir de navigation mobile. Activez l'option **Barre d'appel mobile** pour epingler un bouton fixe "Appuyez pour appeler" en bas de l'ecran sur les appareils mobiles, permettant a vos visiteurs de vous joindre en un geste, ou qu'ils se trouvent sur la page. Le libelle du telephone est par defaut "Appeler" si vous le laissez vide.
- **CSS personnalise**: Ecrivez votre propre CSS qui sera injecte dans le site. Utile pour les ajustements fins ou pour remplacer les valeurs par defaut.
- **Favicon**: Telechargez un favicon pour votre site. Il apparait dans les onglets du navigateur et les favoris. Si vous n'en definissez pas, le site utilise votre logo clair, puis votre photo de profil d'entreprise.
- **Snippets d'en-tete**: Ajoutez des scripts d'analytique (Plausible, Umami, Matomo) ou des preconnexions de polices via le selecteur de snippets.

Les modifications dans l'onglet Style sont enregistrees automatiquement et s'appliquent a toutes les pages.

## Publier

La barre superieure indique le nombre de modifications non publiees. Lors de la publication, seules les pages marquees En ligne sont incluses dans le snapshot. Les pages en Brouillon restent invisibles sur le site public, meme apres publication.

Lorsque vous etes pret :

1. Cliquez sur **Publier** dans la barre superieure.
2. Votre site est publie sur l'URL publique (votre domaine personnalise, le sous-domaine de l'espace de travail ou la route portail de secours).

Les modifications non publiees sont suivies par page et par token. Le bouton Publier est desactive lorsqu'il n'y a rien a publier. Basculer une page entre En ligne et Brouillon est un enregistrement immediat qui compte comme modification non publiee, le bouton Publier s'allume donc des que vous basculez.

## Navigation

L'editeur de navigation vous permet d'organiser les liens d'en-tete de votre site et de controler l'apparence de la barre de navigation sur l'ensemble de votre site :

- Faites glisser les pages pour reordonner la navigation.
- Creez des groupes deroulants pour imbriquer des pages sous un libelle parent.
- Ajoutez des liens externes qui pointent hors de votre site.
- Le logo dans l'en-tete est cliquable et renvoie toujours a la page d'accueil.
- La page d'accueil est toujours en premiere position et verrouillee.

Au-dessus du menu principal, un panneau **Navbar** vous donne un acces direct aux parametres de style de l'en-tete qui n'etaient auparavant disponibles que dans l'onglet Style. Vous pouvez definir :

- **Nom de marque** : Le texte affiche dans l'en-tete lorsqu'aucune image de logo n'est telechargee (laissez vide pour utiliser le logo de la section Branding).
- **Bouton CTA** : Le libelle et le lien de destination pour le bouton d'appel a l'action en haut a droite. Les deux champs doivent etre remplis pour que le bouton apparaisse.
- **Numero de telephone** : Un lien `tel:` cliquable qui apparait a cote du bouton CTA sur ordinateur et dans le tiroir de navigation mobile. Laissez vide pour masquer le bouton d'appel.
- **Libelle du telephone** : Le texte affiche a cote de l'icone de telephone sur mobile (par defaut << Appeler >> si laisse vide).
- **Barre d'appel mobile** : Lorsqu'elle est activee, un bouton d'appel fixe reste epingle en bas de l'ecran sur les appareils mobiles.
- **Navbar collante** : Lorsqu'elle est activee (activee par defaut), la barre de navigation reste visible lors du defilement.

Ces parametres s'appliquent a chaque page de votre site, comme dans l'onglet Style. Les modifications sont enregistrees automatiquement avec un court delai apres l'arret de la saisie. Pour la mise en page visuelle, le style d'arriere-plan et l'apparence du bouton, consultez l'[onglet Style](#styling-votre-site).

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

Les soumissions du formulaire de contact sont limitees a 5 par minute par adresse IP. Un widget Cloudflare Turnstile apparait egalement avant l'envoi lorsqu'il est configure sur votre espace de travail, bloquant les soumissions automatisees de bots sans ralentir les vrais visiteurs.

## Inscription a la newsletter

Le bloc newsletter (`newsletter` type de section) capture les inscriptions par e-mail depuis votre site publie. Le backend utilise un flux de double opt-in : apres l'envoi, le visiteur recoit un e-mail de confirmation et doit cliquer sur le lien pour activer son abonnement. Les adresses supprimees et les abonnes deja actifs sont traites de la meme maniere que les nouvelles inscriptions du point de vue du formulaire (pas de fuite de donnees).

Ce qui se passe lors de l'envoi :

1. La plateforme enregistre l'abonnement avec `source: "site_form"`.
2. Si l'adresse n'est pas deja active et n'est pas supprimee, un e-mail de double opt-in est envoye.
3. Le visiteur voit une banniere de succes dans tous les cas, preservant ainsi la confidentialite du statut d'abonnement.
4. Une fois confirme, l'abonne apparait dans l'audience de la newsletter de cet espace de travail.

Les soumissions a la newsletter partagent la meme limite de taux que le formulaire de contact : 5 par minute par adresse IP. La protection anti-bot Turnstile est egalement active sur les formulaires de newsletter lorsque configuree.

## Gerer les demandes

Consultez [Devis -- Demandes de devis](/fr/features/quotes#quote-requests) pour les details sur la gestion des demandes entrantes.

## Condition d'abonnement

Le site web public (page entreprise et constructeur de site) est une fonction payante. Le site est visible tant que votre espace de travail est sur un plan Starter ou Pro. Lorsqu'un espace de travail retombe en Gratuit, le site reste en ligne pendant un delai de grace de 7 jours, puis passe hors ligne.

- **Payant ou en essai**: Le site est toujours visible.
- **Retombe en Gratuit**: Le site reste visible pendant 7 jours apres la fin de votre acces payant (base sur la fin d'essai, la date de resiliation ou la fin de periode de paiement, selon la plus recente). Apres le delai de grace, le site renvoie une erreur 404.
- **Etat incertain**: Si le systeme ne peut pas determiner quand votre acces payant a pris fin, le site reste en ligne pour eviter une coupure accidentelle.

Ce controle s'applique a tous les chemins publics: la page entreprise, la route de detail des services et les pages du constructeur de site. La verification a lieu a chaque requete, avant toute couche de cache, afin de rester exacte meme si votre abonnement change en cours de cache.

Source: `apps/api/src/modules/billing/entitlement.service.js` — `PUBLIC_PAGE_GRACE_DAYS`, `computePublicPageGate`, `getPublicPageVisibility`.

## Voir aussi

- [Domaines, site web et boite de reception](/fr/features/domains-website-inbox): Configuration de domaine personnalise, verification, SSL et boite de reception e-mail.
- [Parametres de l'entreprise](/fr/settings/company): Ou se trouvent les details, l'image de marque et l'adresse de votre entreprise.
- [Devis](/fr/features/quotes): Gerer les demandes de devis qui arrivent via votre site web.
- [Facturation et abonnements](/fr/settings/billing): Plans d'abonnement et flags de fonctionnalites.