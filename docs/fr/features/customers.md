---
title: Clients
---

# Clients

Gerez votre base de donnees clients complete. Chaque facture, devis et projet est lie a une fiche client.

## Vue d'ensemble

La page des clients repertorie tous vos clients avec les informations cles en un coup d'oeil. Utilisez la recherche et les filtres pour trouver rapidement des clients.

## Segments dans la liste des clients

En haut de la page des clients, une bande de vignettes donne un apercu rapide de votre portefeuille clients. Les chiffres sont independants des filtres de recherche et de date de la liste, de sorte qu'une vignette reflete toujours l'ensemble du portefeuille.

- **Clients avec des factures en retard**: combien de clients vous doivent de l'argent en ce moment. Cliquez sur la vignette pour ouvrir la page des factures en retard.
- **Clients inactifs**: clients actifs qui ont deja ete factures, mais qui n'ont recu aucune facture au cours des N derniers mois. Cliquez sur la vignette pour filtrer la liste sur les clients inactifs. La fenetre d'inactivite par defaut est de six mois; le libelle de la vignette indique la fenetre exacte utilisee par l'espace de travail.
- **Prospects**: clients actifs qui n'ont jamais ete factures. Cliquez sur la vignette pour filtrer la liste sur les prospects.
- **Total des clients**: le nombre fixe de clients actifs. Cliquez sur la vignette pour effacer les filtres de la liste.

Le filtre de statut au-dessus de la liste permet aussi de basculer entre Tous les statuts, Actif, Prospects, Inactif, Archive et Corbeille.

## Creer un client

1. Allez dans **Clients > Nouveau client**
2. Remplissez les informations du client :
   - **Nom** -- Nom de l'entreprise ou du particulier (obligatoire)
   - **E-mail** -- Adresse e-mail de contact pour l'envoi des factures
   - **Telephone** -- Numero de telephone de contact
   - **Adresse** -- Rue, code postal, ville, pays
   - **Numero de TVA** -- Numero de TVA du client (pour le B2B)
   - **Numero de client** -- Genere automatiquement ou personnalise
3. Cliquez sur **Enregistrer**

::: tip
Vous pouvez egalement creer des clients directement lors de la creation d'une facture ou d'un devis -- sans quitter la page.
:::

### Remplissage automatique KVK

Lorsque vous creez un client neerlandais, MyCompanyDesk peut remplir automatiquement les informations de l'entreprise a partir du registre KVK (Kamer van Koophandel). Deux methodes de recherche sont disponibles :

- **Recherche par nom**: Commencez a taper le nom de l'entreprise dans le champ **Nom**. Une liste deroulante affiche les entrees KVK correspondantes avec la ville et le numero KVK. Selectionnez une entree pour remplir automatiquement les champs nom et numero KVK.
- **Recherche par numero de chambre**: Saisissez un numero KVK a 8 chiffres dans le champ **Chambre de commerce**. Lorsque vous quittez le champ, MyCompanyDesk recherche le numero et remplit les champs vides (nom, adresse, code postal, ville, pays).

Un badge Verifie apparait a cote du champ du numero de chambre lorsque la recherche aboutit. Si le numero KVK est introuvable, un message d'erreur s'affiche. Les deux recherches sont disponibles uniquement pour les clients neerlandais.

Chaque espace de travail dispose de 100 recherches KVK gratuites par jour (les resultats mis en cache ne comptent pas). Lorsqu.il reste 20 recherches ou moins, l.indication du champ KVK affiche un compteur du nombre restant. Si la limite quotidienne est atteinte, un message d.erreur s.affiche -- vous pouvez saisir les donnees manuellement ou reessayer demain.

## Page de detail du client

La page de detail du client affiche :

- **Coordonnees** -- Toutes les informations enregistrees
- **Historique des factures** -- Chaque facture envoyee a ce client
- **Historique des depenses** -- Depenses liees a ce client
- **Contrats** -- Contrats actifs et inactifs, avec badges de statut de signature et une icone d'apercu PDF lorsque la signature electronique est activee
- **Documents**: accords enregistres pour ce client, comme les conditions generales, les NDAs et les contrats de sous-traitance. Si le client a un contrat mais pas de contrat de sous-traitance, un indicateur apparait avec un lien pour en creer un.
- **Projets** -- Projets actifs et termines
- **Statistiques** -- Chiffre d'affaires total, solde en cours, delai de paiement moyen

### Manque de contrat de sous-traitance

Quand un client a un contrat mais aucun contrat de sous-traitance (DPA) dans Documents, la carte Documents sur la fiche client affiche un indicateur et un lien **Rediger un contrat de sous-traitance**. Cela signale une lacune de conformite a l'endroit ou vous etes susceptible d'agir. L'indicateur n'apparait que si les modules Documents et Contrats sont actives et que la carte serait sinon vide.

### Banniere de sante des e-mails

Une banniere d'avertissement apparait en haut de la page de detail du client lorsque l'adresse e-mail du client a recemment rebondi (definitivement non delivrable) ou genere une plainte pour spam. La banniere reste silencieuse lorsque l'adresse est en bon etat.

- **Rebond**, affiche une banniere rouge avec la date du dernier echec de livraison et le motif de refus de l'operateur. Si aucun motif specifique n'a ete donne, une note generique s'affiche a la place.
- **Plainte**, affiche une banniere jaune avertissant que le client a marque votre e-mail comme spam. Le message deconseille d'envoyer d'autres messages a cette adresse sans avoir pris contact au prealable.

Ces informations proviennent des evenements de l'operateur et du statut de livraison des messages sortants, vous aidant a reperer les problemes avant d'envoyer la prochaine facture ou le prochain devis.

## Actions

- **Modifier**, mettre a jour les informations du client
- **Creer une facture** -- Demarrer une nouvelle facture pre-remplie avec ce client
- **Creer un devis** -- Demarrer un nouveau devis pour ce client
- **Archiver** -- Deplacer vers les archives (restauration possible)
- **Supprimer** -- Supprimer definitivement le client

## Actions groupees

Selectionnez plusieurs clients pour :

- **Archiver** -- Archiver les clients inactifs en masse
- **Restaurer** -- Recuperer les clients archives
- **Supprimer** -- Supprimer plusieurs clients

## Apercu rapide

Sur ordinateur, cliquez sur un client dans la liste pour ouvrir le panneau d'**apercu rapide**. Celui-ci affiche les informations cles et les actions sans quitter la liste :

- Resume des informations client
- Factures recentes
- Bouton de modification pour ouvrir la page d'edition complete

## Importer des clients

Importez votre base de donnees clients existante depuis un fichier CSV :

1. Allez dans **Profil > Import**
2. Selectionnez **Clients** comme type de donnees
3. Telechargez votre fichier CSV
4. Faites correspondre les colonnes de votre CSV aux champs MyCompanyDesk (nom, e-mail, adresse, etc.)
5. Verifiez l'apercu
6. Confirmez pour importer

## Exporter des clients

Exportez votre liste de clients au format CSV depuis la page des clients (plan Pro et superieur).

## Clients perdus

L'onglet [Rapports > Clients > Perdus](/fr/features/reports) liste les clients qui achetaient avant mais n'ont pas reçu de facture cette année. La vue affiche le nombre, le montant total qu'ils avaient dépensé auparavant et la date de leur dernière facture, avec des liens pour appeler ou e-mailer chaque client directement. Il vit dans Rapports parce que réactiver d'anciens clients est un travail de campagne, pas un élément adapté à un flux trié par urgence.

La liste clients standard segmente aussi elle-même les clients inactifs ; l'onglet Perdus ajoute le rappel de type campagne sans remplacer ce filtre.

## Conseils

- Gardez les adresses e-mail des clients a jour -- elles sont utilisees pour l'envoi des factures
- Utilisez la barre de recherche pour une correspondance floue instantanee sur tous les champs clients
- Epinglez vos clients les plus importants en favoris pour un acces rapide

