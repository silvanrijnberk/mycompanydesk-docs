---
title: Domaines, site web et boite de reception
description: "Domaines personnalisés, site vitrine hébergé et boîte partagée arrivent en un seul lot, derrière custom_domains et public_business_page."
last_verified: 2026-09-22
---

# Domaines, site web et boite de reception

> **Statut : pre-lancement.** Les trois fonctionnalites de cette page sont deployees ensemble en un seul lot. Elles sont gerees par les flags `custom_domains` et `public_business_page` et sont encore en cours de deploiement sur les abonnements publics. Le comportement decrit ici correspond a la base de code au 2026-05-09 ; si un ecran semble different dans votre espace de travail, le lot n'y a pas encore ete active.

Les domaines personnalises, le site web d'entreprise heberge et la boite de reception e-mail partagee forment un seul produit. La raison : ils partagent l'etat. La meme ligne `domains` qui prouve que vous contrôlez `acme.fr` fait aussi de `acme.fr` l'URL de votre site web et permet a `info@acme.fr` de recevoir des e-mails. Il y a un flux d'intégration, un arbre de parametres et un endroit dans l'application pour tout gerer.

## La valeur du lot

Ajoutez un domaine et vous obtenez trois choses :

- **Une adresse personnalisee.** Votre entreprise est accessible sur `acme.fr` au lieu de `acme.mycompanydesk.com`.
- **Un site web en ligne.** La page d'entreprise hebergee est automatiquement publiee sur le domaine verifie.
- **Une boite de reception operationnelle.** `info@acme.fr`, ainsi que `support@`, `sales@` et un alias d'envoi uniquement `noreply@`, captent les e-mails et envoient des reponses.

Vous pouvez lancer le flux depuis l'[Assistant de configuration](/fr/getting-started/company-setup) (`/setup`, l'etape "Votre adresse web"), ou etape par etape depuis `Entreprise › Votre propre adresse .com` et la Boite de reception.

## Un flux d'intégration

L'etape de l'assistant sur `/setup` est le point d'entree recommande. Elle execute via `apply.service.js → activateSubdomain | addDomain → quickEnableInbox` toutes les etapes en une seule soumission, de sorte que l'utilisateur reponde a quelques questions et la plateforme câble tout en dessous.

### Etape 1 -- Ajouter un domaine

Deux chemins dans l'assistant, tous deux stockes dans la table `domains` :

- **Sous-domaine d'espace de travail gratuit** -- `votre-slug.mycompanydesk.com` (ou `.nl` pour les espaces NL). Aucun travail DNS ; le slug est enregistre comme domaine personnalise Cloudflare Pages et le site web est en ligne en quelques secondes. C'est le choix par defaut pour les nouveaux espaces de travail.
- **Votre propre domaine** -- saisissez `acme.fr`. Deux modes de configuration sont pris en charge :
  - **Mode nameserver** (recommande) -- une zone Cloudflare est creee pour le domaine. Vous modifiez les nameservers de votre registraire vers les deux noms d'hôte `*.ns.cloudflare.com` affiches par l'assistant. Cloudflare devient le DNS faisant autorite pour le domaine, ce qui permet l'e-mail, le SSL et la gestion des enregistrements DNS dans MyCompanyDesk.
  - **Mode CNAME** -- uniquement pour les sous-domaines (ex. `portal.acme.fr`). Vous ajoutez un enregistrement CNAME pointant vers `mycompanydesk-app.pages.dev`. Aucun changement de nameserver. Le routage des e-mails n'est pas disponible dans ce mode.

L'ajout d'un domaine personnalise desactive automatiquement le sous-domaine de l'espace de travail -- il y a un site web canonique par entreprise, jamais deux.

### Etape 2 -- Verification

La verification s'execute a la fois a la demande et par interrogation periodique. La page de detail affiche un bouton **Verifier** (`POST /api/domains/:id/verify`) et un job en arriere-plan reinterroge chaque domaine en attente a intervalles reguliers.

- **Mode nameserver** est vérifié dès que Cloudflare signale la zone comme `active`. Le statut passe de `pending_nameservers → pending_verification → active`. L'utilisateur est informé via la cloche de notification dans l'application.
- **Mode CNAME** est vérifié en résolvant le CNAME et en confirmant qu'il pointe vers la cible Pages. Le statut passe de `pending_cname → active`.

Un domaine en mode nameserver qui a attendu 30 jours vos serveurs de noms sans jamais se connecter est supprimé automatiquement ; le nom redevient ainsi disponible pour un autre espace de travail. Les domaines qui ont déjà une boîte sur eux (courrier importé compris), ceux que nous détenons nous-mêmes chez le registrar, et les achats ou transferts en cours ne sont jamais supprimés de cette façon.

### Etape 3 -- SSL

Le SSL est provisionne automatiquement par Cloudflare des que la zone est active. Le mode par defaut est **Full (strict)** ; vous pouvez le modifier depuis `Detail du domaine › SSL` (`off / flexible / full / strict`). Le champ de statut du certificat dans le panneau SSL reflete le resultat de verification de Cloudflare.

### Etape 4 -- Le site web est en ligne

La page d'entreprise hebergee (voir [Constructeur de site](/fr/advanced/business-page)) est automatiquement publiee a la racine du domaine des que la zone est active. Le resolver `getBusinessPageUrl` de l'assistant retourne, par ordre de priorite :

1. Un domaine personnalise avec `business_page_enabled = true` → `https://acme.fr`
2. Un domaine personnalise avec `portal_subdomain_enabled = true` → `https://portal.acme.fr`
3. Le sous-domaine de l'espace de travail → `https://acme.mycompanydesk.com`
4. La route portail de secours (`/portal/<slug>`) lorsque rien d'autre n'est configure.

### Etape 5 -- La boite de reception capture les e-mails

Pour les domaines personnalises en mode nameserver, l'assistant execute `quickEnableInbox` apres la verification. Cet appel est idempotent et effectue les operations suivantes :

- Met en place l'identite CF Email Sending sur le domaine apex nu (`acme.fr` par defaut) et ecrit les enregistrements DNS DKIM et SPF. Un label de sous-domaine explicite provisionne `<label>.<domaine>` a la place (ex. `mail.acme.fr`).
- Definit une regle Cloudflare Email Routing catch-all sur la zone, dirigee vers le Worker `inbox-inbound`.
- Inspecte les enregistrements MX apex. S'ils sont vides ou pointent deja vers Cloudflare, l'assistant installe le MX Cloudflare. Si un fournisseur tiers (Google Workspace, Microsoft 365) est deja present, l'assistant refuse d'ecraser et affiche un avertissement de `conflict` pour que vous puissiez decider.
- Cree `info@acme.fr` comme la boite aux lettres partagee par defaut.
- Configure `support@` et `sales@` comme alias bidirectionnels de `info@`, et `noreply@` comme alias d'envoi uniquement (autorise en From, rejete a l'arrivee).
- Cree eventuellement une boite aux lettres personnelle (`silvan@acme.fr`) si vous avez coche la case dans l'assistant.

Vous pouvez aussi activer la boîte de réception avant que la vérification ne soit terminée. Cloudflare refuse de configurer la messagerie sur une zone dont les serveurs de noms ne pointent pas encore vers nous ; votre boîte est alors créée immédiatement et les étapes propres à la zone (routage, catch-all, MX apex) sont reportées : l'application vous dit que le courrier sur ce domaine fonctionnera dès que vos serveurs de noms pointeront vers nous. Dès que le domaine devient actif, la plateforme termine la configuration d'elle-même.

## Reference par fonctionnalite

### Domaines personnalises

L'interface se trouve sous **Entreprise > Votre propre adresse .com** -- la page leaf est `/workspace/organization/company/address`, montee depuis `apps/web/pages/workspace/organization/company/address.vue` et affichant le composant `SettingsDomains`. Les deux anciens chemins `/workspace/organization/domains` et `/workspace/communication/domains` redirigent ici.

La page se divise en deux sections :

- **Domaines en attente**: Les domaines en cours de verification apparaissent toujours en haut, independamment du selecteur de domaine dans la barre superieure. Cela vous permet d'acceder aux instructions de verification pour les domaines nouvellement ajoutes avant qu'ils ne deviennent actifs.
- **Panneau du domaine actif**: Les onglets DNS, SSL, redirections, analytique, securite et SEO sont lies au domaine selectionne dans le selecteur de domaine de la barre superieure (accessible depuis le constructeur de site sur `/website`). Lorsque le site principal (affiche sous le nom de votre espace de travail) est selectionne, le panneau du domaine est entierement masque. Changer de domaine reinitialise l'onglet actif sur Routage.

La page affiche par defaut une vue allegee avec les onglets les plus couramment utilises. Six onglets pour utilisateurs avances sont masques jusqu'a ce que vous activiez le **Mode avance**. Ces onglets sont : DNS, SSL, Redirections, Analytique, Parametres rapides et Securite. Le mode avancé est un interrupteur par appareil sur la page **Affichage** des paramètres; voir l'[aperçu des paramètres](/fr/settings/).

Ce que la page vous permet de faire :

- **Acheter ou reclamer un domaine** via la carte d'achat de domaine. Saisissez un nom de domaine, verifiez la disponibilite via OpenProvider, et achetez le domaine ou reclamez-le gratuitement si votre espace de travail est eligible a la reclamation gratuite d'un `.nl`.
- **Ajouter un domaine** (mode nameserver ou CNAME) via une carte dediee toujours visible.
- **Transférer votre domaine chez nous** (transfert entrant) avec le code d'autorisation de votre registrar actuel, ou lancez l'assistant de migration si votre messagerie est encore chez un autre hébergeur.
- **Verifier** un domaine en attente.
- **Gerer les enregistrements DNS** pour le domaine selectionne -- A, AAAA, CNAME, MX, TXT, SRV, CAA, NS. Le CRUD passe par Cloudflare via l'API.
- **SSL** pour le domaine selectionne -- consulter le statut du certificat, changer le mode SSL.
- **Redirections URL** pour le domaine selectionne -- trois Cloudflare Page Rules gratuites par zone. Modele source + destination + 301/302.
- **Securite des e-mails** pour le domaine selectionne -- verification SPF/DMARC/DKIM avec une option "corriger" en un clic qui ecrit des valeurs par defaut securisees (`v=spf1 ~all`, `v=DMARC1; p=quarantine; …`).
- **Parametres rapides** pour le domaine selectionne -- activer/desactiver le mode developpement Cloudflare, activer/desactiver le niveau de securite "Under attack", vider le cache.
- **Analytique** pour le domaine selectionne -- 30 derniers jours de requêtes, bande passante, menaces, visiteurs, pages vues. Le point de terminaison Cloudflare Analytics actuel est en fin de vie ; la page affiche un etat `unavailable` vide jusqu'a la migration GraphQL.
- **Supprimer** le domaine selectionne -- suppression logicielle de la ligne (`status = 'removed'`) et demantelement de la zone Cloudflare (ou du domaine Pages en mode CNAME).

#### Table `domains` -- l'etat partage

Colonnes notables que l'application lit :

| Colonne | Utilisation |
|---|---|
| `domain_name` | Le nom d'hôte, ex. `acme.fr`. |
| `setup_mode` | `nameserver` (delegation complete) ou `cname` (sous-domaine unique). |
| `status` | `pending_nameservers`, `pending_verification`, `pending_cname`, `active`, `failed`, `removed`. |
| `cloudflare_zone_id` | Defini en mode nameserver. Pilote le DNS, SSL, les redirections, l'analytique, le routage des e-mails. |
| `nameserver_1`, `nameserver_2` | Affiches a l'utilisateur lors de la configuration nameserver. |
| `cname_hostname`, `cname_target` | Definis en mode CNAME. |
| `email_routing_enabled` | `true` une fois la zone Cloudflare Email Routing activee. |
| `inbox_enabled`, `inbox_subdomain_tag`, `inbox_dkim_ready` | Definis par `quickEnableInbox`. L'identite CF Email Sending (domaine apex par defaut ; `mail.acme.fr` lorsqu'un label de sous-domaine est fourni) et le statut de provisionnement DKIM. |
| `business_page_enabled`, `portal_subdomain_enabled` | Determinant quel nom d'hôte dessert le site web public. |
| `verified_at` | Defini lorsque la verification reussit.
| `registrar` | Le service de registrar, actuellement `openprovider` pour les domaines achetes via le flux d'achat de domaine.
| `registrar_domain_id` | L'identifiant interne du registrar pour les domaines achetes.
| `purchase_price_period` | Periode de facturation pour les domaines achetes (`yearly`).
| `purchase_intent_id` | Renvoie a la ligne `domain_purchase_intents` pour les achats payants.
| `founder_claim_id` | Renvoie a la ligne `founder_domain_claims` pour les reclamations de domaine gratuites.
| `transferred_out_at` | Defini lorsque la synchronisation hebdomadaire detecte qu'un domaine a ete transfere hors du compte registrar MCD.

#### Cycle de renouvellement

Le renouvellement de domaine suit trois chemins selon la maniere dont le domaine a ete acquis :

1. **Renouvellement groupe gratuit** (niveau Trial converti en Pro, ou accord antérieur de gratuité à vie) : MCD prend en charge le cout de gros du renouvellement. Le domaine se renouvelle automatiquement tant que l'espace de travail reste sur Pro. Aucun moyen de paiement requis.
2. **Renouvellement automatique payant** (achat payant ou niveau Trial sans Pro) : Facture annuellement via la carte enregistree. Fonctionne comme tout autre renouvellement d'abonnement.
3. **Renouvellement manuel** : Si un espace de travail de niveau Trial quitte Pro ET n'a pas de carte enregistree, le chemin de renouvellement automatique le saute. L'utilisateur voit une notification et peut declencher un paiement ponctuel via `POST /api/domains/renew/:domainId`, qui cree une session Stripe Embedded Checkout pour le renouvellement. C'est le seul moyen de garder un domaine actif sans abonnement actif ni carte enregistree.

#### Rachat du domaine en cas de depart pendant l'essai

Lorsqu'un client en periode d'essai Pro decide de partir avant de devenir client Pro payant, il dispose d'une troisieme option pour son domaine `.nl` gratuit : le racheter pour un montant forfaitaire de €15,00 TTC (paiement unique). Le flux de rachat (`DomainBuyoutModal.vue`) permet au client de payer via Stripe Embedded Checkout et d'obtenir la pleine propriete. Une fois le paiement effectue, le titulaire du domaine est transfere de MCD au client et le code d'authentification (EPP) est affiche, permettant de deplacer le domaine vers n'importe quel registrar.

Le prix de €15,00 est volontairement indique TTC, car le paiement est declenche au moment ou le client quitte MyCompanyDesk. Le montant net transmis a Stripe est de €12,40 ; 21% de TVA neerlandaise sont ajoutes et arrondis au centime pres, de sorte que le total atteint exactement €15,00. Voir `apps/api/src/modules/domains/domain-pricing.config.js` dans le depot RichardTool et `sources/vat-rates.yaml#countries.NL.standard`.

Le prix de rachat est un prix produit, pas un supplement de transfert. MCD ne facture jamais de frais pour le jeton de transfert lui-meme une fois que le client est le titulaire enregistre. Cette distinction est documentee dans la note juridique interne `docs/legal/gratis-domein-voorwaarden.md` du depot RichardTool.

Tables de base de donnees concernees :

- `domain_buyout_intents` — suit les intentions de paiement de rachat avec les identifiants Stripe PaymentIntent et le statut.

#### Consequences d'un transfert

Transferer un domaine enregistre via MyCompanyDesk vers un autre registrar a des consequences permanentes, appliquees par la synchronisation hebdomadaire du statut OpenProvider :

- **Domaines avec accord de gratuité à vie** : La reclamation gratuite est supprimee et l'octroi Pro a vie interne de l'espace de travail est resilie. L'espace de travail devient un client payant normal. C'est irreversible -- l'octroi ne peut pas etre reclame a nouveau.
- **Domaines niveau Trial / groupes Pro** : Le statut groupe gratuit est perdu. L'espace de travail ne pourra plus jamais reclamer un autre domaine gratuit (deja applique via la liste des reclamations conservees). A noter : le rachat du domaine pendant l'essai (voir section rachat ci-dessus) n'est pas un transfert -- c'est un changement de titulaire qui donne la propriete au client avant tout transfert, preservant ainsi l'avantage du domaine gratuit pour la duree de l'essai.
- **Domaines payants** : Aucune revocation d'avantage -- le domaine passe simplement a `status = 'transferred_out'`.

Le modal de reclamation avertit de ces consequences avant qu'une reclamation de domaine gratuit ne soit soumise, et exige une confirmation explicite de l'utilisateur. Une notice "Fonctionnement de votre domaine gratuit" explique que le domaine est enregistre au nom de MCD pendant l'essai, qu'il sera transfere gratuitement au nom du client en cas de passage a Pro, et qu'il peut etre rachete pour €15 en cas de depart anticipe. Les details de revocation sont enregistres dans la table d'audit `domain_perk_revocations` pour reference par le support.

#### Acheter ou reclamer un domaine

La carte d'achat de domaine (`DomainPurchaseCard.vue`, `domain-purchase.service.ts`) est la premiere carte sur la page des parametres Domaines. Elle apparait lorsque l'espace de travail n'a pas encore de domaine personnalise actif. La carte permet a l'utilisateur de choisir et d'acquerir un domaine via deux chemins, qui ouvrent tous deux un modal d'achat en deux etapes (`DomainClaimModal.vue`). La premiere etape collecte les donnees du titulaire (requises par le registrar pour le WHOIS). La deuxieme etape gere le paiement ou la soumission :

- **Acheter** -- Achat payant via OpenProvider. L'utilisateur saisit un nom de domaine, la carte appelle `GET /api/domain-purchase/quote` pour verifier la disponibilite et le prix, puis ouvre le modal d'achat. Apres avoir saisi les donnees du titulaire, le modal appelle `POST /api/domain-purchase/checkout-session` pour creer une session de paiement Stripe et affiche Stripe Embedded Checkout pour le paiement. Une fois le paiement termine, `POST /api/domain-purchase/finalize` enregistre le domaine chez OpenProvider et cree la ligne `domains` en mode nameserver, reliee a Cloudflare.
- **Reclamation gratuite** -- Les espaces de travail eligibles en periode d'essai Pro peuvent reclamer gratuitement un domaine `.nl` pour la premiere annee. La carte appelle `GET /api/domain-purchase/free-domain/eligibility` pour verifier le niveau de reclamation et le statut des conditions. Le modal collecte les donnees du titulaire et appelle `POST /api/domain-purchase/free-domain/claim` a l'envoi. La plateforme prend en charge les frais d'enregistrement de la premiere annee.

Les reclamations gratuites ne different que par la maniere dont le domaine est renouvele apres la premiere annee :

- **Niveau Trial** -- Les espaces de travail en periode d'essai Pro. La premiere annee est gratuite. A la fin de l'annee gratuite, l'espace de travail doit avoir un abonnement Pro payant ; le domaine se renouvelle alors comme partie de l'abonnement Pro, paye par l'espace de travail. Si l'espace de travail cesse de payer Pro apres l'annee gratuite, le domaine expire et doit etre renouvele manuellement. Pendant l'annee d'essai, l'utilisateur peut optionnellement enregistrer une carte via Stripe SetupIntent dans le modal pour le futur renouvellement automatique.
- **Niveau Payant** -- Domaines standard achetes au prix fort. Le renouvellement est facture via le moyen de paiement enregistre sur le cycle annuel. Si le paiement echoue, une notification de renouvellement manuel est envoyee.
- **Niveau gratuit à vie** -- Un petit nombre d'espaces de travail conservent Pro gratuitement et le renouvellement de domaine gratuit à vie au titre d'accords antérieurs. Aucun moyen de paiement requis ; le renouvellement est gere automatiquement par la plateforme, MCD absorbant le cout de gros. Ce niveau est clos et ne peut pas etre demande.

Le point de terminaison d'eligibilite (`GET /api/domain-purchase/free-domain/eligibility`) renvoie un champ `tier` en plus du rapport de conditions. Il n'expose aucun nombre de reclamations restantes.

L'eligibilite est determinee par un ensemble de conditions strictes verifiees cote serveur :

- **Espace de travail Pro actif** -- l'espace de travail doit etre sur Pro (essai ou payant). Les espaces de travail sur Free ne peuvent pas reclamer.
- **KVK requis** -- l'espace de travail doit avoir un numero KVK lie.
- **Le domaine doit être `.nl`** -- le programme gratuit ne concerne que l'extension NL.
- **Le domaine doit correspondre au nom KVK** -- le domaine doit correspondre a la raison sociale ou a un nom commercial.
- **Le KVK ne doit pas figurer sur la liste des reclamations conservees** -- un domaine gratuit par numero KVK. Un KVK qui a deja reclame (puis transfere) un domaine gratuit est bloque de façon permanente.

L'age du compte et le contenu du site ne sont pas des conditions strictes. Elles bloqueraient les reclamations legitimes le jour de l'intégration, ce qui contredit la promesse "creez votre entreprise en un jour, domaine inclus". Les deux sont plutot integres dans le score d'abus Gemini comme signaux faibles : un tout nouveau compte avec un site modele obtient un score bas et passe en revision manuelle ; une vraie entreprise avec du vrai contenu est automatiquement approuvee, peu importe l'age. La reponse d'eligibilite contient un bloc `softSignals` (`ageDays`, `sitePublished`, `paragraphCount`) pour que l'interface puisse afficher une indication sans bloquer la reclamation.

Lorsqu'une condition n'est pas remplie, la carte liste les exigences restantes pour que l'utilisateur puisse voir ce qu'il reste a debloquer avant que la reclamation gratuite ne soit disponible.

Les TLD pris en charge pour l'achat sont `.nl`, `.eu`, `.com`, `.net` et `.org`. Les autres TLD affichent un message indiquant qu'ils ne sont pas encore pris en charge, avec la suggestion d'acheter le domaine ailleurs et de l'ajouter via le chemin BYO existant.

Nouvelles tables de base de donnees introduites par cette fonctionnalite :

- `domain_purchase_intents` -- suit les intentions d'achat payantes avec les identifiants Stripe PaymentIntent, les donnees du titulaire et le statut d'achat.
- `founder_domain_claims` -- suit les reclamations de domaine gratuites avec des snapshots d'eligibilite, un score d'abus et le statut de la reclamation.
- `domain_buyout_intents` -- suit les intentions de paiement de rachat en cas de depart pendant l'essai avec les identifiants Stripe PaymentIntent et le statut de transfert.
- La migration `domain_registrar_columns` ajoute des colonnes liees au registrar a la table `domains` existante.

#### Transférer votre domaine chez nous (transfert entrant)

Un domaine enregistré ailleurs ne pouvait jusqu'ici qu'être relié : l'enregistrement lui-même restait chez l'ancien registrar, donc le renouvellement et le départ en transfert ne le connaissaient pas. La quatrième option du sélecteur de domaine, **Transférer votre domaine chez nous**, amène l'enregistrement chez MyCompanyDesk. Il vous faut le code d'autorisation (le code de transfert) de votre registrar actuel, et le registre demande un numéro de téléphone avec la demande.

Le sélecteur affiche le prix du transfert avant l'engagement :

- **Un transfert `.nl` est gratuit.** Le registre ne facture rien et n'ajoute pas d'année, votre date d'expiration actuelle reste donc inchangée. Le renouvellement fonctionne ensuite comme un achat payant : vous recevez d'abord un rappel et ne payez que si vous renouvelez vous-même.
- **`.eu`, `.com`, `.net` et `.org` coûtent le prix d'enregistrement, une seule fois**, et le transfert ajoute une année au domaine. Les prix de transfert sont relevés auprès de l'API de prix d'OpenProvider ; le tableau actuel se trouve dans `apps/api/src/modules/domains/domain-pricing.config.js` dans le dépôt RichardTool.

Le transfert est demandé au registre avec votre code d'autorisation et nos serveurs de noms, pour que le courrier et le site continuent de pointer vers MyCompanyDesk. Pour un `.nl`, c'est généralement terminé en quelques minutes ; pour les autres extensions, cela peut prendre jusqu'à cinq jours. La page Domaines affiche une carte de statut par transfert : demandé, transféré (la carte disparaît dès que la zone est active) ou échoué avec la raison du registrar et une nouvelle tentative avec un nouveau code. Un code erroné ou un verrou de transfert encore actif chez votre registrar actuel revient comme un refus qui dit quoi faire.

Le devis refuse, avec la raison nommée, quand l'extension n'est pas prise en charge pour le transfert, quand le domaine est déjà enregistré chez nous (reliez-le plutôt via l'option «J'ai déjà un domaine»), quand le domaine est lié à un autre espace de travail, quand un transfert est déjà en cours, ou quand le domaine n'est pas encore relié en mode nameserver avec sa messagerie chez nous. Ce dernier refus existe parce que déplacer l'enregistrement d'abord couperait votre messagerie ; l'assistant de migration ci-dessous relie d'abord le domaine et emmène la messagerie ensuite.

Si vous transférez un domaine que vous aviez déjà relié, votre ligne de domaine existante est mise à jour et vos réglages, votre messagerie et votre site restent en place. Un transfert échoué est remboursé et la ligne du domaine retourne à son état relié. Le renouvellement traite les domaines transférés comme des achats payants.

#### Venir d'un autre hébergeur (migration de la messagerie)

L'option **Je viens d'un autre hébergeur** gère tout le déménagement en un assistant : il relie votre domaine, prépare vos boîtes, importe le courrier de vos anciennes boîtes, transfère l'enregistrement chez nous, importe ce qui est arrivé pendant le transfert, et se termine par l'avis que vous pouvez résilier votre forfait chez l'ancien hébergeur. Il vous faut le mot de passe de chaque ancienne boîte et, pour le transfert, le code de transfert. Serveurs de noms, enregistrements MX et ports restent invisibles ; seule la rare étape de repli les mentionne.

Vos boîtes sont prêtes dès le départ. Pendant que votre domaine est encore chez l'ancien hébergeur, toutes vos boîtes existent déjà et l'import de votre ancien courrier peut commencer tout de suite. La réception et l'envoi depuis ces adresses s'activent quand le domaine est chez nous ; l'assistant gère ce déménagement plus loin dans le même parcours, et la plateforme termine la configuration du courrier automatiquement dès que le domaine est actif.

L'étape du courrier demande chaque adresse que vous aviez chez l'ancien hébergeur, une ligne par adresse, et l'assistant ne crée des boîtes que pour les adresses que vous nommez. Chaque adresse reçoit ici sa propre boîte ; la première devient votre boîte principale. Une adresse qui ne faisait que renvoyer vers une autre, sans mot de passe à elle, n'a pas besoin d'être saisie : ce courrier est déjà arrivé dans la boîte vers laquelle il allait. Les adresses suivantes peuvent reprendre le mot de passe de la première ou en recevoir un propre. Les adresses partent une par une : pendant que l'une est en cours, les autres attendent leur tour, et chaque carte d'adresse montre où elle en est. Ne résiliez votre forfait chez l'ancien hébergeur qu'une fois chaque adresse terminée ; l'écran final liste les adresses transférées et, si une adresse n'est pas arrivée en entier, vous invite à nous contacter avant de résilier quoi que ce soit.

L'import est une tâche persistante chez nous, pas une action de navigateur. La tâche est stockée côté serveur, avec les mots de passe de vos anciennes boîtes chiffrés (AES-GCM), et seulement avec votre accord explicite. Après l'activation du domaine, une passe de suivi importe ce qui est arrivé entre-temps, 48 heures plus tard une dernière passe récupère le reste, puis les mots de passe stockés sont effacés. Quatorze jours, c'est le délai ferme : après, les mots de passe sont partis dans tous les cas. Quand l'import est terminé, une notification dans l'application indique combien de messages sont arrivés de combien de dossiers, jusqu'à quelle date, et que vous pouvez maintenant résilier votre forfait chez l'ancien hébergeur. L'hôte IMAP est deviné d'après vos enregistrements MX actuels, avec `imap.<domaine>` et `mail.<domaine>` en repli ; les hébergeurs connus comme Hostinger sont reconnus par leur nom, et là où un hébergeur demande un mot de passe d'application, l'assistant le dit. La technique se trouve dans `apps/api/src/modules/domains/domain-migrate.service.js` dans le dépôt RichardTool.

Deux garde-fous appartiennent au même parcours. La suppression d'une boîte ou la désactivation de la boîte de réception demande d'abord une confirmation qui dit combien de messages vont disparaître, historique importé compris. Et le devis de transfert refuse tant que votre messagerie n'a pas bougé, pour la raison ci-dessus. La promesse de confidentialité derrière : nous gardons les mots de passe de vos anciennes boîtes chiffrés jusqu'à ce que le transfert soit terminé, quatorze jours au maximum, puis nous les effaçons. Cette promesse figure aussi sur la [page de confidentialité](https://mycompanydesk.nl/privacy).

### Site web heberge

Le tableau de bord de votre site web se trouve sous **Entreprise > Votre site web** (`/website`). C'est un tableau de bord avec six onglets : Apercu, Visiteurs, Visibilite, Connexions, Domaine et e-mail, et Parametres. L'editeur s'ouvre via **Modifier le site** lorsque vous voulez changer le contenu ou le design.

Ce que couvrent les onglets :

- **Apercu** — Apercu du site, s'il est en ligne, et le nombre de modifications non publiees en attente.
- **Visiteurs** — D'ou viennent les visiteurs et comment ils se deplacent sur le site.
- **Visibilite** — SEO et metadonnees des pages. Les anciens liens `/website/seo` redirigent ici.
- **Connexions** — Prestataires de paiement (Mollie, Stripe Connect) et services tiers comme Mailchimp, Plausible et Trustpilot. Les anciens liens `/website/integraties` redirigent ici.
- **Domaine et e-mail** — Domaine personnalise, DNS, SSL, redirections et configuration de la boite de reception. Voir la section domaines personnalises ci-dessus.
- **Parametres** — Choisissez quel constructeur est actif (modele ou sur mesure) et configurez le slug de l'espace de travail et les autres parametres du site.

Lorsque votre espace de travail possede plusieurs domaines personnalises actifs (abonnement Pro), un selecteur de domaine permet d'editer une variante du site par domaine. Chaque domaine dispose de ses propres pages, navigation, tokens de design et snapshot de publication. Changer de domaine reinitialise l'onglet actif.

Le site public est diffuse a l'URL la plus prioritaire disponible pour l'entreprise : racine du domaine personnalise → sous-domaine de l'espace de travail → route de secours `/portal/<slug>`.

Vous pouvez enrichir le site avec le bloc **Rendez-vous**. Les visiteurs peuvent alors prendre rendez-vous directement depuis votre site. Voir [Rendez-vous en ligne](/fr/features/site-bookings).

### Mettre le site hors ligne

Si vous devez interrompre temporairement votre site, utilisez le bouton **Hors ligne** dans l'onglet **Aperçu**. Tant que le site est hors ligne, les visiteurs et les robots d'indexation reçoivent une page 503 avec un en-tête `Retry-After`. L'intervalle de nouvelle vérification recommandé commence à cinq minutes et monte jusqu'à un jour pour un site resté hors ligne plus d'un jour.

Après trois jours hors ligne, la carte de l'aperçu affiche un avertissement : Google considère une interruption prolongée comme une page supprimée, et il faut des semaines pour retrouver sa visibilité dans les résultats de recherche après le rétablissement du site. Ce message vous permet de vérifier que l'interruption reste intentionnelle.

### Forfaits site

`/website/pakketten` est une galerie de forfaits site prestyles et approuves. Vous pouvez rechercher par secteur ou par style. Choisir un forfait remplace votre site brouillon (pages, sections et tokens de theme), mais ne publie jamais automatiquement ; vous verifiez le resultat dans le constructeur de site et publiez vous-meme quand vous etes pret. Les anciens liens `/website/ontwerpen` redirigent ici.

Consultez [Constructeur de site](/fr/advanced/business-page) pour le guide complet de l'editeur.

### Boite de reception e-mail

La boite de reception est une interface de premier niveau sur `/inbox` (`apps/web/pages/inbox/index.vue`). Le backend se trouve dans `apps/api/src/modules/inbox/*` et ecrit dans des tables distinctes (`company_email_domains`, `company_mailboxes`, `email_threads`, `email_messages`, `email_attachments`, `email_events`).

Lorsqu'une facture fournisseur transmise depuis une piece jointe est convertie en brouillon de depense, la depense n'est comptabilisee qu'apres votre confirmation. Si la date de facturation tombe dans une periode de TVA deja declaree, la comptabilisation automatique est refusee et, au lieu de faire disparaitre silencieusement la facture, une notification `inbox_expense_period_locked` est creee ; elle atterrit dans la liste de la boite de reception et indique le fournisseur et la date de facturation concernes, pour que vous puissiez la comptabiliser manuellement dans la periode en cours ou deposer une declaration TVA complementaire.

Fonctionnalites :

- **Fils de discussion** -- les e-mails entrants sont regroupes en fils bases sur RFC 822 `Message-ID` / `In-Reply-To` / `References`. Chaque fil contient `last_message_preview`, `participants`, le statut (`open / snoozed / closed / spam / deleted`) et des etiquettes. Les longs fils masquent les messages du milieu derriere une pastille "Afficher {n} messages precedents", en gardant le plus ancien message et les deux plus recents visibles (convention Gmail/Outlook). Cliquez sur la pastille pour tout afficher.
- **Repondre** -- champ de reponse integre dans le fil. L'expediteur `From` choisit intelligemment l'adresse a laquelle l'e-mail original a ete envoye, de sorte qu'un client qui a ecrit a `support@acme.fr` recoive une reponse de `support@`, pas de `info@`.
- **Repondre a tous** -- reponse en un clic a tous les participants du fil. Le bouton apparait a cote de Repondre dans l'en-tete du fil et inclut tous les destinataires du message d'origine.
- **Transferer** -- transferez l'integralite du fil a un autre destinataire. Ouvre un tiroir de redaction avec le corps du message et les pieces jointes d'origine preserves pour modification avant envoi. L'en-tete du message transfere indique l'expediteur d'origine, la date et le sujet.
- **CC et BCC** -- les champs CC et BCC sont disponibles a la fois en redaction et en reponse via un bouton "Ajouter Cc/Bcc". Les adresses acceptent des listes separees par des virgules ou le collage depuis le presse-papiers. Les champs restent masques jusqu'a ce que vous en ayez besoin, suivant le schema standard des boites de reception ou la plupart des messages n'en ont pas besoin.
- **Brouillons** -- enregistrez les messages partiellement ecrits et revenez-y plus tard. Les brouillons sont enregistres côte serveur et persistent entre les sessions de navigation. Chaque brouillon contient un sujet, une liste de destinataires et un corps de message. Les brouillons sans sujet affichent "(pas de sujet)", et les brouillons sans destinataire affichent "(pas de destinataire)". Un brouillon de reponse est marque d'un tag "Reponse" dans la liste des fils, pour voir en un coup d'oeil sur quel fil vous etiez en train de repondre.
- **Rediger** -- formulaire en tiroir avec selection de la boite aux lettres, selection de l'expediteur, selection du client (ou champ `A` libre), sujet, message, champs CC/BCC, pieces jointes. Un avertissement de destinataire rejete est affiche avant l'envoi.
- **Alias d'envoi** -- `info@`, `support@`, `sales@` sont des alias bidirectionnels de la meme boite aux lettres. `noreply@` est un alias d'envoi uniquement -- selectionnable comme From, mais les e-mails entrants sont rejetes a l'ingestion.
- **Pieces jointes** -- telechargement avant envoi (redaction et reponse). Les pieces jointes des e-mails entrants sont telechargeables depuis le message ; les URL de telechargement signees expirent apres un court TTL.
- **Avis d'alias** -- lorsqu'un message entrant arrive a une adresse qui n'est pas encore un alias declare, le fil affiche un avis discret avec une action "Ajouter comme alias".
- **Liaison** -- les fils peuvent etre lies a un client, un projet ou une facture pour reference croisee.
- **Secours catch-all** -- les e-mails vers n'importe quelle partie locale du domaine sont achemines vers la boite aux lettres par defaut (`is_default = true`, une par domaine). Cela signifie que les fautes de frappe et les alias non declares ne disparaissent pas silencieusement.
- **Journal d'audit** -- les envois sortants, les modifications de boite aux lettres et les changements d'etat des fils sont enregistres dans une table d'audit pour l'espace de travail. Actuellement API uniquement (pas encore d'interface utilisateur) -- accessible au personnel d'assistance pour le depannage.
- **Affichage des e-mails HTML** -- les e-mails HTML sont affiches avec leur style d'origine dans un iframe sandboxe. Le moteur de rendu supprime les scripts, les formulaires et les gestionnaires d'evenements lors de l'assainissement, et bloque par defaut les images distantes pour proteger votre vie privee. Une barre d'avis apparait lorsque les images sont bloquees, avec un simple clic sur "Afficher les images" pour reafficher le message avec les images. Si aucun corps HTML n'est present, la partie texte brut sert de solution de secours.
- **Epinglage**: epinglez les fils importants avec une etoile pour un acces rapide. Une icône d'etoile apparait à côte du point de statut sur les fils epingles dans la liste. La barre d'outils comporte un bouton etoile qui bascule l'etat pour le fil ouvert. Une vue "Epingles" dans la barre laterale gauche à côte de Ouvert, Reporte, Ferme, Spam et Corbeille filtre les fils epingles, soutenue par un index partiel de base de donnees pour des resultats instantanes.
- **Suppression douce** -- les fils peuvent etre deplaces vers la Corbeille au lieu d'etre definitivement detruits. Un bouton Supprimer (icône de corbeille) apparait dans la barre d'outils pour les fils non supprimes. Une fois supprime, le bouton se transforme en action Restaurer qui replace le fil en `open`. Le filtre Corbeille apparait dans la barre laterale gauche a côte de Ouvert, Reporte, Ferme et Spam, vous permettant de consulter les fils supprimes avant leur purge definitive.
- **Recherche en texte integral**: une barre de recherche au-dessus de la liste des fils vous permet de rechercher dans tous les messages de la boite de reception par sujet, corps du texte, extrait et expediteur. La recherche utilise la recherche plein texte de Postgres avec ponderation des champs, de sorte que les correspondances dans le sujet apparaissent avant celles dans le corps du texte. Les resultats sont regroupes par fil, avec l'extrait du message le plus pertinent affiche en apercu. Prend en charge les expressions entre guillemets, `OR` et les exclusions `-`. Un delai de 250 ms maintient l'interface reactive, et l'indicateur de chargement donne un retour en temps reel.

#### Brouillons

L'onglet Brouillons se trouve a côte de la liste principale des fils. Les brouillons sont enregistres côte serveur, ils survivent donc aux redemarrages du navigateur et vous suivent d'un appareil a l'autre. Lorsque vous commencez un nouveau message ou une reponse et fermez le tiroir de redaction sans envoyer, le contenu est automatiquement enregistre comme brouillon. Vous pouvez aussi enregistrer explicitement avec le bouton "Enregistrer le brouillon". Un tag de brouillon indique "Reponse" si le brouillon a ete commence depuis un fil, ou "Nouveau" pour un nouveau message. Modifier un brouillon ouvre le tiroir de redaction pre-rempli avec le contenu enregistre. La suppression d'un brouillon necessite une etape de confirmation.

La boite de reception utilise votre domaine personnalise uniquement apres que `quickEnableInbox` a ete execute avec succes et que les enregistrements MX apex pointent vers Cloudflare. Jusque-la, l'espace de travail peut toujours envoyer des e-mails via le chemin de livraison par defaut decrit dans [Integration e-mail](/fr/settings/email), mais il ne peut pas recevoir d'e-mails.

#### Actualisation en direct

La boite de reception s'actualise automatiquement tant que l'onglet est ouvert. La liste des fils interroge le serveur toutes les 45 secondes pour les nouveaux messages, et le badge de la barre laterale s'actualise toutes les 60 secondes. Les deux se mettent en pause lorsque l'onglet est en arriere-plan -- aucun trafic reseau inutile. L'actualisation est silencieuse : aucun spinner de chargement ne clignote lors des rafraichissements en arriere-plan, et les interrogations sont entierement sautees pendant une recherche active pour que vos resultats restent stables. Un bouton d'actualisation manuelle a côte de Rediger recupere le dernier etat instantanement quand vous attendez quelque chose ; il est desactive pendant l'appel en cours pour eviter l'empilement de requêtes.

#### Marquer comme non lu

Vous pouvez marquer un fil ouvert comme non lu depuis la barre d'outils. Contrairement aux versions precedentes ou l'etat non lu etait uniquement local et perdu au prochain rafraichissement, il est desormais persiste côte serveur. Le badge de la barre laterale compte les messages non lus, pas les fils avec des messages non lus, et se met a jour en consequence. Le fil reste non lu apres les rechargements de page, les redemarrages du navigateur et sur tous vos appareils, jusqu'a ce que vous le rouvriez.

Le lecteur de thread suit aussi les changements d'état depuis le reste de la boîte de réception. Si vous déplacez une conversation vers la Corbeille, le Spam, Fermé ou En attente pendant que son panneau de lecture est ouvert, le panneau se ferme automatiquement. La vue détail reste ainsi synchronisée avec le dossier que vous consultez, et vous ne continuez pas à rédiger une réponse à un fil qui a déjà quitté la vue actuelle.

### Ventes

Lorsque vous ajoutez des boutons d'achat aux niveaux de tarifs ou a un bloc produit sur votre site public, chaque paiement effectue cree un enregistrement de vente. Suivez-les dans **Argent > Ventes** (`/workspace/financial/money/sales`).

Ce que le journal des ventes affiche :

- Une liste chronologique de tous les achats effectues via votre site.
- Le prestataire de paiement (Mollie ou Stripe Connect) et le statut du paiement (`paid`, `pending`, `failed`, `expired`, `refunded`).
- La section d'origine (quel niveau de tarif ou quel bloc produit a ete achete).
- L'e-mail du client, le montant paye et la devise.

Les enregistrements de vente sont crees par le point de terminaison de checkout public (`POST /public/sites/:slug/checkout`), qui valide la section, cree un paiement via le prestataire connecte et redirige l'acheteur vers la page de checkout hebergee.

Les ventes payees affichent un menu d'actions (trois points) avec deux options :

- **Regenerer la facture.** Recree la facture liee si elle a ete perdue ou n'a pas ete generee lors de l'achat. Sans danger meme si la facture existe deja.
- **Rembourser.** Reverse le montant total au client via le prestataire de paiement d'origine (Mollie ou Stripe). Un avoir est automatiquement cree contre la facture liee pour votre comptabilite. Disponible uniquement pour les ventes payees.

### Parcours apres l'achat

Lorsqu'un paiement est finalise, la plateforme execute automatiquement les etapes suivantes. Tout fonctionne en fire-and-forget : les erreurs sont journalisees et n'affectent pas le statut de paiement que l'acheteur voit.

1. **Facture generee.** Une facture est creee a partir de la vente, avec le nom du produit, le prix et l'e-mail de l'acheteur. Le prix que vous definissez dans l'editeur est le prix final client, TVA comprise. La ligne de facture separe ce montant en un prix HT et le taux de TVA que vous avez configure sur le niveau de tarif ou le bloc produit (21% par defaut). Si l'e-mail correspond a un client existant dans votre espace de travail, la facture est liee a ce client. Sinon, une fiche client minimale est creee. La facture est finalisee immediatement (statut `sent`) puisque le paiement a deja ete recu.
2. **Paiement enregistre.** Un enregistrement de paiement est cree sur la facture via le service de paiement standard. La methode de paiement est definie sur le prestataire (Mollie ou Stripe) et la reference contient l'ID de session du processeur pour les pistes d'audit.
3. **Confirmation au client.** L'acheteur recoit un e-mail de confirmation avec le nom du produit, le montant et la methode de paiement. Si une facture a ete generee, l'e-mail contient un lien securise vers le portail pour consulter et telecharger la facture en PDF.
4. **Proprietaire averti.** Vous recevez une notification dans l'application et un resume par e-mail de la vente : produit, montant, e-mail du client et un lien direct vers la facture.

Les pages succes-du-checkout et checkout-annule affichent a l'acheteur un ecran de resultat aux couleurs de votre marque, en utilisant les tokens de design (couleurs) de votre site.

## Visibilite de l'onglet Boite de reception

L'onglet Boite de reception est toujours visible dans la barre laterale et la barre de navigation inferieure. Sur les abonnements gratuits sans boite de reception, il s'affiche comme indicateur de mise a niveau et ouvre la comparaison des abonnements lorsque vous le selectionnez. Sur les abonnements payants, il reste toujours visible, meme avant qu'un domaine soit connecte, car il est le point d'entree de l'assistant de configuration de la boite de reception.

Pour un espace de travail qui a deja configure une boite de reception sur un domaine, l'onglet affiche la veritable boite avec les compteurs de non-lus et la gestion complete des fils. Pour les espaces payants sans domaine configure, selectionner l'onglet redirige vers `/inbox/setup` afin de connecter le domaine et activer la boite de reception en un seul flux.

## Revendication d'un site de demonstration

Lorsque MyCompanyDesk cree un site de demonstration pour un prospect dans le cadre du programme de prospection, le prospect recoit un lien de revendication personnalise (par WhatsApp ou e-mail). La page de revendication sur `/claim/<slug>` permet au prospect de prendre possession de l'espace de travail de demonstration avec sa propre adresse e-mail et son mot de passe.

### Comment ca fonctionne

1. Sil ou le cron de prospection cree un espace de travail de demonstration (`companies.is_demo = true`) avec un site web de 4 pages specifique au secteur (Accueil, Services, A propos, Contact), construit sur la base multi-page standard que chaque nouvel espace de travail recoit. Des superpositions specifiques au metier sont ensuite appliquees : le hero de l'accueil recoit un slogan metier, la page Services recoit un bloc spotlight avec le service principal du metier et un bloc services avec trois cartes de service specifiques au metier, et la page Contact est remplie avec le numero de telephone du prospect dans l'introduction du formulaire et son adresse dans le bloc d'emplacements.
2. Le prospect recoit un lien comme `https://app.mycompanydesk.com/claim/couvreur-lyon`.
3. La page de revendication charge la demonstration par slug et affiche le nom de l'entreprise. Si l'espace de travail de demonstration existe et peut etre revendique, le prospect saisit son adresse e-mail et un mot de passe (minimum 8 caracteres, avec une lettre et un chiffre).
4. A la soumission, l'espace de travail est transfere de maniere atomique : l'utilisateur placeholder est reecrit avec l'e-mail et le mot de passe du prospect, `is_demo` est desactive et la ligne de prospection est mise a jour avec les metadonnees de revendication.
5. L'adresse e-mail est marquee comme verifiee lors de la revendication (le prospect a deja prouve etre proprietaire du moyen de contact utilise pour la prospection). Un e-mail de bienvenue est tout de meme envoye pour que l'adresse figure dans sa boite de reception.
6. Le prospect est redirige vers la page de connexion avec un message de succes et peut immediatement se connecter, modifier son site web, envoyer des factures et utiliser la boite de reception.

### Garanties de securite

- Seuls les espaces de travail avec `is_demo = true` peuvent etre revendiques. Les sites de vrais clients ne sont jamais revendicables via ce point d'acces.
- L'adresse e-mail ne doit pas deja appartenir a un autre utilisateur sur la plateforme.
- La revendication est atomique (une seule transaction de base de donnees), de sorte que les transferts partiels ne peuvent pas laisser un etat incoherent.
- Les liens de revendication sont invalides une fois la demonstration revendiquee, empechant toute reutilisation.

## Envoyer des e-mails vs recevoir des e-mails

Ce lot correspond au côte **reception**. Les e-mails sortants -- envoi de factures, rappels, envoi de devis -- sont geres par le pipeline e-mail plus large decrit dans [Integration e-mail](/fr/settings/email). La boite de reception sert a recevoir les e-mails des clients et a rediger des reponses ; elle n'achemine pas vos envois automatises de factures. La livraison des factures suit toujours la methode d'envoi que vous avez choisie dans [Integration e-mail](/fr/settings/email) (Gmail, Outlook ou l'expediteur integre). La signature DKIM du domaine de la boite de reception est utilisee pour les reponses sortantes redigees dans la boite de reception, pas pour les e-mails transactionnels automatises.

## Limites et points d'attention

- **Un site web par entreprise.** L'ajout d'un domaine personnalise desactive le sous-domaine de l'espace de travail. La suppression du domaine ne reactive pas automatiquement le slug -- reactivez-le manuellement si vous souhaitez revenir en arriere.
- **Une seule boite de reception active par domaine.** La plateforme n'autorise qu'un seul espace de travail a la fois a recevoir du courrier sur un domaine donne. Si un autre espace de travail a deja une boite active sur `acme.fr`, votre tentative d'activer la boite sur le meme nom est bloquee. Les sites web et les revendications CNAME ne sont pas bloques; seule une boite active est exclusive.
- **Vous ne pouvez pas revendiquer une zone deja detenue par un autre espace de travail.** Lorsque vous ajoutez un domaine en mode nameserver, la plateforme verifie si la zone Cloudflare sous-jacente est deja active pour un autre espace de travail. Si c'est le cas, l'ajout est refuse avec un message d'erreur clair, pour eviter de "verifier" un domaine grace au DNS de quelqu'un d'autre.
- **Re-ajouter votre propre domaine precedemment supprime fonctionne toujours.** Si votre espace de travail a precedemment supprime un domaine, la zone existante peut etre reutilisee pour le meme espace de travail; la protection bloque seulement qu'un autre espace de travail la prenne.
- **Le mode CNAME n'a pas d'e-mail.** Le routage des e-mails necessite une zone Cloudflare complete, ce que seul le mode nameserver fournit.
- **L'assistant refuse d'ecraser un MX tiers existant.** Si votre apex pointe deja vers Google Workspace ou Microsoft 365, `quickEnableInbox` retourne `apexMx.status = 'conflict'` et vous devez choisir : migrer le MX vers Cloudflare, ou rester chez votre fournisseur existant et sauter la boite de reception integree.
- **Sous-domaines reserves.** `app`, `admin`, `api`, `www`, `mail`, `support`, `portal`, `dashboard` et quelques autres sont bloques au niveau du slug de l'espace de travail.
- **Pre-lancement.** Le lot est controle par les flags `custom_domains` et `public_business_page`. Les espaces de travail sans ces flags voient l'invitation de mise a niveau au lieu de l'editeur.

## Voir aussi

- [Assistant de configuration](/fr/getting-started/company-setup) -- l'intégration magique qui pilote le flux integre.
- [Integration e-mail](/fr/settings/email) -- e-mails sortants, selection de l'expediteur, suivi de livraison.
- [Constructeur de site](/fr/advanced/business-page) -- le guide complet de l'editeur.
- [Parametres de l'entreprise](/fr/settings/company) -- le parapluie qui contient A propos / Apparence / Site web / Adresse.
- [Facturation et abonnements](/fr/settings/billing) -- les flags de fonctionnalites qui contrôlent le lot.
