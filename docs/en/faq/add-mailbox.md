---
title: "Add an extra mailbox or email address"
description: "Create an extra mailbox on your own domain under Inbox > Adressen > Postbus toevoegen, or give an existing mailbox a second address."
last_verified: 2026-09-24
chatbot:
  triggers: ["extra postbus", "info@ aanmaken", "info adres aanmaken", "postbus toevoegen", "postbus aanmaken", "nieuwe postbus", "tweede postbus", "e-mailadres aanmaken", "e-mailadres toevoegen", "email adres aanmaken", "nieuw e-mailadres", "tweede e-mailadres", "extra e-mailadres", "alias toevoegen", "add mailbox", "new mailbox", "extra mailbox", "add email address", "create email address", "second email address", "postfach hinzufügen", "neues postfach", "e-mail-adresse anlegen", "weitere e-mail-adresse", "ajouter une boîte mail", "nouvelle boîte mail", "créer une adresse e-mail", "nouvelle adresse e-mail"]
  actions:
    - { label: "Go to Adressen", to: "/inbox/settings" }
  follow_up: ["How do I connect my own domain?", "How do I send from this address in my mail app?"]
---

You create an extra mailbox on your own domain in the Inbox, on the **Adressen** (addresses) tab:

1. Open **Inbox** and pick **Adressen** in the top bar.
2. Under your domain, next to **Postbussen** (mailboxes), click **Postbus toevoegen** (add mailbox).
3. Enter the part before the @, for example `info`, `support` or `invoices`. Your domain is already filled in after it.
4. Optionally enter a display name, the name recipients see next to your mail. Leave it empty and the mailbox sends under your company name.
5. Click **Aanmaken** (create).

Mail sent to the new address lands in that mailbox, and you can send from it in the Inbox.

## Just an extra address, without a separate mailbox

Want to receive and send on a second address but keep everything in one mailbox? Click the pencil next to that mailbox and add the address under **Verzend-als-adressen** (send-as addresses). A reply to mail sent to that address goes out from the same address.

## Good to know

- You can only add a mailbox once the inbox is switched on for your domain. No domain connected yet? Start at [Domains, website and inbox](/en/features/domains-website-inbox).
- The inbox on your own domain is part of Office, see [Plans and pricing](/en/faq/plans).
- Mail to an address on your domain that matches no mailbox arrives in the mailbox labelled **Standaard** (default).
- Your login email is a separate thing. See [Change email](/en/faq/change-email).
