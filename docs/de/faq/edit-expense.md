---
title: "Ausgabe bearbeiten"
description: "So bearbeiten Sie eine Ausgabe: Öffnen Sie sie aus der Liste, klicken Sie auf Bearbeiten und ändern Sie Lieferant, Betrag, Kategorie oder Datum."
last_verified: 2026-08-16
chatbot:
  triggers: ["edit expense", "change expense", "modify expense", "update expense", "correct expense", "uitgave bewerken", "uitgave wijzigen", "ausgabe bearbeiten", "modifier depense"]
  actions:
    - { label: "Open expenses", to: "/expenses" }
  follow_up: ["How do I change the expense category?", "How do I upload a receipt?", "How do I restore a trashed expense?"]
---
So bearbeiten Sie eine Ausgabe:
1. Öffnen Sie die Ausgabe aus der Liste
2. Klicken Sie auf „Bearbeiten“
3. Aktualisieren Sie Lieferant, Betrag, Kategorie, Datum oder Notizen. Das Speichern mit einem Betrag von 0,00 EUR wird verhindert, es sei denn, es handelt sich um einen echten Nullwert wie eine rein MwSt.-haltige Gutschrift.
4. Speichern Sie Ihre Änderungen

Eine Ausgabe im Papierkorb kann nicht bearbeitet werden. Stellen Sie sie zuerst aus dem Papierkorb wieder her und bearbeiten Sie sie dann.

Die gleichen Einschränkungen gelten, wenn Sie einen KI-Vorschlag übernehmen. Eine Ausgabe im Papierkorb oder eine gesperrte MwSt.-Periode blockiert die Übernahme, und der Vorschlag wird nicht geschrieben.
