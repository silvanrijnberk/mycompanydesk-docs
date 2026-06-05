---
title: Gestion de la TVA
last_verified: 2026-06-05
---

# Gestion de la TVA

Suivez, calculez et gerez vos obligations de taxe sur la valeur ajoutee (TVA) avec le verrouillage des periodes et le suivi des echeances.

## Vue d'ensemble

La page TVA vous offre une vision claire de votre situation fiscale :

- **TVA collectee** -- Taxe facturee sur vos factures
- **TVA deductible** -- Taxe payee sur vos depenses professionnelles
- **TVA nette** -- Le montant que vous devez (ou pouvez recuperer)

## Periodes de TVA

La TVA est organisee par periode (mensuelle ou trimestrielle, selon votre juridiction) :

- Consultez les calculs de TVA par periode
- Voyez les ventilations detaillees par taux de TVA
- Suivez quelles periodes ont ete declarees

## Verrouillage des periodes

Apres avoir depose votre declaration de TVA, verrouillez la periode pour eviter les modifications accidentelles :

1. Allez sur la page TVA
2. Selectionnez la periode que vous avez declaree
3. Cliquez sur **Verrouiller la periode**

### Ce que le verrouillage fait

- Empeche la modification ou la suppression des factures et depenses de la periode verrouillee
- Affiche une banniere d'avertissement sur les documents des periodes verrouilees
- Garantit que vos chiffres declares restent coherents avec vos archives

### Deverrouillage

Si vous devez apporter des corrections apres le verrouillage :

1. Allez sur la page TVA
2. Trouvez la periode verrouillee
3. Cliquez sur **Deverrouiller**
4. Effectuez vos corrections
5. Reverrouillez une fois termine

::: warning
Ne deverrouillez les periodes que lorsque vous devez deposer une correction. Un deverrouillage frequent annule l'objectif de cette mesure de conformite.
:::

## Suivi des echeances

MyCompanyDesk suit les echeances de declaration de TVA selon votre pays. L'echeance est calculee automatiquement : pour les declarants trimestriels, c'est le dernier jour du mois suivant la fin du trimestre (T1 → 30 avril, T2 → 31 juillet, T3 → 31 octobre, T4 → 31 janvier), et pour les declarants mensuels, le dernier jour du mois suivant.

- Indicateurs visuels pour les echeances a venir
- Avertissements lorsqu'une echeance approche
- Statut clair indiquant quelles periodes necessitent votre attention

### Alertes d'echeance dans les formulaires

Lorsque vous modifiez une facture ou une depense appartenant a une periode passee (non verrouillee), une banniere en haut du formulaire affiche l'echeance de declaration et sa gravite :

- **Ouvert** -- La periode est encore en cours. Pas de banniere.
- **Avertissement** -- La periode est terminee mais l'echeance n'est pas encore depassee. Une banniere jaune vous rappelle de declarer.
- **En retard** -- L'echeance est depassee et la periode n'est toujours pas verrouillee. Une banniere rouge vous presse de declarer immediatement.

### Comportement KOR sur les factures

Lorsque le KOR (regime de la franchise en base) est active, toutes les factures sont automatiquement a 0% de TVA. La ventilation de la TVA est supprimee sur le PDF et remplacee par la mention legale d'exoneration KOR.

### Livraisons exonerees de TVA (vrijgesteld)

Certaines prestations sont exonerees de TVA par la loi (par ex. services medicaux, education, certains services financiers). L'exoneration differe du taux de 0% : les livraisons exonerees n'ont pas de TVA en sortie et sont entierement exclues des rubriques de la declaration. Lors de la creation d'une facture, vous pouvez activer **Exonere de TVA** pour mettre toutes les lignes a 0% avec une mention d'exoneration sur le PDF.

## Indicateur de pays

Vos parametres de TVA respectent le pays d'immatriculation de votre entreprise. Cela affecte :

- Les taux de TVA normal et reduit
- La structure des periodes de declaration (mensuelle/trimestrielle)
- Les calculs d'echeances
- L'applicabilite de l'autoliquidation

## Autoliquidation

Pour les transactions intracommunautaires entre entreprises, activez l'autoliquidation :

1. Assurez-vous que le client dispose d'un numero de TVA intracommunautaire valide
2. Activez l'**autoliquidation** dans Entreprise > Fonctionnalites
3. Lors de la creation d'une facture pour un client B2B de l'UE, selectionnez l'option d'autoliquidation
4. La facture affichera 0 % de TVA avec la mention d'autoliquidation

## Conseils

- Verrouillez les periodes immediatement apres la declaration pour eviter les modifications accidentelles
- Consultez le rapport de TVA dans les [Rapports](/fr/features/reports) pour une vue plus large
- Assurez-vous que votre numero de TVA et ceux de vos clients sont correctement renseignes
- Utilisez le profil de tableau de bord comptable/expert-comptable pour une vue axee sur la TVA
