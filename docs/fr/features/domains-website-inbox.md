---
title: Domaines, site web et boite de reception
last_verified: 2026-05-09
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

- **Mode nameserver** est verifie des que Cloudflare signale la zone comme `active`. Le statut passe de `pending_nameservers → pending_verification → active`. L'utilisateur est informe via la cloche de notification dans l'application.
- **Mode CNAME** est verifie en resolvant le CNAME et en confirmant qu'il pointe vers la cible Pages. Le statut passe de `pending_cname → active`.

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

- Met en place le sous-domaine d'envoi (`mail.acme.fr`) et ecrit les enregistrements DNS DKIM et SPF.
- Definit une regle Cloudflare Email Routing catch-all sur la zone, dirigee vers le Worker `inbox-inbound`.
- Inspecte les enregistrements MX apex. S'ils sont vides ou pointent deja vers Cloudflare, l'assistant installe le MX Cloudflare. Si un fournisseur tiers (Google Workspace, Microsoft 365) est deja present, l'assistant refuse d'ecraser et affiche un avertissement de `conflict` pour que vous puissiez decider.
- Cree `info@acme.fr` comme la boite aux lettres partagee par defaut.
- Configure `support@` et `sales@` comme alias bidirectionnels de `info@`, et `noreply@` comme alias d'envoi uniquement (autorise en From, rejete a l'arrivee).
- Cree eventuellement une boite aux lettres personnelle (`silvan@acme.fr`) si vous avez coche la case dans l'assistant.

## Reference par fonctionnalite

### Domaines personnalises

L'interface se trouve sous **Entreprise > Votre propre adresse .com** -- la page leaf est `/workspace/organization/company/address`, montee depuis `apps/web/pages/workspace/organization/company/address.vue` et affichant le composant `SettingsDomains`. Les deux anciens chemins `/workspace/organization/domains` et `/workspace/communication/domains` redirigent ici.

La page se divise en deux sections :

- **Domaines en attente**: Les domaines en cours de verification apparaissent toujours en haut, independamment du selecteur de domaine dans la barre superieure. Cela vous permet d'acceder aux instructions de verification pour les domaines nouvellement ajoutes avant qu'ils ne deviennent actifs.
- **Panneau du domaine actif**: Les onglets DNS, SSL, redirections, analytique, securite et SEO sont lies au domaine selectionne dans le selecteur de domaine de la barre superieure (accessible depuis le constructeur de site sur `/website`). Lorsque le site principal (affiche sous le nom de votre espace de travail) est selectionne, le panneau du domaine est entierement masque. Changer de domaine reinitialise l'onglet actif sur Routage.

Ce que la page vous permet de faire :

- **Ajouter un domaine** (mode nameserver ou CNAME) via une carte dediee toujours visible.
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
| `inbox_enabled`, `inbox_subdomain_tag`, `inbox_dkim_ready` | Definis par `quickEnableInbox`. Le sous-domaine d'envoi d'e-mails (`mail.acme.fr` par defaut) et le statut de provisionnement DKIM. |
| `business_page_enabled`, `portal_subdomain_enabled` | Determinant quel nom d'hôte dessert le site web public. |
| `verified_at` | Defini lorsque la verification reussit. |

### Site web heberge

Le constructeur de site se trouve sous **Entreprise > Votre site web** (`/website`). C'est un editeur multipage complet avec des sections, des blocs, des tokens de design et des snapshots de publication. Lorsque votre espace de travail possede plusieurs domaines personnalises actifs (abonnement Pro), un selecteur de domaine dans la barre superieure vous permet d'editer une variante du site par domaine. Chaque domaine dispose de ses propres pages, navigation, tokens de design et snapshot de publication. Changer de domaine reinitialise l'onglet actif. Le site public est diffuse depuis votre domaine personnalise (ou le sous-domaine de l'espace de travail / la route portail de secours) une fois publie.

Ce que l'editeur affiche :

- **Selecteur de domaine** (barre superieure) -- Lorsque plus d'un domaine actif existe, un menu deroulant vous permet de choisir quelle variante du site editer. L'option du site principal affiche le nom de votre espace de travail. Les domaines sans variante affichent une indication "creer une variante" et clonent le site principal lors de la premiere selection.
- **Onglet Editeur** -- Composez des pages en ajoutant et en organisant des sections (hero, texte, galerie, services, equipe, temoignages, formulaire de contact, tarifs, produit, HTML personnalise). Inspectez et modifiez le contenu, la mise en page, le style et l'animation des sections. Les niveaux de tarifs peuvent optionnellement avoir un bouton d'achat qui redirige vers le checkout Mollie ou Stripe Connect. Chaque niveau a un taux de TVA configurable (21%, 9% ou 0%), le prix affiche au client etant le prix final TVA comprise. Le bloc produit est une fiche d'achat autonome avec la meme plomberie de paiement.
- **Onglet Pages** -- Créer, renommer, supprimer et filtrer les pages par statut (en ligne, brouillon, planifie). Choisir un modele lors de la creation d'une nouvelle page.
- **Onglet Style** -- Tokens de design pour les couleurs, les polices, l'echelle, le mouvement, les boutons, le CSS personnalise et les snippets d'en-tête (analytique, preconnexions de polices).
- **Onglet Domaine et SEO** -- Gestion des domaines personnalises. Voir la section domaines personnalises ci-dessus.
- **Onglet Integrations** -- Connectez des prestataires de paiement (Mollie, Stripe Connect) avec des fiches de configuration integrees, ainsi que des services tiers comme Mailchimp, Plausible et Trustpilot. La meme connexion de paiement alimente les boutons de paiement sur les factures ; voir [Parametres financiers](/fr/workspace/financial/money/payments) pour la configuration complete.
- **Editeur de navigation** -- Reorganiser les liens d'en-tête par glisser-deposer, avec des groupes deroulants et des liens externes.
- **Bouton Publier** -- Affiche le nombre de modifications non publiees. Publie un snapshot en un clic.
- **Apercu responsive** -- Basculer entre les vues desktop, tablette et mobile dans l'editeur.

Le site public est diffuse a l'URL la plus prioritaire disponible pour l'entreprise : racine du domaine personnalise → sous-domaine de l'espace de travail → route de secours `/portal/<slug>`.

Consultez [Constructeur de site](/fr/advanced/business-page) pour le guide complet de l'editeur.

### Boite de reception e-mail

La boite de reception est une interface de premier niveau sur `/inbox` (`apps/web/pages/inbox/index.vue`). Le backend se trouve dans `apps/api/src/modules/inbox/*` et ecrit dans des tables distinctes (`company_email_domains`, `company_mailboxes`, `email_threads`, `email_messages`, `email_attachments`, `email_events`).

Fonctionnalites :

- **Fils de discussion** -- les e-mails entrants sont regroupes en fils bases sur RFC 822 `Message-ID` / `In-Reply-To` / `References`. Chaque fil contient `last_message_preview`, `participants`, le statut (`open / snoozed / closed / spam`) et des etiquettes.
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

#### Brouillons

L'onglet Brouillons se trouve a côte de la liste principale des fils. Les brouillons sont enregistres côte serveur, ils survivent donc aux redemarrages du navigateur et vous suivent d'un appareil a l'autre. Lorsque vous commencez un nouveau message ou une reponse et fermez le tiroir de redaction sans envoyer, le contenu est automatiquement enregistre comme brouillon. Vous pouvez aussi enregistrer explicitement avec le bouton "Enregistrer le brouillon". Un tag de brouillon indique "Reponse" si le brouillon a ete commence depuis un fil, ou "Nouveau" pour un nouveau message. Modifier un brouillon ouvre le tiroir de redaction pre-rempli avec le contenu enregistre. La suppression d'un brouillon necessite une etape de confirmation.

La boite de reception utilise votre domaine personnalise uniquement apres que `quickEnableInbox` a ete execute avec succes et que les enregistrements MX apex pointent vers Cloudflare. Jusque-la, l'espace de travail peut toujours envoyer des e-mails via le chemin de livraison par defaut decrit dans [Integration e-mail](/fr/settings/email), mais il ne peut pas recevoir d'e-mails.

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

## Envoyer des e-mails vs recevoir des e-mails

Ce lot correspond au côte **reception**. Les e-mails sortants -- envoi de factures, rappels, envoi de devis -- sont geres par le pipeline e-mail plus large decrit dans [Integration e-mail](/fr/settings/email). La boite de reception sert a recevoir les e-mails des clients et a rediger des reponses ; elle n'achemine pas vos envois automatises de factures. La livraison des factures suit toujours la methode d'envoi que vous avez choisie dans [Integration e-mail](/fr/settings/email) (Gmail, Outlook, SMTP personnalise ou l'expediteur integre). La signature DKIM du domaine de la boite de reception est utilisee pour les reponses sortantes redigees dans la boite de reception, pas pour les e-mails transactionnels automatises.

## Limites et points d'attention

- **Un site web par entreprise.** L'ajout d'un domaine personnalise desactive le sous-domaine de l'espace de travail. La suppression du domaine ne reactive pas automatiquement le slug -- reactivez-le manuellement si vous souhaitez revenir en arriere.
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
