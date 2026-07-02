---
title: "Daten importieren"
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

MyCompanyDesk kann Kunden, Rechnungen und Ausgaben aus einer CSV-Datei importieren. Andere Datentypen können nicht importiert werden.

Die Importseite liegt unter `/profile/import`. Es gibt keinen Menüeintrag dafür; öffnen Sie sie über die Schaltfläche oben oder indem Sie die Adresse direkt eingeben. Danach:

1. Wählen Sie den Datentyp: Kunden, Rechnungen oder Ausgaben
2. Laden Sie Ihre CSV-Datei hoch
3. Ordnen Sie die Spalten Ihrer Datei den richtigen Feldern zu und bestätigen Sie die Vorschau

Es gibt keine CSV-Vorlage zum Herunterladen; der Import arbeitet mit den Spalten Ihrer eigenen Datei und lässt Sie diese beim Hochladen zuordnen.

Tipp: Beginnen Sie mit einem kleinen Testimport, um die Zuordnung zu prüfen, bevor Sie größere Datensätze importieren.
