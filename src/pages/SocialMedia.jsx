import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, MessageSquare, Users, Zap, Shield, 
  Layers, Globe, ArrowRight, Calendar, Heart, ThumbsUp
} from 'lucide-react';
import './ServicePage.css';
import { projects } from '../data';

const techStack = [
  { name: 'Instagram', icon: <Heart size={24} /> },
  { name: 'LinkedIn', icon: <Users size={24} /> },
  { name: 'X / Twitter', icon: <MessageSquare size={24} /> },
  { name: 'Facebook', icon: <ThumbsUp size={24} /> },
  { name: 'Hootsuite', icon: <Layers size={24} /> },
  { name: 'Buffer', icon: <Calendar size={24} /> },
  { name: 'Sprout Social', icon: <Share2 size={24} /> },
  { name: 'TikTok', icon: <Zap size={24} /> },
];

export default function SocialMedia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdev-page fade-in-up">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="webdev-hero-content">
            <h1 className="webdev-title">Social Media Management</h1>
            <p className="webdev-subtitle">
              We build engaged, passionate communities around your brand. From stunning content creation to proactive community management, we turn your social media channels into powerful growth engines.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Social Media Services We Provide</h2>
          <div className="types-grid">
            {['Social Media Strategy', 'Content Creation & Curation', 'Community Management', 'Influencer Outreach', 'Social Media Advertising', 'Brand Reputation Management'].map((type, i) => (
              <div key={i} className="type-card">
                <Share2 className="type-icon" size={32} />
                <h3>{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title">Management Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <Calendar className="cap-icon" size={40} />
              <h3>Content Scheduling</h3>
              <p>Planning and executing flawless content calendars to ensure consistent, high-quality posts go live at peak engagement hours.</p>
            </div>
            
            <div className="capability-card">
              <MessageSquare className="cap-icon" size={40} />
              <h3>Audience Engagement</h3>
              <p>Actively monitoring mentions, responding to comments, and participating in trends to build a loyal, vocal community.</p>
            </div>

            <div className="capability-card">
              <Users className="cap-icon" size={40} />
              <h3>Influencer Collaboration</h3>
              <p>Identifying, reaching out to, and managing relationships with key influencers to authentically expand your brand's reach.</p>
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
              <Heart className="feature-icon" size={28} />
              <div>
                <h4>Authentic Brand Voice</h4>
                <p>We take the time to deeply understand your brand personality so that every post, tweet, and reply sounds exactly like you.</p>
              </div>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" size={28} />
              <div>
                <h4>Trend Capitalization</h4>
                <p>Our team stays glued to the timeline. When a relevant viral trend emerges, we ensure your brand reacts swiftly and creatively.</p>
              </div>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" size={28} />
              <div>
                <h4>Crisis Management</h4>
                <p>Implementing proactive listening tools to detect negative sentiment early and handle PR situations with grace and speed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="webdev-section alt-bg">
        <div className="container">
          <h2 className="section-title text-center">Our Social Stack</h2>
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
          <h2 className="section-title text-center">Our Management Process</h2>
          <div className="process-timeline">
            {['Brand Audit', 'Content Strategy', 'Asset Creation', 'Approval & Scheduling', 'Community Engagement', 'Analytics & Reporting'].map((step, i) => (
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
          <h2 className="section-title">Previous Campaigns</h2>
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
          <h2>Ready to grow your audience?</h2>
          <p>Let's build a vibrant community that actively advocates for your brand. Reach out today.</p>
          <a href="/#contact" className="cta-button">
            Start Your Campaign <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}
