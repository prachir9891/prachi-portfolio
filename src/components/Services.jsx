import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Code, PenTool, Layout, Cloud, TrendingUp, Share2 } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    title: 'Website Development',
    desc: 'Custom, high-performance websites built for growth.',
    icon: <Monitor size={24} />,
  },
  {
    title: 'Mobile App Development',
    desc: 'Intuitive iOS & Android applications.',
    icon: <Smartphone size={24} />,
  },
  {
    title: 'Software Development',
    desc: 'Scalable enterprise software solutions.',
    icon: <Code size={24} />,
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centric designs that drive engagement.',
    icon: <PenTool size={24} />,
  },
  {
    title: 'Graphic Design',
    desc: 'Stunning visuals and brand creatives.',
    icon: <Layout size={24} />,
  },
  {
    title: 'Cloud Services',
    desc: 'Secure and scalable cloud infrastructure.',
    icon: <Cloud size={24} />,
  },
  {
    title: 'Digital Marketing',
    desc: 'Data-driven marketing to boost your ROI.',
    icon: <TrendingUp size={24} />,
  },
  {
    title: 'Social Media Management',
    desc: 'Engaging content and community building.',
    icon: <Share2 size={24} />,
  }
];

export default function Services() {
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

            return (
              <CardWrapper
                {...wrapperProps}
                className={`service-card fade-in-up ${isClickable ? 'clickable-card' : ''}`}
                style={{ animationDelay: `${i * 0.1}s`, textDecoration: 'none', color: 'inherit', display: 'block' }}
                key={i}
              >
                <div className="service-icon-wrapper">
                  {s.icon}
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
