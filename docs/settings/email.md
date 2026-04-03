# Email Integration

Configure how MyCompanyDesk sends emails to your customers — from invoice delivery to payment reminders.

## Email delivery methods

MyCompanyDesk supports three ways to send emails:

### 1. Built-in email (default)

Out of the box, emails are sent through MyCompanyDesk's own email service. No configuration needed.

### 2. Gmail integration

Send emails directly from your Gmail account:

1. Go to **Settings > Communication > Email**
2. Click **Connect Gmail**
3. Authorize MyCompanyDesk to send on your behalf via Google OAuth
4. Emails now appear as sent from your Gmail address

**Benefits:**

- Emails show your Gmail address as the sender
- Sent emails appear in your Gmail Sent folder
- Better deliverability (your own domain reputation)

### 3. Outlook / Microsoft integration

Send from your Outlook or Microsoft 365 account:

1. Go to **Settings > Communication > Email**
2. Click **Connect Outlook**
3. Authorize via Microsoft OAuth
4. Emails are sent from your Outlook address

### 4. Custom SMTP

For full control, use your own SMTP server:

1. Go to **Settings > Communication > Email**
2. Enter your SMTP details:
   - **Host** — SMTP server address
   - **Port** — Server port (587 for TLS, 465 for SSL)
   - **Username** — SMTP login
   - **Password** — SMTP password
3. Click **Test Connection** to verify it works
4. Save

## Email templates

Customize the emails sent with your invoices and reminders.

### Invoice email template

The default email sent when delivering an invoice. Customize:

- **Subject line** — The email subject (supports variables like invoice number)
- **Body** — The message content
- **Language** — Set per-language templates

### Reminder email template

The email sent when following up on overdue invoices. Customize the same fields as above but with a more urgent tone.

### Preview

Before sending, you can preview any email to see exactly what your customer will receive:

- Rendered HTML with your branding
- PDF attachment preview
- Payment link inclusion

## Variables

Email templates support dynamic variables:

| Variable | Description |
|---|---|
| `{invoice_number}` | The invoice number |
| `{customer_name}` | Customer's name |
| `{amount}` | Total invoice amount |
| `{due_date}` | Payment due date |
| `{company_name}` | Your company name |
| `{payment_link}` | Link to online payment |

## Notifications

Configure what email notifications you receive:

- **Invoice paid** — Get notified when a customer pays
- **Quote request received** — Alert for new quote requests
- **Team activity** — Updates on team member actions

Notification preferences can be set in your [Profile](/account/profile).

## Tips

- Connect Gmail or Outlook for the best deliverability
- Always test your email template before sending your first invoice
- Set up language-specific templates if you serve customers in multiple languages
- Use the reminder template for professional follow-ups on overdue invoices
