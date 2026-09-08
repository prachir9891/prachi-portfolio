import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-content fade-in-up">
          <h2 className="about-title">About Me</h2>
          <p className="about-desc">
            I'm a passionate Software Developer with a strong interest in building modern, scalable, and user-friendly web applications. I enjoy transforming ideas into high-quality digital solutions by writing clean, efficient, and maintainable code.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span className="feature-text">As a Full Stack Developer, I build end-to-end web applications that are scalable, user-friendly, and performance-driven.</span>
            </div>
            <div className="feature-item">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="feature-text">I enjoy solving complex problems and delivering reliable software solutions.</span>
            </div>
          </div>
        </div>

        <div className="about-image fade-in-up delay-2">
          <img
            src="/prachi.png"
            alt="About visualization"
            style={{ width: '100%', borderRadius: '20px' }}
          />
        </div>
      </div>
    </section>
  );
}
