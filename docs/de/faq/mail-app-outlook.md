---
title: "Mail in Outlook, Apple Mail oder auf dem Handy"
description: "Aus einem Mailprogramm von Ihrer MCD-Adresse senden geht mit einem App-Passwort per SMTP. Mail in Outlook oder Apple Mail lesen geht noch nicht."
last_verified: 2026-09-24
chatbot:
  triggers: ["outlook", "apple mail", "iphone mail", "mail op mijn telefoon", "mailapp", "mail app", "smtp", "app-wachtwoord", "imap", "pop3", "thunderbird", "mail instellen op telefoon", "outlook op mijn telefoon", "mail app password", "e-mail auf dem handy", "application mail", "mail-app", "app-passwort", "mail auf dem iphone", "outlook auf dem handy", "mail einrichten handy", "mailprogramm", "e-mail-programm"]
  actions:
    - { label: "Zu Adressen", to: "/inbox/settings" }
  follow_up: ["Wie leite ich meine gesamte Mail an Gmail weiter?", "Wie lege ich eine zusätzliche E-Mail-Adresse an?"]
---

# Mail in Outlook, Apple Mail oder auf dem Handy

Liegt Ihre geschäftliche Mail im MyCompanyDesk-Posteingang (Office), lesen und beantworten Sie sie in MyCompanyDesk. Zusätzlich können Sie aus einem anderen Mailprogramm von Ihrer eigenen Adresse aus senden. Lesen in einem anderen Mailprogramm geht noch nicht.

Achtung: Es geht hier um den Posteingang auf Ihrer eigenen Domain. Gmail oder Outlook unter **Einstellungen** → **E-Mail** zu verbinden ist etwas anderes: Damit legen Sie nur fest, von welchem Konto Ihre Rechnungen und Angebote verschickt werden. Siehe [E-Mail](/de/settings/email).

## Kann ich meine Mail in Outlook oder Apple Mail auf meinem iPhone oder Handy lesen?

Noch nicht. Outlook, Apple Mail und die meisten anderen Mail-Apps fragen beim Hinzufügen eines Kontos nach einem Server für eingehende Mail (IMAP oder POP3). Den bietet MyCompanyDesk noch nicht an, deshalb können Sie ein solches Konto auf Ihrem Handy nicht vollständig einrichten.

Was geht:

- **Lesen und antworten auf dem Handy:** Nutzen Sie die MyCompanyDesk-App oder MyCompanyDesk im Browser. Dort steht Ihr gesamter Posteingang.
- **Eine Kopie woanders erhalten:** Schalten Sie **An E-Mail weiterleiten** ein, dann erhalten Sie von jeder eingehenden Nachricht eine Kopie an Ihre eigene E-Mail-Adresse. Siehe [Mail an Gmail oder eine andere Adresse weiterleiten](/de/faq/forward-mail).
- **Aus einem anderen Mailprogramm senden:** siehe unten.

## Wie sende ich Mail von meiner MCD-Adresse aus einem anderen Mailprogramm?

In einem Mailprogramm, das einen eigenen Server für ausgehende Mail erlaubt (zum Beispiel Gmail über „E-Mail senden als“ oder ein Mailprogramm auf Ihrem Computer), können Sie von Ihrer MCD-Adresse aus senden. Dafür legen Sie zuerst ein App-Passwort an:

1. Öffnen Sie **Posteingang** und wählen Sie oben **Adressen**.
2. Klicken Sie beim Postfach auf das Telefonsymbol (**Mail-App verbinden**).
3. Geben Sie bei Bedarf einen Namen ein, zum Beispiel „Laptop“, und klicken Sie auf **App-Passwort anlegen**.
4. Kopieren Sie das Passwort sofort. Sie sehen es nur ein einziges Mal. Verloren? Widerrufen Sie es und legen Sie ein neues an.

Tragen Sie danach in Ihrem Mailprogramm diese Daten für ausgehende Mail ein:

| Einstellung | Wert |
|---|---|
| Postausgangsserver (SMTP) | `smtp.mycompanydesk.nl` |
| Port und Verschlüsselung | 587 mit STARTTLS oder 465 mit SSL/TLS |
| Benutzername | Ihre vollständige E-Mail-Adresse, zum Beispiel `info@ihrefirma.de` |
| Passwort | das App-Passwort (nicht Ihr Login-Passwort) |

In Gmail geht das über **Einstellungen** → **Konten** → **E-Mail senden als** → weitere E-Mail-Adresse hinzufügen, mit den SMTP-Daten oben.

Was Sie auf diesem Weg senden, erscheint auch im richtigen Gespräch in Ihrem MyCompanyDesk-Posteingang.

## Gut zu wissen

- Sie können höchstens 5 App-Passwörter pro Postfach haben. Legen Sie eines pro Gerät an, dann können Sie eines mit **Widerrufen** entziehen, ohne die anderen zu betreffen.
- Sie können nur von der Adresse dieses Postfachs oder einer seiner zusätzlichen Adressen senden.
- Der geschäftliche Posteingang auf Ihrer eigenen Domain, und damit auch diese Funktion, gehört zu Office. Siehe [Tarife und Preise](/de/faq/plans).
- MyCompanyDesk setzt automatisch Ihre Grußformel unter jede Mail. Hat Ihr Mailprogramm auch eine eigene Signatur, stehen unten zwei. Siehe [E-Mail-Signatur](/de/faq/email-signature).
