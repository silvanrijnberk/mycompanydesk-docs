---
title: Modifier tous les prix en une fois
last_verified: 2026-08-06
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

L'aperçu indique aussi combien d'articles sont ignorés parce qu'ils n'ont pas de prix (par exemple, les articles avec prix sur demande). Et il vous avertit si une promotion en cours cesserait d'être active, car le prix promotionnel ne serait alors plus inférieur au prix normal.

## Ce qui change et ce qui ne change pas

- Seuls les prix de votre **Offre** sont mis à jour.
- Les factures, devis et contrats existants conservent le prix auquel ils ont été créés.
- Vous pouvez annuler un changement juste après l'avoir appliqué. Une seule annulation rétablit tout le lot en une fois.

## Imprimer une liste de prix

Vous pouvez aussi imprimer votre offre sous forme de liste de prix destinée aux clients. Ouvrez **Offre** et cliquez sur **Liste de prix** pour ouvrir `/aanbod/prijslijst`.

La page liste vos articles actifs regroupés sous **Services**, **Produits** et **Abonnements**. Les groupes vides sont ignorés. Activez **Uniquement ce qui figure sur mon site** pour imprimer la même sélection que celle affichée dans votre constructeur de site. Cliquez sur **Imprimer ou enregistrer au format PDF** pour utiliser la boîte de dialogue d'impression de votre navigateur.

Les prix sont calculés avec les mêmes aides que partout ailleurs dans l'application, donc la liste montre les mêmes montants qu'un client verrait en ligne. En bas de page, il est indiqué que tous les prix sont hors TVA et qu'aucun droit ne peut être tiré de cette liste.
