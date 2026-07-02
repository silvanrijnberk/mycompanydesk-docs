---
title: "Import data"
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

MyCompanyDesk can import customers, invoices, and expenses from a CSV file. Other data types cannot be imported.

The import page lives at `/profile/import`. There is no menu entry for it, so open it via the button above or by entering the address directly. Then:

1. Choose the data type: customers, invoices, or expenses
2. Upload your CSV file
3. Match the columns of your file to the right fields and confirm the preview

There is no template CSV to download; the import works with the columns of your own file and lets you map them during the upload.

Tip: Start with a small test import to verify the mapping before importing large datasets.
