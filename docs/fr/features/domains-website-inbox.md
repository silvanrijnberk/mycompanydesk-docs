---
title: Domaines, site web et boîte de réception
description: "Domaines personnalisés, site vitrine hébergé et boîte partagée : ce qui est inclus dans Desk et Office et comment ils fonctionnent ensemble."
last_verified: 2026-10-14
---

# Domaines, site web et boîte de réception

> **Disponible pour tous.** Le site web sur une adresse mycompanydesk.site gratuite et une boîte de réception pour lire et répondre sont inclus dans Desk. Les domaines personnalisés et la boîte de réception complète sont inclus dans Office.

Les domaines personnalisés, le site web d'entreprise hébergé et la boîte de réception e-mail partagée forment un seul produit. La raison : ils partagent l'état. Le même domaine relié qui prouve que vous contrôlez `acme.fr` fait aussi de `acme.fr` l'URL de votre site web et permet à `info@acme.fr` de recevoir des e-mails. Il y a un flux d'intégration, un arbre de paramètres et un endroit dans l'application pour tout gérer.

## La valeur du lot

Ajoutez un domaine et vous obtenez trois choses :

- **Une adresse personnalisée.** Votre entreprise est accessible sur `acme.fr` au lieu de `acme.mycompanydesk.site`.
- **Un site web en ligne.** La page d'entreprise hébergée est automatiquement publiée sur le domaine vérifié.
- **Une boîte de réception opérationnelle.** `info@acme.fr`, ainsi que `support@`, `sales@` et un alias d'envoi uniquement `noreply@`, captent les e-mails et envoient des réponses.

Vous pouvez lancer le flux depuis la configuration de la boîte de réception (`/inbox/setup`), qui relie votre domaine et active la boîte de réception en un seul parcours, ou étape par étape depuis **Paramètres › Votre site et domaine** (`/settings/domein`). Si vous choisissez « Votre propre site web » ou « E-mail sur votre propre domaine » à la question « Par quoi voulez-vous commencer ? » de l'[Assistant de configuration](/fr/getting-started/company-setup), l'assistant vous envoie ensuite vers votre site ou vers la configuration de la boîte de réception.

## Un flux d'intégration

La configuration de la boîte de réception sur `/inbox/setup` est le point d'entrée recommandé. Elle enchaîne toutes les étapes d'une traite : vous répondez à quelques questions et la plateforme règle tout le reste.

### Étape 1: Ajouter un domaine

Deux chemins :

- **Sous-domaine d'espace de travail gratuit** : `votre-slug.mycompanydesk.site`. Aucun travail DNS ; le slug (la forme simple du nom de votre entreprise) est enregistré comme domaine personnalisé Cloudflare Pages et le site web est en ligne en quelques secondes. Le sous-domaine n'entre en vue qu'à la publication du site web, pas avant. Cette adresse fait partie de Desk : le site affiche un petit label « Gemaakt met MyCompanyDesk » et reste en ligne en permanence. Sur un domaine personnalisé (Office), ce label n'apparaît pas.
- **Votre propre domaine**: saisissez `acme.fr`. Deux modes de configuration sont pris en charge :
  - **Mode nameserver** (recommandé) : une zone Cloudflare est créée pour le domaine. Vous modifiez les nameservers de votre registraire vers les deux noms d'hôte `*.ns.cloudflare.com` affichés par l'assistant. Cloudflare devient le DNS faisant autorité pour le domaine, ce qui permet l'e-mail, le SSL et la gestion des enregistrements DNS dans MyCompanyDesk.
  - **Mode CNAME**: pour un sous-domaine (ex. `portal.acme.fr`) ou pour ne relier que le site web de votre domaine principal, pendant que l'e-mail et tout le reste restent chez votre hébergeur actuel (« Connecter uniquement mon site web »). Vous ajoutez un seul enregistrement CNAME chez votre hébergeur actuel ; sur un domaine principal, c'est généralement `www.` suivi de votre domaine, car la plupart des hébergeurs ne permettent pas d'enregistrement CNAME sur le domaine nu. Dès que l'enregistrement est en place, `www.<votre domaine>` affiche votre site web MyCompanyDesk. Le routage des e-mails n'est pas disponible dans ce mode ; héberger le site sur le domaine nu lui-même exige le mode nameserver.

L'ajout d'un domaine personnalisé désactive automatiquement le sous-domaine de l'espace de travail : il y a un site web canonique par entreprise, jamais deux.

### Étape 2: Vérification

La vérification s'exécute à la fois à la demande et par interrogation périodique. La page de détail affiche un bouton **Vérifier** et une tâche en arrière-plan réinterroge chaque domaine en attente à intervalles réguliers.

- **Mode nameserver** est vérifié dès que Cloudflare signale la zone comme active. Le statut passe de l'attente des serveurs de noms, par l'attente de vérification, à actif. L'utilisateur est informé via la cloche de notification dans l'application.
- **Mode CNAME** est vérifié en résolvant le CNAME et en confirmant qu'il pointe vers la cible Pages. Le statut passe de l'attente de l'enregistrement CNAME à actif.

Un domaine en mode nameserver qui a attendu 30 jours vos serveurs de noms sans jamais se connecter est supprimé automatiquement ; le nom redevient ainsi disponible pour un autre espace de travail. Les domaines qui ont déjà une boîte sur eux (courrier importé compris), ceux que nous détenons nous-mêmes chez le registrar, et les achats ou transferts en cours ne sont jamais supprimés de cette façon.

### Étape 3: SSL

Le SSL est provisionné automatiquement par Cloudflare dès que la zone est active. Le mode par défaut est **Full (strict)** ; vous pouvez le modifier depuis `Détail du domaine › SSL` (`off / flexible / full / strict`). Le champ de statut du certificat dans le panneau SSL reflète le résultat de vérification de Cloudflare.

### Étape 4: Le site web est en ligne

La page d'entreprise hébergée (voir [Constructeur de site](/fr/advanced/business-page)) est automatiquement publiée à la racine du domaine dès que la zone est active. Votre site est servi à la meilleure adresse dont vous disposez, dans cet ordre :

1. Un domaine personnalisé qui porte votre site → `https://acme.fr`
2. Un sous-domaine de votre domaine personnalisé pour votre site → `https://portal.acme.fr`
3. Le sous-domaine de l'espace de travail → `https://acme.mycompanydesk.site`
4. La route portail de secours (`/portal/<slug>`) lorsque rien d'autre n'est configuré.

### Étape 5: La boîte de réception capture les e-mails

Pour les domaines personnalisés en mode nameserver, l'assistant active la boîte de réception après la vérification. Cette étape peut être relancée sans risque et effectue les opérations suivantes :

- Met en place l'envoi d'e-mails sur le domaine nu (`acme.fr` par défaut) et écrit les enregistrements DKIM et SPF dans votre DNS. Un label de sous-domaine explicite provisionne `<label>.<domaine>` à la place (ex. `mail.acme.fr`).
- Définit une règle catch-all via Cloudflare Email Routing, pour que tout le courrier du domaine arrive dans votre boîte de réception.
- Inspecte les enregistrements MX apex. S'ils sont vides ou pointent déjà vers Cloudflare, l'assistant installe le MX Cloudflare. Si un fournisseur tiers (Google Workspace, Microsoft 365) est déjà présent, l'assistant refuse d'écraser et affiche un avertissement, pour que vous puissiez décider vous-même.
- Crée `info@acme.fr` comme la boîte aux lettres partagée par défaut.
- Configure `support@` et `sales@` comme alias bidirectionnels de `info@`, et `noreply@` comme alias d'envoi uniquement (autorisé en From, rejeté à l'arrivée).
- Si vous choisissez à l'étape d'adresse une autre adresse que `info@` (par exemple `jean@acme.fr`), cette boîte devient votre boîte par défaut.

Vous pouvez aussi activer la boîte de réception avant que la vérification ne soit terminée. Cloudflare refuse de configurer la messagerie sur une zone dont les serveurs de noms ne pointent pas encore vers nous ; votre boîte est alors créée immédiatement et les étapes propres à la zone (routage, catch-all, MX apex) sont reportées : l'application vous dit que le courrier sur ce domaine fonctionnera dès que vos serveurs de noms pointeront vers nous. Dès que le domaine devient actif, la plateforme termine la configuration d'elle-même.

## Référence par fonctionnalité

### Domaines personnalisés

L'interface se trouve sous **Paramètres › Votre site et domaine** (`/settings/domein`, titre de page « Votre domaine »). Les anciens chemins `/workspace/organization/company/address`, `/workspace/organization/domains` et `/workspace/communication/domains` redirigent ici.

La page se divise en deux sections :

- **Domaines en attente** : les domaines en cours de vérification apparaissent toujours en haut. Vous accédez ainsi aux instructions de vérification des domaines nouvellement ajoutés avant qu'ils ne deviennent actifs.
- **Domaines actifs** : chaque domaine actif a sa propre carte avec ses propres onglets, qui retiennent chacun leur choix. Une carte s'ouvre sur l'onglet **Routage**.

La page affiche par défaut une vue allégée. Cinq onglets pour utilisateurs avancés restent masqués jusqu'à ce que vous activiez le **Mode avancé** : **Enregistrements DNS**, **SSL / TLS**, **Redirections URL**, **Analyse** et **Sécurité**. Un domaine en mode CNAME n'a que l'onglet Routage. Le mode avancé est un interrupteur par appareil sur la page **Affichage** des paramètres ; voir l'[aperçu des paramètres](/fr/settings/).

Ce que la page vous permet de faire :

- **Acheter ou réclamer un domaine** via la carte d'achat de domaine. Saisissez un nom de domaine, vérifiez la disponibilité via OpenProvider, et achetez le domaine ou réclamez-le gratuitement si votre espace de travail est éligible à la réclamation gratuite d'un `.nl`.
- **Ajouter un domaine** (mode nameserver ou CNAME) via une carte dédiée toujours visible.
- **Transférer votre domaine chez nous** (transfert entrant) avec le code d'autorisation de votre registrar actuel, ou lancez l'assistant de migration si votre messagerie est encore chez un autre hébergeur.
- **Vérifier** un domaine en attente.
- **Gérer les enregistrements DNS** pour le domaine sélectionné : A, AAAA, CNAME, MX, TXT, SRV, CAA, NS. Les modifications partent directement chez Cloudflare.
- **SSL** pour le domaine sélectionné : consulter le statut du certificat, changer le mode SSL.
- **Redirections URL** pour le domaine sélectionné : trois Cloudflare Page Rules gratuites par zone. Modèle source + destination + 301/302.
- **Sécurité des e-mails** pour le domaine sélectionné : vérification SPF/DMARC/DKIM avec une option "corriger" en un clic qui écrit des valeurs par défaut sécurisées (`v=spf1 ~all`, `v=DMARC1; p=quarantine; …`). Si votre domaine comporte déjà son propre enregistrement SPF ou DMARC, il est conservé, et la vérification accepte tout enregistrement de stratégie unique de ce type.
- **Analyse** pour le domaine sélectionné : 30 derniers jours de requêtes, bande passante, menaces, visiteurs, pages vues. Si Cloudflare ne fournit pas ces chiffres, l'onglet affiche un état vide plutôt qu'une erreur.
- **Supprimer** le domaine sélectionné : le domaine quitte votre espace de travail et la zone Cloudflare (ou, en mode CNAME, la liaison du site) est supprimée. Si votre site tournait sur ce domaine, il revient vers un autre domaine de site actif ou vers l'adresse mycompanydesk.site gratuite. Le domaine est enregistré via MyCompanyDesk ? La suppression demande d'abord une confirmation explicite : le site et les e-mails sur cette adresse cessent immédiatement de fonctionner, les renouvellements s'arrêtent, et le code de transfert ne pourra plus être récupéré ensuite. Vous voulez emmener le domaine ? Récupérez d'abord le code de transfert.
- **Domaines inactifs** dans une carte dédiée : les domaines expirés, les domaines transférés ailleurs et les domaines en CNAME jamais connectés y apparaissent avec un badge d'état et une courte explication, chacun avec une action de suppression ; les domaines expirés proposent aussi de contacter le support.

#### Cycle de renouvellement

Le renouvellement de domaine suit trois chemins selon la manière dont le domaine a été acquis :

Chaque fenêtre de renouvellement affiche d'abord le prix.

1. **Renouvellement gratuit avec Office** (un domaine réclamé gratuitement dans un espace de travail devenu client Office payant) : MyCompanyDesk prend en charge le renouvellement. Le domaine se renouvelle automatiquement tant que l'espace de travail est réellement sur Office ; quand l'abonnement est résilié pour la fin de période et qu'Office s'arrête avant l'expiration du domaine, le renouvellement vous incombe ensuite. Aucun moyen de paiement requis.
2. **Renouvellement automatique payant** (un domaine acheté, ou un domaine réclamé gratuitement dans un espace de travail sans Office) : Facturé annuellement via la carte enregistrée. Fonctionne comme tout autre renouvellement d'abonnement.
3. **Renouvellement manuel** : si un espace de travail avec un domaine réclamé gratuitement quitte Office et n'a pas de carte enregistrée, le domaine ne se renouvelle pas automatiquement. Vous voyez une notification et lancez depuis celle-ci un paiement ponctuel pour le renouvellement, dans une fenêtre de paiement Stripe au sein de MyCompanyDesk. C'est le seul moyen de garder un domaine actif sans abonnement actif ni carte enregistrée.

#### Rachat du domaine en cas de départ pendant l'essai

Lorsqu'un client en période d'essai Office décide de partir avant de devenir client Office payant, il dispose d'une troisième option pour son domaine `.nl` gratuit : le racheter pour un montant forfaitaire de €15,00 TTC (paiement unique). Dans la fenêtre de rachat, le client paie via Stripe et obtient la pleine propriété. Une fois le paiement effectué, le titulaire du domaine passe de MyCompanyDesk au client et le code d'authentification (EPP) est affiché, permettant de déplacer le domaine vers n'importe quel registrar.

Le prix de €15,00 est volontairement indiqué TTC, car le paiement est déclenché au moment où le client quitte MyCompanyDesk. Le montant est de €12,40 plus 21% de TVA néerlandaise, arrondi au centime près, de sorte que le total atteint exactement €15,00.

Le prix de rachat est un prix produit, pas un supplément de transfert. MyCompanyDesk ne facture jamais de frais pour le code de transfert lui-même une fois que le client est le titulaire enregistré.

#### Conséquences d'un transfert

Transférer un domaine enregistré via MyCompanyDesk vers un autre registrar a des conséquences permanentes, constatées lors du contrôle hebdomadaire auprès du registrar :

- **Domaines réclamés gratuitement** : l'avantage du domaine gratuit est perdu. L'espace de travail ne pourra plus jamais réclamer un autre domaine gratuit. À noter : le rachat du domaine pendant l'essai (voir section rachat ci-dessus) n'est pas un transfert, c'est un changement de titulaire qui donne la propriété au client avant tout transfert, préservant ainsi l'avantage du domaine gratuit pour la durée de l'essai.
- **Domaines achetés** : aucun avantage ne disparaît. Le domaine apparaît simplement comme transféré.

La fenêtre de réclamation avertit de ces conséquences avant qu'une réclamation de domaine gratuit ne soit soumise, et exige une confirmation explicite de l'utilisateur. Une notice "Fonctionnement de votre domaine gratuit" explique que le domaine est enregistré au nom de MyCompanyDesk pendant l'essai, qu'il sera transféré gratuitement au nom du client lorsque celui-ci devient un client Office payant, et qu'il peut être racheté pour €15 en cas de départ anticipé. Si l'espace de travail est déjà un client Office payant, la fenêtre affiche ses propres textes : le domaine passe immédiatement à votre nom et se renouvelle gratuitement chaque année tant que vous gardez Office ; arrêtez Office et vous le renouvelez vous-même ensuite. Ce qui disparaît lors d'un transfert est consigné, pour que le support puisse le retrouver.

#### Acheter ou réclamer un domaine

La carte d'achat de domaine se trouve dans le sélecteur de domaine de la page Votre domaine. La carte permet à l'utilisateur de choisir et d'acquérir un domaine via deux chemins, qui ouvrent tous deux une fenêtre d'achat en deux étapes. La première étape collecte les données du titulaire (requises par le registrar pour le WHOIS). La deuxième étape gère le paiement ou la soumission :

- **Acheter**: Achat payant via OpenProvider. Vous saisissez un nom de domaine, la carte vérifie la disponibilité et le prix, puis ouvre la fenêtre d'achat. Après les données du titulaire, vous payez via Stripe dans la même fenêtre. Une fois le paiement terminé, MyCompanyDesk enregistre le domaine chez OpenProvider et le relie à Cloudflare en mode nameserver.
- **Réclamation gratuite**: Les espaces de travail éligibles en période d'essai Office ou abonnés à un Office payant peuvent réclamer gratuitement un domaine `.nl` pour la première année. La carte vérifie si votre espace de travail remplit les conditions. La fenêtre demande les données du titulaire, puis envoie la réclamation. MyCompanyDesk prend en charge les frais d'enregistrement de la première année.

Comment le domaine se renouvelle après la première année :

- **Réclamé gratuitement** : les espaces de travail en période d'essai Office. La première année est gratuite. À la fin de l'année gratuite, l'espace de travail doit avoir un abonnement Office payant ; le domaine se renouvelle alors dans le cadre de l'abonnement Office, payé par l'espace de travail. Si l'espace de travail cesse de payer Office après l'année gratuite, le domaine expire et doit être renouvelé manuellement. Pendant l'année gratuite, vous pouvez enregistrer une carte dans la fenêtre pour un renouvellement automatique plus tard.
- **Acheté** : domaines achetés au prix fort. Le renouvellement est facturé via le moyen de paiement enregistré sur le cycle annuel. Si le paiement échoue, une notification de renouvellement manuel est envoyée.

L'éligibilité est déterminée par un ensemble de conditions strictes vérifiées côté serveur :

- **Espace de travail Office actif** : l'espace de travail doit être sur Office (essai ou payant). Les espaces de travail sur Desk ne peuvent pas réclamer.
- **KVK requis**: l'espace de travail doit avoir un numéro KVK lié.
- **Le domaine doit être `.nl`**: le programme gratuit ne concerne que l'extension NL.
- **Le domaine doit correspondre au nom KVK**: le domaine doit correspondre à la raison sociale ou à un nom commercial.
- **Un seul domaine gratuit par numéro KVK** : Un KVK qui a déjà réclamé (puis transféré) un domaine gratuit est bloqué de façon permanente.

L'âge du compte et le contenu du site ne sont pas des conditions strictes. Ils bloqueraient les demandes légitimes déposées dès le jour de l'inscription, ce qui contredit la promesse « créez votre entreprise en un jour, domaine inclus ». Les deux alimentent donc un score de risque comme signaux dits faibles, qui sert à trier la file de révision, et une demande est d'abord tranchée par des faits vérifiables ; le score ne tranche que la zone intermédiaire. Une personne examine d'abord la demande (la fenêtre indique une réponse habituellement sous un jour ouvré) quand l'espace de travail est sous surveillance renforcée à l'inscription, quand le compte s'est inscrit depuis l'étranger, quand la demande elle-même vient de l'étranger, quand le registre indique l'entreprise comme dissoute, quand la forme juridique ou le nombre d'employés sort du profil du programme (une NV ou une fondation par exemple, ou une entreprise de plus de quelques employés), ou quand le numéro KVK appartient déjà à un autre espace de travail client. Une demande passe sans attendre quand l'entreprise correspond au profil et que la personne derrière le compte s'y rattache de façon démontrable : le nom du compte figure dans le nom KVK d'une entreprise immatriculée au registre depuis moins de 180 jours, ou le domaine e-mail vérifié du compte est celui que la KVK mentionne comme site de l'entreprise, ce qui vaut aussi pour les entreprises plus anciennes. Les deux chemins exigent un verdict normal de la vérification automatique ; si elle est indisponible, une personne examine la demande. Dans tous les autres cas, le score décide : un bon score passe, un score plus faible part chez une personne. Ces règles valent pour tout espace de travail, en essai ou payant. Le score et ses raisons restent internes : la demande ne les montre jamais. La carte peut en revanche afficher un conseil, par exemple que votre site n'est pas encore publié, sans bloquer la demande.

Lorsqu'une condition n'est pas remplie, la carte liste les exigences restantes pour que l'utilisateur puisse voir ce qu'il reste à débloquer avant que la réclamation gratuite ne soit disponible.

Les TLD pris en charge pour l'achat sont `.nl`, `.eu`, `.com`, `.net` et `.org`. Les autres TLD affichent un message indiquant qu'ils ne sont pas encore pris en charge, avec la suggestion d'acheter le domaine ailleurs et de le relier via **J'ai déjà un domaine**.

#### Transférer votre domaine chez nous (transfert entrant)

Un domaine enregistré ailleurs ne pouvait jusqu'ici qu'être relié : l'enregistrement lui-même restait chez l'ancien registrar, donc le renouvellement et le départ en transfert ne le connaissaient pas. L'option **Transférer aussi mon nom de domaine vers MyCompanyDesk** du sélecteur de domaine amène l'enregistrement chez MyCompanyDesk. Il vous faut le code d'autorisation (le code de transfert) de votre registrar actuel, et le registre demande un numéro de téléphone avec la demande.

Le sélecteur affiche le prix du transfert avant l'engagement :

- **Un transfert `.nl` est gratuit.** Le registre ne facture rien et n'ajoute pas d'année, votre date d'expiration actuelle reste donc inchangée. Le renouvellement fonctionne ensuite comme un achat payant : vous recevez d'abord un rappel et ne payez que si vous renouvelez vous-même.
- **`.eu`, `.com`, `.net` et `.org` coûtent le prix d'enregistrement, une seule fois**, et le transfert ajoute une année au domaine.

Le transfert est demandé au registre avec votre code d'autorisation et nos serveurs de noms, pour que le courrier et le site continuent de pointer vers MyCompanyDesk. Pour un `.nl`, c'est généralement terminé en quelques minutes ; pour les autres extensions, cela peut prendre jusqu'à cinq jours. La page Votre domaine affiche une carte de statut par transfert : demandé, transféré (la carte disparaît dès que la zone est active) ou échoué avec la raison du registrar et une nouvelle tentative avec un nouveau code. Un code erroné ou un verrou de transfert encore actif chez votre registrar actuel revient comme un refus qui dit quoi faire.

Le devis refuse, avec la raison nommée, quand l'extension n'est pas prise en charge pour le transfert, quand le domaine est déjà enregistré chez nous (reliez-le plutôt via l'option « J'ai déjà un domaine »), quand le domaine est lié à un autre espace de travail, quand un transfert est déjà en cours, ou quand le domaine n'est pas encore relié en mode nameserver avec sa messagerie chez nous. Ce dernier refus existe parce que déplacer l'enregistrement d'abord couperait votre messagerie ; l'assistant de migration ci-dessous relie d'abord le domaine et emmène la messagerie ensuite.

Si vous transférez un domaine que vous aviez déjà relié, votre domaine existant est mis à jour et vos réglages, votre messagerie et votre site restent en place. Un transfert échoué est remboursé et le domaine reste simplement relié. Le renouvellement traite les domaines transférés comme des achats payants.

#### Venir d'un autre hébergeur (migration de la messagerie)

L'option **Je change d'hébergeur** gère tout le déménagement en un assistant : il relie votre domaine, prépare vos boîtes, importe le courrier de vos anciennes boîtes, transfère l'enregistrement chez nous, importe ce qui est arrivé pendant le transfert, et se termine par l'avis que vous pouvez résilier votre forfait chez l'ancien hébergeur. Il vous faut le mot de passe de chaque ancienne boîte et, pour le transfert, le code de transfert. Serveurs de noms, enregistrements MX et ports restent invisibles ; seule la rare étape de repli les mentionne.

Vos boîtes sont prêtes dès le départ. Pendant que votre domaine est encore chez l'ancien hébergeur, toutes vos boîtes existent déjà et l'import de votre ancien courrier peut commencer tout de suite. La réception et l'envoi depuis ces adresses s'activent quand le domaine est chez nous ; l'assistant gère ce déménagement plus loin dans le même parcours, et la plateforme termine la configuration du courrier automatiquement dès que le domaine est actif. Pendant ce temps, l'onglet **Adresses et envoi** sous Paramètres › E-mail donne au domaine le statut **En attente de votre domaine** : dès que vos serveurs de noms sont modifiés, la messagerie s'active d'elle-même, et vous n'avez rien à faire là.

L'étape du courrier demande chaque adresse que vous aviez chez l'ancien hébergeur, une ligne par adresse, et l'assistant ne crée des boîtes que pour les adresses que vous nommez. Chaque adresse reçoit ici sa propre boîte ; la première devient votre boîte principale. Une adresse qui ne faisait que renvoyer vers une autre, sans mot de passe à elle, n'a pas besoin d'être saisie : ce courrier est déjà arrivé dans la boîte vers laquelle il allait. Les adresses suivantes peuvent reprendre le mot de passe de la première ou en recevoir un propre. Les adresses partent une par une : pendant que l'une est en cours, les autres attendent leur tour, et chaque carte d'adresse montre où elle en est. Ne résiliez votre forfait chez l'ancien hébergeur qu'une fois chaque adresse terminée ; l'écran final liste les adresses transférées et, si une adresse n'est pas arrivée en entier, vous invite à nous contacter avant de résilier quoi que ce soit. Les messages qui n'ont pas pu être transférés du tout, par exemple parce qu'ils sont trop volumineux ou illisibles, ne se trouvent plus que chez l'ancien hébergeur ; l'écran final en donne le nombre, pour que vous puissiez les sauvegarder vous-même avant de résilier votre forfait là-bas.

L'import est une tâche persistante chez nous, pas une action de navigateur. La tâche est stockée côté serveur, avec les mots de passe de vos anciennes boîtes chiffrés (AES-GCM), et seulement avec votre accord explicite. Après l'activation du domaine, une passe de suivi importe ce qui est arrivé entre-temps, 48 heures plus tard une dernière passe récupère le reste, puis les mots de passe stockés sont effacés. Quatorze jours, c'est le délai ferme : après, les mots de passe sont partis dans tous les cas. Quand l'import est terminé, une notification dans l'application indique combien de messages sont arrivés de combien de dossiers, jusqu'à quelle date, et que vous pouvez maintenant résilier votre forfait chez l'ancien hébergeur. L'hôte IMAP est deviné d'après vos enregistrements MX actuels, avec `imap.<domaine>` et `mail.<domaine>` en repli ; les hébergeurs connus comme Hostinger sont reconnus par leur nom, et là où un hébergeur demande un mot de passe d'application, l'assistant le dit.

Deux garde-fous appartiennent au même parcours. La suppression d'une boîte ou la désactivation de la boîte de réception demande d'abord une confirmation qui dit combien de messages vont disparaître, historique importé compris. Et le devis de transfert refuse tant que votre messagerie n'a pas bougé, pour la raison ci-dessus. La promesse de confidentialité derrière : nous gardons les mots de passe de vos anciennes boîtes chiffrés jusqu'à ce que le transfert soit terminé, quatorze jours au maximum, puis nous les effaçons. Cette promesse figure aussi sur la [page de confidentialité](https://mycompanydesk.nl/privacy).

### Site web hébergé

Le tableau de bord de votre site web se trouve sous **Communication › Site web** (`/website`). C'est un tableau de bord avec sept onglets dans la barre supérieure : Aperçu, Visiteurs, Résultats, Pages, Visibilité, Connexions et Domaine & e-mail. L'éditeur s'ouvre via **Modifier le site** lorsque vous voulez changer le contenu ou le design.

Ce que couvrent les onglets :

- **Aperçu** : aperçu du site, s'il est en ligne, et le nombre de modifications non publiées en attente. La carte de statut permet aussi de revenir à la version en ligne.
- **Résultats** : ce que le site a rapporté, en une seule vue : demandes via le formulaire de contact, rendez-vous via le bloc de rendez-vous et ventes via un bloc produit, aussi par page.
- **Pages** : pour chaque page, si elle attire des visites et des demandes et si elle est trouvable, avec les textes Google de chaque page modifiables directement. Ajouter ou supprimer des pages se fait dans l'éditeur.
- **Visiteurs**: D'où viennent les visiteurs et comment ils se déplacent sur le site.
- **Visibilité**: SEO et métadonnées des pages, plus la carte des pages de services (voir ci-dessous). Les anciens liens `/website/seo` redirigent ici.
- **Connexions**: Prestataires de paiement (Mollie, Stripe Connect) et services tiers comme Mailchimp, Plausible et Trustpilot. Les anciens liens `/website/integraties` redirigent ici.
- **Domaine & e-mail** : domaine personnalisé, DNS, SSL, redirections et configuration de la boîte de réception. Voir la section domaines personnalisés ci-dessus.

Les anciens liens vers l'onglet Paramètres mènent à Aperçu. Votre espace de travail a un seul site web, même si vous avez plusieurs domaines personnalisés.

Le site public est diffusé à l'URL la plus prioritaire disponible pour l'entreprise : racine du domaine personnalisé → sous-domaine de l'espace de travail → route de secours `/portal/<slug>`.

Vous pouvez enrichir le site avec le bloc **Online boeken (afspraak plannen)**. Les visiteurs peuvent alors prendre rendez-vous directement depuis votre site. Voir [Rendez-vous en ligne](/fr/features/site-bookings).

#### Les pages de services pour la visibilité

L'onglet Visibilité comporte une carte intitulée « Meer pagina's waar mensen op zoeken » (« More pages people search for » ; l'appli affiche cette carte en néerlandais quelle que soit la langue de l'appli). Elle n'apparaît que s'il y a quelque chose à faire : des services de votre catalogue Aanbod sans page propre, ou des brouillons qui attendent votre relecture.

Ouvrez la carte pour voir les propositions. Chaque proposition porte sur un service que vous vendez vraiment, tiré de votre Aanbod, avec sa future adresse : chaque page reçoit sa propre place sous `/diensten/`. Une proposition peut s'appuyer sur un motif issu de Google Search Console : le terme recherché qui correspond au service, sa fréquence de recherche et la position que vous y occupez. Un tel terme fait monter la proposition en tête et est traité dans la FAQ de la page ; aucune page n'est jamais créée pour un simple terme de recherche. Un terme qui ne correspond à aucun service n'obtient pas de page non plus. La liste explique alors pourquoi : un terme pour toute votre activité (le métier plus votre commune) correspond à votre page d'accueil, une recherche avec votre nom d'entreprise reste dehors parce que ces visiteurs vous ont déjà trouvé, et un service qui n'est pas encore dans votre Aanbod pourra avoir sa page quand vous l'y ajouterez. Un service qui a déjà une page, sous son propre chemin ou sous une page qui porte le service en titre, n'est pas proposé deux fois : deux pages qui se disputent le même terme se rétrogradent mutuellement dans les résultats.

Quand les faits enregistrés sont trop minces pour remplir une vraie page, la fenêtre vous pose des questions au lieu d'inventer du remplissage : en quoi consiste le service, ce qu'il coûte à peu près et combien de temps il prend. Vos réponses sont conservées avec le service dans votre Aanbod là où ces champs étaient encore vides, pour qu'elles comptent aussi comme des faits la prochaine fois, et le texte écrit passe par le même contrôle des faits que tout autre texte IA de votre site.

Les pages sont rédigées une par une et arrivent en brouillon. Rien ne se met en ligne de lui-même : vous relisez les brouillons, vous cochez ceux qui doivent suivre et vous publiez exactement ceux-là ; vos autres modifications non publiées restent en attente. Les pages publiées ne figurent pas dans le menu. Elles apparaissent dans le pied de page sous leur propre colonne **Diensten** (Services), à côté de la colonne Pages, ainsi que dans votre sitemap, pour que Google les trouve. Si votre site n'est pas encore en ligne, les pages sont prêtes et passent en ligne dès que vous publiez le site.

La carte de recherche s'y rattache aussi. Sous un terme recherché fréquemment pendant que vous êtes mal placé, le lien ouvre cette même fenêtre dès qu'il y a des propositions ; sinon il mène toujours à la liste des pages.

### Mettre le site hors ligne

Si vous devez interrompre temporairement votre site, utilisez le bouton **Hors ligne** dans l'onglet **Aperçu**. Tant que le site est hors ligne, les visiteurs et les robots d'indexation reçoivent une page 503 avec un en-tête `Retry-After`. L'intervalle de nouvelle vérification recommandé commence à cinq minutes et monte jusqu'à un jour pour un site resté hors ligne plus d'un jour.

Après trois jours hors ligne, la carte de l'aperçu affiche un avertissement : Google considère une interruption prolongée comme une page supprimée, et il faut des semaines pour retrouver sa visibilité dans les résultats de recherche après le rétablissement du site. Ce message vous permet de vérifier que l'interruption reste intentionnelle.

### Forfaits site

`/website/pakketten` est une galerie de forfaits site préstylés et approuvés. Vous pouvez rechercher par secteur ou par style. Choisir un forfait remplace votre site brouillon (pages, sections et tokens de thème), mais ne publie jamais automatiquement ; vous vérifiez le résultat dans le constructeur de site et publiez vous-même quand vous êtes prêt. Les anciens liens `/website/ontwerpen` redirigent ici.

Consultez [Constructeur de site](/fr/advanced/business-page) pour le guide complet de l'éditeur.

### Boîte de réception e-mail

La boîte de réception a sa propre place dans l'application, sur `/inbox`.

Lorsqu'une facture fournisseur transmise depuis une pièce jointe est convertie en brouillon de dépense, la dépense n'est comptabilisée qu'après votre confirmation.

Avant d'enregistrer la facture, la règle regarde aussi les dépenses déjà présentes dans vos livres : une facture peut rejoindre une dépense existante au lieu d'en devenir une deuxième, dépenses saisies à la main et paiements en devise étrangère compris. Le nom du fournisseur porte la comparaison, avec le montant et une fenêtre décalée autour, car un paiement suit souvent sa facture de plusieurs semaines, et un fournisseur mensuel garde son prélèvement en euros et sa facture suivante à peu près un mois l'un de l'autre. Une facture en dollars, en livres ou en francs peut se poser à quelques jours de la prélèvement en euros du même fournisseur, sans aucun taux de change dans le système. Sans preuve par le nom, la règle n'associe la facture qu'à une dépense bancaire du même montant, et seulement quand exactement un candidat convient. Une dépense qui porte déjà un reçu n'en reçoit jamais un deuxième par-dessus ; une telle facture s'enregistre dans À vérifier, avec une note qui pointe vers la dépense existante, car une relance qui arrive comme un autre fichier ne se distingue pas. Le rattrapage de l'onglet Factures revoit aussi les courriels de factures après un changement de triage : les factures que le triage avait manquées repassent, et une panne ne sort jamais des conversations de ce rattrapage de façon définitive. Le modèle de triage lit aussi les noms de fichiers des pièces jointes. Si la date de facturation tombe dans une période de TVA déjà déclarée, la comptabilisation automatique est refusée et, au lieu de faire disparaître silencieusement la facture, vous recevez une notification ; elle atterrit dans la liste de la boîte de réception et indique le fournisseur et la date de facturation concernés, pour que vous puissiez la comptabiliser manuellement dans la période en cours ou déposer une déclaration TVA complémentaire.

Fonctionnalités :

- **Fils de discussion**: les e-mails entrants sont regroupés en fils basés sur RFC 822 `Message-ID` / `In-Reply-To` / `References`. Chaque fil affiche un aperçu du dernier message, les participants, le statut et les étiquettes. Les messages déjà lus se replient sur une ligne (expéditeur, aperçu, heure) ; le message le plus récent et tout ce qui était encore non lu restent ouverts (comme dans Gmail). Cliquez sur une ligne repliée pour l'ouvrir, ou sur « Développer les {n} messages » pour tout afficher.
- **Répondre**: champ de réponse intégré dans le fil. L'expéditeur `From` choisit intelligemment l'adresse à laquelle l'e-mail original a été envoyé, de sorte qu'un client qui a écrit à `support@acme.fr` reçoive une réponse de `support@`, pas de `info@`.
- **Répondre à tous**: réponse en un clic à tous les participants du fil. Le bouton apparaît à côté de Répondre dans l'en-tête du fil et inclut tous les destinataires du message d'origine.
- **Transférer**: transférez l'intégralité du fil à un autre destinataire. Ouvre un tiroir de rédaction avec le corps du message et les pièces jointes d'origine préservés pour modification avant envoi. L'en-tête du message transféré indique l'expéditeur d'origine, la date et le sujet.
- **CC et BCC**: les champs CC et BCC sont disponibles à la fois en rédaction et en réponse via un bouton "Ajouter Cc/Bcc". Les adresses acceptent des listes séparées par des virgules ou le collage depuis le presse-papiers. Les champs restent masqués jusqu'à ce que vous en ayez besoin, suivant le schéma standard des boîtes de réception où la plupart des messages n'en ont pas besoin.
- **Brouillons**: enregistrez les messages partiellement écrits et revenez-y plus tard. Les brouillons sont enregistrés côté serveur et persistent entre les sessions de navigation. Chaque brouillon contient un sujet, une liste de destinataires, un corps de message et les pièces jointes ajoutées. Les brouillons sans sujet affichent "(pas de sujet)", et les brouillons sans destinataire affichent "(pas de destinataire)". Dans la liste des fils, une conversation qui héberge l'un de vos brouillons de réponse porte une étiquette rouge « Brouillon » à côté du nom, pour voir en un coup d'œil sur quel fil vous étiez en train de répondre ; ouvrir le fil remet le brouillon d'office dans le champ de réponse.
- **Rédiger**: formulaire en tiroir avec sélection de la boîte aux lettres, sélection de l'expéditeur, sélection du client (ou champ `A` libre), sujet, message, champs CC/BCC, pièces jointes. Un avertissement de destinataire rejeté est affiché avant l'envoi.
- **Expéditeur par défaut**: dans un nouveau message, le champ expéditeur s'ouvre sur votre boîte par défaut, pour que chacun se voie proposer sa propre adresse dans un espace de travail à plusieurs connexions. Sans choix enregistré, il revient à la première boîte personnelle de l'espace de travail, sinon à la première boîte. Quand le champ affiche une boîte qui n'est pas encore votre valeur par défaut, un lien "Définir comme mon adresse par défaut" sous le champ l'enregistre, et le texte d'aide sous le champ devient "C'est votre adresse par défaut pour les nouveaux messages". Ce réglage ne vaut que pour les nouveaux messages : une réponse part toujours de la boîte du fil, et les factures et les devis gardent leur adresse d'expédition propre à l'espace de travail.
- **Alias d'envoi**: `info@`, `support@`, `sales@` sont des alias bidirectionnels de la même boîte aux lettres. `noreply@` est un alias d'envoi uniquement : sélectionnable comme From, mais les e-mails entrants sont rejetés à l'ingestion.
- **Nom de l'expéditeur**: vos e-mails sortants portent un nom à côté de l'adresse : le nom affiché de la boîte, ou le nom de votre entreprise quand aucun nom affiché n'est renseigné. Les boîtes sans nom affiché montrent « Envoie en tant que » suivi du nom de l'entreprise dans la liste des boîtes, et si vous effacez le nom affiché, la boîte envoie de nouveau sous le nom de votre entreprise.
- **Rail des boîtes** - si vos boîtes se trouvent sur plusieurs domaines, la liste des boîtes dans le rail de gauche les regroupe sous un titre par domaine. Chaque ligne montre seulement la partie avant le @, et `info@` figure en haut de son groupe. Avec un seul domaine, les titres sont omis.
- **Pièces jointes**: téléversement avant envoi (rédaction et réponse). Un appui sur une pièce jointe d'un e-mail entrant ouvre d'abord un aperçu : les PDF s'affichent page par page, les images et les fichiers texte simples s'affichent directement, et tout autre type de fichier reçoit une carte de fichier avec sa taille. Un PDF long montre les premières pages et renvoie pour la suite au téléchargement. **Télécharger** et **Partager** sont deux boutons distincts à côté de l'aperçu, pour que consulter un fichier ne soit jamais un téléchargement accidentel ; sur Android, un fichier enregistré arrive dans Téléchargements et Partager ouvre la feuille de partage du système. Les URL de téléchargement signées expirent après un court TTL.
- **Avis d'alias**: lorsqu'un message entrant arrive à une adresse de votre propre domaine qui n'est pas encore un alias déclaré, le fil affiche un avis discret avec une action « Ajouter comme alias ». Les adresses en dehors de votre propre domaine ne sont jamais proposées comme alias.
- **Liaison**: les fils peuvent être liés à un client, un projet ou une facture pour référence croisée.
- **Secours catch-all**: les e-mails vers n'importe quelle partie locale du domaine sont acheminés vers la boîte aux lettres par défaut (une par domaine). Cela signifie que les fautes de frappe et les alias non déclarés ne disparaissent pas silencieusement.
- **Activité** : les envois sortants, les modifications de boîte aux lettres et les changements d'état des conversations sont enregistrés pour l'espace de travail. Sur un écran large, le panneau latéral à côté de la conversation affiche cet historique sous **Activité**.
- **Affichage des e-mails HTML**: les e-mails HTML sont affichés avec leur style d'origine dans un iframe sandboxé. Le moteur de rendu supprime les scripts, les formulaires et les gestionnaires d'événements lors de l'assainissement, et bloque par défaut les images distantes pour protéger votre vie privée. Une barre d'avis apparaît lorsque les images sont bloquées, avec un simple clic sur "Afficher les images" pour réafficher le message avec les images. Si aucun corps HTML n'est présent, la partie texte brut sert de solution de secours.
- **Épinglage** : épinglez les fils importants avec une étoile pour un accès rapide. Une icône d'étoile apparaît à côté du point de statut sur les fils épinglés dans la liste. La barre d'outils comporte un bouton étoile qui bascule l'état pour le fil ouvert. Le dossier « Épinglés » du rail de gauche, à côté de Ouvert, Reporté, Envoyés, Brouillons, Fermé, Spam et Corbeille, filtre les fils épinglés.
- **Lu par**: lorsqu'un fil est encore marqué comme nouveau pour vous et qu'un collègue l'a déjà ouvert, la ligne cite ce collègue : Lu par Anissa. Sur mobile, vous voyez un œil avec le prénom. Les anciens collègues et le comptable ne sont pas cités.
- **Suppression douce**: les fils peuvent être déplacés vers la Corbeille au lieu d'être définitivement détruits. Un bouton Supprimer (icône de corbeille) apparaît dans la barre d'outils pour les fils non supprimés. Une fois supprimé, le bouton se transforme en action Restaurer qui replace le fil dans la boîte de réception. Le dossier Corbeille se trouve dans le rail de gauche, ce qui vous permet de consulter les fils supprimés avant leur purge définitive.
- **Recherche en texte intégral**: une barre de recherche au-dessus de la liste des fils vous permet de rechercher dans tous les messages de la boîte de réception par sujet, corps du texte, extrait et expéditeur. La recherche pondère les champs, de sorte que les correspondances dans le sujet apparaissent avant celles dans le corps du texte. Les résultats sont regroupés par fil, avec l'extrait du message le plus pertinent affiché en aperçu. Prend en charge les expressions entre guillemets, `OR` et les exclusions `-`. Un mot seul d'au moins trois caractères est également recherché dans les adresses e-mail et les noms d'expéditeur, si bien que vous retrouvez un fil même en ne tapant qu'un fragment d'adresse, par exemple le domaine. Les recherches avec plusieurs mots ou une exclusion `-` continuent de porter sur des mots entiers. Un délai de 250 ms maintient l'interface réactive, et l'indicateur de chargement donne un retour en temps réel.
- **Ce que demande l'expéditeur** : dans la boîte de réception Office, la ligne d'un fil trié montre une phrase courte sur ce que le dernier message attend de vous (« Demande un devis, veut être terminé en décembre »), écrite par le triage IA à l'arrivée du message. La phrase ne reste en place que tant que l'expéditeur a le dernier mot et que le triage a tourné après ; dès que vous avez répondu, ou qu'un message plus récent non trié est arrivé, la ligne retombe sur les premiers mots du message. Voir [Groupes de la boîte de réception](#groupes-de-la-boite-de-reception-office) plus bas.
- **Notes internes** : une note privée sur le fil, pour vous et votre équipe. La note apparaît dans la conversation même, à l'endroit où elle a été écrite, marquée comme interne ; le client ne la voit jamais. Vous pouvez mentionner un collègue avec @ dans une note.
- **Enregistrer l'expéditeur comme client** : quand une conversation vient d'une adresse qui ne correspond à aucun de vos clients, la bande de l'expéditeur au-dessus du message indique « Pas encore dans vos clients » et propose d'enregistrer l'expéditeur comme client en un clic.
- **Aide IA pour les réponses (Office)** : voir [Aide IA pour les réponses](#aide-ia-pour-les-reponses) plus bas.

#### Groupes de la boîte de réception (Office)

Dans la boîte de réception Office, la réception groupe le courrier entrant selon ce qu'il attend de vous. Trois onglets se trouvent au-dessus de la liste :

- **En attente de vous** : les conversations où l'expéditeur attend une réponse. Quand un message attend depuis un jour entier, la ligne compte les jours d'attente. Un message qui ne demande pas de réponse n'affiche aucun compteur, peu importe depuis combien de temps il attend.
- **Factures** : les factures fournisseurs que le triage a reconnues. La liste ouvre la conversation directement sur la carte de facture ; une passe de rattrapage redonne sa chance aux courriels de factures plus anciens dès que le triage a changé.
- **Autres** : les bulletins et les messages système, le courrier que vous lisez quand il reste du temps.

Un onglet sans courrier disparaît. Les compteurs des onglets valent pour tout l'espace de travail. Quand tout ce qui vous attendait est répondu, la liste montre à la place des lignes un avis paisible « Tout est fait ». Dans la boîte de réception Desk, limitée à la lecture et aux réponses, la liste reste un seul dossier.

Le découpage en onglets est celui-même de la réception : les étiquettes et Épinglés fonctionnent comme toujours, et le groupe Autres prend la place de l'ancien dossier Promotions. Archiver, reporter et fermer sortent une conversation de son groupe, comme elles la sortaient toujours de la liste ouverte.

#### Carte de facture dans le lecteur

Pour un fil que le triage a identifié comme facture, le lecteur affiche le message sous forme de carte de facture :

- Dès que la pièce jointe est comptabilisée en dépense (automatiquement après le triage, ou via le bouton de comptabilisation), la carte montre le montant avec TVA, le montant de TVA et l'état de la dépense directement dans vos livres : en attente dans « À vérifier », ou déjà comptabilisée. Le bouton ouvre la dépense.
- Avant que la facture ne soit comptabilisée, la carte ne montre que ce que dit le texte du courriel lui-même, étiqueté « Montant (selon l’e-mail) », pour qu'on ne le lise jamais comme un chiffre comptabilisé.
- La carte signale les factures en retard : « Avant le 21 octobre » devient « en retard depuis le 21 octobre », en rouge dès que l'échéance est passée.

#### Aide IA pour les réponses

Office peut rédiger pour vous la réponse à un courriel d'un client. Au-dessus de l'éditeur de réponse se trouve un bouton « Rédiger une réponse ». Il ouvre un champ avec :

- **Pastilles de direction** : Confirmer, Refuser poliment, Demander des infos et Remercier. Chaque pastille fait écrire toute la réponse dans cette direction.
- **Votre propre instruction** : tapez ce que la réponse doit dire (« confirmez le rendez-vous de mardi ») et choisissez Générer.
- **Réécrire mon texte** : quand vous avez déjà écrit quelque chose, l'IA polit votre propre brouillon au lieu d'inventer du nouveau : grammaire, ton et clarté, sans aucun nouveau fait.

Pendant qu'elle écrit, l'éditeur montre « Rédaction de la réponse… » et reste hors d'atteinte. L'état d'écriture appartient à la conversation ouverte : si vous ouvrez entre-temps une autre conversation, la réponse n'atterrit jamais dans la mauvaise, et quand elle est prête, l'éditeur fait défiler le texte à l'écran au lieu d'y poser un curseur. La réponse rédigée tombe dans l'éditeur comme un texte ordinaire qui devient votre brouillon : vous le modifiez, il s'enregistre automatiquement comme brouillon et ne compte jamais comme envoyé. Un envoi qui a échoué ne berne pas non plus la rédaction : l'IA lit des messages réellement arrivés ou réellement envoyés, jamais des brouillons et jamais des envois manqués. Quand vous avez eu le dernier mot sur le fil (un devis envoyé ou une question à laquelle vous avez répondu) et que rien n'est revenu depuis, « Rédiger une réponse » écrit plutôt un courriel de relance bref : il renvoie à ce que vous avez envoyé et invite à réagir, sans jamais imaginer une réaction du client.

La réponse rédigée traite ce que demande le dernier message du fil, dans la langue de ce message, écrite à la première personne du singulier (« je »), signée avec votre nom. Elle n'invente ni faits, ni prix, ni dates : là où quelque chose de nécessaire manque, elle laisse un simple espace réservé comme [datum]. Si le fil a été signalé comme suspect, toute la boîte à outils IA disparaît. Après un triage frais, des réponses rapides en un clic peuvent apparaître au-dessus de l'éditeur de réponse (« Je viendrais volontiers jeter un œil ») : elles ouvrent le champ de réponse et rédigent le courriel dans cette direction, disponibles tant que le message de l'expéditeur reste le dernier.

#### Brouillons

Le dossier Brouillons se trouve dans le rail de gauche. Les brouillons sont enregistrés côté serveur, ils survivent donc aux redémarrages du navigateur et vous suivent d'un appareil à l'autre. Lorsque vous commencez un nouveau message ou une réponse et fermez le tiroir de rédaction sans envoyer, le contenu est automatiquement enregistré comme brouillon ; il n'y a pas de bouton d'enregistrement séparé. Un brouillon commencé depuis un fil porte le tag « Réponse ». Modifier un brouillon ouvre le tiroir de rédaction pré-rempli avec le contenu enregistré. Dans le dossier Brouillons, la suppression demande d'abord une confirmation.

Ouvrir une conversation qui contient un brouillon de réponse met celui-ci dans le champ de réponse, avec « Brouillon » dans l'en-tête et une corbeille à côté. Jeter supprime le brouillon, remet le champ à son modèle vide et affiche un message avec "Annuler", pour qu'un seul appui sur la corbeille ne coûte jamais une réponse écrite : annulé pendant que la conversation est encore ouverte, votre texte revient dans le champ (pièces jointes comprises), sinon il repart comme brouillon. Ce n'est qu'une fois le délai du message passé que le brouillon quitte aussi le serveur. Si la suppression échoue, votre texte revient dans le champ avec un message clair ; un brouillon déjà envoyé ou jeté ailleurs compte comme rangé.

La boîte de réception utilise votre domaine personnalisé uniquement après l'activation de la boîte de réception, une fois que les enregistrements MX de votre domaine pointent vers Cloudflare. Jusque-là, l'espace de travail peut toujours envoyer des e-mails via le chemin de livraison par défaut décrit dans [Intégration e-mail](/fr/settings/email), mais il ne peut pas recevoir d'e-mails.

#### Actualisation en direct

La boîte de réception s'actualise automatiquement tant que l'onglet est ouvert. La liste des fils interroge le serveur toutes les 45 secondes pour les nouveaux messages, et le badge de la barre latérale s'actualise toutes les 60 secondes. Les deux se mettent en pause lorsque l'onglet est en arrière-plan, donc aucun trafic réseau inutile. L'actualisation est silencieuse : aucun spinner de chargement ne clignote lors des rafraîchissements en arrière-plan, et les interrogations sont entièrement sautées pendant une recherche active pour que vos résultats restent stables. Sur téléphone, tirez la liste vers le bas pour récupérer tout de suite le dernier état ; tant que cette actualisation tourne, un nouveau geste n'en lance pas une deuxième.

#### Marquer comme non lu

Vous pouvez marquer un fil ouvert comme non lu depuis la barre d'outils. Contrairement aux versions précédentes où l'état non lu était uniquement local et perdu au prochain rafraîchissement, il est désormais persisté côté serveur. Le badge de la barre latérale compte les messages non lus, pas les fils avec des messages non lus, et se met à jour en conséquence. Le fil reste non lu après les rechargements de page, les redémarrages du navigateur et sur tous vos appareils, jusqu'à ce que vous le rouvriez.

Le lecteur de thread suit aussi les changements d'état depuis le reste de la boîte de réception. Si vous déplacez une conversation vers la Corbeille, le Spam, Fermé ou Reporté pendant que son panneau de lecture est ouvert, le panneau se ferme automatiquement. La vue détail reste ainsi synchronisée avec le dossier que vous consultez, et vous ne continuez pas à rédiger une réponse à un fil qui a déjà quitté la vue actuelle.

#### Filtre anti-spam

Chaque e-mail entrant passe d'abord par un filtre anti-spam, avant tout le reste : un large ensemble de règles sur les en-têtes, les liens et le contenu, des listes de blocage DNS, des flux de phishing et un filtre statistique qui apprend en continu des boutons Spam et Pas un spam que vous utilisez. Quand vous marquez un message comme spam, son texte est aussi signalé à un stockage partagé entre tous les espaces de travail : un texte que vous avez signalé compte tout de suite pour votre boîte de réception, et pour les autres dès que deux espaces de travail différents ont signalé le même texte. Le courrier jugé spam n'atteint même pas votre boîte de réception : il atterrit directement dans le dossier Spam, avec ses motifs, et reste silencieux : aucune notification, aucune ligne dans la liste des notifications. Le courrier dont le filtre n'est pas sûr reste dans la boîte de réception et porte en haut du lecteur une bande rouge (« Ceci pourrait être un spam. ») avec les motifs en dessous et le bouton Marquer comme spam à côté.

Les motifs sont concrets : le même texte a déjà été marqué comme spam, l'expéditeur se réclame d'un nom connu mais écrit depuis un autre domaine, un lien pointe vers un site de phishing connu, l'adresse de réponse figure sur une liste d'adresses abusées ou mène ailleurs que vers l'expéditeur, une personne extérieure cite votre propre nom de domaine dans l'objet, un lien mène vers un hébergeur anonyme au lieu du site de l'expéditeur, le domaine de l'expéditeur vient d'être créé, l'extension de domaine est surtout utilisée pour le spam, un lien ou le serveur expéditeur figure sur une liste de spam, le courrier n'a pas vraiment été envoyé par le domaine indiqué comme expéditeur, il contient du texte caché, ou il ressemble à des messages déjà marqués comme spam. Les motifs les plus forts viennent en premier.

Deux choses changent avec lui. Sur un fil signalé comme suspect, la carte de résumé par IA reste cachée, pour qu'un e-mail de phishing ne soit jamais reformulé dans notre voix. Et quand vous marquez un fil comme Pas un spam, il revient dans votre boîte de réception et l'expéditeur rejoint la liste de confiance, pour que son prochain message arrive normalement. Vos propres signalements de ce texte sont retirés avec lui.

L'évaluation par l'IA continue de tourner à côté du filtre, mais elle ne peut qu'aggraver un verdict, jamais l'adoucir, et elle n'envoie jamais seule du vrai courrier vers Spam. Le filtre n'a jamais le droit de vous faire perdre du courrier : s'il est injoignable ou trop lent, le message arrive exactement comme avant.

#### Logo ou photo de l'expéditeur

Chaque message entrant porte le visage de son expéditeur, dans la liste des fils comme dans le lecteur. MyCompanyDesk cherche un logo ou une photo à trois endroits, dans cet ordre : le logo que le domaine de l'expéditeur publie lui-même via BIMI (le même mécanisme que chez Gmail), la photo Gravatar associée à l'adresse, et l'icône du site web de l'expéditeur. Pour les domaines de messagerie gratuits comme Gmail, Outlook et iCloud, seul Gravatar est consulté, pour que tous les expéditeurs Gmail ne portent pas le même logo.

Un logo n'apparaît que sur un message qui prouve qu'il vient vraiment de ce domaine : il doit passer DMARC ou porter un DKIM aligné sur le domaine From. Un expéditeur falsifié garde le monogramme neutre. L'absence de logo est donc l'état sûr, pas un défaut.

La recherche et la récupération se font entièrement sur notre serveur, jamais dans votre navigateur. Gravatar et le site de l'expéditeur n'apprennent donc rien sur qui lit les messages, et les images sont ensuite retraitées et servies depuis notre propre stockage.

Le courrier sortant porte la photo de celui qui l'a vraiment écrit : la vôtre, ou celle d'un collègue de la liste des membres. Un message sortant plus ancien sans auteur connu affiche votre photo dans un espace de travail à une personne, et le monogramme dans une équipe.

#### Utiliser votre boîte dans une application de messagerie

Vous reliez une boîte MyCompanyDesk à une application de messagerie habituelle : **Paramètres › E-mail › Adresses et envoi**, ouvrez la boîte, puis choisissez **Connecter l'app mail**. La fenêtre vous donne tout ce que l'application demande : le serveur entrant (IMAP), POP3 pour les applications sans IMAP, le serveur sortant (SMTP), le nom d'utilisateur (l'adresse de votre boîte) et un mot de passe d'application.

La boîte de réception reste la source de vérité. La lecture, l'envoi, les dossiers et le statut lu restent synchronisés avec votre Boîte de réception dans MyCompanyDesk, dans les deux sens : lisez un message dans votre application et il apparaît comme lu dans la boîte de réception, et le courrier envoyé depuis l'application arrive dans la bonne conversation. Les dossiers sont fixes (Boîte de réception, Archive, Envoyés, Brouillons, Indésirables, Corbeille) et apparaissent dans votre application sous les noms habituels ; créer ou renommer des dossiers depuis l'application n'est pas possible.

La fenêtre vous guide application par application, avec un pas-à-pas pour Apple Mail, Outlook, l'application Gmail et Thunderbird. Pour les appareils Apple, vous téléchargez un profil d'installation qui remplit les réglages du serveur à votre place, et Thunderbird trouve les serveurs tout seul. Dans l'application Gmail, ajoutez le compte avec **Personnel (IMAP)** ; Gmail dans le navigateur ne récupère pas d'autres comptes, mais vous pouvez le relier pour l'envoi.

Pour un domaine dont l'e-mail est hébergé chez MyCompanyDesk, Outlook remplit les réglages du serveur tout seul : il essaie d'abord des noms comme `imap.` et `smtp.` sous votre propre domaine, et y trouve nos serveurs derrière un certificat valide. Quand Outlook propose les réglages, acceptez-les, tout est prêt. Si votre domaine ne porte pas encore ces noms, le pas-à-pas Outlook reste là pour ça : il liste tous les champs, dans l'ordre exact où Outlook les affiche, chacun avec un bouton copier, et précise ce qu'il faut y saisir. La fenêtre **Connecter l'app mail** continue d'afficher les noms partagés (`imap.mycompanydesk.nl`) ; ils fonctionnent pour toutes les boîtes et restent donc une valeur sûre. Un point demande votre attention : si Outlook a déjà rempli un nom de serveur, regardez si un point se trouve derrière, comme dans `imap.mycompanydesk.nl.`, et retirez ce point, sans quoi la connexion échouera.

Un mot de passe reste valable jusqu'à ce que vous le révoquiez vous-même : créez-en un par appareil et révoquez exactement celui de l'appareil qui pose problème ; le révoquer déconnecte cette application immédiatement. Un mot de passe comporte 16 caractères en quatre groupes de quatre, à la manière d'Apple et de Google. Le copier-coller reste le plus simple, mais vous pouvez aussi le taper : majuscules, espaces et tirets n'ont pas d'importance, pour la réception comme pour l'envoi. Inutile de l'enregistrer ou de le retenir. Si votre app mail redemande un mot de passe plus tard, ou si vous configurez un autre appareil, créez simplement un nouveau mot de passe et révoquez l'ancien. Les anciens mots de passe d'application, la longue forme qui commençait par mcd-, continuent de fonctionner tels quels. À côté du mot de passe, la fenêtre affiche un QR code que vous scannez avec l'appareil photo de votre téléphone pour y copier le mot de passe ; ce code apparaît quand vous créez le mot de passe depuis le navigateur sur votre ordinateur, pas depuis l'application sur votre téléphone.

Si la connexion depuis votre app mail échoue, la fenêtre dit pourquoi. En haut figure la dernière connexion refusée, avec le jour et l'heure et ce qu'il faut faire, et à côté de chaque mot de passe d'application de la liste apparaît son dernier refus avec un motif court. Un refus disparaît dès que la connexion réussit à nouveau ensuite. Les motifs que le serveur peut signaler : le mot de passe a été révoqué (créez-en un nouveau ci-dessous et mettez-le dans votre app mail, pour la réception et l'envoi), le mot de passe contient une faute de frappe (saisissez-le à nouveau dans votre app mail, ou créez-en un nouveau ci-dessous), votre app mail utilise votre ancien mot de passe ou votre mot de passe MyCompanyDesk au lieu d'un mot de passe d'application, le nom d'utilisateur est incorrect (saisissez l'adresse complète de la boîte), votre compte n'a actuellement pas accès à l'Inbox, ou l'Inbox est désactivée pour ce domaine.

La lecture via IMAP et POP3 peut être activée ou non selon le serveur. Si la lecture n'est pas encore disponible, la fenêtre l'indique, et l'envoi reste réglable. POP3 ne récupère que le dossier de réception, donc si votre application gère IMAP, c'est le meilleur choix.

À savoir avec POP3 : beaucoup d'applications suppriment le courrier du serveur dès qu'elles l'ont récupéré. Ces conversations partent alors à la corbeille ici et disparaissent après 30 jours. Utilisez IMAP si votre application le gère, ou activez dans votre application la copie conservée sur le serveur.

### Ventes

Lorsque vous ajoutez des boutons d'achat aux niveaux de tarifs ou à un bloc produit sur votre site public, chaque paiement effectué crée un enregistrement de vente. Suivez-les dans **Factures › Ventes du site** (`/invoices?view=website-sales`).

Ce que le journal des ventes affiche :

- Une liste chronologique de tous les achats effectués via votre site.
- Le prestataire de paiement (Mollie ou Stripe Connect) et le statut du paiement (payé, en attente, échoué, expiré ou remboursé).
- La section d'origine (quel niveau de tarif ou quel bloc produit a été acheté).
- L'e-mail du client, le montant payé et la devise.

Les enregistrements de vente sont créés par le checkout de votre site public, qui vérifie la section, crée un paiement via le prestataire connecté et redirige l'acheteur vers la page de checkout hébergée.

La facture d'une vente payée comporte un bloc **Payé via votre site web** avec deux boutons :

- **Régénérer la facture.** Recrée la facture liée si elle a été perdue ou n'a pas été générée lors de l'achat. Sans danger même si la facture existe déjà.
- **Rembourser.** Reverse le montant total au client via le prestataire de paiement d'origine (Mollie ou Stripe). Un avoir est automatiquement créé contre la facture liée pour votre comptabilité. Disponible uniquement pour les ventes payées.

### Parcours après l'achat

Lorsqu'un paiement est finalisé, la plateforme exécute automatiquement les étapes suivantes. Tout tourne en arrière-plan : les erreurs sont consignées et n'affectent pas le statut de paiement que l'acheteur voit.

1. **Facture générée.** Une facture est créée à partir de la vente, avec le nom du produit, le prix et l'e-mail de l'acheteur. Le prix que vous définissez dans l'éditeur est le prix final client, TVA comprise. La ligne de facture sépare ce montant en un prix HT et le taux de TVA que vous avez configuré sur le niveau de tarif ou le bloc produit (21% par défaut). Si l'e-mail correspond à un client existant dans votre espace de travail, la facture est liée à ce client. Sinon, une fiche client minimale est créée. La facture est finalisée immédiatement (statut envoyée) puisque le paiement a déjà été reçu.
2. **Paiement enregistré.** Un paiement est enregistré sur la facture. La méthode de paiement est le prestataire (Mollie ou Stripe) et la référence contient la référence de paiement de ce prestataire, pour que vous retrouviez toujours le paiement.
3. **Confirmation au client.** L'acheteur reçoit un e-mail de confirmation avec le nom du produit, le montant et la méthode de paiement. Si une facture a été générée, l'e-mail contient un lien sécurisé vers le portail pour consulter et télécharger la facture en PDF.
4. **Propriétaire averti.** Vous recevez une notification dans l'application et un résumé par e-mail de la vente : produit, montant, e-mail du client et un lien direct vers la facture.

Les pages succès-du-checkout et checkout-annulé affichent à l'acheteur un écran de résultat aux couleurs de votre marque, en utilisant les tokens de design (couleurs) de votre site.

## Visibilité de l'onglet Boîte de réception

L'onglet Boîte de réception est toujours visible dans la barre latérale et la barre de navigation inférieure. Sur Desk, la boîte de réception se limite à lire et à répondre aux messages ; rédiger de nouveaux messages, les boîtes aux lettres propres et les domaines relèvent d'Office. Sur Office, l'onglet reste toujours visible, même avant qu'un domaine soit connecté, car il est le point d'entrée de l'assistant de configuration de la boîte de réception.

Pour un espace de travail qui a déjà configuré une boîte de réception sur un domaine, l'onglet affiche la véritable boîte avec les compteurs de non-lus et la gestion complète des fils. Pour les espaces Office sans domaine configuré, sélectionner l'onglet redirige vers `/inbox/setup` afin de connecter le domaine et d'activer la boîte de réception en un seul parcours.

## Envoyer des e-mails vs recevoir des e-mails

Ce lot correspond au côté **réception**. Les e-mails sortants (envoi de factures, rappels, envoi de devis) sont gérés par le pipeline e-mail plus large décrit dans [Intégration e-mail](/fr/settings/email). La boîte de réception sert à recevoir les e-mails des clients et à rédiger des réponses ; elle n'achemine pas vos envois automatisés de factures. La livraison des factures suit toujours la méthode d'envoi que vous avez choisie dans [Intégration e-mail](/fr/settings/email) (Gmail, Outlook ou l'expéditeur intégré). La signature DKIM du domaine de la boîte de réception est utilisée pour les réponses sortantes rédigées dans la boîte de réception, pas pour les e-mails transactionnels automatisés.

## Limites et points d'attention

- **Un site web par entreprise.** L'ajout d'un domaine personnalisé désactive le sous-domaine de l'espace de travail. Supprimez le domaine qui porte votre site et le site revient de lui-même : vers un autre domaine de site web actif s'il y en a un, sinon vers l'adresse mycompanydesk.site gratuite.
- **Une seule boîte de réception active par domaine.** La plateforme n'autorise qu'un seul espace de travail à la fois à recevoir du courrier sur un domaine donné. Si un autre espace de travail a déjà une boîte active sur `acme.fr`, votre tentative d'activer la boîte sur le même nom est bloquée. Les sites web et les revendications CNAME ne sont pas bloqués; seule une boîte active est exclusive.
- **Vous ne pouvez pas revendiquer une zone déjà détenue par un autre espace de travail.** Lorsque vous ajoutez un domaine en mode nameserver, la plateforme vérifie si la zone Cloudflare sous-jacente est déjà active pour un autre espace de travail. Si c'est le cas, l'ajout est refusé avec un message d'erreur clair, pour éviter de "vérifier" un domaine grâce au DNS de quelqu'un d'autre.
- **Réajouter votre propre domaine précédemment supprimé fonctionne toujours.** Si votre espace de travail a précédemment supprimé un domaine, la zone existante peut être réutilisée pour le même espace de travail; la protection bloque seulement qu'un autre espace de travail la prenne.
- **Le mode CNAME n'a pas d'e-mail.** Le routage des e-mails nécessite une zone Cloudflare complète, ce que seul le mode nameserver fournit.
- **L'assistant refuse d'écraser un MX tiers existant.** Si votre domaine pointe déjà vers Google Workspace ou Microsoft 365, l'assistant signale un conflit et vous devez choisir : migrer le MX vers Cloudflare, ou rester chez votre fournisseur existant et sauter la boîte de réception intégrée.
- **Sous-domaines réservés.** `app`, `admin`, `api`, `www`, `mail`, `support`, `portal`, `dashboard` et quelques autres sont bloqués au niveau du slug de l'espace de travail.
- **Votre abonnement détermine ce que vous voyez.** Si une fonction n'est pas incluse dans votre abonnement, vous voyez un bouton de mise à niveau au lieu de l'éditeur.

## Voir aussi

- [Assistant de configuration](/fr/getting-started/company-setup): choisissez-y le site web ou l'e-mail pour démarrer ce parcours.
- [Intégration e-mail](/fr/settings/email): e-mails sortants, sélection de l'expéditeur, suivi de livraison.
- [Constructeur de site](/fr/advanced/business-page): le guide complet de l'éditeur.
- [Paramètres de l'entreprise](/fr/settings/company): coordonnées de l'entreprise, logo et couleur.
- [Abonnement et paiements](/fr/settings/billing): ce qui est inclus dans Desk et Office.
