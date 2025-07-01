import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FiCreditCard, FiLock, FiCheck } from 'react-icons/fi';
import './PaymentForm.css';

const PaymentForm = ({ onPaymentSuccess, onPaymentError, isProcessing, setIsProcessing }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setIsProcessing(true);
    setError(null);

    try {
      // Create payment intent on your backend
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 500, // $5.00 in cents
          currency: 'usd',
          description: 'CodeCatalysta Program Application Fee'
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm the payment with Stripe
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Application Fee',
          },
        },
      });

      if (stripeError) {
        setError(stripeError.message);
        onPaymentError(stripeError.message);
      } else if (paymentIntent.status === 'succeeded') {
        onPaymentSuccess(paymentIntent);
      }
    } catch (err) {
      setError('Payment failed. Please try again.');
      onPaymentError('Payment failed. Please try again.');
    } finally {
      setProcessing(false);
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <div className="payment-form">
      <div className="payment-header">
        <FiCreditCard className="payment-icon" />
        <h3>Application Fee</h3>
        <p className="payment-amount">$5.00</p>
      </div>
      
      <form onSubmit={handleSubmit} className="stripe-form">
        <div className="card-element-container">
          <label htmlFor="card-element">Credit or debit card</label>
          <CardElement
            id="card-element"
            options={cardElementOptions}
            className="card-element"
          />
        </div>
        
        {error && (
          <div className="payment-error">
            <p>{error}</p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={!stripe || processing}
          className="payment-button"
        >
          {processing ? (
            <span>Processing...</span>
          ) : (
            <span>
              <FiLock className="lock-icon" />
              Pay $5.00 Application Fee
            </span>
          )}
        </button>
        
        <div className="payment-security">
          <FiCheck className="security-icon" />
          <p>Your payment is secure and encrypted</p>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm; 