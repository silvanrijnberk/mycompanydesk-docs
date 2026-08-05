---
title: "Gutschrift"
last_verified: 2026-08-05
chatbot:
  triggers: ["credit note", "create credit note", "issue credit", "credit invoice", "creditnota", "creditnota aanmaken", "gutschrift erstellen", "note de credit", "avoir"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I cancel an invoice instead?", "How does a credit note affect my VAT?", "How do I find the original invoice?"]
---

So erstellen Sie eine Gutschrift:
1. Öffnen Sie die Originalrechnung, die Sie gutschreiben möchten
2. Klicken Sie auf der Detailseite auf "Gutschrift / Korrektur erstellen"
3. MyCompanyDesk erstellt in einem Schritt eine vollständige, endgültige Gutschrift: jede Position des Originals wird negativ übernommen und die Gutschrift erhält die nächste Nummer in Ihrer Serie
4. Senden Sie die Gutschrift an den Kunden

Die Beträge lassen sich beim Erstellen nicht anpassen; versendete Dokumente sind gesperrt, die Gutschrift spiegelt das Original daher immer exakt wider. Für eine Teilkorrektur erstellen Sie zuerst die vollständige Gutschrift und stellen anschließend eine neue Rechnung über den richtigen Betrag aus.

Eine Gutschrift erstattet dem Kunden Geld und hat daher kein eigenes Zahlungsziel. Im Kundenportal werden die Fälligkeitszeile und die Tabelle früherer Rechnungen für Gutschriften ausgeblendet. Im offene-Posten-Bericht wird der Betrag der Gutschrift gegen die korrigierte Originalrechnung verrechnet, sodass der Saldo des Kunden widerspiegelt, was tatsächlich noch offen ist.

Tipp: Da Sie die Gutschrift direkt aus der Originalrechnung erstellen, passen beide Dokumente exakt zusammen und Ihre Buchhaltung bleibt stimmig.
