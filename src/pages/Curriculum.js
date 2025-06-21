import React from 'react';
import './Curriculum.css';
import { FiGitMerge, FiCode, FiTerminal, FiDatabase, FiCloud, FiBox, FiClipboard, FiAward } from 'react-icons/fi';

const Curriculum = () => {
  const curriculum = [
    {
      week: 1,
      title: "Git, GitHub & Code Reviews",
      description: "Learn version control, collaborative development, and how to give and receive constructive feedback on code.",
      icon: <FiGitMerge />
    },
    {
      week: 2,
      title: "HTML, CSS & JavaScript",
      description: "Solidify your foundation in web development fundamentals with modern best practices.",
      icon: <FiCode />
    },
    {
      week: 3,
      title: "React Fundamentals",
      description: "Build interactive user interfaces with React, the most popular frontend framework.",
      icon: <FiBox />
    },
    {
      week: 4,
      title: "APIs & Data Fetching",
      description: "Connect your applications to external data sources and learn RESTful API principles.",
      icon: <FiCloud />
    },
    {
      week: 5,
      title: "Firebase & Firestore",
      description: "Build a real-time database and authentication system for your applications.",
      icon: <FiDatabase />
    },
    {
      week: 6,
      title: "Backend with Node.js & Express",
      description: "Create your own APIs and server-side logic to power your applications.",
      icon: <FiTerminal />
    },
    {
      week: 7,
      title: "Final Project Planning",
      description: "Work with your team to plan and architect your capstone project.",
      icon: <FiClipboard />
    },
    {
      week: 8,
      title: "Final Presentations & Demo Day",
      description: "Showcase your completed project to mentors, peers, and industry professionals.",
      icon: <FiAward />
    }
  ];

  const tools = [
    { name: "GitHub", description: "Version control and collaboration" },
    { name: "VS Code", description: "Code editor and development environment" },
    { name: "Figma", description: "Design and prototyping" },
    { name: "Firebase", description: "Backend as a service" },
    { name: "Netlify", description: "Deployment and hosting" },
    { name: "Vercel", description: "Frontend deployment platform" }
  ];

  return (
    <div className="curriculum">
      {/* Header Section */}
      <section className="page-header">
        <h1 className="page-title">Curriculum</h1>
        <p className="page-intro">
          Our 8-week program is designed to take you from coding basics to building 
          full-stack applications. Each week builds upon the previous, ensuring you 
          develop both technical skills and real-world project experience.
        </p>
      </section>

      <div className="container">
        {/* Timeline Section */}
        <section className="timeline-section">
          <h2 className="section-title">8-Week Journey</h2>
          <div className="timeline-grid">
            {curriculum.map((week) => (
              <div key={week.week} className="week-card">
                <div className="week-card-header">
                    <div className="week-card-icon">{week.icon}</div>
                    <div className="week-card-number">Week {week.week}</div>
                </div>
                <h3 className="week-card-title">{week.title}</h3>
                <p className="week-card-description">{week.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="tools-section">
          <h2 className="section-title">Tools We Use</h2>
          <p className="tools-intro">
            You'll learn industry-standard tools and technologies used by professional developers.
          </p>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Curriculum; 