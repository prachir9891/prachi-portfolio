import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function Skills() {
  const { portfolioData } = useContext(PortfolioContext);
  const skills = portfolioData?.skills;

  return (
    <section id="skills" className="about-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="about-content fade-in-up">
          <h2 className="about-title">Skills</h2>
          <p className="about-desc">
            {skills?.description || 'Skilled in modern full-stack development, cloud technologies, databases, and AI tools for building scalable and efficient applications.'}
          </p>

          <div className="about-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {skills?.categories?.map((cat, i) => (
              <div key={i} className="feature-item">
                <span dangerouslySetInnerHTML={{ __html: cat.iconSvg }} />
                <span className="feature-text"><strong>{cat.title}:</strong> {cat.items}</span>
              </div>
            )) || <p>Loading skills...</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
