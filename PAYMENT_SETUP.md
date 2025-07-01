# Payment System Setup Guide

This guide will help you set up the $5 application fee payment system using Stripe.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Your React app deployed on Netlify (or another platform that supports serverless functions)

## Step 1: Install Dependencies

Run the following command to install the new dependencies:

```bash
npm install
```

## Step 2: Set Up Stripe

1. **Create a Stripe Account**
   - Go to https://stripe.com and create an account
   - Complete the verification process

2. **Get Your API Keys**
   - In your Stripe Dashboard, go to Developers → API keys
   - Copy your **Publishable key** and **Secret key**

3. **Update the Stripe Publishable Key**
   - Open `src/pages/Apply.js`
   - Replace `'pk_test_your_publishable_key_here'` with your actual publishable key
   - For production, use your live publishable key (starts with `pk_live_`)

## Step 3: Configure Environment Variables

### For Local Development
Create a `.env` file in your project root:

```env
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

### For Netlify Deployment
1. Go to your Netlify dashboard
2. Navigate to Site settings → Environment variables
3. Add the following variables:
   - `STRIPE_SECRET_KEY` = your Stripe secret key
   - `REACT_APP_STRIPE_PUBLISHABLE_KEY` = your Stripe publishable key

## Step 4: Test the Payment System

1. **Test Mode**
   - Use Stripe's test card numbers:
     - `4242 4242 4242 4242` (Visa)
     - `4000 0000 0000 0002` (Visa - declined)
   - Use any future expiry date
   - Use any 3-digit CVC

2. **Test the Flow**
   - Fill out the payment form
   - Complete the payment
   - Verify the application form becomes enabled
   - Submit the application

## Step 5: Go Live

1. **Switch to Live Mode**
   - Replace test keys with live keys in your environment variables
   - Update the publishable key in `Apply.js`

2. **Deploy**
   - Deploy your app to Netlify
   - Test with real cards

## How It Works

1. **User Flow:**
   - User visits the Apply page
   - Payment form is displayed first
   - User enters card details and pays $5
   - Upon successful payment, application form becomes enabled
   - User completes and submits application

2. **Technical Flow:**
   - Frontend creates payment intent via API call
   - Stripe processes the payment
   - Payment success enables the form
   - Form submission includes payment confirmation

## Security Features

- ✅ PCI compliant (Stripe handles sensitive card data)
- ✅ Secure payment processing
- ✅ Environment variable protection
- ✅ Serverless function isolation

## Customization Options

### Change the Fee Amount
1. Update `amount: 500` in `PaymentForm.js` (amount in cents)
2. Update the display text in `PaymentForm.js` and `Apply.js`
3. Update the description in the payment intent

### Add Payment Analytics
- Track successful payments in your form submission
- Store payment intent IDs for reference
- Add payment metadata for reporting

### Customize Payment Form
- Modify `PaymentForm.css` for styling
- Add additional payment methods
- Customize error messages

## Troubleshooting

### Common Issues

1. **Payment Form Not Loading**
   - Check if Stripe publishable key is correct
   - Verify network connectivity
   - Check browser console for errors

2. **Payment Fails**
   - Verify Stripe secret key is set correctly
   - Check Netlify function logs
   - Ensure environment variables are set

3. **Form Not Enabling After Payment**
   - Check payment success callback
   - Verify state management
   - Check browser console for errors

### Support

- Stripe Documentation: https://stripe.com/docs
- Netlify Functions: https://docs.netlify.com/functions/overview/
- React Stripe: https://stripe.com/docs/stripe-js/react

## Revenue Tracking

To track your application fee revenue:

1. **Stripe Dashboard**
   - View payments in your Stripe dashboard
   - Export payment data for accounting
   - Set up webhooks for real-time updates

2. **Form Integration**
   - Payment intent ID is logged to console
   - Add to your form submission for tracking
   - Store in your database for reporting

## Legal Considerations

- Ensure your terms of service mention the application fee
- Consider refund policies for rejected applications
- Comply with local payment processing regulations
- Include fee disclosure in your application process 