# VAT Management

Track, calculate, and manage your Value Added Tax (VAT) obligations with period locking and deadline tracking.

## Overview

The VAT page gives you a clear view of your tax position:

- **VAT collected** — Tax charged on your invoices
- **VAT deductible** — Tax paid on your business expenses
- **Net VAT** — The amount you owe (or can reclaim)

## VAT periods

VAT is organized by period (monthly or quarterly, depending on your jurisdiction):

- View VAT calculations per period
- See detailed breakdowns by VAT rate
- Track which periods have been filed

## Period locking

After filing your VAT return, lock the period to prevent accidental changes:

1. Go to the VAT page
2. Select the period you've filed
3. Click **Lock Period**

### What locking does

- Prevents editing or deleting invoices and expenses in the locked period
- Shows a warning banner on documents within locked periods
- Ensures your filed numbers remain consistent with your records

### Unlocking

If you need to make corrections after locking:

1. Go to the VAT page
2. Find the locked period
3. Click **Unlock**
4. Make your corrections
5. Re-lock when done

::: warning
Only unlock periods when you need to file a correction. Frequent unlocking defeats the purpose of the compliance safeguard.
:::

## Deadline tracking

MyCompanyDesk tracks VAT filing deadlines based on your country:

- Visual indicators for upcoming deadlines
- Warnings when a deadline is approaching
- Clear status showing which periods need attention

## Country indicator

Your VAT settings respect your company's country of registration. This affects:

- Standard and reduced VAT rates
- Filing period structure (monthly/quarterly)
- Deadline calculations
- Reverse charge applicability

### Supported countries

MyCompanyDesk includes country-specific VAT rates for 30 countries:

| Region | Countries |
|---|---|
| **EU** | Netherlands, Germany, Belgium, France, Austria, Spain, Italy, Portugal, Ireland, Luxembourg, Finland, Sweden, Denmark, Poland, Czech Republic, Greece, Hungary, Romania, Bulgaria, Croatia, Slovakia, Slovenia, Estonia, Latvia, Lithuania, Cyprus, Malta |
| **Other** | United Kingdom, United States (sales tax), Canada (GST) |

Each country has its own standard and reduced rate brackets. For example, Germany uses 0%/7%/19%, while Italy uses 0%/4%/5%/10%/22%. The correct rates are automatically applied based on your company's country setting.

## Reverse charge

For intra-EU business-to-business transactions, enable reverse charge:

1. Make sure the customer has a valid EU VAT number
2. Enable **Reverse Charge** in Company > Features
3. When creating an invoice for an EU B2B customer, select the reverse charge option
4. The invoice will show 0% VAT with the reverse charge notation

## Tips

- Lock periods immediately after filing to prevent accidental changes
- Review the VAT report in [Reports](/features/reports) for a broader view
- Make sure both your VAT number and your customers' VAT numbers are correctly entered
- Use the bookkeeper/accountant dashboard profile for a VAT-focused view
