---
title: Clients
description: "Gérez votre base clients, avec tuiles de segments, recherche et filtres, et chaque facture, devis et projet rattaché à une fiche client."
---

# Clients

Gérez toute votre base de clients. Chaque facture, devis et projet est lié à une fiche client.

## Vue d'ensemble

La page des clients répertorie tous vos clients avec les informations clés en un coup d'œil. Utilisez la recherche et les filtres pour trouver rapidement un client. Un clic sur un client dans la liste ouvre la page de ce client.

## Segments dans la liste des clients

En haut de la page des clients, une bande de vignettes donne un aperçu rapide de votre portefeuille clients. Les chiffres sont indépendants des filtres de recherche et de date de la liste, de sorte qu'une vignette reflète toujours l'ensemble du portefeuille.

- **Clients avec des factures en retard** : combien de clients vous doivent de l'argent en ce moment. Cliquez sur la vignette pour ouvrir la page des factures en retard.
- **Devenus inactifs** : clients actifs qui ont déjà été facturés, mais qui n'ont reçu aucune facture ces derniers mois. Cliquez sur la vignette pour filtrer la liste sur ces clients. La fenêtre par défaut est de six mois ; la vignette indique la fenêtre utilisée par l'espace de travail (par exemple « aucune facture depuis 6 mois »).
- **Perspectives** : clients actifs qui n'ont jamais été facturés. Cliquez sur la vignette pour filtrer la liste sur ces prospects.
- **Total des clients** : le nombre fixe de clients actifs. Cliquez sur la vignette pour effacer les filtres de la liste.

Le filtre de statut au-dessus de la liste permet aussi de basculer entre Tous statuts, Actif, Perspectives, Devenus inactifs, Archives et Corbeille.

## Créer un client

1. Ouvrez **Clients** et cliquez sur **Créer**
2. Remplissez les informations du client :
   - **Nom** : nom de l'entreprise ou du particulier (obligatoire)
   - **E-mail** : adresse de contact pour l'envoi des factures
   - **Téléphone** : numéro de téléphone de contact
   - **Adresse** : rue, code postal, ville, pays
   - **Numéro de TVA** : numéro de TVA du client (pour le B2B)
   - **Numéro de client** : généré automatiquement ou personnalisé
3. Cliquez sur **Enregistrer**

::: tip
Vous pouvez aussi créer un client directement en créant une facture ou un devis, sans quitter la page.
:::

### Remplissage automatique KVK

Quand vous créez un client néerlandais, MyCompanyDesk peut remplir automatiquement les informations de l'entreprise à partir du registre KVK (Kamer van Koophandel, la chambre de commerce néerlandaise). Deux méthodes de recherche sont disponibles :

- **Recherche par nom** : commencez à taper le nom de l'entreprise dans le champ **Nom**. Une liste déroulante affiche les entrées KVK correspondantes avec la ville et le numéro KVK. Choisissez une entrée pour remplir automatiquement le nom et le numéro KVK.
- **Recherche par numéro** : saisissez un numéro KVK à 8 chiffres dans le champ **Chambre de commerce**. Quand vous quittez le champ, MyCompanyDesk recherche le numéro et remplit les champs vides (nom, adresse, code postal, ville, pays).

Quand la recherche aboutit, la mention **Vérifié via KVK** apparaît à côté du champ. Si le numéro KVK est introuvable, un message d'erreur s'affiche. Les deux recherches sont disponibles uniquement pour les clients néerlandais.

Si la recherche n'aboutit pas, saisissez simplement les données vous-même.

### Logos d'entreprise du registre KVK

Pour les clients néerlandais disposant d'un logo enregistré, MyCompanyDesk récupère le logo dans le registre KVK et l'affiche à côté du nom de l'entreprise dans la liste des clients, la fiche client et les suggestions de recherche KVK lorsque vous créez un client. Si aucun logo n'est disponible ou s'il est encore en cours de chargement, l'application affiche un monogramme pour éviter que la hauteur de ligne ne saute.

Le logo est uniquement destiné à l'affichage. Il ne remplace pas le logo de votre propre espace de travail sur les factures ou documents.

## Page du client

La page du client affiche :

- **Coordonnées** : toutes les informations enregistrées
- **Historique des factures** : chaque facture envoyée à ce client
- **Historique des dépenses** : les dépenses liées à ce client
- **Contrats** : contrats actifs et inactifs, avec le statut de signature et une icône d'aperçu PDF quand la signature électronique est activée
- **Documents** : les accords enregistrés pour ce client, comme les conditions générales, les accords de confidentialité et les accords de sous-traitance. Si le client a un contrat mais pas d'accord de sous-traitance, une indication apparaît avec un lien pour en rédiger un.
- **Projets** : projets actifs et terminés
- **Statistiques** : chiffre d'affaires total, solde en cours, délai de paiement moyen

### Accord de sous-traitance manquant

Quand un client a un contrat mais aucun accord de sous-traitance dans Documents, la carte Documents de la fiche client affiche une indication et un lien **Rédiger un accord de sous-traitance**. Cela signale une lacune de conformité là où vous êtes susceptible d'agir. L'indication n'apparaît que si le module Contrats est activé (Office) et que la carte serait sinon vide.

### Bannière d'état des e-mails

Une bannière d'avertissement apparaît en haut de la page du client quand l'adresse e-mail du client a récemment rebondi (définitivement non distribuable) ou déclenché une plainte pour spam. La bannière reste discrète quand l'adresse est en bon état.

- **Rebond** : une bannière rouge avec la date du dernier échec de livraison et le motif de refus du fournisseur de messagerie. Si aucun motif précis n'a été donné, une note générique s'affiche à la place.
- **Plainte** : une bannière jaune qui avertit que le client a marqué votre e-mail comme spam. Le message déconseille d'envoyer d'autres messages à cette adresse sans avoir pris contact au préalable.

Ces informations proviennent des événements du fournisseur et du statut de livraison des messages sortants, pour que vous repériez les problèmes avant d'envoyer la prochaine facture ou le prochain devis.

## Lier un client à l'une de vos propres entreprises

Si vous possédez plus d'une entreprise, une carte **Entreprise propre** peut apparaître sur la page du client. Elle permet d'indiquer que ce client est l'une de vos propres entreprises, pour que sa position soit prise en compte dans les positions entre vos entreprises sur la page Espaces de travail.

- La carte n'apparaît que si vous avez au moins deux entreprises propres et que le client n'appartient pas à l'espace de travail que vous consultez. Une entreprise ne peut pas être sa propre contrepartie.
- Choisissez l'une de vos entreprises dans la liste déroulante, ou choisissez **Aucune de mes propres entreprises** pour supprimer un lien.
- Le lien se crée automatiquement quand le numéro de TVA du client correspond à l'un de vos autres espaces de travail. La carte affiche alors une note pour que vous sachiez que cela s'est fait automatiquement et puissiez le corriger si c'est erroné.
- Un lien manuel prime toujours sur un lien automatique. Le lien automatique n'écrase jamais un lien que vous avez défini vous-même.

## Cartes à tampons

Une carte à tampons (aussi : carte de trajets ou forfait de cours) permet à votre client de payer à l'avance pour un nombre de fois. Vous la créez depuis un article de votre catalogue : activez-y **Carte à tampons**, puis renseignez le nom, le nombre de fois couvert et le prix à chaque fois, les services qu'elle couvre (laissez vide et elle vaut pour tout rendez-vous), sa durée de validité, et si le client reçoit un rappel quand il ne reste qu'un tampon. Un seul taux s'applique à toute la carte : des services à un autre taux ne partagent pas une carte, et tant que le régime des petites entreprises (KOR) ou l'exonération est actif, elle sort sans TVA.

La vente se fait depuis la fiche du client avec **Vendre une carte**, en un seul écran : la carte vient de votre catalogue avec son prix, modifiable pour ce client, vous indiquez s'il a déjà payé (espèces, Tikkie ou virement, rien n'est présélectionné), et MyCompanyDesk crée au même moment la facture définitive pour vos livres, la carte liée à cette ligne de facture. Dans l'autre sens, une facture créée normalement fait autant : finaliser une facture qui porte une ligne carte à tampons fait naître la carte avec elle.

Le client retrouve ses cartes dans le portail client et sur un lien de partage qui ne demande aucune connexion : ce qu'il reste sur la carte et l'historique de la vente et de chaque tampon. Le solde ou un rappel s'envoient à la main, par WhatsApp ou par e-mail, et le lien peut être révoqué puis remplacé. Un client qui veut cesser ? **Rembourser** rend les fois non utilisées via une note de crédit, ou **Arrêter** clôt la carte ; vos livres suivent d'eux-mêmes et une carte arrêtée ne se tamponne plus.

Le tamponnage se fait aussi là où le travail se fait. Terminez le rendez-vous d'un client porteur de carte, l'application propose **Tamponner 1** (le tampon passe le rendez-vous en Terminé) à côté d'**Absent**, avec l'annulation à portée de main sur le même écran. Dans une séance de groupe, cocher quelqu'un sous **Qui était là ?** tamponne aussitôt sa carte ; décocher remet le tampon. Qui avait déjà payé cette séance apparaît sur la liste avec la mention qu'aucun tampon n'est nécessaire. Le tableau de bord regroupe les cartes presque finies ou finies, le rappel à un clic.

## Actions

- **Modifier** : mettre à jour les informations du client
- **Créer une facture** : démarrer une nouvelle facture préremplie avec ce client
- **Créer un devis** : démarrer un nouveau devis pour ce client
- **Nouveau bon d'intervention** : démarrer un bon d'intervention pour ce client (si le module Bons d'intervention est activé)
- **Fusionner avec…** : fusionner un client en double avec celui-ci
- **Archiver** : déplacer vers les archives (restauration possible)

:::caution
L'archivage d'un client ayant une facture récurrente active ou des contrats en cours demande d'abord une confirmation. L'avertissement indique honnêtement ce que fait l'archivage : tant qu'un client est archivé, MyCompanyDesk ne crée plus de factures récurrentes et ne facture plus ses contrats, et les périodes sautées ne sont pas facturées ensuite. Mettez fin d'abord à la facture récurrente ou au contrat si cette facturation doit continuer.
:::

Un client au statut prospect (jamais facturé) ne propose pas l'action **Créer une facture**, pas même dans le menu des autres actions, et le serveur refuse de toute façon toute facture pour lui. La page du client affiche alors le bouton **Convertir en client** ; dès que son statut passe à actif, toutes les actions de facturation apparaissent.

- **Supprimer** : déplacer le client dans la corbeille

## Actions groupées

Sélectionnez plusieurs clients pour :

- **Ajouter aux favoris** : marquer des clients comme favoris
- **Archiver** : archiver des clients en une fois
- **Supprimer** : déplacer des clients dans la corbeille

Dans les archives, vous choisissez **Restaurer vers actif** ou **Mettre à la corbeille** ; dans la corbeille, **Restaurer vers archives** ou **Supprimer définitivement**.

## Importer des clients

Importez votre base clients existante depuis un fichier CSV :

1. Cliquez sur **Importer** sur la page des clients (ou ouvrez **Paramètres › Migration** et choisissez **Importer des clients**)
2. Vérifiez que **Clients** est choisi comme type de données
3. Téléversez votre fichier CSV
4. Faites correspondre les colonnes de votre CSV aux champs de MyCompanyDesk (nom, e-mail, adresse, etc.)
5. Vérifiez l'aperçu
6. Confirmez l'import

## Exporter des clients

Téléchargez votre liste de clients en fichier CSV sous **Paramètres › Télécharger les données** (disponible avec tous les abonnements).

## Clients partis

L'onglet **Partis** du rapport clients **Qui sont mes clients ?**, dans les [rapports](/fr/features/reports) (Office), liste les clients qui achetaient avant mais n'ont pas reçu de facture cette année. La vue affiche leur nombre, le montant total qu'ils avaient dépensé auparavant et la date de leur dernière facture, avec des liens pour appeler ou écrire directement à chaque client. Elle se trouve dans les rapports parce que réactiver d'anciens clients est un travail de campagne, pas un élément d'une liste triée par urgence.

La liste clients standard segmente aussi elle-même les clients inactifs ; l'onglet Partis ajoute le rappel de type campagne sans remplacer ce filtre.

## Conseils

- Gardez les adresses e-mail de vos clients à jour : elles servent à l'envoi des factures
- Utilisez la barre de recherche pour une recherche approximative instantanée sur tous les champs clients
- Marquez vos clients les plus importants comme favoris pour les retrouver vite
