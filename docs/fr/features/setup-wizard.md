---
title: Assistant de configuration
last_verified: 2026-07-02
---

# Assistant de configuration

L'assistant de configuration sur `/setup` rend un nouvel espace de travail opérationnel en quelques minutes : il demande quel travail vous faites et ce que vous attendez de l'application, récupère vos informations d'entreprise dans le registre du commerce néerlandais (KVK), met en place si vous le souhaitez une adresse web et une marque, et confirme votre essai. C'est la porte d'entrée des nouveaux utilisateurs, et il reste disponible ensuite.

Si vous cherchez le guide de base, commencez par [Configurer votre entreprise](/fr/getting-started/company-setup). Cette page est la référence de chaque étape et de chaque option.

## Quand l'assistant apparaît

- **Première connexion :** les nouveaux comptes arrivent automatiquement dans l'assistant.
- **Bannière du tableau de bord :** tant que la configuration n'est pas terminée, une bannière en haut du tableau de bord propose de la finir. La bannière se masque avec la croix ; ce masquage vaut par navigateur, et `/setup` reste accessible directement.
- **À tout moment :** rendez-vous sur `/setup` pour lancer ou relancer l'assistant.

L'assistant ne vous bloque nulle part. Passer pour l'instant vous ramène au tableau de bord sans terminer ; rien n'est perdu, car chaque réponse est enregistrée immédiatement. Revenez plus tard et vous reprenez exactement où vous vous étiez arrêté.

## Les étapes

L'assistant affiche une barre de progression avec jusqu'à six étapes :

1. **Travail :** quel travail vous faites
2. **Objectifs :** ce que vous voulez faire avec MyCompanyDesk
3. **KVK :** les informations de votre entreprise
4. **Adresse web :** seulement si vous avez choisi l'objectif site web
5. **Marque :** seulement si vous avez choisi l'objectif site web
6. **Votre essai :** confirmation de l'essai et finalisation

**Continuer** avance dès qu'une étape a ce qu'il lui faut ; **Terminer la configuration** sur la dernière étape applique tout.

## Étape : Travail

Une grille de métiers courants : menuisier, peintre, plombier, électricien, plâtrier, jardinier, photographe, coiffeur, esthéticienne, webdesigner, consultant, bailleur, et une option autre avec champ libre.

Le choix du métier pré-coche des objectifs adaptés à l'étape suivante : un menuisier reçoit factures, devis, dépenses, heures et projets ; un bailleur reçoit locations, factures, dépenses et TVA. Sur l'étape des objectifs, chaque case reste modifiable ; l'assistant ne les réinitialise que si vous revenez choisir un autre métier.

Vous devez choisir un métier pour continuer.

## Étape : Objectifs

Une liste de huit objectifs :

- Envoyer des factures
- Créer des devis
- Suivre les dépenses
- Saisir les heures
- Gérer des projets
- Gérer des locations
- Être trouvé en ligne
- TVA et récapitulatifs

Chaque objectif coché active la partie correspondante de l'application pour votre espace de travail ; les objectifs non cochés restent désactivés pour garder un menu épuré. Vous pouvez toujours changer cela plus tard dans les paramètres.

L'objectif d'être trouvé en ligne a le plus grand effet sur l'assistant lui-même : il ajoute les étapes **Adresse web** et **Marque**. Sans lui, aucun site n'est mis en place et vous passez de KVK directement à la dernière étape.

Au moins un objectif doit être coché pour continuer.

## Étape : KVK

Trois chemins :

1. **Rechercher :** tapez le nom de votre entreprise (deux caractères ou plus) et choisissez-la parmi les suggestions en direct. MyCompanyDesk récupère alors votre profil de base KVK et préremplit vos informations : dénomination légale, noms commerciaux, forme juridique, adresse et activité. Seuls les champs vides sont remplis ; ce que vous avez saisi à la main est conservé.
2. **Remplir manuellement :** un court formulaire pour le nom de l'entreprise, le numéro KVK, l'adresse, le code postal et la ville. Utile quand votre entreprise est trop récente pour apparaître dans les résultats, ou quand votre nom commercial ne correspond pas à votre recherche. Vos saisies sont enregistrées immédiatement dans vos informations d'entreprise. Un lien permet de revenir à la recherche à tout moment.
3. **Pas d'immatriculation KVK :** continuez sans informations d'entreprise et complétez-les plus tard dans les paramètres, sous Données de l'entreprise.

Quand une recherche ne donne rien, l'assistant le dit et propose de passer à la saisie manuelle, avec le nom déjà tapé prérempli.

L'étape demande aussi une ligne décrivant ce que fait votre entreprise ; si votre entreprise a été trouvée au registre, elle est préremplie avec votre activité enregistrée. En cliquant sur **Continuer**, MyCompanyDesk utilise le nom de votre entreprise et cette description pour générer en arrière-plan des propositions de marque : une couleur, un slogan et du contenu de départ. Vous voyez le résultat à l'étape Marque (avec l'objectif site web) et, après la finalisation, sur vos documents et votre site.

Pour continuer, choisissez une entreprise, enregistrez une saisie manuelle ou choisissez l'option sans KVK.

## Étape : Adresse web

Visible uniquement avec l'objectif site web. Trois cartes :

- **Sous-domaine gratuit :** choisissez un nom pour une adresse gratuite se terminant par `.mycompanydesk.site`. Le nom est prérempli à partir du nom de votre entreprise et la disponibilité est vérifiée en direct pendant la saisie. Continuer n'est possible qu'une fois le nom confirmé disponible.
- **J'ai déjà un domaine :** tapez un domaine qui vous appartient. Il est connecté à votre espace de travail à la fin de l'assistant ; s'il ne pointe pas encore vers MyCompanyDesk, vous effectuez ensuite les étapes DNS depuis les paramètres de votre site.
- **Enregistrer un domaine :** cherchez un domaine, consultez la disponibilité et le prix, et achetez-le directement dans l'assistant. Pendant votre essai Pro, vous pouvez aussi réclamer gratuitement un domaine `.nl` pour la première année au lieu de l'acheter. Un achat réussi est rattaché immédiatement à votre espace de travail.

L'étape peut être passée ; un domaine peut toujours être ajouté plus tard depuis les paramètres de votre site.

## Étape : Marque

Visible uniquement avec l'objectif site web, et entièrement facultative :

- **Import du logo :** PNG, JPG, SVG ou WebP. La couleur dominante de votre logo devient automatiquement votre couleur de marque. Si vous passez l'import, MyCompanyDesk génère un logo sobre à partir de vos initiales, pour que vos factures et votre site n'aient jamais l'air inachevés.
- **Aperçu :** la couleur de marque et le slogan proposés pour vous, à partir de vos données KVK et de votre description en une ligne. La retouche se fait plus tard dans les paramètres ; rien sur cette étape ne vous empêche de continuer.

## Étape : Votre essai

La dernière étape confirme votre essai :

- **Votre essai :** chaque nouvel espace de travail démarre avec 60 jours de Pro, gratuits, sans carte bancaire.

**Terminer la configuration** applique tout : vos informations d'entreprise, couleur de marque, logo, prestations de départ et modèles d'e-mails, des catégories de dépenses adaptées à votre travail et, avec l'objectif site web, votre site et votre domaine. Un récapitulatif liste ce qui a été mis en place, avec des boutons vers le tableau de bord ou directement vers l'éditeur de site.

## Passer, reprendre et relancer

- **Passer :** vous ramène à tout moment au tableau de bord. La bannière du tableau de bord garde un chemin de retour jusqu'à ce que la configuration soit terminée.
- **Reprendre :** les réponses sont enregistrées à chaque modification. Fermer l'onglet en cours de route ne coûte rien ; à la visite suivante, vous reprenez sur la même étape.
- **Relancer :** après la finalisation, `/setup` relance le parcours depuis la première étape, avec vos réponses conservées. L'assistant complète les champs vides au lieu d'écraser : une liste de prestations que vous avez construite, un logo importé ou des réglages choisis à la main ne sont pas remplacés.

## Modifier sans l'assistant

Chaque champ touché par l'assistant a sa place dans les **paramètres** :

- **Données de l'entreprise :** nom, numéro KVK, adresse, numéro de TVA
- **Logo et couleur :** logo et couleur de marque
- **Mise en page des factures :** l'apparence de vos PDF
- **Votre site et domaine :** domaine et site web
- **Modules :** activer ou désactiver des parties de l'application

Consultez l'[aperçu des paramètres](/fr/settings/) pour la carte complète.
