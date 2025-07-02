import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';
import './Apply.css';
import { FiClock, FiBriefcase, FiGift, FiCalendar, FiCheckCircle } from 'react-icons/fi';

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe('pk_test_your_publishable_key_here');

const Apply = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({});

  const gradeOptions = [
    '9th Grade',
    '10th Grade',
    '11th Grade',
    '12th Grade',
    'College Freshman',
    'College Sophomore',
    'College Junior',
    'College Senior',
    'Recent Graduate',
    'Other'
  ];

  const handlePaymentSuccess = (paymentIntent) => {
    setPaymentCompleted(true);
    setPaymentError(null);
    // You can store the payment intent ID for reference
    console.log('Payment successful:', paymentIntent.id);
  };

  const handlePaymentError = (error) => {
    setPaymentError(error);
    setPaymentCompleted(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    if (!paymentCompleted) {
      alert('Please complete the payment before submitting your application.');
      return;
    }

    // Your existing form submission logic here
    const form = event.target;
    const formData = new FormData(form);
    
    // Add payment confirmation to form data
    formData.append('paymentCompleted', 'true');
    
    // Submit to your existing endpoint
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        alert('Application submitted successfully! You will hear from us within 1-2 weeks.');
        // Reset form and payment state
        form.reset();
        setPaymentCompleted(false);
        setFormData({});
      } else {
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your application. Please try again.');
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="apply">
        {/* Header Section */}
        <section className="page-header">
          <h1 className="page-title">Ready to apply?</h1>
          <p className="page-intro">
            Take the first step towards your coding career. Complete the application below
            and join our next cohort of future developers.
          </p>
        </section>

        <div className="container">
          {/* Program Details Section */}
          <section className="program-details">
            <h2 className="section-title">Program Details</h2>
            <div className="details-grid">
              <div className="detail-card">
                <div className="detail-icon"><FiClock /></div>
                <h3>Duration</h3>
                <p>8 weeks</p>
              </div>
              <div className="detail-card">
                <div className="detail-icon"><FiBriefcase /></div>
                <h3>Commitment</h3>
                <p>~10 hours/week (remote)</p>
              </div>
              <div className="detail-card">
                <div className="detail-icon"><FiGift /></div>
                <h3>Program Cost</h3>
                <p>Free</p>
              </div>
              <div className="detail-card">
                <div className="detail-icon"><FiCalendar /></div>
                <h3>Deadline</h3>
                <p>July 4, 2025</p>
              </div>
            </div>
          </section>

          {/* Payment Section */}
          {!paymentCompleted && (
            <section className="payment-section">
              <h2 className="section-title">Application Fee</h2>
              <div className="payment-info">
                <p>
                  A one-time $5.00 application fee is required to process your application. 
                  This helps us cover administrative costs and ensures serious applicants.
                </p>
              </div>
              <PaymentForm
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
                isProcessing={isProcessing}
                setIsProcessing={setIsProcessing}
              />
            </section>
          )}

          {/* Payment Success Message */}
          {paymentCompleted && (
            <section className="payment-success">
              <div className="success-message">
                <FiCheckCircle className="success-icon" />
                <h3>Payment Successful!</h3>
                <p>Your $5.00 application fee has been processed. You can now complete your application below.</p>
              </div>
            </section>
          )}

          {/* Application Form Section */}
          <section className="application-form">
            <h2 className="section-title">Application Form</h2>
            <form 
              action="https://formspree.io/f/mblyaaqq" 
              method="POST" 
              className="form"
              onSubmit={handleFormSubmit}
            >
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  disabled={!paymentCompleted || isProcessing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  disabled={!paymentCompleted || isProcessing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="grade">Grade or Year in School *</label>
                <select
                  id="grade"
                  name="grade"
                  defaultValue=""
                  required
                  disabled={!paymentCompleted || isProcessing}
                >
                  <option value="" disabled>Select your grade/year</option>
                  {gradeOptions.map((grade, index) => (
                    <option key={index} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="whyJoin">Why do you want to join CodeCatalysta? *</label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  placeholder="Tell us about your interest in coding and what you hope to gain from this program..."
                  rows="4"
                  required
                  minLength="50"
                  disabled={!paymentCompleted || isProcessing}
                />
              </div>


              <div className="form-group">
                <label htmlFor="problemSolving">Describe a time you solved a problem creatively *</label>
                <textarea
                  id="problemSolving"
                  name="problemSolving"
                  placeholder="Share an example of how you approached and solved a challenging problem..."
                  rows="4"
                  required
                  minLength="50"
                  disabled={!paymentCompleted || isProcessing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="github">GitHub Profile (Optional)</label>
                <input
                  type="url"
                  id="github"
                  name="github"
                  placeholder="https://github.com/yourusername"
                  disabled={!paymentCompleted || isProcessing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="portfolio">Portfolio or Website (Optional)</label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  placeholder="https://yourportfolio.com"
                  disabled={!paymentCompleted || isProcessing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Resume Link (Optional)</label>
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  placeholder="Google Drive, Dropbox, or other cloud storage link"
                  disabled={!paymentCompleted || isProcessing}
                />
                <small className="form-help">
                  Please upload your resume to Google Drive, Dropbox, or similar and share the link
                </small>
              </div>

              <div className="form-submit">
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={!paymentCompleted || isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Submit Application'}
                </button>
                <p className="submit-note">
                  You'll hear from us within 1–2 weeks after applying.
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Elements>
  );
};

export default Apply; 