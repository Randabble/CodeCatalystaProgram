import React from 'react';
import './Apply.css';
import { FiClock, FiBriefcase, FiGift, FiCalendar } from 'react-icons/fi';

const Apply = () => {
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
          <form 
            action="https://formspree.io/f/mblyaaqq" 
            method="POST" 
            className="form"
          >
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="grade">Grade or Year in School *</label>
              <select
                id="grade"
                name="grade"
                defaultValue=""
                required
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="github">GitHub Profile (Optional)</label>
              <input
                type="url"
                id="github"
                name="github"
                placeholder="https://github.com/yourusername"
              />
            </div>

            <div className="form-group">
              <label htmlFor="portfolio">Portfolio or Website (Optional)</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                placeholder="https://yourportfolio.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume Link (Optional)</label>
              <input
                type="url"
                id="resume"
                name="resume"
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
              >
                Submit Application
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