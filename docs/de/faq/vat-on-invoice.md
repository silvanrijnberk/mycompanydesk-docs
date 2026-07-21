---
title: "MwSt. auf einer Rechnung"
last_verified: 2026-07-02
chatbot:
  triggers: ["vat on invoice", "add vat to invoice", "tax rate invoice", "change vat rate", "btw op factuur", "btw tarief", "mwst auf rechnung", "tva sur facture"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
    - { label: "Open VAT settings", to: "/settings/btw" }
  follow_up: ["How do I change the default VAT rate?", "How do I prepare my VAT return?"]
---

So legen Sie die MwSt. auf einer Rechnung fest:
1. Bearbeiten oder erstellen Sie eine Rechnung
<!-- TODO(source-missing): RichardTool 5407b44 widened the valid Dutch invoice/catalog VAT-rate set to include historical rates 6% and 19%. sources/vat-rates.yaml#countries.NL currently only lists 0%, 9% and 21%, so this line must stay unchanged until the source is updated. -->
2. Wählen Sie für jede Position den MwSt.-Satz (z. B. 21 %, 9 %, 0 %)
3. Das System berechnet die MwSt. automatisch
4. Die MwSt.-Summen erscheinen in der Rechnungsübersicht

Neue Rechnungspositionen erhalten automatisch Ihren Standard-MwSt.-Satz. Um diesen Standard zu ändern, gehen Sie zu Einstellungen → "MwSt." und passen Sie den Standardsatz an. Der Satz ist immer 0 %, wenn die Rechnung den Reverse-Charge-Schalter verwendet.

Tipp: Stellen Sie einem Geschäftskunden in der EU eine Rechnung? Nutzen Sie den Schalter "Reverse Charge (Steuerschuldnerschaft des Leistungsempfängers)", statt selbst 0 % zu wählen.
