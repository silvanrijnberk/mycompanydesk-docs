---
title: Objets et actifs
---

# Objets et actifs

Suivez les biens locatifs, véhicules, équipements et autres actifs professionnels avec une gestion complète du cycle de vie.

::: info
Le module objets (Vastgoed) est un module hérité. Il reste entièrement pris en charge pour les espaces de travail qui l'utilisent déjà, mais il ne peut plus être activé dans les nouveaux espaces de travail. Si votre espace de travail en dispose, son interrupteur se trouve sous **Paramètres > Onderdelen**.
:::

## Vue d'ensemble

Le module objets est conçu pour les entreprises qui gèrent des actifs physiques, en particulier les sociétés de location, les gestionnaires de biens immobiliers et les services de location d'équipements. Chaque objet représente un actif que vous possédez ou gérez.

## Types d'objets

| Type | Cas d'utilisation |
|---|---|
| **Propriété / Garage** | Maisons, garages, boxes de stockage |
| **Appartement** | Appartements locatifs |
| **Bureau** | Espaces de bureaux |
| **Commerce** | Boutiques et locaux commerciaux |
| **Véhicule** | Voitures, camions, utilitaires, véhicules de chantier |
| **Machine** | Équipements industriels, générateurs |
| **Équipement** | Outils et appareils |
| **Mobilier** | Mobilier que vous louez |
| **Électronique** | Ordinateurs, matériel audiovisuel |
| **Autre** | Tout autre type d'actif |

## Statuts des objets

| Statut | Description |
|---|---|
| **Actif** | En service |
| **Disponible** | Prêt à être loué ou utilisé |
| **Occupé** | Actuellement loué ou utilisé par un client |
| **Maintenance** | Temporairement hors service |
| **Inactif** | Non disponible |
| **Vendu** | Ne vous appartient plus ; conservé pour les archives |
| **Sorti** | Amorti ou mis au rebut |

La liste propose aussi un filtre **Loué** qui affiche tout ce qui est actuellement pris.

## Créer un objet

1. Allez dans **Objets > Nouvel objet**
2. Remplissez :
   - **Nom** : un identifiant clair (par exemple « Appartement 3B » ou « Pelleteuse CAT 320 »)
   - **Type** : l'un des dix types ci-dessus
   - **Statut** : où en est l'objet dans son cycle de vie
   - **Référence** : votre propre référence ou code
   - **Loyer par défaut** : le loyer standard, par semaine, mois ou année, avec ou sans TVA
   - **Description** et **adresse** : les détails de l'actif
3. Cliquez sur **Enregistrer**

## Page de détail de l'objet

La page de détail affiche :

- Les informations sur l'actif et son type
- Le statut actuel
- **Chiffre d'affaires total** : les revenus des factures payées pour cet objet
- **Contrats actifs** : le nombre de contrats actuellement actifs liés à cet objet
- **Historique WOZ** (pour les Propriétés) : les valeurs WOZ annuelles utilisées dans le calcul de l'impôt Box 3
- Les contrats liés
- L'historique de location
- Les factures associées

### Résumé des contrats

Au-dessus de la liste des contrats, une barre de synthèse donne un aperçu rapide de l'état contractuel de l'objet :

- **Total des contrats** liés à cet objet
- **Contrats signés** : combien ont été intégralement signés
- **Total mensuel actif** : la valeur mensuelle combinée de tous les contrats actifs, normalisée à partir de contrats à fréquences différentes (hebdomadaire, trimestrielle, annuelle)

### Historique WOZ (objets de type Propriété)

Pour les objets de type **Propriété**, la page de détail inclut une section d'historique WOZ. Les valeurs WOZ (Waardering Onroerende Zaken) sont les valeurs immobilières fixées par la municipalité et utilisées dans le calcul de l'impôt néerlandais Box 3.

- **Consultez** les valeurs WOZ annuelles par année.
- **Ajoutez** de nouvelles valeurs en saisissant l'année et la valeur WOZ attribuée par la municipalité.
- Box 3 utilise la valeur WOZ avec date de référence (peildatum) au 1er janvier. Saisissez la valeur applicable au début de l'année fiscale.
- Si aucune valeur n'est encore saisie, la section affiche un état vide vous invitant à ajouter la première.

#### Intégration Kadaster

Lorsque vous ajoutez un objet de type Propriété avec une adresse néerlandaise valide, MyCompanyDesk peut importer l'historique WOZ directement depuis le Kadaster. Cela évite la saisie manuelle et vous donne les mêmes valeurs que celles enregistrées par la municipalité.

- **Récupération automatique** : si l'historique WOZ est vide, le système récupère les valeurs disponibles depuis le Kadaster à l'ouverture de la page de détail.
- **Actualisation manuelle** : cliquez sur **Actualiser** pour récupérer à tout moment les dernières données du Kadaster. Les valeurs importées sont marquées d'un badge source « Kadaster ».
- **Données manquantes** : si le Kadaster ne dispose d'aucune donnée pour cette adresse (par exemple un bien neuf), un avis s'affiche et vous pouvez saisir les valeurs manuellement.

#### Valeur actuelle estimée

Pour les biens dont un historique WOZ a été récupéré depuis le Kadaster, MyCompanyDesk projette une valeur de marché actuelle estimée. Cette projection prend la peildatum WOZ la plus récente et y applique l'indice de prix CBS PBK pour la région COROP du bien, vous donnant ainsi une valeur qui reflète les tendances actuelles du marché.

### Statut de signature des contrats

Chaque ligne de contrat sur la page de détail de l'objet affiche un badge de statut de signature à côté du badge actif/en pause. Les couleurs suivent la même correspondance que sur la page de détail du contrat :

- **Signé** (vert) : toutes les parties ont signé
- **Partiellement signé** (bleu) : certaines parties ont signé, d'autres non
- **Envoyé** (jaune) : l'invitation à signer a été envoyée, pas encore de signatures
- **Expiré** ou **Résilié** (rouge) : la demande de signature n'est plus valable

Les contrats intégralement signés affichent une petite icône en forme d'œil qui ouvre un aperçu intégré du document signé. Vous pouvez ainsi lire le contrat finalisé sans quitter la page du bien.

Les contrats existants créés avant l'ajout de la signature électronique n'affichent pas de badge de signature. Le système les détecte de la même manière que sur la page de détail du contrat : un contrat doit avoir des parties signataires, un modèle ou du contenu de signature pour afficher un badge.

## Lier les objets aux contrats et factures

Les objets s'intègrent aux autres fonctionnalités de MyCompanyDesk :

- **Contrats** : créez un contrat de location pour un objet, en spécifiant le locataire (client) et les conditions
- **Factures** : les factures peuvent être marquées comme factures de location et liées aux objets
- **Factures récurrentes** : configurez une facturation mensuelle automatique du loyer par objet

## Filtrage

Filtrez vos objets par :

- **Type** : n'importe lequel des dix types d'objets
- **Statut** : Disponible, Loué, Maintenance, Actif, Vendu, Sorti ou Inactif
- **Plage de dates** et **recherche** : trouvez par nom ou description
- **Vue** : basculez entre Actifs, Archive et Corbeille

## Actions groupées

Sélectionnez plusieurs objets pour les **archiver** ou les **supprimer** en une fois. La vue Archive propose la restauration vers les actifs ou le déplacement vers la corbeille ; la vue Corbeille propose la restauration vers l'archive ou la suppression définitive.

## Conseils

- Utilisez le filtre de statut pour voir rapidement quels actifs sont disponibles à la location
- Liez chaque facture de location à son objet pour un suivi financier complet par actif
- Configurez des contrats avec récurrence pour la facturation automatique des loyers
- Consultez les indicateurs d'objets en haut de la page pour un aperçu de la disponibilité
