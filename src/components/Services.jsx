import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';
import './Services.css';

export default function Services() {
  const { portfolioData } = useContext(PortfolioContext);
  const servicesData = portfolioData?.services || [];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="about-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Services</h2>
        <div className="services-grid">
          {servicesData.map((s, i) => {
            const isWebDev = s.title === 'Website Development';
            const isMobileDev = s.title === 'Mobile App Development';
            const isSoftwareDev = s.title === 'Software Development';
            const isUiUx = s.title === 'UI/UX Design';
            const isGraphicDesign = s.title === 'Graphic Design';
            const isCloudServices = s.title === 'Cloud Services';
            const isDigitalMarketing = s.title === 'Digital Marketing';
            const isSocialMedia = s.title === 'Social Media Management';
            
            const isClickable = isWebDev || isMobileDev || isSoftwareDev || isUiUx || isGraphicDesign || isCloudServices || isDigitalMarketing || isSocialMedia;
            const CardWrapper = isClickable ? Link : 'div';
            
            let path = '';
            if (isWebDev) path = '/website-development';
            if (isMobileDev) path = '/mobile-development';
            if (isSoftwareDev) path = '/software-development';
            if (isUiUx) path = '/ui-ux-design';
            if (isGraphicDesign) path = '/graphic-design';
            if (isCloudServices) path = '/cloud-services';
            if (isDigitalMarketing) path = '/digital-marketing';
            if (isSocialMedia) path = '/social-media';
            
            const wrapperProps = isClickable ? { to: path } : {};
            
            const IconComponent = Icons[s.iconName] || Icons.Monitor; // fallback icon

            return (
              <CardWrapper
                {...wrapperProps}
                className={`service-card fade-in-up ${isClickable ? 'clickable-card' : ''}`}
                style={{ animationDelay: `${i * 0.1}s`, textDecoration: 'none', color: 'inherit', display: 'block' }}
                key={i}
              >
                <div className="service-icon-wrapper">
                  <IconComponent size={24} />
                </div>
                <div className="service-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
