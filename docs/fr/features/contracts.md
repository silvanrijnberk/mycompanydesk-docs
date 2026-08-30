---
title: Contrats
description: "Gérez les contrats de service récurrents et les baux, et laissez-les générer des factures selon un calendrier. À activer dans Entreprise, Fonctionnalités."
---

# Contrats

Gerez les accords de services recurrents et les contrats de location avec des calendriers de facturation automatiques.

## Vue d'ensemble

Les contrats representent des accords en cours avec des clients -- tels que des contrats de services mensuels, des baux de location ou des plans de maintenance. Ils peuvent generer automatiquement des factures selon un calendrier defini.

::: info
Le module contrats est optionnel. Activez-le dans **Entreprise > Fonctionnalites** si vous ne le voyez pas dans la navigation.
:::

## Creer un contrat

1. Allez dans **Contrats > Nouveau contrat**
2. Remplissez :
   - **Nom** -- Un titre descriptif (par ex., "Service de nettoyage mensuel")
   - **Client** -- Le client partie au contrat
   - **Montant** -- Le montant de facturation recurrent
   - **Recurrence** -- Frequence de facturation (hebdomadaire, mensuelle, trimestrielle, annuelle)
   - **Date de debut** -- Quand le contrat commence
   - **Date de fin** -- Date de fin optionnelle
   - **Description** -- Conditions et details
3. Cliquez sur **Enregistrer**

::: tip Plus d'options
Dans le formulaire de nouveau contrat, les details optionnels restent ranges : la section **Plus d'options** devoile des champs supplementaires pour le montant du supplement de service, le taux de TVA et la description du service. Ils ne sont pas requis pour creer le contrat, mais vous pouvez les deployer quand vous en avez besoin.
:::

## Base de tarification

Chaque contrat a une **base de tarification** qui détermine comment le montant a été convenu :

- **Montant fixe** -- le même montant chaque période, par exemple un loyer ou un forfait mensuel fixe.
- **Taux horaire** -- vous facturez les heures que vous saisissez sur les projets liés à ce contrat.
- **Taux journalier** -- vous facturez les jours que vous travaillez sur les projets liés à ce contrat.
- **Prix forfaitaire de projet** -- un montant total convenu pour toute la mission, facturé une seule fois.

Pour les contrats à taux horaire et journalier, la page de détail du contrat affiche une fiche **Travail sous ce contrat** avec les totaux convenus, facturés et saisis, plus les projets liés. Un jour compte comme 8 heures.

Un prix forfaitaire de projet ne se répète pas : le contrat génère une facture, puis s'arrête.

## Statuts des contrats

| Statut | Description |
|---|---|
| **Actif** | Actuellement en vigueur, genere des factures |
| **Inactif** | En pause -- aucune facture generee |

## Dates de fin

Vous pouvez indiquer une **Date de fin** lors de la creation ou de la modification d'un contrat. Laissez le champ vide pour un contrat a duree indeterminee.

Lorsqu'une date de fin est definie :

- La page de detail du contrat affiche la date de fin, ou **Duree indeterminee** si aucune date n'est definie.
- Aucune facture n'est generee pour les periodes apres la date de fin.
- La liste des contrats affiche le label **Expire bientot** lorsque la date de fin est dans les 30 jours.

## Facturation automatique

Les contrats actifs avec un calendrier de recurrence generent automatiquement des factures a chaque periode de facturation. Le systeme :

1. Cree un brouillon de facture base sur les termes du contrat
2. Applique le client, le montant et la description corrects
3. Utilise la meme numerotation automatique des factures

Les factures generees ne sont marquees comme factures de location que lorsque le contrat est un contrat de location. Les contrats de services et de collaboration produisent des factures ordinaires. Cela influe sur le badge affiche sur la facture, le modele d'e-mail utilise a l'envoi et sur l'attribution du chiffre d'affaires a un objet lie.

Vous pouvez examiner et envoyer les factures generees manuellement, ou configurer l'envoi automatique. Lorsqu'un contrat est base sur un taux horaire, un taux journalier ou un prix forfaitaire de projet, vous recevez aussi une alerte quand le budget du contrat est depasse ou quand des heures saisies n'ont pas pu etre tarifees car aucun taux n'etait defini.

### Notifications d'envoi et de facturation automatique

Si une facture generee ne peut pas etre envoyee par e-mail au client, l'application cree une notification **Facture non envoyee**. Cela se produit par exemple lorsque le client n'a pas d'adresse e-mail, votre envoi d'e-mails n'est pas configure, l'adresse est bloquee apres un rebond ou un signalement de spam, ou que l'envoi echoue pour une autre raison. La notification ouvre la facture pour que vous puissiez resoudre le probleme et renvoyer.

Si votre forfait n'inclut plus la facturation automatique des contrats, l'application cree une notification **Facturation automatique suspendue** des que des factures de contrat sont pretes mais ne partent pas. La notification indique combien de factures de contrat attendent et depuis quand, et vous renvoie vers la page d'abonnement pour changer de forfait.

## Période de facturation

Les contrats facturent une période par rapport à la date de facture :

- **Actuelle** — la période qui contient la date de facture (par défaut)
- **Précédente** — la période avant la date de facture
- **Suivante** — la période après la date de facture ; ancienne valeur conservée pour les anciens contrats de location facturés d'avance

Le formulaire ne permet aujourd'hui de choisir qu'entre **actuelle** et **précédente**. Si vous avez un ancien contrat réglé sur **suivante**, l'API conserve cette valeur lors de l'enregistrement pour que le contrat reste modifiable.

## Encaissement automatique

Pour les contrats récurrents, vous pouvez encaisser automatiquement le montant facturé à partir du mandat de paiement enregistré du client, au lieu d'envoyer un lien de paiement par e-mail. Cela nécessite un prestataire de paiement connecté (Mollie ou Stripe) et un mandat valide du client.

### Configurer l'encaissement automatique

Sur la page de détail du contrat, ouvrez la carte **Encaissement automatique** et configurez le mandat. Une fois le mandat valide, activez le bouton bascule. Le système prélève alors chaque facture générée automatiquement.

### Encaissement échoué

Si un prélèvement échoue ou que le mandat n'est plus valide, vous recevez une notification « Encaissement automatique échoué ». La notification renvoie directement vers le contrat pour que vous puissiez reconnecter le mandat ou relancer le client.

## Révision des prix

Les contrats récurrents peuvent être ajustés pour tenir compte de l'inflation ou de hausses annuelles convenues. Ouvrez la liste des contrats et cliquez sur **Augmenter les prix** pour voir ce qu'une augmentation en pourcentage ferait pour tous les contrats éligibles. Un contrat n'est éligible que si au moins un an s'est écoulé depuis son début ou depuis sa dernière augmentation.

L'aperçu montre, par contrat :

- Le tarif ou le montant actuel par période
- Le tarif ou le montant après augmentation
- La date de la dernière ajustement du contrat

Vous appliquez l'augmentation contrat par contrat, jamais en bloc, afin de pouvoir passer les clients avec qui vous n'avez pas encore discuté. Une fois appliquée, le système met à jour les conditions du contrat enregistrées et les futures factures reflètent le nouveau montant.

::: tip D'abord s'entendre
Discutez de toute augmentation de prix avec votre client avant de l'appliquer. L'aperçu ne change rien tant que vous n'avez pas cliqué sur **Appliquer** pour un contrat spécifique.
:::

## Liaison aux actifs

Les contrats peuvent etre lies aux [objets/actifs](/fr/features/objects) pour la gestion locative :

- Associez un contrat a une propriete, un vehicule ou un equipement
- Suivez quels actifs sont actuellement loues et a qui
- Consultez l'historique des contrats par actif

## Lier à des projets

Les contrats peuvent aussi être liés à des [projets](/fr/features/projects). Lorsque vous créez ou modifiez un projet, choisissez le contrat dans le champ **Contrat**. Les heures saisies sur ce projet sont alors incluses sur la facture du contrat. Les contrats archivés restent visibles dans le menu déroulant, signalés par **(archivé)** après le nom, pour que vous puissiez conserver un lien existant ou choisir une ancienne convention si nécessaire.

Cela est utile pour les accords de type retainer ou régie : le contrat définit la base de tarification, et les projets liés fournissent les heures.

Vous pouvez délier un projet à tout moment ; les heures déjà facturées restent sur leur facture.

## Indicateurs

La page de liste des contrats affiche des indicateurs de synthese :

- Total des contrats actifs
- Valeur totale des contrats
- Contrats par type de recurrence

## Actions groupees

- **Changer le statut** -- Activez ou desactivez plusieurs contrats
- **Archiver** -- Deplacez vers les archives
- **Restaurer** -- Recuperez les contrats archives

## Signature electronique

Les contrats prennent en charge la signature electronique. Vous pouvez ajouter des parties via le formulaire de contrat, et chaque partie recoit un lien de signature par e-mail.

Lorsqu'un contrat est signe, la page de detail du contrat affiche une carte de signature avec :

- Le statut de chaque partie (invitee, consultee, signee ou expiree)
- Un bouton **Voir** qui ouvre un apercu en ligne du document signe
- Un bouton de telechargement pour enregistrer le PDF

La page d'apercu comprend une barre d'outils avec des actions d'impression et de telechargement, et affiche le contrat signe directement dans le navigateur. Le PDF signe et le PDF de revision contiennent tous les deux le texte integral du contrat, de sorte que chaque copie telechargee soit autonome.

### Image de marque de l'expediteur sur la page de signature

Lorsqu'un destinataire ouvre un contrat pour le signer, la page de signature reflete l'image de marque de l'expediteur :

- Le logo de l'expediteur apparait en haut de la page
- La page utilise la couleur d'accent de la marque de l'expediteur
- Le texte et les boutons s'adaptent automatiquement pour rester lisibles sur cette couleur

Cela offre aux signataires une experience qui semble provenir de l'entreprise qui les a invites, et non d'une page generique tierce.

### Signature sur la liste des contrats

La liste des contrats inclut une colonne **Signature** affichant le statut de signature pour chaque contrat avec signature electronique. Les statuts apparaissent sous forme de badges colores : brouillon (neutre), envoye (avertissement), partiellement signe (info) et actif (succes).

Un filtre de signature au-dessus de la liste vous permet de filtrer par statut de signature, ou d'afficher les contrats sans signature electronique (« Sans signature electronique »).

::: info Contrats existants
Les contrats crees avant l'introduction de la signature electronique n'affichent pas de carte de signature sur la page de detail. Le systeme detecte les contrats existants en verifiant si le contrat comporte des parties signataires, un modele ou un contenu de signature. Seuls les contrats crees ou mis a jour apres le deploiement de la signature electronique incluent la carte de signature.

Les contrats existants affichent un tiret dans la colonne Signature et apparaissent sous le filtre « Sans signature electronique ».
:::

### Verification SMS

Les liens de signature peuvent exiger une verification par SMS avant qu'une partie puisse consulter et signer le document. Lorsque cette option est activee, le signataire doit saisir un numero de mobile et confirmer un code a 6 chiffres envoye par SMS.

- **Envoyer le code** — Apres avoir saisi son numero de mobile, le signataire appuie sur le bouton et recoit un code
- **Verifier le code** — Le signataire saisit le code a 6 chiffres pour prouver l'acces au numero
- **Badge Verifie** — Une fois confirme, un badge « Verifie » apparait avec les quatre derniers chiffres du numero

Si un code incorrect est saisi, le signataire peut en demander un nouveau. La verification SMS est configuree par session de signature et s'applique a toutes les parties.

## Versions de modele

Les modeles de contrat prennent en charge le versionnage pour suivre les modifications dans le temps. Chaque version est un instantane fige du contenu du modele a un moment donne, ce qui vous permet de faire evoluer vos modeles sans affecter les contrats deja crees.

### Publier une version

1. Allez dans **Contrats > Modeles**
2. Trouvez votre modele et cliquez sur le bouton **Versions**
3. Dans la fenetre des versions, saisissez :
   - **Etiquette** -- Un identifiant court pour la version (par ex. "v2"). Si vous laissez le champ vide, le systeme attribue automatiquement une etiquette sequentielle.
   - **Note de modification** -- Une breve description de ce qui a change dans cette version
4. Cliquez sur **Publier**

Le brouillon actuel est capture comme nouvelle version. Les contrats existants restent rattaches a la version avec laquelle ils ont ete crees, la publication ne reecrit donc jamais le texte historique des contrats.

### Consulter l'historique des versions

L'historique des versions de chaque modele affiche :

- L'etiquette de version (par ex. "v1", "v2")
- La note de modification et la date de publication
- Un badge **Actuelle** sur la derniere version publiee
- Un badge **Archivee** sur toutes les versions precedentes

### Comment les versions affectent les contrats

Lorsqu'un contrat est cree a partir d'un modele, il est fige sur la version qui etait actuelle a ce moment-la. Si vous publiez ulterieurement une nouvelle version du modele, les contrats existants continuent de s'afficher a partir de leur version figee. Vous pouvez donc reviser les modeles en toute securite sans modifier les contrats en cours.

## Conseils

- Utilisez les contrats conjointement avec les [factures recurrentes](/fr/features/recurring-invoices) pour differents scenarios de facturation
- Liez les contrats aux objets pour une gestion locative complete
- Definissez des dates de fin pour etre averti avant l'expiration des contrats
- Utilisez le filtre des contrats pour voir les actifs vs. les inactifs en un coup d'oeil
- Filtrez par statut de signature pour trouver les contrats qui doivent encore etre signes
- Ajoutez des parties signataires lors de la creation d'un contrat pour activer la signature electronique
