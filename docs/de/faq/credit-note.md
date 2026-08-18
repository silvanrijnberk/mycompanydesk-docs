---
title: "Gutschrift"
last_verified: 2026-08-16
chatbot:
  triggers: ["credit note", "create credit note", "issue credit", "credit invoice", "creditnota", "creditnota aanmaken", "gutschrift erstellen", "note de credit", "avoir"]
  actions:
    - { label: "Open invoices", to: "/invoices" }
  follow_up: ["How do I cancel an invoice instead?", "How does a credit note affect my VAT?", "How do I find the original invoice?"]
---

So erstellen Sie eine Gutschrift:
1. Öffnen Sie die Originalrechnung, die Sie gutschreiben möchten
2. Klicken Sie auf der Detailseite auf "Gutschrift / Korrektur erstellen"
3. MyCompanyDesk erstellt in einem Schritt eine vollständige, endgültige Gutschrift: jede Position des Originals wird negativ übernommen und die Gutschrift erhält die nächste Nummer in Ihrer Serie
4. Senden Sie die Gutschrift an den Kunden

Stornierte Rechnungen können nicht gutgeschrieben werden. Wenn Sie eine bereits stornierte Rechnung korrigieren möchten, duplizieren Sie die stornierte Rechnung und nehmen Sie dort die Änderungen vor.

Die Beträge lassen sich beim Erstellen nicht anpassen; versendete Dokumente sind gesperrt, die Gutschrift spiegelt das Original daher immer exakt wider. Für eine Teilkorrektur erstellen Sie zuerst die vollständige Gutschrift und stellen anschließend eine neue Rechnung über den richtigen Betrag aus.

MyCompanyDesk verhindert außerdem, dass Sie mehr gutschreiben als der Betrag der Originalrechnung. Sie können mehrere Teilgutschriften für dieselbe Rechnung ausstellen, aber sobald die Summe der Gutschriften den Rechnungsbetrag erreicht, lässt sich für diese Rechnung keine weitere Gutschrift erstellen.

Eine Gutschrift erstattet dem Kunden Geld und hat daher kein eigenes Zahlungsziel. Im Kundenportal werden die Fälligkeitszeile und die Tabelle früherer Rechnungen für Gutschriften ausgeblendet. Die Schaltfläche "Zahlung bestätigen" wird ebenfalls ausgeblendet, weil eine Gutschrift dem Kunden Geld erstattet und nicht vom Kunden verlangt, zu zahlen. Wenn die Originalrechnung vollständig gutgeschrieben wurde, blendet das Portal auch die Zahlungsschaltflächen auf dieser Rechnung aus, zeigt die Zahlungsübersicht als Gutgeschrieben an und nennt den Gutschriftbetrag in der Saldenaufschlüsselung.

Im offene-Posten-Bericht wird der Betrag der Gutschrift gegen die korrigierte Originalrechnung verrechnet, sodass der Saldo des Kunden widerspiegelt, was tatsächlich noch offen ist.

Im Backoffice zeigt die Detailseite der Gutschrift an, ob der Gutschriftbetrag noch offen oder bereits verrechnet ist. So sehen Sie auf einen Blick, ob Sie den Kunden noch erstatten oder verrechnen müssen.

Wenn die Originalrechnung vollständig gutgeschrieben wurde, zeigt deren Detailseite nicht länger die Kennzeichnung als vollständig bezahlt. Stattdessen steht dort, dass die Rechnung gutgeschrieben wurde und nichts mehr offen ist. Hat der Kunde bereits vor der Gutschrift bezahlt und übersteigt diese Zahlung nun den verbleibenden Betrag, zeigt die Seite auch den Rückerstattungsbetrag, den Sie dem Kunden schulden.

Wenn Sie eine Gutschrift per E-Mail senden, verwendet sie eine eigene Vorlage. Der Betreff benennt sie als Gutschrift, der Text nennt den gutgeschriebenen Betrag als positiven Betrag und es wird nicht um Zahlung gebeten noch ein Zahlungsziel angezeigt. Das PDF selbst verwendet "Gutschrift an", "Gutschriftsdetails" und "Gutschriftsnr." anstelle der Rechnungsbezeichnungen, damit eine Gutschrift nie versehentlich als Rechnung erscheint. Solange die Gutschrift noch ein Entwurf ist, bietet die Aktionskarte nur an, sie zu senden; nach dem Versand erscheinen keine Mahnungs- oder Inkassoaktionen, weil eine Gutschrift dem Kunden Geld erstattet anstatt danach zu verlangen.

Tipp: Da Sie die Gutschrift direkt aus der Originalrechnung erstellen, passen beide Dokumente exakt zusammen und Ihre Buchhaltung bleibt stimmig.
