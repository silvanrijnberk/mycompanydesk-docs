---
title: Espaces de travail
last_verified: 2026-08-10
---

# Espaces de travail

La page Espaces de travail (`/werkruimtes`) est un lieu central pour tout ce que vous gerez. Elle remplace l'ancien portail comptable et s'adapte a votre role reel : un espace de travail, plusieurs de vos propres entreprises, ou des administrations clientes.

> **L'argent qui vous appartient et l'argent des clients ne sont jamais melanges.** Additionner vos propres entreprises a du sens, car l'argent vous appartient. Un total sur les administrations clientes serait denue de sens, donc la page les garde strictement separees.

## Ou la trouver

- Ouvrez le selecteur d'espace de travail dans la barre laterale et choisissez **Gerer les espaces de travail**.
- Le meme selecteur se trouve aussi dans l'en-tete du menu mobile, pour atteindre l'apercu depuis le meme endroit sur tous les ecrans.
- L'ancienne URL `/boekhouder` redirige ici.
- Le selecteur d'espace de travail affiche maintenant une ligne de synthese en haut. Vos propres entreprises et les administrations clientes sont regroupees separement, et un champ de recherche apparait des que vous avez plus de huit espaces de travail.
- Chaque ligne affiche la propre marque de l'espace de travail : son logo, ou une tuile coloree avec ses initiales. Vos propres entreprises portent leur couleur; les administrations clientes restent neutres. L'espace de travail dans lequel vous vous trouvez actuellement est mis en evidence.

Quand vous choisissez un espace de travail dans le selecteur, l'application bascule maintenant sans rechargement complet de la page. Elle efface l'etat de l'espace de travail precedent des stores Pinia et des caches de modules, annule les requetes en vol qui arriveraient apres le basculement, recharge l'enveloppe pour mettre a jour la navigation et les droits, puis vous redirige vers la page cible.

## La section Espaces de travail

La navigation de l'application regroupe maintenant toutes les pages d'espace de travail sous **Espaces de travail**. La page de synthese reste en place, et trois nouvelles pages l'accompagnent :

- **Agenda** (`/werkruimtes/agenda`) - toutes les echeances de tous vos espaces de travail, groupees par date.
- **Travail** (`/werkruimtes/werk`) - vos propres taches ouvertes plus les demandes clients ouvertes.
- **Cabinet** (`/werkruimtes/kantoor`) - le tableau de bord du cabinet pour les comptables, avec des pages dediees pour la facturation et l'export en masse.

### Indicateur de propriete

Chaque ligne d'espace de travail et chaque element des nouvelles pages porte un petit indicateur de propriete. Vos propres entreprises conservent la couleur de leur espace de travail; les administrations clientes restent neutres. Vous le voyez dans le selecteur d'espace de travail, dans l'agenda et dans la liste de travail, pour toujours savoir de quel cote de la frontiere propre/client se situe une ligne.

### Agenda (`/werkruimtes/agenda`)

L'agenda groupe toutes les echeances a venir de tous vos espaces de travail par date. Il regarde 30 jours en arriere et 90 jours en avant, de sorte qu'une echeance depassee de la semaine passee reste visible. Les echeances depassees apparaissent en premier. Chaque ligne montre l'espace de travail, le libelle de l'echeance et l'indicateur de propriete. Cliquez sur une ligne pour basculer dans cet espace de travail et ouvrir la page correspondante.

### Travail (`/werkruimtes/werk`)

La page Travail liste le travail ouvert en deux blocs : vos propres entreprises d'abord, puis les administrations clientes. Cela separe les deux types de travail, car vos propres taches et les elements que vous attendez d'un client demandent des actions differentes. Chaque ligne montre l'espace de travail, la tache et un badge d'echeance. Cliquez sur une ligne pour basculer dans l'espace de travail et ouvrir la page correspondante; pour une demande client, c'est la demande elle-meme qui s'ouvre.

### Pages du cabinet (`/werkruimtes/kantoor/*`)

Si vous dirigez un cabinet comptable, la section Cabinet contient trois pages au niveau du cabinet :

- **Tableau de bord du cabinet** (`/werkruimtes/kantoor`) - membres du cabinet, invitations clientes en attente, lien de partage partenaire et statistiques, ainsi que l'attribution eventuelle de Pro gratuit.
- **Facturation** (`/werkruimtes/kantoor/facturatie`) - proposez de prendre en charge l'abonnement d'une administration cliente. Le client doit accepter avant que quoi que ce soit soit facture; le prix par administration prise en charge est affiche avant confirmation.
- **Export** (`/werkruimtes/kantoor/export`) - exportez plusieurs administrations clientes a la fois. Choisissez l'annee, la periode et le format d'export, selectionnez les administrations, et l'application telecharge une archive par client. Les exports echoues restent a l'ecran pour que vous voyiez ce qui n'a pas ete termine.

## Etats de chargement et erreurs

Quand vous ouvrez une page du cadre Espaces de travail, l'application attend d'abord que les donnees de coquille (liste des espaces, jeton, permissions) soient pretes, puis elle recupere les donnees de la page. Cela empeche une navigation a froid d'afficher un etat vide "rien a faire" pendant que la requete est encore en cours.

Si la recuperation echoue, la page affiche un etat d'erreur explicite avec un bouton **Reessayer** au lieu de faire comme s'il n'y avait rien a afficher. Le selecteur d'espace dans le rail reste utilisable, vous pouvez donc passer a un autre espace sans attendre que la page defectueuse se remette. Sur la page de facturation, la liste des clients et les montants de facturation se chargent separement : si les montants echouent, la liste des clients reste disponible et la colonne de prix reste vide plutot que d'afficher un faux zero.

## Si vous avez un seul espace de travail

Vous obtenez trois entrees au lieu d'une page vide :

- **Ajouter une entreprise** pour une holding, une deuxieme societe ou une activite annexe. Chaque entreprise obtient sa propre administration avec sa propre TVA, factures et comptabilite.
- **Inviter un comptable** si vous travaillez avec un comptable externe.
- **Programme partenaire** si vous etes vous-meme comptable et souhaitez gerer plusieurs administrations clientes en un seul lieu.

## Espace de travail combine : vos propres entreprises

Si vous avez plus d'une entreprise, la page s'ouvre sur une vue combinee :

- Une phrase indique ce que vos entreprises ont realise ensemble cette annee en chiffre d'affaires, et si cela donne un benefice ou une perte.
- Une bande montre le chiffre d'affaires, le resultat, les creances et la TVA de cote.
- Une barre de part montre la repartition du chiffre d'affaires par entreprise.
- En dessous de la bande se trouve une ligne par entreprise. L'ordre est fixe (entreprise principale d'abord, puis date de creation), pour que vous sachiez toujours ou chercher.

### Signaux dans chaque ligne

Chaque ligne d'entreprise affiche des puces pour les elements qui demandent attention. Chaque puce est un lien : il bascule vers l'entreprise adequate et vous amene sur la page correspondant au signal.

| Puce | Signification | Lien |
|---|---|---|
| Periode TVA avec echeance | Combien de jours avant la declaration, ou de jours de retard | `/belastingen/btw` |
| Factures en retard | Factures qui n'ont pas ete payees a temps | `/facturen` |
| Recus manquants | Depenses sans justificatif | `/uitgaven` |
| Brouillons | Factures encore en brouillon | `/facturen` |
| TVA declaree | La declaration precedente a ete deposee | `/belastingen/btw` |
| Periode d'essai en cours | L'entreprise est encore en periode d'essai Office | `/settings/billing` |
| Desactivee | L'entreprise est desactivee ; vous pouvez toujours consulter et exporter | `/werkruimtes` |

Vos propres entreprises utilisent les memes indicateurs que le tableau de bord de chaque entreprise, donc les chiffres ne peuvent pas etre contradictoires.

## Positions inter-entreprises (Onderling)

Si vos propres entreprises se facturent entre elles, chaque espace de travail ne voit normalement que sa propre moitie. La page Espaces de travail affiche maintenant la position nette entre chaque paire de vos propres entreprises, de sorte que le compte courant que vous teniez auparavant sur papier est visible dans l'application.

Le bloc n'apparait que si au moins deux de vos propres entreprises ont effectivement des factures ouvertes l'une envers l'autre, et reste donc cache pour tous les autres. Il se situe entre l'apercu combine de vos entreprises et le bureau clients, car il decrit une relation entre vos entreprises et non une propriete d'une seule.

- Les liens se creent automatiquement quand le numero de TVA d'un client correspond a l'un de vos autres espaces de travail. Cette correspondance ne regarde que vos propres entreprises, donc un client d'une autre entreprise n'est jamais atteint.
- Si la correspondance automatique est incorrecte, ou si aucun numero de TVA n'est disponible, vous pouvez lier ou delier un client a la main depuis la page client. Un lien manuel prime toujours sur le lien automatique.
- La position est le solde net des factures ouvertes entre les deux entreprises, deduit des paiements enregistres. Un chiffre positif signifie qu'une entreprise doit de l'argent a l'autre.
- Chaque paire est formulee comme une phrase du cote qui a encore droit a l'argent, par exemple "[creancier] a [montant] a recevoir de [debiteur]". Si la balance va dans l'autre sens, la phrase inverse creancier et debiteur au lieu d'afficher le montant en negatif.
- La ligne indique aussi de combien de factures ouvertes le montant est compose.
- Quand plus d'une paire a un solde, la carte affiche en haut un total de toutes les positions inter-entreprises ouvertes.

## Espace de travail de cabinet : clients

Si vous etes comptable et gerez des administrations clientes, la page devient un tableau de triage :

- Un titre indique combien de vos clients ont besoin de quelque chose aujourd'hui.
- Une bande de chiffres montre le nombre total de clients, les echeances cette semaine, les clients necessitant une attention et les invitations ouvertes.
- Les lignes sont triees par urgence, de sorte que les administrations necessitant une action aujourd'hui apparaissent en premier.
- Un champ de recherche est toujours visible, pour que vous puissiez filtrer les administrations clientes sans attendre un seuil.
- Les invitations ouvertes sont affichees dans leur propre carte ; une personne invitee ne compte pas encore comme client actif.

Les puces fonctionnent comme dans l'espace de travail combine, mais les lignes utilisent des signaux agreges pour que le tableau puisse suivre une grande liste de clients. L'argent des clients n'est jamais additionne.

### Membres du cabinet comptable

Si vous travaillez dans un cabinet comptable, le cabinet a sa propre liste de membres. Les administrateurs peuvent inviter des collegues via **Gerer les membres du cabinet** ; chaque membre recoit un role (membre ou administrateur). Ajouter quelqu'un au cabinet ne lui donne pas automatiquement acces a un client; vous accordez toujours l'acces client par client depuis la page Espaces de travail. La ligne de chaque collegue indique le nombre de clients auxquels il ou elle est associe, pour que vous sachiez qui travaille sur quoi.

### Travail client et demandes

Chaque ligne client affiche une puce de travail des qu'une tache est en attente. Ouvrez-la pour voir qui s'occupe actuellement du client et ce que vous avez demande au client.

- **Je prends en charge** assigne le client a vous. **Je ne prends pas en charge** libere le travail pour qu'un collegue puisse le prendre. Le statut se met a jour en direct pour tout le cabinet, evitant ainsi que deux personnes ne commencent la meme declaration par megarde.
- **Demander au client** cree une tache dans l'espace de travail du client. Choisissez un type de demande (par exemple pieces manquantes), ajoutez un titre et une note, et le client la voit comme une to-do normale. Des que le client coche la tache, la demande est resolue et la puce de travail disparait. Il n'y a pas d'etat manuel "en attente du client" a reinitialiser; il resulte simplement de la presence d'une demande ouverte.

## Ajouter votre propre entreprise

Ouvrez **Ajouter une entreprise** et donnez un nom a la nouvelle entreprise.

Si vous etes sur un plan payant (Starter ou Pro), l'application affiche le cout supplementaire avant la confirmation. Pendant votre propre periode d'essai Office, vous ne payez rien pour l'entreprise supplementaire; apres l'essai, elle est ajoutee a votre abonnement au tarif affiche.

Si votre espace de travail dispose d'un Office gratuit dans le cadre d'une disposition telle qu'un plan comped ou founding member, votre premiere entreprise reste gratuite et l'application propose maintenant un paiement separe pour une deuxieme entreprise. Le prix est affiche a l'avance; seule la deuxieme entreprise est facturee via un abonnement add-on dedie. Une fois le paiement confirme, vous pouvez nommer la deuxieme entreprise.

## Copier les parametres d'une autre entreprise

Lorsque vous ajoutez une entreprise, ou plus tard depuis le panneau **Gerer** d'une entreprise existante, vous pouvez reprendre la configuration d'une autre entreprise que vous possedez deja. Cela vous evite de ressaisir votre identite visuelle, la mise en page des factures et vos valeurs par defaut.

Activez **Copier les parametres d'une entreprise que vous avez deja** et choisissez la source. Si vous n'avez qu'une seule autre entreprise, le choix apparait comme un interrupteur avec son nom. Les groupes suivants peuvent etre copies:

- **Identite visuelle** (logo, couleurs et polices).
- **Factures et devis** (mise en page, delai de paiement, relances et vos propres textes d'e-mail).
- **TVA** (periode de declaration et taux par defaut).
- **Depenses et recus** (categorie par defaut, indemnite kilometrique et vos propres categories).
- **Fonctionnalites** (les fonctionnalites activees, plus la configuration de votre suivi du temps).
- **Adresse et contact** (adresse, telephone, e-mail et site web).

Le numero d'immatriculation, le numero de TVA, le compte bancaire et la numerotation des factures ne sont jamais copies : ceux-ci appartiennent a une seule entreprise.

## Gerer ou supprimer une entreprise

Ouvrez pour chaque entreprise le menu de ligne et choisissez **Gerer**. Un panneau lateral s'ouvre avec deux options.

### Desactiver une entreprise

Choisissez **Desactiver** quand vous arretez de travailler dans une entreprise mais devez conserver ses archives. L'administration reste lisible et vous pouvez toujours tout exporter, car vous devez conserver les livres pour la duree legale de conservation. Vous ne pouvez plus ajouter de factures, de depenses ou de clients, et l'entreprise ne compte plus dans votre abonnement.

Le panneau indique avant confirmation de combien votre paiement mensuel ou annuel va diminuer.

Pour reprendre, ouvrez le meme panneau et choisissez **Reactiver**.

### Supprimer une entreprise

Choisissez **Supprimer** uniquement pour une entreprise creee par erreur. L'espace de travail verifie si des ecritures existent ; des qu'une facture, une depense ou un client existe, la suppression est refusee et vous devez desactiver l'entreprise a la place. Cette verification est cote serveur, de sorte que le message correspond toujours aux donnees reelles.

## Inviter un client

Les comptables peuvent inviter un client directement depuis cette page :

1. Cliquez sur **Inviter un client**.
2. Renseignez l'adresse e-mail, le nom de l'entreprise et, en option, le numero de registre du commerce.
3. Cliquez sur **Envoyer l'invitation**.

Le client cree son propre compte et reste proprietaire de son administration. Vous obtenez l'acces des que l'invitation est acceptee, et le client peut la revoquer a tout moment. Les invitations ouvertes peuvent etre renvoyees ou revoquees. Le lien est valable 30 jours.

## La navigation suit votre role

La barre laterale de gauche masque desormais les elements que votre role d'espace de travail actuel n'est pas autorise a utiliser, de sorte que vous ne voyez plus de liens qui renverraient une erreur 403. L'API pilote cela via une liste de refus : si un nouveau point de terminaison est restreint pour un role, son element de navigation se cache automatiquement.

Dans un espace de travail client, la barre laterale est plus courte, car les parties qui appartiennent au client (boite de reception, site web, abonnement, parametres d'equipe, domaines et assistants IA) ne sont pas disponibles pour un comptable. Le selecteur d'espace de travail et l'element Espaces de travail restent toujours visibles, pour que vous puissiez toujours basculer entre les administrations.

## Permissions

- Les proprietaires d'espace de travail et les administrateurs d'equipe peuvent ajouter des entreprises et gerer les parametres de l'espace de travail.
- Les comptables ne voient que les espaces de travail et les pages que leur client a autorises.
- Les membres de l'equipe ne voient Espaces de travail que s'ils ont plus d'un espace de travail et que leur role le leur permet.

## Apercu pour comptables

La page Apercu, `/werkruimtes/inzicht`, compare les administrations clientes et montre la charge de travail par periode. Elle n'est visible que dans l'espace de travail de cabinet et seulement si vous gerez plus d'une administration cliente.

La page traite deliberement de nombres et de jours, pas de montants :

- L'argent des clients n'est jamais additionne, car il ne vous appartient pas.
- Aucune "valeur de portefeuille" totale ou chiffre d'affaires par client n'apparait.

### Comparaison des clients

Le premier tableau liste vos clients cote a cote :

| Colonne | Signification |
|---|---|
| Client | Nom de l'administration cliente. |
| TVA | Si la periode TVA en cours est declaree, combien de jours avant l'echeance, ou combien de jours de retard. |
| Cloture par vous | Combien des dernieres periodes de declaration du client vous avez cloturees dans ce cabinet. |
| A recouvrer | Nombre de factures en retard. |
| Recus | Nombre de justificatifs manquants. |
| Paye | Nombre de factures payees dans l'annee selectionnee. |
| Delai de paiement | Moyenne de jours de retard sur les factures payees, s'il y en a. |

Les lignes sont triees par urgence : les clients qui ont besoin d'une action aujourd'hui apparaissent en premier. Le badge TVA utilise la meme logique d'urgence que le tableau de bord d'un espace de travail.

### Charge de travail par periode

Le deuxieme tableau montre la charge de travail sur tous vos clients, repartie par periode :

| Colonne | Signification |
|---|---|
| Periode | La periode TVA ou "Autres taches" pour le travail non lie a une periode. |
| Cloture | Administrations dont la periode est cloturee. |
| En cours | Administrations avec un travail actif en cours. |
| Ouvert | Administrations avec une periode ouverte qui n'a pas encore ete touchee. |
| Rien encore | Administrations sans activite enregistree pour cette periode. |

Utilisez ce tableau pour repere un empilement avant qu'il ne devienne un probleme d'echeance. Les periodes sont independantes de l'annee ; le tableau de comparaison ci-dessus filtre par annee.

### Ce qui ne figure pas ici

**"Pourcentage de declarations a temps"** figurait dans le plan initial, mais n'est pas affiche. Dans MyCompanyDesk, "declare" signifie qu'une periode est fermee dans `period_locks`. Un client qui declare ailleurs n'aura jamais cette ligne. Un pourcentage historique marquerait systematiquement ce client comme en retard. C'est une accusation fondee sur des donnees manquantes, pas une imprecision. Une telle mesure de qualite necessite d'abord un signal explicite par administration indiquant que la declaration se fait ici.

A la place, le tableau de comparaison inclut maintenant une colonne **Cloture par vous**. Elle indique combien des dernieres periodes du client ont ete cloturees dans ce cabinet, en utilisant les memes donnees `period_locks`. Un client qui declare ailleurs affiche simplement 0, car rien n'a ete cloture ici. La colonne est deliberement neutre et ne devient jamais rouge, car elle decrit votre propre travail, pas le comportement du client.

## Voir aussi

- [Acces et comptable](/fr/settings/team) pour inviter des collegues et des comptables et definir les permissions de page
- [Rapports](/fr/features/reports) pour la vue des clients perdus et les autres rapports
- [Tableau de bord](/fr/features/dashboard) pour le briefing quotidien d'un espace de travail
