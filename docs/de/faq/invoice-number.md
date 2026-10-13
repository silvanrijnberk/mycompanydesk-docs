---
title: "Rechnungsnummer"
description: "Rechnungsnummern werden automatisch vergeben: MyCompanyDesk nummeriert Ihre Rechnungen fortlaufend, so wie es das Finanzamt erwartet."
last_verified: 2026-08-05
chatbot:
  triggers: ["invoice number", "change invoice number", "invoice numbering", "set invoice number", "numbering format", "factuurnummer", "factuurnummering", "rechnungsnummer", "numero facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Reset invoice numbering", to: "/settings/gegevens-wissen" }
  follow_up: ["How do I set up my company settings?", "How do I change the PDF style?", "How do I create my first invoice?"]
---

Rechnungsnummern werden automatisch vergeben:
1. Erstellen Sie eine Rechnung und finalisieren Sie sie; MyCompanyDesk vergibt dann die nächste fortlaufende Nummer, so wie es das Finanzamt erwartet
2. Sie wechseln von einem anderen Programm? Legen Sie unter Einstellungen › „Rechnungen und Angebote“ im Bereich „Nummerierung“ ein „Präfix“ und Ihre „Nächste Rechnungsnummer“ fest. Diese Nummer lässt sich nur vorwärts stellen, nie zurück
3. Sie brauchen eine bestimmte Nummer auf einem Entwurf? Öffnen Sie die Rechnung im Formular und klicken Sie in der Seitenleiste auf „Eigene Nummer eingeben“. Die Nummer muss eindeutig sein
4. Sie möchten eine selbst festgelegte nächste Nummer wieder entfernen? Gehen Sie zu Einstellungen › „Daten löschen“ und wählen Sie „Rechnungsnummerierung zurücksetzen“. Neue Rechnungen laufen danach automatisch hinter der höchsten Nummer dieses Jahres weiter

Tipp: Entwürfe haben noch keine endgültige Nummer. Löschen Sie Testentwürfe, bevor Sie sie abschließen, dann bleibt Ihre Serie lückenlos.
