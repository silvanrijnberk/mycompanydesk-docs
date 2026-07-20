---
title: "Reverse Charge"
last_verified: 2026-07-02
chatbot:
  triggers: ["reverse charge", "reverse charge invoice", "eu invoice", "intracommunautair", "intracommunity", "btw verlegd", "reverse charge rechnung", "autoliquidation", "intra-community"]
  actions:
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I add a customer VAT number?", "How does reverse charge affect my VAT return?", "How do I preview an invoice?"]
---

So erstellen Sie eine Reverse-Charge-Rechnung (EU):
1. Gehen Sie zu Rechnungen → Neue Rechnung
2. Wählen Sie Ihren EU-Kunden und prüfen Sie, ob die USt-IdNr. beim Kunden hinterlegt ist
3. Aktivieren Sie im Rechnungsformular den Schalter "Reverse Charge (Steuerschuldnerschaft des Leistungsempfängers)"; MyCompanyDesk schlägt ihn bei EU-Geschäftskunden automatisch vor
4. Die MwSt. aller Positionen springt automatisch auf 0 %, manuelle Änderungen sind nicht nötig
5. Prüfen Sie in der Vorschau den Reverse-Charge-Hinweis und senden Sie die Rechnung

Tipp: Der Schalter ist im Rechnungsformular immer verfügbar; Sie müssen vorher nichts in Ihren Einstellungen aktivieren.

## Ausgaben mit Reverse Charge

Wenn Sie eine Reverse-Charge-Rechnung von einem Lieferanten erhalten, muss MyCompanyDesk die Herkunft des Lieferanten kennen, um die MwSt. in die richtige Rubrik der Aangifte einzuordnen:

- Ein niederländischer Lieferant mit KVK-Nummer oder Land NL landet in Rubrik 2a (inländische Reverse Charge).
- Ein Lieferant aus einem anderen EU-Land landet in Rubrik 4b (innergemeinschaftlicher Erwerb).

Fehlt das Land oder die KVK-Nummer, markiert die Prüfung vor der Abgabe auf der USt.-Seite die Ausgabe und blockiert die Abgabe, bis Sie es ergänzt haben. Öffnen Sie die Ausgabe, ergänzen Sie das fehlende Land oder die KVK-Nummer, und führen Sie die Prüfungen erneut aus.
