---
title: Online appointments
description: Let customers book an appointment or request a date straight from the booking block on your website, with an optional deposit.
last_verified: 2026-10-13
---

# Online appointments

The **Online boeken (afspraak plannen)** block (online booking) adds a block to your website that lets visitors book an appointment with you directly. Think of an introductory call, quote meeting, or service visit: the customer picks a service, chooses a suitable time, and confirms the request. You decide which services to offer, when you are available, and whether each booking first needs your approval.

## Who is this for?

- Freelancers and sole traders who want customers to book via their website.
- Companies that want to make their calendar available with one click.
- Anyone who wants to offer recurring appointment types as separate services.

## What do you need?

- A website built with the **Site Builder**.
- A calendar in MyCompanyDesk where appointments land.
- At least one service in your **Catalog** that you want to offer as a bookable appointment.

## Available times and opening hours

The times visitors can book come from one central source: **Settings** › **Business details** › **Opening hours**.

- Set each day as open or closed, and add one or two time blocks per open day.
- Use **Days off and exceptions** for holidays, vacations or one-off changes; those also affect whether the booking block offers a day.
- The appointments block automatically respects your opening hours and your connected calendar so no double or impossible bookings occur.

See [Company Settings](/en/settings/company) for how to set your opening hours.

## Adding the appointments block to your website

1. Open the **Site Builder** from the app.
2. Edit the page where you want to place the appointments block.
3. Find the **Online boeken (afspraak plannen)** block in the block library.
4. Drag the block onto the page where you want it.
5. Click the block to open its settings.

Your website now shows the appointment form once you publish the page.

## Setting services and time slots

In the block settings you control how customers can book:

- **Hoe boeken klanten?** (how do customers book): pick **Direct boeken (vrije tijden)** (book directly, free times) when visitors choose a free moment themselves, or **Aanvraag (jij bevestigt)** (request, you confirm) when they request a moment you confirm. A request arrives as a lead in your Inbox, with a notification.
- **Services**: the block shows the services from your Catalog, each with its own duration. For different services in this block, fill in **Diensten met eigen duur (optioneel)** (services with their own duration) with a name, duration and optional price. You change the order in Catalog.
- **Duur per afspraak (minuten)** and **Pauze tussen afspraken (minuten)**: how long an appointment lasts when the service has no duration of its own, and how much room there is between two appointments.
- **Minimaal vooraf boeken (uren)** and **Online te boeken tot (dagen vooruit)**: how short notice someone can still book with, and how far ahead.
- **Zelf accepteren voor de afspraak vaststaat** (accept it yourself first): the time is held and you confirm or decline it under **Schedule › Bookings**. Once you accept, the visitor automatically gets the confirmation with a calendar invitation.
- **Gekoppelde agenda blokkeert tijden** (connected calendar blocks times): appointments in your connected Google or Outlook calendar make those times unbookable. All-day items do not count here; use days off in your opening hours for that.

The **available time slots** themselves come from the central opening hours set in [Business details](/en/settings/company). The block blocks days and time blocks that are not open there.

In the site builder editor, the appointments block shows the services from your offering as chips, exactly as on the live site: the name, the duration and the price including VAT as visitors see it, with a single VAT label line under the row. Clicking a chip in the editor only switches the service the example calendar is built around; it loads no availability and books nothing.

:::tip
Connect an **email address** to the block so visitors receive an automatic confirmation and you get a notification for every new booking.
:::

## Date requests

Not every trade sells time slots. A DJ, a food truck or a wedding photographer loses days, and the question a visitor asks is not "Tuesday at 14:00?" but "is 14 June still free?". For those trades, set the block's **Hoe boeken klanten?** (how do customers book) to **Aanvraag (jij bevestigt)** (request, you confirm) and switch on **Alleen een datum vragen (geen tijd)** (ask for a date only, no time). The form then asks for a date without a time. **Op welke dagen kun je?** (which days can you do) sets the weekdays a request may fall on.

Under the date the block tells the visitor whether that day is still free. The answer comes from your own agenda:

- **A day is busy when something is already on it**: a booking made through your site, a group session, an entry in your own MyCompanyDesk agenda (planned or logged), a timed or whole-day appointment in your own linked Google or Outlook calendar, or a day you set to **closed** under Special days.
- **Not counted**: your fixed weekly opening hours (in request mode they limit nothing, so a visitor may ask for any day of your week), birthdays and working locations from your linked calendars, calendars shared with you or that you only follow (such as a holidays calendar), events you declined or marked as free, and an event from the evening before that ends by 6:00: that night belongs to the day before, not to the next day.
- The site checks about two years ahead. Beyond that it says nothing instead of calling the day busy.
- The answer is only free or busy: your site never tells a visitor what sits on your day.
- Every request still lands with you: the date arrives as a request you confirm, the same way as the other request mode.

Visitors cannot send a date in the past, and a date field on a plain request form refuses past dates the same way.

The block can also set its own pace for requests. Under the block settings, **Minimaal aantal dagen van tevoren** (minimum notice in days, offered with a date only) sets how many whole days ahead the first date the picker offers sits: 0 = from today, and an earlier date is simply not pickable. With a time on the block, **Minimaal van tevoren** (minimum notice, in hours or days) refuses a request for a sooner moment. Without a value there is no notice beyond the past-date rule; the picker and the server apply the same rule, so what the site offers and what gets saved never disagree. **Maximaal aantal aanvragen per week (optioneel)** caps the open or accepted requests of this block for days in one week (Monday up to Sunday); once the week sits full, those days show on your site as not free, and a request you move to closed stops counting. Empty or 0 means no maximum. Confirmation messages carry the weekday of the requested date beside the date, so a request arrives with a named day, not only as a number.

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

A customer can cancel online as long as the appointment has not started. An appointment that already has an invoice can no longer be cancelled online: the cancellation page points this out and asks the customer to contact you instead.

## Deposits

The appointments block can ask visitors for a deposit when they book. Turn on **Aanbetaling vragen** (ask for a deposit) in the block settings and choose a fixed amount or a percentage of the service price. A deposit needs a connected payment provider (Mollie or Stripe); without one, the block simply books without a deposit.

While the deposit has not been paid, the booking stays pending: the app shows **Awaiting payment** instead of the Accept button, and approving is refused until the money has come in. Declining the request is still possible while the payment is out. When you decline a request, or a request expires, its paid deposit is refunded automatically. A payment that arrives later for a request declined, withdrawn or expired in the meantime is refunded the same way. A cancellation by the visitor also pays the deposit back on its own, as long as the visitor cancels in time under **Kosteloos annuleren** (free cancellation) in the block settings: up to 24 hours ahead (the default), up to 48 hours ahead, up to a week ahead, always refund (every cancellation before the start), or never refund automatically, in which case you decide yourself with the **Refund deposit** button on the appointment.

Rescheduling an appointment never reopens the refund window.

## Reminders and cancellation emails

MyCompanyDesk can automatically send a reminder email before the appointment. A cancellation email to the customer is also possible. You decide whether and when these emails are sent in the appointments block settings and your company settings. An appointment that moves keeps its reminders: one that already went out for the old time goes out once more for the new start time.

## Frequently asked questions

**Why do I not see any available times?**
Check that you have at least one service in your Catalog, that it has a duration, and that your opening hours have open days in the coming period. If the block is set to **Aanvraag (jij bevestigt)**, the visitor does not pick a free time but requests a moment or date.

**Can I offer multiple services?**
Yes. The block shows the services from your Catalog, or the services you fill in on the block itself. Each service has its own name, duration, and price.

**Is payment required when booking?**
Only if you turn on **Aanbetaling vragen** and have Mollie or Stripe connected. A price on a service is only shown; without a deposit the booking is a reservation and you invoice afterwards from the appointment.

## Related topics

- [Site Builder](/en/advanced/business-page)
- [Time Registration](/en/features/time-registration)
- [Customers](/en/features/customers)
- [Domains, Website & Inbox](/en/features/domains-website-inbox)
