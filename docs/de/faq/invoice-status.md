---
title: Invoice status
last_verified: 2026-08-15
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Rechnungsstatus erklärt:
• Entwurf - noch nicht gesendet, frei bearbeitbar. Ein Entwurf kann erst als bezahlt markiert oder mit einer Zahlung erfasst werden, nachdem er finalisiert wurde; früher erzeugte eine Zahlung auf einem Entwurf eine nummerlose Rechnung mit Status Bezahlt, was jetzt nicht mehr erlaubt ist.
• Gesendet - an den Kunden zugestellt, wartet auf Zahlung
• Überfällig - Fälligkeitsdatum überschritten, noch nicht bezahlt
• Überprüfung erforderlich - der Kunde hat im Portal angegeben, dass er bezahlt hat; bestätigen oder lehnen Sie die Zahlung ab, bevor die Rechnung auf Bezahlt wechselt
• Bezahlt - Zahlung erhalten und bestätigt
• Storniert - ungültig, nicht mehr aktiv

Löschen erfolgt in Stufen: aus aktiv wird Archiviert, aus Archiviert wird Papierkorb, und aus dem Papierkorb wird endgültig gelöscht. Sie können die Rechnung aus dem Archiv oder dem Papierkorb wiederherstellen, solange sie nicht endgültig gelöscht ist. Stornieren ist anders: damit markieren Sie eine gesendete oder bezahlte Rechnung als storniert, sie bleibt aber in der Liste sichtbar.

Tipp: Nutzen Sie die Statusfilter, um zuerst Offen und Überfällig zu sehen.
