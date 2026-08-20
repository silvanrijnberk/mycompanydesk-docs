---
title: Cookies und Analytics
description: "Wie MyCompanyDesk Cookies, lokalen Speicher, Analytics und Session-Aufzeichnungen nutzt, und wie Sie Ihre Auswahl ändern."
last_verified: 2026-08-20
---

# Cookies und Analytics

Auf dieser Seite erfahren Sie, wie MyCompanyDesk Cookies, lokalen Speicher und Analytics einsetzt. Sie gilt sowohl für die öffentliche Marketing-Website (mycompanydesk.nl / mycompanydesk.com) als auch für die Web-App.

## Marketing-Website

Die Marketing-Website zeigt beim ersten Besuch ein Cookie-Einwilligungsbanner. Das Banner fragt, ob wir Analytics-Speicher setzen dürfen. Sie können Ihre Entscheidung später jederzeit über das Banner ändern.

Analytics ist opt-in. Bis Sie zustimmen, initialisiert die Marketing-Website kein Analytics, sendet keine Pageviews oder Events und speichert keine Analytics-ID. Wenn Sie also „Nur essenziell“ wählen, hinterlassen Sie keine Analytics-Spur.

Wenn Sie zustimmen, startet die Site Analytics und speichert eine anonyme Analytics-ID im `localStorage` Ihres Browsers unter dem Schlüssel `mcd_phid`. Diese ID wird nur verwendet, um nachzuvollziehen, wie Besucher durch die Seite navigieren. Sie ist nicht mit Ihrem Account oder Ihrer E-Mail-Adresse verknüpft.

Mit Ihrer Zustimmung können wir außerdem Sessions Ihres Besuchs auf der Marketing-Website aufzeichnen. Diese Aufzeichnungen helfen uns zu erkennen, wo die Seite besser werden kann. Alles, was Sie in Eingabefelder tippen, wird in diesen Aufnahmen maskiert und für uns nicht lesbar. Die Daten sind pseudonymisiert.

Wenn Sie später über das Banner ablehnen oder Ihr Browser ein Do-Not-Track-Signal (DNT) sendet, wird keine Analytics-ID gespeichert und keine neuen Analytics-Events gesendet. Das Banner kann dennoch erscheinen, da es auch Nicht-Analytics-Cookies abdeckt.

## Von der Marketing-Website zur App

Wenn Sie von der Marketing-Website aus in die App klicken, kann die Marketing-Website einen kurzlebigen `phid`-Parameter anhängen. Die App entfernt diesen Parameter sofort nach dem Laden und behält ihn nicht in der URL. Er dient nur dazu, denselben anonymen Besuch mit der App-Sitzung zu verbinden, damit wir erkennen können, ob die Website Menschen bei der Anmeldung hilft.

Dem Parameter wird nur dann vertraut, wenn Sie tatsächlich von unserer eigenen Marketing-Website kommen. Gefälschte oder weitergeleitete Links werden ignoriert.

## Innerhalb der App

Die App zeigt **kein** Cookie-Banner. Stattdessen ist sie so konzipiert, dass keine Analytics-Cookies oder Cross-Session-Tracking für anonyme Besucher entstehen:

- Analytics-Status liegt im `sessionStorage`, nicht in Cookies. Er übersteht Neuladungen innerhalb desselben Tabs, wird aber gelöscht, sobald Sie den Tab schließen.
- Die App respektiert das Do-Not-Track-Signal Ihres Browsers.
- Es werden keine Session-Aufzeichnungen erstellt.
- Sobald Sie sich anmelden, identifiziert die App Sie anhand Ihrer echten Benutzer-ID, sodass spätere Ereignisse demselben Account zugeordnet werden.

Das bedeutet, dass anonyme Seitenaufrufe in der App nicht über mehrere Besuche hinweg verknüpft werden. Die Funnel von Anmeldung bis zahlendem Nutzer wird primär durch serverseitige Ereignisse gemessen, die an Ihre Benutzer-ID gebunden sind, nicht an Browserspeicher.

## Was wir nicht tun

- Wir verkaufen oder teilen keine Analytics-Daten mit Dritten für Werbung.
- Wir verfolgen Sie nicht über nicht zusammenhängende Websites hinweg.
- Wir verwenden Analytics-Daten nicht, um individuelle Werbeprofile zu erstellen.

## Ihre Möglichkeiten

- Nutzen Sie das Cookie-Banner auf der Marketing-Website, um Analytics-Speicher zuzulassen oder abzulehnen.
- Aktivieren Sie Do Not Track in Ihrem Browser, um die Speicherung von Analytics-IDs zu verhindern.
- Löschen Sie Cookies und lokalen Speicher für mycompanydesk.nl / mycompanydesk.com in Ihrem Browser, um gespeicherte IDs zu entfernen.

Bei Fragen kontaktieren Sie [support@mycompanydesk.com](mailto:support@mycompanydesk.com).
