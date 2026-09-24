---
title: Numerisation de recus
description: "Photographiez un reçu ou déposez un PDF, l'OCR assistée par IA remplit la dépense. Par mois : 3 scans sur Desk et 200 sur Office."
---

# Numerisation de recus

Extrayez automatiquement les donnees de depenses a partir d'images de recus et de factures PDF grace a l'OCR alimente par l'IA.

::: info
La numérisation de reçus est disponible sur tous les plans, avec une limite mensuelle sur le nombre de scans : 3 sur Desk et 200 sur Office. La limite est réinitialisée le premier de chaque mois civil.
:::

## Vue d'ensemble

Au lieu de saisir manuellement chaque depense, prenez une photo d'un recu ou telechargez un PDF et laissez MyCompanyDesk extraire automatiquement les details.

## Formats pris en charge

- **Images** -- JPEG, PNG, WebP
- **PDF** -- Factures et recus PDF
<!-- TODO(source-missing): la limite effective des PDF pour le scan en ligne est maintenant de 15 MB dans le code du scanner et les chaînes de locale, tandis que cette page indique encore 50 Mo. Vérifier dans sources/ avant de mettre à jour. -->
- **Taille maximale de fichier** -- 50 Mo

Le scanner ne traite que les reçus avec des montants positifs. Les avoirs, les reçus de retour et les autres documents avec un total négatif sont rejetés; ajoutez-les manuellement comme une dépense avec un montant négatif.

::: tip Taille de fichier
Le scanner accepte les fichiers jusqu'à 50 Mo, mais le reçu joint à la dépense créée est limité à 10 Mo. Si vous numérisez un fichier plus grand, la dépense est quand même créée, mais le reçu n'est pas joint et un avertissement s'affiche. Vous pourrez ensuite ajouter le reçu manuellement sur la dépense, ou utiliser un fichier plus petit avant le scan.
:::

## Comment numeriser un recu

1. Allez dans **Depenses > Numeriser un recu**
2. Téléchargez votre fichier de reçu (glisser-déposer ou cliquez pour parcourir). Le scanner traite un fichier à la fois.
3. Ouvrez si besoin les options avancées et choisissez le mode d'extraction :
   - **Simple** : extraire une dépense du reçu
   - **Multiple** : extraire plusieurs lignes du même reçu (le mode par défaut)
4. Attendez le traitement (quelques secondes)
5. Verifiez les donnees extraites :
   - Date
   - Montant
   - Nom du fournisseur
   - Description / articles
6. Modifiez les champs necessitant une correction
7. Cliquez sur **Confirmer** pour creer la ou les depenses

## Modes d'extraction

### Mode simple

Ideal pour les recus simples avec un seul total :

- Additions de restaurant
- Recus de station-service
- Achats d'un seul article

Extrait : date, montant total, fournisseur, description.

### Mode multiple

Ideal pour les recus detailles ou les factures :

- Commandes de fournitures de bureau avec plusieurs articles
- Factures fournisseurs avec lignes de detail
- Listes de courses

Extrait : lignes individuelles avec descriptions et montants.

## Parametres avances

Le scanner dispose d'un panneau d'options avancées :

- **Instructions** : ajoutez du contexte en texte libre pour aider l'IA (par ex., « Ceci est un reçu néerlandais d'Albert Heijn »)
- **Mode d'extraction** : une dépense unique ou plusieurs lignes (par défaut : multiple)
- **Catégorie** : limitez l'extraction à une catégorie de dépenses, ou laissez toutes les catégories
- **Tags de filtrage** : des mots-clés ; seuls les éléments correspondant aux tags sont extraits
- **Fourchette de prix** : un montant minimum et maximum ; les éléments hors fourchette sont ignorés
- **Joindre le reçu** : si le fichier original est joint à la dépense créée (activé par défaut)

## Limites de numérisation

Les reçus et factures comportant trop de lignes pour être traités en une seule fois sont refusés avec un message indiquant que le nombre de lignes est trop élevé. Si ce message apparaît, divisez le document en parties plus petites (par exemple une page ou un plus petit groupe de lignes à la fois) ou saisissez les dépenses manuellement.

## Conseils pour de meilleurs resultats

- **Bon éclairage** -- Prenez les photos dans de bonnes conditions d'éclairage
- **Surface plane** -- Placez le reçu sur une surface plane
- **Reçu complet** -- Assurez-vous que le reçu entier est dans le cadre
- **Texte lisible** -- Vérifiez que le texte est lisible et non flou
- **Un reçu par scan** -- Numérisez les reçus individuellement pour une meilleure précision

## Après la numérisation

Une fois confirmé, la dépense est créée avec :

- Toutes les données extraites pré-remplies
- Le reçu original joint en pièce jointe
- Des suggestions de catégorie (si les suggestions IA sont activées)

Lorsque le scanner détermine le pays d'un fournisseur (par exemple un fournisseur étranger ou un numéro de registre néerlandais reconnu), le panneau de vérification affiche également un sélecteur de traitement de TVA. Le scanner propose une valeur par défaut en fonction du fournisseur et du montant, mais vous pouvez la modifier avant de confirmer. Cela compte pour les achats intracommunautaires en autoliquidation et pour les dépenses d'importation en provenance d'un pays hors UE.

Vous pouvez modifier la dépense par la suite comme n'importe quelle dépense créée manuellement.

## Devise et doubles saisies

Le scanner reconnaît quand un document est dans une devise autre que l'euro. Dans ce cas, la carte de vérification affiche le montant original avec sa devise et un champ séparé où vous saisissez le montant en euros tel que votre banque l'a converti. Les lignes en devise étrangère ne peuvent être confirmées que lorsque le montant en euros est renseigné. Si le document est déjà en euros, la carte affiche "C'est juste de l'euro" et le processus reste inchangé.

Quand le scanner pense qu'un reçu a déjà été saisi, il affiche un avertissement avec la date, le fournisseur et le montant de la dépense existante. Vous pouvez ouvrir cette dépense ou choisir de saisir le reçu à nouveau si l'avertissement est erroné. Cette vérification est une protection souple, pas un blocage dur ; elle empêche seulement de saisir deux fois le même reçu par inadvertance.

Le scanner peut aussi reconnaître vos propres factures de vente et avertir que le document ressemble plutôt à une facture de vente qu'à une dépense. Cet avertissement ne bloque pas ; vous pouvez toujours continuer s'il s'agit d'un retour ou d'une correction.

## Droits d'accès

Le scanner de reçus est soumis à la même permission de page que la page Dépenses. Un membre de l'équipe a besoin de l'accès Lecture à Dépenses pour ouvrir le scanner, et de l'accès Création pour confirmer un reçu scanné en une nouvelle dépense. Les membres sans permission Création voient toujours le scanner, mais ne peuvent pas finaliser la confirmation. Cela s'applique aussi bien aux téléversements depuis la page Dépenses qu'aux flux de photos partagés.

## Numériser plusieurs reçus

L'outil de téléchargement traite un fichier à la fois. Pour traiter plusieurs reçus, numérisez-les l'un après l'autre ; chaque scan compte une fois dans votre limite mensuelle. Pour un reçu ou une facture contenant plusieurs éléments, utilisez le mode d'extraction **Multiple** afin de créer plusieurs dépenses avec un seul scan.

## Conseils

- Numérisez les reçus dès que vous les recevez -- ne les laissez pas s'accumuler
- Vérifiez attentivement le montant extrait, surtout pour les reçus avec plusieurs devises
- Activez les suggestions IA pour une catégorisation automatique après la numérisation
- Conservez le fichier de reçu original en pièce jointe à des fins de contrôle fiscal
- Pour les reçus en devise étrangère, vérifiez toujours que le montant en euros correspond au taux de conversion de votre banque
- Doute d'un avertissement de double saisie ? Ouvrez la dépense existante pour vérifier
