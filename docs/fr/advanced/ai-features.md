---
title: Fonctionnalites IA
---

# Fonctionnalites IA

MyCompanyDesk integre des fonctionnalites alimentees par l'IA pour vous aider a travailler plus vite et plus intelligemment.

## Guide contextuel

L'assistant integre vous aide a naviguer dans MyCompanyDesk :

- Cliquez sur l'**icone d'aide** sur n'importe quelle page pour une aide adaptee au contexte
- Posez des questions sur les fonctionnalites, les flux de travail ou les parametres
- Obtenez des instructions etape par etape pour les taches courantes
- Disponible dans les quatre langues prises en charge

Le guide comprend sur quelle page vous vous trouvez et fournit des suggestions pertinentes.

### Limites de conversation

L'utilisation du chat depend de votre plan :

| Plan | Messages de chat |
|---|---|
| Gratuit | Limite |
| Pro | Allocation genereuse |
| Business | Allocation maximale |

### Reglement europeen sur l'IA -- transparence (art. 50)

Le guide contextuel releve du reglement europeen sur l'IA (Reglement 2024/1689) en tant que systeme d'IA a risque limite (article 50). Cela signifie que nous devons indiquer clairement que vous parlez a une IA. Deux mecanismes sont en place :

- **Badge IA.** Un petit pill "IA" a cote du nom de l'assistant. Toujours visible tant que le guide est ouvert. Une info-bulle sur le badge indique le fournisseur sous-jacent (Google Gemini).
- **Texte de transparence.** Une courte ligne sous la question d'accueil dans un chat vide : "Vous parlez avec un assistant IA. Les reponses peuvent contenir des erreurs ; verifiez toujours vous-meme les conclusions financieres ou fiscales."

L'obligation prend effet en aout 2026 ; les mesures de transparence ont ete integrees avant l'echeance.

## Suggestions IA

Des recommandations intelligentes qui vous aident a categoriser et decrire vos enregistrements :

### Categorisation des depenses

Lorsque vous creez une depense, l'IA analyse la description et suggere la categorie la plus appropriee. Cela fait gagner du temps et assure une categorisation coherente.

### Amelioration des descriptions

L'IA peut suggerer des descriptions plus claires et plus professionnelles pour :

- Les lignes de facturation
- Les descriptions de depenses
- Les notes clients

### Comment ca fonctionne

1. Creez ou modifiez un enregistrement
2. Recherchez l'indicateur de suggestion IA
3. Examinez la suggestion
4. Cliquez sur **Appliquer** pour l'utiliser, ou **Ignorer** pour passer

::: info
Les suggestions IA necessitent le plan **Pro** ou superieur. Activez-les dans **Entreprise > Fonctionnalites**.
:::

## Numerisation de recus

L'OCR alimente par l'IA extrait les donnees des images de recus et des PDF :

- **Date** -- Quand l'achat a ete effectue
- **Montant** -- Cout total
- **Fournisseur** -- A qui vous avez paye
- **Description** -- Ce qui a ete achete

Consultez [Numerisation de recus](/fr/advanced/receipt-scanning) pour des instructions detaillees.

## Verification de texte

Verification de la grammaire et de l'orthographe pour vos documents :

- Verifiez les descriptions de factures avant l'envoi
- Verifiez le contenu des devis
- Corrigez les fautes de frappe dans les textes destines aux clients

Prend en charge l'anglais, le neerlandais, l'allemand et le francais.

::: info
La verification de texte necessite le plan **Pro** ou superieur.
:::

## Resumes de compte

L'IA genere des resumes periodiques de votre activite commerciale :

- **Quotidien** -- Apercu rapide des transactions du jour
- **Hebdomadaire** -- Bilan de la semaine avec tendances
- **Mensuel** -- Analyse mensuelle complete

Les resumes sont generes dans votre langue preferee et disponibles depuis le tableau de bord.

## Confidentialite et protection des donnees

Toutes les fonctionnalites IA cloud passent par defaut par Vertex AI dans `europe-west1` (UE). MyCompanyDesk a un accord de traitement des donnees (DPA) avec Google Cloud pour Vertex AI. Ollama Cloud (ollama.com, heberge aux Etats-Unis) est desactive par defaut car aucun DPA ni clauses contractuelles types n'existent avec Ollama Inc. Vous pouvez l'activer par workspace pour des charges sans donnees personnelles, mais il est desactive pour tous les plans.

Si vous passez `ai_processing_mode` sur `local_only`, la numerisation de recus, les suggestions IA, la verification de texte, la classification des fournisseurs et la detection de secteur restent entierement sur votre propre serveur. Le guide contextuel fonctionne uniquement dans le cloud et est desactive en mode `local_only`.

## Conseils

- Activez les suggestions IA une fois et elles fonctionnent automatiquement en arriere-plan
- La numerisation de recus est particulierement utile pour les recus papier -- prenez simplement une photo
- Le guide contextuel peut repondre a la plupart des questions "comment faire..." concernant l'application
