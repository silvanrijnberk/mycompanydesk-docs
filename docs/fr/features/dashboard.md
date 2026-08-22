---
title: Tableau de bord
description: "L'écran d'accueil de votre espace : sélecteur de période, résumé des indicateurs, un widget d'alerte et des blocs qui n'apparaissent que si utiles."
last_verified: 2026-08-22
---

# Tableau de bord

Le tableau de bord sur `/dashboard` est l'écran d'accueil de votre espace de travail. Il répond à une question : comment va votre entreprise en ce moment ? Vous y voyez un sélecteur de période, une rangée de cinq tuiles d'indicateurs, un court widget d'attention et plusieurs blocs de données qui n'apparaissent que si vos données indiquent qu'ils sont utiles.

## Structure

La page est constituée d'un catalogue fixe de blocs dans une vue scrollable unique. L'ordre ne change jamais, mais un bloc ne s'affiche que si vos données franchissent le seuil. Une entreprise simple voit donc une page plus courte, et non des espaces vides.

En haut se trouvent le sélecteur de période et la rangée d'indicateurs. Sous celle-ci vient le widget d'attention, puis des blocs d'appoint comme la tendance, l'âge des créances, les sources de revenus, le pipeline de devis, le mix de dépenses, le graphique de trésorerie, la carte TVA et l'activité récente.

## Sélecteur de période

Tous les chiffres de la rangée d'indicateurs et les calculs de rythme suivent la période choisie. Vous choisissez entre **mois**, **trimestre** et **année**. Le graphique de tendance reste toujours sur 12 mois, pour que la comparaison reste honnête.

## Rangée d'indicateurs

La rangée d'indicateurs affiche cinq cartes distinctes. Chaque carte montre un chiffre principal, une comparaison avec la période comparable précédente lorsqu'une comparaison honnête est possible, et une petite courbe de tendance. Les cartes partagent la même bordure, le même arrondi et la même grille que les blocs en dessous, pour que la rangée fasse partie du tableau de bord plutôt que d'apparaître comme une bande de tableau séparée. Chaque carte renvoie vers le rapport ou la liste correspondant.

| Carte | Ce que vous voyez |
|---|---|
| **Trésorerie** | Position de trésorerie actuelle, issue d'un compte bancaire connecté ou d'un solde estimé, plus le runway en semaines |
| **Créances** | Factures en cours, avec la part en retard explicitement indiquée |
| **Chiffre d'affaires** | Chiffre d'affaires de la période choisie et le rythme prévisionnel pour la période complète, avec l'évolution par rapport à la période comparable précédente |
| **Dettes à payer** | Argent que vous devez encore payer, avec la part en retard explicitement indiquée |
| **Bénéfice** | Bénéfice net de la période choisie, avec la marge lorsqu'elle peut être calculée |

La carte Trésorerie garde une teinte de marque subtile pour guider le regard, mais elle a la même largeur que les autres. Lorsque le chiffre de trésorerie provient d'un compte bancaire connecté, la carte affiche aussi l'heure de la dernière synchronisation.

Une carte sans historique honnête s'affiche sans courbe de tendance plutôt qu'avec une ligne plate inventée. La courbe de tendance vit à l'intérieur de sa propre carte sous un remplissage doux, et la couleur de la ligne suit la signification de la carte : une perte se dessine dans la couleur d'erreur même si l'emplacement est Bénéfice, et un vrai solde bancaire montre sa trajectoire au lieu d'une bande vide. Le badge d'évolution se trouve sur la ligne du libellé plutôt qu'à côté du chiffre, pour qu'un pourcentage de variation ne soit pas lu comme faisant partie du nombre auquel il se réfère. La couleur du badge suit le sens, pas seulement la direction : des créances qui augmentent sont une mauvaise nouvelle même si la flèche pointe vers le haut.

## Widget d'attention

Le widget d'attention est alimenté par le moteur de signaux Vandaag. Il affiche jusqu'à quatre tâches qui demandent une action aujourd'hui ou cette semaine. Chaque ligne montre un point de sévérité, un titre court et un lien vers l'enregistrement. Le widget ne montre que des tâches ; il ne contient pas la liste complète classée, les preuves chiffrées ni les boutons d'action. La liste complète se trouve dans le panneau de notifications.

Le moteur Vandaag classe les signaux en quatre niveaux de sévérité :

- **critical** : de l'argent s'échappe ou une échéance ferme approche
- **attention** : une tâche concrète, aujourd'hui ou cette semaine
- **upcoming** : daté, mais pas encore urgent
- **good** : une bonne nouvelle que vous avez méritée

Le moteur est déterministe. Aucun modèle n'intervient dans la production des signaux, donc la page reste utile lorsque la couche IA est indisponible.

## Blocs d'appoint

Les blocs sous la rangée d'indicateurs n'apparaissent que s'ils méritent leur place. Le catalogue décide à la fois si un bloc s'affiche et quelle forme il prend.

| Bloc | Contenu |
|---|---|
| **Tendance** | Graphique 12 mois avec chiffre d'affaires et coûts côte à côte, plus la ligne de bénéfice |
| **Âge des créances** | Créances réparties par tranche d'âge |
| **Sources de revenus** | Plus grands clients par chiffre d'affaires depuis le début de l'année |
| **Devis** | Pipeline de devis ouverts et devis à expiration |
| **Mix de dépenses** | Répartition des coûts par catégorie, sous forme de barres ou de treemap selon l'espace |
| **Graphique de trésorerie** | Position de trésorerie sur 12 mois avec prévision |
| **Activité** | Événements récents de facturation, paiement et dépense |
| **Carte TVA** | Période TVA en cours, progression de la checklist et prochaine échéance |

Sur téléphone, les formes visuelles larges comme les treemaps ou les entonnoirs basculent vers des formes plus simples pour que les chiffres restent lisibles.

## Écran de première utilisation

Un tout nouvel espace de travail sans factures ni clients atterrit sur un écran de première utilisation calme au lieu du tableau de bord complet. Il propose une action claire : créer votre première facture. Un petit panneau de découverte vous invite aussi à personnaliser le style des factures, le site web ou la sécurité du compte. Fermer le panneau ne cache que le panneau ; envoyer votre première facture quitte l'écran de première utilisation. Vous pouvez aussi sauter l'écran avec l'option **Afficher mon tableau de bord**.

## Carte de prise en main

Tant que la checklist de configuration a des étapes ouvertes, une carte épinglée apparaît au-dessus du tableau de bord. Elle liste les étapes restantes et offre un lien vers l'assistant de configuration. La fermeture est mémorisée côté serveur, donc la carte reste masquée sur tous vos appareils. L'assistant n'est pas bloquant : les nouveaux utilisateurs arrivent directement sur `/dashboard`.

## Chargement et états d'erreur

Pendant que le tableau de bord détermine s'il s'agit d'un espace de première utilisation et charge le briefing, un squelette reflète la forme finale de la page. Si la récupération de Vandaag échoue, la page affiche une erreur explicite avec un bouton réessayer au lieu d'un tout va bien construit à partir de données vides. Si un changement de période échoue alors que d'anciens chiffres sont encore à l'écran, un avis de données obsolètes apparaît avec un bouton réessayer en ligne.

## Voir aussi

- [Utiliser le tableau de bord](/fr/faq/use-dashboard)
- [Rapports](/fr/features/reports)
- [Clients](/fr/features/customers)
- [Factures](/fr/features/invoices)
- [TVA](/fr/features/vat)
