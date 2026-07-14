---
title: Abonnement et paiements
last_verified: 2026-07-02
---

# Abonnement et paiements

Ce que vous nous payez, vos factures de notre part et votre carte de paiement.

## Où le trouver

Ouvrez **Paramètres**, puis **Je abonnement** (votre abonnement), ou naviguez directement vers `/settings/abonnement`.

Les anciennes URL `/workspace/account/billing` et `/settings/billing` redirigent vers la nouvelle page ; vos favoris continuent de fonctionner et le paramètre de requête `?checkout=success|canceled` est conservé lors de la redirection.

## Accords existants

Un petit nombre d'espaces de travail conservent Pro gratuitement au titre d'accords antérieurs. Ces accords sont honorés tant que MyCompanyDesk propose le service et la fonctionnalité concernée. Ils sont clos et ne peuvent pas être demandés ; les nouveaux espaces de travail démarrent avec l'essai Pro de 60 jours décrit ci-dessous.

Les espaces de travail bénéficiant d'un tel accord sont des clients Pro comme les autres : mêmes fonctionnalités, mêmes limites. La seule différence est la source d'abonnement affichée sur la page d'abonnement.

## Plans

MyCompanyDesk propose deux plans payants plus un état Gratuit qui n'existe que pour les espaces de travail expirés, résiliés ou en fin de période d'essai. Gratuit n'est pas proposé à l'inscription ; les nouveaux clients bénéficient d'un essai Pro de 60 jours.

| Plan | Mensuel | Annuel | Description |
|---|---|---|---|
| **Starter** | 10,00 EUR | 100,00 EUR | Tout pour faire votre travail : factures, devis, dépenses, heures et projets, sur votre propre page |
| **Pro** | 25,00 EUR | 250,00 EUR | Faites grandir votre entreprise : domaine et site web personnels, boîte mail professionnelle, connexion bancaire, accès équipe, API et plus |

Tous les prix s'entendent hors TVA néerlandaise de 21%, ajoutée lors du paiement. L'application affiche les prix avec la mention « excl. btw » (hors TVA) ; en tant qu'entreprise, vous récupérez cette TVA comme taxe déductible. Le prix annuel équivaut à dix paiements mensuels, payer à l'année vous offre donc deux mois gratuits.

Pro est le plan mis en avant (recommandé) dans le sélecteur. L'état Gratuit existe comme zone d'atterrissage pour les comptes expirés et historiques, mais il est masqué sur la page de tarifs et dans le flux d'inscription.

### Ce que chaque plan inclut

Fonctionnalités avec limites d'utilisation (limites mensuelles) :

| Métrique | Gratuit | Starter | Pro |
|---|---|---|---|
| Factures créées | 5 | illimité | illimité |
| Dépenses créées | 10 | illimité | illimité |
| Devis créés | 3 | illimité | illimité |
| Stockage | 100 Mo | 2 Go | illimité |
| Personnes avec accès | vous seul | vous seul | illimité |
| Domaines personnalisés | 0 | 0 | 5 |
| Messages de chat IA (mensuel) | 10 | 100 | 1 000 |
| Scans de reçus IA (mensuel) | 3 | 30 | 200 |
| Suggestions IA (mensuel) | 10 | 200 | 2 000 |
| Connexions bancaires | 0 | 0 | 3 |

Remarque : les limites IA sont mensuelles, et non quotidiennes. Elles sont réinitialisées le premier de chaque mois civil.

Fonctionnalités par plan :

| Fonctionnalité | Gratuit | Starter | Pro |
|---|---|---|---|
| Factures, dépenses, devis, pièces jointes | oui | oui | oui |
| Export PDF | oui | oui | oui |
| Export CSV/Excel | non | oui | oui |
| Numérisation de reçus (avec les limites mensuelles ci-dessus) | oui | oui | oui |
| Chat assistant | oui | oui | oui |
| Analyses IA | oui | oui | oui |
| Classification des dépenses en temps réel | oui | oui | oui |
| Contrats | non | oui | oui |
| Projets | non | oui | oui |
| Biens locatifs * | non | oui | oui |
| Factures et dépenses récurrentes | non | oui | oui |
| Saisie de temps | non | oui | oui |
| Image de marque personnalisée | non | oui | oui |
| Outils linguistiques | non | oui | oui |
| Enrichissement des descriptions | non | oui | oui |
| Page entreprise publique | non | oui | oui |
| Sous-domaine d'entreprise et préréglages de style | non | oui | oui |
| Accès équipe (personnes illimitées) | non | non | oui |
| Factures et devis sans mention MyCompanyDesk | non | oui | oui |
| Rapports avancés | non | non | oui |
| Domaine personnalisé, routage de domaine, site web complet sur votre domaine | non | non | oui |
| Boîte mail professionnelle | non | non | oui |
| Newsletter | non | non | oui |
| Mode confidentialité | non | non | oui |
| Accès API et webhooks | non | non | oui |
| Permissions avancées | non | non | oui |
| Support prioritaire | non | non | oui |
| Connexions bancaires (jusqu'à 3) | non | non | oui |

\* Le module de biens locatifs n'est actuellement affiché qu'aux espaces de travail qui l'utilisent déjà.

L'accès de votre comptable est gratuit sur tous les plans et ne compte pas comme accès équipe.

### Limites de la boîte mail professionnelle

La boîte mail professionnelle est une fonctionnalité Pro. Avec Pro, vous pouvez envoyer jusqu'à 15 000 e-mails et en recevoir jusqu'à 20 000 par mois ; le nombre de boîtes mail n'est pas limité.

### Site public : disponibilité

Lorsqu'un espace de travail retombe en Gratuit, son site web public et le constructeur de site restent en ligne. Les sites gratuits affichent un petit badge MyCompanyDesk sur l'adresse du sous-domaine de l'espace de travail ; la seule façon de supprimer le badge est de déplacer le site vers un domaine personnalisé (Pro). La vérification a lieu à chaque requête, avant le cache, pour que les changements d'abonnement prennent effet immédiatement.

### Accès équipe

L'accès équipe est inclus dans Pro sans frais par personne : invitez autant d'utilisateurs actifs que vous le souhaitez. Il n'y a pas de tarification par siège ni d'add-on par siège. Avec Gratuit et Starter, vous travaillez seul, mais votre comptable peut toujours recevoir un accès gratuit.

## Portail Stripe

Le bouton **Gérer l'abonnement** (visible lorsque l'espace de travail a une période active ou un plan non Gratuit) ouvre une session unique du portail client Stripe. Depuis le portail, vous pouvez :

- Mettre à jour le moyen de paiement
- Télécharger les factures et reçus
- Modifier l'adresse de facturation
- Résilier l'abonnement

La résiliation prend effet à la fin de la période payée en cours ; l'accès est conservé jusque-là.

## Flux de paiement

1. Cliquez sur **Mettre à niveau** sur une vignette de plan
2. Vous arrivez sur une page Stripe Checkout
3. Stripe redirige avec `?checkout=success` ou `?checkout=canceled`
4. La page affiche une bannière de succès ou d'annulation ; l'interface verrouillée est immédiatement déverrouillée

Lors d'un passage au plan Pro, la bannière de succès prend l'accent violet Pro avec une icône de couronne (« Bienvenue chez Pro ») au lieu de la confirmation verte standard. Ce même style Pro apparaît ailleurs dans l'application : un anneau violet autour de l'avatar, une icône de couronne dans le badge de plan et des pastilles « Fonction Pro » sur les pages de paramètres réservées à Pro comme Clés API et Boîte de réception. De plus, l'assistant du guide contextuel reçoit une apparence violette premium : la pastille « IA » devient une pastille « Pro », la bordure du panneau et le bouton d'envoi adoptent l'accent Pro et la ligne de statut devient « Votre assistant Pro est prêt. »

## Bannière de mise à niveau contextuelle

Lorsque vous arrivez sur la page d'abonnement depuis une fonctionnalité verrouillée, la page affiche une bannière « vous êtes venu ici pour X, voici ce qui le débloque » au lieu d'une présentation générique des plans.

## Voir aussi

- [Paramètres de l'entreprise](/fr/settings/company) -- la page entreprise publique et les domaines personnalisés se gèrent ici
- [E-mail](/fr/settings/email) -- la boîte mail professionnelle nécessite Pro
- [Équipe](/fr/settings/team) -- l'accès équipe nécessite Pro
