---
title: Enregistrement du temps
---

# Enregistrement du temps

Enregistrez vos heures de travail par projet et par client pour suivre le temps facturable et generer des factures a partir des entrees de temps.

## Vue d'ensemble

L'enregistrement du temps vous aide a :

- Suivre combien d'heures vous consacrez a chaque projet
- Calculer le temps facturable vs. non facturable
- Generer des factures directement a partir des heures enregistrees
- Comprendre votre taux horaire effectif

## Enregistrer du temps

### Creer une entree de temps

1. Allez dans **Enregistrement du temps**
2. Cliquez sur **Ajouter une entree** (ou le bouton + sur mobile)
3. Remplissez :
   - **Date** -- Quand le travail a ete effectue
   - **Heures** -- Duree du travail
   - **Projet** -- A quel projet le temps est destine
   - **Client** -- Le client (rempli automatiquement a partir du projet)
   - **Description** -- Ce sur quoi vous avez travaille
   - **Facturable** -- Si ce temps doit etre facture
   - **Taux horaire** -- Votre tarif pour ce travail
4. Cliquez sur **Enregistrer**

### Description par defaut

Lorsque vous ajoutez une entree de temps, le champ de description est automatiquement prerempli a partir de la **description standard** (Standaard regelomschrijving) de votre espace de travail. Le systeme verifie dans l'ordre :

1. La description standard du projet
2. La description standard du client
3. La description standard de l'espace de travail

Votre propre saisie n'est jamais ecrasee. Des que vous tapez une description personnalisee, la valeur preremplie ne la remplace plus.

### Mode heures uniquement

Pour un suivi du temps simplifie, activez le mode heures uniquement dans les parametres. Cela masque le taux horaire et les champs de facturation, n'affichant que les heures et la description.

### Remplacements personnels

Chaque membre de l'equipe peut definir des valeurs par defaut personnelles pour l'enregistrement du temps dans **Mon compte > Temps et deplacements** (`/me/time-travel/time`). Lorsqu'une valeur personnelle est definie, elle a priorite sur la valeur par defaut de l'espace de travail. Si le champ reste vide, la valeur de l'espace de travail s'applique.

Les parametres suivants peuvent etre remplaces par personne :

| Parametre | Ordre de cascade |
|---|---|
| **Taux horaire** | Projet > Client > Personnel > Espace de travail |
| **Intervalle d'arrondi** | Personnel > Espace de travail |
| **Projet obligatoire** | Personnel > Espace de travail |
| **Description obligatoire** | Personnel > Espace de travail |
| **Description par defaut** | Personnel > Espace de travail |
| **Format de description facture** | Personnel > Espace de travail |
| **Frais de service** (description, montant, taux TVA) | Client > Personnel > Espace de travail |
| **Chronologie journaliere** (debut, fin, pause) | Personnel > Espace de travail |

Par exemple, si l'intervalle d'arrondi de l'espace de travail est de 15 minutes mais que vous preferez un arrondi de 30 minutes, definissez-le dans vos remplacements personnels. Vos entrees de temps seront arrondies a 30 minutes tandis que le reste de l'equipe reste a 15.

Les remplacements personnels sont enregistres automatiquement lors de la saisie. Un bouton d'effacement apparait a cote de chaque champ avec une valeur personnelle, vous permettant de revenir a la valeur par defaut de l'espace de travail.

## Facturer les entrees de temps

Convertissez les heures enregistrees en factures :

1. Filtrez les entrees de temps par client ou projet
2. Selectionnez les entrees que vous souhaitez facturer
3. Cliquez sur **Creer une facture**
4. Une nouvelle facture est pre-remplie avec les lignes correspondant aux entrees de temps selectionnees
5. Verifiez et envoyez

### Parametres de facturation automatique

Configurez la facturation automatique pour les entrees de temps :

1. Allez dans les parametres d'enregistrement du temps
2. Configurez les regles de facturation automatique
3. Les entrees de temps correspondant aux regles sont automatiquement ajoutees aux factures

## Filtrage

Filtrez vos entrees de temps par :

- **Client** -- Voir le temps par client
- **Projet** -- Voir le temps par projet
- **Plage de dates** -- Periode specifique
- **Statut facturable** -- Facturable vs. non facturable
- **Statut de facturation** -- Facture vs. non facture

## Actions groupees

- **Marquer comme facturable** -- Definir plusieurs entrees comme facturables
- **Creer une facture** -- Facturer plusieurs entrees a la fois
- **Archiver** -- Deplacer les entrees vers les archives
- **Supprimer** -- Supprimer des entrees

## Conseils

- Enregistrez le temps quotidiennement pour des archives precises
- Utilisez le filtre par projet pour voir les totaux de temps par projet
- Verifiez regulierement le temps non facture pour eviter de manquer des heures facturables
- Le profil de tableau de bord base sur les projets met en avant les indicateurs de suivi du temps
