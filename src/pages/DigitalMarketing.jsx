import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, Target, BarChart, Zap, Shield, 
  Layers, Globe, ArrowRight, Search, Mail, Megaphone, Crosshair
} from 'lucide-react';
import './ServicePage.css';
import { projects } from '../data';

const techStack = [
  { name: 'Google Analytics', icon: <BarChart size={24} /> },
  { name: 'Google Ads', icon: <Target size={24} /> },
  { name: 'Meta Ads', icon: <Megaphone size={24} /> },
  { name: 'Mailchimp', icon: <Mail size={24} /> },
  { name: 'HubSpot', icon: <Layers size={24} /> },
  { name: 'SEMrush', icon: <Search size={24} /> },
  { name: 'Ahrefs', icon: <TrendingUp size={24} /> },
  { name: 'Hotjar', icon: <Crosshair size={24} /> },
];

export default function DigitalMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdev-page fade-in-up">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="webdev-hero-content">
            <h1 className="webdev-title">Digital Marketing</h1>
            <p className="webdev-subtitle">
              We engineer data-driven marketing strategies that amplify your brand, attract qualified leads, and significantly boost your ROI. From SEO to advanced paid advertising, we drive measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Marketing Channels We Master</h2>
          <div className="types-grid">
            {['Search Engine Optimization (SEO)', 'Search Engine Marketing (PPC)', 'Social Media Advertising', 'Content Marketing', 'Email Campaigns', 'Conversion Rate Optimization'].map((type, i) => (
              <div key={i} className="type-card">
                <Target className="type-icon" size={32} />
                <h3>{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title">Marketing Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <Search className="cap-icon" size={40} />
              <h3>SEO & Organic Growth</h3>
              <p>Implementing technical SEO, strategic keyword targeting, and high-quality link building to dominate search engine results pages.</p>
            </div>
            
            <div className="capability-card">
              <Megaphone className="cap-icon" size={40} />
              <h3>Paid Advertising</h3>
              <p>Managing high-converting PPC campaigns across Google, Meta, and LinkedIn with continuous A/B testing for optimal ad spend.</p>
            </div>

            <div className="capability-card">
              <BarChart className="cap-icon" size={40} />
              <h3>Data Analytics & Tracking</h3>
              <p>Deploying advanced tracking pixels, custom conversion events, and intuitive dashboards to visualize your exact marketing ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Key Principles & Standards</h2>
          <div className="features-list">
            <div className="feature-item">
              <Target className="feature-icon" size={28} />
              <div>
                <h4>Highly Targeted Audiences</h4>
                <p>We don't just chase traffic; we build custom audience cohorts to ensure your message reaches users with the highest intent to buy.</p>
              </div>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" size={28} />
              <div>
                <h4>Agile Optimization</h4>
                <p>Marketing isn't set-and-forget. We continually refine bids, creatives, and landing pages to ensure compounding returns over time.</p>
              </div>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" size={28} />
              <div>
                <h4>Transparent Reporting</h4>
                <p>Receive crystal-clear, jargon-free reports detailing exactly where your budget went and exactly how much revenue it generated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title text-center">Our Marketing Stack</h2>
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
          <h2 className="section-title text-center">Our Growth Process</h2>
          <div className="process-timeline">
            {['Market Research & Audit', 'Strategy Formulation', 'Campaign Setup', 'Creative Production', 'Launch & Monitor', 'Analyze & Optimize'].map((step, i) => (
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
          <h2 className="section-title">Successful Campaigns</h2>
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
          <h2>Ready to multiply your growth?</h2>
          <p>Let's build a digital marketing machine that reliably generates leads and sales. Reach out today.</p>
          <a href="/#contact" className="cta-button">
            Start Your Campaign <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}
