---
title: Numérisation de reçus
description: "Photographiez un reçu ou déposez un PDF, l'OCR assistée par IA remplit la dépense. Par mois : 3 scans avec Desk, 200 avec Office."
---

# Numérisation de reçus

Extrayez automatiquement les données de dépenses à partir de photos de reçus et de factures PDF, grâce à l'OCR assistée par IA.

::: info
La numérisation de reçus est disponible sur tous les plans, avec une limite mensuelle sur le nombre de scans : 3 avec Desk et 200 avec Office. La limite est réinitialisée le premier de chaque mois civil. Une fois vos scans épuisés, vous pouvez toujours joindre le reçu et remplir les informations vous-même.
:::

## Vue d'ensemble

Au lieu de saisir manuellement chaque dépense, prenez une photo d'un reçu ou téléversez un PDF et laissez MyCompanyDesk extraire automatiquement les détails.

## Formats pris en charge

- **Images** : JPEG, PNG et WebP. Les photos HEIC (le format par défaut de l'iPhone) ne fonctionnent pas ; faites plutôt une capture d'écran ou réglez votre appareil photo sur JPEG.
- **PDF** : factures et reçus PDF, jusqu'à 15 Mo par fichier. Découpez un PDF plus volumineux en fichiers plus petits.
- **Taille maximale de fichier** : 50 Mo. Les grandes photos sont automatiquement réduites avant la lecture.

Vous pouvez numériser un avoir ou un reçu de retour (total négatif) comme n'importe quel autre reçu. La carte de vérification indique une telle ligne comme avoir, avec un montant négatif, pour que vous la voyiez avant de l'enregistrer. Seul l'enregistrement automatique des reçus de votre boîte de réception ignore les avoirs ; numérisez-les vous-même.

::: tip Taille de fichier
Le reçu joint à la dépense créée est limité à 10 Mo. Si vous numérisez un fichier plus grand, la dépense est quand même créée, mais le reçu n'est pas joint et un avertissement s'affiche. Vous pourrez ensuite ajouter le reçu manuellement sur la dépense, ou utiliser un fichier plus petit avant le scan.
:::

## Comment numériser un reçu

Le plus rapide passe par le formulaire de dépense habituel :

1. Allez dans **Dépenses** et cliquez sur **Ajouter**.
2. Choisissez **Scanner un reçu** pour prendre une photo, ou téléversez un fichier (photo ou PDF).
3. Patientez quelques secondes. Le fournisseur, le montant, la TVA et la date sont remplis pour vous.
4. Vérifiez les informations, corrigez ce qui ne va pas et enregistrez la dépense.

Pour extraire plusieurs lignes d'un même document ou orienter le scanner, utilisez la page **Scanner un reçu**. Elle s'ouvre quand vous choisissez un fichier sous **Commencez par un reçu** dans le formulaire complet (**Ouvrez le formulaire complet**), ou, avec Office, quand vous choisissez **Scanner et comptabiliser** pour une pièce jointe de votre boîte de réception. Le scan démarre aussitôt.

1. Pour régler des options d'abord, cliquez sur **Nouveau scan** après un scan et ouvrez **Paramètres avancés**. Sous **Mode d'extraction**, choisissez :
   - **Total unique** : une dépense pour le total du reçu (le mode par défaut)
   - **Plusieurs postes** : une dépense par ligne du même reçu
2. Téléversez votre fichier (glisser-déposer ou cliquez pour parcourir) et cliquez sur **Scanner maintenant**. Le scanner traite un fichier à la fois et termine en quelques secondes.
3. Vérifiez les données extraites :
   - Date
   - Montant
   - Nom du fournisseur
   - Description / articles
4. Modifiez les champs qui nécessitent une correction.
5. Cliquez sur **Ajouter 1 dépense** (ou par exemple **Ajouter 3 dépenses** pour plusieurs lignes) pour créer la ou les dépenses.

## Modes d'extraction

### Total unique

Idéal pour les reçus simples et la plupart des factures :

- Additions de restaurant
- Reçus de station-service
- Achats d'un seul article

Extrait : date, montant total, fournisseur, description.

### Plusieurs postes

Idéal si vous voulez enregistrer les lignes d'un reçu ou d'une facture comme des dépenses distinctes :

- Commandes de fournitures de bureau avec plusieurs articles
- Factures fournisseurs avec lignes de détail
- Listes de courses

Extrait : lignes individuelles avec descriptions et montants.

## Paramètres avancés

Le scanner dispose d'un panneau d'options avancées :

- **Instructions** : indiquez au scanner, en 200 caractères maximum, ce qu'il doit regarder ou ignorer (par ex. « Uniquement les frais de carburant, ignorer le stationnement »)
- **Mode d'extraction** : **Total unique** ou **Plusieurs postes** (par défaut : Total unique)
- **Type de dépense** : limitez le scan à une catégorie de dépenses, ou laissez **Toute catégorie (auto-détection)**
- **Filtrer par correspondance exacte** : des mots-clés ; seules les lignes dont la description ou le fournisseur correspond à au moins un mot-clé sont reprises
- **Fourchette de prix (TTC)** : un montant minimum et maximum ; les lignes hors fourchette sont ignorées
- **Joindre le reçu aux dépenses** : si le fichier original est joint à chaque dépense créée (activé par défaut)

## Limites de numérisation

Les reçus et factures comportant trop de lignes pour être traités en une seule fois sont refusés avec un message indiquant que le nombre de lignes est trop élevé. Si ce message apparaît, divisez le document en parties plus petites (par exemple une page ou un plus petit groupe de lignes à la fois) ou saisissez les dépenses manuellement.

## Conseils pour de meilleurs résultats

- **Bon éclairage**: Prenez les photos dans de bonnes conditions d'éclairage
- **Surface plane**: Placez le reçu sur une surface plane
- **Reçu complet**: Assurez-vous que le reçu entier est dans le cadre
- **Texte lisible**: Vérifiez que le texte est lisible et non flou
- **Un reçu par scan**: Numérisez les reçus individuellement pour une meilleure précision

## Après la numérisation

Une fois confirmé, la dépense est créée avec :

- Toutes les données extraites pré-remplies
- Le reçu original joint en pièce jointe
- Une catégorie et un taux de TVA proposés ; si la carte indique qu'ils ont été devinés, vérifiez-les rapidement

Lorsque le scanner détermine le pays d'un fournisseur (par exemple un fournisseur étranger ou un numéro de registre néerlandais reconnu), le panneau de vérification affiche également un sélecteur de traitement de TVA. Le scanner propose une valeur par défaut en fonction du fournisseur et du montant, mais vous pouvez la modifier avant de confirmer. Cela compte pour les achats intracommunautaires en autoliquidation et pour les dépenses d'importation en provenance d'un pays hors UE.

Vous pouvez modifier la dépense par la suite comme n'importe quelle dépense créée manuellement.

## Devise et doubles saisies

Le scanner reconnaît quand un document est dans une devise autre que l'euro. Dans ce cas, la carte de vérification affiche le montant original avec sa devise et un champ séparé où vous saisissez le montant en euros tel que votre banque l'a converti. Les lignes en devise étrangère ne peuvent être confirmées que lorsque le montant en euros est renseigné. Si le document est déjà en euros, la carte affiche « C'est simplement des euros » et le processus reste inchangé.

Quand le scanner pense qu'un reçu a déjà été saisi, il affiche un avertissement avec la date, le fournisseur et le montant de la dépense existante. Vous pouvez ouvrir cette dépense ou choisir de saisir le reçu à nouveau si l'avertissement est erroné ; l'enregistrement demande alors encore une fois, avec « Deux fois la même dépense ? », avant de saisir. Cette vérification est une protection souple, pas un blocage dur ; elle empêche seulement de saisir deux fois le même reçu par inadvertance.

Qu'une dépense existe déjà dans vos livres pour le reçu numérisé, ou tout proche, la carte de vérification porte le bouton **Joindre le justificatif ici** (tant que cette dépense n'a pas encore de reçu) : le reçu s'attache comme pièce à la dépense existante au lieu d'en saisir une deuxième, la ligne disparaît de la vérification, et à la dernière ligne vous atterrissez directement sur cette dépense. Une dépense qui porte déjà un reçu n'en reçoit jamais un deuxième par-dessus.

Les lignes d'un même reçu restent des coûts séparés : trois tickets de parking identiques sur un même reçu se saisissent comme trois coûts, et le montant doublé est signalé au lieu d'être passé sous silence. Quand tout le lot figure déjà dans vos livres, la confirmation le dit, au lieu de tout saisir une deuxième fois.

Le scanner peut aussi reconnaître vos propres factures de vente et avertir que le document ressemble plutôt à une facture de vente qu'à une dépense. Cet avertissement ne bloque pas ; vous pouvez toujours continuer s'il s'agit d'un retour ou d'une correction.

## Droits d'accès

Le scanner de reçus est soumis à la même permission de page que la page Dépenses. Un membre de l'équipe a besoin du droit **Lire** sur Dépenses pour ouvrir le scanner, et du droit **Créer** pour confirmer un reçu scanné en une nouvelle dépense. Les membres sans le droit Créer voient toujours le scanner, mais ne peuvent pas finaliser la confirmation. Cela s'applique aussi bien aux téléversements depuis la page Dépenses qu'aux flux de photos partagés.

## Numériser plusieurs reçus

L'outil de téléchargement traite un fichier à la fois. Pour traiter plusieurs reçus, numérisez-les l'un après l'autre ; chaque scan compte une fois dans votre limite mensuelle. Pour un reçu ou une facture contenant plusieurs éléments, choisissez **Plusieurs postes** afin de créer plusieurs dépenses avec un seul scan.

## Conseils

- Numérisez les reçus dès que vous les recevez : ne les laissez pas s'accumuler
- Vérifiez attentivement le montant extrait, surtout pour les reçus avec plusieurs devises
- Conservez le fichier de reçu original en pièce jointe à des fins de contrôle fiscal
- Pour les reçus en devise étrangère, vérifiez toujours que le montant en euros correspond au taux de conversion de votre banque
- Doute d'un avertissement de double saisie ? Ouvrez la dépense existante pour vérifier
