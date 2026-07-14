---
title: Cookies und Analytics
last_verified: 2026-07-14
---

# Cookies und Analytics

Auf dieser Seite erfährst du, wie MyCompanyDesk Cookies, lokalen Speicher und Analytics einsetzt. Sie gilt sowohl für die öffentliche Marketing-Website (mycompanydesk.nl / mycompanydesk.com) als auch für die Web-App.

## Marketing-Website

Die Marketing-Website zeigt beim ersten Besuch ein Cookie-Einwilligungsbanner. Das Banner fragt, ob wir Analytics-Speicher setzen dürfen. Du kannst deine Entscheidung später jederzeit über das Banner ändern.

Wenn du zustimmst, speichert die Site eine anonyme Analytics-ID im `localStorage` deines Browsers unter dem Schlüssel `mcd_phid`. Diese ID wird nur verwendet, um nachzuvollziehen, wie Besucher durch die Seite navigieren. Sie ist nicht mit deinem Account oder deiner E-Mail-Adresse verknüpft.

Wenn du ablehnst oder dein Browser ein Do-Not-Track-Signal (DNT) sendet, wird keine Analytics-ID gespeichert. Das Banner kann dennoch erscheinen, da es auch Nicht-Analytics-Cookies abdeckt.

## Von der Marketing-Website zur App

Wenn du von der Marketing-Website aus in die App klickst, kann die Marketing-Website einen kurzlebigen `phid`-Parameter anhängen. Die App entfernt diesen Parameter sofort nach dem Laden und behält ihn nicht in der URL. Er dient nur dazu, denselben anonymen Besuch mit der App-Sitzung zu verbinden, damit wir erkennen können, ob die Website Menschen bei der Anmeldung hilft.

Der Parameter wird nur dann vertraut, wenn du tatsächlich von unserer eigenen Marketing-Website kommst. Gefälschte oder weitergeleitete Links werden ignoriert.

## Innerhalb der App

Die App zeigt **kein** Cookie-Banner. Stattdessen ist sie so konzipiert, dass keine Analytics-Cookies oder Cross-Session-Tracking für anonyme Besucher entstehen:

- Analytics-Status liegt im `sessionStorage`, nicht in Cookies. Er übersteht Neuladungen innerhalb desselben Tabs, wird aber gelöscht, sobald du den Tab schließt.
- Die App respektiert das Do-Not-Track-Signal deines Browsers.
- Es werden keine Session-Aufzeichnungen erstellt.
- Sobald du dich anmeldest, identifiziert die App dich anhand deiner echten Benutzer-ID, sodass spätere Ereignisse demselben Account zugeordnet werden.

Das bedeutet, dass anonyme Seitenaufrufe in der App nicht über mehrere Besuche hinweg verknüpft werden. Die Funnel von Anmeldung bis zahlendem Nutzer wird primär durch serverseitige Ereignisse gemessen, die an deine Benutzer-ID gebunden sind, nicht an Browserspeicher.

## Was wir nicht tun

- Wir verkaufen oder teilen keine Analytics-Daten mit Dritten für Werbung.
- Wir verfolgen dich nicht über nicht zusammenhängende Websites hinweg.
- Wir verwenden Analytics-Daten nicht, um individuelle Werbeprofile zu erstellen.

## Deine Möglichkeiten

- Nutze das Cookie-Banner auf der Marketing-Website, um Analytics-Speicher zuzulassen oder abzulehnen.
- Aktiviere Do Not Track in deinem Browser, um die Speicherung von Analytics-IDs zu verhindern.
- Lösche Cookies und lokalen Speicher für mycompanydesk.nl / mycompanydesk.com in deinem Browser, um gespeicherte IDs zu entfernen.

Bei Fragen kontaktiere [support@mycompanydesk.com](mailto:support@mycompanydesk.com).
