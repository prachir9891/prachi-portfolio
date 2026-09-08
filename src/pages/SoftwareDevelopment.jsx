import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Server, Database, Zap, Shield, 
  Layers, Globe, ArrowRight, Settings
} from 'lucide-react';
import { 
  SiPython, SiJavascript, SiTypescript, SiDocker, SiKubernetes, 
  SiPostgresql, SiMongodb, SiGraphql, SiRedis
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import './ServicePage.css';
import { projects } from '../data';

const techStack = [
  { name: 'Python', icon: <SiPython /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Redis', icon: <SiRedis /> },
];

export default function SoftwareDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdev-page fade-in-up">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="webdev-hero-content">
            <h1 className="webdev-title">Software Development</h1>
            <p className="webdev-subtitle">
              We engineer scalable, enterprise-grade software solutions that streamline operations and drive business growth. From custom SaaS platforms to complex legacy modernizations, we deliver robust code.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Apps */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Software Solutions We Provide</h2>
          <div className="types-grid">
            {['Enterprise ERP Systems', 'SaaS Platforms', 'CRM Dashboards', 'Workflow Automation', 'Cloud Infrastructures', 'Legacy Modernization'].map((type, i) => (
              <div key={i} className="type-card">
                <Settings className="type-icon" size={32} />
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
              <Server className="cap-icon" size={40} />
              <h3>Scalable Architecture</h3>
              <p>Designing microservices and distributed systems that handle millions of requests while ensuring maximum uptime and reliability.</p>
            </div>
            
            <div className="capability-card">
              <Database className="cap-icon" size={40} />
              <h3>Database Engineering</h3>
              <p>Optimizing complex schemas, query tuning, and managing both SQL and NoSQL databases to efficiently handle big data operations.</p>
            </div>

            <div className="capability-card">
              <Globe className="cap-icon" size={40} />
              <h3>Cloud & DevOps</h3>
              <p>Automating deployment pipelines with CI/CD, Docker, and Kubernetes on robust AWS and Azure infrastructures for agile delivery.</p>
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
              <Layers className="feature-icon" size={28} />
              <div>
                <h4>Modularity & Clean Code</h4>
                <p>Applying SOLID principles and clean architecture to ensure your software is easily maintainable and extensible over time.</p>
              </div>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" size={28} />
              <div>
                <h4>High Performance</h4>
                <p>Utilizing caching strategies, background processing, and optimized algorithms to eliminate bottlenecks in heavy computations.</p>
              </div>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" size={28} />
              <div>
                <h4>Enterprise Security</h4>
                <p>Implementing role-based access control, vulnerability scanning, and end-to-end encryption to meet compliance requirements.</p>
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
          <h2 className="section-title text-center">Our Development Process</h2>
          <div className="process-timeline">
            {['Requirements Gathering', 'System Architecture', 'Agile Development', 'Automated Testing', 'CI/CD Deployment', 'Continuous Scaling'].map((step, i) => (
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
          <h2>Ready to scale your business?</h2>
          <p>Let's build software that powers your growth. Reach out today to discuss your enterprise requirements.</p>
          <a href="/#contact" className="cta-button">
            Start Your Project <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}
