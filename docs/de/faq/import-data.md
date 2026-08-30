---
title: "Daten importieren"
description: "MyCompanyDesk kann Kunden, Rechnungen und Ausgaben aus einer CSV-Datei importieren. Andere Datentypen können nicht importiert werden."
last_verified: 2026-08-15
chatbot:
  triggers:
    - "import data"
    - "import csv"
    - "import customers"
    - "import invoices"
    - "bulk import"
    - "upload data"
    - "data importeren"
    - "gegevens importeren"
    - "daten importieren"
    - "importer donnees"
  actions:
    - { label: "Open import page", to: "/profile/import" }
  follow_up:
    - "How do I export my data?"
    - "How do I add customers manually?"
---

MyCompanyDesk kann Kunden, Rechnungen und Ausgaben aus einer CSV-Datei importieren. Andere Datentypen können nicht importiert werden.

Die Importseite liegt unter `/profile/import`. Es gibt keinen Menüeintrag dafür; öffnen Sie sie über die Schaltfläche oben oder indem Sie die Adresse direkt eingeben. Danach:

1. Wählen Sie den Datentyp: Kunden, Rechnungen oder Ausgaben
2. Laden Sie Ihre CSV-Datei hoch
3. Ordnen Sie die Spalten Ihrer Datei den richtigen Feldern zu und bestätigen Sie die Vorschau

Es gibt keine CSV-Vorlage zum Herunterladen; der Import arbeitet mit den Spalten Ihrer eigenen Datei und lässt Sie diese beim Hochladen zuordnen.

Für Ausgaben werden CSV-Dateien in niederländischer Schreibweise erkannt. Beträge wie 100,50 oder 1.234,56 und Daten im Format tt-mm-jjjj werden als Tag-Monat-Jahr gelesen. Das entspricht den Betragsfeldern in der Web-App, sodass Tippen und Importieren nach denselben Regeln funktionieren.

Wenn eine Spalte mit dem MwSt.-Betrag vorhanden ist, leitet MyCompanyDesk daraus auch den MwSt.-Satz ab. Fehlen sowohl MwSt.-Betrag als auch MwSt.-Satz, bleibt der Satz bei 0, anstatt auf den Standardsatz zu fallen. Die Ausgabe erscheint dann in der Prüfung "MwSt. fehlt" vor der Abgabe.

Wenn Sie im Import selbst einen MwSt.-Betrag von 0 angeben, behält MyCompanyDesk diesen Wert bei, anstatt ihn stillschweigend durch den Standardsatz der Kategorie zu ersetzen. So können Sie Ausgaben importieren, die tatsächlich umsatzsteuerfrei sind, ohne dass nachträglich ein anderer Satz eingetragen wird.

Tipp: Beginnen Sie mit einem kleinen Testimport, um die Zuordnung zu prüfen, bevor Sie größere Datensätze importieren.
