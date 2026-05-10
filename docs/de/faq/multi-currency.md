---
title: "Multi currency"
last_verified: 2026-05-09
chatbot:
  triggers: ["multi currency", "different currency", "foreign currency", "invoice in dollars", "invoice in pounds", "andere valuta", "vreemde valuta", "andere wahrung", "devise etrangere", "dollar invoice", "pound invoice"]
  actions:
    - { label: "Open profile preferences", to: "/profile?section=preferences" }
    - { label: "Create invoice", to: "/invoices/new" }
  follow_up: ["How do I change my default currency?", "How do I set up my company settings?"]
---

Aktuelles Verhalten bei Währungen:
1. Lege deine Standardwährung unter Mein Konto → Einstellungen fest
2. Neue Dokumente verwenden diesen Standard, wo das unterstützt wird
3. Bestehende Rechnungen behalten die gespeicherte Währung

Das aktuelle Rechnungsformular hat keinen separaten Währungswähler pro Rechnung.
