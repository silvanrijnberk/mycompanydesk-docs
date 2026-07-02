---
title: Import et export de données
last_verified: 2026-07-02
---

# Import et export de données

Importez des données existantes dans MyCompanyDesk et exportez vos enregistrements pour sauvegarde ou utilisation dans d'autres outils.

## Import

### Import CSV

Importez des données depuis des fichiers CSV pour :

- **Clients** avec nom, e-mail, téléphone, adresse, numéro de TVA
- **Factures** avec les détails de facturation
- **Dépenses** avec catégories et montants

Les autres types d'enregistrements (comme les projets ou les objets) ne peuvent pas être importés depuis un CSV; vous les créez directement dans l'application.

### Comment importer

L'assistant d'import a sa propre page dans l'application : ouvrez directement `/profile/import`, pratique lorsque vous migrez depuis un autre outil juste après votre inscription.

1. Sélectionnez le **type de données** à importer (clients, factures ou dépenses)
2. Téléversez votre **fichier CSV**
3. **Associez les colonnes** en faisant correspondre les en-têtes de votre CSV aux champs MyCompanyDesk
4. **Importez** pour créer les enregistrements; le résultat indique combien de lignes ont été importées et combien ont échoué

### Conseils d'import

- Utilisez l'encodage UTF-8 pour vos fichiers CSV
- Incluez une ligne d'en-tête avec les noms de colonnes
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
Les exports CSV et la sauvegarde complète sont disponibles à partir du forfait **Starter**. Sur le forfait gratuit, la page affiche une invitation à mettre à niveau.
:::

### Sauvegarde complète

La même page propose une **sauvegarde complète** : toutes vos données dans un seul fichier JSON. Utilisez-la comme sauvegarde périodique ou comme instantané complet de vos enregistrements, par exemple pour une demande d'accès RGPD.

Les exports ne contiennent que les données auxquelles vous avez accès. Les versions PDF des factures se téléchargent séparément, depuis la page de chaque facture.

## Conseils

- Exportez régulièrement vos données comme sauvegarde
- Plutôt que d'envoyer des fichiers par e-mail à votre comptable, donnez-lui un accès direct via **Paramètres > Accès et comptable**; il consulte ainsi toujours vos chiffres les plus récents
- Si vous venez d'un autre outil, utilisez l'assistant d'import pour migrer votre liste de clients
