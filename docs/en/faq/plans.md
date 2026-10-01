---
title: "Plans and pricing"
description: "MyCompanyDesk has two plans: Desk and Office. Desk is free and stays free."
last_verified: 2026-07-22
chatbot:
  triggers:
    - "plans"
    - "pricing"
    - "subscription"
    - "upgrade"
    - "downgrade"
    - "Office"
    - "Desk"
    - "abonnementen"
    - "prijzen"
    - "abonnement"
    - "upgraden"
    - "downgraden"
    - "tarife"
    - "preise"
    - "formules"
    - "prix"
    - "plan"
    - "tarif"
  actions:
    - { label: "Open settings", to: "/settings/billing" }
  follow_up:
    - "How do recurring invoices work?"
    - "What happens when I downgrade?"
---

MyCompanyDesk has two plans: **Desk** and **Office**.

**Desk** is free and stays free. It covers the work you do yourself: unlimited invoices, quotes and expenses, projects and time registration, your own website on `.mycompanydesk.site`, receipt scanning with AI, and basic AI chat.

**Office** is a paid plan. It adds automation and services that cost real money to run: recurring invoices and expenses, contracts, bank connections, a business inbox on your own domain, digital VAT filing, full bookkeeping, API access, and higher AI limits. See the [plans page](https://mycompanydesk.nl/plans) for the current price.

These features are defined in our billing config: [apps/api/src/modules/billing/plans.config.js](https://github.com/silvanrijnberk/RichardTool/blob/development/apps/api/src/modules/billing/plans.config.js).

**Upgrading and downgrading**
- You can switch between Desk and Office at any time.
- When you upgrade, the new features are available right away.
- When you downgrade from Office to Desk, Office-only features stop working: your bank stops importing, new recurring invoices or expenses are no longer generated, preparing your VAT return and annual accounts stops, and sending new email from your own address stops. Email keeps coming in and you can still read and reply, your website stays online on your mycompanydesk.site address, and your data stays in your workspace. The cancel page lists exactly what keeps working and what stops before you decide.
- If a free 60-day Office trial ends and you do not subscribe, your workspace moves to Desk automatically.

**Billing**
- All prices are shown excluding 21% VAT. The amount you pay at checkout includes VAT, which you can reclaim as voorbelasting.
- There is no per-user charge. Desk allows one working user plus free accountant access. Office allows unlimited working users and free accountant access.
- You can cancel or downgrade whenever you want. If you are not satisfied, you can get your money back within 14 days.
