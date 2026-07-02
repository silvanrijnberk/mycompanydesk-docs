---
title: Assistant de configuration
last_verified: 2026-05-19
---

# Assistant de configuration

Une configuration magique en cinq etapes sur `/setup` qui capture votre identite d'entreprise, recupere eventuellement votre inscription aupres de la KvK ou d'un registre europeen, choisit une adresse web, genere des suggestions de marque et applique tout en un clic. L'assistant est la porte d'entree pour les nouveaux utilisateurs et reste disponible ensuite pour des ajustements.

Si vous cherchez le guide de base, commencez par [Configurer votre entreprise](/fr/getting-started/company-setup). Cette page est la reference approfondie : chaque etape, chaque option, chaque consequence.

## Quand l'assistant est propose

L'assistant est accessible de deux manieres :

- **Direct :** naviguez vers `/setup` a tout moment.
- **Banniere du tableau de bord :** tant que l'integration n'est pas terminee, une banniere fermable "Terminer la configuration" s'affiche en haut de `/dashboard`. Elle montre un decompte des champs en attente (ou un message generique "Completer votre profil" si le decompte est a zero) et un bouton retournant a l'assistant. Un bouton de fermeture (icone X) masque la banniere par navigateur via localStorage, la maintenant masquee d'un rechargement a l'autre jusqu'a ce que l'assistant soit termine.

L'assistant est non bloquant : l'ancienne redirection forcee vers `/setup` a l'inscription (la porte `ONBOARDING_MANDATORY`) a ete supprimee. Les nouvelles inscriptions arrivent directement sur `/dashboard` et voient la banniere fermable a la place.

## Mise en page

L'assistant est une page unique (`/setup`) avec cinq etapes dans un stepper. Chaque etape ecrit ses reponses dans une colonne JSONB (`companies.onboarding_state`) a chaque modification, ce qui rend l'assistant entierement reprenable : fermez l'onglet au milieu d'une etape et la prochaine visite vous ramene a la meme etape avec les memes reponses.

Trois boutons se trouvent en bas de chaque etape :

- **Retour** — aller a l'etape precedente (masque a l'etape 1).
- **Passer pour l'instant** — quitte sans marquer l'integration comme terminee. La banniere du tableau de bord reste affichee pour que l'utilisateur puisse revenir.
- **Continuer** / **Terminer** — controle par etape selon les reponses ci-dessous.

Il n'y a pas de "enregistrer et quitter" — l'enregistrement est automatique. **Passer pour l'instant** est une sortie propre, pas un rejet.

## Etape 1 — Entreprise

Capture les deux reponses dont depend chaque etape suivante.

| Champ | Stocke comme | Obligatoire | Notes |
|---|---|:---:|---|
| Nom de l'entreprise | `answers.businessName` | oui | Utilise comme `display_name` et `company_name` a la fin (le nom legal de l'etape registre l'emporte pour `company_name` si les deux sont presents). Pre-remplit egalement la suggestion de slug de sous-domaine a l'etape 3. |
| Ce que vous faites | `answers.what` | oui | Texte libre, 1–2 phrases. Envoye au generateur de suggestions (Gemini) de l'etape magique avec le pays et le secteur. |

**Continuer est desactive** jusqu'a ce que les deux champs aient des valeurs non vides et nettoyees.

## Etape 2 — Registre

Choisit un pays et recherche l'entreprise dans le registre officiel du pays, saisit les donnees manuellement, ou passe l'etape.

### Trois voies

1. **Recherche:** saisie predictive par nom d'entreprise, choisissez une correspondance et laissez le backend recuperer le Basisprofiel (0,02 EUR par appel pour NL). Le champ de recherche n'est affiche que lorsque l'API KVK payante (`KVK_API_KEY`) est configuree sur le conteneur API. Lorsque la cle est absente, la recherche est sautee et l'assistant demarre par defaut en saisie manuelle (voie 2).
2. **Manuel:** saisissez le nom de l'entreprise, le numero KVK (facultatif), l'adresse, le code postal et la ville vous-meme. Les donnees sont ecrites directement dans la ligne de l'entreprise via `PUT /company-settings/company` et `answers.kvk` est marque avec `manual: true`. La saisie manuelle est le comportement par defaut lorsque KVK_API_KEY n'est pas defini, et existe aussi pour deux scenarios supplementaires meme lorsque la recherche est disponible : (a) les nouvelles entreprises qui ne sont pas encore dans le jeu de donnees gratuit OpenKVK, et (b) les entreprises dont le nom commercial ne correspond pas a ce que l'utilisateur a tape dans la recherche.
3. **Passer** — "Pas de numero KvK?" stocke `answers.kvk = null`. L'assistant continue; les donnees de l'entreprise peuvent etre remplies plus tard dans les parametres.

Le passage de la recherche au manuel se fait en un clic (lorsque la recherche est disponible) : un bouton "Saisir manuellement" apparait sous les resultats de recherche, et un lien "Retour a la recherche KVK" se trouve en haut du formulaire manuel. Lorsque `KVK_API_KEY` est absent, le bouton de retour a la recherche est entierement masque et l'utilisateur commence et reste en saisie manuelle.

### Options de pays

| Code | Registre affiche | Recherche active |
|---|---|:---:|
| `NL` | KvK | oui |
| `FR` | SIRENE | oui |
| `GB` | Companies House | oui |
| `DE` | Handelsregister | non — saisie manuelle |
| `OTHER` | (aucun registre) | non — saisie manuelle |

`NL` est la valeur par defaut. Le pays determine plusieurs choses a la fin : fuseau horaire (`Europe/Amsterdam` / `Europe/Berlin` / `Europe/Paris` / `Europe/London`), `pdf_language` (`nl` / `de` / `fr` / `en`), et le libelle du registre integre dans `footer_text` (`KvK 12345678`, `Handelsregister …`, `SIRENE …`, `CRN …`).

### Mode recherche

Pour les pays pris en charge, l'utilisateur recherche par nom d'entreprise. Le backend appelle l'API publique correspondante et renvoie l'un des resultats suivants :

- **ok** — `legalName`, `address`, `postalCode`, `city`, `sector` remplis et stockes sous `answers.registry`.
- **not-configured** — fournisseur pas encore branche dans cet environnement ; l'utilisateur est invite a passer a la saisie manuelle.
- **not-found** — numero non trouve ; l'utilisateur peut reessayer ou passer en manuel.
- **invalid** — format du numero rejete.
- **error** — erreur du fournisseur ; la saisie manuelle reste une option.

<!-- TODO(source-missing): KvK Basisprofiel API pricing (EUR 0.02/call) and subscription (EUR 6.40/month) from developers.kvk.nl/nl/pricing -->
#### KvK Basisprofiel (Pays-Bas uniquement)

Pour les espaces de travail NL, la recherche KvK est un processus en deux etapes :

1. **Typeahead** — l'utilisateur recherche par nom d'entreprise. Le point de terminaison `zoeken` (gratuit) renvoie les entrees correspondantes. C'est l'etape d'autocompletion qui alimente les reponses `ok` / `not-found` existantes. Lorsque la recherche ne renvoie aucun resultat, l'UI affiche un panneau d'etat vide (titre, explication et un bouton "Remplir manuellement" qui pre-remplit le formulaire manuel avec ce que l'utilisateur a deja tape). C'est frequent car le niveau gratuit d'OpenKVK ne couvre pas beaucoup de jeunes entreprises.
2. **Basisprofiel** — une fois une correspondance choisie, l'assistant appelle le point de terminaison de detail Basisprofiel de la KvK. C'est un appel payant (0,02 EUR, mis en cache 24h par numero KVK). Il renvoie le profil complet : `legalName`, `statutaireNaam` (nom statutaire), `tradeNames` (tous les noms commerciaux enregistres, tries), `rsin`, `legalForm`, `dateFounded`, adresses de visite et postales, codes SBI avec indicateur primaire, `employeeCount` et `indNonMailing` (indicateur pas-de-courrier). L'assistant pre-remplit `business_page_hero_tagline` avec le premier nom commercial et la ville ("[nom commercial] a [ville]"), et `description` avec la description SBI principale (limitee a 280 caracteres). Les deux utilisent COALESCE pour que les modifications manuelles dans Parametres soient preservees.

Lorsqu'une correspondance est choisie (mode recherche), le frontend appelle immediatement `PUT /company-settings/company` avec le `name` de la correspondance comme `display_name`, le `kvkNumber` comme `chamber`, `city`, et `country` code en dur sur `"NL"`. Cela ecrit le nom d'affichage visible par le client immediatement, afin que le message d'accueil du tableau de bord et le site ensemence utilisent le bon nom des le moment ou l'utilisateur clique sur la correspondance, plutot que d'attendre l'etape de fin de l'assistant.

Il y a deux flags de fonctionnalite independants pour les recherches KVK aux Pays-Bas :

- `KVK_API_KEY` (variable d'environnement sur le conteneur API) : lorsque cette cle est absente, le champ de recherche n'est pas du tout affiche et l'assistant demarre par defaut en saisie manuelle a cette etape. Le niveau gratuit OpenKVK seul est trop limite (~2% de taux de succes, manque presque toutes les nouvelles inscriptions). Le flag bascule automatiquement des que la cle est definie.
- `KVK_BASISPROFIEL_ENABLED` : lorsque desactive (ou lorsque `KVK_API_KEY` est absent), l'assistant utilise uniquement le resultat gratuit `zoeken` (les memes champs `ok` que ci-dessus). Lorsque active et que `KVK_API_KEY` est present, les donnees Basisprofiel enrichissent la charge utile `answers.registry` et l'etape de Verification montre chaque champ qui sera ecrit dans la ligne de l'entreprise.

### Mode manuel

L'utilisateur remplit `chosen` (son numero d'enregistrement), et eventuellement `legalName`, `address`, `sector`. Les quatre champs sont optionnels dans ce mode.

Lors de l'enregistrement, le frontend appelle `PUT /company-settings/company` directement avec les valeurs saisies manuellement, plus `display_name` defini sur le nom d'entreprise saisi ici et `country` code en dur sur `"NL"`. Cela ecrit immediatement le nom visible par le client et le pays, au lieu d'attendre l'etape de fin. La logique d'application de l'etape de fin lit toujours `answers.kvk` pour le chemin de registre herite, mais le nouveau chemin de l'assistant en 2 etapes lit `answers.kvk.legalName` et `answers.kvk.kvkNumber` directement, de sorte que le PUT inline pendant cette etape est l'ecriture autoritaire.

### Mode passer

Un bouton "Pas encore enregistre" stocke `answers.registry = null`. **Continuer est toujours autorise a cette etape**, quel que soit le mode — les donnees du registre sont une commodite, pas un obstacle.

## Etape 3 — Domaine

Choisissez l'adresse web que vos clients verront sur la page d'entreprise publique et dans votre boite de reception. Trois chemins, affiches sous forme de cartes, couvrent chaque scenario, du demarrage rapide gratuit a l'achat d'un domaine directement dans l'assistant.

### Selecteur a trois choix

Une grille de trois cartes presente le choix. La selection d'un chemin revele l'editeur correspondant en dessous ; un seul chemin est actif a la fois.

**Sous-domaine (gratuit) :** l'utilisateur choisit un slug ; un selecteur de TLD permet de choisir entre `.mycompanydesk.nl` et `.mycompanydesk.com`. Le slug est pre-rempli a partir du nom legal KVK lorsqu'il est disponible (minuscules, accents supprimes, caracteres non-ASCII supprimes, tronque a 63 caracteres), de sorte que la plupart des utilisateurs peuvent cliquer-et-continuer sans taper. La disponibilite est verifiee en direct avec un delai de 350 ms pendant la saisie. A la fin, le sous-domaine est provisionne via l'API Cloudflare et le site web de l'entreprise est immediatement accessible.

Lorsque l'assistant est execute dans le flux en 2 etapes (controle par le plan), l'etape Domaine est entierement omise. L'etape de fin provisionne automatiquement un sous-domaine d'espace de travail a partir de la valeur `display_name` : le slug est derive du nom d'affichage (avec suffixes de reessai en cas de collision jusqu'a 5 tentatives), et `activateSubdomain` l'enregistre comme URL publique du site. Meilleur effort : une collision ou une erreur est journalisee et n'empeche pas l'assistant de terminer.

**Domaine personnel :** l'utilisateur saisit un domaine qu'il possede deja. Une validation regex en direct verifie le format pendant la saisie (`[a-z0-9][a-z0-9-]*(.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+`). A la fin, l'assistant ajoute le domaine a la liste des domaines de l'espace de travail (sans effet s'il etait deja ajoute) et active automatiquement la boite de reception : `info@<domaine>` comme boite par defaut plus les alias `support@`, `sales@` et `noreply@`. Le chemin 409-deja-existant de `apply.service` est gere avec elegance.

Si le domaine ne pointe pas encore vers les serveurs de noms de MCD, la fin redirige vers `/workspace/organization/company/address` pour que l'utilisateur voie immediatement les instructions DNS et un bouton **Verifier**. Sinon, cela va au tableau de bord.

**Enregistrer un domaine :** integre les composants live `DomainPurchaseCard` + `DomainClaimModal` de l'interface des parametres. L'utilisateur peut rechercher un domaine, verifier la disponibilite et le prix, puis l'acheter via OpenProvider ou le reclamer gratuitement en tant que Founding Member. En cas de reclamation ou d'achat reussi, le domaine est deja attache a l'espace de travail cote serveur via le flux `/api/domain-purchase`, de sorte que l'assistant enregistre la reponse comme `mode='own'` avec le nom enregistre et `registered: true` ; `apply.service` le traite comme un re-ajout sans effet. Une banniere de succes verte affiche le nom de domaine enregistre et laisse l'utilisateur continuer.

Si l'utilisateur ouvre le chemin Enregistrer mais ne finalise pas l'achat, l'etape est marquee comme sautee pour que l'assistant puisse continuer. Il peut revenir plus tard via `Entreprise > Votre propre adresse .com` quand il est pret.

### Revenir d'un domaine personnel a un sous-domaine

Si l'espace de travail possede deja un domaine de site web personnalise, l'assistant affiche un avertissement avant de laisser l'utilisateur passer au chemin du sous-domaine — `activateSubdomain` refuse les entreprises avec un domaine personnalise encore attache, et l'echec ne serait sinon visible qu'a la fin.

## Etape 4 — Magie

Genere des suggestions de marque a partir des reponses saisies jusqu'a present. Champs :

- **Couleur de marque** — hex. Si l'utilisateur telecharge un logo a cette etape, la couleur dominante non blanche est extraite du raster (via `sharp`) et utilisee ; cela remplace la suggestion Gemini, et un flag (`brandColorFromLogo`) empeche une regeneration ulterieure de l'ecraser. Les logos SVG uniquement et les entrees principalement blanches reviennent a la palette Gemini.
- **Accroche** — courte ligne hero pour la page d'entreprise publique.
- **Texte a propos** — paragraphe pour la page d'entreprise.
- **Services** — liste de jusqu'a 8 noms de services. Chacun est insere dans `company_services` a la fin, mais **uniquement si l'entreprise n'a encore aucun service** — l'assistant n'ecrase jamais une liste de services existante.
- **Ton de l'e-mail** — `formal` / `friendly` / `casual`. Correspond au style d'e-mail : `formal → classic`, `friendly` et `casual → modern`.
- **Modeles d'e-mail** — cles par type de modele (`invoice_default`, `reminder_default`, etc.), chacun avec `subject` + `body`. Enregistres via le depot de modeles d'e-mail a la fin.

L'utilisateur peut modifier chaque suggestion en ligne avant de continuer. **Continuer est desactive** jusqu'a ce que des suggestions existent (cliquer sur **Generer des suggestions** au moins une fois).

### Telechargement de logo

Cliquer sur la vignette de telechargement permet a l'utilisateur de choisir une image jusqu'a 4 Mo. Le fichier est envoye en tant qu'URI de donnees base64 vers `/onboarding/upload-logo`, qui :

1. Le stocke via le chemin canonique des logos d'entreprise.
2. Renvoie la couleur dominante non blanche, qui est automatiquement appliquee a la suggestion de couleur de marque.
3. Definit `answers.logoUploaded = true` afin que le texte de Verification s'adapte ("nous utiliserons votre logo" au lieu de "nous creerons un logo a initiales a partir du nom de votre entreprise") et que l'etape d'application ignore le generateur d'initiales.

Si l'utilisateur avait deja un logo, il est affiche comme apercu existant ("vous avez deja un logo") au lieu d'un CTA de telechargement vide.

## Etape 5 — Verification

Diff en lecture seule de chaque champ que l'assistant modifierait. Deux sections :

- **Modifications** — lignes `actuel → nouveau`. Inclut un echantillon pour `brandColor`. Seuls les champs que l'assistant a ecrits et qui different de la ligne actuelle de l'entreprise apparaissent ici.
- **Deja defini** — champs que l'assistant a captures mais qui correspondent deja a la ligne de l'entreprise.

Champs affiches : nom de l'entreprise, pays, numero de registre, nom legal, adresse, couleur de marque, accroche, texte a propos, resume du domaine (`info@<domaine-resolu>` est affiche si un domaine est defini).

Le bouton **Terminer** dans le pied de page appelle `/onboarding/complete`. La locale actuelle est transmise pour que le texte par defaut (par ex. les instructions de paiement) soit localise.

## Ce que Terminer applique reellement

`apply.service.js` parcourt les reponses et les ecrit dans la ligne reelle de l'entreprise. Deux semantiques, deliberement separees :

**Toujours ecraser** lorsque la reponse de l'assistant est une chaine non vide et differe de la valeur actuelle :

- `display_name`, `company_name`
- `country` (revient a `"NL"` si `answers.country` n'est pas defini , l'assistant en 2 etapes ne demande pas le pays, donc NL est la valeur par defaut implicite)
- `chamber` (via `answers.kvk.kvkNumber` lorsque present)

Si l'assistant en 2 etapes n'a pas capture de reponse de domaine, la fin provisionne automatiquement un sous-domaine d'espace de travail a partir de la valeur `display_name` lorsque le plan autorise les sous-domaines et que l'entreprise n'a pas de domaine personnalise. Le slug est derive de `display_name` (minuscules, ASCII, max 60 caracteres, reessaye avec suffixe `-2`…`-5` en cas de collision).
- `chamber`, `address`, `postal_code`, `city`
- `brand_color`, `description`, `business_page_hero_tagline`

**Remplir uniquement les vides** (ne jamais ecraser un choix manuel existant, pour que les reexecutions ne surprennent pas les utilisateurs) :

- `second_accent_color` (deduit de la couleur de marque si vide)
- `email_style` (du ton de l'e-mail)
- `timezone` (par defaut du pays)
- `pdf_language` (par defaut du pays)
- `footer_text` (style `Nom commercial - KvK 12345678`)
- `payment_options_enabled` (`bank_transfer`)
- `payment_default_method` (`bank_transfer`)
- `payment_instructions` (texte par defaut localise)
- `email_footer_show_website`, `email_footer_show_support_email`, `email_footer_show_business_page` (booleens)

Effets secondaires au-dela des ecritures de colonnes :

- **Logo a initiales** est genere a partir du nom de l'entreprise + couleur de marque, mais uniquement si `logo_path` et `logo_svg` sont tous les deux vides. Entierement ignore si l'utilisateur a telecharge un vrai logo a l'etape Magie.
- **Services** — jusqu'a 8 insertions dans `company_services`, uniquement si l'entreprise n'en a encore aucun.
- **Modeles d'e-mail** — enregistres par type via le depot de modeles.
- **Amorcage du site web** — lors de la premiere fin qui trouve zero page dans l'espace de travail, `apply.service.js` cree un site par defaut avec une page d'accueil en brouillon (`/`, modele "home", `is_home: true`) et remplit les jetons de design avec la couleur de marque capturee dans l'assistant. Les reexecutions ignorent la creation lorsqu'une page existe deja, de sorte que l'assistant n'ecrase jamais les modifications manuelles.
- **Domaine** — `activateSubdomain` pour le chemin du sous-domaine, ou `addDomain` + `quickEnableInbox` (+ boite personnelle optionnelle) pour le chemin du domaine personnel.

Si le provisionnement du domaine echoue, le reste de la fin est toujours applique — l'echec s'affiche sur l'ecran de fin avec un code d'erreur specifique (`subdomain_failed`, `domain_failed`, `inbox_enable_failed`, `personal_mailbox_failed`, `personal_mailbox_remove_failed`, `personal_mailbox_list_failed`) traduit en une ligne lisible par l'utilisateur.

## Ecran de fin

Un panneau de confirmation vert qui s'affiche pendant 4,2 secondes (ou 0,9 seconde lorsque rien n'a ete provisionne) avant de rediriger. Il liste chaque element que l'assistant a configure dans une liste de cartes recapitulatives :

- **Categories** — les categories de depenses systeme creees pour l'espace de travail (par ex. "Bureau, Voyages, Logiciels").
- **Services** — nombre de services ajoutes a la page d'entreprise.
- **Logo** — confirmation lorsqu'un logo a initiales a ete genere.
- **Modeles d'e-mail** — nombre de modeles enregistres dans la tonalite de marque de l'espace de travail.
- **Site web** — confirmation qu'un site par defaut avec page d'accueil, navigation et couleur de marque est pret. Visible uniquement lorsque le site vient d'etre cree.
- **Domaine** — l'URL prete pour les sous-domaines ou le domaine ajoute pour les configurations de domaine personnel.

Deux boutons apparaissent sous le recapitulatif :

- **Aller au tableau de bord** — amene l'utilisateur directement a `/dashboard`, en sautant le minuteur de redirection automatique.
- **Ouvrir le constructeur de site** — visible uniquement lorsqu'un site a ete cree. Amene l'utilisateur directement a `/website` afin qu'il puisse commencer a modifier sa page d'accueil.

Ensuite, l'utilisateur arrive sur `/dashboard` (chemin par defaut), `/website` (lorsqu'il clique sur le CTA du constructeur de site), ou `/workspace/organization/company/address` (lorsqu'un domaine personnel est en attente de verification DNS).

## Reexecuter l'assistant

L'assistant est entierement reexecutable. Les utilisateurs recurrents arrivent a l'etape 1 avec leurs reponses actuelles visibles. Rien ne les oblige a passer par chaque etape — ils peuvent modifier un champ sur une etape et cliquer sur Terminer.

Le diff de l'etape de Verification est le filet de securite : il montre a l'utilisateur chaque ecrasement qui va se produire. Les champs par defaut raisonnables (fuseau horaire, pdf_language, valeurs par defaut de paiement, texte de pied de page) ne sont pas dans le diff car Terminer ne fait que remplir les vides pour ceux-ci — les modifier silencieusement surprendrait les utilisateurs qui les ont definis deliberement.

Pour revoir les parametres individuels sans l'assistant, allez a :

- `/workspace/organization/company/about` — nom, enregistrement, adresse, TVA.
- `/workspace/organization/company/look` — couleur de marque, logo.
- `/workspace/organization/company/website` — accroche, texte a propos, services.
- `/workspace/organization/company/address` — domaine personnel + DNS.
- `/workspace/email` — boite de reception, boites aux lettres, modeles.

La carte complète se trouve dans les paramètres de l'application.

## Cas particuliers

- **Passer une etape.** Continuer est controle par etape sur les reponses minimales requises. L'etape Registre n'a pas d'obstacle ; Domaine necessite un chemin choisi avec une valeur non vide, ou un achat termine pour le chemin Enregistrer, ou le drapeau passe ; Magie necessite que Generer ait ete execute ; Entreprise et Verification ont leurs propres obstacles.
- **Fermer au milieu d'une etape.** Chaque reponse est enregistree a la modification, donc la prochaine visite reprend la ou l'utilisateur s'etait arrete. L'index d'etape est egalement enregistre (`answers` et `currentStep` vivent dans la meme colonne JSONB).
- **Changer d'avis a l'etape Domaine.** Passer de `personnel` a `sous-domaine` apres avoir saisi un domaine reecrit `answers.domain` a `null` jusqu'a ce que l'utilisateur choisisse un slug. Passer au chemin Enregistrer enregistre une reponse passee pour qu.un nouvel inscrit ne soit pas bloque s.il ouvre Enregistrer mais reporte l.achat. Passer a un sous-domaine lorsqu.un domaine personnalise est deja attache affiche un avertissement prealable.
- **Echec de l'extraction du logo.** Les logos principalement blancs et les entrees SVG uniquement que `sharp` ne peut pas rasteriser renvoient `color: null`. La suggestion de couleur de marque Gemini est alors utilisee.
- **Domaine deja ajoute a la fin du domaine personnel.** Un 409 de `addDomain` revient a la ligne existante pour que l'etape d'activation de la boite de reception soit toujours executee.
- **Boite personnelle existe deja.** Un 409 de `createMailbox` est traite comme un succes.
