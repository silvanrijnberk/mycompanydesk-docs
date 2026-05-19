---
title: Tableau de bord
---

# Tableau de bord

Le tableau de bord est votre page d'accueil dans MyCompanyDesk. Il vous offre une vue d'ensemble de vos finances, alertes et actions rapides.

## Profils de tableau de bord

MyCompanyDesk propose des profils de tableau de bord bases sur les roles, qui adaptent les indicateurs et les cartes affiches a vos besoins :

| Profil | Orientation |
|---|---|
| **Proprietaire / Directeur** | Tresorerie, rentabilite, vue d'ensemble |
| **Comptable / Expert-comptable** | TVA, conformite, pistes d'audit, verrouillage des periodes |
| **CC (Facturation)** | Indicateurs de facturation, paiements en attente |
| **CF (Achats)** | Suivi des depenses, gestion des fournisseurs |
| **Freelance** | Facturation et suivi des revenus simplifie |
| **Conformite TVA** | Calculs TVA, echeances, declarations |
| **Base sur les projets** | Rentabilite des projets, suivi du temps |
| **Croissance / Operations** | Tendances de revenus, acquisition de clients |

### Changer de profil

1. Ouvrez le tableau de bord
2. Cliquez sur le selecteur de profil en haut
3. Choisissez le profil qui correspond le mieux a votre role

Chaque profil affiche differentes cartes d'indicateurs, alertes et actions rapides pertinentes pour ce role.

## Sections du tableau de bord

### Dashboard Hero

En haut du tableau de bord se trouve un panneau de synthese avec les trois tuiles financieres (chiffre d'affaires, depenses, resultat net) et, le cas echeant, des alertes de conformite.

**Tuiles financieres**

- **Chiffre d'affaires** : Chiffre d'affaires de la periode avec une tendance en pourcentage par rapport a la periode precedente. Vert lorsque le CA est positif.
- **Depenses** : Depenses de la periode avec tendance. La fleche est inversee pour qu'une baisse des depenses s'affiche en vert.
- **Resultat net** : CA moins depenses, vert si positif, rouge si negatif.

Chaque tuile renvoie vers la vue correspondante : CA vers les rapports avec lentille `revenue`, depenses vers `/expenses`, resultat net vers `/reports/pnl`.

**Conformite**

Lorsque votre espace de travail gere les declarations de TVA et le seuil d'heures, la hero affiche egalement :

- **Echeance TVA** : Declaration dans {days} jours, a rendre aujourd'hui, ou en retard de {days} jours, avec le solde. Lie vers `/vat`.
- **Seuil d'heures** : Progression actuelle en pourcentage et heures restantes. Lie vers `/dashboard?settings=compliance`.

Si aucun chiffre n'est disponible pour la periode, la hero affiche un etat vide avec "Aucune activite" et "Pas encore de chiffres pour cette periode."

### Alertes

Elements critiques necessitant votre attention :

- Factures en retard
- Echeances TVA a venir
- Contrats arrivant a expiration
- Alertes de tresorerie faible
- Depenses importees de la banque a verifier

### Indicateurs cles

Cartes de synthese affichant vos chiffres les plus importants :

- Chiffre d'affaires total (periode en cours)
- Factures en attente
- Total des depenses
- Benefice / perte net(te)
- Devis ouverts

### Selection de la periode

Basculez entre differentes periodes pour consulter vos indicateurs :

- Cette semaine / ce mois / ce trimestre / cette annee
- Plage de dates personnalisee
- Comparaison avec les periodes precedentes

### Actions rapides

Raccourcis vers vos taches les plus courantes :

- Creer une nouvelle facture
- Ajouter une depense
- Enregistrer une entree de temps
- Consulter les rapports

### Activite recente

Un fil d'evenements recents dans votre espace de travail :

- Factures envoyees et payees
- Depenses ajoutees
- Clients crees
- Actions des membres de l'equipe

## Carte d'accueil

Tant que l'assistant de configuration sous `/setup` a encore des champs a remplir, un `FinishSetupBanner` s'affiche en haut du tableau de bord avec un decompte des champs en attente et un bouton **Continuer**. La banniere a maintenant un bouton de fermeture (icone X) qui la masque par navigateur via localStorage, la maintenant masquee d'un rechargement a l'autre jusqu'a ce que l'assistant soit termine. L'ancienne carte d'accueil a ete supprimee; cette banniere la remplace. L'assistant est non bloquant : les nouvelles inscriptions arrivent directement sur `/dashboard` et ne sont pas redirigees de force.
