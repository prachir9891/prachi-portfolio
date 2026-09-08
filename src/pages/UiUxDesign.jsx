import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PenTool, Layout, Monitor, Zap, Shield, 
  Layers, Globe, ArrowRight, Eye, MousePointer
} from 'lucide-react';
import { 
  SiFigma, SiSketch, SiFramer, 
  SiMiro, SiWebflow, SiTailwindcss, SiNotion
} from 'react-icons/si';
import './ServicePage.css';
import { projects } from '../data';

const techStack = [
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Adobe XD', icon: <Layout size={24} /> },
  { name: 'Sketch', icon: <SiSketch /> },
  { name: 'Framer', icon: <SiFramer /> },
  { name: 'InVision', icon: <Eye size={24} /> },
  { name: 'Miro', icon: <SiMiro /> },
  { name: 'Webflow', icon: <SiWebflow /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Adobe Illustrator', icon: <PenTool size={24} /> },
  { name: 'Notion', icon: <SiNotion /> },
];

export default function UiUxDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdev-page fade-in-up">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="webdev-hero-content">
            <h1 className="webdev-title">UI/UX Development & Design</h1>
            <p className="webdev-subtitle">
              We craft intuitive, user-centric interfaces that engage your audience and elevate your brand. From deep user research to pixel-perfect visual design and front-end development, we ensure every interaction is meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Design Services We Provide</h2>
          <div className="types-grid">
            {['Web Application UI', 'Mobile App Interfaces', 'Dashboard & SaaS UX', 'E-Commerce Journeys', 'Brand Identity Systems', 'Prototyping & Wireframing'].map((type, i) => (
              <div key={i} className="type-card">
                <PenTool className="type-icon" size={32} />
                <h3>{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title">Design Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <Eye className="cap-icon" size={40} />
              <h3>User Research & Strategy</h3>
              <p>Conducting in-depth audience research, usability testing, and creating user personas to build a solid foundation for the product vision.</p>
            </div>
            
            <div className="capability-card">
              <Layout className="cap-icon" size={40} />
              <h3>Wireframing & Prototyping</h3>
              <p>Mapping out the user journey through low-fidelity wireframes and building high-fidelity interactive prototypes to validate user flows early.</p>
            </div>

            <div className="capability-card">
              <Monitor className="cap-icon" size={40} />
              <h3>Visual & Responsive Design</h3>
              <p>Creating stunning, responsive interfaces with robust design systems, precise typography, and engaging micro-interactions for any device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Design Principles & Standards</h2>
          <div className="features-list">
            <div className="feature-item">
              <MousePointer className="feature-icon" size={28} />
              <div>
                <h4>User-Centric Approach</h4>
                <p>Every design decision is made with the end-user in mind, prioritizing accessibility, seamless navigation, and frictionless user flows.</p>
              </div>
            </div>
            <div className="feature-item">
              <Layers className="feature-icon" size={28} />
              <div>
                <h4>Design Systems</h4>
                <p>Building comprehensive, scalable design systems and component libraries to ensure absolute consistency across all your digital platforms.</p>
              </div>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" size={28} />
              <div>
                <h4>Developer Handoff</h4>
                <p>Providing perfectly structured files, optimized assets, and clear CSS/design documentation to ensure a seamless transition to development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title text-center">Our Design Tools</h2>
          <div className="tech-tags">
            {techStack.map((tech, i) => (
              <div key={i} className="tech-tag-container">
                <span className="tech-tag-name">{tech.name}</span>
                <span className="tech-tag-icon">{tech.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title text-center">Our UI/UX Design Process</h2>
          <div className="process-timeline">
            {['Discovery & Research', 'Information Architecture', 'Wireframing', 'Visual Design (UI)', 'Interactive Prototyping', 'Usability Testing & Handoff'].map((step, i) => (
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
          <h2>Ready to elevate your experience?</h2>
          <p>Let's design something your users will love. Reach out today to discuss your UI/UX needs.</p>
          <a href="/#contact" className="cta-button">
            Start Your Project <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}
