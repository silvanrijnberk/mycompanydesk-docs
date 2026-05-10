---
title: Add customer
last_verified: 2026-05-09
chatbot:
  triggers: ["create customer", "new customer", "add customer", "add client", "new client", "klant toevoegen", "nieuwe klant", "klant aanmaken", "kunde hinzufugen", "wie fuege ich einen kunden hinzu", "neuer kunde", "ajouter client", "comment ajouter un nouveau client"]
  actions:
    - { label: "Create customer", to: "/customers/new" }
  follow_up: ["How do I create an invoice for this customer?", "Which customer fields are most important?", "How do I import customers in bulk?"]
---
Here's how to add a customer:
1. Go to Customers and open "New Customer"
2. Enter the customer or company name and contact details
3. Add the email, phone number, and address fields you want to keep on file
4. Fill in VAT number, IBAN, and payment terms if those apply
5. Save the customer

Tip: The customer form does not have a separate preferred-language field right now, so focus on the billing and payment fields the app reuses later.
