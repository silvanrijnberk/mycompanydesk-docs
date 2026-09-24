---
title: "Connect your own domain and nameservers"
description: "Connect a domain from Hostinger or elsewhere: where to find the two nameservers, which order keeps your mail working, and when you need a transfer code."
last_verified: 2026-09-24
chatbot:
  triggers: ["nameservers", "nameserver", "domein koppelen", "eigen domein", "hostinger", "dns", "verhuiscode", "domein verhuizen", "domein aansluiten", "connect domain", "name servers", "own domain", "custom domain", "transfer code", "auth code", "epp code", "move domain", "domain verbinden", "connecter mon domaine"]
  actions:
    - { label: "Open Your website and domain", to: "/settings/domein" }
  follow_up: ["Can I import my old emails?", "How do I publish my website?"]
---

# Connect your own domain and nameservers

With Office you connect your own domain name, such as `yourbusiness.com`, to MyCompanyDesk. Your website and your business email then run on that domain. Your domain can stay registered with your current provider, such as Hostinger: all you change are the nameservers.

## Where do I connect my domain?

Go to **Settings** → **Your website and domain**. You can also get there from **Website** → **Domain & email**, via **Manage**. Then choose how you want to start:

- **I am moving from another host:** you have email, and maybe a website, with Hostinger or another host today. This wizard connects your domain, creates your mailboxes and moves your old mail over. It is the best choice when your mail comes along.
- **I already have a domain:** you have a domain but no mail that needs to move. Next, choose **Let MyCompanyDesk handle everything** (recommended) and click **Next**.
- **Move your domain to us:** the registration of your domain moves to MyCompanyDesk as well. You need a transfer code for this.
- **Your first .nl domain is free** or **Search for an available domain name:** if you do not have a domain yet.

## Which nameservers do I enter?

After you add your domain, MyCompanyDesk shows two nameservers at the step **Set these details with your domain provider**. They end in `ns.cloudflare.com` and differ per domain, so copy exactly the two shown for your domain. You can find them again later in the **Pending domains** card under **Settings** → **Your website and domain**.

In the **I am moving from another host** wizard, you see the nameservers when you choose **I do not want to transfer my domain** at the transfer step.

## How do I change nameservers at Hostinger?

1. Log in to Hostinger (hPanel) and open **Domains**.
2. Pick your domain and go to **DNS / Nameservers**.
3. Choose **Change nameservers**, then choose custom nameservers.
4. Replace the nameservers with the two from MyCompanyDesk and save.

Hostinger's menu names may differ slightly.

Other providers usually call it "Nameservers" or "DNS servers" too. Find the nameserver setting and replace what is there with the two addresses.

MyCompanyDesk then checks on its own whether it worked. Click **Check now** to check straight away. It usually takes less than an hour, sometimes up to a day. As soon as your domain is **Active**, you get a notification.

## In what order, so my email keeps working?

Only change your nameservers once your mail is ready with us. Otherwise no mail comes in until you turn on email with us.

1. Connect your domain. If your mail needs to come along, use the **I am moving from another host** wizard: it creates your mailboxes right away and moves your old mail over.
2. If you connected your domain via **I already have a domain**, first click **Turn on email** in the **Email** card and create your mailboxes. You will see "Your mailbox is ready. Mail on this domain starts working once your nameservers point at us."
3. If your website should run on the domain too, publish it in MyCompanyDesk (see [Publish your website and put it online](/en/faq/publish-website)) and switch it on for your domain via **Website** → **Domain & email** → **Make your website live on this domain**.
4. Only now change the nameservers at your provider.

Once your domain is active, MyCompanyDesk sets up the mail settings (such as the MX records) automatically. Only cancel your plan with your old host once all your mail has been moved.

Note: settings you had with your old host, such as a website hosted there or other DNS records, are not carried over. If your website still lives with your old host, it will no longer be reachable on your domain after the nameserver change. So get your website ready in MyCompanyDesk before you change the nameservers.

## Do I need a transfer code?

No, not for your mail or your website. Changing the nameservers is enough. You only need the transfer code (also called authorization code or EPP code) if you also want to move your domain's registration to MyCompanyDesk, so you no longer pay your old provider for the domain. Hostinger calls this code "Authorization code" and you find it under **Domains** → **Manage**. On the same screen, also turn off the transfer lock. Transferring a `.nl` domain is free.

## See also

- [Import your old emails](/en/faq/import-old-mail)
- [Publish your website and put it online](/en/faq/publish-website)
- [Domains, website and inbox](/en/features/domains-website-inbox)
