---
title: Online appointments
description: Let customers book appointments directly through your website with Site Bookings.
last_verified: 2026-09-29
---

# Online appointments

**Site Bookings** adds a block to your website that lets visitors book an appointment with you directly. Think of an introductory call, quote meeting, or service visit: the customer picks a service, chooses a suitable time, and confirms the request. You decide which services to offer, when you are available, and whether each booking first needs your approval.

## Who is this for?

- Freelancers and small businesses that want customers to book via their website.
- Companies that want to make their calendar available with one click.
- Anyone who wants to offer recurring appointment types as separate services.

## What do you need?

- A website built with the **Site Builder**.
- A calendar in MyCompanyDesk where appointments land.
- At least one service you want to offer as a bookable appointment.

## Available times and opening hours

The times visitors can book come from one central source: **Settings** > **Business details** > **Opening hours**.

- Set each day as open or closed, and add one or two time blocks per open day.
- Use **Special days** for holidays, vacations or one-off changes; those also affect whether the booking block offers a day.
- The appointments block automatically respects your opening hours and your connected calendar so no double or impossible bookings occur.

See [Company Settings](/en/settings/company) for how to set your opening hours.

## Adding the appointments block to your website

1. Open the **Site Builder** from the app.
2. Edit the page where you want to place the appointments block.
3. Find the **Appointments** or **Site Bookings** block in the block library.
4. Drag the block onto the page where you want it.
5. Click the block to open its settings.

Your website now shows the appointment form once you publish the page.

## Setting services and time slots

In the block settings you control how customers can book:

- **Service**: give the appointment a name, such as "Introductory call" or "Installation visit".
- **Price (optional)**: enter a price if the appointment should be paid.
- **Duration**: choose how long the appointment lasts, for example 30 or 60 minutes.
- **Book ahead**: set how far in advance someone may schedule an appointment.
- **Approval required**: enable this if you want to manually approve every request first.
- **Block external calendar**: let the tool check your existing calendar so no double bookings occur.

The **available time slots** themselves come from the central opening hours set in [Business details](/en/settings/company). The block blocks days and time blocks that are not open there.

:::tip
Connect an **email address** to the block so visitors receive an automatic confirmation and you get a notification for every new booking.
:::

## Group sessions

Not every booking is one customer at a free time of their choosing. A **group session** (a workshop, a class, a guided tour) has one fixed time and a number of places, and several customers can take part. You schedule the sessions in the agenda under **Groepsafspraken** (Group sessions):

- **Item from your offering**: the session takes its name and price from the offering item you pick. No offering yet? Add a service first, for example your workshop.
- **One or more dates**: plan several start times in one go, each with its duration.
- **Places**: how many people fit the session (between 1 and 500). **Max per sign-up** sets how many people one registration can bring (up to 50).
- **Sign-up open until**: until the start, a set number of hours before, or one week before. Until that moment participants can also cancel themselves.
- **Location**: optional, for example your studio.
- **Payment**: paid in full online (a place is only confirmed once paid; without Mollie or Stripe connected, people pay on site) or **on site**, where a draft invoice is ready for each participant after the session.

Visitors sign up through the **Groepsafspraken** block on your website, for one or several people in one go as long as places remain. Every enrolment is kept per participant, so reminder emails, the personal cancellation link, online payment and a possible invoice all work per person. In the agenda, each session carries its occupancy bar so you can see at a glance how full the group is, and a session occupies your own calendar alongside your appointments, so the same moment cannot hold both.

On the session page you find the participants: email them in one go, add someone by hand, mark a no-show, or cancel one person (they receive an email and the places become available again). You can also move or cancel the whole session; a notice about a move is only mailed to participants who actually receive email. An unpaid registration that stays unpaid becomes **expired** instead of cancelled, and only an expired registration gets its places back when the payment still lands in time. Registrations you or the visitor cancelled do not come back, and their money goes back. Participants find their booked session, like any appointment with you, in their customer portal under **Appointments**.

## Booking an appointment from the portal

Visitors see an overview of available moments on your website. Once they pick a time slot, they enter their details and confirm the request. Depending on your settings:

- the appointment becomes final immediately, or
- the request arrives as "to be confirmed" and you must approve it first.

The appointment appears directly in your MyCompanyDesk calendar, including the chosen service and any notes from the customer.

## Managing appointments

After an appointment is booked you can manage it from the calendar:

- **Edit**: change date, time, or service via the calendar.
- **Cancel**: delete the appointment. The customer is automatically notified if you have enabled mail settings.
- **Reschedule**: offer an alternative time slot via the appointments block or the calendar.

A **confirmed** online appointment also counts as worked hours in **Schedule**, so your appointments appear alongside your time entries. The hours are not billable through Schedule; the revenue from the appointment is invoiced separately from the appointment itself.

## Deposits

The appointments block can ask visitors for a deposit when they book. Turn on **Deposit** in the block settings and choose a fixed amount or a percentage of the service price. A deposit needs a connected payment provider (Mollie or Stripe); without one, the block simply books without a deposit.

While the deposit has not been paid, the booking stays pending: the app shows **Awaiting payment** instead of the Accept and Decline buttons, and approving is refused until the money has come in. When you decline a request, or a request expires, its paid deposit is refunded automatically. A cancellation by the visitor also pays the deposit back on its own, as long as the cancellation falls within the refund window you set in the block settings. By default that window runs until a day before the start; you can widen it to your whole booking horizon, so every cancellation before the start pays back, or narrow it to zero, which turns automatic refunds off and leaves the money to you via the **Refund deposit** button on the appointment.

Rescheduling an appointment never reopens the refund window.

## Reminders and cancellation emails

MyCompanyDesk can automatically send a reminder email before the appointment. A cancellation email to the customer is also possible. You decide whether and when these emails are sent in the appointments block settings and your company settings. An appointment that moves keeps its reminders: one that already went out for the old time goes out once more for the new start time.

## Frequently asked questions

**Why do I not see any available times?**
Check that you have created at least one service and that your time slots are in the future. Enabled approval can also mean times only become visible after you have approved a request.

**Can I offer multiple services?**
Yes. You can show one or more services per appointments block. Each service has its own name, duration, and price.

**Is payment required when booking?**
Only if you link a price to the service. Without a price the booking is free and you simply receive a reservation.

## Related topics

- [Site Builder](/en/advanced/business-page)
- [Time Registration](/en/features/time-registration)
- [Customers](/en/features/customers)
- [Domains, Website & Inbox](/en/features/domains-website-inbox)
