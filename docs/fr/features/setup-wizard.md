---
title: Assistant de configuration
description: "L'assistant sur /setup récupère vos données au registre KVK, demande par quoi commencer et règle la TVA et l'IBAN pour facturer."
last_verified: 2026-10-13
---

# Assistant de configuration

L'assistant de configuration sur `/setup` (**Configurons votre entreprise**) rend un nouvel espace de travail opérationnel en quelques minutes. Il récupère vos informations d'entreprise dans le registre du commerce néerlandais (KVK) et affiche un aperçu en direct de votre facture. Juste après l'étape KVK, il demande par quoi vous voulez commencer : par les factures et devis, par votre propre site web ou par l'e-mail sur votre propre domaine. Rien n'est figé : chaque étape peut être passée et tout peut être modifié plus tard dans les paramètres.

Si vous cherchez le guide de base, commencez par [Configurer votre entreprise](/fr/getting-started/company-setup). Cette page est la référence de chaque étape et de chaque option.

## Quand l'assistant apparaît

- **Première connexion :** les nouveaux comptes arrivent automatiquement dans l'assistant.
- **Tant que la configuration n'est pas terminée :** rendez-vous sur `/setup` pour reprendre là où vous vous êtes arrêté. Une fois terminée, `/setup` vous envoie vers le tableau de bord. Il n'y a pas de bannière en haut du tableau de bord ; tant que la configuration a des points en suspens, le tableau de bord vous signale lui-même la prochaine étape en bas de la page, sous **À configurer**.

L'assistant ne vous bloque nulle part. **Passer pour l'instant** vous ramène au tableau de bord sans terminer ; rien n'est perdu, car chaque réponse est enregistrée immédiatement. Revenez plus tard et vous reprenez exactement où vous vous étiez arrêté.

## Les étapes

L'assistant demande, dans cet ordre :

1. **SIRENE** (Trouvez votre entreprise au registre du commerce)
2. **Début** (Par quoi voulez-vous commencer ?) : votre choix (voir [l'étape ci-dessous](#etape-par-quoi-voulez-vous-commencer))
3. **TVA et IBAN** (Comment êtes-vous payé ?) : uniquement sur le parcours facturation

**Continuer** vous fait avancer dès qu'une étape a ce qu'il lui faut, et **Retour** revient d'une étape. À la dernière étape du parcours facturation, **Terminer la configuration** applique tout ; si vous avez choisi le site ou l'e-mail, ce bouton s'appelle **Vers votre site web** ou **Vers votre e-mail**.

## Étape : KVK

Deux chemins :

1. **Rechercher :** tapez le nom de votre entreprise (deux caractères ou plus) et choisissez-la parmi les suggestions en direct. MyCompanyDesk récupère alors votre profil de base KVK et préremplit vos informations : dénomination légale, noms commerciaux, forme juridique, adresse et activité. Seuls les champs vides sont remplis ; ce que vous avez saisi à la main est conservé.
2. **Remplir manuellement :** un court formulaire pour le nom de l'entreprise, le numéro KVK, l'adresse, le code postal et la ville. Utile quand votre entreprise est trop récente pour apparaître dans les résultats, ou quand votre nom commercial ne correspond pas à votre recherche. Vos saisies sont enregistrées immédiatement dans vos informations d'entreprise. Un lien permet de revenir à la recherche à tout moment.

Pas d'immatriculation KVK ? **Je n'ai pas de numéro KVK** ouvre ce formulaire manuel, avec le nom déjà tapé en place et le numéro KVK facultatif. Rue, code postal et ville y sont obligatoires : une adresse appartient sur chaque facture que vous envoyez.

Quand une recherche ne donne rien, l'assistant le dit et propose de passer à la saisie manuelle, avec le nom déjà tapé prérempli.

Les adresses ont aussi leur contrôle. Choisissez une suggestion dont le code postal diffère du vôtre tapé, l'assistant le dit sous la carte d'adresse, laisse le code postal et la ville modifiables, et propose de les ajuster avant de continuer.

## Étape : Par quoi voulez-vous commencer ?

Directement après l'étape KVK, l'assistant demande **Par quoi voulez-vous commencer ?** avec trois réponses :

- **Envoyer des factures et des devis** : le parcours habituel. L'assistant poursuit avec l'étape TVA et IBAN puis l'écran de finalisation.
- **Votre propre site web** : l'assistant s'arrête ici et **Vers votre site web** vous emmène vers `/website`, où s'ouvre l'éditeur de site.
- **E-mail sur votre propre domaine** : l'assistant s'arrête ici et **Vers votre e-mail** vous emmène vers `/inbox/setup`, où la boîte mail professionnelle est configurée.

Le choix ne décide que de l'endroit où l'assistant vous remet. Rien n'est activé ni désactivé, et rien n'arrive présélectionné. Le tableau de bord suit le même choix : il propose **Zet je website online** (mettez votre site en ligne) ou **Stel je zakelijke e-mail in** (configurez votre courriel professionnel) tant que le site n'est pas publié ou qu'il n'existe pas de boîte propre sur votre propre domaine, puis revient au parcours facturation.

## Étape : TVA et IBAN

Cette étape (**Comment êtes-vous payé ?**) demande les deux éléments qui figurent sur chaque facture.

**Facturez-vous la TVA ?** Choisissez l'une des trois réponses :

- **Oui, je facture la TVA** : la plupart des indépendants. Saisissez votre numéro de TVA, ou choisissez **Je ne connais pas mon numéro de TVA maintenant, je le renseignerai plus tard** ; l'application vous le redemande à l'envoi de votre première facture.
- **Non, je participe à la KOR** : seulement si vous vous êtes inscrit vous-même auprès de la Belastingdienst et avez reçu un courrier à ce sujet. Un faible chiffre d'affaires ne suffit pas. Vos factures sont alors établies sans TVA et indiquent que vous participez à la KOR. L'étape demande ensuite **Depuis quand participez-vous au KOR ?** et propose le 1er janvier de l'année en cours, modifiable ; désinscrit autrefois et de nouveau inscrit aujourd'hui, la participation commence aujourd'hui.
- **Non, je suis exonéré** : pour certaines professions, comme les soins par un prestataire de santé enregistré ou l'enseignement par un formateur inscrit au CRKBO. Vos factures sont établies sans TVA.

Si vous hésitez pour la KOR, l'étape demande **Participes-tu au KOR (régime des petites entreprises) ?** avec **Oui, j'y participe**, **Non** et **Je ne sais pas**. Avec Je ne sais pas, elle explique que vous n'y participez pas si vous ne vous êtes pas inscrit vous-même, et que le courrier de la Belastingdienst le dit avec certitude.

**Où vos clients peuvent-ils payer ?** Saisissez votre IBAN et le nom du titulaire du compte, ou choisissez **Je le renseignerai plus tard** pour passer. Vous pouvez ajouter votre IBAN plus tard dans les paramètres, et l'application vous le redemande à votre première facture.

## Finalisation

**Terminer la configuration** applique vos informations d'entreprise, votre statut de TVA et votre IBAN. L'écran de fin (**Vous êtes prêt à facturer**) ne dit vos informations bonnes que lorsqu'il les a vraiment contrôlées : nom, rue, code postal et ville doivent y être, et un IBAN à la clé de contrôle fausse y est signalé plutôt que laissé passer. Il propose le bouton **Créez votre première facture** et indique la suite : sécuriser votre compte et votre site web vous seront proposés plus tard, au bon moment, sous **À configurer** sur le tableau de bord. Aucun site n'est construit en arrière-plan ; la première fois que vous ouvrez vous-même l'espace **Site web**, le site brouillon par défaut y est créé (accueil, services, à propos, contact, avec vos informations sur les pages juridiques), en attente de votre publication.

Chaque nouvel espace de travail démarre avec 60 jours d'Office, gratuits et sans carte bancaire. Si vous vous inscrivez via un lien d'invitation d'un comptable partenaire, cet essai dure 12 mois. À la fin, votre espace de travail repasse sur Desk, sans mur de paiement.

## Passer et reprendre

- **Passer :** vous ramène à tout moment au tableau de bord. `/setup` reste le chemin de retour jusqu'à ce que la configuration soit terminée.
- **D'abord le site** (**Créer d'abord mon site web**) : sous la question **Vous venez surtout pour votre site web ?** dans la barre du bas de la première étape se trouve une deuxième sortie, à côté de Passer. Elle quitte la configuration sans la finaliser et ouvre directement l'assistant de site ; contrairement au simple Passer, elle maintient ouverte la tâche Terminez votre site du tableau de bord, car il n'existe pas encore de site à terminer.
- **Reprendre :** les réponses sont enregistrées à chaque modification. Fermer l'onglet en cours de route ne coûte rien ; à la visite suivante, vous reprenez sur la même étape.
- **Après la finalisation :** `/setup` vous envoie alors vers le tableau de bord. Ce que l'assistant a rempli se modifie dans les paramètres (voir ci-dessous). L'assistant ne complète que les champs vides au lieu d'écraser : ce que vous aviez saisi vous-même reste en place.

## Modifier sans l'assistant

Chaque champ touché par l'assistant a sa place dans les **paramètres** :

- **Données de l'entreprise :** nom, numéro KVK, adresse, numéro de TVA
- **Logo et couleur :** logo et couleur de marque
- **Mise en page des factures :** l'apparence de vos PDF
- **Votre site et domaine :** domaine et site web
- **Modules :** activer ou désactiver des parties de l'application

Consultez l'[aperçu des paramètres](/fr/settings/) pour la carte complète.
