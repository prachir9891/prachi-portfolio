import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, Server, Database, Zap, Shield, 
  Layers, Globe, ArrowRight, HardDrive, RefreshCw
} from 'lucide-react';
import { 
  SiGooglecloud, SiDocker, SiKubernetes, 
  SiTerraform, SiLinux, SiNginx
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import './ServicePage.css';
import { projects } from '../data';

const techStack = [
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Google Cloud', icon: <SiGooglecloud /> },
  { name: 'Microsoft Azure', icon: <Cloud size={24} /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'Terraform', icon: <SiTerraform /> },
  { name: 'Linux', icon: <SiLinux /> },
  { name: 'Nginx', icon: <SiNginx /> },
];

export default function CloudServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdev-page fade-in-up">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="webdev-hero-content">
            <h1 className="webdev-title">Cloud Services</h1>
            <p className="webdev-subtitle">
              We design, deploy, and manage highly secure, scalable, and resilient cloud infrastructures. From application hosting to robust disaster recovery, we empower your business to thrive in the cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Cloud Solutions We Provide</h2>
          <div className="types-grid">
            {['Cloud Architecture', 'Server Management', 'Database Hosting', 'Application Deployment', 'Disaster Recovery', 'Cloud Migration'].map((type, i) => (
              <div key={i} className="type-card">
                <Cloud className="type-icon" size={32} />
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
              <h3>Infrastructure as Code</h3>
              <p>Automating and managing cloud resources using tools like Terraform and AWS CloudFormation for reproducible, reliable deployments.</p>
            </div>
            
            <div className="capability-card">
              <HardDrive className="cap-icon" size={40} />
              <h3>Scalable Hosting</h3>
              <p>Implementing auto-scaling groups, load balancers, and container orchestration with Kubernetes to handle traffic spikes effortlessly.</p>
            </div>

            <div className="capability-card">
              <RefreshCw className="cap-icon" size={40} />
              <h3>Backup & Recovery</h3>
              <p>Designing comprehensive backup strategies and automated disaster recovery protocols to ensure absolute data persistence and minimal downtime.</p>
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
              <Shield className="feature-icon" size={28} />
              <div>
                <h4>Advanced Security</h4>
                <p>Deploying VPCs, strict IAM policies, firewalls, and end-to-end encryption to secure your infrastructure against modern threats.</p>
              </div>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" size={28} />
              <div>
                <h4>Cost Optimization</h4>
                <p>Continuously monitoring resource utilization and implementing cost-saving architectures without sacrificing performance.</p>
              </div>
            </div>
            <div className="feature-item">
              <Layers className="feature-icon" size={28} />
              <div>
                <h4>24/7 Monitoring</h4>
                <p>Integrating advanced logging and alerting systems to proactively detect and resolve issues before they impact end-users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title text-center">Our Cloud Stack</h2>
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
          <h2 className="section-title text-center">Our Cloud Development Process</h2>
          <div className="process-timeline">
            {['Assessment & Strategy', 'Architecture Design', 'Infrastructure Setup', 'Migration & Deployment', 'Security Hardening', 'Monitoring & Support'].map((step, i) => (
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
          <h2>Ready to move to the cloud?</h2>
          <p>Let's build a secure, scalable foundation for your digital assets. Reach out today to discuss your cloud infrastructure needs.</p>
          <a href="/#contact" className="cta-button">
            Start Your Project <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}
