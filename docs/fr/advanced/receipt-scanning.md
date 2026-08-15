---
title: Numerisation de recus
---

# Numerisation de recus

Extrayez automatiquement les donnees de depenses a partir d'images de recus et de factures PDF grace a l'OCR alimente par l'IA.

::: info
La numérisation de reçus est disponible sur tous les plans, avec une limite mensuelle sur le nombre de scans : 3 avec Gratuit, 30 avec Starter et 200 avec Pro. La limite est réinitialisée le premier de chaque mois civil.
:::

## Vue d'ensemble

Au lieu de saisir manuellement chaque depense, prenez une photo d'un recu ou telechargez un PDF et laissez MyCompanyDesk extraire automatiquement les details.

## Formats pris en charge

- **Images** -- JPEG, PNG, WebP
- **PDF** -- Factures et recus PDF
<!-- TODO(source-missing): la limite effective des PDF pour le scan en ligne est maintenant de 15 MB dans le code du scanner et les chaînes de locale, tandis que cette page indique encore 50 Mo. Vérifier dans sources/ avant de mettre à jour. -->
- **Taille maximale de fichier** -- 50 Mo

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

## Conseils pour de meilleurs resultats

- **Bon eclairage** -- Prenez les photos dans de bonnes conditions d'eclairage
- **Surface plane** -- Placez le recu sur une surface plane
- **Recu complet** -- Assurez-vous que le recu entier est dans le cadre
- **Texte lisible** -- Verifiez que le texte est lisible et non flou
- **Un recu par scan** -- Numerisez les recus individuellement pour une meilleure precision

## Apres la numerisation

Une fois confirme, la depense est creee avec :

- Toutes les donnees extraites pre-remplies
- Le recu original joint en piece jointe
- Des suggestions de categorie (si les suggestions IA sont activees)

Lorsque le scanner determine le pays d'un fournisseur (par exemple un fournisseur etranger ou un numéro de registre neerlandais reconnu), le panneau de verification affiche egalement un selecteur de traitement de TVA. Le scanner propose une valeur par defaut en fonction du fournisseur et du montant, mais vous pouvez la modifier avant de confirmer. Cela compte pour les achats intracommunautaires en autoliquidation et pour les depenses d'importation en provenance d'un pays hors UE.

Vous pouvez modifier la depense par la suite comme n'importe quelle depense creee manuellement.

## Droits d'accès

Le scanner de reçus est soumis à la même permission de page que la page Dépenses. Un membre de l'équipe a besoin de l'accès Lecture à Dépenses pour ouvrir le scanner, et de l'accès Création pour confirmer un reçu scanné en une nouvelle dépense. Les membres sans permission Création voient toujours le scanner, mais ne peuvent pas finaliser la confirmation. Cela s'applique aussi bien aux téléversements depuis la page Dépenses qu'aux flux de photos partagés.

## Numériser plusieurs reçus

L'outil de téléchargement traite un fichier à la fois. Pour traiter plusieurs reçus, numérisez-les l'un après l'autre ; chaque scan compte une fois dans votre limite mensuelle. Pour un reçu ou une facture contenant plusieurs éléments, utilisez le mode d'extraction **Multiple** afin de créer plusieurs dépenses avec un seul scan.

## Conseils

- Numerisez les recus des que vous les recevez -- ne les laissez pas s'accumuler
- Verifiez attentivement le montant extrait, surtout pour les recus avec plusieurs devises
- Activez les suggestions IA pour une categorisation automatique apres la numerisation
- Conservez le fichier de recu original en piece jointe a des fins de controle fiscal
