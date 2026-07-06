---
title: Tableau de bord
---

# Tableau de bord

Le tableau de bord est votre page d'accueil. Il présente un briefing qui rassemble les points demandant votre attention, les indicateurs financiers clés et l'activité récente dans une seule vue déroulante.

## Disposition

Le tableau de bord a une disposition de briefing fixe : il n'y a pas de réglages pour réorganiser ou masquer des cartes individuelles, et chaque utilisateur de l'espace de travail voit la même structure, alimentée par les mêmes données en direct. Le contenu s'adapte toutefois à votre situation : un compte tout neuf voit un écran d'accueil, la carte des marges par projet n'apparaît que lorsque la fonctionnalité projets est activée pour votre espace de travail, et les bannières de rappel peuvent être fermées par navigateur.

### Écran d'accueil

Sur un compte tout neuf, sans factures ni clients, le tableau de bord affiche un écran d'accueil à la place du briefing complet. Il vous guide vers trois premières actions essentielles : créer une facture, ajouter un client ou enregistrer une dépense. Un lien vers la documentation de [démarrage](/fr/getting-started/introduction) se trouve sous les cartes d'action. Dès qu'au moins une facture ou un client existe, l'écran d'accueil disparaît définitivement et le tableau de bord complet prend le relais.

### Premier chargement

Pendant le chargement des données, le tableau de bord affiche un placeholder qui reflète la forme finale de chaque carte, pour que rien ne saute. Une fois les données arrivées, le tableau de bord apparaît en fondu.

Le tableau de bord se compose de :

- un panneau **hero** avec une salutation, le briefing IA et le contexte de période
- une rangée **pulse** de quatre KPI : liquidité/autonomie, chiffre d'affaires (mois + cumul annuel), créances + DSO, et solde TVA + échéance
- un **fil de briefing** avec quatre onglets : **Tout**, **Maintenant** (demande votre attention), **Cette semaine** (à venir) et **Bonnes nouvelles** (confirmations)
- un **graphique de trésorerie** sur une fenêtre de 12 mois avec réel + prévision
- une **carte semaine**, une liste de **marges par projet**, une liste des **meilleurs clients**, un **fil d'activité** et un **anneau TVA**
- une **bannière de configuration** qui reste affichée tant que l'assistant de configuration n'est pas terminé

## Hero

Le haut de la page vous accueille avec une salutation selon l'heure de la journée. Le briefing IA est la pièce maîtresse du hero : un briefing court, personnel, rédigé par IA, qui synthétise la situation complète de votre entreprise.

Le briefing IA parle à la première personne et s'adresse directement à vous. Il s'ouvre sur l'action la plus urgente du jour, puis ajoute au plus un ou deux points d'appui là où ils apportent de la valeur. Il se termine par une prochaine étape suggérée dans l'application (par exemple envoyer un rappel à un client précis, ou terminer votre déclaration de TVA). Il puise dans un condensé complet de signaux en direct : liquidité et autonomie, chiffre d'affaires et bénéfice (mois + cumul annuel), créances en retard (nombre, total, pire client), factures fournisseurs (échéance proche + en retard), nombre de brouillons, marges par projet, position TVA (solde, échéance, progression de la checklist, réserve), heures non facturées, paiements récents et nouveaux clients. Tous les montants sont arrondis à l'euro entier.

Pendant que le briefing IA se charge encore, le hero affiche le résumé standard mis en cache de la veille, puis passe en douceur à la version IA. Le briefing IA apparaît avec une icône étincelle.

Le briefing IA est disponible sur tous les plans et dans les quatre langues prises en charge. Il est généré une fois par jour calendaire par entreprise et mis en cache pour le reste de la journée. Si le briefing ne peut pas être généré, le résumé standard est affiché à la place.

Le hero affiche également le libellé de période (le mois par défaut).

## Rangée pulse

Les quatre cellules de la rangée pulse présentent des indicateurs ciblés avec leur contexte :

| Cellule | Ce qu'elle affiche |
|---|---|
| **Liquidité** | Solde actuel (réel quand une connexion bancaire est active, estimé sinon), plus l'autonomie en semaines |
| **Chiffre d'affaires** | Chiffre d'affaires du mois en cours avec le pourcentage par rapport au mois précédent, plus le cumul annuel |
| **Créances** | Total des encours, nombre en retard et délai moyen de paiement |
| **TVA** | Solde (à récupérer ou à payer), date d'échéance et réserve fiscale |

## Fil de briefing

Le fil est la surface d'attention principale. Il assemble des signaux réels issus des données de l'espace de travail en une liste structurée avec quatre vues par onglet, en commençant par **Tout** (l'ensemble combiné) :

- **Maintenant.** Éléments qui demandent une action aujourd'hui : factures en retard, factures fournisseurs en retard, reçus ouverts, brouillons de factures en attente d'envoi et éléments de la checklist TVA.
- **Cette semaine.** Éléments à échéance dans la semaine à venir : factures qui arrivent à échéance, factures fournisseurs à payer et échéances de TVA.
- **Bonnes nouvelles.** Confirmations : factures récemment payées, croissance du chiffre d'affaires et nouveaux clients ce mois-ci.

Chaque élément du fil affiche l'entité, le montant et un détail contextuel. Le fil s'ouvre depuis une barre d'onglets ancrée en haut de la liste.

## Colonne de droite et rangée du bas

| Carte | Contenu |
|---|---|
| **Trésorerie (12 mois)** | Un graphique linéaire avec la position de trésorerie réelle jusqu'à aujourd'hui et une prévision jusqu'à la fin du mois. Nécessite suffisamment d'historique pour générer la projection. |
| **Carte semaine** | Heures enregistrées cette semaine. |
| **Marges par projet** | Tous les projets avec du chiffre d'affaires, triés par pourcentage de marge, avec un code couleur vert/orange/rouge. Affichée quand la fonctionnalité projets est activée. |
| **Meilleurs clients** | Meilleurs clients par chiffre d'affaires cette année, avec le pourcentage du total. |
| **Activité récente** | Événements : facture créée, facture payée, dépense ajoutée. |
| **Anneau TVA** | Période de déclaration TVA en cours, progression de la checklist et nombre de reçus ouverts. Renvoie vers la déclaration de TVA. |

## Bannière de configuration

Tant que l'assistant de configuration a encore des champs à remplir, une bannière s'affiche au-dessus du tableau de bord avec le nombre de champs en attente et un bouton **Reprendre la configuration**. Elle comporte un bouton de fermeture qui la masque dans votre navigateur jusqu'à ce que l'assistant soit terminé, même après un rechargement. L'assistant est non bloquant : les nouvelles inscriptions arrivent directement sur le tableau de bord et ne sont pas forcées à le suivre.
