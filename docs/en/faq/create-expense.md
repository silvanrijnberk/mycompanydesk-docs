---
title: Create expense
description: "To add an expense: go to Expenses, click Add, and scan a receipt or enter the supplier, category, amount and date yourself."
last_verified: 2026-05-09
chatbot:
  triggers: ["create expense", "new expense", "add expense", "log expense", "record expense", "track expense", "uitgave toevoegen", "nieuwe uitgave", "uitgave aanmaken", "ausgabe hinzufugen", "wie erstelle ich eine ausgabe", "ajouter depense", "comment creer une depense"]
  actions:
    - { label: "Create expense", to: "/expenses/new" }
  follow_up: ["How do I upload a receipt?", "How do I categorize expenses?", "How do I mark an expense as paid?"]
---

Here's how to add an expense:
1. Go to Expenses and click "Add"
2. Have a receipt? Click "Scan a receipt" or upload a photo or PDF. MyCompanyDesk reads the supplier, amount, and date and attaches the receipt to the expense right away. Check the filled-in details afterwards
3. No receipt at hand? Enter the details yourself. Date, supplier, category, and amount are required; an expense of €0.00 cannot be saved
4. Save the expense

Need more fields, such as a due date, customer, project, or notes? Choose "Need more fields?" in the panel to open the full form. A receipt you get later is added on the expense's page with "Upload Receipt".

Reading receipts automatically uses AI scans: 3 per month on Desk, 200 on Office. Once your scans are used up, the receipt is still saved and you fill in the details yourself.
