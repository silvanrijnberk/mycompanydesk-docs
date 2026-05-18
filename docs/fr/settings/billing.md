---
title: Facturation et abonnements
---

# Facturation et abonnements

Gerez votre abonnement MyCompanyDesk, consultez votre utilisation et mettez a niveau votre plan.

## Founding Members

MyCompanyDesk propose un programme Founding Members pour les 100 premiers espaces de travail qui s'inscrivent pendant la periode de lancement. Un Founding Member recoit le plan Pro gratuit a vie, sans date d'expiration et sans moyen de paiement requis.

### Comment ca marche

- Le programme est limite a **100 places** sur l'ensemble des espaces de travail.
- Une fois la place reservee, votre espace de travail est definitivement passe au plan Pro. L'abonnement affiche un badge "Founding Member" dans la section de facturation.
- Chaque espace de travail ne peut reserver qu'une seule place. Une meme adresse IP ne peut pas non plus reserver plus d'une place (prevention de la fraude).
- La reservation est irreversible. Il n'y a pas de periode d'essai ni de renouvellement ; le plan Pro reste actif indefiniment.

### Reserver une place

Vous pouvez reserver une place Founding Member de deux facons :

**Depuis la page de facturation.** S'il reste des places, la page de facturation affiche une carte de reservation Founding Member. Cliquez sur **Reserver une place** pour la bloquer. La mise a niveau prend effet immediatement.

**Depuis la page d'accueil.** Le CTA de la page d'accueil renvoie vers le formulaire d'inscription avec une intention founding-member. Lorsque vous vous inscrivez via ce parcours :

1. Le formulaire d'inscription conserve votre intention dans le stockage local.
2. Apres verification de l'e-mail et connexion, le systeme reserve automatiquement votre place en arriere-plan.
3. Un toast de confirmation vous indique si la reservation a reussi. Si les places etaient epuisees avant que vous n'ayez termine l'inscription, vous beneficiez tout de meme d'un essai Pro de 60 jours.

Une fois reservee, la place est definitive et l'espace de travail conserve Pro gratuit a vie. Si la reservation automatique echoue (places epuisees, IP deja utilisee par un autre espace de travail ou erreur reseau), la reservation n'est pas retentee. Vous pouvez toujours consulter la page de facturation et reserver manuellement s'il reste des places.

Les espaces de travail Founding Member sont des clients Pro comme les autres : memes fonctionnalites, memes limites. La seule difference est la source d'abonnement ("interne") et le badge dans la facturation.

## Plans

MyCompanyDesk propose deux plans payants plus un etat Gratuit qui n'existe que pour les espaces de travail expires, resilies ou en fin de periode d'essai. Gratuit n'est pas propose a l'inscription ; les nouveaux clients beneficient d'un essai Pro de 60 jours. Les definitions de plan se trouvent dans `apps/api/src/modules/billing/plans.config.js`.

| Plan | Mensuel | Annuel | Description |
|---|---|---|---|
| **Starter** | 10,00 EUR | 100,00 EUR | Pour les independants qui ont besoin de factures, de depenses et d'une page entreprise publique |
| **Pro** | 25,00 EUR | 250,00 EUR | La suite complete : tout active, boite de reception, multi-domaine, API et extensible avec des utilisateurs supplementaires |

Pro est le plan mis en avant (recommande) dans le selecteur. L'etat Gratuit (`plan_key: "free"`) existe comme zone d'atterrissage pour les parcours de retrogradation et les comptes historiques, mais il est masque sur la page de tarifs et dans le flux d'inscription.

### Ce que chaque plan inclut

Fonctionnalites avec limites d'utilisation (limites mensuelles) :

| Metrique | Gratuit | Starter | Pro |
|---|---|---|---|
| Factures creees | 5 | illimite | illimite |
| Depenses creees | 10 | illimite | illimite |
| Devis crees | 3 | illimite | illimite |
| Stockage | 100 Mo | 2 Go | illimite |
| Membres d'equipe | 1 | 1 | 1 (extensible avec des add-ons de sieges) |
| Domaines personnalises | 0 | 0 | 5 |
| Messages de chat IA (mensuel) | 10 | 100 | 1 000 |
| Scans de recus IA (mensuel) | 3 | 50 | 500 |
| Suggestions IA (mensuel) | 10 | 200 | 2 000 |
| Boites de reception | 0 | 0 | illimite |
| Envois boite de reception par mois | 0 | 0 | 15 000 |
| Receptions boite de reception par mois | 0 | 0 | 20 000 |

Remarque : les limites IA sont mensuelles, et non quotidiennes. Elles sont reinitialisees le premier de chaque mois civil.

Fonctionnalites booleennes par plan :

| Fonctionnalite | Gratuit | Starter | Pro |
|---|---|---|---|
| `invoices`, `expenses`, `quotes`, `attachments` | oui | oui | oui |
| `exports_pdf` | oui | oui | oui |
| `exports_excel` | non | oui | oui |
| `custom_branding` | non | oui | oui |
| `recurring_invoices`, `recurring_expenses` | non | oui | oui |
| `receipt_scanning`, `language_tools` | non | oui | oui |
| `time_registration`, `assistant_chat` | non | oui | oui |
| `description_enrichment` | non | oui | oui |
| `ai_insights` | non | oui | oui |
| `public_business_page` | non | oui | oui |
| `company_subdomain`, `style_presets` | non | oui | oui |
| `contracts`, `properties`, `projects` | non | non | oui |
| `team_members`, `advanced_reports` | non | non | oui |
| `custom_domains`, `custom_domain_routing` | non | non | oui |
| `custom_domain_full_website` | non | non | oui |
| `inbox`, `privacy_mode`, `newsletter` | non | non | oui |
| `api_access`, `webhooks`, `priority_support` | non | non | oui |
| `advanced_permissions` | non | non | oui |
| `bank_connections` | non | non | oui |
| `e2b_realtime_classification` | non | oui | oui |

La liste complete des fonctionnalites se trouve dans `FEATURE_KEYS` dans `plans.config.js`.

### Add-ons de sieges

Pro est un produit mono-utilisateur. Les utilisateurs supplementaires sont achetes via la table `workspace_seat_addons` (add-on Stripe base sur la quantite, facture separement par siege). Le flag de fonctionnalite `team_members` controle si la fonctionnalite d'equipe est disponible ; le nombre effectif de sieges provient de l'enregistrement d'add-on.

## Portail Stripe

Le bouton **Gerer l'abonnement** (visible lorsque l'espace de travail a une periode active ou un plan non Gratuit) appelle `POST /api/billing/portal`, qui renvoie une URL unique du portail client Stripe. Depuis le portail, vous pouvez :

- Mettre a jour le moyen de paiement
- Telecharger les factures et recus
- Modifier l'adresse de facturation
- Resilier l'abonnement

La resiliation prend effet a la fin de la periode payee en cours ; l'acces est conserve jusque-la.

## Flux de paiement

1. Cliquez sur **Mettre a niveau** sur une vignette de plan
2. Le frontend appelle `POST /api/billing/checkout`, qui renvoie une URL Stripe Checkout
3. Stripe redirige avec `?checkout=success` ou `?checkout=canceled`
4. La page affiche une banniere de succes ou d'annulation ; le cache des droits est invalide et l'interface bloque est immediatement debloquee

Lors d'un passage au plan Pro, la banniere de succes prend l'accent violet Pro avec une icone de couronne ("Bienvenue chez Pro") au lieu de la confirmation verte standard. Ce meme style Pro apparait ailleurs dans l'application : un anneau violet autour de l'avatar, une icone de couronne dans le badge de plan et des pastilles "Fonction Pro" sur les pages de parametres reservees a Pro comme Cles API et Boite de reception.

## Banniere de mise a niveau contextuelle

Lorsqu'un utilisateur arrive sur la page de facturation depuis une fonctionnalite bloquee (le middleware de flag de fonctionnalite redirige avec `?upgrade=<feature>`), la page affiche une banniere "vous etes venu ici pour X -- voici ce qui le debloque" au lieu d'une presentation generique des plans.

## Voir aussi

- [Parametres de l'entreprise](/fr/settings/company) -- `public_business_page` et `custom_domains` sont geres ici
- [E-mail](/fr/settings/email) -- `inbox` necessite Pro
- [Equipe](/fr/settings/team) -- `team_members` necessite Pro
