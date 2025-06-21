import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FiCode, FiUsers, FiAward, FiMessageSquare, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "High School Senior",
      text: "CodeCatalysta gave me the confidence to pursue computer science in college. The real projects and mentorship were invaluable.",
    },
    {
      name: "Marcus Rodriguez",
      role: "College Freshman",
      text: "I learned more in 8 weeks here than in a whole semester. The hands-on approach and industry mentors made all the difference.",
    },
    {
      name: "Aisha Patel",
      role: "High School Junior",
      text: "The collaborative environment and real-world projects helped me build a portfolio that got me into my dream university.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero page-header">
        <div className="hero-container container">
          <div className="hero-content">
            <h1 className="hero-title">
              Launch Your Coding Career with CodeCatalysta
            </h1>
            <p className="hero-subtitle page-intro">
              A remote-first, project-based internship for future developers and changemakers.
            </p>
            <Link to="/apply" className="hero-cta">
              Apply Now
            </Link>
          </div>
          <div className="hero-visual">
             <div className="hero-animation">
               <div className="code-block">
                 <span className="code-line">const future = 'yours';</span>
                 <span className="code-line">if (you.apply) {'{'}</span>
                 <span className="code-line">{'  '}return success;</span>
                 <span className="code-line">{'}'}</span>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offerings">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <div className="offering-icon"><FiCode /></div>
              <h3>Real-world Coding Projects</h3>
              <p>Build actual applications that solve real problems, not just tutorial exercises.</p>
            </div>
            <div className="offering-card">
              <div className="offering-icon"><FiUsers /></div>
              <h3>Weekly Mentorship</h3>
              <p>Get guidance from industry experts who've been where you want to go.</p>
            </div>
            <div className="offering-card">
              <div className="offering-icon"><FiAward /></div>
              <h3>Career Readiness</h3>
              <p>Develop your portfolio and skills to stand out in college applications and job interviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon"><FiTrendingUp /></div>
              <div className="stat-number">3K+</div>
              <div className="stat-label">Hours of Code Written</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><FiCheckCircle /></div>
              <div className="stat-number">95%</div>
              <div className="stat-label">Intern Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><FiUsers /></div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Past Interns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Interns Say</h2>
          <div className="testimonial-container">
            <div className="testimonial-content">
              <FiMessageSquare className="testimonial-quote-icon" />
              <div className="testimonial-text">
                "{testimonials[currentTestimonial].text}"
              </div>
              <div className="testimonial-author">
                <div className="testimonial-info">
                  <div className="testimonial-name">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="testimonial-role">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 