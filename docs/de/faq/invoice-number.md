---
title: "Rechnungsnummer"
last_verified: 2026-07-02
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Reset invoice numbering", to: "/settings/opzeggen" }
  follow_up: ["How do I set up my company settings?", "How do I change the PDF style?", "How do I create my first invoice?"]
---

Rechnungsnummern werden automatisch vergeben:
1. Erstellen Sie eine Rechnung; MyCompanyDesk nummeriert sie fortlaufend, so wie es das Finanzamt erwartet
2. Es gibt kein Nummernformat zu konfigurieren
3. Sie brauchen eine bestimmte Nummer auf einem Entwurf? Öffnen Sie die Rechnung im Formular und klicken Sie in der Seitenleiste auf "Eigene Nummer eingeben"
4. Um die Serie neu zu starten, gehen Sie zu Einstellungen → "Konto kündigen" und nutzen Sie "Rechnungsnummerierung zurücksetzen"

Tipp: Entwürfe haben noch keine endgültige Nummer. Löschen Sie Testentwürfe, bevor Sie sie abschließen, dann bleibt Ihre Serie lückenlos.
