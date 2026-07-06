---
title: Constructeur de site
---

# Constructeur de site

Construisez votre site web professionnel avec un éditeur visuel. Créez plusieurs pages, composez-les avec des sections et des blocs, mettez tout en forme avec des thèmes de design complets et publiez quand vous êtes prêt.

## Vue d'ensemble

Le constructeur de site se trouve sous l'élément **Website** au premier niveau de la navigation principale (`/website`). Chaque nouvel espace de travail démarre avec un site standard de 4 pages (Accueil, Diensten, Over ons, Contact), vous offrant une vraie base multi-pages dès le premier jour.

La zone Website comporte quatre écrans, affichés comme onglets en haut :

- **Editor** : Composez vos pages en ajoutant, organisant et stylant des sections, avec un aperçu en direct du vrai site.
- **Pagina's** (pages) : Gérez les pages, leurs chemins, leur visibilité, leur statut de publication et le SEO par page.
- **Stijl** (style) : Le design de tout le site : thèmes, couleurs, polices, boutons, barre de navigation, espacements et animations.
- **Koppelingen** (intégrations) : Connectez des fonctions du produit et des services tiers à votre site web.

La barre supérieure est toujours visible et affiche l'adresse publique de votre site, l'indicateur d'enregistrement, le nombre de modifications non publiées et le bouton Publier.

## L'éditeur

L'onglet **Editor** affiche trois panneaux : la liste des sections à gauche, l'aperçu en direct au milieu et l'inspecteur à droite. L'aperçu rend votre site réel, donc ce que vous voyez est ce que les visiteurs obtiennent.

- **Ajouter des sections** : Cliquez sur **Ajouter une section** pour ouvrir le sélecteur de blocs, organisé en groupes (Basis, Bedrijf, Werk, Conversie, Structuur). Cherchez par nom ou parcourez les groupes.
- **Cliquer pour modifier** : Cliquez sur n'importe quel bloc dans l'aperçu en direct pour le sélectionner et ouvrir ses réglages dans l'inspecteur. Sur mobile, toucher un bloc dans l'aperçu ouvre directement ses réglages.
- **Glisser pour réordonner** : Faites glisser les sections vers le haut ou le bas dans la liste des sections pour les réordonner. La navigation et le pied de page restent verrouillés à leur place. Des boutons fléchés existent comme alternative au clavier.
- **Annuler et rétablir** : Appuyez sur Cmd/Ctrl+Z pour annuler et Cmd/Ctrl+Shift+Z (ou Ctrl+Y) pour rétablir n'importe quelle modification, y compris la suppression d'une section. Supprimer une section affiche aussi une notification avec une action d'annulation immédiate. Les boutons de la barre d'outils indiquent ce que la prochaine annulation ou le prochain rétablissement fera.
- **Dupliquer et supprimer** : Chaque ligne de section a des actions de duplication et de suppression.
- **Aperçu responsive** : Basculez entre les vues ordinateur, tablette et mobile. L'aperçu ordinateur rend toujours à une vraie largeur d'écran et se met à l'échelle pour tenir, vous ne voyez donc jamais une mise en page écrasée.

## Aide à la rédaction par IA

Trois outils IA vous aident à rédiger votre site, tous dans l'éditeur.

### Réécrire un champ de texte

Les champs de texte de l'inspecteur affichent quatre petits boutons de ton dès qu'il y a assez de texte pour travailler :

- **Korter** (plus court) : Réduit le texte à environ la moitié de sa longueur en gardant le sens.
- **Kalmer** (plus calme) : Rend le texte plus chaleureux et rassurant.
- **Scherper** (plus percutant) : Resserre la formulation avec des verbes plus forts.
- **Vriendelijker** (plus amical) : Adoucit le ton pour le rendre plus accessible.

La réécriture reste dans la langue de l'original et n'invente jamais de nouvelles informations. Le résultat remplace le contenu de votre champ sur place ; vous pouvez cliquer sur un autre ton, annuler ou continuer à modifier.

### Remplir une section entière : Vul met AI

En haut de l'inspecteur de contenu, les sections avec de vrais champs de texte affichent un bouton **Vul met AI**. Un clic rédige tout le texte de cette section en une seule requête, à partir de votre profil d'entreprise. Le résultat est conservé avec des variantes alternatives : cliquer à nouveau fait défiler gratuitement différentes versions jusqu'à en trouver une qui vous plaît. Les sections que vous avez déjà remplies à la main sont respectées : l'outil écrit le texte, vous gardez la main.

### Régénérer le brouillon de votre site : Regenereer met AI

La barre supérieure comporte un bouton **Regenereer met AI** qui ouvre le panneau de brouillon IA pour n'importe quel espace de travail, pas seulement les nouveaux. Il lit vos données du registre du commerce (nom légal, secteur, ville) et propose un slogan, un texte de présentation et trois brouillons de services. Vous pouvez tout modifier sur place avant d'accepter, régénérer pour un nouveau jeu de propositions, ou fermer. Sur un espace de travail tout neuf, le même panneau apparaît automatiquement sous forme de bannière de démarrage rapide. Si l'IA n'est pas disponible, une solution de repli raisonnable basée sur votre secteur et le nom de votre entreprise est utilisée.

## Pages

L'onglet **Pagina's** liste toutes vos pages avec leur statut, leur chemin et des actions rapides.

### Créer des pages

1. Cliquez sur **Nouvelle page**.
2. Saisissez un titre et un chemin (par ex. `/about`).
3. Choisissez un modèle de page ou partez d'une page vierge.
4. La page s'ouvre dans l'éditeur, où vous pouvez ajouter des sections et la construire.

### Pages par défaut

Chaque nouvel espace de travail arrive avec quatre pages déjà créées :

| Page | Chemin | Description |
|---|---|---|
| Home | `/` | Votre page d'atterrissage principale. Ne peut pas être supprimée. |
| Diensten | `/diensten` | Montrez ce que vous proposez. Pré-remplie avec une section services. |
| Over ons | `/over-ons` | Dites aux visiteurs qui vous êtes. |
| Contact | `/contact` | Formulaire de contact et coordonnées. Lié depuis le pied de page. |

Ces pages sont automatiquement reliées à l'en-tête de navigation et au pied de page. Vous pouvez modifier ou supprimer n'importe laquelle, sauf la page d'accueil qui est toujours obligatoire.

### Statut des pages : Live, Concept ou Planifié

- **Live** : Incluse dans l'instantané de publication. Les visiteurs la voient après publication.
- **Concept** (brouillon) : Travail en cours. Invisible pour les visiteurs, même après publication du site.
- **Ingepland** (planifié) : Passe en ligne automatiquement à la date et l'heure que vous fixez.

La page d'accueil démarre en Live ; toute autre nouvelle page démarre en Concept pour que rien ne devienne public avant que vous soyez prêt. Des boutons de bascule rapide dans le tableau des pages font passer une page de Live à Concept instantanément, et le changement allume le bouton Publier. Un site dont la page d'accueil est en Concept n'affiche rien après publication ; remettez-la en Live et publiez pour restaurer le site.

### SEO par page

Chaque ligne de page se déplie vers un panneau **SEO & sociaal** où vous définissez le titre SEO, la méta-description et l'URL canonique de la page. Les réglages de domaine pour tout le site se trouvent sous **Paramètres > Domaines**.

## Blocs

Le sélecteur de blocs offre un large catalogue : hero, texte, image, galerie, liste, colonnes, spotlight, services, équipe, témoignages, logos, liens sociaux, emplacements, chronologie, portfolio, avant/après, étapes de processus, liste de blog, statistiques, citation, CTA, formulaire de contact, calendrier de rendez-vous, tarifs, produit, newsletter, FAQ, séparateurs et un sélecteur de langue. Il n'y a pas de bloc HTML libre ; le code personnalisé passe par le CSS de l'onglet Stijl et la liste blanche d'outils d'analytique.

Trois blocs orientés conversion sont des ajouts récents :

- **Lichtkrant** (bandeau défilant) : Une bande de messages courts qui défile en continu, par ex. "Gratis kennismakingsgesprek".
- **Aftelklok** (compte à rebours) : Un décompte en direct vers une échéance, avec un message une fois celle-ci passée.
- **Vergelijking** (comparaison) : Un tableau "nous contre les autres" qui compare les caractéristiques ligne par ligne.

Certains blocs, comme la navigation et le pied de page, sont des blocs système : ils sont toujours présents et ne peuvent pas être ajoutés ou supprimés manuellement.

### Recherche de photos libres

Les champs d'image incluent un bouton **Stockfoto** à côté des options de téléchargement et d'URL. Il ouvre un panneau de recherche intégré connecté à Unsplash, la bibliothèque gratuite de photos libres :

- Saisissez un terme de recherche (par ex. "hair salon", "coffee") et appuyez sur Entrée.
- Cliquez sur une photo dans la grille de résultats pour l'utiliser comme image de section.
- L'attribution est gérée automatiquement : les pages qui utilisent une photo libre affichent un crédit photographe dans le pied de page de votre site publié, vous restez donc toujours en règle.
- Si les photos libres ne sont pas disponibles sur votre espace de travail, le bouton reste masqué.

### Blocs sauvegardés

Sauvegardez n'importe quelle section comme bloc réutilisable et constituez une bibliothèque personnelle :

1. Cliquez sur l'icône de signet sur une ligne de section et donnez un nom au bloc.
2. Vos blocs sauvegardés apparaissent sous **Mijn blokken** en haut du sélecteur de blocs.
3. Cliquez sur un bloc sauvegardé pour en insérer une copie sur n'importe quelle page. Modifier la section insérée ne touche jamais le modèle sauvegardé, et inversement.
4. Retirez un bloc sauvegardé de la bibliothèque avec l'icône x sur sa carte ; les sections déjà insérées à partir de ce bloc ne sont pas affectées.

## Variantes de mise en page

La plupart des types de blocs offrent plusieurs variantes de mise en page. Choisissez-en une dans le menu déroulant **Stijl** du panneau de mise en page de l'inspecteur. La variante par défaut conserve l'apparence existante, les sections plus anciennes continuent donc de s'afficher comme avant.

### Variantes hero

| Variante | Effet |
|---|---|
| **Standaard (split rechts)** | Défaut. Image à droite, texte à gauche. |
| **Split: beeld links** | Miroir du défaut : image à gauche. |
| **Portret (ronde foto links)** | Photo portrait ronde à gauche. |
| **Portret (ronde foto rechts)** | Photo portrait ronde à droite. |
| **Gecentreerd** | Texte centré, image optionnelle en dessous. |
| **Banner met overlay** | Image de fond pleine largeur avec un dégradé en surimpression. |
| **Minimaal (alleen tekst)** | Texte seul dans une colonne étroite. Propre et discret. |

### Variantes services

| Variante | Effet |
|---|---|
| **Standaard (kaarten)** | Défaut. Grille de cartes avec icône, titre et description. |
| **Icoon-raster** | Mise en page plus dense, portée par les icônes. Idéale pour 4 éléments courts ou plus. |
| **Lijst** | Lignes verticales avec icônes, séparées par des traits fins. |
| **Accordeon** | Lignes cliquables ; la description s'ouvre au clic. |

### Variantes tarifs

| Variante | Effet |
|---|---|
| **Standaard (kaarten)** | Défaut. Cartes de forfaits côte à côte. |
| **Vergelijkingstabel** | Matrice de caractéristiques : forfaits en colonnes, caractéristiques en lignes avec des coches. |

### Variantes témoignages

| Variante | Effet |
|---|---|
| **Standaard (raster)** | Défaut. Cartes de citations en grille. |
| **Spotlight (één quote)** | Une grande citation unique en style magazine, les citations supplémentaires en pastilles dessous. |
| **Lopende band** | Une rangée de cartes de citations qui défile horizontalement. Le survol la met en pause. |

### Autres blocs avec variantes

Équipe (grille, cartes ou lignes de liste), FAQ (accordéon ou deux colonnes ouvertes), CTA (barre colorée, divisé ou minimal), processus (grille ou chronologie verticale), chronologie (ligne à gauche ou centrée alternée), statistiques (grille, cartes ou barre compacte), logos (bande ou grille bordée), emplacements (deux colonnes ou liste), newsletter (centrée ou carte encadrée) et spotlight (image à droite ou à gauche) ont chacun leur propre jeu de variantes dans le même menu déroulant.

## Style de section

Chaque section dispose d'un panneau de style dans l'inspecteur avec des looks en un clic et des réglages fins.

### Looks en un clic : Sfeer

Le sélecteur **Sfeer** applique en un clic une combinaison soignée d'arrière-plan, de forme et de cadrage, pour donner à une section une ambiance délibérée sans régler chaque bouton à la main. Les looks qui conviennent au type de bloc sélectionné apparaissent en premier comme recommandés. Les neuf looks sont : **Schoon** (calme et neutre), **Zacht** (bande teintée avec une forme subtile), **Warm** (teinté avec une forme d'accent douce), **Golfovergang** (transition en vague fluide vers la section suivante), **Botanisch** (bande teintée avec un motif de feuille), **Patroon** (bande claire avec un fin motif de points), **Statement** (bande sombre et dramatique), **Merk** (bande dans votre couleur de marque) et **Zwevend** (une carte arrondie qui flotte sur l'arrière-plan). Vos propres couleurs de fond, dégradés et images survivent au changement de look.

### Arrière-plans

- **Uni** : Blanc, papier, encre, marque ou n'importe quelle couleur personnalisée.
- **Verloop** (dégradé) : Choisissez deux couleurs et un angle pour un fond en dégradé.
- **Image de fond** : Téléchargez ou choisissez une image, définissez son point focal et ajoutez un voile en sombre, marque, clair ou une teinte personnalisée pour que le texte reste lisible.

### Formes, cartes et bords

- **Formes décoratives** : Peignez une forme douce dans la couleur d'accent derrière le contenu de la section. Choisissez parmi des formes organiques (Blob, Cirkels, Ring, Boog), des motifs (Stippen, Raster, Golven, Confetti) et des motifs botaniques (Blad, Bloem, Rank).
- **Carte flottante** : Faites flotter la section comme une carte arrondie et surélevée sur le fond de la page, au lieu d'une bande pleine largeur.
- **Ombres et bordures** : Quatre intensités d'ombre et des options de bordure (haut, bas, les deux ou tout autour).
- **Séparateur inférieur** : Une forme organique au bord inférieur de la section (Golf, Boog ou Schuin) qui se fond dans la section suivante au lieu d'une coupure horizontale nette. Les séparateurs sont décoratifs et invisibles pour les lecteurs d'écran.

### Mise en page par appareil

Le panneau de mise en page donne à chaque section des réglages mobiles séparés :

- **Padding mobile** : Remplacez le padding haut et bas pour les petits écrans, pour qu'une section spacieuse sur ordinateur n'écrase pas les visiteurs sur téléphone.
- **Masquer par appareil** : Masquez une section indépendamment sur mobile, tablette ou ordinateur. Construisez une bannière réservée au mobile ou une vitrine réservée à l'ordinateur sans dupliquer de pages.

## Animations de section

Chaque section dispose d'un panneau **Animation** dans l'inspecteur.

### Types d'animation

| Type | Effet |
|---|---|
| **Fade omhoog** | Apparaît en fondu en glissant vers le haut. |
| **Fade in** | Apparaît en fondu depuis la transparence. |
| **Schuif van rechts** | Apparaît en fondu en glissant depuis la droite. |
| **Inzoomen** | S'agrandit depuis un format légèrement plus petit. |
| **Uitvouwen (horizontaal)** | Se révèle depuis une ligne horizontale vers l'extérieur. |
| **Stagger** | Les éléments enfants apparaissent les uns après les autres. |
| **Cascade (hero)** | Une entrée en couches conçue pour les sections hero. |
| **Mask reveal** | Se révèle via un masque de découpage. |

### Réglages

- **Déclencheur** : Quand l'animation démarre : quand la section entre à l'écran (par défaut), immédiatement au chargement de la page, ou au survol.
- **Snelheid** (vitesse) : Durée de l'animation en millisecondes ; 600 ms par défaut.
- **Vertraging** (délai) : Temps d'attente avant le démarrage de l'animation.
- **Easing** : La courbe d'accélération : **Soepel**, **Vloeiend**, **Gelijkmatig** ou **Lineair**.
- **Stagger** : Activé, les enfants directs de la section s'animent en séquence, en plus de n'importe quel type d'animation.

Les visiteurs qui ont activé la réduction de mouvement au niveau du système d'exploitation voient chaque section immédiatement dans son état final ; aucune animation n'est jouée.

## Le style de votre site : l'onglet Stijl

L'écran **Stijl** contrôle l'apparence de tout votre site à travers neuf sous-onglets : **Kleuren**, **Merk**, **Typografie**, **Knoppen & vormen**, **Navbar**, **Ruimte & layout**, **Animaties**, **Blokken-bibliotheek** et **Eigen code**. Les modifications s'enregistrent automatiquement et s'appliquent à toutes les pages.

### Kleuren (couleurs)

- **Galerie de designs** : La section **Ontwerpen** présente 18 thèmes complets, chacun avec une carte d'aperçu visuelle : Editorial, Studio, Tech, Atelier, Bold, Calm, Mono, Vivid, Kust, Luxe, Bloei, Fris, Brut, Zacht, Magazine, Pop, Redactioneel et Warm vakwerk. Un clic applique les couleurs, polices et espacements du thème, tandis que vos textes, photos, logo et boutons restent intacts.
- **Enregistrer vos propres thèmes** : Sous **Mijn thema's**, enregistrez votre look actuel sous un nom et réappliquez-le plus tard en un clic. Les thèmes enregistrés reçoivent les mêmes cartes d'aperçu visuelles que la galerie intégrée.
- **Tokens de couleur** : Chaque couleur est un token (marque, accent, papier, encre, surface et plus) ; tout ce qui utilise un token sur le site change avec lui. Des palettes prédéfinies offrent des combinaisons de départ rapides.
- **Contrôle de lisibilité** : L'éditeur avertit quand une combinaison texte-fond a trop peu de contraste pour une lecture confortable, et confirme quand toutes les combinaisons passent. Il ne bloque jamais l'enregistrement ni la publication.
- **Mode sombre** : Choisissez **Uit** (pas de mode sombre), **Knop** (les visiteurs reçoivent un interrupteur soleil/lune et leur choix est mémorisé) ou **Volg systeem** (le site suit la préférence du système du visiteur). Quand le mode sombre est actif, une palette sombre associée apparaît ; les couleurs que vous laissez vides héritent d'une valeur par défaut raisonnable.

### Merk (marque)

Téléchargez votre logo pour fonds clairs, une variante optionnelle pour fonds sombres et un favicon (la petite icône dans l'onglet du navigateur ; carrée, de préférence un PNG 512x512). Sans favicon, le site se rabat sur votre logo, puis sur votre photo de profil d'entreprise.

### Typografie

Choisissez les polices de titres, de corps et mono dans la bibliothèque intégrée d'environ 18 polices réparties en catégories serif, sans-serif, script et mono, dont Inter, DM Sans, Fraunces, Playfair Display, Space Grotesk, Lora et des écritures manuscrites comme Caveat. Les polices se chargent vite et s'affichent à l'identique dans l'aperçu de l'éditeur et sur votre domaine en ligne.

### Knoppen & vormen (boutons et formes)

Définissez le rayon des coins et le langage de formes du site, et personnalisez le style de bouton par défaut, avec un échantillon en direct qui se met à jour pendant que vous changez les options.

### Navbar

- **Mise en page et arrière-plan** : Disposition standard, centrée ou divisée ; fond uni, flou translucide ou transparent ; fine ligne inférieure optionnelle ; collante au défilement (activée par défaut).
- **Boutons de navigation** : Ajoutez jusqu'à trois boutons à droite de la navigation, chacun avec son propre libellé, lien et style (**Effen** ou **Ghost**). Utilisez-en un comme CTA unique ou associez un bouton secondaire discret à un bouton principal plein.
- **Téléphone et barre d'appel** : Ajoutez un numéro de téléphone cliquable à côté des boutons, et activez la **barre d'appel mobile** pour épingler un bouton fixe "toucher pour appeler" en bas de l'écran sur téléphone.
- **Aankondigingsbalk** (barre d'annonce) : Une barre étroite au-dessus de la navigation sur chaque page, idéale pour une promotion ou une annonce. Définissez le texte, un lien optionnel, le style de couleur et si les visiteurs peuvent la fermer. Un mini-aperçu en direct montre le résultat.
- **Zwevende contactknop** (bouton de contact flottant) : Un bouton fixe en bas à droite de chaque page qui permet aux visiteurs de vous joindre en un geste via WhatsApp, téléphone ou e-mail. Renseignez au moins un canal.

### Ruimte & layout (espacements)

Définissez la densité globale, la largeur maximale des pages et le rythme de padding vertical entre les sections.

### Animaties

Choisissez un style de mouvement pour tout le site avec des cartes d'aperçu animées : **Geen** (statique), **Subtiel** (fondu doux vers le haut), **Zacht** (fondu seul), **Zijwaarts** (glissement latéral), **Onthullen** (révélation de gauche à droite) ou **Speels** (les éléments apparaissent un par un). Une case à cocher fait respecter au site la préférence de mouvement réduit des visiteurs (recommandé). Les animations par section dans l'éditeur s'ajoutent par-dessus.

### Blokken-bibliotheek

Une référence visuelle de chaque bloc utilisable dans l'éditeur, organisée par groupe, pour voir ce qui est disponible avant de construire.

### Eigen code (code personnalisé)

- **CSS personnalisé** : Écrivez votre propre CSS pour affiner ou remplacer n'importe quoi. Les imports et URL externes ne sont pas autorisés ; utilisez plutôt des médias téléchargés.
- **Snippets d'analytique** : Les scripts libres ne sont pas pris en charge ; activez à la place des snippets vérifiés pour Plausible, Umami ou Matomo, plus des préconnexions de polices.
- **Cookiemelding** (avis de cookies) : Affichez un avis refermable en bas du site avec votre propre texte et un lien vers votre politique de confidentialité. Recommandé dès que vous intégrez des vidéos, des cartes ou d'autres contenus externes.

## Navigation et pied de page

L'éditeur de navigation organise l'en-tête et le pied de page de votre site :

- Faites glisser les pages pour réordonner la navigation principale. La page d'accueil est toujours en premier et verrouillée.
- Créez des groupes déroulants pour imbriquer jusqu'à 8 éléments sous un libellé parent.
- Ajoutez des liens externes qui pointent hors de votre site.
- Basculez n'importe quel élément entre lien simple et style de bouton (Knop effen ou Knop ghost).
- **Colonnes de pied de page** : Construisez le pied de page en colonnes, chacune avec un titre et sa propre liste de liens, plus une ligne légale optionnelle en bas.
- Les réglages de style de la navbar (nom de marque, boutons de navigation, téléphone, barre d'appel, collante) sont aussi modifiables ici, juste au-dessus du menu.

Les modifications s'enregistrent automatiquement, peu après que vous avez cessé de taper.

## Publier

La barre supérieure indique le nombre de modifications non publiées. La publication prend un instantané des seules pages marquées Live ; les pages Concept restent invisibles.

1. Cliquez sur **Publier** dans la barre supérieure.
2. Si un bloc contient encore du texte d'exemple non modifié, une fenêtre de contrôle les liste, pour qu'aucun texte d'exemple ne parte en ligne par accident.
3. Votre site est publié sur votre URL publique.

Une action **Rétablir** annule les modifications non publiées et ramène le brouillon au dernier état publié, après confirmation. Les pages planifiées passent en ligne automatiquement à l'heure fixée.

## URL publique

Votre site web est servi à l'URL disponible la plus prioritaire :

1. Votre domaine personnalisé (par ex. `https://acme.nl`) lorsqu'il est vérifié et activé
2. Votre sous-domaine d'espace de travail (par ex. `https://acme.mycompanydesk.com`)
3. La route portail de secours (`/portal/{slug}`)

Un site web, une URL : dès qu'un domaine personnalisé est actif, le sous-domaine d'espace de travail s'efface automatiquement (et revient si vous retirez le domaine plus tard). Les domaines se gèrent sous **Paramètres > Domaines**. Consultez [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox) pour la configuration et la vérification.

## Formulaire de contact

Le bloc formulaire de contact traite les envois en direct. Vous choisissez les champs qu'il affiche : **Naam**, **E-mail**, **Telefoon**, **Bedrijf**, **Dienst** (un sélecteur de vos services) et **Bericht**. Seuls les champs que vous activez sont envoyés, masquer un champ ne casse donc jamais le formulaire.

Ce qui se passe à l'envoi :

1. La plateforme crée une demande de devis sous votre entreprise, avec le service sélectionné enregistré sur le prospect.
2. Vous recevez une notification dans votre espace de travail et la demande apparaît dans **Devis > Demandes**.
3. Le visiteur voit votre message de confirmation personnalisable, ou est redirigé vers une page de votre choix (par ex. `/bedankt`).

Options de remise supplémentaires par formulaire :

- **Destinataires e-mail supplémentaires** : Ajoutez des adresses qui reçoivent une copie de chaque envoi, une par ligne.
- **Webhook** : Envoyez chaque soumission en JSON vers une URL https de votre choix (par ex. Zapier ou Make).

Les envois du formulaire de contact sont limités à 5 par minute par adresse IP, et un widget de protection anti-bots apparaît avant l'envoi lorsqu'il est configuré sur votre espace de travail.

## Inscription à la newsletter

Le bloc newsletter capte les inscriptions par e-mail sur votre site publié avec un flux de double opt-in : après l'envoi, le visiteur reçoit un e-mail de confirmation et doit cliquer sur le lien pour activer l'abonnement. Le visiteur voit toujours une bannière de succès, le statut d'abonnement reste donc confidentiel. Une fois confirmé, l'abonné apparaît dans votre audience newsletter. Les envois de newsletter partagent la limite de fréquence et la protection anti-bots du formulaire de contact.

## Forfaits avec boutons d'achat

La section tarifs liste vos forfaits ou offres. Chaque forfait peut inclure un bouton d'achat en option :

- Marquez un forfait comme **achetable** et indiquez le montant en centimes (par ex. 4999 pour EUR 49,99).
- Un bouton **Acheter** remplace le lien CTA statique. Les visiteurs passent par le checkout MyCompanyDesk, qui redirige vers Mollie ou Stripe Connect pour le paiement.
- Le libellé du bouton est par défaut "Koop nu" et peut être personnalisé par forfait.
- Les forfaits sans bouton d'achat conservent le lien CTA classique.

Le bloc **Product** est une fiche d'achat autonome pour un seul article, quand un tableau tarifaire complet est superflu : un nom, une description, une image optionnelle, un prix, un bouton d'achat et une ligne de note optionnelle pour les informations de livraison. Consultez [Ventes](/fr/features/domains-website-inbox#ventes-depuis-votre-site-web) pour le suivi des paiements et des commandes.

## Gérer les demandes

Consultez [Devis : demandes de devis](/fr/features/quotes#demandes-de-devis) pour les détails sur la gestion des demandes entrantes.

## Condition d'abonnement

Le site web public est une fonction payante, visible tant que votre espace de travail est sur un plan Starter ou Pro. Lorsqu'un espace de travail retombe en Gratuit, le site reste en ligne pendant un délai de grâce de 7 jours, puis s'éteint.

- **Payant ou en essai** : Le site est toujours visible.
- **Retombé en Gratuit** : Le site reste visible pendant 7 jours après la fin de votre accès, puis renvoie une page 404.
- **État incertain** : Si le système ne peut pas déterminer quand votre accès payant a pris fin, le site reste en ligne plutôt que de risquer une coupure accidentelle.

Ce contrôle s'applique à tous les chemins publics de diffusion et est vérifié à chaque requête, il reste donc exact même si votre abonnement change.

## Voir aussi

- [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox) : Configuration de domaine personnalisé, vérification, SSL et boîte de réception e-mail.
- [Paramètres de l'entreprise](/fr/settings/company) : Où se trouvent les coordonnées, l'image de marque et l'adresse de votre entreprise.
- [Devis](/fr/features/quotes) : Gérer les demandes de devis qui arrivent via votre site web.
- [Abonnement et paiements](/fr/settings/billing) : Plans d'abonnement et accès aux fonctions.
