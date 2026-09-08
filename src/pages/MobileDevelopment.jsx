import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, MonitorSmartphone, Code, Zap, Shield, 
  Layers, Globe, ArrowRight, AppWindow
} from 'lucide-react';
import { 
  SiIos, SiAndroid, SiReact, SiFlutter, SiSwift, 
  SiKotlin, SiFirebase, SiSqlite, SiGraphql, SiNodedotjs
} from 'react-icons/si';
import './ServicePage.css';
import { projects } from '../data';

const techStack = [
  { name: 'iOS (Swift)', icon: <SiIos /> },
  { name: 'Android (Kotlin)', icon: <SiAndroid /> },
  { name: 'React Native', icon: <SiReact /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Swift', icon: <SiSwift /> },
  { name: 'Kotlin', icon: <SiKotlin /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'SQLite', icon: <SiSqlite /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
];

export default function MobileDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdev-page fade-in-up">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="webdev-hero-content">
            <h1 className="webdev-title">Mobile App Development</h1>
            <p className="webdev-subtitle">
              We design and build intuitive, high-performance mobile applications for iOS and Android. From native experiences to cross-platform solutions, we bring your ideas to life on every device.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Apps */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Types of Apps We Develop</h2>
          <div className="types-grid">
            {['E-Commerce Apps', 'Social Networking', 'On-Demand Services', 'Health & Fitness', 'Fintech Solutions', 'Enterprise Mobility'].map((type, i) => (
              <div key={i} className="type-card">
                <AppWindow className="type-icon" size={32} />
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
              <Smartphone className="cap-icon" size={40} />
              <h3>Native Development</h3>
              <p>Building platform-specific apps using Swift for iOS and Kotlin for Android to ensure maximum performance and seamless OS integration.</p>
            </div>
            
            <div className="capability-card">
              <MonitorSmartphone className="cap-icon" size={40} />
              <h3>Cross-Platform Development</h3>
              <p>Utilizing frameworks like React Native and Flutter to deploy high-quality apps on both platforms simultaneously, reducing time-to-market.</p>
            </div>

            <div className="capability-card">
              <Layers className="cap-icon" size={40} />
              <h3>API & Backend Integration</h3>
              <p>Seamlessly connecting your mobile application to secure, scalable backend architectures and third-party services via REST and GraphQL.</p>
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
                <h4>Intuitive UI/UX</h4>
                <p>Delivering fluid, user-friendly interfaces that engage users and align with Apple's HIG and Google's Material Design guidelines.</p>
              </div>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" size={28} />
              <div>
                <h4>Performance Optimization</h4>
                <p>Optimizing battery usage, memory footprint, and network calls for a consistently smooth experience even on low-end devices.</p>
              </div>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" size={28} />
              <div>
                <h4>Data Security</h4>
                <p>Implementing biometric authentication, secure local storage, and encrypted network communication to protect user data.</p>
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
            {['Strategy & UI/UX', 'Architecture Setup', 'App Development', 'QA & Device Testing', 'App Store Submission', 'Post-Launch Support'].map((step, i) => (
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
          <h2>Ready to build your app?</h2>
          <p>Let's turn your vision into a reality. Reach out today to discuss your mobile app requirements.</p>
          <a href="/#contact" className="cta-button">
            Start Your Project <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}
