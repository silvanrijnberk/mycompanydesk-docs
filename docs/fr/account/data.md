---
title: Import et export de données
description: "Importez clients, factures et dépenses depuis un CSV, et exportez vos données pour les sauvegarder ou les utiliser dans un autre outil."
last_verified: 2026-10-19
---

# Import et export de données

Importez des données existantes dans MyCompanyDesk et exportez vos enregistrements pour sauvegarde ou utilisation dans d'autres outils.

## Import

### Import CSV

Importez des données depuis des fichiers CSV pour :

- **Clients** avec nom, e-mail, téléphone, adresse, numéro de TVA
- **Factures** avec les détails de facturation
- **Dépenses** avec catégories et montants
- **Catalogue** : vos produits et services, avec prix HT, unité et taux de TVA

Les autres types d'enregistrements (comme les projets ou les objets) ne peuvent pas être importés depuis un CSV; vous les créez directement dans l'application.

### Comment importer

L'assistant d'import a sa propre page dans l'application, **Importer des données CSV**. Vous l'ouvrez avec **Importer** dans votre liste de clients, via **Paramètres › Migration**, ou directement sur `/profile/import`, pratique lorsque vous migrez depuis un autre outil juste après votre inscription.

1. Sélectionnez le **type de données** à importer (clients, factures, dépenses ou catalogue)
2. Téléversez votre **fichier CSV**
3. **Associez les colonnes** en faisant correspondre les en-têtes de votre CSV aux champs MyCompanyDesk
4. **Importez** pour créer les enregistrements; le résultat indique combien de lignes ont été importées et combien ont échoué

Si le résultat ne vous convient pas, **Annuler cet import** retire exactement les lignes créées par cet import, sauf celles auxquelles quelque chose est déjà lié.

### Conseils d'import

- Utilisez l'encodage UTF-8 pour vos fichiers CSV
- Incluez une ligne d'en-tête avec les noms de colonnes
- La virgule et le point-virgule sont tous deux reconnus comme séparateurs
- Gardez des formats de date cohérents (AAAA-MM-JJ recommandé)
- Utilisez le point (.) comme séparateur décimal dans les champs de montant
- Les champs vides sont ignorés (les valeurs par défaut existantes sont utilisées)

### Correspondance des colonnes

L'assistant d'import affiche vos colonnes CSV et vous laisse associer chacune au champ MyCompanyDesk correspondant. Correspondances courantes :

| Colonne CSV | Devient |
|---|---|
| Nom de société / Nom | Nom du client |
| E-mail | E-mail du client |
| Rue / Adresse | Adresse |
| Code postal | Code postal |
| Ville | Ville |
| VAT / TVA | Numéro de TVA |
| Téléphone | Numéro de téléphone |

## Export

Les exports se trouvent à un seul endroit : ouvrez **Paramètres** et choisissez **Télécharger les données**.

### Export CSV

Téléchargez vos enregistrements par type :

- **Factures** en CSV, avec montants, dates et statuts
- **Clients** en CSV, votre liste de clients complète
- **Dépenses** en CSV, avec catégories et montants

::: info
Les exports CSV de vos factures, de vos dépenses et de votre liste de clients, ainsi que la sauvegarde complète (JSON), sont disponibles sur tous les plans, y compris Desk.
:::

### Sauvegarde complète

La même page propose une **sauvegarde complète** : toutes vos données dans un seul fichier JSON. Utilisez-la comme sauvegarde périodique ou comme instantané complet de vos enregistrements, par exemple pour une demande d'accès RGPD.

### Tout télécharger

À côté des exports CSV, la même page propose **Tout télécharger** : un fichier ZIP avec tout ce que contient votre espace de travail. S'y trouvent les PDF de vos factures, devis, bons de travail et contrats, les photos et PDF de vos justificatifs, vos documents, vos e-mails professionnels, votre site et vos déclarations de TVA, plus, chaque année, un fichier d'audit qu'un comptable ou l'administration fiscale peut importer.

La préparation du fichier prend un peu de temps quand il y a beaucoup de contenu ; MyCompanyDesk vous envoie donc un e-mail dès qu'il est prêt, au lieu de vous faire patienter. Quelques règles s'y attachent :

- Seuls la propriétaire ou le propriétaire de l'espace de travail, ou un admin, peuvent tout télécharger d'un coup. Les autres personnes téléchargent les listes auxquelles elles ont accès.
- Vous pouvez créer un nouveau téléchargement par jour.
- Le fichier reste téléchargeable pendant une durée limitée, puis il est supprimé chez nous. Mettez-le en lieu sûr chez vous.
- Un élément n'a pas pu être emporté ? Il est listé, un par un, dans un LEESMIJ.txt dans le ZIP.

Les exports CSV ne contiennent que les données auxquelles vous avez accès.

Récupérez tout ce que vous voulez garder avant de supprimer votre compte ; voir Supprimer le compte.

## Données de localisation

MyCompanyDesk peut utiliser votre position lorsque vous le choisissez explicitement :

- Rechercher un **Client à proximité** depuis la liste des clients.
- Utiliser la **Localisation actuelle** comme adresse de départ d'un trajet lors de la saisie des heures.

Nous ne lisons votre position que dans ces deux cas, dans l'application ou dans votre navigateur. Nous la convertissons en adresse ou en liste de clients filtrée, et nous ne stockons pas les coordonnées brutes. Vous pouvez refuser ou retirer l'autorisation à tout moment dans les paramètres de votre appareil ou de votre navigateur.

## Conseils

- Exportez régulièrement vos données comme sauvegarde
- Plutôt que d'envoyer des fichiers par e-mail à votre comptable, donnez-lui un accès direct via **Paramètres › Votre comptable**; il consulte ainsi toujours vos chiffres les plus récents
- Si vous venez d'un autre outil, utilisez l'assistant d'import pour migrer votre liste de clients
