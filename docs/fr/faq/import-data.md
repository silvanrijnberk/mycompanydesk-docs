---
title: "Importer des données"
last_verified: 2026-07-02
chatbot:
  triggers:
    - "import data"
    - "import csv"
    - "import customers"
    - "import invoices"
    - "bulk import"
    - "upload data"
    - "data importeren"
    - "gegevens importeren"
    - "daten importieren"
    - "importer donnees"
  actions:
    - { label: "Open import page", to: "/profile/import" }
  follow_up:
    - "How do I export my data?"
    - "How do I add customers manually?"
---

MyCompanyDesk peut importer des clients, des factures et des dépenses depuis un fichier CSV. Les autres types de données ne peuvent pas être importés.

La page d'import se trouve sur `/profile/import`. Il n'y a pas d'entrée de menu pour cette page ; ouvrez-la via le bouton ci-dessus ou en saisissant l'adresse directement. Ensuite :

1. Choisissez le type de données : clients, factures ou dépenses
2. Téléversez votre fichier CSV
3. Associez les colonnes de votre fichier aux bons champs et confirmez l'aperçu

Il n'y a pas de modèle CSV à télécharger ; l'import fonctionne avec les colonnes de votre propre fichier et vous permet de les associer pendant le téléversement.

Conseil : commencez par un petit import de test pour vérifier l'association avant d'importer de gros volumes.
