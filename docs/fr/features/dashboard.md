---
title: Tableau de bord
last_verified: 2026-08-18
---

# Tableau de bord

Le tableau de bord sous `/dashboard` est l'écran d'accueil de votre espace de travail. Il montre l'état de votre entreprise en un clin d'œil : un court résumé, une liste priorisée de points à suivre et plusieurs blocs de données qui n'apparaissent que s'ils ont réellement quelque chose d'utile à dire.

## Structure

La page est constituée d'un ensemble fixe de blocs dans une seule vue défilante. L'ordre ne change jamais, mais un bloc n'est affiché que si les données de votre entreprise atteignent le seuil requis. Une entreprise simple voit donc une page plus courte, sans emplacement vide.

En haut de page se trouvent un bref **résumé introductif**, suivi d'un sélecteur de période et de la ligne d'indicateurs. Viennent ensuite les signaux **Vandaag** priorisés, puis des blocs d'appoint comme le graphique de tendance, l'ageing, les sources de revenus, le pipeline de devis, le mix de dépenses, le graphique de trésorerie, la carte TVA et l'activité récente.

## Sélecteur de période

Tous les chiffres de la ligne de résumé et des calculs de rythme suivent la période sélectionnée. Vous choisissez entre **mois**, **trimestre** et **année**. Le graphique de tendance reste toujours sur 12 mois pour que la comparaison reste honnête.

## Résumé introductif

Le résumé introductif est un court paragraphe qui synthétise l'image actuelle de l'entreprise. Il est généré à partir des mêmes données en direct que le reste de la page et lié aux signaux sous-jacents, de sorte que les noms, montants et routes ne peuvent pas diverger.

Par défaut, le résumé est déterministe. Pour les espaces de travail Pro, une couche IA peut le reformuler, mais le modèle ne fait que rephraser des faits que le moteur déterministe a déjà produits. Si le modèle n'est pas disponible, le résumé déterministe reste affiché.

## Ligne d'indicateurs

La ligne d'indicateurs contient jusqu'à cinq tuiles. Chaque tuile affiche un chiffre principal, une comparaison avec la période comparable précédente et une petite sparkline de tendance. Les tuiles renvoient vers le rapport ou la liste correspondante.

| Tuile | Contenu |
|---|---|
| **Chiffre d'affaires** | CA sur la période sélectionnée, avec évolution par rapport à la période précédente |
| **Coûts** | Coûts sur la période sélectionnée, avec évolution par rapport à la période précédente |
| **Bénéfice** | Bénéfice net sur la période sélectionnée, avec évolution par rapport à la période précédente |
| **Créances** | Factures en cours et days sales outstanding |
| **Liquidité / runway** | Position de trésorerie actuelle et runway estimée |

Une tuile sans historique honnête n'affiche pas de sparkline, plutôt qu'une ligne plate inventée. Des créances en hausse reçoivent par exemple une flèche vers le haut en couleur d'avertissement, car la direction et la signification sont évaluées séparément.

## Signaux Vandaag

Le moteur Vandaag est la couche de décision derrière le tableau de bord. Il classe les éléments qui demandent attention aujourd'hui selon quatre niveaux de gravité :

- **critical**: de l'argent s'échappe ou une échéance dure approche
- **attention**: une tâche concrète, aujourd'hui ou cette semaine
- **upcoming**: daté, mais pas encore urgent
- **good**: une bonne nouvelle réellement méritée

Chaque signal est une carte avec une constatation, une ligne d'explication sur son importance, des chiffres à l'appui et une action. Les actions possibles sont :

- un lien vers la page concernée
- activer les relances automatiques
- envoyer un rappel pour une facture spécifique
- fermer le signal

Les signaux peuvent être mis en sommeil. La carte disparaît immédiatement ; si l'appel serveur échoue, elle revient avec une explication. Après chaque action réussie, la liste se recharge pour que le classement reste correct.

Le moteur est déterministe. Aucun modèle n'intervient dans la production des signaux, donc la page reste pleinement utilisable si la couche IA est indisponible.

## Blocs d'appoint

Les blocs sous la ligne d'indicateurs n'apparaissent que s'ils méritent leur place. Le catalogue décide à la fois de l'affichage d'un bloc et de la forme qu'il prend.

| Bloc | Contenu |
|---|---|
| **Tendance** | Graphique 12 mois avec chiffre d'affaires et coûts côte à côte, plus la ligne de bénéfice |
| **Attention** | Principaux points ouverts demandant une action, issus du moteur de signaux |
| **Ageing** | Créances réparties par tranche d'âge |
| **Sources de revenus** | Plus grands clients par chiffre d'affaires cette année |
| **Devis** | Pipeline de devis ouverts et devis proches de l'expiration |
| **Mix de dépenses** | Répartition des coûts par catégorie, en barres ou treemap selon l'espace |
| **Graphique de trésorerie** | Position de trésorerie sur 12 mois avec prévision |
| **Activité** | Événements récents : factures créées, factures payées, dépenses ajoutées |
| **Carte TVA** | Période TVA en cours, progression de la checklist et prochaine échéance |

Sur téléphone, les formes visuelles comme les treemaps ou funnels basculent vers des formes plus simples pour que les chiffres restent lisibles.

## Écran de bienvenue

Sur un compte tout neuf sans factures ni clients, le tableau de bord affiche un écran de bienvenue au lieu du résumé complet. Il propose trois premiers pas : créer une facture, ajouter un client ou enregistrer une dépense. Dès qu'au moins une facture ou un client existe, l'écran de bienvenue disparaît et le tableau de bord complet prend sa place.

## Chargement et erreurs

Pendant le chargement des données, un skeleton placeholder reproduit la forme de chaque bloc. Un timeout caché de 2,5 secondes empêche le skeleton de bloquer l'utilisateur sur une connexion lente. La media query `prefers-reduced-motion: reduce` désactive toutes les animations d'entrée.

Si la récupération de Vandaag échoue, la page affiche une erreur explicite avec un bouton réessayer, plutôt qu'un faux tout-va-bien construit à partir de données vides. Si un changement de période échoue alors que d'anciens chiffres sont encore à l'écran, un avis d'obsolescence apparaît avec un bouton réessayer en ligne.

## Bannière de configuration

Tant que l'assistant de configuration sous `/setup` a encore des champs à remplir, une bannière s'affiche au-dessus du tableau de bord avec le nombre de champs en attente et un bouton **Continuer la configuration**. Elle peut être fermée par navigateur via localStorage et reste cachée jusqu'à ce que l'assistant soit terminé. L'assistant n'est pas bloquant : les nouvelles inscriptions arrivent directement sur `/dashboard`.

## Voir aussi

- [Utiliser le tableau de bord](/fr/faq/use-dashboard)
- [Rapports](/fr/features/reports)
- [Clients](/fr/features/customers)
- [Factures](/fr/features/invoices)
- [TVA](/fr/features/vat)
