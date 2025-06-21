import React, { useState } from 'react';
import './FAQ.css';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer: "No, but we recommend basic knowledge of HTML/CSS/JS. We welcome students at all levels and will provide additional resources for beginners."
    },
    {
      question: "Is this a paid internship?",
      answer: "Not currently, but it provides real project experience and mentorship that can be more valuable than a paid position. You'll build a portfolio and gain skills that will help you secure paid opportunities in the future."
    },
    {
      question: "Can I work with a team?",
      answer: "Yes! Collaboration is a core part of the program. You'll work on team projects, participate in code reviews, and learn how to collaborate effectively in a development environment."
    },
    {
      question: "Is it remote?",
      answer: "100% remote and async-friendly. You can participate from anywhere in the world, and we accommodate different time zones and schedules."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, all completing interns receive a digital certificate that you can add to your resume and LinkedIn profile. This certificate is recognized by many colleges and employers."
    },
    {
      question: "What if I can't commit 10 hours per week?",
      answer: "We understand that students have busy schedules. While we recommend 10 hours per week for the best experience, we can work with you to find a schedule that fits your availability."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll work on real-world projects that solve actual problems. Past projects include web applications, mobile apps, data analysis tools, and more. Projects are chosen based on current needs and student interests."
    },
    {
      question: "How many students are in each cohort?",
      answer: "We keep cohorts small (15-25 students) to ensure personalized attention and meaningful mentorship. This allows for better collaboration and more individual support."
    },
    {
      question: "What happens after the program ends?",
      answer: "You'll have a portfolio of real projects, connections with mentors and peers, and the skills to continue your coding journey. Many alumni go on to secure internships, jobs, or continue their education in computer science."
    },
    {
      question: "Can I apply if I'm not from the US?",
      answer: "Absolutely! We welcome international students. The program is conducted in English, but we have participants from all over the world."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="container">
        {/* Header Section */}
        <section className="faq-header">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="faq-intro">
            Have a question about CodeCatalysta? We've got you covered. 
            If you don't see your question here, feel free to contact us.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="question-text">{faq.question}</span>
                  <FiChevronDown className="faq-icon" />
                </button>
                <div className={`faq-answer ${openIndex === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="contact-cta">
          <div className="cta-content">
            <h2>Still have questions?</h2>
            <p>
              We're here to help! Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Contact Us
              </Link>
              <Link to="/apply" className="cta-button secondary">
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ; 