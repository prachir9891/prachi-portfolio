import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PenTool, Layout, Monitor, Zap, Shield, 
  Layers, Globe, ArrowRight, Image as ImageIcon, Palette, Type, Brush
} from 'lucide-react';
import { 
  SiFigma 
} from 'react-icons/si';
import './ServicePage.css';
import { projects } from '../data';

const techStack = [
  { name: 'Adobe Photoshop', icon: <ImageIcon size={24} /> },
  { name: 'Adobe Illustrator', icon: <PenTool size={24} /> },
  { name: 'Adobe InDesign', icon: <Layout size={24} /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Canva', icon: <ImageIcon size={24} /> },
  { name: 'CorelDRAW', icon: <Brush size={24} /> },
  { name: 'Procreate', icon: <Palette size={24} /> },
  { name: 'Affinity Designer', icon: <Layers size={24} /> },
];

export default function GraphicDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="webdev-page fade-in-up">
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="webdev-hero-content">
            <h1 className="webdev-title">Graphic Design Services</h1>
            <p className="webdev-subtitle">
              We create visually stunning and compelling graphic designs that capture your brand's essence. From impactful logos to complete visual identity systems and marketing materials, we bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Design Solutions We Provide</h2>
          <div className="types-grid">
            {['Brand Identity & Logos', 'Social Media Graphics', 'Marketing Materials', 'Banner & Ad Design', 'Custom Illustrations', 'Packaging Design'].map((type, i) => (
              <div key={i} className="type-card">
                <Palette className="type-icon" size={32} />
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
              <Brush className="cap-icon" size={40} />
              <h3>Visual Identity</h3>
              <p>Crafting complete brand ecosystems including logos, typography guidelines, and color palettes that resonate with your target audience.</p>
            </div>
            
            <div className="capability-card">
              <Layout className="cap-icon" size={40} />
              <h3>Print & Digital Media</h3>
              <p>Designing high-resolution print materials like brochures and business cards, as well as optimized digital assets for web and social platforms.</p>
            </div>

            <div className="capability-card">
              <Type className="cap-icon" size={40} />
              <h3>Typography & Layout</h3>
              <p>Applying expert knowledge of spatial layout and typographic hierarchy to ensure your content is both beautiful and highly readable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="webdev-section">
        <div className="container">
          <h2 className="section-title">Creative Principles & Standards</h2>
          <div className="features-list">
            <div className="feature-item">
              <ImageIcon className="feature-icon" size={28} />
              <div>
                <h4>Original Concepts</h4>
                <p>Every design starts from scratch, ensuring a unique and memorable visual footprint that stands out from the competition.</p>
              </div>
            </div>
            <div className="feature-item">
              <Layers className="feature-icon" size={28} />
              <div>
                <h4>Brand Consistency</h4>
                <p>Maintaining strict adherence to your brand guidelines across all deliverables for a unified and professional corporate image.</p>
              </div>
            </div>
            <div className="feature-item">
              <Zap className="feature-icon" size={28} />
              <div>
                <h4>Versatile Formats</h4>
                <p>Providing final assets in all necessary file formats (vector, raster, print-ready PDFs) optimized for any medium.</p>
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
          <h2 className="section-title text-center">Our Graphic Design Process</h2>
          <div className="process-timeline">
            {['Creative Briefing', 'Research & Moodboarding', 'Concept Generation', 'Refinement & Feedback', 'Final Polishing', 'Asset Delivery'].map((step, i) => (
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
          <h2>Ready to visualize your brand?</h2>
          <p>Let's create impactful designs that tell your unique story. Reach out today to discuss your graphic design needs.</p>
          <a href="/#contact" className="cta-button">
            Start Your Project <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  );
}
