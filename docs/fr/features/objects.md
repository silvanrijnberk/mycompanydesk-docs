---
title: Objets et actifs
---

# Objets et actifs

Suivez les biens locatifs, vehicules, equipements et autres actifs professionnels avec une gestion complete du cycle de vie.

::: info
Le module objets est optionnel. Activez-le dans **Entreprise > Fonctionnalites** si vous ne le voyez pas dans la navigation.
:::

## Vue d'ensemble

Le module objets est concu pour les entreprises qui gerent des actifs physiques -- en particulier les societes de location, les gestionnaires de biens immobiliers et les services de location d'equipements. Chaque objet represente un actif que vous possedez ou gerez.

## Types d'objets

| Type | Cas d'utilisation |
|---|---|
| **Propriete** | Appartements locatifs, bureaux, locaux commerciaux |
| **Vehicule** | Voitures, camions, utilitaires, vehicules de chantier |
| **Machine** | Equipements industriels, outils, generateurs |
| **Autre** | Tout autre type d'actif |

## Statuts des objets

| Statut | Description |
|---|---|
| **Disponible** | Pret a etre loue ou utilise |
| **Loue** | Actuellement loue a un client |
| **Inactif** | Non disponible (maintenance, retire) |

## Creer un objet

1. Allez dans **Objets > Nouvel objet**
2. Remplissez :
   - **Nom** -- Un identifiant clair (par ex., "Appartement 3B" ou "Pelleteuse CAT 320")
   - **Type** -- Propriete, Vehicule, Machine ou Autre
   - **Statut** -- Disponible, Loue ou Inactif
   - **Description** -- Details sur l'actif
3. Cliquez sur **Enregistrer**

## Page de detail de l'objet

La page de detail affiche :

- Informations sur l'actif et son type
- Statut actuel
- **Historique WOZ** (pour les Proprietes) — valeurs WOZ annuelles utilisees par le calcul Box 3
- Contrats lies
- Historique de location
- Factures associees

### Resume des contrats

Au-dessus de la liste des contrats, une barre de synthese donne un apercu rapide de l'etat contractuel de l'objet :

- **Total des contrats** lies a cet objet
- **Contrats signes** — combien ont ete integralement signes
- **Total mensuel actif** — valeur mensuelle combinee de tous les contrats actifs, normalisee a partir de contrats a frequences differentes (hebdomadaire, trimestrielle, annuelle)

### Historique WOZ (objets de type Propriete)

Pour les objets de type **Propriete**, la page de detail inclut une section d'historique WOZ. Les valeurs WOZ (Waardering Onroerende Zaken) sont les valeurs immobilieres fixees par la municipalite et utilisees dans le calcul de l'impot neerlandais Box 3.

- **Consultez** les valeurs WOZ annuelles par annee.
- **Ajoutez** de nouvelles valeurs en saisissant l'annee et la valeur WOZ attribuee par la municipalite.
- Box 3 utilise la valeur WOZ avec date de reference au 1er janvier. Saisissez la valeur applicable au debut de cette annee fiscale.
- Si aucune valeur n'est encore saisie, la section affiche un etat vide vous invitant a ajouter la premiere.

### Statut de signature des contrats

Chaque ligne de contrat sur la page de detail de l'objet affiche desormais un badge de statut de signature a cote du badge actif/en pause. Les couleurs suivent la meme correspondance que sur la page de detail du contrat :

- **Signe** (vert) — toutes les parties ont signe
- **Partiellement signe** (bleu) — certaines parties ont signe, d'autres non
- **Envoye** (jaune) — l'invitation a signer a ete envoyee, pas encore de signatures
- **Expire** ou **Resilie** (rouge) — la demande de signature n'est plus valable

Les contrats integralement signes affichent une petite icone en forme d'oeil qui ouvre un apercu integre du document signe. Vous pouvez ainsi lire le contrat finalise sans quitter la page de l'objet.

Les contrats herites crees avant l'ajout de la signature electronique n'affichent pas de badge de signature. Le systeme detecte les contrats herites de la meme maniere que sur la page de detail du contrat : un contrat doit avoir des parties signataires, un modele ou du contenu de signature pour afficher un badge.

## Lier les objets aux contrats et factures

Les objets s'integrent aux autres fonctionnalites de MyCompanyDesk :

- **Contrats** -- Creez un contrat de location pour un objet, en specifiant le locataire (client) et les conditions
- **Factures** -- Les factures peuvent etre marquees comme factures de location et liees aux objets
- **Factures recurrentes** -- Configurez une facturation mensuelle automatique par objet

## Filtrage

Filtrez vos objets par :

- **Type** -- Propriete, Vehicule, Machine, Autre
- **Statut** -- Disponible, Loue, Inactif
- **Recherche** -- Trouvez par nom ou description

## Actions groupees

- **Changer le statut** -- Mettez a jour la disponibilite en masse
- **Archiver** -- Deplacez vers les archives
- **Supprimer** -- Supprimez des objets

## Conseils

- Utilisez le filtre de statut pour voir rapidement quels actifs sont disponibles a la location
- Liez chaque facture de location a son objet pour un suivi financier complet par actif
- Configurez des contrats avec recurrence pour la facturation automatique des loyers
- Consultez les indicateurs d'objets en haut de la page pour un apercu de la disponibilite
