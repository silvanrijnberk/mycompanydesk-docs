---
title: "Zugang für den Steuerberater"
last_verified: 2026-08-04
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
    - { label: "Open access settings", to: "/settings/team" }
  follow_up:
    - "How do I set page permissions?"
    - "How do I invite a team member?"
    - "How do I revoke access?"
    - "What happens when my accountant invites me?"
---

Es gibt zwei Wege, wie der Steuerberater-Zugang starten kann: Sie laden Ihren Steuerberater aus Ihrem eigenen Arbeitsbereich ein, oder Ihr Steuerberater lädt Sie ein, um aus seinem Steuerberater-Portal ein Konto zu erstellen.

## Sie laden Ihren Steuerberater ein

1. Gehen Sie zu Einstellungen → „Zugang und Steuerberater"
2. Klicken Sie im Bereich Steuerberater auf „Steuerberater hinzufügen" und tragen Sie die Kontaktdaten ein
3. Senden Sie die Einladung, wenn Ihr Steuerberater ein Konto erstellen soll
4. Öffnen Sie „Zugang verwalten", um die Seitenberechtigungen festzulegen

Der Steuerberater-Zugang ist in jedem Tarif kostenlos; er erfordert weder Pro noch einen Teamplatz. Häufige Statuswerte sind nur Kontakt, eingeladen, aktiv und widerrufen.

## Ihr Steuerberater lädt Sie ein

Wenn Ihr Steuerberater MyCompanyDesk nutzt, kann er Sie direkt aus seinem Steuerberater-Portal einladen. Sie erhalten dann eine E-Mail mit einem Link zu `/register?uitnodiging=TOKEN`.

1. Klicken Sie auf den Link in der E-Mail
2. Die Registrierungsseite zeigt die einladende Kanzlei und trägt die E-Mail-Adresse ein, an die die Einladung gesendet wurde
3. Erstellen Sie Ihr Konto mit E-Mail und Passwort. Sie bleiben Inhaber Ihres Arbeitsbereichs und Ihrer Daten
4. Nach der Registrierung erhält Ihr Steuerberater automatisch Zugang, damit er Ihre Abgaben prüfen kann

Sie können diesen Zugang später jederzeit unter Einstellungen → „Zugang und Steuerberater" widerrufen. Der Einladungslink ist 30 Tage gültig und kann von Ihrem Steuerberater erneut gesendet oder widerrufen werden.

## Was Ihr Steuerberater sieht

Hat Ihr Steuerberater Zugang, sieht er in seinem Steuerberater-Portal eine Triage-Übersicht mit einer Zeile pro Administration. Die Übersicht sortiert nach Dringlichkeit, damit Ihr Steuerberater auf einen Blick erkennt, welche Administration heute Aufmerksamkeit braucht.

- Administrationen mit einer bevorstehenden oder verpassten USt-Erklärfrist werden zuerst angezeigt.
- Überfällige Rechnungen und fehlende Belege werden pro Administration gezählt.
- Administrationen, die im Plan liegen, erhalten den Hinweis "Loopt goed".

Ihr Steuerberater klickt auf eine Administration, um direkt in deren Arbeitsbereich mit den von Ihnen festgelegten Berechtigungen zu springen. Er sieht nur die Seiten, die Sie freigegeben haben, und kann von derselben Maske aus Administrationen einladen oder verwalten.

## Automatische Zustellung

Sobald Ihr Steuerberater verknüpft ist, gehen Sie zu **Einstellungen → Zugang und Steuerberater** und schalten Sie die automatische Zustellung ein. MyCompanyDesk liefert dann jedes Quartal einen Export mit Verkaufsrechnungen, Ausgaben und einer Mehrwertsteuer-Übersicht in einem kompatiblen Format, sodass die Zahlen nicht manuell übernommen werden müssen. Sie wählen selbst, welche Bereiche enthalten sind, und sehen in einem Protokoll, was zugestellt wurde.

## Mehrere Unternehmen verwalten

Wenn Sie mehr als ein Unternehmen führen, oder wenn Ihr Steuerberater mehrere Administrationen verwaltet, wechseln Sie über den Arbeitsbereich-Wechsler in der linken Seitenleiste zwischen ihnen. Sie können ein eigenes Unternehmen über den Wechsler hinzufügen; jedes erhält eine eigene Administration mit separater USt., Rechnungen und Buchhaltung.

Wenn Sie mehr als eine Administration haben, erscheint in der linken Navigation auch **Arbeitsbereiche** als direkter Link zur Triage-Übersicht.

Steuerberater, die von einem Kunden eingeladen wurden, sehen diese verwalteten Arbeitsbereiche neben ihrem eigenen Unternehmen. Siehe [Wachstum](/de/features/groei) und [Dashboard](/de/features/dashboard) für die Darstellung von Arbeit über Administrationen hinweg.
