import React from 'react';
import './Contact.css';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container container">
        <div className="contact-left">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-description">
            Have questions about our mission or want to get involved? We'd love to hear from you!
          </p>
          <div className="contact-info-group">
            <div className="contact-info-card">
              <div className="info-card-icon"><FiMail /></div>
              <div className="info-card-content">
                <h3>Email</h3>
                <p>team@codecatalysta.com</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="info-card-icon"><FiMapPin /></div>
              <div className="info-card-content">
                <h3>Location</h3>
                <p>Remote / U.S.-based</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form 
            action="https://formspree.io/f/xeokllre"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 