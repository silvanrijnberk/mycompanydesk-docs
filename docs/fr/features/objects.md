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
3. Cliquez sur **Enregistrer**

::: tip Plus d'options
Le formulaire de nouvel objet ne demande que le nom par defaut. Utilisez **Plus d'options** pour ajouter une description, et **Achat et statut** pour definir la date d'achat, le prix, la valeur actuelle, le regime de TVA et le statut. Ces champs sont optionnels pour creer l'objet; le statut est disponible par defaut.
:::

## Page de detail de l'objet

La page de detail affiche :

- Informations sur l'actif et son type
- Statut actuel
- **Chiffre d'affaires total** : revenus reels issus des factures payees pour cet objet, y compris les loyers, charges de copropriete, factures ponctuelles et factures de vente qui lui sont attribues
- **Contrats actifs** : nombre de contrats actuellement actifs lies a cet objet
- **Historique WOZ** (pour les Proprietes) — valeurs WOZ annuelles utilisees par le calcul Box 3
- **Resume de l'actif** (pour les objets Propriete avec une valeur WOZ enregistree) - valeur activee, amortissements cumules, valeur comptable actuelle et plancher legal (bodemwaarde) pour le batiment
- Contrats lies
- Historique de location
- **Factures** : chaque facture prise en compte dans le chiffre d'affaires total, avec statut et montant hors TVA

### Factures attribuees a cet objet

L'onglet Factures de la page de detail de l'objet liste chaque facture qui contribue au chiffre d'affaires total :

- Les factures generees a partir d'un contrat rattache a cet objet
- Les factures etiquetees directement sur l'objet, comme les regularisations de charges de copropriete, les factures ponctuelles et les factures de vente

Chaque ligne affiche le numero de facture, le client, la date, le statut et le montant hors TVA. Une explication precise que le total additionne les factures payees, tandis que le rapport Box 3 ne compte que les loyers perçus et utilise la date d'encaissement. Les deux montants peuvent donc differer.

### Resume des contrats

Au-dessus de la liste des contrats, une barre de synthese donne un apercu rapide de l'etat contractuel de l'objet :

- **Total des contrats** lies a cet objet
- **Contrats signes**: combien ont ete integralement signes
- **Total mensuel actif**: valeur mensuelle combinee de tous les contrats actifs, normalisee a partir de contrats a frequences differentes (hebdomadaire, trimestrielle, annuelle)

### Historique WOZ (objets de type Propriete)

Pour les objets de type **Propriete**, la page de detail inclut une section d'historique WOZ. Les valeurs WOZ (Waardering Onroerende Zaken) sont les valeurs immobilieres fixees par la municipalite et utilisees dans le calcul de l'impot neerlandais Box 3.

- **Consultez** les valeurs WOZ annuelles par annee.
- **Ajoutez** de nouvelles valeurs en saisissant l'annee et la valeur WOZ attribuee par la municipalite.
- Box 3 utilise la valeur WOZ avec date de reference au 1er janvier. Saisissez la valeur applicable au debut de cette annee fiscale.
- Si aucune valeur n'est encore saisie, la section affiche un etat vide vous invitant a ajouter la premiere.

#### Integration Kadaster

Lorsque vous ajoutez un objet de type Propriete avec une adresse neerlandaise valide, MyCompanyDesk peut importer l'historique WOZ directement depuis le Kadaster. Cela evite la saisie manuelle et vous donne les memes valeurs que celles enregistrees par la municipalite.

- **Recuperation automatique**: si l'historique WOZ est vide, le systeme recupere les valeurs disponibles depuis le Kadaster a l'ouverture de la page de detail.
- **Actualisation manuelle**: cliquez sur **Actualiser** pour telecharger a tout moment les dernieres donnees du Kadaster. Les valeurs importees sont marquees d'un badge source "Kadaster".
- **Donnees manquantes**: si le Kadaster ne dispose d'aucune donnee pour cette adresse (par exemple, un bien neuf), un avis s'affiche et vous pouvez saisir les valeurs manuellement.

#### Valeur actuelle estimee

Pour les biens dont un historique WOZ a ete recupere depuis le Kadaster, MyCompanyDesk projette une valeur de marche actuelle estimee. Cette projection prend la peildatum WOZ la plus recente et y applique l'indice de prix CBS PBK pour la region COROP du bien, vous donnant ainsi une valeur qui reflete les tendances actuelles du marche.

### Resume de l'actif et bodemwaarde (plancher legal du batiment)

Les objets de type Propriete qui sont suivis comme un actif immobilise affichent un resume de l'actif sur la page de detail :

- **Valeur d'acquisition** : le montant paye pour l'actif.
- **Valeur immobilisee** : la partie professionnelle de la valeur d'acquisition, apres deduction d'une eventuelle part d'usage prive.
- **Amortissements cumules** : tout ce qui a deja ete amorti.
- **Amortissement de l'annee** : la dotation aux amortissements pour l'annee civile en cours.
- **Valeur comptable** : la valeur residuelle au bilan (valeur immobilisee moins amortissements cumules).
- **Bodemwaarde** : le plancher legal en dessous duquel la valeur comptable d'un batiment ne peut descendre. Elle repose sur la valeur WOZ enregistree pour le bien.

La bodemwaarde est placee a cote de la valeur comptable, car les deux n'ont de sens qu'ensemble. MyCompanyDesk ne reecrit pas silencieusement le plan d'amortissement comptabilise ; a la place, il avertit lorsque le plan actuel a deja franchi le plancher, ou indique lorsque la valeur comptable l'atteint exactement.

Si un avertissement s'affiche, corrigez-le en fixant la valeur residuelle de l'acquisition a la bodemwaarde. Quand l'objet ne comporte qu'une seule acquisition, un lien ouvre celle-ci directement, pour que vous ou votre comptable puissiez effectuer l'ajustement.

Cette regle ne s'applique qu'aux batiments (par exemple, propriete, appartement, bureau ou commerce). Les vehicules, machines, equipements et autres actifs qui ne sont pas des batiments n'ont pas de plancher de bodemwaarde.

### Vendu ou cede

Si vous vendez, mettez au rebut ou retirez un actif de votre entreprise, enregistrez-le dans la section **Achat et statut** du formulaire objet :

- **Date de cession :** la date a laquelle l'actif a quitte l'entreprise.
- **Produit de cession (HT) :** le montant percu. Laissez le champ vide si vous ne le connaissez pas encore ; saisissez 0 si l'actif a ete mis au rebut sans produit.

Une fois la date de cession enregistree, la page de detail de l'objet affiche un bloc avec les informations de cession :

- la date de cession
- la valeur comptable a la cession
- le produit de cession, s'il est renseigne
- la plus-value ou la moins-value comptable

Si vous laissez le produit de cession vide, le bloc affiche la valeur comptable qui a ete radiee et precise que la plus-value ou la moins-value ne peut etre determinee qu'une fois le produit connu.

Le resume de l'actif vous avertit egalement lorsque le plan d'amortissement prevoit encore des montants apres la date de cession. Les lignes d'amortissement sont creees en une seule fois lors de l'activation de l'actif; elles continuent donc d'atteindre le compte de resultat, sauf si vous ajustez la duree d'amortissement de l'acquisition.

### Statut de signature des contrats

Chaque ligne de contrat sur la page de detail de l'objet affiche desormais un badge de statut de signature a cote du badge actif/en pause. Les couleurs suivent la meme correspondance que sur la page de detail du contrat :

- **Signe** (vert): toutes les parties ont signe
- **Partiellement signe** (bleu): certaines parties ont signe, d'autres non
- **Envoye** (jaune): l'invitation a signer a ete envoyee, pas encore de signatures
- **Expire** ou **Resilie** (rouge): la demande de signature n'est plus valable

Les contrats integralement signes affichent une petite icone en forme d'oeil qui ouvre un apercu integre du document signe. Vous pouvez ainsi lire le contrat finalise sans quitter la page de l'objet.

Les contrats herites crees avant l'ajout de la signature electronique n'affichent pas de badge de signature. Le systeme detecte les contrats herites de la meme maniere que sur la page de detail du contrat : un contrat doit avoir des parties signataires, un modele ou du contenu de signature pour afficher un badge.

## Lier les objets aux contrats et factures

Les objets s'integrent aux autres fonctionnalites de MyCompanyDesk :

- **Contrats** -- Creez un contrat de location pour un objet, en specifiant le locataire (client) et les conditions
- **Factures**: Les factures peuvent etre attribuees directement a un objet dans le formulaire de facture, ou liees par le biais d'un contrat de location. Les deux modes comptent dans le chiffre d'affaires total de l'objet.
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
