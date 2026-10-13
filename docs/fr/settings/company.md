---
title: Paramètres entreprise
description: "Le nom sur vos factures, l'adresse, le KvK, le logo, la couleur de marque, les labels et les horaires, regroupés dans Paramètres."
last_verified: 2026-10-13
---

# Paramètres entreprise

Tout ce qui définit l'image de votre entreprise vers l'extérieur : le nom sur vos factures, votre logo et votre couleur de marque, vos labels, votre site web et vos heures d'ouverture.

## Où le trouver

Ouvrez **Paramètres** dans le menu, ou rendez-vous sur `/settings`. Les sujets liés à l'entreprise sont des lignes des groupes **Votre entreprise** et **Factures et argent** :

- **Données de l'entreprise** sur `/settings/bedrijfsgegevens` : nom, adresse, numéro KvK et numéro de TVA, coordonnées, labels et heures d'ouverture
- **Logo et couleur** sur `/settings/uiterlijk` : votre logo, votre nom d'affichage et votre couleur de marque
- **Mise en page des factures** sur `/settings/factuurontwerp` : le studio de conception de vos factures, décrit dans [Conception des PDF](/fr/settings/pdf)

Les anciens liens vers les paramètres de l'espace de travail redirigent automatiquement vers le nouvel emplacement.

## Données de l'entreprise

Chemin : `/settings/bedrijfsgegevens`

Les informations qui figurent sur chaque facture, devis et e-mail. Elles doivent être exactes.

- **Nom de l'entreprise** : figure sur chaque document
- **Numéro SIRET** : c'est ici que vous saisissez votre numéro KvK néerlandais. S'il ne compte pas 8 chiffres, un avertissement s'affiche (simple contrôle) ; la vraie recherche se fait avec l'aide au remplissage en haut de la page, voir ci-dessous
- **Numéro de TVA** : par exemple `NL123456789B01`
- **Adresse** : rue, code postal, ville et pays, avec une aide à la saisie de l'adresse
- **Contact** : e-mail, téléphone, e-mail de support, site web et fuseau horaire. L'adresse avec laquelle vous vous connectez n'apparaît sur votre site qu'après confirmation comme adresse publique (l'assistant du site et la fenêtre de publication vous le demandent) ; vos factures l'utilisent dans tous les cas.
- **À propos de votre entreprise** : une courte **Description de l'entreprise** pour votre page entreprise dans le portail client
- **Réseaux sociaux** : Instagram, Facebook, LinkedIn et X. Collez l'adresse complète de votre profil ou de votre page (par exemple `https://instagram.com/votreentreprise`) ; une valeur qui ne deviendrait pas un lien est signalée dès que vous quittez le champ, et un simple nom d'utilisateur indique vers où il pointerait.

Votre IBAN ne se saisit pas ici, mais sous **Paramètres › Paiement**. Les modifications sont enregistrées automatiquement.

## Remplir vos données automatiquement

En haut de la page Données de l'entreprise se trouve la carte **Remplir vos données automatiquement**. Elle récupère vos informations auprès de deux sources et les présente côte à côte :

- **Chambre de commerce (KvK)** : nom et adresse
- **Google** : téléphone, site web et heures d'ouverture de votre fiche d'établissement Google

Chaque suggestion figure dans la liste **Voici ce que nous avons trouvé**, avec sa source. Cochez ce que vous voulez reprendre et appuyez sur le bouton **Reprendre** (il compte ce que vous avez choisi). Seuls les champs vides sont remplis : une ligne déjà renseignée est marquée **déjà rempli** et ignorée. Une recherche n'écrase donc jamais votre propre travail.

## Labels et certifications

Chemin : `/settings/bedrijfsgegevens#keurmerken`

La carte **Labels et certifications** de la page Données de l'entreprise rassemble les labels et marques de qualité de votre entreprise, comme STEK, VCA ou CE. Ils apparaissent sur votre site web et, selon le type d'e-mail choisi sous Paramètres › E-mail, sous vos e-mails. Vous les gérez à un seul endroit.

- **Ajouter un label** : choisissez une image (PNG, JPG, WebP ou SVG, 3 Mo maximum). MyCompanyDesk rogne l'espace blanc autour du logo, limite sa hauteur à 480 pixels et le convertit en PNG transparent. Un SVG est converti en image classique, pour que les logiciels de messagerie qui n'affichent pas le SVG montrent quand même le label. L'image est facultative : un label peut n'avoir qu'un nom, qui s'affiche alors sur votre site et dans la version texte de vos e-mails.
- **Nom** : obligatoire, 64 caractères maximum. Le nom décrit le logo pour les personnes qui ne peuvent pas le voir.
- **Lien (facultatif)** : par exemple la page du registre où vos clients peuvent vérifier votre certificat. Le lien doit commencer par `https://` ou `http://`.
- Six labels maximum. Réorganisez-les avec les flèches haut et bas ; pour remplacer l'image, supprimez le label et ajoutez-le à nouveau.
- Un interrupteur, activé par défaut : **Afficher sur votre site web** alimente le bloc des labels sur votre site. Le choix d'afficher aussi les logos sous vos e-mails se fait par type d'e-mail sous **Paramètres › E-mail** ; la carte affiche une note avec un lien.
- Dès votre premier label, un bloc de labels est ajouté automatiquement à la page d'accueil de votre site, en brouillon. Il est mis en ligne lorsque vous publiez votre site.

## Vouvoiement ou tutoiement sur votre site

Sous la carte des labels se trouve la carte qui détermine comment votre site s'adresse en néerlandais à ses visiteurs : **Tutoiement (je)** (« Ik help je graag. ») ou **Vouvoiement (u)** (« Ik help u graag. »). Les textes fixes de votre site, comme les boutons, les lignes de formulaire et les messages de remerciement, suivent ce choix immédiatement ; une entreprise individuelle parle à la première personne du singulier plutôt qu'au pluriel. Ce que vous ou l'assistant de rédaction avez déjà écrit garde sa propre forme. La carte propose de convertir aussi ces textes en une fois, y compris ceux que vous avez tapés vous-même : seule la forme d'adresse change, jamais le contenu. Vous voyez ensuite combien de textes ont été modifiés et lesquels sont restés tels quels, et la publication les met en ligne. L'assistant du site pose la même question à sa première étape et enregistre le même réglage.

## Heures d'ouverture

Chemin : `/settings/bedrijfsgegevens#openingstijden`

Vous gérez ici une source unique pour vos heures d'ouverture. Les mêmes horaires figurent sur votre site web (le badge Ouvert maintenant et vos coordonnées) et valent pour le bloc de rendez-vous en ligne, vous n'avez donc jamais deux endroits à synchroniser.

**La semaine habituelle**

- Réglez chaque jour sur **Ouvert** ou **Fermé**.
- Donnez à un jour ouvert une ou deux plages horaires, par exemple `09:00 - 12:00` et `13:00 - 17:00`.
- Si rien n'est encore réglé, une proposition s'affiche (du lundi au vendredi, 09:00 - 17:00). Votre site n'affiche des heures d'ouverture qu'une fois que vous avez modifié quelque chose ici et que c'est enregistré.

**Jours de congé et exceptions**

- Ajoutez des dates isolées ou une période continue pour les vacances, les jours fériés ou un changement ponctuel.
- Choisissez pour chacune **Fermé**, **Sur rendez-vous** ou **Horaires personnalisés**.
- **Ajouter les jours fériés** marque d'un geste comme fermés les jours fériés reconnus des douze prochains mois.
- Le bloc de rendez-vous en ligne et votre site respectent ces exceptions.

**Site web et rendez-vous**

Vos heures d'ouverture apparaissent sur votre site web et dans le bloc de rendez-vous en ligne. Le site lui-même se gère dans l'espace **Site web** du menu principal ; le bloc de réservation est décrit dans [Rendez-vous en ligne](/fr/features/site-bookings). Les deux lisent la même source, une modification ici s'applique donc aux deux. Ces horaires limitent les créneaux que les clients peuvent choisir eux-mêmes en ligne. Une personne qui demande un rendez-vous n'est pas limitée : tout jour peut être demandé, et c'est vous qui confirmez.

Les modifications sont enregistrées automatiquement.

### Tenir à jour également sur Google

La carte Heures d'ouverture contient une ligne qui relie vos horaires à votre fiche d'établissement Google. Activez **Tenir à jour également sur Google**, connectez-vous à Google et choisissez l'établissement à mettre à jour. Ensuite, chaque modification est reportée la nuit suivante sur votre fiche Google ; la ligne l'indique avec **Votre modification sera envoyée à Google cette nuit.**

Les deux semaines ne concordent plus ? La ligne vous demande alors quelle version doit s'appliquer, car MyCompanyDesk n'écrase jamais Google de sa propre initiative : **Appliquer mes horaires sur Google** ou **Reprendre ceux de Google**. Reprendre remplace les horaires ci-dessus par ceux de Google, ce qui met aussi à jour la mention Ouvert maintenant sur votre site. Seuls les jours différents figurent dans le tableau, et un jour réglé sur **Sur rendez-vous** apparaît fermé sur Google, qui ne connaît pas cet état. **Mettre à jour maintenant** envoie vos horaires sans attendre la mise à jour nocturne ; après un envoi échoué, l'erreur s'affiche avec le bouton à côté.

Si vous désactivez l'interrupteur, la synchronisation s'arrête, mais votre compte et votre établissement restent connectés.

## Logo et couleur

Chemin : `/settings/uiterlijk`

Votre identité visuelle pour les factures, devis, e-mails et votre site web, avec un aperçu en direct du résultat.

- **Nom d'affichage** : un nom de marque facultatif sur vos e-mails et PDF. Laissé vide, c'est le nom de votre entreprise qui est utilisé. S'il diffère du nom de l'entreprise, il détermine aussi ce qui figure sur votre facture et dans le menu de l'application ; le formulaire Données de l'entreprise indique alors sous le champ du nom ce qui s'affiche actuellement (« Votre facture et le menu affichent actuellement : ... »), avec un lien vers cette page.
- **Couleur de marque** : une seule couleur pour votre site, votre newsletter, vos e-mails et vos documents. Saisissez un code couleur ou choisissez un des préréglages ; un avertissement s'affiche si une couleur est trop claire pour rester lisible. Si vous avez choisi une couleur d'accent différente dans **Mise en page des factures**, c'est elle que vos clients voient sur les factures, devis, e-mails et la page de paiement. Une note sous la couleur propose d'en faire aussi votre couleur de marque en un clic.
- **Logo de l'entreprise** : importez votre logo en SVG (recommandé), PNG ou JPG, 2 Mo maximum. Il figure sur chaque PDF et en haut de vos e-mails. Pour les logos photo, un bouton supprime l'arrière-plan.
- **Générer un logo à partir du texte** : pas encore de logo ? Créez-en un ici à partir d'un texte, comme vos initiales, et d'une couleur de fond.
- **Aperçu** : montre l'allure de votre marque sur les factures et les e-mails.

Les modifications sont enregistrées automatiquement. Il n'y a qu'une couleur de marque pour tout ce que voient vos clients. Pour maîtriser entièrement la mise en page, les couleurs et la police de vos factures et devis, ouvrez la ligne **Mise en page des factures** ; voir [Conception des PDF](/fr/settings/pdf).

## Votre site web

Votre site se gère dans l'espace **Site web** du menu principal de l'application, pas dans Paramètres. C'est un tableau de bord à sept onglets : Aperçu, Visiteurs, Résultats, Pages, Visibilité, Connexions et Domaine & e-mail. L'éditeur s'ouvre avec **Modifier le site**.

- Le site web est inclus dans tous les abonnements. Avec Desk, il fonctionne sur une adresse en `mycompanydesk.site` avec un petit badge « Gemaakt met MyCompanyDesk ».
- Connecter votre propre domaine, à la place de l'adresse par défaut en `mycompanydesk.site`, fait partie d'Office. Les enregistrements DNS, SPF et DKIM sont gérés pour vous, derrière une zone avancée que la plupart des gens n'ouvrent jamais.

## Voir aussi

- [Conception des PDF](/fr/settings/pdf) pour le studio Mise en page des factures
- [Abonnement et paiements](/fr/settings/billing) pour un domaine personnalisé
- [E-mail](/fr/settings/email) pour envoyer depuis votre propre domaine
- L'assistant de configuration sur `/setup` guide les nouveaux espaces de travail à travers ces réglages en une seule fois
