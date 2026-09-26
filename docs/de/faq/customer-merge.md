---
title: "Kunden zusammenführen"
description: "Doppelte Kundendatensätze zusammenführen: Öffnen Sie eines der Duplikate, nutzen Sie die Zusammenführen-Option und wählen Sie den Hauptdatensatz."
last_verified: 2026-09-26
chatbot:
  triggers: ["merge customers", "duplicate customer", "combine customers", "customer duplicate", "klanten samenvoegen", "dubbele klant", "kunden zusammenfuhren", "fusionner clients", "doublons clients"]
  actions:
    - { label: "Open customers", to: "/customers" }
  follow_up: ["How do I edit a customer?", "How do I find a customer?", "How do I delete a customer?"]
---
Um doppelte Kundendatensätze zusammenzuführen:
1. Gehen Sie zu Kunden
2. Identifizieren Sie die doppelten Einträge
3. Öffnen Sie eines der Duplikate
4. Verwenden Sie die Zusammenführungs- oder Kombinieroption, falls verfügbar
5. Wählen Sie, welcher Datensatz als Hauptdatensatz beibehalten werden soll
6. Bestätigen Sie: alle Rechnungen und der Verlauf werden zusammengeführt

Hinweis: Wenn keine Zusammenführungsoption verfügbar ist, übertragen Sie Rechnungen manuell und löschen dann das Duplikat.

Ein archivierter Kunde kann nicht der Hauptdatensatz einer Zusammenführung sein. Stellen Sie den archivierten Kunden zuerst wieder her: Solange ein Kunde archiviert ist, werden seine wiederkehrenden Rechnungen und Verträge nicht abgerechnet; die Zusammenführung würde diese Abrechnung lautlos stoppen.
