---
title: Cookies und Analytics
description: "Wie MyCompanyDesk Cookies, lokalen Speicher, Analytics und Session-Aufzeichnungen nutzt, und wie Sie Ihre Auswahl ändern."
last_verified: 2026-10-19
---

# Cookies und Analytics

Auf dieser Seite erfahren Sie, wie MyCompanyDesk Cookies, lokalen Speicher und Analytics einsetzt. Sie gilt sowohl für die öffentliche Marketing-Website (mycompanydesk.nl / mycompanydesk.com) als auch für die Web-App.

## Marketing-Website

Die Marketing-Website zeigt beim ersten Besuch ein Cookie-Einwilligungsbanner. Das Banner fragt, ob wir Analytics-Speicher setzen dürfen. Ihre Entscheidung wird in Ihrem Browser gespeichert. Möchten Sie sie später ändern, löschen Sie die Websitedaten der Marketing-Website in Ihrem Browser; beim nächsten Besuch erscheint das Banner wieder.

Analytics mit Kennung ist opt-in. Ohne Ihre Zustimmung zählen wir nur anonym, wie oft eine Seite aufgerufen wird, über welche Website oder Suchmaschine Besucher kommen und welche Schaltfläche zur App oder zum App-Store angeklickt wird. Dafür speichern wir nichts auf Ihrem Gerät, verwenden keine Kennung und machen keine Aufzeichnungen. Ihre IP-Adresse wird nicht gespeichert. Bei **Nur notwendige** bleibt so nichts von Analytics auf Ihrem Gerät.

Wenn Sie zustimmen, startet die Site Analytics und speichert eine anonyme Analytics-ID im `localStorage` Ihres Browsers unter dem Schlüssel `mcd_phid`. Diese ID wird nur verwendet, um nachzuvollziehen, wie Besucher durch die Seite navigieren. Sie ist nicht mit Ihrem Account oder Ihrer E-Mail-Adresse verknüpft.

Mit Ihrer Zustimmung können wir außerdem Sessions Ihres Besuchs auf der Marketing-Website aufzeichnen. Diese Aufzeichnungen helfen uns zu erkennen, wo die Seite besser werden kann. Alles, was Sie in Eingabefelder tippen, wird in diesen Aufnahmen maskiert und für uns nicht lesbar. Die Daten sind pseudonymisiert.

Lehnen Sie ab (mit **Nur notwendige** oder indem Sie das Banner mit Escape schließen), läuft dieses anonyme Zählen einfach weiter: Es wird keine Analytics-Kennung gespeichert und keine Aufzeichnung gemacht. Sendet Ihr Browser ein Do-Not-Track-Signal (DNT), messen wir gar nichts, auch dieses anonyme Zählen nicht. Das Banner kann dennoch erscheinen, da es auch Nicht-Analytics-Cookies abdeckt.

## Von der Marketing-Website zur App

Haben Sie zugestimmt und klicken Sie von der Marketing-Website aus in die App, hängt die Marketing-Website einen kurzlebigen `phid`-Parameter an. Die App entfernt diesen Parameter sofort nach dem Laden und behält ihn nicht in der URL. Er dient nur dazu, denselben anonymen Besuch mit der App-Sitzung zu verbinden, damit wir erkennen können, ob die Website Menschen bei der Anmeldung hilft.

Dem Parameter wird nur dann vertraut, wenn Sie tatsächlich von unserer eigenen Marketing-Website kommen. Gefälschte oder weitergeleitete Links werden ignoriert.

Außerdem gibt ein Link zur App oder zum App-Store mit, wie Sie zu uns gekommen sind: die verweisende Website (ohne den Teil nach dem Fragezeichen), die Seite, auf der Sie gelandet sind, etwaige Kampagnencodes und die Sprache der Seite. Darin steckt keine Kennung, und auf Ihrem Gerät wird nichts gespeichert, deshalb geschieht das auch ohne Zustimmung; sendet Ihr Browser Do Not Track, dann nicht. Auch diesen Parameter entfernt die App sofort aus der URL. Wenn Sie sich registrieren, speichern wir diese Herkunft bei Ihrem neuen Konto, damit wir sehen, welche Kanäle neue Nutzer bringen.

## Innerhalb der App

Die App zeigt **kein** Cookie-Banner. Stattdessen ist sie so konzipiert, dass keine Analytics-Cookies oder Cross-Session-Tracking für anonyme Besucher entstehen:

- Analytics-Status liegt im `sessionStorage`, nicht in Cookies. Er übersteht Neuladungen innerhalb desselben Tabs, wird aber gelöscht, sobald Sie den Tab schließen.
- Die App respektiert das Do-Not-Track-Signal Ihres Browsers.
- Sind Sie angemeldet, stellt die App Ihnen einmal die Frage, ob sie mitverfolgen darf, wie Sie die App nutzen: **Statistiken** (welche Seiten Sie besuchen und welche Buttons Sie klicken, mit Ihrem Account verknüpft) und **Bildschirmaufzeichnungen** (wie Sie sich durch die App bewegen, wobei der gesamte Text unlesbar gemacht wird). Sie können beides erlauben, nur Statistiken oder keins von beiden. Ihre Wahl wird an Ihrem Account gespeichert und gilt auf allen Ihren Geräten; ändern lässt sie sich jederzeit unter Einstellungen › **Datenschutz**.
- Bis Sie geantwortet haben, wird für Ihren Account nichts mitverfolgt.
- Bildschirmaufzeichnungen geschehen darüber hinaus nur in den ersten 30 Tagen eines neuen Arbeitsbereichs, nur mit Ihrem ausdrücklichen Ja zu Bildschirmaufzeichnungen, und nie, wenn ein Buchhalter in der Verwaltung eines Kunden arbeitet, in der Demo, oder wenn Ihr Browser Do Not Track sendet. Ihr Posteingang und Ihre Vertragsseiten werden niemals aufgezeichnet, auch nicht mit Einwilligung.
- Auf Websites, die Sie mit MyCompanyDesk veröffentlichen, und im Kundenportal läuft keine Analytics von uns.

Das bedeutet, dass anonyme Seitenaufrufe in der App nicht über mehrere Besuche hinweg verknüpft werden. Die Funnel von Anmeldung bis zahlendem Nutzer wird primär durch serverseitige Ereignisse gemessen, die an Ihre Benutzer-ID gebunden sind, nicht an Browserspeicher.

## Was wir nicht tun

- Wir verkaufen oder teilen keine Analytics-Daten mit Dritten für Werbung.
- Wir verfolgen Sie nicht über nicht zusammenhängende Websites hinweg.
- Wir verwenden Analytics-Daten nicht, um individuelle Werbeprofile zu erstellen.

## Ihre Möglichkeiten

- Nutzen Sie das Cookie-Banner auf der Marketing-Website, um Analytics-Speicher zuzulassen oder abzulehnen.
- Aktivieren Sie Do Not Track in Ihrem Browser, um die Speicherung von Analytics-IDs und Session-Aufzeichnungen zu verhindern.
- Löschen Sie Cookies und lokalen Speicher für mycompanydesk.nl / mycompanydesk.com in Ihrem Browser, um gespeicherte IDs zu entfernen.

Bei Fragen kontaktieren Sie [support@mycompanydesk.nl](mailto:support@mycompanydesk.nl).
