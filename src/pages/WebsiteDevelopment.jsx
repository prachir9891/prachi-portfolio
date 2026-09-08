import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor, Server, Smartphone, Zap, Shield,
  Rocket, CheckCircle, Code, Layers, Globe, ArrowRight
} from 'lucide-react';
import './ServicePage.css';
import { projects } from '../data';

export default function WebsiteDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdev-page fade-in-up">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="webdev-hero-content">
            <h1 className="webdev-title">Website Development Services</h1>
            <p className="webdev-subtitle">
              We build scalable, high-performance, and visually stunning web applications tailored to your business goals. From engaging frontend interfaces to robust backend architectures, we deliver end-to-end solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Websites */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Types of Websites We Develop</h2>
          <div className="types-grid">
            {['E-Commerce Platforms', 'Corporate Websites', 'SaaS Web Applications', 'Custom Portfolios & Blogs', 'Web Portals', 'Landing Pages'].map((type, i) => (
              <div key={i} className="type-card">
                <Globe className="type-icon" size={32} />
                <h3>{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title">Technical Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <Monitor className="cap-icon" size={40} />
              <h3>Frontend Development</h3>
              <p>Creating intuitive, dynamic, and responsive user interfaces using modern frameworks like React.js and Vue.js for exceptional user experiences.</p>
            </div>

            <div className="capability-card">
              <Server className="cap-icon" size={40} />
              <h3>Backend Development</h3>
              <p>Building secure, scalable, and resilient server-side architectures with Node.js, Express, and robust database management systems.</p>
            </div>

            <div className="capability-card">
              <Layers className="cap-icon" size={40} />
              <h3>API Integration</h3>
              <p>Seamlessly connecting third-party services, payment gateways, and external data sources via RESTful and GraphQL APIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Key Features & Standards</h2>
          <div className="features-list">
            <div className="feature-item">
              <Smartphone className="feature-icon" size={28} />
              <div>
                <h4>Responsive & Mobile-Friendly</h4>
                <p>Ensuring your website looks and functions perfectly across all devices and screen sizes.</p>
              </div>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" size={28} />
              <div>
                <h4>Performance Optimization</h4>
                <p>Lightning-fast load times, optimized assets, and efficient code to boost SEO and retention.</p>
              </div>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" size={28} />
              <div>
                <h4>Robust Security</h4>
                <p>Implementing best practices, JWT authentication, and secure data handling to protect your users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title text-center">Our Tech Stack</h2>
          <div className="tech-tags">
            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Redux', 'TypeScript', 'Next.js', 'AWS', 'Docker'].map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Our Development Process</h2>
          <div className="process-timeline">
            {['Discovery & Planning', 'UI/UX Design', 'Development & Integration', 'Testing & QA', 'Deployment & Launch', 'Maintenance & Support'].map((step, i) => (
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

      {/* Portfolio Showcase */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title">Previous Projects</h2>
          <div className="portfolio-mini-grid">
            {projects.slice(0, 3).map((project, index) => (
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

      {/* CTA */}
      <section className="webdev-cta">
        <div className="container cta-container">
          <h2>Ready to build something amazing?</h2>
          <p>Let's turn your vision into reality. Reach out today to discuss your project requirements.</p>
          <a href="/#contact" className="cta-button">
            Start Your Project <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}
