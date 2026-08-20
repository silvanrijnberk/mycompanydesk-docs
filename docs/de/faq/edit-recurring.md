---
title: "Wiederkehrende Rechnung bearbeiten"
description: "Wiederkehrende Rechnung oder Ausgabe ändern: Öffnen Sie den Eintrag und klicken Sie auf Bearbeiten, künftige Erzeugungen nutzen die neue Vorlage."
last_verified: 2026-08-15
chatbot:
  triggers:
    - "edit recurring"
    - "change recurring"
    - "update recurring"
    - "modify recurring frequency"
    - "change frequency"
    - "terugkerend bewerken"
    - "frequentie wijzigen"
    - "wiederkehrend bearbeiten"
    - "modifier recurrent"
  actions:
    - { label: "Open recurring invoices", to: "/recurring-invoices" }
  follow_up:
    - "How do I stop a recurring invoice?"
    - "How do I create a new recurring invoice?"
---

So bearbeitest du ein wiederkehrendes Element:
1. Gehe zu Wiederkehrende Rechnungen (oder Ausgaben)
2. Öffne das wiederkehrende Element
3. Klicke auf „Bearbeiten"
4. Ändere Betrag, Frequenz, Kunde oder Positionen
5. Speichere - zukünftige Generierungen verwenden die aktualisierte Vorlage

Hinweis: Änderungen wirken sich nur auf zukünftige Rechnungen/Ausgaben aus. Bereits erzeugte Einträge bleiben unverändert.

Hinweis: Wenn Sie das Startdatum ändern, bevor der erste Eintrag erzeugt wurde, verschiebt sich das nächste geplante Datum mit. Sobald der erste Eintrag erzeugt wurde, verschiebt eine Änderung des Startdatums den Zeitplan nicht mehr.
