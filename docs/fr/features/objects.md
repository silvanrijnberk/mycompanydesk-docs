---
title: Objets & biens
last_verified: 2026-07-27
---

# Objets & biens

MyCompanyDesk regroupe tous les biens de l'entreprise en un seul endroit : immobilier, véhicules, machines, inventaire et autres actifs. Par objet, vous suivez la propriété, la valeur, les revenus locatifs, les contrats liés et les factures associées.

## Créer un objet

1. Allez dans **Paramètres** > **Objets**.
2. Cliquez sur **Nouvel objet** et choisissez un type :
   - **Immobilier** - bâtiments et terrains
   - **Véhicule** - voitures, camionnettes, camions et similaires
   - **Machine / installation** - équipements professionnels
   - **Inventaire** - mobilier de bureau ou de magasin
   - **Autre** - tout autre bien
3. Remplissez les champs obligatoires : au minimum un nom, optionnellement une description, la date/valeur d'achat et le statut.
4. Enregistrez.

L'objet est maintenant disponible pour être lié à des contrats, factures, dépenses et lignes de temps.

## Page de détail d'un objet

La page de détail affiche toutes les informations d'un objet en un coup d'œil :

- Informations et type de l'objet
- Statut actuel
- **Revenu total** : revenu de factures réellement payées pour cet objet, y compris le loyer, les charges, les frais uniques et les factures de vente qui lui sont attribuées
- **Contrats actifs** : nombre de contrats actuellement actifs liés à cet objet (affiché uniquement si l'objet a des contrats ou est un bien immobilier)
- **Historique WOZ** (pour les biens immobiliers) - valeurs WOZ annuelles utilisées pour le calcul de la boîte 3
- **Résumé de l'actif** (pour les biens immobiliers avec une valeur WOZ enregistrée) - valeur immobilisée, amortissement cumulé, valeur comptable actuelle et le plancher légal (bodemwaarde) du bâtiment
- Contrats liés et historique locatif (affiché lorsque pertinent)
- **Factures** : chaque facture comptant pour le revenu total, avec statut et montant hors TVA (affiché uniquement si l'objet a des factures ou est un bien immobilier)
- **Registre des kilomètres** (pour les véhicules avec des trajets) - les trajets effectués avec ce véhicule, le total de kilomètres, par année et les trajets récents

La page masque les cartes qui ne correspondent pas au type d'objet. Le loyer par défaut, l'historique WOZ et une adresse vide n'apparaissent que pour l'immobilier ou lorsque l'objet contient effectivement ces données. Les cartes de contrats et de factures restent masquées pour les véhicules, machines et autres objets non immobiliers jusqu'à ce qu'il y ait des données à afficher, afin que la page reste centrée sur l'objet consulté.

### Factures attribuées à cet objet

Chaque ligne de facture attribuée à l'objet est listée ici. Vous voyez ainsi en un coup d'œil quel revenu réellement payé l'objet a généré.

Le total ne compte que les factures payées, pas les brouillons ou factures ouvertes. Le chiffre d'affaires correspond donc à ce qui a été réellement perçu.

### Résumé des contrats

En haut de la page, vous voyez un résumé des contrats actifs pour cet objet :

- Nombre de contrats actifs
- Loyer mensuel actuel
- Date de prochaine indexation
- Date de fin du contrat qui se termine le plus tôt

Cela donne un aperçu financier rapide sans ouvrir chaque contrat séparément.

### Historique WOZ et bodemwaarde

Pour les objets de type **Immobilier**, vous pouvez enregistrer la valeur WOZ annuelle. Cette valeur est utilisée pour le calcul de la boîte 3 (impôt sur la fortune) dans votre comptabilité.

La page affiche également le **bodemwaarde** (plancher légal). Pour les bâtiments, la valeur fiscale ne peut pas être inférieure à ce plancher. MyCompanyDesk utilise la valeur WOZ, le bodemwaerde et la date d'achat pour déterminer la valeur correcte pour la déclaration fiscale.

Cela s'applique uniquement aux bâtiments. Les véhicules, machines, inventaire et autres biens n'ont pas de bodemwaarde.

### Registre des kilomètres (véhicules)

Les véhicules utilisés pour les déplacements professionnels affichent une carte **Registre des kilomètres** dès qu'ils ont au moins un trajet lié. C'est le registre des trajets que l'administration fiscale attend pour un véhicule d'entreprise : il liste les trajets effectués avec ce véhicule, pas les coûts d'exploitation du véhicule.

La carte affiche :

- **Total kilomètres** parcourus avec ce véhicule
- **Année en cours**, si le véhicule a été utilisé cette année civile
- **Nombre de trajets**
- **Dernier trajet**
- Une ventilation **par année** des kilomètres et des trajets
- Les trajets les plus récents, avec origine, destination, date et client

Seuls les trajets les plus récents sont affichés au départ. S'il y en a plus, un bouton **Afficher les trajets plus anciens** révèle le reste, afin que la liste ne soit jamais coupée silencieusement.

Un trajet est lié au véhicule lorsque la saisie du déplacement le sélectionne comme véhicule d'entreprise. Ce trajet ne reçoit pas d'indemnité kilométrique séparée, car les coûts réels (carburant, entretien et amortissement) sont déjà suivis via les dépenses sur l'objet.

### Résumé de l'actif et bodemwaarde

Le résumé de l'actif montre la situation financière d'un bien immobilier dans le grand livre :

- Valeur immobilisée
- Amortissement cumulé
- Valeur comptable actuelle
- Plancher légal (bodemwaarde)

Ces chiffres sont nécessaires pour le bilan annuel et la déclaration fiscale.

Cette section n'apparaît que pour les objets de type **Immobilier** avec une valeur WOZ enregistrée. Les véhicules, machines, inventaire et autres biens n'ont pas de bodemwaerde et n'affichent donc pas ce résumé.

### Cession

Lorsqu'un bien est vendu ou mis au rebut, vous pouvez enregistrer la cession :

1. Ouvrez l'objet.
2. Choisissez **Verwijderen / Verkocht** dans la section cession.
3. Saisissez la date de cession et le produit de la vente.
4. Enregistrez.

MyCompanyDesk calcule ensuite la plus-value ou moins-value comptable et l'intègre dans la gestion financière.

### État de signature du contrat

Pour chaque contrat actif, vous voyez si le processus de signature numérique est terminé. La page de l'objet liste :

- Parties au contrat
- Dates de début et de fin
- État de signature
- Loyer mensuel

Cliquez sur un contrat pour ouvrir son détail complet.

### Lier des objets

Les objets peuvent être liés à :

- **Contrats** - baux et contrats de location
- **Factures** - loyer, charges et vente
- **Dépenses** - entretien et coûts d'exploitation
- **Lignes de temps** - déplacements et travaux effectués sur ou avec l'objet

Ouvrez le document concerné et sélectionnez l'objet dans le sélecteur d'objet. Le lien est enregistré des deux côtés, vous pouvez donc naviguer de l'objet vers le document et inversement.

## Types d'objets et leurs champs

| Type | Champs typiques |
|------|-----------------|
| Immobilier | Adresse, valeur WOZ, bodemwaerde, détails locatifs, valeur d'achat |
| Véhicule | Plaque d'immatriculation, valeur d'achat, loyer par défaut, statut, registre des kilomètres |
| Machine / installation | Description, valeur d'achat, statut, amortissement |
| Inventaire | Description, valeur d'achat, statut |
| Autre | Description, valeur d'achat, statut |

Chaque type n'a que les champs pertinents pour ce genre de bien. Par exemple, un véhicule n'a pas de valeur WOZ et une machine n'a pas de plaque d'immatriculation.

## Où trouver les objets

- **Paramètres** > **Objets** - liste de tous les objets et biens
- **Menu** > **Objets** - accès rapide lorsque cet élément de menu est activé pour votre rôle
- Liés depuis les contrats, factures, dépenses et lignes de temps

## Voir aussi

- [Contrats](/fr/features/contracts)
- [Factures](/fr/features/invoices)
- [Dépenses](/fr/features/expenses)
- [Suivi du temps](/fr/features/time-registration)
