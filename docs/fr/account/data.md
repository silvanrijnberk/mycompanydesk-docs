---
title: Import et export de donnees
---

# Import et export de donnees

Importez des donnees existantes dans MyCompanyDesk et exportez vos enregistrements pour sauvegarde ou utilisation dans d'autres outils.

## Import

### Import CSV

Importez des donnees depuis des fichiers CSV pour :

- **Clients** -- Nom, e-mail, telephone, adresse, numero de TVA
- **Factures** -- Details des factures avec lignes de facturation
- **Depenses** -- Enregistrements de depenses avec categories
- **Projets** -- Noms et details des projets
- **Objets** -- Enregistrements d'actifs

### Comment importer

1. Allez dans **Profil > Import**
2. Selectionnez le **type de donnees** que vous souhaitez importer
3. Telechargez votre **fichier CSV**
4. **Faites correspondre les colonnes** -- Associez les en-tetes de colonnes de votre CSV aux champs MyCompanyDesk
5. **Apercu** -- Verifiez les donnees avant l'import
6. **Confirmez** -- Cliquez sur Importer pour creer les enregistrements

### Conseils d'import

- Utilisez l'encodage UTF-8 pour vos fichiers CSV
- Incluez une ligne d'en-tete avec les noms de colonnes
- Les formats de date doivent etre coherents (AAAA-MM-JJ recommande)
- Les champs de montant doivent utiliser le point (.) comme separateur decimal
- Les champs vides sont ignores (les valeurs par defaut existantes sont utilisees)

### Correspondance des colonnes

L'assistant d'import affiche vos colonnes CSV et vous permet de faire correspondre chacune au champ MyCompanyDesk correspondant. Correspondances courantes :

| Colonne CSV | Correspond a |
|---|---|
| Company Name / Name | Nom du client |
| Email | E-mail du client |
| Street / Address | Adresse |
| ZIP / Postal Code | Code postal |
| City | Ville |
| VAT / BTW | Numero de TVA |
| Phone | Numero de telephone |

## Export

### Export CSV

Exportez vos donnees au format CSV depuis les pages de listes respectives :

- **Factures** -- Toutes les factures avec montants, dates, statuts
- **Depenses** -- Toutes les depenses avec categories et montants
- **Clients** -- Votre base de donnees clients

Cliquez sur le bouton **Exporter** sur la page de liste pour telecharger.

::: info
L'export CSV necessite le plan **Pro** ou superieur.
:::

### Export de donnees RGPD

Exportez toutes vos donnees personnelles au format JSON :

1. Allez dans **Profil > Donnees**
2. Cliquez sur **Exporter mes donnees**
3. Telechargez le fichier JSON contenant toutes les donnees de votre compte

Cet export RGPD comprend :

- Vos informations de profil
- Toutes les factures, depenses, devis
- Les fiches clients
- Les donnees de projets et de temps
- Les parametres et preferences

## Conseils

- Exportez vos donnees regulierement en guise de sauvegarde
- Utilisez l'export CSV pour partager des donnees avec votre comptable
- Lorsque vous migrez depuis un autre outil, utilisez l'assistant d'import pour migrer votre liste de clients
- L'export RGPD fournit un instantane complet de vos donnees
