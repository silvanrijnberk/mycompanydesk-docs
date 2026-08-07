---
title: Espaces de travail
last_verified: 2026-08-08
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

## Voir aussi

- [Acces et comptable](/fr/settings/team) pour inviter des collegues et des comptables et definir les permissions de page
- [Rapports](/fr/features/reports) pour la vue des clients perdus et les autres rapports
- [Tableau de bord](/fr/features/dashboard) pour le briefing quotidien d'un espace de travail
