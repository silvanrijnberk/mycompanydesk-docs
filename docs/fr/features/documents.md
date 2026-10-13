---
title: Documents
description: "Tous vos reçus, factures, pièces jointes d'e-mail et fichiers au même endroit, plus des accords comme vos CGV et NDA à faire signer en ligne."
---

# Documents

Documents est l'archive de votre comptabilité : tout ce que vous devez conserver se trouve ici, au même endroit, classé selon sa provenance. Vous y consignez aussi des accords sans prix et les faites signer en ligne, comme les conditions générales, les accords de confidentialité et les accords de sous-traitance.

## Aperçu

**Documents** figure dans la navigation pour tout le monde, dans tous les abonnements. En haut se trouvent des onglets :

- **Tous** : toute l'archive
- **Accords** : vos conditions générales, accords de sous-traitance, accords de confidentialité et autres accords (voir [Accords](#accords))
- **Reçus** : les reçus rattachés à vos dépenses
- **Factures** : les factures que vous avez émises
- **Téléversé** : les fichiers que vous avez téléversés vous-même
- **Depuis e-mail** : les pièces jointes de votre boîte de réception qui méritent d'être conservées

Les reçus, factures et pièces jointes apparaissent tout seuls ; inutile de les ranger une seconde fois. L'onglet **Accords** s'affiche quand le module Contrats est activé (Office), l'onglet **Depuis e-mail** avec la boîte de réception professionnelle complète (Office).

## L'archive

**Rechercher dans votre archive** cherche dans tous les documents de l'onglet ouvert. **Année** vous ramène à une seule année, et sur l'onglet **Téléversé** vous filtrez aussi par **Catégorie**. Quand vous changez d'onglet, l'année et le terme recherché restent en place.

Pour chaque document, vous choisissez :

- **Télécharger** : enregistrer le fichier
- **Ouvrir** : aller à la facture, à la dépense ou au client auquel le document appartient
- **Enregistrer comme dépense** : pour un reçu arrivé en pièce jointe d'un e-mail. Vous le scannez, le vérifiez et le comptabilisez ; il passe ensuite sous **Reçus**.
- **Renommer** et **Supprimer** : pour les fichiers que vous avez téléversés vous-même

### Téléverser vous-même un fichier

Cliquez sur **Téléverser** pour ajouter vos propres fichiers, comme un extrait KvK, une police d'assurance ou vos comptes annuels. Vous téléversez une photo, un PDF, un fichier Word, Excel, texte ou CSV, et pouvez en choisir plusieurs à la fois. Pour chaque fichier, vous indiquez si besoin un **Nom**, une **Catégorie**, un **Client** et une **Date du document**.

Les catégories sont : Extrait KvK (registre du commerce), Assurance, Pièce d'identité, Comptes annuels, Belastingdienst, Banque, Retraite et Autre.

## Accords

Les accords servent aux arrangements avec des clients ou des partenaires qui ne sont ni des factures, ni des devis, ni des contrats avec facturation. Utilisations courantes :

- **Conditions générales** : garder la preuve que votre client les a reçues avant la conclusion d'un accord.
- **Accord de sous-traitance** : consigner les engagements relatifs au traitement des données personnelles (RGPD).
- **Confidentialité** : consigner un accord de confidentialité (NDA) signé.
- **Autre** : tout autre accord que vous souhaitez conserver, envoyer et éventuellement faire signer.

::: info
Les accords font partie d'Office et dépendent du module Contrats. Si l'onglet **Accords** n'apparaît pas, activez **Contrats** sous **Paramètres › Modules**.
:::

L'onglet **Accords** affiche aussi la carte **Ce qui manque** : elle vous signale si vous n'avez pas encore de conditions générales, ou si des clients sous contrat n'ont pas encore d'accord de sous-traitance.

### Créer un accord

1. Ouvrez **Documents**, onglet **Accords**, et cliquez sur **Créer un document**
2. Sous **Type de document**, choisissez un type : **Conditions générales**, **Accord de sous-traitance**, **Confidentialité** ou **Autre**
3. Renseignez :
   - **Titre** : un nom clair
   - **Client** : facultatif ; liez le document à un client
   - les questions propres au modèle choisi
4. Vérifiez l'aperçu et cliquez sur **Créer**

Vous créez un document à partir d'un modèle. Le texte est figé au moment de la création, si bien que les modifications ultérieures du modèle ne changent pas les documents existants.

### Remettre les conditions générales

MyCompanyDesk enregistre quand vous avez remis vos conditions générales à un client.

#### Saisie manuelle

Pour enregistrer vous-même une date :

1. Ouvrez la page du document
2. Cliquez sur **Enregistrer comme fourni**
3. Choisissez la date à laquelle vous avez remis les conditions au client

La page affiche ensuite l'étiquette **Fourni** avec la date. Si le document est lié à un client, vous le voyez aussi dans la liste.

#### Joindre les conditions à un devis ou une facture

Si votre espace de travail contient des conditions générales dans Documents, l'aperçu de l'e-mail affiche, lors de l'envoi d'un devis ou d'une facture, l'interrupteur **Joindre les conditions générales**. Pour les devis, il est activé par défaut, car joindre les conditions à un devis constitue juridiquement le moment de leur remise. Pour les factures, il est désactivé par défaut. Vous modifiez ces deux réglages sous **Paramètres › Factures et devis**, rubrique **Conditions générales**.

Quand l'interrupteur est activé, le PDF des conditions en vigueur est joint à l'e-mail. Une fois l'e-mail envoyé, MyCompanyDesk enregistre cet envoi comme moment de remise sur le document des conditions. La page du document affiche alors :

- le destinataire et la date de l'e-mail de devis ou de facture qui a transmis les conditions
- un lien vers le devis ou la facture, pour ouvrir l'envoi concerné

Si les conditions avaient déjà été enregistrées comme fournies à la main, cet enregistrement antérieur est conservé. Les envois suivants ne l'écrasent pas.

::: tip
Une simple date devient ainsi une preuve vérifiable. Au lieu de dire « nous avons remis les conditions ce jour-là », le document renvoie au véritable e-mail qui les a transmises.
:::

### Accord de sous-traitance manquant sur la fiche client

Sur la page du client, MyCompanyDesk vérifie si un client a un contrat mais pas encore d'accord de sous-traitance dans Documents. Si c'est le cas, une indication apparaît dans la carte Documents avec le lien **Rédiger un accord de sous-traitance**, qui en commence un nouveau pour ce client.

L'indication n'apparaît que si le module Contrats est activé et que la carte Documents serait sinon vide. C'est un rappel discret pour combler une lacune là où vous agissez.

### Signature

Un accord se fait signer en ligne par le client qui y est lié : liez donc d'abord un client au document. Cliquez ensuite sur **Envoyer pour signature** : le client reçoit par e-mail un lien de signature sécurisé.

La page du document affiche une carte de signature avec :

- le statut de chaque partie
- un bouton **Afficher** qui ouvre un aperçu du document signé
- un bouton de téléchargement pour enregistrer le PDF

#### Signature réciproque

Les accords se signent des deux côtés : la contrepartie signe d'abord via le lien sécurisé, puis vous signez avec **Contresigner**. Ce n'est qu'après les deux signatures que le statut devient **Signé**.

#### Signature dans la liste

La liste des accords comporte une colonne **Signature** avec le statut de chaque document signé en ligne. Les statuts apparaissent en étiquettes colorées : **Non envoyé**, **En attente**, **Partiellement signé** et **Signé**.

Le filtre au-dessus de la liste limite l'affichage par statut de signature, ou montre les documents sans signature électronique.

#### PDF signé et piste d'audit

Une fois le document signé par les deux parties, chacune reçoit un PDF signé par e-mail. Le PDF contient le texte du document et une page de signature avec une piste d'audit (adresse IP et horodatage). Vous pouvez aussi télécharger le PDF à tout moment depuis la page du document.

### Statuts des accords

| Statut | Description |
|---|---|
| **Brouillon** | Créé mais pas encore envoyé |
| **Envoyé** | Demande de signature envoyée à la contrepartie |
| **Partiellement signé** | Au moins une partie a signé ; la dernière signature manque encore |
| **Signé** | Toutes les signatures sont enregistrées |
| **Refusé** | La contrepartie a refusé de signer |
| **Expiré** | Le lien de signature a expiré avant que toutes les parties signent |
| **Résilié** | N'est plus actif |

## Conseils

- Téléversez les papiers isolés à conserver, comme vos polices d'assurance et votre extrait KvK, pour tout garder ensemble
- Liez chaque accord à un client pour le retrouver vite et pouvoir le faire signer
- Enregistrez quand vous avez remis vos conditions générales : c'est important en cas de litige
- Utilisez le filtre par statut de signature pour voir quels accords attendent encore une signature
