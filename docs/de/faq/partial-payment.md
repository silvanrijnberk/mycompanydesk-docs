---
title: "Teilzahlung"
description: "Teilzahlung erfassen: Öffnen Sie die Rechnung aus der Liste, klicken Sie auf Zahlung erfassen und geben Sie den erhaltenen Betrag ein."
last_verified: 2026-05-09
chatbot:
  triggers: ["partial payment", "record partial payment", "half payment", "part payment", "deposit received", "gedeeltelijke betaling", "deelbetaling", "aanbetaling ontvangen", "teilzahlung", "paiement partiel", "acompte recu"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I mark an invoice as fully paid?", "How do I send a reminder for the remaining balance?", "How do I view all partially paid invoices?"]
---

Um eine Teilzahlung auf einer Rechnung zu erfassen:
1. Öffnen Sie die Rechnung aus der Liste
2. Klicken Sie auf „Zahlung erfassen“ oder die Zahlungsaktion
3. Geben Sie den erhaltenen Betrag ein (weniger als der Gesamtbetrag)
4. Speichern Sie: der Rechnungsstatus ändert sich zu Teilweise bezahlt
5. Wiederholen Sie den Vorgang, wenn weitere Zahlungen eingehen

Tipp: Der Restbetrag wird automatisch verfolgt und auf der Rechnungsdetailseite angezeigt. Teilweise bezahlte Rechnungen erhalten auch ihren eigenen Erinnerungsvorschlag für den offenen Restbetrag. Im Kundenportal sehen Kunden bei teilweise bezahlten Rechnungen auch den bereits erhaltenen Betrag und die noch offene Restsumme, bevor sie bezahlen.
