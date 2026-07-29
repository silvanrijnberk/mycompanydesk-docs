---
title: Documents
---

# Documents

Conservez, suivez et signez numériquement des accords sans prix — comme les conditions générales, les accords de confidentialité et les contrats de sous-traitance.

## Aperçu

Les documents servent à tracer les accords avec des clients ou partenaires qui ne sont ni factures, ni devis, ni contrats récurrents. Cas d'usage courants :

- **Conditions générales** — prouver que le client les a reçues avant la conclusion d'un accord.
- **Contrat de sous-traitance (DPA)** — documenter les accords de traitement de données RGPD.
- **Accord de confidentialité (NDA)** — conserver un NDA signé.
- **Autre** — tout autre document que vous souhaitez conserver, envoyer et éventuellement faire signer.

::: info
Le module Documents est optionnel. Activez-le via **Entreprise > Fonctionnalités** s'il n'apparaît pas dans le menu.
:::

## Créer un document

1. Allez dans **Documents > Nouveau document**
2. Choisissez un type : **Conditions générales**, **Contrat de sous-traitance**, **Confidentialité** ou **Autre**
3. Renseignez :
   - **Titre** — un nom explicite
   - **Client** — optionnel ; liez le document à un client
   - **Contenu** — le texte que le signataire verra
4. Cliquez sur **Enregistrer**

Vous pouvez créer un document à partir d'un modèle ou de zéro. Les documents créés à partir d'un modèle rendent le texte du modèle au moment de la création. Les modifications ultérieures du modèle n'affectent donc pas les documents existants.

## Remettre les conditions générales

MyCompanyDesk enregistre la date à laquelle vous avez remis les conditions générales à un client.

### Saisie manuelle

Pour enregistrer une date vous-même :

1. Ouvrez la page de détail du document
2. Cliquez sur **Marquer comme remis**
3. Choisissez la date à laquelle vous avez remis les conditions au client

La page de détail affiche alors un badge **Remis** avec la date. Si le document est lié à un client, cela est également visible dans la liste des documents.

### Joindre les conditions à un devis ou une facture

Si votre espace de travail a des conditions générales dans Documents, l'aperçu d'e-mail lors de l'envoi d'un devis ou d'une facture propose l'option **Joindre les conditions générales**. Pour les devis, elle est activée par défaut, car l'envoi des conditions avec un devis est le moment juridiquement pertinent pour la remise. Pour les factures, elle est désactivée par défaut.

Quand l'option est activée, le PDF des conditions générales actuelles est joint à l'e-mail. Après l'envoi réussi, MyCompanyDesk enregistre cet envoi comme événement de remise sur le document des conditions. La page de détail montre alors :

- le destinataire et la date de l'e-mail de devis ou de facture qui a livré les conditions
- un lien vers le devis ou la facture, pour ouvrir l'envoi concret

Si les conditions avaient déjà été marquées comme remises manuellement, l'enregistrement antérieur est conservé. Les envois ultérieurs ne l'écrasent pas.

::: tip
Cela transforme une simple date en une preuve vérifiable. Au lieu d'affirmer "nous avons remis les conditions à cette date", le document pointe vers le véritable e-mail qui les a transportées.
:::

## Manque de contrat de sous-traitance sur la fiche client

Sur la page de détail du client, MyCompanyDesk vérifie si un client a un contrat mais aucun contrat de sous-traitance (DPA) enregistré dans Documents. Quand ce manque existe, un indicateur apparaît dans la carte Documents avec un lien **Rédiger un contrat de sous-traitance** qui crée un nouveau DPA prérempli pour ce client.

L'indicateur n'apparaît que si les modules Documents et Contrats sont activés et que la carte Documents serait sinon vide. C'est un rappel discret pour combler une lacune de conformité à l'endroit même où vous agissez.

## Signature

Les documents utilisent le même flux de signature numérique que les contrats. Vous ajoutez une ou plusieurs parties via le formulaire de document. Chaque partie reçoit un lien de signature par e-mail.

Lorsqu'un document prend en charge la signature, la page de détail affiche une carte de signature avec :

- Le statut de chaque partie (brouillon, envoyé, partiellement signé, signé, expiré ou résilié)
- Un bouton **Voir** qui ouvre un aperçu en ligne du document signé
- Un bouton de téléchargement pour enregistrer le PDF

### Signature réciproque

Les documents sont signés réciproquement : la contrepartie signe d'abord via un lien sécurisé, puis vous, en tant que propriétaire, contre-signez. Le statut devient **Signé** uniquement après les deux signatures.

### Signature dans la liste des documents

La liste des documents comprend une colonne **Signature** indiquant le statut de chaque document pour lequel la signature numérique est activée. Les statuts apparaissent sous forme de badges colorés : brouillon, envoyé, partiellement signé et signé.

Un filtre au-dessus de la liste permet d'affiner par statut de signature ou d'afficher uniquement les documents sans signature numérique.

### Vérification par SMS

Les liens de signature peuvent exiger une vérification par SMS avant qu'une partie puisse consulter et signer le document. Lorsque cette option est activée, le signataire doit saisir un numéro de mobile et confirmer un code à 6 chiffres envoyé par SMS.

- **Envoyer le code** — après avoir saisi son numéro de mobile, le signataire reçoit un code
- **Vérifier le code** — le signataire saisit le code à 6 chiffres pour prouver l'accès au numéro
- **Badge vérifié** — un badge avec les quatre derniers chiffres du numéro apparaît ensuite

En cas de code incorrect, le signataire peut en demander un nouveau. La vérification SMS est configurée par session de signature et s'applique à toutes les parties.

### PDF signé et piste d'audit

Une fois le document entièrement signé, les deux parties reçoivent un PDF signé par e-mail. Le PDF contient le texte du document ainsi qu'une page de signature avec une piste d'audit (adresse IP et horodatage). Vous pouvez également télécharger le PDF à tout moment depuis la page de détail.

## Statuts des documents

| Statut | Description |
|---|---|
| **Brouillon** | Créé mais pas encore envoyé |
| **Envoyé** | Invitation à signer envoyée à une ou plusieurs parties |
| **Partiellement signé** | Au moins une partie a signé ; la contre-signature finale est en attente |
| **Signé** | Toutes les signatures requises sont enregistrées |
| **Expiré** | Le lien de signature a expiré avant que toutes les parties ne signent |
| **Résilié** | Plus actif |

## Conseils

- Liez chaque document à un client pour le retrouver facilement plus tard
- Enregistrez la date de remise des conditions générales — c'est important en cas de litige
- Ajoutez des parties signataires lors de la création d'un document pour activer la signature numérique
- Utilisez le filtre de statut de signature pour voir quels documents attendent encore une signature
