---
title: "Tarife und Preise"
description: "MyCompanyDesk gibt es in zwei Tarifen: Desk und Office. Desk ist kostenlos und bleibt kostenlos."
last_verified: 2026-10-01
chatbot:
  triggers:
    - "tarife"
    - "preise"
    - "abonnement"
    - "upgrade"
    - "downgrade"
    - "Office"
    - "Desk"
    - "plans"
    - "pricing"
    - "subscription"
    - "formules"
    - "prix"
    - "tarif"
    - "plan"
  actions:
    - { label: "Einstellungen öffnen", to: "/settings/billing" }
  follow_up:
    - "Wie funktionieren wiederkehrende Rechnungen?"
    - "Was passiert bei einem Downgrade?"
---

MyCompanyDesk gibt es in zwei Tarifen: **Desk** und **Office**.

**Desk** ist kostenlos und bleibt kostenlos. Er umfasst die Arbeit, die Sie selbst erledigen: unbegrenzte Rechnungen, Angebote und Ausgaben, Projekte und Zeiterfassung, Ihre eigene Website auf `.mycompanydesk.site`, Belege per AI scannen und einen einfachen AI-Chat.

**Office** ist kostenpflichtig. Er ergänzt Automatisierung und Dienste, die MCD echte Kosten verursachen: wiederkehrende Rechnungen und Ausgaben, Verträge, Bankkoppeling, einen geschäftlichen Posteingang auf Ihrer eigenen Domain, digitale USt.-Abgabe, vollständige Buchhaltung, API-Zugang und höhere AI-Limits. Die aktuellen Preise finden Sie auf der [Preisseite](https://mycompanydesk.nl/plans).

Diese Funktionen sind in unserer Billing-Config hinterlegt: [apps/api/src/modules/billing/plans.config.js](https://github.com/silvanrijnberk/RichardTool/blob/development/apps/api/src/modules/billing/plans.config.js).

**Upgrade und Downgrade**
- Sie können jederzeit zwischen Desk und Office wechseln.
- Nach einem Upgrade sind die neuen Funktionen sofort verfügbar.
- Wenn Sie von Office auf Desk herunterstufen, funktionieren Office-only Funktionen nicht mehr: Ihre Bankkoppelung importiert nicht mehr, neue wiederkehrende Rechnungen oder Ausgaben werden nicht mehr erstellt, das Vorbereiten von Umsatzsteuererklärung und Jahresabschluss entfällt, und neue E-Mails von Ihrer eigenen Adresse senden geht nicht mehr. E-Mails kommen weiter an, Lesen und Antworten bleiben möglich, Ihre Website bleibt auf Ihrer mycompanydesk.site-Adresse online, und Ihre Daten bleiben in Ihrem Arbeitsbereich. Die Kündigungsseite listet genau, was weiterläuft und was stoppt, bevor Sie entscheiden.
- Läuft die kostenlose 60-tägige Office-Testphase ohne Abonnement ab, wechselt Ihr Arbeitsbereich automatisch auf Desk.

**Abrechnung**
- Alle Preise verstehen sich zuzüglich 21 % USt. Der Betrag, den Sie beim Checkout zahlen, enthält die USt.; Sie können sie als Vorsteuer zurückfordern.
- Es gibt keine Kosten pro Benutzer. Desk erlaubt einen Arbeitsbenutzer plus kostenlosen Steuerberater-Zugang. Office erlaubt unbegrenzte Arbeitsbenutzer plus kostenlosen Steuerberater-Zugang.
- Sie können jederzeit kündigen oder herunterstufen. Nicht zufrieden? Sie erhalten Ihr Geld innerhalb von 14 Tagen zurück.
