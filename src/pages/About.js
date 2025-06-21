import React from 'react';
import './About.css';
import { FiTarget, FiZap, FiUsers, FiAward, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const programStructure = [
    {
      week: "Week 1–2",
      title: "Onboarding & Team Building",
      description: "GitHub setup, code reviews, and team collaboration fundamentals"
    },
    {
      week: "Week 3–4",
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, and React fundamentals"
    },
    {
      week: "Week 5–6",
      title: "Backend Development",
      description: "Node.js, Express, databases, and API development"
    },
    {
      week: "Week 7–8",
      title: "Final Project & Demo Day",
      description: "Group project completion and final presentations"
    }
  ];

  const values = [
    {
      icon: <FiZap />,
      title: "Learn by Doing",
      description: "We believe the best way to learn is through hands-on experience with real projects."
    },
    {
      icon: <FiUsers />,
      title: "Collaboration over Competition",
      description: "We foster a supportive environment where students help each other grow."
    },
    {
      icon: <FiTarget />,
      title: "Code for Impact",
      description: "Every project we build aims to solve real problems and make a difference."
    }
  ];

  return (
    <div className="about">
        {/* Header Section */}
        <section className="page-header">
            <h1 className="page-title">About CodeCatalysta</h1>
            <p className="page-intro">
            To empower students with real coding experience, meaningful mentorship, 
            and a chance to solve real problems.
            </p>
        </section>

      <div className="container">
        {/* How It Started Section */}
        <section className="story-section">
          <div className="story-content">
            <h2 className="section-title">How It Started</h2>
            <div className="story-card">
              <div className="story-text">
                <p>
                  CodeCatalysta was created by student developers who were tired of endless 
                  tutorials and wanted to make real-world impact. We knew that the best way 
                  to learn coding wasn't through theoretical exercises, but by building 
                  actual applications that solve real problems.
                </p>
                <p>
                  What started as a small group of passionate students has grown into a 
                  community of learners, mentors, and changemakers. We've helped hundreds 
                  of students launch their coding careers and build portfolios that stand 
                  out in college applications and job interviews.
                </p>
              </div>
 
            </div>
          </div>
        </section>

        {/* Program Structure Section */}
        <section className="structure-section">
          <h2 className="section-title">Program Structure</h2>
          <div className="structure-timeline">
            {programStructure.map((phase, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                </div>
                <div className="timeline-content">
                  <div className="timeline-week">{phase.week}</div>
                  <h3 className="timeline-title">{phase.title}</h3>
                  <p className="timeline-description">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Chen" />
              </div>
              <h3 className="member-name">Alex Chen</h3>
              <p className="member-role">Program Director</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Johnson" />
              </div>
              <h3 className="member-name">Sarah Johnson</h3>
              <p className="member-role">Lead Mentor</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://i.pravatar.cc/150?u=marcus" alt="Marcus Rodriguez" />
              </div>
              <h3 className="member-name">Anna Fresther</h3>
              <p className="member-role">Curriculum Designer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 