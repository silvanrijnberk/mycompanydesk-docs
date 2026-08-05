---
title: Domains, website & inbox
last_verified: 2026-08-05
---

# Domains, website & inbox

MyCompanyDesk handles your public-facing identity in one place: a custom domain, a branded marketing website, and a shared inbox that collects messages sent to it.

## Custom domain

You can point your own domain to MyCompanyDesk. Once configured, the marketing website and any hosted pages are served from your domain.

To use a custom domain:

1. Go to **Settings > Domain**.
2. Enter the domain you want to use.
3. Add the DNS records we show you (usually a CNAME or A record).
4. Wait for DNS to propagate. We check it automatically and show the status in the app.

You can also use a subdomain, such as `www.yourdomain.com` or `help.yourdomain.com`.

### Subdomains we host for you

If you do not want to bring your own domain, we can give you a subdomain on `mycompanydesk.com`. This is useful for testing or for smaller accounts that do not need a fully branded domain.

### Domain health check

The domain page shows whether DNS is correctly configured. If something changes on your DNS provider, the status updates the next time we check.

## Marketing website

The marketing website is a public landing page for your company. It includes:

- Company name and tagline
- Contact details and social links
- A short description of what you do
- A call-to-action button that routes visitors to the right place

You edit the content from **Settings > Website**. Changes are published automatically.

### Outreach sample card

We can print and send a postcard with a unique QR code that leads to your landing page. When someone scans the code we count the scan, then redirect them to your site with a short reference (`ref`) in the URL so the page can attribute a later sign-up to the physical card. The scan itself is counted server-side and works regardless of cookie consent. The reference is only stored after a visitor accepts analytics cookies, as described in [Cookies & tracking](/account/cookies-tracking).

In the admin prospect view you can see how many times the card was scanned and when it was first scanned. The postcard is meant as a one-off sample; it is not a subscription or recurring service.

### SEO basics

The marketing website includes default meta tags for title and description. You can override these in **Settings > Website**.

### Analytics

The website uses privacy-friendly analytics. See [Cookies & tracking](/account/cookies-tracking) for exactly what is collected and how to decline.

## Shared inbox

Every MyCompanyDesk workspace has a shared inbox that collects messages sent to the workspace email address or submitted through the website contact form.

### Inbox address

Your inbox address looks like `yourcompany@inbox.mycompanydesk.com` or, if you use a custom domain, `hello@yourdomain.com`. You can find the exact address in **Inbox > Settings**.

### What lands in the inbox

- Contact form submissions from the marketing website
- Emails sent to the workspace address
- Automated notifications we send on your behalf

### Assigning and replying

Team members can view, assign, and reply to messages from the inbox. Replies are sent from the workspace address, so the conversation stays organized in one place.

### Spam and moderation

The inbox has basic spam filtering. Messages that look suspicious are flagged for review rather than appearing in the main list.

## Public pages

Some features, such as help articles or booking pages, can be published as public pages under your domain. Each public page inherits your branding and domain settings.

## Cookies, tracking, and consent

Your marketing website shows a cookie banner. Analytics and storage details are documented in [Cookies & tracking](/account/cookies-tracking). Only documented keys are used; no third-party trackers are loaded before consent.

## Removing a domain

If you no longer want to use a custom domain, you can remove it in **Settings > Domain**. Your workspace will fall back to the `mycompanydesk.com` subdomain until you add a new one.

## Related topics

- [Account settings](/account/settings)
- [Cookies & tracking](/account/cookies-tracking)
- [Team members & permissions](/account/team-members)
