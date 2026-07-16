---
title: "Datensicherung"
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

So sichern Sie Ihre Daten:
1. Gehen Sie zu Einstellungen -> „Daten herunterladen"
2. Laden Sie CSV-Exporte für Rechnungen, Kunden und Ausgaben oder das dort verfügbare Vollbackup herunter
3. Prüfen Sie, ob die heruntergeladenen Dateien die benötigten Datensätze enthalten

CSV-Exporte sind ab dem Starter-Tarif verfügbar. Wenn Sie regelmäßig sichern, wählen Sie einen festen Zeitpunkt, zum Beispiel nach dem Abschluss jedes Quartals.

:::tip
Für MyCompanyDesk-Supportmitarbeiter bietet das Admin-Panel außerdem Aktionen für **Backup erstellen** und **Daten herunterladen** pro Workspace. Die Aktion **Cache leeren** leert den gemeinsamen Cache-Service (und den modulspezifischen KPI-Cache), und **Sitzungen ungültig machen** erhöht einen globalen Zeitstempel, der alle davor ausgegebenen Sitzungstokens ablehnt. Diese Werkzeuge gehören nicht zu den kundenseitigen Einstellungen.
:::
