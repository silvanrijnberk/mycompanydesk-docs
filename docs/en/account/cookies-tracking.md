---
title: Cookies and analytics
description: "How MyCompanyDesk handles cookies, local storage, analytics and session recordings, and how to manage your consent."
last_verified: 2026-10-19
---

# Cookies and analytics

This page explains how MyCompanyDesk uses cookies, local storage, and analytics. It covers both the public marketing site (mycompanydesk.nl / mycompanydesk.com) and the web app.

## Marketing site

The marketing site shows a cookie-consent banner when you first visit. The banner asks whether we may place analytics storage. Your choice is stored in your browser. To change it later, clear the marketing site's site data in your browser; the banner appears again on your next visit.

Analytics that stores an identifier is opt-in. Until you accept, the marketing site only counts, anonymously, how often a page is viewed, which website or search engine visitors came from, and which button into the app or app store is clicked. That count stores nothing on your device, uses no identifier, makes no recordings and does not keep your IP address. Choosing **Essential only** therefore leaves no analytics data on your device.

If you accept, the site starts analytics and stores an anonymous analytics identifier in your browser's `localStorage` under the key `mcd_phid`. This identifier is only used to understand how visitors move through the site. It is not linked to your account or email address.

With your consent we may also record sessions of your visit to the marketing site. These recordings help us see where the site can improve. Anything you type into input fields is masked in those recordings and is not readable to us. The data is pseudonymised.

If you decline (with **Essential only**, or by closing the banner with Escape), the anonymous count keeps running, but no analytics identifier is stored and no recordings are made. If your browser sends a Do Not Track (DNT) signal, we measure nothing at all, not even that anonymous count. The banner may still appear because it also covers non-analytics cookies.

## From marketing site to app

If you have given consent and click from the marketing site into the app, the marketing site appends a short-lived `phid` parameter. The app strips this parameter immediately and never keeps it in the URL after you land. It is only used to connect the same anonymous visit to the app session, so we can see whether the site is helping people sign up.

The parameter is only trusted when you actually come from our own marketing site. Forged or forwarded links are ignored.

A link into the app or to an app store also carries how you found us: the website that referred you (without the part after the question mark), the page you arrived on, any campaign codes and the language of the page. It contains no identifier and nothing is stored on your device, so this also happens without consent; it does not happen if your browser sends Do Not Track. The app removes this parameter from the URL straight away too. If you sign up, we keep that origin with your new account, so we can see which channels bring in new users.

## Inside the app

The app does **not** show a cookie banner. Instead, it is designed to avoid analytics cookies and cross-session tracking for anonymous visitors:

- Analytics state lives in `sessionStorage`, not cookies. It survives reloads within the same tab, but is deleted when you close the tab.
- The app respects the browser's Do Not Track signal.
- Once you have signed in, the app asks you one time whether it may measure how you use it: **Statistics** (which pages you visit and which buttons you click, linked to your account) and **Screen recordings** (how you move through the app, with all text made unreadable). You can answer both, statistics only, or neither. Your choice is saved with your account and applies to all your devices; you can change it any time under Settings › **Privacy**.
- Until you answer, nothing is measured for your account.
- Session recording also happens only for a fresh workspace in its first 30 days, only with your explicit yes to screen recordings, and never while an accountant works in a client's records, in the shared demo, or when your browser sends Do Not Track. Your inbox and your contracts pages are never recorded, not even with consent.
- None of our analytics runs on websites you publish with MyCompanyDesk or in the customer portal.

This means anonymous page views in the app are not linked across visits. The signup to paid funnel is primarily measured with server-side events keyed to your user id, not with browser storage.

## What we do not do

- We do not sell or share analytics data with third parties for advertising.
- We do not track you across unrelated websites.
- We do not use analytics data to build individual advertising profiles.

## Your choices

- Use the cookie banner on the marketing site to accept or decline analytics storage.
- Enable Do Not Track in your browser to stop analytics identifiers from being stored and sessions from being recorded.
- Clear your browser's cookies and local storage for mycompanydesk.nl / mycompanydesk.com to remove stored identifiers.

For questions, contact [support@mycompanydesk.nl](mailto:support@mycompanydesk.nl).
