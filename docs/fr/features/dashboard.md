---
title: Tableau de bord
description: "L'écran d'accueil montre ce qui a besoin de vous maintenant, l'argent et une carte par module ; les chiffres profonds sont sur Chiffres."
last_verified: 2026-09-30
---

# Tableau de bord

Le tableau de bord sous `/dashboard` est l'écran d'accueil de votre espace de travail. C'est une seule page (en interne, nous l'appelons **Mijn bedrijf**, mon entreprise) qui réunit l'argent, les parties de votre entreprise qui demandent de l'attention, et tout ce que vous pouvez encore activer. Chaque chiffre vient de vos propres données, du jour, sans une seconde étape après.

Derrière se trouve une seconde page : **Chiffres** (`/cijfers`), la vue d'analyse avec les tuiles KPI, le graphique de tendance, l'ancienneté des créances et les autres chiffres profonds qui se trouvaient jusqu'ici sur le tableau de bord. La carte d'argent y renvoie, et la barre latérale possède sa propre entrée **Chiffres**.

## À faire maintenant

En haut se trouve **À faire maintenant** : une liste de ce qui réclame votre attention, et chaque élément porte son propre bouton, pour qu'une facture parte de là. La liste ne montre rien qui ne soit pas vrai ; des éléments typiques :

- Une facture jamais envoyée, ou une facture encore en brouillon, avec le montant qui va avec
- Des factures en retard, avec une action de rappel
- La déclaration de TVA et son échéance
- Des demandes qui attendent un devis, et des devis restés sans réponse
- Des lignes bancaires encore à rapprocher
- Un agenda de réservation posé sur un site sans visiteurs
- Un site Web hors ligne pendant que des visiteurs viennent encore, ou des modifications pas encore publiées

Si votre période d'essai touche à sa fin, cela apparaît ici en premier, au-dessus de tout, comme seul élément avec une échéance ferme.

Une seule règle garde cette liste sans bruit : **Te laat** (en retard) ne compte que si MyCompanyDesk connaît vos paiements. Un paiement enregistré comme payé dans les six derniers mois montre que le livre est suivi ; une connexion bancaire ou le paiement en ligne seuls ne suffisent pas, car une connexion que personne ne pointe, ou le paiement en ligne laissé activé pendant que les clients font un virement, déclarerait chaque facture en retard. Les factures n'entrent dans cette liste comme en retard que si ce signal existe.

## La carte d'argent

À côté de **À faire maintenant** se trouve la carte d'argent, avec les quatre chiffres qui répondent d'un coup d'œil à la question « comment va l'entreprise » :

- **Librement disponible** : votre solde bancaire, moins la réserve de TVA et vos charges fixes mensuelles
- **En banque** : le solde de vos comptes professionnels
- **À recevoir**, avec la part en retard mentionnée
- **Chiffre d'affaires par mois**

La réserve suit la même logique de trimestre que la carte TVA, pour que les déposants mensuels et les déclarants précoces ne voient pas partir le mauvais montant. Le solde compte vos comptes professionnels ; un compte privé relié reste en dehors des chiffres. Un lien sous la carte ouvre la vue complète **Chiffres**.

## Une carte par module

Chaque partie de l'entreprise qui tourne, réclame de l'attention ou est configurée à moitié reçoit sa propre carte sur la page. Chaque carte porte :

- le **statut** : En cours, Attention, Configuré en partie (par exemple « 2 sur 4 terminés »), Pas encore utilisé ou Chargement impossible
- un **surlignage d'une phrase** venant de ses propres données : la prochaine facture automatique, l'estimation de TVA, la tendance du solde, votre dernier client ou les visiteurs sur votre site
- une **phrase de raison avec son propre bouton** là où la carte demande de l'attention

Chaque carte lit sa propre source : la carte du site montre les visiteurs et les vues (le brouillon tant que vous construisez, le site en ligne après publication), la carte du portail client montre ce que vos clients ont fait avec vos devis et factures durant les 30 derniers jours, la carte des avis montre votre note, la carte de banque la tendance du solde et ce qui reste à rapprocher, la carte d'agenda vos premiers rendez-vous. Ainsi vous lisez l'état de toute l'entreprise sans ouvrir chaque partie séparément.

Les parties en cours sans contenu de propre carte ne reçoivent pas de place vide : elles figurent par nom sous **Tous les modules**, pour que la grille ne montre que des cartes avec quelque chose à voir.

## À configurer

Ce que vous n'avez pas encore lancé arrive sous **À configurer** : au plus trois prochaines étapes, chacune avec une raison tirée de vos données (« 3 factures sont impayées. Avec un bouton de paiement dans l'e-mail, vos clients paient tout de suite. »), une courte estimation en minutes, et une annulation pour celui qui la fait disparaître. Les étapes se lisent en direct dans vos données, pas dans une liste fixe : une étape finie se ferme elle-même, et la liste reste d'accord avec la réalité.

Les bannières qui se tenaient autrefois au-dessus du tableau de bord sont parties ; chaque sollicitation se trouve maintenant là où elle a sa place :

- une période d'essai qui se termine est la première ligne dans **À faire maintenant**
- sécuriser votre compte, régler un moyen de paiement, les notifications push et le domaine gratuit apparaissent comme étapes dans **À configurer**
- les nouvelles du produit et le lien vers l'app forment en bas une ligne compacte

Si vous aviez déjà fait disparaître une de ces bannières, elle reste disparue : les conditions et les clés de suppression sont les mêmes.

## Tous les modules

Sous les cartes se trouve la liste **Tous les modules** : tout ce qui tourne déjà sans carte propre, et tout ce qui n'est pas encore utilisé, comme une liste facile à découvrir.

- Avec la croix, vous désactivez un module, le même interrupteur que sous **Paramètres → Modules**. Un module désactivé disparaît aussi de la barre latérale, pour que le menu et la page racontent la même histoire, et il revient via la liste en bas.
- Quand un module partage son interrupteur avec un autre, les deux se désactivent et reviennent ensemble.
- Un module que votre offre n'inclut pas reste visible, avec mention du plan qui l'ouvre, pour que vous sachiez qu'il existe.

## Première visite

Un nouvel espace de travail reçoit la même page, car la configuration s'y fait : il n'y a plus d'écran de première visite séparé. **À configurer** place **Première facture** en haut tant qu'aucune facture n'a été envoyée. L'ancienne liste de démarrage, dont les tâches se fermaient sans jamais se rouvrir et glissaient lentement hors de la réalité, a disparu. La ligne de l'application reste silencieuse jusqu'à l'envoi de votre première facture, pour qu'un nouvel espace ne soit pas sollicité avant que quelque chose soit parti.

## Pour les comptables

Un comptable qui regarde dans les livres d'un client voit le tableau de bord comme le client le vit : les parties en marche et ce qui demande là de l'attention. Les étapes de configuration, les interrupteurs de modules et les nouvelles du produit s'en vont, car la configuration est le travail du propriétaire, pas celui du comptable.

## Chiffres : la vue d'analyse

Les chiffres profonds de l'ancien tableau de bord se trouvent ici, déplacés sans changement. La page est une vue unique et défilante ; un bloc n'apparaît que si vos données le réclament.

## Sélecteur de période

Chaque chiffre de la rangée KPI et des calculs de rythme suit la période choisie. Vous choisissez entre **mois**, **trimestre** et **année**. Le graphique de tendance reste toujours large de 12 mois, pour que la comparaison reste honnête.

## Rangée KPI

La rangée KPI montre toujours cinq tuiles. Chaque tuile montre un chiffre principal, une comparaison avec la période comparable précédente quand une comparaison honnête existe, et une petite courbe de tendance. Les tuiles renvoient au rapport ou à la liste correspondants.

| Tuile | Ce que vous voyez |
|---|---|
| **Trésorerie** | Position actuelle de trésorerie, depuis un compte bancaire relié ou un solde estimé, plus la marge hebdomadaire |
| **À recevoir** | Factures ouvertes, avec la part en retard mentionnée à part |
| **Chiffre d'affaires** | Chiffre d'affaires sur la période choisie et le rythme pour toute la période, avec l'évolution par rapport à la période comparable précédente |
| **À payer** | L'argent qu'il vous reste à décaisser, avec la part en retard mentionnée à part |
| **Bénéfice** | Bénéfice net sur la période choisie, avec la marge quand elle se calcule |

### Tuile du solde

La tuile **Trésorerie** montre, près de votre solde, ce qui est déjà engagé. Ce sont deux lignes :

- **Réservé à la TVA** - le solde trimestriel positif qui devrait déjà être mis de côté
- **Charges fixes par mois** - vos charges fixes mensuelles

La ligne finale montre **Librement disponible** : ce qui reste effectivement après ces réserves. La réserve de TVA suit la même logique de trimestre que la carte de TVA, pour que les déclarants mensuels et les déclarants précoces ne voient pas soustraire le mauvais montant.

Le solde compte vos comptes professionnels : un compte privé relié reste en dehors de la position de trésorerie et de la prévision. Ses retraits, possibles dépenses professionnelles, sont nommés séparément dans les lignes à traiter, pour que le chiffre ici corresponde à la banque dans la comptabilité et au badge sur les transactions.

Une tuile sans historique honnête ne rend pas de courbe de tendance, au lieu d'inventer une ligne plate. La couleur d'un badge suit le sens, pas seulement la direction : des créances qui montent sont une mauvaise nouvelle, même si la flèche pointe vers le haut.

La rangée KPI montre des mouvements de trésorerie ; la tuile **Bénéfice** et le bloc de tendance calculent selon une vue bénéfices et pertes. Dans cette vue, les dépenses sont sans TVA, les investissements s'étalent sur leur plan d'amortissement, et les brouillons encore en révision restent dehors. Utilisez le rapport P&L si vous voulez le même chiffre de bénéfice dans un rapport détaillé.

## Pour vous

Le bloc **Pour vous** est un tableau de tâches et de signaux personnel sur le tableau de bord. Il garde les actions suivantes les plus pertinentes en un seul endroit, sans remplacer le panneau complet de la cloche ni le widget d'attention.

Il regroupe :

- **Toutes les tâches** - tout ce qui, dans l'espace de travail, demande votre attention
- **En retard** (`{n} en retard`) - factures, factures d'achat ou autres éléments en retard
- **Aujourd'hui** (`{n} aujourd'hui`) - les éléments qui arrivent à échéance aujourd'hui
- **Ouvertes** (`{n} ouvertes`) - éléments encore en attente
- **E-mails** (`{n} e-mails`) - conversations non lues
- **Rendez-vous** (`aucun rendez-vous | {n} rendez-vous`) - réservations à venir

Chaque ligne montre le type d'élément (facture, conversation, rendez-vous, etc.) et un lien direct pour l'ouvrir. Quand il n'y a rien à faire, le bloc montre **Rien à traiter.** Si le chargement échoue, un bouton de nouvelle tentative est offert.

## Widget d'attention

Le widget d'attention est alimenté par le moteur de signaux Vandaag. Il montre jusqu'à quatre tâches qui demandent une action aujourd'hui ou cette semaine. Chaque ligne montre un point de gravité, un court titre et un lien vers l'élément concerné. Le widget ne montre que les tâches ; il ne contient pas la liste complète classée, ni les pastilles d'explication, ni les boutons d'action. Cette liste complète se trouve dans le panneau de la cloche.

Le moteur Vandaag classe les signaux en quatre niveaux de gravité :

- **critical** : l'argent s'enfuit ou une échéance dure se rapproche
- **attention** : une vraie tâche, aujourd'hui ou cette semaine
- **upcoming** : datée, mais pas encore urgente
- **good** : bonne nouvelle méritée

Le moteur est déterministe. Aucun modèle ne produit les signaux, donc la page reste utile quand la couche IA est hors service.

### Puces d'action

Certaines lignes d'attention portent une puce d'action, par exemple pour envoyer un rappel de paiement. Le premier appui sur une puce qui demande une confirmation l'arme et montre le texte **Sûr ? Appuyez encore** ; seul le deuxième appui exécute l'action. Si un deuxième appui n'arrive pas dans les cinq secondes, la puce se désarme toute seule. Ainsi un appui égaré ne peut pas envoyer par accident un e-mail à un client.

## Blocs de soutien

Les blocs au-dessous de la rangée KPI n'apparaissent que s'ils méritent leur place. Le catalogue décide autant de si un bloc s'affiche que de la forme qu'il reçoit.

| Bloc | Contenu |
|---|---|
| **Tendance** | Graphique 12 mois, revenus et coûts côte à côte, avec la ligne de bénéfice |
| **Âge des créances** | Créances à répartir par tranches d'âge |
| **Sources de revenus** | Plus gros clients selon le chiffre d'affaires de l'année en cours |
| **Devis** | Pipeline des devis ouverts et devis qui expirent |
| **Mix des dépenses** | Répartition des coûts par catégorie, sous forme de barres |
| **Graphique de trésorerie** | Position de trésorerie sur 12 mois avec prévision |
| **Activité** | Événements récents de facture, de paiement et de dépense |
| **Carte TVA** | Période de TVA actuelle, avancement de la liste de contrôle et prochaine échéance |

Sur les téléphones, les grandes formes visuelles retombent sur des formes plus simples, pour que les chiffres restent lisibles.

## Chargement et états d'erreur

Un squelette dessine la forme finale de la vue, pour que la page ne se décale jamais sous vos yeux. Si le chargement de **Mijn bedrijf** échoue, la page dit ce qui cloche et porte un bouton de nouvelle tentative, au lieu d'un tout-va-bien bâti sur des données vides. Si le contenu des cartes échoue pendant que la vue d'ensemble est bien arrivée, chaque carte retombe sur la phrase de son statut. Sur **Chiffres**, une erreur porte le même bouton de nouvelle tentative, et un changement de période qui rate pendant que des chiffres plus anciens sont à l'écran montre un avis d'obsolescence avec une nouvelle tentative en ligne. Le bloc **Pour vous** suit le même comportement explicite d'erreur et de nouvelle tentative quand son aperçu ne peut pas se charger.

## Voir aussi

- [Utiliser le tableau de bord](/fr/faq/use-dashboard)
- [Rapports](/fr/features/reports)
- [Clients](/fr/features/customers)
- [Factures](/fr/features/invoices)
- [TVA](/fr/features/vat)