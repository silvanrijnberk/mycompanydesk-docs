---
title: Cookies and analytics
last_verified: 2026-07-14
---

# Cookies and analytics

This page explains how MyCompanyDesk uses cookies, local storage, and analytics. It covers both the public marketing site (mycompanydesk.nl / mycompanydesk.com) and the web app.

## Marketing site

The marketing site shows a cookie-consent banner when you first visit. The banner asks whether we may place analytics storage. You can change your choice at any time via the banner.

If you accept, the site stores an anonymous analytics identifier in your browser's `localStorage` under the key `mcd_phid`. This identifier is only used to understand how visitors move through the site. It is not linked to your account or email address.

If you decline, or if your browser sends a Do Not Track (DNT) signal, no analytics identifier is stored. The banner may still appear because it also covers non-analytics cookies.

## From marketing site to app

When you click a link from the marketing site into the app, the marketing site may append a short-lived `phid` parameter. The app strips this parameter immediately and never keeps it in the URL after you land. It is only used to connect the same anonymous visit to the app session, so we can see whether the site is helping people sign up.

The parameter is only trusted when you actually come from our own marketing site. Forged or forwarded links are ignored.

## Inside the app

The app does **not** show a cookie banner. Instead, it is designed to avoid analytics cookies and cross-session tracking for anonymous visitors:

- Analytics state lives in `sessionStorage`, not cookies. It survives reloads within the same tab, but is deleted when you close the tab.
- The app respects the browser's Do Not Track signal.
- No session recordings are made.
- Once you log in, the app identifies you by your real user id so later events are tied to the same account.

This means anonymous page views in the app are not linked across visits. The signup to paid funnel is primarily measured with server-side events keyed to your user id, not with browser storage.

## What we do not do

- We do not sell or share analytics data with third parties for advertising.
- We do not track you across unrelated websites.
- We do not use analytics data to build individual advertising profiles.

## Your choices

- Use the cookie banner on the marketing site to accept or decline analytics storage.
- Enable Do Not Track in your browser to stop analytics identifiers from being stored.
- Clear your browser's cookies and local storage for mycompanydesk.nl / mycompanydesk.com to remove stored identifiers.

For questions, contact [support@mycompanydesk.com](mailto:support@mycompanydesk.com).
