---
title: Tableau de bord
---

# Tableau de bord

Le tableau de bord sur `/dashboard` est votre page d'accueil. Il presente une mise en page fixe de briefing qui rassemble les points demandant votre attention, les indicateurs financiers cles et l'activite recente dans une seule vue deroulante.

## Architecture

Le tableau de bord est une page unique (`BriefingDashboard`) composee de blocs editoriaux fixes. Il n'y a pas de personnalisation par utilisateur. Tout le monde dans l'espace de travail voit la meme structure, alimentee par les memes donnees en direct.

La page se compose de :
- Un panneau **hero** avec salutation, texte d'introduction et contexte de periode
- Une rangee **pulse** de quatre KPI : liquidite/autonomie, CA (mois + annee), creances + DSO, et solde TVA + echeance
- Un **fil de briefing** divise en trois onglets : **Maintenant** (demande votre attention), **Cette semaine** (a venir), et **Bonnes nouvelles** (confirmations)
- Un **graphique de tresorerie** sur une fenetre de 12 mois avec reel + prevision
- Une **carte semaine**, une liste de **marges par projet**, une liste des **meilleurs clients**, un **fil d'activite** et un **anneau TVA**
- Une **banniere de configuration** qui reste visible tant que l'assistant sous `/setup` n'est pas termine

## Hero

En haut de la page, une salutation basee sur l'heure de la journee. Le texte d'introduction resume la situation actuelle : si quelque chose necessite une action aujourd'hui, le plus gros element en retard, le nombre de brouillons et la position de tresorerie.

La hero affiche egalement le libelle de periode (mois par defaut).

## Rangee pulse

Les quatre cellules de la rangee pulse remplacent les anciennes tuiles financieres et le bandeau KPI. Chaque cellule presente un indicateur cible avec son contexte :

| Cellule | Ce qu'elle affiche |
|---|---|
| **Liquidite** | Solde actuel (reel si une connexion bancaire est active, estime sinon), plus autonomie en semaines |
| **Chiffre d'affaires** | CA du mois en cours avec pourcentage par rapport au mois precedent, plus cumul annuel |
| **Creances** | Total des encours, nombre en retard, et delai moyen de paiement |
| **TVA** | Solde (a recuperer ou a payer), date d'echeance et reserve fiscale |

## Fil de briefing

Le fil est la surface d'attention principale. Il assemble des signaux reels provenant des donnees de l'espace de travail en une liste structuree avec trois vues par onglet :

- **Maintenant.** Elements necessitant une action aujourd'hui : factures en retard, depenses en retard, recus ouverts, brouillons de factures prets a etre envoyes, et elements de la checklist TVA.
- **Cette semaine.** Elements arrivant a echeance cette semaine : factures a echeoir, depenses a payer et echeances TVA.
- **Bonnes nouvelles.** Confirmations : factures recemment payees, croissance du CA et nouveaux clients ce mois-ci.

Chaque element du fil affiche l'entite, le montant et des details contextuels. Le fil s'ouvre depuis une barre d'onglets ancre en haut de la liste.

## Colonne de droite et rangee du bas

| Carte | Contenu |
|---|---|
| **Tresorerie (12 mois)** | Un graphique lineaire avec la position de tresorerie reelle jusqu'a aujourd'hui et une prevision jusqu'a la fin du mois. Necessite suffisamment d'historique pour generer la projection. |
| **Carte semaine** | Heures enregistrees cette semaine. |
| **Marges par projet** | Tous les projets avec chiffre d'affaires, tries par pourcentage de marge, codes couleur vert/orange/rouge. |
| **Meilleurs clients** | Meilleurs clients par CA cette annee, avec pourcentage du total. |
| **Activite recente** | Evenements : facture creee, facture payee, depense ajoutee. |
| **Anneau TVA** | Periode de declaration TVA en cours, progression de la checklist et nombre de recus ouverts. Lie vers la declaration TVA. |

## Banniere de configuration

Tant que l'assistant de configuration sous `/setup` a encore des champs a remplir, une `FinishSetupBanner` s'affiche en haut du tableau de bord avec un decompte des champs en attente et un bouton **Continuer**. La banniere a un bouton de fermeture (icone X) qui la masque par navigateur via localStorage, la maintenant masquee d'un rechargement a l'autre jusqu'a ce que l'assistant soit termine. L'assistant est non bloquant : les nouvelles inscriptions arrivent directement sur `/dashboard` et ne sont pas redirigees de force.
