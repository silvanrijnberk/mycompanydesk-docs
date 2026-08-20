---
title: "Data backup"
last_verified: 2026-07-02
chatbot:
  triggers:
    - "backup data"
    - "data backup"
    - "export backup"
    - "save my data"
    - "download everything"
    - "gegevens backup"
    - "data opslaan"
    - "datensicherung"
    - "sauvegarde donnees"
    - "telecharger donnees"
  actions:
    - { label: "Open data download", to: "/settings/downloaden" }
  follow_up:
    - "How do I export data for my accountant?"
    - "How do I import data?"
---

To back up your data:
1. Go to Settings -> "Gegevens downloaden" (download your data)
2. Download CSV exports for invoices, customers, and expenses, or the full backup available there
3. Confirm the downloaded files contain the records you need

CSV exports are available from the Starter plan. If you back up regularly, pick a fixed moment, for example after closing each quarter.

:::tip
For MyCompanyDesk support staff, the admin panel also has a **Create backup** action and a **Download data** action for workspaces. The admin panel's **Clear cache** action flushes the shared cache service (and any module-level KPI cache), and **Invalidate sessions** bumps a global cutoff that rejects every session token issued before it. These tools are not part of the customer-facing settings pages.
:::
