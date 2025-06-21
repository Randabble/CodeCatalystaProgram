import React, { useState } from 'react';
import './Apply.css';
import { FiClock, FiBriefcase, FiGift, FiCalendar } from 'react-icons/fi';

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    grade: '',
    whyJoin: '',
    problemSolving: '',
    github: '',
    portfolio: '',
    resume: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.grade) {
      newErrors.grade = 'Please select your grade/year';
    }

    if (!formData.whyJoin.trim()) {
      newErrors.whyJoin = 'Please tell us why you want to join';
    } else if (formData.whyJoin.trim().length < 50) {
      newErrors.whyJoin = 'Please provide at least 50 characters';
    }

    if (!formData.problemSolving.trim()) {
      newErrors.problemSolving = 'Please describe a time you solved a problem creatively';
    } else if (formData.problemSolving.trim().length < 50) {
      newErrors.problemSolving = 'Please provide at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // In a real application, you would send the data to your backend here
      console.log('Form submitted:', formData);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="apply">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h1>Application Submitted!</h1>
            <p>
              Thank you for applying to CodeCatalysta! We've received your application 
              and will review it carefully.
            </p>
            <p className="response-time">
              You'll hear from us within 1–2 weeks after applying.
            </p>
            <div className="next-steps">
              <h3>What happens next?</h3>
              <ul>
                <li>We'll review your application and portfolio</li>
                <li>If selected, we'll schedule a brief interview</li>
                <li>Final decisions will be made within 2 weeks</li>
                <li>Accepted students will receive onboarding materials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
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
              <h3>Cost</h3>
              <p>Free</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon"><FiCalendar /></div>
              <h3>Deadline</h3>
              <p>March 15, 2025</p>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="application-form">
          <h2 className="section-title">Application Form</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
                placeholder="Enter your full name"
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email address"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="grade">Grade or Year in School *</label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className={errors.grade ? 'error' : ''}
              >
                <option value="">Select your grade/year</option>
                {gradeOptions.map((grade, index) => (
                  <option key={index} value={grade}>{grade}</option>
                ))}
              </select>
              {errors.grade && <span className="error-message">{errors.grade}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="whyJoin">Why do you want to join CodeCatalysta? *</label>
              <textarea
                id="whyJoin"
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                className={errors.whyJoin ? 'error' : ''}
                placeholder="Tell us about your interest in coding and what you hope to gain from this program..."
                rows="4"
              />
              {errors.whyJoin && <span className="error-message">{errors.whyJoin}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="problemSolving">Describe a time you solved a problem creatively *</label>
              <textarea
                id="problemSolving"
                name="problemSolving"
                value={formData.problemSolving}
                onChange={handleChange}
                className={errors.problemSolving ? 'error' : ''}
                placeholder="Share an example of how you approached and solved a challenging problem..."
                rows="4"
              />
              {errors.problemSolving && <span className="error-message">{errors.problemSolving}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="github">GitHub Profile (Optional)</label>
              <input
                type="url"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/yourusername"
              />
            </div>

            <div className="form-group">
              <label htmlFor="portfolio">Portfolio or Website (Optional)</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume Link (Optional)</label>
              <input
                type="url"
                id="resume"
                name="resume"
                value={formData.resume}
                onChange={handleChange}
                placeholder="Google Drive, Dropbox, or other cloud storage link"
              />
              <small className="form-help">
                Please upload your resume to Google Drive, Dropbox, or similar and share the link
              </small>
            </div>

            <div className="form-submit">
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <p className="submit-note">
                You'll hear from us within 1–2 weeks after applying.
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Apply; 