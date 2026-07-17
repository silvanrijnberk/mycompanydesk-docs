---
title: Contrats
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

## Statuts des contrats

| Statut | Description |
|---|---|
| **Actif** | Actuellement en vigueur, genere des factures |
| **Inactif** | En pause -- aucune facture generee |

## Facturation automatique

Les contrats actifs avec un calendrier de recurrence generent automatiquement des factures a chaque periode de facturation. Le systeme :

1. Cree un brouillon de facture base sur les termes du contrat
2. Applique le client, le montant et la description corrects
3. Suit vos parametres de numerotation des factures

Vous pouvez examiner et envoyer les factures generees manuellement, ou configurer l'envoi automatique.

## Encaissement automatique

Pour les contrats récurrents, vous pouvez encaisser automatiquement le montant facturé à partir du mandat de paiement enregistré du client, au lieu d'envoyer un lien de paiement par e-mail. Cela nécessite un prestataire de paiement connecté (Mollie ou Stripe) et un mandat valide du client.

### Configurer l'encaissement automatique

Sur la page de détail du contrat, ouvrez la carte **Encaissement automatique** et configurez le mandat. Une fois le mandat valide, activez le bouton bascule. Le système prélève alors chaque facture générée automatiquement.

### Encaissement échoué

Si un prélèvement échoue ou que le mandat n'est plus valide, vous recevez une notification « Encaissement automatique échoué ». La notification renvoie directement vers le contrat pour que vous puissiez reconnecter le mandat ou relancer le client.

## Liaison aux actifs

Les contrats peuvent etre lies aux [objets/actifs](/fr/features/objects) pour la gestion locative :

- Associez un contrat a une propriete, un vehicule ou un equipement
- Suivez quels actifs sont actuellement loues et a qui
- Consultez l'historique des contrats par actif

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
