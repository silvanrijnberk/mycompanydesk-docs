---
title: "Rechnungsstatus"
description: "Rechnungsstatus erklärt: Ein Entwurf ist frei bearbeitbar und lässt sich erst nach dem Finalisieren als bezahlt markieren."
last_verified: 2026-08-15
chatbot:
  triggers: ["invoice status", "invoice statuses", "what do invoice statuses mean", "draft sent paid", "invoice lifecycle", "factuurstatus", "factuur statussen", "rechnungsstatus", "statut facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as paid?", "How do I send a reminder?", "How do I cancel an invoice?"]
---
Rechnungsstatus erklärt:
• Entwurf - noch nicht gesendet, frei bearbeitbar. Ein Entwurf kann erst als bezahlt markiert oder mit einer Zahlung erfasst werden, nachdem er finalisiert wurde; früher erzeugte eine Zahlung auf einem Entwurf eine nummerlose Rechnung mit Status Bezahlt, was jetzt nicht mehr erlaubt ist.
• Noch zu versenden - finalisiert, aber noch nicht gesendet oder bezahlt. Steht bereits eine Zahlung darauf (etwa eine Anzahlung oder Teilzahlung), zeigt die Liste ihn als Gesendet an, weil er klar raus ist.
• Gesendet - an den Kunden zugestellt, wartet auf Zahlung
• Überfällig - Fälligkeitsdatum überschritten, noch nicht bezahlt
• Überprüfung erforderlich - der Kunde hat im Portal angegeben, dass er bezahlt hat; bestätigen oder lehnen Sie die Zahlung ab, bevor die Rechnung auf Bezahlt wechselt
• Bezahlt - Zahlung erhalten und bestätigt. In seltenen Fällen kann eine Rechnung als Bezahlt angezeigt werden, obwohl noch keine Zahlung erfasst wurde, etwa nach einem Import oder einer älteren "Als bezahlt markieren"-Aktion ohne Zahlungsbuchung. Die Zahlungskarte zeigt dann „Bezahlt, ohne erfasste Zahlung.“ und bietet mit „Zahlung erfassen“ an, die Zahlung nachzutragen.
• Storniert - ungültig, nicht mehr aktiv

Löschen ist nur bei einem Entwurf ohne Rechnungsnummer möglich und erfolgt in Stufen: aus aktiv wird Archiv, aus Archiv wird Papierkorb, und aus dem Papierkorb wird endgültig gelöscht. Sie können den Entwurf aus dem Archiv oder dem Papierkorb wiederherstellen, solange er nicht endgültig gelöscht ist. Eine finalisierte Rechnung lässt sich nicht löschen. Stornieren ist anders: Mit „Als storniert markieren“ setzen Sie eine finalisierte, noch nicht bezahlte Rechnung auf Storniert, sie bleibt aber in der Liste sichtbar.

Tipp: Nutzen Sie die Statusfilter, um zuerst Noch zu versenden und Überfällig zu sehen.
