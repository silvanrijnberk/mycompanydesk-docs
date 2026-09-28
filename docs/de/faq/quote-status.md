---
title: "Angebotsstatus"
description: "Die Angebotsstatus im Überblick: entwurf: noch bearbeitbar, noch nicht an den Kunden gesendet, gesendet: beim Kunden zugestellt."
last_verified: 2026-09-28
chatbot:
  triggers: ["quote status", "quote statuses", "quote lifecycle", "draft open sent canceled", "offerte status", "angebotsstatus", "statut devis", "estado cotizacion", "status proposta"]
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up: ["How do I mark a quote as finalized?", "How do I mark as sent?", "How do I convert to invoice?"]
---

Die Angebotsstatus im Überblick:
• Entwurf: noch bearbeitbar, noch nicht an den Kunden gesendet
• Gesendet: beim Kunden zugestellt
• Akzeptiert: der Kunde hat dem Angebot zugestimmt
• Zurückgewiesen: der Kunde hat das Angebot abgelehnt
• Abgelaufen: das Gültig-bis-Datum ist verstrichen; das wird automatisch angezeigt

Auf der Angebotsdetailseite wird die aktuelle Phase als Lifecycle-Karte angezeigt: Entwurf → Gesendet, gefolgt von Angenommen oder Zurückgewiesen als Entscheidungszweig. Abgelaufene und stornierte Angebote werden am Ende des Ablaufs als Endergebnis dargestellt.

Wandeln Sie ein akzeptiertes Angebot in eine Rechnung um, bleibt das Angebot Akzeptiert und erhält die Markierung "In Rechnung umgewandelt".

Auf der Unterschriftsseite erhält der Kunde eine klare Erklärung, sobald ein Angebot nicht mehr unterschrieben werden kann: bei einem abgelaufenen Angebot bittet die Seite den Kunden, ein neues Angebot anzufordern; ein Angebot, das bereits in eine Rechnung oder Vereinbarung umgewandelt wurde, zeigt, dass nichts mehr zu tun bleibt; und ein bereits angenommenes Angebot kann nicht mehr abgelehnt werden. In diesem letzten Fall weist die Seite den Kunden an, bei einem Sinneswandel Kontakt aufzunehmen.

Tipp: Nutzen Sie die Filter in der Angebotsliste, um zuerst Entwürfe und abgelaufene Angebote zu prüfen.
