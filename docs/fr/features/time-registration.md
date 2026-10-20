---
title: Agenda
description: "Saisissez vos heures, planifiez vos journées et transformez le temps facturable en factures. Agenda réunit le suivi du temps et votre calendrier."
last_verified: 2026-10-01
---

# Agenda

Enregistrez vos heures de travail, planifiez vos journées et transformez le temps facturable en factures. La page **Agenda** dans la barre latérale combine l'enregistrement du temps avec un agenda : vous voyez le plan du jour, les entrées planifiées à côté des heures enregistrées et des suggestions issues de vos calendriers connectés, le tout au même endroit.

## La page en un coup d'œil

Passez d'une vue à l'autre avec le sélecteur en haut (balayez entre les périodes sur mobile) :

- **Jour** : le plan et les heures enregistrées du jour. Selon vos réglages, vous voyez une chronologie ou une liste compacte, avec les entrées planifiées séparées des entrées enregistrées. Les événements de vos calendriers connectés apparaissent à côté de vos entrées et se convertissent en entrées de temps d'un simple appui, et vous recevez des suggestions basées sur votre activité récente.
- **Semaine** : sur ordinateur, un planning sur sept jours où les blocs pleins sont des heures enregistrées et les blocs hachurés des heures planifiées ; cliquez sur un créneau vide pour ajouter une entrée. Sur mobile, un résumé par jour à explorer d'un appui.
- **Mois** : les totaux par jour ; sélectionnez un jour pour y accéder.
- **Liste** : un tableau consultable de toutes les entrées avec des filtres par statut de facturation, client, projet et déplacements, plus les totaux de la sélection en cours.

Les heures comptent comme travaillées immédiatement. Il n'y a plus d'étape de confirmation ni de réglage de confirmation automatique, donc rien n'attend votre comptabilité : une saisie fait partie de vos heures travaillées dès qu'elle existe, et dans un espace avec une équipe, c'est pareil pour tout le monde.

Du temps que vous voulez placer dans le planning pour un jour qui reste à venir passe par l'écran **Heures pour le {date}** : **Saisir les heures** l'enregistre, et l'écran dit qu'il compte automatiquement une fois la date passée, prêt pour la facture à ce moment-là. Rien à confirmer. Une saisie faite sur un jour à venir en dehors de ce chemin est signalée : elle compte comme travaillée tout de suite, sauf si vous la marquez comme **Entrée provisoire** sur la saisie elle-même ; c'est la seule façon de tenir du temps hors des heures travaillées, et seulement pour aujourd'hui ou plus tard. Les entrées provisoires apparaissent à part des heures enregistrées dans les vues jour et semaine.

Les totaux ne comptent que les heures parties comme travaillées. Les entrées provisoires pour un jour qui reste à venir restent hors des totaux d'heures du tableau de bord, des rapports (**Heures enregistrées**), de **Travail et temps** et hors de la facturation automatique, tant que le jour n'est pas passé ; le panneau latéral énonce cette base. Le compteur du critère d'heures pour l'impôt sur le revenu suit sa propre base, indiquée sous le compteur : uniquement vos propres heures travaillées plus le temps de trajet, ce chiffre peut donc différer des totaux ici.

## Enregistrer du temps

### Minuteur

Sur mobile, la vue Jour comprend un minuteur : lancez-le quand vous commencez à travailler et arrêtez-le pour enregistrer le temps écoulé comme entrée.

### Entrées manuelles

1. Cliquez sur **Ajouter une entrée** (raccourci clavier A, ou le bouton + sur mobile)
2. Le panneau de saisie rapide s'ouvre : choisissez le client et éventuellement un projet, saisissez vos heures et ajustez la description et le tarif si nécessaire
3. Saisissez le temps en nombre total d'heures, ou passez à une heure de début et de fin
4. Enregistrez l'entrée

Une entrée couvre une seule journée et dure au maximum 24 heures ; répartissez votre semaine sur plusieurs jours.

### Description de ligne par défaut

Lors de l'ajout d'une entrée de temps, le champ de description est prérempli automatiquement à partir de vos descriptions de ligne par défaut. Le système vérifie dans l'ordre :

1. La description de ligne par défaut du projet
2. La description de ligne par défaut du client
3. La valeur par défaut de l'espace de travail

Votre propre saisie n'est jamais écrasée. Dès que vous tapez une description personnalisée, la valeur préremplie ne la remplace plus.

### Mode heures uniquement

Vous préférez n'enregistrer qu'un total par jour ? Activez le **Mode heures uniquement** dans les paramètres de l'agenda. Il masque la chronologie et les champs d'heure de début et de fin : vous saisissez uniquement le total d'heures par jour. Le tarif et le champ facturable restent disponibles.

## Facturer vos heures

Le tarif affiché pour chaque entrée de temps est le **tarif horaire effectif** de cette entrée. Si l'entrée a son propre tarif horaire, c'est celui-ci qui est utilisé ; sinon on revient au tarif du projet, puis au tarif du client, et enfin au tarif par défaut de l'espace de travail. Le montant de la ligne sur une facture reflète donc toujours le tarif réel stocké avec l'entrée.

L'entrée elle-même montre quel tarif s'appliquera. L'entrée n'a pas de tarif à elle ? Alors la carte indique **Tarif horaire du projet**, et les totaux de la liste comptent ce tarif du projet pour ces entrées. Une fois une entrée facturée, elle affiche le tarif réellement facturé : celui de la ligne de facture, pas celui que le projet pratique aujourd'hui. Dans la fenêtre d'édition, un indice apparaît quand le tarif est vide : la facture utilisera le tarif du projet.

### Créer une facture depuis la page Agenda

Lorsque vous avez des entrées non facturées, cliquez sur **Créer une facture**. Un panneau s'ouvre où vous choisissez un client ; il liste toutes les entrées non facturées de ce client avec leur total. Confirmez, et un brouillon de facture est créé avec une ligne par entrée. Le temps de trajet et les frais de déplacement facturables liés à ces entrées sont ajoutés en lignes séparées.

### Choisir des entrées individuelles dans le formulaire de facture

Vous ne voulez facturer qu'une partie des entrées ? Créez ou modifiez directement une facture : le formulaire de facture comporte une section temps qui liste les entrées non facturées du client sélectionné, pour choisir précisément lesquelles inclure.

### Descriptions de ligne sur la facture

Les lignes de facture sont décrites automatiquement : d'abord la description de l'entrée elle-même, sinon le nom du projet, sinon la période. Un modèle de description par client (défini sur la page du client) remplace ce format.

### Facturation automatique du temps

La facturation automatique se règle par projet. Sur la page d'un projet, vous choisissez comment ses heures sont facturées :

- **Manuel** (le réglage par défaut) : vous créez la facture vous-même à partir des heures du projet.
- **À jour fixe** : vous choisissez le rythme du projet : chaque semaine un jour de la semaine, ou chaque mois un jour du mois. Les heures enregistrées jusqu'à la précédente date de facturation incluse, plus les dépenses refacturées, partent sur une facture pour le client du projet. Le mois est facturé au jour choisi, jusqu'au 28, ou au dernier jour du mois, pour que les mois courts ne sautent jamais.
- **À l'achèvement** : quand vous marquez le projet comme terminé, tout ce qui reste ouvert part sur une facture finale pour le client.

Si le projet relève d'un contrat qui facture lui-même, c'est ce contrat qui décide, et la page du projet le dit ; un tel projet ne reçoit pas son propre rythme.

Sur la page du client, la carte **Facturation automatique** réunit tout : chaque projet de ce client avec son choix, un interrupteur pour les heures sans projet, et votre préférence d'envoi :

- **Préparer** : la facture est créée pour vous, vous recevez une notification et vous l'envoyez vous-même.
- **Envoyer automatiquement** : la facture est créée, vous recevez une notification, et un jour plus tard elle part d'elle-même vers le client. Pendant cette journée, vous pouvez encore la retenir ; une facture retenue reste simplement prête dans l'application.

Tout ce qui arrive à échéance pour le même client au même moment atterrit sur une seule facture, sauf si un projet demande la sienne propre. Les heures sans projet rejoignent la même facture quand l'interrupteur de la carte client est activé ; la carte règle leur jour avec la même liste que celle des projets. La première facture automatique gagne à être envoyée par vous-même, pour avoir vu une fois à quoi elle ressemble ; la carte le rappelle aussi, la première fois.

Tout ce qui sort de l'ordinaire retient l'envoi automatique : un client sans adresse e-mail, des heures sans tarif, un montant nettement au-dessus des mois précédents, ou une facture qui couvre une période plus longue parce que la facturation automatique a été en pause. Ces factures sont seulement préparées, et la notification vous dit pourquoi.

Les dépenses ne sont incluses que si la dépense elle-même porte l'interrupteur [Refacturer au client](/fr/features/expenses#refacturation-et-changements-de-prix-de-revient).

La facturation automatique fait partie de l'abonnement Office. Sur Desk, elle reste en pause jusqu'à ce que vous repassiez à Office ; la carte et la notification vous le disent. Les factures automatiques utilisent le taux de TVA par défaut de votre espace de travail et respectent vos paramètres KOR ou d'exemption de TVA, comme les factures créées manuellement.

## Actions groupées

Sélectionnez plusieurs entrées dans la vue Liste (appui long sur mobile) pour agir en une fois. Pendant la sélection, une colonne de cases à cocher figure dans la liste, et toucher la ligne elle-même la coche pendant une sélection ; hors sélection, il n'y a pas de colonne de cases.

- **Marquer comme facturable** ou **Marquer comme non facturable**
- **Archiver**
- Supprimer

## Synchronisation de calendrier externe

Connectez Google Agenda ou le calendrier Outlook pour réunir votre agenda et vos heures. Ouvrez les paramètres de l'agenda via **Paramètres** › **Heures et agenda** ou la roue dentée sur la page Agenda, et choisissez **Connecter un agenda (Google ou Outlook)**. Vous pouvez aussi aller directement à la page des calendriers connectés. Vous pouvez y :

- Connecter **Google Agenda** ou **Calendrier Outlook**
- Activer la synchronisation par connexion avec **Activer la synchronisation**
- Choisir la **Direction de synchronisation** : **Vers le calendrier** (vos heures enregistrées apparaissent dans votre calendrier), **Depuis le calendrier** (vos événements apparaissent sur la page Agenda, prêts à être enregistrés) ou **Les deux**
- Activer un flux en lecture seule **Abonnement calendrier (iCal)** pour suivre vos heures enregistrées depuis n'importe quelle application de calendrier

Les événements provenant d'un calendrier connecté apparaissent dans les vues Jour et Semaine ; appuyez sur l'un d'eux pour le transformer en entrée de temps.

## Rendez-vous en ligne et heures

Les rendez-vous que les clients réservent via le bloc de rendez-vous de votre site web sont automatiquement placés dans votre agenda une fois approuvés. Un rendez-vous en ligne confirmé compte également comme heures travaillées dans Agenda, vous n'avez donc pas à les saisir séparément. Ces heures ne sont **pas facturables** via Agenda ; le revenu du rendez-vous est facturé séparément depuis le rendez-vous lui-même. Voir [Rendez-vous en ligne](/fr/features/site-bookings) pour configurer vos heures réservables.

## Paramètres

Les paramètres de l'agenda se trouvent sous **Paramètres** › **Heures et agenda** ou via la roue dentée sur la page Agenda. Vous y configurez :

- **Comportement de saisie** : **Mode heures uniquement**
- Les heures de travail affichées sur la chronologie
- Le **Tarif horaire par défaut** et l'**Arrondi du temps** (administrateurs)
- **Déplacements chez les clients** : adresses, mode de transport par défaut, voiture (personnelle ou de société) et tarif kilométrique
- Un lien pour connecter un calendrier externe

Pour un déplacement dans le formulaire d'entrée, vous pouvez utiliser votre position actuelle comme point de départ, si votre appareil le permet.

## Conseils

- Enregistrez vos heures chaque jour pour des données fiables ; grâce aux suggestions, réenregistrer un travail récurrent ne prend qu'un appui
- Placez du temps pour les jours à venir comme entrées provisoires ; elles passent d'elles-mêmes en heures travaillées
- Vérifiez régulièrement le temps non facturé pour ne laisser passer aucune heure facturable
- Connectez votre calendrier une fois et vos rendez-vous deviennent automatiquement des entrées prêtes à enregistrer
