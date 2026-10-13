---
title: "Zugang für den Steuerberater"
description: "Steuerberater-Zugang startet auf zwei Wegen: Sie laden Ihren Steuerberater aus Ihrem Arbeitsbereich ein, oder er lädt Sie aus seinem Portal ein."
last_verified: 2026-08-15
chatbot:
  triggers:
    - "accountant access"
    - "accountant permissions"
    - "add accountant"
    - "invite accountant"
    - "accountant toevoegen"
    - "boekhouder"
    - "buchhalter einladen"
    - "buchhalter zugang"
    - "comptable acces"
    - "ajouter comptable"
    - "accountant invite"
    - "revoke accountant"
    - "client invite"
    - "uitnodiging klant"
    - "klant uitnodigen"
  actions:
    - { label: "Open accountant settings", to: "/settings/boekhouder" }
  follow_up:
    - "How do I set page permissions?"
    - "How do I invite a team member?"
    - "How do I revoke access?"
    - "What happens when my accountant invites me?"
---

Es gibt zwei Wege, wie der Steuerberater-Zugang starten kann: Sie laden Ihren Steuerberater aus Ihrem eigenen Arbeitsbereich ein, oder Ihr Steuerberater lädt Sie ein, um aus seinem Steuerberater-Portal ein Konto zu erstellen.

## Sie laden Ihren Steuerberater ein

1. Gehen Sie zu Einstellungen › „Ihr Buchhalter“
2. Tragen Sie unter „Boekhouder uitnodigen“ (Buchhalter einladen) die E-Mail-Adresse Ihres Steuerberaters ein und klicken Sie auf „Uitnodiging versturen“ (Einladung senden). Ihr Steuerberater erhält eine E-Mail mit einem Annahmelink, der 30 Tage gültig ist
3. Sobald Ihr Steuerberater annimmt, erscheint er unter "Actieve boekhouders" (aktive Buchhalter). Dort können Sie den Zugang auch wieder widerrufen
4. Brauchen Sie nur eine Adresse, an die Sie Unterlagen schicken, ohne dass sich Ihr Steuerberater anmeldet? Fügen Sie dann unter „Contactpersoon voor verzenden“ (Kontakt für den Versand) einen Kontakt hinzu. Hat ein Kontakt ein Konto, legen Sie mit der Schaltfläche "Paginatoegang" (Seitenzugriff) fest, welche Seiten er sehen darf

Der Steuerberater-Zugang ist in jedem Tarif kostenlos; er erfordert weder Office noch einen Teamplatz. Unter „Wat je boekhouder heeft gedaan“ (was Ihr Buchhalter getan hat) sehen Sie jede Änderung, die ein Steuerberater in Ihrer Buchhaltung vornimmt.

## Ihr Steuerberater lädt Sie ein

Wenn Ihr Steuerberater MyCompanyDesk nutzt, kann er Sie direkt aus seinem Steuerberater-Portal einladen. Sie erhalten dann eine E-Mail mit einem Link zu `/register?uitnodiging=TOKEN`.

1. Klicken Sie auf den Link in der E-Mail
2. Die Registrierungsseite zeigt die einladende Kanzlei und trägt die E-Mail-Adresse ein, an die die Einladung gesendet wurde
3. Erstellen Sie Ihr Konto mit E-Mail und Passwort. Sie bleiben Inhaber Ihres Arbeitsbereichs und Ihrer Daten
4. Nach der Registrierung erhält Ihr Steuerberater automatisch Zugang, damit er Ihre Abgaben prüfen kann

Wenn der Arbeitsbereich, für den Sie eingeladen werden, bereits ein eigenes aktives Abonnement hat, kann die Kanzlei die Abrechnung dafür nicht übernehmen, bis dieses Abonnement gekündigt ist. Sie sehen eine Fehlermeldung, wenn die Kanzlei versucht, die Kanzleiabrechnung einzurichten, während Ihr eigenes Abonnement noch aktiv ist.

Sie können diesen Zugang später jederzeit unter Einstellungen › „Ihr Buchhalter“ widerrufen. Der Einladungslink ist 30 Tage gültig und kann von Ihrem Steuerberater erneut gesendet oder widerrufen werden.

## Was Ihr Steuerberater sieht

Hat Ihr Steuerberater Zugang, sieht er in seinem Steuerberater-Portal eine Triage-Übersicht mit einer Zeile pro Administration. Die Übersicht sortiert nach Dringlichkeit, damit Ihr Steuerberater auf einen Blick erkennt, welche Administration heute Aufmerksamkeit braucht.

- Administrationen mit einer bevorstehenden oder verpassten USt-Erklärfrist werden zuerst angezeigt.
- Überfällige Rechnungen und fehlende Belege werden pro Administration gezählt.
- Administrationen, die im Plan liegen, erhalten den Hinweis "Loopt goed".

Ihr Steuerberater klickt auf eine Administration, um direkt in deren Arbeitsbereich mit den von Ihnen festgelegten Berechtigungen zu springen. Er sieht nur die Seiten, die Sie freigegeben haben, und kann von derselben Maske aus Administrationen einladen oder verwalten.

## Automatische Zustellung

Die automatische Weiterleitung ist Teil von Office. Fügen Sie zuerst unter Einstellungen › „Ihr Buchhalter“ einen Kontakt hinzu und schalten Sie dann im Bereich „Automatisch doorsturen“ (automatisch weiterleiten) den Schalter ein. MyCompanyDesk schickt Ihrem Steuerberater dann von selbst Ihre Verkaufsrechnungen (sobald Sie sie versenden oder sobald sie bezahlt sind) und Ihre Ausgaben per E-Mail, mit Rechnungs-PDF und Belegen im Anhang. Sie wählen selbst, wie oft das geschieht (sofort, täglich, wöchentlich, monatlich oder pro Quartal), ob Angebote zur Information mitgehen und ob nur Ausgaben mit Beleg verschickt werden. Unter „Laatst verstuurd“ (zuletzt gesendet) sehen Sie, was zugestellt wurde. USt.-Erklärungszahlen sind nicht enthalten; laden Sie diese als CSV unter **Steuern › MwSt.-Erklärung** herunter.

## Mehrere Unternehmen verwalten

Wenn Sie mehr als ein Unternehmen führen, oder wenn Ihr Steuerberater mehrere Administrationen verwaltet, wechseln Sie über den Arbeitsbereich-Wechsler in der linken Seitenleiste zwischen ihnen. Sie können ein eigenes Unternehmen über den Wechsler hinzufügen; jedes erhält eine eigene Administration mit separater USt., Rechnungen und Buchhaltung. Mit Desk haben Sie ein eigenes Unternehmen. Mit Office sind bis zu 10 möglich, für 5,99 € pro Monat oder 59,90 € pro Jahr je zusätzlichem Unternehmen (zzgl. MwSt.).

Wenn Sie mehr als eine Administration haben, erscheint in der linken Navigation auch **Arbeitsbereiche** als direkter Link zur Triage-Übersicht.

Steuerberater, die von einem Kunden eingeladen wurden, sehen diese verwalteten Arbeitsbereiche neben ihrem eigenen Unternehmen. Siehe [Berichte](/de/features/reports) und [Dashboard](/de/features/dashboard) für die Darstellung von Arbeit über Administrationen hinweg.
