import React, { useEffect, useContext } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import './ServicePage.css';
import { PortfolioContext } from '../context/PortfolioContext';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { portfolioData, loading } = useContext(PortfolioContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return <div className="loading-spinner">Loading...</div>;

  const service = portfolioData?.services?.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/#services" replace />;
  }

  const { internalPage } = service;
  
  if (!internalPage) {
    // Fallback if no internal page exists for some reason
    return (
      <div className="webdev-page fade-in-up" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>{service.title}</h2>
          <p>{service.desc}</p>
          <Link to="/#services" className="cta-button">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="webdev-page fade-in-up">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="webdev-hero-content">
            <h1 className="webdev-title">{internalPage.heroTitle}</h1>
            <p className="webdev-subtitle">{internalPage.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Types Section */}
      {internalPage.typesItems && internalPage.typesItems.length > 0 && (
        <section className="webdev-section">
          <div className="container">
            <h2 className="section-title">{internalPage.typesTitle}</h2>
            <div className="types-grid">
              {internalPage.typesItems.map((item, i) => {
                const IconComp = Icons[item.iconName] || Icons.Code;
                return (
                  <div key={i} className="type-card">
                    <IconComp className="type-icon" size={32} />
                    <h3>{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Technical Capabilities */}
      {internalPage.capabilitiesItems && internalPage.capabilitiesItems.length > 0 && (
        <section className="webdev-section alt-bg">
          <div className="container">
            <h2 className="section-title">{internalPage.capabilitiesTitle}</h2>
            <div className="capabilities-grid">
              {internalPage.capabilitiesItems.map((item, i) => {
                const IconComp = Icons[item.iconName] || Icons.Settings;
                return (
                  <div key={i} className="capability-card">
                    <IconComp className="cap-icon" size={40} />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Key Features */}
      {internalPage.featuresItems && internalPage.featuresItems.length > 0 && (
        <section className="webdev-section">
          <div className="container">
            <h2 className="section-title">{internalPage.featuresTitle}</h2>
            <div className="features-list">
              {internalPage.featuresItems.map((item, i) => {
                const IconComp = Icons[item.iconName] || Icons.CheckCircle;
                return (
                  <div key={i} className="feature-item">
                    <IconComp className="feature-icon" size={28} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {internalPage.techStackItems && internalPage.techStackItems.length > 0 && (
        <section className="webdev-section alt-bg">
          <div className="container">
            <h2 className="section-title text-center">{internalPage.techStackTitle}</h2>
            <div className="tech-tags">
              {internalPage.techStackItems.map((tech, i) => {
                const IconComp = tech.iconName ? Icons[tech.iconName] || null : null;
                return (
                  <div key={i} className="tech-tag-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem', background: 'var(--surface-color)', borderRadius: '50px', border: '1px solid var(--border-color)' }}>
                    <span className="tech-tag-name">{tech.name}</span>
                    {IconComp && <span className="tech-tag-icon"><IconComp size={16} /></span>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {internalPage.processSteps && internalPage.processSteps.length > 0 && (
        <section className="webdev-section">
          <div className="container">
            <h2 className="section-title text-center">{internalPage.processTitle}</h2>
            <div className="process-timeline">
              {internalPage.processSteps.map((step, i) => (
                <div key={i} className="process-step">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-content">
                    <h4>{step}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Showcase */}
      {portfolioData?.projects && portfolioData.projects.length > 0 && (
        <section className="webdev-section alt-bg">
          <div className="container">
            <h2 className="section-title">Previous Projects</h2>
            <div className="portfolio-mini-grid">
              {portfolioData.projects.slice(0, 3).map((project, index) => (
                <a href={project.links?.live || '#'} target="_blank" rel="noopener noreferrer" key={index} className="portfolio-mini-card">
                  <div className="mini-card-img" style={{ backgroundImage: `url(${project.image})` }}></div>
                  <div className="mini-card-content">
                    <h4>{project.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="webdev-cta">
        <div className="container cta-container">
          <h2>{internalPage.ctaTitle}</h2>
          <p>{internalPage.ctaSubtitle}</p>
          <a href={internalPage.ctaButtonLink || "/#contact"} className="cta-button">
            {internalPage.ctaButtonText || "Start Your Project"} <Icons.ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}
