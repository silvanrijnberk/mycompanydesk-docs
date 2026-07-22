---
title: "Formules et tarifs"
last_verified: 2026-07-22
chatbot:
  triggers:
    - "formules"
    - "tarifs"
    - "prix"
    - "abonnement"
    - "upgrade"
    - "downgrade"
    - "Office"
    - "Desk"
    - "plans"
    - "pricing"
    - "subscription"
    - "tarife"
    - "preise"
    - "tarif"
    - "plan"
  actions:
    - { label: "Ouvrir les paramètres", to: "/settings/billing" }
  follow_up:
    - "Comment fonctionnent les factures récurrentes ?"
    - "Que se passe-t-il si je rétrograde ?"
---

MyCompanyDesk propose deux formules : **Desk** et **Office**.

**Desk** est gratuit et reste gratuit. Vous pouvez y créer des factures, devis et dépenses sans limite, gérer des projets et une feuille de temps, publier votre propre site sur `.mycompanydesk.site`, scanner des reçus par IA et discuter avec une IA basique.

**Office** est payant. Il ajoute l'automatisation et des services qui coûtent réellement à faire tourner : factures et dépenses récurrentes, contrats, connexions bancaires, une boîte mail professionnelle sur votre propre domaine, déclaration de TVA numérique, comptabilité complète, accès API et des limites IA plus élevées. Voir la [page des tarifs](https://mycompanydesk.nl/plans) pour le prix actuel.

Ces fonctionnalités sont définies dans notre configuration de facturation : [apps/api/src/modules/billing/plans.config.js](https://github.com/silvanrijnberk/RichardTool/blob/development/apps/api/src/modules/billing/plans.config.js).

**Changement de formule**
- Vous pouvez passer de Desk à Office, et inversement, à tout moment.
- Après une montée de version, les nouvelles fonctionnalités sont disponibles immédiatement.
- Si vous rétrogradez d'Office vers Desk, les fonctionnalités réservées à Office cessent de fonctionner : plus aucune facture ou dépense récurrente n'est générée, votre connexion bancaire n'importe plus de transactions, et votre boîte mail sur domaine personnalisé n'envoie ni ne reçoit de messages. Les modèles existants, les factures ou dépenses déjà créées et les autres données restent dans votre espace de travail.
- Si votre période d'essai Office de 60 jours se termine sans abonnement, votre espace de travail passe automatiquement sur Desk.

**Facturation**
- Tous les prix sont indiqués hors 21 % de TVA. Le montant payé au checkout inclut la TVA, que vous pouvez récupérer en tant que TVA déductible.
- Il n'y a pas de frais par utilisateur. Desk permet un utilisateur actif plus un accès comptable gratuit. Office permet un nombre illimité d'utilisateurs actifs plus un accès comptable gratuit.
- Vous pouvez résilier ou rétrograder quand vous le souhaitez. Si vous n'êtes pas satisfait, vous êtes remboursé sous 14 jours.
