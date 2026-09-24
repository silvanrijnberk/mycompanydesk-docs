---
title: "Import your old emails"
description: "Move your old mail from Hostinger or another provider into your MyCompanyDesk inbox, with folders, sent mail and the original dates kept."
last_verified: 2026-09-24
chatbot:
  triggers: ["oude e-mails importeren", "oude mail importeren", "mail overzetten", "mail verhuizen", "e-mail importeren", "hostinger mail", "postbus overzetten", "import email", "import old email", "migrate email", "move my mail", "transfer mailbox", "e-mails importieren", "importer mes e-mails"]
  actions:
    - { label: "Open Addresses", to: "/inbox/settings" }
    - { label: "Open Your website and domain", to: "/settings/domein" }
  follow_up: ["How do I connect my own domain?", "Which nameservers do I enter at Hostinger?"]
---

# Import your old emails

Yes, you can move your old emails into the MyCompanyDesk inbox, for example from Hostinger, TransIP, Gmail, Outlook or another provider. There are two ways to do it. Both need Office, because the inbox on your own domain is part of Office.

## I am moving my domain and mail from Hostinger or another host

Use the **I am moving from another host** wizard. It handles everything in one go: connecting your domain, creating your mailboxes and moving your old mail.

1. Go to **Settings** → **Your website and domain**.
2. Choose **I am moving from another host**.
3. Enter your domain name and click **Get started**.
4. Enter every email address you had with your old host, with the password of that mailbox. Each address gets its own mailbox with us.
5. Tick the box that lets us store your password encrypted until the move is done, and click **Connect and move my mail**.

The wizard fetches your old mail right away. After your domain has moved to us, it fetches once more whatever arrived in the meantime, and one last time 48 hours later. Then we delete your password, and in any case after fourteen days at the latest. Only cancel your plan with your old host once the wizard says you can.

## I already have a mailbox with you and only want to move old mail

1. Open **Inbox** and choose **Addresses** at the top.
2. Go to the **Move an existing mailbox** card.
3. Choose your **Previous provider**. For Hostinger the server is already filled in (`imap.hostinger.com`, port 993).
4. Under **Mailbox with us**, choose which mailbox the mail should go to.
5. Enter the email address and password of your old mailbox.
6. Click **Test connection**, choose which folders to bring along and click **Start moving**.

You see the progress per folder. When it is done, you see how many messages were moved and up to which date. For Gmail, Microsoft, iCloud and Yahoo you need an app password from that provider instead of your regular password.

## What comes along?

- **Folders:** Inbox, Sent, Archive and your own folders are selected by default. You can tick Drafts, Junk and Trash yourself. The folders become conversations in your inbox, not separate folders.
- **Sent mail:** yes, it comes along as outgoing mail.
- **Dates:** every email keeps its original date.
- **Read or unread:** stays as it was.
- **Attachments:** come along. Only messages larger than 40 MB are skipped.
- **Duplicates:** are skipped, so you can safely run the import again.

Imported mail does not trigger notifications and does not count toward your monthly limit.

## Watch out: the retention period can delete old mail

Each mailbox can have a **Retention (days)** setting. Conversations whose latest message is older than that period are deleted automatically. Because imported mail keeps its original date, old mail would then disappear at the next daily cleanup.

By default there is no retention period and everything is kept. If you set one yourself, clear it before you import: in **Inbox** → **Addresses**, click the pencil icon next to the mailbox and empty **Retention (days)**. MyCompanyDesk also warns you during the import if a retention period is set.

## See also

- [Connect your own domain and nameservers](/en/faq/connect-domain)
- [Domains, website and inbox](/en/features/domains-website-inbox)
