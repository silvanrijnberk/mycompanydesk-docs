---
title: "Propriétés"
description: "Suivez bâtiments, véhicules, machines et autres biens : valeur, amortissement, loyers, coûts et WOZ. Inclus dans Office, à activer dans Modules."
---

# Propriétés

Gardez une vue sur ce que possède votre entreprise, ce que cela vaut et ce que cela rapporte : bâtiments et garages que vous louez, votre véhicule de société, machines, outillage et autres biens.

::: info
**Propriétés** fait partie de l'abonnement Office. Si vous ne le voyez pas dans la navigation, activez **Actifs & Objets** dans **Paramètres › Modules**.
:::

## Vue d'ensemble

La page **Propriétés** liste tous vos biens, regroupés par catégorie (bâtiments, véhicules, outils et machines, mobilier, électronique, autre). En haut figurent les chiffres clés : **Valeur actuelle**, **Valeur locative totale**, ce qui est **Vacant**, **Coûts cette année** et **Amortissement cette année**.

## Types

Lors de l'ajout, vous choisissez un type : **Propriété / Garage**, **Appartement**, **Bureau**, **Commerce**, **Véhicule**, **Machine**, **Équipement**, **Mobilier**, **Électronique** ou **Autre**. Les propriétés, appartements, bureaux et commerces reçoivent une adresse et un historique WOZ.

## Statuts

| Statut | Signification |
|---|---|
| **Actif** | En service (valeur par défaut d'un nouveau bien) |
| **Disponible** | Prêt à être loué ou utilisé |
| **Occupé** | En service ou loué |
| **Maintenance** | Temporairement indisponible pour entretien |
| **Inactif** | Hors service |
| **Vendu** / **Éliminé** | Ne fait plus partie de votre entreprise |

Un bien sous contrat de location en cours apparaît dans la liste comme **Loué**.

## Ajouter un bien

1. Ouvrez **Propriétés** et cliquez sur **Ajouter un bien**
2. Saisissez le **Nom** (par exemple « Garage Utrecht, box 12 ») et choisissez le **Type**
3. Cliquez sur **Enregistrer**

::: tip Plus de détails
Seul le nom est obligatoire. Complétez le reste quand vous le souhaitez dans les sections repliables : **Adresse / Localisation** (pour les bâtiments), **Détails** (référence, description, loyer par défaut), **Valeur** (date et prix d'achat, valeur actuelle, date de vente, produit de la vente et régime TVA) et **Statut**. Le régime TVA démarre sur **Avec TVA** ; pour un **Appartement** (logement), il démarre sur **Sans TVA**. Votre propre choix dans le formulaire prévaut toujours, et les biens existants conservent ce qui a été enregistré pour eux.
:::

## La page d'un bien

La page d'un bien affiche :

- En haut, le **Revenu total** et le statut, avec le nombre de contrats actifs
- Les données clés : adresse (avec lien vers la carte), loyer par défaut, locataire actuel et l'achat
- **Historique** : contrats, factures, entretiens et documents sur une seule chronologie
- **Historique WOZ** (pour les bâtiments)
- **Immobilisation** : valeur d'acquisition, amortissement et valeur comptable, dès qu'un achat comptabilisé comme investissement est lié au bien
- **Registre kilométrique** (pour les véhicules avec des trajets)
- **Résumé financier** : **Revenu total**, **Coûts totaux**, **Flux de trésorerie net** et une répartition **Par an**
- **Actions à mener**, par exemple une valeur WOZ manquante pour la Box 3

### Revenus et factures

Le **Revenu total** additionne toutes les factures payées liées au bien, hors TVA :

- les factures issues d'un contrat rattaché à ce bien
- les factures liées directement au bien, comme les charges, les factures ponctuelles et les factures de vente

Le rapport Box 3 ne compte que les loyers perçus et se base sur la date d'encaissement. Les deux montants peuvent donc différer ; la page l'explique aussi.

### Historique

L'**Historique** réunit contrats, factures, entretiens et documents dans une liste chronologique. Avec **Ajouter**, vous choisissez **Enregistrer un entretien** (date, description, catégorie, coût, réalisé par) ou **Ajouter un document**. Vous supprimez ici les entretiens et les documents ; un contrat ou une facture se gère sur sa propre page.

Un contrat qui attend encore une signature affiche son statut de signature : **Non envoyé**, **En attente**, **Partiellement signé**, **Expiré** ou **Résilié**. Une fois le contrat signé, vous voyez de nouveau s'il est actif. Les contrats plus anciens, jamais préparés pour la signature électronique, n'affichent pas de statut de signature.

### Historique WOZ (bâtiments)

Pour les propriétés, appartements, bureaux et commerces, la page conserve les valeurs WOZ par année. La Box 3 utilise la valeur WOZ en vigueur au 1er janvier de l'année concernée (la date de référence).

- Ajoutez une valeur avec l'année et la valeur WOZ fixée par la commune.
- Si le bien a une adresse néerlandaise valide et que l'historique est encore vide, MyCompanyDesk récupère lui-même les valeurs auprès du Kadaster. **Actualiser** récupère à tout moment les données les plus récentes ; ces valeurs portent l'étiquette **Kadaster**.
- Si le Kadaster n'a pas de données pour l'adresse (une construction neuve, par exemple), un message s'affiche et vous saisissez les valeurs vous-même.

Avec un historique WOZ issu du Kadaster, la carte affiche aussi une **Valeur actuelle estimée** : la dernière valeur WOZ, actualisée avec l'indice des prix des logements du CBS pour la région du bien.

### Immobilisation et bodemwaarde

Lorsqu'un achat que vous amortissez comme investissement est lié au bien (liez la dépense via le champ **Actif** du formulaire de dépense), le bloc **Immobilisation** affiche :

- **Valeur d'acquisition** : ce que vous avez payé
- **Au bilan** : la part professionnelle immobilisée, après une éventuelle TVA non déductible et l'usage privé
- **Amorti à ce jour** et **Amortissement cette année**
- **Valeur comptable** : ce qui figure encore au bilan
- Le plan d'amortissement par année civile

Pour les bâtiments, le bloc affiche aussi la **Bodemwaarde** : le plancher légal, fondé sur la valeur WOZ, sous lequel la valeur comptable d'un bâtiment ne peut pas descendre. MyCompanyDesk ne réécrit pas le plan en silence. Si l'amortissement est passé sous le plancher, vous voyez **Trop amorti** ; si la valeur comptable atteint exactement le plancher, un message vous le signale. Vous corrigez en fixant la valeur résiduelle de l'achat à la bodemwaarde. Lorsque le bien n'a qu'un seul achat, le lien **Ouvrez l'achat pour ajuster la valeur résiduelle** l'ouvre directement. Les véhicules, machines et autres biens qui ne sont pas des bâtiments n'ont pas de bodemwaarde.

### Vendu ou cédé

Quand vous vendez un bien, le jetez ou le sortez autrement de votre entreprise, renseignez la section **Valeur** du formulaire :

- **Date de vente** : la date à laquelle le bien a quitté votre entreprise.
- **Produit de la vente (hors TVA)** : le montant reçu. Laissez le champ vide si vous ne le connaissez pas encore ; saisissez 0 si vous l'avez jeté sans rien en tirer.

Une fois la date de vente enregistrée, le bloc **Immobilisation** affiche une partie **Vendu ou cédé** avec la date, la **Valeur comptable à la vente**, le **Produit de la vente** et la **Plus-value comptable** ou la **Moins-value comptable**. Sans produit, vous ne voyez que la valeur comptable sortie, avec la mention que la plus-value ou la moins-value ne pourra être déterminée qu'une fois le produit connu.

Le bloc vous avertit aussi lorsque le plan d'amortissement prévoit encore des montants après la date de vente. Ils continuent d'arriver dans votre compte de résultat tant que vous n'ajustez pas la durée d'amortissement de l'achat.

## Lier aux contrats, factures et dépenses

- **Contrats** : créez un contrat de location pour un bien, avec le locataire (client) et les conditions.
- **Factures** : liez une facture à un bien directement dans le formulaire de facture, ou laissez-la provenir d'un contrat de location. Les deux comptent dans le revenu total.
- **Factures récurrentes** : liez une facture récurrente à un bien pour facturer le loyer automatiquement.
- **Dépenses** : liez des coûts à un bien via le champ **Actif** ; ils comptent alors dans les coûts de ce bien.

## Filtrer

Filtrez la liste par :

- **Type** (catégorie) : le groupe, par exemple bâtiments ou véhicules
- **Type** du bien
- **Statut** : un statut, ou **Vacant (avec loyer)** pour les biens avec un loyer qui ne sont pas loués actuellement
- **Rechercher** par nom ou description

**Affichage** permet de passer des biens actifs aux biens archivés ou supprimés.

## Actions groupées

- **Archiver** et **Supprimer** (vers la corbeille) dans la liste active
- **Restaurer (actif)** et **Mettre à la corbeille** dans les archives
- **Restaurer (archives)** et **Supprimer définitivement** dans la corbeille

Un bien lié à des contrats actifs ne peut pas être supprimé.

## Conseils

- Utilisez le filtre **Vacant (avec loyer)** pour voir rapidement ce que vous pouvez louer
- Liez chaque facture de loyer et chaque coût au bien concerné, pour que revenus, coûts et flux de trésorerie net par bien soient justes
- Utilisez des factures récurrentes ou des contrats pour facturer le loyer automatiquement
- Saisissez la valeur WOZ au 1er janvier pour votre déclaration Box 3
