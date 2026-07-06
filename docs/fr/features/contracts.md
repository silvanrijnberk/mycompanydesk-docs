---
title: Contrats
---

# Contrats

Gérez les accords de services récurrents et les contrats de location avec des calendriers de facturation automatiques.

## Vue d'ensemble

Les contrats représentent des accords en cours avec des clients, tels que des contrats de services mensuels, des baux de location ou des plans de maintenance. Ils peuvent générer automatiquement des factures selon un calendrier défini.

::: info
Le module contrats est optionnel. Activez-le dans **Paramètres > Onderdelen** si vous ne le voyez pas dans la navigation.
:::

## Créer un contrat

1. Allez dans **Contrats > Nouveau contrat**
2. Remplissez :
   - **Nom** : un titre descriptif (par exemple « Service de nettoyage mensuel »)
   - **Client** : le client partie au contrat
   - **Service et montant** : ce que vous fournissez et le montant de facturation récurrent
   - **Récurrence** : la fréquence de facturation (hebdomadaire, mensuelle, trimestrielle, annuelle)
   - **Date de début** : quand le contrat commence
3. Cliquez sur **Enregistrer**

Un contrat n'a pas de champ de date de fin ; il continue de facturer jusqu'à ce que vous le mettiez en pause. Dans le formulaire, vous pouvez aussi choisir quand la première facture doit être créée, et si les factures générées sont envoyées automatiquement.

## Statuts des contrats

| Statut | Description |
|---|---|
| **Actif** | Actuellement en vigueur, génère des factures |
| **En pause** | Suspendu, aucune facture générée |

En fin de vie, un contrat peut aussi apparaître comme **Terminé**, **Expiré** ou **Résilié**.

## Facturation automatique

Les contrats actifs avec un calendrier de récurrence génèrent automatiquement des factures à chaque période de facturation. Le système :

1. Crée un brouillon de facture basé sur les termes du contrat
2. Applique le client, le montant et la description corrects
3. Suit vos paramètres de numérotation des factures

Vous pouvez examiner et envoyer les factures générées manuellement, ou configurer l'envoi automatique.

## Liaison aux actifs

Les contrats peuvent être liés aux [objets/actifs](/fr/features/objects) pour la gestion locative :

- Associez un contrat à une propriété, un véhicule ou un équipement
- Suivez quels actifs sont actuellement loués et à qui
- Consultez l'historique des contrats par actif

## Indicateurs

La page de liste des contrats affiche des cartes de synthèse :

- **Contrats actifs**, avec le nombre total à côté
- **Revenu mensuel** des contrats actifs, normalisé entre les fréquences de facturation
- **Total des contrats**
- **Prochaine facture**, la date à laquelle la prochaine facture de contrat sera générée

Cliquez sur une carte pour filtrer la liste en conséquence.

## Actions groupées

Sélectionnez plusieurs contrats pour les **archiver** ou les **supprimer** en une fois. La vue Archive propose la restauration ou le déplacement vers la corbeille ; la vue Corbeille propose la restauration ou la suppression définitive.

## Signature électronique

Les contrats prennent en charge la signature électronique. Vous pouvez ajouter des parties via le formulaire de contrat, et chaque partie reçoit un lien de signature par e-mail.

Lorsqu'un contrat est signé, la page de détail du contrat affiche une carte de signature avec :

- Le statut de chaque partie (invitée, consultée, signée ou expirée)
- Un bouton **Voir** qui ouvre un aperçu en ligne du document signé
- Un bouton de téléchargement pour enregistrer le PDF

La page d'aperçu comprend une barre d'outils avec des actions d'impression et de téléchargement, et affiche le contrat signé directement dans le navigateur. Le PDF signé et le PDF de relecture contiennent tous les deux le texte intégral du contrat, de sorte que chaque copie téléchargée soit autonome.

### Signature sur la liste des contrats

La liste des contrats inclut une colonne **Signature** affichant le statut de signature pour chaque contrat avec signature électronique. Les statuts apparaissent sous forme de badges colorés : brouillon (neutre), envoyé (avertissement), partiellement signé (info) et actif (succès).

Un filtre de signature au-dessus de la liste vous permet de filtrer par statut de signature, ou d'afficher les contrats sans signature électronique (« Sans signature électronique »).

::: info Contrats existants
Les contrats créés avant l'introduction de la signature électronique n'affichent pas de carte de signature sur la page de détail. Le système détecte les contrats existants en vérifiant si le contrat comporte des parties signataires, un modèle ou un contenu de signature. Seuls les contrats créés ou mis à jour après le déploiement de la signature électronique incluent la carte de signature.

Les contrats existants affichent un tiret dans la colonne Signature et apparaissent sous le filtre « Sans signature électronique ».
:::

### Vérification SMS

Les liens de signature peuvent exiger une vérification par SMS avant qu'une partie puisse consulter et signer le document. Lorsque cette option est activée, le signataire doit saisir un numéro de mobile et confirmer un code à 6 chiffres envoyé par SMS.

- **Envoyer le code** : après avoir saisi son numéro de mobile, le signataire appuie sur le bouton et reçoit un code
- **Vérifier le code** : le signataire saisit le code à 6 chiffres pour prouver l'accès au numéro
- **Badge Vérifié** : une fois confirmé, un badge « Vérifié » apparaît avec les quatre derniers chiffres du numéro

Si un code incorrect est saisi, le signataire peut en demander un nouveau. Vous activez la vérification SMS par signataire au moment d'ajouter les parties au contrat, ce qui vous permet de l'exiger pour une partie et pas pour une autre.

## Versions de modèle

Les modèles de contrat prennent en charge le versionnage pour suivre les modifications dans le temps. Chaque version est un instantané figé du contenu du modèle à un moment donné, ce qui vous permet de faire évoluer vos modèles sans affecter les contrats déjà créés.

### Publier une version

1. Allez dans **Contrats > Modèles**
2. Trouvez votre modèle et cliquez sur le bouton **Versions**
3. Dans la fenêtre des versions, saisissez :
   - **Étiquette** : un identifiant court pour la version (par exemple « v2 »). Si vous laissez le champ vide, le système attribue automatiquement une étiquette séquentielle.
   - **Note de modification** : une brève description de ce qui a changé dans cette version
4. Cliquez sur **Publier**

Le brouillon actuel est capturé comme nouvelle version. Les contrats existants restent rattachés à la version avec laquelle ils ont été créés, la publication ne réécrit donc jamais le texte historique des contrats.

### Consulter l'historique des versions

L'historique des versions de chaque modèle affiche :

- L'étiquette de version (par exemple « v1 », « v2 »)
- La note de modification et la date de publication
- Un badge **Actuelle** sur la dernière version publiée
- Un badge **Archivée** sur toutes les versions précédentes

### Comment les versions affectent les contrats

Lorsqu'un contrat est créé à partir d'un modèle, il est figé sur la version qui était actuelle à ce moment-là. Si vous publiez ultérieurement une nouvelle version du modèle, les contrats existants continuent de s'afficher à partir de leur version figée. Vous pouvez donc réviser les modèles en toute sécurité sans modifier les contrats en cours.

## Conseils

- Utilisez les contrats conjointement avec les [factures récurrentes](/fr/features/recurring-invoices) pour différents scénarios de facturation
- Liez les contrats aux objets pour une gestion locative complète
- Utilisez le filtre de statut pour voir les contrats actifs et en pause en un coup d'œil
- Filtrez par statut de signature pour trouver les contrats qui doivent encore être signés
- Ajoutez des parties signataires lors de la création d'un contrat pour activer la signature électronique
