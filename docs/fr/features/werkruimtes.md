---
title: Espaces de travail
description: "Une page centrale pour tout ce que vous gérez, vos propres sociétés et les dossiers clients, sans jamais mélanger votre argent et le leur."
last_verified: 2026-10-13
---

# Espaces de travail

La page Espaces de travail (`/werkruimtes`) est un lieu central pour tout ce que vous gérez. Elle remplace l'ancien portail comptable et s'adapte à votre rôle réel : un espace de travail, plusieurs de vos propres entreprises, ou des administrations clientes.

> **L'argent qui vous appartient et l'argent des clients ne sont jamais mélangés.** Additionner vos propres entreprises a du sens, car l'argent vous appartient. Un total sur les administrations clientes serait dénué de sens, donc la page les garde strictement séparées.

## Où la trouver

- Ouvrez le sélecteur d'espace de travail dans la barre latérale et choisissez **Gérer les espaces de travail**.
- Le même sélecteur se trouve aussi dans l'en-tête du menu mobile, pour atteindre l'aperçu depuis le même endroit sur tous les écrans.
- L'ancienne URL `/boekhouder` redirige ici.
- Le sélecteur d'espace de travail affiche maintenant une ligne de synthèse en haut. Vos propres entreprises et les administrations clientes sont regroupées séparément, et un champ de recherche apparaît dès que vous avez plus de huit espaces de travail.
- Chaque ligne affiche la propre marque de l'espace de travail : son logo, ou une tuile colorée avec ses initiales. Vos propres entreprises portent leur couleur; les administrations clientes restent neutres. L'espace de travail dans lequel vous vous trouvez actuellement est mis en évidence.

Quand vous choisissez un espace de travail dans le sélecteur, l'application bascule maintenant sans rechargement complet de la page. Elle efface l'état de l'espace de travail précédent des stores Pinia et des caches de modules, annule les requêtes en vol qui arriveraient après le basculement, recharge l'enveloppe pour mettre à jour la navigation et les droits, puis vous redirige vers la page cible.

## La section Espaces de travail

Dès que vous êtes dans Espaces de travail, une barre latérale dédiée remplace la navigation habituelle. Elle regroupe les pages ainsi :

- **Aperçu** : **Aujourd'hui** (`/werkruimtes`), **Agenda** (`/werkruimtes/agenda`) et **Travail** (`/werkruimtes/werk`). Ces trois pages sont toujours là.
- **À vous** : **Entreprises** (`/werkruimtes/bedrijven`), la vue d'ensemble de vos propres entreprises. Toujours là aussi.
- **Travail client** : **Clients** (`/werkruimtes/klanten`), **Demandes** (`/werkruimtes/verzoeken`) et **Aperçu** (`/werkruimtes/inzicht`). Apparaît dès que vous avez accès à une administration cliente.
- **Cabinet** : **Votre cabinet** (`/werkruimtes/kantoor`), **Facturation** et **Export**. Apparaît si vous faites partie d'un cabinet comptable.

**Aujourd'hui** montre ce qui demande votre attention maintenant, en deux blocs séparés : d'abord vos propres entreprises, puis vos clients (huit au maximum ; ce qui dépasse est signalé, pas omis en silence).

### Indicateur de propriété

Chaque ligne d'espace de travail et chaque élément des nouvelles pages porte un petit indicateur de propriété. Vos propres entreprises conservent la couleur de leur espace de travail; les administrations clientes restent neutres. Vous le voyez dans le sélecteur d'espace de travail, dans l'agenda et dans la liste de travail, pour toujours savoir de quel côté de la frontière propre/client se situe une ligne.

### Agenda (`/werkruimtes/agenda`)

L'agenda groupe toutes les échéances à venir de tous vos espaces de travail par date. Il regarde 30 jours en arrière et 90 jours en avant, de sorte qu'une échéance dépassée de la semaine passée reste visible. Les échéances dépassées apparaissent en premier. Chaque ligne montre l'espace de travail, le libellé de l'échéance et l'indicateur de propriété. Cliquez sur une ligne pour basculer dans cet espace de travail et ouvrir la page correspondante.

### Travail (`/werkruimtes/werk`)

La page Travail liste le travail ouvert en deux blocs : vos propres entreprises d'abord, puis les administrations clientes. Cela sépare les deux types de travail, car vos propres tâches et les éléments que vous attendez d'un client demandent des actions différentes. Chaque ligne montre l'espace de travail, la tâche et un badge d'échéance. Cliquez sur une ligne pour basculer dans l'espace de travail et ouvrir la page correspondante; pour une demande client, c'est la demande elle-même qui s'ouvre.

### Pages du cabinet (`/werkruimtes/kantoor/*`)

Si vous faites partie d'un cabinet comptable, le groupe Cabinet contient trois pages :

- **Votre cabinet** (`/werkruimtes/kantoor`) - membres du cabinet, invitations clientes en attente, lien de partage partenaire et statistiques, ainsi que la possibilité qu'Office ait été accordé gratuitement.
- **Facturation** (`/werkruimtes/kantoor/facturatie`) - proposez de prendre en charge l'abonnement d'une administration cliente. Le client doit accepter avant que quoi que ce soit soit facturé ; le prix par administration prise en charge est affiché avant confirmation. Une offre en attente s'affiche séparément pour que vous puissiez la retirer tant que le client n'a pas répondu.
- **Export** (`/werkruimtes/kantoor/export`) - exportez plusieurs administrations clientes à la fois. Choisissez l'année, la période et le format d'export, sélectionnez les administrations, et l'application télécharge une archive par client. Les exports échoués restent à l'écran pour que vous voyiez ce qui n'a pas été terminé.

## États de chargement et erreurs

Quand vous ouvrez une page du cadre Espaces de travail, l'application attend d'abord que les données de coquille (liste des espaces, jeton, permissions) soient prêtes, puis elle récupère les données de la page. Cela empêche une navigation à froid d'afficher un état vide "rien à faire" pendant que la requête est encore en cours.

Si la récupération échoue, la page affiche un état d'erreur explicite avec un bouton **Réessayer** au lieu de faire comme s'il n'y avait rien à afficher. Le sélecteur d'espace dans le rail reste utilisable, vous pouvez donc passer à un autre espace sans attendre que la page défectueuse se remette. Sur la page de facturation, la liste des clients et les montants de facturation se chargent séparément : si les montants échouent, la liste des clients reste disponible et la colonne de prix reste vide plutôt que d'afficher un faux zéro.

## Si vous avez un seul espace de travail

Sur **Entreprises**, vous obtenez alors trois entrées au lieu d'une liste vide :

- **Plus d'une entreprise ?** avec **Ajouter une entreprise**, pour une holding, une deuxième société ou une activité annexe. Chaque entreprise reçoit sa propre administration avec TVA, factures et comptabilité séparées.
- **Vous travaillez avec un comptable ?** avec **Inviter un comptable**, si vous travaillez avec un comptable externe.
- **Êtes-vous vous-même comptable ?** avec un lien vers le programme partenaire, si vous souhaitez gérer plusieurs administrations clientes en un seul lieu.

## Espace de travail combiné : vos propres entreprises

Si vous avez plus d'une entreprise, **Entreprises** (`/werkruimtes/bedrijven`) affiche une vue combinée :

- Une phrase indique ce que vos entreprises ont réalisé ensemble cette année en chiffre d'affaires, et si cela donne un bénéfice ou une perte.
- Une bande montre le chiffre d'affaires, le résultat, les créances et la TVA de côté.
- Une barre de part montre la répartition du chiffre d'affaires par entreprise.
- En dessous des chiffres se trouve une ligne par entreprise. L'ordre est fixe (entreprise principale d'abord, puis date de création), pour que vous sachiez toujours où chercher.

**Voir ensemble** ouvre **Ensemble** (`/werkruimtes/bedrijven/samen`) : un tableau avec vos entreprises côte à côte pour l'année de votre choix, avec une ligne de total en dessous.

### Signaux dans chaque ligne

Chaque ligne d'entreprise affiche des puces pour les éléments qui demandent attention. Chaque puce est un lien : il bascule vers l'entreprise adéquate et vous amène sur la page correspondant au signal.

| Puce | Signification | Lien |
|---|---|---|
| Période TVA avec échéance | Combien de jours avant la déclaration, ou de jours de retard | `/belastingen/btw` |
| Factures en retard | Factures qui n'ont pas été payées à temps | `/invoices` |
| Reçus manquants | Dépenses sans justificatif | `/expenses` |
| Brouillons | Factures encore en brouillon | `/invoices` |
| TVA déclarée | La déclaration précédente a été déposée | `/belastingen/btw` |
| Période d'essai en cours | L'entreprise est encore en période d'essai Office | Aucun, simple mention |
| Désactivée | L'entreprise est désactivée ; vous pouvez toujours consulter et exporter | Aucun, simple mention |

Vos propres entreprises utilisent les mêmes indicateurs que le tableau de bord de chaque entreprise, donc les chiffres ne peuvent pas être contradictoires.

## Positions inter-entreprises (Onderling)

Si vos propres entreprises se facturent entre elles, chaque espace de travail ne voit normalement que sa propre moitié. La page Entreprises affiche la position nette entre chaque paire de vos propres entreprises, de sorte que le compte courant que vous teniez auparavant sur papier est visible dans l'application.

Le bloc n'apparaît que si au moins deux de vos propres entreprises ont effectivement des factures ouvertes l'une envers l'autre, et reste donc caché pour tous les autres. Il se situe sous la vue combinée de vos entreprises, car il décrit une relation entre vos entreprises et non une propriété d'une seule.

- Les liens se créent automatiquement quand le numéro de TVA d'un client correspond à l'un de vos autres espaces de travail. Cette correspondance ne regarde que vos propres entreprises, donc un client d'une autre entreprise n'est jamais atteint.
- Si la correspondance automatique est incorrecte, ou si aucun numéro de TVA n'est disponible, vous pouvez lier ou délier un client à la main depuis la page client. Un lien manuel prime toujours sur le lien automatique.
- La position est le solde net des factures ouvertes entre les deux entreprises, déduit des paiements enregistrés. Un chiffre positif signifie qu'une entreprise doit de l'argent à l'autre.
- Chaque paire est formulée comme une phrase du côté qui a encore droit à l'argent, par exemple "[créancier] a [montant] à recevoir de [débiteur]". Si la balance va dans l'autre sens, la phrase inverse créancier et débiteur au lieu d'afficher le montant en négatif.
- La ligne indique aussi de combien de factures ouvertes le montant est composé.
- Quand plus d'une paire a un solde, la carte affiche en haut un total de toutes les positions inter-entreprises ouvertes.

## Espace de travail de cabinet : clients

Si vous êtes comptable et gérez des administrations clientes, **Aujourd'hui** montre quels clients ont besoin de quelque chose maintenant, et **Clients** (`/werkruimtes/klanten`) est la liste complète à traiter, avec des filtres comme ce qui est en retard, qui vous attend et ce qui vous est attribué :

- Un titre indique combien de vos clients ont besoin de quelque chose aujourd'hui.
- Une bande de chiffres montre le nombre total de clients, les échéances cette semaine, les clients nécessitant une attention et les invitations ouvertes.
- Les lignes sont triées par urgence, de sorte que les administrations nécessitant une action aujourd'hui apparaissent en premier.
- Un champ de recherche est toujours visible, pour que vous puissiez filtrer les administrations clientes sans attendre un seuil.
- Les invitations ouvertes sont affichées dans leur propre carte ; une personne invitée ne compte pas encore comme client actif.

Les puces fonctionnent comme dans l'espace de travail combiné, mais les lignes utilisent des signaux agrégés pour que le tableau puisse suivre une grande liste de clients. L'argent des clients n'est jamais additionné.

### Membres du cabinet comptable

Si vous travaillez dans un cabinet comptable, le cabinet a sa propre liste de membres sous **Collaborateurs** sur **Votre cabinet**. Les administrateurs invitent des collègues avec **Inviter un collègue** ; chaque membre reçoit un rôle (membre ou administrateur). Ajouter quelqu'un au cabinet ne lui donne pas accès à un client ; vous accordez cet accès client par client, et seulement si ce client l'autorise. La ligne de chaque collègue indique le nombre de clients auxquels il ou elle est associé, pour que vous sachiez qui travaille sur quoi.

### Travail client et demandes

Chaque ligne client affiche une puce de travail dès qu'une tâche est en attente. Ouvrez-la pour voir qui s'occupe actuellement du client et ce que vous avez demandé au client.

- **Je prends en charge** assigne le client à vous. **Je ne prends pas en charge** libère le travail pour qu'un collègue puisse le prendre. Le statut se met à jour en direct pour tout le cabinet, évitant ainsi que deux personnes ne commencent la même déclaration par mégarde.
- **Demander quelque chose à ce client** crée une tâche dans l'espace de travail du client, avec une notification. Choisissez le sujet (par exemple des justificatifs manquants), dites ce que vous demandez et ajoutez une précision ; le client la voit comme une tâche ordinaire. Dès qu'il la coche, la demande est résolue et la puce de travail disparaît. Il n'y a pas de statut manuel « en attente du client » à remettre à zéro ; il découle simplement d'une demande ouverte. Toutes les questions ouvertes de tous vos clients sont regroupées sur **Demandes**, la plus ancienne en premier.

## Ajouter votre propre entreprise

Ouvrez **Ajouter une entreprise** et donnez un nom à la nouvelle entreprise.

Plusieurs entreprises à vous font partie d'**Office** : une entreprise supplémentaire coûte 5,99 € par mois ou 59,90 € par an (HT) en plus d'Office, jusqu'à 10 entreprises à vous. Sur Desk, vous avez une entreprise. L'application affiche le coût supplémentaire avant la confirmation. Pendant votre propre période d'essai Office, vous ne payez rien pour l'entreprise supplémentaire ; ensuite, elle est ajoutée à votre abonnement au tarif affiché.

Si vous utilisez Office gratuitement dans le cadre d'un accord fixe, cet Office gratuit couvre une entreprise. Pour une deuxième entreprise, l'application propose un paiement séparé. Le prix est affiché à l'avance ; seule la deuxième entreprise est facturée via son propre abonnement. Une fois le paiement confirmé, vous pouvez nommer la deuxième entreprise.

## Copier les paramètres d'une autre entreprise

Lorsque vous ajoutez une entreprise, ou plus tard depuis le panneau **Gérer** d'une entreprise existante, vous pouvez reprendre la configuration d'une autre entreprise que vous possédez déjà. Cela vous évite de ressaisir votre identité visuelle, la mise en page des factures et vos valeurs par défaut.

Activez **Copier les paramètres d'une entreprise que vous avez déjà** et choisissez la source. Si vous n'avez qu'une seule autre entreprise, le choix apparaît comme un interrupteur avec son nom. Les groupes suivants peuvent être copiés :

- **Identité visuelle** (logo, couleurs et polices).
- **Factures et devis** (mise en page, délai de paiement, relances et vos propres textes d'e-mail).
- **TVA** (période de déclaration et taux par défaut).
- **Dépenses et reçus** (catégorie par défaut, indemnité kilométrique et vos propres catégories).
- **Modules** (les modules activés, plus la configuration de votre suivi du temps).
- **Adresse et contact** (adresse, téléphone, e-mail et site web).

Le numéro d'immatriculation, le numéro de TVA, le compte bancaire et la numérotation des factures ne sont jamais copiés : ceux-ci appartiennent à une seule entreprise.

## Gérer ou supprimer une entreprise

Ouvrez pour chaque entreprise le menu de ligne et choisissez **Gérer**. Un panneau latéral s'ouvre avec deux options.

### Désactiver une entreprise

Choisissez **Désactiver** quand vous arrêtez de travailler dans une entreprise mais devez conserver ses archives. L'administration reste lisible et vous pouvez toujours tout exporter, car vous devez conserver les livres pour la durée légale de conservation. Vous ne pouvez plus ajouter de factures, de dépenses ou de clients, et l'entreprise ne compte plus dans votre abonnement. Les envois automatiques s'arrêtent eux aussi : une entreprise désactivée n'envoie plus de factures automatiques ni de rappels aux clients. Dès que vous la réactivez, tout reprend immédiatement.

Le panneau indique avant confirmation de combien votre paiement mensuel ou annuel va diminuer.

Pour reprendre, ouvrez le même panneau et choisissez **Réactiver**.

### Supprimer une entreprise

Choisissez **Supprimer** uniquement pour une entreprise créée par erreur. L'espace de travail vérifie si des écritures existent ; dès qu'une facture, une dépense ou un client existe, ou que la comptabilité contient déjà quelque chose, comme des écritures ou une déclaration de TVA, la suppression est refusée et vous devez désactiver l'entreprise à la place. Cette vérification est côté serveur, de sorte que le message correspond toujours aux données réelles.

## Inviter un client

Les comptables peuvent inviter un client directement depuis cette page :

1. Cliquez sur **Inviter un client**.
2. Renseignez l'adresse e-mail, le nom de l'entreprise et, en option, le numéro de registre du commerce.
3. Cliquez sur **Envoyer l'invitation**.

Le client crée son propre compte et reste propriétaire de son administration. Vous obtenez l'accès dès que l'invitation est acceptée, et le client peut la révoquer à tout moment. Les invitations ouvertes peuvent être renvoyées ou révoquées. Le lien est valable 30 jours.

## La navigation suit votre rôle

La barre latérale de gauche masque désormais les éléments que votre rôle d'espace de travail actuel n'est pas autorisé à utiliser, de sorte que vous ne voyez plus de liens qui renverraient une erreur 403. Quand une partie de l'application est restreinte pour un rôle, son élément de menu disparaît automatiquement.

Dans un espace de travail client, la barre latérale est plus courte, car les parties qui appartiennent au client (boîte de réception, site web, abonnement, paramètres d'équipe, domaines et assistants IA) ne sont pas disponibles pour un comptable. Le sélecteur d'espace de travail et l'élément Espaces de travail restent toujours visibles, pour que vous puissiez toujours basculer entre les administrations.

## Permissions

- Les propriétaires d'espace de travail et les administrateurs d'équipe peuvent ajouter des entreprises et gérer les paramètres de l'espace de travail.
- Les comptables ne voient que les espaces de travail et les pages que leur client a autorisés.
- Les membres de l'équipe ne voient Espaces de travail que s'ils ont plus d'un espace de travail et que leur rôle le leur permet.

## Aperçu pour comptables

La page Aperçu, `/werkruimtes/inzicht`, compare les administrations clientes et montre la charge de travail par période. Elle se trouve dans le groupe Travail client, qui apparaît dès que vous gérez des administrations clientes.

La page traite délibérément de nombres et de jours, pas de montants :

- L'argent des clients n'est jamais additionné, car il ne vous appartient pas.
- Aucune "valeur de portefeuille" totale ou chiffre d'affaires par client n'apparaît.

### Comparaison des clients

Le premier tableau liste vos clients côte à côte :

| Colonne | Signification |
|---|---|
| Client | Nom de l'administration cliente. |
| TVA | Si la période TVA en cours est déclarée, combien de jours avant l'échéance, ou combien de jours de retard. |
| Clôturé par vous | Combien des dernières périodes de déclaration du client vous avez clôturées dans ce cabinet. |
| À recouvrer | Nombre de factures en retard. |
| Reçus | Nombre de justificatifs manquants. |
| Payé | Nombre de factures payées dans l'année sélectionnée. |
| Délai de paiement | Moyenne de jours de retard sur les factures payées, s'il y en a. |

Les lignes sont triées par urgence : les clients qui ont besoin d'une action aujourd'hui apparaissent en premier. Le badge TVA utilise la même logique d'urgence que le tableau de bord d'un espace de travail.

### Charge de travail par période

Le deuxième tableau montre la charge de travail sur tous vos clients, répartie par période :

| Colonne | Signification |
|---|---|
| Période | La période TVA ou "Autres tâches" pour le travail non lié à une période. |
| Clôturé | Administrations dont la période est clôturée. |
| En cours | Administrations avec un travail actif en cours. |
| Ouvert | Administrations avec une période ouverte qui n'a pas encore été touchée. |
| Rien encore | Administrations sans activité enregistrée pour cette période. |

Utilisez ce tableau pour repérer un empilement avant qu'il ne devienne un problème d'échéance. Les périodes sont indépendantes de l'année ; le tableau de comparaison ci-dessus filtre par année.

### Ce qui ne figure pas ici

Un **« Pourcentage de déclarations à temps »** n'est volontairement pas affiché. Dans MyCompanyDesk, « déclaré » signifie qu'une période a été clôturée ici. Un client qui déclare ailleurs n'aura jamais de période clôturée ici. Un pourcentage historique marquerait systématiquement ce client comme en retard. C'est une accusation fondée sur des données manquantes, pas une imprécision. Une telle mesure de qualité nécessite d'abord un signal explicite par administration indiquant que la déclaration se fait ici.

À la place, le tableau de comparaison inclut maintenant une colonne **Clôturé par vous**. Elle indique combien des dernières périodes du client ont été clôturées dans ce cabinet, sur la base des mêmes périodes clôturées. Un client qui déclare ailleurs affiche simplement 0, car rien n'a été clôturé ici. La colonne est délibérément neutre et ne devient jamais rouge, car elle décrit votre propre travail, pas le comportement du client.

## Voir aussi

- [Personnes ayant accès et votre comptable](/fr/settings/team) pour inviter des collègues et des comptables et définir les permissions de page
- [Rapports](/fr/features/reports) pour la vue des clients perdus et les autres rapports
- [Tableau de bord](/fr/features/dashboard) pour le briefing quotidien d'un espace de travail
