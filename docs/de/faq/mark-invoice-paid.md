---
title: "Rechnung als bezahlt markieren"
last_verified: 2026-07-02
chatbot:
  triggers: ["mark invoice paid", "invoice paid", "mark as paid", "record payment", "received payment", "payment received", "factuur betaald", "betaald markeren", "factuur als betaald", "rechnung als bezahlt", "marquer payee"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I record a partial payment?", "How do I send a payment reminder?", "How do I view overdue invoices?"]
---

So markieren Sie eine Rechnung als bezahlt:
1. Öffnen Sie die Rechnung aus der Liste
2. Klicken Sie im Kopf der Rechnung auf "Als bezahlt markieren"; ein Klick genügt und der Status wechselt zu Bezahlt, und es wird ein Zahlungsdatensatz für den vollen Betrag angelegt
3. Möchten Sie Zahlungsdatum, Zahlungsart oder eine Referenz erfassen? Nutzen Sie stattdessen "Zahlung erfassen" im Bereich Zahlung

Hinweis: Ein Entwurf muss zuerst fertiggestellt werden, bevor er als bezahlt markiert oder eine Zahlung erfasst werden kann. Eine Zahlung auf einem Entwurf erzeugte früher eine Rechnung mit Status Bezahlt ohne Nummer, was jetzt nicht mehr erlaubt ist. Um eine Zahlung auf einem Entwurf zu erfassen, senden oder finalisieren Sie die Rechnung zuerst, damit sie eine Nummer erhält, und erfassen Sie dann die Zahlung.

Wenn eine ältere Rechnung als Bezahlt angezeigt wird, die Zahlungskarte aber mitteilt, dass keine Zahlung erfasst wurde, wurde sie wahrscheinlich über einen Import oder einen älteren Ablauf als bezahlt markiert, ohne dass eine Zahlungsbuchung angelegt wurde. Nutzen Sie "Erste Zahlung erfassen", um die Zahlung nachzutragen und die Hinweiszeile zu entfernen.
