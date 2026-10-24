---
title: Constructeur de site
description: "Construisez un site web de plusieurs pages dans l'éditeur glisser-déposer : sections et blocs, vos couleurs et polices, publication quand vous voulez."
last_verified: 2026-10-24
---

# Constructeur de site

Construisez votre site web professionnel avec un éditeur par glisser-déposer. Créez plusieurs pages, composez-les avec des sections et des blocs, personnalisez les couleurs et les polices, puis publiez quand vous êtes prêt.

## Vue d'ensemble

Le constructeur de site remplace l'ancien profil d'entreprise à page unique. Chaque nouvel espace de travail commence avec un site standard (Accueil, Services, À propos et Contact, plus une politique de confidentialité et des conditions générales), vous offrant une vraie fondation multi-pages dès le premier jour. L'éditeur vous donne :

- **Pages multiples**: Créez autant de pages que nécessaire, chacune avec son propre chemin et ses propres sections. Les pages par défaut sont prêtes à être modifiées, supprimées ou complétées.
- **Blocs de section**: Ajoutez des blocs tels qu'un grand titre, du texte, une galerie, une photo avec texte, des services, l'équipe, des avis clients et un formulaire de contact. Sauvegardez des blocs comme blocs réutilisables pour constituer votre propre bibliothèque.
- **Tokens de design**: Définissez les couleurs de marque, les polices, les espacements, les coins arrondis, le style de mouvement, le CSS personnalisé et un favicon de site. Les modifications s'appliquent à l'ensemble du site.
- **Éditeur de navigation**: Réorganisez les liens d'en-tête par glisser-déposer, avec des groupes déroulants, des liens externes et le style de la barre de navigation en ligne (nom de marque, bouton CTA, téléphone, barre d'appel, sticky).
- **Snapshots de publication**: Travaillez en brouillon, prévisualisez vos modifications, puis publiez. Les modifications non publiées sont affichées dans la barre supérieure.
- **Aperçu responsive**: Basculez entre les vues desktop, tablette et mobile pendant l'édition. En vue desktop, vous pouvez aussi choisir une vraie largeur d'écran (1280, 1440 ou 1920 pixels), pour que les media queries du site réagissent réellement au lieu d'être simulées.
- **Panneaux redimensionnables**: Faites glisser le bord droit du rail de gauche et le bord gauche de l'inspecteur de droite pour élargir ou rétrécir chaque panneau. Un double-clic sur une poignée de redimensionnement rétablit la largeur par défaut. La largeur est mémorisée par appareil dans le localStorage.
- **Zoom et ajustement à la fenêtre**: Zoomez le canevas de 25 % à 200 %, ou cliquez sur la valeur du zoom pour choisir ajusté, 50 %, 100 % ou 200 %. La zone de travail défile quand le canevas agrandi la dépasse.
- **Raccourcis clavier**: Annuler et rétablir, sélectionner, déplacer, dupliquer ou supprimer un bloc, zoomer et dézoomer, ajuster à la fenêtre et fermer les panneaux. La vue d'ensemble de tous les raccourcis s'ouvre avec ⌘/ ou avec le bouton **Sneltoetsen** (raccourcis clavier) en bas du rail.

Vous trouvez votre site web dans la barre latérale sous **Communication › Site web** (`/website`). L'éditeur s'ouvre depuis celui-ci.

En ouvrant `/website`, vous arrivez sur l'onglet **Aperçu** : il montre votre site, l'état de publication et le bouton **Modifier le site**. Les autres onglets sont **Visiteurs**, **Résultats**, **Pages**, **Visibilité**, **Connexions** et **Domaine & e-mail**. L'éditeur proprement dit est à `/website/editor`, accessible volontairement via **Modifier le site** plutôt que de prendre tout l'écran dès l'arrivée. Sur téléphone, l'éditeur s'ouvre dans un mode de modification léger pour les textes, les photos, les avis et les coordonnées, sans glisser-déposer ni réglages de style.

## Assistant de configuration du site web

Avant même d'ouvrir l'éditeur, l'assistant de configuration du site web peut créer votre premier brouillon. L'inscription ne construit pas encore de site : la première fois que vous ouvrez **Site web**, l'assistant démarre tout seul. Si un compte plus ancien a déjà reçu un site qui n'est pas encore en ligne, vous voyez à la place **We hebben je website alvast gemaakt** (nous avons déjà créé votre site), avec le choix entre **Zet mijn site live** (mettre mon site en ligne) et **Eerst aanpassen** (d'abord le modifier). Vous pouvez toujours le relancer dans l'éditeur via **Hele site** (site entier) › **Merk** (marque) en cliquant sur **Reconfigurer** ; à la relance, il repart de ce qui est déjà vrai. Il parcourt ces étapes :

1. **Ce que vous faites** (pré-rempli à partir de vos données d'entreprise) - votre activité, vos services et votre ton. La même étape porte votre vrai nom d'entreprise (obligatoire, et enregistré aussitôt avec vos données d'entreprise), votre numéro de téléphone, votre numéro WhatsApp (oui, avec le même numéro que votre téléphone, ou un autre), votre Instagram (et au besoin Facebook ou LinkedIn), enregistré avec vos données d'entreprise et qui active les liens sociaux du pied de page dès qu'il est rempli, vos horaires d'ouverture (avec des raccourcis pour les jours ouvrés, le week-end ou chaque jour, et les heures réglables jour par jour), l'adresse que montre votre page de contact et l'adresse sur laquelle les clients peuvent vous écrire, demandée comme **Adresse e-mail pour les clients** avec une case à cocher qui décide si votre site l'affiche. Votre adresse de connexion y est déjà remplie, mais elle n'arrive sur votre site que si la case reste cochée ; la modifier met aussi à jour vos données d'entreprise (et vos factures).
2. **Ce que vous voulez** - si le site doit surtout attirer des clients, présenter votre travail, rassurer ou être mieux référencé.
3. **Clair ou sombre, et couleur** - l'assistant demande si votre site doit être clair ou sombre, puis propose des séries de couleurs aux teintes douces, un vrai bleu profond parmi les options sombres, ou votre propre couleur hexadécimale. L'aperçu du logo généré suit aussitôt votre choix, voilà pourquoi l'étape couleur précède l'étape logo.
4. **Logo** - conservez le logo généré par l'IA, téléchargez votre propre PNG/SVG, ou n'utilisez que le nom de votre entreprise comme logo texte.
5. **Vos propres photos** (optionnel) - ajoutez jusqu'à six photos de votre propre travail. La première se place en haut de votre page d'accueil, les suivantes sur la page à propos, et à partir de deux photos, le site en construit aussi une galerie photo. Sans photos à vous, le site reçoit des photos d'exemple que vous remplacerez plus tard.
6. **Adresse web** (uniquement si votre espace de travail n'a pas déjà de domaine actif ou de CNAME desservant le site). Ajoutez un domaine ou connectez-en un existant. Vous pouvez ignorer cette étape et ajouter une adresse plus tard ; un site déjà en ligne garde son adresse.

Vos réponses sont enregistrées comme brief du site. En terminant, l'IA rédige un nouveau texte pour l'ensemble de votre brouillon à partir du brief et de vos données d'espace, applique votre logo et votre couleur de marque, et laisse tout en brouillon. Rien n'est publié automatiquement. Vous vérifiez le résultat dans l'éditeur et publiez quand vous êtes satisfait. Sur la carte finale, vous ajustez le titre sous lequel votre site apparaît dans Google avant de terminer. La construction prend environ une demi-minute ; laissez l'écran ouvert, il indique aussi l'étape en cours.

Les services de la première question acceptent chacun un prix facultatif, avec le choix entre **TVA comprise** et **hors TVA**, et sous le champ vous voyez exactement ce que verront les visiteurs. Par défaut, le site affiche ce que le client paie, donc un montant saisi hors TVA est converti au taux de TVA de ce service ; un réglage commun à tout l'espace de travail, posé sur les blocs qui montrent des prix dans le constructeur de site, décrit sous [Grille tarifaire avec boutons d'achat](#grille-tarifaire-avec-boutons-d-achat), peut faire basculer tout le site sur les prix hors TVA. Si votre espace ne facture pas de TVA (exonéré ou KOR), le champ s'appelle simplement Prix et l'aide précise que les prix sont hors TVA ; saisissez tous les prix hors TVA et ils apparaissent ainsi sur le site. Chaque prix peut aussi porter une unité (par heure, par personne) et la rangée montre aussitôt la ligne que verront les visiteurs. Activez **à partir de** pour un prix de départ, ou laissez le champ vide : votre site affichera « Sur demande ». Un prix déjà fixé dans votre offre est repris automatiquement, et chaque service porte aussi une case indiquant si les clients peuvent le réserver en ligne.

Si la question sur les réservations est réglée sur **Les clients choisissent eux-mêmes une heure**, la liste de services demande aussi combien de temps dure chaque rendez-vous. Chaque service part avec une durée suggérée en minutes, d'après le nom du service et ce que vous avez décrit de votre activité dans l'assistant : une coupe simple obtient une suggestion plus courte que la coloration, et un salon de toilettage en obtient une plus longue. Chaque suggestion reste modifiable, et une durée déjà fixée dans votre offre est reprise automatiquement. Une durée est un nombre entier de minutes entre 5 et 480. Sans durée, un service ne peut pas être réservé en ligne : si vous videz le champ, le service reste sur votre site, mais le bloc de rendez-vous ne le propose plus comme heure à choisir. La question sur les réservations connaît désormais cinq réponses : les clients choisissent eux-mêmes une heure, ils envoient une demande que vous confirmez, ils s'inscrivent à une séance fixe (un atelier, un cours ou une randonnée accompagnée), ils vous demandent un devis (ils décrivent leur chantier, des photos peuvent suivre, et la demande arrive dans votre boîte de réception), ou il n'y a pas de réservation en ligne. Une inscription est préparée avec votre première date, l'inscription se ferme deux heures avant le début, et les clients paient sur place ; sans date, vous planifiez les séances plus tard dans l'agenda, sous **Séances de groupe**. Si votre site possède déjà un bloc rendez-vous, l'assistant démarre sur le mode de ce bloc et reprend votre choix lorsque vous terminez.

Vous pouvez aussi vous arrêter en cours de route : cliquez sur **Terminer plus tard** ou rechargez la page, et vos réponses vous attendent au retour. L'assistant conserve ce que vous avez modifié sur cet appareil pendant environ une semaine, et ne restaure une réponse que si la valeur sous-jacente n'a pas changé ; si vos données d'entreprise ou vos services ont changé entre-temps, depuis les paramètres ou depuis un autre appareil, la valeur actuelle l'emporte.

Le même assistant peut aussi réécrire un site existant entièrement. En le relançant depuis **Merk**, il demande d'abord une confirmation, car terminer remplace le texte que vous avez vous-même modifié. Le site reste brouillon jusqu'à ce que vous publiiez vous-même.

## Disposition de l'éditeur

En haut de l'éditeur se trouve une rangée d'onglets : d'abord **Hele site** (site entier), puis chaque page de votre site. Faites glisser un onglet de page pour changer l'ordre (la page d'accueil reste toujours en premier), ou cliquez sur **+** (**Pagina toevoegen**, ajouter une page) pour une nouvelle page. L'onglet choisi détermine ce que propose le rail de gauche :

- **Une page** : **Blokken** (les blocs de cette page, pour les ajouter, les déplacer, les dupliquer ou les supprimer), **Stijl** (ce que cette page seule peut avoir de différent, comme l'arrière-plan et la largeur) et **Instellingen** (titre, adresse web, visibilité dans le menu et apparence de la page dans Google). Cliquez sur un bloc pour le modifier dans l'inspecteur à droite : contenu, mise en page, style et animation.
- **Hele site** : **Ontwerp** (design, la galerie des packs), **Kleuren** (couleurs), **Merk** (marque), **Letters** (polices), **Knoppen** (boutons), **Menubalk** (barre de menu), **Ruimte** (espacement), **Animatie** (animation), **Elementen** (éléments), **Navigatie** (navigation), **Footer** (pied de page), **Versies** (publications précédentes et versions enregistrées, avec un retour en arrière possible) et, en bas, à part, **Eigen CSS** (CSS personnalisé).

La liste de toutes vos pages, avec leur statut, leur description Google et leurs chiffres de visites, se trouve hors de l'éditeur, dans l'onglet **Pages** de Site web. Le domaine, la visibilité dans Google et les intégrations tierces se gèrent aussi là, dans les onglets **Domaine & e-mail**, **Visibilité** et **Connexions**, pas dans l'éditeur.

### Galerie des packs

La galerie des packs (`/website/pakketten`, et dans l'éditeur **Hele site** › **Ontwerp**) est le moyen le plus rapide de partir d'un site complet et prêt-stylé. Elle liste chaque pack de site approuvé : un modèle fini, avec des couleurs et un duo de polices adaptés à un métier précis.

Comment ça marche :

1. Dans l'éditeur, ouvrez **Hele site** › **Ontwerp**, ou rendez-vous sur `/website/pakketten`.
2. Parcourez les cartes. Chaque carte montre un aperçu du pack, avec son nom, le métier, le nombre de pages et une courte description.
3. Cliquez sur **Bekijk voorbeeld** (voir l'aperçu) pour découvrir le pack : sur `/website/pakketten` dans un nouvel onglet, dans l'éditeur en pleine grandeur à côté de votre propre site.
4. Choisissez comment utiliser le pack :
   - **Reprendre le style** : uniquement les couleurs, les polices et le style de boutons du pack. Vos pages, vos blocs et vos textes restent exactement comme ils sont.
   - **Utiliser ce modèle** : votre site brouillon actuel (pages, blocs et style) est remplacé par le pack. MyCompanyDesk crée ensuite des photos et des textes pour votre entreprise ; les chiffres d'exemple, les avis et les projets du modèle restent vides jusqu'à ce que vous les remplissiez. Votre brouillon précédent est conservé comme point de restauration, vous pouvez donc toujours revenir en arrière.
5. Dans les deux cas, une confirmation demande d'abord votre accord, et seul votre **brouillon** est modifié. Rien n'est publié automatiquement.
6. Vous vérifiez le résultat dans l'éditeur, modifiez les textes et les images, et publiez vous-même.

Dans l'éditeur, après l'application, vous revenez à **Blokken** (blocs) pour continuer directement à modifier. Avec **Terug naar alle ontwerpen** (retour à tous les designs), vous revenez de l'aperçu à la galerie.

Recherchez grâce au champ de recherche (**Zoek een ontwerp**, chercher un design) ou filtrez par style. Le nombre de designs à côté se met à jour au fur et à mesure du filtrage.

### Contrôles sur le canevas

Vous pouvez aussi manipuler les blocs directement sur le canevas. Survolez un bloc avec la souris pour voir son nom et une petite barre d'outils. Utilisez les flèches pour déplacer le bloc vers le haut ou vers le bas, le bouton plus (**Blok hier invoegen**, insérer un bloc ici) pour glisser un bloc entre deux, et les actions **Dupliceren** (dupliquer), **Kopieer naar pagina…** (copier vers une page), **Vergrendelen** (verrouiller) et **Verwijderen** (supprimer). Un bloc verrouillé ne peut qu'être déverrouillé. La navigation et le pied de page affichent leur nom au survol, mais vous les modifiez via **Hele site** › **Navigatie** et **Footer**.

Cliquez sur un bloc pour le garder sélectionné ; le contour reste alors visible même quand vous éloignez la souris. Le canevas et la liste **Blokken** lisent le même ordre, donc une modification d'un côté se voit aussitôt de l'autre. Dans la liste **Blokken**, vous pouvez aussi masquer un bloc sans le supprimer.

Vous saisissez aussi le texte directement sur le canevas : cliquez sur le texte, tapez la modification et cliquez ailleurs pour enregistrer. Le champ de l'inspecteur suit immédiatement.

Les titres que l'assistant, une réécriture ou un nouveau bloc écrivent pour vous sortent en forme de phrase : ainsi, un titre se lit comme une phrase. Les noms comme votre entreprise ou une marque gardent leurs propres majuscules.

### Adresse, carte, zone d'activité et stationnement sur la page de contact

La page de contact montre où vous travaillez et comment y arriver. Le bloc **Locaties** sert de retour à votre adresse d'entreprise quand vous n'avez pas d'emplacements à vous, et un bloc de contact laisse tomber une adresse qu'un bloc Locaties montre déjà sur la même page. Une page de contact neuve ne démarre plus avec un bloc Locaties vide. Une carte (**Kaart tonen**) sort de votre adresse quand vous en voulez une, **Werkgebied** est l'un des préréglages de **Blok toevoegen** (ajouter un bloc) pour montrer où vous rejoignez vos clients, et la section d'accès s'appelle **Bereikbaarheid en parkeren** (accès et stationnement).

### Une adresse distincte pour votre site

Pour une entreprise à domicile, le site n'a pas à montrer cette adresse du domicile. Dans **Paramètres › Données de l'entreprise**, vous saisissez une **adresse distincte pour votre site** : le pied de page, le bloc contact, les données d'adresse pour les moteurs de recherche et les pages légales affichent alors cette adresse. Vos factures gardent l'adresse enregistrée. L'assistant du site, à l'étape maison, nomme l'adresse qui s'afficherait sinon en bas de page. Laissez le champ vide et le site montre l'adresse enregistrée, comme avant.

### La forme d'adresse sur votre site (Aanspreekvorm)

Votre site s'adresse à ses visiteurs dans la forme que vous choisissez : **Tutoiement (je)** (personnel : « Ik help je graag. ») ou **Vouvoiement (u)** (polie : « Ik help u graag. », les exemples néerlandais des textes fixes). Le choix figure à la première étape de l'assistant de site et sur la carte **Vouvoiement ou tutoiement sur votre site** sous **Paramètres** › **Données de l'entreprise** ; les deux écrivent le même réglage. Les textes fixes du site, comme les boutons, les lignes de formulaires et les remerciements, suivent le choix aussitôt. Ce que vous ou le rédacteur avez déjà écrit garde sa propre voix ; le bouton de cette carte, **Passer tous les textes en informel (je)** ou **Passer tous les textes en formel (u)**, convertit en un seul passage tout ce qui se trouve sur le site, votre texte saisi compris, en changeant seulement la forme d'adresse, jamais le contenu. Le résultat annonce combien de textes ont été ajustés et lesquels sont restés en place (c'est dans l'éditeur que vous les passez en revue), et une publication les met en ligne. Les sections ajoutées plus tard reprennent la forme d'adresse que le site porte déjà, et les pages légales, la politique de confidentialité et les conditions, paraissent aussi dans la forme choisie. Pour une entreprise à une seule personne, les textes fixes parlent à la première personne (je) au lieu de nous ; l'assistant demande votre prénom pour cette voix, et ne vous présente jamais sous le nom de votre entreprise.

## Créer des pages

1. Dans l'éditeur, cliquez sur **+** (**Pagina toevoegen**) derrière les onglets de page, ou sur **Nouvelle page** dans l'onglet **Pages** de Site web.
2. Donnez un nom à la page et choisissez un **Soort pagina** (type de page).
3. La page s'ouvre dans l'éditeur, où vous pouvez ajouter des blocs et la construire. Vous modifiez l'adresse web dans **Instellingen** (réglages) de la page. Une page créée ici rejoint automatiquement votre menu ; la page 404 et les articles de blog non. Si l'ajout échoue, l'éditeur vous en informe, et vous activez la page vous-même dans l'éditeur de menu.

### Pages par défaut

Chaque nouvel espace de travail reçoit ces pages déjà créées :

| Page | Chemin | Description |
|---|---|---|
| Accueil | `/` | Votre page d'atterrissage principale. Ne peut pas être supprimée. |
| Services | `/diensten` | Montrez ce que vous proposez. Préremplie avec une section services. |
| À propos | `/over-ons` | Dites aux visiteurs qui vous êtes. |
| Contact | `/contact` | Formulaire de contact et détails. Lié depuis le pied de page. |
| Politique de confidentialité | `/privacy` | Voir Pages légales ci-dessous. |
| Conditions générales | `/algemene-voorwaarden` | Voir Pages légales ci-dessous. |

Ces pages sont automatiquement connectées à l'en-tête de navigation et au pied de page. Vous pouvez modifier ou supprimer n'importe laquelle, sauf la page d'Accueil qui est toujours obligatoire. La navigation met à jour ses liens quand vous ajoutez ou supprimez des pages.

### Statut des pages : En ligne vs Brouillon

Les pages ont un statut qui détermine si elles apparaissent sur votre site publié :

- **En ligne** : La page est incluse dans le snapshot de publication. Les visiteurs la voient sur votre site public après publication.
- **Brouillon** : La page est en cours d'élaboration. Elle reste invisible pour les visiteurs, même après la publication du site.

Une nouvelle page démarre en **En ligne**, pour qu'elle parte à votre prochaine publication et qu'un lien de menu ne pointe jamais vers une page manquante. Un nouvel article de blog démarre en **Brouillon**. La page d'accueil est toujours en ligne. Vous basculez une page entre En ligne et Brouillon avec l'interrupteur **Concept** / **Live** (Brouillon / En ligne) de cette page dans **Pagina's beheren** (gérer les pages). Le changement de statut est enregistré immédiatement et active le bouton Publier dans la barre supérieure, de sorte que la prochaine publication le prenne en compte.

Un site dont la page d'accueil est en Brouillon n'affiche rien lors de la publication. Si vous avez passé la page d'accueil en Brouillon, remettez-la en En ligne et publiez pour restaurer le site.

## Construire des pages avec des sections

Ouvrez une page dans l'éditeur. Dans la liste **Blokken** (blocs) :

- Cliquez sur **Blok toevoegen** (ajouter un bloc) pour voir les types de blocs disponibles (grand titre, texte, galerie, photo avec texte, services, équipe, avis clients, formulaire de contact, tarifs, produit, labels et certifications, réservation en ligne, et plus encore).
- Sélectionnez un type de bloc pour l'insérer sur la page.
- Cliquez sur une section pour ouvrir le panneau d'inspection, où vous pouvez modifier son contenu, sa mise en page, son style et son animation.
- Faites glisser les sections vers le haut ou le bas pour les réordonner. Utilisez les actions dupliquer et supprimer sur chaque section.

Certaines sections ont des variantes système uniquement disponibles sur la page d'accueil verrouillée.

## Outils d'assistance IA

Deux outils basés sur l'IA vous aident à rédiger et illustrer vos pages plus rapidement, directement dans l'inspecteur de l'éditeur.

### Réécriture de texte

Chaque champ de texte et zone de texte dans l'inspecteur de section affiche quatre petits boutons de ton en dessous dès que le champ contient suffisamment de texte (plus de quelques mots). Les boutons envoient votre texte actuel au serveur, qui utilise un modèle Gemini léger pour le réécrire avec un ton spécifique :

- **Korter** (plus court) : Réduit le texte à environ la moitié de sa longueur tout en conservant le sens.
- **Kalmer** (plus calme) : Rend le texte plus apaisé et rassurant. Moins de discours commercial, plus de confiance.
- **Scherper** (plus percutant) : Affûte la formulation. Des verbes plus forts, aucune hésitation.
- **Vriendelijker** (plus chaleureux) : Adoucit le ton, plus chaleureux et accessible.

La réécriture reste toujours dans la même langue que l'original (généralement le néerlandais). Le modèle ne fait que réécrire, il n'invente pas de nouvelles informations. Le texte réécrit remplace directement le contenu de votre champ. Vous pouvez cliquer sur un autre bouton de ton, annuler ou modifier davantage.

Le champ de texte est limité à 2000 caractères pour l'appel de réécriture, afin que le modèle reste rapide et prévisible. Si le service IA est temporairement indisponible, vous verrez un message d'erreur et votre texte original reste intact.

### Recherche de photos libres

Lorsque vous ouvrez le champ de téléchargement d'image dans n'importe quel bloc de section (hero, spotlight, équipe, portfolio, logos, produit), vous voyez maintenant un bouton **Stockfoto** à côté des boutons de téléchargement et de collage d'URL. Un clic ouvre un panneau de recherche intégré connecté à Unsplash, la bibliothèque gratuite de photos libres.

- Saisissez un terme de recherche (par ex. "salon de coiffure", "café", "bois") et appuyez sur Entrée.
- Les résultats apparaissent dans une grille. Cliquez sur une photo pour l'insérer comme image de votre section.
- La recherche passe par le serveur MyCompanyDesk, votre clé d'accès Unsplash n'atteint donc jamais le navigateur.
- L'attribution est suivie automatiquement conformément aux directives API d'Unsplash et affichée sur votre site publié. La mention "Photos : `photographe` · Unsplash" dans le pied de page ne nomme que les photographes des photos libres que le visiteur voit vraiment sur le site publié : une carte de service qui a repris votre propre photo depuis l'offre ne compte plus, une même personne n'y figure qu'une fois, et les photos remplacées sortent de la ligne.

Le texte alternatif suit vos propres photos : il sort du nom de fichier de l'image lors d'un envoi (noms de lieux entiers, 200 caractères au plus) et reste remplaçable ensuite, sur un envoi comme sur une photo libre déjà en place.
- Si Unsplash n'est pas configuré sur votre espace de travail, le bouton Stockfoto reste masqué, vous ne voyez donc jamais une fonctionnalité défaillante.

## Blocs sauvegardés

Sauvegardez n'importe quelle section comme bloc réutilisable et constituez une bibliothèque personnelle de composants préstylisés. Les blocs sauvegardés apparaissent en haut du panneau d'ajout de section, vous permettant d'insérer une mise en page sauvegardée sur n'importe quelle page sans la reconstruire.

### Sauvegarder une section comme bloc

1. Dans la liste **Blokken**, ouvrez le menu **Meer acties** (plus d'actions) d'un bloc et choisissez **Bewaar als blok** (enregistrer comme bloc).
2. Donnez un nom au bloc (le libellé du bloc est pré-rempli comme suggestion).
3. Le bloc est sauvegardé dans votre bibliothèque personnelle pour cet espace de travail.

### Insérer un bloc sauvegardé

1. Cliquez sur **Blok toevoegen** sur une page.
2. Vos blocs sauvegardés apparaissent sous **Mijn blokken** (mes blocs) en haut du panneau.
3. Cliquez sur un bloc sauvegardé pour l'insérer comme nouvelle section sur la page actuelle.

L'insertion d'un bloc sauvegardé copie son modèle dans une nouvelle ligne de section. Modifier ou supprimer la section insérée n'affecte pas le bloc sauvegardé dans votre bibliothèque, et inversement.

### Gérer votre bibliothèque

- **Supprimez un bloc** de la bibliothèque en cliquant sur l'icône x à côté du bloc. Cela supprime uniquement le modèle sauvegardé ; les sections déjà insérées à partir de ce bloc restent intactes.
- L'en-tête **Mijn blokken** est masqué lorsque votre bibliothèque est vide, afin qu'un nouvel éditeur ne voie pas de catégorie vide.

### Variantes de mise en page

De nombreux blocs prennent en charge plusieurs variantes de mise en page, dont le grand titre, les services, les tarifs, les avis clients, l'équipe, la FAQ, les chiffres et l'appel à l'action avec bouton. Choisissez-en une dans le menu déroulant **Style** de l'onglet Mise en page du panneau d'inspection pour changer l'apparence de la section. La variante par défaut conserve l'aspect familier, vos sections créées avant cette fonctionnalité restent donc inchangées.

#### Variantes du grand titre

| Variante | Effet |
|---|---|
| **Standaard (foto rechts)** (standard, photo à droite) | Par défaut. Photo à droite, texte à gauche. Se replie sur du texte centré quand il n'y a pas de photo. |
| **Foto links** (photo à gauche) | Miroir du standard : photo à gauche, texte à droite. |
| **Portret (ronde foto links)** / **Portret (ronde foto rechts)** (portrait, photo ronde à gauche ou à droite) | Une photo de portrait ronde à côté du texte. |
| **Gecentreerd** (centré) | Texte centré, photo facultative en dessous. |
| **Foto als achtergrond** (photo en arrière-plan) | Photo pleine largeur en arrière-plan, avec du texte clair par-dessus. |
| **Minimaal (alleen tekst)** (minimal, texte seul) | Texte seul dans une colonne étroite. Pas de photo. |
| **Redactioneel**, **Affiche**, **Omkaderd**, **Groot cijfer** (éditorial, affiche, encadré, grand chiffre) | Variantes typographiques sans photo : un grand titre avec une colonne de métadonnées, une déclaration entre deux filets, un cadre d'imprimerie ou un grand chiffre en contour. |

#### Variantes services

| Variante | Effet |
|---|---|
| **Standard (cartes)** | Défaut. Grille de cartes en 2, 3 ou 4 colonnes. Icône, titre et description par élément. |
| **Grille d'icônes** | Mise en page plus dense, axée sur les icônes avec des icônes plus grands et moins d'habillage. Idéal pour 4 éléments courts ou plus. |
| **Liste** | Lignes verticales avec une icône à gauche et le texte à droite, séparées par des traits fins. Convient aux longues listes à parcourir. |
| **Accordéon** | Lignes cliquables empilées verticalement. Description masquée jusqu'à ce que la ligne soit ouverte. Utilise la même animation de chevron que le bloc FAQ. |

#### Variantes tarifs

| Variante | Effet |
|---|---|
| **Standard (cartes)** | Défaut. Cartes de niveaux côte à côte avec nom, prix, liste de fonctionnalités et bouton d'achat ou CTA. |
| **Tableau comparatif** | Matrice de fonctionnalités. Les lignes sont toutes les fonctionnalités de tous les niveaux regroupées. Les colonnes sont les niveaux. Chaque cellule affiche une coche ou un tiret pour que les visiteurs puissent rapidement scanner les colonnes et comparer les forfaits. La colonne du niveau mis en avant reste teintée. |

#### Variantes témoignages

| Variante | Effet |
|---|---|
| **Standard (grille)** | Défaut. Cartes en grille de 2 à 3 colonnes. Chaque carte affiche la citation, le nom et le rôle optionnel. |
| **Spotlight (één quote)** (citation unique) | Une grande citation unique en style magazine, centrée avec typographie serif. Les témoignages supplémentaires apparaissent comme de petits badges nominatifs sous la citation principale. |
| **Bandeau défilant** | Une rangée de cartes de citations défilant horizontalement. Le survol met la défilement en pause ; la préférence de mouvement réduit du système l'arrête complètement. La piste boucle de manière transparente avec deux copies de l'ensemble. |

### Photo avec texte

Le bloc **Foto met tekst** (photo avec texte) est une rangée alternée d'image et de texte. Chaque rangée affiche une image d'un côté et du texte de l'autre : un eyebrow, un titre, un sous-titre, des puces avec coches et un lien call-to-action optionnel. Vous choisissez de quel côté l'image apparaît dans le panneau de mise en page.

Quelques points à savoir :

- **Côté de l'image** : La variante de mise en page est par défaut image-à-droite. Passez à image-à-gauche dans le panneau de mise en page pour inverser la rangée.
- **Éléments optionnels** : L'eyebrow, le sous-titre, les puces, le CTA et l'image sont tous optionnels. Un spotlight avec seulement un titre et une image s'affiche tout aussi proprement.
- **Empilement** : Ajoutez plusieurs sections spotlight les unes en dessous des autres pour construire une liste classique de fonctionnalités les unes sous les autres.
- **Image fixe** : Activez **Foto blijft staan als je scrolt** (la photo reste en place pendant le défilement) dans l'inspecteur pour maintenir l'image en place pendant que le texte à côté défile. Uniquement sur desktop, et seulement quand il y a assez de texte à côté de l'image. Sur mobile, l'image s'empile normalement.

### Grille tarifaire avec boutons d'achat

La section tarifs affiche vos forfaits ou abonnements. Chaque niveau peut optionnellement avoir un bouton d'achat :

- Activez **Met koopknop** (avec bouton d'achat) sur un tarif et renseignez **Prijs bij afrekenen (incl. btw)** (prix au paiement, TVA comprise), le montant que l'acheteur paie réellement (par exemple 750,00). Gardez le texte du prix sur la carte identique.
- Un bouton **Acheter** remplace le lien CTA statique. Les visiteurs qui cliquent passent par le checkout MyCompanyDesk et sont redirigés vers Mollie ou Stripe Connect pour le paiement.
- Le libellé du bouton est par défaut "Acheter", personnalisable par tarif dans le champ **Koop-knop tekst** (texte du bouton d'achat).
- Les niveaux sans bouton d'achat conservent le comportement de lien CTA existant.

Les sections tarifs peuvent également s'afficher sous forme de matrice comparative. Passez la variante de mise en page sur **Tableau comparatif** dans le panneau d'inspection. La matrice présente chaque niveau comme une colonne et toutes les fonctionnalités de tous les niveaux comme des lignes, avec des coches là où un niveau inclut la fonctionnalité. Vous voyez ainsi en un coup d'œil comment les forfaits se comparent. Voir [Variantes de mise en page](#variantes-de-mise-en-page) pour toutes les options.

Les blocs qui montrent des prix du catalogue, services, produits, abonnements ou grilles tarifaires, portent **Prijzen op je website: inclusief / exclusief btw** dans le panneau d'inspection, enregistré pour tout l'espace de travail. Sur le réglage par défaut, TVA comprise, votre site montre ce que le client paie, et un prix structuré porte sa propre petite étiquette (TVA comprise, ou exonéré quand votre espace ne facture pas de TVA), pour que le montant ne se lise jamais deux fois. Le réglage hors TVA imprime le montant saisi sans TVA avec l'étiquette **excl. btw** : sur les cartes de services, dans le bloc tarifaire, dans la liste de services du bloc de rendez-vous et sur les séances de groupe. Gratuit, Sur demande et votre propre texte de site restent comme ils sont, et ce qu'un visiteur paie au règlement, par acompte, bouton d'achat ou paiement en ligne, reste TVA comprise. L'enregistrement reconstruit le site publié.

### Bloc produit

Une fiche d'achat autonome pour un seul article, quand un tableau tarifaire complet est superflu :

- Un nom de produit, une description, une image optionnelle, un prix et un bouton d'achat.
- Même plomberie de checkout que les boutons d'achat des tarifs, votre visiteur paie via Mollie ou Stripe Connect.
- Une ligne de note optionnelle sous le bouton pour les informations de livraison, les mentions légales ou les remarques.

Consultez [Ventes](/fr/features/domains-website-inbox#ventes) pour le suivi des paiements et des commandes.

### Bloc de labels et certifications

Le bloc **Keurmerken** affiche les certificats et labels de votre entreprise (STEK, VCA, CE et autres), exactement comme vous les saisissez sous **Paramètres › Données de l'entreprise**. Vous gérez cette liste à un seul endroit : le bloc est lié aux données, le panneau d'inspection n'a pas d'éditeur d'éléments, seulement la présentation.

- **Titre** : « Certificeringen en keurmerken » par défaut. Saisissez votre propre titre, ou laissez le champ vide pour un bloc sans titre.
- **Style** : tuiles blanches (par défaut) ou épuré. **Taille** : petite, moyenne ou grande.
- Un label sans image est très bien : un label qui n'est qu'un nom apparaît comme ce nom sur le site et dans la version textuelle de vos e-mails. L'image reste facultative ; quand vous en placez une, elle passe par le rognage et les conversions habituels.
- Au maximum six labels ; l'ordre, le nom et le lien se règlent sous **Paramètres › Données de l'entreprise**. Quand vous ajoutez votre premier label, MyCompanyDesk place automatiquement un bloc de labels sur votre page d'accueil, comme brouillon : avant un appel à l'action final si c'est le dernier bloc, sinon en bas avant le pied de page. Il n'est pas publié tout de suite ; la publication reste entre vos mains. Si votre site comporte déjà une section de labels, aucune seconde n'est ajoutée.
- Si la liste est vide, ou si **Afficher sur votre site web** est désactivé sous **Paramètres › Données de l'entreprise**, le bloc se cache sur le site publié. L'éditeur l'indique aussi lorsque les labels sont désactivés pour le site web.
- Quand vous supprimez un label, le fichier est conservé et les e-mails déjà envoyés continuent d'afficher le logo ; le bloc ne se masque que lorsque la liste est complètement vide.

### Services et produits issus d'Aanbod

Les blocs qui montrent des services, des produits ou des abonnements tirent leurs éléments de votre offre Aanbod. Une description que vous saisissez pour un service est un texte unique : le bloc services de votre page d'accueil et la page Services le partagent, donc une correction arrive partout à la fois. Une reconstruction ne met jamais en ligne le brouillon d'une carte de service : tant que vous ne publiez pas, les cartes gardent le texte qu'elles avaient.

Le prix suit le mode de prix défini dans Aanbod : un montant fixe, « à partir de » un montant, ou « Sur demande » lorsqu'aucun prix n'est défini. Un prix de zéro est un vrai prix : un article volontairement gratuit affiche « Gratuit » sur le site, la liste des prix, la liste Aanbod et le bloc de réservation, au lieu de paraître sans prix ; seuls les articles sans prix du tout affichent « Sur demande ».

## Animations de section

Chaque bloc dispose d'un onglet **Animatie** (animation) dans l'inspecteur. Il vous permet d'ajouter du mouvement qui se déclenche lorsque le bloc entre dans la vue, au chargement de la page, ou quand la souris passe dessus.

### Style d'animation

Choisissez dans **Animatie-stijl** (style d'animation) comment le bloc apparaît :

| Style | Effet |
|---|---|
| **Geen** (aucune) | Pas d'animation, le bloc est là tout de suite. |
| **Zacht omhoog** (par défaut) | Le bloc apparaît en glissant légèrement vers le haut. |
| **Zacht in beeld** | Le bloc apparaît depuis la transparence. |
| **Schuif van rechts** | Le bloc apparaît en glissant depuis le côté. |
| **Inzoomen** | Le bloc grandit légèrement jusqu'à sa propre taille. |
| **Uitvouwen (horizontaal)** | Le bloc se déplie en largeur. |
| **Na elkaar** | Les éléments du bloc apparaissent l'un après l'autre, au lieu que le bloc lui-même bouge. |
| **Trap (paginakop)** | Les éléments de l'en-tête de page apparaissent en escalier. |
| **Onthullen** | Le bloc est dévoilé à travers un masque. |
| **Woord voor woord (titel in de paginakop)** | Uniquement pour le grand titre. Les mots du titre apparaissent chacun à leur rythme ; les autres blocs apparaissent normalement. |

### Quand démarrer

- **Bij in beeld komen** (à l'entrée dans la vue, par défaut) : L'animation se joue quand le bloc entre dans la vue en défilant. Une fois animé, le bloc reste visible.
- **Direct bij laden** (dès le chargement) : L'animation démarre dès que la page est chargée.
- **Bij aanwijzen** (au survol) : L'animation démarre quand la souris arrive sur le bloc et revient quand elle part.

### Réglages

- **Snelheid** (vitesse) : Durée de l'animation, de 200 à 1600 millisecondes. 600 ms par défaut.
- **Vertraging** (délai) : Temps d'attente avant le démarrage de l'animation, de 0 à 1200 millisecondes. 0 ms par défaut.
- **Soort beweging** (type de mouvement) : La courbe d'accélération. Choix entre **Soepel** (souple, par défaut), **Vloeiend** (fluide), **Gelijkmatig** (régulier) et **Lineair** (linéaire).
- **Onderdelen na elkaar** (éléments l'un après l'autre) : Uniquement pour les blocs à plusieurs éléments. Les éléments du bloc apparaissent l'un après l'autre au lieu de tous ensemble.

Pour choisir comment les blocs apparaissent sur l'ensemble du site, rendez-vous dans **Hele site** › **Animatie** : **Geen**, **Subtiel**, **Zacht**, **Zijwaarts**, **Onthullen** ou **Speels** (aucune, subtile, douce, latérale, dévoiler, ludique).

### Réduction de mouvement

Les visiteurs ayant `prefers-reduced-motion: reduce` activé au niveau du système d'exploitation voient chaque section directement dans sa position finale. Aucune animation n'est jouée. Au niveau de l'espace de travail, les tokens de mouvement peuvent également désactiver les animations par site. Lorsque la réduction de mouvement est active, la section ne reçoit jamais la classe de départ masquée, de sorte que le HTML rendu côté serveur soit accessible avant même l'exécution de JavaScript.

## Séparateurs de section {#sepurateurs-de-section}

Chaque bloc de section dispose d'un paramètre **Séparateur inférieur** dans le panneau de style de l'inspecteur. Il ajoute une forme SVG au bord inférieur de la section qui déborde dans la section suivante, créant une transition visuelle organique au lieu d'une coupure nette. Le séparateur utilise la couleur de fond de la section actuelle, il fonctionne donc le mieux entre des sections adjacentes ayant des fonds unis différents.

### Types de séparateurs

| Type | Effet |
|---|---|
| **Vague** | Une courbe en S lisse le long du bord inférieur. |
| **Courbe** | Un bol concave : la section suivante remonte au centre. |
| **Diagonale** | Une coupe diagonale montante de gauche à droite. |
| **Aucun** | Aucun séparateur. Les sections se rejoignent sur un bord horizontal droit (par défaut). |

### Fonctionnement

- Le séparateur SVG se trouve entièrement sous la section, dans l'espace de la section suivante. Il ne chevauche pas le contenu de la section actuelle.
- La partie remplie du chemin dessine l'arrière-plan de la section actuelle vers le bas. La zone transparente sous la forme laisse la section suivante apparaître.
- Le séparateur reprend automatiquement la couleur de fond de la section, y compris les valeurs hexadécimales personnalisées et les tokens de variables CSS.
- Les séparateurs sont décoratifs (`aria-hidden="true"`) et n'affectent pas la navigation au clavier ou par lecteur d'écran.

## Personnaliser le style de votre site

Sous **Hele site** (site entier) dans l'éditeur, vous contrôlez l'apparence de l'ensemble de votre site. Chaque volet a son propre bouton dans le rail :

- **Kleuren** (couleurs) : En haut, vous choisissez la taille du texte pour vos visiteurs (**Normale**, **Grande** ou **Très grande**). Dessous figurent les **Kleurthema's** (thèmes de couleurs) : des palettes toutes prêtes (entre autres Editorial, Studio, Tech, Atelier, Bold, Calm, Mono et Vivid) que vous appliquez en un clic. Vos polices, styles de blocs, textes, photos, logo et boutons restent alors en place ; choisissez **Ook letters en vormen overnemen** (reprendre aussi les polices et les formes) si vous voulez aussi celles du thème. Vous réglez ensuite six couleurs une à une sous des noms simples : **Hoofdkleur** (couleur principale), **Tweede kleur** (deuxième couleur), **Pagina-achtergrond** (arrière-plan de la page), **Blokken en kaarten** (blocs et cartes), **Tekst** (texte) et **Kleine tekst** (texte secondaire). Un contrôle de lisibilité avertit quand une combinaison manque de contraste.
- **Donkere kleuren** (couleurs sombres, en bas de Kleuren) : Quatre options : **Uit** (désactivé : le site reste clair), **Altijd donker** (toujours sombre : tout votre site est sombre, pour chaque visiteur), **Knop in menubalk** (bouton dans la barre de menu : les visiteurs voient un bouton soleil/lune dans la barre de menu et peuvent basculer) et **Volgt het toestel** (suit l'appareil : le site suit le réglage de l'appareil du visiteur). Quand une version sombre est activée, vous choisissez un jeu sombre prêt à l'emploi ou réglez vous-même les couleurs sombres ; une case vide reprend la couleur du mode clair, et une couleur principale ou secondaire qui disparaîtrait sur la page sombre (noir, bleu marine) reçoit automatiquement une version nocturne plus claire. En haut de Kleuren figure aussi **Liever een donkere site?** (plutôt un site sombre ?), avec **Bekijk donkere ontwerpen** (voir les designs sombres : saute aux designs sombres de la galerie) et **Maak mijn site donker** (rendre mon site sombre). Si vous choisissez un pack de site alors que votre site est sur Altijd donker, le site demande d'abord confirmation, car le pack désactive Altijd donker pour que le résultat ressemble à son aperçu.
- **Merk** (marque) : Votre logo pour un arrière-plan clair et (facultativement) sombre, votre favicon et le bouton **Reconfigurer** pour l'assistant. Si vous ne définissez pas de favicon, le site utilise votre logo clair, puis la photo de profil de votre entreprise.
- **Letters** (polices) : Choisissez les polices de titre et de texte dans la bibliothèque intégrée (entre autres Inter, Geist, DM Sans, Fraunces, Lora, Space Grotesk et DM Serif Display), ou une combinaison de polices toute prête. Toutes les polices sont servies par MyCompanyDesk lui-même, et non par Google Fonts ou un autre CDN externe. Les mêmes fichiers de police sont utilisés dans l'éditeur et sur votre site publié, pour que le texte soit identique partout et que l'adresse IP des visiteurs n'aille pas à un tiers.
- **Knoppen** (boutons) : Le rayon des coins, le style de bouton par défaut, le style des puces, le style des titres (taille, majuscules, espacement des lettres et épaisseur des titres), le dégradé de couleur sur les boutons, et le style des cartes. Le style des cartes détermine l'apparence des cartes de services, d'avis et de tarifs : **Vlak (geen rand)** (plat, sans bordure), **Met rand** (avec bordure, par défaut), **Met schaduw** (avec ombre), **Zwevend (sterke schaduw)** (flottant, ombre forte), **Brut (harde rand, blokschaduw)** (bordure dure, ombre en bloc), **Lijn (alleen contour)** (contour seul) ou **Glas (mooist op een foto)** (verre, plus beau sur une photo). Le verre se révèle surtout sur une photo, un dégradé ou une bande décorative ; sur un fond uni, il se replie sur une carte légèrement teintée.
- **Menubalk** (barre de menu) : La disposition, la forme et l'arrière-plan de la barre de menu, le style de bouton qu'elle contient, la taille du logo, les liens du menu et leur effet, et si la barre de menu disparaît quand on défile vers le bas. Vous y trouvez aussi le contenu de la barre de menu (logo ou nom de marque, le bouton en haut à droite, numéro de téléphone et numéro WhatsApp) ; voir [Navigation](#navigation).
- **Ruimte** (espacement) : La densité (**Compact**, **Ruim**, **Royaal**), la largeur maximale des pages, l'espace au-dessus et en dessous des blocs, l'alternance de couleurs entre les blocs, la texture d'arrière-plan et le rendu des couleurs de vos photos.
- **Animatie** (animation) : La façon dont les blocs apparaissent sur tout le site quand les visiteurs défilent (**Geen**, **Subtiel**, **Zacht**, **Zijwaarts**, **Onthullen** ou **Speels**), et **Minder beweging voor wie dat instelt** (moins de mouvement pour ceux qui le demandent) pour les visiteurs qui demandent moins d'animations dans leur système.
- **Elementen** (éléments) : Des éléments qui apparaissent sur chaque page : la **Leesbalk** (barre de lecture : une fine barre de progression en haut ou en bas pendant que les visiteurs défilent), une **Aankondigingsbalk** (barre d'annonce), le **Zwevende contactknop** (bouton de contact flottant : WhatsApp, téléphone ou e-mail) et une **Cookiemelding** (avis de cookies).
- **Eigen CSS** (CSS personnalisé) : Écrivez votre propre CSS, qui sera injecté dans le site. Utile pour les ajustements fins ou pour remplacer les valeurs par défaut. Ce bouton se trouve en bas du rail, à part du reste, parce qu'une erreur dedans touche tout le site. Vous y trouvez aussi les **Analytics-snippets** (Plausible Analytics et une préconnexion pour les polices) ; d'autres services de mesure comme Umami, Matomo ou Google Analytics se connectent dans l'onglet **Connexions** de Site web.

### Import de logo

Si vous avez déjà un logo sur votre site web, vous pouvez l'importer directement dans MyCompanyDesk. Sous **Hele site** › **Merk** se trouve **Heb je al een website? Haal je logo daarvandaan** (vous avez déjà un site ? Récupérez-y votre logo) : saisissez l'URL de la page qui contient votre logo. MyCompanyDesk récupère la page, extrait le meilleur logo disponible et crée une version claire et une version sombre pour votre site. Après l'import, vous pouvez toujours remplacer chaque version séparément.

Les modifications sous **Hele site** sont enregistrées automatiquement et s'appliquent à toutes les pages.

## Publier

La barre supérieure affiche un point tant que des modifications non publiées attendent. Lors de la publication, seules les pages marquées En ligne sont incluses dans le snapshot. Les pages en Brouillon restent invisibles sur le site public, même après publication.

Tant que vous n'avez pas publié, votre URL publique envoie une balise robots `noindex`. Ainsi, le sous-domaine de l'espace de travail reste hors des moteurs de recherche pendant que vous construisez votre site ; le sous-domaine lui-même n'entre en vue qu'à votre première publication.

Lorsque vous êtes prêt :

1. Cliquez sur **Publier** dans la barre supérieure.
2. Votre site est publié sur l'URL publique (votre domaine personnalisé, votre adresse sur `mycompanydesk.site` ou l'adresse de secours dans l'app).

Les modifications non publiées sont suivies par page et par token. Le bouton Publier est désactivé lorsqu'il n'y a rien à publier. Basculer une page entre En ligne et Brouillon est un enregistrement immédiat qui compte comme modification non publiée, le bouton Publier s'allume donc dès que vous basculez.

Quel que soit le point de départ, la vue d'ensemble, la barre d'outils de l'éditeur ou l'écran de première installation, le même avertissement de publication apparaît dès que quelque chose reste à signaler, et il liste chaque point avec sa propre action :

- **Textes de départ** encore intacts sur vos pages.
- **Blocs FAQ** portant des questions sans réponse, avec un lien qui ouvre ce bloc pour les écrire.
- **Cartes de tarifs sans prix.** Un bloc Tarieven partirait en ligne avec des cartes sans montant, donc l'avertissement les nomme et renvoie au bloc pour renseigner les prix.
- **Champs manquants sur vos pages légales**, avec un lien qui complète les informations de l'entreprise. Sans numéro KVK encore, vous pouvez publier quand même : cette ligne est omise des pages, et vous l'ajoutez plus tard au même endroit. Dans la fenêtre elle-même figure une ligne d'information sur le numéro KVK, pour que la raison de ce numéro sur vos pages légales soit nommée là où vous publiez.
- **Un bloc contact où personne ne peut vous joindre** (ni téléphone ni e-mail dessus).
- **Votre adresse e-mail de connexion.** Le site garde l'adresse avec laquelle vous vous connectez hors de vos pages tant que vous n'avez pas dit qu'elle peut être affichée. L'avertissement propose de montrer cette adresse sur votre site, ou un lien pour définir une autre adresse e-mail publique ; la laisser cachée est permis. Un « pas d'e-mail sur mon site » délibéré compte comme une information, pas comme un avertissement, et ne retient jamais la publication. Là où l'adresse cachée aurait figuré, votre numéro de téléphone et le reste de la phrase restent en place : la tournure autour de l'adresse retirée est rangée au lieu d'être imprimée.

À titre d'information : si l'assistant a laissé des photos d'exemple (photos libres) que vous n'avez pas encore remplacées, la boîte de dialogue porte une ligne pointant la première d'entre elles, avec un bouton qui ouvre ce bloc pour y placer une photo à vous. Cette ligne n'ouvre jamais l'avertissement elle-même ; elle figure aussi à côté du bouton Publier et dans la vue d'ensemble.

Quand tout ce qui reste est informatif, la boîte de dialogue passe à un état neutre « Prêt à publier » qui ne demande plus que la confirmation.

La toute première publication se termine par **Ton site est en ligne** : **Voir ton site** et **Partager ton lien**, avec un bouton de copie pour l'adresse que vous communiquerez aux clients.

Un double-clic rapide ne peut pas publier par accident : le bouton de confirmation de l'avertissement de publication ignore les clics pendant un court instant après son ouverture, et un second clic juste après le premier ne peut ni déclencher une publication en double ni contourner l'avertissement.

## Navigation

L'éditeur de navigation (**Hele site** › **Navigatie**) vous permet d'organiser les éléments de menu de votre site :

- Faites glisser les pages pour réordonner la navigation.
- Créez des groupes déroulants pour imbriquer des pages sous un libellé parent.
- Ajoutez des liens externes qui pointent hors de votre site.
- Le logo dans l'en-tête est cliquable et renvoie toujours à la page d'accueil.
- La page d'accueil est toujours en première position et verrouillée.

Le contenu de la barre de menu elle-même se règle dans **Hele site** › **Menubalk** (barre de menu) :

- **Logo** et **Merknaam** (nom de marque) : Choisissez ce que montre la barre de menu (**Automatisch**, **Alleen merknaam** ou **Logo + merknaam**). Automatique montre votre logo dès que vous en téléversez un, sinon votre nom de marque.
- **Knop** (bouton) : Le texte et la destination du bouton à droite dans la barre de menu, et le **Knopstijl** (style du bouton). Le texte et la destination doivent être renseignés pour que le bouton apparaisse.
- **Telefoonnummer (tel: link)** (numéro de téléphone) : Un numéro de téléphone cliquable à côté du bouton sur ordinateur et dans le menu mobile. Laissez vide pour le masquer.
- **Bel-label (mobiel)** (libellé d'appel sur mobile) : Le texte à côté de l'icône de téléphone sur mobile (par défaut « Bel direct » si vous le laissez vide).
- **Belknop onderaan op mobiel** (bouton d'appel en bas sur mobile) : Un bouton d'appel fixe en bas de l'écran sur les appareils mobiles, pour que les visiteurs vous appellent d'un seul geste, où qu'ils se trouvent sur la page. La barre d'appel peut aussi montrer WhatsApp à côté du bouton d'appel : elle reprend le numéro WhatsApp que le reste de votre site porte déjà (un bouton WhatsApp, un bloc contact avec WhatsApp ou le bouton de contact flottant), et un **WhatsApp-nummer** que vous saisissez ici l'emporte. Sur mobile, le bouton de contact flottant retire WhatsApp dès que la barre l'affiche, pour que WhatsApp n'apparaisse jamais deux fois sur le même écran.
- **Menubalk blijft in beeld bij scrollen** (la barre de menu reste visible au défilement) : Activé par défaut. La barre de menu reste visible pendant que le visiteur défile vers le bas.

Ces réglages s'appliquent à chaque page de votre site et sont enregistrés automatiquement. L'apparence de la barre de menu (disposition, arrière-plan, style de bouton) se trouve au même endroit, voir [Personnaliser le style de votre site](#personnaliser-le-style-de-votre-site).

## Liens de pied de page

L'éditeur de pied de page se trouve sous **Hele site** › **Footer**. Il compose le bas de chaque page publiée à partir de deux sources : des blocs automatiques construits à partir de vos pages et de vos coordonnées d'entreprise, et des colonnes de liens manuelles que vous ajoutez vous-même.

### Blocs de pied de page automatiques

Trois commutateurs contrôlent le contenu généré pour vous :

- **Afficher automatiquement les liens de page** ("Pages") : une colonne de plan du site contenant un lien vers chaque page en ligne et indexable de votre site. Activée par défaut pour les nouveaux sites, car elle aide les moteurs de recherche à trouver chaque page et empêche qu'une page reste isolée. La page d'accueil, les articles de blog, les pages en brouillon, les pages protégées par mot de passe et les pages marquées "noindex" ou masquées du sitemap sont automatiquement exclues. Masquez une page individuelle de cette colonne en désactivant **Afficher dans le sitemap** dans les paramètres SEO de cette page.
- **Afficher les coordonnées** ("Contact") : votre e-mail public, votre numéro de téléphone et votre adresse, tirés des coordonnées de l'entreprise.
- **Afficher les liens sociaux** ("Réseaux sociaux") : les URL sociales enregistrées dans les coordonnées de votre entreprise. Pour Instagram, Facebook et LinkedIn, le panneau du pied de page permet de compléter l'adresse directement, avec une confirmation avant de mettre à jour les coordonnées de l'entreprise.

Ces blocs apparaissent dans le style de pied de page de votre site, sous les colonnes manuelles. Si votre design affiche déjà des coordonnées ou des liens sociaux, le commutateur correspondant est masqué pour éviter les doublons.

### Colonnes de liens manuelles

Sous les commutateurs automatiques, vous pouvez ajouter jusqu'à six colonnes de liens personnalisées. Chaque colonne a un titre et une liste de liens. Utilisez-les pour les pages légales, les catégories de produits ou les ressources externes. Les liens acceptent les chemins internes, les URL HTTPS externes, les e-mails (`mailto:`) ou les téléphones (`tel:`).

## Tokens de données d'entreprise

Les champs de texte du constructeur de site peuvent contenir des tokens de fusion qui tirent les données d'entreprise actives de vos paramètres d'espace de travail. Lors du rendu du site publié, chaque token est remplacé par la valeur actuelle des **Données de l'entreprise** (`/settings/bedrijfsgegevens`). Vous n'avez ainsi besoin de gérer le nom, l'adresse et les coordonnées de votre entreprise qu'à un seul endroit.

Tokens disponibles :

::: v-pre
| Token | Affiche |
|---|---|
| `{{bedrijf.naam}}` | Nom de l'entreprise |
| `{{bedrijf.adres}}` | Adresse complète, composée de la rue, du code postal et de la ville |
| `{{bedrijf.kvk}}` | Numéro d'immatriculation (KvK) |
| `{{bedrijf.btw}}` | Numéro de TVA |
| `{{bedrijf.email}}` | Adresse e-mail publique |
:::

Comment les utiliser :

- Dans n'importe quel champ de texte, cliquez sur la puce correspondant à la valeur souhaitée. Le token est inséré à la position du curseur.
- Vous pouvez aussi taper un token manuellement. Seuls les cinq tokens ci-dessus sont pris en charge.
- Si une valeur est vide dans vos données d'entreprise, le site publié affiche une indication entre crochets, par exemple `[nom de l'entreprise]`, pour repérer ce qui manque encore. Le token e-mail porte votre adresse publique : l'adresse avec laquelle vous vous connectez n'est publique qu'après confirmation sur votre site (la boîte de publication vous le demande) ; d'ici là, le texte qui s'appuyait sur le token est rangé sur le site publié, votre numéro de téléphone restant en place, et aucun visiteur ne voit jamais le token lui-même.
- Les tokens sont résolus après le snapshot de publication, donc les modifications ultérieures de vos données d'entreprise apparaissent directement sur le site en ligne sans nouvelle publication.
- Les pages légales générées par la plateforme utilisent ces tokens automatiquement. Vous pouvez éditer le texte autour sans casser le lien.

## URL publique

Votre site web est servi à l'URL la plus prioritaire disponible :

1. Votre domaine personnalisé (par ex. `https://acme.fr`) lorsqu'il est vérifié et activé (Office)
2. Votre adresse gratuite sur `mycompanydesk.site` (par ex. `https://acme.mycompanydesk.site`), créée à votre première publication à partir du nom de votre entreprise
3. L'adresse de secours dans l'app (`/sites/{slug}`), tant qu'il n'existe pas encore d'adresse gratuite

Consultez [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox) pour la configuration et la vérification du domaine.

## Formulaire de contact

Le bloc formulaire de contact dispose d'un gestionnaire d'envoi actif. Lorsqu'un visiteur remplit les champs que vous avez configurés (nom, e-mail, téléphone, entreprise, message) et clique sur Envoyer, la plateforme crée une demande et notifie votre espace de travail. Le formulaire affiche une bannière de succès une fois terminé et une erreur inline en cas de problème. Tous les champs sont désactivés pendant l'envoi pour éviter les doubles soumissions.

Dans l'inspecteur, vous choisissez à **Wat vraagt de klant?** (que demande le client ?) le type de demande du bloc : **Offerte** (devis : une demande de travail), **Bericht** (message : une simple question ou une présentation), **Afspraak** (rendez-vous : une demande de moment dans votre agenda), ou **Terugbelverzoek** (demande de rappel : nom et téléphone, sans e-mail obligatoire). **Volg je bedrijfsinstelling** (suit le réglage de l'entreprise) reprend le réglage global de l'entreprise, posé sous **Site web › Connexions**. Le type décide comment les soumissions s'appellent dans votre boîte de réception, vos notifications et vos e-mails. Le réglage global de l'entreprise décide aussi comment s'appelle l'onglet des demandes sous **Devis**, par exemple **Demandes de devis** ou **Demandes de rappel**. Un formulaire de rappel échange le champ e-mail obligatoire contre un champ téléphone obligatoire.

Sur les formulaires de devis et de message, **Bezoekers kunnen foto's meesturen** (les visiteurs peuvent envoyer des photos) permet à un visiteur d'ajouter jusqu'à 3 photos (10 Mo chacune, JPEG, PNG ou WebP) à la demande. Voyez [Demandes de devis](/fr/features/quotes#demandes-de-devis) pour ce qui arrive côté app.

Ce qui se passe lors de l'envoi :

1. Seuls les champs que le bloc rend effectivement sont envoyés. Masquer le champ nom ne provoque donc aucune erreur.
2. La plateforme crée une demande (type estampillé à l'arrivée) sous l'entreprise liée au slug du site.
3. Vous recevez une notification dans votre espace de travail.
4. La demande apparaît sous **Devis**, dans l'onglet de vos demandes.
5. Le visiteur voit un message de succès personnalisable.

Les soumissions du formulaire de contact ne sont acceptées que si le site a été publié : les soumissions vers un brouillon ou un espace de travail non publié sont refusées. Elles sont limitées à 5 par minute par adresse IP et protégées par un plafond d'abus par entreprise, de sorte qu'un visiteur très actif ne peut pas épuiser votre budget de notifications. Un widget Cloudflare Turnstile apparaît également avant l'envoi lorsqu'il est configuré sur votre espace de travail, bloquant les soumissions automatisées de bots sans ralentir les vrais visiteurs.

## Inscription à la newsletter

Le bloc newsletter capture les inscriptions par e-mail depuis votre site publié. L'inscription passe par un double opt-in : après l'envoi, le visiteur reçoit un e-mail de confirmation et doit cliquer sur le lien pour activer son abonnement. Les adresses supprimées et les abonnés déjà actifs sont traités de la même manière que les nouvelles inscriptions du point de vue du formulaire (pas de fuite de données).

Ce qui se passe lors de l'envoi :

1. La plateforme enregistre l'inscription, avec votre site comme source.
2. Si l'adresse n'est pas déjà active et n'est pas supprimée, un e-mail de double opt-in est envoyé.
3. Le visiteur voit une bannière de succès dans tous les cas, préservant ainsi la confidentialité du statut d'abonnement.
4. Une fois confirmé, l'abonné apparaît dans l'audience de la newsletter de cet espace de travail.

Les soumissions à la newsletter partagent la même limite de taux que le formulaire de contact : 5 par minute par adresse IP. La protection anti-bot Turnstile est également active sur les formulaires de newsletter lorsque configurée.

## Pages légales

Le constructeur de site crée deux pages légales standard pour chaque nouvel espace de travail : **Politique de confidentialité** (`/privacy`) et **Conditions générales** (`/algemene-voorwaarden`). Le contenu utilise des marqueurs de remplacement pour les données de l'entreprise. Lorsque la page est affichée aux visiteurs, ces marqueurs sont remplacés par les valeurs de vos **Paramètres de l'entreprise** : nom de l'entreprise, adresse, code postal, ville, pays, numéro d'enregistrement, numéro de TVA et e-mail public.

Le texte des deux pages est choisi selon votre métier, conditions et confidentialité. La page des conditions générales connaît deux variantes. Les entreprises qui vendent directement aux consommateurs, les métiers sur rendez-vous et les métiers de boutique ou de restauration comme une boulangerie, reçoivent des conditions orientées consommateurs : elles couvrent les commandes, le droit de rétractation légal des consommateurs avec son exception légale pour les biens fabriqués sur mesure ou périssables, le paiement, l'annulation de rendez-vous et de cours, la responsabilité et les réclamations, plus une ligne d'information générique, par exemple sur les allergies. Les métiers sur devis et les services B2B gardent les conditions existantes pour artisans, qui traitent des devis, des travaux supplémentaires et de la livraison. Les deux variantes utilisent les mêmes marqueurs de remplacement.

Vous pouvez modifier les pages légales dans l'éditeur comme n'importe quelle autre page. L'éditeur conserve les marqueurs de remplacement dans le contenu : si vous ouvrez et enregistrez une page sans la modifier, les futures mises à jour de vos données d'entreprise s'y reportent automatiquement.

Quand MyCompanyDesk améliore les textes légaux standard, les sites existants sont rafraîchis aussi. Dès que vous ouvrez Website, la plateforme vérifie si vos pages confidentialité et conditions sont encore, mot pour mot, l'un des textes standard qu'elle génère pour votre métier. Une page que vous avez modifiée vous-même n'est jamais touchée. Une page qui porte encore le texte standard est réécrite avec les mots que votre métier exige : si cette page était en ligne, elle seule repart dans le snapshot publié, vos autres brouillons ne bougent pas et la barre de publication ne signale pas ce rafraîchissement comme modification non publiée ; une page en brouillon reste en brouillon et emporte le nouveau texte à votre prochaine publication.

Les pages légales sont générées au moment de la publication, comme le reste de votre site. Elles partagent le même statut Live/Concept et la même règle de visibilité liée à l'abonnement.

## Gérer les demandes

Consultez [Devis : demandes de devis](/fr/features/quotes#demandes-de-devis) pour les détails sur la gestion des demandes entrantes.

## Condition d'abonnement

Le site web public (page entreprise et constructeur de site) est disponible sur tous les plans et reste en ligne. Le badge MyCompanyDesk dépend de l'adresse : il apparaît sur le sous-domaine de l'espace de travail et disparaît sur un domaine personnalisé (Office).

- **Desk** : le site est visible à votre adresse `mycompanydesk.site`, avec un petit badge MyCompanyDesk.
- **Office** : le site est toujours visible ; sur un domaine personnalisé, il n'y a pas de badge. Connecter votre propre domaine n'est possible qu'avec Office (5 domaines personnalisés au maximum).
- **Design et style** : les packs, les thèmes de couleurs et tous les réglages de style sont disponibles dans chaque formule.
- **État incertain**: si le système ne peut pas déterminer votre plan, le site reste en ligne pour éviter une coupure accidentelle.

Ce contrôle s'applique à tous les chemins publics: la page entreprise, la route de détail des services et les pages du constructeur de site. La vérification a lieu à chaque requête, avant toute couche de cache, afin de rester exacte même si votre abonnement change en cours de cache.

## Voir aussi

- [Domaines, site web et boîte de réception](/fr/features/domains-website-inbox): Configuration de domaine personnalisé, vérification, SSL et boîte de réception e-mail.
- [Paramètres de l'entreprise](/fr/settings/company): Où se trouvent les détails, l'image de marque et l'adresse de votre entreprise.
- [Devis](/fr/features/quotes): Gérer les demandes de devis qui arrivent via votre site web.
- [Abonnement et paiements](/fr/settings/billing): Ce que comprennent Desk et Office.