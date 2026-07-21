---
title: Gestion de la TVA
---

<!-- TODO(source-missing): RichardTool 5407b44 added historical Dutch VAT rates 6% and 19% to the valid invoice/quote/contract/recurring-invoice/catalog rate set. sources/vat-rates.yaml#countries.NL does not yet list those rates, so do not document the full valid set until the source is updated. -->

# Gestion de la TVA

Suivez la TVA collectée et payée, préparez votre déclaration et gardez une longueur d'avance sur les échéances. MyCompanyDesk prend en charge le parcours de TVA néerlandais (BTW) : la page reflète la déclaration du Belastingdienst, si bien que les chiffres que vous voyez sont ceux que vous déposez.

## Structure de la page

La page TVA compte trois onglets : **Aperçu**, **Déclaration** et **Transactions**. L'onglet actif et la période active figurent dans l'URL : l'actualisation et le bouton retour conservent votre position.

À côté des onglets se trouve un sélecteur de période valable pour toute la page (Q1 à Q4 plus année complète) ; le changer met à jour chaque carte de chaque onglet. Si votre espace de travail déclare mensuellement, le sélecteur affiche les douze mois au lieu des trimestres, en cohérence avec la fréquence de déclaration de vos réglages fiscaux. Le sélecteur d'année en haut de la page fait basculer l'ensemble vers une autre année.

## Carte principale

La carte principale résume la période choisie :

- **Solde** : TVA nette (collectée moins payée) avec la mention "te betalen" ou "terug te ontvangen". Le solde suit le sélecteur de période.
- **Anneau d'échéance** : un compte à rebours circulaire jusqu'à la prochaine échéance de dépôt. Rouge à 3 jours ou moins, orange jusqu'à 14 jours, vert sinon.
- **Provision TVA (BTW-spaarpotje)** : une réserve suggérée égale au solde de la période plus une marge de 10 %, affichée quand vous devez de la TVA. Si un remboursement vous est dû, la tuile devient une tuile verte de remboursement.

Deux boutons figurent sous le solde : **Vers la déclaration** mène à l'onglet Déclaration, et **Comment est-ce calculé ?** détaille le calcul du solde.

Au-dessus de la carte, un bandeau vous avertit quand vos données sont incomplètes (factures en brouillon ou dépenses sans TVA), pour corriger avant de déclarer.

## Onglet Aperçu

### Bande des trimestres

Quatre cartes (Q1 à Q4) résumant par trimestre le chiffre d'affaires, la TVA collectée, la TVA payée et le solde, avec l'échéance de dépôt et un badge de verrouillage sur les trimestres déposés ou verrouillés. Cliquez sur une carte pour changer la période de toute la page.

### Contrôles avant dépôt

Une liste de contrôles exécutée sur la période active. Chaque contrôle a un lien de correction qui mène directement aux enregistrements concernés :

- **Brouillons** : factures encore en brouillon qui ne compteront pas dans la déclaration.
- **TVA manquante** : dépenses sans montant de TVA.
- **Justificatifs manquants** : dépenses sans justificatif joint.
- **ICP en attente** : ventes B2B intra-UE à déclarer séparément sur l'ICP-opgaaf.
- **Origine de l'autoliquidation** : dépenses en autoliquidation dont le pays ou le numéro KVK du fournisseur manque, si bien que la rubrique 2a/4b ne peut pas être justifiée.

Un badge dans l'en-tête indique le nombre de points bloquants, ou que tout est en ordre.

### Synthèse et totaux annuels

Sous les contrôles, vous voyez les chiffres clés de l'année (chiffre d'affaires, dépenses, bénéfice, TVA collectée et payée, une estimation de la charge fiscale et une réserve recommandée), plus un total annuel sur les trimestres en une ligne.

Tant que votre chiffre d'affaires reste dans la zone KOR, cet onglet affiche aussi un rappel qui pointe vers les réglages KOR (voir plus bas).

## Onglet Déclaration

### Feuille des rubriques

Un tableau qui reflète le formulaire de déclaration du Belastingdienst :

| Section | Codes |
|---|---|
| 1. Prestaties binnenland | 1a, 1b, 1c, 1d, 1e |
| 2. Verleggingsregelingen binnenland | 2a |
| 3. Prestaties naar of in het buitenland | 3a, 3b, 3c |
| 4. Prestaties vanuit het buitenland aan u verricht | 4a, 4b |
| 5. Voorbelasting en berekening totaal | 5a, 5b, 5c |

Chaque ligne montre le chiffre d'affaires (HT) et le montant de TVA. La barre du bas affiche le total à payer ou à récupérer. Les corrections hors formulaire (KOR, suppletie) apparaissent sur une ligne d'ajustement distincte, pour que ce que vous payez réellement reste visible.

### Exports pour votre comptable

Une carte de téléchargement à côté de la feuille propose des exports CSV : un export complet pour votre comptable, un récapitulatif de TVA du trimestre choisi et une vue annuelle.

### Cartes internationales

Quand vous avez de l'activité internationale, des cartes complémentaires apparaissent sous la feuille :

- **ICP-opgaaf** : ventes B2B intra-UE groupées par client. Obligatoire quand vous avez vendu à des clients assujettis à la TVA dans d'autres pays de l'UE.
- **Ventilation OSS** : ventes B2C par pays pour le guichet unique (One Stop Shop).
- **TVA étrangère** : TVA étrangère qui vous a été facturée et qui peut être récupérable via la procédure de remboursement de l'UE.
- **Corrections** : prélèvements privés, suppletie et autres ajustements intégrés aux totaux de la période.

Ces cartes restent masquées tant qu'il n'y a pas de données internationales réelles ; la plupart des espaces de travail ne les voient jamais.

## Onglet Transactions

Une liste à plat de chaque facture et dépense alimentant la période choisie, utile pour vérifier des enregistrements avant de déposer. Des puces de filtre réduisent la liste : **Tout**, **Sans justificatif**, **Sans TVA**, **Autoliquidation** et **TVA étrangère**, chacune avec un compteur. Chaque ligne renvoie vers la facture ou la dépense concernée.

## Verrouillage des périodes

Une barre de synthèse en haut de la page TVA indique combien de périodes sont verrouillées ; dépliez-la pour les gérer.

- **Verrouillage automatique** : dès que l'échéance de dépôt d'une période est passée, MyCompanyDesk la verrouille automatiquement, pour que votre comptabilité reste conforme à la déclaration déposée.
- **Verrouillage manuel** : des puces de période vous permettent de verrouiller vous-même toute période écoulée de l'année choisie, par exemple juste après un dépôt anticipé. Verrouiller une période encore en cours déclenche d'abord un avertissement.
- **Marquer comme déposée** : signalez une période verrouillée comme déposée dès que la déclaration est faite. Les trimestres déposés l'affichent aussi dans la bande des trimestres.
- **Déverrouillage temporaire** : besoin de corriger quelque chose ? Déverrouillez une période temporairement (72 heures) ; elle se reverrouille d'elle-même, ou reverrouillez plus tôt à la main. Supprimer entièrement un verrou n'est possible que tant que l'échéance de dépôt n'est pas passée.

Modifier une facture ou une dépense dans une période verrouillée est bloqué dans le formulaire : les champs financiers passent en lecture seule (les notes restent modifiables) et le formulaire propose un chemin de correction, comme une correction dans la période ouverte en cours ou une facture rectificative.

## KOR

Le régime des petites entreprises (kleineondernemersregeling) se gère sous **Paramètres → TVA** : une carte suit votre chiffre d'affaires annuel par rapport au seuil de 20 000 € avec une barre de progression, explique ce que l'adhésion implique pour vos factures et contient l'interrupteur d'adhésion. Tant que votre chiffre d'affaires reste sous la zone KOR, la page TVA affiche un rappel qui y mène.

## KIA et Box 3

La KIA (kleinschaligheidsinvesteringsaftrek) et la Box 3 relèvent de l'impôt sur le revenu et se trouvent sous **Rapports → Impôt sur le revenu**, pas sur la page TVA. La carte Box 3 n'apparaît que pour les espaces de travail utilisant le module immobilier.

## Assistant TVA

L'assistant intégré répond aux questions sur votre déclaration avec les chiffres de votre propre espace de travail, et ses réponses peuvent mener directement à l'onglet ou à l'enregistrement concerné.

## Conseils

- Réglez la période de la page sur celle que vous déclarez ; chaque carte et chaque chiffre suivent.
- Passez les contrôles en revue avant d'ouvrir l'onglet Déclaration ; une liste propre signifie généralement que la feuille des rubriques correspond au formulaire du Belastingdienst.
- Utilisez la provision comme objectif de mise de côté ; la marge de 10 % y est déjà incluse.
- L'anneau d'échéance passe au rouge à trois jours. Prenez-le comme un signal ferme de déposer.
- Vous vendez en B2B dans l'UE ? Ouvrez la carte ICP-opgaaf avant de déposer ; c'est une déclaration séparée qu'on oublie facilement.
- Marquez une période comme déposée juste après le dépôt, puis laissez le verrouillage automatique la protéger.
