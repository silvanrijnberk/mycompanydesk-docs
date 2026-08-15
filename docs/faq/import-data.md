---
title: "Import data"
last_verified: 2026-08-15
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

For expenses, CSV files written in Dutch formats are parsed the way a Dutch bookkeeper writes them. Amount cells such as 100,50 or 1.234,56 are recognized, and dates in dd-mm-yyyy order are read as day-month-year. This matches the number fields in the web app, so what you type and what you import use the same rules.

Tip: Start with a small test import to verify the mapping before importing large datasets.
