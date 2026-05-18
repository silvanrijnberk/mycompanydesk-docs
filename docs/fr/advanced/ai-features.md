---
title: Fonctionnalites IA
---

# Fonctionnalites IA

MyCompanyDesk inclut des fonctionnalites basees sur l'IA pour vous aider a travailler plus vite et plus intelligemment.

## Guide contextuel

L'assistant integre vous aide a naviguer dans MyCompanyDesk :

- Cliquez sur l'**icone d'aide** sur chaque page pour obtenir une aide contextuelle
- Posez des questions sur les fonctionnalites, les workflows ou les parametres
- Obtenez des instructions etape par etape pour les taches courantes
- Disponible dans les quatre langues prises en charge

Le guide comprend sur quelle page vous vous trouvez et donne des suggestions pertinentes.

### Limites de chat

L'utilisation du chat depend de votre plan :

| Plan | Messages de chat (mensuel) |
|---|---|
| Gratuit | 10 |
| Starter | 100 |
| Pro | 1 000 |

Les limites IA sont mensuelles, et non quotidiennes. Elles sont reinitialisees le premier de chaque mois.

### Divulgation selon la loi europeenne sur l'IA (art. 50)

Le guide contextuel est classe comme un systeme d'IA a risque limite en vertu de l'article 50 du reglement europeen sur l'IA (Reglement 2024/1689). Cela signifie que nous devons indiquer clairement que vous interagissez avec une IA. Le guide contient deux elements a cet effet :

- **Badge IA.** Une petite pastille "IA" a cote du nom de l'assistant. Toujours visible lorsque le guide est ouvert. Une info-bulle sur le badge indique le fournisseur sous-jacent (Google Gemini).
- **Texte de divulgation.** Une courte ligne sous la question de bienvenue dans un etat de chat vide : "Vous parlez a un assistant IA. Les reponses peuvent contenir des erreurs ; verifiez toujours vous-meme les conclusions financieres ou fiscales."

L'obligation entre en vigueur en aout 2026 ; les divulgations ont ete mises en place avant la date limite.

## Suggestions IA

Des recommandations intelligentes qui vous aident a categoriser et decrire vos enregistrements :

### Categorisation des depenses

Lorsque vous creez une depense, l'IA analyse la description et suggere la categorie la plus appropriee. Cela fait gagner du temps et garantit une categorisation coherente.

### Ameliorations des descriptions

L'IA peut suggerer des descriptions plus claires et plus professionnelles pour :

- Les lignes de facture
- Les descriptions de depenses
- Les notes clients

### Comment ca marche

1. Creez ou modifiez un enregistrement
2. Surveillez l'indicateur de suggestion IA
3. Examinez la suggestion
4. Cliquez sur **Appliquer** pour l'utiliser, ou sur **Ignorer** pour passer

::: info
Les suggestions IA necessitent le plan **Starter** ou superieur. Activez-les via **Entreprise > Fonctionnalites**.
:::

## Numerisation des recus

L'OCR alimentee par l'IA extrait les donnees des images de recus et des PDF :

- **Date** -- Quand l'achat a ete effectue
- **Montant** -- Cout total
- **Fournisseur** -- A qui vous avez paye
- **Description** -- Ce qui a ete achete

Voir [Numerisation des recus](/fr/advanced/receipt-scanning) pour des instructions detaillees.

## Verification du texte

Verification grammaticale et orthographique pour vos documents :

- Verifiez les descriptions de facture avant envoi
- Verifiez le contenu des devis
- Corrigez les fautes de frappe dans les textes destines aux clients

Prend en charge l'anglais, le neerlandais, l'allemand et le francais.

::: info
La verification du texte est disponible sur tous les plans, y compris Gratuit.
:::

## Resumes de compte

L'IA genere des resumes periodiques de votre activite commerciale :

- **Quotidien** -- Apercu rapide des transactions du jour
- **Hebdomadaire** -- Resume hebdomadaire avec tendances
- **Mensuel** -- Analyse mensuelle complete

Les resumes sont generes dans votre langue preferee et sont disponibles depuis le tableau de bord.

## Droits par plan

| Fonctionnalite | Gratuit | Starter | Pro |
|---|---|---|---|
| Guide contextuel | Limite, FAQ uniquement en debordement | Standard | Limite la plus elevee |
| Suggestions IA | Desactive | Active | Active |
| Classification des fournisseurs | Desactive | Active | Active |
| Numerisation des recus | Desactive | Active | Active |
| Verification du texte | Active | Active | Active |
| Traduction | Active (UI uniquement) | Active | Active |

## Confidentialite

Tous les chemins d'IA cloud passent par defaut par Vertex AI dans `europe-west1` (UE). MyCompanyDesk a un accord de traitement des donnees avec Google Cloud pour l'utilisation de Vertex AI. Ollama Cloud (ollama.com, heberge aux Etats-Unis) est desactive par defaut car aucun accord de traitement des donnees n'existe avec Ollama Inc. Vous pouvez l'activer par espace de travail pour les charges de travail sans donnees personnelles, mais il est desactive pour tous les plans.

Si vous reglez `ai_processing_mode` sur `local_only`, la numerisation des recus, les suggestions IA, la verification du texte, la classification des fournisseurs et la detection du secteur restent entierement sur votre propre serveur. Le guide contextuel fonctionne uniquement dans le cloud et est desactive en mode `local_only`.

## Conseils

- Activez les suggestions IA une fois et elles fonctionnent automatiquement en arriere-plan
- La numerisation des recus est particulierement utile pour les recus papier -- prenez simplement une photo
- Le guide contextuel peut repondre a la plupart des questions "comment faire..." sur l'application
