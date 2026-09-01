---
title: Tableau de bord
description: "L'écran d'accueil de votre espace : salutation, sélecteur de période, résumé des indicateurs, widget d'alerte et blocs conditionnels."
last_verified: 2026-09-01
---

# Tableau de bord

Le tableau de bord sur `/dashboard` est l'écran d'accueil de votre espace de travail. Il répond à une question : comment va votre entreprise en ce moment ? Vous y voyez une salutation avec le moment de la journée et votre prénom, un sélecteur de période, une rangée de cinq tuiles d'indicateurs, un court widget d'attention et plusieurs blocs de données qui n'apparaissent que si vos données indiquent qu'ils sont utiles.

## Structure

La page est constituée d'un catalogue fixe de blocs dans une vue scrollable unique. L'ordre ne change jamais, mais un bloc ne s'affiche que si vos données franchissent le seuil. Une entreprise simple voit donc une page plus courte, et non des espaces vides.

En haut se trouvent la salutation, le sélecteur de période et la rangée d'indicateurs. Sous celle-ci vient le widget d'attention, puis des blocs d'appoint comme la tendance, l'âge des créances, les sources de revenus, le pipeline de devis, le mix de dépenses, le graphique de trésorerie, la carte TVA et l'activité récente.

## Salutation

Au-dessus des chiffres figure une salutation en fonction du moment de la journée, avec votre prénom et la date du jour. En français, le nom du mois s'écrit en minuscule.

## Sélecteur de période

Tous les chiffres de la rangée d'indicateurs et les calculs de rythme suivent la période choisie. Vous choisissez entre **mois**, **trimestre** et **année**. Le graphique de tendance reste toujours sur 12 mois, pour que la comparaison reste honnête.

## Rangée d'indicateurs

La rangée d'indicateurs affiche toujours cinq tuiles. Chaque tuile montre un chiffre principal, une comparaison avec la période comparable précédente lorsqu'une comparaison honnête est possible, et une petite courbe de tendance. Les tuiles renvoient vers le rapport ou la liste correspondant.

| Tuile | Ce que vous voyez |
|---|---|
| **Trésorerie** | Position de trésorerie actuelle, issue d'un compte bancaire connecté ou d'un solde estimé, plus le runway en semaines |
| **Créances** | Factures en cours, avec la part en retard explicitement indiquée |
| **Chiffre d'affaires** | Chiffre d'affaires de la période choisie et le rythme prévisionnel pour la période complète, avec l'évolution par rapport à la période comparable précédente |
| **Dettes à payer** | Argent que vous devez encore payer, avec la part en retard explicitement indiquée |
| **Bénéfice** | Bénéfice net de la période choisie, avec la marge lorsqu'elle peut être calculée |

### Tuile Trésorerie

La tuile **Trésorerie** montre, à côté de votre solde, ce qui est déjà engagé. Deux lignes détaillent cela :

- **Réservé pour la TVA** - le solde trimestriel positif qui devrait déjà être mis de côté
- **Charges fixes par mois** - vos coûts fixes mensuels

La ligne finale affiche **Librement disponible** : ce qui reste effectivement après ces réservations. La réservation TVA utilise la même logique trimestrielle que la carte TVA, afin que les déclarants mensuels et les déclarants anticipés ne voient pas un mauvais montant déduit.

Une tuile sans historique honnête s'affiche sans courbe de tendance plutôt qu'avec une ligne plate inventée. La couleur du badge d'évolution suit le sens, pas seulement la direction : des créances qui augmentent sont une mauvaise nouvelle même si la flèche pointe vers le haut.

## Widget d'attention

Le widget d'attention est alimenté par le moteur de signaux Vandaag. Il affiche jusqu'à quatre tâches qui demandent une action aujourd'hui ou cette semaine. Chaque ligne montre un point de sévérité, un titre court et un lien vers l'enregistrement. Le widget ne montre que des tâches ; il ne contient pas la liste complète classée, les preuves chiffrées ni les boutons d'action. La liste complète se trouve dans le panneau de notifications.

Le moteur Vandaag classe les signaux en quatre niveaux de sévérité :

- **critical** : de l'argent s'échappe ou une échéance ferme approche
- **attention** : une tâche concrète, aujourd'hui ou cette semaine
- **upcoming** : daté, mais pas encore urgent
- **good** : une bonne nouvelle que vous avez méritée

Le moteur est déterministe. Aucun modèle n'intervient dans la production des signaux, donc la page reste utile lorsque la couche IA est indisponible.

### Puce d'action

Certaines lignes d'attention ont une puce d'action, par exemple pour envoyer un rappel de paiement. Le premier tap sur une puce demandant une confirmation l'arme et affiche le texte **Vraiment ? Touchez encore** ; seul le deuxième tap exécute l'action. Si aucun deuxième tap n'arrive dans les cinq secondes, la puce se désarme d'elle-même. Ainsi, un tap accidentel ne peut pas envoyer un e-mail à un client.

## Blocs d'appoint

Les blocs sous la rangée d'indicateurs n'apparaissent que s'ils méritent leur place. Le catalogue décide à la fois si un bloc s'affiche et quelle forme il prend.

| Bloc | Contenu |
|---|---|
| **Tendance** | Graphique 12 mois avec chiffre d'affaires et coûts côte à côte, plus la ligne de bénéfice |
| **Âge des créances** | Créances réparties par tranche d'âge |
| **Sources de revenus** | Plus grands clients par chiffre d'affaires depuis le début de l'année |
| **Devis** | Pipeline de devis ouverts et devis à expiration |
| **Mix de dépenses** | Répartition des coûts par catégorie, sous forme de barres |
| **Graphique de trésorerie** | Position de trésorerie sur 12 mois avec prévision |
| **Activité** | Événements récents de facturation, paiement et dépense |
| **Carte TVA** | Période TVA en cours, progression de la checklist et prochaine échéance |

Sur téléphone, les formes visuelles larges basculent vers des formes plus simples pour que les chiffres restent lisibles.

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
