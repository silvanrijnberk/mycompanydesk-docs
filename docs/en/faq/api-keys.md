---
title: API keys
description: "Can you create API keys or webhooks in MyCompanyDesk? No, there is no public API. Here is how to get your data out anyway."
last_verified: 2026-10-13
chatbot:
  triggers: ["api key", "api keys", "api access", "integration", "api token", "connect api", "api instellen", "api schlussel", "cle api"]
  actions:
    - { label: "Open Download data", to: "/settings/downloaden" }
  follow_up: ["How do I set up my company settings?", "How do I manage team access?"]
---
MyCompanyDesk has no public API and no webhooks, so you cannot create API keys.

To use your data in another system, you have these options on every plan:
1. Go to **Settings › Download data** and download your invoices, customers and expenses as a CSV file per section, or everything together as a JSON backup
2. Or give your accountant free access under **Settings › Your accountant**

Read more on [API integration](/en/advanced/api).
