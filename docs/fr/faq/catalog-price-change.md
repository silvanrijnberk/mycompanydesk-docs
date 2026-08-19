---
title: Modifier tous les prix en une fois
last_verified: 2026-08-07
chatbot:
  triggers:
    - "modifier tous les prix"
    - "changement de prix en masse"
    - "mettre à jour les prix"
    - "augmenter les prix"
    - "baisser les prix"
    - "change all prices"
    - "bulk price change"
  actions: []
  follow_up:
    - "Est-ce que les prix sur les factures déjà envoyées changent aussi ?"
    - "Puis-je annuler un changement de prix ?"
---

Rendez-vous dans **Offre** et cliquez sur **Modifier les prix** pour mettre à jour plusieurs prix en une seule fois.

## Comment ça marche

1. Choisissez comment modifier les prix :
   - **Pourcentage** — augmente ou diminue chaque prix d'un pourcentage.
   - **Montant fixe** — ajoute ou retire le même montant à chaque prix.
   - Utilisez un signe moins pour baisser les prix.
2. Choisissez l'arrondi :
   - **Au centime près** conserve le prix décimal normal.
   - **À l'euro près** arrondit à l'euro entier.
3. Cliquez sur **Voir les changements** pour ouvrir un aperçu qui liste chaque article avec son ancien et son nouveau prix.
4. Vérifiez la liste, puis cliquez sur **Modifier les prix** pour appliquer.

Pendant que vous choisissez un pourcentage, une aide sur l'inflation peut afficher les chiffres d'indices de prix publiés par le CBS. Elle liste différentes séries avec leur variation en pourcentage et leur fenêtre de mesure. Cliquer sur un chiffre remplit le champ de pourcentage, ou vous pouvez saisir votre propre valeur.

L'aperçu indique aussi combien d'articles sont ignorés parce qu'ils n'ont pas de prix (par exemple, les articles avec prix sur demande). Et il vous avertit si une promotion en cours cesserait d'être active, car le prix promotionnel ne serait alors plus inférieur au prix normal.

## Ce qui change et ce qui ne change pas

- Seuls les prix de votre **Offre** sont mis à jour.
- Les factures, devis et contrats existants conservent le prix auquel ils ont été créés.
- Vous pouvez annuler un changement juste après l'avoir appliqué. Une seule annulation rétablit tout le lot en une fois.

## Indication d'inflation lors de la modification d'un article

Quand vous modifiez un seul article du catalogue avec un prix fixe, une indication d'inflation peut apparaître à côté du champ de prix. Elle mesure à partir de la date à laquelle ce prix a été fixé pour la dernière fois (ou de la création de l'article si le prix n'a jamais changé). L'annulation ne compte pas comme une nouvelle décision de prix, donc l'indication reste ancrée à un moment de prix réel.

L'indication propose des lectures d'indice de prix sous forme de suggestions cliquables. Chaque ligne affiche la période couverte, le pourcentage de variation et le montant que votre prix actuel atteindrait si vous appliquiez la suggestion. Cliquez sur une suggestion pour remplir ce montant dans le champ de prix. Vous devez toujours enregistrer l'article vous-même, donc vous vérifiez le changement avant qu'il ne soit définitif.

L'indication n'apparaît qu'en mode modification et seulement pour les articles à prix fixe. Les articles avec prix sur demande et les articles tout neufs n'ont pas d'historique à mesurer, elle ne s'affiche donc pas.

## Imprimer une liste de prix

Vous pouvez aussi imprimer votre offre sous forme de liste de prix destinée aux clients. Ouvrez **Offre** et cliquez sur **Liste de prix** pour ouvrir `/aanbod/prijslijst`.

La page liste vos articles actifs regroupés sous **Services**, **Produits** et **Abonnements**. Les groupes vides sont ignorés. Activez **Uniquement ce qui figure sur mon site** pour imprimer la même sélection que celle affichée dans votre constructeur de site. Cliquez sur **Imprimer ou enregistrer au format PDF** pour utiliser la boîte de dialogue d'impression de votre navigateur.

Les prix sont calculés avec les mêmes aides que partout ailleurs dans l'application, donc la liste montre les mêmes montants qu'un client verrait en ligne. En bas de page, il est indiqué que tous les prix sont hors TVA et qu'aucun droit ne peut être tiré de cette liste.
