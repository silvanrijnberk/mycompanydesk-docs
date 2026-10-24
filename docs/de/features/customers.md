---
title: Kunden
description: "Verwalten Sie Ihre Kundendatenbank, mit Segmentkacheln, Suche und Filtern, und jeder Rechnung, jedem Angebot und Projekt am Kundendatensatz."
---

# Kunden

Verwalten Sie Ihre vollständige Kundendatenbank. Jede Rechnung, jedes Angebot und jedes Projekt ist mit einem Kundendatensatz verknüpft.

## Übersicht

Die Kundenseite listet alle Ihre Kunden mit den wichtigsten Informationen auf einen Blick auf. Verwenden Sie Suche und Filter, um Kunden schnell zu finden. Ein Klick auf einen Kunden in der Liste öffnet die Detailseite des Kunden.

## Segmente in der Kundenliste

Oben auf der Kundenseite zeigt eine Kachelleiste einen schnellen Überblick über Ihre Kundenbasis. Die Zahlen sind unabhängig von den Such- und Datumsfiltern der Liste, sodass eine Kachel immer das gesamte Buch widerspiegelt.

- **Kunden mit überfälligen Rechnungen**: wie viele Kunden Ihnen aktuell Geld schulden. Klicken Sie auf die Kachel, um die Seite mit überfälligen Rechnungen zu öffnen.
- **Inaktiv geworden**: aktive Kunden, die bereits einmal eine Rechnung bekommen haben, in den letzten Monaten aber keine mehr. Klicken Sie auf die Kachel, um die Liste auf diese Kunden zu filtern. Das Standardfenster beträgt sechs Monate; die Kachel nennt das Fenster, das der Arbeitsbereich verwendet (zum Beispiel „keine Rechnung seit 6 Monaten“).
- **Interessenten**: aktive Kunden, die noch nie in Rechnung gestellt wurden. Klicken Sie auf die Kachel, um die Liste auf Interessenten zu filtern.
- **Kunden gesamt**: die feste Anzahl aktiver Kunden. Klicken Sie auf die Kachel, um die Filter der Liste zurückzusetzen.

Mit dem Statusfilter oberhalb der Liste wechseln Sie auch zwischen Alle Status, Aktiv, Interessenten, Inaktiv geworden, Archiv und Papierkorb.

## Kunden erstellen

1. Öffnen Sie **Kunden** und klicken Sie auf **Erstellen**
2. Füllen Sie die Kundendetails aus:
   - **Name**: Firmen- oder Personenname (erforderlich)
   - **E-Mail**: Kontakt-E-Mail für den Rechnungsversand
   - **Telefon**: Kontakttelefonnummer
   - **Adresse**: Straße, Postleitzahl, Stadt, Land
   - **USt.-Nummer**: USt.-Registrierung des Kunden (für B2B)
   - **Kundennummer**: Automatisch generiert oder benutzerdefiniert
3. Klicken Sie auf **Speichern**

::: tip
Sie können Kunden auch direkt beim Erstellen einer Rechnung oder eines Angebots anlegen, ohne die Seite verlassen zu müssen.
:::

### KVK-Autofill

Beim Anlegen niederländischer Kunden kann MyCompanyDesk Unternehmensdaten automatisch aus dem KVK-Register (Kamer van Koophandel) übernehmen. Zwei Suchmethoden stehen zur Verfügung:

- **Namenssuche**: Beginnen Sie mit der Eingabe des Firmennamens im **Name**-Feld. Ein Dropdown zeigt passende KVK-Einträge mit Stadt und KVK-Nummer an. Wählen Sie einen Eintrag aus, um Name und KVK-Nummer automatisch zu übernehmen.
- **Handelsregisternummer-Suche**: Geben Sie eine 8-stellige KVK-Nummer im Feld **Handelsregister** ein. Beim Verlassen des Feldes sucht MyCompanyDesk die Nummer und füllt leere Felder (Name, Adresse, Postleitzahl, Stadt, Land) automatisch aus.

Bei erfolgreicher Suche erscheint ein Verifiziert-Badge neben dem Handelsregisterfeld. Wird die Nummer nicht gefunden, erscheint eine Fehlermeldung. Beide Suchfunktionen sind nur für niederländische Kunden verfügbar.

Klappt die Suche nicht, tragen Sie die Daten einfach selbst ein.

### Firmenlogos aus dem KVK-Register

Für niederländische Kunden mit einem registrierten Logo ruft MyCompanyDesk das Logo aus dem KVK-Register ab und zeigt es neben dem Firmennamen in der Kundenliste, auf der Kundendetailseite und in den KVK-Suchvorschlägen an, wenn Sie einen Kunden anlegen. Ist kein Logo verfügbar oder wird es noch geladen, fällt die App auf ein Monogramm zurück, damit die Zeilenhöhe nicht springt.

Das Logo dient nur der Anzeige und ersetzt nicht Ihr eigenes Arbeitsbereichslogo auf Rechnungen oder Dokumenten.

## Kundendetailseite

Die Kundendetailseite zeigt:

- **Kontaktinformationen**: Alle gespeicherten Daten
- **Rechnungsverlauf**: Jede an diesen Kunden gesendete Rechnung
- **Ausgabenverlauf**: Mit diesem Kunden verknüpfte Ausgaben
- **Verträge** - Aktive und inaktive Verträge, mit Signaturstatus-Badges und einem PDF-Vorschau-Icon, wenn E-Signing aktiviert ist
- **Dokumente**: für diesen Kunden hinterlegte Vereinbarungen, wie Allgemeine Geschäftsbedingungen, NDAs und Auftragsverarbeitungsvereinbarungen. Hat der Kunde einen Vertrag, aber keine Auftragsverarbeitungsvereinbarung, erscheint ein Hinweis mit einem Link, um eine zu erstellen.
- **Projekte**: Aktive und abgeschlossene Projekte
- **Statistiken**: Gesamtumsatz, ausstehender Saldo, durchschnittliche Zahlungsdauer

### Fehlende Auftragsverarbeitungsvereinbarung

Hat ein Kunde einen Vertrag, aber keine Auftragsverarbeitungsvereinbarung in Dokumenten, zeigt die Dokumenten-Karte auf der Kundendetailseite einen Hinweis und einen Link **Auftragsverarbeitungsvertrag erstellen**. Dies weist auf eine Compliance-Lücke an der Stelle hin, an der Sie wahrscheinlich handeln. Der Hinweis erscheint nur, wenn das Modul Verträge eingeschaltet ist (Office) und die Dokumenten-Karte sonst leer wäre.

### E-Mail-Zustellbarkeitsbanner

Ein Warnbanner erscheint oben auf der Kundendetailseite, wenn die E-Mail-Adresse des Kunden kürzlich gebounct (dauerhaft unzustellbar) ist oder eine Spam-Beschwerde ausgelöst hat. Das Banner bleibt still, wenn die Adresse in Ordnung ist.

- **Bounce**, zeigt ein rotes Banner mit dem Datum der letzten fehlgeschlagenen Zustellung und dem Ablehnungsgrund des E-Mail-Anbieters. Wurde kein spezifischer Grund mitgeteilt, erscheint ein allgemeiner Hinweis.
- **Beschwerde**, zeigt ein gelbes Banner, das davor warnt, dass der Kunde Ihre E-Mail als Spam markiert hat. Die Nachricht rät davon ab, weitere E-Mails an diese Adresse zu senden, ohne vorher Kontakt aufzunehmen.

Diese Informationen stammen von Provider-Ereignissen und dem Zustellstatus ausgehender Nachrichten und helfen Ihnen, Zustellprobleme zu erkennen, bevor Sie die nächste Rechnung oder das nächste Angebot versenden.

## Ein separater Zahler für einen Kunden

Manche Kunden zahlen ihre Rechnungen nicht selbst: ein Elternteil, Arbeitgeber oder Versicherer tut das. Im Kundenformular treffen Sie diese Wahl unter **Wer zahlt?**: **Zahlt selbst** oder **Jemand anderes zahlt**, mit einem anderen Kunden (einem bestehenden oder neuen) als Zahler. Danach gehen Rechnungen, Angebote, Erinnerungen, Unterschriftenanfragen, Stempelkarten-Nachrichten und das Kundenportal an den Zahler, während das Dokument den eigentlichen Kunden nennt. Auf der Kundenseite sehen Sie die Verbindung in beide Richtungen, als **Bezahlt von** und **Zahlt für**. Die Adresse des Zahlers ist die, die beim Finalisieren einer Rechnung vollständig sein muss, der Reverse-Charge folgt der USt-ID des Zahlers, die Auditdatei nennt den Zahler als Schuldner, und der Bankfeed erkennt Zahlungen, die vom Zahler kommen. Im Kundenportal sieht der Zahler nur die Rechnungen, die an ihn gingen, und eine Bewertungsanfrage nach einer bezahlten Rechnung geht ebenfalls an den Zahler.

## Einen Kunden mit einem eigenen Unternehmen verknüpfen

Wenn Sie mehr als ein eigenes Unternehmen haben, kann auf der Kundenseite eine Karte **Eigenes Unternehmen** erscheinen. Damit geben Sie an, dass dieser Kunde eines Ihrer eigenen Unternehmen ist, sodass seine Position in die untereinander-Positionen auf der Seite Arbeitsbereiche einfließt.

- Die Karte erscheint nur, wenn Sie mindestens zwei eigene Unternehmen haben und der Kunde nicht in dem Arbeitsbereich steht, den Sie gerade betrachten. Ein Unternehmen kann nicht seine eigene Gegenpartei sein.
- Wählen Sie eines Ihrer eigenen Unternehmen aus dem Dropdown, oder wählen Sie **Keines meiner eigenen Unternehmen**, um eine Verknüpfung zu entfernen.
- Die Verknüpfung wird automatisch erstellt, wenn die USt.-Nummer des Kunden mit einem Ihrer anderen Arbeitsbereiche übereinstimmt. Die Karte zeigt dann einen Hinweis, damit Sie erkennen, dass es automatisch passiert ist, und es korrigieren können, wenn es nicht stimmt.
- Eine manuelle Verknüpfung hat immer Vorrang vor einer automatischen. Die automatische Verknüpfung überschreibt nie eine Verknüpfung, die Sie selbst gesetzt haben.

## Stempelkarten

Eine Stempelkarte (auch: Fahrkarte oder Stundenpaket) lässt Ihre Kundin oder Ihren Kunden im Voraus für eine Anzahl von Terminen bezahlen. Sie erstellen sie über einen Artikel in Ihrem Leistungskatalog: schalten dort **Stempelkarte** ein und tragen den Namen ein, für wie viele Termine sie gilt und was pro Termin zu zahlen ist, für welche Leistungen sie gilt (leer lassen und sie gilt für jeden Termin), wie lange sie gültig bleibt und ob die Kundin oder der Kunde eine Erinnerung bekommt, wenn noch eine Entwertung übrig ist. Für die ganze Karte gilt ein einziger Umsatzsteuersatz: Leistungen mit anderem Satz teilen keine Karte, und solange die Kleinunternehmerregelung oder die Steuerbefreiung an ist, geht die Karte ohne Umsatzsteuer aus dem Haus.

Verkauft wird ab der Kundendetailseite über **Stempelkarte verkaufen**, in einem einzigen Formular: die Karte kommt aus Ihrem Leistungskatalog mit seinem Preis, änderbar für diesen Kunden, Sie geben an, ob bereits bezahlt wurde (Bargeld, Tikkie oder Banküberweisung, nichts steht vorab fest), und MyCompanyDesk erstellt im selben Moment die endgültige Rechnung für Ihre Bücher, mit der Karte verknüpft mit dieser Rechnungsposition. Umgekehrt passiert dasselbe bei einer gewöhnlichen Rechnung: Machen Sie eine endgültig mit einer Stempelkarten-Position, entsteht die Karte gleich mit.

Ihr Kunde sieht seine Karten im Kundenportal und über einen Teilen-Link, der kein Login verlangt: wie viele Entwertungen übrig sind und die Historie von Verkauf und jeder Entwertung. Den Stand oder eine Erinnerung senden Sie selbst, über WhatsApp oder E-Mail, und der Link lässt sich entziehen und neu ausgeben. Will ein Kunde aussteigen? Mit **Rückerstattung** bekommen die ungenutzten Termine ihr Geld über eine Gutschrift zurück, oder Sie legen die Karte mit **Beenden** still; Ihre Bücher werden automatisch nachgezogen und eine beendete Karte lässt sich nicht mehr entwerten.

Entwertet wird auch dort, wo gearbeitet wird. Schließen Sie einen Termin für einen Kunden mit Karte ab, bietet die App **1 entwerten** (die Entwertung setzt den Termin auf Abgeschlossen) neben **Nicht erschienen**, mit der Rückgängig-Aktion direkt daneben. In einer Gruppensitzung haken Sie unter **Wer war da?** jemanden ab und entwerten damit sofort eine Karte dieses Teilnehmenden; das Häkchen weg zieht es zurück. Wer für diese Sitzung schon bezahlt hat, steht auf der Liste mit dem Hinweis, dass nichts entwertet wird. Das Dashboard hält die fast leeren und leeren Karten zusammen, mit der Erinnerung einen Tipp entfernt.

## Um eine Bewertung bitten

Die Schaltfläche **Um eine Bewertung bitten** steht bei einem Kunden, auf einer bezahlten Rechnung und bei einem abgeschlossenen Termin. Das Fenster zeigt vorab, was versendet wird: eine E-Mail, die Sie bearbeiten können, oder einen WhatsApp-Text, der beim Bestätigen WhatsApp öffnet. Wohin Ihr Kunde gelangt, bestimmt Ihr **Bewertungslink**, gespeichert im Fenster und unter **Einstellungen › Um Bewertungen bitten**. Dort wählen Sie auch, wo Bewertungen gesammelt werden (Ihr Google-Profil, Trustpilot oder Ihr eigener Link), und Sie können automatische Anfragen einschalten: nach einem abgeschlossenen Termin und nach einer vollständig bezahlten Rechnung, eine Anfrage pro Auftrag, nie eine Erinnerung. Ein Protokoll hält fest, was versendet wurde, wer durchgeklickt hat und warum eine Anfrage übersprungen wurde.

## Aktionen

- **Bearbeiten**: Kundeninformationen aktualisieren
- **Rechnung erstellen**: eine neue Rechnung mit diesem Kunden vorausgefüllt starten
- **Angebot erstellen**: ein neues Angebot für diesen Kunden starten
- **Neuer Arbeitsbericht**: einen Arbeitsbericht für diesen Kunden starten (wenn das Modul Arbeitsberichte eingeschaltet ist)
- **Zusammenführen mit…**: einen doppelten Kunden mit diesem zusammenführen
- **Archivieren**: ins Archiv verschieben (kann später wiederhergestellt werden)

:::caution
Beim Archivieren eines Kunden mit einer aktiven wiederkehrenden Rechnung oder laufenden Verträgen erscheint zuerst eine Bestätigungsfrage. Die Warnung sagt, was Archivieren bewirkt: Solange ein Kunde archiviert ist, erstellt MyCompanyDesk keine wiederkehrenden Rechnungen mehr und rechnet keine Verträge mehr ab, und übersprungene Zeiträume werden später nicht nachberechnet. Beenden Sie die wiederkehrende Rechnung oder den Vertrag zuerst, wenn diese Abrechnung weiterlaufen soll.
:::

Ein Kunde, der ein Interessent ist (Prospekt, noch nie fakturiert), erhält keine Aktion „Rechnung erstellen", auch nicht im Menü „Mehr", und der Server lehnt eine Rechnung für ihn ohnehin ab. Die Kundenseite bietet stattdessen die Schaltfläche **Nach Kunden umrechnen**; sobald der Status aktiv ist, erscheinen alle Rechnungsaktionen.

- **Löschen**: den Kunden in den Papierkorb verschieben

## Massenaktionen

Wählen Sie mehrere Kunden für:

- **Zu Favoriten hinzufügen**: Kunden als Favoriten markieren
- **Archivieren**: Kunden in einem Schritt archivieren
- **Löschen**: Kunden in den Papierkorb verschieben

Im Archiv wählen Sie **Zu aktiv wiederherstellen** oder **In Papierkorb verschieben**; im Papierkorb **Zum Archiv wiederherstellen** oder **Endgültig löschen**.

## Kunden importieren

Importieren Sie Ihre bestehende Kundendatenbank aus CSV:

1. Klicken Sie auf der Kundenseite auf **Importieren** (oder öffnen Sie **Einstellungen › Wechseln** und wählen Sie **Kunden importieren**)
2. Prüfen Sie, dass **Kunden** als Datentyp gewählt ist
3. Laden Sie Ihre CSV-Datei hoch
4. Ordnen Sie Ihre CSV-Spalten den MyCompanyDesk-Feldern zu (Name, E-Mail, Adresse usw.)
5. Überprüfen Sie die Vorschau
6. Bestätigen Sie den Import

## Kunden exportieren

Laden Sie Ihre Kundenliste als CSV-Datei unter **Einstellungen › Daten herunterladen** herunter (in jedem Abonnement verfügbar).

## Abgewanderte Kunden

Der Reiter **Weggeblieben** im Kundenbericht **Wer sind meine Kunden?** unter [Berichte](/de/features/reports) (Office) listet Kunden, die früher gekauft haben, aber dieses Jahr noch keine Rechnung erhalten haben. Die Ansicht zeigt die Anzahl, wie viel sie früher zusammen ausgegeben haben, und das Datum ihrer letzten Rechnung, mit Links, um jeden Kunden direkt anzurufen oder per E-Mail zu kontaktieren. Sie lebt in Berichte, weil die Reaktivierung alter Kunden kampagnenartige Arbeit ist, die nicht in einen nach Dringlichkeit sortierten Feed passt.

Die Standard-Kundenliste segmentiert ebenfalls inaktive Kunden selbst; der Reiter Weggeblieben fügt den kampagnenartigen Hinweis hinzu, ohne diesen Filter zu ersetzen.

## Tipps

- Halten Sie Kunden-E-Mails aktuell: Sie werden für den Rechnungsversand verwendet
- Verwenden Sie die Suchleiste für sofortigen unscharfen Abgleich über alle Kundenfelder
- Markieren Sie Ihre wichtigsten Kunden als Favoriten für schnellen Zugriff

