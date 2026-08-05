---
title: "Angebotsnummerierung"
last_verified: 2026-08-05
chatbot:
  triggers:
    - "quote number"
    - "quote numbering"
    - "change quote number"
    - "quote format"
    - "offerte nummer"
    - "offertenummer"
    - "angebotsnummer"
    - "numerotation devis"
    - "numero cotizacion"
    - "numero proposta"
    - "numero preventivo"
  actions:
    - { label: "Open quotes", to: "/quotes" }
  follow_up:
    - "How do I set quote validity?"
    - "How do I edit a quote number safely?"
    - "How do I create a new quote?"
---

Angebotsnummern werden automatisch vergeben:
1. Erstellen Sie ein Angebot; MyCompanyDesk vergibt automatisch die nächste Nummer in Ihrer Serie
2. Es gibt kein Nummernformat zu konfigurieren, die Serie bleibt von selbst sauber fortlaufend
3. Sie brauchen eine bestimmte Nummer auf einem Entwurf? Öffnen Sie das Angebot im Formular und klicken Sie in der Seitenleiste auf "Eigene Nummer eingeben"

## Manuelle Nummerierung

Standardmäßig nummeriert MyCompanyDesk Angebote automatisch. Wenn Ihr Arbeitsbereich die manuelle Nummerierung verwendet, erhält ein Angebot erst eine Nummer, wenn Sie es versenden oder als versendet markieren.

Dann öffnet sich ein Dialog, in dem Sie die Angebotsnummer eingeben. MyCompanyDesk schlägt die nächste Nummer in Ihrer Serie vor, aber Sie können auch eine beliebige andere Nummer eingeben. Die Nummer ist Pflicht und muss eindeutig sein.

Um zwischen automatischer und manueller Nummerierung zu wechseln, gehen Sie zu **Einstellungen > Nummerierung**.

Tipp: Sobald ein Angebot versendet wurde, ist es gesperrt, einschließlich der Nummer. Legen Sie eine eigene Nummer daher fest, solange das Dokument noch ein Entwurf ist.
