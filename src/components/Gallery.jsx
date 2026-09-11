import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function Gallery() {
  const { portfolioData } = useContext(PortfolioContext);
  const projects = portfolioData?.projects || [];

  return (
    <section id="portfolio" className="gallery-section">
      <div className="container">
        <div className="gallery-header fade-in-up">
          <h2 className="about-title">Selected Works</h2>
          <p className="about-desc" style={{ maxWidth: '600px' }}>
            A showcase of carefully crafted projects that highlight my expertise in web development, UI/UX, and full-stack engineering. Each project reflects my dedication to clean architecture, seamless user experiences, and delivering solutions that create real value.
          </p>
        </div>
        
        <div className="gallery-list">
          {projects.map((project, index) => (
            <div 
              key={project._id || index} 
              className={`featured-project fade-in-up delay-${(index % 4) + 1} ${index % 2 === 0 ? 'image-left' : ''}`}
            >
              <div className="featured-content">
                <h3>{project.title}</h3>
                {project.description?.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                
                {project.links?.live && (
                  <a href={project.links.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project &rarr;
                  </a>
                )}
              </div>
              
              <div className="featured-image-container">
                {project.links?.live ? (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} className="featured-image" />
                  </a>
                ) : (
                  <img src={project.image} alt={project.title} className="featured-image" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
