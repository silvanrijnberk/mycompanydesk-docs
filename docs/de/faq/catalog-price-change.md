---
title: Alle Preise auf einmal ändern
description: "Gehen Sie zu Angebot und klicken Sie auf Preise, um zu sehen, was Sie verlangen, was Sie dafür erhalten haben und was eine Erhöhung bringen würde."
last_verified: 2026-09-03
chatbot:
  triggers:
    - "alle preise ändern"
    - "preise auf einmal ändern"
    - "massenpreisänderung"
    - "preise erhöhen"
    - "preise senken"
    - "change all prices"
    - "bulk price change"
  actions: []
  follow_up:
    - "Werden Preise auf bereits gesendeten Rechnungen angepasst?"
    - "Kann ich eine Preisänderung rückgängig machen?"
---

Gehen Sie zu **Angebot** und klicken Sie auf **Preise**, um viele Preise auf einmal zu aktualisieren. Die Seite zeigt, was Sie verlangen, was Sie dieses Jahr tatsächlich für Ihr Angebot erhalten haben und was eine Erhöhung bei gleichen Verkäufen bringen würde.

## So funktioniert es

1. Wählen Sie, was Sie ändern möchten:
   - **Alles**: jedes Element in Ihrem Angebot.
   - **Dienstleistungen**, **Produkte** oder **Abonnements**: nur Elemente dieser Art.
2. Wählen Sie, um wie viel:
   - **Prozentsatz**: erhöht oder senkt jeden Preis um einen Prozentsatz.
   - **Fester Betrag**: addiert oder subtrahiert den gleichen Betrag von jedem Preis.
   - Verwenden Sie ein Minuszeichen, um Preise zu senken.
3. Wählen Sie die Rundung:
   - **Auf Cent** behält die normale Dezimalpreis.
   - **Auf ganze Euro** rundet auf ganze Euro.
4. Klicken Sie auf **Änderungen prüfen**, um eine Vorschau zu öffnen, die jeden Artikel mit altem und neuem Preis auflistet.
5. Prüfen Sie die Liste und klicken Sie auf **Preise ändern**, um sie anzuwenden.

Die Vorschau zeigt auch, welche Artikel bestehen bleiben und warum: weil sie keinen Preis haben (zum Beispiel Artikel mit Preis auf Anfrage), weil es ein Paket ist, dessen Preis die Summe seiner Bestandteile ist, oder weil die Rundung den Preis nicht verändert. Außerdem warnen wir Sie, wenn eine aktive Aktion dadurch enden würde, weil der Aktionspreis dann nicht mehr unter dem regulären Preis liegt. Wenn Sie Abonnements auswählen, erklärt die Vorschau auch, dass laufende Abonnenten ihren aktuellen Preis behalten; der neue Preis gilt erst für die nächste Anmeldung.

## Was sich ändert und was nicht

- Es werden nur die Preise in Ihrem **Angebot** geändert.
- Bestehende Rechnungen, Angebote und Verträge behalten die Preise, mit denen sie erstellt wurden.
- Laufende Abonnements behalten den Preis, zu dem sie abgeschlossen wurden. Wenn Sie bestehende Abonnenten ebenfalls erhöhen möchten, ändern Sie deren wiederkehrende Rechnung.
- Sie können eine Änderung direkt nach dem Anwenden rückgängig machen. Ein einziger Rückgängig-Schritt macht die gesamte Änderung auf einmal rückgängig.

## Inflationshinweis beim Bearbeiten eines einzelnen Artikels

Wenn Sie einen einzelnen Katalogartikel mit Festpreis bearbeiten, kann neben dem Preisfeld ein Inflationshinweis erscheinen. Er misst ab dem Datum, an dem der Preis zuletzt festgelegt wurde (oder ab der Erstellung des Artikels, falls der Preis nie geändert wurde). Rückgängig-Machen zählt nicht als neue Preisentscheidung, sodass der Hinweis an einem echten Preismoment verankert bleibt.

Der Hinweis zeigt Preisindexwerte als anklickbare Vorschläge. Jede Zeile zeigt den Zeitraum, den sie abdeckt, die prozentuale Veränderung und den Betrag, den Ihr aktueller Preis bei Anwendung erreichen würde. Klicken Sie einen Vorschlag an, um den Betrag in das Preisfeld zu übernehmen. Sie müssen den Artikel selbst speichern, sodass Sie die Änderung immer prüfen, bevor sie wirksam wird.

Der Hinweis erscheint nur im Bearbeitungsmodus und nur für Artikel mit Festpreis. Artikel mit Preis auf Anfrage und brandneue Artikel haben keine Historie, an der gemessen werden könnte, deshalb zeigen sie ihn nicht.

## Preisliste drucken

Sie können Ihr Angebot auch als kundenorientierte Preisliste ausdrucken. Öffnen Sie **Angebot** und klicken Sie auf **Preisliste**, um `/aanbod/prijslijst` zu öffnen.

Die Seite listet Ihre aktiven Artikel gruppiert nach **Dienstleistungen**, **Produkten** und **Abonnements**. Leere Gruppen werden übersprungen. Schalten Sie **Nur was auf meiner Website steht** ein, um dieselbe Auswahl zu drucken, die in Ihrem Website-Builder angezeigt wird. Klicken Sie auf **Drucken oder als PDF speichern**, um den Druckdialog Ihres Browsers zu nutzen.

Die Preise werden mit denselben Hilfsmitteln berechnet wie an allen anderen Stellen der App, sodass das Blatt dieselben Beträge zeigt, die ein Kunde online sehen würde. Am Fuß steht, dass alle Preise ohne USt. sind und der Liste keine Rechte entnommen werden können.
