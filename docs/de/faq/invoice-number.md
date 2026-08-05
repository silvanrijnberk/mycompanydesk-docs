---
title: "Rechnungsnummer"
last_verified: 2026-08-05
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

## Manuelle Nummerierung

Standardmäßig nummeriert MyCompanyDesk Rechnungen automatisch. Wenn Ihr Arbeitsbereich die manuelle Nummerierung verwendet, erhält eine Rechnung erst eine Nummer, wenn Sie sie finalisieren, versenden oder als versendet markieren.

Dann öffnet sich ein Dialog, in dem Sie die Rechnungsnummer eingeben. MyCompanyDesk schlägt die nächste Nummer in Ihrer Serie vor, aber Sie können auch eine beliebige andere Nummer eingeben. Die Nummer ist Pflicht und muss eindeutig sein.

Um zwischen automatischer und manueller Nummerierung zu wechseln, gehen Sie zu **Einstellungen > Nummerierung**.

Tipp: Entwürfe haben noch keine endgültige Nummer. Löschen Sie Testentwürfe, bevor Sie sie abschließen, dann bleibt Ihre Serie lückenlos.
