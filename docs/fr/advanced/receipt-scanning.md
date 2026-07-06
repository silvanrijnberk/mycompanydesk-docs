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
- **Taille maximale de fichier** -- 50 Mo

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

Vous pouvez modifier la depense par la suite comme n'importe quelle depense creee manuellement.

## Numériser plusieurs reçus

L'outil de téléchargement traite un fichier à la fois. Pour traiter plusieurs reçus, numérisez-les l'un après l'autre ; chaque scan compte une fois dans votre limite mensuelle. Pour un reçu ou une facture contenant plusieurs éléments, utilisez le mode d'extraction **Multiple** afin de créer plusieurs dépenses avec un seul scan.

## Conseils

- Numerisez les recus des que vous les recevez -- ne les laissez pas s'accumuler
- Verifiez attentivement le montant extrait, surtout pour les recus avec plusieurs devises
- Activez les suggestions IA pour une categorisation automatique apres la numerisation
- Conservez le fichier de recu original en piece jointe a des fins de controle fiscal
