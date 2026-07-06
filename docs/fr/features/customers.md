---
title: Clients
---

# Clients

Gérez votre base de données clients complète. Chaque facture, devis et projet renvoie à une fiche client.

## Vue d'ensemble

La page des clients liste tous vos clients avec les informations clés en un coup d'oeil. La liste est triée par nom, avec vos favoris épinglés en haut. La recherche trouve les clients par nom, numéro de client, adresse e-mail ou ville. Les onglets de statut basculent entre Tous les statuts, Actifs, Prospects, Archives et Corbeille, et un filtre de plage de dates affine encore la liste.

## Créer un client

1. Allez dans **Clients** et cliquez sur **Créer**
2. Remplissez les informations du client :
   - **Nom** : nom de l'entreprise ou du particulier (obligatoire)
   - **E-mail** : adresse de contact pour l'envoi des factures
   - **Téléphone** : numéro de téléphone de contact
   - **Adresse** : rue, code postal, ville, pays
   - **Numéro de TVA** : l'immatriculation TVA du client (pour le B2B)
   - **Numéro de client** : généré automatiquement ou personnalisé
3. Cliquez sur **Enregistrer**

::: tip
Les sélecteurs de client dans toute l'application (factures, devis, enregistrement du temps et plus) incluent un lien **Ajouter un nouveau client** qui ouvre la page de création, pour ajouter un client manquant en cours de route.
:::

### Remplissage automatique KVK

Lorsque vous créez un client néerlandais, MyCompanyDesk peut remplir automatiquement les informations de l'entreprise à partir du registre KVK (Kamer van Koophandel). Deux méthodes de recherche sont disponibles :

- **Recherche par nom** : Commencez à taper le nom de l'entreprise dans le champ **Nom**. Une liste déroulante affiche les entrées KVK correspondantes avec la ville et le numéro KVK. Sélectionnez-en une pour remplir automatiquement les champs nom et numéro KVK.
- **Recherche par numéro de chambre** : Saisissez un numéro KVK à 8 chiffres dans le champ **Chambre de commerce**. Lorsque vous quittez le champ, MyCompanyDesk recherche le numéro et remplit les champs vides (nom, adresse, code postal, ville, pays).

Un badge Vérifié apparaît à côté du champ du numéro de chambre lorsque la recherche aboutit. Si le numéro KVK est introuvable, un message d'erreur s'affiche. Les deux recherches sont disponibles uniquement pour les clients néerlandais.

## Prospects

Un prospect est un client potentiel sans numéro de client. Vous pouvez créer des devis pour les prospects, mais pas de factures. Marquez un client comme prospect avec l'interrupteur **Prospect** du formulaire client ; les prospects reçoivent leur propre onglet **Prospects** sur la page des clients et un badge sur leur carte. Quand un prospect devient un vrai client, ouvrez sa page de détail et utilisez **Convertir en client** : vous attribuez un numéro de client et la fiche devient un client normal.

## Page de détail du client

La page de détail du client affiche :

- **Coordonnées** : e-mail, téléphone et adresse
- **Informations d'entreprise** : numéro de TVA, numéro de chambre de commerce, IBAN et délai de paiement
- **Informations de facturation** : taux horaire, délai de paiement et si la facturation automatique des heures enregistrées est active
- **Résumé** : total facturé, nombre de factures et date de la dernière facture
- **Factures récentes** : les dernières factures de ce client, avec un lien vers la liste complète
- **Enregistrements de temps récents** : les dernières heures enregistrées pour ce client
- **Contrats** : contrats actifs et inactifs, avec badges de statut de signature et une icône d'aperçu PDF lorsque la signature électronique est activée
- **Notes** : notes libres sur ce client
- **Actions** : modifier, créer une facture, créer un devis, archiver et supprimer

### Bannière de santé des e-mails

Une bannière d'avertissement apparaît en haut de la page de détail du client lorsque l'adresse e-mail du client a récemment rebondi (définitivement non délivrable) ou généré une plainte pour spam. La bannière reste silencieuse lorsque l'adresse est en bon état.

- **Rebond** : affiche une bannière rouge avec la date du dernier échec de remise et le motif de refus du fournisseur de messagerie. Si aucun motif précis n'a été donné, une note générique s'affiche à la place.
- **Plainte** : affiche une bannière jaune avertissant que le client a marqué votre e-mail comme spam. Le message déconseille d'envoyer d'autres messages à cette adresse sans avoir pris contact au préalable.

Ces informations proviennent des événements du fournisseur et du statut de remise des messages sortants, vous aidant à repérer les problèmes avant d'envoyer la prochaine facture ou le prochain devis.

## Favoris

Les favoris gardent vos clients les plus importants à un clic :

- **Ajoutez une étoile à un client** sur sa carte dans la liste, dans le panneau d'aperçu rapide ou sur sa page de détail. Une étoile jaune marque les favoris.
- **Ajout ou retrait groupé** : sélectionnez plusieurs clients et utilisez les actions groupées **Ajouter aux favoris** ou **Retirer des favoris**.
- **Toujours en premier** : les favoris apparaissent toujours en haut de la liste des clients et en haut de chaque sélecteur de client de l'application (factures, devis, enregistrement du temps), marqués d'une étoile.

## Actions

- **Modifier** : mettre à jour les informations du client
- **Créer une facture** : démarrer une nouvelle facture pré-remplie avec ce client
- **Créer un devis** : démarrer un nouveau devis pour ce client
- **Archiver** : déplacer vers les archives (restauration possible plus tard)
- **Supprimer** : suppression par étapes, voir ci-dessous

### Supprimer un client

La suppression se fait par étapes, vous ne perdez donc jamais de données par accident. Supprimer un client actif l'archive d'abord. Supprimer un client archivé le déplace vers la corbeille. Supprimer depuis la corbeille retire le client définitivement. Vous pouvez restaurer depuis les archives ou la corbeille à tout moment, et vider toute la corbeille d'un coup depuis l'onglet Corbeille.

## Actions groupées

Sélectionnez plusieurs clients pour :

- **Ajouter aux favoris / retirer des favoris** : marquer la sélection comme favoris ou retirer la marque
- **Archiver** : archiver des clients actifs en masse
- **Restaurer** : ramener des clients archivés ou mis à la corbeille
- **Déplacer vers la corbeille** : déplacer des clients archivés vers la corbeille
- **Supprimer** : retirer définitivement les clients sélectionnés

## Aperçu rapide

Sur ordinateur, cliquez sur un client dans la liste pour ouvrir le panneau latéral d'**aperçu rapide**. Il affiche les informations clés et les actions sans quitter la liste :

- Résumé financier : total facturé, nombre de factures et montant en attente
- Coordonnées, adresse, numéro de client, numéro de TVA, taux horaire, délai de paiement et date de la dernière facture
- Actions rapides : créer une facture, créer un devis, envoyer un e-mail et basculer le favori
- Un bouton **Modifier** qui ouvre la page d'édition complète

## Importer des clients

Importez votre base de données clients existante depuis un fichier CSV :

1. Allez dans **Profil > Import**
2. Sélectionnez **Clients** comme type de données
3. Téléchargez votre fichier CSV
4. Faites correspondre les colonnes de votre CSV aux champs MyCompanyDesk (nom, e-mail, adresse, etc.)
5. Vérifiez l'aperçu
6. Confirmez pour importer

## Exporter des clients

Exportez votre liste de clients au format CSV via **Paramètres > Gegevens downloaden** (disponible à partir du plan Starter). La même page propose aussi une sauvegarde complète de toutes vos données.

## Conseils

- Gardez les adresses e-mail des clients à jour ; elles sont utilisées pour l'envoi des factures
- La recherche porte sur le nom, le numéro de client, l'adresse e-mail et la ville
- Ajoutez vos clients les plus importants aux favoris pour un accès rapide
- Renseignez les numéros de TVA pour activer l'autoliquidation sur les factures B2B
